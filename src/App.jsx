import React, { useMemo } from 'react'
import Header from './components/Header'
import LeaderboardList from './components/LeaderboardList'
import participantsData from './data/participants.json'
import { getRankedParticipants, getChallengeStats } from './utils/rankData'

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
  // Hardcoded to 'week' for Step 2 as requested (tabs UI in Step 3)
  const sortKey = 'week'

  // Calculate sorted/ranked participants
  const rankedParticipants = useMemo(() => {
    return getRankedParticipants(participantsData, { sortKey })
  }, [sortKey])

  // Calculate challenge stats for the Header
  const stats = useMemo(() => {
    return getChallengeStats(participantsData)
  }, [])

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

      {/* Subtle top ambient lime glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Container */}
      <main className="relative z-10 flex-1 pb-16">
        {/* Header Component */}
        <Header
          prizePot={stats.prizePot}
          daysLeft={stats.daysLeft}
          totalChallengeDays={stats.totalChallengeDays}
          totalEarned={stats.totalEarned}
          activeParticipants={1280}
        />

        {/* Live Ranked Leaderboard (Podium + Participant List) */}
        <div className="mt-2">
          <LeaderboardList participants={rankedParticipants} />
        </div>
      </main>

      {/* Mobile-first Footer */}
      <footer className="relative z-10 border-t border-border/80 bg-surface/80 py-4 px-4 sm:px-6 text-center text-xs text-text-muted mt-8">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>⚡ EYFI Challenge — Earn Your First Income</span>
          <span>Made for Indian student hustlers</span>
        </div>
      </footer>
    </div>
  )
}
