'use client'
import { useState } from 'react'
import { Boxes, Code2, Server, Cloud, Activity, Database, Brain, Wrench, Rocket, ShieldCheck, Zap, Layers, Bot, Trophy, Globe } from 'lucide-react'
import { skills, highlights, skillProficiency } from '@/data/skills'
import ProficiencyBar from '@/components/ui/ProficiencyBar'
import TechBadge from '@/components/ui/TechBadge'
import { getTech } from '@/lib/techIcons'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import PageHeader from '@/components/layout/PageHeader'
import SectionHeading from '@/components/layout/SectionHeading'
import CertificationCard from '@/components/experience/CertificationCard'
import { certifications } from '@/data/experience'

const skillCategories = Object.entries(skills)

const categoryIcons = {
  blockchain: Boxes,
  frontend: Code2,
  backend: Server,
  cloud: Cloud,
  sre: Activity,
  database: Database,
  ai: Brain,
  tools: Wrench,
}

const highlightIcons = {
  'Side Project Builder': Rocket,
  'Blockchain Developer': Boxes,
  'AWS Certified': ShieldCheck,
  'Production Systems': Zap,
  'Full-Stack Expert': Layers,
  'AI/ML Integration': Bot,
  'Production Engineer': Wrench,
  'Hackathon Competitor': Trophy,
  'International Teams': Globe,
}

const proficiencyStyles = {
  Expert: 'bg-gold text-ink shadow-[0_0_18px_-4px_rgba(242,194,0,0.6)]',
  Advanced: 'bg-ink/10 text-ink dark:bg-cream/15 dark:text-cream',
  Intermediate: 'bg-ink/10 text-ink/70 dark:bg-cream/15 dark:text-cream/75',
  Learning: 'bg-ink/5 text-ink/50 dark:bg-cream/10 dark:text-cream/50',
}

