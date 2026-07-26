export function createWatchlistItem(title) {
  const normalizedTitle = title.trim()

  if (!normalizedTitle) {
    throw new TypeError('A title is required')
  }

  return {
    title: normalizedTitle,
    watched: false,
  }
}
