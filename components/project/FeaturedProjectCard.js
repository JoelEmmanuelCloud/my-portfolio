import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import ProjectCardVisual from '@/components/project/ProjectCardVisual'
import HighlightTag from '@/components/ui/HighlightTag'
import { RevealItem } from '@/components/ui/Reveal'
import { getTech } from '@/lib/techIcons'
import { cn } from '@/lib/utils'

const SUMMARY_LIMIT = 140

export default function FeaturedProjectCard({ project, lead = false }) {
  const summary = project.summary.length > SUMMARY_LIMIT
    ? `${project.summary.slice(0, SUMMARY_LIMIT)}...`
    : project.summary

  return (
    <RevealItem
      className={cn(
        'group relative overflow-hidden rounded-xl',
        lead
          ? 'col-span-12 h-[440px] shadow-[0_0_60px_-12px_rgba(242,194,0,0.45)] ring-1 ring-gold/40 sm:h-[520px] lg:col-span-8 lg:row-span-2 lg:h-auto'
          : 'col-span-12 h-[340px] sm:col-span-6 sm:h-[380px] lg:col-span-4 lg:h-auto'
      )}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full w-full">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
          <ProjectCardVisual
            category={project.category}
            size={lead ? 'card' : 'thumb'}
            align={lead ? 'center' : 'top'}
          />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
          <div className="mb-3 flex flex-wrap gap-x-4 gap-y-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {project.stack.slice(0, 3).map((tech) => {
              const techEntry = getTech(tech)
              return (
                <span key={tech} className="inline-flex items-center gap-1.5 text-sm text-cream/80">
                  {techEntry && <techEntry.icon className="size-3.5 shrink-0" style={{ color: techEntry.color }} aria-hidden="true" />}
                  {tech}
                </span>
              )
            })}
          </div>

          {lead && <HighlightTag className="mb-4">Flagship</HighlightTag>}
          <h3
            className={cn(
              'font-semibold text-cream',
              lead ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-xl sm:text-2xl'
            )}
          >
            {project.title}
          </h3>
          <p className="mb-2 text-sm font-medium text-cream/60">{project.role}</p>

          <p className="mb-0 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/75 opacity-0 transition-all duration-300 group-hover:mb-4 group-hover:max-h-24 group-hover:opacity-100">
            {summary}
          </p>

          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cream">
            View case study
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </RevealItem>
  )
}
