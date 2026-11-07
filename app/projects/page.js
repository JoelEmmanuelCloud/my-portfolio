'use client'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { projects, otherEngagements } from '@/data/projects'
import ProjectCard from '@/components/project/ProjectCard'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import PageHeader from '@/components/layout/PageHeader'
import SectionHeading from '@/components/layout/SectionHeading'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'fullstack', name: 'Software' },
  { id: 'ai', name: 'AI/ML' },
  { id: 'cloud', name: 'Cloud' },
]

const flagshipSlug = projects.find(project => project.featured)?.slug

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

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
        <div className="container">
          <PageHeader
            title="Projects"
            description="Production systems and innovative solutions built with modern technologies."
          />

          <div className="mt-8 flex flex-wrap gap-2 sm:mt-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors duration-200 sm:px-5 sm:py-2.5 ${
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
        <div className="container">
          <RevealGroup className="space-y-6 sm:space-y-8" stagger={0.1}>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} highlighted={project.slug === flagshipSlug} />
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
        <div className="container">
          <Reveal className="mb-8 sm:mb-12">
            <SectionHeading
              title="Other collaborations"
            />
          </Reveal>

          <RevealGroup className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {otherEngagements.map((engagement) => (
              <RevealItem key={engagement.name}>
                <a
                  href={engagement.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface-card group block p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
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
        <div className="container">
          <CTAPanel
            title="Have a similar project?"
            description="Get in touch to talk through scope and fit."
            primary={{ href: '/contact', label: 'Get in touch' }}
          />
        </div>
      </section>
    </div>
  )
}
