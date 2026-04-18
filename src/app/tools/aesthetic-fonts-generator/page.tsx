import { Metadata } from 'next'
import { Sparkles, Check, ArrowRight, Wrench } from 'lucide-react'
import { AestheticFontsGeneratorTool } from '@/components/tools/aesthetic-fonts-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aesthetic Fonts Generator — Lovely Font Styles, Copy & Paste Free',
  description: 'Free aesthetic fonts generator with 50+ lovely font styles — soft kawaii, dark academia, vaporwave, cottagecore, minimalist & romantic. Copy & paste into Instagram, TikTok, Pinterest, Twitter instantly. No sign-up.',
  keywords: [
    // Primary targets
    'aesthetic fonts generator', 'lovely font',
    // LSI — aesthetic variations
    'aesthetic font generator', 'aesthetic text generator', 'aesthetic letters',
    'aesthetic fonts copy paste', 'cute aesthetic fonts', 'pretty fonts generator',
    'soft aesthetic fonts', 'aesthetic font copy paste',
    // LSI — platform contexts
    'instagram aesthetic fonts', 'tiktok aesthetic fonts', 'pinterest aesthetic fonts',
    'aesthetic bio fonts', 'aesthetic username fonts', 'aesthetic caption fonts',
    // LSI — aesthetic subcultures
    'dark academia font', 'cottagecore font', 'vaporwave font generator',
    'kawaii font generator', 'soft girl font', 'y2k font generator',
    'tumblr aesthetic fonts', 'lo-fi aesthetic fonts', 'pastel aesthetic fonts',
    'minimalist aesthetic font', 'romantic font generator', 'lovely script font',
    // LSI — intent / action
    'copy paste aesthetic fonts', 'aesthetic unicode text', 'fancy aesthetic letters',
    'beautiful fonts generator', 'cute font copy paste', 'script font generator',
    'cursive aesthetic font', 'aesthetic font for instagram bio',
    // LSI — related searches
    'aesthetic text symbols', 'pretty text generator', 'flower font generator',
    'heart font copy paste', 'aesthetic writing style', 'aesthetic font styles',
  ],
  openGraph: {
    title: 'Aesthetic Fonts Generator — 50+ Lovely Font Styles, Free',
    description: 'Generate 50+ aesthetic fonts — soft kawaii, dark academia, vaporwave, cottagecore & romantic styles. Copy & paste into Instagram, TikTok, Pinterest. Free.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aesthetic Fonts Generator — Lovely Font Styles Free',
    description: '50+ aesthetic font styles: soft, dark academia, vaporwave, cottagecore & romantic. Copy & paste anywhere. Free.',
  },
  alternates: {
    canonical: 'https://nagritranslate.com/tools/aesthetic-fonts-generator',
  },
}

const PREVIEW_STYLES = [
  { label: 'Lovely Script', text: '𝓵𝓸𝓿𝓮𝓵𝔂 𝓯𝓸𝓷𝓽' },
  { label: 'Cherry Blossom', text: 'l🌸o🌸v🌸e🌸l🌸y' },
  { label: 'Gothic Fraktur', text: '𝔩𝔬𝔳𝔢𝔩𝔶 𝔣𝔬𝔫𝔱' },
  { label: 'Vaporwave Wide', text: 'ｌｏｖｅｌｙ　ｆｏｎｔ' },
]

const PLATFORMS = ['Instagram', 'TikTok', 'Pinterest', 'Twitter / X', 'Tumblr', 'Discord', 'WhatsApp', 'Facebook']

