'use client'
//app/page.js
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Code, Cloud, Database } from 'lucide-react'
import { projects } from '@/data/projects'

const companies = [
  { name: 'Invillia', logo: '/logos/invillia.svg', url: 'https://invillia.ai/en/home' },
  { name: 'Freedom', logo: '/logos/freedom.svg', url: 'https://www.freedomghana.com/' },
  { name: 'Compass UOL', logo: '/logos/compass.svg', url: 'https://compass.uol/en/about-us/' },
  { name: 'Yamaha', logo: '/logos/yamaha.svg', url: 'https://yamaha-motor.com/' },
  { name: 'SLB', logo: '/logos/slb.svg', url: 'https://www.slb.com/' },
  { name: 'nSight Live', logo: '/logos/nsight.svg', url: 'https://nsightlive.com/' }
]

const featuredProjects = projects.filter(project => project.featured)

const buildingApproach = [
  {
    title: 'Frontend Craft',
    description: 'React, Next.js, TypeScript with modern UI/UX patterns and responsive design',
    icon: Code,
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Power',
    description: 'Node.js, Spring Boot, microservices with secure APIs and real-time features',
    icon: Database,
    tech: ['Node.js', 'Spring Boot', 'MongoDB', 'PostgreSQL']
  },
  {
    title: 'Cloud & AI',
    description: 'AWS infrastructure, CI/CD automation, and ML integration for production',
    icon: Cloud,
    tech: ['AWS', 'Docker', 'GitHub Actions', 'SageMaker']
  }
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Fixed to account for header */}
      <section className="relative min-h-screen bg-white overflow-hidden pt-20 sm:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 relative z-10">
          {/* Stats - Top Left (Desktop) - Better positioning */}
          <div className="hidden xl:block absolute top-8 left-4">
            <div className="space-y-6">
              <div>
                <div className="text-xl font-bold text-black">+50</div>
                <div className="text-xs font-medium text-black mt-1">Projects</div>
              </div>
              <div>
                <div className="text-xl font-bold text-black">+10</div>
                <div className="text-xs font-medium text-black mt-1">Companies</div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Stats - Top Center with proper spacing */}
          <div className="xl:hidden flex justify-center gap-16 mb-8 pt-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black">+50</div>
              <div className="text-sm font-medium text-black mt-2">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-black">+10</div>
              <div className="text-sm font-medium text-black mt-2">Companies</div>
            </div>
          </div>

          {/* Main Content - Adjusted spacing */}
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12 xl:gap-16 min-h-[50vh] lg:pl-20 xl:pl-24">
            <div className="flex-1 max-w-2xl xl:max-w-3xl text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-4 lg:mb-6">
                Hello
              </h1>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-black font-medium mb-6 lg:mb-8 leading-relaxed">
                — I&apos;m Joel Emmanuel a Software Engineer building scalable Applications and web platforms
              </p>
              
              <div className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-black font-medium">
                  Currently Frontend Engineer at <strong className="font-bold">Invillia</strong>
                </p>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-black font-medium">
                  Building <strong className="font-bold">Freedom</strong> ride-hailing platform
                </p>
                <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-black font-medium">
                  Specializing in React, Node.js, AWS, and modern CI/CD
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link 
                  href="/projects" 
                  className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 text-sm lg:text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Projects
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 lg:py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 text-sm lg:text-base font-semibold"
                >
                  Get In Touch →
                </Link>
              </div>
            </div>

            {/* Profile Image - Right Side */}
            <div className="flex-shrink-0">
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden shadow-2xl">
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

          {/* Scroll Indicator - Better positioning */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 xl:transform-none xl:left-4 xl:bottom-16">
            <div className="text-xs font-medium text-black xl:transform xl:-rotate-90 xl:origin-left">
              Scroll down ↓
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-12 sm:py-16 bg-white border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-xs sm:text-sm font-bold text-black uppercase tracking-wider mb-8">
              Trusted by leading companies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center">
              {companies.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center"
                >
                  <div className="w-20 sm:w-24 h-10 sm:h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 relative">
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
      <section className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-black font-medium">
              — Production systems serving real users
            </p>
          </div>

          <div className="grid gap-8 sm:gap-10 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-white border-2 border-black/10 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:border-blue-600/20 hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-black font-medium">
                      {project.role}
                    </p>
                  </div>
                  {project.links.live && (
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

                <p className="text-sm sm:text-base text-black mb-6 leading-relaxed font-medium">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 border border-black text-black text-xs font-medium hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span className="px-3 py-1.5 border border-black/50 text-black text-xs font-medium">
                      +{project.stack.length - 6} more
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 text-sm font-semibold w-full sm:w-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  View Case Study
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* How I Build */}
      <section className="py-16 sm:py-20 bg-white border-t border-black/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
              How I Build
            </h2>
            <p className="text-lg sm:text-xl text-black font-medium">
              — Modern tech stack for scalable applications
            </p>
          </div>

          <div className="grid gap-10 sm:gap-12 lg:grid-cols-3">
            {buildingApproach.map((approach) => (
              <div
                key={approach.title}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-black rounded-full group-hover:border-blue-600 group-hover:bg-blue-600 transition-all duration-300">
                  <approach.icon className="h-8 w-8 text-black group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                  {approach.title}
                </h3>
                
                <p className="text-sm sm:text-base text-black mb-6 leading-relaxed font-medium">
                  {approach.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {approach.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 border border-black text-black text-xs font-medium hover:bg-black hover:text-white transition-colors duration-200"
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
      <section className="py-16 sm:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Have a project or role?
            </h2>
            <p className="text-lg sm:text-xl font-medium mb-10">
              — Let&apos;s talk, 24h reply guarantee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200 text-base font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book a Call
              </Link>
              <a
                href="mailto:ejoel00@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-all duration-200 text-base font-semibold"
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