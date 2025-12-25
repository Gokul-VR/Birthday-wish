"use client"

import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import Snowfall from "react-snowfall"

export function ConfettiTrigger() {
  useEffect(() => {
    const duration = 15 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } })
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return null
}

export function Balloons() {
  const [balloons, setBalloons] = useState<
    { id: number; left: string; color: string; delay: string; duration: string; size: number }[]
  >([])
  const [snowflakeCount, setSnowflakeCount] = useState(100)

  useEffect(() => {
    setSnowflakeCount(window.innerWidth < 768 ? 40 : 100)

    const colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#FF9FF3", "#A29BFE"]
    const newBalloons = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 10}s`,
      duration: `${12 + Math.random() * 10}s`,
      size: 40 + Math.random() * 30, // Random size between 40 and 70
    }))
    setBalloons(newBalloons)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <Snowfall
        color="white"
        snowflakeCount={snowflakeCount}
        speed={[0.5, 2.0]}
        wind={[-0.5, 2.0]}
        radius={[0.5, 3.0]}
      />
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          className="absolute bottom-0 animate-float opacity-0"
          style={
            {
              left: balloon.left,
              "--delay": balloon.delay,
              "--duration": balloon.duration,
            } as any
          }
        >
          <svg
            width={balloon.size}
            height={balloon.size * 1.33}
            viewBox="0 0 60 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-lg"
          >
            <path
              d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0Z"
              fill={balloon.color}
            />
            <path d="M30 60L26 68H34L30 60Z" fill={balloon.color} className="opacity-80" />
            <path
              d="M30 68C30 75 28 80 28 80"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
              className="opacity-40"
            />
            <circle cx="20" cy="20" r="5" fill="white" fillOpacity="0.3" />
          </svg>
        </div>
      ))}
    </div>
  )
}
