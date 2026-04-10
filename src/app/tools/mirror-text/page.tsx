import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { MirrorTextTool } from '@/components/tools/mirror-text-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mirror Text Generator - Reverse & Mirror Writing Like Da Vinci',
  description: 'Free online mirror text generator. Convert any text into reversed mirror writing using Unicode characters — just like Leonardo da Vinci\'s famous notebooks. Three modes: full mirror, reverse only, and mirror characters.',
  keywords: [
    'mirror text generator', 'mirror writing', 'reverse text', 'da vinci handwriting',
    'mirror text online', 'backwards text generator', 'reverse writing', 'mirror font',
    'upside down text', 'flip text', 'da vinci code', 'mirror writing generator',
    'unicode mirror text', 'backwards alphabet', 'reverse alphabet',
  ],
  openGraph: {
    title: 'Mirror Text Generator — Write Like Leonardo da Vinci',
    description: 'Convert text into mirror writing using Unicode characters. Just like da Vinci\'s famous reversed notebooks. Three styles, instant, free.',
    type: 'website',
  },
}

export default function MirrorTextPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Mirror Text Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert text into mirror writing using Unicode characters — exactly as
            <strong> Leonardo da Vinci</strong> wrote in his famous notebooks. Ideal for puzzles,
            secret messages, artistic typography, and creative projects.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <MirrorTextTool />
            </div>

            {/* What is Mirror Writing */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What is Mirror Writing?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong>Mirror writing</strong> is a form of script in which letters and words are written in reverse — readable only when held up to a mirror or viewed through a transparent surface from behind. Each individual character is also flipped horizontally, creating a true mirror image of normal text.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                This tool replicates that effect digitally using <strong>Unicode characters</strong> that are visually mirrored equivalents of standard Latin letters. For example, the letter <code className="font-mono bg-muted px-1 rounded">b</code> becomes <code className="font-mono bg-muted px-1 rounded">d</code>, <code className="font-mono bg-muted px-1 rounded">p</code> becomes <code className="font-mono bg-muted px-1 rounded">q</code>, <code className="font-mono bg-muted px-1 rounded">E</code> becomes <code className="font-mono bg-muted px-1 rounded">Ǝ</code>, and so on. The entire string is then reversed to complete the mirror effect.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Some letters — such as <code className="font-mono bg-muted px-1 rounded">A</code>, <code className="font-mono bg-muted px-1 rounded">H</code>, <code className="font-mono bg-muted px-1 rounded">I</code>, <code className="font-mono bg-muted px-1 rounded">M</code>, <code className="font-mono bg-muted px-1 rounded">O</code>, <code className="font-mono bg-muted px-1 rounded">T</code>, <code className="font-mono bg-muted px-1 rounded">U</code>, <code className="font-mono bg-muted px-1 rounded">V</code>, <code className="font-mono bg-muted px-1 rounded">W</code>, <code className="font-mono bg-muted px-1 rounded">X</code>, and <code className="font-mono bg-muted px-1 rounded">Y</code> — are already horizontally symmetric, so they remain unchanged in mirror writing.
              </p>
            </div>

            {/* Da Vinci History */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Leonardo da Vinci and Mirror Writing</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The most famous practitioner of mirror writing in history was <strong>Leonardo da Vinci</strong> (1452–1519) — the Italian Renaissance polymath known for works like the <em>Mona Lisa</em> and <em>The Last Supper</em>. Da Vinci filled over <strong>7,000 pages</strong> of notebooks in his distinctive mirror script, writing from right to left in Italian, with each letter reversed.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Historians have proposed several theories as to why da Vinci wrote this way. As a <strong>left-handed writer</strong>, mirror writing may have been more natural and comfortable — avoiding the smearing of wet ink as his hand moved across the page. Others suggest it was a form of personal shorthand, or a deliberate attempt to make his scientific notes harder to read by casual observers, protecting his ideas from being copied.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                His notebooks contained groundbreaking observations on anatomy, engineering, hydrology, optics, and botany — all recorded in this reversed hand. The notebooks were largely unread during his lifetime and only deciphered centuries later when scholars used mirrors to reverse the script. Today they are considered among the{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Leonardo_da_Vinci%27s_notebooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  greatest scientific manuscripts in history
                </a>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Interestingly, da Vinci could also write normally from left to right when communicating with others — suggesting the mirror writing was a deliberate personal choice rather than a neurological necessity. Neurological cases of natural mirror writing have been documented in{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Mirror_writing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                  medical literature
                </a>
                , particularly in left-handed children learning to write.
              </p>
            </div>

            {/* How it works */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How the Mirror Text Generator Works</h2>
              <div className="space-y-4">
                {[
                  {
                    n: '1', title: 'Character Replacement',
                    desc: 'Each letter is replaced with its Unicode mirror equivalent. For example: b→d, p→q, E→Ǝ, N→И, R→ᴚ, F→ꟻ. Symmetric letters (A, H, I, M, O, T, V, W, X, Y) stay unchanged.',
                  },
                  {
                    n: '2', title: 'String Reversal',
                    desc: 'In Full Mirror mode, the entire string is reversed after character replacement — so the last character appears first, just as in true mirror writing. This is what da Vinci did.',
                  },
                  {
                    n: '3', title: 'Line-by-Line Processing',
                    desc: 'Multi-line text is mirrored one line at a time, preserving your paragraph structure while fully mirroring each individual line.',
                  },
                  {
                    n: '4', title: 'Unicode Compatible',
                    desc: 'All output characters are standard Unicode — they work on every platform including iOS, Android, Discord, Twitter, Instagram, and WhatsApp without needing a special font.',
                  },
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

            {/* Three modes explained */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Three Mirror Modes</h2>
              <div className="space-y-4">
                {[
                  {
                    mode: 'Full Mirror (Da Vinci)',
                    example: '"Hello" → "ollǝH"',
                    desc: 'Replaces each character with its mirror Unicode equivalent AND reverses the entire string. This is true mirror writing — the result reads correctly when held up to a mirror.',
                  },
                  {
                    mode: 'Reverse Only',
                    example: '"Hello" → "olleH"',
                    desc: 'Simply reverses the string order without replacing individual characters. Text reads backward but letters themselves are not flipped.',
                  },
                  {
                    mode: 'Mirror Characters Only',
                    example: '"Hello" → "Hǝllo"',
                    desc: 'Replaces letters with their mirror equivalents but does not reverse the string order. Each letter looks mirrored but the word order is preserved.',
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

            {/* Famous examples */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Famous Uses of Mirror Writing</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Da Vinci\'s Notebooks',
                    desc: 'Over 7,000 pages of scientific observations, anatomical drawings, and inventions written entirely in mirror script. Housed in museums including the{" "}<a href="https://www.vam.ac.uk/articles/explore-leonardos-notebooks" target="_blank" rel="noopener noreferrer" class="text-primary underline">Victoria & Albert Museum</a> and the Royal Library, Windsor.',
                  },
                  {
                    title: 'Lewis Carroll',
                    desc: 'Through the Looking-Glass (1871) features mirror writing as a central plot device — Alice enters a world where everything is reversed, including text and logic.',
                  },
                  {
                    title: 'Ambulance Text',
                    desc: 'The word "AMBULANCE" is often written in mirror on the front of emergency vehicles so drivers can read it correctly in their rear-view mirrors.',
                  },
                  {
                    title: 'The Shining',
                    desc: 'Stanley Kubrick\'s 1980 film features the word "REDRUM" written in mirror — only readable as "MURDER" when reflected in a mirror.',
                  },
                  {
                    title: 'Secret Messages',
                    desc: 'Mirror writing has been used historically for private correspondence and diary entries. It provides a simple but visually striking form of obfuscation.',
                  },
                  {
                    title: 'Artistic Typography',
                    desc: 'Mirror text is widely used in logos, album covers, and graphic design for its striking visual symmetry and the sense of mystery it evokes.',
                  },
                ].map(item => (
                  <div key={item.title} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                    <p
                      className="text-xs text-muted-foreground leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Why did da Vinci write in mirror script?',
                    a: 'The most widely accepted theory is that da Vinci was left-handed, and mirror writing (right to left) prevented his hand from smearing wet ink as it moved across the page. Some scholars also believe it was a form of personal shorthand or mild protection against casual readers copying his ideas. He could write normally when needed, suggesting it was a deliberate preference.',
                  },
                  {
                    q: 'Can I read mirror text without a mirror?',
                    a: 'With practice, yes. Many people who study da Vinci\'s notebooks develop the ability to read mirror script naturally. Alternatively, you can take a photo of mirror text and use your phone\'s front-facing camera as a mirror, or simply flip the image horizontally in any photo editor.',
                  },
                  {
                    q: 'Does mirror text work on social media?',
                    a: 'Yes — all characters used are standard Unicode and work on Twitter/X, Instagram, Discord, WhatsApp, Facebook, Reddit, and every modern platform without any special fonts.',
                  },
                  {
                    q: 'Why do some letters look the same in mirror writing?',
                    a: 'Certain letters are horizontally symmetric — they look identical when flipped: A, H, I, M, O, T, U, V, W, X, and Y. These characters are unchanged in the output because flipping them produces the exact same shape.',
                  },
                  {
                    q: 'Is mirror writing a sign of dyslexia?',
                    a: 'Mirror writing is common in young children learning to write and is not necessarily a sign of dyslexia. However, persistent mirror writing in older children or adults can occasionally be associated with certain neurological conditions. Da Vinci himself showed no signs of dyslexia — his mirror writing appears to have been entirely intentional.',
                  },
                  {
                    q: 'What is the difference between mirror text and upside-down text?',
                    a: 'Mirror text flips characters horizontally (left-right) and reverses the string — like holding text in front of a mirror. Upside-down text rotates characters 180° vertically and reverses the string — like reading text upside-down. Our Fancy Text Generator and Tiny Text Generator also support upside-down styles.',
                  },
                ].map(item => (
                  <div key={item.q} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* External resources */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Learn More</h2>
              <p className="text-muted-foreground mb-4 text-sm">Explore these authoritative external resources on mirror writing and da Vinci:</p>
              <ul className="space-y-3">
                {[
                  {
                    href: 'https://en.wikipedia.org/wiki/Mirror_writing',
                    label: 'Mirror Writing — Wikipedia',
                    desc: 'Comprehensive overview of mirror writing including history, neurology, and famous examples.',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Leonardo_da_Vinci%27s_notebooks',
                    label: 'Leonardo da Vinci\'s Notebooks — Wikipedia',
                    desc: 'Details on the contents, history, and locations of da Vinci\'s manuscript notebooks.',
                  },
                  {
                    href: 'https://www.vam.ac.uk/articles/explore-leonardos-notebooks',
                    label: 'Explore Leonardo\'s Notebooks — Victoria & Albert Museum',
                    desc: 'The V&A\'s guide to da Vinci\'s notebooks with high-resolution scans and expert commentary.',
                  },
                  {
                    href: 'https://www.britishmuseum.org/collection/term/BIOG163481',
                    label: 'Leonardo da Vinci Collection — British Museum',
                    desc: 'Browse da Vinci drawings and manuscripts in the British Museum\'s collection.',
                  },
                ].map(r => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 p-3 rounded-xl bg-background/60 hover:bg-background transition-colors border border-transparent hover:border-primary/20"
                    >
                      <span className="text-primary mt-0.5 flex-shrink-0">↗</span>
                      <div>
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">{r.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Related tools */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Related Text Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools', label: 'View All Tools', sub: 'Browse all text tools' },
                  { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', sub: 'Bold, script, upside-down & more' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', sub: '25+ cursed & glitch styles' },
                  { href: '/tools/tiny-text-generator', label: 'Tiny Text Generator', sub: 'Superscript, subscript, small caps' },
                  { href: '/tools/vaporwave-text-generator', label: 'Vaporwave Text Generator', sub: 'Full-width aesthetic styles' },
                  { href: '/tools/zalgo-text-generator', label: 'Zalgo Text Generator', sub: 'Creepy dripping diacritics' },
                  { href: '/tools/aurebesh-translator', label: 'Aurebesh Translator', sub: 'Star Wars alphabet' },
                  { href: '/tools/morse-code-translator', label: 'Morse Code Translator', sub: 'Text to Morse with audio' },
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

            {/* Mirror alphabet */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Mirror Alphabet</h3>
              <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                {[
                  ['a','ɒ'],['b','d'],['c','ɔ'],['d','b'],['e','ə'],['f','ꟻ'],
                  ['g','ϱ'],['h','ʜ'],['k','ʞ'],['n','ᴎ'],['p','q'],['q','p'],
                  ['r','ɹ'],['s','ƨ'],['y','ʎ'],
                  ['B','ᗺ'],['C','Ↄ'],['D','ᗡ'],['E','Ǝ'],['F','ꟻ'],
                  ['N','И'],['P','ꟼ'],['R','ᴚ'],['S','Ƨ'],
                ].map(([orig, mir]) => (
                  <div key={orig} className="flex items-center gap-1.5 p-1 rounded bg-background/50">
                    <span className="text-primary font-bold w-4 text-center">{orig}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-bold">{mir}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground mt-3">Symmetric letters (A H I M O T U V W X Y) are unchanged.</p>
            </div>

            {/* Fun facts */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Da Vinci Facts</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  'Da Vinci filled over 7,000 notebook pages in mirror script during his lifetime.',
                  'He wrote in Italian from right to left, with every letter reversed.',
                  'His notebooks weren\'t fully studied until centuries after his death.',
                  'Scholars use a simple mirror or flip the images to read his writing.',
                  '"AMBULANCE" on emergency vehicles is mirror-printed so drivers read it in their rear-view mirrors.',
                  'Children sometimes naturally write in mirror script while learning to write.',
                ].map((fact, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary font-bold flex-shrink-0">↔</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use cases */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Common Uses</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Secret messages and private notes',
                  'Artistic typography and logos',
                  'Puzzle and escape room design',
                  'Social media captions and bios',
                  'Halloween and mystery themes',
                  'Educational demonstrations',
                  'Gaming usernames and nicknames',
                  'Mirror tattoo designs',
                ].map(u => (
                  <li key={u} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">↔</span>
                    <span>{u}</span>
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
