# POPCORN 2026 Impact Report — MVP PRD

**Status:** Draft v1
**Owner:** Sunny Dong (design & development)
**Stakeholders:** Dr. Olivier Drouin (network PI, content owner)
**Target ship:** 48-hour MVP / first shareable draft
**Platform:** Custom web build, deployed on Vercel

---

## 1. Why we're building this

### 1.1 The problem

POPCORN's current impact report lives in a Storydoc deck: linear, presentation-shaped, and stylistically at odds with a patient-centered pediatric research network. It serves none of its audiences particularly well:

- **Funders** (CIHR, CBRF, future funders) can't quickly extract evidence of outcomes
- **Researchers & trainees** can't easily find peers working in their area
- **Patient families & the public** encounter jargon and density without on-ramps
- **POPCORN team members** can't share specific sections, projects, or quotes cleanly

### 1.2 The opportunity

A custom web build lets us solve for all four audiences simultaneously by replacing "one document, one experience" with "one surface, many read-paths." The content already exists (27-page draft dated April 13, 2026). The work is translation and information architecture, not authorship.

### 1.3 What success looks like

A first-draft MVP is successful if:

- Olivier can share a single link with CIHR, a clinical colleague, and his mother-in-law — and each has a useful experience
- A funder can extract the key stats and one outcome in under 90 seconds
- A prospective trainee can find relevant projects in their pillar in under 3 minutes
- The network's commitment to patient engagement and EDI+I is legible *in the design itself*, not just claimed in copy
- The site is deployable, accessible, shareable, and presentable full-screen at a conference

---

## 2. What the impact report actually is

We are building for five simultaneous functions of the report:

| Function | Primary audience | What they need |
|---|---|---|
| **Accountability** | CIHR, CBRF, funders | Evidence of outcomes aligned to stated goals; rigorous stats; named investigators |
| **Renewal instrument** | Current & future funders | Story of growth from POPCORN 1.0 to 2.0; funding runway through 2028; sustainability plan |
| **Recruitment** | PIs, trainees, patient partners | Testimonials; project diversity; mentorship signals; "who's like me here?" |
| **Internal identity** | 105 researchers across 16 sites | Collective view of shared work; pride; shared vocabulary |
| **Public trust** | Families, journalists, advocates | Plain-language access; warmth; honesty about challenges |

**Design tension explicitly acknowledged:** these audiences pull in different directions. Funders want rigor signals (stats, institutional names, methodology). Families want warmth signals (voice, story, approachability). The MVP's job is to serve both through **layered disclosure**, not through choosing one.

---

## 3. How the report gets used

### 3.1 The seven real use patterns

| Pattern | Time | Entry point | What they extract |
|---|---|---|---|
| Funder scan | 90s | Emailed link | Stats, one outcome, credibility signals |
| Recruit deep-dive | 8m | "Join us" link, LinkedIn | Voices, projects in their pillar, geographic fit |
| Presenter extraction | Returning visits | Bookmark | Stats, quotes, section screenshots for decks |
| Journalist/advocate | 15m | Search, referral | Specific finding on specific condition |
| Family/public reader | 3m | Shared by a friend, social | General impression, plain-language takeaway |
| Peer researcher | 5m | Conference mention, citation | Specific PI, method, or project status |
| Team member handoff | Varies | Sends to boss/partner | Hope the site speaks for itself |

**Key insight:** No one reads front to back. Every user is searching. The navigation rail and deep-linkable section IDs aren't decorative — they're the core UX.

### 3.2 Design implications

1. **Every section is deep-linkable.** Stable, semantic anchor IDs on every section and every project card.
2. **Every stat, quote, and project has a "copy link" affordance.** Minimal UI cost; transforms the presenter-extraction use case.
3. **Progressive disclosure is the default.** Summary visible, depth one click away.
4. **The stats section does heavy lifting for the funder scan.** It must be screenshot-worthy and understandable without context.
5. **Opening 10 seconds must communicate what POPCORN is**, because cold-link visitors have no prior context.

---

## 4. Patterns worth surfacing

Hidden structural patterns in the content that the website can make visible:

### 4.1 In the MVP

