# Research & Strategy — Portfolio Rebuild

Compiled June 2, 2026 from four parallel research streams: (1) junior UX hiring-market reality 2025–2026, (2) UX/graphic design trends for 2026, (3) analysis of Nick's 21 inspiration sites, (4) audit of the current live nickpratt.design. This is the strategic foundation for the rebuild. Companion to `CLAUDE.md` (which holds brand rules and voice).

---

## 1. The market we're designing for (2025–2026)

The junior market is brutal but not closed:

- Entry-level UX roles get **up to 1,000 applications**; under 5% of roles target juniors.
- Hiring managers spend **6–12 seconds** on a first impression, **~60 seconds** per case study. One manager reviewed 842 portfolios in 48 hours.
- BUT: 82% of design leaders say their need for designers is steady or rising; ~70% planned to recruit UX in 2026. The bar is high, the door isn't shut.

**What actually earns a callback** (consistent across hiring managers, recruiters, NN/g):

1. **The first screen places you in under 5 seconds** — domain + point of view + level. If a reviewer can't place you fast, they don't invest further. This is the single most-cited make-or-break.
2. **Visible judgment** via decision structure: Context → Constraint → Decision → Trade-off → Outcome. "If decisions are implicit, judgment can't be evaluated, and judgment is what gets hired."
3. **A measurable delta** — a metric, a behavior change, or an honest "here's what I'd measure next." No delta reads as low-leverage.
4. **The pivot / the thing that failed.** "Perfection signals inexperience." 78% of hiring managers are skeptical of case studies with no pivots. THE junior differentiator — and already a CLAUDE.md priority.
5. **Two deep projects over many shallow ones** — "develop two projects so thoroughly I can grill you for 30 minutes." 2–3 strong case studies, not 5 padded ones.
6. **Directional positioning, tailored per application** — generic "appeal to everyone" dilutes matching.

**Instant rejects:** the "bootcamp skeleton" (Empathize/Define/Ideate openers), stock personas ("wants to save time"), final mockups with no context, vague problem statements, suspiciously perfect work, em dashes/typos, naked password walls.

**AI fluency is genuinely valued — but the bar moved.** "I made a prototype with AI" impresses no one in 2026. Credible AI fluency now means: directing/critiquing AI output with precision, building real *systems* (not one-screen demos), designing AI/agentic *experiences*, and AI receding into the background (NN/g warns of "AI fatigue" and "AI slop"). **Vibe-coding this portfolio with Claude Code and shipping to Vercel is itself a live demonstration of a top hiring signal** — but only if it reads as a real, system-driven product. COAST (AI + sustainability) is the case study that must visibly carry the AI-fluency claim.

**The meta-point:** UI is now cheap to produce. The durable edge is "curated taste, contextual understanding, critical thinking, careful judgment." Taste and judgment win the offer; AI fluency just gets you past the screen. This is exactly the "distinctive and crafted" bar.

---

## 2. Design trends to ride and avoid (2026)

The CLAUDE.md direction is well-aligned with mid-2026 reality. Specifics:

**Ride these (on-trend AND on-brand):**
- **Multi-voice type** with a real **monospace voice** (not just a fallback) — mono has gone fully mainstream as a brand signal (Geist Mono, Söhne Mono; JetBrains Mono is the safe default). Serif revival is editorial and current. Oversized expressive type, variable + kinetic type, `clamp()` fluid sizing.
- **System UI as personality** — command-line/terminal aesthetics, keycaps, cursors, system chrome used as a personality device. On-trend with cultural tailwind, prevalent enough to read but not yet cliché — *if* specific to the person (Command+Z, keycap toggle) rather than generic retro-Mac pastiche.
- **Editorial / anti-grid layouts**, asymmetry, "archival index" / museum-catalogue structure (ideal for a portfolio), radical brevity / TL;DR scannability.
- **Grain / paper / noise texture** — a deliberate anti-AI-slop signal, "feels real and less computer-perfect." Supports the handwriting + editorial-warmth direction.
- **Purposeful motion** — scroll-driven (GSAP + native CSS `scroll()`/`view()`), cursor interactions, typing components, progressive stacked-fragment hero reveals. Reduced-motion support is baseline.
- **Disciplined palette + one confident accent** — reads as intentional against the 2026 "dopamine color" wave.
- **Dark mode is table stakes** — differentiate via the *toggle's* personality (the keycap control), not the feature itself.

