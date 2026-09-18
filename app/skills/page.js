'use client'
import { useState } from 'react'
import { Boxes, Code2, Server, Cloud, Activity, Database, Brain, Wrench, Rocket, ShieldCheck, Zap, Layers, Bot, Trophy, Globe } from 'lucide-react'
import { skills, highlights, skillProficiency } from '@/data/skills'
import ProficiencyBar from '@/components/ui/ProficiencyBar'
import TechBadge from '@/components/ui/TechBadge'
import { getTech } from '@/lib/techIcons'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'

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
  Expert: 'bg-moss/15 text-moss dark:bg-moss/20',
  Advanced: 'bg-gold/20 text-ink dark:bg-gold/25 dark:text-cream',
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4">Toolbox</p>
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-6 sm:text-6xl lg:text-7xl">
              Skills
            </h1>
            <p className="mb-6 text-lg text-ink/65 dark:text-cream/65 sm:text-xl">
              Modern technologies for scalable web development.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React, Node.js & AWS', '5+ years building production apps', 'Always learning'].map((tag) => (
                <span key={tag} className="tag-pill">{tag}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Highlights</p>
              <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-14 sm:text-3xl">Key Strengths</h2>
            </Reveal>

            <RevealGroup className="grid grid-cols-1 gap-4 xs:grid-cols-2 sm:gap-5 md:grid-cols-4" stagger={0.08}>
              {highlights.map((highlight) => {
                const HighlightIcon = highlightIcons[highlight.title] || Zap
                return (
                  <RevealItem key={highlight.title} className="group rounded-3xl border border-ink/10 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-cream/10 dark:bg-ink/60 sm:p-6">
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
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Deep dive</p>
              <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-14 sm:text-3xl">Technical Skills</h2>
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

                              <ProficiencyBar width={proficiencyWidth[proficiency]} />
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Verified</p>
              <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-14 sm:text-3xl">Professional Certifications</h2>
            </Reveal>

            <RevealGroup className="grid gap-5 sm:gap-6 md:grid-cols-2" stagger={0.1}>

              <RevealItem className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                <div className="mb-5">
                  <h3 className="mb-2 text-lg font-semibold text-ink dark:text-cream sm:text-xl">AWS Certified Cloud Practitioner</h3>
                  <p className="mb-3 text-sm font-medium text-ink/60 dark:text-cream/60 sm:text-base">Amazon Web Services</p>

                  <div className="space-y-1 text-xs text-ink/50 dark:text-cream/50 sm:text-sm">
                    <p>Valid: Oct 11, 2023 – Oct 11, 2026</p>
                    <p>ID: VVNDR86202F4155M</p>
                  </div>
                </div>

                <p className="mb-4 text-sm text-ink/70 dark:text-cream/70 sm:text-base">
                  Foundational understanding of AWS Cloud services, architecture, security, and pricing models.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {['EC2', 'S3', 'Lambda', 'CloudWatch', 'IAM', 'VPC'].map((service) => (
                    <TechBadge key={service} name={service} />
                  ))}
                </div>
              </RevealItem>

              <RevealItem className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                <div className="mb-5">
                  <h3 className="mb-2 text-lg font-semibold text-ink dark:text-cream sm:text-xl">AWS Certified AI Practitioner</h3>
                  <p className="mb-3 text-sm font-medium text-ink/60 dark:text-cream/60 sm:text-base">Amazon Web Services</p>

                  <div className="space-y-1 text-xs text-ink/50 dark:text-cream/50 sm:text-sm">
                    <p>Certified 2024</p>
                    <p>Latest AI/ML Certification</p>
                  </div>
                </div>

                <p className="mb-4 text-sm text-ink/70 dark:text-cream/70 sm:text-base">
                  Expertise in AWS AI and machine learning services, including model deployment and MLOps practices.
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {['SageMaker', 'Bedrock', 'Lex', 'Textract', 'Comprehend', 'Rekognition'].map((service) => (
                    <TechBadge key={service} name={service} />
                  ))}
                </div>
              </RevealItem>

              <RevealItem className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60 sm:p-8">
                <div className="mb-5">
                  <h3 className="mb-2 text-lg font-semibold text-ink dark:text-cream sm:text-xl">Huawei Certified Network Associate</h3>
                  <p className="mb-3 text-sm font-medium text-ink/60 dark:text-cream/60 sm:text-base">Huawei</p>

                  <div className="space-y-1 text-xs text-ink/50 dark:text-cream/50 sm:text-sm">
                    <p>Certified 2023</p>
                  </div>
                </div>

                <p className="text-sm text-ink/70 dark:text-cream/70 sm:text-base">
                  Comprehensive networking fundamentals and technologies certification.
                </p>
              </RevealItem>
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="eyebrow mb-3 text-center">Growth</p>
              <h2 className="mb-10 text-center text-2xl font-semibold tracking-tight text-ink dark:text-cream sm:mb-14 sm:text-3xl">Continuous Learning</h2>
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
                <RevealItem key={area.title} className="rounded-3xl border border-ink/10 bg-white p-6 dark:border-cream/10 dark:bg-ink/60">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <RevealItem key={level.level} className="rounded-2xl border border-ink/10 bg-white p-4 text-center dark:border-cream/10 dark:bg-ink/60">
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
