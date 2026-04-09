import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { EmojiTranslatorTool } from '@/components/tools/emoji-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Emoji Translator - Convert Text to Emojis Online Free',
  description: 'Free online emoji translator. Convert English text to emojis instantly. 500+ words supported across emotions, animals, food, sports, weather, and more. Three modes: append, replace, or emoji-only.',
  keywords: ['emoji translator', 'text to emoji', 'emoji converter', 'emoji text generator', 'words to emojis', 'english to emoji', 'emoji language translator', 'emoji text converter', 'translate to emoji', 'emoji generator'],
  openGraph: {
    title: 'Emoji Translator — Convert Text to Emojis Instantly',
    description: 'Translate English text into emojis with 500+ mapped words. Append, replace, or emoji-only mode. Free, instant, no login.',
    type: 'website',
  },
}

export default function EmojiTranslatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Emoji Translator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert English text into emojis instantly. Type any sentence and we&apos;ll automatically match words to their best emoji — emotions, animals, food, weather, sports, and 500+ more words supported.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <EmojiTranslatorTool />
            </div>

            {/* How it works */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-4">
                {[
                  { n: '1', title: 'Type Your Text', desc: 'Enter any English sentence, phrase, or word into the input field.' },
                  { n: '2', title: 'Choose a Mode', desc: 'Append (keep text + add emoji), Replace (swap word with emoji), or Emoji Only (show only matched emojis).' },
                  { n: '3', title: 'Instant Translation', desc: 'Words are matched against 500+ keyword-to-emoji mappings in real time as you type.' },
                  { n: '4', title: 'Copy & Share', desc: 'Copy the emoji-enhanced text and paste it anywhere — works on all platforms.' },
                ].map(s => (
                  <div key={s.n} className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">{s.n}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modes explained */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Translation Modes</h2>
              <div className="space-y-4">
                {[
                  {
                    mode: 'Append Mode',
                    example: '"I love pizza" → "I love ❤️ pizza 🍕"',
                    desc: 'Keeps the original text intact and adds the matching emoji right after each matched word. Best for social media posts where you want both text and emoji.',
                  },
                  {
                    mode: 'Replace Mode',
                    example: '"I love pizza" → "I ❤️ 🍕"',
                    desc: 'Swaps each matched word entirely with its emoji. Creates a more compact, visual message. Unmatched words are kept as-is.',
                  },
                  {
                    mode: 'Emoji Only',
                    example: '"I love pizza" → "❤️ 🍕"',
                    desc: 'Shows only the matched emojis, stripping all unmatched words. Creates a fully visual, emoji-based representation of your text.',
                  },
                ].map(m => (
                  <div key={m.mode} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold mb-1">{m.mode}</h3>
                    <code className="text-xs text-primary font-mono block mb-2 bg-primary/10 px-2 py-1 rounded">{m.example}</code>
                    <p className="text-sm text-muted-foreground">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Word categories */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-4">Supported Word Categories</h2>
              <p className="text-muted-foreground mb-4 text-sm">Our emoji dictionary covers 500+ words across 15+ categories:</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { emoji: '😊', cat: 'Emotions & Feelings', count: '60+' },
                  { emoji: '🐶', cat: 'Animals & Pets', count: '40+' },
                  { emoji: '🍕', cat: 'Food & Drinks', count: '60+' },
                  { emoji: '☀️', cat: 'Nature & Weather', count: '40+' },
                  { emoji: '⚽', cat: 'Sports & Activities', count: '40+' },
                  { emoji: '📱', cat: 'Objects & Tech', count: '50+' },
                  { emoji: '👨', cat: 'People & Relations', count: '30+' },
                  { emoji: '🏠', cat: 'Places & Buildings', count: '25+' },
                  { emoji: '🔴', cat: 'Colors', count: '12' },
                  { emoji: '✅', cat: 'Actions & Verbs', count: '80+' },
                  { emoji: '🌅', cat: 'Time & Dates', count: '15+' },
                  { emoji: '🎉', cat: 'Events & Occasions', count: '15+' },
                ].map(c => (
                  <div key={c.cat} className="p-3 bg-primary/5 rounded-xl flex items-start gap-2">
                    <span className="text-xl flex-shrink-0">{c.emoji}</span>
                    <div>
                      <p className="text-xs font-semibold leading-tight">{c.cat}</p>
                      <p className="text-[10px] text-muted-foreground">{c.count} words</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How does the emoji translator work?',
                    a: 'It scans your text word-by-word and looks up each word in a dictionary of 500+ keyword-to-emoji mappings. Matched words get their corresponding emoji added (in append mode), replaced (in replace mode), or compiled into an emoji-only result.',
                  },
                  {
                    q: 'What if a word isn\'t translated?',
                    a: 'Only words in our dictionary are matched. Unmatched words are kept as-is (in append and replace mode) or omitted (in emoji-only mode). We\'re constantly expanding the dictionary.',
                  },
                  {
                    q: 'Does capitalization matter?',
                    a: 'No — the translator is case-insensitive. "HAPPY", "Happy", and "happy" all match the same emoji (😊).',
                  },
                  {
                    q: 'Do the emojis work on all platforms?',
                    a: 'Yes — all emojis used are standard Unicode emoji characters supported on iOS, Android, Windows, Mac, Discord, Twitter/X, Instagram, WhatsApp, and all modern platforms.',
                  },
                  {
                    q: 'Can I translate back from emoji to text?',
                    a: 'This tool translates English text into emojis. For emoji-to-text decoding, the meaning of emojis is contextual and varies — we recommend using the Append mode so the original text is always preserved alongside the emojis.',
                  },
                ].map(item => (
                  <div key={item.q} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Related Text Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools', label: 'View All Tools', sub: 'Browse all text tools' },
                  { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', sub: 'Bold, script, gothic & more' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', sub: '25+ cursed styles' },
                  { href: '/tools/vaporwave-text-generator', label: 'Vaporwave Text', sub: 'Aesthetic retro styles' },
                  { href: '/tools/tiny-text-generator', label: 'Tiny Text Generator', sub: 'Superscript & small caps' },
                  { href: '/tools/cursive-text-generator', label: 'Cursive Text Generator', sub: 'Handwriting styles' },
                  { href: '/tools/ned-flanders-translator', label: 'Ned Flanders Translator', sub: 'Diddly-doodly speak' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{l.label}</p>
                      <p className="text-xs text-muted-foreground">{l.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick examples */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Example Translations</h3>
              <div className="space-y-3 text-sm">
                {[
                  { input: 'I love you', output: 'I love ❤️ you' },
                  { input: 'Happy birthday', output: 'Happy 😊 birthday 🎂' },
                  { input: 'Good morning sun', output: 'Good 👍 morning 🌅 sun ☀️' },
                  { input: 'I eat pizza and drink coffee', output: '...🍕...☕' },
                  { input: 'My dog is happy', output: 'My dog 🐶 is happy 😊' },
                ].map((ex, i) => (
                  <div key={i} className="p-2 rounded-lg bg-background/60">
                    <p className="text-xs text-muted-foreground">{ex.input}</p>
                    <p className="font-medium mt-0.5">{ex.output}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Use simple, common words for the best emoji matches',
                  'Try "Emoji Only" mode for a fully visual message',
                  'Use "Append" mode for social media captions',
                  'Use "Replace" mode for compact emoji messages',
                  'Emotions like happy, sad, love translate especially well',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">✦</span>
                    <span>{tip}</span>
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
