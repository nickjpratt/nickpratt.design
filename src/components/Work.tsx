import { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'

type Tone = 'light' | 'dark'

interface Project {
  id: string
  title: string
  year: string
  hook: string
  status: string
  cursorLabel: string
  bg: string // project-branded tile color
  tone: Tone // text tone on the tile
  span: string // bento placement (desktop)
}

// Project-branded tiles (Nick's "intentional color" approach, applied to the
// work showcase). Real project imagery drops in later via an `image` field.
const PROJECTS: Project[] = [
  {
    id: 'vega',
    title: 'Vega',
    year: '2024',
    status: 'Award winner',
    cursorLabel: 'Open case study',
    hook: 'A handheld scanner that reads your skin in real time, so you stop wasting money on products that fight it.',
    bg: '#ff6b5e',
    tone: 'light',
    span: 'md:col-span-7 md:row-span-2',
  },
  {
    id: 'coast',
    title: 'COAST',
    year: '2025',
    status: 'In progress',
    cursorLabel: 'In progress',
    hook: 'An AI platform that helps U.S. seaports electrify without grinding operations to a halt.',
    bg: '#19c3b0',
    tone: 'dark',
    span: 'md:col-span-5',
  },
  {
    id: 'abrazo',
    title: 'Abrazo',
    year: '2024',
    status: 'Award winner',
    cursorLabel: 'Open case study',
    hook: 'A wearable for managing a panic attack in the moment. Personal: I have an anxiety disorder.',
    bg: '#9b7bff',
    tone: 'light',
    span: 'md:col-span-5',
  },
  {
    id: 'whirlpool',
    title: 'Whirlpool',
    year: '2025',
    status: 'Under NDA',
    cursorLabel: 'Under NDA · ask me',
    hook: 'Reimagining laundry for Gen Z and Gen Alpha with a class of twenty.',
    bg: '#3f7bff',
    tone: 'light',
    span: 'md:col-span-6',
  },
  {
    id: 'honeywell',
    title: 'Honeywell',
    year: '2024',
    status: 'Selected work',
    cursorLabel: 'Selected work',
    hook: 'Confidential enterprise work, blurred for good reason. Happy to walk you through it.',
    bg: '#ffc24a',
    tone: 'dark',
    span: 'md:col-span-6',
  },
]

function Tile({
  p,
  onEnter,
  onLeave,
}: {
  p: Project
  onEnter: (label: string) => void
  onLeave: () => void
}) {
  const reduce = useReducedMotion()
  const text = p.tone === 'light' ? 'text-white' : 'text-[#16140c]'
  const sub = p.tone === 'light' ? 'text-white/75' : 'text-[#16140c]/70'

  return (
    <motion.a
      href={`#${p.id}`}
      onMouseEnter={() => onEnter(p.cursorLabel)}
      onMouseLeave={onLeave}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ backgroundColor: p.bg, boxShadow: `0 26px 70px -24px ${p.bg}` }}
      className={[
        'group relative flex min-h-[240px] flex-col justify-between overflow-hidden rounded-[18px] p-6 md:p-7',
        'transition-transform duration-500 ease-[var(--ease-out)] hover:-translate-y-1.5 md:cursor-none',
        p.span,
      ].join(' ')}
    >
      {/* soft top-left light for depth (not an AI gradient blob) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(120% 90% at 0% 0%, rgba(255,255,255,0.22), rgba(255,255,255,0) 55%)',
        }}
      />

      <div className="relative flex items-start justify-between">
        <span className={`font-mono text-[12px] tracking-tight ${sub}`}>{p.status}</span>
        <span className={`font-mono text-[12px] ${sub}`}>{p.year}</span>
      </div>

      {/* big ghosted wordmark fills the visual space until real screens land */}
      <div className="relative">
        <h3
          className={`font-display font-extrabold uppercase leading-[0.9] tracking-[-0.03em] ${text} ${
            p.span.includes('col-span-7') ? 'text-[64px] md:text-[104px]' : 'text-[52px] md:text-[64px]'
          }`}
        >
          {p.title}
        </h3>
        <p className={`mt-3 max-w-[42ch] font-sans text-[14px] leading-relaxed ${sub}`}>
          {p.hook}
        </p>
      </div>

      {/* fallback affordance for touch / reduced-motion (no cursor label there) */}
      <span
        className={`relative inline-flex items-center gap-1.5 font-sans text-[13px] font-medium ${text} md:hidden`}
      >
        {p.cursorLabel}
        <ArrowUpRight size={15} weight="bold" aria-hidden />
      </span>
    </motion.a>
  )
}

export function Work() {
  const reduce = useReducedMotion()
  const gridRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const mvX = useMotionValue(0)
  const mvY = useMotionValue(0)
  const x = useSpring(mvX, { stiffness: 500, damping: 40, mass: 0.4 })
  const y = useSpring(mvY, { stiffness: 500, damping: 40, mass: 0.4 })

  function onMove(e: React.PointerEvent) {
    mvX.set(e.clientX)
    mvY.set(e.clientY)
  }

  return (
    <section id="work" className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
      <div className="mb-10 flex items-end justify-between border-b border-line pb-5">
        <h2 className="font-display text-[30px] font-extrabold uppercase tracking-[-0.02em] text-ink md:text-[44px]">
          Selected work
        </h2>
        <span className="hidden font-mono text-[12px] text-faint sm:block">
          {PROJECTS.length} projects · hover to peek
        </span>
      </div>

      <div
        ref={gridRef}
        onPointerMove={onMove}
        className="grid grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[218px]"
      >
        {PROJECTS.map((p) => (
          <Tile key={p.id} p={p} onEnter={setLabel} onLeave={() => setLabel(null)} />
        ))}
      </div>

      {/* Cursor-follow label (desktop pointer only) */}
      {!reduce && (
        <AnimatePresence>
          {label && (
            <motion.div
              className="pointer-events-none fixed left-0 top-0 z-[55] hidden md:block"
              style={{ x, y }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-ink px-3.5 py-2 font-sans text-[13px] font-medium text-paper shadow-lg">
                {label}
                <ArrowUpRight size={14} weight="bold" aria-hidden />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </section>
  )
}
