import { Metadata } from 'next'
import { Check, ArrowRight } from 'lucide-react'
import { RunicAlphabetConverterTool } from '@/components/tools/runic-alphabet-converter-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Runic Alphabet Converter — Rune Translator, Elder Futhark & Viking Runes',
  description: 'Free runic alphabet converter — translate English to Elder Futhark, Younger Futhark (Viking runes), and Anglo-Saxon Futhorc. Rune translator with full alphabet table, meanings, and copy-paste output. No sign-up.',
  keywords: [
    // Primary
    'runic alphabet converter',
    'rune translator',
    'runic translator',
    // Futhark specific
    'elder futhark translator',
    'elder futhark converter',
    'younger futhark translator',
    'futhark alphabet converter',
    'futhark translator',
    // Viking / Norse
    'viking runes translator',
    'norse rune translator',
    'viking alphabet converter',
    'old norse rune translator',
    'viking rune generator',
    'norse runes converter',
    // Anglo-Saxon
    'anglo saxon rune translator',
    'futhorc translator',
    // Action intent
    'english to runes translator',
    'text to runes converter',
    'runes to english translator',
    'runic text generator',
    'runic writing converter',
    'convert text to runes',
    'translate to runes',
    // Informational
    'runic alphabet meanings',
    'rune alphabet',
    'elder futhark alphabet',
    'runic symbols converter',
    'ancient rune converter',
    'runic font converter',
    'rune name generator',
  ],
  openGraph: {
    title: 'Runic Alphabet Converter — Elder Futhark, Viking & Anglo-Saxon Runes',
    description: 'Convert English text to Elder Futhark, Younger Futhark, or Anglo-Saxon Futhorc runes instantly. Free rune translator with full alphabet and meanings.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Runic Alphabet Converter — Rune Translator Free',
    description: 'Translate text to Elder Futhark, Viking runes, and Anglo-Saxon Futhorc. Full rune alphabet with meanings. Free, instant, no sign-up.',
  },
  alternates: {
    canonical: 'https://nagritranslate.com/tools/runic-alphabet-converter',
  },
}

// ─── Static data ──────────────────────────────────────────────────────────────

const PLATFORMS = ['Instagram', 'Discord', 'Twitter / X', 'Facebook', 'Reddit', 'Tattoos', 'Game usernames', 'Jewelry']

const RUNE_SYSTEMS = [
  {
    id: 'elder-futhark',
    name: 'Elder Futhark',
    runes: 24,
    period: 'c. 150–800 AD',
    region: 'Germanic Europe',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-500/10',
    preview: 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃ',
    desc: 'The oldest and most widely used runic alphabet. Used by Germanic peoples across Europe for inscriptions on weapons, jewelry, and runestones. The 24 runes are divided into three groups called aettir.',
  },
  {
    id: 'younger-futhark',
    name: 'Younger Futhark',
    runes: 16,
    period: 'c. 800–1100 AD',
    region: 'Scandinavia (Viking Age)',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    preview: 'ᚠᚢᚦᚬᚱᚴᚼᚾᛁᛅᛋᛏᛒᛘᛚᛦ',
    desc: 'Paradoxically, the Younger Futhark had fewer runes (16) than its predecessor despite Old Norse having more phonemes. This forced many sounds to share runes. Used heavily on Viking Age runestones and inscriptions across Scandinavia.',
  },
  {
    id: 'anglo-saxon',
    name: 'Anglo-Saxon Futhorc',
    runes: 28,
    period: 'c. 400–1100 AD',
    region: 'Anglo-Saxon England',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    preview: 'ᚠᚢᚦᚩᚱᚳᚷᚹᚻᚾᛁᛄᛈᛉᛋᛏ',
    desc: 'The extended English runic alphabet, derived from Elder Futhark with additional runes to represent sounds unique to Old English. Found in manuscripts, inscriptions, and the famous Ruthwell Cross. Contains runes for sounds like Æ, Œ, EA, and IO.',
  },
]

