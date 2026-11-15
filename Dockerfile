# Multi-stage build: Astro static site → nginx for Unraid / Cloudflare Tunnel.
FROM node:20-bookworm-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
ARG PUBLIC_SITE_URL=https://www.gibraltarspeakers.com
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL
RUN npm run build

FROM nginx:1.27-alpine AS runtime
# Replace default server config; listen on 8080 for Unraid / tunnel.
COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:8080/healthz | grep -q ok || exit 1

CMD ["nginx", "-g", "daemon off;"]
