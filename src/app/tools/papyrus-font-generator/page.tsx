import { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { PapyrusFontGeneratorTool } from '@/components/tools/papyrus-font-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Papyrus Font Generator — 8 Styles, Copy & Paste Free',
  description:
    'Free Papyrus font generator with 8 styles — Classic, Undertale, Avatar blue, Ancient Scroll, Pharaoh\'s Decree, Cursed Tomb, Hieroglyph Border & Neon. Copy and paste instantly. No sign-up.',
  keywords: [
    'papyrus font generator',
    'papyrus text generator',
    'papyrus font copy paste',
    'papyrus font online',
    'undertale papyrus font',
    'avatar papyrus font',
    'papyrus font style',
    'ancient text generator',
    'egyptian font generator',
    'papyrus font meme',
    'papyrus font free',
    'cursive ancient text',
    'papyrus font converter',
    'old papyrus writing generator',
    'hieroglyph text generator',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/papyrus-font-generator',
  },
  openGraph: {
    title: 'Papyrus Font Generator — 8 Styles Free',
    description:
      'Generate Papyrus-style text in 8 variants — Classic, Undertale, Avatar blue, Ancient Scroll, Hieroglyph Border and more. Free, instant, no sign-up.',
    url: 'https://nagritranslate.com/tools/papyrus-font-generator',
    type: 'website',
  },
}

const STYLES_LIST = [
  { name: 'Classic Papyrus', desc: 'Standard Papyrus font — the original, unmodified' },
  { name: 'UNDERTALE Style', desc: 'ALL CAPS orange — how the character Papyrus speaks in the game' },
  { name: "Avatar / Na'vi Blue", desc: 'The infamous blue used in the Avatar (2009) title card' },
  { name: "Ancient Scroll", desc: 'Parchment background with ☥ Ankh decorations' },
  { name: "Pharaoh's Decree", desc: 'Wide letter-spacing, ALL CAPS — commanding and regal' },
  { name: 'Cursed Tomb', desc: 'Blood red on dark background — ominous and horror-themed' },
  { name: 'Hieroglyph Border', desc: 'Flanked by 𓂀 Eye of Horus and 𓃭 Egyptian symbols' },
  { name: 'Neon Sarcophagus', desc: 'Purple neon glow on dark — ancient meets vaporwave' },
]

const FAQ = [
  {
    q: 'What is the Papyrus font?',
    a: "Papyrus is a typeface designed by Chris Costello in 1982 and released through Letraset in 1983. It was designed to resemble text written on papyrus paper in ancient times. It became one of the most widely distributed fonts in history after being bundled with macOS and Microsoft Office — which is exactly why it became a meme: it's everywhere.",
  },
  {
    q: 'Why is Papyrus a meme?',
    a: "Papyrus became notorious for being used in inappropriate contexts — most famously as the official font of the 2009 blockbuster Avatar directed by James Cameron, and the logo for the TV show 'Dexter'. The South Park episode 'Post Covid' (2021) dedicated an entire scene to lampooning Avatar's use of Papyrus. The font had already been mocked in a famous 2017 Saturday Night Live sketch where Ryan Gosling plays a man obsessed with the fact Avatar used Papyrus.",
  },
  {
    q: 'What is Papyrus in Undertale?',
    a: "Papyrus is a major character in Toby Fox's 2015 RPG Undertale. He is a skeleton monster who is extremely confident and speaks exclusively in ALL CAPS using — naturally — the Papyrus font. His catchphrase is 'NYEH HEH HEH!' He is one of the most beloved characters in the game.",
  },
  {
    q: 'Does this tool actually use the Papyrus font?',
    a: "Yes. The tool uses CSS font-family: 'Papyrus', fantasy — which loads the real Papyrus font if it's installed on your device (macOS and Windows with Microsoft Office both include it). If your device doesn't have it, the browser falls back to a similar fantasy serif.",
  },
  {
    q: 'Can I copy and paste Papyrus-style text anywhere?',
    a: "The text you copy is plain Unicode text — the Papyrus styling only appears when the font is applied. To preserve the visual style, use the Download PNG feature if you need it as an image, or paste it into a document/app and set the font to Papyrus manually.",
  },
]

