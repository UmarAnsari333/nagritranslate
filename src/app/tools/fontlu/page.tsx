import { Metadata } from 'next'
import { Sparkles, ArrowRight, Check, Type, Zap, Copy, Globe } from 'lucide-react'
import { FontluTool } from '@/components/tools/fontlu-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Fontlu — Free Font Generator & Typography Tool | Copy & Paste',
  description:
    'Fontlu free alternative — generate 25+ fancy font styles online. Bold, script, gothic, cursive, circled & more. Copy and paste into Instagram, TikTok, Discord, WhatsApp instantly. No sign-up.',
  keywords: [
    'fontlu',
    'fontlu free',
    'fontlu alternative',
    'fontlu font generator',
    'font generator',
    'fancy font generator',
    'copy paste fonts',
    'unicode font generator',
    'stylish text generator',
    'fancy text copy paste',
    'instagram fonts',
    'discord fonts',
    'tiktok fonts',
    'cool text generator',
    'online font tool',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/fontlu',
  },
  openGraph: {
    title: 'Fontlu — Free Font Generator & Typography Tool',
    description:
      'Generate 25+ fancy font styles free. Bold, script, gothic, cursive & more. Copy and paste anywhere — Instagram, Discord, TikTok, WhatsApp.',
    url: 'https://nagritranslate.com/tools/fontlu',
    type: 'website',
  },
}

const STYLE_PREVIEWS = [
  { label: 'Playfair Display', font: 'Playfair Display', color: 'text-violet-600 dark:text-violet-400' },
  { label: 'Bebas Neue',       font: 'Bebas Neue',       color: 'text-rose-600 dark:text-rose-400' },
  { label: 'Dancing Script',   font: 'Dancing Script',   color: 'text-blue-600 dark:text-blue-400' },
  { label: 'Fira Code',        font: 'Fira Code',        color: 'text-emerald-600 dark:text-emerald-400' },
  { label: 'Pacifico',         font: 'Pacifico',         color: 'text-amber-600 dark:text-amber-400' },
  { label: 'Press Start 2P',   font: 'Press Start 2P',   color: 'text-pink-600 dark:text-pink-400' },
]

const PLATFORMS = ['Instagram', 'TikTok', 'Twitter / X', 'Discord', 'WhatsApp', 'Facebook', 'YouTube', 'Reddit', 'Telegram', 'Snapchat']

const FEATURES = [
  { icon: <Type className="w-5 h-5" />, title: '25+ Font Styles', desc: 'Bold, italic, script, gothic, circled, fullwidth, upside down, small caps, strikethrough, and more.' },
  { icon: <Zap className="w-5 h-5" />, title: 'Instant Generation', desc: 'All font styles generate in real time as you type — no waiting, no loading.' },
  { icon: <Copy className="w-5 h-5" />, title: 'One-Click Copy', desc: 'Click any style to instantly copy it to your clipboard. Ready to paste anywhere.' },
  { icon: <Globe className="w-5 h-5" />, title: 'Works Everywhere', desc: 'Unicode-based fonts work on every platform and device — no app or font install needed.' },
]

const FONT_STYLES = [
  { name: 'Sans Serif', count: '30 fonts', examples: 'Inter, Roboto, Poppins, Montserrat, Lato…' },
  { name: 'Serif', count: '18 fonts', examples: 'Playfair Display, Merriweather, Lora, EB Garamond…' },
  { name: 'Display', count: '18 fonts', examples: 'Bebas Neue, Anton, Bangers, Abril Fatface…' },
  { name: 'Handwriting', count: '18 fonts', examples: 'Dancing Script, Pacifico, Caveat, Great Vibes…' },
  { name: 'Monospace', count: '10 fonts', examples: 'Fira Code, JetBrains Mono, Source Code Pro…' },
  { name: 'Special / Fun', count: '10 fonts', examples: 'Press Start 2P, Orbitron, Creepster, VT323…' },
]

