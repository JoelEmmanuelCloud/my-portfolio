'use client'
import { motion } from 'framer-motion'

// Technology color mapping for consistent styling
const techColors = {
  // Frontend
  'React': 'bg-blue-100 text-blue-700 border-blue-200',
  'React.js': 'bg-blue-100 text-blue-700 border-blue-200',
  'Next.js': 'bg-gray-100 text-gray-700 border-gray-200',
  'Vue.js': 'bg-green-100 text-green-700 border-green-200',
  'TypeScript': 'bg-blue-100 text-blue-800 border-blue-200',
  'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Tailwind CSS': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'CSS3': 'bg-blue-100 text-blue-600 border-blue-200',
  'HTML5': 'bg-orange-100 text-orange-700 border-orange-200',
  'Tailwind': 'bg-cyan-100 text-cyan-700 border-cyan-200',
  'Redux': 'bg-purple-100 text-purple-700 border-purple-200',
  'Material UI': 'bg-blue-100 text-blue-600 border-blue-200',
  
  // Backend
  'Node.js': 'bg-green-100 text-green-700 border-green-200',
  'Express': 'bg-gray-100 text-gray-700 border-gray-200',
  'Express.js': 'bg-gray-100 text-gray-700 border-gray-200',
  'Python': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  'Java': 'bg-red-100 text-red-700 border-red-200',
  'Spring Boot': 'bg-green-100 text-green-600 border-green-200',
  'Django': 'bg-green-100 text-green-800 border-green-200',
  'Flask': 'bg-gray-100 text-gray-700 border-gray-200',
  'NestJS': 'bg-red-100 text-red-700 border-red-200',
  
  // Databases
  'MongoDB': 'bg-green-100 text-green-700 border-green-200',
  'PostgreSQL': 'bg-blue-100 text-blue-700 border-blue-200',
  'MySQL': 'bg-blue-100 text-blue-600 border-blue-200',
  'Redis': 'bg-red-100 text-red-700 border-red-200',
  'DynamoDB': 'bg-orange-100 text-orange-700 border-orange-200',
  
  // Cloud & DevOps
  'AWS': 'bg-orange-100 text-orange-700 border-orange-200',
  'AWS EC2': 'bg-orange-100 text-orange-700 border-orange-200',
  'AWS S3': 'bg-orange-100 text-orange-700 border-orange-200',
  'AWS Lambda': 'bg-orange-100 text-orange-700 border-orange-200',
  'AWS SageMaker': 'bg-orange-100 text-orange-700 border-orange-200',
  'Docker': 'bg-blue-100 text-blue-700 border-blue-200',
  'Kubernetes': 'bg-blue-100 text-blue-600 border-blue-200',
  'GitHub Actions': 'bg-gray-100 text-gray-700 border-gray-200',
  'Vercel': 'bg-gray-100 text-gray-700 border-gray-200',
  'Netlify': 'bg-teal-100 text-teal-700 border-teal-200',
  
  // Tools & APIs
  'SendGrid': 'bg-blue-100 text-blue-700 border-blue-200',
  'Twilio': 'bg-red-100 text-red-700 border-red-200',
  'Paystack': 'bg-blue-100 text-blue-700 border-blue-200',
  'Google Maps': 'bg-green-100 text-green-700 border-green-200',
  'Socket.IO': 'bg-gray-100 text-gray-700 border-gray-200',
  'GraphQL': 'bg-pink-100 text-pink-700 border-pink-200',
  'REST APIs': 'bg-green-100 text-green-700 border-green-200',
  
  // AI/ML
  'TensorFlow': 'bg-orange-100 text-orange-700 border-orange-200',
  'PyTorch': 'bg-red-100 text-red-700 border-red-200',
  'Amazon Bedrock': 'bg-orange-100 text-orange-700 border-orange-200',
  'Amazon Lex': 'bg-orange-100 text-orange-700 border-orange-200',
  'Claude 3.5': 'bg-purple-100 text-purple-700 border-purple-200',
  
  // Default
  'default': 'bg-gray-100 text-gray-700 border-gray-200'
}

// Get appropriate color for technology
function getTechColor(tech) {
  return techColors[tech] || techColors.default
}

// Get icon for popular technologies
function getTechIcon(tech) {
  const icons = {
    'React': '⚛️',
    'React.js': '⚛️',
    'Next.js': '▲',
    'Vue.js': '💚',
    'Node.js': '🟢',
    'Python': '🐍',
    'JavaScript': '🟨',
    'TypeScript': '🔷',
    'AWS': '☁️',
    'Docker': '🐳',
    'MongoDB': '🍃',
    'PostgreSQL': '🐘',
    'Redis': '🔴',
    'GraphQL': '💜',
    'TensorFlow': '🧠',
    'PyTorch': '🔥',
  }
  return icons[tech] || null
}

