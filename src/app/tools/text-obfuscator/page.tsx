import { Metadata } from 'next'
import { Shield, ArrowRight, Check } from 'lucide-react'
import { TextObfuscatorTool } from '@/components/tools/text-obfuscator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Text Obfuscator — 20+ Ways to Hide & Encode Text Online | Free',
  description:
    'Free online text obfuscator with 20+ methods — ROT13, Caesar cipher, Base64, Binary, Hex, Morse, Leetspeak, Zalgo, Pig Latin, homoglyphs, upside down & more. No sign-up needed.',
  keywords: [
    'text obfuscator',
    'text encoder',
    'text scrambler',
    'hide text online',
    'ROT13',
    'Caesar cipher',
    'Base64 encoder',
    'text to binary',
    'text to hex',
    'leetspeak generator',
    'Morse code',
    'zalgo text',
    'pig latin generator',
    'upside down text',
    'text cipher',
    'encode text',
    'obfuscate text',
    'encrypt text online',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/text-obfuscator',
  },
  openGraph: {
    title: 'Text Obfuscator — 20+ Ways to Hide & Encode Text Online',
    description:
      'ROT13, Caesar cipher, Base64, Binary, Hex, Morse, Leetspeak, Zalgo, Pig Latin & more. Free text obfuscator with one-click copy.',
    url: 'https://nagritranslate.com/tools/text-obfuscator',
    type: 'website',
  },
}

const METHODS_PREVIEW = [
  { name: 'ROT13',        example: 'Hello → Uryyb',              emoji: '🔄' },
  { name: 'Caesar Cipher',example: 'Hello → Khoor',              emoji: '🏛️' },
  { name: 'Leetspeak',    example: 'Hello → H3ll0',              emoji: '🎮' },
  { name: 'Binary',       example: 'Hi → 01001000 01101001',     emoji: '💻' },
  { name: 'Morse Code',   example: 'SOS → ... --- ...',          emoji: '📻' },
  { name: 'Upside Down',  example: 'Hello → ollǝH',              emoji: '🙃' },
  { name: 'Base64',       example: 'Hello → SGVsbG8=',           emoji: '📦' },
  { name: 'Pig Latin',    example: 'Hello → Ellohay',            emoji: '🐷' },
]

const FAQS = [
  {
    q: 'What is text obfuscation?',
    a: 'Text obfuscation is the process of transforming readable text into a disguised, encoded, or scrambled form. It can be used for fun, hiding spoilers, basic privacy, security testing, or aesthetic purposes.',
  },
  {
    q: 'Which methods are reversible?',
    a: 'ROT13, ROT47, Caesar Cipher, Atbash, Reverse Text, and Reverse Words are all fully reversible — paste the output back into the tool and apply the same method to decode it.',
  },
  {
    q: 'Can I use this to actually encrypt my text?',
    a: 'These methods are obfuscation, not strong encryption. They are not suitable for securing sensitive data. For real encryption, use AES-256 or similar cryptographic standards. These tools are great for puzzles, fun, or basic hiding.',
  },
  {
    q: 'What are homoglyphs?',
    a: 'Homoglyphs are characters from different scripts (like Cyrillic) that look identical to Latin letters. For example, the Cyrillic "а" looks exactly like the Latin "a" but is a different Unicode character. This can be used to bypass text filters.',
  },
  {
    q: 'What is the invisible spaces method?',
    a: 'It inserts zero-width spaces (U+200B) between every character. The text looks completely normal to the eye but contains hidden characters that can be used for watermarking or bypassing simple content filters.',
  },
  {
    q: 'What is Zalgo text?',
    a: 'Zalgo text adds Unicode combining diacritic marks (those little accents and decorations) above and below each character, creating a creepy, glitchy-looking effect. It\'s named after an internet meme character.',
  },
  {
    q: 'Does ROT13 work for numbers and symbols?',
    a: 'ROT13 only shifts letters A–Z. Numbers and symbols are left unchanged. ROT47 shifts all printable ASCII characters including numbers and common symbols.',
  },
]

