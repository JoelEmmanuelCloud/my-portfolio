import { cn } from '@/lib/utils'

const sizes = {
  md: 'text-2xl sm:text-3xl lg:text-4xl',
  lg: 'text-3xl sm:text-4xl lg:text-5xl',
}

export default function SectionHeading({ eyebrow, title, size = 'md', align = 'left', className }) {
  const centered = align === 'center'

  return (
    <>
      {eyebrow && <p className={cn('eyebrow mb-3', centered && 'text-center')}>{eyebrow}</p>}
      <h2
        className={cn(
          'font-semibold tracking-tight text-ink dark:text-cream',
          sizes[size],
          centered && 'text-center',
          className
        )}
      >
        {title}
      </h2>
    </>
  )
}
