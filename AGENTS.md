# AGENTS.md — Gibraltar Speakers Toastmasters Website

Canonical brief for contributors. Update when decisions change.

## 1. Project overview

**Goal:** Fast, static, SEO-optimised marketing site for **Gibraltar Speakers Toastmasters Club**. Single purpose: turn visitors into first-time meeting guests.

**Audience:** Adults in Gibraltar seeking public-speaking practice, leadership development, or a welcoming community.

**Primary conversion:** Email **GibSpeakers@gmail.com** to arrange a visit. Secondary: LinkedIn.

**Hosting:** Unraid Docker (nginx) + Cloudflare Tunnel → `www.gibraltarspeakers.com`.

**Non-goals for v1:** blog, member portal, ticketing, CMS, analytics, WhatsApp (until a club number is confirmed).

## 2. Tech stack & deploy

- Astro + TypeScript + Tailwind
- Content SSOT: `src/data/site.ts`
- Docker multi-stage → nginx on port **8080**
- `PUBLIC_SITE_URL` / `siteUrl` = `https://www.gibraltarspeakers.com`
- Relative asset paths only — required for Cloudflare Tunnel

## 3. Information architecture

Same section order as the Marbella Achievers clone: Hero → WhyJoin → WhatHappens → Pricing → About → Meetings → HowToJoin → FAQ → Contact → Footer.

## 4. Content notes (provisional)

- Club #7961326 · District 107 · Division E · Area 1 · chartered Aug 2022
- Cadence: 2nd & 4th Monday ~18:30 · Kings Bastion Leisure Centre (confirm before publishing changes)
- Toastmasters.org directory may 404 while revitalising — do not make it the primary CTA until live
- British English
- Toastmasters brand colours (maroon / cyan / happy yellow)

## 5. Design

- Keep Marbella visual system (TM colours, Montserrat + Source Sans 3 via fonts.bunny.net)
- Mobile-first; WCAG AA; Lighthouse mobile ≥ 95 where practical
- Replace placeholder Rock graphic / logo when club photos and logo are approved

## 6. For future agents

- Edit `site.ts` first for any meeting, fee, or link change
- Never hardcode contact details in components
- Rebuild the Docker image after content changes for Unraid
