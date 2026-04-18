import { Metadata } from 'next'
import { Wrench, ArrowRight, Type, Sparkles, Code2, Wand2 } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Text Tools - Free Online Text Utilities',
  description: 'Collection of free online text tools including word counter, case converter, random word generator, slug generator, URL encoder/decoder, sort and deduplicate, find and replace, remove whitespace, text repeater, text reverser, citation generator, cursive text generator, glitch text generator, fancy text generator, numbers to words, morse code translator, tiny text generator, vaporwave text generator, english to binary, ned flanders translator, emoji translator, and sort text. Easy to use text utilities for everyone.',
  keywords: ['text tools', 'online text tools', 'text utilities', 'free text tools', 'text manipulation', 'word counter', 'case converter', 'random word generator', 'generate random words', 'random words', 'word list generator', 'slug generator', 'url slug generator', 'url encoder', 'url decoder', 'url encode decode', 'percent encoding', 'sort text', 'deduplicate text', 'sort lines', 'find and replace', 'remove whitespace', 'text repeater', 'text reverser', 'citation generator', 'cursive text generator', 'glitch text generator', 'fancy text generator', 'numbers to words', 'number to text', 'convert number to words', 'number converter', 'morse code translator', 'text to morse', 'morse to text', 'morse code audio', 'morse code player', 'learn morse code', 'tiny text generator', 'small text', 'superscript generator', 'subscript generator', 'small caps converter', 'tiny letters', 'mini text', 'vaporwave text generator', 'vaporwave font', 'aesthetic text', 'full width text', 'retro text', '80s text', '90s text', 'vaporwave aesthetic', 'english to binary', 'text to binary', 'binary to text', 'binary converter', 'ascii to binary', 'binary code converter', 'hex to text', 'decimal to binary', 'octal to binary', 'APA citation generator', 'MLA citation generator', 'Chicago citation generator', 'Harvard citation generator', 'book citation', 'webpage citation', 'academic citation', 'sort text', 'alphabetical sort', 'natural sort', 'text sorter', 'sort list', 'sort by length'],
  openGraph: {
    title: 'Text Tools - Free Online Text Utilities',
    description: 'Collection of free online text tools for text manipulation and formatting.',
    type: 'website',
  },
}

