import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, ChevronRight, ArrowRight, ExternalLink, Globe } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'
import { AudioButton } from '@/components/dictionary/audio-button'
import { DictionarySearch } from '@/components/dictionary/dictionary-search'
import { DICTIONARY_WORDS } from '@/data/dictionary-words'

export const revalidate = 604800

// Pre-build all curated words at deploy time; unknown words are rendered on-demand
export function generateStaticParams() {
  return DICTIONARY_WORDS.map((word) => ({ word }))
}

interface Phonetic {
  text?: string
  audio?: string
  sourceUrl?: string
  license?: { name: string; url: string }
}

interface Definition {
  definition: string
  synonyms: string[]
  antonyms: string[]
  example?: string
}

interface Meaning {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: string[]
  antonyms: string[]
}

interface DictionaryEntry {
  word: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license?: { name: string; url: string }
  sourceUrls?: string[]
}

interface PageProps {
  params: Promise<{ word: string }>
}

async function fetchDefinition(word: string): Promise<DictionaryEntry[] | null> {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`,
      { next: { revalidate: 604800 } },
    )
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { word } = await params
  const decoded = decodeURIComponent(word)
  const entries = await fetchDefinition(decoded)

  if (!entries?.length) return { title: `${decoded} — Dictionary` }

  const firstMeaning = entries[0].meanings[0]
  const firstDef = firstMeaning?.definitions[0]?.definition ?? ''
  const pos = firstMeaning?.partOfSpeech ?? ''

  const title = `${decoded} — Definition, Meaning & Examples`
  const description = `${decoded} (${pos}): ${firstDef} Full definitions, pronunciation, synonyms, antonyms, and usage examples.`

  return {
    title,
    description,
    keywords: [
      `${decoded} definition`,
      `${decoded} meaning`,
      `what does ${decoded} mean`,
      `${decoded} synonyms`,
      `${decoded} antonyms`,
      `${decoded} pronunciation`,
      `define ${decoded}`,
    ],
    alternates: { canonical: `https://nagritranslate.com/dictionary/${decoded}` },
    openGraph: { title, description, url: `https://nagritranslate.com/dictionary/${decoded}` },
  }
}

function labelAudio(phonetics: Phonetic[]): { src: string; label: string }[] {
  const seen = new Set<string>()
  const results: { src: string; label: string }[] = []
  for (const p of phonetics) {
    if (!p.audio) continue
    const url = p.audio.startsWith('//') ? `https:${p.audio}` : p.audio
    if (seen.has(url)) continue
    seen.add(url)
    let label = '🔊'
    if (url.includes('-au.')) label = '🇦🇺 AU'
    else if (url.includes('-uk.') || url.includes('-gb_')) label = '🇬🇧 UK'
    else if (url.includes('-us.')) label = '🇺🇸 US'
    results.push({ src: url, label })
  }
  return results
}

