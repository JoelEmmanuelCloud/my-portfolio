import { cn } from '@/lib/utils'

export default function HighlightTag({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink',
        className
      )}
    >
      {children}
    </span>
  )
}
