import React from 'react'

/**
 * Static configuration for 10 floating rupee particles
 * Staggered positions, font-sizes (30px-80px), animation durations (16s-30s), and delays
 */
const RUPEE_PARTICLES = [
  { id: 1, left: '6%', size: 'text-3xl sm:text-4xl', duration: '22s', delay: '0s' },
  { id: 2, left: '16%', size: 'text-5xl sm:text-6xl', duration: '28s', delay: '5s' },
  { id: 3, left: '27%', size: 'text-2xl sm:text-3xl', duration: '18s', delay: '2s' },
  { id: 4, left: '39%', size: 'text-6xl sm:text-7xl', duration: '30s', delay: '9s' },
  { id: 5, left: '51%', size: 'text-3xl sm:text-4xl', duration: '20s', delay: '1s' },
  { id: 6, left: '63%', size: 'text-5xl sm:text-6xl', duration: '26s', delay: '7s' },
  { id: 7, left: '74%', size: 'text-2xl sm:text-3xl', duration: '17s', delay: '12s' },
  { id: 8, left: '85%', size: 'text-6xl sm:text-7xl', duration: '29s', delay: '4s' },
  { id: 9, left: '94%', size: 'text-4xl sm:text-5xl', duration: '24s', delay: '10s' },
  { id: 10, left: '46%', size: 'text-3xl sm:text-4xl', duration: '19s', delay: '14s' },
]

/**
 * RupeeField Component
 * Full-screen ambient floating ₹ background motif
 * Optimized with pointer-events-none, low opacity (~0.05), and prefers-reduced-motion support
 */
export default function RupeeField() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {RUPEE_PARTICLES.map((particle) => (
        <span
          key={particle.id}
          className={`absolute text-accent opacity-[0.045] font-black font-sans will-change-transform motion-safe:animate-float-slow motion-reduce:opacity-[0.03] motion-reduce:static motion-reduce:animate-none ${particle.size}`}
          style={{
            left: particle.left,
            animationDuration: particle.duration,
            animationDelay: particle.delay,
          }}
        >
          ₹
        </span>
      ))}
    </div>
  )
}
