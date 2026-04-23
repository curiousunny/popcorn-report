# POPCORN 2026 Impact Report — Claude Code Instructions

## What this project is

A scrollytelling website presenting POPCORN's 2026 Impact Report. POPCORN is a pan-Canadian pediatric research network funded by CIHR/CBRF, with 16 hospital sites, 105 researchers, and a patient-engagement-first philosophy. This site replaces a Storydoc deck and must serve three audiences simultaneously: funders scanning for outcomes, researchers/clinicians reading deep, and patient families/public reading for understanding.

**Deadline: 48-hour MVP.** Ship a complete, deployable V1 with Tier 1 scope only. Defer Tier 2/3 features to a V2 sprint after feedback.

## Non-negotiable constraints

1. **Mixed audience.** Reading level for narrative prose: grade 9–10. Jargon (MIS-C, seroprevalence, dexamethasone, PICU) appears only inside project detail expands, never in summary copy.
2. **Accessibility is not optional.** Every animation has a non-animated fallback via `prefers-reduced-motion`. Keyboard navigation works everywhere. Color contrast meets WCAG AA minimum (AAA for body text). The map is keyboard-traversable.
3. **Performance budget:** First Contentful Paint under 1.5s on a mid-range mobile device. Total JS under 200KB gzipped for V1. No Three.js in V1.
4. **Presentable full-screen.** This gets projected at conferences. Any section must read clearly at 1920×1080 projected.
5. **Shareable via cold link.** No login, no gate, meta tags and OG image done properly.

## Visual language

### The one-sentence brief

Warm, hand-crafted editorial aesthetic that signals care for children and rigor to funders simultaneously — paper texture and hand-drawn accents as *surface*, disciplined typography and composition as *structure*.

### Palette (tokens)

```css
--paper:       #F5EFE4;   /* base background */
--paper-deep:  #EBE1D0;   /* elevated surfaces, cards */
--ink:         #2B2418;   /* primary text, hand-drawn lines */
--ink-muted:   #4A423A;   /* secondary text */
--ochre:       #C68A3E;   /* primary accent, headings emphasis */
--rose:        #C17B7B;   /* secondary accent, highlights */
--sage:        #8A9A7B;   /* positive/success data */
--teal:        #3E6B6B;   /* links, interactive elements */
--cream:       #FBF7EF;   /* light surface for contrast moments */
```

Use ochre and teal as the dominant accents. Rose and sage are for data/status only. Never use pure black or pure white.

### Typography

- **Display:** Fraunces (variable, Google Fonts). Use SOFT axis for large display. `font-optical-sizing: auto`.
- **Body:** Source Serif 4 (variable, Google Fonts). Generous line-height (1.65 for body prose).
- **Handwritten accent:** Caveat (Google Fonts). **ONLY** for pull-quotes, marginalia, and decorative labels. NEVER for UI buttons, nav, or body copy. Treat it as a spice, not a staple.
- **No sans-serif anywhere** in V1. This is a deliberate constraint that gives the site cohesion.

### Texture system

Layered via absolutely-positioned divs with `mix-blend-mode: multiply` and `pointer-events: none`:

1. Base: solid `var(--paper)`
2. Grain: SVG `<feTurbulence baseFrequency="0.9">` filter, 6% opacity
3. Watercolour blobs: per-section, pre-rendered PNGs or SVG with `<feTurbulence>` + `<feDisplacementMap>` for organic edges, placed as decorative background elements with 40–60% opacity
4. Hand-drawn accents: inline SVGs (underlines, circles, arrows) with slight path irregularity — do NOT use perfectly straight lines for decorative elements

### Crayon/hand-drawn SVG rules

- Stroke width 2–3px
- `stroke-linecap: round`, `stroke-linejoin: round`
- Paths should have slight wobble — aim for "confident hand," not "tremor"
- Animated reveal uses `stroke-dasharray` / `stroke-dashoffset` with a 600–1200ms duration and `cubic-bezier(0.65, 0, 0.35, 1)` easing

## What NOT to do (failure modes)

