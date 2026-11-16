# Gibraltar Speakers — Unraid redeploy (copy-paste)

Use this whenever the site looks wrong or after new commits land on GitHub.

**Repo:** https://github.com/gibspeakers-jpg/gibraltarspeakers.com  
**Folder on Tower:** `/mnt/user/appdata/gibraltarspeakers.com`  
**Local URL:** http://127.0.0.1:1212  
**Public URL:** https://www.gibraltarspeakers.com

---

## Full redo (recommended)

Open the Unraid web terminal and run **everything** below, in order.

### 1. Go to the site folder

```bash
cd /mnt/user/appdata/gibraltarspeakers.com
```

### 2. Confirm the GitHub remote

```bash
git remote -v
```

You want:

```text
origin  https://github.com/gibspeakers-jpg/gibraltarspeakers.com (fetch)
origin  https://github.com/gibspeakers-jpg/gibraltarspeakers.com (push)
```

### 3. Pull the latest `main` (do not skip this)

Your Tower copy got stuck on an old commit before. Force it to match GitHub:

```bash
git fetch origin
git checkout main
git reset --hard origin/main
git log --oneline -5
```

**Check:** the top commit must include recent work (logo / duration / no Marbella).  
If the top line is still `8382f6e`, fetch failed — fix remote/credentials and stop here.

### 4. Confirm the source on disk is new

```bash
grep durationLabel src/data/site.ts
grep site-version src/layouts/Base.astro
head -5 package.json
```

**Expect:**

- `About an hour`
- a `site-version` meta line
- `"version": "1.0.5"` (or newer)

### 5. Tear down the old container and image

```bash
docker compose down
docker image rm -f gibraltar-speakers:local || true
```

### 6. Rebuild from scratch (no Docker cache)

```bash
docker compose build --no-cache --pull
docker compose up -d --force-recreate
```

Wait until it finishes with no errors.

### 7. Verify on the Unraid box (bypass Cloudflare)

```bash
curl -sS http://127.0.0.1:1212/healthz
# expect: ok

curl -sS http://127.0.0.1:1212/ | grep -o 'name="site-version" content="[^"]*"'
# expect: content="1.0.5" (or newer)

curl -sS http://127.0.0.1:1212/ | grep -E 'Marbella|Room 2|90 minutes' || echo 'old strings gone'
curl -sS http://127.0.0.1:1212/ | grep -o 'About an hour' | head -1
```

**Also check inside the container** (this is the real proof):

```bash
docker exec gibraltar-speakers grep -o 'name="site-version" content="[^"]*"' /usr/share/nginx/html/index.html
```

### 8. Check the public site

Open https://www.gibraltarspeakers.com in a private/incognito window.

If localhost is correct but www is wrong:

- Tunnel is pointing at the wrong host/port, or
- Purge Cloudflare cache for `/` (Caching → Configuration → Purge Everything, or purge that URL)

Tunnel should target:

- `http://gibraltar-speakers:8080` (same Docker network as the site), **or**
- `http://HOST_IP:1212` (if cloudflared runs elsewhere)

---

## Short redo (only after you know git is already up to date)

```bash
cd /mnt/user/appdata/gibraltarspeakers.com
git fetch origin && git reset --hard origin/main
docker compose down
docker image rm -f gibraltar-speakers:local || true
docker compose build --no-cache --pull
docker compose up -d --force-recreate
curl -sS http://127.0.0.1:1212/ | grep -o 'name="site-version" content="[^"]*"'
```

---

## First-time setup (if the folder does not exist yet)

```bash
cd /mnt/user/appdata
git clone https://github.com/gibspeakers-jpg/gibraltarspeakers.com.git
cd gibraltarspeakers.com
docker compose up -d --build
curl -sS http://127.0.0.1:1212/healthz
```

Then point the Cloudflare Tunnel hostname `www.gibraltarspeakers.com` at the container as above.

---

## What usually goes wrong

| Symptom | Cause | Fix |
| --- | --- | --- |
| `git log` stuck at `8382f6e` | Never pulled latest `main` | `git fetch` + `git reset --hard origin/main` |
| No `site-version` in HTML | Old image still running | `build --no-cache` + `up -d --force-recreate` |
| Localhost good, www bad | Tunnel / Cloudflare cache | Fix tunnel target or purge CF cache |
| Open House still visible | Expected until **17 Nov 2026** (Europe/Gibraltar) | Not a deploy bug |

---

## Useful commands

```bash
# What’s running?
docker ps | grep gibraltar

# Container logs
docker logs gibraltar-speakers --tail 50

# Which git commit is this folder on?
git rev-parse --short HEAD
```
