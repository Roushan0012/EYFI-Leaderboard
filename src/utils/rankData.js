/**
 * Pure function to sort and rank participants by a given sortKey ('week' or 'total')
 * @param {Array} participants - Raw participant array
 * @param {Object} options
 * @param {'week' | 'total'} [options.sortKey='week'] - Sort metric
 * @returns {Array} New sorted array with rank and currentEarnings properties
 */
export function getRankedParticipants(participants = [], { sortKey = 'week' } = {}) {
  if (!Array.isArray(participants)) return []

  const key = sortKey === 'total' ? 'totalEarnings' : 'weeklyEarnings'
  const fallbackKey = sortKey === 'total' ? 'total' : 'week'

  // Shallow copy to prevent mutating the original array
  const sorted = [...participants].sort((a, b) => {
    const valA = a[key] ?? a[fallbackKey] ?? 0
    const valB = b[key] ?? b[fallbackKey] ?? 0
    if (valB !== valA) {
      return valB - valA
    }
    // Tiebreaker: streakDays or id
    return (b.streakDays || 0) - (a.streakDays || 0)
  })

  // Return mapped with rank and normalized currentEarnings
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
