import React from 'react'
import { Search, ChevronDown, X } from 'lucide-react'

const CATEGORIES = [
  { label: 'All hustles', value: 'all' },
  { label: 'Freelance', value: 'Freelance' },
  { label: 'Sell', value: 'Sell' },
  { label: 'Build', value: 'Build' },
  { label: 'Teach', value: 'Teach' },
  { label: 'Perform', value: 'Perform' },
]

/**
 * Toolbar Component
 * Controlled search input (flexible width) + Category select dropdown (fixed width)
 * @param {Object} props
 * @param {string} props.searchValue - Current search string
 * @param {function(string): void} props.onSearchChange - Callback when search changes
 * @param {string} props.categoryValue - Current selected category value
 * @param {function(string): void} props.onCategoryChange - Callback when category changes
 */
export default function Toolbar({
  searchValue = '',
  onSearchChange = () => {},
  categoryValue = 'all',
  onCategoryChange = () => {}
}) {
  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 my-3">
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Search Input Container (Left, Flexible Width) */}
        <div className="relative flex-1 min-w-0">
          <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            role="searchbox"
            aria-label="Search participants"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Find yourself or a friend…"
            className="w-full bg-surface-card border border-border focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background text-text-primary placeholder:text-text-muted/60 pl-10 pr-9 py-2.5 rounded-card text-xs sm:text-sm font-normal outline-none transition-colors duration-150 shadow-inner"
          />
          {searchValue && (
            <button
              type="button"
              onClick={() => onSearchChange('')}
              aria-label="Clear search query"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-text-primary rounded-full hover:bg-surface-alt transition-colors focus-visible:ring-2 focus-visible:ring-accent"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Select Dropdown (Right, Fixed Width) */}
        <div className="relative w-32 sm:w-44 shrink-0">
          <select
            value={categoryValue}
            aria-label="Filter by hustle category"
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full appearance-none bg-surface-card border border-border focus:border-accent focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background text-text-primary pl-3 pr-7 sm:pl-3.5 sm:pr-8 py-2.5 rounded-card text-xs sm:text-sm font-medium outline-none transition-colors duration-150 cursor-pointer shadow-inner"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value} className="bg-surface-card text-text-primary py-1">
                {cat.label}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-text-muted absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
