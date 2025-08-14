import Link from 'next/link'
import { Mail, Phone, Linkedin, Github } from 'lucide-react'

const navigation = {
  main: [
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/joelemmanuel',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/joelemmanuel',
      icon: Github,
    },
    {
      name: 'Email',
      href: 'mailto:ejoel00@gmail.com',
      icon: Mail,
    },
    {
      name: 'Phone',
      href: 'tel:+2347069763692',
      icon: Phone,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container-max section-padding py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold gradient-text">
                Joel Emmanuel
              </span>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Full Stack & AI/ML Developer building production systems with React, Node.js, AWS, and modern technologies. Available for projects and opportunities.
              </p>
            </div>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 focus-ring rounded-md p-1"
                  target={item.name === 'Email' || item.name === 'Phone' ? '_self' : '_blank'}
                  rel={item.name === 'Email' || item.name === 'Phone' ? '' : 'noopener noreferrer'}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 focus-ring rounded-md"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="mailto:ejoel00@gmail.com"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 focus-ring rounded-md"
                    >
                      ejoel00@gmail.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+2347069763692"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 focus-ring rounded-md"
                    >
                      +234 706 976 3692
                    </a>
                  </li>
                  <li>
                    <span className="text-sm leading-6 text-gray-300">
                      Lagos, Nigeria
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Quick Actions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link
                      href="/contact"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 focus-ring rounded-md"
                    >
                      Book a Call
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/resume.pdf"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 focus-ring rounded-md"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download CV
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/projects"
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200 focus-ring rounded-md"
                    >
                      View Case Studies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-xs leading-5 text-gray-400">
              &copy; {new Date().getFullYear()} Joel Emmanuel. All rights reserved.
            </p>
            <p className="mt-4 text-xs leading-5 text-gray-400 md:mt-0">
              Built with Next.js, Tailwind CSS, and deployed on Vercel.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}