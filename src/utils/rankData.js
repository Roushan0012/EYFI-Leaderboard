/**
 * Filters and ranks participants based on active tab, search term, and category filter
 * @param {Array} participants - List of raw participants
 * @param {Object} options
 * @param {'weekly' | 'all30'} options.tab - Active timeframe tab
 * @param {string} options.search - Search query for participant name or college
 * @param {string} options.category - Category filter ('All' or specific hustle category)
 * @returns {Array} Sorted and ranked list with computed rank property
 */
export function rankData(participants = [], { tab = 'weekly', search = '', category = 'All' } = {}) {
  // Sort field depends on active timeframe tab
  const earningsKey = tab === 'all30' ? 'totalEarnings' : 'weeklyEarnings'

  // Filter participants
  const filtered = participants.filter((p) => {
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.college.toLowerCase().includes(search.toLowerCase()) ||
      p.handle.toLowerCase().includes(search.toLowerCase())

    const matchesCategory =
      !category || category === 'All' || p.category.toLowerCase() === category.toLowerCase()

    return matchesSearch && matchesCategory
  })

  // Sort descending by current earnings key (tiebreaker: streakDays)
  filtered.sort((a, b) => {
    if (b[earningsKey] !== a[earningsKey]) {
      return b[earningsKey] - a[earningsKey]
    }
    return b.streakDays - a.streakDays
  })

  // Assign 1-indexed rank
  return filtered.map((participant, index) => ({
    ...participant,
    rank: index + 1,
    currentEarnings: participant[earningsKey],
  }))
}

/**
 * Calculates challenge summary stats
 * @param {Array} participants 
 */
export function getChallengeStats(participants = []) {
  const totalEarned = participants.reduce((sum, p) => sum + (p.totalEarnings || 0), 0)
  const totalWeekly = participants.reduce((sum, p) => sum + (p.weeklyEarnings || 0), 0)
  const activeCount = participants.length

  return {
    prizePot: 500000,
    daysLeft: 6,
    totalChallengeDays: 30,
    totalEarned,
    totalWeekly,
    activeCount,
  }
}
