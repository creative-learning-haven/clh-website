# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.
``

Project summary
- Stack: Astro (static site + Islands), TypeScript support via astro/tsconfigs, vanilla CSS
- Hosting model: Static site with Cloudflare Pages Functions under functions/api for serverless endpoints

Commands
- Install deps
  - npm ci
- Local dev server
  - npm run dev
- Build
  - npm run build
- Preview production build locally
  - npm run preview
- Linting
  - No linter configured
- Tests
  - No tests configured

Architecture overview
- Routing and pages (src/pages)
  - Astro uses file-based routing; each .astro file in src/pages becomes a route.
  - Example: src/pages/index.astro is the home page and demonstrates component composition, inline scripts, and scoped styles.
- Layouts (src/layouts)
  - src/layouts/Layout.astro defines the global shell: <head> tags, favicon, global stylesheet import, fixed NavBar, Footer, and SocialFloat, with a <slot /> for page content.
- Components (src/components)
  - NavBar.astro renders navigation and a mobile menu, driven by data from src/data/site.js and currentPath passed from the layout.
  - ActivitiesCarousel.astro is a client-side, DOM-driven carousel (no external lib) that adjusts visible items responsively and supports wrap-around navigation.
- Global styles (src/styles/global.css)
  - Defines font-face declarations and a shared design system via CSS variables (brand colors, overlays, typography). Imported once in the Layout to apply site-wide.
- Centralized site data (src/data/site.js)
  - Exports siteData and named exports (company, navigation, social, activities). Pages and components import from this single source of truth for nav links, social URLs, and activity content (including image imports resolved by Astro’s asset pipeline).
- Serverless/API (functions/api)
  - Cloudflare Pages Functions handle lightweight server logic under /api/*.
    - POST /api/subscribe (functions/api/subscribe.js)
      - Accepts form-encoded email, validates it, forwards to a Google Apps Script Web App using an environment variable, then redirects back to / with query params.
      - Required env var (Pages project settings): GOOGLE_APPS_SCRIPT_URL
      - On success, redirects to /?subscribed=true&email=...; the index page reads these params and shows a toast.
    - GET /api/subscribers (functions/api/subscribers.js)
      - Placeholder; intended for future storage-backed listing (e.g., Cloudflare KV). Currently returns an empty list structure.
- Assets
  - public/ contains static assets (favicons, fonts). Files here are served verbatim at the site root.
  - src/assets/ contains images referenced from Astro components/pages; Astro optimizes and fingerprints these during build.
- Configuration
  - package.json: scripts for dev/build/preview, dependency on astro.
  - astro.config.mjs: default config via defineConfig({}).
  - tsconfig.json: extends astro/tsconfigs/strict for stronger type checking in scripts/components.

Key workflows and data flow
- Newsletter subscription UX
  - Form on the home page posts to /api/subscribe.
  - The function forwards the email to Apps Script (using GOOGLE_APPS_SCRIPT_URL) and then 302-redirects to / with subscribed=true & email=... in the query string.
  - index.astro contains a DOMContentLoaded script that reads those params to render and auto-dismiss a success toast, interpolating the email into the message.

Environment and deployment notes
- Local development does not require GOOGLE_APPS_SCRIPT_URL unless you intend to exercise the subscribe endpoint end-to-end. Without it, the function will return a config error; page browsing still works.
- In Cloudflare Pages, set GOOGLE_APPS_SCRIPT_URL in project settings to enable the subscription flow in production.

Editor and tooling
- .vscode/ contains workspace settings; no project-specific lint/test integrations are defined.
