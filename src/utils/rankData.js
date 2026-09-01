/**
 * Pure function to filter, sort, and rank participants by timeframe, category, and search query
 * @param {Array} participants - Raw participant array
 * @param {Object} options
 * @param {'week' | 'all' | 'total'} [options.sortKey='week'] - Timeframe sort metric
 * @param {string} [options.search=''] - Search term to match against participant name
 * @param {string} [options.category='all'] - Category filter ('all', 'Freelance', 'Sell', 'Build', 'Teach', 'Perform')
 * @returns {Array} New filtered and ranked array with rank and currentEarnings properties
 */
export function getRankedParticipants(participants = [], { sortKey = 'week', search = '', category = 'all' } = {}) {
  if (!Array.isArray(participants)) return []

  const isAllTime = sortKey === 'all' || sortKey === 'total'
  const key = isAllTime ? 'totalEarnings' : 'weeklyEarnings'
  const fallbackKey = isAllTime ? 'total' : 'week'

  const normalizedSearch = (search || '').trim().toLowerCase()
  const normalizedCategory = (category || 'all').trim().toLowerCase()

  // 1. Filter by category & search
  const filtered = participants.filter((p) => {
    // Category filter: skip if 'all' or 'all hustles'
    if (normalizedCategory !== 'all' && normalizedCategory !== 'all hustles') {
      if (!p.category || p.category.toLowerCase() !== normalizedCategory) {
        return false
      }
    }

    // Search filter: case-insensitive match against participant name
    if (normalizedSearch) {
      const name = (p.name || '').toLowerCase()
      const college = (p.college || '').toLowerCase()
      const handle = (p.handle || '').toLowerCase()
      if (!name.includes(normalizedSearch) && !college.includes(normalizedSearch) && !handle.includes(normalizedSearch)) {
        return false
      }
    }

    return true
  })

  // 2. Sort descending by selected earnings key (tiebreaker: streakDays)
  const sorted = [...filtered].sort((a, b) => {
    const valA = a[key] ?? a[fallbackKey] ?? 0
    const valB = b[key] ?? b[fallbackKey] ?? 0
    if (valB !== valA) {
      return valB - valA
    }
    return (b.streakDays || b.streak || 0) - (a.streakDays || a.streak || 0)
  })

  // 3. Map with 1-indexed rank and currentEarnings
  return sorted.map((p, index) => ({
    ...p,
    rank: index + 1,
    currentEarnings: p[key] ?? p[fallbackKey] ?? 0,
  }))
}

/**
 * Calculates challenge summary stats
 * @param {Array} participants 
 */
export function getChallengeStats(participants = []) {
  const totalEarned = participants.reduce((sum, p) => sum + (p.totalEarnings || p.total || 0), 0)
  const totalWeekly = participants.reduce((sum, p) => sum + (p.weeklyEarnings || p.week || 0), 0)
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