const FAMOUS_INSCRIPTIONS = [
  {
    name: 'Jelling Stones',
    runes: 'ᚺᛅᚱᛅᛚᛏᚱ',
    location: 'Denmark',
    date: 'c. 965 AD',
    desc: 'Raised by King Harald Bluetooth — the "birth certificate of Denmark." Some of the most famous Viking Age runestones.',
  },
  {
    name: 'Ruthwell Cross',
    runes: 'ᛰᚩᚾ',
    location: 'Scotland',
    date: 'c. 700 AD',
    desc: 'An Anglo-Saxon stone cross with Futhorc runes bearing an excerpt from the Old English poem "The Dream of the Rood."',
  },
  {
    name: 'Rok Runestone',
    runes: 'ᚱᚬᚴ',
    location: 'Sweden',
    date: 'c. 800 AD',
    desc: 'The runestone with the most runes (over 700) ever found. Written in Younger Futhark, it contains poetry, mythology, and riddles.',
  },
  {
    name: 'Golden Horns of Gallehus',
    runes: 'ᛖᚲ',
    location: 'Denmark',
    date: 'c. 400 AD',
    desc: 'Bear one of the oldest known Elder Futhark inscriptions: "I, Hlewagastiz of Holt, made the horn."',
  },
]

const ELDER_FUTHARK_AETTIR = [
  {
    name: "Freyr's Aett",
    runes: [
      { r: 'ᚠ', n: 'Fehu', m: 'Cattle, wealth' },
      { r: 'ᚢ', n: 'Uruz', m: 'Aurochs, strength' },
      { r: 'ᚦ', n: 'Thurisaz', m: 'Giant, thorn' },
      { r: 'ᚨ', n: 'Ansuz', m: 'God, mouth' },
      { r: 'ᚱ', n: 'Raidho', m: 'Ride, journey' },
      { r: 'ᚲ', n: 'Kaunan', m: 'Torch, fire' },
      { r: 'ᚷ', n: 'Gebo', m: 'Gift' },
      { r: 'ᚹ', n: 'Wunjo', m: 'Joy, glory' },
    ],
  },
  {
    name: "Hagal's Aett",
    runes: [
      { r: 'ᚺ', n: 'Hagalaz', m: 'Hail' },
      { r: 'ᚾ', n: 'Naudiz', m: 'Need, necessity' },
      { r: 'ᛁ', n: 'Isaz', m: 'Ice, stillness' },
      { r: 'ᛃ', n: 'Jera', m: 'Year, harvest' },
      { r: 'ᛇ', n: 'Eihwaz', m: 'Yew tree' },
      { r: 'ᛈ', n: 'Pertho', m: 'Mystery, fate' },
      { r: 'ᛉ', n: 'Algiz', m: 'Elk, protection' },
      { r: 'ᛊ', n: 'Sowilo', m: 'Sun, victory' },
    ],
  },
  {
    name: "Tyr's Aett",
    runes: [
      { r: 'ᛏ', n: 'Tiwaz', m: 'Tyr, honor' },
      { r: 'ᛒ', n: 'Berkanan', m: 'Birch, growth' },
      { r: 'ᛖ', n: 'Ehwaz', m: 'Horse, trust' },
      { r: 'ᛗ', n: 'Mannaz', m: 'Man, humanity' },
      { r: 'ᛚ', n: 'Laguz', m: 'Lake, water' },
      { r: 'ᛜ', n: 'Ingwaz', m: 'Ing, fertility' },
      { r: 'ᛞ', n: 'Dagaz', m: 'Day, dawn' },
      { r: 'ᛟ', n: 'Othalan', m: 'Heritage, home' },
    ],
  },
]

