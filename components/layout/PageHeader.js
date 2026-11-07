import Reveal from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const widths = {
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
}

export default function PageHeader({ title, description, tags, width = '3xl', className, children }) {
  const hasFooter = Boolean(tags?.length || children)

  return (
    <Reveal className={cn('page-spotlight', widths[width], className)}>
      <h1 className="page-title">
        {title}
      </h1>
      {description && (
        <p className={cn('max-w-2xl text-lg text-ink/65 dark:text-cream/65 sm:text-xl', hasFooter && 'mb-6')}>
          {description}
        </p>
      )}
      {tags?.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="tag-pill">{tag}</span>
          ))}
        </div>
      )}
      {children}
    </Reveal>
  )
}
