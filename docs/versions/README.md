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
