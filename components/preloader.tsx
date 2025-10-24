"use client"

import { useEffect, useState } from "react"

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-black">
      <div className="relative w-24 h-24">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange-500 border-r-orange-500 animate-spin" />

        {/* Middle rotating ring (opposite direction) */}
        <div
          className="absolute inset-2 rounded-full border-4 border-transparent border-b-orange-400 border-l-orange-400 animate-spin"
          style={{ animationDirection: "reverse" }}
        />

        {/* Inner pulsing circle */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 animate-pulse" />

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white font-bold text-sm font-syne">Ignite</span>
        </div>
      </div>
    </div>
  )
}
