'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import TechStack from './TechStack'

export default function ProjectCard({ project, index = 0, variant = 'default' }) {
  const isDetailed = variant === 'detailed'
  const isFeatured = project.featured
  
  return (
    <div className={`group relative bg-white border border-gray-200 transition-all duration-200 hover:border-gray-300 ${
      isFeatured ? 'border-gray-300' : ''
    }`}>
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-gray-900 text-white text-xs font-medium px-2 py-1">
            Featured
          </span>
        </div>
      )}

      {/* Project Image */}
      {project.images && project.images.length > 0 && (
        <div className="relative h-48 bg-gray-100 border-b border-gray-200">
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-gray-500 text-sm">Project Preview</span>
          </div>
          {/* Uncomment when you have actual images */}
          {/* <Image
            src={project.images[0]}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
          /> */}
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-medium text-gray-900 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              {project.role}
            </p>
            {project.period && (
              <p className="text-xs text-gray-500">
                {project.period}
              </p>
            )}
          </div>
          
          {/* External Links */}
          <div className="flex space-x-2 ml-4">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-200 hover:bg-gray-50 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-200 hover:bg-gray-50 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Summary */}
        <p className="text-gray-600 mb-4 leading-relaxed">
          {isDetailed ? project.summary : 
           project.summary.length > 120 ? 
           `${project.summary.substring(0, 120)}...` : 
           project.summary
          }
        </p>

        {/* Key Highlights */}
        {isDetailed && project.impact && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Key Results</h4>
            <ul className="space-y-1">
              {project.impact.slice(0, 3).map((achievement, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Stack */}
        <div className="mb-6">
          <TechStack 
            technologies={project.stack} 
            limit={isDetailed ? 12 : 6}
            size="sm"
          />
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                View Live →
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Source Code →
              </a>
            )}
          </div>
          
          {project.slug && (
            <Link
              href={`/projects/${project.slug}`}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center"
            >
              Case Study
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

// Compact version for grid layouts
export function ProjectCardCompact({ project, index = 0 }) {
  return (
    <div className="group p-4 border border-gray-200 hover:border-gray-300 transition-colors bg-white">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-gray-900">
          {project.title}
        </h4>
        {project.links?.live && (
          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
        )}
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {project.summary}
      </p>
      
      <TechStack 
        technologies={project.stack.slice(0, 4)} 
        size="xs"
        showCount={false}
      />
    </div>
  )
}

// Featured version for hero sections
export function ProjectCardFeatured({ project, index = 0 }) {
  return (
    <div className="group relative bg-white border border-gray-300 p-8">
      <div className="absolute top-4 right-4">
        <span className="bg-gray-900 text-white text-xs font-medium px-2 py-1">
          Featured
        </span>
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-light text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600">
          {project.role}
        </p>
      </div>

      <p className="text-gray-600 mb-6 leading-relaxed">
        {project.summary}
      </p>

      <div className="mb-8">
        <TechStack 
          technologies={project.stack} 
          limit={8}
        />
      </div>

      {project.slug && (
        <div className="flex gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="px-6 py-2 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            View Case Study
          </Link>
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              View Live
            </a>
          )}
        </div>
      )}
    </div>
  )
}