'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { slugifyLanguage } from '@/lib/languages'
import dayjs from 'dayjs'
import relativeTimePlugin from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTimePlugin)

type FeedEntry = {
  from: string
  to: string
  publishedAt: string
}

export function TranslatorFeedTable({ feed }: { feed: FeedEntry[] }) {
  const [times, setTimes] = useState<string[]>([])

  useEffect(() => {
    const compute = () => setTimes(feed.map(e => dayjs(e.publishedAt).fromNow()))
    compute()
    const id = setInterval(compute, 60_000)
    return () => clearInterval(id)
  }, [feed])

  // Show at most 50 entries
  const visible = feed.slice(0, 50)

  return (
    <div className="rounded-xl border overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-muted/50 border-b">
            <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">#</th>
            <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Name</th>
            <th className="text-right px-4 py-2.5 font-semibold text-muted-foreground">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((entry, i) => {
            const slug = `${slugifyLanguage(entry.from)}-to-${slugifyLanguage(entry.to)}`
            return (
              <tr
                key={slug}
                className="border-b last:border-0 hover:bg-muted/30 transition-colors"
              >
                <td className="px-4 py-2.5 text-muted-foreground tabular-nums w-10">
                  {i + 1}
                </td>
                <td className="px-4 py-2.5">
                  <Link
                    href={`/ai-translate/${slug}`}
                    className="font-medium hover:text-primary transition-colors"
                  >
                    {entry.from} to {entry.to} Translator
                  </Link>
                </td>
                <td className="px-4 py-2.5 text-right text-muted-foreground tabular-nums">
                  {times[i] ?? '—'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
