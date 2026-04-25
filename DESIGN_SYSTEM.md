# Proximity Ranking — Design System

A dark, glassmorphic SaaS marketing system for **Proximity Ranking**, an SEO + GEO + AEO agency that helps local service businesses become the answer Google, Maps, *and* AI assistants (ChatGPT, Perplexity, Claude, Gemini, Grok, Copilot) recommend.

Tagline used in product copy: **"SEO + GEO + AEO — One System."**
H1 (hero): *"Rank Where Customers Ask — Google, Maps, and AI answers."*

> ⚠️ Brand identity note — the Figma uses **"Logoipsum"** as a placeholder mark in the navbar/footer. The brand body copy and footer credit consistently say **"Proximity Ranking"** (also written **"Proxinty Ranking"** in the footer — likely a typo in the source). This system uses **Proximity Ranking** as canonical and substitutes a simple text-mark for the logo until the real one is provided.

---

## Source

| Source | Path / Reference |
|---|---|
| Figma (mounted .fig) | `/Page-1/Landing-page-2` — single landing page frame, 1440 × 7414 |
| Key sections (within frame) | `Hero/`, `WHYUS/`, `Frame1707479032/` (Services), `Card2/` (How It Works), `OverlayBorder/` (FAQ), Testimonials, Footer |
| Top components | `Chevron Right` (shared), local glass chips, frosted CTA |
| METADATA top fonts | Darker Grotesque (Light/Regular/Medium/SemiBold/Bold), Inter (Regular/Medium), Segoe UI Symbol (subbed → Darker Grotesque) |
| METADATA top colors | `#0d0d0d`, `#0a5cff` (signature blue), `#4e2fff` (CTA violet), `#7b64ff`, `rgba(204,215,255,0.15)` (inset glow) |

---

## Index

```
README.md                ← you are here
SKILL.md                 ← Agent-Skill manifest
colors_and_type.css      ← all design tokens (CSS vars) + semantic styles
assets/
  images/                ← orb-globe, testimonial avatar, card-noise, cta-noise
  logos/                 ← AI-platform marks (ChatGPT, Copilot, Grok, Proximity placeholder)
  icons/                 ← hexagon, polygon, arrow tile, hero vector
preview/                  ← Design System tab cards (Type, Colors, Spacing, Components, Brand)
ui_kits/marketing-site/   ← React+JSX UI kit recreation of the landing page
```

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, specialist, plain-spoken. Reads like a senior consultant who has done the work, not like an agency deck. Specific numbers and outcomes carry the message — never "leverage", "synergy", or AI-pitch jargon.

**Pronouns.** *We* (the agency) and *you* (the prospective client). Never first-person singular, never third person. Example: "**You** get a roadmap plus the work completed for **you**."

**Casing.**
- Section eyebrow pills: **Title Case with letter-spacing** — `Services`, `How It Works`, `Why Us`, `Our Work`, `Testimonials`, `FAQ`, `Free Visibility Audit`.
- Headlines: **Sentence case** — "Everything you need to dominate search", "Real improvements you can measure", "Three steps to measurable growth".
- CTAs: **lowercase** — `book a call`. (Distinctive style choice; keep it.)
- Secondary CTAs: **Title Case** — `Get a Visibility Audit`, `Book A Call` (in nav).

**Tone examples.**
- Outcome-led: *"3x More Qualified Leads"*, *"+112.10% Search Visibility"*, *"68.5% Improvement in map pack & local search rankings"*.
- Plain-spoken benefit: *"You get a plan, plus a team to execute it. Not advice-only."*
- Honest about timing: *"Most businesses see early movement in 2–6 weeks… Competitive keyword gains and stronger local dominance typically take 2–4 months."*
- Anti-jargon contrast: *"Ranking where you actually do business, not vanity keywords outside your service area."*

**Punctuation & rhythm.** Em-dashes, em-spaced lists, and parentheticals to qualify. Two-sentence max per FAQ chunk. Lines are kept tight enough to fit a 650–746px column without wrapping awkwardly.

**Emoji.** Used **sparingly and only as scarcity/urgency markers**. Single example in source: `⚡ Limited free audits available this month`. Do not introduce new emoji elsewhere.

**Numbers.** Stat-led: percentages, multipliers, time-to-result are surfaced as oversized inline figures (`3x`, `+77%`, `+112.10%`, `2–6 weeks`). Always paired with a one-line explainer underneath in `--fg-3`.

---

## VISUAL FOUNDATIONS

### Backgrounds
- Page surface: solid `#0d0d0d` (near-black).
- **Repeating subtle grid** is implied across the long page (vertical `Background` slabs stacked 5×) — treat as a faint cross-hatch (1px lines @ 4–6% white) to give scale.
- **Two large blue ellipses** bleed in from the page edges as ambient glow: `720 × 320` rounded `360px`, fill `rgb(10,92,255)` / `rgba(10,92,255,0.48)`, positioned off-canvas left and right at section breaks.
- **Hero centerpiece**: a 700×700 dark globe image (`assets/images/orb-globe.jpg`) at 76% opacity, ringed by two thin white circle borders (0.8px @ 50% white).
- **"Flash light" beams**: two long thin triangles top-left and top-right with a `linear-gradient(white→transparent)` fill, evoke a stage-light reveal at the top of the hero.

