'use client'
import { useState, useEffect, useCallback } from 'react'
import { throttle } from '@/lib/utils'

/**
 * Simple scroll spy hook for tracking active sections
 */
export function useScrollspy(sectionIds = [], options = {}) {
  const {
    offset = 100,
    throttleMs = 100
  } = options

  const [activeSection, setActiveSection] = useState('')

  // Simple scroll handler
  const handleScroll = useCallback(
    throttle(() => {
      if (!sectionIds.length) return

      const scrollY = window.scrollY + offset
      let currentSection = ''

      // Find the section that's currently in view
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            currentSection = sectionId
            break
          }
        }
      }

      // If no section is exactly in view, find the closest one
      if (!currentSection && sectionIds.length > 0) {
        let closestSection = sectionIds[0]
        let closestDistance = Infinity

        sectionIds.forEach(sectionId => {
          const element = document.getElementById(sectionId)
          if (element) {
            const distance = Math.abs(element.offsetTop - scrollY)
            if (distance < closestDistance) {
              closestDistance = distance
              closestSection = sectionId
            }
          }
        })

        currentSection = closestSection
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }
    }, throttleMs),
    [sectionIds, offset, throttleMs, activeSection]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Set initial active section

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return activeSection
}

/**
 * Hook for smooth scrolling to sections
 */
export function useSmoothScroll() {
  const scrollToSection = useCallback((sectionId, offset = 100) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return { scrollToSection, scrollToTop }
}

/**
 * Hook for detecting scroll position
 */
export function useScrollPosition(options = {}) {
  const { threshold = 100, throttleMs = 100 } = options
  
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [isAboveThreshold, setIsAboveThreshold] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollInfo = throttle(() => {
      const currentScrollY = window.scrollY
      
      setScrollPosition(currentScrollY)
      setIsScrollingDown(currentScrollY > lastScrollY && currentScrollY > threshold)
      setIsAboveThreshold(currentScrollY > threshold)
      
      lastScrollY = currentScrollY
    }, throttleMs)

    window.addEventListener('scroll', updateScrollInfo, { passive: true })
    updateScrollInfo() // Initial call

    return () => window.removeEventListener('scroll', updateScrollInfo)
  }, [threshold, throttleMs])

  return {
    scrollPosition,
    isScrollingDown,
    isAboveThreshold
  }
}

export default useScrollspy