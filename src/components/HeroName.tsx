import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import { useAnimate, useReducedMotion, useScroll, useTransform, motion } from 'motion/react'

const EASE = [0.65, 0, 0.35, 1] as const
const START = { wght: 100, opsz: 9 }
const FINAL = { wght: 900, opsz: 144 }
const FONT_SIZE = '56vh'

// Shared Fraunces typography. The wght/opsz axes are driven by CSS variables so
// Motion can interpolate them; SOFT held at 0, line-height tight so lines touch.
const wordBase: CSSProperties = {
  fontFamily: 'var(--font-serif)',
  fontVariationSettings: '"opsz" var(--opsz), "wght" var(--wght), "SOFT" 0',
  letterSpacing: '-0.04em',
  lineHeight: 0.85,
  fontSize: FONT_SIZE,
  whiteSpace: 'nowrap',
  textTransform: 'uppercase',
}

const measureStyle: CSSProperties = {
  ...wordBase,
  position: 'absolute',
  visibility: 'hidden',
  pointerEvents: 'none',
  left: 0,
  top: 0,
  ['--wght' as string]: FINAL.wght,
  ['--opsz' as string]: FINAL.opsz,
}

export function HeroName({ onDone }: { onDone?: () => void }) {
  const reduce = useReducedMotion()
  const [scope, animate] = useAnimate()
  const sectionRef = useRef<HTMLElement | null>(null)
  const nickM = useRef<HTMLSpanElement>(null)
  const prattM = useRef<HTMLSpanElement>(null)
  const [fill, setFill] = useState({ nick: 1.2, pratt: 1.05 })

  // Measure each word's natural width to compute the scaleX that fills the viewport.
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

  // The 2.4s load choreography.
  useEffect(() => {
    if (reduce) {
      onDone?.()
      return
    }
    document.body.style.overflow = 'hidden'
    let cancelled = false
    const unlock = () => {
      document.body.style.overflow = ''
    }
    const run = async () => {
      // snap to initial
      animate('.nick', { opacity: 0, scaleX: fill.nick * 0.42, ['--wght']: START.wght, ['--opsz']: START.opsz, letterSpacing: '0em' }, { duration: 0 })
      animate('.nickwrap', { scaleY: 1, y: '25vh' }, { duration: 0 })
      animate('.prattwrap', { y: '50vh' }, { duration: 0 })
      animate('.pratt', { opacity: 1, scaleX: fill.pratt, ['--wght']: FINAL.wght, ['--opsz']: FINAL.opsz, letterSpacing: '-0.04em' }, { duration: 0 })

      // T0.0-0.4 — NICK fades in (condensed)
      await animate('.nick', { opacity: 1 }, { duration: 0.4, ease: EASE })
      if (cancelled) return
      // T0.4-1.2 — NICK stretches edge-to-edge + grows to full height
      animate('.nickwrap', { scaleY: 2 }, { duration: 0.8, ease: EASE })
      await animate('.nick', { scaleX: fill.nick, ['--wght']: FINAL.wght, ['--opsz']: FINAL.opsz, letterSpacing: '-0.04em' }, { duration: 0.8, ease: EASE })
      if (cancelled) return
      // T1.2-1.4 — hold
      await new Promise((r) => setTimeout(r, 200))
      if (cancelled) return
      // T1.4-2.2 — PRATT rises, NICK compresses to the top half
      animate('.prattwrap', { y: '0vh' }, { duration: 0.8, ease: EASE })
      await animate('.nickwrap', { scaleY: 1, y: '0vh' }, { duration: 0.8, ease: EASE })
      if (cancelled) return
      // T2.2 — settle + reveal the rest
      unlock()
      onDone?.()
    }
    run()
    // safety net
    const guard = window.setTimeout(() => {
      unlock()
      onDone?.()
    }, 3200)
    return () => {
      cancelled = true
      window.clearTimeout(guard)
      unlock()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce, fill.nick, fill.pratt])

  // Scroll parallax: the two words separate and fade as you scroll past the hero.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const nickY = useTransform(scrollYProgress, [0, 1], ['0vh', '-26vh'])
  const prattY = useTransform(scrollYProgress, [0, 1], ['0vh', '26vh'])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const breathe = (cls: string) => ({
    onHoverStart: () => !reduce && animate(cls, { ['--wght']: 950 }, { duration: 1, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' as const }),
    onHoverEnd: () => !reduce && animate(cls, { ['--wght']: FINAL.wght }, { duration: 0.5 }),
  })

  const finalNick: CSSProperties = reduce
    ? { ...wordBase, ['--wght' as string]: FINAL.wght, ['--opsz' as string]: FINAL.opsz, transform: `scaleX(${fill.nick})` }
    : { ...wordBase, ['--wght' as string]: START.wght, ['--opsz' as string]: START.opsz, opacity: 0 }
  const finalPratt: CSSProperties = {
    ...wordBase,
    ['--wght' as string]: FINAL.wght,
    ['--opsz' as string]: FINAL.opsz,
    transform: `scaleX(${fill.pratt})`,
  }

  return (
    <section
      ref={(el) => {
        sectionRef.current = el
        scope.current = el as HTMLElement
      }}
      id="top"
      className="relative h-[100dvh] w-full overflow-hidden bg-paper text-ink"
    >
      <h1 className="sr-only">Nick Pratt, product designer.</h1>

      {/* measurement-only copies (final axes), never shown */}
      <span ref={nickM} style={measureStyle} aria-hidden>Nick</span>
      <span ref={prattM} style={measureStyle} aria-hidden>Pratt</span>

      {/* NICK — top half */}
      <motion.div className="absolute inset-x-0 top-0 h-1/2" style={reduce ? undefined : { y: nickY, opacity: fade }} aria-hidden>
        <div className="nickwrap flex h-full origin-center items-center justify-center will-change-transform" style={reduce ? undefined : { transform: 'translateY(25vh) scaleY(1)' }}>
          <span className="nick origin-center will-change-transform" style={finalNick} {...breathe('.nick')}>Nick</span>
        </div>
      </motion.div>

      {/* PRATT — bottom half */}
      <motion.div className="absolute inset-x-0 bottom-0 h-1/2" style={reduce ? undefined : { y: prattY, opacity: fade }} aria-hidden>
        <div className="prattwrap flex h-full items-center justify-center will-change-transform" style={reduce ? undefined : { transform: 'translateY(50vh)' }}>
          <span className="pratt origin-center will-change-transform" style={finalPratt} {...breathe('.pratt')}>Pratt</span>
        </div>
      </motion.div>
    </section>
  )
}
