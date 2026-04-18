import { Metadata } from 'next'
import { Check, ArrowRight, Wrench } from 'lucide-react'
import { StandardGalacticAlphabetTool } from '@/components/tools/standard-galactic-alphabet-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Standard Galactic Alphabet Translator — SGA Encoder & Decoder (Minecraft)',
  description: 'Free Standard Galactic Alphabet (SGA) translator — convert English to Minecraft enchanting table language and back. Full 26-letter SGA chart, character-by-character breakdown, copy & paste. No sign-up.',
  keywords: [
    // Primary
    'standard galactic alphabet',
    'standard galactic alphabet translator',
    'SGA translator',
    'minecraft enchanting language',
    'minecraft enchantment table language',
    // Encode / decode intent
    'standard galactic alphabet decoder',
    'standard galactic alphabet encoder',
    'english to standard galactic alphabet',
    'SGA to english',
    'minecraft language translator',
    'enchanting table language translator',
    'minecraft enchanting translator',
    // Variations
    'galactic alphabet translator',
    'SGA font',
    'SGA converter',
    'standard galactic font',
    'commander keen alphabet',
    'minecraft secret language',
    'enchantment language decoder',
    'galactic text generator',
    // Informational
    'what is standard galactic alphabet',
    'minecraft enchanting table font',
    'galactic alphabet chart',
    'SGA alphabet',
    'standard galactic alphabet chart',
    'commander keen font translator',
    'galactic alphabet copy paste',
    'SGA copy paste',
  ],
  openGraph: {
    title: 'Standard Galactic Alphabet Translator — Minecraft SGA Encoder & Decoder',
    description: 'Translate English to the Standard Galactic Alphabet (Minecraft enchanting language) and back. Full 26-letter chart, character breakdown, instant copy. Free.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Standard Galactic Alphabet Translator — SGA & Minecraft Enchanting',
    description: 'Encode & decode the Standard Galactic Alphabet used in Minecraft enchanting tables. Full chart, copy & paste. Free.',
  },
  alternates: {
    canonical: 'https://nagritranslate.com/tools/standard-galactic-alphabet',
  },
}

// A-Z → SGA (must match the tool component exactly)
const SGA: Record<string, string> = {
  a:'ᔑ', b:'ʖ',  c:'ᓵ', d:'↸', e:'ᒷ', f:'⎓', g:'⊣', h:'⍑',
  i:'╎', j:'⋮',  k:'ꖌ', l:'ꖎ', m:'ᒲ', n:'リ', o:'𝙹', p:'¡',
  q:'ᑑ', r:'∷',  s:'ᓭ', t:'ℸ', u:'⚍', v:'⍊', w:'∴', x:'‖',
  y:'⨅', z:'⊓',
}

const toSGA = (s: string) => [...s].map(c => SGA[c.toLowerCase()] ?? c).join('')

const PREVIEW_WORDS = [
  { en: 'MINECRAFT',  sga: toSGA('minecraft')  },
  { en: 'ENCHANTED',  sga: toSGA('enchanted')  },
  { en: 'GALACTIC',   sga: toSGA('galactic')   },
  { en: 'SECRET',     sga: toSGA('secret')     },
]

const PLATFORMS = ['Minecraft', 'Discord', 'Twitter / X', 'Instagram', 'Reddit', 'Tumblr', 'WhatsApp', 'Notion']

const RELATED_TOOLS = [
  { name: 'Runic Alphabet Converter',  path: '/tools/runic-alphabet-converter',  icon: 'ᚠ'  },
  { name: 'Aurebesh Translator',        path: '/tools/aurebesh-translator',        icon: '𝔄'  },
  { name: 'Morse Code Translator',      path: '/tools/morse-code-translator',      icon: '•—' },
  { name: 'Glitch Text Generator',      path: '/tools/glitch-text-generator',      icon: '̸'   },
  { name: 'Fancy Text Generator',       path: '/tools/fancy-text-generator',       icon: '✨' },
  { name: 'Emoji Buttons',              path: '/tools/emoji-buttons',              icon: '😊' },
]

const ALPHABET_TABLE = Object.entries(SGA)

