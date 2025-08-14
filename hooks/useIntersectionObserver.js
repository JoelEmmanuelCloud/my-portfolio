'use client'
import { useEffect, useState, useRef, useCallback } from 'react'

/**
 * Simple Intersection Observer hook
 */
export function useIntersectionObserver(options = {}) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    triggerOnce = false
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

        if (isElementIntersecting && triggerOnce) {
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
  }, [threshold, root, rootMargin, triggerOnce])

  return [elementRef, isIntersecting, entry]
}

/**
 * Hook for lazy loading images
 */
export function useLazyImage(options = {}) {
  const {
    threshold = 0.1,
    rootMargin = '50px'
  } = options

  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const [error, setError] = useState(null)

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
 * Hook for scroll animations
 */
export function useScrollAnimation(options = {}) {
  const {
    threshold = 0.2,
    rootMargin = '0px',
    triggerOnce = true
  } = options

  const [isVisible, setIsVisible] = useState(false)

  const [ref, isIntersecting] = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce
  })

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true)
    }
  }, [isIntersecting])

  return [ref, isVisible]
}

export default useIntersectionObserver