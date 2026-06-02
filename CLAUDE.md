# CLAUDE.md

This file is the source of truth for Nick Pratt's portfolio project. Any Claude session working on this project (Claude.ai, Claude Code, or otherwise) should read this first.

---

## Project Overview

- **Owner:** Nick Pratt
- **Project:** Personal portfolio website — full rebuild
- **Current site:** nickpratt.design (currently on Framer, being replaced)
- **Stack:** React + Tailwind CSS, vibe-coded via Claude Code, deployed to Vercel with custom domain
- **Target ship date:** Mid-July 2026 (before August NYC move)
- **Goal:** Land a full-time product/UX design role at a New York studio or in-house product team (goal is Fortune 500)

## About Nick

- First-generation college grad from suburban Chicago
- BFA in UX design from SCAD, with a minor in graphic design
- Currently a Membership Concierge (front desk) at Life Time (started September 2025), but this is a transitional job
- Hopefully moving to New York City in August 2026
- Wants to land a full-time job as soon as possible, either in New York, Boston, Austin, SF, Portland, Seattle
- Personality descriptors others have used: empathetic, sensitive, bubbly, self-aware, earnest, playful, genuine, honest
- Notable: has a Command+Z keyboard shortcut tattoo on his right wrist (significant personal/brand element)
- Studied abroad in the south of France during SCAD
- Likes: fitness/training (zone-based cardio, weight training), skincare, design culture, Trader Joe's frozen aisle, hot dogs, iced matcha (preferably strawberry), iced tea, iced coffee

## Positioning Statement

> First-gen SCAD grad from suburban Chicago, designing AI-fluent product experiences for the way people actually use technology.

This statement may be revised.

This sentence does a lot of work: first-gen (humanity), SCAD (taste credential), suburban Chicago (specificity), AI-fluent (current market language), "the way people actually use technology" (point of view).

## Target Audience

New York design hiring managers, studios, and in-house product teams at large companies. Specifically:

- Studios at the level of Pentagram, Athletics, COLLINS
- In-house teams at companies like Linear, Mercury, Squarespace, Apple, Microsoft, IBM, Honeywell
- AI companies (consumer or B2B)

The aesthetic bar is **"distinctive and crafted,"** not just "polished." NY hiring managers have seen 500 polished junior portfolios this year. They haven't seen one that feels unmistakably like a specific person with a specific point of view.

---

## Aesthetic Direction

Sleek, expensive, polished, considered. The eye for design is perfect, and every detail is paid attention to. Editorial warmth meets product-grade restraint. The visual language is, but not exclusively, inspired by:

- **apple.com** — confident restraint, generous whitespace, slow deliberate motion, type sized precisely
- **lifetime.life** — sleek editorial typography, lifestyle-grade polish, desaturated palette

The portfolio should feel less like a "junior designer site" and more like a thoughtful product brand. BUT it should also feel **alive and playful** — not Apple-corporate. The dominant DNA is closer to the inspiration portfolios listed below than to Apple itself.

## Visual Identity

### Light mode
TO BE DETERMINED, BE CREATIVE

### Dark mode
TO BE DETERMINED, BE CREATIVE

### Texture
TO BE DETERMINED, BE CREATIVE

### Dark/light mode behavior
- Detect OS preference via `prefers-color-scheme` on first load
- Manual toggle via a keycap-styled button
- User's manual choice persists in `localStorage`

## Typography (Four Voices)

1. **Display serif** — personality moments: name, section openers, the typing component
   - References: TO BE DETERMINED
   - Placeholder: system serif stack (Georgia, Cambria fallback)
2. **Geometric sans** — body, navigation, descriptors
   - References: TO BE DETERMINED
   - Use Inter via `@fontsource/inter` as placeholder
3. **Monospace** — system UI moments, tags, meta, small caps labels
   - References: TO BE DETERMINED
   - Use JetBrains Mono via `@fontsource/jetbrains-mono` as placeholder
4. **Personal handwriting** — scanned from real pen-on-paper, used sparingly
   - Placement: footer sign-off and 2–3 small annotation moments
   - Purpose: warm counterweight to the system-UI references
   - Placeholder: Caveat (but prefer Homemade Apple or Sacramento for more confident signature feel)
   - Real scan to be made on white paper with a fine black pen, cleaned up in Photoshop

