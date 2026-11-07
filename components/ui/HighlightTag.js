import { cn } from '@/lib/utils'

export default function HighlightTag({ children, className }) {
  return (
    <span
      className={cn(
        'block text-sm font-semibold text-gold-600 dark:text-gold',
        className
      )}
    >
      {children}
    </span>
  )
}