const categories = [
  {
    id: 'text-utilities',
    label: 'Text Utilities',
    icon: Type,
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/30',
    description: 'Clean, format, sort and analyse text',
    tools: [
      {
        name: 'Word Counter',
        description: 'Count words, characters, sentences, and paragraphs instantly',
        path: '/tools/word-counter',
        icon: '📊',
        color: 'from-green-500/5 to-green-500/10',
        borderColor: 'border-green-500/20',
      },
      {
        name: 'Case Converter',
        description: 'Convert text to uppercase, lowercase, title case, and more',
        path: '/tools/case-converter',
        icon: '🔠',
        color: 'from-orange-500/5 to-orange-500/10',
        borderColor: 'border-orange-500/20',
      },
      {
        name: 'Find and Replace',
        description: 'Find and replace text with case sensitive and regex options',
        path: '/tools/find-replace',
        icon: '🔍',
        color: 'from-red-500/5 to-red-500/10',
        borderColor: 'border-red-500/20',
      },
      {
        name: 'Remove Whitespace',
        description: 'Clean text, remove extra spaces, line breaks, and tabs',
        path: '/tools/remove-whitespace',
        icon: '🧹',
        color: 'from-pink-500/5 to-pink-500/10',
        borderColor: 'border-pink-500/20',
      },
      {
        name: 'Text Repeater',
        description: 'Repeat text multiple times with customizable separators',
        path: '/tools/text-repeater',
        icon: '🔄',
        color: 'from-blue-500/5 to-blue-500/10',
        borderColor: 'border-blue-500/20',
      },
      {
        name: 'Text Reverser',
        description: 'Reverse text, words, or both instantly',
        path: '/tools/text-reverser',
        icon: '↔️',
        color: 'from-purple-500/5 to-purple-500/10',
        borderColor: 'border-purple-500/20',
      },
      {
        name: 'Sort & Deduplicate',
        description: 'Sort text alphabetically, by length, or numerically while removing duplicates',
        path: '/tools/sort-deduplicate',
        icon: '📋',
        color: 'from-indigo-500/5 to-indigo-500/10',
        borderColor: 'border-indigo-500/20',
      },
      {
        name: 'Sort Text',
        description: 'Sort text alphabetically, naturally, by length, reverse, or shuffle',
        path: '/tools/sort-text',
        icon: '📊',
        color: 'from-pink-500/5 to-pink-500/10',
        borderColor: 'border-pink-500/20',
      },
      {
        name: 'Add Prefix/Suffix',
        description: 'Add prefix and/or suffix to each line of text',
        path: '/tools/add-prefix-suffix',
        icon: '➕',
        color: 'from-teal-500/5 to-teal-500/10',
        borderColor: 'border-teal-500/20',
      },
      {
        name: 'Citation Generator',
        description: 'Generate citations in APA, MLA, Chicago, and Harvard styles instantly',
        path: '/tools/citation-generator',
        icon: '📝',
        color: 'from-emerald-500/5 to-emerald-500/10',
        borderColor: 'border-emerald-500/20',
      },
      {
        name: 'Slug Generator',
        description: 'Create URL-friendly slugs from text with custom separators',
        path: '/tools/slug-generator',
        icon: '🔗',
        color: 'from-yellow-500/5 to-yellow-500/10',
        borderColor: 'border-yellow-500/20',
      },
      {
        name: 'URL Encoder/Decoder',
        description: 'Encode and decode URLs with percent encoding for web development',
        path: '/tools/url-encoder-decoder',
        icon: '🌐',
        color: 'from-cyan-500/5 to-cyan-500/10',
        borderColor: 'border-cyan-500/20',
      },
      {
        name: 'Random Word Generator',
        description: 'Generate random words for creative writing, brainstorming, and more',
        path: '/tools/random-word-generator',
        icon: '✨',
        color: 'from-violet-500/5 to-violet-500/10',
        borderColor: 'border-violet-500/20',
      },
      {
        name: 'Lorem Ipsum Generator',
        description: 'Classic, funny (Bacon, Zombie, Pirate, Corporate, Cat, Hipster) & by exact character count',
        path: '/tools/lorem-ipsum-generator',
        icon: '📄',
        color: 'from-slate-500/5 to-slate-500/10',
        borderColor: 'border-slate-500/20',
      },
    ],
  },
  {
    id: 'font-style',
    label: 'Font & Style',
    icon: Sparkles,
    color: 'text-violet-500',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/30',
    description: 'Generate stylish, decorative and Unicode text',
    tools: [
      {
        name: 'Preppy Font Generator',
        description: '60+ cute preppy font styles — classic bow, coastal, collegiate, garden party, old money, coquette & star girl. Copy & paste into Instagram, TikTok & Pinterest',
        path: '/tools/preppy-font-generator',
        icon: '🎀',
        color: 'from-pink-500/5 to-green-500/10',
        borderColor: 'border-pink-500/20',
      },
      {
        name: 'Aesthetic Fonts Generator',
        description: '50+ lovely font styles — soft kawaii, dark academia, vaporwave, cottagecore & romantic. Copy & paste into Instagram, TikTok & Pinterest',
        path: '/tools/aesthetic-fonts-generator',
        icon: '🌸',
        color: 'from-rose-500/5 to-pink-500/10',
        borderColor: 'border-rose-500/20',
      },
      {
        name: 'Fontlu — Font Generator',
        description: 'Free fontlu font generator — 25+ bold, script, gothic & Unicode styles, copy & paste anywhere',
        path: '/tools/fontlu',
        icon: '𝓕',
        color: 'from-violet-500/5 to-indigo-500/10',
        borderColor: 'border-violet-500/20',
      },
      {
        name: 'Circled Text Generator',
        description: 'Convert text to circled letters Ⓐⓑⓒ and filled-circle 🅐🅑🅒 — 12 styles with circled numbers ①②③',
        path: '/tools/circled-text-generator',
        icon: 'Ⓒ',
        color: 'from-blue-500/5 to-indigo-500/10',
        borderColor: 'border-blue-500/20',
      },
      {
        name: 'Fancy Text Generator',
        description: 'Transform text into 25+ styles — bold, script, gothic, circled, upside down & more',
        path: '/tools/fancy-text-generator',
        icon: '✨',
        color: 'from-violet-500/5 to-violet-500/10',
        borderColor: 'border-violet-500/20',
      },
      {
        name: 'Fancy Letters',
        description: 'Convert text into 30+ fancy letter styles — bold, script, gothic, bubble, upside down, strikethrough and more',
        path: '/tools/fancy-letters',
        icon: '🔤',
        color: 'from-violet-500/5 to-indigo-500/10',
        borderColor: 'border-violet-500/20',
      },
      {
        name: 'Calligraphy Alphabet',
        description: 'Generate beautiful calligraphy text — Bold Script, Gothic Fraktur, Elegant Cursive & 15 more styles',
        path: '/tools/calligraphy-alphabet',
        icon: '✒️',
        color: 'from-purple-500/5 to-pink-500/10',
        borderColor: 'border-purple-500/20',
      },
      {
        name: 'Cursive Text Generator',
        description: 'Convert text to beautiful cursive, script, and handwriting styles',
        path: '/tools/cursive-text-generator',
        icon: '✍️',
        color: 'from-rose-500/5 to-rose-500/10',
        borderColor: 'border-rose-500/20',
      },
      {
        name: 'Glitch Text Generator',
        description: 'Create 25+ glitch and cursed text styles including Zalgo, Cursed, and more',
        path: '/tools/glitch-text-generator',
        icon: '👾',
        color: 'from-fuchsia-500/5 to-fuchsia-500/10',
        borderColor: 'border-fuchsia-500/20',
      },
      {
        name: 'Tiny Text Generator',
        description: 'Convert text to 16+ tiny styles including superscript, subscript, small caps and more',
        path: '/tools/tiny-text-generator',
        icon: '🔡',
        color: 'from-lime-500/5 to-lime-500/10',
        borderColor: 'border-lime-500/20',
      },
      {
        name: 'Vaporwave Text Generator',
        description: 'Convert text to 13+ vaporwave and aesthetic styles including full-width and emoji text',
        path: '/tools/vaporwave-text-generator',
        icon: '🌸',
        color: 'from-pink-500/5 to-pink-500/10',
        borderColor: 'border-pink-500/20',
      },
      {
        name: 'Subscript Generator',
        description: 'Convert text to Unicode subscript (H₂O) or superscript (x²) — pastes into any app, no HTML needed',
        path: '/tools/subscript-generator',
        icon: '₂ˢ',
        color: 'from-blue-500/5 to-cyan-500/10',
        borderColor: 'border-blue-500/20',
      },
      {
        name: 'Mirror Text Generator',
        description: 'Mirror your text like da Vinci\'s famous notebook handwriting using Unicode mirror characters',
        path: '/tools/mirror-text',
        icon: '🪞',
        color: 'from-sky-500/5 to-sky-500/10',
        borderColor: 'border-sky-500/20',
      },
      {
        name: 'Zalgo Text Generator',
        description: 'Create creepy cursed Zalgo text with dripping diacritics. Adjustable craziness level from subtle to full chaos',
        path: '/tools/zalgo-text-generator',
        icon: '☠️',
        color: 'from-red-900/5 to-red-900/10',
        borderColor: 'border-red-900/20',
      },
      {
        name: 'Twitch Name Generator',
        description: 'Generate 180+ cool Twitch username ideas — Gaming, Streamer, Funny, Esports, Anime & Dark. Personalized suggestions included',
        path: '/tools/twitch-name-generator',
        icon: '🟣',
        color: 'from-purple-500/5 to-violet-500/10',
        borderColor: 'border-purple-500/20',
      },
      {
        name: 'Emoji Buttons',
        description: 'Click any emoji to copy it instantly — 500+ emojis across 8 categories. Search by name, browse by type, and build emoji combos with the builder',
        path: '/tools/emoji-buttons',
        icon: '😊',
        color: 'from-yellow-500/5 to-orange-500/10',
        borderColor: 'border-yellow-500/20',
      },
      {
        name: 'Runic Alphabet Converter',
        description: 'Convert text to Elder Futhark, Younger Futhark & Anglo-Saxon Futhorc runes. Full rune table with names & meanings. Bidirectional — runes back to Latin too',
        path: '/tools/runic-alphabet-converter',
        icon: 'ᚠ',
        color: 'from-amber-500/5 to-orange-500/10',
        borderColor: 'border-amber-500/20',
      },
      {
        name: 'Wolf Name Generator',
        description: 'Generate 180+ cool wolf names — Pack, Lone Wolf, Mythology, Nature, Warrior & Mystical categories. Personalize with your name',
        path: '/tools/wolf-name-generator',
        icon: '🐺',
        color: 'from-slate-500/5 to-zinc-500/10',
        borderColor: 'border-slate-500/20',
      },
      {
        name: 'Underline Text Generator',
        description: 'Generate underlined text in 28 styles — simple, double, bold, wavy, connected & combo. Copy & paste into Instagram, Discord, Twitter & anywhere',
        path: '/tools/underline-text-generator',
        icon: '͟U',
        color: 'from-blue-500/5 to-indigo-500/10',
        borderColor: 'border-blue-500/20',
      },
      {
        name: 'Cool Agario Names',
        description: 'Generate 80+ cool fancy names for Agar.io — bold, gothic, frames, symbols and combined styles',
        path: '/tools/agario-names',
        icon: '🎮',
        color: 'from-green-500/5 to-emerald-500/10',
        borderColor: 'border-green-500/20',
      },
      {
        name: 'Papyrus Font Generator',
        description: 'Generate text in 8 Papyrus styles — Classic, Undertale, Avatar blue, Ancient Scroll, Hieroglyph Border & more',
        path: '/tools/papyrus-font-generator',
        icon: '𓂀',
        color: 'from-amber-500/5 to-yellow-500/10',
        borderColor: 'border-amber-500/20',
      },
      {
        name: 'Comic Sans Font Generator',
        description: 'Preview text in Comic Sans MS + 14 similar Google Fonts — Comic Neue, Patrick Hand, Gloria Hallelujah & more. Copy or download PNG',
        path: '/tools/comic-sans-font-generator',
        icon: '💬',
        color: 'from-pink-500/5 to-rose-500/10',
        borderColor: 'border-pink-500/20',
      },
    ],
  },
  {
    id: 'encoders',
    label: 'Encoders & Converters',
    icon: Code2,
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/30',
    description: 'Encode, decode and convert between formats',
    tools: [
      {
        name: 'English to Binary',
        description: 'Convert text to binary code and vice versa with hex, decimal, and octal support',
        path: '/tools/english-to-binary',
        icon: '💻',
        color: 'from-indigo-500/5 to-indigo-500/10',
        borderColor: 'border-indigo-500/20',
      },
      {
        name: 'Letters to Numbers',
        description: 'Convert letters to numbers (A=1, B=2 … Z=26) and decode numbers back to letters — A1Z26 cipher with breakdown',
        path: '/tools/letters-to-numbers',
        icon: '🔢',
        color: 'from-blue-500/5 to-indigo-500/10',
        borderColor: 'border-blue-500/20',
      },
      {
        name: 'Morse Code Translator',
        description: 'Convert text to Morse code and vice versa with audio playback and adjustable settings',
        path: '/tools/morse-code-translator',
        icon: '📻',
        color: 'from-cyan-500/5 to-cyan-500/10',
        borderColor: 'border-cyan-500/20',
      },
      {
        name: 'Numbers To Words',
        description: 'Convert any number to words instantly — integers, decimals, and negatives supported',
        path: '/tools/numbers-to-words',
        icon: '🔢',
        color: 'from-amber-500/5 to-amber-500/10',
        borderColor: 'border-amber-500/20',
      },
      {
        name: 'Text Obfuscator',
        description: 'Hide & encode text in 20+ ways — ROT13, Caesar cipher, Binary, Morse, Leetspeak, Zalgo, Pig Latin & more',
        path: '/tools/text-obfuscator',
        icon: '🔐',
        color: 'from-slate-500/5 to-zinc-500/10',
        borderColor: 'border-slate-500/20',
      },
    ],
  },
  {
    id: 'translators',
    label: 'Fun Translators',
    icon: Wand2,
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/30',
    description: 'Creative, novelty and fictional language translators',
    tools: [
      {
        name: 'Medieval English Translator',
        description: 'Convert modern English to Elizabethan / Shakespearean English — thou, thee, thy, -eth verbs and 400+ archaic substitutions',
        path: '/tools/medieval-english-translator',
        icon: '⚜️',
        color: 'from-amber-700/5 to-yellow-700/10',
        borderColor: 'border-amber-700/20',
      },
      {
        name: "Na'vi Translator",
        description: "Translate English to Na'vi — the Avatar alien language created by Paul Frommer. 200+ words, phrasebook & dictionary",
        path: '/tools/navi-translator',
        icon: '🪬',
        color: 'from-teal-500/5 to-cyan-500/10',
        borderColor: 'border-teal-500/20',
      },
      {
        name: 'Aurebesh Translator',
        description: 'Translate English into Aurebesh — the written alphabet of the Star Wars universe (Galactic Basic)',
        path: '/tools/aurebesh-translator',
        icon: '⚔️',
        color: 'from-yellow-600/5 to-yellow-600/10',
        borderColor: 'border-yellow-600/20',
      },
      {
        name: 'Standard Galactic Alphabet',
        description: 'Encode & decode English in Standard Galactic Alphabet — the cipher from Minecraft enchanting tables & Commander Keen',
        path: '/tools/standard-galactic-alphabet',
        icon: '🔮',
        color: 'from-emerald-500/5 to-cyan-500/10',
        borderColor: 'border-emerald-500/20',
      },
      {
        name: 'Speak With Emojis',
        description: 'Compose emoji-only messages using our emoji keyboard or convert English text to pure emojis — 800+ emoji, instant copy',
        path: '/tools/speak-with-emojis',
        icon: '🗣️',
        color: 'from-yellow-400/5 to-orange-500/10',
        borderColor: 'border-yellow-400/20',
      },
      {
        name: 'Emoji Translator',
        description: 'Convert English text to emojis instantly — 2000+ words mapped across emotions, food, animals, weather & more',
        path: '/tools/emoji-translator',
        icon: '😊',
        color: 'from-yellow-400/5 to-orange-400/10',
        borderColor: 'border-yellow-400/20',
      },
      {
        name: 'Gibberish Translator',
        description: 'Encode & decode English in 6 secret languages — Pig Latin, Ubbi Dubbi, Ob, Op, Idig & Tutnese',
        path: '/tools/gibberish-translator',
        icon: '🐷',
        color: 'from-pink-500/5 to-rose-500/10',
        borderColor: 'border-pink-500/20',
      },
      {
        name: 'Al Bhed Translator',
        description: 'Translate English to Al Bhed and back — the Final Fantasy X cipher with Primer Mode and full substitution table',
        path: '/tools/al-bhed-translator',
        icon: '🎮',
        color: 'from-emerald-500/5 to-teal-500/10',
        borderColor: 'border-emerald-500/20',
      },
      {
        name: 'Gen Z Translator',
        description: 'Convert English to Gen Z talk — bussin, no cap, slay, rizz, bet, periodt & 50+ more. Decode Gen Z slang too. 3 vibe levels',
        path: '/tools/gen-z-translator',
        icon: '✨',
        color: 'from-violet-500/5 to-purple-500/10',
        borderColor: 'border-violet-500/20',
      },
      {
        name: 'Pig Latin Translator',
        description: 'Translate English to Pig Latin and back — Classic (-way) & Yay (-yay) variants with word-by-word breakdown',
        path: '/tools/pig-latin-translator',
        icon: '🐷',
        color: 'from-pink-500/5 to-rose-500/10',
        borderColor: 'border-pink-500/20',
      },
      {
        name: 'Ned Flanders Translator',
        description: 'Convert English to Ned Flanders\' iconic diddly-doodly speak from The Simpsons',
        path: '/tools/ned-flanders-translator',
        icon: '🏡',
        color: 'from-yellow-500/5 to-yellow-500/10',
        borderColor: 'border-yellow-500/20',
      },
      {
        name: 'Robot Voice Generator',
        description: 'Convert text to robot voice with adjustable speed and pitch, plus 6 visual robot text styles',
        path: '/tools/robot-voice-generator',
        icon: '🤖',
        color: 'from-slate-500/5 to-slate-500/10',
        borderColor: 'border-slate-500/20',
      },
    ],
  },
]