export default async function DictionaryWordPage({ params }: PageProps) {
  const { word } = await params
  const decoded = decodeURIComponent(word).toLowerCase()
  const entries = await fetchDefinition(decoded)

  if (!entries?.length) notFound()

  const entry = entries[0]
  const audioClips = labelAudio(entry.phonetics)
  const uniquePhonemic = [...new Set(entry.phonetics.filter((p) => p.text).map((p) => p.text!))]

  const allSynonyms = [
    ...new Set(
      entry.meanings.flatMap((m) => [
        ...m.synonyms,
        ...m.definitions.flatMap((d) => d.synonyms),
      ]),
    ),
  ]
  const allAntonyms = [
    ...new Set(
      entry.meanings.flatMap((m) => [
        ...m.antonyms,
        ...m.definitions.flatMap((d) => d.antonyms),
      ]),
    ),
  ]

  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Dictionary', path: '/dictionary' },
        { name: capitalize(decoded), path: `/dictionary/${decoded}` },
      ]} />
      <WebPageSchema
        path={`/dictionary/${decoded}`}
        name={`${capitalize(decoded)} — Definition, Meaning & Examples`}
        description={`Full definition of "${decoded}" with pronunciation, synonyms, antonyms, and usage examples.`}
        type="ItemPage"
      />
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/dictionary" className="hover:text-foreground transition-colors">Dictionary</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{capitalize(decoded)}</span>
        </nav>

        {/* Word hero */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{capitalize(decoded)}</h1>
            <div className="flex flex-wrap gap-2 pt-1">
              {audioClips.map((clip) => (
                <AudioButton key={clip.src} src={clip.src} label={clip.label} />
              ))}
            </div>
          </div>

          {uniquePhonemic.length > 0 && (
            <p className="text-lg text-muted-foreground font-mono mb-3">
              {uniquePhonemic.join('  ·  ')}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {entry.meanings.map((m) => (
              <span
                key={m.partOfSpeech}
                className="text-xs px-2.5 py-0.5 rounded-full border bg-muted text-muted-foreground font-medium"
              >
                {m.partOfSpeech}
              </span>
            ))}
          </div>
        </div>

        {/* Meanings */}
        <div className="space-y-8 mb-10">
          {entry.meanings.map((meaning, mi) => (
            <section key={`${meaning.partOfSpeech}-${mi}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-lg border bg-muted text-sm font-semibold">
                  {meaning.partOfSpeech}
                </span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <ol className="space-y-4">
                {meaning.definitions.map((def, di) => (
                  <li key={di} className="flex gap-3">
                    <span className="text-muted-foreground text-sm font-medium mt-0.5 w-5 shrink-0">
                      {di + 1}.
                    </span>
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{def.definition}</p>
                      {def.example && (
                        <p className="mt-1.5 text-sm text-muted-foreground italic border-l-2 border-border pl-3">
                          &ldquo;{def.example}&rdquo;
                        </p>
                      )}
                      {def.synonyms.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <span className="text-xs text-muted-foreground">syn:</span>
                          {[...new Set(def.synonyms)].slice(0, 6).map((s) => (
                            <Link
                              key={s}
                              href={`/dictionary/${s}`}
                              className="text-xs px-2 py-0.5 bg-muted rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {s}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              {[...new Set(meaning.synonyms)].length > 0 && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground">Synonyms:</span>
                  {[...new Set(meaning.synonyms)].slice(0, 8).map((s) => (
                    <Link
                      key={s}
                      href={`/dictionary/${s}`}
                      className="text-xs px-2.5 py-0.5 border rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              )}
              {[...new Set(meaning.antonyms)].length > 0 && (
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-muted-foreground">Antonyms:</span>
                  {[...new Set(meaning.antonyms)].slice(0, 8).map((a) => (
                    <Link
                      key={a}
                      href={`/dictionary/${a}`}
                      className="text-xs px-2.5 py-0.5 border rounded-full bg-muted hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {a}
                    </Link>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Global synonyms / antonyms summary */}
        {(allSynonyms.length > 0 || allAntonyms.length > 0) && (
          <div className="p-5 bg-muted/30 rounded-2xl border mb-8 space-y-3">
            <h2 className="text-sm font-semibold">Quick Reference</h2>
            {allSynonyms.length > 0 && (
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1.5">
                  Synonyms
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {allSynonyms.slice(0, 12).map((s) => (
                    <Link
                      key={s}
                      href={`/dictionary/${s}`}
                      className="text-xs px-2.5 py-0.5 border rounded-full bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {s}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {allAntonyms.length > 0 && (
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wide block mb-1.5">
                  Antonyms
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {allAntonyms.slice(0, 12).map((a) => (
                    <Link
                      key={a}
                      href={`/dictionary/${a}`}
                      className="text-xs px-2.5 py-0.5 border rounded-full bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {a}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Translate CTA */}
        <div className="p-5 border rounded-2xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Translate &ldquo;{decoded}&rdquo; into another language</p>
              <p className="text-xs text-muted-foreground">248+ languages · free · no sign-up</p>
            </div>
          </div>
          <Link
            href={`/ai-translate/english-to-spanish?q=${encodeURIComponent(decoded)}`}
            className="flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
          >
            Translate word <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Search another word */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground text-center mb-3">Look up another word</p>
          <DictionarySearch />
        </div>

        {/* Source */}
        {entry.sourceUrls && entry.sourceUrls.length > 0 && (
          <div className="pt-6 border-t">
            <p className="text-xs text-muted-foreground flex flex-wrap items-center gap-1">
              Source:{' '}
              {entry.sourceUrls.map((url) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 hover:text-foreground transition-colors"
                >
                  {new URL(url).hostname}
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              ))}
              {entry.license && (
                <span>
                  · License:{' '}
                  <a href={entry.license.url} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    {entry.license.name}
                  </a>
                </span>
              )}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