const proficiencyWidth = {
  Expert: '100%',
  Advanced: '85%',
  Intermediate: '65%',
  Learning: '40%',
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0][0])

  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="pt-12 pb-10 sm:pt-16 sm:pb-14 lg:pt-20">
        <div className="container">
          <PageHeader
            eyebrow="Toolbox"
            title="Skills"
            description="Modern technologies for scalable web development."
            tags={['React, Node.js & AWS', '5+ years building production apps', 'Always learning']}
          />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Highlights"
                title="Key Strengths"
                align="center"
                className="mb-10 sm:mb-14"
              />
            </Reveal>

            <RevealGroup className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-5 md:grid-cols-4" stagger={0.08}>
              {highlights.map((highlight) => {
                const HighlightIcon = highlightIcons[highlight.title] || Zap
                return (
                  <RevealItem key={highlight.title} className="surface-card group p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6">
                    <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-ink text-cream transition-colors duration-300 group-hover:bg-gold group-hover:text-ink dark:bg-cream dark:text-ink">
                      <HighlightIcon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <h3 className="mb-2 text-base font-semibold text-ink dark:text-cream sm:text-lg">{highlight.title}</h3>
                    <p className="text-sm text-ink/60 dark:text-cream/60">{highlight.description}</p>
                  </RevealItem>
                )
              })}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-12 sm:py-16">
        <div className="section-watermark text-[6rem] text-ink dark:text-cream sm:text-[10rem] lg:text-[12rem]">
          SKILLS
        </div>
        <div className="container relative">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Deep dive"
                title="Technical Skills"
                align="center"
                className="mb-10 sm:mb-14"
              />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-4 lg:gap-8">

              <Reveal direction="right" className="md:col-span-1">
                <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 md:grid-cols-1">
                  {skillCategories.map(([key, category]) => {
                    const CategoryIcon = categoryIcons[key] || Code2
                    return (
                      <button
                        key={key}
                        onClick={() => setSelectedCategory(key)}
                        className={`flex w-full items-center gap-2.5 rounded-lg border p-3 text-left text-sm font-medium transition-all duration-200 sm:p-4 sm:text-base ${
                          selectedCategory === key
                            ? 'border-ink bg-ink text-cream dark:border-cream dark:bg-cream dark:text-ink'
                            : 'border-ink/10 bg-white text-ink/70 hover:border-ink/25 dark:border-cream/10 dark:bg-ink/60 dark:text-cream/70 dark:hover:border-cream/25'
                        }`}
                      >
                        <CategoryIcon className="size-4 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                        {category.title}
                      </button>
                    )
                  })}
                </div>
              </Reveal>

              <div className="md:col-span-3">
                {skillCategories.map(([key, category]) => {
                  const CategoryIcon = categoryIcons[key] || Code2
                  return (
                    <div
                      key={key}
                      className={selectedCategory === key ? 'block' : 'hidden'}
                    >
                      <div className="mb-6 sm:mb-8">
                        <h3 className="flex items-center gap-3 text-xl font-semibold text-ink dark:text-cream sm:text-2xl">
                          <CategoryIcon className="size-6 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                          {category.title}
                        </h3>
                      </div>

                      <div className="space-y-5 sm:space-y-6">
                        {category.skills.map((skill) => {
                          const proficiency = skillProficiency[skill] || 'Intermediate'
                          const skillTech = getTech(skill)

                          return (
                            <div key={skill} className="border-b border-ink/10 pb-4 dark:border-cream/10">
                              <div className="mb-2 flex items-center justify-between">
                                <h4 className="flex items-center gap-2 text-base font-medium text-ink dark:text-cream sm:text-lg">
                                  {skillTech && <skillTech.icon className="size-4 shrink-0" style={{ color: skillTech.color }} aria-hidden="true" />}
                                  {skill}
                                </h4>
                                <span className={`rounded-full px-3 py-1 font-mono text-xs uppercase tracking-wide ${proficiencyStyles[proficiency]}`}>
                                  {proficiency}
                                </span>
                              </div>

                              <ProficiencyBar
                                width={proficiencyWidth[proficiency]}
                                fillClassName={proficiency === 'Expert' ? 'bg-gold' : 'bg-ink/35 dark:bg-cream/35'}
                              />
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Verified"
                title="Professional Certifications"
                align="center"
                className="mb-10 sm:mb-14"
              />
            </Reveal>

            <RevealGroup className="grid gap-5 sm:gap-6 md:grid-cols-2" stagger={0.1}>
              {certifications.map((certification) => (
                <CertificationCard key={certification.name} certification={certification} />
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Growth"
                title="Continuous Learning"
                align="center"
                className="mb-10 sm:mb-14"
              />
            </Reveal>

            <RevealGroup className="grid gap-4 sm:gap-5 sm:grid-cols-2 md:grid-cols-3" stagger={0.1}>
              {[
                {
                  title: 'Current Focus',
                  items: ['Advanced AI/ML', 'Kubernetes', 'Serverless Architecture']
                },
                {
                  title: 'Next Learning',
                  items: ['Rust Programming', 'ZK Proofs', 'GraphQL Advanced']
                },
                {
                  title: 'Practice Areas',
                  items: ['System Design', 'DevOps Culture', 'Team Leadership']
                }
              ].map((area) => (
                <RevealItem key={area.title} className="surface-card p-6">
                  <h3 className="mb-4 text-base font-semibold text-ink dark:text-cream sm:text-lg">{area.title}</h3>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-ink/70 dark:text-cream/70 sm:text-base">
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <Reveal as="h3" className="mb-6 text-center text-lg font-semibold text-ink dark:text-cream sm:mb-8 sm:text-xl">
              Proficiency Levels
            </Reveal>
            <RevealGroup className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4" stagger={0.08}>
              {[
                { level: 'Expert', description: '5+ years, production experience' },
                { level: 'Advanced', description: '3+ years, complex projects' },
                { level: 'Intermediate', description: '1-3 years, regular use' },
                { level: 'Learning', description: 'Currently exploring' }
              ].map((level) => (
                <RevealItem key={level.level} className="surface-card rounded-2xl p-4 text-center">
                  <ProficiencyBar width={proficiencyWidth[level.level]} className="mb-3" />
                  <h4 className="mb-1 text-sm font-semibold text-ink dark:text-cream">{level.level}</h4>
                  <p className="text-xs text-ink/50 dark:text-cream/50">{level.description}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="pb-12 sm:pb-16">
        <div className="container">
          <CTAPanel
            eyebrow="Next steps"
            title="See these skills in production"
            description="Explore the projects that put this stack to work, or get in touch to talk specifics."
            primary={{ href: '/contact', label: 'Start a project' }}
            secondary={{ href: '/projects', label: 'View my work' }}
          />
        </div>
      </section>
    </div>
  )
}
