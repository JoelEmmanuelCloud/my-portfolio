'use client'
import { Calendar, MapPin } from 'lucide-react'
import { experience, certifications, education } from '@/data/experience'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import TimelineItem from '@/components/experience/TimelineItem'
import CertificationCard from '@/components/experience/CertificationCard'
import PageHeader from '@/components/layout/PageHeader'
import SectionHeading from '@/components/layout/SectionHeading'

export default function Experience() {
  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20 lg:pb-16">
        <div className="container">
          <PageHeader
            title="Experience"
            description="Building production systems across innovative companies."
          />
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
        <div className="section-watermark text-[5.5rem] text-ink dark:text-cream sm:text-[9rem] lg:text-[11rem]">
          CAREER
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                title="Work history"
                className="mb-10 sm:mb-14"
              />
            </Reveal>

            <RevealGroup className="space-y-5 sm:space-y-6" stagger={0.1}>
              {experience?.map((job, index) => (
                <TimelineItem key={`${job.company}-${job.role}`} job={job} index={index} />
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                title="Certifications"
                className="mb-10 sm:mb-14"
              />
            </Reveal>

            <RevealGroup className="grid gap-5 sm:gap-6 md:grid-cols-2" stagger={0.1}>
              {certifications?.map((certification) => (
                <CertificationCard key={certification.name} certification={certification} />
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                title="Education"
                className="mb-10 sm:mb-14"
              />
            </Reveal>

            <RevealGroup className="space-y-5 sm:space-y-6" stagger={0.1}>
              {education?.map((edu, index) => (
                <RevealItem key={index} className="surface-card p-6 transition-shadow duration-300 hover:shadow-lg sm:p-8">
                  <div className="grid gap-6 lg:grid-cols-3 lg:gap-10">
                    <div className="lg:col-span-1">
                      <h3 className="mb-3 text-base font-semibold leading-tight text-ink dark:text-cream sm:text-lg">{edu.degree}</h3>
                      {edu.school && (
                        <p className="mb-4 text-sm font-medium text-ink/60 dark:text-cream/60 sm:text-base">{edu.school}</p>
                      )}

                      <div className="space-y-2.5 text-sm text-ink/60 dark:text-cream/60">
                        {edu.period && (
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 shrink-0" />
                            <span className="font-medium">{edu.period}</span>
                          </div>
                        )}
                        {edu.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 shrink-0" />
                            <span className="font-medium">{edu.location}</span>
                          </div>
                        )}
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
        <div className="container">
          <CTAPanel
            title="Let's work together"
            description="Explore the projects behind this experience, or reach out to talk specifics."
            primary={{ href: '/projects', label: 'View my work' }}
            secondary={{ href: '/contact', label: 'Get in touch' }}
          />
        </div>
      </section>
    </div>
  )
}
