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
curl -sS http://127.0.0.1:1212/healthz   # → ok
curl -sSI http://127.0.0.1:1212/ | head  # → 200, text/html
```

## 2. Cloudflare Tunnel

In Zero Trust → Networks → Tunnels:

1. Create (or reuse) a tunnel connected to your Unraid box.
2. Add a public hostname:
   - **Hostname:** `www.gibraltarspeakers.com`
   - **Service:** `http://gibraltar-speakers:8080` if cloudflared shares the `gibraltar-speakers-web` Docker network
   - Or `http://HOST_IP:1212` if the tunnel runs outside that network
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

Pull latest `main`, then force a clean image rebuild (Docker layer cache can otherwise keep an old Astro `dist/`):

```bash
cd /path/to/gibraltarspeakers.com
git fetch origin && git checkout main && git pull --ff-only origin main
git rev-parse --short HEAD   # expect baad1b0 or newer
docker compose build --no-cache
docker compose up -d --force-recreate
```

**Verify the container itself** (bypass Cloudflare) before checking the public URL:

```bash
curl -sS http://127.0.0.1:1212/ | grep -o 'name="site-version" content="[^"]*"'
# expect: name="site-version" content="1.0.4" (or newer)

curl -sS http://127.0.0.1:1212/ | grep -E 'Marbella|Room 2|90 minutes' || echo 'old strings gone'
curl -sS http://127.0.0.1:1212/ | grep -o 'About an hour' | head -1
```

If localhost looks correct but `www.gibraltarspeakers.com` does not, the tunnel is pointing at another container/port, or purge Cloudflare cache for `/`.

## 5. Why this works with Cloudflare Tunnel

- Relative asset URLs — no hardcoded Pages origins in HTML
- Canonical / OG / sitemap use `www.gibraltarspeakers.com`
- nginx on **8080** with `/healthz` for Unraid / cloudflared health checks
