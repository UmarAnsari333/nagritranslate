import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { languages, slugifyLanguage } from '@/lib/languages'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Sitemap — All Pages | Nagri Translate',
  description:
    'Complete sitemap of Nagri Translate. Browse all text tools, translation pages for 248+ languages including Spanish, French, Arabic, Hindi, Chinese, and more.',
  alternates: {
    canonical: 'https://nagritranslate.com/html-sitemap',
  },
}

const TEXT_TOOLS = [
  { name: 'Word Counter', path: '/tools/word-counter', desc: 'Count words, characters & paragraphs' },
  { name: 'Case Converter', path: '/tools/case-converter', desc: 'Uppercase, lowercase, title case' },
  { name: 'Random Word Generator', path: '/tools/random-word-generator', desc: 'Generate random words' },
  { name: 'Slug Generator', path: '/tools/slug-generator', desc: 'URL-friendly slugs from text' },
  { name: 'URL Encoder / Decoder', path: '/tools/url-encoder-decoder', desc: 'Percent-encode and decode URLs' },
  { name: 'Sort & Deduplicate', path: '/tools/sort-deduplicate', desc: 'Sort and remove duplicate lines' },
  { name: 'Find and Replace', path: '/tools/find-replace', desc: 'Find and replace text with regex' },
  { name: 'Remove Whitespace', path: '/tools/remove-whitespace', desc: 'Strip extra spaces and line breaks' },
  { name: 'Text Repeater', path: '/tools/text-repeater', desc: 'Repeat text with custom separators' },
  { name: 'Text Reverser', path: '/tools/text-reverser', desc: 'Reverse text, words, or both' },
  { name: 'Citation Generator', path: '/tools/citation-generator', desc: 'APA, MLA, Chicago, Harvard styles' },
  { name: 'Sort Text', path: '/tools/sort-text', desc: 'Sort alphabetically, by length, shuffle' },
  { name: 'Add Prefix / Suffix', path: '/tools/add-prefix-suffix', desc: 'Add prefix or suffix to each line' },
  { name: 'Cursive Text Generator', path: '/tools/cursive-text-generator', desc: 'Convert to cursive & handwriting styles' },
  { name: 'Glitch Text Generator', path: '/tools/glitch-text-generator', desc: '25+ glitch and Zalgo text styles' },
  { name: 'Fontlu — Font Generator', path: '/tools/fontlu', desc: 'Free fontlu font generator — 25+ styles, copy & paste' },
  { name: 'Fancy Text Generator', path: '/tools/fancy-text-generator', desc: 'Bold, script, gothic & more' },
  { name: 'Fancy Letters', path: '/tools/fancy-letters', desc: '50+ Unicode letter styles & frames' },
  { name: 'Numbers To Words', path: '/tools/numbers-to-words', desc: 'Convert numbers to written words' },
  { name: 'Morse Code Translator', path: '/tools/morse-code-translator', desc: 'Text ↔ Morse with audio playback' },
  { name: 'Tiny Text Generator', path: '/tools/tiny-text-generator', desc: 'Superscript, subscript, small caps' },
  { name: 'Vaporwave Text Generator', path: '/tools/vaporwave-text-generator', desc: 'Full-width aesthetic text styles' },
  { name: 'English to Binary', path: '/tools/english-to-binary', desc: 'Text ↔ binary, hex, octal, decimal' },
  { name: 'Subscript Generator', path: '/tools/subscript-generator', desc: 'Unicode subscript (H₂O) & superscript (x²) text' },
  { name: 'Text Obfuscator', path: '/tools/text-obfuscator', desc: 'ROT13, ciphers, binary, morse, zalgo & 20+ methods' },
  { name: 'Ned Flanders Translator', path: '/tools/ned-flanders-translator', desc: 'Diddly-doodly Simpsons speak' },
  { name: 'Robot Voice Generator', path: '/tools/robot-voice-generator', desc: 'Robot voice with 6 text styles' },
  { name: 'Zalgo Text Generator', path: '/tools/zalgo-text-generator', desc: 'Creepy dripping diacritic text' },
  { name: "Na'vi Translator", path: '/tools/navi-translator', desc: "English to Na'vi — Avatar alien language" },
  { name: 'Aurebesh Translator', path: '/tools/aurebesh-translator', desc: 'Star Wars Galactic Basic script' },
  { name: 'Mirror Text Generator', path: '/tools/mirror-text', desc: 'Da Vinci-style Unicode mirror writing' },
  { name: 'Cool Agario Names', path: '/tools/agario-names', desc: '80+ fancy styles for Agar.io' },
  { name: 'Emoji Translator', path: '/tools/emoji-translator', desc: '2000+ words mapped to emoji' },
  { name: 'Gibberish Translator', path: '/tools/gibberish-translator', desc: 'Pig Latin, Ubbi Dubbi, Ob, Op, Idig & Tutnese' },
  { name: 'Al Bhed Translator', path: '/tools/al-bhed-translator', desc: 'Final Fantasy X cipher with Primer Mode' },
  { name: 'Medieval English Translator', path: '/tools/medieval-english-translator', desc: 'Thou, thee, thy — Elizabethan & Shakespearean English' },
  { name: 'Papyrus Font Generator', path: '/tools/papyrus-font-generator', desc: '8 styles — Classic, Undertale, Avatar blue, Ancient Scroll & more' },
  { name: 'Lorem Ipsum Generator', path: '/tools/lorem-ipsum-generator', desc: 'Classic, funny themes & by exact character count' },
  { name: 'Comic Sans Font Generator', path: '/tools/comic-sans-font-generator', desc: 'Comic Sans MS + 15 similar Google Fonts — copy or download PNG' },
  { name: 'Pig Latin Translator', path: '/tools/pig-latin-translator', desc: 'English ↔ Pig Latin with Classic & Yay variants and word breakdown' },
  { name: 'Gen Z Translator', path: '/tools/gen-z-translator', desc: 'English ↔ Gen Z slang — bussin, no cap, slay, rizz, bet & 50+ terms' },
]

