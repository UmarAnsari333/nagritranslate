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
    'circled text copy paste', 'enclosed letters', 'circle letters generator',
    'circled font generator', 'bubble letters generator', 'circle letter text',
    'circled text online', 'circled numbers generator', 'circle number text',
    'enclosed alphanumerics', 'circled text instagram', 'circled text discord',
    'circle text copy paste free', 'unicode circle letters', 'text in circles',
  ],
  openGraph: {
    title: 'Circled Text Generator — Ⓒⓘⓡⓒⓛⓔⓓ Letters Online',
    description: 'Convert any text to circled letters with 14 styles. Spaced, framed, circled numbers and more. Free & instant.',
    type: 'website',
  },
}

const HERO_SAMPLES = [
  { label: 'Circled',      text: 'Ⓗⓔⓛⓛⓞ' },
  { label: 'Uppercase',    text: 'ⒽⒺⓁⓁⓄ' },
  { label: 'Numbers',      text: '①②③④⑤' },
  { label: 'Spaced',       text: 'Ⓗ ⓔ ⓛ ⓛ ⓞ' },
]

export default function CircledTextGeneratorPage() {
  return (
    <div className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="w-full px-4 py-8 md:py-14">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            ⓒ 14 Circled Styles · Spaced · Framed · Numbers
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Circled Text Generator
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6 px-2">
            Convert text to circled letters instantly. Circled Ⓐ, spaced variants, decorative frames, and circled numbers ①②③.
          </p>
          {/* Hero samples — 2 per row on mobile */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 max-w-sm sm:max-w-none mx-auto">
            {HERO_SAMPLES.map(s => (
              <div key={s.label} className="flex flex-col items-center px-3 py-2 rounded-xl bg-muted/40 border">
                <span className="text-base sm:text-xl leading-snug select-all">{s.text}</span>
                <span className="text-[10px] text-muted-foreground mt-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main grid ─────────────────────────────────────────────────────── */}
      <section className="w-full px-4 pb-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Tool column */}
          <div className="lg:col-span-2 space-y-6 min-w-0">

            {/* Tool card */}
            <div className="w-full p-4 sm:p-6 bg-gradient-to-br from-blue-500/5 via-indigo-500/5 to-cyan-500/5 rounded-2xl border">
              <CircledTextGeneratorTool />
            </div>

            {/* How to use */}
            <div className="w-full p-4 sm:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl font-bold mb-4">How to Use</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { n: '1', title: 'Type Your Text', desc: 'Enter any word, name, or phrase. All 14 styles update instantly.' },
                  { n: '2', title: 'Pick a Style', desc: 'Choose circled, spaced, framed, or decorated — whatever fits.' },
                  { n: '3', title: 'Save Favourites', desc: 'Heart ❤️ your preferred styles for quick access next visit.' },
                  { n: '4', title: 'Copy & Paste', desc: 'Click any card or Copy button. Works on Instagram, Discord, WhatsApp.' },
                ].map(s => (
                  <div key={s.n} className="flex gap-3 p-3 bg-primary/5 rounded-xl">
                    <div className="flex-shrink-0 w-7 h-7 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xs">{s.n}</div>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-0.5 text-sm">{s.title}</h3>
                      <p className="text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What are circled letters */}
            <div className="w-full p-4 sm:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl font-bold mb-3">What Are Circled Letters?</h2>
              <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <p>
                  Circled letters are real <strong className="text-foreground">Unicode characters</strong> from the <em>Enclosed Alphanumerics</em> block (U+2460–U+24FF). They render on every device and platform — iOS, Android, Windows, macOS — without installing any font.
                </p>
                <p>
                  Open-circle letters (Ⓐ–Ⓩ, ⓐ–ⓩ) have a white centre and are the most universally supported. Circled numbers ①–⑳ and filled dingbat numbers ❶–❿ are also widely supported and great for list-making.
                </p>
              </div>
            </div>

            {/* Style guide */}
            <div className="w-full p-4 sm:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Style Guide</h2>
              <div className="space-y-3">
                {[
                  { icon: 'Ⓐ', title: 'Open Circle', desc: 'Upper (Ⓐ–Ⓩ) and lower (ⓐ–ⓩ) case. Most compatible style.', sample: 'Ⓗⓔⓛⓛⓞ Ⓦⓞⓡⓛⓓ' },
                  { icon: '◉', title: 'Spaced & Framed', desc: 'Letters separated by spaces/dots, or wrapped in ◉ ◎ ⊙ ○.', sample: '◉ Ⓗⓔⓛⓛⓞ ◉' },
                  { icon: '①', title: 'Circled Numbers', desc: '①–⑳ open circle and ❶–❿ filled circle dingbat numbers.', sample: '① Second ② Third ③' },
                ].map(s => (
                  <div key={s.title} className="p-3 rounded-xl border bg-muted/20">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{s.icon}</span>
                      <h3 className="font-semibold text-sm">{s.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1.5">{s.desc}</p>
                    <p className="text-base sm:text-lg select-all break-all">{s.sample}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to use */}
            <div className="w-full p-4 sm:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Where to Use Circled Text</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { icon: '📸', title: 'Instagram Bio', desc: 'Make sections stand out — contact info, location, links.' },
                  { icon: '🎮', title: 'Discord Names', desc: 'Badge-like username or server tag.' },
                  { icon: '📝', title: 'Documents', desc: 'Circled numbers for step lists and footnotes.' },
                  { icon: '🐦', title: 'Twitter / X', desc: 'Circled display names get attention in feeds.' },
                  { icon: '🏷️', title: 'Bullet Lists', desc: 'Replace plain bullets with ① ② ③ anywhere.' },
                  { icon: '🎁', title: 'Messages', desc: 'Birthday greetings and announcements with flair.' },
                ].map(u => (
                  <div key={u.title} className="flex gap-3 p-3 rounded-xl border bg-muted/20">
                    <span className="text-xl flex-shrink-0">{u.icon}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm">{u.title}</p>
                      <p className="text-xs text-muted-foreground">{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="w-full p-4 sm:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl font-bold mb-4">FAQ</h2>
              <div className="space-y-3">
                {[
                  { q: 'Do circled letters work on all platforms?', a: 'Yes. Open-circle letters (Ⓐ–Ⓩ, ⓐ–ⓩ) are part of the core Unicode standard and render on all modern devices without any special font.' },
                  { q: 'What happens to spaces and punctuation?', a: 'Spaces are preserved as-is. Numbers 0–9 become circled equivalents ⓪–⑨. Punctuation without a circled equivalent passes through unchanged.' },
                  { q: 'Can I use circled text in usernames?', a: 'Most platforms allow Unicode in display names. @handles are usually restricted to standard ASCII and won\'t accept circled letters.' },
                  { q: 'What are circled numbers used for?', a: 'Ordered lists, step-by-step instructions, footnote references, map annotations — anywhere you need clean numbered labels in plain text.' },
                ].map(faq => (
                  <div key={faq.q} className="p-3 bg-muted/20 rounded-xl">
                    <h3 className="font-semibold mb-1 text-sm">{faq.q}</h3>
                    <p className="text-xs text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5 min-w-0">

            <div className="p-4 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-2xl border border-blue-500/20">
              <h3 className="font-bold mb-2 text-sm">Ⓐ–Ⓩ Uppercase</h3>
              <p className="text-base leading-relaxed break-all select-all">ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ</p>
              <h3 className="font-bold mb-2 mt-3 text-sm">ⓐ–ⓩ Lowercase</h3>
              <p className="text-base leading-relaxed break-all select-all">ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ</p>
              <p className="text-[10px] text-muted-foreground mt-2">Click to select all</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-2 text-sm">①–⑳ Circled Numbers</h3>
              <p className="text-base leading-relaxed select-all break-all">①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳</p>
              <p className="text-base leading-relaxed select-all mt-1">❶❷❸❹❺❻❼❽❾❿</p>
              <p className="text-[10px] text-muted-foreground mt-2">Open (top) · Filled (bottom)</p>
            </div>

            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3 text-sm">Related Tools</h3>
              <div className="space-y-1">
                {[
                  { name: 'Fancy Text Generator',    path: '/tools/fancy-text-generator',      icon: '✨' },
                  { name: 'Calligraphy Alphabet',    path: '/tools/calligraphy-alphabet',       icon: '✒️' },
                  { name: 'Fancy Letters',           path: '/tools/fancy-letters',              icon: '🔡' },
                  { name: 'Aesthetic Fonts',         path: '/tools/aesthetic-fonts-generator',  icon: '🌸' },
                  { name: 'Glitch Text',             path: '/tools/glitch-text-generator',      icon: '👾' },
                  { name: 'Tiny Text Generator',     path: '/tools/tiny-text-generator',        icon: '🔤' },
                  { name: 'Underline Text',          path: '/tools/underline-text-generator',   icon: '📝' },
                ].map(t => (
                  <Link key={t.path} href={t.path} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm group">
                    <span className="text-base w-5 text-center flex-shrink-0">{t.icon}</span>
                    <span className="group-hover:text-primary transition-colors truncate">{t.name}</span>
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
