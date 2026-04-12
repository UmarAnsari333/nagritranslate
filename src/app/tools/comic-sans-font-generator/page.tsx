import { Metadata } from 'next'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { ComicSansFontGeneratorTool } from '@/components/tools/comic-sans-font-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Comic Sans Font Generator — 15 Fonts, Copy & Paste Free',
  description:
    'Free Comic Sans font generator with 16 fonts — Comic Sans MS, Comic Neue, Patrick Hand, Gloria Hallelujah, Permanent Marker, Indie Flower & more. Preview, copy and download as PNG. No sign-up.',
  keywords: [
    'comic sans font generator',
    'comic sans text generator',
    'comic sans copy paste',
    'fonts like comic sans',
    'comic sans alternative',
    'comic sans online',
    'comic sans google font',
    'comic neue generator',
    'handwritten font generator',
    'casual font generator',
    'comic sans free',
    'patrick hand font',
    'gloria hallelujah font',
    'indie flower font',
    'comic sans meme font',
    'comic sans style fonts',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/comic-sans-font-generator',
  },
  openGraph: {
    title: 'Comic Sans Font Generator — 15 Fonts, Copy & Paste Free',
    description:
      'Preview your text in Comic Sans MS + 15 similar Google Fonts. Copy text or download as 1200px PNG. Free, instant, no sign-up.',
    url: 'https://nagritranslate.com/tools/comic-sans-font-generator',
    type: 'website',
  },
}

const FONTS_LIST = [
  { name: 'Comic Sans MS', badge: 'Original', desc: 'The legendary original — pre-installed on Windows & macOS since 1994' },
  { name: 'Comic Neue', badge: 'Most Similar', desc: 'The cleaned-up redesign — same vibe, more consistent letter forms' },
  { name: 'Patrick Hand', badge: 'Google Font', desc: 'Friendly and legible — closest in weight and feel to Comic Sans' },
  { name: 'Gloria Hallelujah', badge: 'Google Font', desc: 'Expressive, bouncy and full of energy' },
  { name: 'Architects Daughter', badge: 'Google Font', desc: 'Drafting-table casual with a blueprint feel' },
  { name: 'Indie Flower', badge: 'Google Font', desc: 'Light and airy — popular for invitations and greeting cards' },
  { name: 'Caveat', badge: 'Google Font', desc: 'Compact and natural — ideal for annotations and sticky notes' },
  { name: 'Shadows Into Light', badge: 'Google Font', desc: 'Thin and whimsical with delicate letterforms' },
  { name: 'Kalam', badge: 'Google Font', desc: 'Warm and readable — South Asian handwriting influence' },
  { name: 'Permanent Marker', badge: 'Google Font', desc: 'Bold thick marker strokes — great for headings and posters' },
  { name: 'Neucha', badge: 'Google Font', desc: 'Rough charcoal-like texture with lots of personality' },
  { name: 'Reenie Beanie', badge: 'Google Font', desc: 'Very casual — a scrawled quick-note feel' },
  { name: 'Just Another Hand', badge: 'Google Font', desc: 'Minimalist handwriting with clean, open loops' },
  { name: 'Schoolbell', badge: 'Google Font', desc: 'Chalkboard classroom nostalgia' },
  { name: 'Gochi Hand', badge: 'Google Font', desc: 'Japanese-influenced casual handwriting — open and warm' },
]

const FAQ = [
  {
    q: 'What is the Comic Sans font?',
    a: "Comic Sans MS is a sans-serif typeface designed by Vincent Connare at Microsoft in 1994. It was originally created for the speech bubbles of Microsoft Bob, a cartoon dog assistant. Inspired by the lettering in Batman and Watchmen comic books, it was later bundled with Windows 95 and has been a default system font on both Windows and macOS ever since.",
  },
  {
    q: 'Why is Comic Sans so controversial?',
    a: "Comic Sans became ubiquitous because it was pre-installed on hundreds of millions of computers, and people used it everywhere — from birthday party invitations to hospital signs and corporate memos. Designers began the \"Ban Comic Sans\" movement in 1999, arguing it was being used in inappropriate contexts. Ironically, this controversy made it one of the most recognisable and beloved fonts in popular culture, with dedicated fan communities and even a Comic Sans Day (July 4).",
  },
  {
    q: 'What is Comic Neue and how is it different?',
    a: "Comic Neue was designed by Craig Rozynski in 2014 as a refined, more intentional version of Comic Sans. It preserves the casual handwritten feel but has more consistent stroke weights, better spacing, and improved letter forms. It's available as a free Google Font and is considered the \"grown-up\" Comic Sans for people who want the vibe without the stigma.",
  },
  {
    q: 'Can I use these fonts in my projects for free?',
    a: "Yes. All Google Fonts on this page (Comic Neue, Patrick Hand, Gloria Hallelujah, etc.) are free for personal and commercial use under the SIL Open Font License (OFL). Comic Sans MS is a Microsoft font — it comes pre-installed on Windows and macOS and can be used in documents and designs on those systems. For web embedding, use Comic Neue (the Google Font equivalent) instead.",
  },
  {
    q: 'Why does Comic Sans MS look different on some devices?',
    a: "Comic Sans MS is a system font — it must be installed on the device to render correctly. On Windows and macOS (with Microsoft Office), it should appear. On Linux, Android, or some minimally configured systems, the browser will fall back to a generic cursive font. All other fonts in this tool load from Google Fonts and work on every device.",
  },
  {
    q: 'How do I use a downloaded PNG font image?',
    a: "The PNG download gives you a 1200px-wide image of your text rendered in that font. This is useful for social media posts, thumbnails, presentations, or anywhere you can't control the font. For actual font usage in documents or websites, set the font-family in your CSS or word processor instead.",
  },
]