export default function TechStack({ 
  technologies = [], 
  limit = 6, 
  size = 'md',
  variant = 'default',
  showCount = true,
  className = '',
  animated = true
}) {
  if (!technologies || technologies.length === 0) {
    return null
  }

  const displayedTech = technologies.slice(0, limit)
  const remainingCount = technologies.length - limit
  
  const sizeClasses = {
    xs: 'text-xs px-2 py-1',
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-sm px-4 py-2',
    xl: 'text-base px-4 py-2'
  }

  const variants = {
    default: 'rounded-full font-medium border',
    prominent: 'rounded-lg font-semibold border-2 shadow-sm',
    minimal: 'rounded font-medium',
    outlined: 'rounded-full font-medium border-2 bg-transparent'
  }

  const containerClass = `flex flex-wrap gap-2 ${className}`
  const baseClass = `inline-flex items-center transition-all duration-200 ${sizeClasses[size]} ${variants[variant]}`

  return (
    <div className={containerClass}>
      {displayedTech.map((tech, index) => {
        const techColor = getTechColor(tech)
        const techIcon = getTechIcon(tech)
        
        const TechBadge = (
          <span
            key={tech}
            className={`${baseClass} ${techColor} hover:scale-105 hover:shadow-sm`}
          >
            {techIcon && size !== 'xs' && (
              <span className="mr-1 text-xs">{techIcon}</span>
            )}
            {tech}
          </span>
        )

        if (animated) {
          return (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: index * 0.05, 
                duration: 0.3,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              {TechBadge}
            </motion.div>
          )
        }

        return TechBadge
      })}
      
      {remainingCount > 0 && showCount && (
        <motion.span
          initial={animated ? { opacity: 0, scale: 0.8 } : {}}
          whileInView={animated ? { opacity: 1, scale: 1 } : {}}
          transition={{ 
            delay: displayedTech.length * 0.05, 
            duration: 0.3 
          }}
          viewport={{ once: true }}
          className={`${baseClass} bg-gray-100 text-gray-600 border-gray-200`}
        >
          +{remainingCount} more
        </motion.span>
      )}
    </div>
  )
}

// Specialized component for technology categories
export function TechStackGrouped({ technologies, animated = true }) {
  if (!technologies || typeof technologies !== 'object') {
    return null
  }

  return (
    <div className="space-y-4">
      {Object.entries(technologies).map(([category, techs], categoryIndex) => (
        <motion.div
          key={category}
          initial={animated ? { opacity: 0, y: 20 } : {}}
          whileInView={animated ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: categoryIndex * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <h4 className="text-sm font-semibold text-gray-700 capitalize">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h4>
          <TechStack 
            technologies={techs} 
            limit={12}
            size="sm"
            showCount={false}
            animated={animated}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Compact inline version
export function TechStackInline({ technologies, maxItems = 3 }) {
  if (!technologies || technologies.length === 0) {
    return null
  }

  const displayedTech = technologies.slice(0, maxItems)
  const remaining = technologies.length - maxItems

  return (
    <span className="text-sm text-gray-600">
      {displayedTech.join(' • ')}
      {remaining > 0 && (
        <span className="text-gray-400"> (+{remaining} more)</span>
      )}
    </span>
  )
}

// Interactive version with tooltips (for detailed views)
export function TechStackInteractive({ technologies, showDescriptions = false }) {
  const techDescriptions = {
    'React': 'A JavaScript library for building user interfaces',
    'Next.js': 'The React framework for production',
    'Node.js': 'JavaScript runtime built on Chrome\'s V8 JavaScript engine',
    'AWS': 'Amazon Web Services cloud computing platform',
    'MongoDB': 'Document-oriented NoSQL database',
    // Add more descriptions as needed
  }

  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          viewport={{ once: true }}
          className="group relative"
        >
          <span className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full border transition-all duration-200 hover:scale-105 cursor-default ${getTechColor(tech)}`}>
            {getTechIcon(tech) && (
              <span className="mr-1.5 text-xs">{getTechIcon(tech)}</span>
            )}
            {tech}
          </span>
          
          {showDescriptions && techDescriptions[tech] && (
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
              {techDescriptions[tech]}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  )
}