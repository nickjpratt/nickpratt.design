import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

// Specific and a little playful, never corporate. No em dashes.
const PHRASES = [
  'sweating the small details',
  'debating a typeface choice for too long.',
  'considering becoming a plant parent.',
  'kerning because I care.',
  'still debating that typeface choice.',
  'choosing the perfect color palette.',
  'testing hover effects for fun.',
]

const TYPE_MS = 52
const HOLD_FULL_MS = 1500 // pause after a line finishes typing
const SELECT_MS = 26 // per-char shift+left-arrow selection speed
const HOLD_SELECTED_MS = 360 // pause with the line fully selected, before delete

type Phase = 'typing' | 'selecting'

export function CurrentlyTyping() {
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? PHRASES[0] : '')
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')
  const [sel, setSel] = useState(0) // chars selected from the right (the shift+left run)
  const current = PHRASES[idx % PHRASES.length]

  useEffect(() => {
    if (reduce) return
    let t: number

    if (phase === 'typing') {
      if (display === current) {
        t = window.setTimeout(() => {
          setPhase('selecting')
          setSel(0)
        }, HOLD_FULL_MS)
      } else {
        t = window.setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          TYPE_MS,
        )
      }
    } else {
      // selecting: caret walks left, growing the highlight from the end
      if (sel >= display.length) {
        t = window.setTimeout(() => {
          setDisplay('')
          setSel(0)
          setIdx((i) => (i + 1) % PHRASES.length)
          setPhase('typing')
        }, HOLD_SELECTED_MS)
      } else {
        t = window.setTimeout(() => setSel((s) => s + 1), SELECT_MS)
      }
    }

    return () => clearTimeout(t)
  }, [display, phase, sel, idx, reduce, current])

  const split = display.length - sel // caret position / start of selection

  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-faint">
        Currently
      </span>
      <span className="font-sans text-[17px] leading-[1.4] text-ink md:text-[19px]">
        {phase === 'selecting' && !reduce ? (
          <>
            {display.slice(0, split)}
            <span className="caret" aria-hidden />
            <span className="bg-[var(--color-highlight)] text-[var(--color-highlight-ink)]">
              {display.slice(split)}
            </span>
          </>
        ) : (
          <>
            {display}
            {!reduce && <span className="caret" aria-hidden />}
          </>
        )}
      </span>
    </p>
  )
}
