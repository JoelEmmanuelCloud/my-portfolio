import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Code, Cloud, Database, Box } from 'lucide-react'
import { projects } from '@/data/projects'
import ProjectCardVisual from '@/components/project/ProjectCardVisual'
import SlideButton from '@/components/ui/SlideButton'
import TiltLogo from '@/components/ui/TiltLogo'
import Reveal, { RevealGroup, RevealItem } from '@/components/ui/Reveal'
import CTAPanel from '@/components/ui/CTAPanel'
import TechBadge from '@/components/ui/TechBadge'
import { getTech } from '@/lib/techIcons'
import { SOCIAL_LINKS } from '@/lib/constants'

const companies = [
  { name: 'Invillia', logo: '/logos/invillia.svg', url: 'https://invillia.ai/en/home' },
  { name: 'Freedom', logo: '/logos/freedom.svg', url: 'https://www.freedomghana.com/' },
  { name: 'Compass UOL', logo: '/logos/compass.svg', url: 'https://compass.uol/en/about-us/' },
  { name: 'Yamaha', logo: '/logos/yamaha.svg', url: 'https://yamaha-motor.com/' },
  { name: 'SLB', logo: '/logos/slb.svg', url: 'https://www.slb.com/' },
  { name: 'nSight Live', logo: '/logos/nsight.svg', url: 'https://nsightlive.com/' }
]

const stats = [
  { value: '+50', label: 'Projects shipped' },
  { value: '+10', label: 'Companies served' },
  { value: '4', label: 'Continents' },
]

const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

const buildingApproach = [
  {
    index: '01',
    title: 'Blockchain & Web3',
    description: 'Lisk, Ethereum, Solidity with DeFi protocols, smart contracts, and cross-chain solutions.',
    icon: Box,
    tech: ['Lisk', 'Ethereum', 'Solidity', 'DeFi']
  },
  {
    index: '02',
    title: 'Frontend Excellence',
    description: 'React, Next.js, TypeScript with modern UI/UX patterns and responsive mobile-first design.',
    icon: Code,
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind']
  },
  {
    index: '03',
    title: 'Backend Power',
    description: 'NestJS, Spring Boot, Node.js with microservices, real-time features, and secure APIs.',
    icon: Database,
    tech: ['NestJS', 'Spring Boot', 'Node.js', 'PostgreSQL']
  },
  {
    index: '04',
    title: 'Cloud & AI',
    description: 'AWS infrastructure, AI/ML integration, RAG systems, and automated CI/CD pipelines.',
    icon: Cloud,
    tech: ['AWS', 'Docker', 'Bedrock', 'LangChain']
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-cream dark:bg-ink">

      <section className="px-2 sm:px-3 pt-2">
        <div className="panel-dark flex min-h-[560px] flex-col sm:min-h-[620px] lg:min-h-[680px]">
          <div className="glow-orb left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-[60%] bg-gold/25 sm:h-[520px] sm:w-[900px]" />

          <Reveal className="relative flex flex-1 flex-col items-center justify-center gap-6 px-5 py-20 text-center sm:gap-8 sm:px-10 lg:py-28" duration={0.7}>
            <span className="eyebrow !text-cream/55">Fullstack &amp; Blockchain Developer</span>
            <h1 className="max-w-6xl text-5xl font-semibold leading-[0.95] tracking-tighter text-cream sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem]">
              Web3, AI &amp; cloud systems <span className="text-glow text-gold">that ship.</span>
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
                <span className="text-3xl font-semibold tracking-tight text-cream sm:text-5xl">{stat.value}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-cream/50 sm:text-xs">{stat.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-y border-ink/5 bg-cream-200/50 py-14 dark:border-cream/5 dark:bg-cream/[0.03] sm:py-16 lg:py-20">
        <div className="container">
          <Reveal as="p" className="eyebrow text-center mb-8 sm:mb-10">Trusted by fast-growing teams</Reveal>
          <RevealGroup className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14 sm:gap-y-8" stagger={0.06}>
            {companies.map((company) => (
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
              <p className="eyebrow mb-3">Selected work</p>
              <h2 className="text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl lg:text-5xl">
                Featured projects
              </h2>
            </div>
            <p className="max-w-sm text-sm text-ink/60 dark:text-cream/60 sm:text-base">
              From blockchain protocols to production transportation platforms — shipped and live.
            </p>
          </Reveal>

          <RevealGroup className="grid grid-cols-12 gap-5 sm:gap-6 lg:grid-rows-[320px_320px]" stagger={0.12}>
            {featuredProjects.map((project, i) => (
              <RevealItem
                key={project.slug}
                className={`group relative overflow-hidden rounded-3xl ${
                  i === 0
                    ? 'col-span-12 h-[440px] ring-1 ring-gold/40 shadow-[0_0_60px_-12px_rgba(242,194,0,0.45)] sm:h-[520px] lg:col-span-8 lg:row-span-2 lg:h-auto'
                    : 'col-span-12 h-[340px] sm:col-span-6 sm:h-[380px] lg:col-span-4 lg:h-auto'
                }`}
              >
                <Link href={`/projects/${project.slug}`} className="block h-full w-full">
                  <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                    <ProjectCardVisual category={project.category} size={i === 0 ? 'card' : 'thumb'} align={i === 0 ? 'center' : 'top'} />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                    <div className="mb-3 flex flex-wrap gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {project.stack.slice(0, 3).map((tech) => {
                        const techEntry = getTech(tech)
                        return (
                          <span key={tech} className="inline-flex items-center gap-1.5 rounded-full border border-cream/30 bg-ink/40 px-3 py-1 font-mono text-xs text-cream backdrop-blur-sm">
                            {techEntry && <techEntry.icon className="size-3.5 shrink-0" style={{ color: techEntry.color }} aria-hidden="true" />}
                            {tech}
                          </span>
                        )
                      })}
                    </div>

                    {i === 0 && (
                      <span className="mb-4 inline-flex w-fit items-center rounded-full bg-gold px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-ink">
                        Flagship
                      </span>
                    )}
                    <h3 className={`font-semibold tracking-tight text-cream ${i === 0 ? 'text-3xl sm:text-4xl lg:text-5xl' : 'text-xl sm:text-2xl'}`}>
                      {project.title}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-cream/60">{project.role}</p>

                    <p className="mb-0 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/75 opacity-0 transition-all duration-300 group-hover:mb-4 group-hover:max-h-24 group-hover:opacity-100">
                      {project.summary.length > 140 ? `${project.summary.slice(0, 140)}...` : project.summary}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-cream">
                      View case study
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
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
            <p className="eyebrow mb-3">How I build</p>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink dark:text-cream sm:text-4xl lg:text-5xl">
              A modern stack, from blockchain to cloud.
            </h2>
          </Reveal>

          <RevealGroup className="grid gap-4 sm:gap-5 sm:grid-cols-2" stagger={0.1}>
            {buildingApproach.map((approach) => (
              <RevealItem
                key={approach.title}
                className="group relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-cream/10 dark:bg-ink/60 sm:p-8"
              >
                <span className="pointer-events-none absolute -right-2 -top-6 select-none font-mono text-7xl font-medium text-ink/[0.05] dark:text-cream/[0.06] sm:text-8xl">
                  {approach.index}
                </span>

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
                    <div className="flex flex-wrap gap-1.5">
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
            <p className="eyebrow !text-cream/50 mb-3">The developer</p>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-cream sm:text-3xl lg:text-4xl">
              Former Front-End Developer at Invillia, now building Web3 &amp; AI products.
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
            eyebrow="Start a project"
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
