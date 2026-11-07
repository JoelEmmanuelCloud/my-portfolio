import { cn } from '@/lib/utils'

const sizes = {
  md: 'text-2xl sm:text-3xl lg:text-4xl',
  lg: 'text-3xl sm:text-4xl lg:text-5xl',
}

export default function SectionHeading({ title, size = 'md', align = 'left', className }) {
  return (
    <h2
      className={cn(
        'font-semibold text-ink dark:text-cream',
        sizes[size],
        align === 'center' && 'text-center',
        className
      )}
    >
      {title}
    </h2>
  )
}
