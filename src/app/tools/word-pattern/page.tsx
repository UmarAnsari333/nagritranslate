import type { Metadata } from 'next'
import Link from 'next/link'
import { Grid3X3, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WordPatternTool } from '@/components/tools/word-pattern-tool'

export const metadata: Metadata = {
  title: 'Word Pattern Finder — Wildcard Word Search | Free',
  description:
    'Find words by wildcard pattern (* and ?). Perfect for crosswords, Wordle & Scrabble. Free, instant results.',
  keywords: [
    'word pattern finder',
    'wildcard word search',
    'words matching pattern',
    'crossword solver',
    'wordle helper',
    'scrabble word finder',
    'fill in the blank words',
    'word puzzle solver',
    'word pattern generator',
  ],
  alternates: { canonical: 'https://nagritranslate.com/tools/word-pattern' },
  openGraph: {
    title: 'Word Pattern Finder — Wildcard Word Search | Free',
    description: 'Find words by wildcard pattern (* and ?). Perfect for crosswords, Wordle & Scrabble.',
    type: 'website',
  },
}

export default function WordPatternPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="max-w-6xl mx-auto px-4 py-8 md:py-14">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Grid3X3 className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Word Pattern Finder</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Find English words that match a wildcard pattern. Use <code className="font-mono bg-muted px-1 rounded text-sm">*</code> for any letters and <code className="font-mono bg-muted px-1 rounded text-sm">?</code> for exactly one letter.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <WordPatternTool />
            </div>

            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl font-bold mb-4">Pattern Examples</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  ['t??k', 'Words: teak, tuck, talk, tink…'],
                  ['*tion', 'Words: nation, action, station…'],
                  ['b*nd', 'Words: band, bond, bind, bland…'],
                  ['un*', 'Words: undo, unite, until, under…'],
                  ['*ing', 'Words ending in -ing'],
                  ['????', 'All 4-letter words'],
                ].map(([pat, desc]) => (
                  <div key={pat as string} className="p-3 bg-primary/5 rounded-xl">
                    <code className="font-mono text-sm font-semibold">{pat}</code>
                    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  ['What does * mean in a pattern?', 'The asterisk (*) is a placeholder for any number of letters, including zero. So "un*" matches "un", "undo", "until", "understand", etc.'],
                  ['What does ? mean in a pattern?', 'The question mark (?) stands for exactly one letter. "t??k" matches exactly 4-letter words that start with t and end with k.'],
                  ['Can I use this for Wordle?', 'Yes! Use ? for known positions and * for unknown sections. For example if you know the word ends in "ight" try "*ight".'],
                  ['Can I combine pattern with meaning?', 'Yes — fill in the "Also means like" field to narrow results to words with a specific meaning. For example, "*ight" + means "not heavy" would surface "light".'],
                ].map(([q, a]) => (
                  <div key={q as string} className="border-b pb-4 last:border-0 last:pb-0">
                    <p className="font-semibold text-sm mb-1">{q}</p>
                    <p className="text-sm text-muted-foreground">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Related Tools</h3>
              <div className="space-y-2">
                {[
                  ['/rhymes', 'Rhymes Dictionary', 'Perfect & near rhymes for any word'],
                  ['/dictionary', 'English Dictionary', 'Definitions, synonyms & audio'],
                  ['/tools/random-word-generator', 'Random Word Generator', 'Generate random words'],
                  ['/tools', 'All Text Tools', 'Browse all 50+ free tools'],
                ].map(([href, name, desc]) => (
                  <Link
                    key={href as string}
                    href={href as string}
                    className="flex items-center justify-between p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div>
                      <p className="font-medium text-sm">{name}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Use cases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Crossword puzzle solving',
                  'Wordle & word game help',
                  'Scrabble word finding',
                  'Spelling practice',
                  'Creative writing prompts',
                  'Language learning',
                ].map((u) => (
                  <li key={u} className="flex items-start gap-2">
                    <Grid3X3 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