## Design Principles

- **Restraint over decoration.** The page breathes. Generous whitespace between sections.
- **Slow, deliberate motion.** Easing curves of 0.6–0.8 seconds, not snappy 0.3-second transitions. Apple uses 0.7s ease-out with custom cubic-beziers.
- **Conversational, first-person voice throughout.** Never corporate.
- **System UI as content, not decoration.** Familiar Apple/iOS/macOS elements (keycaps, stoplight buttons, text selection highlights, blinking cursors, Figma dropdowns) used as personality moments. Maximum 5 system-UI references on the homepage.
- **Personal handwriting used sparingly.** Maximum 4 handwriting moments across the homepage.
- **Color used with extreme restraint.** The off-white/black foundation carries the homepage. The yellow accent appears once per major section, maximum. Project-specific colors live on case study pages, not the homepage.
- **NO em dashes in any written copy.** Use commas, periods, parentheses, or colons instead. This is a hard rule for all writing for Nick.
- **The page must "wow" in 6 seconds.** Non-negotiable. This means motion and energy in the hero, not just sophisticated layout.

## Voice & Copy Rules

- First-person, reflective, conversational.
- Emotionally aware, youthful but informed.
- Warm and approachable, grounded in personal humanity.
- Structure tendency: vivid observation → personal reflection → broader insight.
- Sentence rhythm: intentionally varied. Uses expressive punctuation, Oxford commas, parentheses, conversational contractions.
- Blends academic and casual vocabulary naturally.
- Self-aware, emotionally present, with occasional cultural or historical connections.
- **NEVER use em dashes.**
- First person, always. "I" not "Nick is."
- Specific over abstract. "Suburb of Chicago" beats "Midwestern roots." "Command+Z tattoo" beats "passionate about design tools."
- Confident but not corporate. "I design AI products" beats "Energized multidisciplinary product designer."
- A little wink, never a full joke. Earnest first, funny second. Humor lands because it's quiet.
- Mix professional and personal. That's where bubbly + self-aware lives.

---

## Inspirations

### Professional (aesthetic direction)
- apple.com
- lifetime.life

### Portfolio references (the full list)
- **airladesigns.com** — overall vibe, motion in case study previews, sans + serif combo, intentional color
- **amylalai.com** — "breath of fresh air" feel
- **atumasova.webflow.io** — Apple system UI integration (the stoplight)
- **adasilv2.framer.website** — Figma UI inline with text. This is the big trend Nick wants to lean into.
- **arianekeona.com** — dark background, colored rounded blocks, playful CTA copy
- **belleduffner.com** — doodles, animations, color separation, gorgeous hero/footer
- **billguo.me** — comfortable coffee shop feel, typing/deleting component
- **brianyang.ca** — cursor interactions with components, fantastic motion design
- **calebwu.ca** — interesting interactions
- **chaachiedesigns.framer.website** — simple but effective
- **emmiwu.com** — WOW opening, beautiful hero, fun hover interactions, beautiful footer
- **victortran.dev** — vibe inspiration
- **miggyfajardo.com** — fun brand identity
- **lana-farkas.vercel.app** — fun space vibe
- **manasighutukade.work** — gorgeous motion and overall identity
- **liumichelle.com** — case studies open as overlays
- **nicolasdonati.framer.website** — scroll animations, case studies as overlays
- **owenhudock.design** — clean, gets to the point (Nick went to school with Owen)
- **nivedhanirmal.com** — gorgeous scroll, intentional color
- **rachelchen.tech** — AI chatbot, gorgeously simple, hover effects and motion
- **uxdayshankar.com** — WOW initial load, beautiful hover effects, playful
- **sanvithi.com** — clean restraint, conversational sign-off
- **leahkim.design** — software/UI elements used as personality

### Pattern across the inspiration list
- Conversational voice that sounds like a real person
- System UI references as inside jokes / identity
- Motion that reveals personality, not motion that flexes technical skill
- Color used as a project signal, not a portfolio signal
- Something playful in the footer
- Clear specialty inside the personality
- Heroes that DO something — they're not just centered text

