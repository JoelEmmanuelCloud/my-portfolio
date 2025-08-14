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
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container-max section-padding py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                I build reliable web platforms with{' '}
                <span className="gradient-text">React and AWS</span>
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
                Currently Frontend Engineer at <strong>Invillia</strong> • Building <strong>Freedom</strong> ride-hailing platform • 
                Shipping production systems with React, Node.js, AWS, and modern CI/CD used by thousands of customers.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projects" className="btn-primary">
                  View Case Studies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Let's Talk
                </Link>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200/50"
                  >
                    <span className="mr-2">{highlight.icon}</span>
                    {highlight.title}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-xl bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-gray-600">JE</span>
                      </div>
                      <p className="text-sm text-gray-600">Profile Picture</p>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center"
                >
                  <Code className="h-8 w-8 text-white" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center"
                >
                  <Brain className="h-8 w-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-8">
              Trusted by leading companies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {companies.map((company, index) => (
                <motion.a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="group flex justify-center"
                >
                  <div className="h-12 w-24 bg-gray-200 rounded-lg flex items-center justify-center group-hover:bg-gray-300 transition-colors duration-200">
                    <span className="text-xs font-medium text-gray-600">{company.name}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Production systems serving real users with modern tech stacks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass-card rounded-2xl p-8 hover-lift"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium">
                      {project.role}
                    </p>
                  </div>
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 6 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      +{project.stack.length - 6} more
                    </span>
                  )}
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                >
                  View Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/projects" className="btn-primary">
              View All Projects
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How I Build */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How I Build
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Modern tech stack for scalable, production-ready applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {buildingApproach.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover-lift"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <approach.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {approach.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {approach.description}
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {approach.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Have a project or role?
            </h2>
            <p className="mt-4 text-xl text-blue-100">
              Let's talk—24h reply guarantee
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book a Call
              </Link>
              <a
                href="mailto:ejoel00@gmail.com"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}