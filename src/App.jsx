import React, { useMemo } from 'react'
import Header from './components/Header'
import participantsData from './data/participants.json'
import { getChallengeStats } from './utils/rankData'
import { Sparkles, Trophy, Flame, Layers } from 'lucide-react'

// Background floating rupee particles configuration
const FLOATING_RUPEES = [
  { id: 1, left: '8%', delay: '0s', duration: '14s', size: 'text-2xl' },
  { id: 2, left: '22%', delay: '4s', duration: '18s', size: 'text-3xl' },
  { id: 3, left: '42%', delay: '8s', duration: '16s', size: 'text-xl' },
  { id: 4, left: '65%', delay: '2s', duration: '20s', size: 'text-3xl' },
  { id: 5, left: '78%', delay: '7s', duration: '15s', size: 'text-2xl' },
  { id: 6, left: '92%', delay: '11s', duration: '17s', size: 'text-xl' },
]

export default function App() {
  const stats = useMemo(() => getChallengeStats(participantsData), [])

  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-hidden flex flex-col justify-between selection:bg-accent selection:text-black">
      {/* Background Animated Floating ₹ Motif */}
      <div className="rupee-motif-container" aria-hidden="true">
        {FLOATING_RUPEES.map((item) => (
          <span
            key={item.id}
            className={`rupee-symbol animate-float-slow ${item.size}`}
            style={{
              left: item.left,
              animationDelay: item.delay,
              animationDuration: item.duration,
            }}
          >
            ₹
          </span>
        ))}
      </div>

      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main App Content Container */}
      <main className="relative z-10 flex-1 pb-16">
        {/* Phase 1: Fully Working Header */}
        <Header
          prizePot={stats.prizePot}
          daysLeft={stats.daysLeft}
          totalChallengeDays={stats.totalChallengeDays}
          totalEarned={stats.totalEarned}
          activeParticipants={1280}
        />

        {/* Phase 1 Placeholder: Leaderboard Preview Area */}
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 mt-4">
          <div className="bg-surface-card border border-border border-dashed rounded-card p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-alt border border-border text-xs font-bold text-accent mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Phase 1 Scaffolding Ready</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-text-primary mb-2">
              Leaderboard Standings Stage
            </h2>

            <p className="text-xs sm:text-sm text-text-muted max-w-md mx-auto mb-6">
              Vite, Tailwind design tokens, realistic participant data, and utility formatters are configured and loaded. Ready for full interactive tabs, filters, podium & expandable list logic in the next step!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto text-left">
              <div className="bg-surface-alt/70 border border-border rounded-card-sm p-3 flex items-center gap-2.5">
                <Trophy className="w-4 h-4 text-rank-gold shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-text-primary">Top 3 Podium</div>
                  <div className="text-[10px] text-text-muted">Elevated #1 spot</div>
                </div>
              </div>

              <div className="bg-surface-alt/70 border border-border rounded-card-sm p-3 flex items-center gap-2.5">
                <Flame className="w-4 h-4 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-text-primary">Streak Badges</div>
                  <div className="text-[10px] text-text-muted">Daily momentum</div>
                </div>
              </div>

              <div className="bg-surface-alt/70 border border-border rounded-card-sm p-3 flex items-center gap-2.5">
                <Layers className="w-4 h-4 text-accent shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-text-primary">5 Categories</div>
                  <div className="text-[10px] text-text-muted">Build, Freelance, etc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile-first Footer */}
      <footer className="relative z-10 border-t border-border/80 bg-surface/80 py-4 px-4 sm:px-6 text-center text-xs text-text-muted">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>⚡ EYFI Challenge — Earn Your First Income</span>
          <span>Made for Indian student hustlers</span>
        </div>
      </footer>
    </div>
  )
}
