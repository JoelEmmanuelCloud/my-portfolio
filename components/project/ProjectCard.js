'use client'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight } from 'lucide-react'
import TechStack from './TechStack'

export default function ProjectCard({ project, index = 0, variant = 'default' }) {
  const isDetailed = variant === 'detailed'
  const isFeatured = project.featured
  
  return (
    <div className={`group relative bg-white border border-gray-200 transition-all duration-200 hover:border-gray-300 hover:shadow-md ${
      isFeatured ? 'border-gray-300' : ''
    }`}>
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
          <span className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded">
            Featured
          </span>
        </div>
      )}

      {/* Project Image */}
      {project.images && project.images.length > 0 && (
        <div className="relative h-40 sm:h-48 bg-gray-100 border-b border-gray-200">
          <Image
            src={project.images[0]}
            alt={`${project.title} preview`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-1 truncate">
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
          <div className="flex space-x-2 ml-3 sm:ml-4 flex-shrink-0">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-200 hover:bg-gray-50 transition-colors rounded"
                onClick={(e) => e.stopPropagation()}
                aria-label="View live project"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-200 hover:bg-gray-50 transition-colors rounded"
                onClick={(e) => e.stopPropagation()}
                aria-label="View source code"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Summary */}
        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-4 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto">
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
              className="inline-flex items-center justify-center px-4 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 w-full sm:w-auto mt-2 sm:mt-0"
            >
              Case Study
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
    <div className="group p-4 border border-gray-200 hover:border-gray-300 transition-colors bg-white rounded">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate pr-2">
          {project.title}
        </h4>
        {project.links?.live && (
          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
        )}
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed">
        {project.summary}
      </p>
      
      <TechStack 
        technologies={project.stack.slice(0, 4)} 
        size="xs"
        showCount={false}
      />
      
      {project.slug && (
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center justify-center px-4 py-2 bg-black text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 w-full mt-3"
        >
          View Details
        </Link>
      )}
    </div>
  )
}

// Featured version for hero sections
export function ProjectCardFeatured({ project, index = 0 }) {
  return (
    <div className="group relative bg-white border border-gray-300 p-6 sm:p-8 rounded">
      <div className="absolute top-4 right-4">
        <span className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded">
          Featured
        </span>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-light text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          {project.role}
        </p>
      </div>

      <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
        {project.summary}
      </p>

      <div className="mb-6 sm:mb-8">
        <TechStack 
          technologies={project.stack} 
          limit={8}
        />
      </div>

      {project.slug && (
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm"
          >
            View Case Study
          </Link>
          {project.links?.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-50 transition-colors duration-200 text-sm"
            >
              View Live
            </a>
          )}
        </div>
      )}
    </div>
  )
}