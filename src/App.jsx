import React, { useState, useMemo } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import Toolbar from './components/Toolbar'
import LeaderboardList from './components/LeaderboardList'
import EmptyState from './components/EmptyState'
import RupeeField from './components/RupeeField'
import participantsData from './data/participants.json'
import { getRankedParticipants, getChallengeStats } from './utils/rankData'

export default function App() {
  // Controlled interactive filter states
  const [activeTab, setActiveTab] = useState('week') // 'week' | 'all'
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('all')

  // Calculate filtered, sorted, and ranked participants
  const rankedParticipants = useMemo(() => {
    return getRankedParticipants(participantsData, {
      sortKey: activeTab,
      search,
      category,
    })
  }, [activeTab, search, category])

  // Calculate challenge stats for the Header
  const stats = useMemo(() => {
    return getChallengeStats(participantsData)
  }, [])

  return (
    <div className="relative min-h-screen bg-background text-text-primary overflow-hidden flex flex-col justify-between selection:bg-accent selection:text-black">
      {/* Background Animated Floating ₹ Motif with Reduced Motion Support */}
      <RupeeField />

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

        {/* Timeframe Toggle Tabs */}
        <Tabs
          activeTab={activeTab}
          onChange={(tab) => setActiveTab(tab)}
        />

        {/* Search & Category Filter Toolbar */}
        <Toolbar
          searchValue={search}
          onSearchChange={setSearch}
          categoryValue={category}
          onCategoryChange={setCategory}
        />

        {/* Interactive Leaderboard List or Empty State */}
        <div id="panel-leaderboard" role="region" aria-label="Participant Leaderboard" className="mt-2">
          {rankedParticipants.length === 0 ? (
            <EmptyState />
          ) : (
            <LeaderboardList participants={rankedParticipants} />
          )}
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
