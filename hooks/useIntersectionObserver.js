'use client'
import { useEffect, useState, useRef, useCallback } from 'react'

/**
 * Custom hook for Intersection Observer API
 * Detects when elements enter/exit the viewport
 * 
 * @param {Object} options - Intersection Observer options
 * @param {string|number} options.threshold - Threshold for triggering (default: 0.1)
 * @param {string} options.root - Root element for intersection (default: null)
 * @param {string} options.rootMargin - Root margin for intersection (default: '0px')
 * @param {boolean} options.triggerOnce - Only trigger once (default: false)
 * @param {boolean} options.unobserveOnIntersect - Unobserve after first intersection (default: false)
 * @returns {Array} - [ref, isIntersecting, entry]
 */
export function useIntersectionObserver(options = {}) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    triggerOnce = false,
    unobserveOnIntersect = false
  } = options

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState(null)
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting

        setIsIntersecting(isElementIntersecting)
        setEntry(entry)

        if (isElementIntersecting && (triggerOnce || unobserveOnIntersect)) {
          observer.unobserve(element)
        }
      },
      {
        threshold,
        root,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, root, rootMargin, triggerOnce, unobserveOnIntersect])

  return [elementRef, isIntersecting, entry]
}

/**
 * Hook for observing multiple elements
 * Returns a map of element references and their intersection states
 */
export function useMultipleIntersectionObserver(options = {}) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px'
  } = options

  const [intersectionMap, setIntersectionMap] = useState(new Map())
  const observerRef = useRef(null)
  const elementsRef = useRef(new Map())

  // Initialize observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setIntersectionMap(prev => {
          const newMap = new Map(prev)
          entries.forEach(entry => {
            newMap.set(entry.target, {
              isIntersecting: entry.isIntersecting,
              intersectionRatio: entry.intersectionRatio,
              entry
            })
          })
          return newMap
        })
      },
      { threshold, root, rootMargin }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [threshold, root, rootMargin])

  // Function to observe an element
  const observe = useCallback((element, key) => {
    if (!element || !observerRef.current) return

    elementsRef.current.set(key, element)
    observerRef.current.observe(element)
  }, [])

  // Function to unobserve an element
  const unobserve = useCallback((key) => {
    const element = elementsRef.current.get(key)
    if (element && observerRef.current) {
      observerRef.current.unobserve(element)
      elementsRef.current.delete(key)
      setIntersectionMap(prev => {
        const newMap = new Map(prev)
        newMap.delete(element)
        return newMap
      })
    }
  }, [])

  return { intersectionMap, observe, unobserve }
}

/**
 * Hook for lazy loading images
 * Returns ref and loading state for image elements
 */
export function useLazyImage(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    placeholder = null
  } = options

  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [error, setError] = useState(null)
  const imgRef = useRef(null)

  const [observerRef, isIntersecting] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true
  })

  useEffect(() => {
    if (isIntersecting) {
      setIsInView(true)
    }
  }, [isIntersecting])

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
  }, [])

  const handleError = useCallback((error) => {
    setError(error)
  }, [])

  return {
    imgRef: observerRef,
    isLoaded,
    isInView,
    error,
    handleLoad,
    handleError
  }
}

/**
 * Hook for triggering animations when elements come into view
 * Useful for scroll-triggered animations
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    triggerOnce = true,
    delay = 0
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const timeoutRef = useRef(null)

  const [ref, isIntersecting] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce
  })

  useEffect(() => {
    if (isIntersecting && (!triggerOnce || !hasTriggered)) {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true)
          setHasTriggered(true)
        }, delay)
      } else {
        setIsVisible(true)
        setHasTriggered(true)
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isIntersecting, triggerOnce, hasTriggered, delay])

  return [ref, isVisible]
}

/**
 * Hook for implementing infinite scroll
 * Triggers callback when sentinel element comes into view
 */
export function useInfiniteScroll(callback, options = {}) {
  const {
    threshold = 1.0,
    rootMargin = '0px',
    enabled = true
  } = options

  const [isFetching, setIsFetching] = useState(false)
  const sentinelRef = useRef(null)

  const [ref, isIntersecting] = useIntersectionObserver({
    threshold,
    rootMargin
  })

  useEffect(() => {
    if (isIntersecting && enabled && !isFetching) {
      setIsFetching(true)
      callback().finally(() => {
        setIsFetching(false)
      })
    }
  }, [isIntersecting, enabled, isFetching, callback])

  return [ref, isFetching]
}

/**
 * Hook for implementing sticky scroll progress
 * Shows reading progress through a long document
 */
export function useReadingProgress(options = {}) {
  const {
    threshold = 0,
    rootMargin = '0px'
  } = options

  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const contentRef = useRef(null)

  const [ref, isIntersecting] = useIntersectionObserver({
    threshold,
    rootMargin
  })

  useEffect(() => {
    setIsVisible(isIntersecting)
  }, [isIntersecting])

  useEffect(() => {
    if (!isVisible) return

    const updateProgress = () => {
      const element = contentRef.current
      if (!element) return

      const { top, height } = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const scrolled = Math.max(0, -top)
      const total = height - windowHeight
      const percentage = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0

      setProgress(percentage)
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [isVisible])

  // Set content ref to be the same as intersection observer ref
  useEffect(() => {
    contentRef.current = ref.current
  }, [ref])

  return { ref, progress, isVisible }
}

/**
 * Hook for detecting element visibility with visibility ratio
 * Useful for analytics and performance monitoring
 */
export function useVisibilityTracker(options = {}) {
  const {
    threshold = [0, 0.25, 0.5, 0.75, 1],
    rootMargin = '0px',
    trackTime = false
  } = options

  const [visibility, setVisibility] = useState({
    isVisible: false,
    ratio: 0,
    timeVisible: 0,
    totalTime: 0
  })

  const startTimeRef = useRef(null)
  const totalTimeRef = useRef(0)

  const [ref, isIntersecting, entry] = useIntersectionObserver({
    threshold,
    rootMargin
  })

  useEffect(() => {
    if (!entry) return

    const ratio = entry.intersectionRatio
    const isVisible = entry.isIntersecting

    if (trackTime) {
      if (isVisible && !startTimeRef.current) {
        startTimeRef.current = Date.now()
      } else if (!isVisible && startTimeRef.current) {
        totalTimeRef.current += Date.now() - startTimeRef.current
        startTimeRef.current = null
      }
    }

    setVisibility(prev => ({
      ...prev,
      isVisible,
      ratio,
      timeVisible: startTimeRef.current ? Date.now() - startTimeRef.current : 0,
      totalTime: totalTimeRef.current
    }))
  }, [entry, trackTime])

  return [ref, visibility]
}

export default useIntersectionObserver