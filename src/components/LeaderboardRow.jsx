import React from 'react'
import { Flame, ArrowUpRight, ArrowDownRight, Minus, ChevronDown, Briefcase, Zap, Building2 } from 'lucide-react'
import { formatCurrency } from '../utils/formatCurrency'
import { getInitials, getAvatarColor } from '../utils/avatarHelper'

/**
 * LeaderboardRow Component for rank 4 and below
 * Props:
 * - participant: participant data object
 * - rank: 1-indexed rank number
 * - isExpanded: boolean (controlled from LeaderboardList)
 * - onToggle: function to toggle accordion expansion
 */
export default function LeaderboardRow({
  participant,
  rank,
  isExpanded = false,
  onToggle = () => {}
}) {
  if (!participant) return null

  const isMe = Boolean(participant.isMe)
  const currentRank = rank || participant.rank
  const earnings = participant.currentEarnings ?? participant.weeklyEarnings ?? participant.week
  const totalEarnings = participant.totalEarnings ?? participant.total ?? 0
  const streak = participant.streakDays ?? participant.streak ?? 0

  // Deterministic trend indicator
  const isRising = (currentRank % 3 === 1) || streak >= 10
  const isFalling = currentRank % 4 === 0 && !isRising

  const avatarColor = getAvatarColor(participant.name)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`${participant.name}, rank ${currentRank}, earnings ${formatCurrency(earnings)}`}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      className={`group w-full rounded-card border transition-all duration-200 cursor-pointer select-none overflow-hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none ${
        isMe
          ? 'bg-surface-alt border-accent shadow-[0_0_15px_rgba(207,255,61,0.08)]'
          : 'bg-surface-card border-border hover:border-border/80 hover:bg-surface-alt/40'
      }`}
    >
      {/* Main Row Header */}
      <div className="flex items-center justify-between p-3 sm:p-4 gap-2">
        {/* Left Section: Rank + Avatar + Identity Info */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
          {/* Rank Number */}
          <span className="w-6 sm:w-7 text-center font-black text-xs sm:text-sm text-text-muted shrink-0">
            #{currentRank}
          </span>

          {/* Initials Avatar with Deterministic Name Hash Color */}
          <div
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 border ${avatarColor.bg} ${avatarColor.text} ${avatarColor.border}`}
          >
            {getInitials(participant.name)}
          </div>

          {/* Name, YOU Badge, College, Category, Streak */}
          <div className="min-w-0 flex-1 pr-1 sm:pr-2">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-xs sm:text-sm text-text-primary truncate">
                {participant.name}
              </span>
              {isMe && (
                <span className="inline-flex items-center text-[9px] sm:text-[10px] font-extrabold uppercase bg-accent text-black px-1.5 py-0.5 rounded-full shrink-0 tracking-wider">
                  YOU
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-text-muted mt-0.5">
              <span className="truncate max-w-[90px] xs:max-w-[120px] sm:max-w-[180px]">
                {participant.college}
              </span>
              <span className="w-1 h-1 rounded-full bg-border shrink-0"></span>
              <span className="text-[10px] sm:text-[11px] font-medium text-text-muted shrink-0">
                {participant.category}
              </span>

              {/* Streak Badge (Displayed if streak >= 5) */}
              {streak >= 5 && (
                <>
                  <span className="w-1 h-1 rounded-full bg-border shrink-0 hidden xs:inline-block"></span>
                  <span className="inline-flex items-center gap-0.5 text-amber-400 font-bold text-[10px] sm:text-[11px] shrink-0">
                    <Flame className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
                    <span>{streak}d</span>
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Section: Earnings + Trend + Expand Chevron */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-right pl-1">
          <div>
            <div className="font-black text-xs sm:text-sm text-text-primary tracking-tight">
              {formatCurrency(earnings)}
            </div>
            <div className="text-[10px] text-text-muted">
              {streak > 0 ? `${streak}d streak` : '0d streak'}
            </div>
          </div>

          {/* Small Up/Down Trend Indicator */}
          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center shrink-0">
            {isRising ? (
              <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
            ) : isFalling ? (
              <ArrowDownRight className="w-3.5 h-3.5 text-rose-400" />
            ) : (
              <Minus className="w-3.5 h-3.5 text-text-muted/60" />
            )}
          </div>

          {/* Expand/Collapse Chevron with Smooth Rotation */}
          <div className="text-text-muted shrink-0 pl-0.5">
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ease-out ${
                isExpanded ? 'rotate-180 text-accent' : 'text-text-muted'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Accordion Smooth Detail Drawer */}
      <div
        className={`grid-transition ${
          isExpanded ? 'grid-transition-expanded' : 'grid-transition-collapsed'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-3 sm:p-4 bg-surface-alt border-t border-dashed border-border/80 text-xs rounded-b-card space-y-2.5">
            {/* Top Detail Row: Hustle / Project & Total 30-Day Earnings */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-text-muted">
                <Briefcase className="w-3.5 h-3.5 text-accent shrink-0" />
                <span className="text-text-muted font-medium">Hustle / Project:</span>
                <span className="font-semibold text-text-primary truncate">
                  {participant.hustle || participant.category}
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-text-muted sm:justify-end">
                <span>Total 30-Day Challenge:</span>
                <span className="font-extrabold text-accent">
                  {formatCurrency(totalEarnings)}
                </span>
              </div>
            </div>

            {/* Bottom Detail Row: Streak & Profile Details */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-border/40 text-[11px] text-text-muted">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-amber-400 font-bold">
                  <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{streak} days streak</span>
                </span>
                {participant.city && (
                  <span className="flex items-center gap-1 text-text-muted">
                    <Building2 className="w-3 h-3" />
                    <span>{participant.city}</span>
                  </span>
                )}
                {participant.handle && (
                  <span className="text-text-muted font-mono">{participant.handle}</span>
                )}
              </div>

              <span className="inline-flex items-center gap-1 text-accent font-semibold">
                <Zap className="w-3 h-3" />
                <span>Verified Challenge Earner</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