export default function StandardGalacticAlphabetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-cyan-500/5 to-violet-500/10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-sm text-emerald-600 dark:text-emerald-400 font-medium mb-6">
            👾 Minecraft Enchanting Language
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
            Standard Galactic Alphabet
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Translate English to the <strong>Standard Galactic Alphabet</strong> — the cipher used in
            Minecraft enchanting tables and Commander Keen. Full 26-letter chart, live character breakdown,
            and instant copy &amp; paste.
          </p>

          {/* Live SGA word previews */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 mb-8">
            {PREVIEW_WORDS.map(p => (
              <div key={p.en} className="px-4 py-2.5 rounded-xl bg-background/80 border shadow-sm backdrop-blur-sm text-left">
                <p className="text-[10px] text-muted-foreground mb-0.5 uppercase tracking-wide">{p.en}</p>
                <p className="text-xl font-medium leading-snug tracking-wider">{p.sga}</p>
              </div>
            ))}
          </div>

          {/* Platform tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {PLATFORMS.map(p => (
              <span key={p} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-background/60 border text-muted-foreground">
                <Check className="w-3 h-3 text-emerald-500" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content ─────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-8 w-full overflow-x-hidden">
        <div className="grid lg:grid-cols-3 gap-8 w-full">

          {/* ── Tool + content ── */}
          <div className="lg:col-span-2 space-y-8 min-w-0">

            {/* Tool */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm">
              <StandardGalacticAlphabetTool />
            </div>

            {/* Full Alphabet Chart */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl border border-emerald-500/10">
              <h2 className="text-xl md:text-2xl font-bold mb-2">Full SGA Alphabet Chart</h2>
              <p className="text-sm text-muted-foreground mb-6">
                All 26 letters of the Standard Galactic Alphabet alongside their Latin equivalents.
              </p>
              <div className="grid grid-cols-6 sm:grid-cols-9 md:grid-cols-13 gap-2">
                {ALPHABET_TABLE.map(([latin, sga]) => (
                  <div
                    key={latin}
                    className="flex flex-col items-center p-2 sm:p-3 rounded-xl border bg-background/80"
                  >
                    <span className="text-2xl sm:text-3xl leading-none">{sga}</span>
                    <span className="text-xs text-muted-foreground mt-1.5 font-bold uppercase">{latin}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Use */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Use the SGA Translator</h2>
              <div className="space-y-4">
                {[
                  ['1', 'Choose a Direction', 'Select "English → SGA" to encode your text into the galactic script, or "SGA → English" to decode galactic characters back into readable text.'],
                  ['2', 'Type or Paste Text', 'In encode mode, type normally. In decode mode, paste SGA characters you found — for example, text copied from a Minecraft screenshot or another tool.'],
                  ['3', 'Read the Breakdown', 'The character-by-character breakdown panel shows each letter paired with its SGA symbol so you can see exactly how the cipher works.'],
                  ['4', 'Copy & Use Anywhere', 'Hit Copy and paste your SGA text into Discord messages, Reddit posts, Minecraft signs (as a note), Twitter bios, or anywhere Unicode is supported.'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {num}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold mb-1">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is the Standard Galactic Alphabet */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What Is the Standard Galactic Alphabet?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The <strong>Standard Galactic Alphabet (SGA)</strong> is a constructed writing system created by
                American game designer <strong>Tom Hall</strong> for the <em>Commander Keen</em> series of
                platform games (1990–2001). It is a simple one-to-one substitution cipher — each of the
                26 letters of the Latin alphabet is replaced with a unique alien-looking symbol.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                SGA gained massive mainstream recognition when <strong>Minecraft</strong> adopted it in
                October 2011 as the text displayed on the enchanting table interface. When a player
                approaches an enchanting table, the floating particles and enchantment option names appear
                in SGA — adding an air of mystery to the enchanting mechanic. The exact phrases displayed
                are random, but every word is real SGA text.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Because SGA is a pure substitution cipher with no grammar changes, translation is completely
                mechanical: find the symbol, read the letter. Our translator does this instantly for any
                text in either direction.
              </p>
            </div>

            {/* SGA in Minecraft */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-emerald-500/5 to-green-500/5 rounded-2xl border border-emerald-500/10">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">SGA in Minecraft — The Enchanting Table</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                In Minecraft's enchanting table UI, the three available enchantments are shown in SGA with
                random words — creating the impression of an arcane, undecipherable language. Players who
                learn the SGA can actually read these words, though they are randomised and don't predict
                the actual enchantment applied.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: '📖', title: 'Enchanting Table Signs', desc: 'The text floating around the enchanting table is genuine SGA — try decoding it with this tool.' },
                  { icon: '🗿', title: 'In-Game Signs', desc: 'Players sometimes write secret messages on signs in SGA. Use this tool to encode yours.' },
                  { icon: '🏆', title: 'Achievements & Easter Eggs', desc: 'Various Minecraft textures and splash screen texts reference Commander Keen and SGA.' },
                  { icon: '🎮', title: 'Commander Keen Origin', desc: 'In the original 1990s games, SGA appeared on alien signs and displays throughout the levels.' },
                ].map(item => (
                  <div key={item.title} className="flex gap-3 p-3.5 bg-background/60 border rounded-xl">
                    <span className="text-xl shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to use SGA */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Where to Use SGA Text</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '🎮', title: 'Minecraft Builds & Signs', desc: 'Encode your base name, a welcome message, or hidden lore on in-game signs. Other players who know SGA can decipher it.' },
                  { icon: '💬', title: 'Discord Messages & Bios', desc: 'Send secret messages in SGA to fellow Minecraft fans. Discord supports Unicode so every SGA character pastes perfectly.' },
                  { icon: '🐦', title: 'Twitter / X Bios', desc: 'An SGA bio is an instant signal to the Minecraft community. Works in username fields, bios, and tweets.' },
                  { icon: '📱', title: 'Reddit & Forums', desc: 'Hide spoilers or Easter eggs in SGA in Minecraft subreddits, fan wikis, or gaming forums.' },
                  { icon: '🖼️', title: 'Fan Art & Posters', desc: 'Add authentic SGA text to Minecraft fan art, server banners, or digital posters for an enchanted aesthetic.' },
                  { icon: '🎯', title: 'Escape Rooms & Puzzles', desc: 'Use SGA as a cipher layer in puzzle hunts, online escape rooms, or ARG (alternate reality game) challenges.' },
                  { icon: '👕', title: 'Merch & Designs', desc: 'Encode names or phrases in SGA for Minecraft-themed t-shirt designs, mugs, or personalised gifts.' },
                  { icon: '📝', title: 'Journals & Notes', desc: 'Use SGA as a personal shorthand or diary cipher — a lightweight code that\'s fun to learn and read.' },
                ].map(item => (
                  <div key={item.title} className="p-4 bg-primary/5 rounded-xl flex gap-3">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works technically */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">How the SGA Cipher Works</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                SGA is a <strong>monoalphabetic substitution cipher</strong> — one of the simplest forms of
                cryptography. Every letter always maps to the same symbol; there are no positional or
                contextual rules. This makes it easy to learn but also easy to decode with frequency analysis
                once you know a few common letters.
              </p>
              <div className="grid sm:grid-cols-3 gap-3 mb-4">
                {[
                  { label: 'Type', value: 'Substitution Cipher' },
                  { label: 'Letters', value: '26 (A–Z only)' },
                  { label: 'Direction', value: 'Bidirectional' },
                  { label: 'Numbers', value: 'Unchanged' },
                  { label: 'Case', value: 'Case-insensitive' },
                  { label: 'Punctuation', value: 'Passed through' },
                ].map(item => (
                  <div key={item.label} className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide mb-0.5">{item.label}</p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Numbers, spaces, and punctuation are not part of the SGA standard and are left unchanged by
                our translator. Upper and lowercase letters both produce the same SGA glyph — the cipher has
                no case distinction.
              </p>
            </div>

            {/* FAQ */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Is the Standard Galactic Alphabet a real language?',
                    a: 'It\'s a writing system but not a language — it\'s a cipher. SGA uses unique symbols for each letter but has no grammar, vocabulary, or pronunciation of its own. It\'s English written in an alien-looking script.',
                  },
                  {
                    q: 'Can I actually read the Minecraft enchanting table text with this?',
                    a: 'Yes and no. The words you see on the enchanting table are real SGA text, but they\'re random words taken from a hidden word list — they don\'t tell you what enchantment you\'ll get. Still, you can decode them with this tool for fun.',
                  },
                  {
                    q: 'Will SGA characters copy-paste correctly into Minecraft chat?',
                    a: 'Minecraft\'s in-game chat doesn\'t render SGA glyphs from external text (it uses its own font). However, you can paste SGA text into Discord, Reddit, Twitter, and any platform that renders Unicode text — it will show the correct characters there.',
                  },
                  {
                    q: 'Are these the exact same characters Minecraft uses?',
                    a: 'Minecraft uses its own internal SGA font file (ascii_sga.png) with private codepoints. Our tool uses a widely-accepted Unicode approximation — visually similar characters from existing Unicode blocks — so the output is copy-pasteable everywhere without needing a special font.',
                  },
                  {
                    q: 'Who invented the Standard Galactic Alphabet?',
                    a: 'Tom Hall created SGA for the Commander Keen game series at id Software, starting with Commander Keen in Invasion of the Vorticons (1990). It appeared on alien signs and displays throughout the games.',
                  },
                  {
                    q: 'Can I decode any SGA text, not just English?',
                    a: 'SGA is purely a cipher over the 26 Latin letters. Our decoder will transliterate any SGA characters back to their Latin equivalents regardless of what language the original text was in, as long as it used Latin letters.',
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border-b last:border-0 pb-4 last:pb-0">
                    <p className="font-semibold text-sm mb-1.5">{q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-start-3 space-y-6 min-w-0">

            {/* Related Tools */}
            <div className="p-5 rounded-2xl border bg-gradient-to-br from-muted/30 to-muted/10">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4" /> Related Tools
              </h3>
              <div className="space-y-1.5">
                {RELATED_TOOLS.map(t => (
                  <Link
                    key={t.path}
                    href={t.path}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/60 transition-colors group text-sm"
                  >
                    <span className="text-base shrink-0 w-5 text-center">{t.icon}</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors truncate">{t.name}</span>
                    <ArrowRight className="w-3 h-3 ml-auto shrink-0 text-muted-foreground/40 group-hover:text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick SGA reference */}
            <div className="p-5 rounded-2xl border bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border-emerald-500/10">
              <h3 className="font-bold text-sm mb-3">👾 SGA Quick Reference</h3>
              <div className="space-y-1 font-mono text-sm">
                {[
                  ['A–E', `ᔑ ʖ ᓵ ↸ ᒷ`],
                  ['F–J', `⎓ ⊣ ⍑ ╎ ⋮`],
                  ['K–O', `ꖌ ꖎ ᒲ リ 𝙹`],
                  ['P–T', `¡ ᑑ ∷ ᓭ ℸ`],
                  ['U–Z', `⚍ ⍊ ∴ ‖ ⨅ ⊓`],
                ].map(([range, chars]) => (
                  <div key={range} className="flex items-center justify-between gap-2 py-1 border-b last:border-0">
                    <span className="text-[10px] text-muted-foreground uppercase font-sans font-semibold shrink-0">{range}</span>
                    <span className="text-base tracking-widest text-right">{chars}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="p-5 rounded-2xl border bg-gradient-to-br from-muted/30 to-muted/10">
              <h3 className="font-bold text-sm mb-3">🎮 SGA Fun Facts</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {[
                  'SGA was created by Tom Hall in 1990 for Commander Keen',
                  'Minecraft added it to the enchanting table in October 2011',
                  'Every word on the enchanting table is a real English word in SGA',
                  'SGA has no numbers — digits pass through unchanged',
                  'It\'s a monoalphabetic cipher, so A always = ᔑ everywhere',
                  'The enchanting table text is randomly chosen from a hidden word list',
                  'CSUR officially encoded SGA at U+EB40–U+EB59 in 2019',
                  'GNU Unifont includes SGA glyphs in its CSUR extension',
                ].map(fact => (
                  <li key={fact} className="flex gap-2">
                    <span className="text-emerald-500 shrink-0">✦</span>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>

            {/* Sample phrases */}
            <div className="p-5 rounded-2xl border bg-gradient-to-br from-muted/30 to-muted/10">
              <h3 className="font-bold text-sm mb-3">✨ Sample Phrases in SGA</h3>
              <div className="space-y-3">
                {[
                  { en: 'Hello World',   sga: toSGA('hello world')   },
                  { en: 'Enchanted',     sga: toSGA('enchanted')     },
                  { en: 'Creeper',       sga: toSGA('creeper')       },
                  { en: 'Nether',        sga: toSGA('nether')        },
                  { en: 'Dragon',        sga: toSGA('dragon')        },
                ].map(p => (
                  <div key={p.en} className="space-y-0.5">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide">{p.en}</p>
                    <p className="text-lg font-medium tracking-wide break-all">{p.sga}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
