import React from 'react'
import Podium from './Podium'
import LeaderboardRow from './LeaderboardRow'
import EmptyState from './EmptyState'

/**
 * LeaderboardList Component
 * Pure presentational component that accepts full ranked participants array:
 * - Renders Podium for top 3
 * - Maps the rest (rank 4+) into LeaderboardRow components
 */
export default function LeaderboardList({ participants = [] }) {
  if (!participants || participants.length === 0) {
    return <EmptyState />
  }

  const topThree = participants.slice(0, 3)
  const restParticipants = participants.slice(3)

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Top 3 Podium Display */}
      {topThree.length > 0 && <Podium topThree={topThree} />}

      {/* Ranks 4+ List Section */}
      {restParticipants.length > 0 && (
        <div className="px-3 sm:px-6 space-y-2">
          {/* Section Sub-header */}
          <div className="flex items-center justify-between text-xs text-text-muted px-2 py-1">
            <span className="font-bold uppercase tracking-wider text-[11px]">
              Rankings (4–{participants.length})
            </span>
            <span className="font-bold uppercase tracking-wider text-[11px]">
              Earnings
            </span>
          </div>

          {/* List of Rows */}
          <div className="space-y-2">
            {restParticipants.map((participant, index) => {
              const rankNumber = participant.rank || (index + 4)
              return (
                <LeaderboardRow
                  key={participant.id || `rank-${rankNumber}`}
                  participant={participant}
                  rank={rankNumber}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
