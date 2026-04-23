# POPCORN 2026 Impact Report

A scrollytelling website presenting POPCORN's 2026 Impact Report. Pan-Canadian pediatric research network.

## For Claude Code — start here

1. **Read `CLAUDE.md` first.** That's the full spec. Don't skip it.
2. **Content lives in `/content/`.** Data in `site-data.ts`, projects in `.mdx` files.
3. **48-hour MVP. Tier 1 only.** The plan is in `CLAUDE.md`. Follow it.

### First session prompt (suggested)

> Read CLAUDE.md in full. Then scaffold the Next.js 15 + Tailwind v4 + Motion project. Set up the font stack (Fraunces, Source Serif 4, Caveat), install Lenis and Motion, configure the palette as CSS variables per the spec, and build the base `<Section>` wrapper and paper-texture layer. Do not build any sections yet. Deploy to Vercel when the shell is ready. Confirm with me before moving to Section 01 — Landing.

### Second session prompt (suggested)

> Build Section 01 (Landing), Section 02 (Leadership), Section 03 (Goals), and Section 04 (By the Numbers) using the data in `/content/data/site-data.ts`. Use Motion for the counter animation. Respect `prefers-reduced-motion` throughout. Use placeholder SVGs for illustrations — I will swap them. Deploy incrementally.

### Third session prompt (suggested)

> Build Section 05 — the Canada map — using `SITES` from site-data.ts. This is the signature moment; prioritize it. Follow the keyboard navigation and reduced-motion specs exactly. Start with a simplified SVG outline of Canada (I will refine provincial boundaries later).

## Setup

```bash
npx create-next-app@latest popcorn-report --typescript --tailwind --app --no-src-dir
cd popcorn-report
npm install motion lenis @next/mdx @mdx-js/loader @mdx-js/react gray-matter
```

Then copy `/content/`, `/CLAUDE.md`, and this `README.md` into the new project root.

## Content tasks outside Claude Code

Sunny handles (not Claude Code):

- The cover illustration
- 5 goal icons (small crayon-style marks)
- Swapping placeholder SVGs for real ones after visual audit
- Sourcing the report PDF for the download link
- Final proofreading of all copy
- OG image (1200×630, uses the cover illustration)

## Deferred to V2

Everything flagged Tier 2/3 in CLAUDE.md. Specifically:
- Sound design
- Spiral/helix Canvas/Three.js divider
- Parallax on watercolour layers
- Jargon glossary tooltips
- Additional illustrations beyond the 5 spec'd