export default function TextObfuscatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Text Tools', path: '/tools' },
        { name: 'Text Obfuscator', path: '/tools/text-obfuscator' },
      ]} />
      <WebPageSchema
        path="/tools/text-obfuscator"
        name="Text Obfuscator — 20+ Ways to Hide & Encode Text Online"
        description="Free online text obfuscator with 20+ methods — ROT13, Caesar cipher, Base64, Binary, Hex, Morse, Zalgo & more."
        type="WebApplication"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 via-zinc-500/5 to-stone-500/10 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-slate-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-14 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-500/10 border border-slate-500/20 text-sm text-slate-600 dark:text-slate-400 font-medium mb-5">
            <Shield className="w-4 h-4" />
            20+ Obfuscation Methods
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Text Obfuscator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Disguise, encode, or scramble your text in 20+ ways instantly.
            ROT13, ciphers, binary, morse, leetspeak, zalgo & more — free, no sign-up.
          </p>

          {/* Method previews */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-4">
            {METHODS_PREVIEW.map(m => (
              <div key={m.name} className="px-3 py-3 rounded-xl bg-background/80 border shadow-sm text-left">
                <div className="text-xl mb-1">{m.emoji}</div>
                <p className="text-xs font-semibold mb-0.5">{m.name}</p>
                <p className="text-[10px] text-muted-foreground font-mono">{m.example}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool + Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Tool */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm">
              <TextObfuscatorTool />
            </div>

            {/* Method categories */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">All Obfuscation Methods</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { cat: 'Cipher', emoji: '🔐', color: 'border-violet-500/20 bg-violet-500/5', methods: ['ROT13 — shifts letters by 13 (reversible)', 'ROT47 — shifts all ASCII chars by 47', 'Caesar Cipher — classic shift-3 substitution', 'Atbash — mirrors the alphabet (A↔Z)'] },
                  { cat: 'Encoding', emoji: '📦', color: 'border-blue-500/20 bg-blue-500/5', methods: ['Base64 — standard web encoding', 'Binary — 8-bit representation', 'Hexadecimal — hex values per character', 'Morse Code — dots and dashes', 'NATO Alphabet — Alpha Bravo Charlie…'] },
                  { cat: 'Style', emoji: '🎨', color: 'border-rose-500/20 bg-rose-500/5', methods: ['Leetspeak — 3→e, 4→a, 0→o', 'Char Substitution — ASCII art symbols', 'Homoglyphs — Cyrillic lookalikes', 'Upside Down — flipped Unicode chars', 'Strikethrough — H̶e̶l̶l̶o̶', 'Underline — H̲e̲l̲l̲o̲'] },
                  { cat: 'Transform', emoji: '🔄', color: 'border-amber-500/20 bg-amber-500/5', methods: ['Reverse Text — olleH', 'Reverse Words — World Hello', 'Pig Latin — Ellohay', 'Word Scramble — keeps first/last letter', 'Zalgo Light — creepy diacritics', 'Invisible Spaces — hidden zero-width chars'] },
                ].map(({ cat, emoji, color, methods }) => (
                  <div key={cat} className={`p-4 rounded-xl border ${color}`}>
                    <h3 className="font-semibold mb-2">{emoji} {cat}</h3>
                    <ul className="space-y-1">
                      {methods.map(m => (
                        <li key={m} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" />
                          {m}
                        </li>
                      ))}
                    </ul>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Quick Facts</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  '20+ obfuscation methods',
                  'One-click copy for each output',
                  'All processing happens in browser',
                  'No text is stored or sent to server',
                  'Works on mobile & desktop',
                  'No sign-up required',
                ].map(f => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Use Cases</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {[
                  { emoji: '🎭', text: 'Hide spoilers in plain sight' },
                  { emoji: '🧩', text: 'Create puzzles and riddles' },
                  { emoji: '🎮', text: 'Fun gaming usernames' },
                  { emoji: '🔒', text: 'Basic privacy for casual text' },
                  { emoji: '📚', text: 'Learn about classic ciphers' },
                  { emoji: '🛡️', text: 'Security awareness training' },
                  { emoji: '✍️', text: 'Creative writing and art' },
                  { emoji: '💬', text: 'Secret messages with friends' },
                ].map(({ emoji, text }) => (
                  <li key={text} className="flex items-center gap-2">
                    <span>{emoji}</span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl border bg-muted/10">
              <h3 className="font-semibold mb-3 text-sm">Related Tools</h3>
              <ul className="space-y-1.5">
                {[
                  { name: 'English to Binary', path: '/tools/english-to-binary' },
                  { name: 'Morse Code Translator', path: '/tools/morse-code-translator' },
                  { name: 'Zalgo Text Generator', path: '/tools/zalgo-text-generator' },
                  { name: 'Glitch Text Generator', path: '/tools/glitch-text-generator' },
                  { name: 'Mirror Text Generator', path: '/tools/mirror-text' },
                  { name: 'Gibberish Translator', path: '/tools/gibberish-translator' },
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
