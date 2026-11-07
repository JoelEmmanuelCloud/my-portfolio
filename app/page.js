import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/data/projects'
import FeaturedProjectCard from '@/components/project/FeaturedProjectCard'
import SlideButton from '@/components/ui/SlideButton'
import TiltLogo from '@/components/ui/TiltLogo'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import TechBadge from '@/components/ui/TechBadge'
import { COMPANIES, SOCIAL_LINKS } from '@/lib/constants'
import { stats, buildingApproach } from '@/data/home'
import SectionHeading from '@/components/layout/SectionHeading'

const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

export default function Home() {
  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="px-2 sm:px-3 pt-2">
        <div className="panel-dark flex min-h-[560px] flex-col sm:min-h-[620px] lg:min-h-[680px]">
          <div className="glow-orb left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-[60%] bg-gold/25 sm:h-[520px] sm:w-[900px]" />

          <Reveal className="relative flex flex-1 flex-col items-center justify-center gap-6 px-5 py-20 text-center sm:gap-8 sm:px-10 lg:py-28" duration={0.7}>
            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] text-cream sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem]">
              Web3, AI &amp; cloud systems <span className="text-glow text-gold">that ship</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-cream/60 sm:text-lg">
              I&apos;m Joel Emmanuel. I design and build scalable blockchain protocols, AI-powered platforms,
              and full-stack products for startups and enterprises across four continents.
            </p>
            <div className="mt-2 flex flex-col gap-3 xs:flex-row">
              <SlideButton href="/projects" variant="gold">
                View my work
              </SlideButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-cream/20 px-6 py-2.5 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-cream/10"
              >
                Let&apos;s talk
              </Link>
            </div>
          </Reveal>

          <RevealGroup className="relative grid grid-cols-3 divide-x divide-cream/10 border-t border-cream/10" stagger={0.1}>
            {stats.map((stat) => (
              <RevealItem key={stat.label} className="flex flex-col items-center gap-1.5 py-6 sm:py-8">
                <span className="text-3xl font-semibold text-cream sm:text-5xl">{stat.value}</span>
                <span className="text-xs text-cream/60 sm:text-sm">{stat.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-cream-200/50 py-14 dark:border-cream/5 dark:bg-cream/[0.03] sm:py-16 lg:py-20">
        <div className="container">
          <Reveal as="p" className="label text-center mb-8 sm:mb-10">Trusted by fast-growing teams</Reveal>
          <RevealGroup className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 sm:gap-y-8" stagger={0.06}>
            {Object.values(COMPANIES).map((company) => (
              <RevealItem key={company.name}>
                <TiltLogo href={company.url} name={company.name} logo={company.logo} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="section-watermark text-[6rem] text-ink dark:text-cream sm:text-[10rem] lg:text-[13rem]">
          WORK
        </div>
        <div className="container relative">
          <Reveal className="mb-10 flex flex-col gap-3 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <SectionHeading
                title="Featured projects"
                size="lg"
              />
            </div>
            <p className="max-w-sm text-sm text-ink/60 dark:text-cream/60 sm:text-base">
              From blockchain protocols to production transportation platforms — shipped and live.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-12 gap-5 sm:gap-6 lg:grid-rows-[320px_320px]" stagger={0.12}>
            {featuredProjects.map((project, i) => (
              <FeaturedProjectCard key={project.slug} project={project} lead={i === 0} />
            ))}
          </RevealGroup>

          <Reveal className="mt-10 flex justify-center sm:mt-12" delay={0.15}>
            <SlideButton href="/projects" variant="dark">
              View all projects
            </SlideButton>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 sm:py-16 lg:py-20">
        <div className="section-watermark text-[6rem] text-ink dark:text-cream sm:text-[10rem] lg:text-[13rem]">
          STACK
        </div>
        <div className="container relative">
          <Reveal className="mb-10 sm:mb-14">
            <SectionHeading
              title="A modern stack, from blockchain to cloud"
              size="lg"
              className="max-w-2xl"
            />
          </Reveal>

          <RevealGroup className="grid gap-4 sm:gap-5 sm:grid-cols-2" stagger={0.1}>
            {buildingApproach.map((approach) => (
              <RevealItem
                key={approach.title}
                className="surface-card group relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="relative flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-ink text-cream transition-colors duration-300 group-hover:bg-gold group-hover:text-ink dark:bg-cream dark:text-ink">
                    <approach.icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-ink dark:text-cream sm:text-xl">
                      {approach.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-ink/65 dark:text-cream/65">
                      {approach.description}
                    </p>
                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {approach.tech.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="px-2 sm:px-3">
        <div className="panel-dark grid items-center gap-10 p-6 sm:p-10 lg:grid-cols-[260px_1fr] lg:gap-14 lg:p-14">
          <div className="glow-orb -left-20 top-1/2 h-80 w-80 -translate-y-1/2 bg-cream/10" />
          <div className="glow-orb -right-10 -top-10 h-64 w-64 bg-gold/15" />
          <div className="grid-texture inset-0" />

          <Reveal direction="right" className="relative mx-auto w-40 shrink-0 sm:w-48 lg:mx-0 lg:w-full">
            <div className="relative aspect-square overflow-hidden rounded-full ring-4 ring-gold/40">
              <Image
                src="/images/profile/profile.jpeg"
                alt="Joel Emmanuel - Fullstack & Blockchain Developer"
                fill
                sizes="(max-width: 1024px) 192px, 260px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1} className="relative">
            <h2 className="mb-4 text-2xl font-semibold text-cream sm:text-3xl lg:text-4xl">
              Former Front-End Developer at Invillia, now building Web3 &amp; AI products
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-cream/65 sm:text-base">
              I&apos;ve shipped production platforms across Brazil, the USA, Canada, and Ghana — from AI-powered
              recruitment tools at Invillia, to blockchain education on Lisk at Learnway, to a ride-hailing
              platform serving thousands of daily riders at Freedom.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-cream/65 sm:text-base">
              AWS Certified in Cloud Practitioner and AI Practitioner. Specializing in Blockchain, React,
              NestJS, AWS, and applied AI/ML.
            </p>
            <SlideButton href="/experience" variant="gold">
              See my experience
            </SlideButton>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 sm:pb-16 lg:pb-20">
        <div className="container">
          <CTAPanel
            title="Have a project in mind?"
            description="I partner with startups and enterprises on blockchain, AI, and full-stack systems — from architecture to production."
            primary={{ href: '/contact', label: 'Start a conversation' }}
            secondary={{ href: SOCIAL_LINKS.email, label: 'Send email' }}
          />
        </div>
      </section>
    </div>
  )
}
