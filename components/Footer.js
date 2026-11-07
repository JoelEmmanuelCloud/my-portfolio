import Link from 'next/link'
import Image from 'next/image'
import SlideButton from './ui/SlideButton'
import Reveal, { RevealGroup, RevealItem } from './ui/Reveal'
import ManageCookiesButton from './ui/ManageCookiesButton'
import { SITE_CONFIG, SOCIAL_LINKS } from '@/lib/constants'

const navLinks = [
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
]

const socialLinks = [
  { name: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
  { name: 'GitHub', href: SOCIAL_LINKS.github },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-2 pb-2 sm:px-3">

      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 pt-16 sm:gap-16 sm:pt-20">

        <Reveal className="panel-dark relative h-56 sm:h-72">
          <div className="relative flex h-full w-full flex-col items-start justify-between gap-6 px-6 py-8 sm:flex-row sm:items-center sm:px-12">
            <h2 className="max-w-md text-2xl font-semibold leading-tight text-cream sm:text-3xl lg:text-4xl">
              Let&apos;s build your next product together
            </h2>
            <SlideButton href="/contact" variant="gold" className="shrink-0">
              Get in touch
            </SlideButton>
          </div>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8" stagger={0.1}>
          <RevealItem className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 rounded-full bg-ink ring-1 ring-gold/30">
                <Image src="/logos/logo-je.svg" alt="Joel Emmanuel" fill sizes="40px" className="object-contain p-2" />
              </div>
              <span className="text-base font-semibold text-cream">Joel Emmanuel</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-cream/50">
              Fullstack &amp; Blockchain Developer building scalable Web3 apps, AI platforms, and production systems.
            </p>
            <a
              href={SOCIAL_LINKS.email}
              className="text-sm text-cream/50 transition-colors hover:text-gold"
            >
              {SITE_CONFIG.author.email}
            </a>
          </RevealItem>

          <RevealItem>
            <p className="label mb-4 !text-cream/70">Pages</p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </RevealItem>

          <RevealItem>
            <p className="label mb-4 !text-cream/70">Social</p>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cream/70 transition-colors hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </RevealItem>
        </RevealGroup>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-cream/10 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-cream/50">
            © {new Date().getFullYear()} Joel Emmanuel. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-cream/50 transition-colors hover:text-gold">Privacy</Link>
            <Link href="/terms" className="text-xs text-cream/50 transition-colors hover:text-gold">Terms</Link>
            <ManageCookiesButton className="text-xs text-cream/50 transition-colors hover:text-gold" />
          </div>
        </div>
      </div>
    </footer>
  )
}