const PHRASE_COLLECTIONS = [
  { name: 'Old Timey Words & Phrases', path: '/phrases/old-timey-words', desc: 'Victorian, Shakespeare & Jazz Age old-fashioned English' },
  { name: 'Funny & Weird English Words', path: '/phrases/funny-weird-words', desc: 'Real dictionary words that sound absolutely made up' },
  { name: 'British vs American English', path: '/phrases/british-vs-american-english', desc: 'Biscuit vs cookie, boot vs trunk — all the differences' },
  { name: 'Common English Idioms', path: '/phrases/english-idioms', desc: 'Break a leg, bite the bullet — what idioms really mean' },
  { name: 'Collective Nouns', path: '/phrases/collective-nouns', desc: 'A murder of crows, a parliament of owls & more' },
  { name: 'Words Borrowed from Other Languages', path: '/phrases/words-borrowed-from-other-languages', desc: 'Coffee, shampoo, kindergarten — English borrowed from everyone' },
  { name: 'Gen Z & Internet Slang', path: '/phrases/gen-z-slang', desc: 'No cap, rizz, bussin — decode modern internet vocabulary' },
  { name: 'Untranslatable Words', path: '/phrases/untranslatable-words', desc: 'Hygge, saudade, schadenfreude — concepts English can\'t name' },
  { name: 'Cockney Rhyming Slang', path: '/phrases/cockney-rhyming-slang', desc: 'Dog and bone (phone), china plate (mate) — East London\'s code' },
]

// Deduplicate by label (some languages share the same value/code)
const allLanguages = languages
  .filter((l) => l.value !== 'auto')
  .filter((l, i, arr) => arr.findIndex((x) => x.label === l.label) === i)

// Group by first letter
const grouped = allLanguages.reduce<Record<string, typeof allLanguages>>((acc, lang) => {
  const letter = lang.label[0].toUpperCase()
  if (!acc[letter]) acc[letter] = []
  acc[letter].push(lang)
  return acc
}, {})

const letters = Object.keys(grouped).sort()

