import { useRef, type ReactNode } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from 'motion/react'
import { ArrowDown, Cursor } from '@phosphor-icons/react'
import { MacWindow } from './MacWindow'
import { CurrentlyTyping } from './CurrentlyTyping'
import { Keycap } from './Keycap'

/** A scene object: parallax depth from the pointer + a gentle idle drift. */
function Floating({
  px,
  py,
  depth,
  idle,
  reduce,
  className = '',
  children,
}: {
  px: MotionValue<number>
  py: MotionValue<number>
  depth: number
  idle: number
  reduce: boolean | null
  className?: string
  children: ReactNode
}) {
  const x = useSpring(useTransform(px, (v) => v * depth), { stiffness: 120, damping: 20 })
  const y = useSpring(useTransform(py, (v) => v * depth), { stiffness: 120, damping: 20 })
  return (
    <motion.div className={`absolute ${className}`} style={reduce ? undefined : { x, y }}>
      <motion.div
        animate={reduce ? undefined : { y: [0, -10, 0] }}
        transition={{ duration: idle, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const reduce = useReducedMotion()
  const sceneRef = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0)
  const py = useMotionValue(0)

  function onMove(e: React.PointerEvent) {
    if (reduce || !sceneRef.current) return
    const r = sceneRef.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }
  function onLeave() {
    px.set(0)
    py.set(0)
  }

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section
      id="top"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-[1240px] grid-cols-1 items-center gap-y-10 px-6 py-16 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-8"
    >
      {/* Left: the message */}
      <div className="order-2 lg:order-1">
        <motion.div
          {...rise(0)}
          className="mb-7 flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Product designer · open to full-time · NYC, Aug 2026
        </motion.div>

        <motion.h1
          {...rise(0.08)}
          className="font-serif text-[40px] font-normal leading-[1.04] tracking-[-0.015em] text-ink sm:text-[52px] lg:text-[60px]"
        >
          I design{' '}
          <span className="bg-[var(--color-highlight)] box-decoration-clone px-1.5 text-ink">
            AI products
          </span>{' '}
          for the way people actually use technology.
        </motion.h1>

        <motion.p
          {...rise(0.18)}
          className="mt-7 max-w-[34ch] font-sans text-[16px] leading-relaxed text-muted"
        >
          First-gen SCAD grad from suburban Chicago. I bring software into my style,
          and I have ⌘Z tattooed on my wrist to prove it.
        </motion.p>

        <motion.div
          {...rise(0.28)}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
        >
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-[var(--radius-key)] bg-accent px-5 py-3 font-sans text-[14px] font-medium text-[var(--color-accent-ink)] transition-transform duration-300 ease-[var(--ease-slow)] hover:-translate-y-0.5"
          >
            See my work
            <ArrowDown size={15} weight="bold" aria-hidden />
          </a>
          <a
            href="mailto:hi@nickpratt.design"
            className="font-sans text-[14px] text-muted underline decoration-line decoration-1 underline-offset-4 transition-colors duration-300 hover:text-ink hover:decoration-accent"
          >
            Say hello
          </a>
        </motion.div>
      </div>

      {/* Right: the living desktop scene */}
      <motion.div
        {...rise(0.2)}
        ref={sceneRef}
        className="relative order-1 h-[340px] w-full sm:h-[420px] lg:order-2 lg:h-[520px]"
      >
        {/* The typing component, living inside a TextEdit-style window */}
        <Floating
          px={px}
          py={py}
          depth={26}
          idle={7}
          reduce={reduce}
          className="left-1/2 top-1/2 w-[300px] -translate-x-1/2 -translate-y-1/2 sm:w-[360px]"
        >
          <MacWindow title="currently.txt">
            <div className="min-h-[64px]">
              <CurrentlyTyping />
            </div>
          </MacWindow>
        </Floating>

        {/* ⌘Z keycaps: the tattoo, made tangible */}
        <Floating
          px={px}
          py={py}
          depth={60}
          idle={5}
          reduce={reduce}
          className="bottom-[8%] left-[2%] flex gap-2"
        >
          <Keycap aria-label="Command key" tabIndex={-1}>⌘</Keycap>
          <Keycap aria-label="Z key" tabIndex={-1}>Z</Keycap>
        </Floating>

        {/* Figma-style multiplayer cursor */}
        <Floating
          px={px}
          py={py}
          depth={80}
          idle={6}
          reduce={reduce}
          className="right-[6%] top-[6%]"
        >
          <div className="flex items-start">
            <Cursor size={26} weight="fill" className="text-accent" aria-hidden />
            <span className="mt-3 -ml-1 rounded-[6px] bg-accent px-2 py-0.5 font-sans text-[12px] font-medium text-[var(--color-accent-ink)]">
              Nick
            </span>
          </div>
        </Floating>
      </motion.div>
    </section>
  )
}
