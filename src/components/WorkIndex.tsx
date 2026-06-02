import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from '@phosphor-icons/react'

type Status = 'Award winner' | 'In progress' | 'Under NDA' | 'Selected work'

interface Project {
  id: string
  title: string
  year: string
  status: Status
  // Lead with the friction, not the project name (the stat-as-hook move).
  hook: string
}

// Copy is first-draft, in Nick's voice. Case studies open as overlays later;
// for now each row is a placeholder anchor.
const PROJECTS: Project[] = [
  {
    id: 'vega',
    title: 'Vega',
    year: '2024',
    status: 'Award winner',
    hook: 'Most people cannot read their own skin in real time, so they waste money and break out. I designed a handheld scanner that reads it for them.',
  },
  {
    id: 'coast',
    title: 'COAST',
    year: '2025',
    status: 'In progress',
    hook: 'U.S. seaports still run on diesel and guesswork. COAST is an AI platform that helps them electrify without grinding operations to a halt.',
  },
  {
    id: 'abrazo',
    title: 'Abrazo',
    year: '2024',
    status: 'Award winner',
    hook: 'There is no good way to manage a panic attack in the moment. I designed a wearable that helps. I have an anxiety disorder, so this one is personal.',
  },
  {
    id: 'whirlpool',
    title: 'Whirlpool × SCADpro',
    year: '2025',
    status: 'Under NDA',
    hook: 'Reimagining laundry for Gen Z and Gen Alpha with a class of twenty. The full story lives behind a password, so just ask.',
  },
  {
    id: 'honeywell',
    title: 'Honeywell',
    year: '2024',
    status: 'Selected work',
    hook: 'Confidential enterprise work, blurred for good reason. Happy to walk you through what I can in a conversation.',
  },
]

function StatusPill({ status }: { status: Status }) {
  const isAward = status === 'Award winner'
  return (
    <span
      className={[
        'inline-flex shrink-0 items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-tight',
        isAward
          ? 'border-accent/40 bg-accent/10 text-ink'
          : 'border-line text-muted',
      ].join(' ')}
    >
      {status}
    </span>
  )
}

export function WorkIndex() {
  const reduce = useReducedMotion()
  return (
    <section id="work" className="mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
      <div className="mb-12 flex items-end justify-between border-b border-line pb-5">
        <h2 className="font-serif text-[28px] font-normal tracking-tight text-ink md:text-[38px]">
          Selected work
        </h2>
        <span className="font-mono text-[12px] text-faint">{PROJECTS.length} projects</span>
      </div>

      <ul>
        {PROJECTS.map((p, i) => (
          <motion.li
            key={p.id}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={`#${p.id}`}
              className="group grid grid-cols-1 gap-4 border-b border-line py-8 transition-colors duration-500 hover:bg-paper-2 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-8 md:px-3"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[13px] text-faint">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-serif text-[26px] font-normal leading-none tracking-tight text-ink transition-transform duration-500 ease-[var(--ease-slow)] group-hover:translate-x-1 md:text-[32px]">
                  {p.title}
                </h3>
              </div>

              <p className="max-w-[52ch] font-sans text-[15px] leading-relaxed text-muted">
                {p.hook}
              </p>

              <div className="flex items-center gap-4 md:justify-end">
                <StatusPill status={p.status} />
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  aria-hidden
                  className="text-faint transition-all duration-500 ease-[var(--ease-slow)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                />
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
