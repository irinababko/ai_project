# Proximity Ranking — Static Site

A plain-HTML + SCSS marketing site for **Proximity Ranking**. No React, no JSX, no Vite.
Compiles `scss/main.scss` → `css/main.css` with the official **Dart Sass** CLI, then deploys as flat static assets.

---

## Project structure

```
.
├── index.html          ← single static page (semantic HTML, BEM)
├── scss/
│   └── main.scss       ← source styles (tokens + BEM blocks)
├── css/
│   └── main.css        ← compiled output (committed for zero-build deploy)
├── assets/
│   ├── images/         ← orb, testimonial avatar, noise textures
│   ├── icons/          ← decorative SVGs
│   └── logos/          ← Proximity mark, AI-platform glyphs
├── package.json        ← Sass build scripts
├── vercel.json         ← Vercel config (build cmd, cache headers)
└── README.md
```

---

## Quick start

Install once:

```bash
npm install
```

Run a local SCSS watcher (recompiles on save). Open `index.html` directly in a browser, or use a tiny static server:

```bash
npm run dev          # watches scss/ → css/main.css
npm start            # serves the folder at http://localhost:3000
```

Build production CSS (compressed, no source map):

```bash
npm run build
```

---

## Deploying on Vercel

This repo is a **static site** — no SSR, no edge functions.

### 1. From the dashboard

- Click **New Project → Import** your Git repo.
- Vercel autodetects "Other"; the included `vercel.json` is enough — leave the framework preset as **Other / None**.
- Build command: `npm run build` (already set in `vercel.json`).
- Output directory: `.` (already set in `vercel.json`).
- Click **Deploy**.

### 2. From the CLI

```bash
npm i -g vercel
vercel              # preview deploy
vercel --prod       # production deploy
```

### Notes

- `css/main.css` is committed so the site works even if the build step is disabled.
- `vercel.json` adds long-cache headers for `/css/*` and `/assets/*`. `index.html` is served fresh.
- `cleanUrls: true` is on, so `/about` would resolve to `/about.html` if you add more pages later.

---

## Conventions

- **Semantic HTML.** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<details>`/`<summary>` for the FAQ.
- **BEM class names.** `.block`, `.block__element`, `.block--modifier`.
  Examples in this codebase: `.nav__bar`, `.btn--primary`, `.faq__row[open]`, `.orbit__chip--ne`.
- **No frameworks.** A small inline `<script>` powers the testimonial carousel as progressive enhancement.

---

## Updating styles

1. Edit `scss/main.scss`.
2. `npm run build` to regenerate `css/main.css`.
3. Commit both files.

The SCSS file is single-file by design (small surface area, easy to deploy). If you grow the site, split into `scss/_tokens.scss`, `scss/_layout.scss`, `scss/blocks/_btn.scss`, etc., and `@use` them from `main.scss`.

---

## Browser support

Modern evergreen browsers. Uses CSS custom properties, `backdrop-filter`, `clamp()`, `mask-image`, and `<details>` — all supported in current Chrome / Safari / Firefox / Edge.

---

## See also

- [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) — full Proximity Ranking design-system reference: brand context, content fundamentals, visual foundations, iconography rules, asset index.
- [`SKILL.md`](./SKILL.md) — Agent-Skill metadata (compatible with Claude Code) so this design system can be loaded as a reusable skill.
- [`preview/`](./preview) — atomic specimens of every token / component (typography, color, radii, buttons, FAQ row, etc.).
