'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink, Code, Cloud, Database, Brain } from 'lucide-react'
import { projects } from '@/data/projects'
import { highlights } from '@/data/skills'

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
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        <div className="container mx-auto px-6 py-24 lg:py-32 relative z-10">
          {/* Stats - Top Left */}
          <div className="absolute top-24 left-6">
            <div className="space-y-8">
              <div>
                <div className="text-4xl font-light text-gray-900">+50</div>
                <div className="text-sm text-gray-500 mt-1">Projects completed</div>
              </div>
              <div>
                <div className="text-4xl font-light text-gray-900">+10</div>
                <div className="text-sm text-gray-500 mt-1">Companies served</div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex items-center justify-between min-h-screen">
            <div className="flex-1 max-w-2xl">
              <h1 className="text-8xl lg:text-9xl font-light text-gray-900 mb-4">
                Hello
              </h1>
              <p className="text-xl text-gray-600 font-light mb-12">
                — I'm a Frontend Engineer building scalable web platforms
              </p>
              
              <div className="space-y-4">
                <p className="text-gray-600">
                  Currently Frontend Engineer at <strong>Invillia</strong>
                </p>
                <p className="text-gray-600">
                  Building <strong>Freedom</strong> ride-hailing platform
                </p>
                <p className="text-gray-600">
                  Specializing in React, Node.js, AWS, and modern CI/CD
                </p>
              </div>

              <div className="mt-12 flex gap-6">
                <Link href="/projects" className="text-gray-900 hover:text-gray-600 transition-colors">
                  View Projects →
                </Link>
                <Link href="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
                  Get In Touch →
                </Link>
              </div>
            </div>

            {/* Profile Image - Right Side */}
            <div className="flex-shrink-0 ml-12">
              <div className="w-96 h-96 rounded-full overflow-hidden grayscale">
                <Image
                  src="/images/profile/profile.jpeg"
                  alt="Profile Picture"
                  width={384}
                  height={384}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Bottom Left */}
          <div className="absolute bottom-24 left-6">
            <div className="text-sm text-gray-500 transform -rotate-90 origin-left">
              Scroll down ↓
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-sm font-light text-gray-500 uppercase tracking-wide mb-8">
              Trusted by leading companies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {companies.map((company) => (
                <a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex justify-center"
                >
                  <div className="w-24 h-12 flex items-center justify-center text-center transition-all duration-300 hover:opacity-60">
                    <span className="text-xs font-light text-gray-400 group-hover:text-gray-600 transition-colors duration-300">
                      {company.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 font-light">
              — Production systems serving real users
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-white p-8 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-light text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light">
                      {project.role}
                    </p>
                  </div>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-light"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-light">
                      +{project.stack.length - 6} more
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="text-gray-900 hover:text-gray-600 transition-colors duration-200 font-light"
                >
                  View Case Study →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="text-gray-900 hover:text-gray-600 transition-colors font-light">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* How I Build */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              How I Build
            </h2>
            <p className="text-lg text-gray-600 font-light">
              — Modern tech stack for scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {buildingApproach.map((approach) => (
              <div
                key={approach.title}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <approach.icon className="h-8 w-8 text-gray-400" />
                </div>
                
                <h3 className="text-xl font-light text-gray-900 mb-4">
                  {approach.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed font-light">
                  {approach.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {approach.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-light"
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
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-4xl font-light mb-4">
              Have a project or role?
            </h2>
            <p className="text-lg text-gray-300 font-light mb-8">
              — Let's talk, 24h reply guarantee
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="text-white hover:text-gray-300 transition-colors font-light"
              >
                Book a Call →
              </Link>
              <a
                href="mailto:ejoel00@gmail.com"
                className="text-white hover:text-gray-300 transition-colors font-light"
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