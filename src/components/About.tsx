import { motion, useReducedMotion } from 'motion/react'

export function About() {
  const reduce = useReducedMotion()
  return (
    <section
      id="about"
      className="mx-auto max-w-[1240px] scroll-mt-20 border-t border-line px-6 py-24 md:px-10 md:py-32"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <div className="font-mono text-[12px] uppercase tracking-[0.16em] text-faint">
          About
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-sans text-[22px] font-medium leading-[1.45] tracking-[-0.01em] text-ink md:text-[30px]">
            I am a first-gen college grad from a suburb of Chicago, by way of SCAD
            and one formative winter in the south of France. I design AI products, I
            think a lot about how people{' '}
            <span className="italic">actually</span> behave instead of how we wish
            they would, and I have{' '}
            <span className="font-mono text-[0.7em] tracking-tight">⌘Z</span>{' '}
            tattooed on my wrist.
          </p>

          <p className="mt-6 font-sans text-[16px] leading-relaxed text-muted">
            Half designer, half hot dog critic. Currently behind a front desk,
            quietly building toward a product role in New York.
            <span className="ml-2 font-hand text-[22px] leading-none text-accent">
              (yes, really)
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
