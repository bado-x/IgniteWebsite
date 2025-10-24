"use client"

import { useState } from "react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] bg-black/40 backdrop-blur-md border-b border-white/10"
      style={{ pointerEvents: 'auto' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent font-bold text-xl tracking-tight font-syne">
            Ignite
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          <a
            href="#about"
            className="text-white/80 hover:text-orange-500 transition-colors duration-300 text-sm font-medium relative group font-syne no-underline"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href="#services"
            className="text-white/80 hover:text-orange-500 transition-colors duration-300 text-sm font-medium relative group font-syne no-underline"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300" />
          </a>

          <a
            href="#contact"
            className="text-white/80 hover:text-orange-500 transition-colors duration-300 text-sm font-medium relative group font-syne no-underline"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300" />
          </a>
        </div>

        {/* Apply Now Button - Desktop */}
        <div className="hidden md:block">
          <a
            href="https://forms.gle/c4G1FK1DGrp57gsE9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 font-syne text-sm no-underline"

          >
            Apply Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-orange-500 transition-colors duration-300 p-3 rounded-lg hover:bg-white/10 border border-white/20"
          style={{ minWidth: '44px', minHeight: '44px' }}
        >
          {isOpen ? (
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#about"
              className="block text-white hover:text-orange-500 transition-colors duration-300 text-lg font-medium font-syne py-3 border-b border-white/10 no-underline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
            >
              About
            </a>

            <a
              href="#services"
              className="block text-white hover:text-orange-500 transition-colors duration-300 text-lg font-medium font-syne py-3 border-b border-white/10 no-underline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
            >
              Services
            </a>

            <a
              href="#contact"
              className="block text-white hover:text-orange-500 transition-colors duration-300 text-lg font-medium font-syne py-3 border-b border-white/10 no-underline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                setIsOpen(false)
              }}
            >
              Contact
            </a>

            <a
              href="https://forms.gle/c4G1FK1DGrp57gsE9"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-4 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 font-syne text-lg text-center no-underline"
              onClick={() => setIsOpen(false)}
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}