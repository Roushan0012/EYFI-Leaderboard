import React from 'react'
import { Search, Filter, X } from 'lucide-react'

const CATEGORIES = ['All', 'Freelance', 'Sell', 'Build', 'Teach', 'Perform']

/**
 * Toolbar Component with search input and category filter chips
 */
export default function Toolbar({
  search = '',
  onSearchChange = () => {},
  category = 'All',
  onCategoryChange = () => {}
}) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-2 space-y-3">
      {/* Search Bar */}
      <div className="relative">
        <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search participant, college, or @handle..."
          className="w-full bg-surface-card border border-border focus:border-accent text-text-primary placeholder:text-text-muted/60 pl-10 pr-10 py-2.5 rounded-card text-sm font-normal outline-none transition-colors"
        />
        {search && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary p-1"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        <div className="flex items-center gap-1 text-xs text-text-muted mr-1 shrink-0 font-medium">
          <Filter className="w-3.5 h-3.5 text-accent" />
          <span>Category:</span>
        </div>
        {CATEGORIES.map((cat) => {
          const isActive = category.toLowerCase() === cat.toLowerCase()
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold border transition-all ${
                isActive
                  ? 'bg-accent/15 border-accent text-accent'
                  : 'bg-surface-card border-border text-text-muted hover:text-text-primary hover:border-border/80'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>
    </div>
  )
}
