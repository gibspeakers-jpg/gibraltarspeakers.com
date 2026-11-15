# AGENTS.md — Gibraltar Speakers Toastmasters Website

Canonical brief. Update when decisions change.

## Overview

Conversion-focused static marketing site for **Gibraltar Speakers Toastmasters Club** (#7961326).

**Primary CTAs:** email `info@gibraltarspeakers.com` and WhatsApp community invite.
**Hosting:** Unraid Docker (nginx :8080) + Cloudflare Tunnel → `www.gibraltarspeakers.com`.

## Stack

Astro + Tailwind. Content SSOT: `src/data/site.ts`. Docker multi-stage → nginx.

## Locked meeting facts

- Every Monday 19:00 · Kings Bastion Leisure Centre, Line Wall Road, Room 2
- Holiday break: last session 14 Dec → return 11 Jan
- Open House focus when active (see `openHouse` in `site.ts`)
- Pricing: less than £12/month; £80 first 6 months
- Socials: Facebook + LinkedIn only (no Instagram / no Find-a-Club)
- British English; brand colours from club logo (dark blue, maroon, gold)

## Non-goals v1

Blog, member portal, CMS, analytics, inventing brand colours beyond the logo palette.
