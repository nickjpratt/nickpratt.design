import { type ReactNode } from 'react'

/** A small macOS-style window (traffic lights + title bar). System UI as content. */
export function MacWindow({
  title,
  children,
  className = '',
}: {
  title: string
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'overflow-hidden rounded-[10px] border border-line bg-paper',
        'shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)]',
        'dark:shadow-[0_24px_70px_-20px_rgba(0,0,0,0.7)]',
        className,
      ].join(' ')}
    >
      <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-3.5 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        <span className="ml-1 truncate font-mono text-[11px] text-faint">{title}</span>
      </div>
      <div className="px-5 py-5">{children}</div>
    </div>
  )
}