const totalTools = categories.reduce((sum, c) => sum + c.tools.length, 0)

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-8 pb-6 md:pt-14 md:pb-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">Text Tools</h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {totalTools} free online text tools — no sign-up, no installation, works in any browser.
          </p>

          {/* Category pills (anchor links) */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium border ${cat.bg} ${cat.border} ${cat.color} hover:opacity-80 transition-opacity`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                  <span className="opacity-60 text-xs font-normal">({cat.tools.length})</span>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <div className="max-w-6xl mx-auto px-4 pb-8 space-y-14">
        {categories.map((cat) => {
          const Icon = cat.icon
          return (
            <section key={cat.id} id={cat.id}>
              {/* Section header */}
              <div className={`flex items-center gap-3 mb-5 pb-3 border-b`}>
                <div className={`p-2 rounded-lg ${cat.bg}`}>
                  <Icon className={`w-5 h-5 ${cat.color}`} />
                </div>
                <div>
                  <h2 className="text-xl font-bold leading-tight">
                    {cat.label}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      {cat.tools.length} tools
                    </span>
                  </h2>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                </div>
              </div>

              {/* Tools grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.tools.map((tool) => (
                  <Link
                    key={tool.path}
                    href={tool.path}
                    className={`group p-5 bg-gradient-to-br ${tool.color} rounded-2xl border ${tool.borderColor} hover:shadow-md transition-all`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-3xl">{tool.icon}</div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-0.5" />
                    </div>
                    <h3 className="text-base font-bold mb-1">{tool.name}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}

        {/* Coming Soon */}
        <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border border-dashed text-center">
          <h2 className="text-xl font-bold mb-2">More Tools Coming Soon</h2>
          <p className="text-muted-foreground text-sm">
            We're constantly adding new text tools. Check back soon for updates!
          </p>
        </div>

        {/* Related Features */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-center">Related Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              href="/ai-translate"
              className="group p-6 bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-2xl border border-blue-500/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl">🌍</div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-1">AI Translator</h3>
              <p className="text-sm text-muted-foreground">Translate text to any of 248+ languages instantly</p>
            </Link>
            <Link
              href="/languages"
              className="group p-6 bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-2xl border border-purple-500/20 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="text-3xl">📚</div>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-1">Language Resources</h3>
              <p className="text-sm text-muted-foreground">Explore all supported languages with guides and resources</p>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'No Installation', desc: 'Use all tools directly in your browser without downloading anything' },
            { title: 'No Login Required', desc: 'Access all tools instantly without creating an account' },
            { title: '100% Free', desc: 'All tools are completely free with no hidden charges' },
          ].map((f) => (
            <div key={f.title} className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