- ❌ **No Comic Sans, Marker Felt, or anything coded "children's party."** The handwriting in this system is an adult researcher's notebook hand.
- ❌ **No purple gradients.** No generic SaaS aesthetics. No Space Grotesk, no Inter.
- ❌ **No scroll-hijacking.** Native scroll, enhanced by animations. Never take over the scroll position.
- ❌ **No autoplay sound.** Sound is Tier 2 and explicitly deferred from V1.
- ❌ **No 3D/Three.js in V1.** The spiral/helix divider is Tier 2.
- ❌ **No animations longer than 600ms for UI interactions** (decorative ambient animations can be longer).
- ❌ **No decorative animation on essential content** — counters animate once, the map sequences once, then everything is still. Motion is a garnish.
- ❌ **No Tailwind `@apply` abuse.** Use utility classes directly in JSX. Keep component logic in components.
- ❌ **No new dependencies without explicit approval.** No GSAP (Motion covers it). No D3 (the map is a styled SVG, not a data viz).

## Technical stack

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS v4** with CSS variables for theme tokens
- **Motion** (the library, formerly Framer Motion) for React animations
- **Lenis** for smooth scroll (keep default easing — don't get cute with physics)
- **MDX** for project content (via `@next/mdx`)
- Deployment: **Vercel**

## Content model

Every project in `/content/projects/*.mdx` uses this frontmatter schema:

```yaml
---
id: string                    # kebab-case slug, matches filename
title: string
pi: string                    # "Dr. Caroline Quach-Thanh"
leadResearcher:               # appears on card with headshot
  name: string
  headshot: string            # optional path; falls back to initials avatar
  role: string                # optional, e.g. "Principal Investigator"
coResearchers:                # optional array, for projects with multiple leads
  - name: string
pillar: string                # emergency | inpatient | critical-care | infectious-disease | maternal-health | cross-cutting
type: string                  # core-study | knowledge-synthesis | trainee-award | affiliated-project
status: string                # planning | recruiting | analysis | complete | manuscript
statusLabel: string           # human-readable: "Analysis underway"
summary: string               # ONE sentence, grade 9 reading level, answers "why does this matter"
icon: string                  # optional path to custom SVG; falls back to placeholder
tags: string[]                # for filtering, e.g. ["covid", "long-term-outcomes", "equity"]
---

## What we want to know

*One-line plain-language summary of the question.*

Full paragraph explaining the research question in everyday language.

## How we're doing it

*One-line plain-language summary of the method.*

Full paragraph explaining the method.

## Where we are now

*One-line plain-language summary of current status.*

Full paragraph on progress as of April 2026.
```

The `summary` field is what appears on the card in the pillar grid. The MDX body is what appears in the expand. **Always keep the summary to one sentence and under 140 characters** — this enforces discipline.

**The italic summary lines inside each section** ("double-loading") serve scanners who want the gist without reading the full paragraph. They are required, not optional.

## Card anatomy

Every project card shows:

```
┌────────────────────────────────────────┐
│ [Avatar]  Lead researcher name  [Icon] │
│                                        │
│ Project title                          │
│ [Status badge] · Pillar name           │
│                                        │
│ One-sentence summary from frontmatter. │
│                                        │
│                          Read more ↓   │
└────────────────────────────────────────┘
```

- **Avatar:** 40×40 circle. If `leadResearcher.headshot` exists, show photo. Otherwise show initials on ochre background.
- **Icon:** 40×40 crayon-style SVG. If `icon` exists, show it. Otherwise show a placeholder SVG (simple geometric mark keyed to pillar color).
- **Status badge:** colored dot + label, per status.

Expansion behavior per spec above in "What We're Learning" — inline, accordion within pillar.

## Project type filter

At the top of the Projects section, above all pillar groupings, a segmented control:

```
[ All (23) ] [ Core studies (8) ] [ Knowledge synthesis (3) ] [ Trainee research (6) ] [ Affiliated (6) ]
```

Behavior:
- Click segment → filter all pillar groupings below to only matching `type`
- Pillar headings hide if zero matching projects in that pillar
- URL updates: `?type=trainee` (shareable filtered view)
- Default: "All"
- Mobile: horizontal-scroll segmented control
- a11y: `role="tablist"`, `aria-selected` on active segment, arrow-key navigation
- No status filter, no PI filter, no tag filter in MVP (V2)

The status information remains visible on every card regardless of filter state.

## Section-by-section spec

### 01 — Landing
- Full viewport height
- Cover illustration (placeholder: `/public/illustrations/cover.svg` — Sunny will swap a custom one)
- Title "POPCORN 2026 Impact Report" in Fraunces display
- Land acknowledgement below, smaller, in Source Serif
- Scroll indicator at bottom — animated crayon arrow

### 02 — Leadership message
- Two-column desktop, stacked mobile
- Pull-quote from Dr. Drouin (large, Fraunces, with crayon underline that draws in on scroll)
- "Read full message" button reveals the full message in an accordion
- Governance co-chair quote as a secondary pull-quote

### 03 — The 5 Goals
- Horizontal scroll on mobile, 5-up asymmetric grid on desktop
- Each goal has: number (hand-drawn), 2–4 word title, one-sentence plain-language explanation
- On hover/tap: subtle lift + crayon underline draws under the title

### 04 — By the Numbers
- The stats anchor for funders. Must be screenshot-worthy.
- Animated counters: 16 hospitals, 105 researchers, 31 honoraria, $14,627 paid to patient partners, 12 collaborating networks
- Counters animate once on enter-viewport. After completion they are STATIC.
- Respect `prefers-reduced-motion` — show final value immediately.

### 05 — Across Canada (the map)
- Signature moment. Single largest build in the project.
- Styled SVG of Canada (simplified provincial outlines, illustrated feel, not cartographic)
- 16 hospital sites as circles with hand-drawn wobble
- On scroll into view: sites illuminate sequentially (stagger 80–120ms)
- Each site has accessible tooltip with hospital name + city
- Keyboard accessible: tab through sites, focus ring in ochre
- Static fallback for `prefers-reduced-motion`: all sites already lit, no sequence
- Mobile: map scales, site labels hide by default, tap reveals

### 06 — What We're Learning (projects)
- Grouped by pillar. Up to 6 pillar sections.
- Each pillar: heading + short description + card grid of projects
- Card shows: title, PI, status badge (colored dot + label), one-sentence summary
- Click card → expand inline (not modal) to show Question/Method/Progress from MDX body
- Expand animation: 300–400ms, Motion's layout animation
- Accordion behavior within a pillar (one expanded at a time per pillar, not global)

### 07 — Voices
- 4 testimonial quotes minimum: Dr. Peter Gill, Dr. Charles-Antoine Guay, Dr. Mireille Guillot, + one patient partner voice
- Each quote: Caveat-accent mark (large opening quote or crayon bracket), quote body in Fraunces italic, attribution in Source Serif
- Loose, slightly-rotated layout (±1.5° per card) — feels like notes pinned to a board
- Mobile: straight stack, no rotation

### 08 — How We Work Together
- Patient Engagement Training Series (3 sessions) — brief list
- EDI+I work (language inclusivity, CIHR Team Grant) — brief list
- Trainee spotlights — 6 awardees as small cards with name, title, one-line summary
- This is the dense section. Keep it scannable. Use expand patterns again.

### 09 — How We're Doing (SNA findings)
- Stat callout: "Over 90% of members report increased collaboration"
- The 3 recommendations from the SNA as 3 visual cards:
  1. Strengthen POPCORN's Identity & Purpose
  2. Expand & Sustain Connections
  3. Mobilize Projects During Infrastructure Expansion
- Each card has the bullets from the source PDF

### 10 — What's Next (POPCORN 2.0)
- Short editorial narrative (Fraunces body sizing, magazine-feature feel)
- Key commitments as a bulleted list with hand-drawn bullets
- Soft CTA: "Learn more at popcornpediatrics.ca"

### 11 — Credits & Downloads
- PDF download of full report
- Contact email
- Acknowledgements (MICYRN, CHU Sainte-Justine, CIHR, CBRF)
- Credit line: "Designed and developed by Sunny Dong"
- Back to top button

## Navigation

- Sticky left-rail on desktop (vertical dots + section names on hover), hidden on mobile
- Progress indicator (thin ochre line) at top showing scroll position
- Section IDs stable and semantic: `#landing`, `#leadership`, `#goals`, `#numbers`, `#map`, `#learning`, `#voices`, `#together`, `#evaluation`, `#whats-next`, `#credits`

## Animation conventions

- Scroll-triggered animations use Motion's `whileInView` with `viewport={{ once: true, margin: "-15%" }}`
- Default easing for UI: `cubic-bezier(0.65, 0, 0.35, 1)`
- Default easing for decorative: `cubic-bezier(0.25, 0.1, 0.25, 1)`
- Stagger for lists: 60–100ms between children
- All animations wrapped in a `useReducedMotion()` check — return static state if true

## Accessibility checklist (must pass before "done")

- [ ] All interactive elements keyboard-accessible with visible focus ring (ochre, 2px offset)
- [ ] `prefers-reduced-motion` honored globally
- [ ] Color contrast: body text 7:1 (AAA), UI elements 4.5:1 (AA)
- [ ] Images have alt text; decorative SVGs have `role="presentation"` / `aria-hidden="true"`
- [ ] Expand/collapse uses proper `aria-expanded` and `aria-controls`
- [ ] Map sites are buttons with descriptive `aria-label`
- [ ] Skip-to-content link at top
- [ ] Heading hierarchy is clean (one h1, h2 per section, no skipped levels)
- [ ] Page title and meta description set

## File structure

```
/app
  /layout.tsx           Root layout, fonts, theme provider
  /page.tsx             Homepage — orchestrates all sections
  /globals.css          Tailwind + CSS variables
/components
  /sections/*.tsx       One file per section (Landing, Leadership, Goals, etc.)
  /ui/*.tsx             Reusable: Counter, ExpandCard, PullQuote, CrayonUnderline
  /map/CanadaMap.tsx    The signature piece, isolated
  /nav/SectionRail.tsx  Sticky nav
/content
  /projects/*.mdx       One file per project (see content-schema.md)
  /data/voices.ts       Testimonial data
  /data/goals.ts        The 5 goals
  /data/sites.ts        16 hospital sites with coordinates
  /data/numbers.ts      The stats for By the Numbers
/lib
  /motion.ts            Shared Motion variants
  /use-reduced-motion.ts
/public
  /illustrations/       Cover, goal icons, spiral
  /textures/            Paper grain, watercolour blobs
```

## The 48-hour plan

- **Hours 0–6:** Scaffold Next.js + Tailwind + Motion. Set up fonts, palette, base layout, paper texture. Build `Section` wrapper component. Deploy empty shell to Vercel to verify pipeline.
- **Hours 6–14:** Landing + Leadership + Goals + Numbers. These sections are structurally simple and share patterns that will be reused. Get them polished.
- **Hours 14–24:** The map. Allow a full day. Build the SVG, site illumination sequence, hover/focus states, keyboard nav, reduced-motion fallback.
- **Hours 24–34:** Projects section (the dense one). Ingest MDX, build card + expand pattern, group by pillar. Voices section.
- **Hours 34–42:** Remaining sections (Together, Evaluation, What's Next, Credits). Nav rail. Scroll progress bar.
- **Hours 42–46:** Accessibility audit, responsive audit, performance check. Fix issues.
- **Hours 46–48:** Deploy. Test cold link. Take screenshots. Write a short sharing note for Keiko/Olivier.

## What to push back on

If Sunny asks for:
- Three.js / WebGL anything → remind her it's Tier 3, offer an SVG equivalent
- Sound design → Tier 2, defer to post-MVP
- Custom illustrations beyond the 5 planned → use placeholder SVG, she'll swap
- Additional content sections beyond the 11 spec'd → push back, suggest V2
- Scroll-hijacking effects → no, native scroll only

## Voice and copy conventions

- First person plural for POPCORN ("We study...", not "POPCORN studies...")
- Sentence case for UI (not Title Case)
- Oxford comma
- "Pregnant people" and "families" — inclusive language throughout
- Avoid "patients" alone — prefer "children and families," "patient and family partners," or specific ("pediatric patients" only in clinical context)
- Never use "kids" in headings; "children and youth" in formal copy, "kids" acceptable sparingly in body to maintain warmth

---

**When in doubt: ship Tier 1 complete over Tier 1+2 incomplete. The MVP exists to get feedback, not to be perfect.**
