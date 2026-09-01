import React, { useState } from 'react'
import Podium from './Podium'
import LeaderboardRow from './LeaderboardRow'
import EmptyState from './EmptyState'

/**
 * LeaderboardList Component
 * Controls accordion expansion state across the list (only one row expanded at a time).
 * Renders Podium for top 3 and LeaderboardRow for ranks 4+.
 */
export default function LeaderboardList({ participants = [] }) {
  const [expandedId, setExpandedId] = useState(null)

  if (!participants || participants.length === 0) {
    return <EmptyState />
  }

  const topThree = participants.slice(0, 3)
  const restParticipants = participants.slice(3)

  const handleToggleRow = (id) => {
    setExpandedId((prevId) => (prevId === id ? null : id))
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Top 3 Podium Display */}
      {topThree.length > 0 && <Podium topThree={topThree} />}

      {/* Ranks 4+ List Section */}
      {restParticipants.length > 0 && (
        <div className="px-3 sm:px-6 space-y-2">
          {/* Section Sub-header */}
          <div className="flex items-center justify-between text-xs text-text-muted px-2 py-1 select-none">
            <span className="font-bold uppercase tracking-wider text-[11px]">
              Rankings (4–{participants.length})
            </span>
            <span className="font-bold uppercase tracking-wider text-[11px]">
              Earnings
            </span>
          </div>

          {/* List of Rows with Accordion Toggle */}
          <div className="space-y-2">
            {restParticipants.map((participant, index) => {
              const rankNumber = participant.rank || (index + 4)
              const participantKey = participant.id || `rank-${rankNumber}`
              return (
                <LeaderboardRow
                  key={participantKey}
                  participant={participant}
                  rank={rankNumber}
                  isExpanded={expandedId === participantKey}
                  onToggle={() => handleToggleRow(participantKey)}
                />
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
