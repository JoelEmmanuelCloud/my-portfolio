'use client'
//app/projects/page.js
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { projects, otherEngagements } from '@/data/projects'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'fullstack', name: 'Software' },
  { id: 'ai', name: 'AI/ML' },
  { id: 'cloud', name: 'Cloud' },
]

// Fallback data in case import fails
const fallbackEngagements = [
  {
    name: "Compass UOL",
    url: "https://compass.uol/en/about-us/",
    role: "Software Developer",
    period: "Feb 2023 – Present"
  },
  {
    name: "SLB",
    url: "https://www.slb.com/",
    role: "Automation Project",
    period: "Project"
  },
  {
    name: "Rewod Technologies", 
    url: "https://www.rewodtechnologies.com/",
    role: "Backend Developer",
    period: "Oct 2022 – Mar 2023"
  }
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  // Use fallback if otherEngagements is undefined
  const engagements = otherEngagements || fallbackEngagements
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => {
        const projectTech = project.stack.join(' ').toLowerCase()
        switch (selectedCategory) {
          case 'fullstack':
            return projectTech.includes('react') || projectTech.includes('node') || projectTech.includes('next')
          case 'ai':
            return projectTech.includes('sagemaker') || projectTech.includes('bedrock') || projectTech.includes('lex')
          case 'cloud':
            return projectTech.includes('aws') || projectTech.includes('docker') || projectTech.includes('actions')
          default:
            return true
        }
      })

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-5xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-black mb-4 sm:mb-6 leading-tight">
              Projects
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-black font-normal mb-8 sm:mb-12 max-w-4xl">
              Production systems and innovative solutions built with modern technologies.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-base sm:text-lg lg:text-xl font-medium transition-all duration-200 pb-2 px-1 ${
                    selectedCategory === category.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-black hover:text-blue-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            {filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] bg-black/5 overflow-hidden rounded-xl shadow-lg group">
                    {project.images && project.images[0] ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-black/10 mx-auto mb-4 rounded-xl"></div>
                          <p className="text-base text-black font-medium">Project Image</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-black mb-2 sm:mb-3 leading-tight">
                        {project.title}
                      </h2>
                      <p className="text-black mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl font-medium">{project.role}</p>
                      <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {project.stack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="text-sm sm:text-base text-black border border-black/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white hover:bg-black/5 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-2 sm:pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-sm sm:text-base font-medium shadow-lg"
                      >
                        View Details
                      </Link>
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black hover:text-blue-600 transition-colors flex items-center gap-2 justify-center sm:justify-start text-base sm:text-lg font-medium"
                        >
                          Live Site
                          <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12 sm:py-16">
              <h3 className="text-xl sm:text-2xl font-medium text-black mb-2">No projects found</h3>
              <p className="text-black text-base sm:text-lg">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Other Engagements */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black/2">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-4">
              Other Collaborations
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-black font-normal">
              Additional professional engagements across various industries
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {engagements.map((engagement, index) => (
              <a
                key={engagement.name}
                href={engagement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 sm:p-8 hover:bg-blue-50 transition-colors duration-200 rounded-xl border border-black/10 shadow-sm hover:shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-black group-hover:text-blue-600 transition-colors">
                    {engagement.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-black group-hover:text-blue-600 transition-colors flex-shrink-0" />
                </div>
                
                <p className="text-black mb-2 text-base sm:text-lg font-medium">{engagement.role}</p>
                <p className="text-sm sm:text-base text-black/70">{engagement.period}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4 sm:mb-6">
            Interested in working together?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 font-normal max-w-3xl mx-auto">
            Let's discuss your project requirements
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors text-base shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}