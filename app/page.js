import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Code, Cloud, Database, Box, Download } from 'lucide-react'
import { projects } from '@/data/projects'

const companies = [
  { name: 'Invillia', logo: '/logos/invillia.svg', url: 'https://invillia.ai/en/home' },
  { name: 'Freedom', logo: '/logos/freedom.svg', url: 'https://www.freedomghana.com/' },
  { name: 'Compass UOL', logo: '/logos/compass.svg', url: 'https://compass.uol/en/about-us/' },
  { name: 'Yamaha', logo: '/logos/yamaha.svg', url: 'https://yamaha-motor.com/' },
  { name: 'SLB', logo: '/logos/slb.svg', url: 'https://www.slb.com/' },
  { name: 'nSight Live', logo: '/logos/nsight.svg', url: 'https://nsightlive.com/' }
]

const featuredProjects = projects.filter(project => project.featured).slice(0, 3)

const buildingApproach = [
  {
    title: 'Blockchain & Web3',
    description: 'Lisk, Ethereum, Solidity with DeFi protocols, smart contracts, and cross-chain solutions',
    icon: Box,
    tech: ['Lisk Blockchain', 'Ethereum', 'Solidity', 'Smart Contracts', 'DeFi', 'Web3.js']
  },
  {
    title: 'Frontend Excellence',
    description: 'React, Next.js, TypeScript with modern UI/UX patterns and responsive mobile-first design',
    icon: Code,
    tech: ['React', 'Next.js', 'TypeScript', 'React Native', 'Tailwind CSS']
  },
  {
    title: 'Backend Power',
    description: 'NestJS, Spring Boot, Node.js with microservices, real-time features, and secure APIs',
    icon: Database,
    tech: ['NestJS', 'Spring Boot', 'Node.js', 'PostgreSQL', 'MongoDB']
  },
  {
    title: 'Cloud & AI',
    description: 'AWS infrastructure, AI/ML integration, RAG systems, and automated CI/CD pipelines',
    icon: Cloud,
    tech: ['AWS', 'Docker', 'SageMaker', 'Bedrock', 'LangChain', 'GitHub Actions']
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">

      <section className="relative min-h-screen bg-white dark:bg-gray-900 overflow-hidden pt-16 sm:pt-18 lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">


          <div className="xl:hidden flex justify-center gap-8 sm:gap-12 mb-6 sm:mb-8 pt-2">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-black dark:text-white">+50</div>
              <div className="text-xs sm:text-sm font-medium text-black dark:text-gray-300 mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-black dark:text-white">+10</div>
              <div className="text-xs sm:text-sm font-medium text-black dark:text-gray-300 mt-1">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-black dark:text-white">Founder</div>
              <div className="text-xs sm:text-sm font-medium text-black dark:text-gray-300 mt-1">Avigate</div>
            </div>
          </div>

          <div className="xl:grid xl:grid-cols-[auto_1fr_auto] xl:gap-8 xl:items-center xl:min-h-[70vh]">


            <div className="hidden xl:flex xl:flex-col xl:gap-6 xl:justify-center xl:self-center">
              <div>
                <div className="text-lg font-bold text-black dark:text-white">+50</div>
                <div className="text-xs font-medium text-black dark:text-gray-300 mt-0.5">Projects</div>
              </div>
              <div>
                <div className="text-lg font-bold text-black dark:text-white">+10</div>
                <div className="text-xs font-medium text-black dark:text-gray-300 mt-0.5">Companies</div>
              </div>
              <div>
                <div className="text-lg font-bold text-black dark:text-white">Co-Founder</div>
                <div className="text-xs font-medium text-black dark:text-gray-300 mt-0.5">Avigate</div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 xl:gap-14">
              <div className="flex-1 max-w-2xl text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black dark:text-white mb-3 lg:mb-5">
                  Hello
                </h1>
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black dark:text-gray-300 font-medium mb-5 lg:mb-7 leading-relaxed">
                  — I&apos;m Joel Emmanuel, a Fullstack & Blockchain Developer building scalable Web3 applications, AI-powered platforms, and production systems
                </p>

                <div className="space-y-1.5 lg:space-y-2 mb-5 lg:mb-7">
                  <p className="text-xs sm:text-sm lg:text-base text-black dark:text-gray-300 font-medium">
                    <strong className="font-bold dark:text-white">Co-Founder & CTO</strong> at Avigate (Transportation Navigation Startup)
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-black dark:text-gray-300 font-medium">
                    <strong className="font-bold dark:text-white">Fullstack Developer</strong> at Learnway (Blockchain Education on Lisk)
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-black dark:text-gray-300 font-medium">
                    <strong className="font-bold dark:text-white">Frontend Engineer</strong> at Invillia (Enterprise AI Platforms)
                  </p>
                  <p className="text-xs sm:text-sm lg:text-base text-black dark:text-gray-300 font-medium">
                    Specializing in Blockchain, React, NestJS, AWS, and AI/ML
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    View Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm lg:text-base font-semibold"
                  >
                    Get In Touch →
                  </Link>
                  <a
                    href="/documents/joel-emmanuel-resume.pdf"
                    download
                    className="inline-flex items-center justify-center gap-2 px-5 lg:px-6 py-2.5 border-2 border-black dark:border-white text-black dark:text-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200 text-sm lg:text-base font-semibold"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Resume
                  </a>
                </div>
              </div>

              <div className="flex-shrink-0">
                <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profile/profile.jpeg"
                    alt="Joel Emmanuel - Fullstack & Blockchain Developer"
                    width={320}
                    height={320}
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 256px, 288px"
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>

            <div className="hidden xl:block w-8"></div>
          </div>

          <div className="flex justify-center mt-8 lg:mt-12">
            <div className="text-xs font-medium text-black dark:text-gray-400">
              Scroll down ↓
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14 bg-gray-50 dark:bg-gray-800/50 border-t border-b border-black/8 dark:border-white/8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6 sm:mb-8 text-center">
            Trusted by leading companies
          </p>
        </div>
        <div className="marquee-wrapper relative overflow-hidden flex">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-28 z-10 bg-gradient-to-r from-gray-50 dark:from-gray-800/90 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-28 z-10 bg-gradient-to-l from-gray-50 dark:from-gray-800/90 to-transparent" />
          {[0, 1].map((clone) => (
            <div key={clone} className="flex flex-shrink-0 items-center animate-marquee" aria-hidden={clone === 1 ? 'true' : undefined}>
              {companies.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-none flex items-center justify-center px-8 sm:px-10"
                >
                  <div className="relative h-7 sm:h-9 w-24 sm:w-28">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain transition-opacity duration-300 opacity-50 hover:opacity-90 dark:invert dark:opacity-40 dark:hover:opacity-80"
                    />
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black dark:text-gray-300 font-medium">
              — From blockchain education to transportation startups
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-white dark:bg-gray-800 border-2 border-black/10 dark:border-gray-700 p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:shadow-2xl hover:border-blue-600/20 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sm lg:text-base text-black dark:text-gray-300 font-medium">
                      {project.role}
                    </p>
                  </div>
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${project.title} live site (opens in new tab)`}
                      className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    </a>
                  )}
                </div>

                <p className="text-sm lg:text-base text-black dark:text-gray-300 mb-5 leading-relaxed font-medium">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-black dark:border-gray-500 text-black dark:text-gray-300 text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2.5 py-1 border border-black/50 dark:border-white/30 text-black dark:text-gray-400 text-xs font-medium">
                      +{project.stack.length - 4} more
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 text-sm font-semibold w-full shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Case Study
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900 border-t border-black/10 dark:border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black dark:text-white mb-3">
              How I Build
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black dark:text-gray-300 font-medium">
              — Modern tech stack from blockchain to cloud
            </p>
          </div>

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
            {buildingApproach.map((approach) => (
              <div
                key={approach.title}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border-2 border-black dark:border-gray-500 rounded-full group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                  <approach.icon className="h-7 w-7 text-black dark:text-white group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black dark:text-white mb-3">
                  {approach.title}
                </h3>

                <p className="text-sm lg:text-base text-black dark:text-gray-300 mb-5 leading-relaxed font-medium">
                  {approach.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center">
                  {approach.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-black dark:border-gray-500 text-black dark:text-gray-300 text-xs font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3">
              Ready to build something amazing?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-medium mb-8 sm:mb-10">
              — Let&apos;s discuss blockchain, AI, or full-stack development
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Start a Conversation
              </Link>
              <a
                href="mailto:ejoel00@gmail.com"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-200 text-sm sm:text-base font-semibold"
              >
                Send Email →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
