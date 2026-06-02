import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

// Specific and a little playful, never corporate. No em dashes.
const PHRASES = [
  'manning the front desk at Life Time, daydreaming in Figma',
  'hunting the best Chicago dog in a brand-new city',
  'three iced strawberry matchas into the workday',
  'open to product design roles in New York',
  'undoing my mistakes (thanks, ⌘Z)',
]

const TYPE_MS = 52
const HOLD_FULL_MS = 1600 // pause after a line finishes typing
const HOLD_SELECTED_MS = 600 // pause while the line sits selected, before delete

type Phase = 'typing' | 'selected'

export function CurrentlyTyping() {
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? PHRASES[0] : '')
  const [idx, setIdx] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')
  const current = PHRASES[idx % PHRASES.length]

  useEffect(() => {
    if (reduce) return
    let t: number

    if (phase === 'typing') {
      if (display === current) {
        // finished typing this line: hold, then select the whole thing
        t = window.setTimeout(() => setPhase('selected'), HOLD_FULL_MS)
      } else {
        t = window.setTimeout(
          () => setDisplay(current.slice(0, display.length + 1)),
          TYPE_MS,
        )
      }
    } else {
      // line is selected: hold a beat, then delete it all and start the next
      t = window.setTimeout(() => {
        setDisplay('')
        setIdx((i) => (i + 1) % PHRASES.length)
        setPhase('typing')
      }, HOLD_SELECTED_MS)
    }

    return () => clearTimeout(t)
  }, [display, phase, idx, reduce, current])

  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
      <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-faint">
        Currently
      </span>
      <span className="font-sans text-[17px] leading-[1.4] text-ink md:text-[19px]">
        {phase === 'selected' && !reduce ? (
          <mark className="rounded-[2px] bg-[var(--color-highlight)] px-0.5 text-[var(--color-highlight-ink)]">
            {display}
          </mark>
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
