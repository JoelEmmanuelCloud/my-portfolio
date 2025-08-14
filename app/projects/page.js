'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { projects, otherEngagements } from '@/data/projects'

const categories = [
  { id: 'all', name: 'All' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'ai', name: 'AI/ML' },
  { id: 'cloud', name: 'Cloud' },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
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
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-light text-gray-900 mb-6">
              Projects
            </h1>
            <p className="text-xl text-gray-600 font-light mb-12 max-w-2xl">
              Production systems and innovative solutions built with modern technologies.
            </p>
            
            {/* Category Filter */}
            <div className="flex gap-8 mb-16">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`text-lg font-light transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'text-gray-900 border-b-2 border-gray-900 pb-1'
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
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-cols-2' : ''
                }`}
              >
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                    {project.images && project.images[0] ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gray-300 mx-auto mb-4"></div>
                          <p className="text-sm text-gray-500">Project Image</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-4xl font-light text-gray-900 mb-3">
                        {project.title}
                      </h2>
                      <p className="text-gray-600 mb-4">{project.role}</p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="text-sm text-gray-600 border border-gray-300 px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-6 pt-4">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        View Details →
                      </Link>
                      {project.links?.live && (
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2"
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
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Other Collaborations
            </h2>
            <p className="text-lg text-gray-600 font-light">
              Additional professional engagements across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherEngagements.map((engagement, index) => (
              <a
                key={engagement.name}
                href={engagement.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-8 hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors">
                    {engagement.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-gray-400" />
                </div>
                
                <p className="text-gray-600 mb-2">{engagement.role}</p>
                <p className="text-sm text-gray-500">{engagement.period}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light text-white mb-6">
            Interested in working together?
          </h2>
          <p className="text-xl text-gray-300 mb-12 font-light">
            Let's discuss your project requirements
          </p>
          <div className="flex gap-6 justify-center">
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-8 py-3 font-light hover:bg-gray-100 transition-colors"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}