const USE_CASES = [
  { emoji: '📱', title: 'Instagram & TikTok Bios', desc: 'Stand out with a stylish bio that looks like it was designed by a professional.' },
  { emoji: '🎮', title: 'Gaming Usernames', desc: 'Create unique Discord names, gamertags, and clan tags that look cool in any lobby.' },
  { emoji: '💌', title: 'Messages & Stories', desc: 'Add flair to WhatsApp messages, Instagram stories, and DMs.' },
  { emoji: '🏷️', title: 'Personal Branding', desc: 'Use elegant font styles in watermarks, signatures, and personal brand content.' },
  { emoji: '🎂', title: 'Celebrations & Wishes', desc: 'Send birthday, anniversary, and congratulation messages in beautiful styled text.' },
  { emoji: '📣', title: 'Announcements', desc: 'Make your posts and captions pop with bold or decorative typography.' },
]

const FAQS = [
  {
    q: 'What is Fontlu?',
    a: 'Fontlu is a typography and font management platform for designers and content creators. It helps users discover, preview, and organize fonts. Our tool provides the font generation side — converting your text into 25+ copy-paste Unicode font styles instantly, free of charge.',
  },
  {
    q: 'Is this a free Fontlu alternative?',
    a: 'Yes — our font generator is completely free with no sign-up required. Type any text and instantly get 25+ styled font outputs you can copy and paste into Instagram, TikTok, Discord, Twitter, or anywhere else.',
  },
  {
    q: 'How does the font generator work?',
    a: 'It uses Unicode — a universal character standard that includes thousands of decorative and mathematical characters that visually resemble bold, italic, gothic, script, and other font styles. Since these are actual characters (not fonts), they can be pasted into any text field that supports Unicode.',
  },
  {
    q: 'Will the font styles work when I paste them?',
    a: 'Yes! Because these are Unicode characters — not fonts — they display correctly in any app or platform that supports Unicode text. This includes Instagram, TikTok, Twitter, Discord, WhatsApp, Facebook, YouTube, and most websites.',
  },
  {
    q: 'What font styles are available?',
    a: 'Over 25 styles including Serif Bold, Sans Bold, Bold Italic, Script, Bold Script, Gothic/Fraktur, Double Struck, Circled, Fullwidth (vaporwave), Small Caps, Upside Down, Mirror, and Strikethrough.',
  },
  {
    q: 'Can I use these fonts on Instagram?',
    a: 'Absolutely. Instagram supports Unicode, so all font styles from this generator work perfectly in bios, captions, comments, and DMs. The bold and script styles are especially popular for Instagram bios.',
  },
  {
    q: 'Does this work on mobile?',
    a: 'Yes — fully responsive and mobile-friendly. Type on your phone, tap to copy, and paste directly into any app.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No installation needed. No sign-up. No download. Open the page, type your text, copy, and paste. It works entirely in your browser.',
  },
]

