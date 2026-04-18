import { Metadata } from 'next'
import { LettersToNumbersTool } from '@/components/tools/letters-to-numbers-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Letters to Numbers Converter - A=1 B=2 C=3 Cipher Online',
  description: 'Convert letters to numbers (A=1, B=2 … Z=26) and numbers back to letters instantly. Free online A1Z26 cipher tool with character breakdown, separator options, and bidirectional conversion.',
  keywords: [
    'letters to numbers', 'numbers to letters', 'a1z26', 'a=1 b=2 c=3', 'letter number converter',
    'alphabet number converter', 'convert letters to numbers', 'convert numbers to letters',
    'letter number cipher', 'a1z26 cipher', 'alphabet cipher', 'number cipher',
    'letters as numbers', 'text to numbers', 'encode letters as numbers',
    'decode numbers to letters', 'letter position converter', 'alphabet position',
    'a=1 cipher', 'letter number code', 'secret code letters numbers',
  ],
  openGraph: {
    title: 'Letters to Numbers Converter — A=1, B=2 … Z=26',
    description: 'Instantly convert letters to their number positions (A=1, B=2 … Z=26) and back. Free online A1Z26 cipher with breakdown.',
    type: 'website',
  },
}

const EXAMPLES = [
  { word: 'HELLO',   nums: '8 5 12 12 15' },
  { word: 'LOVE',    nums: '12 15 22 5' },
  { word: 'SECRET',  nums: '19 5 3 18 5 20' },
  { word: 'CODE',    nums: '3 15 4 5' },
]

