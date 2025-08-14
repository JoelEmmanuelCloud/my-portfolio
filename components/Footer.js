import Link from 'next/link'

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/in/joelemmanuel' },
  { name: 'GitHub', href: 'https://github.com/joelemmanuel' },
  { name: 'Twitter', href: 'https://twitter.com/joelemmanuel' },
  { name: 'Instagram', href: 'https://instagram.com/joelemmanuel' },
]

const quickLinks = [
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold">JE</span>
              </div>
            </Link>
            <p className="text-gray-400 font-light leading-relaxed max-w-md">
              Frontend Engineer specializing in React, Node.js, and AWS. 
              Building scalable web platforms and production systems.
            </p>
            <div className="text-sm text-gray-500 font-light">
              Lagos, Nigeria
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-medium text-white mb-6">Quick Links</h3>
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-sm font-medium text-white mb-6">Connect</h3>
            <div className="space-y-4 mb-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="space-y-3">
              <a
                href="mailto:ejoel00@gmail.com"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
              >
                ejoel00@gmail.com
              </a>
              <a
                href="tel:+2347069763692"
                className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 font-light"
              >
                +234 706 976 3692
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 font-light">
            © {new Date().getFullYear()} Joel Emmanuel. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 lg:mt-0">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors duration-200 font-light">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors duration-200 font-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}