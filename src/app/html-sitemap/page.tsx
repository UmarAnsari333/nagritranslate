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
  { name: 'Fancy Text Generator', path: '/tools/fancy-text-generator', desc: 'Bold, script, gothic & more' },
  { name: 'Fancy Letters', path: '/tools/fancy-letters', desc: '50+ Unicode letter styles & frames' },
  { name: 'Numbers To Words', path: '/tools/numbers-to-words', desc: 'Convert numbers to written words' },
  { name: 'Morse Code Translator', path: '/tools/morse-code-translator', desc: 'Text ↔ Morse with audio playback' },
  { name: 'Tiny Text Generator', path: '/tools/tiny-text-generator', desc: 'Superscript, subscript, small caps' },
  { name: 'Vaporwave Text Generator', path: '/tools/vaporwave-text-generator', desc: 'Full-width aesthetic text styles' },
  { name: 'English to Binary', path: '/tools/english-to-binary', desc: 'Text ↔ binary, hex, octal, decimal' },
  { name: 'Ned Flanders Translator', path: '/tools/ned-flanders-translator', desc: 'Diddly-doodly Simpsons speak' },
  { name: 'Robot Voice Generator', path: '/tools/robot-voice-generator', desc: 'Robot voice with 6 text styles' },
  { name: 'Zalgo Text Generator', path: '/tools/zalgo-text-generator', desc: 'Creepy dripping diacritic text' },
  { name: 'Aurebesh Translator', path: '/tools/aurebesh-translator', desc: 'Star Wars Galactic Basic script' },
  { name: 'Mirror Text Generator', path: '/tools/mirror-text', desc: 'Da Vinci-style Unicode mirror writing' },
  { name: 'Cool Agario Names', path: '/tools/agario-names', desc: '80+ fancy styles for Agar.io' },
  { name: 'Emoji Translator', path: '/tools/emoji-translator', desc: '2000+ words mapped to emoji' },
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
