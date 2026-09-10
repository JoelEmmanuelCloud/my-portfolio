import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowUpRight, ArrowLeft } from 'lucide-react'
import { projects } from '@/data/projects'
import ProjectCardVisual from '@/components/project/ProjectCardVisual'
import SlideButton from '@/components/ui/SlideButton'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import TechBadge from '@/components/ui/TechBadge'

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  if (!project) return {}

  return {
    title: `${project.title} — Joel Emmanuel`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} — Joel Emmanuel`,
      description: project.summary,
      url: `https://joelemmanuel.dev/projects/${project.slug}`,
      images: project.images?.[0]
        ? [{ url: project.images[0], alt: project.title }]
        : [],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Joel Emmanuel`,
      description: project.summary,
      images: project.images?.[0] ? [project.images[0]] : [],
    },
  }
}

export default function ProjectDetail({ params }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const relatedProjects = projects
    .filter(p => p.slug !== params.slug)
    .slice(0, 2)

  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="py-6 sm:py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-semibold text-ink/70 transition-colors hover:text-ink dark:text-cream/70 dark:hover:text-cream sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-4xl">
            {project.category && <p className="eyebrow mb-4">{project.category}</p>}
            <h1 className="mb-6 text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-8 sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            <div className="mb-6 flex flex-col gap-3 text-ink dark:text-cream sm:mb-8 sm:flex-row sm:items-center sm:gap-8">
              <span className="text-base font-medium sm:text-lg">{project.role}</span>
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-base font-medium transition-colors hover:text-gold sm:text-lg"
                >
                  Live site
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>

            <p className="max-w-3xl text-lg leading-relaxed text-ink/70 dark:text-cream/70 sm:text-xl">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-8 sm:pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="relative aspect-video overflow-hidden rounded-3xl" delay={0.1}>
            <ProjectCardVisual category={project.category} size="hero" />
          </Reveal>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-14">

            <Reveal className="space-y-10 lg:col-span-2 lg:space-y-14">

              {project.context && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    Context
                  </h2>
                  <p className="text-base leading-relaxed text-ink/70 dark:text-cream/70 sm:text-lg">
                    {project.context}
                  </p>
                </div>
              )}

              {project.challenge && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    Challenge
                  </h2>
                  <p className="text-base leading-relaxed text-ink/70 dark:text-cream/70 sm:text-lg">
                    {project.challenge}
                  </p>
                </div>
              )}

              {project.solution && (
                <div>
                  <h2 className="mb-4 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    Solution
                  </h2>
                  <p className="text-base leading-relaxed text-ink/70 dark:text-cream/70 sm:text-lg">
                    {project.solution}
                  </p>
                </div>
              )}

              {project.technologies && (
                <div>
                  <h2 className="mb-6 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    Technology stack
                  </h2>
                  <div className="space-y-6">
                    {Object.entries(project.technologies).map(([category, techs]) => (
                      <div key={category}>
                        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink/50 dark:text-cream/50">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech) => (
                            <TechBadge key={tech} name={tech} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {project.impact && project.impact.length > 0 && (
                <div>
                  <h2 className="mb-6 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                    Impact &amp; results
                  </h2>
                  <div className="space-y-4">
                    {project.impact.map((item, index) => (
                      <div key={index} className="rounded-2xl border border-ink/10 bg-white p-5 dark:border-cream/10 dark:bg-ink/60">
                        <p className="text-base leading-relaxed text-ink/75 dark:text-cream/75">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </Reveal>

            <Reveal direction="left" delay={0.1} className="space-y-6 lg:sticky lg:top-24 lg:self-start">

              <div className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                <h3 className="mb-5 text-base font-semibold text-ink dark:text-cream sm:text-lg">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>

              {(project.links?.live || project.links?.github || project.links?.company) && (
                <div className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                  <h3 className="mb-5 text-base font-semibold text-ink dark:text-cream sm:text-lg">
                    Links
                  </h3>
                  <div className="space-y-3">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 text-sm font-medium text-ink/75 transition-colors hover:text-gold dark:text-cream/75 sm:text-base"
                      >
                        <ArrowUpRight className="size-4 shrink-0" />
                        Live website
                      </a>
                    )}

                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 text-sm font-medium text-ink/75 transition-colors hover:text-gold dark:text-cream/75 sm:text-base"
                      >
                        <ArrowUpRight className="size-4 shrink-0" />
                        Source code
                      </a>
                    )}

                    {project.links?.company && (
                      <a
                        href={project.links.company}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 text-sm font-medium text-ink/75 transition-colors hover:text-gold dark:text-cream/75 sm:text-base"
                      >
                        <ArrowUpRight className="size-4 shrink-0" />
                        Company
                      </a>
                    )}
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-14 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <p className="eyebrow mb-3">Keep exploring</p>
              <h2 className="mb-10 text-2xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-12 sm:text-3xl lg:text-4xl">
                More projects
              </h2>
            </Reveal>

            <RevealGroup className="grid gap-6 sm:gap-8 md:grid-cols-2" stagger={0.12}>
              {relatedProjects.map((relatedProject) => (
                <RevealItem key={relatedProject.slug} className="group overflow-hidden rounded-3xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-cream/10 dark:bg-ink/60">
                  <div className="relative aspect-video overflow-hidden">
                    <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                      <ProjectCardVisual category={relatedProject.category} size="card" />
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <h3 className="mb-2 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                      {relatedProject.title}
                    </h3>
                    <p className="mb-3 text-sm font-medium text-ink/50 dark:text-cream/50 sm:text-base">{relatedProject.role}</p>
                    <p className="mb-6 text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                      {relatedProject.summary}
                    </p>

                    <SlideButton href={`/projects/${relatedProject.slug}`} variant="dark">
                      View project
                    </SlideButton>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      )}

      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTAPanel
            eyebrow="Let's talk"
            title="Interested in similar work?"
            description="Let's discuss your project requirements."
            primary={{ href: '/contact', label: 'Start a conversation' }}
            secondary={{ href: '/projects', label: 'View all projects' }}
          />
        </div>
      </section>
    </div>
  )
}
