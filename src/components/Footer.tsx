import { LinkedinLogo, EnvelopeSimple } from '@phosphor-icons/react'

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1240px] px-6 pb-16 pt-24 md:px-10 md:pt-32">
      <div className="rounded-[14px] border border-line bg-paper-2 px-7 py-14 md:px-14 md:py-20">
        <p className="font-sans text-[15px] text-muted">Got something to build, or just want to say hi?</p>

        <a
          href="mailto:hi@nickpratt.design"
          className="mt-2 inline-block font-display text-[30px] font-extrabold uppercase tracking-[-0.02em] text-ink underline decoration-line decoration-1 underline-offset-[6px] transition-colors duration-300 hover:decoration-accent md:text-[46px]"
        >
          hi@nickpratt.design
        </a>

        {/* Handwriting sign-off (placeholder font until Nick's real pen scan) */}
        <div className="mt-14">
          <p className="font-hand text-[34px] leading-none text-muted">Talk soon,</p>
          <p className="font-hand text-[56px] leading-tight text-ink md:text-[68px]">Nick</p>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-line pt-7 text-muted sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[12px] leading-relaxed text-faint">
            Built with React, Tailwind, and too much iced strawberry matcha.
            <br className="hidden sm:block" />
            Vibe-coded with Claude Code. © {2026} Nick Pratt.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/nickjpratt/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-[14px] text-muted transition-colors duration-300 hover:text-ink"
            >
              <LinkedinLogo size={17} aria-hidden />
              LinkedIn
            </a>
            <a
              href="mailto:hi@nickpratt.design"
              className="inline-flex items-center gap-1.5 font-sans text-[14px] text-muted transition-colors duration-300 hover:text-ink"
            >
              <EnvelopeSimple size={17} aria-hidden />
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
