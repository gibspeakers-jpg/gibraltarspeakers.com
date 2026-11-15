# Gibraltar Speakers Toastmasters

Static marketing site for **Gibraltar Speakers Toastmasters Club** (club #7961326), hosted at [www.gibraltarspeakers.com](https://www.gibraltarspeakers.com).

Built with [Astro](https://astro.build/) + Tailwind. Adapted from the [Marbella Achievers](https://github.com/marbellaachievers/marbellaachievers.github.io) site (Apache-2.0).

**Repo:** https://github.com/gibspeakers-jpg/gibraltarspeakers.com  
**Production target:** Unraid Docker container + Cloudflare Tunnel (not GitHub Pages).

## Develop

```bash
npm install
npm run dev          # http://localhost:4321 (LAN-reachable via --host)
```

## Build

```bash
npm run build
npm run preview
```

## Unraid + Cloudflare Tunnel

```bash
docker compose up -d --build
# Site: http://HOST:1212
# Health: http://HOST:1212/healthz
```

Point the Cloudflare Tunnel public hostname `www.gibraltarspeakers.com` at `http://gibraltar-speakers:8080` (or the published host port). Full notes: [deploy/unraid-cloudflare.md](./deploy/unraid-cloudflare.md).

## Project structure

- `src/data/site.ts` — single source of truth for links, meeting details, pricing, FAQ, nav
- `src/components/` — one Astro component per section
- `src/layouts/Base.astro` — shared `<head>`, JSON-LD, nav, footer
- `docker/` + `Dockerfile` + `docker-compose.yml` — nginx static serve on port 8080
- [AGENTS.md](./AGENTS.md) — design and content brief
- [NOTICE](./NOTICE) — Apache-2.0 attribution to Marbella Achievers

## Licence

Apache-2.0. See `LICENSE` and `NOTICE`.