### Color usage
- Primary action color: **`--brand-blue` (#0a5cff)** for CTA underglow, eyebrow-pill bottom highlight, link accents in FAQ headers.
- Secondary action: **`--brand-blue-2` (#4e2fff)** glass-fill on `book a call` buttons (with 25% white inner glow).
- **No bluish-purple gradient backgrounds**; the violet shows up as **inner shadow on a pill** and as **fill of CTA glass**, not as full-bleed gradient panels.
- Imagery: cool, deep-space tones. Never warm. Avatar imagery sits inside a 20px-radius square.

### Typography
- Display family: **Darker Grotesque** (300/400/500/600/700) — used for everything from H1 to small UI labels.
- Data family: **Inter** (400/500) — used inside chart widgets for tickers (`+112.10%`, `101.04`, `2 Aug`) where the negative letter-spacing tightens numerics.
- Source uses **Segoe UI Symbol** for some body text — substituted with Darker Grotesque (close metrics, available on Google Fonts). **Flag:** if precise body geometry matters, ship a real Segoe UI Symbol fallback; for now layout absorbs the swap.

### Spacing & layout
- 12-col implicit, 1440px design width, ~120px side gutters.
- Sections separated by ~80–100px vertical rhythm.
- Cards sit in 3-up rows with 20px / 50px gutters; hero floating chips orbit the central globe at radii of 290px and 208px.

### Borders & corner radii
- **8 / 12 / 15 / 20 / 22.5 / 40 / pill** — only this set, mapped to tokens `--r-xs … --r-2xl, --r-pill`.
- Hairline color: `--hairline` (`rgba(30,41,59,0.6)`).
- Glass strokes: `--glass-stroke` (15% white) for cards, `--glass-stroke-2` (20%) for floating chips.

### Shadows / elevation
1. **Card glow** — `--shadow-card`: triple-layer outer drop + a 100px inset cool-blue inner glow (`rgba(204,215,255,0.15)`). Used on every glass card and the large CTA frame.
2. **Eyebrow-pill bezel** — `--shadow-pill`: 5+ inset shadows simulating polished metal with blue underglow. Appears on every section-label tag.
3. **CTA glass inset** — `--shadow-cta-glass`: thick 25% white inset, gives the violet button a frosted "lit-from-inside" look.
4. **Flat utility** — `--shadow-flat`: navbar drop only.

### Glass / blur / transparency
- Three blur tiers: `15px` (large frames), `20px` (cards), `40px` (orbit chips).
- Glass formulae always combine: a faint linear gradient + a radial highlight + 1px white-15% stroke + the card-glow shadow + a backdrop-blur.

### Hover & press
- Hover: bump elevation (extra `0 10px 30px rgba(10,92,255,0.18)` outer-glow) and lift `translateY(-2px)`. Eyebrow pills stay still; their underglow brightens to 100% blue.
- Press: scale `0.98`, drop the outer-glow, keep the inset stroke.
- Links / nav items: opacity 0.7 → 1 on hover, 180ms ease.

### Animation
- Subtle, **never bouncy**. Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)` (ease-out). Durations 180–280ms.
- Floating chips around the globe gently float ±6px on a 6s sine — implicit from the layout, optional.

### Layout fixed elements
- Sticky nav bar: 1026px wide, `bg-2` solid, 20px radius, ~32px from top, contains text mark + 4 links + violet CTA.
- Footer: 1371-wide rectangle, hairline border only, 4 link items + logo, 1.0 opacity black background.

### Iconography vibe
- Outlined, 2px stroke, neutral white. Hexagon container behind every "what" card icon (47×55) with backdrop-blur — gives them a "tile" look.
- AI-platform marks always sit inside a glass capsule (110×40, `--r-lg`, 20% stroke) with the brand mark left and the platform name in Darker Grotesque-Medium right.

---

## ICONOGRAPHY

**Source approach.** The Figma uses outlined 2px-stroke vector glyphs (search, location pin, lightning, chart, globe, etc.) sitting inside a frosted hexagonal tile. Most are bespoke vectors, not from a named icon font. There is **no built-in icon font** in the source.

**This system substitutes Lucide** (https://lucide.dev) — same 2px stroke, same outline style, well-matched visually. Loaded from CDN: `https://unpkg.com/lucide@latest`. Flag this as a substitution; if the brand has authored vectors, drop them into `assets/icons/` and reference by filename.

**Bespoke SVGs included** (copied 1:1 from the Figma):
- `assets/icons/hexagon.svg` — the frosted tile shape behind feature icons.
- `assets/icons/polygon.svg` — the play-button polygon used in the How It Works rail.
- `assets/icons/arrow-tile.svg` — the small frosted arrow tile.
- `assets/icons/hero-vector.svg` — the magnifying-glass stroke used in the H1 (visually overlaps "AI answers").
- `assets/logos/proximity-mark.svg` — placeholder logo glyph (from the navbar Logo group).
- `assets/logos/chatgpt-glyph.svg`, `assets/logos/copilot.png`, `assets/logos/grok.png` — AI platform marks lifted from the orbit chips.

**Emoji.** Only `⚡` for urgency. No other emoji used.

**Unicode glyphs.** En-dashes (`–`) for ranges (e.g. "2–6 weeks") and em-dashes (`—`) for asides. No bullet characters; lists use line breaks or implicit spacing instead.

---

## Index

- `colors_and_type.css` — tokens & base styles. Import once.
- `preview/*.html` — Design System tab cards.
- `ui_kits/marketing-site/index.html` — landing-page recreation; pulls JSX components from same folder.
- `assets/` — visual assets, copied 1:1 from Figma.
- `SKILL.md` — Agent-Skill metadata so this system can be loaded into Claude Code.

