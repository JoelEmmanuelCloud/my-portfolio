'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import SlideButton from './ui/SlideButton'
import ProjectCardVisual from './project/ProjectCardVisual'
import { projects } from '@/data/projects'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Articles', href: '/articles' },
  { name: 'Contact', href: '/contact' },
]

const featuredProjects = projects.filter((project) => project.featured).slice(0, 3)

function splitTitle(title) {
  const [name, ...rest] = title.split(/\s[\u2013-]\s/)
  return { name, tagline: rest.join(' - ') }
}

const linkClass = (active) =>
  `rounded-full px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors duration-200 ${
    active
      ? 'bg-gold text-ink'
      : 'text-cream/70 hover:bg-cream/10 hover:text-cream dark:text-ink/70 dark:hover:bg-ink/10 dark:hover:text-ink'
  }`

function ProjectsMenu({ item, active, shouldReduceMotion }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const wrapperRef = useRef(null)
  const triggerRef = useRef(null)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  const show = () => {
    clearTimeout(closeTimer.current)
    setOpen(true)
  }

  const hide = () => {
    clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpen(false), 150)
  }

  const onBlur = (event) => {
    if (!wrapperRef.current?.contains(event.relatedTarget)) setOpen(false)
  }

  const onKeyDown = (event) => {
    if (event.key === 'Escape' && open) {
      setOpen(false)
      triggerRef.current?.focus()
    }
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <Link
        ref={triggerRef}
        href={item.href}
        className={`${linkClass(active)} inline-flex items-center gap-1.5`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="projects-menu"
      >
        {item.name}
        <ChevronDown
          className={`size-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            id="projects-menu"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full w-[24rem] -translate-x-1/2 pt-4"
          >
            <div className="rounded-3xl border border-cream/10 bg-ink/95 p-2 shadow-xl shadow-ink/20 backdrop-blur-2xl backdrop-saturate-150 dark:border-ink/10 dark:bg-cream/95">
              <p className="px-3 pb-2 pt-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cream/50 dark:text-ink/50">
                Featured work
              </p>
              <ul className="flex flex-col gap-1">
                {featuredProjects.map((project) => {
                  const { name, tagline } = splitTitle(project.title)
                  return (
                    <li key={project.slug}>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="group flex items-center gap-3 rounded-2xl p-2 transition-colors duration-200 hover:bg-cream/10 focus-visible:bg-cream/10 dark:hover:bg-ink/10 dark:focus-visible:bg-ink/10"
                      >
                        <div className="size-12 shrink-0 overflow-hidden rounded-xl">
                          <ProjectCardVisual category={project.category} size="thumb" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-cream dark:text-ink">{name}</p>
                          <p className="truncate text-xs text-cream/60 dark:text-ink/60">{tagline || project.role}</p>
                        </div>
                        <ArrowUpRight
                          className="size-4 shrink-0 text-cream/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold dark:text-ink/40"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <Link
                href={item.href}
                className="mt-1 flex items-center justify-between rounded-2xl border-t border-cream/10 px-3 py-3 font-mono text-xs uppercase tracking-[0.12em] text-cream/70 transition-colors duration-200 hover:text-gold dark:border-ink/10 dark:text-ink/70"
              >
                View all projects
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? false : { y: -32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="sticky top-3 sm:top-4 z-50 w-full px-3 sm:px-4"
      >
        <nav
          className={`mx-auto flex h-14 sm:h-16 max-w-5xl items-center justify-between rounded-full border p-2 backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${
            scrolled
              ? 'border-cream/10 bg-ink/70 shadow-lg shadow-ink/10 dark:border-ink/10 dark:bg-cream/70'
              : 'border-cream/10 bg-ink/60 dark:border-ink/10 dark:bg-cream/60'
          }`}
          aria-label="Global"
        >
          <Link href="/" className="flex items-center gap-2 pl-1">
            <div className="relative h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full bg-ink ring-1 ring-gold/30">
              <Image
                src="/logos/logo-je.svg"
                alt="Joel Emmanuel"
                fill
                sizes="36px"
                className="object-contain p-1.5"
                priority
              />
            </div>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) =>
              item.href === '/projects' ? (
                <ProjectsMenu
                  key={item.name}
                  item={item}
                  active={pathname === item.href}
                  shouldReduceMotion={shouldReduceMotion}
                />
              ) : (
                <Link key={item.name} href={item.href} className={linkClass(pathname === item.href)}>
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-2">
            <SlideButton href="/contact" variant="gold" size="sm">
              <span className="hidden xl:inline">Get in touch</span>
              <span className="xl:hidden">Contact</span>
            </SlideButton>
          </div>

          <div className="flex lg:hidden items-center gap-1">
            <button
              type="button"
              className="rounded-full p-3 -mr-1 text-cream/80 hover:bg-cream/10 hover:text-cream dark:text-ink/80 dark:hover:bg-ink/10 dark:hover:text-ink transition-colors duration-200"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 flex flex-col bg-ink text-cream transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between px-6 h-16 sm:h-20 border-b border-cream/10">
          <div className="relative h-8 w-8 rounded-full bg-ink ring-1 ring-gold/30">
            <Image src="/logos/logo-je.svg" alt="Joel Emmanuel" fill sizes="32px" className="object-contain p-1.5" />
          </div>
          <button
            type="button"
            className="rounded-full p-3 -mr-1 text-cream/80 hover:text-cream hover:bg-cream/10 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col flex-1 px-6 py-8 gap-1 overflow-y-auto">
          {navigation.map((item, i) => (
            <motion.div
              key={item.name}
              initial={false}
              animate={
                shouldReduceMotion
                  ? { opacity: mobileMenuOpen ? 1 : 0 }
                  : mobileMenuOpen
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: 24 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.2 }
                  : { duration: 0.35, delay: mobileMenuOpen ? i * 0.05 : 0, ease: [0.22, 1, 0.36, 1] }
              }
            >
              <Link
                href={item.href}
                className={`flex items-center justify-between rounded-2xl px-5 py-4 text-2xl font-medium transition-colors duration-200 ${
                  pathname === item.href
                    ? 'bg-gold text-ink'
                    : 'text-cream hover:bg-cream/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
                <span className="font-mono text-xs text-cream/40">0{i + 1}</span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="px-6 pb-10 space-y-3">
          <SlideButton href="/contact" variant="gold" className="w-full justify-center" onClick={() => setMobileMenuOpen(false)}>
            Get in touch
          </SlideButton>
        </div>
      </div>
    </>
  )
}
