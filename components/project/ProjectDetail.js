'use client'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import { projects } from '@/data/projects'

export default function ProjectDetail({ params }) {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    notFound()
  }

  // Get related projects (exclude current project)
  const relatedProjects = projects
    .filter(p => p.slug !== params.slug)
    .slice(0, 2)

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Back Navigation */}
      <section className="py-6 sm:py-8 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <Link
            href="/projects"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors font-light text-sm sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 mb-4 sm:mb-6">
              {project.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 sm:mb-8 text-gray-600">
              <span className="text-sm sm:text-base">{project.role}</span>
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-900 transition-colors text-sm sm:text-base"
                >
                  Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image - FIXED: Added relative positioning */}
      {project.images && project.images[0] && (
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12 lg:space-y-16">
              {/* Context */}
              {project.context && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6">
                    Context
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light">
                    {project.context}
                  </p>
                </div>
              )}

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6">
                    Challenge
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-4 sm:mb-6">
                    Solution
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-light">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Technology Breakdown */}
              {project.technologies && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8">
                    Technology Stack
                  </h2>
                  <div className="space-y-6 sm:space-y-8">
                    {Object.entries(project.technologies).map(([category, techs]) => (
                      <div key={category}>
                        <h3 className="font-light text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {techs.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs sm:text-sm text-gray-600 border border-gray-300 px-3 py-1 rounded"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact */}
              {project.impact && project.impact.length > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8">
                    Impact & Results
                  </h2>
                  <div className="space-y-4">
                    {project.impact.map((item, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-gray-200 pl-4 sm:pl-6 py-2"
                      >
                        <p className="text-gray-700 leading-relaxed font-light text-sm sm:text-base">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Images - FIXED: Added relative positioning */}
              {project.images && project.images.length > 1 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8">
                    Additional Views
                  </h2>
                  <div className="space-y-6 sm:space-y-8">
                    {project.images.slice(1).map((image, index) => (
                      <div key={index} className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          fill
                          className="object-cover grayscale"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:space-y-12">
              {/* Tech Stack Summary */}
              <div>
                <h3 className="font-light text-gray-900 mb-4 sm:mb-6 text-base sm:text-lg">
                  Technologies
                </h3>
                <div className="space-y-2">
                  {project.stack.map((tech) => (
                    <div key={tech} className="text-gray-600 font-light text-sm sm:text-base">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              {(project.links?.live || project.links?.github || project.links?.company) && (
                <div>
                  <h3 className="font-light text-gray-900 mb-4 sm:mb-6 text-base sm:text-lg">
                    Links
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Website
                      </a>
                    )}
                    
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Source Code
                      </a>
                    )}
                    
                    {project.links?.company && (
                      <a
                        href={project.links.company}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Company
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects - FIXED: Added relative positioning */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-12 sm:mb-16">
              More Projects
            </h2>

            <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
              {relatedProjects.map((relatedProject) => (
                <div key={relatedProject.slug} className="group">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Project Image - FIXED: Added relative positioning */}
                    <div className="relative aspect-video bg-gray-100 overflow-hidden rounded-lg">
                      {relatedProject.images && relatedProject.images[0] ? (
                        <Image
                          src={relatedProject.images[0]}
                          alt={relatedProject.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="w-16 h-16 bg-gray-300 rounded"></div>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-2 group-hover:text-gray-600 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm sm:text-base">{relatedProject.role}</p>
                      <p className="text-gray-700 leading-relaxed font-light text-sm sm:text-base mb-6">
                        {relatedProject.summary}
                      </p>
                      
                      <Link
                        href={`/projects/${relatedProject.slug}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium w-full sm:w-auto"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-4 sm:mb-6">
            Interested in similar work?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 font-light">
            Let's discuss your project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              Start a Conversation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-white rounded-full font-medium hover:bg-white hover:text-gray-900 transition-colors text-sm"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}