import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown } from '@phosphor-icons/react'
import { CurrentlyTyping } from './CurrentlyTyping'

/**
 * The inline-UI section directly below the full-screen name poster. Carries the
 * point of view, the "Currently ___" typing line, and the calls to action.
 * Reveals as it scrolls into view.
 */
export function HeroIntro() {
  const reduce = useReducedMotion()
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.5 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
        }

  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[1240px] flex-col justify-center px-6 py-24 md:px-10">
      <motion.p
        {...rise(0)}
        className="mb-7 font-mono text-[12px] uppercase tracking-[0.16em] text-muted"
      >
        Product designer · open to full-time · New York, Aug 2026
      </motion.p>

      <motion.p
        {...rise(0.06)}
        className="max-w-[20ch] font-serif text-[clamp(34px,5vw,68px)] font-medium leading-[1.05] tracking-[-0.02em] text-ink md:max-w-[16ch]"
        style={{ fontVariationSettings: '"opsz" 60, "wght" 500, "SOFT" 0' }}
      >
        I design{' '}
        <span className="bg-[var(--color-highlight)] box-decoration-clone px-1.5 text-[var(--color-highlight-ink)]">
          AI products
        </span>{' '}
        for the way people actually use technology.
      </motion.p>

      <motion.div {...rise(0.14)} className="mt-8">
        <CurrentlyTyping />
      </motion.div>

      <motion.div {...rise(0.22)} className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4">
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
