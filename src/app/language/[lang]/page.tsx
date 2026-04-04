'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { use, useState } from 'react'
import {
  Home,
  ChevronRight,
  Globe,
  BookOpen,
  Hash,
  AlignLeft,
  Lightbulb,
  MessageSquareQuote,
  ChevronDown,
  Calendar,
} from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { getLanguagePillarBySlug, languagePillarIndex, LanguagePillar } from '@/lib/language-pillar-data'
import { getPhrasesBySlug } from '@/lib/phrases-data'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

function generateFAQs(data: LanguagePillar) {
  const difficultyHours: Record<string, string> = {
    Easy: '600–750 hours',
    Medium: '900 hours',
    Hard: '1,100 hours',
    'Very Hard': '2,200+ hours',
  }
  return [
    {
      question: `Is ${data.language} hard to learn for English speakers?`,
      answer: `${data.language} is rated "${data.difficulty}" difficulty for English speakers, requiring approximately ${difficultyHours[data.difficulty]} to reach fluency according to FSI research. It belongs to the ${data.family} language family (${data.branch} branch) and is written in the ${data.script} script.`,
    },
    {
      question: `How many people speak ${data.language}?`,
      answer: `${data.language} has approximately ${data.speakers} total speakers worldwide, with ${data.nativeSpeakers} native speakers.${data.officialIn ? ` It is officially spoken in: ${data.officialIn.join(', ')}.` : ''}`,
    },
    {
      question: `What script is ${data.language} written in?`,
      answer: `${data.language} uses the ${data.script} script and is written ${data.writingDirection === 'rtl' ? 'right to left' : data.writingDirection === 'ttb' ? 'top to bottom' : 'left to right'}. ${data.alphabetIntro}`,
    },
    {
      question: `What language family does ${data.language} belong to?`,
      answer: `${data.language} belongs to the ${data.family} language family, specifically the ${data.branch} branch. ${data.description}`,
    },
    {
      question: `What is the sentence structure of ${data.language}?`,
      answer: `${data.language} uses ${data.sentenceStructure} word order. For example, "${data.sentenceExample.native ?? Object.entries(data.sentenceExample).find(([k]) => k !== 'english' && k !== 'breakdown')?.[1]}" means "${data.sentenceExample.english}". ${Array.isArray(data.sentenceExample.breakdown) ? data.sentenceExample.breakdown.map((b: { word: string; meaning: string }) => `${b.word} (${b.meaning})`).join(' + ') : data.sentenceExample.breakdown}`,
    },
    {
      question: `What countries officially use ${data.language}?`,
      answer: data.officialIn ? `${data.language} is an official language in: ${data.officialIn.join(', ')}.` : `${data.language} is not officially designated in any countries, though it is spoken by communities around the world.`,
    },
    {
      question: `Why should I learn ${data.language}?`,
      answer: data.whyLearn ? data.whyLearn.join(' ') : `${data.language} offers unique cultural insights and communication opportunities for learners interested in expanding their linguistic horizons.`,
    },
    {
      question: `What are some interesting facts about the ${data.language} language?`,
      answer: data.funFacts ? data.funFacts.join(' ') : `${data.language} has a rich linguistic heritage and cultural significance that makes it a fascinating subject of study.`,
    },
    {
      question: `How many characters does the ${data.language} ${data.script === 'Latin' ? 'alphabet' : 'script'} have?`,
      answer: data.alphabet && data.alphabet.length > 0 ? `Our ${data.language} guide covers ${data.alphabet.length} main characters from the ${data.script} writing system, each with romanization, pronunciation, and example words.` : `${data.language} uses the ${data.script} writing system with its unique character set.`,
    },
    {
      question: `What are some common ${data.language} idioms or expressions?`,
      answer: data.idioms && data.idioms.length > 0
        ? `One popular ${data.language} expression is "${data.idioms[0].expression}", which literally means "${data.idioms[0].literal}" and conveys: ${data.idioms[0].meaning}. Our guide covers ${data.idioms.length} idioms and ${data.proverbs?.length || 0} proverbs.`
        : `${data.language} has many colorful idioms and expressions reflecting the culture and values of its speakers.`,
    },
  ]
}

interface PageProps {
  params: Promise<{ lang: string }>
}

const difficultyColors: Record<string, string> = {
  Easy: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  Medium: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20',
  Hard: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
  'Very Hard': 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
}

