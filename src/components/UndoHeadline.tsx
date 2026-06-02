import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowCounterClockwise } from '@phosphor-icons/react'
import { Keycap } from './Keycap'

const BOILERPLATE =
  'an energized, multidisciplinary designer passionate about creating seamless, intuitive experiences'

type Phase = 'cliche' | 'real'

/**
 * The hero's centerpiece. It shows the résumé cliché every junior portfolio
 * opens with, strikes it out, then undoes it (Command+Z, Nick's tattoo) to
 * reveal his actual point of view. The keycap is the real, working control.
 */
export function UndoHeadline() {
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState<Phase>(reduce ? 'real' : 'cliche')
  const [struck, setStruck] = useState(false)
  const [pressing, setPressing] = useState(false)
  const timers = useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  const play = useCallback(() => {
    if (reduce) {
      setPhase('real')
      return
    }
    clearTimers()
    setStruck(false)
    setPressing(false)
    setPhase('cliche')
    timers.current.push(
      window.setTimeout(() => setStruck(true), 900),
      // the "undo" itself: flash the keycap, then swap to the real line
      window.setTimeout(() => setPressing(true), 1850),
      window.setTimeout(() => setPressing(false), 2050),
      window.setTimeout(() => setPhase('real'), 2000),
    )
  }, [reduce])

  useEffect(() => {
    play()
    return clearTimers
  }, [play])

  return (
    <div>
      <div className="relative min-h-[4.5em] md:min-h-[3.2em]">
        <AnimatePresence mode="wait">
          {phase === 'cliche' ? (
            <motion.p
              key="cliche"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8, filter: 'blur(2px)' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative inline font-sans text-[26px] font-medium leading-[1.18] tracking-tight text-faint md:text-[34px]"
            >
              <span className="relative">
                {BOILERPLATE}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-1/2 h-[2px] w-full origin-left bg-faint"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: struck ? 1 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </span>
            </motion.p>
          ) : (
            <motion.h1
              key="real"
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[34px] font-normal leading-[1.08] tracking-[-0.01em] text-ink md:text-[56px]"
            >
              I design{' '}
              <span className="bg-[var(--color-highlight)] box-decoration-clone px-1 text-ink">
                AI products
              </span>{' '}
              for the way people actually use technology.
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Keycap
          size="sm"
          onClick={play}
          aria-label="Replay: undo the buzzwords"
          className={pressing ? 'translate-y-[2px]' : ''}
        >
          <ArrowCounterClockwise size={13} weight="bold" aria-hidden />
          <span>⌘Z</span>
        </Keycap>
        <span className="font-mono text-[12px] text-faint">
          {phase === 'cliche' ? 'undoing the buzzwords' : 'my best friend'}
        </span>
      </div>
    </div>
  )
}
