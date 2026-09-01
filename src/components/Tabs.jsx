import React from 'react'

/**
 * Tabs Component
 * Controlled two-button pill toggle with tablist / tab accessibility roles
 * @param {Object} props
 * @param {'week' | 'all'} props.activeTab - Active timeframe tab
 * @param {function(string): void} props.onChange - Callback fired on tab select
 */
export default function Tabs({ activeTab = 'week', onChange = () => {} }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 my-3">
      <div
        role="tablist"
        aria-label="Challenge timeframe"
        className="bg-surface-card border border-border p-1.5 rounded-full flex items-center gap-1.5 shadow-inner"
      >
        {/* Tab 1: This Week */}
        <button
          type="button"
          role="tab"
          id="tab-week"
          aria-controls="panel-leaderboard"
          aria-selected={activeTab === 'week'}
          onClick={() => onChange('week')}
          className={`flex-1 py-2 sm:py-2.5 px-4 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 text-center select-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none ${
            activeTab === 'week'
              ? 'bg-accent text-black shadow-sm'
              : 'text-text-muted hover:text-text-primary hover:bg-surface-alt/60'
          }`}
        >
          This Week
        </button>

        {/* Tab 2: All 30 Days */}
        <button
          type="button"
          role="tab"
          id="tab-all"
          aria-controls="panel-leaderboard"
          aria-selected={activeTab === 'all'}
          onClick={() => onChange('all')}
          className={`flex-1 py-2 sm:py-2.5 px-4 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-200 text-center select-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none ${
            activeTab === 'all'
              ? 'bg-accent text-black shadow-sm'
              : 'text-text-muted hover:text-text-primary hover:bg-surface-alt/60'
          }`}
        >
          All 30 Days
        </button>
      </div>
    </div>
  )
}
