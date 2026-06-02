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

const TYPE_MS = 55
const DELETE_MS = 28
const HOLD_FULL_MS = 1700
const HOLD_EMPTY_MS = 420

export function CurrentlyTyping() {
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? PHRASES[0] : '')
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduce) return
    const current = PHRASES[index % PHRASES.length]

    // Reached the full phrase: hold, then start deleting.
    if (!deleting && display === current) {
      const t = setTimeout(() => setDeleting(true), HOLD_FULL_MS)
      return () => clearTimeout(t)
    }
    // Fully deleted: brief beat, then advance to the next phrase.
    if (deleting && display === '') {
      const t = setTimeout(() => {
        setDeleting(false)
        setIndex((i) => (i + 1) % PHRASES.length)
      }, HOLD_EMPTY_MS)
      return () => clearTimeout(t)
    }
    // Mid type / delete.
    const t = setTimeout(
      () =>
        setDisplay((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1),
        ),
      deleting ? DELETE_MS : TYPE_MS,
    )
    return () => clearTimeout(t)
  }, [display, deleting, index, reduce])

  return (
    <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-ink">
      <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-faint">
        Currently
      </span>
      <span className="font-serif text-[19px] italic leading-[1.3] text-ink md:text-[22px]">
        {display}
        <span className="caret" aria-hidden />
      </span>
    </p>
  )
}
