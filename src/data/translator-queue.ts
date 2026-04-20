/**
 * TRANSLATOR QUEUE
 * ─────────────────────────────────────────────────────────────────────────────
 * Add language pairs here in the order you want them published.
 * The GitHub Actions cron job picks pairs from the TOP of this list,
 * moves them to translator-feed.json with the current timestamp, and
 * deploys to Vercel automatically.
 *
 * HOW TO ADD:
 *   Add a new { from, to } object at the TOP of the array.
 *   It will go live on the next cron run (every 30 min by default).
 *
 * HOW TO BATCH-ADD:
 *   Add multiple pairs. Each cron run moves PAIRS_PER_RUN pairs (default: 1).
 *   Set PAIRS_PER_RUN in scripts/release-pair.mjs to push faster.
 */

export type QueuedPair = {
  from: string
  to: string
}

export const translatorQueue: QueuedPair[] = [
  // ── Add new pairs here (top = next to publish) ──────────────────────────

  { from: 'Bosnian',  to: 'English' },
  { from: 'Armenian', to: 'English' },
  { from: 'English',  to: 'Hmong'   },
]