export default function FontluPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Text Tools', path: '/tools' },
        { name: 'Fontlu', path: '/tools/fontlu' },
      ]} />
      <WebPageSchema
        path="/tools/fontlu"
        name="Fontlu — Free Font Generator & Typography Tool"
        description="Generate 25+ fancy font styles free. Bold, script, gothic, cursive & more. Copy and paste into Instagram, Discord, TikTok, WhatsApp instantly."
        type="WebApplication"
      />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-indigo-500/10 pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-10 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-600 dark:text-violet-400 font-medium mb-5">
            <Sparkles className="w-4 h-4" />
            Free Fontlu Font Generator
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Fontlu
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-3">Free Font Generator & Typography Tool</p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Generate 25+ fancy font styles instantly. Bold, script, gothic, circled, fullwidth, upside down and more.
            Copy and paste into any app — no sign-up, no install, 100% free.
          </p>

          {/* Live style previews — Google Fonts loaded via CSS links in head */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Bebas+Neue&family=Dancing+Script:wght@700&family=Fira+Code&family=Pacifico&family=Press+Start+2P&display=swap" rel="stylesheet" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8 max-w-4xl mx-auto">
            {STYLE_PREVIEWS.map(s => (
              <div key={s.label} className="px-3 py-3 rounded-xl bg-background/80 border shadow-sm backdrop-blur-sm">
                <p className={`text-base font-medium ${s.color} mb-1`} style={{ fontFamily: `'${s.font}', serif` }}>Hello</p>
                <p className="text-[10px] text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Platform badges */}
          <div className="flex flex-wrap justify-center gap-2">
            {PLATFORMS.map(p => (
              <span key={p} className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-background/60 border text-muted-foreground">
                <Check className="w-3 h-3 text-green-500" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ── Tool + Content ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Tool */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm overflow-visible">
              <FontluTool />
            </div>

            {/* Google Fonts attribution */}
            <div className="flex items-center gap-3 p-3 bg-muted/10 rounded-xl border text-sm">
              <span className="text-2xl">🔤</span>
              <div>
                <p className="text-xs text-muted-foreground">All fonts powered by</p>
                <a
                  href="https://fonts.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  Google Fonts
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
                <span className="text-xs text-muted-foreground ml-2">— free, open-source fonts for everyone</span>
              </div>
            </div>

            {/* What is Fontlu */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">What is Fontlu?</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Fontlu</strong> is a typography platform for designers and content creators — it lets you discover, preview, organize, and pair fonts for professional projects. It's used by graphic designers, web developers, marketers, and anyone working with type.
                </p>
                <p>
                  Our tool takes a different approach: rather than managing font files, we give you a <strong className="text-foreground">free font generator</strong> that converts any text into 25+ stylized Unicode font styles you can instantly copy and paste into Instagram, TikTok, Discord, WhatsApp, and more.
                </p>
                <p>
                  Both tools solve the same core problem — making text look better — just for different audiences. If you're looking for a quick way to generate stylish text for social media or messages, you're in the right place.
                </p>
              </div>
            </div>

            {/* How it works */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-5">How to Use the Fontlu Font Generator</h2>
              <div className="space-y-4">
                {[
                  { n: '1', title: 'Type Your Text', desc: 'Enter any word, sentence, or phrase into the input box above. The generator works in real time.' },
                  { n: '2', title: 'Browse 25+ Font Styles', desc: 'All styles appear instantly — bold, italic, script, gothic, circled, fullwidth, upside down, and more. Filter by category to find your preferred style.' },
                  { n: '3', title: 'Copy & Paste Anywhere', desc: 'Click any style card to copy it. Then paste it directly into Instagram, TikTok, Discord, WhatsApp, Twitter — anywhere that accepts text.' },
                ].map(s => (
                  <div key={s.n} className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">{s.n}</div>
                    <div>
                      <p className="font-semibold mb-1">{s.title}</p>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All font styles */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-2">100+ Google Fonts — 6 Categories</h2>
              <p className="text-sm text-muted-foreground mb-5">All fonts are loaded from Google Fonts — free, fast, and high quality.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {FONT_STYLES.map(s => (
                  <div key={s.name} className="p-4 bg-background rounded-xl border">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm">{s.name}</span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{s.count}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{s.examples}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-5">What Can You Use Fontlu Font Styles For?</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {USE_CASES.map(u => (
                  <div key={u.title} className="flex gap-3 p-4 bg-primary/5 rounded-xl">
                    <span className="text-2xl shrink-0">{u.emoji}</span>
                    <div>
                      <p className="font-semibold text-sm mb-1">{u.title}</p>
                      <p className="text-xs text-muted-foreground">{u.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How Unicode fonts work */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 rounded-2xl border border-violet-500/20">
              <h2 className="text-xl md:text-2xl font-bold mb-4">Why Can You Copy & Paste These Fonts?</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  What looks like different fonts are actually different <strong className="text-foreground">Unicode characters</strong>. Unicode is a universal character encoding standard that includes over 140,000 characters — not just A–Z, but also 𝐀–𝐙 (bold), 𝒜–𝒵 (script), ℌ–𝔷 (gothic), Ⓐ–Ⓩ (circled), and many more.
                </p>
                <p>
                  Because they're characters — not a special font file — they travel with the text itself. When you paste "𝓗𝓮𝓵𝓵𝓸" into Instagram, Instagram doesn't need to know what font you used — those are the actual characters, so they display correctly on every device.
                </p>
                <p>
                  This is the same reason you can use emoji anywhere — emoji are Unicode characters too. Stylish Unicode text works the same way.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-5">Frequently Asked Questions</h2>
              <div className="space-y-5">
                {FAQS.map((faq, i) => (
                  <div key={i} className={i < FAQS.length - 1 ? 'border-b pb-5' : ''}>
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">

            {/* Key Features */}
            <div className="p-5 bg-gradient-to-br from-violet-500/5 to-indigo-500/5 rounded-2xl border border-violet-500/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-500" />
                Features
              </h3>
              <div className="space-y-4">
                {FEATURES.map(f => (
                  <div key={f.title} className="flex gap-3">
                    <div className="shrink-0 w-9 h-9 rounded-lg bg-violet-500/10 text-violet-500 flex items-center justify-center">
                      {f.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{f.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Works On */}
            <div className="p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Works On</h3>
              <div className="grid grid-cols-2 gap-2">
                {PLATFORMS.map(p => (
                  <div key={p} className="flex items-center gap-1.5 text-sm">
                    <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    <span className="text-muted-foreground text-xs">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Font category sidebar */}
            <div className="p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold">Font Categories</h3>
                <a
                  href="https://fonts.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline flex items-center gap-1"
                >
                  Browse all
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                </a>
              </div>
              <div className="space-y-2">
                {[
                  { cat: 'Sans Serif', count: 30, desc: 'Clean & modern', color: 'text-blue-600 dark:text-blue-400' },
                  { cat: 'Serif', count: 18, desc: 'Classic & elegant', color: 'text-amber-700 dark:text-amber-400' },
                  { cat: 'Display', count: 18, desc: 'Bold & impactful', color: 'text-rose-600 dark:text-rose-400' },
                  { cat: 'Handwriting', count: 18, desc: 'Script & cursive', color: 'text-violet-600 dark:text-violet-400' },
                  { cat: 'Monospace', count: 10, desc: 'Code & typewriter', color: 'text-emerald-600 dark:text-emerald-400' },
                  { cat: 'Special', count: 10, desc: 'Fun & unique', color: 'text-orange-600 dark:text-orange-400' },
                ].map(f => (
                  <div key={f.cat} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/40 transition-colors">
                    <div>
                      <p className={`text-sm font-semibold ${f.color}`}>{f.cat}</p>
                      <p className="text-xs text-muted-foreground">{f.desc}</p>
                    </div>
                    <span className="text-xs bg-muted/30 px-2 py-0.5 rounded-full font-semibold">{f.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick benefits */}
            <div className="p-5 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Why Use This Tool</h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  '100% free — no sign-up',
                  '25+ unique font styles',
                  'Instant live preview',
                  'One-click copy to clipboard',
                  'Works on all platforms',
                  'Mobile-friendly',
                  'No font install needed',
                  'Unicode — paste anywhere',
                ].map(b => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related tools */}
            <div className="p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Related Font Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools/cursive-text-generator', label: 'Cursive Text Generator', desc: '29 Google Font cursive styles' },
                  { href: '/tools/fancy-letters', label: 'Fancy Letters', desc: '50+ Unicode letter styles & frames' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', desc: '25+ glitch & Zalgo styles' },
                  { href: '/tools/tiny-text-generator', label: 'Tiny Text Generator', desc: 'Superscript, subscript, small caps' },
                  { href: '/tools/vaporwave-text-generator', label: 'Vaporwave Text', desc: 'Full-width aesthetic text styles' },
                ].map(t => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="flex items-center justify-between gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div>
                      <p className="font-medium text-sm">{t.label}</p>
                      <p className="text-xs text-muted-foreground">{t.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
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
