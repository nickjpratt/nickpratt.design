import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown } from '@phosphor-icons/react'
import { UndoHeadline } from './UndoHeadline'
import { CurrentlyTyping } from './CurrentlyTyping'

export function Hero() {
  const reduce = useReducedMotion()
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-[1240px] flex-col justify-center px-6 py-20 md:px-10"
    >
      <div className="max-w-[60rem]">
        {/* 1. Availability status (the dot conveys real state) */}
        <motion.div
          {...rise(0)}
          className="mb-8 flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.16em] text-muted"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to full-time · New York, August 2026
        </motion.div>

        {/* 2 + 3. The undo headline (point of view) and the typing line */}
        <motion.div {...rise(0.08)}>
          <UndoHeadline />
        </motion.div>

        <motion.div {...rise(0.18)} className="mt-9">
          <CurrentlyTyping />
        </motion.div>

        {/* 4. CTAs (one portfolio intent, one contact intent) */}
        <motion.div {...rise(0.28)} className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
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
    </section>
  )
}
