import { Metadata } from 'next'
import { ArrowRight, Check, ExternalLink } from 'lucide-react'
import { NaviTranslatorTool } from '@/components/tools/navi-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Na\'vi Translator — English to Na\'vi | Avatar Language | Free',
  description:
    'Free online Na\'vi translator. Convert English to Na\'vi — the language of Avatar\'s blue aliens created by Paul Frommer. 200+ words, phrasebook with pronunciation, full dictionary. No sign-up.',
  keywords: [
    'navi translator',
    'na\'vi translator',
    'avatar language translator',
    'english to navi',
    'navi language',
    'avatar navi words',
    'learn navi',
    'navi dictionary',
    'paul frommer language',
    'avatar constructed language',
    'navi phrases',
    'oel ngati kameie',
    'i see you avatar',
    'navi conlang',
    'avatar 2 language',
    'pandora language',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/navi-translator',
  },
  openGraph: {
    title: 'Na\'vi Translator — English to Na\'vi | Avatar Language',
    description:
      'Translate English to Na\'vi — the constructed language from Avatar. 200+ words, full phrasebook with pronunciation, and dictionary. Free.',
    url: 'https://nagritranslate.com/tools/navi-translator',
    type: 'website',
  },
}

const QUICK_PHRASES = [
  { en: 'I see you',               navi: 'Oel ngati kameie' },
  { en: 'Hello',                    navi: 'Kaltxì' },
  { en: 'Thank you',               navi: 'Irayo' },
  { en: 'Until we meet again',     navi: 'Kìyevame' },
  { en: 'May Eywa be with you',    navi: 'Eywa ngahu' },
  { en: 'You are loved by me',     navi: 'Nga yawne lu oer' },
]

const FAQS = [
  {
    q: 'What is the Na\'vi language?',
    a: 'Na\'vi is a constructed language (conlang) created by linguist Paul Frommer for James Cameron\'s Avatar (2009) and its sequels. It is the language of the Na\'vi, the indigenous blue humanoid species of the moon Pandora. As of 2024, the Na\'vi lexicon contains over 2,000 words and the language has a dedicated global community of learners.',
  },
  {
    q: 'What does "Oel ngati kameie" mean?',
    a: '"Oel ngati kameie" is the most iconic phrase from Avatar. It translates to "I see you" — but in the Na\'vi culture, this goes far deeper than literal sight. It means "I see who you truly are" — a spiritual recognition of another person\'s inner being. It is used as both a greeting and a declaration of deep connection.',
  },
  {
    q: 'Who created the Na\'vi language?',
    a: 'Paul Frommer, a linguist and professor at the University of Southern California (USC), created Na\'vi for director James Cameron. Cameron gave Frommer a handful of words and asked him to build a complete, consistent, learnable language around them. Frommer developed the full phonology, grammar, and vocabulary used in the films.',
  },
  {
    q: 'Is Na\'vi a real language I can learn?',
    a: 'Yes — Na\'vi is a fully constructed language with consistent grammar rules, a growing vocabulary, and an active learner community at learnnavi.org. It has its own pronunciation system (including sounds like "tx", "kx", "px" that don\'t exist in English), a free word order, and infixes — a unique grammatical feature where modifiers are inserted into the middle of words.',
  },
  {
    q: 'How is Na\'vi pronounced?',
    a: "Na'vi has several sounds not found in English. \"Tx\", \"px\", and \"kx\" are ejective consonants (a sharp, popped sound). The apostrophe (') represents a glottal stop. \"Rr\" is a rolled/trilled R. The stress pattern matters — wrong stress can change meaning. The phrasebook tab includes phonetic pronunciations for all common phrases.",
  },
  {
    q: 'What is "Kaltxì"?',
    a: '"Kaltxì" is the Na\'vi word for "hello". It is pronounced approximately "kal-TXI" where "tx" is an ejective t-sound made by closing your throat. It\'s one of the first words Na\'vi learners pick up and is used in the films multiple times.',
  },
  {
    q: 'What does "Eywa" mean?',
    a: '"Eywa" is the Na\'vi name for the deity/consciousness that connects all living things on Pandora — comparable to a nature goddess or planetary neural network. The planet\'s trees are physically connected through root systems, allowing Eywa to sense and respond to the world\'s needs. "Eywa ngahu" means "May Eywa be with you."',
  },
  {
    q: 'What is "tsaheylu"?',
    a: '"Tsaheylu" refers to the neural bond that Na\'vi can form with other creatures and with Eywa\'s network by connecting their queue (the bioluminescent tendrils at the end of their braid) to another living being. It is the central spiritual and biological mechanic of the Avatar world.',
  },
]

