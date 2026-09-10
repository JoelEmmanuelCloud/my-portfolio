'use client'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

export default function TiltLogo({ href, name, logo }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${name} website`}
      className="group flex items-center rounded-lg bg-cream px-4 py-2.5 opacity-70 shadow-sm transition-opacity duration-300 hover:opacity-100 sm:px-5 sm:py-3"
      style={{ perspective: 800 }}
      whileHover={shouldReduceMotion ? undefined : { rotateY: 12, rotateX: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative h-5 w-20 sm:h-6 sm:w-24">
        <Image
          src={logo}
          alt={`${name} logo`}
          fill
          sizes="96px"
          className="object-contain"
        />
      </div>
    </motion.a>
  )
}
