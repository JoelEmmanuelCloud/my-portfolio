import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'Experience', href: '/experience' },
  { name: 'Projects', href: '/projects' },
  { name: 'Skills', href: '/skills' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resume', href: '/resume' },
]

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/joel-emmanuel-149708202/' },
  { name: 'GitHub', href: 'https://github.com/joelemmanuel' },
  { name: 'X', href: 'https://x.com/joelemmanuel' },
  { name: 'Instagram', href: 'https://instagram.com/joelemmanuel' },
]

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">

          <div className="flex flex-col gap-4 max-w-xs">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image src="/logos/logo2.png" alt="Joel Emmanuel" fill className="object-contain dark:hidden" />
                <Image src="/logos/logo.svg" alt="Joel Emmanuel" fill className="object-contain hidden dark:block" />
              </div>
              <span className="text-base font-semibold text-black dark:text-white">Joel Emmanuel</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Fullstack & Blockchain Developer building scalable Web3 apps, AI platforms, and production systems.
            </p>
            <a
              href="mailto:ejoel0035@gmail.com"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              ejoel0035@gmail.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-16">
            <div>
              <p className="text-xs font-semibold text-black dark:text-white uppercase tracking-widest mb-4">Pages</p>
              <div className="flex flex-col gap-2.5">
                {navLinks.map(link => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-black dark:text-white uppercase tracking-widest mb-4">Social</p>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 dark:border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Joel Emmanuel. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="text-xs text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