export default function RunicAlphabetConverterPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/8 via-orange-500/5 to-red-500/8 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-6 sm:py-10 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-600 dark:text-amber-400 font-medium mb-4 sm:mb-6 max-w-full">
            <span className="text-sm sm:text-base leading-none shrink-0">ᚠᚢᚦᚨᚱᚲ</span>
            <span className="hidden sm:inline truncate">Elder Futhark · Younger Futhark · Futhorc</span>
            <span className="sm:hidden">3 Runic Alphabets</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Runic Alphabet Converter
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Free <strong>runic alphabet converter</strong> — translate English text to
            Elder Futhark, Younger Futhark (Viking runes), and Anglo-Saxon Futhorc.
            Full rune alphabet with names and meanings. Copy and paste anywhere. No sign-up.
          </p>

          {/* Live previews */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            {[
              { label: 'Elder Futhark',      sample: 'ᚺᛖᛚᛚᛟ' },
              { label: 'Younger Futhark',    sample: 'ᚼᛁᛚᛚᚢ' },
              { label: 'Anglo-Saxon',        sample: 'ᚻᛖᛚᛚᚩ' },
              { label: 'Runic meaning',      sample: 'ᛟᛞᛁᚾ' },
            ].map(p => (
              <div key={p.label} className="px-3 sm:px-4 py-2 rounded-xl bg-background/80 border shadow-sm backdrop-blur-sm">
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5">{p.label}</p>
                <p className="text-base sm:text-xl tracking-wide sm:tracking-widest">{p.sample}</p>
              </div>
            ))}
          </div>

          {/* Platform tags */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {PLATFORMS.map(p => (
              <span key={p} className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-background/60 border text-muted-foreground">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-6 sm:py-8 w-full overflow-x-hidden">
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3 w-full">

          {/* ── Tool ── */}
          <div className="lg:col-span-2 min-w-0">
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm overflow-hidden">
              <RunicAlphabetConverterTool />
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-start-3 lg:row-start-1 lg:row-span-2 space-y-4 sm:space-y-6 lg:sticky lg:top-4 lg:self-start min-w-0">

            {/* Related tools */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools/fancy-text-generator',       label: 'Fancy Text Generator',       desc: 'Bold, script & gothic styles' },
                  { href: '/tools/aesthetic-fonts-generator',   label: 'Aesthetic Fonts Generator',   desc: '50+ lovely font styles' },
                  { href: '/tools/underline-text-generator',    label: 'Underline Text Generator',    desc: '28 underline styles' },
                  { href: '/tools/glitch-text-generator',       label: 'Glitch Text Generator',       desc: 'Zalgo & cursed text' },
                  { href: '/tools/cursive-text-generator',      label: 'Cursive Text Generator',      desc: 'Handwriting & script' },
                  { href: '/tools/wolf-name-generator',         label: 'Wolf Name Generator',         desc: '180+ wolf name styles' },
                  { href: '/tools',                             label: 'View All Tools',              desc: 'Browse all free text tools' },
                ].map(t => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{t.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{t.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* 3 rune systems */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl border border-amber-500/20">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">3 Runic Alphabets</h3>
              <div className="space-y-3">
                {RUNE_SYSTEMS.map(sys => (
                  <div key={sys.id} className={`p-3 rounded-xl ${sys.bg}`}>
                    <div className="flex items-center justify-between mb-1">
                      <p className={`font-bold text-sm ${sys.color}`}>{sys.name}</p>
                      <span className={`text-xs ${sys.color} font-medium`}>{sys.runes} runes</span>
                    </div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">{sys.period} · {sys.region}</p>
                    <p className="text-xs sm:text-sm tracking-normal mt-1.5 leading-relaxed break-all">{sys.preview}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Famous inscriptions preview */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3">Famous Runic Inscriptions</h3>
              <div className="space-y-3">
                {FAMOUS_INSCRIPTIONS.map(ins => (
                  <div key={ins.name} className="p-2.5 rounded-lg bg-muted/30">
                    <div className="flex items-start justify-between gap-2 mb-0.5">
                      <p className="font-semibold text-xs">{ins.name}</p>
                      <span className="text-[9px] text-muted-foreground shrink-0">{ins.date}</span>
                    </div>
                    <p className="text-base tracking-wide mb-1 break-all">{ins.runes}</p>
                    <p className="text-[10px] text-muted-foreground">{ins.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key features */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3">Features</h3>
              <ul className="space-y-1.5 text-xs sm:text-sm">
                {[
                  '3 runic alphabets supported',
                  'Elder Futhark — 24 runes',
                  'Younger Futhark — 16 Viking runes',
                  'Anglo-Saxon Futhorc — 28 runes',
                  'Bidirectional: Latin ↔ Runes',
                  'Full rune name & meaning table',
                  'Click rune to type it',
                  'Instant copy to clipboard',
                  'No sign-up required',
                  '100% free, forever',
                ].map(b => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Content sections ── */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 space-y-6 sm:space-y-8 min-w-0">

            {/* How to use */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">How to Use the Runic Alphabet Converter</h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  ['1', 'Choose Your Runic Alphabet', 'Select Elder Futhark (most popular), Younger Futhark (Viking runes), or Anglo-Saxon Futhorc. Each has different runes and phonetic mappings based on its historical use.'],
                  ['2', 'Type or Paste Latin Text', 'Enter any English word, phrase, or name. The converter handles common sounds automatically — "th" becomes ᚦ (Thurisaz), "ng" becomes ᛜ (Ingwaz), and so on.'],
                  ['3', 'Copy Your Runic Output', 'Click the output box or hit Copy. Runic Unicode characters paste into Instagram, Discord, game usernames, and design software. Use the rune legend to learn what each symbol means.'],
                  ['4', 'Convert Runes Back to Latin', 'Toggle to "Runes → Latin" mode and paste runic characters to decode them back into the Latin alphabet.'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-primary/5 rounded-xl">
                    <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm">
                      {num}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-sm sm:text-base mb-1">{title}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is runic alphabet */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">What Is the Runic Alphabet?</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                A <strong>runic alphabet</strong> is any of the alphabets used by ancient Germanic peoples of Europe and
                Scandinavia from roughly the 1st century AD until the late Middle Ages.
                The word <em>rune</em> comes from the Proto-Germanic <em>*rūnō</em>, meaning "secret" or "whisper" —
                reflecting their early use in magic, divination, and sacred inscription.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                Unlike the Roman alphabet, runes were designed to be <strong>carved</strong> — their angular, straight-lined
                shapes avoid horizontal strokes that would follow the wood grain and be invisible. Every rune had a name
                and a meaning rooted in the Norse and Germanic world: <em>Fehu</em> (ᚠ) meant cattle and wealth,
                <em> Tiwaz</em> (ᛏ) honored the war god Tyr, <em>Laguz</em> (ᛚ) meant water or lake.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Our <strong>runic alphabet converter</strong> supports three major runic systems: the 24-rune
                Elder Futhark (the oldest and most studied), the 16-rune Younger Futhark used by Vikings,
                and the extended 28-rune Anglo-Saxon Futhorc used in early medieval England.
              </p>
            </div>

            {/* Three rune systems in depth */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">The Three Runic Alphabets Explained</h2>
              <div className="space-y-4 sm:space-y-6">
                {RUNE_SYSTEMS.map(sys => (
                  <div key={sys.id} className={`p-4 sm:p-5 rounded-2xl border ${sys.bg}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className={`text-base sm:text-lg font-bold ${sys.color}`}>{sys.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full bg-background/60 font-medium ${sys.color}`}>
                        {sys.runes} runes · {sys.period}
                      </span>
                    </div>
                    <p className="text-sm sm:text-xl tracking-normal sm:tracking-wider mb-2 leading-loose break-all">{sys.preview}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{sys.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Elder Futhark aettir */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl border border-amber-500/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Elder Futhark: The Three Aettir</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                The 24 Elder Futhark runes are traditionally divided into three groups of eight called
                <em> aettir</em> (plural of <em>ætt</em>, meaning "family" or "group of eight"). Each aett is named
                after a Norse deity associated with its first rune.
              </p>
              <div className="space-y-4 sm:space-y-6">
                {ELDER_FUTHARK_AETTIR.map(aett => (
                  <div key={aett.name}>
                    <h3 className="font-bold text-sm sm:text-base text-amber-600 dark:text-amber-400 mb-3">{aett.name}</h3>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-1 sm:gap-2">
                      {aett.runes.map(r => (
                        <div key={r.n} className="flex flex-col items-center gap-0.5 p-1.5 sm:p-2.5 rounded-xl bg-background/60 border text-center">
                          <span className="text-xl sm:text-3xl leading-none">{r.r}</span>
                          <span className="text-[8px] sm:text-[10px] font-semibold leading-tight text-center w-full truncate">{r.n}</span>
                          <span className="text-[7px] sm:text-[9px] text-muted-foreground hidden sm:block leading-tight">{r.m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Famous inscriptions */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Famous Runic Inscriptions in History</h2>
              <div className="space-y-3 sm:space-y-4">
                {FAMOUS_INSCRIPTIONS.map(ins => (
                  <div key={ins.name} className="p-3 sm:p-4 bg-primary/5 rounded-xl">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-sm sm:text-base">{ins.name}</h3>
                      <span className="text-xs text-muted-foreground">{ins.location} · {ins.date}</span>
                    </div>
                    <p className="text-base sm:text-xl tracking-wide sm:tracking-wider mb-2 leading-relaxed break-all">{ins.runes}…</p>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{ins.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Where People Use Runic Text Today</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: '⚔️', title: 'Game Usernames & Characters', desc: 'Fantasy MMORPGs, Norse-themed games like Valheim, God of War, and AC Valhalla — runic usernames stand out instantly in leaderboards and character creation.' },
                  { icon: '🎨', title: 'Tattoos & Body Art', desc: 'One of the most popular uses. Names, mottos, or phrases converted to Elder Futhark make meaningful, historically grounded tattoos.' },
                  { icon: '💍', title: 'Jewelry & Engraving', desc: 'Rings, pendants, and bracelets engraved with runic names or meaningful words. Elder Futhark is the most popular choice for jewelry.' },
                  { icon: '📱', title: 'Social Media Usernames', desc: 'Runic characters in Instagram bios, Discord usernames, and Twitter handles create an instantly recognizable aesthetic.' },
                  { icon: '🎭', title: 'LARP & Cosplay', desc: 'Historical re-enactors, Viking LARP groups, and cosplayers use accurate runic inscriptions on props, shields, and costumes.' },
                  { icon: '📖', title: 'Creative Writing & World-Building', desc: 'Authors and game designers building fantasy worlds use runic alphabets for in-universe scripts, maps, and lore documents.' },
                  { icon: '🔮', title: 'Rune Reading & Divination', desc: 'Many practitioners of Norse spirituality use runic alphabets for meditation, intention-setting, and traditional rune casting.' },
                  { icon: '🏛️', title: 'Academic & Historical Study', desc: 'Runology is a serious academic discipline. Students of Old Norse, Old English, and Germanic languages use rune converters to study inscriptions.' },
                ].map(item => (
                  <div key={item.title} className="p-3 sm:p-4 bg-primary/5 rounded-xl flex gap-3">
                    <span className="text-xl sm:text-2xl shrink-0">{item.icon}</span>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-xs sm:text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion notes — digraphs & phonetics */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-amber-500/5 to-orange-500/5 rounded-2xl border border-amber-500/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Phonetic Conversion Notes</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                Runic alphabets were designed for specific ancient languages — not modern English. Our converter
                uses the most widely accepted phonetic mappings, but some notes are important:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { heading: 'Digraphs', body: '"TH" → ᚦ (Thurisaz), "NG" → ᛜ (Ingwaz), "AE" → ᛇ. These two-letter sounds have dedicated runes and are automatically detected.' },
                  { heading: 'C, K, Q', body: 'All map to the Kaunan rune ᚲ (Elder Futhark) or Kaun ᚴ (Younger Futhark), as all three represent the same /k/ sound.' },
                  { heading: 'V and W', body: 'Both map to Wunjo ᚹ, as Proto-Germanic did not distinguish between /v/ and /w/. Younger Futhark uses the Ur rune ᚢ for both.' },
                  { heading: 'No X or Q runes', body: 'X is rendered as the two-rune combination ᚲᛊ (KS). Q is treated as K. Some sounds simply had no runic equivalent.' },
                  { heading: 'Younger Futhark merging', body: 'Viking Age runes merged many sounds — D and T share ᛏ, B and P share ᛒ, G and K share ᚴ. This is historically accurate.' },
                  { heading: 'Numbers & punctuation', body: 'Runes had no number system. Digits and punctuation pass through unconverted, as in most historical runic inscriptions.' },
                ].map(item => (
                  <div key={item.heading} className="p-3 sm:p-3.5 rounded-xl bg-background/60 border min-w-0">
                    <p className="font-semibold text-xs sm:text-sm mb-1 text-amber-600 dark:text-amber-400">{item.heading}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is a runic alphabet converter?',
                    a: 'A runic alphabet converter translates Latin (Roman) letters into their runic equivalents based on phonetic mappings from ancient Germanic and Norse scripts. Our converter supports Elder Futhark, Younger Futhark, and Anglo-Saxon Futhorc — the three most historically significant runic alphabets.',
                  },
                  {
                    q: 'Which runic alphabet should I use?',
                    a: 'Use Elder Futhark for the most popular and widely recognized runic style — ideal for tattoos, jewelry, and general use. Use Younger Futhark for authentic Viking Age Norse inscriptions. Use Anglo-Saxon Futhorc for Old English / early medieval English contexts, or if you want more letters for sounds like Y, AE, and EA.',
                  },
                  {
                    q: 'Can I use runic text on Instagram or Discord?',
                    a: 'Yes. Runic characters are part of the Unicode Runic block (U+16A0–U+16FF), supported by all modern operating systems and browsers. You can copy runic output from our converter and paste it directly into Instagram bios, Discord usernames, Twitter handles, or any Unicode-supporting platform.',
                  },
                  {
                    q: 'Are the runic characters historically accurate?',
                    a: 'The rune-to-letter mappings follow the most widely accepted scholarly phonetic correspondences for each alphabet. However, converting modern English to runes is an inherently imperfect process — runes were designed for ancient languages with different phoneme inventories. The result is a transliteration, not a translation.',
                  },
                  {
                    q: 'What is Elder Futhark?',
                    a: 'Elder Futhark is the oldest form of the runic alphabet, used by Germanic peoples from roughly 150 to 800 AD. It consists of 24 runes arranged in three groups of eight called aettir. The name "Futhark" comes from the first six runes: ᚠ (F), ᚢ (U), ᚦ (TH), ᚨ (A), ᚱ (R), ᚲ (K). It is the most studied and commonly used runic alphabet today.',
                  },
                  {
                    q: 'What is Younger Futhark and how does it differ?',
                    a: 'Younger Futhark is the Viking Age runic alphabet (c. 800–1100 AD), derived from Elder Futhark but reduced to just 16 runes. Despite Old Norse having more sounds than Proto-Germanic, the alphabet was simplified — causing many sounds to share runes. For example, D and T share ᛏ, and B and P share ᛒ.',
                  },
                  {
                    q: 'Can I convert runes back to English?',
                    a: 'Yes. Toggle to "Runes → Latin" mode and paste runic characters. The converter will map each rune back to its Latin phonetic equivalent. Note that because several Latin letters can map to the same rune (e.g., both B and P → ᛒ in Younger Futhark), the reverse conversion is an approximation.',
                  },
                  {
                    q: 'Is this runic alphabet converter free?',
                    a: 'Yes — completely free, no account, no installation. Convert as many words and phrases as you like and copy them instantly.',
                  },
                ].map(item => (
                  <div key={item.q} className="border-b pb-3 sm:pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2">{item.q}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* External links */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-base sm:text-xl font-bold mb-3 sm:mb-4">Further Reading</h2>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  {
                    href: 'https://en.wikipedia.org/wiki/Runic_alphabets',
                    label: 'Runic Alphabets — Wikipedia',
                    desc: 'Comprehensive overview of all major runic scripts, their history, use, and development across Germanic cultures.',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Elder_Futhark',
                    label: 'Elder Futhark — Wikipedia',
                    desc: 'Detailed article on the oldest runic alphabet — its 24 runes, aettir groupings, archaeological finds, and phonetic values.',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Younger_Futhark',
                    label: 'Younger Futhark — Wikipedia',
                    desc: 'The Viking Age runic alphabet — why it shrunk from 24 to 16 runes and how it was used on Scandinavian runestones.',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Anglo-Saxon_runes',
                    label: 'Anglo-Saxon Runes — Wikipedia',
                    desc: 'The Futhorc alphabet used in early medieval England — its extended character set and appearances in manuscripts and inscriptions.',
                  },
                ].map(r => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <span className="text-primary mt-0.5 flex-shrink-0">↗</span>
                      <div>
                        <p className="font-medium text-xs sm:text-sm group-hover:text-primary transition-colors">{r.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                      </div>
                    </a>
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
