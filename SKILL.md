---
name: proximity-ranking-design
description: Use this skill to generate well-branded interfaces and assets for Proximity Ranking, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content fundamentals, visual foundations, iconography rules.
- `colors_and_type.css` — CSS custom properties for colors, type, radii, shadows. Import this in any HTML output.
- `fonts/` — Darker Grotesque + Inter (the data/numeric face). Use Google Fonts CDN if local fonts can't be referenced.
- `assets/` — real visual assets (logos, AI-platform glyphs, hero orb image, testimonial photo, noise textures, hexagon/polygon decoratives).
- `ui_kits/marketing-site/` — modular JSX components (`Logo`, `EyebrowPill`, `PrimaryCTA`/`SecondaryCTA`, `AIChip`, `Navbar`, `Hero`, `ServicesSection`, `WhyUs`, `HowItWorks`, `OurWork`, `Testimonials`, `FAQSection`, `FinalCTA`, `Footer`). Drop into a React+Babel HTML scaffold and assemble.
- `preview/*.html` — atomic specimens of each token/component for reference.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Lean on glassmorphism, soft blue/violet glows, and the Darker Grotesque headline voice. Keep copy **lowercase for CTAs** ("book a call"), **Title Case for section eyebrows** ("Why Us", "How It Works"), and **sentence case for H1/H2**.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
