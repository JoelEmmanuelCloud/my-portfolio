'use client'
//app/page.js - Optimized version with fixed spacing
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Code, Cloud, Database, Box } from 'lucide-react'
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
      {/* Hero Section - Fixed spacing with header */}
      <section className="relative min-h-screen bg-white overflow-hidden pt-16 sm:pt-18 lg:pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12 relative z-10">
          {/* Stats - Top Left (Desktop) */}
          <div className="hidden xl:block absolute top-6 left-4">
            <div className="space-y-5">
              <div>
                <div className="text-lg font-bold text-black">+50</div>
                <div className="text-xs font-medium text-black mt-0.5">Projects</div>
              </div>
              <div>
                <div className="text-lg font-bold text-black">+10</div>
                <div className="text-xs font-medium text-black mt-0.5">Companies</div>
              </div>
              <div>
                <div className="text-lg font-bold text-black">Co-Founder</div>
                <div className="text-xs font-medium text-black mt-0.5">Avigate</div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Stats */}
          <div className="xl:hidden flex justify-center gap-8 sm:gap-12 mb-6 sm:mb-8 pt-2">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-black">+50</div>
              <div className="text-xs sm:text-sm font-medium text-black mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-black">+10</div>
              <div className="text-xs sm:text-sm font-medium text-black mt-1">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-black">Founder</div>
              <div className="text-xs sm:text-sm font-medium text-black mt-1">Avigate</div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-10 xl:gap-14 min-h-[50vh] lg:pl-16 xl:pl-20">
            <div className="flex-1 max-w-2xl xl:max-w-3xl text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-3 lg:mb-5">
                Hello
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-black font-medium mb-5 lg:mb-7 leading-relaxed">
                — I&apos;m Joel Emmanuel, a Fullstack & Blockchain Developer building scalable Web3 applications, AI-powered platforms, and production systems
              </p>
              
              <div className="space-y-1.5 lg:space-y-2 mb-5 lg:mb-7">
                <p className="text-xs sm:text-sm lg:text-base text-black font-medium">
                  <strong className="font-bold">Co-Founder & CTO</strong> at Avigate (Transportation Navigation Startup)
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-black font-medium">
                  <strong className="font-bold">Backend Developer</strong> at Learnway (Blockchain Education on Lisk)
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-black font-medium">
                  <strong className="font-bold">Frontend Engineer</strong> at Invillia (Enterprise AI Platforms)
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-black font-medium">
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
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile/profile.jpeg"
                  alt="Profile Picture"
                  width={320}
                  height={320}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 xl:transform-none xl:left-4 xl:bottom-12">
            <div className="text-xs font-medium text-black xl:transform xl:-rotate-90 xl:origin-left">
              Scroll down ↓
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-10 sm:py-12 lg:py-14 bg-white border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xs sm:text-sm font-bold text-black uppercase tracking-wider mb-6 sm:mb-8">
              Trusted by leading companies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center">
              {companies.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center"
                >
                  <div className="w-16 sm:w-20 h-8 sm:h-10 flex items-center justify-center transition-all duration-300 hover:scale-110 relative">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain filter transition-all duration-300 hover:brightness-75"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3">
              Featured Projects
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black font-medium">
              — From blockchain education to transportation startups
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-white border-2 border-black/10 p-5 sm:p-6 lg:p-7 transition-all duration-300 hover:shadow-2xl hover:border-blue-600/20 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-sm lg:text-base text-black font-medium">
                      {project.role}
                    </p>
                  </div>
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-blue-600 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <p className="text-sm lg:text-base text-black mb-5 leading-relaxed font-medium">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-black text-black text-xs font-medium hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2.5 py-1 border border-black/50 text-black text-xs font-medium">
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

      {/* How I Build */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 lg:mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-3">
              How I Build
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black font-medium">
              — Modern tech stack from blockchain to cloud
            </p>
          </div>

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
            {buildingApproach.map((approach) => (
              <div
                key={approach.title}
                className="text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border-2 border-black rounded-full group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                  <approach.icon className="h-7 w-7 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-black mb-3">
                  {approach.title}
                </h3>
                
                <p className="text-sm lg:text-base text-black mb-5 leading-relaxed font-medium">
                  {approach.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {approach.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-black text-black text-xs font-medium hover:bg-black hover:text-white transition-colors duration-200"
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

      {/* CTA Section */}
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