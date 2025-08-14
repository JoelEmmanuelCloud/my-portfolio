'use client'
import { motion } from 'framer-motion'
import { Code, Brain, Cloud, Database } from 'lucide-react'

const LoadingSpinner = () => {
  return (
    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  )
}

const FloatingIcon = ({ icon: Icon, delay = 0, size = 6 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [20, -10, -20, -40],
        rotate: [0, 180, 360]
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute"
    >
      <Icon className={`h-${size} w-${size} text-blue-600/30`} />
    </motion.div>
  )
}

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="relative w-full h-full">
          <div className="absolute top-1/4 left-1/4">
            <FloatingIcon icon={Code} delay={0} size={8} />
          </div>
          <div className="absolute top-1/3 right-1/4">
            <FloatingIcon icon={Brain} delay={0.5} size={6} />
          </div>
          <div className="absolute bottom-1/3 left-1/3">
            <FloatingIcon icon={Cloud} delay={1} size={7} />
          </div>
          <div className="absolute bottom-1/4 right-1/3">
            <FloatingIcon icon={Database} delay={1.5} size={5} />
          </div>
        </div>
      </div>

      {/* Main Loading Content */}
      <div className="text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Animated Logo/Icon */}
          <div className="relative mb-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 mx-auto mb-4"
            >
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">JE</span>
              </div>
            </motion.div>
            
            {/* Pulse rings */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-blue-600/30"
            />
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl border-2 border-purple-600/20"
            />
          </div>

          {/* Loading Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            Joel Emmanuel
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-600 mb-8"
          >
            Loading portfolio...
          </motion.p>
        </motion.div>

        {/* Progress Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="space-y-4"
        >
          {/* Spinner */}
          <div className="flex justify-center mb-6">
            <LoadingSpinner />
          </div>

          {/* Loading Steps */}
          <div className="text-sm text-gray-500 space-y-2">
            {[
              { text: "Initializing components", delay: 0 },
              { text: "Loading project data", delay: 0.8 },
              { text: "Preparing experience timeline", delay: 1.6 },
              { text: "Setting up skills showcase", delay: 2.4 }
            ].map((step, index) => (
              <motion.div
                key={step.text}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: step.delay,
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 3
                }}
                className="flex items-center justify-center gap-2"
              >
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                <span>{step.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 max-w-xs mx-auto"
        >
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ 
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop"
              }}
              className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
            />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Crafting your experience...
          </p>
        </motion.div>

        {/* Quick Tips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50">
            <p className="text-xs text-gray-600 text-center">
              💡 <strong>Tip:</strong> While you wait, this portfolio showcases React, Next.js, AWS, and AI/ML projects
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
    </div>
  )
}