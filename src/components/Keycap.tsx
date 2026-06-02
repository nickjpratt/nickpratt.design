import { type ButtonHTMLAttributes, type ReactNode } from 'react'

interface KeycapProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  /** Visual size of the cap */
  size?: 'sm' | 'md'
}

/**
 * A physical-feeling keyboard keycap. The portfolio's core system-UI motif:
 * the dark-mode toggle and the functional Command+Z both render as one of these
 * (a nod to Nick's Command+Z wrist tattoo). It depresses on :active.
 */
export function Keycap({ children, size = 'md', className = '', ...rest }: KeycapProps) {
  const dims =
    size === 'sm'
      ? 'h-8 min-w-8 px-2 text-[12px]'
      : 'h-11 min-w-11 px-3 text-[13px]'

  return (
    <button
      {...rest}
      className={[
        'group relative inline-flex items-center justify-center gap-1.5',
        'font-mono font-medium tracking-tight text-ink',
        'bg-paper-2 select-none',
        'rounded-[var(--radius-key)] border border-line',
        // top bevel highlight + seated bottom edge => a real key, not a flat box
        'shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_2px_0_var(--color-line),0_4px_6px_-3px_rgba(0,0,0,0.25)]',
        'dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_0_var(--color-line),0_4px_8px_-3px_rgba(0,0,0,0.6)]',
        'transition-[transform,box-shadow] duration-150 ease-[var(--ease-slow)]',
        'hover:-translate-y-px',
        // pressed: sink into the board
        'active:translate-y-[2px] active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)]',
        'cursor-pointer',
        dims,
        className,
      ].join(' ')}
    >
      {children}
    </button>
  )
}