**Project lifecycle distribution.** Every project is in planning / recruiting / analysis / manuscript / complete. A small visual at the top of the Projects section shows the portfolio health at a glance. Demonstrates maturity and pipeline depth.

**Pillar × status matrix (lightweight).** Count of projects per pillar, visible at each pillar heading. Readers see scale instantly.

**The equity thread.** EDI+I isn't a section, it's a cross-cut. A single "Equity in our work" callout with links to the 4–5 equity-tagged projects (EXPAND, bronchiolitis disparities, language inclusivity, CIHR youth grant, patient engagement series). Demonstrates what POPCORN claims about itself.

### 4.2 Deferred to V2

**The COVID-to-general arc.** Visualize every project's position on the pandemic-specific to general-pediatric spectrum. Great storytelling device, significant design work.

**Network-of-networks graph.** Visualize the 12 collaborating networks, 8 root networks, and SIC/PICYRN/other relationships. High value, high complexity — not 48 hours of work.

**Geographic project density.** Map sites colored/sized by project count, not just presence. Requires coordinate-to-project mapping data work.

**Story-stats.** Rewriting abstract stats into concrete narratives ("Before POPCORN, X. Now Y."). Requires editorial input from Olivier/team we won't get in 48h.

---

## 5. How to make information digestible

### 5.1 Principles in effect across the site

1. **Progressive disclosure.** One-sentence summary visible; click for depth. Applies to projects, SNA findings, trainee bios, and leadership messages.
2. **Parallel structure.** Every project answers the same three questions in the same order: What we want to know / How we're doing it / Where we are now. This rhythm teaches the reader how to read the site.
3. **Signposting before density.** Each major section opens with a one-sentence "here's what this section contains" line so readers know the cost of entry before committing.
4. **Grade 9–10 reading level in summaries.** Jargon (MIS-C, seroprevalence, PICU, dexamethasone) lives only inside expands, never in card summaries or section intros.
5. **Anchoring stats in meaning.** "$14,627 paid in honoraria" becomes "$14,627 paid in honoraria — ensuring patient and family partners are compensated, not just consulted." Every stat has a one-line context.
6. **Short paragraphs, verb-forward sentences.** 20–30% shorter than the PDF source. Lead with verbs.
7. **Illustration as compression.** One good illustration (the Canada map, the cover) replaces hundreds of words.

### 5.2 What readers should leave with

After 90 seconds on the site, any audience should be able to answer:

- **What is POPCORN?** A pan-Canadian pediatric research network funded through 2028.
- **What does it actually do?** Studies children's and pregnant people's health at 16 hospitals, with patient and family partners co-leading the work.
- **Why does it matter?** It's building research infrastructure that was missing during COVID — so Canada is ready for the next health crisis *and* improving care between crises.
- **Who's in it?** 105 researchers, 16 hospitals, 12 networks, patient and family partners at every level.
- **Is this credible?** Yes — funded by CIHR and CBRF, operated via MICYRN and CHU Sainte-Justine.

This is the "90-second contract" the site makes with every cold-link visitor.

---

## 6. MVP scope — what's in, what's out

### 6.1 In scope (Tier 1)

**Site structure:**
- 11 sections, linear scroll, deep-linked
- Sticky left-rail navigation (desktop), progress bar (all viewports)
- Mobile-responsive down to 360px

**Content:**
- All 11 section's content fully populated from the April 13 PDF
- ~23 projects as MDX cards with expand-for-depth
- 4 voices (Gill, Guay, Guillot, patient partner composite)
- SNA headline stat + 3 recommendations
- Leadership pull-quotes + full message expand
- Credits, funders, contact

**Project cards — humanization:**
- Lead researcher avatar on every card (headshot if provided, initials fallback on ochre background)
- Lead researcher name visible on card, not just in expand
- Project icon slot on every card (placeholder SVG if custom not provided; Sunny draws 3 for MVP, remainder post-launch)

**Project cards — navigation:**
- Segmented control above all pillar groups filtering by `type` (Core / Knowledge synthesis / Trainee / Affiliated / All)
- Filter state reflected in URL (`?type=trainee`) for shareable filtered views
- Pillar groupings auto-hide when empty under current filter
- No status, PI, or tag filters in MVP (deferred to V2)