const TABS = [
  { id: 'overview', label: 'Overview', desc: 'Facts & why learn', icon: Globe },
  { id: 'alphabet', label: 'Alphabet', desc: 'Script & characters', icon: AlignLeft },
  { id: 'numbers', label: 'Numbers', desc: 'Numbers & dates', icon: Hash },
  { id: 'grammar', label: 'Grammar', desc: 'Rules & conjugation', icon: BookOpen },
  { id: 'idioms', label: 'Idioms', desc: 'Expressions & proverbs', icon: MessageSquareQuote },
]

export default function LanguagePillarPage({ params }: PageProps) {
  const { lang } = use(params)
  const data = getLanguagePillarBySlug(lang)
  if (!data) notFound()

  const [activeTab, setActiveTab] = useState('overview')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = generateFAQs(data)

  // Greetings from phrases data for "how to say" micro-content
  const phrasesData = getPhrasesBySlug(data.slug)
  const greetings = phrasesData?.categories.find((c) => c.category === 'Greetings')?.phrases.slice(0, 6) ?? []

  // Related: same branch first, fall back to same family, exclude self
  const related = [
    ...languagePillarIndex.filter((l) => l.slug !== data.slug && l.branch === data.branch),
    ...languagePillarIndex.filter((l) => l.slug !== data.slug && l.family === data.family && l.branch !== data.branch),
  ].slice(0, 4)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Language Guides', path: '/language' },
        { name: data.language, path: `/language/${data.slug}` },
      ]} />
      <WebPageSchema
        path={`/language/${data.slug}`}
        name={`${data.language} Language Guide — Alphabet, Grammar, Numbers & Idioms`}
        description={`Complete ${data.language} guide covering the ${data.script} alphabet, numbers, grammar rules, conjugation tables, and native idioms. ${data.speakers} speakers worldwide.`}
        type="ItemPage"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/language" className="hover:text-foreground transition-colors">Language Guides</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{data.language}</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-5xl">{data.flag}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{data.language} Language Guide</h1>
              <p className="text-muted-foreground mt-1">
                {data.nativeName} · {data.script} script · {data.speakers} speakers
              </p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground mt-1.5">
                <Calendar className="w-3 h-3" />
                Last updated: <time dateTime="2026-04-02">April 2, 2026</time>
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-3xl">{data.description}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <div className="p-4 bg-muted/30 rounded-xl border text-center">
            <p className="text-xl font-bold text-primary">{data.speakers}</p>
            <p className="text-xs text-muted-foreground mt-1">Total speakers</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-xl border text-center">
            <p className="text-xl font-bold text-primary">{data.nativeSpeakers}</p>
            <p className="text-xs text-muted-foreground mt-1">Native speakers</p>
          </div>
          <div className="p-4 bg-muted/30 rounded-xl border text-center">
            <p className="text-sm font-bold text-primary truncate">{data.script}</p>
            <p className="text-xs text-muted-foreground mt-1">Writing script</p>
          </div>
          <div className={`p-4 rounded-xl border text-center ${difficultyColors[data.difficulty]}`}>
            <p className="text-xl font-bold">{data.difficulty}</p>
            <p className="text-xs mt-1 opacity-80">Difficulty</p>
          </div>
        </div>

        {/* Translator Banner */}
        {data.translatorLink && data.reverseLink && (
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-primary shrink-0" />
              <span className="text-sm font-medium">
                Translate {data.language} now with our free AI translator.
              </span>
            </div>
            <div className="flex gap-2 shrink-0 flex-wrap">
              <Link href={data.translatorLink} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors whitespace-nowrap">
                English → {data.language}
              </Link>
              <Link href={data.reverseLink} className="px-4 py-2 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors whitespace-nowrap">
                {data.language} → English
              </Link>
            </div>
          </div>
        )}

        {/* Tab Bar */}
        <div className="grid grid-cols-5 gap-1 bg-muted/40 p-1 rounded-xl border mb-8">
          {TABS.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 px-2 py-3 rounded-lg text-center transition-all ${
                  isActive
                    ? 'bg-background shadow-sm text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary' : ''}`} />
                <span className="text-xs font-semibold leading-tight">{tab.label}</span>
                <span className="text-[10px] leading-tight opacity-70 hidden sm:block">{tab.desc}</span>
              </button>
            )
          })}
        </div>

        {/* ── OVERVIEW TAB ── */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Fun Facts */}
            {data.funFacts && data.funFacts.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  {data.language} Language Facts
                </h2>
                <div className="space-y-2">
                  {data.funFacts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-yellow-500/5 border border-yellow-500/10 rounded-lg">
                      <span className="text-yellow-500 shrink-0 mt-0.5">💡</span>
                      <p className="text-sm text-muted-foreground leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Why Learn */}
            {data.whyLearn && data.whyLearn.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4">Why Learn {data.language}?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.whyLearn.map((reason, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-muted/20 rounded-xl border">
                      <div className="w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-sm leading-relaxed">{reason}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Official Countries */}
            {data.officialIn && data.officialIn.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4">Official In</h2>
                <div className="flex flex-wrap gap-2">
                  {data.officialIn.map((country, i) => (
                    <span key={i} className="px-3 py-1 bg-muted/40 border rounded-full text-sm">
                      {country}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* How to say it */}
            {greetings.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-1">How to Say It in {data.language}</h2>
                <p className="text-sm text-muted-foreground mb-4">Common greetings and essential words</p>
                <div className="overflow-hidden rounded-xl border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-muted/40 border-b">
                        <th className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wide text-muted-foreground">English</th>
                        <th className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wide text-muted-foreground">{data.language}</th>
                        <th className="text-left px-4 py-2.5 font-semibold text-xs uppercase tracking-wide text-muted-foreground hidden sm:table-cell">Pronunciation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {greetings.map((p, i) => (
                        <tr key={i} className={`border-b last:border-0 ${i % 2 === 0 ? 'bg-background' : 'bg-muted/10'}`}>
                          <td className="px-4 py-3 text-muted-foreground">{p.english}</td>
                          <td className="px-4 py-3 font-medium">{p.translated}</td>
                          <td className="px-4 py-3 text-muted-foreground italic hidden sm:table-cell">{p.pronunciation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-3 text-right">
                  {data.phrasesLink && (
                    <Link href={data.phrasesLink} className="text-sm text-primary hover:underline">
                      See all {data.language} phrases →
                    </Link>
                  )}
                </div>
              </section>
            )}

            {/* Related Links */}
            <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {data.phrasesLink && (
                <Link href={data.phrasesLink} className="p-4 bg-muted/20 border rounded-xl hover:bg-muted/40 transition-colors group">
                  <div className="text-2xl mb-2">🗣️</div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{data.language} Phrases</p>
                  <p className="text-xs text-muted-foreground mt-1">Common phrases by category</p>
                </Link>
              )}
              {data.vocabularyLink && (
                <Link href={data.vocabularyLink} className="p-4 bg-muted/20 border rounded-xl hover:bg-muted/40 transition-colors group">
                  <div className="text-2xl mb-2">📚</div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">{data.language} Vocabulary</p>
                  <p className="text-xs text-muted-foreground mt-1">Words by category</p>
                </Link>
              )}
              {data.learnLink && (
                <Link href={data.learnLink} className="p-4 bg-muted/20 border rounded-xl hover:bg-muted/40 transition-colors group">
                  <div className="text-2xl mb-2">🎓</div>
                  <p className="font-semibold text-sm group-hover:text-primary transition-colors">Learn {data.language}</p>
                  <p className="text-xs text-muted-foreground mt-1">Grammar basics & tips</p>
                </Link>
              )}
            </section>
          </div>
        )}

        {/* ── ALPHABET TAB ── */}
        {activeTab === 'alphabet' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-3">
                {data.language} {data.script === 'Latin' ? 'Alphabet' : 'Script'} — {data.script}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{data.alphabetIntro}</p>

              {data.writingDirection === 'rtl' && (
                <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg text-sm text-blue-600 dark:text-blue-400">
                  ← This language is written <strong>right-to-left</strong>
                </div>
              )}

              {(() => {
                const hasExample = data.alphabet.some((c: Record<string, unknown>) => c.example)
                return (
                  <div className="overflow-x-auto rounded-xl border">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Character</th>
                          <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Romanization</th>
                          <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Pronunciation</th>
                          {hasExample && <th className="text-left px-4 py-3 font-semibold text-muted-foreground hidden sm:table-cell">Example</th>}
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {data.alphabet.map((char: Record<string, unknown>, i: number) => (
                          <tr key={i} className="hover:bg-muted/20 transition-colors">
                            <td className="px-4 py-3 text-2xl font-bold text-primary" dir={data.writingDirection}>
                              {(char.character ?? char.char) as string}
                            </td>
                            <td className="px-4 py-3 font-mono font-semibold">{(char.romanization ?? char.name) as string}</td>
                            <td className="px-4 py-3 text-muted-foreground">{char.pronunciation as string}</td>
                            {hasExample && <td className="px-4 py-3 text-muted-foreground text-xs hidden sm:table-cell">{(char.example as string) ?? '—'}</td>}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              })()}
            </section>
          </div>
        )}

        {/* ── NUMBERS TAB ── */}
        {activeTab === 'numbers' && (
          <div className="space-y-8">
            {/* Numbers 1-20+ */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{data.language} Numbers</h2>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground w-16">#</th>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground">{data.language}</th>
                      <th className="text-left px-4 py-3 font-semibold text-muted-foreground">Pronunciation</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {data.numbers.map((num, i) => (
                      <tr key={i} className="hover:bg-muted/20 transition-colors">
                        <td className="px-4 py-3 font-bold text-primary">{num.digit ?? num.numeral}</td>
                        <td className="px-4 py-3 font-semibold" dir={data.writingDirection}>{num.word}</td>
                        <td className="px-4 py-3 text-muted-foreground font-mono text-xs">{num.pronunciation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Days of week */}
            {data.daysOfWeek && (
              <section>
                <h2 className="text-xl font-bold mb-4">Days of the Week</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {data.daysOfWeek.map((day, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded-xl border">
                      <span className="text-sm text-muted-foreground w-24">{(day as any).english ?? (day as any).day}</span>
                      <span className="font-semibold text-sm" dir={data.writingDirection}>{(day as any).native ?? (day as any).translation}</span>
                      <span className="text-xs text-muted-foreground font-mono ml-2">{day.pronunciation}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Months */}
            {data.months && (
              <section>
                <h2 className="text-xl font-bold mb-4">Months of the Year</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {data.months.map((month, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/20 rounded-xl border">
                      <span className="text-sm text-muted-foreground w-24">{(month as any).english ?? (month as any).month}</span>
                      <span className="font-semibold text-sm" dir={data.writingDirection}>{(month as any).native ?? (month as any).translation}</span>
                      <span className="text-xs text-muted-foreground font-mono ml-2">{month.pronunciation}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* ── GRAMMAR TAB ── */}
        {activeTab === 'grammar' && (
          <div className="space-y-8">
            {/* Sentence Structure */}
            <section className="p-5 bg-primary/5 border border-primary/15 rounded-2xl">
              <h2 className="text-xl font-bold mb-3">Sentence Structure</h2>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1.5 bg-primary text-primary-foreground rounded-lg text-sm font-bold tracking-wide">
                  {data.sentenceStructure}
                </span>
              </div>
              <div className="mt-4 p-4 bg-background rounded-xl border">
                <p className="text-xs text-muted-foreground mb-1">Example</p>
                <p className="font-semibold" dir={data.writingDirection}>{data.sentenceExample.native ?? Object.entries(data.sentenceExample).find(([k]) => k !== 'english' && k !== 'breakdown')?.[1] as string}</p>
                <p className="text-sm text-muted-foreground mt-1">{data.sentenceExample.english}</p>
                <p className="text-xs text-muted-foreground mt-2 font-mono">
                  {Array.isArray(data.sentenceExample.breakdown)
                    ? data.sentenceExample.breakdown.map((b: { word: string; meaning: string }) => `${b.word} (${b.meaning})`).join(' + ')
                    : data.sentenceExample.breakdown}
                </p>
              </div>
            </section>

            {/* Grammar Rules */}
            <section>
              <h2 className="text-xl font-bold mb-4">Key Grammar Rules</h2>
              <div className="space-y-3">
                {data.grammarRules.map((rule, i) => (
                  <div key={i} className="p-4 bg-muted/20 rounded-xl border">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{rule.title ?? rule.rule}</p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{rule.detail ?? rule.explanation}</p>
                        {rule.example && (
                          <div className="mt-3 p-3 bg-background rounded-lg border text-xs space-y-1">
                            {typeof rule.example === 'string'
                              ? <p className="font-mono text-muted-foreground">{rule.example}</p>
                              : <>
                                  <p className="text-muted-foreground">{rule.example.english}</p>
                                  <p className="font-semibold text-primary" dir={data.writingDirection}>{rule.example.native}</p>
                                </>
                            }
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Conjugation Tables */}
            {data.conjugationTables && data.conjugationTables.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-4">Verb Conjugation</h2>
                <div className="space-y-6">
                  {data.conjugationTables.map((table, ti) => (
                    <div key={ti} className="rounded-xl border overflow-hidden">
                      <div className="px-4 py-3 bg-muted/40 border-b">
                        <p className="font-bold">{table.verb ?? (table as any).tense}</p>
                        {table.meaning && <p className="text-xs text-muted-foreground">{table.meaning}</p>}
                      </div>
                      <table className="w-full text-sm">
                        <thead className="bg-muted/20">
                          <tr>
                            <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Pronoun</th>
                            <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Form</th>
                            <th className="text-left px-4 py-2.5 font-semibold text-muted-foreground">Pronunciation</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {table.rows.map((row, ri) => (
                            <tr key={ri} className="hover:bg-muted/20 transition-colors">
                              <td className="px-4 py-2.5 text-muted-foreground">{row.pronoun}</td>
                              <td className="px-4 py-2.5 font-semibold text-primary" dir={data.writingDirection}>{row.form}</td>
                              <td className="px-4 py-2.5 text-muted-foreground font-mono text-xs">{row.pronunciation ?? row.meaning}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* ── IDIOMS TAB ── */}
        {activeTab === 'idioms' && (
          <div className="space-y-8">
            {/* Idioms */}
            {data.idioms && data.idioms.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-2">{data.language} Idioms & Expressions</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Native expressions that reveal how {data.language} speakers think and speak.
                </p>
                <div className="space-y-4">
                  {data.idioms.map((idiom, i) => (
                    <div key={i} className="p-4 bg-muted/20 rounded-xl border">
                      <div className="flex items-start gap-3">
                        <span className="text-lg shrink-0 mt-0.5">💬</span>
                        <div className="flex-1">
                          <p className="font-bold text-primary" dir={data.writingDirection}>{idiom.expression}</p>
                          <p className="text-xs text-muted-foreground mt-1 italic">Literal: "{idiom.literal}"</p>
                          <p className="text-sm font-medium mt-2">{idiom.meaning}</p>
                          <p className="text-xs text-muted-foreground mt-1 bg-muted/40 px-3 py-1.5 rounded-lg inline-block" dir={data.writingDirection}>
                            {idiom.usage}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Proverbs */}
            {data.proverbs && data.proverbs.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-2">{data.language} Proverbs</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Traditional sayings that reflect the wisdom and values of {data.language}-speaking cultures.
                </p>
                <div className="space-y-4">
                  {data.proverbs.map((proverb, i) => (
                    <div key={i} className="p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl border relative overflow-hidden">
                    <div className="absolute top-3 right-4 text-4xl opacity-10 select-none">"</div>
                    <p className="font-bold text-lg leading-snug mb-2" dir={data.writingDirection}>{proverb.text}</p>
                    <p className="text-sm text-muted-foreground italic mb-3">"{proverb.translation}"</p>
                    <p className="text-sm leading-relaxed">{proverb.meaning}</p>
                  </div>
                ))}
              </div>
            </section>
            )}
          </div>
        )}

        {/* FAQ Section */}
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-2">
            Frequently Asked Questions — {data.language}
          </h2>
          <p className="text-muted-foreground text-sm mb-6">
            Common questions about the {data.language} language, script, difficulty, and learning resources.
          </p>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/30 transition-colors"
                  aria-expanded={openFAQ === i}
                >
                  <span className="font-medium text-sm pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                      openFAQ === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFAQ === i && (
                  <div className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t bg-muted/10 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Related Language Guides */}
        {related.length > 0 && (
          <section className="mt-12 pt-8 border-t">
            <h2 className="text-lg font-bold mb-4">Related Language Guides</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {related.map((lang) => (
                <Link
                  key={lang.slug}
                  href={`/language/${lang.slug}`}
                  className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl border hover:border-primary/30 hover:bg-muted/40 transition-all group"
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold group-hover:text-primary transition-colors truncate">{lang.language}</p>
                    <p className="text-xs text-muted-foreground truncate">{lang.script}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center mb-4">
            Continue exploring {data.language}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {data.translatorLink && (
              <Link href={data.translatorLink} className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                Translate English → {data.language}
              </Link>
            )}
            {data.phrasesLink && (
              <Link href={data.phrasesLink} className="px-4 py-2 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
                {data.language} Phrases
              </Link>
            )}
            {data.vocabularyLink && (
              <Link href={data.vocabularyLink} className="px-4 py-2 bg-muted border rounded-lg text-sm font-medium hover:bg-muted/80 transition-colors">
                {data.language} Vocabulary
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
