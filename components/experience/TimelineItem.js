import { ExternalLink, Calendar, MapPin } from 'lucide-react'
import HighlightTag from '@/components/ui/HighlightTag'
import TechBadge from '@/components/ui/TechBadge'
import { RevealItem } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

export default function TimelineItem({ job, index }) {
  return (
    <RevealItem
      className={cn(
        'surface-card relative grid gap-6 overflow-hidden p-6 transition-shadow duration-300 hover:shadow-lg sm:p-8 lg:grid-cols-3 lg:gap-10',
        job.current && 'surface-card-highlight'
      )}
    >
      <span
        className={cn('absolute left-0 top-0 h-full w-1', job.current ? 'bg-gold' : 'bg-ink/10 dark:bg-cream/10')}
        aria-hidden="true"
      />
      <div className="space-y-3 lg:col-span-1">
        <span className="text-xs text-ink/35 dark:text-cream/35">{String(index + 1).padStart(2, '0')}</span>
        <h3
          className={cn(
            'font-semibold leading-tight text-ink dark:text-cream',
            job.current ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl'
          )}
        >
          {job.role}
        </h3>
        <div className="flex items-center gap-2 text-ink dark:text-cream">
          <span className="text-base font-medium sm:text-lg">{job.company}</span>
          {job.website && (
            <a
              href={job.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${job.company} website`}
              className="text-ink/50 transition-colors hover:text-gold dark:text-cream/50"
            >
              <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          )}
        </div>
        <div className="flex flex-col gap-2 text-sm text-ink/60 dark:text-cream/60 sm:flex-row sm:items-center sm:gap-4 sm:text-base">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 shrink-0" />
            <span className="font-medium">{job.period}</span>
          </div>
          {job.location && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0" />
              <span className="font-medium">{job.location}</span>
            </div>
          )}
        </div>
        {job.current && <HighlightTag>Current</HighlightTag>}
      </div>

      <div className="space-y-4 lg:col-span-2">
        {job.highlights?.length > 0 && (
          <div className="space-y-3">
            {job.highlights.map((highlight) => (
              <p key={highlight} className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                {highlight}
              </p>
            ))}
          </div>
        )}

        {job.stack?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {job.stack.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>
        )}
      </div>
    </RevealItem>
  )
}
