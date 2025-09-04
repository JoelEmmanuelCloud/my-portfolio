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
      <section className="py-6 sm:py-8 border-b-2 border-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-black hover:text-blue-600 transition-colors font-semibold text-sm sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black mb-6 sm:mb-8">
              {project.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 sm:mb-8 text-black">
              <span className="text-sm sm:text-base lg:text-lg font-semibold">{project.role}</span>
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors text-sm sm:text-base lg:text-lg font-semibold"
                >
                  Live Site
                  <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              )}
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-black leading-relaxed font-medium">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {project.images && project.images[0] && (
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-video bg-white overflow-hidden rounded-lg border-2 border-black">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12 lg:space-y-16">
              {/* Context */}
              {project.context && (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 sm:mb-6">
                    Context
                  </h2>
                  <p className="text-black leading-relaxed text-base sm:text-lg font-medium">
                    {project.context}
                  </p>
                </div>
              )}

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 sm:mb-6">
                    Challenge
                  </h2>
                  <p className="text-black leading-relaxed text-base sm:text-lg font-medium">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4 sm:mb-6">
                    Solution
                  </h2>
                  <p className="text-black leading-relaxed text-base sm:text-lg font-medium">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Technology Breakdown */}
              {project.technologies && (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8">
                    Technology Stack
                  </h2>
                  <div className="space-y-6 sm:space-y-8">
                    {Object.entries(project.technologies).map(([category, techs]) => (
                      <div key={category}>
                        <h3 className="font-bold text-black mb-3 sm:mb-4 text-base sm:text-lg capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {techs.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs sm:text-sm text-white bg-blue-600 border-2 border-blue-600 px-3 py-2 rounded font-semibold"
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
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8">
                    Impact & Results
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {project.impact.map((item, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-600 pl-4 sm:pl-6 py-3"
                      >
                        <p className="text-black leading-relaxed font-medium text-sm sm:text-base lg:text-lg">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Additional Images */}
              {project.images && project.images.length > 1 && (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-6 sm:mb-8">
                    Additional Views
                  </h2>
                  <div className="space-y-6 sm:space-y-8">
                    {project.images.slice(1).map((image, index) => (
                      <div key={index} className="relative aspect-video bg-white overflow-hidden rounded-lg border-2 border-black">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          fill
                          className="object-cover"
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
                <h3 className="font-bold text-black mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl">
                  Technologies
                </h3>
                <div className="space-y-3">
                  {project.stack.map((tech) => (
                    <div key={tech} className="text-black font-medium text-sm sm:text-base px-3 py-2 border-2 border-black rounded">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              {(project.links?.live || project.links?.github || project.links?.company) && (
                <div>
                  <h3 className="font-bold text-black mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl">
                    Links
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black hover:text-blue-600 transition-colors text-sm sm:text-base font-semibold p-3 border-2 border-black rounded hover:border-blue-600"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                        Live Website
                      </a>
                    )}
                    
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black hover:text-blue-600 transition-colors text-sm sm:text-base font-semibold p-3 border-2 border-black rounded hover:border-blue-600"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                        Source Code
                      </a>
                    )}
                    
                    {project.links?.company && (
                      <a
                        href={project.links.company}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black hover:text-blue-600 transition-colors text-sm sm:text-base font-semibold p-3 border-2 border-black rounded hover:border-blue-600"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
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

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-t-2 border-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-12 sm:mb-16">
              More Projects
            </h2>

            <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
              {relatedProjects.map((relatedProject) => (
                <div key={relatedProject.slug} className="group">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Project Image */}
                    <div className="relative aspect-video bg-white overflow-hidden rounded-lg border-2 border-black">
                      {relatedProject.images && relatedProject.images[0] ? (
                        <Image
                          src={relatedProject.images[0]}
                          alt={relatedProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="w-16 h-16 bg-black rounded"></div>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-black mb-3 text-sm sm:text-base font-semibold">{relatedProject.role}</p>
                      <p className="text-black leading-relaxed font-medium text-sm sm:text-base mb-6">
                        {relatedProject.summary}
                      </p>
                      
                      <Link
                        href={`/projects/${relatedProject.slug}`}
                        className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base font-semibold w-full sm:w-auto"
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
      <section className="py-16 sm:py-20 lg:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
            Interested in similar work?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white mb-8 sm:mb-12 font-medium">
            Let&apos;s discuss your project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base"
            >
              Start a Conversation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-sm sm:text-base"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}