export default function ComicSansFontGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Text Tools', path: '/tools' },
          { name: 'Comic Sans Font Generator', path: '/tools/comic-sans-font-generator' },
        ]}
      />
      <WebPageSchema
        path="/tools/comic-sans-font-generator"
        name="Comic Sans Font Generator — 15 Fonts, Copy & Paste Free"
        description="Preview text in Comic Sans MS and 15 similar Google Fonts. Copy or download as PNG. Free, instant."
        type="WebApplication"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-foreground transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Comic Sans Font Generator</span>
        </nav>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Comic Sans Font Generator</h1>
          <p className="text-muted-foreground text-lg">
            Preview your text in Comic Sans MS and 15 similar Google Fonts. Copy text or download
            as a PNG image. Free, instant, no sign-up.
          </p>
        </div>

        {/* Tool */}
        <ComicSansFontGeneratorTool />

        {/* All 15 Fonts List */}
        <section className="mt-14 mb-10">
          <h2 className="text-2xl font-bold mb-4">All 15 Fonts</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {FONTS_LIST.map((f, i) => (
              <div key={f.name} className="flex gap-3 p-4 rounded-xl border bg-muted/10">
                <span className="text-primary font-bold text-sm w-6 shrink-0">{i + 1}.</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-sm">{f.name}</p>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full border font-medium ${
                      f.badge === 'Original'
                        ? 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20'
                        : f.badge === 'Most Similar'
                          ? 'bg-green-500/10 text-green-700 border-green-500/20'
                          : 'bg-blue-500/10 text-blue-700 border-blue-500/20'
                    }`}>
                      {f.badge}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What is Comic Sans */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Is the Comic Sans Font?</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Comic Sans MS is a casual, informal sans-serif typeface designed by{' '}
              <a
                href="https://en.wikipedia.org/wiki/Vincent_Connare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                Vincent Connare <ExternalLink className="w-3 h-3" />
              </a>{' '}
              at Microsoft in 1994. It was inspired by the lettering in DC Comics —
              specifically{' '}
              <a
                href="https://en.wikipedia.org/wiki/Batman:_The_Dark_Knight_Returns"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                Batman: The Dark Knight Returns <ExternalLink className="w-3 h-3" />
              </a>{' '}
              and Watchmen. Originally designed for the speech bubbles of Microsoft Bob, it was
              later bundled with Windows 95 and shipped on every PC worldwide.
            </p>
            <p>
              Its informal, friendly appearance made it wildly popular with non-designers —
              and equally despised by design professionals who saw it misused in professional
              contexts. This tension made it one of the most culturally significant fonts ever
              created. For the full story, see the{' '}
              <a
                href="https://en.wikipedia.org/wiki/Comic_Sans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                Wikipedia article on Comic Sans <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
          </div>
        </section>

        {/* Pop culture */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Comic Sans in Pop Culture</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border bg-blue-500/5 border-blue-500/20">
              <h3 className="font-bold mb-1">Ban Comic Sans Movement 🚫</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Started by designers Holly and David Combs in 1999, the{' '}
                <a
                  href="http://www.bancomicsans.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
                >
                  Ban Comic Sans <ExternalLink className="w-3 h-3" />
                </a>{' '}
                campaign argued the font was chronically misused in serious contexts. Ironically,
                the backlash cemented Comic Sans as a cultural icon rather than killing it.
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-orange-500/5 border-orange-500/20">
              <h3 className="font-bold mb-1">Higgs Boson Announcement (2012) 🔬</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                When CERN announced the discovery of the Higgs boson — one of the most significant
                scientific discoveries of the century — their presentation slides were made in Comic
                Sans. This sparked international headlines, outrage, and memes in equal measure.
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-purple-500/5 border-purple-500/20">
              <h3 className="font-bold mb-1">Undertale (2015) 🎮</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Toby Fox&apos;s indie RPG{' '}
                <a
                  href="https://en.wikipedia.org/wiki/Undertale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
                >
                  Undertale <ExternalLink className="w-3 h-3" />
                </a>{' '}
                features a skeleton character named Sans who speaks in — you guessed it — Comic Sans.
                His brother is named Papyrus and uses the Papyrus font. The font jokes became iconic
                among the game&apos;s massive fanbase.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border p-5">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related tools CTA */}
        <section className="mb-10 grid sm:grid-cols-2 gap-4">
          <Link
            href="/tools/papyrus-font-generator"
            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border bg-gradient-to-br from-amber-500/5 to-yellow-500/10 border-amber-500/20 hover:shadow-md transition-all"
          >
            <div>
              <p className="font-bold text-sm mb-1">𓂀 Papyrus Font Generator</p>
              <p className="text-xs text-muted-foreground">The other legendary meme font — 8 styles</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </Link>
          <Link
            href="/tools/fontlu"
            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border bg-gradient-to-br from-violet-500/5 to-indigo-500/10 border-violet-500/20 hover:shadow-md transition-all"
          >
            <div>
              <p className="font-bold text-sm mb-1">𝓕 Fontlu — Font Generator</p>
              <p className="text-xs text-muted-foreground">25+ bold, script & gothic Unicode styles</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