export default function NaviTranslatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Text Tools', path: '/tools' },
        { name: "Na'vi Translator", path: '/tools/navi-translator' },
      ]} />
      <WebPageSchema
        path="/tools/navi-translator"
        name="Na'vi Translator — English to Na'vi | Avatar Language"
        description="Translate English to Na'vi — the constructed language from Avatar. 200+ words, phrasebook with pronunciation, and full dictionary."
        type="WebApplication"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 via-cyan-500/5 to-blue-500/10 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-sm text-teal-600 dark:text-teal-400 font-medium mb-5">
            <span>🪬</span>
            Avatar Constructed Language
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Na&apos;vi Translator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Translate English to Na&apos;vi — the language of Avatar&apos;s Pandora.
            Created by linguist Paul Frommer, spoken by millions of fans worldwide.
          </p>

          {/* Quick phrase showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-4">
            {QUICK_PHRASES.map(p => (
              <div key={p.en} className="px-3 py-3 rounded-xl bg-background/80 border shadow-sm text-left">
                <p className="text-xs text-muted-foreground mb-0.5">{p.en}</p>
                <p className="text-sm font-semibold text-teal-600 dark:text-teal-400">{p.navi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool + Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* Tool */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm">
              <NaviTranslatorTool />
            </div>

            {/* About Na'vi */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">What Is the Na&apos;vi Language?</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <strong className="text-foreground">Na&apos;vi</strong> is a fully constructed language (conlang) created by linguist{' '}
                  <a href="https://paulfrommer.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                    Paul Frommer <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  for director James Cameron&apos;s <em>Avatar</em> (2009). It is spoken by the Na&apos;vi — the 10-foot-tall blue indigenous people of Pandora, a habitable moon in the Alpha Centauri star system.
                </p>
                <p>
                  Unlike many fictional languages, Na&apos;vi was designed from the ground up to be <strong className="text-foreground">learnable and internally consistent</strong>. It features its own phonology, grammar (including a unique infix system), and a{' '}
                  <a href="https://learnnavi.org/navi-vocabulary/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                    lexicon of 2,000+ words <ExternalLink className="w-3 h-3" />
                  </a>{' '}
                  maintained by the active{' '}
                  <a href="https://learnnavi.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                    learnnavi.org community <ExternalLink className="w-3 h-3" />
                  </a>.
                </p>
                <p>
                  Na&apos;vi has a <strong className="text-foreground">tripartite alignment</strong> — meaning subjects of transitive and intransitive verbs take different cases — and a <strong className="text-foreground">relatively free word order</strong>, since meaning is conveyed through case markers rather than word position. It also uses infixes — particles inserted <em>inside</em> verbs rather than before or after them, which is rare among natural languages.
                </p>
              </div>
            </div>

            {/* Sound system */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Na&apos;vi Sounds & Pronunciation Guide</h2>
              <p className="text-sm text-muted-foreground">
                Na&apos;vi includes several sounds not found in English. The most distinctive are its <strong className="text-foreground">ejective consonants</strong> and the <strong className="text-foreground">glottal stop</strong>.
              </p>
              <div className="overflow-x-auto rounded-xl border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-muted/20 border-b">
                      <th className="text-left px-4 py-3 font-semibold">Sound</th>
                      <th className="text-left px-4 py-3 font-semibold">Symbol</th>
                      <th className="text-left px-4 py-3 font-semibold">How to pronounce</th>
                      <th className="text-left px-4 py-3 font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {[
                      ['Glottal stop', "'", 'Brief closure of throat — like the pause in "uh-oh"', "tì'awm (camping)"],
                      ['Ejective T', 'tx', 'Sharp "t" with burst of air — no English equivalent', "Kaltxì (hello)"],
                      ['Ejective P', 'px', 'Popped "p" — lips pressed tight then released', "Pandora"],
                      ['Ejective K', 'kx', 'Sharp "k" from deep in throat', "kxì (no)"],
                      ['Trilled R', 'rr', 'Rolled or trilled R — like Spanish "rr"', "nìprrte' (welcome)"],
                      ['Syllabic LL', 'll', 'A consonant "l" that forms its own syllable', "plltxe (speak)"],
                      ['NG', 'ng', 'Like "ng" in "singing" — can start a word', "nga (you)"],
                    ].map(([name, sym, desc, ex]) => (
                      <tr key={name as string} className="hover:bg-muted/10 transition-colors">
                        <td className="px-4 py-2.5 font-medium">{name}</td>
                        <td className="px-4 py-2.5 font-mono text-teal-600 dark:text-teal-400 font-bold">{sym}</td>
                        <td className="px-4 py-2.5 text-muted-foreground">{desc}</td>
                        <td className="px-4 py-2.5 font-mono text-xs">{ex}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Na'vi grammar basics */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Na&apos;vi Grammar Basics</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Free Word Order',
                    desc: 'Unlike English, Na\'vi doesn\'t rely on word order for meaning. "Oel ngati kameie" (I see you) can be rearranged and still mean the same thing — case suffixes on nouns show their role.',
                    color: 'border-teal-500/20 bg-teal-500/5',
                  },
                  {
                    title: 'Case System',
                    desc: 'Na\'vi nouns take suffixes to show their grammatical role. The agentive "-l" (oel = I, as doer), patientive "-t" (ngati = you, as receiver), and dative "-r" (oer = to me).',
                    color: 'border-blue-500/20 bg-blue-500/5',
                  },
                  {
                    title: 'Infixes',
                    desc: 'Verb tense, mood, and speaker attitude are shown by inserting infixes inside the verb root — not before or after it. For example, <iv> inserts into a verb to make it subjunctive.',
                    color: 'border-violet-500/20 bg-violet-500/5',
                  },
                  {
                    title: 'Lenition',
                    desc: 'Certain grammatical contexts cause consonants at the start of words to "soften" — px→p, tx→t, kx→k, ts→s. This is called lenition and occurs after some prefixes and in plurals.',
                    color: 'border-amber-500/20 bg-amber-500/5',
                  },
                ].map(({ title, desc, color }) => (
                  <div key={title} className={`p-4 rounded-xl border ${color}`}>
                    <h3 className="font-semibold mb-2 text-sm">{title}</h3>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">
                For a complete grammar reference, see the{' '}
                <a href="https://learnnavi.org/navi-grammar/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                  learnnavi.org grammar guide <ExternalLink className="w-3 h-3" />
                </a>{' '}
                and Paul Frommer&apos;s{' '}
                <a href="https://paulfrommer.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                  official blog <ExternalLink className="w-3 h-3" />
                </a>.
              </p>
            </div>

            {/* Famous quotes */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Famous Na&apos;vi Quotes from Avatar</h2>
              <div className="space-y-3">
                {[
                  {
                    navi: 'Oel ngati kameie',
                    en: 'I see you',
                    context: 'The most iconic phrase — a deep spiritual greeting meaning "I truly see and acknowledge you"',
                    speaker: 'Multiple characters',
                  },
                  {
                    navi: 'Eywa ngahu',
                    en: 'May Eywa be with you',
                    context: 'A blessing and farewell — invoking the Na\'vi deity/life force to protect someone',
                    speaker: 'Neytiri to Jake',
                  },
                  {
                    navi: 'Nga yawne lu oer',
                    en: 'You are loved by me / I love you',
                    context: 'Literal: "You are dear to me" — the Na\'vi expression of deep love',
                    speaker: 'Neytiri',
                  },
                  {
                    navi: 'Kìyevame ulte Eywa ngahu',
                    en: 'Until we meet again, and may Eywa be with you',
                    context: 'A formal farewell combining two key blessings',
                    speaker: 'Traditional Na\'vi farewell',
                  },
                  {
                    navi: 'Tsamsiyu, oe\'ul mì taw',
                    en: 'Warrior, I fly in the sky',
                    context: 'Spoken by Toruk Makto — the rider of the Great Leonopteryx',
                    speaker: 'Jake Sully',
                  },
                ].map(q => (
                  <div key={q.navi} className="p-4 rounded-xl border bg-muted/10">
                    <p className="text-lg font-semibold text-teal-600 dark:text-teal-400 mb-1">&ldquo;{q.navi}&rdquo;</p>
                    <p className="text-sm font-medium mb-1">{q.en}</p>
                    <p className="text-xs text-muted-foreground mb-1">{q.context}</p>
                    <p className="text-xs text-muted-foreground/60 italic">— {q.speaker}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {FAQS.map(({ q, a }) => (
                  <div key={q} className="p-4 rounded-xl border bg-muted/10">
                    <h3 className="font-semibold text-sm mb-1">{q}</h3>
                    <p className="text-sm text-muted-foreground">{a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* External resources */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold">Learn Na&apos;vi — Official Resources</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    title: 'Learn Na\'vi — Official Community',
                    desc: 'The main Na\'vi learning hub with grammar, dictionary, and lessons',
                    href: 'https://learnnavi.org',
                    source: 'learnnavi.org',
                  },
                  {
                    title: 'Na\'vi Vocabulary Database',
                    desc: '2,000+ Na\'vi words with definitions and usage examples',
                    href: 'https://learnnavi.org/navi-vocabulary/',
                    source: 'learnnavi.org',
                  },
                  {
                    title: 'Paul Frommer\'s Blog',
                    desc: "Official blog by Na'vi's creator with language updates and notes",
                    href: 'https://paulfrommer.com',
                    source: 'paulfrommer.com',
                  },
                  {
                    title: "Na'vi Grammar Guide",
                    desc: 'Complete reference for Na\'vi grammar, cases, and infixes',
                    href: 'https://learnnavi.org/navi-grammar/',
                    source: 'learnnavi.org',
                  },
                  {
                    title: "Wikipedia: Na'vi Language",
                    desc: "History and linguistic analysis of Na'vi as a constructed language",
                    href: 'https://en.wikipedia.org/wiki/Na%27vi_language',
                    source: 'wikipedia.org',
                  },
                  {
                    title: "Na'vi Nation Community",
                    desc: 'Forums and discussion for Na\'vi language learners worldwide',
                    href: 'https://forum.learnnavi.org',
                    source: 'forum.learnnavi.org',
                  },
                ].map(({ title, desc, href, source }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-3 rounded-xl border bg-muted/10 hover:border-primary/30 hover:bg-muted/20 transition-colors">
                    <ExternalLink className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold group-hover:text-primary transition-colors leading-tight">{title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                      <p className="text-[10px] text-muted-foreground/60 mt-1">{source}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-5">

            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">About Na&apos;vi</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {[
                  { label: 'Created by', value: 'Paul Frommer' },
                  { label: 'First appeared', value: 'Avatar (2009)' },
                  { label: 'Vocabulary', value: '2,000+ words' },
                  { label: 'Type', value: 'Constructed language (conlang)' },
                  { label: 'Alignment', value: 'Tripartite' },
                  { label: 'Word order', value: 'Free (SOV preferred)' },
                  { label: 'Spoken by', value: "Na'vi of Pandora" },
                ].map(({ label, value }) => (
                  <li key={label} className="flex justify-between gap-2">
                    <span>{label}</span>
                    <span className="font-medium text-foreground text-right">{value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Essential Na&apos;vi Words</h3>
              <div className="space-y-1.5">
                {[
                  { en: 'Hello',         navi: 'Kaltxì' },
                  { en: 'I see you',     navi: 'Kameie' },
                  { en: 'Thank you',     navi: 'Irayo' },
                  { en: 'Goodbye',       navi: 'Kìyevame' },
                  { en: 'Yes',           navi: 'Srane' },
                  { en: 'No',            navi: 'Kehe' },
                  { en: 'Eywa',          navi: 'Eywa' },
                  { en: 'Warrior',       navi: 'Tsamsiyu' },
                  { en: 'Home tree',     navi: 'Kelutral' },
                  { en: 'Forest',        navi: "Na'rìng" },
                  { en: 'Sky',           navi: 'Taw' },
                  { en: 'Bond (neural)', navi: 'Tsaheylu' },
                ].map(({ en, navi }) => (
                  <div key={en} className="flex justify-between text-xs py-0.5 border-b border-muted/20 last:border-0">
                    <span className="text-muted-foreground">{en}</span>
                    <span className="font-semibold text-teal-600 dark:text-teal-400">{navi}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Authoritative Resources</h3>
              <ul className="space-y-2">
                {[
                  { name: 'learnnavi.org', href: 'https://learnnavi.org' },
                  { name: "Paul Frommer's Blog", href: 'https://paulfrommer.com' },
                  { name: "Na'vi Vocabulary DB", href: 'https://learnnavi.org/navi-vocabulary/' },
                  { name: "Wikipedia: Na'vi", href: "https://en.wikipedia.org/wiki/Na%27vi_language" },
                ].map(({ name, href }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                      <ExternalLink className="w-3 h-3 shrink-0" />
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Similar Translators</h3>
              <ul className="space-y-1.5">
                {[
                  { name: 'Aurebesh Translator', path: '/tools/aurebesh-translator' },
                  { name: 'Al Bhed Translator', path: '/tools/al-bhed-translator' },
                  { name: 'Gibberish Translator', path: '/tools/gibberish-translator' },
                  { name: 'Morse Code Translator', path: '/tools/morse-code-translator' },
                  { name: 'Emoji Translator', path: '/tools/emoji-translator' },
                ].map(({ name, path }) => (
                  <li key={path}>
                    <Link href={path} className="flex items-center gap-1.5 text-xs text-primary hover:underline">
                      <ArrowRight className="w-3 h-3" />
                      {name}
                    </Link>
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
