import { Metadata } from 'next'
import { Sparkles, Check, ArrowRight, Wrench } from 'lucide-react'
import { PreppyFontGeneratorTool } from '@/components/tools/preppy-font-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Preppy Font Generator — Cute Preppy Fonts Copy & Paste Free',
  description: 'Free preppy font generator with 35+ cute preppy font styles — classic prep, coastal nautical, collegiate, garden party & old money. Copy and paste preppy fonts into Instagram, TikTok, Pinterest instantly. No sign-up.',
  keywords: [
    // Primary targets
    'preppy font generator', 'preppy fonts', 'preppy font',
    'preppy fonts copy and paste', 'cute preppy font generator',
    // LSI — preppy variations
    'preppy text generator', 'preppy letters', 'preppy font copy paste',
    'preppy aesthetic font', 'cute preppy fonts', 'preppy style font',
    'preppy font for instagram', 'preppy cursive font', 'preppy script font',
    // LSI — preppy subcultures
    'coastal grandmother font', 'old money font', 'country club font',
    'sorority font generator', 'collegiate font generator',
    'nautical font copy paste', 'vineyard vines font', 'lilly pulitzer font',
    'southern preppy font', 'new england preppy font', 'garden party font',
    // LSI — platform contexts
    'preppy instagram bio font', 'preppy tiktok font', 'preppy pinterest font',
    'preppy discord font', 'preppy username font', 'preppy caption font',
    // LSI — intent / action
    'copy paste preppy fonts', 'preppy unicode text', 'fancy preppy letters',
    'preppy text symbols', 'pretty preppy font', 'preppy aesthetic text',
    // LSI — related searches
    'aesthetic preppy font', 'cute font copy paste', 'bow font generator',
    'pearl font', 'anchor font', 'tennis font', 'preppy name font',
  ],
  openGraph: {
    title: 'Preppy Font Generator — 35+ Cute Preppy Fonts, Free',
    description: 'Generate 35+ preppy fonts — classic bow, coastal nautical, collegiate, garden party & old money. Copy & paste into Instagram, TikTok, Pinterest. Free.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preppy Font Generator — Cute Preppy Fonts Free',
    description: '35+ preppy font styles: bows, anchors, sorority script, old money & more. Copy & paste anywhere. Free.',
  },
  alternates: {
    canonical: 'https://nagritranslate.com/tools/preppy-font-generator',
  },
}

const PREVIEW_STYLES = [
  { label: 'Preppy Script',  text: '𝓹𝓻𝓮𝓹𝓹𝔂 𝓯𝓸𝓷𝓽' },
  { label: 'Coquette',       text: '🩰 𝓹𝓻𝓮𝓹𝓹𝔂 🩰' },
  { label: 'Old Money',      text: '𝑝𝑟𝑒𝑝𝑝𝑦 𝑓𝑜𝑛𝑡' },
  { label: 'Star Girl',      text: '⚡ 𝗽𝗿𝗲𝗽𝗽𝘆 ⚡' },
]

const PLATFORMS = ['Instagram', 'TikTok', 'Pinterest', 'Twitter / X', 'Discord', 'Tumblr', 'WhatsApp', 'Facebook']

const PREPPY_CATEGORIES = [
  {
    emoji: '🩷',
    name: 'Classic Prep',
    count: 11,
    color: 'text-pink-600 dark:text-pink-400',
    bg: 'bg-pink-500/10',
    desc: 'Bold script, ribbon bows, pearl dots, sparkle frames, ornament wraps — the core preppy aesthetic that never goes out of style',
  },
  {
    emoji: '⚓',
    name: 'Coastal / Nautical',
    count: 11,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    desc: 'Anchor frames, sailboats, whale wraps, lobster, seashell dots, palm trees & coral reef — New England and Vineyard Vines energy',
  },
  {
    emoji: '🎓',
    name: 'Collegiate',
    count: 9,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-500/10',
    desc: 'Double-struck bold, sorority script, varsity bold italic, tennis club, Greek life — campus & prep school style',
  },
  {
    emoji: '🌸',
    name: 'Garden Party',
    count: 10,
    color: 'text-green-700 dark:text-green-400',
    bg: 'bg-green-600/10',
    desc: 'Magnolia script, hydrangea, tulip frames, strawberry, butterfly — Southern garden party & floral prep',
  },
  {
    emoji: '🥂',
    name: 'Old Money',
    count: 10,
    color: 'text-amber-700 dark:text-amber-500',
    bg: 'bg-amber-600/10',
    desc: 'Italic serif, estate caps, Gatsby bold italic, quiet luxury, bracket elegance — understated wealth & old money aesthetic',
  },
  {
    emoji: '🩰',
    name: 'Coquette',
    count: 8,
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500/10',
    desc: 'Ballet bows, diary girl italic, dainty hearts, soft sparkle, lace dots — soft feminine romantic aesthetic',
  },
  {
    emoji: '⚡',
    name: 'Star Girl',
    count: 7,
    color: 'text-yellow-700 dark:text-yellow-400',
    bg: 'bg-yellow-500/10',
    desc: 'Sans bold, lightning strikes, slay script, leopard print, star power — bold confident clean girl energy',
  },
]

