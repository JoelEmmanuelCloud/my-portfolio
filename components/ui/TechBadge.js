import { getTech } from '@/lib/techIcons'
import { cn } from '@/lib/utils'

export default function TechBadge({ name, className }) {
  const tech = getTech(name)

  return (
    <span className={cn('inline-flex items-center gap-1.5 text-sm text-ink/60 dark:text-cream/60', className)}>
      {tech && (
        <tech.icon className="size-3.5 shrink-0" style={{ color: tech.color }} aria-hidden="true" />
      )}
      {name}
    </span>
  )
}
