'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight, Filter, Code, Cloud, Brain, Database } from 'lucide-react'
import { projects, otherEngagements } from '@/data/projects'

const categories = [
  { id: 'all', name: 'All Projects', icon: Code },
  { id: 'fullstack', name: 'Full Stack', icon: Database },
  { id: 'ai', name: 'AI/ML', icon: Brain },
  { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Featured Projects
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Production systems and innovative solutions built with modern technologies. From ride-hailing platforms to AI-powered applications serving real users worldwide.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-white">
        <div className="container-max section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="glass-card rounded-2xl overflow-hidden hover-lift">
                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                    {project.images && project.images[0] ? (
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <Code className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                          <p className="text-sm text-gray-600">Project Screenshot</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                    
                    {/* Links Overlay */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="flex gap-2">
                        {project.links?.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/90 backdrop-blur-sm rounded-lg text-gray-700 hover:text-blue-600 transition-colors duration-200"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm mb-3">
                        {project.role}
                      </p>
                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category to see more projects.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Other Engagements */}
      <section className="py-24 bg-gray-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Other Collaborations
            </h2>
            <p className="text-lg text-gray-600">
              Additional projects and professional engagements across various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherEngagements.map((engagement, index) => (
              <motion.a
                key={engagement.name}
                href={engagement.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group glass-card rounded-xl p-6 hover-lift transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                    {engagement.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                </div>
                
                <p className="text-blue-600 font-medium text-sm mb-2">{engagement.role}</p>
                <p className="text-gray-600 text-sm">{engagement.period}</p>
              </motion.a>
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
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Like What You See?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's build something amazing together. I'm available for new projects and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 inline-flex items-center"
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/experience"
                className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
              >
                View Experience
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}