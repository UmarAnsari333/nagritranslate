import { Metadata } from 'next'
import { CircledTextGeneratorTool } from '@/components/tools/circled-text-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Circled Text Generator - Ⓒⓘⓡⓒⓛⓔⓓ Letters Copy & Paste',
  description: 'Generate circled text with 14 styles — Ⓒⓘⓡⓒⓛⓔⓓ letters, spaced, framed, and decorated variants plus circled numbers ①②③❶❷❸. Free, instant, copy and paste anywhere.',
  keywords: [
    'circled text generator', 'circled letters', 'circle text', 'circled alphabet',
    'circled text copy paste', 'ⓐ ⓑ ⓒ generator', 'enclosed letters', 'circle letters generator',
    'circled font generator', 'bubble letters generator', 'circle letter text',
    'negative circled letters', 'filled circle letters', 'circled text online',
    'circled numbers generator', 'circle number text', 'enclosed alphanumerics',
    'circled text instagram', 'circled text discord', 'circle text copy paste free',
    'unicode circle letters', 'circled letter converter', 'text in circles',
  ],
  openGraph: {
    title: 'Circled Text Generator — Ⓒⓘⓡⓒⓛⓔ 🅛🅔🅣🅣🅔🅡🅢 Online',
    description: 'Convert any text to circled letters with 12 styles. Open circle, filled/negative circle, circled numbers, spaced & decorative variants. Free & instant.',
    type: 'website',
  },
}

const HERO_SAMPLES = [
  { label: 'Circled',       text: 'Ⓗⓔⓛⓛⓞ' },
  { label: 'Uppercase',     text: 'ⒽⒺⓁⓁⓄ' },
  { label: 'Circled Nums',  text: '①②③④⑤' },
  { label: 'Spaced',        text: 'Ⓗ ⓔ ⓛ ⓛ ⓞ' },
]

