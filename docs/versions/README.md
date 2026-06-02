# Build Versions

A visual archive of every iteration of the portfolio, so we can always look back
and compare directions. Each version is a folder with screenshots (light + dark,
per section) and a short notes file. The newest version is at the bottom.

Convention: before any major redesign, snapshot the current build here as `vN/`
with `node scripts/shoot.mjs http://localhost:4319 docs/versions/vN`, then write
the notes. Code for each version is also preserved in git history.

---

## v1 — "Undo headline" (June 2, 2026)

First build. Editorial system-UI direction.

- Hero: serif point-of-view headline revealed by a functional ⌘Z "undo the
  boilerplate" animation, plus the "Currently ______" typing component.
- Work: a typographic list (no visuals) with status pills.
- About teaser + footer with handwritten sign-off.
- Stack: React 19 + Vite + Tailwind v4 + Motion + Phosphor. Four type voices
  (Newsreader / Geist / Geist Mono / Caveat), off-white + black + one gold accent.

**Nick's verdict:** does not wow. Feels generic, "safe template," ~50% baked.
The ⌘Z motion is interesting but too hidden. Nothing makes him stand out.
The work list has no visuals and no reason to click; wants a bento/grid with
imagery and cursor-follow hover labels ("Open case study", status, etc.).
Next: Mobbin research, then redesign hero + work section, bolder and more
distinctive, motion more present.

## v2 — "Living desktop" (June 2, 2026)

Mobbin-informed redesign. Key insight from research: heroes that wow have a
visual object, not just text (Resend's 3D cube, Fabric's floating cards); the
lone text portfolio in the results looked like the template trap v1 fell into.

- Hero: a living "desktop" scene leaning into Nick's "I bring software into my
  style." The "Currently ___" typing now lives inside a macOS **window**
  (traffic lights, `currently.txt`); **⌘Z keycaps** and a **Figma "Nick"
  cursor** float nearby. Everything drifts (idle float) and parallaxes to the
  pointer. Bolder serif headline. Retired the v1 boilerplate-undo animation.
- Work: **bento grid** of project-branded color tiles (Vega large/featured),
  big serif wordmarks, hooks, status. **Cursor-follow hover label** ("Open case
  study" / "In progress" / "Under NDA") that replaces the cursor over a tile.
- About + footer unchanged from v1.

**Note:** parallax, typing, and the cursor-follow label are live-only and do not
appear in these static screenshots. View at the dev server to judge motion.

**Nick's verdict on v2:** still not convinced; may need a full redesign. Loved
the highlight effect (incl. matching ::selection) and the work-section cursor
hovers. Asked to use the taste + impeccable skills and study Mobbin.

## v3 — "Midnight × Kinetic" (June 2, 2026) — CURRENT

Full redesign after the impeccable skill flagged v1/v2 as the 2026 AI-default
"editorial-typographic" lane (cream bg + serif + restraint; Newsreader is even
on the banned-font list). Nick reviewed four live direction mockups
(`/directions.html`, archived in `docs/versions/options`) and chose **Kinetic's
layout recolored into Midnight's dark palette**.

- Dark-primary (toggle + light variant kept). New tokens: near-black canvas,
  one yellow that is both accent and the highlight Nick loves.
- New fonts: **Archivo** (oversized display name), Geist (sans), Geist Mono
  (meta), Caveat (handwriting). Newsreader/serif retired.
- Hero: oversized "NICK PRATT" pops in on load, highlighted role line, the
  **typing component rebuilt** to type with a blinking caret, then select the
  whole line (yellow highlight) and delete it all at once before the next.
- Work: bento grid of glowing project-color tiles + cursor-follow hover labels.
- About + footer carried into the dark world; handwriting sign-off kept.

**Still to do:** real project imagery in the work tiles (currently glowing color
blocks); light-mode polish; case studies (Vega first).

## v4 — "Fraunces poster" (June 2, 2026) — CURRENT

Full hero rebuild to Nick's detailed spec. Foundation shifts from the yellow
drench to warm off-white #FAF9F6 / warm black #0E0E0E (yellow stays as the
accent + highlight). The yellow drench is retired.

- `HeroName`: a full-viewport (100dvh, zero padding) two-line poster. On load,
  "NICK" fades in thin/light, stretches edge-to-edge and physically transforms
  via Fraunces' real variable axes (opsz 9->144, wght 100->900), then "PRATT"
  rises from below and compresses "NICK" into the top half. 2.4s, cubic-bezier
  (0.65,0,0.35,1). Per-word measured scaleX fills the viewport exactly (Fraunces
  has no width axis, so scaleX does the horizontal fill).
- Scroll parallax: NICK rises, PRATT drops, both fade by ~80vh.
- `HeroIntro`: the inline-UI section below the poster (point-of-view line with
  the yellow highlight, the "Currently ___" typing line, CTAs), revealed on scroll.
- Nav gains an "Open to work" pill and fades in as the intro settles.
- a11y: sr-only <h1> "Nick Pratt, product designer."; full reduced-motion skip.
- Optional extras: hover "breathes" a word's weight (850<->950).

Trade-off to revisit: the point-of-view line now lives below the fold (the hero
is pure name poster), so the first screen places Nick by name + the nav pill only.

## v5 — "Archivo intro, fade to static hero" (June 2, 2026) — CURRENT

Cleanup of v4 per Nick.

- Name typeface back to **Archivo** (variable wght + wdth) for the intro; the
  cinematic behavior is unchanged (NICK stretches edge-to-edge and transforms via
  the wght/wdth axes, PRATT rises and compresses it). Typeface may change again.
- Leading cleaned up: the two words are a single centered block with tight
  line-height (0.82), so they sit snug with no awkward gap.
- The intro now **fades out into a regular static hero** (`HeroName`): name,
  point-of-view line with the highlight, the "Currently ___" typing line, and the
  CTAs, all within the first screen. No scrolling required to see content.
- Header untouched (the "Open to work" pill stays next to the name).
- `HeroIntro` = the animated overlay; `HeroName` = the static hero.
