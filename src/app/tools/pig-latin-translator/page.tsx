import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { PigLatinTranslatorTool } from '@/components/tools/pig-latin-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Pig Latin Translator — English to Pig Latin & Back | Free',
  description:
    'Free Pig Latin translator. Convert English to Pig Latin and Pig Latin back to English instantly. Supports Classic (-way) and Yay (-yay) variants. Includes word-by-word breakdown. No sign-up.',
  keywords: [
    'pig latin translator',
    'no in pig latin',
    'yes in pig latin',
    'english to pig latin',
    'pig latin converter',
    'pig latin decoder',
    'pig latin generator',
    'translate to pig latin',
    'pig latin words',
    'pig latin rules',
    'pig latin online',
    'pig latin to english',
    'learn pig latin',
    'hello in pig latin',
    'love in pig latin',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/pig-latin-translator',
  },
  openGraph: {
    title: 'Pig Latin Translator — English to Pig Latin & Back',
    description:
      'Translate English to Pig Latin (and back) instantly. Classic -way and Yay -yay variants. Word-by-word breakdown included. Free.',
    url: 'https://nagritranslate.com/tools/pig-latin-translator',
    type: 'website',
  },
}

const RULES = [
  {
    rule: 'Consonant start',
    example: 'pig → igpay',
    explanation:
      'Move all consonants before the first vowel to the end of the word, then add "ay". Example: "pig" → move "p" → "ig" + "p" + "ay" = "igpay".',
  },
  {
    rule: 'Consonant cluster start',
    example: 'trash → ashtray',
    explanation:
      'Move the entire consonant cluster (all consonants before the first vowel) to the end, then add "ay". Example: "trash" → move "tr" → "ash" + "tr" + "ay" = "ashtray".',
  },
  {
    rule: 'Vowel start (Classic)',
    example: 'apple → appleway',
    explanation:
      'Words beginning with a vowel simply get "way" added to the end. Example: "apple" → "appleway". Some people use "yay" instead — that\'s the Yay variant.',
  },
  {
    rule: '"qu" cluster',
    example: 'queen → eenquay',
    explanation:
      '"qu" is always treated as a single unit (since "u" after "q" is not a true vowel). Move "qu" to the end, then add "ay". Example: "queen" → "eenquay".',
  },
  {
    rule: 'No vowels',
    example: 'rhythm → rhythmay',
    explanation:
      'Words with no vowels (like "rhythm" or "gym") just get "ay" added to the end, since there is no vowel to break on.',
  },
]

const EXAMPLES_TABLE = [
  { en: 'no',     pl: 'onay',      rule: 'Move "n" → end + "ay"' },
  { en: 'yes',    pl: 'esyay',     rule: 'Move "y" → end + "ay"' },
  { en: 'hello',  pl: 'ellohay',   rule: 'Move "h" → end + "ay"' },
  { en: 'world',  pl: 'orldway',   rule: 'Move "w" → end + "ay"' },
  { en: 'pig',    pl: 'igpay',     rule: 'Move "p" → end + "ay"' },
  { en: 'latin',  pl: 'atinlay',   rule: 'Move "l" → end + "ay"' },
  { en: 'trash',  pl: 'ashtray',   rule: 'Move "tr" cluster' },
  { en: 'string', pl: 'ingstray',  rule: 'Move "str" cluster' },
  { en: 'apple',  pl: 'appleway',  rule: 'Vowel start → add "way"' },
  { en: 'eat',    pl: 'eatway',    rule: 'Vowel start → add "way"' },
  { en: 'island', pl: 'islandway', rule: 'Vowel start → add "way"' },
  { en: 'queen',  pl: 'eenquay',   rule: '"qu" cluster → move "qu"' },
  { en: 'school', pl: 'oolschay',  rule: 'Move "sch" cluster' },
  { en: 'friend', pl: 'iendfray',  rule: 'Move "fr" cluster' },
  { en: 'rhythm', pl: 'rhythmay',  rule: 'No vowels → add "ay"' },
  { en: 'the',    pl: 'ethay',     rule: 'Move "th" cluster' },
  { en: 'happy',  pl: 'appyhay',   rule: 'Move "h" → end + "ay"' },
  { en: 'love',   pl: 'ovelay',    rule: 'Move "l" → end + "ay"' },
]