const RELATED_TOOLS = [
  { name: 'Aesthetic Fonts Generator', path: '/tools/aesthetic-fonts-generator', icon: '✨' },
  { name: 'Fancy Text Generator',      path: '/tools/fancy-text-generator',      icon: '🔤' },
  { name: 'Cursive Text Generator',    path: '/tools/cursive-text-generator',    icon: '𝒞' },
  { name: 'Tiny Text Generator',       path: '/tools/tiny-text-generator',       icon: '🔡' },
  { name: 'Emoji Buttons',             path: '/tools/emoji-buttons',             icon: '😊' },
]

export default function PreppyFontGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-rose-500/5 to-green-500/10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-sm text-pink-600 dark:text-pink-400 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            60+ Preppy Font Styles
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-rose-500 to-green-600 bg-clip-text text-transparent">
            Preppy Font Generator
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Generate 60+ <strong>preppy fonts</strong> — classic bows, coastal nautical, collegiate, garden party,
            old money, coquette & star girl styles. Copy and paste into Instagram, TikTok, Pinterest, or anywhere.
          </p>

          {/* Live style previews */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-3 mb-8">
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
      <section className="max-w-6xl mx-auto px-4 py-8 w-full overflow-x-hidden">
        <div className="grid lg:grid-cols-3 gap-8 w-full">

          {/* ── Tool + content ── */}
          <div className="lg:col-span-2 space-y-8 min-w-0">

            {/* Tool */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm">
              <PreppyFontGeneratorTool />
            </div>

            {/* How to Use */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Use the Preppy Font Generator</h2>
              <div className="space-y-4">
                {[
                  ['1', 'Type Your Text', 'Enter your name, a caption, a sorority tagline, or any phrase. Try "preppy", "xoxo", "brunch", or your actual name to see 35 preppy fonts instantly.'],
                  ['2', 'Pick Your Vibe', 'Filter by Classic Prep, Coastal, Collegiate, Garden Party, or Old Money to narrow results to your exact preppy aesthetic.'],
                  ['3', 'Heart & Copy', 'Click the ♥ to save your favorite styles. Hit Copy on any card and paste directly into Instagram bio, TikTok display name, Pinterest boards, or text messages.'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {num}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold mb-1">{title}</p>
                      <p className="text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is a preppy font */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-pink-500/5 via-rose-500/5 to-green-500/5 rounded-2xl border border-pink-500/10">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What Is a Preppy Font?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A <strong>preppy font</strong> is a text style that reflects the preppy aesthetic — characterized by
                clean elegance, country club sophistication, nautical motifs, and feminine charm. Preppy style originated
                in American Ivy League culture of the 1950s–60s and has experienced multiple revivals, most recently
                through TikTok, Pinterest, and the <em>quiet luxury</em> trend.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                In Unicode text (the kind you copy-paste anywhere), preppy fonts typically use <strong>Bold Script</strong>{' '}
                (𝓹𝓻𝓮𝓹𝓹𝔂) for that monogram-and-calligraphy feel, <strong>Italic Serif</strong> (𝑝𝑟𝑒𝑝𝑝𝑦) for
                old money elegance, and <strong>Double-Struck Bold</strong> (𝕡𝕣𝕖𝕡𝕡𝕪) for collegiate varsity energy.
                Emoji frames like 🎀 and ⚓ add the signature preppy personality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our generator produces <strong>35+ preppy font styles</strong> across five categories — all built from
                Unicode characters that paste anywhere without installing a font.
              </p>
            </div>

            {/* 5 Categories */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">5 Preppy Font Categories</h2>
              <div className="space-y-4">
                {PREPPY_CATEGORIES.map(cat => (
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
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Where to Use Preppy Fonts</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '📸', title: 'Instagram Bio & Captions', desc: 'Preppy fonts in your Instagram bio instantly signal your aesthetic — sorority script, old money serif, or 🎀 bow frames all perform strongly in the preppy niche.' },
                  { icon: '🎵', title: 'TikTok Display Names', desc: 'Your TikTok name appears in every comment and search result. A bold preppy script or collegiate font makes it instantly recognizable to your audience.' },
                  { icon: '📌', title: 'Pinterest Board Names', desc: 'Pinterest is the heartland of preppy aesthetic. Boards named in preppy script, anchors, or bow fonts align perfectly with the platform\'s visual culture.' },
                  { icon: '💌', title: 'Sorority & Greek Life', desc: 'Bold script monograms, circled Greek letters, and sorority-style hearts are perfect for sorority chapter announcements, rush week posts, and big/little reveals.' },
                  { icon: '💬', title: 'Discord & Group Chats', desc: 'Stand out in Discord servers with a preppy username or "About Me" in collegiate font or pearl dot style. Works in any app that supports Unicode.' },
                  { icon: '🎂', title: 'Event Invitations', desc: 'Preppy fonts lend an elegant touch to bridal shower, garden party, regatta, or country club event announcements shared digitally.' },
                  { icon: '🏷️', title: 'Product & Brand Names', desc: 'Small prep-focused brands and boutiques use preppy script fonts in social bios, Etsy shop names, and digital storefronts to signal their aesthetic instantly.' },
                  { icon: '📝', title: 'Digital Journals & Notion', desc: 'Paste preppy fonts into your Notion pages, digital diary headers, or Pinterest-style mood boards for a beautiful, on-brand personal feel.' },
                ].map(item => (
                  <div key={item.title} className="p-4 bg-primary/5 rounded-xl flex gap-3">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="font-semibold text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preppy aesthetic guide */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Preppy Sub-Aesthetics & Their Fonts</h2>
              <div className="space-y-3">
                {[
                  {
                    name: 'Classic Prep / Lilly Pulitzer',
                    fonts: 'Bold Script, Bow frames (🎀), Pearl dots, Seersucker',
                    vibe: 'Pink and green, ribbon bows, bright patterns, country club brunch. The foundational preppy look that started it all.',
                    icon: '🩷',
                  },
                  {
                    name: 'Coastal / Vineyard Vines',
                    fonts: 'Anchor frames (⚓), Sailboat (⛵), Whale (🐋), Wave Script',
                    vibe: 'New England summers, sailboats, lobster rolls, Nantucket red. Maritime prep at its most iconic.',
                    icon: '⚓',
                  },
                  {
                    name: 'Collegiate / Sorority',
                    fonts: 'Double-Struck Bold, Sorority Script (💜), Circled Letters, Tennis',
                    vibe: 'Campus life, Greek organizations, varsity letters, game day tailgates. Academic prep with team spirit.',
                    icon: '🎓',
                  },
                  {
                    name: 'Garden Party / Southern',
                    fonts: 'Magnolia Script (🌸), Hydrangea (💐), Honey Bee (🐝), Daisy',
                    vibe: 'Sweet tea, magnolia trees, veranda brunches, Tory Burch flats. Southern hospitality meets preppy elegance.',
                    icon: '🌸',
                  },
                  {
                    name: 'Old Money / Quiet Luxury',
                    fonts: 'Old Money Serif (𝑝𝑟𝑒𝑝𝑝𝑦), Estate Caps, Country Club Bold, Monogram',
                    vibe: 'Understated wealth, cashmere, gallery walls, Ralph Lauren. No logos — quality speaks for itself.',
                    icon: '🥂',
                  },
                ].map(item => (
                  <div key={item.name} className="flex gap-3 p-4 rounded-xl bg-background/60 border">
                    <span className="text-2xl shrink-0">{item.icon}</span>
                    <div className="min-w-0">
                      <p className="font-bold text-sm">{item.name}</p>
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
                    q: 'Are these actually fonts?',
                    a: 'They\'re Unicode characters that look like different fonts. Because they\'re standard text characters (not images or custom fonts), they paste correctly into any app — Instagram, TikTok, iMessage, Discord — without any setup.',
                  },
                  {
                    q: 'What\'s the most popular preppy font?',
                    a: 'The most-used preppy font online is Bold Script (𝓹𝓻𝓮𝓹𝓹𝔂) — it looks like monogram calligraphy and pairs well with bow and heart frames. Pearl Dots and Old Money Italic are also extremely popular for a more refined look.',
                  },
                  {
                    q: 'Can I use these for a sorority bio?',
                    a: 'Absolutely. The Collegiate category has Sorority Script (💜𝓹𝓻𝓮𝓹𝓹𝔂💜), Circled Letters (ⓟⓡⓔⓟⓟⓨ), and more styles that are especially popular for Greek life Instagram bios and rush week posts.',
                  },
                  {
                    q: 'Do preppy fonts work on TikTok?',
                    a: 'Yes — TikTok supports Unicode in display names and bios. Bold Script and Old Money Serif are particularly popular among TikTok creators in the preppy, coastal grandmother, and quiet luxury niches.',
                  },
                  {
                    q: 'What\'s the difference between "old money" and "classic prep"?',
                    a: 'Classic prep is louder — bows, pink & green, fun patterns. Old money is quieter — clean italic serif, small caps, monograms, understated elegance. Both are preppy, but old money leans into "quiet luxury" while classic prep leans into "country club fun."',
                  },
                  {
                    q: 'Can I save my favorite styles?',
                    a: 'Yes — click the heart ♥ icon on any style card to save it to Favorites. Your favorites are stored in your browser and appear at the top of the list every time you return.',
                  },
                ].map(({ q, a }) => (
                  <div key={q} className="border-b last:border-0 pb-4 last:pb-0">
                    <p className="font-semibold text-sm mb-1.5">{q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="lg:col-start-3 space-y-6 min-w-0">

            {/* Related Tools */}
            <div className="p-5 rounded-2xl border bg-gradient-to-br from-muted/30 to-muted/10">
              <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                <Wrench className="w-4 h-4" /> Related Tools
              </h3>
              <div className="space-y-1.5">
                {RELATED_TOOLS.map(t => (
                  <Link
                    key={t.path}
                    href={t.path}
                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-muted/60 transition-colors group text-sm"
                  >
                    <span className="text-base shrink-0">{t.icon}</span>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors truncate">{t.name}</span>
                    <ArrowRight className="w-3 h-3 ml-auto shrink-0 text-muted-foreground/40 group-hover:text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Tips */}
            <div className="p-5 rounded-2xl border bg-gradient-to-br from-pink-500/5 to-rose-500/5 border-pink-500/10">
              <h3 className="font-bold text-sm mb-3">🎀 Preppy Font Tips</h3>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {[
                  'Mix Bold Script with a bow frame: 🎀 𝓹𝓻𝓮𝓹𝓹𝔂 🎀',
                  'Pearl Dots look great on first names: S·o·p·h·i·a',
                  'Old Money Serif is perfect for bios and quote captions',
                  'Sorority Script + 💜 is a fan-favorite for Greek life',
                  'Use Estate Caps for a minimal, understated preppy vibe',
                  'Coastal: pair Anchor Drop with a sailboat emoji',
                  'Copy All to grab every style at once for comparison',
                  'Heart ♥ your favorites — they stay saved on return visits',
                ].map(tip => (
                  <li key={tip} className="flex gap-2">
                    <span className="text-pink-500 shrink-0">✦</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Preppy Aesthetic Overview */}
            <div className="p-5 rounded-2xl border bg-gradient-to-br from-muted/30 to-muted/10">
              <h3 className="font-bold text-sm mb-3">7 Preppy Categories</h3>
              <div className="space-y-2">
                {[
                  { emoji: '🩷', label: 'Classic Prep',  count: 11, color: 'text-pink-600 dark:text-pink-400'    },
                  { emoji: '⚓', label: 'Coastal',        count: 11, color: 'text-blue-600 dark:text-blue-400'    },
                  { emoji: '🎓', label: 'Collegiate',     count: 9,  color: 'text-violet-600 dark:text-violet-400'},
                  { emoji: '🌸', label: 'Garden Party',   count: 10, color: 'text-green-700 dark:text-green-400'  },
                  { emoji: '🥂', label: 'Old Money',      count: 10, color: 'text-amber-700 dark:text-amber-500'  },
                  { emoji: '🩰', label: 'Coquette',       count: 8,  color: 'text-rose-600 dark:text-rose-400'    },
                  { emoji: '⚡', label: 'Star Girl',      count: 7,  color: 'text-yellow-700 dark:text-yellow-400'},
                ].map(c => (
                  <div key={c.label} className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1.5">
                      <span>{c.emoji}</span>
                      <span className={`font-medium ${c.color}`}>{c.label}</span>
                    </span>
                    <span className="text-xs text-muted-foreground">{c.count} styles</span>
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
