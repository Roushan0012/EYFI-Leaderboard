import React from 'react'
import { SearchX, RefreshCw } from 'lucide-react'

/**
 * EmptyState Component shown when search or category filter returns no results
 */
export default function EmptyState({ onReset = () => {} }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-8">
      <div className="bg-surface-card border border-border rounded-card p-8 text-center flex flex-col items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-surface-alt border border-border flex items-center justify-center text-text-muted mb-3">
          <SearchX className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-base font-bold text-text-primary mb-1">
          No hustlers found
        </h3>
        <p className="text-xs sm:text-sm text-text-muted max-w-xs mb-4">
          Try searching for another student name, college, or reset your category filter.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-card-sm bg-surface-alt border border-border hover:border-accent text-text-primary text-xs font-bold transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5 text-accent" />
          <span>Clear Filters</span>
        </button>
      </div>
    </div>
  )
}
