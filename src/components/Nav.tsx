import { KeycapToggle } from './KeycapToggle'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-6 md:px-10">
        <a
          href="#top"
          className="font-sans text-[15px] font-semibold tracking-tight text-ink"
        >
          Nick Pratt
          <span className="ml-2 align-middle font-mono text-[11px] font-normal text-faint">
            /prat/
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-5">
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
        </div>
      </nav>
    </header>
  )
}
