import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// Public URL behind Cloudflare Tunnel / Unraid.
// Override at build time with PUBLIC_SITE_URL if needed.
const site = process.env.PUBLIC_SITE_URL || "https://www.gibraltarspeakers.com";

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "ignore",
  compressHTML: true,
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  build: {
    assets: "_astro",
    inlineStylesheets: "auto",
  },
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },
  server: {
    host: true,
    port: 4321,
  },
});
