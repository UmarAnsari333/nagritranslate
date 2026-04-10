import { Metadata } from 'next'
import { Sparkles, Wrench, ArrowRight, Check } from 'lucide-react'
import { FancyTextGeneratorTool } from '@/components/tools/fancy-text-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fancy Text Generator - 25+ Styles | Copy & Paste Anywhere',
  description: 'Free fancy text generator with 25+ unique styles — bold, italic, script, gothic, circled, upside down, and more. Copy & paste into Instagram, Twitter, Discord, WhatsApp instantly.',
  keywords: [
    'fancy text generator', 'cool text generator', 'stylish text generator',
    'bold text generator', 'italic text generator', 'cursive text generator',
    'gothic text generator', 'bubble text generator', 'fancy fonts copy paste',
    'unicode text generator', 'instagram fonts', 'discord fonts', 'twitter fonts',
  ],
  openGraph: {
    title: 'Fancy Text Generator – 25+ Styles, Copy & Paste Anywhere',
    description: 'Transform plain text into 25+ beautiful styles. Works on Instagram, Twitter, Discord, WhatsApp and more.',
    type: 'website',
  },
}

const PREVIEW_STYLES = [
  { label: 'Bold Script',    text: '𝓗𝓮𝓵𝓵𝓸 𝓦𝓸𝓻𝓵𝓭' },
  { label: 'Double-Struck',  text: '𝕳𝖊𝖑𝖑𝖔 𝖂𝖔𝖗𝖑𝖉' },
  { label: 'Circled',        text: 'Ⓗⓔⓛⓛⓞ Ⓦⓞⓡⓛⓓ' },
  { label: 'Fullwidth',      text: 'Ｈｅｌｌｏ　Ｗｏｒｌｄ' },
]

const PLATFORMS = ['Instagram', 'Twitter / X', 'Discord', 'WhatsApp', 'TikTok', 'Facebook', 'Telegram', 'Reddit']

const USE_CASES = [
  { icon: '📱', title: 'Social Media Bios', desc: 'Make your Instagram or Twitter bio stand out with stylish text that gets noticed.' },
  { icon: '🎮', title: 'Gaming Usernames', desc: 'Create unique gamertags and Discord names that look cool in any game lobby.' },
  { icon: '💌', title: 'Messages & Captions', desc: 'Add flair to WhatsApp messages, Instagram captions, and post descriptions.' },
  { icon: '🎂', title: 'Birthday Wishes', desc: 'Send beautiful 𝓗𝓪𝓹𝓹𝔂 𝓑𝓲𝓻𝓽𝓱𝓭𝓪𝔂 messages that look special.' },
  { icon: '✍️', title: 'Creative Writing', desc: 'Add style to blog posts, stories, or any creative content.' },
  { icon: '🏷️', title: 'Brand & Logos', desc: 'Use fancy text in designs, watermarks, or personal branding.' },
]

const FAQS = [
  {
    q: 'What is a fancy text generator?',
    a: 'A fancy text generator converts normal text into stylized Unicode characters — bold, italic, script, gothic, circled, and more — that can be copied and pasted anywhere Unicode text is supported.',
  },
  {
    q: 'Will the fancy text work when I copy-paste it?',
    a: 'Yes! All styles use Unicode characters, not fonts. The styled appearance is baked into the characters themselves, so they look fancy in any app — Instagram, Twitter, WhatsApp, Discord — without needing a special font installed.',
  },
  {
    q: 'Why does fancy text work on social media?',
    a: 'Platforms like Instagram and Twitter support Unicode, which includes thousands of mathematical and decorative characters that visually resemble bold, italic, script, or symbol letters. The fancy text generator maps normal letters to those Unicode characters.',
  },
  {
    q: 'What are the most popular styles?',
    a: 'The most popular styles are Bold Script (𝓗𝓮𝓵𝓵𝓸), Circled (Ⓗⓔⓛⓛⓞ), Double-Struck (𝕳𝖊𝖑𝖑𝖔), Small Caps (ʜᴇʟʟᴏ), and Fullwidth (Ｈｅｌｌｏ). Upside Down and Strikethrough are also very popular for fun messages.',
  },
  {
    q: 'Can I use fancy text in gaming?',
    a: 'Absolutely! Fancy Unicode text works in many games for usernames, clan tags, and chat messages. Bold and circled styles are especially popular for standing out in game lobbies.',
  },
  {
    q: 'Is this tool free?',
    a: 'Yes, 100% free with no sign-up required. Generate unlimited fancy text and copy it instantly.',
  },
]

