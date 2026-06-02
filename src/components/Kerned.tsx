/** Per-character left-margin (em) overrides, keyed by character index. */
export type Kern = Record<number, number>

/**
 * Renders a word as individual letter spans so specific pairs can be hand-kerned
 * (heavy display weights at large sizes need optical corrections the font's own
 * kerning doesn't cover). Margins are in em, so they scale with font-size and any
 * scaleX stretch applied to the parent.
 */
export function Kerned({ text, kern }: { text: string; kern?: Kern }) {
  return (
    <>
      {Array.from(text).map((ch, i) => {
        const m = kern?.[i]
        return (
          <span key={i} style={m != null ? { marginLeft: `${m}em` } : undefined}>
            {ch}
          </span>
        )
      })}
    </>
  )
}

// "Pratt" -> P(0) r(1) a(2) t(3) t(4). Tighten P|R and A|T; overlap the two T's
// so their crossbars connect.
export const PRATT_KERN: Kern = {
  1: -0.05, // P | R
  3: -0.06, // A | T
  4: -0.15, // T | T  (connect crossbars)
}
