'use client'
import { useState, useEffect, useCallback } from 'react'
import { throttle } from '@/lib/utils'

/**
 * Custom hook for implementing scroll spy functionality
 * Tracks which section is currently active based on scroll position
 * 
 * @param {string[]} sectionIds - Array of section IDs to track
 * @param {Object} options - Configuration options
 * @param {number} options.offset - Offset from top of viewport (default: 100)
 * @param {number} options.throttleMs - Throttle scroll events (default: 100)
 * @param {string} options.rootMargin - Intersection observer root margin (default: '0px 0px -80% 0px')
 * @returns {string} - Currently active section ID
 */
export function useScrollspy(sectionIds = [], options = {}) {
  const {
    offset = 100,
    throttleMs = 100,
    rootMargin = '0px 0px -80% 0px'
  } = options

  const [activeSection, setActiveSection] = useState('')

  // Method 1: Using Intersection Observer (more performant)
  useEffect(() => {
    if (!sectionIds.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    )

    // Observe all sections
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    elements.forEach(element => observer.observe(element))

    return () => {
      observer.disconnect()
    }
  }, [sectionIds, rootMargin])

  // Method 2: Fallback using scroll events (for better browser support)
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

  // Add scroll event listener as fallback
  useEffect(() => {
    // Check if Intersection Observer is supported
    if (!window.IntersectionObserver) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      // Set initial active section
      handleScroll()

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [handleScroll])

  return activeSection
}

/**
 * Enhanced scroll spy hook with additional features
 * Includes progress tracking and section visibility
 */
export function useEnhancedScrollspy(sectionIds = [], options = {}) {
  const {
    offset = 100,
    throttleMs = 100,
    trackProgress = false,
    trackVisibility = false
  } = options

  const [activeSection, setActiveSection] = useState('')
  const [sectionProgress, setSectionProgress] = useState({})
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [scrollDirection, setScrollDirection] = useState('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  // Track scroll direction
  const updateScrollDirection = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }
      setLastScrollY(currentScrollY)
    }, throttleMs),
    [lastScrollY, throttleMs]
  )

  // Enhanced scroll handler with progress tracking
  const handleEnhancedScroll = useCallback(
    throttle(() => {
      if (!sectionIds.length) return

      const scrollY = window.scrollY + offset
      const windowHeight = window.innerHeight
      let currentSection = ''
      const progress = {}
      const visible = new Set()

      sectionIds.forEach(sectionId => {
        const element = document.getElementById(sectionId)
        if (!element) return

        const { offsetTop, offsetHeight } = element
        const sectionBottom = offsetTop + offsetHeight

        // Check if section is visible
        if (trackVisibility) {
          const isVisible = (
            offsetTop < scrollY + windowHeight &&
            sectionBottom > scrollY
          )
          if (isVisible) {
            visible.add(sectionId)
          }
        }

        // Calculate progress through section
        if (trackProgress) {
          if (scrollY >= offsetTop && scrollY <= sectionBottom) {
            progress[sectionId] = Math.min(
              ((scrollY - offsetTop) / offsetHeight) * 100,
              100
            )
          } else if (scrollY < offsetTop) {
            progress[sectionId] = 0
          } else {
            progress[sectionId] = 100
          }
        }

        // Determine active section
        if (scrollY >= offsetTop && scrollY < sectionBottom) {
          currentSection = sectionId
        }
      })

      // Update states
      if (currentSection !== activeSection) {
        setActiveSection(currentSection)
      }

      if (trackProgress) {
        setSectionProgress(progress)
      }

      if (trackVisibility) {
        setVisibleSections(visible)
      }
    }, throttleMs),
    [sectionIds, offset, throttleMs, trackProgress, trackVisibility, activeSection]
  )

  // Setup scroll listeners
  useEffect(() => {
    const handleScroll = () => {
      handleEnhancedScroll()
      updateScrollDirection()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial call
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleEnhancedScroll, updateScrollDirection])

  return {
    activeSection,
    sectionProgress: trackProgress ? sectionProgress : null,
    visibleSections: trackVisibility ? Array.from(visibleSections) : null,
    scrollDirection
  }
}

/**
 * Hook for smooth scrolling to sections
 * Works with the scroll spy to provide navigation functionality
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
 * Hook for detecting scroll position and direction
 * Useful for showing/hiding navigation bars
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

/**
 * Hook for creating a table of contents with active section highlighting
 * Perfect for long-form content and documentation
 */
export function useTableOfContents(options = {}) {
  const { 
    headingSelector = 'h1, h2, h3, h4, h5, h6',
    offset = 100,
    throttleMs = 100
  } = options

  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')

  // Generate headings from DOM
  useEffect(() => {
    const generateHeadings = () => {
      const elements = document.querySelectorAll(headingSelector)
      const headingsList = Array.from(elements).map((element, index) => {
        // Ensure each heading has an ID
        if (!element.id) {
          element.id = `heading-${index}`
        }
        
        return {
          id: element.id,
          text: element.textContent || '',
          level: parseInt(element.tagName.charAt(1)),
          element
        }
      })
      
      setHeadings(headingsList)
      return headingsList.map(h => h.id)
    }

    const sectionIds = generateHeadings()
    return sectionIds
  }, [headingSelector])

  // Use scroll spy on the generated heading IDs
  const activeSectionId = useScrollspy(
    headings.map(h => h.id),
    { offset, throttleMs }
  )

  useEffect(() => {
    setActiveId(activeSectionId)
  }, [activeSectionId])

  return {
    headings,
    activeId,
    scrollToHeading: (id) => {
      const element = document.getElementById(id)
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - offset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }
}

/**
 * Hook for implementing reading progress
 * Shows how much of the page/article has been read
 */
export function useReadingProgress(options = {}) {
  const { throttleMs = 100, container = null } = options
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const calculateProgress = throttle(() => {
      let scrollTop, scrollHeight, clientHeight

      if (container) {
        const element = typeof container === 'string' 
          ? document.getElementById(container)
          : container
        
        if (!element) return

        scrollTop = element.scrollTop
        scrollHeight = element.scrollHeight
        clientHeight = element.clientHeight
      } else {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop
        scrollHeight = document.documentElement.scrollHeight
        clientHeight = window.innerHeight
      }

      const windowHeight = scrollHeight - clientHeight
      const currentProgress = windowHeight > 0 ? (scrollTop / windowHeight) * 100 : 0
      
      setProgress(Math.min(100, Math.max(0, currentProgress)))
    }, throttleMs)

    const targetElement = container 
      ? (typeof container === 'string' ? document.getElementById(container) : container)
      : window

    if (targetElement) {
      targetElement.addEventListener('scroll', calculateProgress, { passive: true })
      calculateProgress() // Initial calculation
    }

    return () => {
      if (targetElement) {
        targetElement.removeEventListener('scroll', calculateProgress)
      }
    }
  }, [container, throttleMs])

  return progress
}

export default useScrollspy