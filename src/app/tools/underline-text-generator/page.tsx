import { Metadata } from 'next'
import { Underline, Check, ArrowRight, Wrench } from 'lucide-react'
import { UnderlineTextGeneratorTool } from '@/components/tools/underline-text-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Underline Text Generator — Underlined Text Copy & Paste Free',
  description: 'Free underline text generator with 28 styles — simple underline, double underline, bold underline, wavy, connected & combo styles. Generate underlined text and copy-paste into Instagram, Discord, Twitter, Word & anywhere. No sign-up.',
  keywords: [
    'underline text generator',
    'underlined text generator',
    'text underline generator',
    'bold underline text generator',
    'simple underline text generator',
    'underline text copy paste',
    'underline font generator',
    'underline letters generator',
    'underline text online',
    'underline word generator',
    'generate underlined text',
    'underline text maker',
    'double underline text generator',
    'wavy underline text generator',
    'underline text unicode',
    'underline text symbols',
    'combining underline unicode',
    'underline text for instagram',
    'underline text discord',
    'underline text twitter',
    'underline text whatsapp',
    'underline text facebook',
    'strikethrough and underline text generator',
    'bold and underline text generator',
    'underline text without html',
    'copy paste underline text',
    'underlined letters copy paste',
    'text with underline copy paste',
  ],
  openGraph: {
    title: 'Underline Text Generator — 28 Underlined Text Styles, Free',
    description: 'Generate underlined text in 28 styles — simple, double, bold, wavy, stylized & combo. Copy and paste anywhere. Free, no sign-up.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Underline Text Generator — 28 Styles, Copy & Paste Free',
    description: 'Simple underline, double underline, bold underline & 25 more styles. Works on Instagram, Discord, Twitter & everywhere. Free.',
  },
  alternates: {
    canonical: 'https://nagritranslate.com/tools/underline-text-generator',
  },
}

// ─── Static data ──────────────────────────────────────────────────────────────

const STYLE_PREVIEWS = [
  { label: 'Simple Underline',   sample: 'U̲n̲d̲e̲r̲l̲i̲n̲e̲' },
  { label: 'Double Underline',   sample: 'U̳n̳d̳e̳r̳l̳i̳n̳e̳' },
  { label: 'Bold Underline',     sample: '𝐔̲𝐧̲𝐝̲𝐞̲𝐫̲𝐥̲𝐢̲𝐧̲𝐞̲' },
  { label: 'Script Underline',   sample: '𝒰̲𝓃̲𝒹̲ℯ̲𝓇̲𝓁̲𝒾̲𝓃̲ℯ̲' },
]

const PLATFORMS = ['Instagram', 'Discord', 'Twitter / X', 'WhatsApp', 'Facebook', 'Notion', 'Reddit', 'Telegram']

const STYLE_CATEGORIES = [
  {
    id: 'simple',
    label: 'Simple',
    count: 6,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-500/10',
    desc: 'Single underline, double underline, thick, wavy, connected, and spaced variations — the purest underline styles',
  },
  {
    id: 'bold',
    label: 'Bold',
    count: 6,
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-500/10',
    desc: 'Bold + underline, bold + double underline, sans bold, bold italic — maximum weight and emphasis',
  },
  {
    id: 'stylized',
    label: 'Stylized',
    count: 10,
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-500/10',
    desc: 'Script, bold script, fraktur, small caps, monospace, double-struck, fullwidth — each combined with underline',
  },
  {
    id: 'combo',
    label: 'Combo',
    count: 8,
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-500/10',
    desc: 'Underline + overline, double underline + overline, bold framed, wavy + overline — multi-effect combinations',
  },
]

