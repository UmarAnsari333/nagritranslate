/**
 * release-pair.mjs
 * ─────────────────────────────────────────────────────────────────────────────
 * Moves the next N pairs from translator-queue.ts → translator-feed.json
 * with the current UTC timestamp. Called by GitHub Actions on a schedule.
 *
 * Usage:
 *   node scripts/release-pair.mjs           # release 1 pair
 *   node scripts/release-pair.mjs 3         # release 3 pairs at once
 *
 * The script:
 *   1. Reads translator-queue.ts (strips TS, parses the array)
 *   2. Reads translator-feed.json
 *   3. Takes PAIRS_PER_RUN pairs from the top of the queue
 *   4. Appends them to the feed with publishedAt = now
 *   5. Removes them from the queue
 *   6. Writes both files back
 *   7. Exits 0 = success, 1 = queue empty (cron should stop or notify)
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// How many pairs to release per cron run (override with CLI arg)
const PAIRS_PER_RUN = parseInt(process.argv[2] ?? '1', 10)

// ── Read the queue (TypeScript file — we extract the array with regex) ──────
const queuePath = join(ROOT, 'src/data/translator-queue.ts')
const queueSrc  = readFileSync(queuePath, 'utf8')

// Extract content between [ and the last ] of the exported array
const arrayMatch = queueSrc.match(/translatorQueue:\s*QueuedPair\[\]\s*=\s*(\[[\s\S]*?\])\s*$/)
if (!arrayMatch) {
  console.error('❌  Could not parse translatorQueue array from translator-queue.ts')
  process.exit(1)
}

// Parse the array — convert TS object literal to JSON
const rawArray = arrayMatch[1]
  .replace(/\/\/[^\n]*/g, '')            // remove line comments
  .replace(/,(\s*[\]\}])/g, '$1')        // remove trailing commas
  .replace(/'/g, '"')                    // single → double quotes

let queue
try {
  queue = JSON.parse(rawArray)
} catch (e) {
  console.error('❌  Failed to parse queue array:', e.message)
  console.error('Raw:', rawArray.slice(0, 300))
  process.exit(1)
}

if (queue.length === 0) {
  console.log('ℹ️   Queue is empty — nothing to release.')
  process.exit(0)
}

// ── Read the feed ─────────────────────────────────────────────────────────────
const feedPath = join(ROOT, 'src/data/translator-feed.json')
let feed = []
try {
  feed = JSON.parse(readFileSync(feedPath, 'utf8'))
} catch {
  feed = []
}

// ── Move N pairs from queue → feed ───────────────────────────────────────────
const now = new Date().toISOString()
const toRelease = queue.splice(0, PAIRS_PER_RUN)

for (const pair of toRelease) {
  feed.unshift({ ...pair, publishedAt: now })  // newest first
  console.log(`✅  Released: ${pair.from} → ${pair.to}`)
}

// ── Write feed ────────────────────────────────────────────────────────────────
writeFileSync(feedPath, JSON.stringify(feed, null, 2) + '\n', 'utf8')
console.log(`📝  Feed updated — ${feed.length} total pairs`)

// ── Write queue back (rebuild the TS file preserving header comment) ──────────
const queueItems = queue.map(p => `  { from: '${p.from}', to: '${p.to}' },`).join('\n')
const newQueueSrc = queueSrc.replace(
  /(\bconst translatorQueue:\s*QueuedPair\[\]\s*=\s*\[)[\s\S]*?(\])/,
  `$1\n  // ── Add new pairs here (top = next to publish) ──────────────────────────\n\n${queueItems}\n$2`
)
writeFileSync(queuePath, newQueueSrc, 'utf8')
console.log(`📋  Queue updated — ${queue.length} pairs remaining`)

if (queue.length === 0) {
  console.log('⚠️   Queue is now empty. Add more pairs to translator-queue.ts.')
}
