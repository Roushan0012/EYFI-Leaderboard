import React from 'react'
import { Calendar, Flame } from 'lucide-react'

/**
 * Tabs Component for switching between 'This Week' and 'All 30 Days'
 */
export default function Tabs({ activeTab = 'weekly', onChangeTab = () => {} }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-3">
      <div className="bg-surface-card border border-border p-1 rounded-card flex gap-1">
        <button
          type="button"
          onClick={() => onChangeTab('weekly')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-card-sm text-sm font-bold transition-all duration-200 ${
            activeTab === 'weekly'
              ? 'bg-accent text-black shadow-sm'
              : 'text-text-muted hover:text-text-primary hover:bg-surface-alt'
          }`}
        >
          <Flame className={`w-4 h-4 ${activeTab === 'weekly' ? 'text-black fill-black' : 'text-accent'}`} />
          <span>This Week</span>
        </button>

        <button
          type="button"
          onClick={() => onChangeTab('all30')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-card-sm text-sm font-bold transition-all duration-200 ${
            activeTab === 'all30'
              ? 'bg-accent text-black shadow-sm'
              : 'text-text-muted hover:text-text-primary hover:bg-surface-alt'
          }`}
        >
          <Calendar className={`w-4 h-4 ${activeTab === 'all30' ? 'text-black' : 'text-text-muted'}`} />
          <span>All 30 Days</span>
        </button>
      </div>
    </div>
  )
}