**Avoid these (tired / dated in 2026):**
- Textbook **bento grids** (now reads as safe/templated — bend or break it instead).
- Glossy **glassmorphism / "Liquid Glass"** mimicry (backlash building).
- **Default gradients** everywhere, and especially the **AI-default look** (gradient + four-point sparkle logo).
- AI-slop imagery, AI portrait fads, Canva-template layouts, motion for motion's sake.
- The real 2026 cliché is **indiscriminate trend-chasing itself.** Intentional, authored use of any device is what reads as crafted.

---

## 3. What the inspiration set teaches (common threads + signature moves)

Across the 19 reachable sites, the repeating patterns:

1. **Conversational first-person hero in the first sentence** — "Hi, I'm ___, a ___ who ___." Warmth + a specific specialty in one breath.
2. **The footer carries the emotion** — consistently the most human moment (garden metaphors, "made with care," "let's be friends :)"). Where personality fully exhales. Validates the handwriting sign-off plan.
3. **A playful "made-with" credit** — "Built with NextJS, Claude, Figma. And a lot of love."
4. **Specificity as the credibility engine** — real addresses, real stats, employer names inline. Never "improved UX."
5. **Status / freshness signals** — "OPEN FOR WORK," "updated May 2026," changelog links, GitHub graphs.
6. **A dedicated "off-duty" zone** — "Play," "Fun," "Friends," "Sandbox" — personality kept separate from the work so it never dilutes case studies.
7. **System-UI / developer affordances as identity** — keycaps `[A][W][C]`, bracketed nav `[ WORK ]`, copy buttons, AI chatbots named after the person.
8. **Tight case study index copy** — title → one-line value prop → context. Depth saved for inside.
9. **Overlay vs. dedicated pages is intentional, not default** (Liu Michelle/Donati overlays vs. Emmi Wu/Owen pages).

