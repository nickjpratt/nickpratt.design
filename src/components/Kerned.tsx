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

// "Pratt" -> P(0) r(1) a(2) t(3) t(4). Leave P|R and R|A at the font's natural
// spacing (to match NICK's rhythm); tuck the T into the open A|T gap; overlap the
// two T's so their crossbars connect.
export const PRATT_KERN: Kern = {
  2: 0.02, // R | A
  3: -0.1, // A | T  (close the open gap so the T does not stick out)
  4: 0.02, // T | T  (separated, per Nick)
}