export default function PapyrusFontGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Text Tools', path: '/tools' },
        { name: 'Papyrus Font Generator', path: '/tools/papyrus-font-generator' },
      ]} />
      <WebPageSchema
        path="/tools/papyrus-font-generator"
        name="Papyrus Font Generator — 8 Styles, Copy & Paste Free"
        description="Free Papyrus font generator with 8 styles including Classic, Undertale, Avatar blue, Ancient Scroll and more."
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
          <span className="text-foreground font-medium">Papyrus Font Generator</span>
        </nav>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Papyrus Font Generator</h1>
          <p className="text-muted-foreground text-lg">
            Generate text in 8 Papyrus styles — Classic, Undertale, Avatar blue, Ancient Scroll,
            Hieroglyph Border and more. Copy instantly. Free.
          </p>
        </div>

        {/* Tool */}
        <PapyrusFontGeneratorTool />

        {/* Available Styles */}
        <section className="mt-14 mb-10">
          <h2 className="text-2xl font-bold mb-4">8 Papyrus Styles</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {STYLES_LIST.map((s, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl border bg-muted/10">
                <span className="text-primary font-bold text-sm w-5 shrink-0">{i + 1}.</span>
                <div>
                  <p className="font-semibold text-sm">{s.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What is Papyrus */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Is the Papyrus Font?</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Papyrus is a typeface created by graphic designer{' '}
              <strong className="text-foreground">Chris Costello</strong> in 1982 and commercially released
              through{' '}
              <a href="https://en.wikipedia.org/wiki/Letraset" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                Letraset <ExternalLink className="w-3 h-3" />
              </a>{' '}
              in 1983. It was designed to mimic text written on{' '}
              <a href="https://en.wikipedia.org/wiki/Papyrus" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                papyrus paper <ExternalLink className="w-3 h-3" />
              </a>{' '}
              — the ancient Egyptian writing material made from papyrus plants. The font features
              rough, irregular edges that simulate the texture of the plant fibres.
            </p>
            <p>
              It became one of the most widely distributed fonts in history after being bundled with
              every copy of <strong className="text-foreground">macOS</strong> and{' '}
              <strong className="text-foreground">Microsoft Office</strong> — meaning hundreds of
              millions of people had it on their computers. This ubiquity is exactly what made it
              a cultural phenomenon and, eventually, a meme.
            </p>
            <p>
              For a comprehensive type history, see{' '}
              <a href="https://en.wikipedia.org/wiki/Papyrus_(typeface)" target="_blank" rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                Wikipedia — Papyrus (typeface) <ExternalLink className="w-3 h-3" />
              </a>
              .
            </p>
          </div>
        </section>

        {/* Pop culture */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Papyrus in Pop Culture</h2>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl border bg-blue-500/5 border-blue-500/20">
              <h3 className="font-bold mb-1">Avatar (2009) 🎬</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                James Cameron's record-breaking sci-fi film used Papyrus for its official logo and title
                card. This is widely considered the most high-profile misuse of the font ever. A{' '}
                <a href="https://www.youtube.com/watch?v=jVhlJNJopOQ" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                  2017 SNL sketch <ExternalLink className="w-3 h-3" />
                </a>{' '}
                with Ryan Gosling parodied this decision and went viral.
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-orange-500/5 border-orange-500/20">
              <h3 className="font-bold mb-1">Undertale (2015) 🎮</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Toby Fox's beloved indie RPG{' '}
                <a href="https://en.wikipedia.org/wiki/Undertale" target="_blank" rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium">
                  Undertale <ExternalLink className="w-3 h-3" />
                </a>{' '}
                features a skeleton character literally named Papyrus, who speaks entirely in ALL CAPS
                using the Papyrus font. His brother Sans uses — you guessed it — Comic Sans. This
                meta font joke became iconic among fans.
              </p>
            </div>
            <div className="p-5 rounded-2xl border bg-red-500/5 border-red-500/20">
              <h3 className="font-bold mb-1">Dexter (TV series) 📺</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Showtime serial killer drama <em>Dexter</em> used Papyrus in its title logo,
                pairing it with a blood-spatter motif. Alongside Avatar, this is one of the most
                cited examples of the font being used in a mainstream production with a massive budget.
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
      </main>

      <Footer />
    </div>
  )
}