const AESTHETIC_CATEGORIES = [
  {
    emoji: '🌸',
    name: 'Soft / Kawaii',
    count: 12,
    color: 'text-pink-600 dark:text-pink-400',
    bg: 'bg-pink-500/10',
    desc: 'Cherry blossoms, heart wraps, sparkles & butterfly frames — the purest soft girl energy',
  },
  {
    emoji: '📚',
    name: 'Dark Academia',
    count: 8,
    color: 'text-amber-700 dark:text-amber-400',
    bg: 'bg-amber-700/10',
    desc: 'Gothic blackletter, old script, small caps, strikethrough — scholarly & brooding',
  },
  {
    emoji: '🌊',
    name: 'Vaporwave',
    count: 8,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-500/10',
    desc: 'Fullwidth wide text, spaced letters, neon mono & retro slant — Y2K & lo-fi vibes',
  },
  {
    emoji: '🍄',
    name: 'Cottagecore',
    count: 7,
    color: 'text-green-700 dark:text-green-400',
    bg: 'bg-green-600/10',
    desc: 'Rose wraps, flower script, mushroom frames, herb separators — whimsical & wild',
  },
  {
    emoji: '🤍',
    name: 'Minimalist',
    count: 7,
    color: 'text-slate-600 dark:text-slate-400',
    bg: 'bg-slate-500/10',
    desc: 'Angle brackets, lowercase italic, airy spaced — clean, quiet & intentional',
  },
  {
    emoji: '💗',
    name: 'Lovely',
    count: 8,
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500/10',
    desc: 'Romantic cursive, rose gold script, love letters, twin hearts — tender & beautiful',
  },
]

