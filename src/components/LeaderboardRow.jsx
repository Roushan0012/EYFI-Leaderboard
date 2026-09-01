import React, { useState } from 'react'
import { Flame, ChevronDown, ChevronUp, Sparkles, Building2, Briefcase } from 'lucide-react'
import { formatCurrency } from '../utils/formatCurrency'

/**
 * LeaderboardRow Component - expandable participant row
 */
export default function LeaderboardRow({ participant, rank }) {
  const [expanded, setExpanded] = useState(false)

  if (!participant) return null

  const isMe = participant.isMe

  return (
    <div
      className={`border rounded-card transition-all duration-200 overflow-hidden ${
        isMe
          ? 'bg-surface-alt border-accent/60 shadow-sm shadow-accent/5'
          : 'bg-surface-card border-border hover:border-border/80'
      }`}
    >
      {/* Row Header - Click to toggle expand */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex items-center justify-between p-3 sm:p-4 cursor-pointer gap-2 select-none"
      >
        {/* Left: Rank & Avatar & Details */}
        <div className="flex items-center gap-3 min-w-0">
          {/* Rank Badge */}
          <div className="w-7 text-center font-black text-sm text-text-muted shrink-0">
            #{rank || participant.rank}
          </div>

          {/* Avatar */}
          <div className="relative shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-border bg-surface-alt">
              <img
                src={participant.avatar}
                alt={participant.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {isMe && (
              <span className="absolute -bottom-1 -right-1 bg-accent text-black font-extrabold text-[9px] px-1 py-0.2 rounded-full border border-black">
                YOU
              </span>
            )}
          </div>

          {/* Name & College */}
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-text-primary truncate">
                {participant.name}
              </span>
              {isMe && (
                <span className="hidden xs:inline-block text-[10px] font-bold text-accent bg-accent/15 px-1.5 py-0.2 rounded">
                  You
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-text-muted">
              <span className="truncate max-w-[120px] sm:max-w-[200px]">{participant.college}</span>
              <span className="w-1 h-1 rounded-full bg-border shrink-0"></span>
              <span className="text-[11px] font-medium text-accent/90">{participant.category}</span>
            </div>
          </div>
        </div>

        {/* Right: Earnings & Streak & Chevron */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Streak pill */}
          {participant.streakDays > 0 && (
            <div className="hidden sm:flex items-center gap-1 bg-surface-alt px-2 py-1 rounded-full border border-border text-[11px] text-amber-300 font-semibold">
              <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{participant.streakDays}d</span>
            </div>
          )}

          {/* Earnings Amount */}
          <div className="text-right">
            <div className="font-black text-sm sm:text-base text-text-primary">
              {formatCurrency(participant.currentEarnings || participant.weeklyEarnings)}
            </div>
            <div className="text-[10px] text-text-muted">
              {participant.streakDays > 0 ? `${participant.streakDays}d streak` : '0d streak'}
            </div>
          </div>

          {/* Toggle icon */}
          <button className="text-text-muted hover:text-text-primary p-1">
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Expandable Breakdown Drawer */}
      {expanded && (
        <div className="px-4 pb-4 pt-2 border-t border-border/60 bg-surface-alt/40 text-xs space-y-2.5 animate-fadeIn">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-text-muted">
              <Briefcase className="w-3.5 h-3.5 text-accent" />
              <span className="font-medium text-text-primary">Hustle Project:</span>
              <span className="text-text-primary/90 font-medium">{participant.hustle}</span>
            </div>
            <div className="text-text-muted">
              Total 30-Day Earnings:{' '}
              <span className="font-bold text-accent">{formatCurrency(participant.totalEarnings)}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1 text-[11px] text-text-muted">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3 h-3 text-text-muted" />
              <span>
                {participant.city} • {participant.handle}
              </span>
            </div>
            <span className="text-accent/90 font-semibold cursor-pointer hover:underline">
              View Verified Proof ↗
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
