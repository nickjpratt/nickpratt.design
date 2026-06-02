import { useEffect, useState, type CSSProperties } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const EASE_IN = [0.7, 0, 0.84, 0] as const

// Anybody is a variable font with a wide width axis (wdth 50..150); animating it
// gives a real letter-stretch, not a fake scale.
const stretchFont: CSSProperties = {
  fontFamily: '"Anybody Variable", system-ui, sans-serif',
  fontVariationSettings: '"wght" 850, "wdth" var(--wdth)',
  fontSize: 'min(40vh, 26vw)',
  lineHeight: 0.78,
}

/**
 * First-load reveal (rare event, expressive motion welcome).
 * "NICK" fills the whole screen and its letters stretch wide (variable width
 * axis). "PRATT" rises from the bottom and compresses NICK's height as it lands.
 * Then the full-bleed stage dissolves into the settled hero underneath (same
 * background, so no seam). Skipped under prefers-reduced-motion.
 */
export function HeroIntro() {
  const reduce = useReducedMotion()
  const [leaving, setLeaving] = useState(false)
  const [gone, setGone] = useState<boolean>(reduce ?? false)

  useEffect(() => {
    if (reduce) {
      setGone(true)
      return
    }
    document.body.style.overflow = 'hidden'
    const start = window.setTimeout(() => setLeaving(true), 1750)
    // Hard fallback so the page can never get stuck behind the overlay.
    const guard = window.setTimeout(() => {
      document.body.style.overflow = ''
      setGone(true)
    }, 3400)
    return () => {
      window.clearTimeout(start)
      window.clearTimeout(guard)
      document.body.style.overflow = ''
    }
  }, [reduce])

  if (gone) return null

  const onLeaveDone = () => {
    if (!leaving) return
    document.body.style.overflow = ''
    setGone(true)
  }

  return (
    <motion.div
      aria-hidden
      className="zone-yellow fixed inset-0 z-[55] overflow-hidden bg-paper text-ink"
      animate={{ opacity: leaving ? 0 : 1, scale: leaving ? 1.05 : 1 }}
      transition={{ duration: 0.55, ease: leaving ? EASE_IN : EASE_OUT }}
      onAnimationComplete={onLeaveDone}
    >
      {/* NICK: top half, fills the screen then compresses to half as PRATT lands */}
      <motion.div
        className="absolute inset-x-0 top-0 flex h-1/2 origin-top items-center justify-center overflow-hidden will-change-transform"
        initial={{ scaleY: 2 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.9, delay: 0.6, ease: EASE_OUT }}
      >
        <motion.span
          className="font-extrabold uppercase will-change-transform"
          style={{ ...stretchFont, ['--wdth' as string]: 50 } as CSSProperties}
          initial={{ opacity: 0, ['--wdth' as string]: 50 }}
          animate={{ opacity: 1, ['--wdth' as string]: 150 }}
          transition={{ duration: 0.85, ease: EASE_OUT }}
        >
          Nick
        </motion.span>
      </motion.div>

      {/* PRATT: bottom half, rises from below */}
      <div className="absolute inset-x-0 bottom-0 flex h-1/2 items-center justify-center overflow-hidden">
        <motion.span
          className="font-extrabold uppercase will-change-transform"
          style={{ ...stretchFont, ['--wdth' as string]: 50 } as CSSProperties}
          initial={{ y: '110%', opacity: 0, ['--wdth' as string]: 50 }}
          animate={{ y: '0%', opacity: 1, ['--wdth' as string]: 150 }}
          transition={{ duration: 0.9, delay: 0.6, ease: EASE_OUT }}
        >
          Pratt
        </motion.span>
      </div>
    </motion.div>
  )
}
