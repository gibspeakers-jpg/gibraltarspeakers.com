# Deploy on Unraid + Cloudflare Tunnel

This site is a static Astro build served by nginx on port **8080**. It is designed to sit behind a Cloudflare Tunnel (or Unraid Cloudflare Tunnel plugin) without GitHub Pages.

## 1. Build and run the container

On the Unraid host (or any Docker host):

```bash
cd /path/to/gibraltar-speakers
docker compose up -d --build
```

Check locally:

```bash
curl -sS http://127.0.0.1:8080/healthz   # → ok
curl -sSI http://127.0.0.1:8080/ | head  # → 200, text/html
```

## 2. Cloudflare Tunnel

In Zero Trust → Networks → Tunnels:

1. Create (or reuse) a tunnel connected to your Unraid box.
2. Add a public hostname:
   - **Hostname:** `www.gibraltarspeakers.com`
   - **Service:** `http://gibraltar-speakers:8080` if cloudflared shares the `gibraltar-speakers-web` Docker network
   - Or `http://172.x.x.x:8080` / `http://host.docker.internal:8080` if the tunnel runs outside that network
3. Optionally add `gibraltarspeakers.com` → same service, then set a Cloudflare redirect rule apex → `www`.

TLS is terminated by Cloudflare. The container speaks plain HTTP on 8080 — do **not** put the tunnel on HTTPS unless you add certs inside the container.

## 3. DNS

In Cloudflare DNS for `gibraltarspeakers.com`:

- `www` → CNAME to your tunnel (or proxied record created by the tunnel UI)
- Apex → CNAME/flatten to tunnel, or redirect to www

Keep the orange cloud (proxied) on.

## 4. Rebuild after content edits

```bash
docker compose up -d --build
```

`PUBLIC_SITE_URL` defaults to `https://www.gibraltarspeakers.com`. Override in `.env` if you temporarily use another hostname.

## 5. Why this works with Cloudflare Tunnel

- Relative asset URLs (Astro `_astro/` + `/…` public files) — no hardcoded `github.io` origins in the HTML.
- Canonical / OG / sitemap use `PUBLIC_SITE_URL` / `siteUrl` = `https://www.gibraltarspeakers.com`.
- nginx listens on **8080** (non-privileged) and exposes `/healthz` for tunnel/Unraid health checks.
- No dependency on GitHub Pages Actions for production serving.