export default function LettersToNumbersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            🔢 A=1 · B=2 · C=3 … Z=26
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Letters to Numbers Converter
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Convert any text into its letter-position numbers (A=1, B=2 … Z=26) and decode numbers back to letters. Bidirectional, instant, with character-by-character breakdown.
          </p>

          {/* Example chips */}
          <div className="flex flex-wrap justify-center gap-2">
            {EXAMPLES.map(ex => (
              <div key={ex.word} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border text-sm font-mono">
                <span className="font-bold">{ex.word}</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-primary">{ex.nums}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-purple-500/5 rounded-2xl border">
              <LettersToNumbersTool />
            </div>

            {/* How it works */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How It Works</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { n: '1', title: 'Choose a Direction', desc: 'Pick "Letters → Numbers" to encode text, or "Numbers → Letters" to decode a number string back to text.' },
                  { n: '2', title: 'Type or Paste', desc: 'Enter any text (letters, spaces, punctuation) or paste a number sequence separated by spaces or dashes.' },
                  { n: '3', title: 'Pick a Separator', desc: 'In encode mode choose None, Space, or Dash to control how numbers are separated in the output.' },
                  { n: '4', title: 'Copy & Use', desc: 'Click the output or hit Copy to grab the result. Use it for puzzles, ciphers, secret messages, and more.' },
                ].map(s => (
                  <div key={s.n} className="flex gap-3 p-4 bg-primary/5 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">{s.n}</div>
                    <div>
                      <h3 className="font-semibold mb-1 text-sm">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is the cipher */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">What Is the A1Z26 Cipher?</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  The <strong className="text-foreground">A1Z26 cipher</strong> (also called the Letter-Number cipher or Alphabet-Number cipher) is one of the simplest substitution ciphers. Each letter is replaced by its position in the alphabet: A=1, B=2, C=3 … all the way to Z=26.
                </p>
                <p>
                  It&apos;s not a secure cryptographic cipher — anyone who knows the scheme can decode it instantly. But it&apos;s widely used in <strong className="text-foreground">puzzle books</strong>, <strong className="text-foreground">escape rooms</strong>, <strong className="text-foreground">treasure hunts</strong>, and <strong className="text-foreground">kids&apos; secret codes</strong> because it&apos;s easy to understand and fun to use.
                </p>
                <p>
                  Numbers that fall outside 1–26 are left as-is during decoding. Spaces, punctuation, and digits in encoded text are passed through unchanged so you can still read word boundaries.
                </p>
              </div>
            </div>

            {/* Full reference table */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Full A–Z Reference Table</h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-7 gap-2">
                {Array.from({ length: 26 }, (_, i) => {
                  const letter = String.fromCharCode(65 + i)
                  return (
                    <div key={letter} className="flex items-center gap-2 p-2 rounded-lg border bg-muted/20 font-mono text-sm">
                      <span className="font-bold text-primary w-5 text-center">{letter}</span>
                      <span className="text-muted-foreground">=</span>
                      <span className="font-semibold">{i + 1}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Use cases */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Where People Use It</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: '🧩', title: 'Puzzle Books', desc: 'A classic code used in printed puzzle magazines and crossword extras.' },
                  { icon: '🔐', title: 'Escape Rooms', desc: 'A go-to cipher for escape room designers — simple enough to solve under pressure.' },
                  { icon: '👾', title: 'Games & ARGs', desc: 'Used in alternate reality games, video game Easter eggs, and mystery challenges.' },
                  { icon: '👧', title: "Kids' Secret Codes", desc: 'Perfect for children learning about ciphers — easy to memorize and apply.' },
                  { icon: '🎁', title: 'Gift Clues & Notes', desc: 'Hide a birthday message or treasure hunt clue in number form.' },
                  { icon: '📺', title: 'Numerology & Media', desc: 'Letter-number mapping appears in pop culture, sports jersey numbers, and numerology.' },
                ].map(u => (
                  <div key={u.title} className="flex gap-3 p-3 rounded-xl border bg-muted/20">
                    <span className="text-2xl flex-shrink-0">{u.icon}</span>
                    <div>
                      <p className="font-semibold text-sm">{u.title}</p>
                      <p className="text-xs text-muted-foreground">{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What does A=1 B=2 C=3 mean?',
                    a: 'Each letter of the English alphabet is assigned its position: A is the 1st letter so A=1, B is 2nd so B=2, and so on through Z=26. This simple substitution lets you write text as a sequence of numbers.',
                  },
                  {
                    q: 'What happens to spaces and punctuation?',
                    a: 'Spaces, punctuation, and digits in your input are passed through to the output unchanged. Only letters A–Z are converted to numbers, so word boundaries are preserved.',
                  },
                  {
                    q: 'How do I decode numbers back to letters?',
                    a: 'Switch to "Numbers → Letters" mode and paste your number sequence. The tool automatically detects runs of digits and converts any number between 1 and 26 to the matching letter.',
                  },
                  {
                    q: 'What separator should I use?',
                    a: 'Space-separated (e.g. 8 5 12 12 15) is the most readable and easiest to decode by hand. Dash-separated (8-5-12-12-15) is compact. No separator is useful if you\'re sure every number is a single digit (A–I, 1–9).',
                  },
                  {
                    q: 'Is this the same as ASCII?',
                    a: 'No. ASCII assigns numbers to all characters starting from 65 for A. The A1Z26 cipher simply assigns positions 1–26 to A–Z. It\'s a much simpler and older scheme.',
                  },
                ].map(faq => (
                  <div key={faq.q} className="p-4 bg-muted/20 rounded-xl">
                    <h3 className="font-semibold mb-2 text-sm">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Quick reference */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3">Quick Reference</h3>
              <div className="grid grid-cols-2 gap-1 font-mono text-sm">
                {[
                  ['A','1'], ['B','2'], ['C','3'], ['D','4'], ['E','5'],
                  ['F','6'], ['G','7'], ['H','8'], ['I','9'], ['J','10'],
                  ['K','11'], ['L','12'], ['M','13'], ['N','14'], ['O','15'],
                  ['P','16'], ['Q','17'], ['R','18'], ['S','19'], ['T','20'],
                  ['U','21'], ['V','22'], ['W','23'], ['X','24'], ['Y','25'],
                  ['Z','26'],
                ].map(([l, n]) => (
                  <div key={l} className="flex items-center gap-1.5 py-0.5 border-b border-border/20 last:border-0">
                    <span className="font-bold text-primary w-4">{l}</span>
                    <span className="text-muted-foreground text-xs">=</span>
                    <span>{n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related tools */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { name: 'Morse Code Translator', path: '/tools/morse-code-translator', icon: '📡' },
                  { name: 'English to Binary', path: '/tools/english-to-binary', icon: '01' },
                  { name: 'Standard Galactic Alphabet', path: '/tools/standard-galactic-alphabet', icon: '🔮' },
                  { name: 'Aurebesh Translator', path: '/tools/aurebesh-translator', icon: '⚔️' },
                  { name: 'Al Bhed Translator', path: '/tools/al-bhed-translator', icon: '🎮' },
                  { name: 'Text Obfuscator', path: '/tools/text-obfuscator', icon: '🌀' },
                  { name: 'Runic Alphabet', path: '/tools/runic-alphabet-converter', icon: '᚛' },
                ].map(t => (
                  <Link key={t.path} href={t.path} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm group">
                    <span className="text-lg w-6 text-center">{t.icon}</span>
                    <span className="group-hover:text-primary transition-colors">{t.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Example messages */}
            <div className="p-4 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl border border-blue-500/20">
              <h3 className="font-bold mb-3">🔢 Sample Conversions</h3>
              <div className="space-y-2 text-sm font-mono">
                {[
                  { word: 'HELLO',   nums: '8 5 12 12 15' },
                  { word: 'WORLD',   nums: '23 15 18 12 4' },
                  { word: 'SECRET',  nums: '19 5 3 18 5 20' },
                  { word: 'CODE',    nums: '3 15 4 5' },
                  { word: 'LOVE',    nums: '12 15 22 5' },
                  { word: 'PUZZLE',  nums: '16 21 26 26 12 5' },
                ].map(ex => (
                  <div key={ex.word} className="flex flex-col gap-0.5 py-1.5 border-b border-border/20 last:border-0">
                    <span className="font-bold text-primary">{ex.word}</span>
                    <span className="text-muted-foreground text-xs">{ex.nums}</span>
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
