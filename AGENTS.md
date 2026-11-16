# AGENTS.md — Gibraltar Speakers Toastmasters Website

Canonical brief. Update when decisions change.

## Overview

Conversion-focused static marketing site for **Gibraltar Speakers Toastmasters Club** (#7961326).

**Primary CTAs:** email `info@gibraltarspeakers.com` and WhatsApp community invite.
**Hosting:** Unraid Docker (nginx :8080) + Cloudflare Tunnel → `www.gibraltarspeakers.com`.

## Stack

Astro + Tailwind. Content SSOT: `src/data/site.ts`. Docker multi-stage → nginx.

## Locked meeting facts

- Every Monday 19:00 · Kings Bastion Leisure Centre, Line Wall Road (no room number; WhatsApp for latest info)
- Holiday break: last session 14 Dec → return 11 Jan
- Open House marketing auto-hides from 17 Nov 2026 Europe/Gibraltar (`showOpenHouse` in `site.ts`)
- Site-facing copy uses hyphen-minus `-`, not em dashes
- Pricing: less than £12/month; £80 first 6 months
- Socials: Facebook + LinkedIn only (no Instagram / no Find-a-Club)
- British English; brand colours from Toastmasters palette (dark blue, maroon, gold)
- Primary brand mark: official Toastmasters International logo (`toastmasters-international.png`)

## Non-goals v1

Blog, member portal, CMS, analytics, inventing brand colours beyond the logo palette.
