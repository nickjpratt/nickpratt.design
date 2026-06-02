import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { List, X } from '@phosphor-icons/react'
import { KeycapToggle } from './KeycapToggle'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

export function Nav({ revealed = true }: { revealed?: boolean }) {
  const reduce = useReducedMotion()
  const show = reduce ? true : revealed
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 bg-paper/80 backdrop-blur-md"
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : -8 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-3">
          <a href="#top" className="font-sans text-[15px] font-semibold tracking-tight text-ink">
            Nick Pratt
          </a>
          <span className="hidden items-center rounded-full border border-line px-2.5 py-1 font-mono text-[11px] tracking-tight text-muted sm:inline-flex">
            Open to work
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-5">
          <ul className="hidden items-center gap-5 sm:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-sans text-[14px] text-muted transition-colors duration-300 hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <KeycapToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-key)] text-ink sm:hidden"
          >
            {open ? <X size={20} weight="bold" aria-hidden /> : <List size={20} weight="bold" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="overflow-hidden border-t border-line bg-paper sm:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col px-6 py-3">
              <li className="py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
                Open to work
              </li>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-t border-line py-3 font-sans text-[17px] text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:hi@nickpratt.design"
                  onClick={() => setOpen(false)}
                  className="block border-t border-line py-3 font-sans text-[17px] text-ink"
                >
                  Say hello
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