export default function FancyTextGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-purple-500/5 to-pink-500/10 pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-sm text-violet-600 dark:text-violet-400 font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            25+ Unique Styles
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Fancy Text Generator
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Transform any text into bold, script, gothic, circled, upside-down, and 20+ more unique styles.
            Copy and paste anywhere — no app or font install needed.
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

      {/* ── Main Content ── */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* ── Tool ── */}
          <div className="lg:col-span-2 space-y-8">
            <div className="p-6 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border shadow-sm">
              <FancyTextGeneratorTool />
            </div>

            {/* How It Works */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Use</h2>
              <div className="space-y-4">
                {[
                  ['1', 'Type Your Text', 'Enter any word, phrase, or sentence in the input box above.'],
                  ['2', 'Browse 25+ Styles', 'All styles are generated instantly. Filter by Bold, Script, Symbols, or Transform categories.'],
                  ['3', 'Copy & Paste', 'Click any style card or the Copy button. Then paste directly into Instagram, Twitter, Discord, or anywhere.'],
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

            {/* Use Cases Grid */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why People Use Fancy Text</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {USE_CASES.map(uc => (
                  <div key={uc.title} className="p-4 bg-primary/5 rounded-xl flex gap-3">
                    <span className="text-2xl shrink-0">{uc.icon}</span>
                    <div>
                      <p className="font-semibold text-sm mb-1">{uc.title}</p>
                      <p className="text-xs text-muted-foreground">{uc.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className={i < FAQS.length - 1 ? 'border-b pb-4' : 'pb-2'}>
                    <h3 className="font-semibold mb-2">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sidebar ── */}
          <div className="space-y-6">

            {/* Style Categories */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-violet-500/5 to-purple-500/5 rounded-2xl border border-violet-500/20">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-violet-500" />
                Style Categories
              </h3>
              <div className="space-y-3">
                {[
                  { label: 'Bold & Italic', count: 6, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-500/10', desc: 'Serif bold, sans bold, italic variants' },
                  { label: 'Script & Gothic', count: 4, color: 'text-rose-600 dark:text-rose-400', bg: 'bg-rose-500/10', desc: 'Cursive script, fraktur, gothic styles' },
                  { label: 'Symbols', count: 5, color: 'text-amber-600 dark:text-amber-400', bg: 'bg-amber-500/10', desc: 'Circled, squared, double-struck' },
                  { label: 'Transform', count: 8, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-500/10', desc: 'Small caps, upside down, strikethrough' },
                ].map(cat => (
                  <div key={cat.label} className={`flex items-center justify-between p-3 rounded-lg ${cat.bg}`}>
                    <div>
                      <p className={`font-semibold text-sm ${cat.color}`}>{cat.label}</p>
                      <p className="text-xs text-muted-foreground">{cat.desc}</p>
                    </div>
                    <span className={`text-sm font-bold ${cat.color}`}>{cat.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Platform Compatibility */}
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

            {/* Quick Samples */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Style Showcase</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['𝐇𝐞𝐥𝐥𝐨 𝐖𝐨𝐫𝐥𝐝', 'Serif Bold'],
                  ['𝓗𝓮𝓵𝓵𝓸 𝓦𝓸𝓻𝓵𝓭', 'Bold Script'],
                  ['ℌ𝔢𝔩𝔩𝔬 𝔚𝔬𝔯𝔩𝔡', 'Fraktur'],
                  ['Ⓗⓔⓛⓛⓞ Ⓦⓞⓡⓛⓓ', 'Circled'],
                  ['Ｈｅｌｌｏ　Ｗｏｒｌｄ', 'Fullwidth'],
                  ['ʜᴇʟʟᴏ ᴡᴏʀʟᴅ', 'Small Caps'],
                  ['plɹoM ollǝH', 'Upside Down'],
                ].map(([text, label]) => (
                  <div key={label} className="flex items-center justify-between gap-2 p-2 rounded-lg hover:bg-muted/40 transition-colors">
                    <span className="text-base leading-tight">{text}</span>
                    <span className="text-[10px] text-muted-foreground shrink-0">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Tools */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools/cursive-text-generator', label: 'Cursive Text Generator', desc: '29 Google Font styles' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', desc: '25+ glitch & Zalgo styles' },
                  { href: '/tools/case-converter', label: 'Case Converter', desc: 'UPPER, lower, Title Case' },
                  { href: '/tools/text-repeater', label: 'Text Repeater', desc: 'Repeat text multiple times' },
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

            {/* Key Benefits */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Key Benefits</h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  '25+ unique Unicode styles',
                  'Instant live generation',
                  'Click-to-copy on any card',
                  'Save favorites locally',
                  'No sign-up required',
                  'Works on all devices',
                  'Paste anywhere with Unicode',
                ].map(b => (
                  <li key={b} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{b}</span>
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
