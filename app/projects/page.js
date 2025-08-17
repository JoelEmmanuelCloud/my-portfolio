'use client'
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
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 sm:mb-6">
              Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 font-light mb-8 sm:mb-12 max-w-2xl">
              Production systems and innovative solutions built with modern technologies.
            </p>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-4 sm:gap-8 mb-12 sm:mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-base sm:text-lg font-light transition-colors duration-200 pb-1 ${
                    selectedCategory === category.id
                      ? 'text-gray-900 border-b-2 border-gray-900'
                      : 'text-gray-500 hover:text-gray-700'
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
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12 sm:space-y-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                {/* Project Image - FIXED: Added relative positioning */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden rounded-lg">
                    {project.images && project.images[0] ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-300 mx-auto mb-4 rounded"></div>
                          <p className="text-sm text-gray-500">Project Image</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 mb-2 sm:mb-3">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{project.role}</p>
                      <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs sm:text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
                      >
                        View Details
                      </Link>
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2 justify-center sm:justify-start text-sm sm:text-base"
                        >
                          Live Site
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-light text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Other Engagements */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-4">
              Other Collaborations
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light">
              Additional professional engagements across various industries
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {engagements.map((engagement, index) => (
              <a
                key={engagement.name}
                href={engagement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-6 sm:p-8 hover:bg-gray-50 transition-colors duration-200 rounded-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg sm:text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                    {engagement.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>
                
                <p className="text-gray-600 mb-2 text-sm sm:text-base">{engagement.role}</p>
                <p className="text-sm text-gray-500">{engagement.period}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 sm:mb-6">
            Interested in working together?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 font-light">
            Let's discuss your project requirements
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}