**Highest-leverage signature moves to steal (ranked):**
1. **Inline keycap affordances (Victor Tran)** — a working **⌘Z keycap that visibly undoes something on the page**, tying Nick's tattoo to a functional system-UI moment. The single best steal in the set.
2. **Stat-as-hook case openers (Manasi)** — lead each case study with the painful number, not the project name. Exactly the mandated "actual problem" section.
3. **Project status pills (Rachel Chen — Shipped / Concept / Handed off)** — lets Whirlpool/Honeywell be framed gracefully, no empty-placeholder vibes.
4. **Progressive stacked-fragment hero (Brian Yang)** — reveal identity line by line; gives slow 0.6–0.8s motion while still "doing something" in 6 seconds, no WebGL flex.
5. **Hidden / rewarding footer (Caleb Wu — "you found my super secret footer")** + changelog timestamp — pairs perfectly with the handwriting sign-off.
6. **Phonetic name spelling (Ariane — "/are-ee-on/")** — one-line personality device.
7. **Self-named AI widget (Rachel Chen — "RacheLLM")** — on-brand for AI-fluent positioning, a 6-second wow.
8. **The "made-with" credit** pulling real personal details (iced strawberry matcha, Trader Joe's, ⌘Z).
9. **A named "Play/Fun" section** so Nick can be bubbly without compromising product-grade restraint.

Notes: atumasova (the stoplight reference) blocks crawlers — Nick should screenshot it manually. Bill Guo's typing component and Miggy's case studies are currently in "under construction" states.

---

## 4. Current site audit + case study inventory

The current Framer site has genuinely good human content buried under junior-corporate framing.

**What works (keep the DNA):** "Half Designer, Half Hot Dog Critic," the Chicago corn emoji, **"My best friend: ⌘Z"** (the tattoo is already on the site), the Trader Joe's/hot-dog bio, and Abrazo's first-person vulnerability ("I personally have an anxiety disorder") — the single most differentiating piece of writing he has. Real, verifiable awards (EPDA Winner, multiple Indigo, Summa Cum Laude).

**What's weak (fix in rebuild):**
- **Hero copy is textbook corporate-junior** and violates the brief's own rules: "energized, curious, award-winning multidisciplinary UX Designer passionate about creating engaging and intuitive experiences that enhance user satisfaction and exceed their expectations." Five adjectives, no specificity, no point of view, no AI angle. **Highest-priority rewrite.**
- **Em dashes are live** ("continue the conversation —") — violates the hard rule.
- **Visible placeholder bugs:** Vega's Highlights block shows "0 / 0%"; COAST shows "999,999,000 metric tons." Both read as unfinished on serious pages.
- **Inconsistent finish is the biggest credibility risk:** a manager clicking COAST (the AI story they most want) hits "under construction"; clicking Whirlpool hits a password wall. Two of four headline projects are dead ends.
- **Framer-stock feel** — every case study uses the same rigid Overview→Highlights→Recognition→Problem→Research template. Reads as "I followed the formula," not "I have taste." No editorial voice, no system-UI moments, no character-revealing motion.
- **Missing the "what failed" section** across all five.

**The clean signal:** everything memorable on the current site is human and specific; everything weak is generic and corporate. When Nick writes from lived experience ("I had no clue how passionate people were about their laundry") the voice is unmistakably his. When he writes "professional summary" copy it collapses into résumé boilerplate. **The rebuild's copy job: make all of it sound like the lived-experience writing, none of it like the hero.**

### Case study completeness (raw material on hand)

| Project | Public completeness | Verdict | What's missing |
|---|---|---|---|
| **Vega** (EPDA Winner) | ~85% | Ship-ready after fixes | Fill "0/0%" Highlights; add a failure/what-changed section |
| **Abrazo** (HM, IDA) | ~60% | Strong, personal raw material | Brand Identity, User Persona, Highlights (empty headers); write up solution screens; failure section |
| **COAST** (AI + sustainability, award) | ~40% | Highest leverage, least built | Iteration, Final Solution, Reflection from scratch; real screens, outcome, metrics |
| **Whirlpool** (NDA) | ~10% public | Gated dead-end | Public NDA-safe narrative: blurred visuals + told-not-shown process |
| **Honeywell** | 0% — does not exist | Net-new or drop | Everything, or formally cut from scope |
| **Bleisure** (2023, first project) | ~70% | Weakest; no award | Decide: cut or demote to Play |

Vega's research (8 interviews, 107 surveys, 14 usability tests, 3 rounds of testing with real success-rate deltas) and Abrazo's (competitor analysis, 52-person survey, biometric discovery, personal framing) are genuinely rich and reusable. COAST has solid research + expert quotes (mentor Tim Gallaudet) but no design or outcome. So we start with ~2.5 usable case studies of content, one gated NDA project, one half-built AI project, and one that doesn't exist yet.

### Real awards (verified, with links)
- Winner, **Vega** — European Product Design Awards, Dec 2025
- 2026 Student Winner, **COAST** — Indigo Design Awards, Mar 2026
- Honorable Mention, **COAST** — International Design Awards, Dec 2025
- 2025 Student Winner, **Vega** — Indigo Design Awards, Mar 2025
- Honorable Mention, **Abrazo** — International Design Awards, Dec 2024
- Summa Cum Laude + Dean's List — SCAD

---

## 5. Strategic direction for the rebuild

Synthesizing all four streams into the plan:

1. **Hero is the whole game.** It must place Nick (first-gen SCAD grad → AI-fluent product designer with a point of view) in under 5 seconds, wow in 6, and sound like his lived-experience voice — not the current boilerplate. The typing/deleting "Currently ______" component lives here. Keep the keycap/⌘Z motif functional, not decorative.
2. **Go deep on 2–3, not wide on 5.** Vega + COAST + Abrazo are the spine (each has an award and a strong human angle; COAST carries AI fluency). Whirlpool becomes an NDA-safe "selected work" piece. Bleisure and a net-new Honeywell are open decisions (lean: cut/demote Bleisure; Honeywell only if there's real material).
3. **Every case study gets the same five honest bones** (per CLAUDE.md), explicitly including **the pivot / what failed** — the junior differentiator the research triple-confirmed. Lead each with a stat-as-hook, structure for a 60-second skim, reward the deep read.
4. **System-UI personality, used with restraint** (max 5 per homepage): functional ⌘Z keycap, keycap dark-mode toggle, text-selection highlights, blinking cursor, maybe an inline Figma/OS chrome moment. Specific to Nick, never generic retro-Mac.
5. **The footer is where the soul lives** — handwriting sign-off (end of a letter/email), the "made with iced strawberry matcha" credit, maybe a hidden/rewarding moment.
6. **Color stays disciplined** — off-white/black foundation carries the homepage; one accent per section; project colors live on case study pages.
7. **Ship it as a real system** — tokens, consistent components, considered motion, reduced-motion support — because the site itself is the AI-fluency proof.

---

## 6. Decisions made (June 2, 2026)

- **Case study lineup:** all five, Vega + COAST + Abrazo + Whirlpool (NDA-safe) + a net-new **Honeywell**. Bleisure moves to Play or is cut. (Honeywell has zero existing material; raw content needed from Nick when we reach it.)
- **Content production:** **one case study at a time, Vega first** as the template (it is ~85% complete), then repeat the locked pattern for the rest.
- **Build sequencing:** **hero + homepage shell first.** Nail the highest-stakes 6 seconds before case studies.
- **Case study presentation:** **hybrid**, open as overlays (the Liu Michelle / Nicolas Donati feel) with a real shareable URL underneath for per-application deep-linking.
- **Tech stack (confirmed + scaffolded):** React 19 + Vite + Tailwind v4 + Motion + Phosphor icons, deployed via the existing Vercel / `staging`-to-`main` flow.
  - Type voices (variable fonts, self-hosted via fontsource): **Newsreader** (serif personality), **Geist** (sans), **Geist Mono** (system-UI / meta), **Caveat** (handwriting placeholder until Nick's real pen scan).
  - Foundation: warm off-white `#f4f2ec` / warm near-black `#15140f`, single gold accent (`#c8911b` light, `#f2c14e` dark), grain texture, slow `cubic-bezier(0.16,1,0.3,1)` motion. Semantic color tokens swap on `[data-theme]`; theme persists in `localStorage` with a no-flash inline script.

### Phase 1 status (in progress)

Built: design system, no-flash dark/light with a keycap toggle, grain, Apple text-selection highlight. Hero with the **functional ⌘Z undo headline** (résumé boilerplate, struck out, undone into the real point of view), the **"Currently ______" typing component**, availability status, CTAs. Homepage shell: selected-work index (stat-hook rows + honest status pills), about teaser (with handwriting accent), footer (handwritten sign-off + "made-with" credit). System-UI references on the homepage: ⌘Z keycap, keycap theme toggle, blinking caret, text-selection highlight (4 of max 5).

Open for Nick's review: hero composition and vertical rhythm, the boilerplate-to-⌘Z concept, the exact accent yellow, the "Currently" phrases (need his real voice), and the hero point-of-view headline copy.

---

*Primary sources are cited in the four source briefs. Key references: NN/g State of UX 2026, UX Planet "11 Hiring Red Flags," Leor Wolins "Junior UX Hunger Games 2026," Indeed Design hiring-manager advice, Figma/Webflow/Tubik 2026 trend reports, Creative Boom "trends creatives are so over 2026."*
