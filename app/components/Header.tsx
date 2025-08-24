'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Cookies from 'js-cookie'

const STUDENT_NUMBER = '20839934'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Save current path to cookie
    Cookies.set('lastVisitedPage', pathname, { expires: 7 })
  }, [pathname])

  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/tabs', label: 'Tabs Generator' },
    { href: '/escape-room', label: 'Escape Room' },
    { href: '/coding-races', label: 'Coding Races' },
    { href: '/court-room', label: 'Court Room' },
  ]

  const getBreadcrumbs = () => {
    if (pathname === '/') return 'Home'
    const paths = pathname.split('/').filter(Boolean)
    return 'Home > ' + paths.map(p => p.charAt(0).toUpperCase() + p.slice(1).replace('-', ' ')).join(' > ')
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-40 transition-colors duration-200">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Hamburger Menu Button with CSS Transform */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
            {/* Home Button */}
            <Link 
              href="/" 
              aria-label="Go to homepage"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            
            <div className="text-lg font-semibold">Student: {STUDENT_NUMBER} | HTML5 Generator</div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
              {getBreadcrumbs()}
            </div>
          </div>
        </div>

        {/* Mobile/Desktop Menu with animation */}
        <div 
          className={`overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="space-y-2 pb-2">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 rounded-md transition-all duration-200 transform hover:scale-105 ${
                    pathname === item.href
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}