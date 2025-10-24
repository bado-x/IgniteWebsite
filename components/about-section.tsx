"use client"

import { useEffect, useRef, useState } from "react"

export function AboutSection() {
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

  return (
    <section ref={ref} className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 font-syne">About Ignite</h2>
          <p className="text-white/60 text-center text-lg mb-16 max-w-3xl mx-auto">
            We are a passionate team dedicated to transforming youth through innovative events and meaningful
            experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vision",
                content: "To create a world where every young person has the opportunity to lead and make a positive impact in their community.",
                delay: 0
              },
              {
                title: "Mission",
                content: "Empowering youth through transformative events, mentorship, and leadership development programs.",
                delay: 100
              },
              {
                title: "Approach",
                content: "We believe in hands-on learning, collaborative experiences, and creating safe spaces for growth and innovation.",
                delay: 200
              },
            ].map((card, i) => (
              <div
                key={i}
                className={`text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 transform hover:scale-105 hover:bg-white/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: isVisible ? `${card.delay}ms` : "0ms" }}
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4 font-syne">
                  {card.title}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{card.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-white/10 backdrop-blur-sm">
            <p className="text-white/80 text-lg leading-relaxed font-medium">
              Ignite was founded with a mission to inspire and empower the next generation of leaders. Through carefully
              curated events, workshops, and mentorship programs, we create transformative experiences that help young
              people discover their potential and make a meaningful impact in their communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
