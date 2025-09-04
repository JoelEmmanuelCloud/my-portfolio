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
      <section className="py-6 sm:py-8 border-b border-black/10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <Link
            href="/projects"
            className="inline-flex items-center text-black hover:text-blue-600 transition-colors font-medium text-sm sm:text-base"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="max-w-5xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light text-black mb-4 sm:mb-6 leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-6 sm:mb-8 text-black">
              <span className="text-base sm:text-lg font-medium">{project.role}</span>
              {project.links?.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors text-base sm:text-lg font-medium"
                >
                  Live Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <p className="text-lg sm:text-xl lg:text-2xl text-black leading-relaxed font-normal max-w-4xl">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      {project.images && project.images[0] && (
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="relative aspect-video bg-black/5 overflow-hidden rounded-xl shadow-lg">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
              />
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10 sm:space-y-12 lg:space-y-16">
              {/* Context */}
              {project.context && (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-4 sm:mb-6">
                    Context
                  </h2>
                  <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                    {project.context}
                  </p>
                </div>
              )}

              {/* Challenge */}
              {project.challenge && (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-4 sm:mb-6">
                    Challenge
                  </h2>
                  <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-4 sm:mb-6">
                    Solution
                  </h2>
                  <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Technology Breakdown */}
              {project.technologies && (
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-6 sm:mb-8">
                    Technology Stack
                  </h2>
                  <div className="space-y-6 sm:space-y-8">
                    {Object.entries(project.technologies).map(([category, techs]) => (
                      <div key={category}>
                        <h3 className="font-medium text-black mb-3 sm:mb-4 text-base sm:text-lg lg:text-xl capitalize">
                          {category.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {techs.map((tech) => (
                            <span
                              key={tech}
                              className="text-sm sm:text-base text-black border border-black/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white hover:bg-black/5 transition-colors"
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
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-6 sm:mb-8">
                    Impact & Results
                  </h2>
                  <div className="space-y-4 sm:space-y-6">
                    {project.impact.map((item, index) => (
                      <div
                        key={index}
                        className="border-l-3 border-blue-600 pl-4 sm:pl-6 py-2 bg-blue-50/50"
                      >
                        <p className="text-black leading-relaxed text-base sm:text-lg lg:text-xl">
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
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-black mb-6 sm:mb-8">
                    Additional Views
                  </h2>
                  <div className="space-y-6 sm:space-y-8">
                    {project.images.slice(1).map((image, index) => (
                      <div key={index} className="relative aspect-video bg-black/5 overflow-hidden rounded-xl shadow-lg">
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 2}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8 lg:space-y-12 lg:sticky lg:top-24 lg:self-start">
              {/* Tech Stack Summary */}
              <div className="bg-white border border-black/10 rounded-xl p-6 sm:p-8 shadow-sm">
                <h3 className="font-medium text-black mb-4 sm:mb-6 text-lg sm:text-xl">
                  Technologies
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {project.stack.map((tech) => (
                    <div key={tech} className="text-black text-base sm:text-lg">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              {(project.links?.live || project.links?.github || project.links?.company) && (
                <div className="bg-white border border-black/10 rounded-xl p-6 sm:p-8 shadow-sm">
                  <h3 className="font-medium text-black mb-4 sm:mb-6 text-lg sm:text-xl">
                    Links
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {project.links?.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black hover:text-blue-600 transition-colors text-base sm:text-lg font-medium"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Live Website
                      </a>
                    )}
                    
                    {project.links?.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black hover:text-blue-600 transition-colors text-base sm:text-lg font-medium"
                      >
                        <ExternalLink className="h-5 w-5" />
                        Source Code
                      </a>
                    )}
                    
                    {project.links?.company && (
                      <a
                        href={project.links.company}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-black hover:text-blue-600 transition-colors text-base sm:text-lg font-medium"
                      >
                        <ExternalLink className="h-5 w-5" />
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
        <section className="py-12 sm:py-16 lg:py-20 bg-black/2">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black mb-8 sm:mb-12 lg:mb-16">
              More Projects
            </h2>

            <div className="grid gap-6 sm:gap-8 lg:gap-12 md:grid-cols-2">
              {relatedProjects.map((relatedProject) => (
                <div key={relatedProject.slug} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="space-y-0">
                    {/* Project Image */}
                    <div className="relative aspect-video bg-black/5 overflow-hidden">
                      {relatedProject.images && relatedProject.images[0] ? (
                        <Image
                          src={relatedProject.images[0]}
                          alt={relatedProject.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <div className="w-16 h-16 bg-black/10 rounded-xl"></div>
                        </div>
                      )}
                    </div>

                    {/* Project Info */}
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-medium text-black mb-2 group-hover:text-blue-600 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-black mb-3 text-base sm:text-lg font-medium">{relatedProject.role}</p>
                      <p className="text-black leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
                        {relatedProject.summary}
                      </p>
                      
                      <Link
                        href={`/projects/${relatedProject.slug}`}
                        className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-sm sm:text-base font-medium w-full sm:w-auto shadow-lg"
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
      <section className="py-12 sm:py-16 lg:py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white mb-4 sm:mb-6">
            Interested in similar work?
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white/80 mb-8 sm:mb-12 font-normal max-w-3xl mx-auto">
            Let&apos;s discuss your project requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors text-base shadow-lg"
            >
              Start a Conversation
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-black transition-colors text-base"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}