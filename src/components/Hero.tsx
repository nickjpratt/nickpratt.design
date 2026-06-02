import { motion, useReducedMotion } from 'motion/react'
import { ArrowDown } from '@phosphor-icons/react'
import { CurrentlyTyping } from './CurrentlyTyping'

const NAME = ['Nick', 'Pratt']

export function Hero() {
  const reduce = useReducedMotion()

  const pop = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: '38%', rotate: 4 },
          animate: { opacity: 1, y: 0, rotate: 0 },
          transition: { duration: 0.7, delay: 0.05 + i * 0.09, ease: [0.2, 1.2, 0.3, 1] as const },
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
    <section id="top" className="zone-yellow relative w-full overflow-hidden">
      {/* Midnight glow, dark mode only (hidden in the light/yellow hero) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 light:opacity-0"
        style={{
          background:
            'radial-gradient(120% 90% at 80% -10%, rgba(110,92,200,0.22), transparent 55%)',
        }}
      />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1240px] flex-col justify-center px-6 pb-16 pt-24 md:px-10">
        {/* Eyebrow: role + availability, places him instantly */}
        <motion.div
          {...rise(0)}
          className="mb-7 font-mono text-[12px] uppercase tracking-[0.16em] text-muted"
        >
          Product designer · open to full-time · NYC, Aug 2026
        </motion.div>

        {/* The kinetic name */}
        <h1 className="font-display font-extrabold uppercase leading-[0.84] tracking-[-0.04em] text-ink">
          <span className="sr-only">Nick Pratt</span>
          <span aria-hidden className="block text-[clamp(56px,13vw,184px)]">
            {NAME.map((word, i) => (
              <span key={word} className="inline-block align-bottom">
                <motion.span className="inline-block" {...pop(i)}>
                  {word}
                </motion.span>
                {i === 0 && <span className="inline-block w-[0.25em]" />}
              </span>
            ))}
          </span>
        </h1>

        {/* Role line with the signature highlight */}
        <motion.p
          {...rise(0.3)}
          className="mt-7 max-w-[26ch] font-sans text-[20px] font-medium leading-[1.3] text-ink md:max-w-[34ch] md:text-[28px]"
        >
          I design{' '}
          <span className="bg-[var(--color-highlight)] box-decoration-clone px-1.5 text-[var(--color-highlight-ink)]">
            AI products
          </span>{' '}
          for the way people actually use technology.
        </motion.p>

        {/* Typing component */}
        <motion.div {...rise(0.42)} className="mt-7">
          <CurrentlyTyping />
        </motion.div>

        {/* CTAs */}
        <motion.div {...rise(0.54)} className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
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
      </div>
    </section>
  )
}
