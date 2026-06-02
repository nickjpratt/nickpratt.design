import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react'
import { useAnimate, useReducedMotion } from 'motion/react'

const EASE = [0.65, 0, 0.35, 1] as const
const EASE_IN = [0.7, 0, 0.84, 0] as const
const START = { wght: 100, wdth: 62 }
const FINAL = { wght: 900, wdth: 125 }
const FONT_SIZE = '54vh'

const wordStyle: CSSProperties = {
  fontFamily: 'var(--font-display)',
  fontVariationSettings: '"wght" var(--wght), "wdth" var(--wdth)',
  fontSize: FONT_SIZE,
  lineHeight: 0.82,
  letterSpacing: '-0.04em',
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  display: 'block',
}

const measureStyle: CSSProperties = {
  ...wordStyle,
  position: 'absolute',
  visibility: 'hidden',
  pointerEvents: 'none',
  left: 0,
  top: 0,
  ['--wght' as string]: FINAL.wght,
  ['--wdth' as string]: FINAL.wdth,
}

/**
 * The cinematic first-load intro. "NICK" fades in condensed/light, stretches
 * edge-to-edge and transforms via Archivo's wght + wdth axes, then "PRATT"
 * rises and compresses it into a tight two-line block. When it completes the
 * whole stage fades out, revealing the static hero underneath.
 * Skipped under prefers-reduced-motion.
 */
export function HeroIntro({ onDone }: { onDone?: () => void }) {
  const reduce = useReducedMotion()
  const [scope, animate] = useAnimate()
  const nickM = useRef<HTMLSpanElement>(null)
  const prattM = useRef<HTMLSpanElement>(null)
  const [fill, setFill] = useState({ nick: 1.2, pratt: 1.05 })
  const [gone, setGone] = useState<boolean>(reduce ?? false)

  useLayoutEffect(() => {
    const measure = () => {
      const vw = window.innerWidth
      const n = nickM.current?.offsetWidth || vw
      const p = prattM.current?.offsetWidth || vw
      setFill({ nick: vw / n, pratt: vw / p })
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  useEffect(() => {
    if (reduce) {
      onDone?.()
      setGone(true)
      return
    }
    document.body.style.overflow = 'hidden'
    let cancelled = false
    const finish = () => {
      document.body.style.overflow = ''
      onDone?.()
      setGone(true)
    }
    const guard = window.setTimeout(finish, 3800)

    const run = async () => {
      animate('.nick', { opacity: 0, scaleX: fill.nick * 0.42, scaleY: 1, ['--wght']: START.wght, ['--wdth']: START.wdth, letterSpacing: '0em' }, { duration: 0 })
      animate('.pratt', { opacity: 1, scaleX: fill.pratt, scaleY: 1, ['--wght']: FINAL.wght, ['--wdth']: FINAL.wdth, y: '180%' }, { duration: 0 })

      await animate('.nick', { opacity: 1 }, { duration: 0.4, ease: EASE })
      if (cancelled) return
      await animate('.nick', { scaleX: fill.nick, scaleY: 1.7, ['--wght']: FINAL.wght, ['--wdth']: FINAL.wdth, letterSpacing: '-0.04em' }, { duration: 0.8, ease: EASE })
      if (cancelled) return
      await new Promise((r) => setTimeout(r, 200))
      if (cancelled) return
      animate('.pratt', { y: '0%' }, { duration: 0.8, ease: EASE })
      await animate('.nick', { scaleY: 1 }, { duration: 0.8, ease: EASE })
      if (cancelled) return
      await new Promise((r) => setTimeout(r, 150))
      await animate(scope.current, { opacity: 0 }, { duration: 0.5, ease: EASE_IN })
      window.clearTimeout(guard)
      finish()
    }
    run()
    return () => {
      cancelled = true
      window.clearTimeout(guard)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, fill.nick, fill.pratt])

  if (gone) return null

  return (
    <div
      ref={(el) => {
        scope.current = el as HTMLElement
      }}
      aria-hidden
      className="fixed inset-0 z-[55] flex flex-col items-center justify-center overflow-hidden bg-paper text-ink"
    >
      <span ref={nickM} style={measureStyle}>Nick</span>
      <span ref={prattM} style={measureStyle}>Pratt</span>

      <span
        className="nick origin-center will-change-transform"
        style={{ ...wordStyle, opacity: 0, ['--wght' as string]: START.wght, ['--wdth' as string]: START.wdth }}
      >
        Nick
      </span>
      <span
        className="pratt origin-center will-change-transform"
        style={{ ...wordStyle, ['--wght' as string]: FINAL.wght, ['--wdth' as string]: FINAL.wdth, transform: 'translateY(180%)' }}
      >
        Pratt
      </span>
    </div>
  )
}
