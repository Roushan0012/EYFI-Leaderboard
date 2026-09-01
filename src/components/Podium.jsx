import React from 'react'
import { Crown } from 'lucide-react'
import { formatCurrency } from '../utils/formatCurrency'
import { getInitials, getAvatarColor } from '../utils/avatarHelper'

/**
 * Podium Component for top 3 ranked participants
 * Classic Olympic layout: Rank 2 (Left), Rank 1 (Center - Elevated & Highlighted), Rank 3 (Right)
 * Enhanced with keyboard focus rings, accessible labels, and responsive layout
 */
export default function Podium({ topThree = [] }) {
  if (!topThree || topThree.length === 0) return null

  const rank1 = topThree[0]
  const rank2 = topThree[1]
  const rank3 = topThree[2]

  return (
    <div className="w-full max-w-4xl mx-auto px-3 sm:px-6 my-4">
      {/* 3-Column Podium Grid with Center Elevation */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end pt-4 pb-2">
        {/* RANK 2 (Left - Silver) */}
        {rank2 && (
          <div
            tabIndex={0}
            aria-label={`Rank 2, Silver: ${rank2.name}, ${rank2.college}, ${formatCurrency(rank2.currentEarnings ?? rank2.weeklyEarnings ?? rank2.week)}`}
            className="flex flex-col items-center bg-surface-card border border-border hover:border-border/80 rounded-card p-2.5 sm:p-4 relative transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
          >
            {/* Rank 2 Badge */}
            <div className="absolute -top-3 w-6 h-6 rounded-full bg-rank-silver text-black text-xs font-black flex items-center justify-center shadow-md border border-white/20 select-none">
              2
            </div>

            {/* Initials Avatar */}
            {(() => {
              const color = getAvatarColor(rank2.name)
              return (
                <div
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-extrabold text-xs sm:text-base border-2 ${color.bg} ${color.text} ${color.border} mb-2 shadow-inner select-none`}
                >
                  {getInitials(rank2.name)}
                </div>
              )
            })()}

            {/* Name */}
            <span className="text-[12px] sm:text-sm font-bold text-text-primary text-center truncate w-full">
              {rank2.name}
            </span>

            {/* College */}
            <span className="text-[10px] sm:text-xs text-text-muted truncate w-full text-center mb-1.5">
              {rank2.college}
            </span>

            {/* Earnings */}
            <div className="text-[12px] sm:text-sm font-black text-text-primary text-center tracking-tight">
              {formatCurrency(rank2.currentEarnings ?? rank2.weeklyEarnings ?? rank2.week)}
            </div>
          </div>
        )}

        {/* RANK 1 (Center - Gold / Lime Highlighted & Elevated) */}
        {rank1 && (
          <div
            tabIndex={0}
            aria-label={`Rank 1 Champion, Gold: ${rank1.name}, ${rank1.college}, ${formatCurrency(rank1.currentEarnings ?? rank1.weeklyEarnings ?? rank1.week)}`}
            className="flex flex-col items-center bg-surface-alt border-2 border-accent rounded-card p-3 sm:p-5 relative -translate-y-2 sm:-translate-y-3 shadow-[0_0_25px_rgba(207,255,61,0.12)] transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
          >
            {/* Crown & #1 Badge */}
            <div className="absolute -top-4 px-2.5 py-0.5 rounded-full bg-accent text-black text-[10px] sm:text-[11px] font-black flex items-center gap-1 shadow-md select-none">
              <Crown className="w-3 h-3 fill-black text-black" />
              <span>#1</span>
            </div>

            {/* Larger Initials Avatar with Lime Ring */}
            {(() => {
              const color = getAvatarColor(rank1.name)
              return (
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center font-black text-sm sm:text-lg border-2 border-accent ${color.bg} text-accent mb-2 shadow-[0_0_15px_rgba(207,255,61,0.2)] select-none`}
                >
                  {getInitials(rank1.name)}
                </div>
              )
            })()}

            {/* Name */}
            <span className="text-[13px] sm:text-base font-extrabold text-text-primary text-center truncate w-full">
              {rank1.name}
            </span>

            {/* College with Lime hint */}
            <span className="text-[10px] sm:text-xs text-accent/90 truncate w-full text-center mb-2 font-medium">
              {rank1.college}
            </span>

            {/* Larger Earnings */}
            <div className="text-sm sm:text-base font-black text-accent text-center tracking-tight">
              {formatCurrency(rank1.currentEarnings ?? rank1.weeklyEarnings ?? rank1.week)}
            </div>
          </div>
        )}

        {/* RANK 3 (Right - Bronze) */}
        {rank3 && (
          <div
            tabIndex={0}
            aria-label={`Rank 3, Bronze: ${rank3.name}, ${rank3.college}, ${formatCurrency(rank3.currentEarnings ?? rank3.weeklyEarnings ?? rank3.week)}`}
            className="flex flex-col items-center bg-surface-card border border-border hover:border-border/80 rounded-card p-2.5 sm:p-4 relative transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-none"
          >
            {/* Rank 3 Badge */}
            <div className="absolute -top-3 w-6 h-6 rounded-full bg-rank-bronze text-white text-xs font-black flex items-center justify-center shadow-md border border-white/20 select-none">
              3
            </div>

            {/* Initials Avatar */}
            {(() => {
              const color = getAvatarColor(rank3.name)
              return (
                <div
                  className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-extrabold text-xs sm:text-base border-2 ${color.bg} ${color.text} ${color.border} mb-2 shadow-inner select-none`}
                >
                  {getInitials(rank3.name)}
                </div>
              )
            })()}

            {/* Name */}
            <span className="text-[12px] sm:text-sm font-bold text-text-primary text-center truncate w-full">
              {rank3.name}
            </span>

            {/* College */}
            <span className="text-[10px] sm:text-xs text-text-muted truncate w-full text-center mb-1.5">
              {rank3.college}
            </span>

            {/* Earnings */}
            <div className="text-[12px] sm:text-sm font-black text-text-primary text-center tracking-tight">
              {formatCurrency(rank3.currentEarnings ?? rank3.weeklyEarnings ?? rank3.week)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
