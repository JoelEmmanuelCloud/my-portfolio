'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Home, ArrowUpRight } from 'lucide-react'
import SlideButton from '@/components/ui/SlideButton'

const quickLinks = [
  { title: 'Projects', description: 'View case studies', href: '/projects' },
  { title: 'Experience', description: 'See my background', href: '/experience' },
  { title: 'Contact', description: 'Get in touch', href: '/contact' },
]

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-cream dark:bg-ink">
      <div className="container mx-auto flex-1 px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-2xl">

          <Link href="/" className="mb-12 inline-flex items-center gap-2 text-sm text-ink/50 transition-colors hover:text-gold dark:text-cream/50 sm:mb-16">
            <div className="relative h-6 w-6">
              <Image src="/logos/logo-je.svg" alt="Joel Emmanuel" fill className="object-contain" />
            </div>
            joelemmanuel.dev
          </Link>

          <p className="eyebrow mb-4">404</p>

          <h1 className="mb-4 text-4xl font-semibold leading-tight tracking-tight text-ink dark:text-cream sm:text-5xl lg:text-6xl">
            Page not found
          </h1>

          <p className="mb-10 text-base leading-relaxed text-ink/60 dark:text-cream/60 sm:mb-12 sm:text-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>

          <div className="mb-14 flex flex-col gap-3 xs:flex-row sm:mb-16">
            <SlideButton href="/" variant="dark" icon={Home}>
              Back to home
            </SlideButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream dark:border-cream/20 dark:text-cream dark:hover:bg-cream dark:hover:text-ink"
            >
              Get in touch
            </Link>
          </div>

          <div className="border-t border-ink/10 pt-10 dark:border-cream/10 sm:pt-12">
            <p className="eyebrow mb-6">
              You might be looking for
            </p>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="group flex items-center justify-between rounded-2xl p-4 transition-colors hover:bg-ink/5 dark:hover:bg-cream/5"
                >
                  <div>
                    <p className="text-sm font-semibold text-ink transition-colors group-hover:text-gold dark:text-cream">
                      {link.title}
                    </p>
                    <p className="mt-0.5 text-xs text-ink/50 dark:text-cream/50">{link.description}</p>
                  </div>
                  <ArrowUpRight className="size-4 text-ink/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold dark:text-cream/30" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
