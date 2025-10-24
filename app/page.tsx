"use client"

import { GradientBackground } from "@/components/gradient-background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { useEffect, useState } from "react"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"

export default function Page() {
  const [preloaderFinished, setPreloaderFinished] = useState(false)

  useEffect(() => {
    // Start preloader finish timer
    const timer = setTimeout(() => {
      setPreloaderFinished(true)
    }, 2500) // Slightly after preloader disappears

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Preloader />
      <main className={`relative min-h-screen flex flex-col overflow-hidden transition-opacity duration-1000 ${preloaderFinished ? 'opacity-100' : 'opacity-0'}`}>
        <GradientBackground />
        <div className="absolute inset-0 -z-10 bg-black/20" />

        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-end justify-center px-6 py-20 pb-44">
          <div
            className={`max-w-4xl mx-auto text-center space-y-8 transition-all duration-1000 delay-500 ${preloaderFinished ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            <div className="text-white text-balance font-bold tracking-tight text-5xl md:text-7xl font-syne">
              Ignite the Future of Youth Leadership
            </div>

            {/* Subtitle */}
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium font-syne">
              Empowering young leaders through transformative experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 font-syne"
              >
                Get Started
              </button>
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border-2 border-white/40 text-white font-bold rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300 transform hover:scale-105 font-syne"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={`transition-all duration-1000 delay-700 ${preloaderFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services" className={`transition-all duration-1000 delay-900 ${preloaderFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ServicesSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className={`transition-all duration-1000 delay-1100 ${preloaderFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <ContactSection />
        </section>

        {/* Footer */}
        <div className={`transition-all duration-1000 delay-1300 ${preloaderFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Footer />
        </div>
      </main>
    </>
  )
}
