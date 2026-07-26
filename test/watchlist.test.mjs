import assert from 'node:assert/strict'
import test from 'node:test'

import { createWatchlistItem } from '../src/watchlist.mjs'

test('creates an unwatched item with a normalized title', () => {
  assert.deepEqual(createWatchlistItem('  Arrival  '), {
    title: 'Arrival',
    watched: false,
  })
})

test('rejects an empty title', () => {
  assert.throws(() => createWatchlistItem('   '), {
    name: 'TypeError',
    message: 'A title is required',
  })
})