const FAQ = [
  {
    q: 'What is "no" in Pig Latin?',
    a: '"No" in Pig Latin is "onay". The rule is simple: "n" is a consonant, so it moves to the end of the word, and "ay" is added — giving "o" + "n" + "ay" = "onay". Similarly, "yes" becomes "esyay" (move "y", add "ay").',
  },
  {
    q: 'What is Pig Latin?',
    a: "Pig Latin is a language game played primarily by English speakers in which words are altered according to a simple set of rules. It is not a real language — it was developed as a way for children to speak in a coded way that adults (or younger siblings) couldn't easily understand. Despite the name, it has nothing to do with Latin. The origin of the name is unknown, but it has been documented in English since at least the early 1900s.",
  },
  {
    q: 'What is the difference between Classic (-way) and Yay (-yay) Pig Latin?',
    a: 'Both variants handle consonant-starting words the same way. The only difference is what gets added to vowel-starting words. Classic Pig Latin adds "way" (apple → appleway), while the Yay variant adds "yay" (apple → appleyay). The Classic -way variant is more common in North America. Some regional variants use "ay" alone for vowel-starting words (apple → appleay).',
  },
  {
    q: 'How do I translate Pig Latin back to English?',
    a: 'Use the "Pig Latin → English" mode in the tool above. The decode logic works as follows: (1) if the word ends in "way" or "yay", remove that suffix to get the original; (2) if the word ends in "ay", remove "ay" and move any trailing consonants back to the front of the word.',
  },
  {
    q: 'What is the "qu" rule in Pig Latin?',
    a: '"qu" is always treated as a single consonant cluster in Pig Latin because in English, "u" after "q" almost always acts as part of the consonant (as in "queen", "quick", "quiet"). If "qu" were split up, "queen" would become "ueenqay" — but the correct Pig Latin is "eenquay" since the whole "qu" moves together.',
  },
  {
    q: 'Is the word breakdown feature useful for learning Pig Latin?',
    a: 'Yes — the word-by-word breakdown table shows exactly which rule was applied to each word. This makes it easy to understand and learn the transformation rules, not just copy the output. Toggle it on using the "Word-by-Word Breakdown" section below the translation.',
  },
]

export default function PigLatinTranslatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Text Tools', path: '/tools' },
          { name: 'Pig Latin Translator', path: '/tools/pig-latin-translator' },
        ]}
      />
      <WebPageSchema
        path="/tools/pig-latin-translator"
        name="Pig Latin Translator — English to Pig Latin & Back"
        description="Free Pig Latin translator with Classic and Yay variants, bidirectional translation, and word-by-word breakdown."
        type="WebApplication"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-foreground transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Pig Latin Translator</span>
        </nav>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Pig Latin Translator</h1>
          <p className="text-muted-foreground text-lg">
            Translate English to Pig Latin and back. Supports Classic (-way) and Yay (-yay)
            variants with a full word-by-word rule breakdown. Free and instant.
          </p>
        </div>

        {/* Tool */}
        <PigLatinTranslatorTool />

        {/* Rules */}
        <section className="mt-14 mb-10">
          <h2 className="text-2xl font-bold mb-4">Pig Latin Rules</h2>
          <div className="space-y-3">
            {RULES.map((r, i) => (
              <div key={i} className="p-4 rounded-xl border bg-muted/5 flex gap-4">
                <span className="text-primary font-bold text-sm w-5 shrink-0">{i + 1}.</span>
                <div>
                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <span className="font-semibold text-sm">{r.rule}</span>
                    <code className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-mono">{r.example}</code>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{r.explanation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Examples table */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Common Word Examples</h2>
          <div className="rounded-xl border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/10 border-b">
                <tr>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground">English</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground">Pig Latin</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground hidden sm:table-cell">Rule</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {EXAMPLES_TABLE.map((row) => (
                  <tr key={row.en} className="hover:bg-muted/5">
                    <td className="px-4 py-2.5 font-medium">{row.en}</td>
                    <td className="px-4 py-2.5 text-primary font-medium">{row.pl}</td>
                    <td className="px-4 py-2.5 text-muted-foreground text-xs hidden sm:table-cell">{row.rule}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* What is Pig Latin */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Is Pig Latin?</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Pig Latin is an English language game in which words are altered by moving consonants
              and adding the suffix <strong className="text-foreground">&quot;ay&quot;</strong>. It is not a real language — it has no
              native speakers, no grammar rules beyond the transformation, and no writing system.
              It is purely a <strong className="text-foreground">word game</strong> used for fun and mild secrecy.
            </p>
            <p>
              The game dates back at least to the early 20th century in the United States. The
              earliest documented reference to a similar game called <em>&quot;Hog Latin&quot;</em> appears in
              print in 1869, and the term &quot;Pig Latin&quot; itself appears by the 1920s. It became
              a popular childhood game and features in countless books, movies, and TV shows as
              a shorthand for childhood secret communication.
            </p>
            <p>
              In <strong className="text-foreground">linguistics</strong>, Pig Latin is studied as an example of a
              &quot;language game&quot; or &quot;speech play&quot; — systematic alterations of a language&apos;s
              phonological structure. Other similar games exist in many languages, such as
              Verlan in French and Rövarspråket in Swedish.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border p-5">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related tools */}
        <section className="mb-10 grid sm:grid-cols-2 gap-4">
          <Link
            href="/tools/gibberish-translator"
            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border bg-gradient-to-br from-pink-500/5 to-rose-500/10 border-pink-500/20 hover:shadow-md transition-all"
          >
            <div>
              <p className="font-bold text-sm mb-1">🐷 Gibberish Translator</p>
              <p className="text-xs text-muted-foreground">Pig Latin + Ubbi Dubbi, Ob, Op, Idig & Tutnese</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </Link>
          <Link
            href="/tools/medieval-english-translator"
            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border bg-gradient-to-br from-amber-700/5 to-yellow-700/10 border-amber-700/20 hover:shadow-md transition-all"
          >
            <div>
              <p className="font-bold text-sm mb-1">⚜️ Medieval English Translator</p>
              <p className="text-xs text-muted-foreground">Thou, thee, thy — Shakespearean English</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
