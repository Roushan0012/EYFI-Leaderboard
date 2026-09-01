import React from 'react'
import { Trophy, Clock, Zap, Users, TrendingUp, Sparkles } from 'lucide-react'
import { formatCurrency } from '../utils/formatCurrency'

/**
 * Header Component for EYFI Challenge Leaderboard
 * Features:
 * - Eyebrow badge with live pulse indicator
 * - Heavyweight energetic typography
 * - Prize pot card with lime highlight
 * - Days-remaining countdown card
 * - Quick community stat indicators
 */
export default function Header({
  prizePot = 500000,
  daysLeft = 6,
  totalChallengeDays = 30,
  totalEarned = 524000,
  activeParticipants = 1280
}) {
  const daysProgressPercent = Math.round(((totalChallengeDays - daysLeft) / totalChallengeDays) * 100)

  return (
    <header className="relative w-full pt-6 pb-4 px-4 sm:px-6 max-w-4xl mx-auto z-10">
      {/* Top Eyebrow Tag */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-alt border border-border text-[11px] font-bold tracking-wider uppercase text-text-primary">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span>EYFI CHALLENGE • SEASON 01</span>
        </div>

        {/* Live Active Pill */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface/80 border border-border text-[11px] text-text-muted font-medium">
          <Zap className="w-3.5 h-3.5 text-accent" />
          <span className="text-text-primary font-semibold">Live</span> Leaderboard
        </div>
      </div>

      {/* Main Headline & Energetic Subtitle */}
      <div className="mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-text-primary leading-[1.1] mb-2.5">
          Who's earning the <span className="text-accent underline decoration-accent/40 decoration-wavy underline-offset-4">most right now?</span>
        </h1>
        <p className="text-sm sm:text-base text-text-muted max-w-2xl font-normal leading-relaxed">
          India's fiercest college hustlers building projects, taking freelance gigs, and stacking real income. Check the ranks and claim the pot.
        </p>
      </div>

      {/* Prize Pot & Challenge Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-2">
        {/* Card 1: Prize Pot Card */}
        <div className="relative overflow-hidden bg-surface-card border border-border hover:border-accent/40 transition-colors duration-200 rounded-card p-4 sm:p-5 flex flex-col justify-between group">
          {/* Subtle lime glow accent corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl pointer-events-none group-hover:bg-accent/10 transition-all duration-300"></div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-card-sm bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <Trophy className="w-4 h-4" />
              </div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-text-muted">Total Prize Pool</span>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20">
              <Sparkles className="w-3 h-3" /> Top 10 Wins
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-accent font-sans">
              {formatCurrency(prizePot)}
            </div>
            <span className="text-xs text-text-muted font-medium">in cash prizes</span>
          </div>

          <div className="mt-3 pt-2.5 border-t border-border/60 flex items-center justify-between text-xs text-text-muted">
            <span>Rank #1 takes ₹2,00,000</span>
            <span className="text-text-primary font-semibold">100% Cash</span>
          </div>
        </div>

        {/* Card 2: Days Remaining Card */}
        <div className="relative overflow-hidden bg-surface-card border border-border hover:border-border/80 transition-colors duration-200 rounded-card p-4 sm:p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-card-sm bg-surface-alt border border-border flex items-center justify-center text-text-primary">
                <Clock className="w-4 h-4 text-accent" />
              </div>
              <span className="text-[12px] font-bold uppercase tracking-wider text-text-muted">Challenge Clock</span>
            </div>
            <span className="text-[11px] font-semibold text-text-muted bg-surface-alt px-2 py-0.5 rounded-full border border-border">
              Day {totalChallengeDays - daysLeft} of {totalChallengeDays}
            </span>
          </div>

          <div className="flex items-baseline gap-2">
            <div className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary">
              {daysLeft} <span className="text-lg font-bold text-text-muted">Days Left</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 pt-2.5 border-t border-border/60">
            <div className="flex items-center justify-between text-[11px] text-text-muted mb-1.5">
              <span>Challenge Timeline</span>
              <span className="text-accent font-semibold">{daysProgressPercent}% Completed</span>
            </div>
            <div className="w-full h-1.5 bg-surface-alt rounded-full overflow-hidden border border-border/50">
              <div
                className="h-full bg-accent rounded-full transition-all duration-500 ease-out"
                style={{ width: `${daysProgressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mini Quick Bar - Community Momentum */}
      <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
        <div className="bg-surface-alt/60 border border-border/60 rounded-card-sm px-3 py-2 flex items-center gap-2">
          <TrendingUp className="w-3.5 h-3.5 text-accent shrink-0" />
          <div className="truncate">
            <span className="text-text-muted">Community Earned: </span>
            <span className="font-bold text-text-primary">{formatCurrency(totalEarned)}</span>
          </div>
        </div>

        <div className="bg-surface-alt/60 border border-border/60 rounded-card-sm px-3 py-2 flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-text-muted shrink-0" />
          <div className="truncate">
            <span className="text-text-muted">Active Hustlers: </span>
            <span className="font-bold text-text-primary">{activeParticipants}+</span>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1 bg-surface-alt/60 border border-border/60 rounded-card-sm px-3 py-2 flex items-center gap-2 justify-center sm:justify-start">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="text-text-muted truncate">Verified Student Entries</span>
        </div>
      </div>
    </header>
  )
}