export default function AestheticFontsGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 via-pink-500/5 to-violet-500/10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-sm text-rose-600 dark:text-rose-400 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            50+ Lovely Font Styles
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-rose-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            Aesthetic Fonts Generator
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Generate 50+ <strong>lovely font</strong> styles — soft kawaii, dark academia, vaporwave, cottagecore,
            minimalist, and romantic. Copy and paste into Instagram, TikTok, Pinterest, or anywhere.
          </p>

          {/* Live style previews */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {PREVIEW_STYLES.map(p => (
              <div key={p.label} className="px-4 py-2 rounded-xl bg-background/80 border shadow-sm backdrop-blur-sm">
                <p className="text-xs text-muted-foreground mb-0.5">{p.label}</p>
                <p className="text-lg font-medium">{p.text}</p>
              </div>
            ))}
          </div>

          {/* Platform tags */}
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

      {/* ── Main Content ─────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ── Tool + content ── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Tool */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm">
              <AestheticFontsGeneratorTool />
            </div>

            {/* How to Use */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Use the Aesthetic Fonts Generator</h2>
              <div className="space-y-4">
                {[
                  ['1', 'Type Your Text', 'Enter your name, a quote, a mood, or any word in the text box. Try "aesthetic", "soft girl", or your actual name.'],
                  ['2', 'Choose an Aesthetic', 'Filter by Soft/Kawaii, Dark Academia, Vaporwave, Cottagecore, Minimalist, or Lovely to find your exact vibe.'],
                  ['3', 'Favourite & Copy', 'Click the heart ♥ to save styles you love. Hit Copy on any card and paste directly into Instagram, TikTok, Pinterest bio, or captions.'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {num}
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is an aesthetic font */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What Is an Aesthetic Font?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                An <strong>aesthetic font</strong> is a typeface or text style that evokes a specific visual mood, subculture, or emotional vibe.
                Unlike functional fonts used in documents, aesthetic fonts are chosen for their <em>feeling</em> — the way they look in an
                Instagram bio, a Pinterest board, a TikTok caption, or a Tumblr post.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The term "aesthetic" in this context comes from internet subculture — communities built around
                <strong> soft girl</strong>, <strong>dark academia</strong>, <strong>cottagecore</strong>,
                <strong> vaporwave</strong>, and <strong>minimalist</strong> visual identities. Each subculture
                has its own preferred font personality, from the delicate cursive of soft romanticism to the heavy
                blackletter of dark academic literature obsession.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our aesthetic fonts generator works using <strong>Unicode characters</strong> — special characters
                that look like styled letters but are actually text. This means a{' '}
                <em>𝓵𝓸𝓿𝓮𝓵𝔂 𝓯𝓸𝓷𝓽</em> you generate here will appear exactly
                the same when pasted into any app that supports Unicode — Instagram, TikTok, Discord, WhatsApp,
                Pinterest — without installing any fonts.
              </p>
            </div>

            {/* What is a lovely font */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-rose-500/5 via-pink-500/5 to-rose-500/5 rounded-2xl border border-rose-500/10">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What Is a "Lovely Font"?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A <strong>lovely font</strong> typically refers to script or cursive-style typefaces that feel warm,
                romantic, and beautiful. The hallmark of a lovely font is its flowing, handwritten quality —
                letters that curl and connect gracefully, reminiscent of calligraphy and love letters.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                In Unicode text (the kind you can copy-paste), the closest equivalent to a lovely font is
                <strong> Bold Script</strong> (𝓵𝓸𝓿𝓮𝓵𝔂) and <strong>Script</strong> (𝓁ℴ𝓋ℯ𝓁𝓎).
                These mathematical Unicode blocks were originally designed for formulas but have been adopted
                by social media users worldwide for their undeniably elegant and lovely appearance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our generator's <strong>Lovely</strong> and <strong>Soft</strong> categories are specifically
                curated to give you the most beautiful, romantic, and sweet-feeling text styles — from
                Rose Gold Script (🌹𝓵𝓸𝓿𝓮𝓵𝔂🌹) to Heart Wrap (💕lovely💕).
              </p>
            </div>

            {/* 6 Aesthetic Categories */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">6 Aesthetic Font Categories</h2>
              <div className="space-y-4">
                {AESTHETIC_CATEGORIES.map(cat => (
                  <div key={cat.name} className={`p-4 rounded-xl ${cat.bg}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{cat.emoji}</span>
                      <h3 className={`font-bold ${cat.color}`}>{cat.name}</h3>
                      <span className={`text-[11px] px-2 py-0.5 rounded-full bg-background/60 font-medium ${cat.color}`}>
                        {cat.count} styles
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to use */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Where to Use Aesthetic Fonts</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '📸', title: 'Instagram Bio & Captions', desc: 'Stand out in the bio section and make your captions feel on-brand. Aesthetic script fonts are the #1 reason people visit Instagram font generators.' },
                  { icon: '🎵', title: 'TikTok Display Names', desc: 'Your TikTok name appears in every video comment and on your profile. A lovely font style makes it instantly memorable and recognizable.' },
                  { icon: '📌', title: 'Pinterest Board Names', desc: 'Aesthetic board titles in script or cottagecore styles align beautifully with Pinterest\'s visual-first culture and attract more followers.' },
                  { icon: '✍️', title: 'Tumblr & Blog Posts', desc: 'Tumblr aesthetics were one of the original aesthetic font communities. Dark academia and soft styles feel native to the platform\'s culture.' },
                  { icon: '💬', title: 'Discord Usernames & Bios', desc: 'Discord supports Unicode in usernames and "About Me" bios. Aesthetic fonts help you build a distinct identity in servers and communities.' },
                  { icon: '💌', title: 'Digital Journaling', desc: 'Paste lovely fonts into Notion pages, digital diaries, or journal templates to give your personal writing a beautiful, aesthetic feel.' },
                  { icon: '🎮', title: 'Gaming Profiles', desc: 'Many games support Unicode in display names. Aesthetic styles — especially small caps and script — look elegant in fantasy RPG settings.' },
                  { icon: '🎂', title: 'Birthday & Event Messages', desc: 'Send 𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 in a lovely script, or dress up wedding invitations and event announcements with beautiful aesthetic fonts.' },
                ].map(item => (
                  <div key={item.title} className="p-4 bg-primary/5 rounded-xl flex gap-3">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aesthetic subculture guide */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Aesthetic Subcultures & Their Fonts</h2>
              <div className="space-y-3">
                {[
                  {
                    aesthetic: 'Soft Girl / Kawaii',
                    fonts: 'Bold Script, Bubble letters, emoji wraps (🌸, 💕, ✨)',
                    vibe: 'Pastel, feminine, gentle, innocent. Originated on TikTok. Favors pink, bows, clouds, and anything soft.',
                    icon: '🌸',
                  },
                  {
                    aesthetic: 'Dark Academia',
                    fonts: 'Gothic Fraktur, Bold Fraktur, Small Caps, Double Struck',
                    vibe: 'Scholarly, melancholic, literary. Think Donna Tartt novels, candlelit libraries, Oxford tweed, and autumn rain.',
                    icon: '📚',
                  },
                  {
                    aesthetic: 'Cottagecore',
                    fonts: 'Script with flower frames, rose wraps, mushroom borders',
                    vibe: 'Rural, whimsical, nature-loving. Wildflower meadows, homemade bread, fairytale cottages, and vintage lace.',
                    icon: '🍄',
                  },
                  {
                    aesthetic: 'Vaporwave / Y2K',
                    fonts: 'Fullwidth wide text, spaced letters, monospace terminal',
                    vibe: 'Retro-futurist, neon-saturated, nostalgic for an imagined 80s–90s internet. Anime, glitch art, synthwave.',
                    icon: '🌊',
                  },
                  {
                    aesthetic: 'Minimalist / Clean Girl',
                    fonts: 'Small Caps, Lowercase Italic, Dot separators, Japanese brackets',
                    vibe: 'Neutral tones, quiet luxury, effortlessness. Less is more — every element intentional.',
                    icon: '🤍',
                  },
                  {
                    aesthetic: 'Romantic / Lovely',
                    fonts: 'Romantic Cursive, Love Letter, Rose Gold Script, Twin Hearts',
                    vibe: 'Feminine, passionate, tender. Red roses, candlelit dinners, handwritten notes, vintage lockets.',
                    icon: '💗',
                  },
                ].map(item => (
                  <div key={item.aesthetic} className="flex gap-3 p-4 rounded-xl bg-background/60 border">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-bold text-sm">{item.aesthetic}</p>
                      <p className="text-xs text-primary font-medium mb-1">Fonts: {item.fonts}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.vibe}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is an aesthetic fonts generator?',
                    a: 'An aesthetic fonts generator converts your normal text into Unicode-styled characters that look like beautiful, themed fonts — soft script, gothic blackletter, fullwidth, and more. Because they use Unicode (not fonts), you can copy and paste the output directly into Instagram, TikTok, Pinterest, Discord, or any other platform without installing anything.',
                  },
                  {
                    q: 'What is a "lovely font" and how does it work in Unicode?',
                    a: 'A "lovely font" typically refers to flowing script or cursive typefaces that feel romantic and beautiful. In Unicode, the closest equivalents are Bold Script (𝓵𝓸𝓿𝓮𝓵𝔂) and Script (𝓁ℴ𝓋ℯ𝓁𝔂) — characters in mathematical Unicode blocks that visually resemble calligraphy. They appear stylized in every app because the styling is baked into the characters, not a font file.',
                  },
                  {
                    q: 'Do aesthetic fonts work on Instagram?',
                    a: 'Yes. Instagram supports Unicode in bios, captions, usernames, and comments. All styles in our generator use Unicode characters, which render correctly on Instagram across iOS and Android. This is why aesthetic bio fonts are so popular — no app, no download, just copy and paste.',
                  },
                  {
                    q: 'Why do some aesthetic fonts show as boxes or question marks?',
                    a: 'Some platforms or devices don\'t support every Unicode character, especially emoji and certain symbol ranges. If you see boxes (□) instead of characters, try a different style from the Script, Small Caps, or Bold categories — these use the most widely supported Unicode math blocks and work on almost every device.',
                  },
                  {
                    q: 'What is the best aesthetic font for an Instagram bio?',
                    a: 'The most popular aesthetic fonts for Instagram bios are Bold Script (𝓵𝓸𝓿𝓮𝓵𝔂), Small Caps (ʟᴏᴠᴇʟʏ), and Fullwidth (ｌｏｖｅｌｙ). For a soft girl aesthetic, try the Cherry Blossom or Heart Wrap styles. For dark academia, Gothic Fraktur is iconic. For a minimalist look, Lowercase Italic or Airy Spaced work beautifully.',
                  },
                  {
                    q: 'How is this different from the Fancy Text Generator?',
                    a: 'While our Fancy Text Generator covers a broad range of Unicode text styles, the Aesthetic Fonts Generator is curated specifically around internet aesthetic subcultures — Soft/Kawaii, Dark Academia, Vaporwave, Cottagecore, Minimalist, and Lovely/Romantic. Every style here was chosen for its aesthetic vibe and social media use, with emoji-enhanced styles and thematic category naming.',
                  },
                  {
                    q: 'Can I save my favourite aesthetic font styles?',
                    a: 'Yes — click the ♥ heart icon on any style card to save it as a favourite. Favourites are stored in your browser\'s localStorage, so they persist between sessions on the same device without any sign-up or account required.',
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
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl font-bold mb-4">Further Reading</h2>
              <ul className="space-y-3">
                {[
                  {
                    href: 'https://en.wikipedia.org/wiki/Aesthetic_(internet_culture)',
                    label: 'Aesthetic — Internet Culture (Wikipedia)',
                    desc: 'Overview of aesthetic subcultures on the internet — soft girl, dark academia, cottagecore, vaporwave, and more.',
                  },
                  {
                    href: 'https://aesthetics.fandom.com/wiki/Aesthetics_Wiki',
                    label: 'Aesthetics Wiki',
                    desc: 'The comprehensive wiki documenting hundreds of internet aesthetic subcultures, their fonts, palettes, and fashion.',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Unicode',
                    label: 'Unicode — Wikipedia',
                    desc: 'How Unicode works — the technical foundation behind every aesthetic font style this generator produces.',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Dark_academia',
                    label: 'Dark Academia — Wikipedia',
                    desc: 'The history, fashion, and literary culture behind the dark academia aesthetic — one of the most popular font subcultures.',
                  },
                ].map(r => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-3 p-3 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors"
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

          {/* ── Sidebar ── */}
          <div className="space-y-6">

            {/* Category quick-nav */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-rose-500/5 to-pink-500/5 rounded-2xl border border-rose-500/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-rose-500" />
                Style Categories
              </h3>
              <div className="space-y-3">
                {AESTHETIC_CATEGORIES.map(cat => (
                  <div key={cat.name} className={`flex items-center justify-between p-3 rounded-lg ${cat.bg}`}>
                    <div>
                      <p className={`font-semibold text-sm ${cat.color} flex items-center gap-1.5`}>
                        <span>{cat.emoji}</span>{cat.name}
                      </p>
                    </div>
                    <span className={`text-sm font-bold ${cat.color}`}>{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform compatibility */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Works On</h3>
              <div className="grid grid-cols-2 gap-2">
                {PLATFORMS.map(p => (
                  <div key={p} className="flex items-center gap-1.5 text-sm">
                    <Check className="w-3.5 h-3.5 text-green-500 shrink-0" />
                    <span className="text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live style showcase */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Aesthetic Showcase</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['𝓵𝓸𝓿𝓮𝓵𝔂', 'Lovely Script'],
                  ['l🌸o🌸v🌸e🌸l🌸y', 'Cherry Blossom'],
                  ['𝔩𝔬𝔳𝔢𝔩𝔶', 'Gothic Fraktur'],
                  ['ｌｏｖｅｌｙ', 'Vaporwave Wide'],
                  ['ʟᴏᴠᴇʟʏ', 'Elegant Caps'],
                  ['💗 lovely 💗', 'Romantic Cursive'],
                  ['🌿 𝓵𝓸𝓿𝓮𝓵𝔂 🌿', 'Flower Script'],
                  ['l o v e l y', 'Spaced Out'],
                ].map(([text, label]) => (
                  <div key={label} className="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-muted/40 transition-colors">
                    <span className="text-base leading-tight break-all">{text}</span>
                    <span className="text-[10px] text-muted-foreground shrink-0 text-right">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key benefits */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Key Features</h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  '50+ lovely & aesthetic font styles',
                  '6 themed aesthetic categories',
                  'Save favourites to browser',
                  'Instant live generation',
                  'Copy all styles at once',
                  'Works on Instagram, TikTok & more',
                  'No sign-up or download needed',
                  '100% free, forever',
                ].map(b => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related tools */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', desc: '25+ bold, script & gothic styles' },
                  { href: '/tools/cursive-text-generator', label: 'Cursive Text Generator', desc: 'Google Font handwriting styles' },
                  { href: '/tools/fontlu', label: 'Fontlu — Font Generator', desc: 'Unicode font styles for any use' },
                  { href: '/tools/vaporwave-text-generator', label: 'Vaporwave Text Generator', desc: '13+ vaporwave & aesthetic styles' },
                  { href: '/tools/tiny-text-generator', label: 'Tiny Text Generator', desc: 'Superscript, subscript & small caps' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', desc: '25+ cursed & glitch styles' },
                  { href: '/tools', label: 'View All Tools', desc: 'Browse all free text tools' },
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