export default function UnderlineTextGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-violet-500/5 to-indigo-500/8 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-6 sm:py-10 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm text-primary font-medium mb-4 sm:mb-6">
            <Underline className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            28 Underline Styles — Copy &amp; Paste Free
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Underline Text Generator
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Generate <strong>underlined text</strong> in 28 styles — simple underline, double underline,
            bold underline text, wavy, connected, script, and combo effects.
            Copy and paste into Instagram, Discord, Twitter, or anywhere. Free, instant, no sign-up.
          </p>

          {/* Live previews — scrollable on mobile */}
          <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto pb-1 sm:pb-0 px-1 sm:px-0 snap-x snap-mandatory scrollbar-none">
            {STYLE_PREVIEWS.map(p => (
              <div key={p.label} className="shrink-0 snap-start px-3 sm:px-4 py-2 rounded-xl bg-background/80 border shadow-sm backdrop-blur-sm">
                <p className="text-[10px] sm:text-xs text-muted-foreground mb-0.5 whitespace-nowrap">{p.label}</p>
                <p className="text-base sm:text-lg tracking-wide">{p.sample}</p>
              </div>
            ))}
          </div>

          {/* Platform tags */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {PLATFORMS.map(p => (
              <span key={p} className="inline-flex items-center gap-1 text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-background/60 border text-muted-foreground">
                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-green-500" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main ─────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
        {/*
          DOM order: Tool → Sidebar → Content
          Mobile (stacked): Tool → Sidebar → Content
          Desktop (3-col grid): [Tool col 1-2] [Sidebar col 3 sticky]
                                [Content col 1-2] [Sidebar continues]
        */}
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">

          {/* ── Tool ── */}
          <div className="lg:col-span-2">
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm">
              <UnderlineTextGeneratorTool />
            </div>
          </div>

          {/* ── Sidebar ── sticky on desktop, stacks after tool on mobile ── */}
          <div className="lg:col-start-3 lg:row-start-1 lg:row-span-2 space-y-4 sm:space-y-6 lg:sticky lg:top-4 lg:self-start">

            {/* Related Tools — first on mobile so it's easy to find */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools/fancy-text-generator',      label: 'Fancy Text Generator',      desc: '25+ bold, script & gothic styles' },
                  { href: '/tools/aesthetic-fonts-generator',  label: 'Aesthetic Fonts Generator',  desc: '50+ lovely font styles' },
                  { href: '/tools/subscript-generator',        label: 'Subscript Generator',        desc: 'Unicode sub & superscript' },
                  { href: '/tools/glitch-text-generator',      label: 'Glitch Text Generator',      desc: 'Zalgo & cursed text styles' },
                  { href: '/tools/tiny-text-generator',        label: 'Tiny Text Generator',        desc: 'Superscript & small text' },
                  { href: '/tools/cursive-text-generator',     label: 'Cursive Text Generator',     desc: 'Script & handwriting styles' },
                  { href: '/tools',                            label: 'View All Tools',             desc: 'Browse all free text tools' },
                ].map(t => (
                  <Link
                    key={t.href}
                    href={t.href}
                    className="flex items-center justify-between gap-3 p-2.5 sm:p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{t.label}</p>
                      <p className="text-xs text-muted-foreground truncate">{t.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Category overview */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Underline className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                Style Categories
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {STYLE_CATEGORIES.map(cat => (
                  <div key={cat.id} className={`flex items-center justify-between p-2.5 sm:p-3 rounded-lg ${cat.bg}`}>
                    <p className={`font-semibold text-sm ${cat.color}`}>{cat.label}</p>
                    <span className={`text-sm font-bold ${cat.color}`}>{cat.count} styles</span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-lg bg-primary/10">
                  <p className="font-bold text-sm text-primary">Total</p>
                  <span className="text-sm font-bold text-primary">28 styles</span>
                </div>
              </div>
            </div>

            {/* Platform compatibility */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Works On</h3>
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                {PLATFORMS.map(p => (
                  <div key={p} className="flex items-center gap-1.5 text-xs sm:text-sm">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-500 shrink-0" />
                    <span className="text-muted-foreground">{p}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live style showcase — collapsed on mobile to save space */}
            <div className="hidden sm:block p-4 sm:p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3">Style Showcase</h3>
              <div className="space-y-1.5 sm:space-y-2">
                {[
                  ['H̲e̲l̲l̲o̲',      'Simple Underline'],
                  ['H̳e̳l̳l̳o̳',      'Double Underline'],
                  ['𝐇̲𝐞̲𝐥̲𝐥̲𝐨̲',      'Bold Underline'],
                  ['𝐇̳𝐞̳𝐥̳𝐥̳𝐨̳',      'Bold Double UL'],
                  ['𝑯̲𝒆̲𝒍̲𝒍̲𝒐̲',      'Bold Italic UL'],
                  ['𝒽̲ℯ̲𝓁̲𝓁̲ℴ̲',      'Script Underline'],
                  ['𝓱̲𝓮̲𝓵̲𝓵̲𝓸̲',      'Bold Script UL'],
                  ['ʜ̲ᴇ̲ʟ̲ʟ̲ᴏ̲',      'Small Caps UL'],
                  ['H̲̄ē̲l̲̄l̲̄ō̲',  'Under + Overline'],
                  ['H͟e͟l͟l͟o͟',      'Connected UL'],
                ].map(([text, label]) => (
                  <div key={label} className="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-muted/40 transition-colors">
                    <span className="text-base sm:text-lg tracking-wide leading-loose">{text}</span>
                    <span className="text-[10px] text-muted-foreground shrink-0 text-right">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key features */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-1 gap-1.5 sm:gap-2.5 text-xs sm:text-sm">
                {[
                  '28 unique underline styles',
                  'Simple, Double, Wavy & Thick',
                  'Bold + underline combinations',
                  'Script, Fraktur & Small Caps',
                  'Combo: underline + overline',
                  'Save favourites to browser',
                  'Copy all styles at once',
                  'Animated live preview',
                  'No sign-up required',
                  '100% free, forever',
                ].map(b => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unicode quick ref */}
            <div className="p-4 sm:p-5 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-base sm:text-lg font-bold mb-3">Unicode Quick Reference</h3>
              <div className="space-y-1.5 sm:space-y-2 text-xs">
                {[
                  { code: 'U+0332', meaning: 'Single underline ̲' },
                  { code: 'U+0333', meaning: 'Double underline ̳' },
                  { code: 'U+0331', meaning: 'Thick underline ̱' },
                  { code: 'U+0330', meaning: 'Wavy underline ͜' },
                  { code: 'U+035F', meaning: 'Connected underline ͟' },
                  { code: 'U+0305', meaning: 'Overline ̄ (combos)' },
                ].map(item => (
                  <div key={item.code} className="flex justify-between items-center py-1.5 border-b border-border/50 last:border-0">
                    <code className="font-mono text-primary bg-primary/5 px-1.5 py-0.5 rounded">{item.code}</code>
                    <span className="text-muted-foreground">{item.meaning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Content sections ── */}
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 space-y-6 sm:space-y-8">

            {/* How to use */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">How to Use the Underline Text Generator</h2>
              <div className="space-y-3 sm:space-y-4">
                {[
                  ['1', 'Type Your Text', 'Enter any word, phrase, or sentence in the input box. Try sample chips like "Hello World", "Bold Underline", or "Important" to see all styles instantly.'],
                  ['2', 'Choose a Style Category', 'Filter by Simple, Bold, Stylized, or Combo to narrow down to the exact type of underlined text you need.'],
                  ['3', 'Copy & Paste Anywhere', 'Click any style card or hit Copy. The underlined text uses Unicode combining characters — it pastes with the underline included in any app that supports Unicode.'],
                ].map(([num, title, desc]) => (
                  <div key={num} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-primary/5 rounded-xl">
                    <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs sm:text-sm">
                      {num}
                    </div>
                    <div>
                      <p className="font-semibold text-sm sm:text-base mb-1">{title}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What is underline text */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">What Is Underline Text?</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                <strong>Underline text</strong> is text that has a horizontal line drawn beneath it — one of the most
                fundamental forms of typographic emphasis alongside bold and italic.
                In traditional word processors like Microsoft Word or Google Docs, you underline text with <kbd>Ctrl+U</kbd>.
                But on social media, messaging apps, and most plain-text fields, HTML formatting is stripped out.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                That&apos;s where <strong>Unicode combining characters</strong> come in. Our underline text generator uses
                characters like <code className="text-xs bg-muted px-1 py-0.5 rounded">U+0332 COMBINING LOW LINE</code> (̲)
                and <code className="text-xs bg-muted px-1 py-0.5 rounded">U+0333 COMBINING DOUBLE LOW LINE</code> (̳)
                — special Unicode code points that attach a line <em>beneath</em> the preceding character.
                Because they&apos;re actual text characters, the underline copies and pastes with the word, no HTML needed.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The result is genuine <strong>underlined text that works anywhere Unicode is supported</strong> — Instagram
                bios, Discord messages, Twitter posts, WhatsApp, Facebook comments, Reddit, Notion, and even most
                email clients. Type your text, pick a style, and copy.
              </p>
            </div>

            {/* Unicode underline explained */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Unicode Combining Characters Explained</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 leading-relaxed">
                All underline styles use Unicode <em>combining diacritical marks</em> — characters that modify the
                preceding character visually. They are invisible when alone but attach below (or above) the letter they follow.
              </p>
              <div className="space-y-2 sm:space-y-3">
                {[
                  {
                    code: 'U+0332',
                    name: 'COMBINING LOW LINE',
                    sample: 'H̲e̲l̲l̲o̲',
                    desc: 'The standard single underline. Works on virtually every platform that supports Unicode. This is what powers the "Simple Underline" style.',
                  },
                  {
                    code: 'U+0333',
                    name: 'COMBINING DOUBLE LOW LINE',
                    sample: 'H̳e̳l̳l̳o̳',
                    desc: 'Creates two parallel underlines beneath each character — the double underline style. Used in academic typesetting to denote strong stress.',
                  },
                  {
                    code: 'U+0331',
                    name: 'COMBINING MACRON BELOW',
                    sample: 'H̱e̱ḻḻo̱',
                    desc: 'A short macron below each character — creates a thick, heavier-looking underline compared to U+0332.',
                  },
                  {
                    code: 'U+0330',
                    name: 'COMBINING TILDE BELOW',
                    sample: 'H͜e͜l͜l͜o͜',
                    desc: 'A tilde-shaped mark below each character — produces the wavy underline style.',
                  },
                  {
                    code: 'U+035F',
                    name: 'COMBINING DOUBLE MACRON BELOW',
                    sample: 'H͟e͟l͟l͟o͟',
                    desc: 'Applied between characters — creates a continuous connected line flowing beneath the entire word.',
                  },
                  {
                    code: 'U+0305',
                    name: 'COMBINING OVERLINE',
                    sample: 'H̅e̅l̅l̅o̅',
                    desc: 'A line above each character. Used in Combo styles paired with an underline to "frame" text between two horizontal lines.',
                  },
                ].map(item => (
                  <div key={item.code} className="flex gap-3 sm:gap-4 p-3 sm:p-4 bg-primary/5 rounded-xl">
                    <div className="shrink-0">
                      <code className="text-[10px] sm:text-[11px] bg-background px-1.5 sm:px-2 py-1 rounded border font-mono text-primary">{item.code}</code>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2 mb-1 flex-wrap">
                        <span className="font-semibold text-xs sm:text-sm">{item.name}</span>
                        <span className="text-base sm:text-lg tracking-wider">{item.sample}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Style categories */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">4 Underline Style Categories</h2>
              <div className="space-y-3 sm:space-y-4">
                {STYLE_CATEGORIES.map(cat => (
                  <div key={cat.id} className={`p-3 sm:p-4 rounded-xl ${cat.bg}`}>
                    <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                      <h3 className={`font-bold text-sm sm:text-base ${cat.color}`}>{cat.label}</h3>
                      <span className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded-full bg-background/60 font-medium ${cat.color}`}>
                        {cat.count} styles
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{cat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to use */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Where to Use Underlined Text</h2>
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: '📸', title: 'Instagram Bios & Captions', desc: 'U̲n̲d̲e̲r̲l̲i̲n̲e̲ key words in your bio or captions. Since Instagram strips HTML, Unicode underline is the only way to add real underlines that survive copy-paste.' },
                  { icon: '💬', title: 'Discord Messages', desc: "Discord supports both Markdown (__underline__) and Unicode underline. Unicode underline works in usernames, bios, and server descriptions where Markdown doesn't apply." },
                  { icon: '🐦', title: 'Twitter / X Posts', desc: 'Twitter strips HTML but supports Unicode. Use U̲n̲d̲e̲r̲l̲i̲n̲e̲ to emphasize key words in tweets or highlight a term without using all caps.' },
                  { icon: '📝', title: 'Notion & Digital Notes', desc: "Paste underlined Unicode text into Notion, Obsidian, or any markdown editor for emphasis that doesn't depend on formatting buttons." },
                  { icon: '📚', title: 'Academic & Formal Use', desc: 'Double underline (U̳n̳d̳e̳r̳l̳i̳n̳e̳) is traditionally used in academic typesetting to denote the strongest stress level — stronger than a single underline.' },
                  { icon: '🎮', title: 'Gaming Usernames', desc: 'Many games accept Unicode in display names. Underlined names (U̲s̲e̲r̲n̲a̲m̲e̲) or small-caps + underline (ᴜꜱᴇʀɴᴀᴍᴇ̲) look refined in leaderboards and lobbies.' },
                  { icon: '💌', title: 'Email Signatures & Messages', desc: 'Most email clients render Unicode characters. Add a subtle underline to your name or title in an email signature for a styled, non-HTML effect.' },
                  { icon: '🎨', title: 'Creative & Artistic Text', desc: 'Use Combo styles that combine underline + overline to create a "boxed" or "framed" text effect for headings and artistic projects.' },
                ].map(item => (
                  <div key={item.title} className="p-3 sm:p-4 bg-primary/5 rounded-xl flex gap-3">
                    <span className="text-xl sm:text-2xl shrink-0">{item.icon}</span>
                    <div>
                      <p className="font-semibold text-xs sm:text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bold underline section */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-violet-500/5 via-violet-500/5 to-indigo-500/5 rounded-2xl border border-violet-500/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Bold Underline Text Generator</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                A <strong>bold underline text generator</strong> combines two of the strongest emphasis tools in typography —
                bold weight and underline — into a single style that commands attention.
                Our Bold category gives you six bold + underline combinations:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                {[
                  { name: 'Bold Underline',            sample: '𝐁̲𝐨̲𝐥̲𝐝̲' },
                  { name: 'Bold Double Underline',      sample: '𝐁̳𝐨̳𝐥̳𝐝̳' },
                  { name: 'Sans Bold Underline',        sample: '𝗕̲𝗼̲𝗹̲𝗱̲' },
                  { name: 'Bold Italic Underline',      sample: '𝑩̲𝒐̲𝒍̲𝒅̲' },
                  { name: 'Bold Thick Underline',       sample: '𝐁̱𝐨̱𝐥̱𝐝̱' },
                  { name: 'Sans Bold Double Underline', sample: '𝗕̳𝗼̳𝗹̳𝗱̳' },
                ].map(item => (
                  <div key={item.name} className="p-2.5 sm:p-3 rounded-xl bg-background/60 border">
                    <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">{item.name}</p>
                    <p className="text-lg sm:text-xl tracking-wide">{item.sample}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Bold underline is ideal for <strong>key terms</strong>, <strong>warnings</strong>,
                <strong> headings in plain-text environments</strong>, and anywhere you need the
                maximum level of emphasis that plain text can provide.
              </p>
            </div>

            {/* Simple underline section */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl border border-blue-500/10">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">Simple Underline Text Generator</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                Sometimes you just need a <strong>simple underline text generator</strong> — no bold, no scripts,
                no emoji. Just clean, classic underlining. Our Simple category delivers exactly that:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
                {[
                  { name: 'Simple Underline',    sample: 'H̲e̲l̲l̲o̲ W̲o̲r̲l̲d̲' },
                  { name: 'Double Underline',    sample: 'H̳e̳l̳l̳o̳ W̳o̳r̳l̳d̳' },
                  { name: 'Thick Underline',     sample: 'H̱e̱ḻḻo̱ W̱o̱ṟḻḏ' },
                  { name: 'Wavy Underline',      sample: 'H͜e͜l͜l͜o͜ W͜o͜r͜l͜d͜' },
                  { name: 'Connected Underline', sample: 'H͟e͟l͟l͟o͟ W͟o͟r͟l͟d͟' },
                  { name: 'Spaced Underline',    sample: 'H̲ e̲ l̲ l̲ o̲' },
                ].map(item => (
                  <div key={item.name} className="p-2.5 sm:p-3 rounded-xl bg-background/60 border">
                    <p className="text-[10px] sm:text-xs text-muted-foreground mb-1">{item.name}</p>
                    <p className="text-lg sm:text-xl tracking-wide">{item.sample}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                The simple single underline (<code className="text-xs bg-muted px-1 rounded">U+0332</code>) is the
                most universally compatible style and renders correctly on essentially every device and platform
                that renders Unicode text.
              </p>
            </div>

            {/* FAQ */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'How does the underline text generator work?',
                    a: 'It uses Unicode "combining" characters — special code points like U+0332 (COMBINING LOW LINE) that attach a visible underline beneath the character they follow. Because these are text characters, the underline copies and pastes with the text into any app that supports Unicode — no HTML or CSS required.',
                  },
                  {
                    q: 'Does underlined text work on Instagram?',
                    a: 'Yes. Instagram supports Unicode in bios, captions, usernames, and comments. Since Instagram strips HTML, Unicode combining underline (U+0332) is the only way to produce real underlined text on Instagram that appears underlined when pasted.',
                  },
                  {
                    q: 'What is the difference between simple underline and double underline?',
                    a: 'Simple underline (U+0332) places a single horizontal line beneath each character. Double underline (U+0333) places two parallel lines beneath each character. Double underline is traditionally used in academic and formal typography to indicate a higher level of stress or emphasis than a single underline.',
                  },
                  {
                    q: 'Does Discord support underline text?',
                    a: "Discord supports Markdown underline (__text__) in message content. However, Markdown doesn't work in usernames, bios, or server descriptions. Unicode underline from this generator works everywhere Discord accepts text, including those areas.",
                  },
                  {
                    q: "Why doesn't my underlined text show up correctly on some platforms?",
                    a: 'Unicode combining characters are supported by all modern systems, but some older apps or platforms with limited font rendering may show boxes or drop the underline. If this happens, try the Simple Underline (U+0332) style — it has the broadest compatibility. Avoid the Combo styles (which use multiple combining characters) in apps that render Unicode poorly.',
                  },
                  {
                    q: 'What is a "bold underline text generator" and which styles do I use?',
                    a: 'A bold underline text generator combines bold Unicode characters (from mathematical bold blocks U+1D400–U+1D7FF) with underline combining characters. Our Bold category has 6 styles: Bold Underline, Bold Double Underline, Sans Bold Underline, Sans Bold Double Underline, Bold Italic Underline, and Bold Thick Underline. Use "Bold Underline" for the cleanest bold + underline effect.',
                  },
                  {
                    q: 'Can I underline text in WhatsApp without HTML?',
                    a: "WhatsApp doesn't support HTML or CSS, and its built-in formatting doesn't include underline (only bold, italic, strikethrough, and monospace). Unicode underline from this generator is the only method to get genuinely underlined text in WhatsApp — paste it into a message and it retains the underline.",
                  },
                  {
                    q: 'Is this underline text generator free?',
                    a: 'Yes — 100% free, no sign-up, no installation. Generate as many styles as you like and copy them instantly.',
                  },
                ].map(item => (
                  <div key={item.q} className="border-b pb-3 sm:pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold text-sm sm:text-base mb-1.5 sm:mb-2">{item.q}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* External links */}
            <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-base sm:text-xl font-bold mb-3 sm:mb-4">Further Reading</h2>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  {
                    href: 'https://en.wikipedia.org/wiki/Underline',
                    label: 'Underline — Wikipedia',
                    desc: 'History and typographic conventions of underlining — from typewriter conventions to HTML and beyond.',
                  },
                  {
                    href: 'https://www.unicode.org/charts/PDF/U0300.pdf',
                    label: 'Unicode Combining Diacritical Marks (U+0300–U+036F)',
                    desc: 'Official Unicode chart for the combining characters block — includes U+0332, U+0333, U+0331, U+0330, and U+035F used by this generator.',
                  },
                  {
                    href: 'https://en.wikipedia.org/wiki/Emphasis_(typography)',
                    label: 'Emphasis in Typography — Wikipedia',
                    desc: 'How typographers use bold, italic, underline, and other emphasis techniques — and their relative weights.',
                  },
                  {
                    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u',
                    label: 'HTML <u> Element — MDN Web Docs',
                    desc: 'The proper semantic use of HTML underline in web contexts, and when to use it vs CSS text-decoration.',
                  },
                ].map(r => (
                  <li key={r.href}>
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-muted/20 hover:bg-muted/40 transition-colors"
                    >
                      <span className="text-primary mt-0.5 flex-shrink-0">↗</span>
                      <div>
                        <p className="font-medium text-xs sm:text-sm group-hover:text-primary transition-colors">{r.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{r.desc}</p>
                      </div>
                    </a>
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
