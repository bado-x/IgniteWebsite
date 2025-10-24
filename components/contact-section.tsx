"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare data
      const dataToSend = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString()
      }

      // Method: Use GET request with URL parameters (most reliable with Google Apps Script)
      const params = new URLSearchParams(dataToSend)
      const urlWithParams = `https://script.google.com/macros/s/AKfycbxzqRZz-E7cxaacAvOMxsPECF6IsWqweRX0CJx_rxhDNh85-dA_F7bJ5R7vU_ALvMNvOQ/exec?${params}`

      const response = await fetch(urlWithParams, {
        method: 'GET',
        mode: 'no-cors',
      })

      // Since we can't read response with no-cors, we assume success if no error is thrown
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 3000)

      console.log('Form submitted successfully')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 font-syne">Get In Touch</h2>
          <p className="text-white/60 text-center text-lg mb-16">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`space-y-8 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
              style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
            >
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2 font-syne">Email</h3>
                <a href="mailto:igniteteam26@gmail.com" className="text-white/70 hover:text-orange-500 transition-colors duration-300">
                  igniteteam26@gmail.com
                </a>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2 font-syne">Phone</h3>
                <a href="tel:+201050735993" className="text-white/70 hover:text-orange-500 transition-colors duration-300">
                  +20 10 50735993
                </a>
              </div>
              <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2 font-syne">Location</h3>
                <p className="text-white/70">Damietta, Egypt</p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
              style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
            >
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300 font-medium"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300 font-medium"
                required
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-white/50 transition-all duration-300 font-medium resize-none"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 font-syne disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {submitted ? "✓ Message Sent!" : isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
