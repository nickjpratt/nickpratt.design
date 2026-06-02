import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useAnimate, useReducedMotion } from 'motion/react'
import { Kerned, PRATT_KERN } from './Kerned'

const EASE = [0.65, 0, 0.35, 1] as const
const EASE_IN = [0.7, 0, 0.84, 0] as const
const START = { wght: 100, wdth: 62 }
const FINAL = { wght: 900, wdth: 125 }
const FONT_SIZE = '54vh'
const FIT = 0.9 // keep the words inside the window instead of bleeding off the edges
// Solo NICK sits one half-line above the block centre; nudge the block down so
// it reads as vertically centred while it is alone. ~ lineHeight/2 * FONT_SIZE.
const BLOCK_DOWN = '22vh'

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
 * The cinematic first-load intro. "NICK" fades in condensed/light while centred,
 * stretches to fill the window width and transforms via Archivo's wght + wdth
 * axes, then "PRATT" rises and compresses it into a tight two-line block. When it
 * completes the whole stage fades out, revealing the static hero underneath.
 * Skipped under prefers-reduced-motion.
 */
export function HeroIntro({ onDone }: { onDone?: () => void }) {
  const reduce = useReducedMotion()
  const [scope, animate] = useAnimate()
  const nickM = useRef<HTMLSpanElement>(null)
  const prattM = useRef<HTMLSpanElement>(null)
  const [gone, setGone] = useState<boolean>(reduce ?? false)

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
    const guard = window.setTimeout(finish, 6500)

    const run = async () => {
      // Measure each word's true width once the real font is loaded, so the
      // scaleX that fills the window is accurate (not based on a fallback font).
      if (document.fonts?.ready) {
        try {
          await document.fonts.ready
        } catch {
          /* ignore */
        }
      }
      if (cancelled) return
      const vw = window.innerWidth
      const fn = (vw * FIT) / (nickM.current?.offsetWidth || vw)
      const fp = (vw * FIT) / (prattM.current?.offsetWidth || vw)

      animate('.block', { y: BLOCK_DOWN }, { duration: 0 })
      animate('.nick', { opacity: 0, scaleX: fn * 0.42, scaleY: 1, ['--wght']: START.wght, ['--wdth']: START.wdth, letterSpacing: '0em' }, { duration: 0 })
      animate('.pratt', { opacity: 1, scaleX: fp, scaleY: 1, ['--wght']: FINAL.wght, ['--wdth']: FINAL.wdth, y: '180%' }, { duration: 0 })

      await animate('.nick', { opacity: 1 }, { duration: 0.4, ease: EASE })
      if (cancelled) return
      await animate('.nick', { scaleX: fn, scaleY: 1.7, ['--wght']: FINAL.wght, ['--wdth']: FINAL.wdth, letterSpacing: '-0.04em' }, { duration: 0.8, ease: EASE })
      if (cancelled) return
      await new Promise((r) => setTimeout(r, 200))
      if (cancelled) return
      animate('.pratt', { y: '0%' }, { duration: 0.8, ease: EASE })
      animate('.block', { y: '0vh' }, { duration: 0.8, ease: EASE })
      await animate('.nick', { scaleY: 1 }, { duration: 0.8, ease: EASE })
      if (cancelled) return
      await new Promise((r) => setTimeout(r, 260))
      if (cancelled) return
      // Heartbeat: a couple of realistic lub-dub pumps.
      await animate('.block', { scale: [1, 1.06, 1.01, 1.045, 1] }, { duration: 0.72, repeat: 1, repeatDelay: 0.34, ease: [0.36, 0, 0.2, 1] })
      if (cancelled) return
      // Final pump flies forward (old-Twitter-launch style) as the stage fades out.
      animate(scope.current, { opacity: 0 }, { duration: 0.55, ease: EASE_IN })
      await animate('.block', { scale: 9 }, { duration: 0.6, ease: [0.55, 0, 0.85, 0.2] })
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
  }, [reduce])

  if (gone) return null

  return (
    <div
      ref={(el) => {
        scope.current = el as HTMLElement
      }}
      aria-hidden
      className="fixed inset-0 z-[55] flex flex-col items-center justify-center overflow-hidden bg-paper text-ink"
    >
      <span ref={nickM} style={measureStyle}><Kerned text="Nick" /></span>
      <span ref={prattM} style={measureStyle}><Kerned text="Pratt" kern={PRATT_KERN} /></span>

      <div className="block flex flex-col items-center will-change-transform" style={{ transform: `translateY(${BLOCK_DOWN})` }}>
        <span
          className="nick origin-center will-change-transform"
          style={{ ...wordStyle, opacity: 0, ['--wght' as string]: START.wght, ['--wdth' as string]: START.wdth }}
        >
          <Kerned text="Nick" />
        </span>
        <span
          className="pratt origin-center will-change-transform"
          style={{ ...wordStyle, ['--wght' as string]: FINAL.wght, ['--wdth' as string]: FINAL.wdth, transform: 'translateY(180%)' }}
        >
          <Kerned text="Pratt" kern={PRATT_KERN} />
        </span>
      </div>
    </div>
  )
}
