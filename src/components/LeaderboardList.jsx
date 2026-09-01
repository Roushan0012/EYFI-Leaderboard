import React from 'react'
import LeaderboardRow from './LeaderboardRow'
import EmptyState from './EmptyState'

/**
 * LeaderboardList Component - maps ranked data (rank 4+ or entire list)
 */
export default function LeaderboardList({ participants = [], startRank = 4 }) {
  if (!participants || participants.length === 0) {
    return <EmptyState />
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-3 space-y-2.5">
      <div className="flex items-center justify-between text-xs text-text-muted px-1 mb-1">
        <span className="font-semibold uppercase tracking-wider text-[11px]">Rank & Participant</span>
        <span className="font-semibold uppercase tracking-wider text-[11px]">Earnings</span>
      </div>

      <div className="space-y-2">
        {participants.map((p, idx) => (
          <LeaderboardRow
            key={p.id}
            participant={p}
            rank={p.rank || startRank + idx}
          />
        ))}
      </div>
    </div>
  )
}
