/**
 * Returns initials from a full name (e.g. "Aarav Sharma" -> "AS")
 * @param {string} name 
 * @returns {string} 1-2 character initials
 */
export function getInitials(name = '') {
  if (!name) return '?'
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase()
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

/**
 * Deterministically generates an avatar background color based on name hash
 * @param {string} name 
 * @returns {{ bg: string, text: string, border: string }}
 */
const AVATAR_PALETTES = [
  { bg: 'bg-emerald-950/80', text: 'text-emerald-300', border: 'border-emerald-700/60' },
  { bg: 'bg-indigo-950/80', text: 'text-indigo-300', border: 'border-indigo-700/60' },
  { bg: 'bg-purple-950/80', text: 'text-purple-300', border: 'border-purple-700/60' },
  { bg: 'bg-cyan-950/80', text: 'text-cyan-300', border: 'border-cyan-700/60' },
  { bg: 'bg-rose-950/80', text: 'text-rose-300', border: 'border-rose-700/60' },
  { bg: 'bg-amber-950/80', text: 'text-amber-300', border: 'border-amber-700/60' },
  { bg: 'bg-teal-950/80', text: 'text-teal-300', border: 'border-teal-700/60' },
  { bg: 'bg-violet-950/80', text: 'text-violet-300', border: 'border-violet-700/60' },
  { bg: 'bg-blue-950/80', text: 'text-blue-300', border: 'border-blue-700/60' },
]

export function getAvatarColor(name = '') {
  if (!name) return AVATAR_PALETTES[0]
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  const index = Math.abs(hash) % AVATAR_PALETTES.length
  return AVATAR_PALETTES[index]
}
