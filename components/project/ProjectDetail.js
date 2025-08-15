'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import TechStack, { TechStackGrouped } from './TechStack'

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-light text-gray-900 mb-4">Project Not Found</h1>
          <Link 
            href="/projects" 
            className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm font-medium"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    )
  }

  const {
    title,
    role,
    summary,
    context,
    challenge,
    solution,
    impact = [],
    stack = [],
    technologies = {},
    links = {},
    images = []
  } = project

  return (
    <div className="min-h-screen pt-16 bg-white">
      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="mb-6 sm:mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors text-sm sm:text-base"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded w-fit">
                {role}
              </span>
              <div className="flex gap-2">
                {links.live && (
                  <a
                    href={links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                {links.github && (
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors"
                    aria-label="View source code"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 mb-4 sm:mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
              {summary}
            </p>
          </div>

          <TechStack technologies={stack} limit={12} />
        </div>
      </section>

      {/* Project Images */}
      {images.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 sm:gap-8 md:grid-cols-2 max-w-6xl mx-auto">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded border border-gray-200 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-16 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8 sm:space-y-12">
              {/* Context */}
              {context && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">Context</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{context}</p>
                </div>
              )}

              {/* Challenge */}
              {challenge && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">Challenge</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{challenge}</p>
                </div>
              )}

              {/* Solution */}
              {solution && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">Solution</h2>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{solution}</p>
                </div>
              )}

              {/* Impact */}
              {impact.length > 0 && (
                <div>
                  <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-3 sm:mb-4">Impact</h2>
                  <ul className="space-y-3">
                    {impact.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                        <span className="text-sm sm:text-base text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6 sm:space-y-8">
              {/* Project Info */}
              <div className="border border-gray-200 rounded p-4 sm:p-6 bg-white">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1">Role</h4>
                    <p className="text-sm text-gray-600">{role}</p>
                  </div>
                  
                  {links.live && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Live Project</h4>
                      <a
                        href={links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto"
                      >
                        Visit Site
                        <ExternalLink className="h-3 w-3 ml-2" />
                      </a>
                    </div>
                  )}

                  {links.github && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Source Code</h4>
                      <a
                        href={links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto"
                      >
                        View Code
                        <Github className="h-3 w-3 ml-2" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="border border-gray-200 rounded p-4 sm:p-6 bg-white">
                <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">Technology</h3>
                {technologies && Object.keys(technologies).length > 0 ? (
                  <TechStackGrouped technologies={technologies} />
                ) : (
                  <TechStack technologies={stack} limit={20} size="sm" showCount={false} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            I'm always open to discussing new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors duration-200 text-sm"
            >
              View More Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectDetail