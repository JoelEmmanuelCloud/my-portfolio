import SlideButton from '@/components/ui/SlideButton'
import HighlightTag from '@/components/ui/HighlightTag'
import TechBadge from '@/components/ui/TechBadge'
import { RevealItem } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

export default function ArticleCard({ article, latest = false }) {
  return (
    <RevealItem
      className={cn(
        'surface-card p-6 transition-shadow duration-300 hover:shadow-xl sm:p-8 lg:p-10',
        latest && 'surface-card-highlight lg:p-14'
      )}
    >
      {latest && <HighlightTag className="mb-5">Latest</HighlightTag>}
      <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2">
        {article.stack?.slice(0, 4).map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
      </div>

      <h2
        className={cn(
          'mb-2 font-semibold text-ink dark:text-cream',
          latest ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl'
        )}
      >
        {article.title}
      </h2>
      <p className="mb-3 text-sm font-medium text-ink/50 dark:text-cream/50 sm:text-base">
        {article.date}
      </p>
      <p className="mb-6 text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
        {article.summary}
      </p>

      <SlideButton href={`/articles/${article.slug}`} variant="dark">
        Read the article
      </SlideButton>
    </RevealItem>
  )
}
