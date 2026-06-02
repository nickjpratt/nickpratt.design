import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown } from '@phosphor-icons/react'
import { CurrentlyTyping } from './CurrentlyTyping'

/**
 * The regular, static hero. The animated intro (HeroIntro) fades out to reveal
 * this: name + point of view + typing line + CTAs, all within the first screen.
 */
export function HeroName({ ready = true }: { ready?: boolean }) {
  const reduce = useReducedMotion()
  const show = reduce ? true : ready

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section
      id="top"
      className="mx-auto flex min-h-[100dvh] max-w-[1240px] flex-col justify-center px-6 py-24 md:px-10"
    >
      <motion.p
        {...rise(0)}
        className="mb-6 font-mono text-[12px] uppercase tracking-[0.16em] text-muted"
      >
        Product designer · New York
      </motion.p>

      <motion.h1
        {...rise(0.05)}
        className="whitespace-nowrap font-display text-[clamp(52px,11vw,150px)] font-extrabold uppercase leading-[0.86] tracking-[-0.04em] text-ink"
      >
        Nick Pratt
      </motion.h1>

      <motion.p
        {...rise(0.14)}
        className="mt-7 max-w-[34ch] font-sans text-[clamp(18px,2vw,26px)] font-medium leading-[1.3] text-ink"
      >
        I design{' '}
        <span className="bg-[var(--color-highlight)] box-decoration-clone px-1.5 text-[var(--color-highlight-ink)]">
          AI products
        </span>{' '}
        for the way people actually use technology.
      </motion.p>

      <motion.div {...rise(0.22)} className="mt-7">
        <CurrentlyTyping />
      </motion.div>

      <motion.div {...rise(0.3)} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-[var(--radius-key)] bg-accent px-5 py-3 font-sans text-[14px] font-semibold text-[var(--color-accent-ink)] transition-transform duration-300 ease-[var(--ease-out)] hover:-translate-y-0.5"
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
    </section>
  )
}
