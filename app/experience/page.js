'use client'
import { ExternalLink, Calendar, MapPin } from 'lucide-react'
import { experience, certifications, education } from '@/data/experience'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import TechBadge from '@/components/ui/TechBadge'

export default function Experience() {
  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4">Career</p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-6 sm:text-6xl lg:text-7xl">
              Experience
            </h1>
            <p className="mb-6 max-w-2xl text-lg text-ink/65 dark:text-cream/65 sm:text-xl">
              Building production systems across innovative companies.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Fullstack & Blockchain Developer', '3+ years experience', 'AWS certified'].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="section-watermark text-[5.5rem] text-ink dark:text-cream sm:text-[9rem] lg:text-[11rem]">
          CAREER
        </div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow mb-3">Timeline</p>
              <h2 className="mb-10 text-2xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-14 sm:text-3xl lg:text-4xl">
                Work history
              </h2>
            </Reveal>

            <RevealGroup className="space-y-5 sm:space-y-6" stagger={0.1}>
              {experience?.map((job, index) => (
                <RevealItem
                  key={index}
                  className="relative grid gap-6 overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 transition-shadow duration-300 hover:shadow-lg dark:border-cream/10 dark:bg-ink/60 sm:p-8 lg:grid-cols-3 lg:gap-10"
                >
                  <span className="absolute left-0 top-0 h-full w-1 bg-gold" aria-hidden="true" />
                  <div className="lg:col-span-1">
                    <div className="space-y-3">
                      <span className="font-mono text-xs text-ink/35 dark:text-cream/35">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-lg font-semibold leading-tight text-ink dark:text-cream sm:text-xl">{job.role}</h3>
                      <div className="flex items-center gap-2 text-ink dark:text-cream">
                        <span className="text-base font-medium sm:text-lg">{job.company}</span>
                        {job.website && (
                          <a
                            href={job.website}
                            target="_blank"
                            rel="noopener noreferrer"
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
                      {job.current && (
                        <span className="inline-block rounded-full bg-gold px-3 py-1 font-mono text-xs uppercase tracking-wide text-ink">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4 lg:col-span-2">
                    {job.highlights && job.highlights.length > 0 && (
                      <div className="space-y-3">
                        {job.highlights.map((highlight, highlightIndex) => (
                          <p key={highlightIndex} className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">
                            {highlight}
                          </p>
                        ))}
                      </div>
                    )}

                    {job.stack && job.stack.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {job.stack.map((tech) => (
                          <TechBadge key={tech} name={tech} />
                        ))}
                      </div>
                    )}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow mb-3">Credentials</p>
              <h2 className="mb-10 text-2xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-14 sm:text-3xl lg:text-4xl">
                Certifications
              </h2>
            </Reveal>

            <RevealGroup className="grid gap-5 sm:gap-6 md:grid-cols-2" stagger={0.1}>
              {certifications?.map((cert, index) => (
                <RevealItem key={index} className="rounded-3xl border border-ink/10 bg-white p-6 transition-shadow duration-300 hover:shadow-lg dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                  <div className="mb-5 flex items-start justify-between">
                    <div className="mr-4 flex-1">
                      <h3 className="mb-2 text-base font-semibold leading-tight text-ink dark:text-cream sm:text-lg">{cert.name}</h3>
                      <p className="text-sm font-medium text-ink/60 dark:text-cream/60 sm:text-base">{cert.issuer}</p>
                    </div>
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-ink/50 transition-colors hover:text-gold dark:text-cream/50"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>

                  <div className="mb-4 space-y-1 text-sm text-ink/60 dark:text-cream/60">
                    <p className="font-medium">{cert.date}</p>
                    {cert.id && <p className="break-all">ID: {cert.id}</p>}
                  </div>

                  <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">{cert.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow mb-3">Background</p>
              <h2 className="mb-10 text-2xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-14 sm:text-3xl lg:text-4xl">
                Education
              </h2>
            </Reveal>

            <RevealGroup className="space-y-5 sm:space-y-6" stagger={0.1}>
              {education?.map((edu, index) => (
                <RevealItem key={index} className="rounded-3xl border border-ink/10 bg-white p-6 transition-shadow duration-300 hover:shadow-lg dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
                    <div className="lg:col-span-1">
                      <h3 className="mb-3 text-base font-semibold leading-tight text-ink dark:text-cream sm:text-lg">{edu.degree}</h3>
                      <p className="mb-4 text-sm font-medium text-ink/60 dark:text-cream/60 sm:text-base">{edu.school}</p>

                      <div className="space-y-2.5 text-sm text-ink/60 dark:text-cream/60">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 shrink-0" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 shrink-0" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-sm leading-relaxed text-ink/70 dark:text-cream/70 sm:text-base">{edu.description}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTAPanel
            eyebrow="Let's talk"
            title="Let's work together"
            description="Ready to discuss how my experience can help your next project succeed?"
            primary={{ href: '/projects', label: 'View my work' }}
            secondary={{ href: '/contact', label: 'Get in touch' }}
          />
        </div>
      </section>
    </div>
  )
}