## What to Avoid

- Hero photos of Nick
- Corporate boilerplate language ("multidisciplinary," "passionate about")
- Glassmorphism, heavy 3D, particle effects, WebGL flexes
- Empty placeholder states ("Currently / Previously at" with empty slots)
- Em dashes in any copy
- More than 5 system-UI references on a single page
- Handwriting used as body copy or section headers
- Snappy or jittery motion
- Centered, billboard-style text-only heroes (Nick rejected this direction explicitly)
- Apple-corporate restraint without playfulness (Claude overcorrected toward this initially)

---

## Case Studies (Priority Order)

All case studies follow the same five-section bones, even if proportions differ:

1. The actual problem (specific, frictiony, not "improve UX")
2. The research, even if just 5 user interviews
3. The thinking, including messy wireframes (real process is messy)
4. The thing that failed and what changed because of it — **this section is the differentiator for junior hires**
5. The outcome, the metric, the behavioral shift, or what would be measured next

**Priority order for buildout:**
1. **Vega** — strongest win (European Product Design Award), template for the others
2. **COAST** — highest hiring leverage (AI + sustainability + zero-to-one + team award)
3. **Abrazo** — mental health + wearable, humanizing
4. **Whirlpool** — NDA-constrained, creative challenges, blurred for confidentiality
5. **Honeywell** — blurred for confidentiality, "selected work" piece carried by strong positioning copy

---

## Technical Stack

- **Framework:** React with Tailwind CSS
- **Hosting:** Vercel (Hobby/free tier is sufficient)
- **Domain:** nickpratt.design (already owned, needs to eventually point DNS at Vercel)
- **Code:** Built with Claude Code
- **Repository:** GitHub (free)
- **SSL:** Automatic via Vercel

### Font loading
- Display serif: licensed font TBD; system serif fallback for now
- Geometric sans: licensed font TBD; `@fontsource/inter` fallback for now
- Monospace: licensed font TBD; `@fontsource/jetbrains-mono` fallback for now
- Handwriting placeholder: Caveat (or Homemade Apple, Sacramento) via Google Fonts; replace with real scan later

### Motion specs
- All motion respects `prefers-reduced-motion`

---

## Workflow

## Key Decisions Already Made

- ✅ Dark/light toggle with OS detection + localStorage persistence (NOT just one mode)
- ✅ Color appears mainly on case study pages, branded to each project
- ✅ Vibe-coded with Claude Code, deployed via Vercel
- ✅ Targeting NY market specifically as of May 2026

## Open Questions / TBD

- Final display serif font (will license eventually)
- Specific handwriting sign-off phrase: "Talk soon, Nick" / "Best, Nick" / "Sincerely, Nick"
- Exact accent colors for each case study page (project-specific palettes)
- Whether to use case study overlays (Liu Michelle pattern) or dedicated pages

---

## Working Notes for Claude

- Nick is a designer with strong taste, not a developer. Push back on him when his instincts are right; don't overcorrect to safety.
- When Nick says a design feels "boring" or "basic," believe him. He has good instincts.
- Don't lose the playful + alive energy in pursuit of Apple-grade restraint. Both have to coexist.
- The hero is the highest-stakes section. Get it right before moving on.
- **Em dashes are banned. Don't use them.**
- When showing options, give 2–3 real choices with honest trade-offs, not just one recommendation.
- Nick is on a ship deadline (mid-July 2026). Don't let perfectionism derail momentum.
- The portfolio doesn't need to be "perfect." It needs to be unmistakably Nick, unmistakably crafted, and unmistakably shipped.

---

## Pull Requests

- **Never merge a PR without explicit per-PR approval.** Creating branches, pushing, and opening PRs is fine — clicking merge is the user's decision.
- This applies to **both `staging` and `main`**. `main` deploys to the production domain via Vercel, so merging is a hard-to-reverse, outward-facing action.
- Stop at "PR opened, checks passing, ready for you to merge," then wait for an explicit instruction like "merge it" or "merge PR #N" before running `gh pr merge`.
- Treat vague phrasing like "create a file to merge into main" as "open the PR," **not** "merge it."
