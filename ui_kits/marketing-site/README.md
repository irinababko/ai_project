# Marketing Site UI Kit — Proximity Ranking

Faithful recreation of the Figma `/Page-1/Landing-page-2` (1440 × 7414) landing page in modular React JSX.

## Files

- `index.html` — assembled landing page; load in a browser.
- `kit.css` — UI-kit styles layered on top of the global tokens (`../../colors_and_type.css`).
- `atoms.jsx` — small reusable atoms: `Logo`, `EyebrowPill`, `PrimaryCTA`, `SecondaryCTA`, `AIChip`, `HexagonTile`, `FlashLight`.
- `Hero.jsx` — `Navbar`, `Hero`, `HeroOrbit` and the 3 stat panels.
- `Sections.jsx` — `ServicesSection`, `HowItWorks`, `WhyUs`, `OurWork`, `Testimonials`, `FAQSection`, `FinalCTA`, `Footer`.
- `App.jsx` — root composition.

## Deviations from the Figma source

- The Figma uses the **Logoipsum** placeholder mark in nav and footer; this kit uses a **Proximity** wordmark + gradient glyph. Swap in the real logo once provided.
- Per-card icon vectors in the Figma are bespoke. They're substituted here with Unicode glyphs (⌖, ✦, ◎, ▣, ◐, ▤) that match the outlined / geometric vibe. If you have the real icon set, replace `HexagonTile`'s child with an `<img src="...">`.
- Concentric ring + chip orbit is implemented with absolute-positioned `AIChip`s rather than reproducing the bespoke connector lines from the Figma.
- Body fonts swapped: source uses **Segoe UI Symbol** (closed) and **Darker Grotesque** (open). Both routes resolve to Darker Grotesque here.

## Components are assumed copy-cosmetic

State only on `Testimonials` (carousel index) and `FAQSection` (open row). No real navigation or form submission.
