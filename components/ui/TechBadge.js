import { getTech } from '@/lib/techIcons'
import { cn } from '@/lib/utils'

export default function TechBadge({ name, className }) {
  const tech = getTech(name)

  return (
    <span className={cn('tag-pill gap-1.5', className)}>
      {tech && (
        <tech.icon className="size-3.5 shrink-0" style={{ color: tech.color }} aria-hidden="true" />
      )}
      {name}
    </span>
  )
}
