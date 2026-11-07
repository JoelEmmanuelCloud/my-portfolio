import { ArrowUpRight } from 'lucide-react'
import ProjectCardVisual from '@/components/project/ProjectCardVisual'
import SlideButton from '@/components/ui/SlideButton'
import HighlightTag from '@/components/ui/HighlightTag'
import TechBadge from '@/components/ui/TechBadge'
import { RevealItem } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

export default function ProjectCard({ project, highlighted = false }) {
  return (
    <RevealItem
      className={cn(
        'surface-card grid overflow-hidden transition-shadow duration-300 hover:shadow-xl lg:grid-cols-2',
        highlighted && 'surface-card-highlight lg:min-h-[480px]'
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
        <ProjectCardVisual category={project.category} size="card" />
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <div className="mb-4 flex flex-wrap gap-x-4 gap-y-2">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {highlighted && <HighlightTag className="mb-4">Flagship</HighlightTag>}
        <h2
          className={cn(
            'mb-2 font-semibold text-ink dark:text-cream',
            highlighted ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-2xl sm:text-3xl'
          )}
        >
          {project.title}
        </h2>
        <p className="mb-3 text-sm font-medium text-ink/50 dark:text-cream/50 sm:text-base">{project.role}</p>
        <p className="mb-6 text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
          {project.summary}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <SlideButton href={`/projects/${project.slug}`} variant="dark">
            View details
          </SlideButton>
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 transition-colors hover:text-ink dark:text-cream/70 dark:hover:text-cream"
            >
              Live site
              <ArrowUpRight className="size-4" />
            </a>
          )}
        </div>
      </div>
    </RevealItem>
  )
}