export default function CircledTextGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            ⓒ 12 Circled Styles · Open & Filled · Numbers · Copy & Paste
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Circled Text Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Convert any text into circled letters instantly. Choose open-circle Ⓐ, filled-circle 🅐, spaced variants, decorative frames, and circled numbers ①②③ — all copy-paste ready.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {HERO_SAMPLES.map(s => (
              <div key={s.label} className="flex flex-col items-center px-4 py-3 rounded-xl bg-muted/40 border">
                <span className="text-xl sm:text-2xl leading-snug select-all">{s.text}</span>
                <span className="text-[10px] text-muted-foreground mt-1">{s.label}</span>
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
            <div className="p-4 md:p-8 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-cyan-500/5 rounded-2xl border">
              <CircledTextGeneratorTool />
            </div>

            {/* How to use */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Use</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { n: '1', title: 'Type Your Text', desc: 'Enter any word, name, or phrase. All 12 style variants update in real time.' },
                  { n: '2', title: 'Pick a Style', desc: 'Choose open-circle, filled-circle, spaced, framed, or mixed — whatever fits your use case.' },
                  { n: '3', title: 'Save Favourites', desc: 'Heart ❤️ your preferred styles so you can find them quickly on your next visit.' },
                  { n: '4', title: 'Copy & Paste', desc: 'Click any card or the Copy button. Paste directly into Instagram, Discord, Twitter, WhatsApp — anywhere.' },
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

            {/* What are circled letters */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">What Are Circled Letters?</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Circled letters are real <strong className="text-foreground">Unicode characters</strong> — not images or custom fonts. They are part of the <em>Enclosed Alphanumerics</em> block (U+2460–U+24FF) and the <em>Enclosed Alphanumeric Supplement</em> block (U+1F100–U+1F1FF) in the Unicode standard.
                </p>
                <p>
                  Because they are standard Unicode, they render on every device and platform — iOS, Android, Windows, macOS — in any app that supports text. You can copy them just like any other character and paste them into social media bios, usernames, documents, and messages.
                </p>
                <p>
                  There are two main families: <strong className="text-foreground">open-circle</strong> letters (Ⓐ–Ⓩ, ⓐ–ⓩ) with a white background, and <strong className="text-foreground">negative/filled-circle</strong> letters (🅐–🅩) with a filled black background — making them look like badge stamps or bullet-point icons.
                </p>
              </div>
            </div>

            {/* Styles explained */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Style Guide</h2>
              <div className="space-y-3">
                {[
                  {
                    icon: 'Ⓐ',
                    title: 'Open / White Circle',
                    desc: 'Standard circled letters with transparent interior. Available in both upper (Ⓐ–Ⓩ) and lower (ⓐ–ⓩ) case. The default and most universally compatible style.',
                    sample: 'Ⓗⓔⓛⓛⓞ Ⓦⓞⓡⓛⓓ',
                  },
                  {
                    icon: '◉',
                    title: 'Spaced & Framed Variants',
                    desc: 'Circled letters separated by spaces or middle dots, or wrapped in circle-shaped symbols like ◉, ◎, ⊙, and ○. Great for titles, banners, and decorative headers.',
                    sample: 'Ⓗ ⓔ ⓛ ⓛ ⓞ · ◉ Ⓦⓞⓡⓛⓓ ◉',
                  },
                  {
                    icon: '①',
                    title: 'Circled Numbers',
                    desc: 'Circled digits ①–⑳ for open circles and ❶–❿ for filled circles. Commonly used in lists, steps, rankings, and annotations.',
                    sample: '① First  ② Second  ③ Third',
                  },
                  {
                    icon: '⊙',
                    title: 'Decorative Frames',
                    desc: 'Circle-symbol borders (◉, ⬤, ⊙, ○) added around circled text for extra decoration — great for Instagram bios and headers.',
                    sample: '◉ Ⓗⓔⓛⓛⓞ ◉',
                  },
                ].map(s => (
                  <div key={s.title} className="p-4 rounded-xl border bg-muted/20">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{s.icon}</span>
                      <h3 className="font-semibold text-sm">{s.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2">{s.desc}</p>
                    <p className="text-lg select-all">{s.sample}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to use */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Where to Use Circled Text</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: '📸', title: 'Instagram Bio', desc: 'Circled text in bios makes sections stand out — great for contact info, location, and links.' },
                  { icon: '🎮', title: 'Discord Names', desc: 'Use filled-circle letters for a unique, badge-like username or server tag.' },
                  { icon: '📝', title: 'Documents & Notes', desc: 'Use circled numbers for step lists, footnotes, and annotations that look professional.' },
                  { icon: '🐦', title: 'Twitter / X Profiles', desc: 'Circled display names and tweets get attention in feeds.' },
                  { icon: '🏷️', title: 'Bullet Lists', desc: 'Replace plain bullets with ① ② ③ for clean, visual numbered lists anywhere.' },
                  { icon: '🎁', title: 'Creative Messages', desc: 'Send birthday greetings, announcements, and shoutouts with styled circled text.' },
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
                    q: 'Do circled letters work on all platforms?',
                    a: 'Yes. Open-circle letters (Ⓐ–Ⓩ, ⓐ–ⓩ) are part of the core Unicode standard and render on all modern devices and platforms. Filled-circle letters (🅐–🅩) are emoji-block characters and render on iOS, Android, Windows 10+, and macOS — with rare exceptions on very old systems.',
                  },
                  {
                    q: 'Are filled-circle letters only uppercase?',
                    a: 'Yes — the Unicode Enclosed Alphanumeric Supplement only defines filled-circle versions for A–Z (uppercase). Our tool automatically maps lowercase input to the uppercase filled-circle equivalents.',
                  },
                  {
                    q: 'What happens to spaces and special characters?',
                    a: 'Spaces are preserved as-is (or as wider gaps in spaced styles). Numbers 0–9 are converted to circled equivalents ⓪–⑨. Punctuation and symbols without circled equivalents pass through unchanged.',
                  },
                  {
                    q: 'Can I use circled text in usernames?',
                    a: 'Most platforms allow Unicode characters in display names. Some (like Twitter/X, Discord, Instagram) allow circled letters in display names but not in @handles/usernames which are restricted to standard alphanumerics.',
                  },
                  {
                    q: 'What are circled numbers used for?',
                    a: 'Circled numbers ①②③ are widely used for ordered lists, step-by-step instructions, footnote references, map annotations, and anywhere you need clean numbered labels that stay as plain text.',
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

            {/* Quick alphabet */}
            <div className="p-4 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl border border-blue-500/20">
              <h3 className="font-bold mb-2">Ⓐ–Ⓩ Open Circle</h3>
              <p className="text-xl leading-relaxed break-all select-all">
                ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ
              </p>
              <p className="text-xl leading-relaxed break-all select-all mt-1">
                ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ
              </p>
              <p className="text-[10px] text-muted-foreground mt-2">Click to select all</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-2">◉ Framed Styles</h3>
              <div className="space-y-1 text-lg select-all">
                <p>◉ Ⓗⓔⓛⓛⓞ ◉</p>
                <p>◎ Ⓗⓔⓛⓛⓞ ◎</p>
                <p>⊙ Ⓗⓔⓛⓛⓞ ⊙</p>
                <p>○ Ⓗⓔⓛⓛⓞ ○</p>
              </div>
            </div>

            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-2">①–⑳ Circled Numbers</h3>
              <p className="text-xl leading-relaxed select-all">
                ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳
              </p>
              <p className="text-xl leading-relaxed select-all mt-1">
                ❶❷❸❹❺❻❼❽❾❿
              </p>
              <p className="text-[10px] text-muted-foreground mt-2">Open (top) · Filled (bottom)</p>
            </div>

            {/* Related tools */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { name: 'Fancy Text Generator',    path: '/tools/fancy-text-generator',    icon: '✨' },
                  { name: 'Fancy Letters',            path: '/tools/fancy-letters',            icon: '🔡' },
                  { name: 'Calligraphy Alphabet',     path: '/tools/calligraphy-alphabet',     icon: '✒️' },
                  { name: 'Aesthetic Fonts',           path: '/tools/aesthetic-fonts-generator', icon: '🌸' },
                  { name: 'Glitch Text Generator',    path: '/tools/glitch-text-generator',    icon: '👾' },
                  { name: 'Tiny Text Generator',      path: '/tools/tiny-text-generator',      icon: '🔤' },
                  { name: 'Underline Text Generator', path: '/tools/underline-text-generator', icon: '📝' },
                ].map(t => (
                  <Link key={t.path} href={t.path} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm group">
                    <span className="text-lg w-6 text-center">{t.icon}</span>
                    <span className="group-hover:text-primary transition-colors">{t.name}</span>
                  </Link>
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