export default function HtmlSitemapPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Sitemap', path: '/html-sitemap' },
      ]} />
      <WebPageSchema
        path="/html-sitemap"
        name="Sitemap — All Pages | Nagri Translate"
        description="Complete sitemap of Nagri Translate. Browse all text tools and translation pages for 248+ supported languages."
        type="CollectionPage"
      />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Sitemap</span>
        </nav>

        {/* Hero */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Sitemap</h1>
          <p className="text-muted-foreground">
            Browse all pages on Nagri Translate — text tools, translation pages for {allLanguages.length}+ languages, phrases, vocabulary, and more.
          </p>
        </div>

        {/* ── Text Tools ─────────────────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm">🛠</span>
            Text Tools
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
            {TEXT_TOOLS.map((tool) => (
              <li key={tool.path}>
                <Link
                  href={tool.path}
                  className="block px-3 py-2 rounded-lg text-sm hover:bg-muted/40 hover:text-primary transition-colors"
                >
                  <span className="font-medium">{tool.name}</span>
                  <span className="block text-xs text-muted-foreground">{tool.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Phrase Collections ─────────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm">📜</span>
            Phrase Collections
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
            {PHRASE_COLLECTIONS.map((p) => (
              <li key={p.path}>
                <Link
                  href={p.path}
                  className="block px-3 py-2 rounded-lg text-sm hover:bg-muted/40 hover:text-primary transition-colors"
                >
                  <span className="font-medium">{p.name}</span>
                  <span className="block text-xs text-muted-foreground">{p.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Main Pages ─────────────────────────────────────────────────────── */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-3 pb-2 border-b flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm">🏠</span>
            Main Pages
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
            {[
              { name: 'Home', path: '/', desc: 'Nagri Translate homepage' },
              { name: 'AI Translator', path: '/ai-translate', desc: 'Translate between 248+ languages' },
              { name: 'Languages', path: '/languages', desc: 'Browse all supported languages' },
              { name: 'Phrases', path: '/phrases', desc: 'Common phrases by language' },
              { name: 'Learn', path: '/learn', desc: 'Language learning guides' },
              { name: 'Vocabulary', path: '/vocabulary', desc: 'Vocabulary lists by language' },
              { name: 'Text Tools', path: '/tools', desc: 'All free text utilities' },
              { name: 'About', path: '/about', desc: 'About Nagri Translate' },
              { name: 'Contact', path: '/contact', desc: 'Get in touch' },
              { name: 'Privacy Policy', path: '/privacy', desc: 'Privacy policy' },
              { name: 'Terms of Service', path: '/terms', desc: 'Terms of service' },
              { name: 'Disclaimer', path: '/disclaimer', desc: 'Legal disclaimer' },
            ].map((page) => (
              <li key={page.path}>
                <Link
                  href={page.path}
                  className="block px-3 py-2 rounded-lg text-sm hover:bg-muted/40 hover:text-primary transition-colors"
                >
                  <span className="font-medium">{page.name}</span>
                  <span className="block text-xs text-muted-foreground">{page.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Language Translations ───────────────────────────────────────────── */}
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-1">Translation Pages</h2>
          <p className="text-sm text-muted-foreground">Browse all {allLanguages.length} languages. Click a language to see all available translation pairs.</p>
        </div>

        {/* A-Z Jump Nav */}
        <div className="flex flex-wrap gap-1 mb-8 p-3 bg-muted/20 rounded-xl border">
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>

        {/* Language Groups */}
        <div className="space-y-8">
          {letters.map((letter) => (
            <section key={letter} id={`letter-${letter}`}>
              <h2 className="text-xl font-bold mb-3 pb-2 border-b flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-sm">
                  {letter}
                </span>
                {letter}
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
                {grouped[letter].map((lang) => (
                  <li key={lang.label}>
                    <Link
                      href={`/html-sitemap/${slugifyLanguage(lang.label)}`}
                      className="block px-3 py-2 rounded-lg text-sm hover:bg-muted/40 hover:text-primary transition-colors"
                    >
                      {lang.label} translations
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
