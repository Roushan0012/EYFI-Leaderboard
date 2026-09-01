import React from 'react'

/**
 * EmptyState Component
 * Centered state shown when search/category filter matches zero participants
 */
export default function EmptyState() {
  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 py-16 text-center">
      <div className="bg-surface-card border border-border rounded-card p-8 sm:p-12 max-w-lg mx-auto">
        <p className="text-sm sm:text-base text-text-muted font-medium leading-relaxed">
          No one here yet — try a different search or hustle.
        </p>
      </div>
    </div>
  )
}
