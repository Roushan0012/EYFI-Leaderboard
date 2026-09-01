import React from 'react'
import { Crown, Flame, Award, Sparkles } from 'lucide-react'
import { formatCurrency } from '../utils/formatCurrency'

/**
 * Podium Component for Top 3 ranked participants
 * Rank 1 is visually elevated with #CFFF3D lime accent, Rank 2 (silver) and Rank 3 (bronze)
 */
export default function Podium({ topThree = [] }) {
  if (!topThree || topThree.length === 0) return null

  // Ensure top 3 slots: [rank 2, rank 1, rank 3] for classic Olympic podium display
  const rank1 = topThree[0]
  const rank2 = topThree[1]
  const rank3 = topThree[2]

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 my-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-black uppercase tracking-wider text-text-muted flex items-center gap-1.5">
          <Crown className="w-3.5 h-3.5 text-rank-gold" />
          <span>Top Earner Podium</span>
        </h2>
        <span className="text-[11px] text-accent font-semibold">Live Rank Standings</span>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3.5 items-end pt-4 pb-2">
        {/* Rank 2 (Silver) */}
        {rank2 && (
          <div className="order-1 flex flex-col items-center bg-surface-card border border-border rounded-card p-3 sm:p-4 relative">
            <div className="absolute -top-3 w-6 h-6 rounded-full bg-rank-silver text-black text-xs font-black flex items-center justify-center shadow-md">
              2
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 border-2 border-rank-silver/50 mb-2 overflow-hidden bg-surface-alt">
              <img src={rank2.avatar} alt={rank2.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-text-primary text-center truncate w-full">
              {rank2.name}
            </span>
            <span className="text-[10px] text-text-muted truncate w-full text-center mb-1.5">
              {rank2.college}
            </span>
            <div className="text-xs sm:text-sm font-black text-text-primary">
              {formatCurrency(rank2.currentEarnings || rank2.weeklyEarnings)}
            </div>
          </div>
        )}

        {/* Rank 1 (Gold / Lime Highlighted - Elevated) */}
        {rank1 && (
          <div className="order-2 flex flex-col items-center bg-surface-alt border-2 border-accent rounded-card p-3.5 sm:p-5 relative -translate-y-2 shadow-lg shadow-accent/5">
            <div className="absolute -top-3.5 px-2.5 py-0.5 rounded-full bg-accent text-black text-[11px] font-black flex items-center gap-1 shadow-md">
              <Crown className="w-3 h-3 fill-black" /> #1 CHAMP
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full p-0.5 border-2 border-accent mb-2 overflow-hidden bg-surface-card relative">
              <img src={rank1.avatar} alt={rank1.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs sm:text-base font-extrabold text-text-primary text-center truncate w-full">
              {rank1.name}
            </span>
            <span className="text-[11px] text-accent truncate w-full text-center mb-2 font-medium">
              {rank1.college}
            </span>
            <div className="text-sm sm:text-base font-black text-accent">
              {formatCurrency(rank1.currentEarnings || rank1.weeklyEarnings)}
            </div>
          </div>
        )}

        {/* Rank 3 (Bronze) */}
        {rank3 && (
          <div className="order-3 flex flex-col items-center bg-surface-card border border-border rounded-card p-3 sm:p-4 relative">
            <div className="absolute -top-3 w-6 h-6 rounded-full bg-rank-bronze text-white text-xs font-black flex items-center justify-center shadow-md">
              3
            </div>
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 border-2 border-rank-bronze/50 mb-2 overflow-hidden bg-surface-alt">
              <img src={rank3.avatar} alt={rank3.name} className="w-full h-full object-cover" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-text-primary text-center truncate w-full">
              {rank3.name}
            </span>
            <span className="text-[10px] text-text-muted truncate w-full text-center mb-1.5">
              {rank3.college}
            </span>
            <div className="text-xs sm:text-sm font-black text-text-primary">
              {formatCurrency(rank3.currentEarnings || rank3.weeklyEarnings)}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
