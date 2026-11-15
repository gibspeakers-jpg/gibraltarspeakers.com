# Deploy on Unraid + Cloudflare Tunnel

This site is a static Astro build served by nginx on port **8080**. It is designed to sit behind a Cloudflare Tunnel (or Unraid Cloudflare Tunnel plugin) without GitHub Pages.

**Canonical URL:** `https://www.gibraltarspeakers.com` (used in sitemap, OG, and `<link rel="canonical">`).

## 1. Build and run the container

On the Unraid host (or any Docker host):

```bash
cd /path/to/gibraltarspeakers.com
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
   - Or `http://HOST_IP:8080` if the tunnel runs outside that network
3. TLS terminates at Cloudflare. The container speaks plain HTTP on 8080.

## 3. DNS — www vs apex

DNS is on Cloudflare. Prefer **www as canonical** (already baked into the build).

**Option A — www primary (recommended)**

- Tunnel public hostname: `www.gibraltarspeakers.com` → `http://…:8080`
- Cloudflare DNS: `www` proxied to the tunnel
- Apex `gibraltarspeakers.com`: either a second tunnel hostname to the same service **plus** a Redirect Rule apex → `https://www.gibraltarspeakers.com`, or Cloudflare “Redirect traffic from root to www”

**Option B — apex primary**

- Tunnel hostname: `gibraltarspeakers.com` → same service
- Redirect `www` → apex
- Rebuild with `PUBLIC_SITE_URL=https://gibraltarspeakers.com` and update `siteUrl` in `src/data/site.ts` so canonical/OG match

Until that choice is locked, keep Option A and the current `www` canonical.

## 4. Rebuild after content edits

```bash
docker compose up -d --build
```

## 5. Why this works with Cloudflare Tunnel

- Relative asset URLs — no hardcoded Pages origins in HTML
- Canonical / OG / sitemap use `www.gibraltarspeakers.com`
- nginx on **8080** with `/healthz` for Unraid / cloudflared health checks
