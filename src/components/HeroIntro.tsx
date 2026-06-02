import { useEffect, useState } from 'react'
import { useAnimate, useReducedMotion } from 'motion/react'

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const EASE_IN = [0.7, 0, 0.84, 0] as const

/**
 * First-load reveal (rare event, so expressive motion is welcome).
 * "NICK" stretches in full-bleed, "PRATT" rises from the bottom, then the whole
 * stage dissolves to reveal the settled hero underneath. The overlay shares the
 * hero's exact background (zone-yellow / Midnight) so there is no seam.
 * Skipped entirely under prefers-reduced-motion.
 */
export function HeroIntro() {
  const reduce = useReducedMotion()
  const [scope, animate] = useAnimate()
  const [gone, setGone] = useState(reduce ?? false)

  useEffect(() => {
    if (reduce) {
      setGone(true)
      return
    }
    let finished = false
    document.body.style.overflow = 'hidden'
    const cleanup = () => {
      document.body.style.overflow = ''
    }
    const finish = () => {
      if (finished) return
      finished = true
      cleanup()
      setGone(true)
    }
    // Hard fallback so the page can never get stuck behind the overlay.
    const guard = window.setTimeout(finish, 3200)

    ;(async () => {
      // NICK appears condensed and stretches wide; PRATT rises from the mask.
      animate('.intro-nick', { opacity: [0, 1], scaleX: [0.42, 1], scaleY: [1.16, 1] }, { duration: 0.85, ease: EASE_OUT })
      animate('.intro-pratt', { opacity: [0, 1], y: ['110%', '0%'] }, { duration: 0.8, delay: 0.5, ease: EASE_OUT })
      await new Promise((r) => setTimeout(r, 1550)) // let both land + a brief hold
      await animate(scope.current, { opacity: [1, 0], scale: [1, 1.06] }, { duration: 0.6, ease: EASE_IN })
      finish()
    })()

    return () => {
      window.clearTimeout(guard)
      cleanup()
    }
  }, [reduce, animate, scope])

  if (gone) return null

  return (
    <div
      ref={scope}
      aria-hidden
      className="zone-yellow fixed inset-0 z-[55] flex flex-col items-center justify-center bg-paper text-ink"
    >
      <div className="font-display font-extrabold uppercase leading-[0.8] tracking-[-0.04em] text-[clamp(72px,19vw,300px)]">
        <div className="intro-nick origin-center will-change-transform">Nick</div>
        <div className="overflow-hidden">
          <div className="intro-pratt will-change-transform">Pratt</div>
        </div>
      </div>
    </div>
  )
}
