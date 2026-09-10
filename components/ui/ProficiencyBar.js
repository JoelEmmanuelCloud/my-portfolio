'use client'
import { motion, useReducedMotion } from 'framer-motion'

export default function ProficiencyBar({ width, className = '' }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <div className={`h-1.5 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-cream/10 ${className}`}>
      <motion.div
        className="h-full rounded-full bg-gold"
        initial={{ width: shouldReduceMotion ? width : 0 }}
        whileInView={{ width }}
        viewport={{ once: true, amount: 0.6 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  )
}
