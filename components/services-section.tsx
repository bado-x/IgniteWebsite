"use client"

import { useEffect, useRef, useState } from "react"
import { Target, Rocket, Users, Lightbulb } from "lucide-react"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  const services = [
    {
      title: "Youth Events",
      description: "Engaging and transformative events designed specifically for young leaders.",
      icon: Target,
      delay: 0,
    },
    {
      title: "Leadership Training",
      description: "Intensive workshops and courses designed to build confidence, decision-making skills, and effective communication for emerging leaders.",
      icon: Rocket,
      delay: 100,
    },
    {
      title: "Personal Mentorship",
      description: "One-on-one sessions with successful leaders who share their expertise, provide strategic insights, and guide you through real-world challenges.",
      icon: Users,
      delay: 200,
    },
    {
      title: "Community Impact",
      description: "Initiatives that create positive change and lasting impact in communities.",
      icon: Lightbulb,
      delay: 300,
    },
  ]

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 font-syne">Our Services</h2>
          <p className="text-white/60 text-center text-lg mb-16 max-w-3xl mx-auto">
            Comprehensive solutions to empower and inspire the next generation of leaders.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => {
              const IconComponent = service.icon
              return (
                <div
                  key={i}
                  className={`group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-500/50 transition-all duration-700 ease-out transform hover:scale-[1.02] hover:bg-white/8 hover:shadow-lg hover:shadow-orange-500/10 cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                  style={{ transitionDelay: isVisible ? `${service.delay}ms` : "0ms" }}
                >
                  <div className="mb-4 group-hover:scale-105 transition-all duration-500 ease-out">
                    <IconComponent className="w-12 h-12 text-orange-500 group-hover:text-orange-400 transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 font-syne">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
