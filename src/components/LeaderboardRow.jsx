import React from 'react'
import { Flame, ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react'
import { formatCurrency } from '../utils/formatCurrency'
import { getInitials, getAvatarColor } from '../utils/avatarHelper'

/**
 * LeaderboardRow Component for rank 4 and below
 * Displays: Rank number, initials avatar with hash color, name + YOU badge,
 * college + category + streak (only if streak >= 5), earnings, and trend indicator.
 */
export default function LeaderboardRow({
  participant,
  rank,
  onClick = () => {}
}) {
  if (!participant) return null

  const isMe = Boolean(participant.isMe)
  const currentRank = rank || participant.rank
  const earnings = participant.currentEarnings ?? participant.weeklyEarnings ?? participant.week
  const streak = participant.streakDays ?? participant.streak ?? 0

  // Deterministic trend indicator
  const isRising = (currentRank % 3 === 1) || streak >= 10
  const isFalling = currentRank % 4 === 0 && !isRising

  const avatarColor = getAvatarColor(participant.name)

  return (
    <div
      onClick={onClick}
      className={`group w-full flex items-center justify-between p-3 sm:p-4 rounded-card border transition-all duration-150 cursor-pointer select-none ${
        isMe
          ? 'bg-surface-alt border-accent shadow-[0_0_15px_rgba(207,255,61,0.08)]'
          : 'bg-surface-card border-border hover:border-border/80 hover:bg-surface-alt/50'
      }`}
    >
      {/* Left Section: Rank + Avatar + Identity Info */}
      <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
        {/* Rank Number */}
        <span className="w-6 sm:w-7 text-center font-black text-xs sm:text-sm text-text-muted shrink-0">
          #{currentRank}
        </span>

        {/* Initials Avatar with Name Hash Color */}
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 border ${avatarColor.bg} ${avatarColor.text} ${avatarColor.border}`}
        >
          {getInitials(participant.name)}
        </div>

        {/* Name, YOU Badge, College, Category, Streak */}
        <div className="min-w-0 flex-1 pr-2">
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
            <span className="truncate max-w-[100px] xs:max-w-[130px] sm:max-w-[180px]">
              {participant.college}
            </span>
            <span className="w-1 h-1 rounded-full bg-border shrink-0"></span>
            <span className="text-[10px] sm:text-[11px] font-medium text-text-muted shrink-0">
              {participant.category}
            </span>

            {/* Streak Badge (Only displayed if streak >= 5) */}
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

      {/* Right Section: Earnings + Trend Indicator */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0 pl-1 text-right">
        <div>
          <div className="font-black text-xs sm:text-sm text-text-primary tracking-tight">
            {formatCurrency(earnings)}
          </div>
          <div className="text-[10px] text-text-muted">
            {streak > 0 ? `${streak}d streak` : '0d streak'}
          </div>
        </div>

        {/* Small Up/Down Trend Indicator */}
        <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0">
          {isRising ? (
            <ArrowUpRight className="w-3.5 h-3.5 text-accent" />
          ) : isFalling ? (
            <ArrowDownRight className="w-3.5 h-3.5 text-rose-400" />
          ) : (
            <Minus className="w-3.5 h-3.5 text-text-muted/60" />
          )}
        </div>
      </div>
    </div>
  )
}
