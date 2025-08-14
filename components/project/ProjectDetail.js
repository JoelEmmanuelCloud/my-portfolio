'use client'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Github } from 'lucide-react'
import TechStack, { TechStackGrouped } from './TechStack'

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to Projects
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
      <section className="py-24 border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded">
                {role}
              </span>
              {links.live && (
                <a
                  href={links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-gray-200 rounded hover:bg-gray-50 transition-colors"
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
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </div>

            <h1 className="text-5xl font-light text-gray-900 mb-6">
              {title}
            </h1>

            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-3xl">
              {summary}
            </p>
          </div>

          <TechStack technologies={stack} limit={12} />
        </div>
      </section>

      {/* Project Images */}
      {images.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Context */}
              {context && (
                <div>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">Context</h2>
                  <p className="text-gray-600 leading-relaxed">{context}</p>
                </div>
              )}

              {/* Challenge */}
              {challenge && (
                <div>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">Challenge</h2>
                  <p className="text-gray-600 leading-relaxed">{challenge}</p>
                </div>
              )}

              {/* Solution */}
              {solution && (
                <div>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">Solution</h2>
                  <p className="text-gray-600 leading-relaxed">{solution}</p>
                </div>
              )}

              {/* Impact */}
              {impact.length > 0 && (
                <div>
                  <h2 className="text-2xl font-light text-gray-900 mb-4">Impact</h2>
                  <ul className="space-y-3">
                    {impact.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="border border-gray-200 rounded p-6 bg-white">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Project Info</h3>
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
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                      >
                        Visit Site
                        <ExternalLink className="h-3 w-3 ml-1" />
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
                        className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center"
                      >
                        View Code
                        <Github className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="border border-gray-200 rounded p-6 bg-white">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Technology</h3>
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
      <section className="py-16 border-t border-gray-100">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            Interested in working together?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to discussing new opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
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