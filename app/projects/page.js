'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { projects, otherEngagements } from '@/data/projects'
import ProjectCardVisual from '@/components/project/ProjectCardVisual'
import SlideButton from '@/components/ui/SlideButton'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import TechBadge from '@/components/ui/TechBadge'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'fullstack', name: 'Software' },
  { id: 'ai', name: 'AI/ML' },
  { id: 'cloud', name: 'Cloud' },
]

const fallbackEngagements = [
  {
    name: "Compass UOL",
    url: "https://compass.uol/en/about-us/",
    role: "Software Developer",
    period: "Feb 2023 – Present"
  },
  {
    name: "SLB",
    url: "https://www.slb.com/",
    role: "Automation Project",
    period: "Project"
  },
  {
    name: "Rewod Technologies",
    url: "https://www.rewodtechnologies.com/",
    role: "Backend Developer",
    period: "Oct 2022 – Mar 2023"
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const engagements = otherEngagements || fallbackEngagements

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => {
        const projectTech = project.stack.join(' ').toLowerCase()
        switch (selectedCategory) {
          case 'fullstack':
            return projectTech.includes('react') || projectTech.includes('node') || projectTech.includes('next')
          case 'ai':
            return projectTech.includes('sagemaker') || projectTech.includes('bedrock') || projectTech.includes('lex')
          case 'cloud':
            return projectTech.includes('aws') || projectTech.includes('docker') || projectTech.includes('actions')
          default:
            return true
        }
      })

  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4">Portfolio</p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-6 sm:text-6xl lg:text-7xl">
              Projects
            </h1>
            <p className="max-w-2xl text-lg text-ink/65 dark:text-cream/65 sm:text-xl">
              Production systems and innovative solutions built with modern technologies.
            </p>
          </Reveal>

          <div className="mt-8 flex flex-wrap gap-2 sm:mt-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-lg border px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-200 sm:px-5 sm:py-2.5 ${
                  selectedCategory === category.id
                    ? 'border-ink bg-ink text-cream dark:border-cream dark:bg-cream dark:text-ink'
                    : 'border-ink/15 text-ink/60 hover:border-ink/40 hover:text-ink dark:border-cream/15 dark:text-cream/60 dark:hover:border-cream/40 dark:hover:text-cream'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RevealGroup className="space-y-6 sm:space-y-8" stagger={0.1}>
            {filteredProjects.map((project) => (
              <RevealItem
                key={project.slug}
                className="grid gap-0 overflow-hidden rounded-3xl border border-ink/10 bg-white transition-shadow duration-300 hover:shadow-xl dark:border-cream/10 dark:bg-ink/60 lg:grid-cols-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto">
                  <ProjectCardVisual category={project.category} size="card" />
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <TechBadge key={tech} name={tech} />
                    ))}
                  </div>

                  <h2 className="mb-2 text-2xl font-semibold text-ink dark:text-cream sm:text-3xl">
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
            ))}
          </RevealGroup>

          {filteredProjects.length === 0 && (
            <div className="py-16 text-center sm:py-20">
              <h3 className="mb-2 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">No projects found</h3>
              <p className="text-base text-ink/60 dark:text-cream/60">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-8 sm:mb-12">
            <p className="eyebrow mb-3">Other work</p>
            <h2 className="text-2xl font-semibold tracking-tight text-ink dark:text-cream sm:text-3xl lg:text-4xl">
              Other collaborations
            </h2>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {engagements.map((engagement) => (
              <RevealItem key={engagement.name}>
                <a
                  href={engagement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-cream/10 dark:bg-ink/60"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-ink dark:text-cream sm:text-xl">
                      {engagement.name}
                    </h3>
                    <ArrowUpRight className="size-5 shrink-0 text-ink/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold dark:text-cream/40" />
                  </div>
                  <p className="mb-1 text-sm font-medium text-ink/70 dark:text-cream/70">{engagement.role}</p>
                  <p className="text-sm text-ink/45 dark:text-cream/45">{engagement.period}</p>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTAPanel
            eyebrow="Let's talk"
            title="Interested in working together?"
            description="Let's discuss your project requirements."
            primary={{ href: '/contact', label: 'Get in touch' }}
          />
        </div>
      </section>
    </div>
  )
}
