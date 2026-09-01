/**
 * Formats a number into Indian Rupee currency format (e.g. ₹1,82,400)
 * @param {number} amount - The numerical amount to format
 * @param {boolean} [includeSymbol=true] - Whether to include the ₹ prefix
 * @returns {string} Formatted Indian currency string
 */
export function formatCurrency(amount, includeSymbol = true) {
  if (amount === undefined || amount === null || isNaN(amount)) {
    return includeSymbol ? '₹0' : '0'
  }

  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  }).format(amount)

  return includeSymbol ? `₹${formatted}` : formatted
}

/**
 * Formats large amounts into compact Indian readable tags (e.g. ₹5L, ₹50K)
 * @param {number} amount 
 * @returns {string}
 */
export function formatCompactCurrency(amount) {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(1)}Cr`
  }
  if (amount >= 100000) {
    const val = (amount / 100000).toFixed(amount % 100000 === 0 ? 0 : 1)
    return `₹${val}L`
  }
  if (amount >= 1000) {
    const val = (amount / 1000).toFixed(amount % 1000 === 0 ? 0 : 1)
    return `₹${val}K`
  }
  return `₹${amount}`
}
