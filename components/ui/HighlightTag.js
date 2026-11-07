import { cn } from '@/lib/utils'

export default function HighlightTag({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-ink',
        className
      )}
    >
      {children}
    </span>
  )
}
