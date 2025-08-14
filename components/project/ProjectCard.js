'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, ArrowRight, Calendar, MapPin } from 'lucide-react'
import TechStack from './TechStack'

export default function ProjectCard({ project, index = 0, variant = 'default' }) {
  const isDetailed = variant === 'detailed'
  const isFeatured = project.featured
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-2xl bg-white border border-gray-200 hover-lift transition-all duration-300 ${
        isFeatured ? 'ring-2 ring-blue-500/20 shadow-lg' : 'shadow-md'
      }`}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}

      {/* Project Image/Preview */}
      {project.images && project.images.length > 0 && (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Project Screenshot</span>
          </div>
          {/* Uncomment when you have actual images */}
          {/* <Image
            src={project.images[0]}
            alt={`${project.title} preview`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          /> */}
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-blue-600 mb-2">
              {project.role}
            </p>
            {project.period && (
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <Calendar className="h-3 w-3 mr-1" />
                {project.period}
              </div>
            )}
          </div>
          
          {/* External Links */}
          <div className="flex space-x-2 ml-4">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
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
                className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100 transition-colors duration-200"
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
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements</h4>
            <ul className="space-y-1">
              {project.impact.slice(0, 3).map((achievement, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Stack */}
        <TechStack 
          technologies={project.stack} 
          limit={isDetailed ? 12 : 6}
          size="sm"
        />

        {/* Footer Actions */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                View Live
              </a>
            )}
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-800 font-medium transition-colors duration-200"
                onClick={(e) => e.stopPropagation()}
              >
                Source Code
              </a>
            )}
          </div>
          
          {project.slug && (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              Case Study
              <ArrowRight className="ml-1 h-3 w-3" />
            </Link>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  )
}

// Variant for compact grid display
export function ProjectCardCompact({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
      className="group p-4 rounded-xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
          {project.title}
        </h4>
        {project.links?.live && (
          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
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
    </motion.div>
  )
}

// Variant for featured showcase
export function ProjectCardFeatured({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white to-blue-50/50 border border-blue-200/50 shadow-2xl hover:shadow-3xl transition-all duration-500"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-full -translate-y-16 translate-x-16" />
      
      <div className="relative p-8">
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full mb-3">
              Featured Project
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p className="text-blue-600 font-medium">
              {project.role}
            </p>
          </div>
          
          <div className="flex space-x-2">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-gray-600 mb-6 leading-relaxed text-lg">
          {project.summary}
        </p>

        <TechStack 
          technologies={project.stack} 
          variant="prominent"
          limit={8}
        />

        {project.slug && (
          <div className="mt-8">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Explore Case Study
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  )
}