**Project expansion — information architecture:**
- Inline expand (not modal). Preserves scroll context, deep-linkable, screenshot-friendly, accessible.
- All three sections (What we want to know / How we're doing it / Where we are now) visible simultaneously when expanded (no nested disclosure).
- Each section double-loaded: italic one-line summary followed by full paragraph.
- Only one card expanded per pillar at a time (accordion within pillar).

**Interactions:**
- Animated stat counters (once, on enter-viewport, respects reduced-motion)
- Canada map with site illumination on scroll (signature moment)
- Project card expand/collapse
- Copy-link affordances on sections, stats, and project cards
- Scroll-triggered fade-in for section headings

**Visual system:**
- Paper/watercolour/crayon aesthetic per `CLAUDE.md`
- Fraunces + Source Serif 4 + Caveat typography
- Palette tokens as CSS variables
- Paper grain texture layer global
- 1 cover illustration (placeholder, Sunny swaps later)
- 5 goal icons (placeholders, Sunny swaps later)
- Hand-drawn SVG accents (underlines, arrows) generated in code

**Lightweight pattern-surfacing:**
- Project count per pillar at each pillar heading
- Project lifecycle distribution mini-chart at Projects section intro
- "Equity in our work" cross-cut callout linking to 4–5 tagged projects

**Technical:**
- Next.js 15 + Tailwind v4 + Motion + Lenis
- Deployed to Vercel with OG meta tags
- Lighthouse accessibility score ≥95
- Lighthouse performance score ≥90 on mobile
- Keyboard-navigable throughout
- `prefers-reduced-motion` honored globally

### 6.2 Out of scope (V2)

- Sound design and ambient audio
- Three.js / Canvas-based spiral or helix divider
- Site-wide search
- Download-as-image for individual cards
- Network-of-networks graph visualization
- Project geographic density map (vs. simple presence)
- COVID-to-general arc visualization
- Story-stats rewrites
- Jargon glossary tooltips
- Additional project filters beyond `type` (status, PI, tag, pillar-based filtering)
- Modal-based project detail view (decided against — inline expand chosen for MVP)
- Bilingual (French) version (POPCORN publishes bilingual promotional materials; a French version is very likely a V2 requirement — budget for translation and typography review)
- Custom illustrations beyond the MVP's cover + 3 pillar icons
- The remaining ~20 project icons (Sunny draws these post-launch, shipping 2–3 at a time via git commits)
- Newsletter signup / email capture
- Social sharing with pre-generated cards

### 6.3 Explicitly deferred decisions

- **Analytics/tracking.** Check with POPCORN on privacy preferences (likely a plain Plausible/Fathom install, no Google Analytics, no cookie banner needed).
- **Contact form vs. email link.** Default to `mailto:` for MVP; revisit if spam becomes an issue.
- **Bilingual scope.** Confirm with Olivier whether French is a V1 or V2 requirement — this meaningfully affects layout (French text runs ~20% longer than English).
- **Hosting long-term.** Vercel for MVP; POPCORN may want to bring hosting in-house later.

---

## 7. Open questions for Olivier / Keiko

Before launch, confirm:

1. **Content freeze.** Is the April 13 draft final, or is editorial still happening? (Drafting on moving content doubles the work.)
2. **The patient partner voice.** The MVP uses a composite quote representing patient and family partners. Is there a real quote from a specific named partner that should be used instead? (Real names are more powerful than composites.)
3. **Researcher headshots.** The MVP shows placeholder avatars (initials on ochre) where headshots would go, to make the humanizing intent visible to you. Are PIs comfortable having headshots on the site? Who would collect and manage these? Are there any PIs or trainees who should NOT be shown by photo (privacy preference, safety concern, etc.)?
4. **Project filtering.** The MVP uses one filter dimension (project type: core / synthesis / trainee / affiliated). Would status, pillar, or PI filtering also be valuable? This meaningfully affects whether we should be thinking of this as a one-time annual report or a living project directory.
5. **French version timeline.** V1 or V2?
6. **Analytics preference.** Privacy-first (Plausible/Fathom) or standard (GA)?
7. **Contact destination.** Which email address for "contact us"?
8. **PDF download.** Should the site host a downloadable PDF version? If so, who's producing it?
9. **The governance co-chair quote.** The composite used in the MVP combines Dr. Murthy and Dr. Buchanan's perspectives; confirm they're comfortable or get a real direct quote.
10. **Launch URL.** Custom domain or Vercel subdomain for V1?

---

## 8. Success metrics

### 8.1 Qualitative (MVP)

- Olivier approves without requesting major restructuring
- At least one funder screenshots the stats section after receiving the link (anecdotal ask)
- Governance Committee co-chairs feel represented
- Patient & family partners feel the design respects their role

### 8.2 Quantitative (3 months post-launch)

- Page views: not the primary metric — this is a low-volume high-intent site
- Scroll depth: median visitor reaches Section 04 (By the Numbers) at minimum
- Time on page: median session >2 minutes
- Copy-link events: any usage indicates the presenter-extraction pattern is working
- Project card expand rate: 30%+ of visitors expand at least one card

These are goals, not gates. The MVP ships regardless.

---

## 9. Timeline

**48 hours total.** Detailed hour-by-hour plan lives in `CLAUDE.md`. Summary:

- Hours 0–6: Scaffold, deploy empty shell
- Hours 6–14: Landing + Leadership + Goals + Numbers
- Hours 14–24: Canada map (the signature build)
- Hours 24–34: Projects + Voices
- Hours 34–42: Together + SNA + What's Next + Credits + Nav
- Hours 42–46: Accessibility & performance audit
- Hours 46–48: Deploy, test, share

**Hard rule:** At hour 36, if scope is tight, cut polish not content. A structurally complete rough site is more useful than half a beautiful site.

---

## 10. Risks & mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Content changes during build | High | High | Lock content at hour 0 with Olivier; any changes go to V2 |
| Map takes longer than day 2 | Medium | High | Have a simpler fallback — static sites, no illumination — ready to ship |
| Visual system drifts across sections | Medium | Medium | `CLAUDE.md` palette and typography tokens; visual audit at hour 36 |
| Accessibility issues surface late | Low | High | Bake into every component from hour 0, not a final-pass audit |
| Vercel deploy issues on launch day | Low | High | Deploy empty shell at hour 6 to catch pipeline issues early |
| Scope creep into V2 features | High | Medium | This PRD; re-read it at every decision point |
| Sunny burns out before May 14 travel | Medium | High | Ship Tier 1 complete at 48h; do not extend; V2 happens after travel |

---

## 11. Decisions log

*Initially empty — tracked as build proceeds.*

---

## Appendix A: Glossary

- **POPCORN:** Pediatric Outcome imProvement through COordination of Research Networks. Pan-Canadian pediatric research network.
- **POPCORN 1.0 / 2.0:** Informal references to pre-2026 (pandemic response era) and 2026–2028 (current funding cycle) eras of the network.
- **CIHR:** Canadian Institutes of Health Research — federal health research funder.
- **CBRF:** Canada Biomedical Research Fund — federal research infrastructure funder.
- **MICYRN:** Maternal Infant Child and Youth Research Network.
- **Pillar:** POPCORN's internal term for research focus areas. Five content pillars (emergency, inpatient, critical care, infectious disease, maternal health) plus cross-cutting pillars (data, KM, patient engagement).
- **SNA:** Social Network Analysis — the 2025 evaluation of POPCORN's network effectiveness.
- **EDI+I:** Equity, Diversity, Inclusion and Indigeneity.
- **KM:** Knowledge Mobilization.
- **AMR:** Antimicrobial Resistance.

## Appendix B: Reference documents

- Source content: `2026_04_13-POP-Impact_Report_Content-DRAFT.pdf`
- Technical spec: `CLAUDE.md`
- Content data: `content/data/site-data.ts`
- Project content: `content/projects/*.mdx`
- Storydoc reference (previous version): https://www.storydoc.com/b5eb11f0fee087413b9c6ea3dd0fa4cd/1dfaa225-f7ae-46e2-979c-7b8c76eba70f/6818b47aadbc41e0ba58a353
- POPCORN public site: https://www.popcornpediatrics.ca
