import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { ZalgoTextGeneratorTool } from '@/components/tools/zalgo-text-generator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Zalgo Text Generator - Free Cursed & Glitch Text Online',
  description: 'Free online Zalgo text generator. Add creepy dripping Unicode diacritics above or below any text with an adjustable craziness level slider. Perfect for horror, memes, and cursed text effects.',
  keywords: ['zalgo text generator', 'zalgo text', 'cursed text generator', 'glitch text', 'corrupted text', 'horror text', 'creepy text generator', 'zalgo converter', 'he comes zalgo', 'distorted text'],
  openGraph: {
    title: 'Zalgo Text Generator - Cursed & Corrupted Text',
    description: 'Generate creepy Zalgo text with adjustable craziness level. Free, instant, no login needed.',
    type: 'website',
  },
}

export default function ZalgoTextGeneratorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Zalgo Text Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform normal text into creepy, corrupted Zalgo text with stacked diacritics dripping above and below each character. Adjust the craziness level from subtle to full chaos.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <ZalgoTextGeneratorTool />
            </div>

            {/* What is Zalgo */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What is Zalgo Text?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Zalgo text (also called &quot;cursed text&quot; or &quot;glitch text&quot;) is created by stacking large numbers of Unicode combining diacritical marks on top of regular characters. These combining characters are intended to add accents and marks to letters, but when applied in excess, they overflow the normal text bounds and create the iconic &quot;dripping&quot; or &quot;corrupted&quot; appearance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The name &quot;Zalgo&quot; comes from an internet meme originating from a horror comic series. The phrase &quot;He Comes&quot; became associated with this corrupted text style as a symbol of digital horror and internet creepypasta culture.
              </p>
            </div>

            {/* How it works */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-4">
                {[
                  { n: '1', title: 'Type Your Text', desc: 'Enter any text into the input field' },
                  { n: '2', title: 'Choose a Zalgo Style', desc: 'Pick Drip Down, Rise Up, Both, Mini, or Full Chaos' },
                  { n: '3', title: 'Adjust Craziness', desc: 'Slide from 1 (Whisper) to 10 (He Comes) to control intensity' },
                  { n: '4', title: 'Regenerate', desc: 'Click Regenerate for a fresh random arrangement of marks' },
                  { n: '5', title: 'Copy & Use', desc: 'Copy any style and paste it anywhere — it renders on all platforms' },
                ].map(step => (
                  <div key={step.n} className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">{step.n}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Zalgo styles explained */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Zalgo Styles Explained</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: '▼ Drip Down', desc: 'Combining marks placed below each character — creates the classic downward dripping horror effect seen in most Zalgo examples.' },
                  { title: '▲ Rise Up', desc: 'Marks stacked above each character — text appears to reach upward like flames or tentacles.' },
                  { title: '⬍ Up & Down', desc: 'Both above and below marks combined — maximum visual chaos in both directions.' },
                  { title: '◈ Mini Zalgo', desc: 'A subtle amount of corruption — still clearly readable but with an unsettling edge.' },
                  { title: '☠ Full Chaos', desc: 'All directions at full intensity — above, middle, and below. Maximum Zalgo madness.' },
                ].map(s => (
                  <div key={s.title} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold text-sm mb-2 font-mono">{s.title}</h3>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mt-8 p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">🎚️</div>
                  <h3 className="font-semibold mb-2">Craziness Slider</h3>
                  <p className="text-xs text-muted-foreground">1–10 levels from subtle to full chaos</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">👁️</div>
                  <h3 className="font-semibold mb-2">5 Zalgo Styles</h3>
                  <p className="text-xs text-muted-foreground">Down, up, both, mini, and full chaos</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">🔄</div>
                  <h3 className="font-semibold mb-2">Regenerate</h3>
                  <p className="text-xs text-muted-foreground">Random marks each time for unique results</p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Does Zalgo text work on all platforms?</h3>
                  <p className="text-sm text-muted-foreground">Yes — Zalgo text uses standard Unicode combining characters that render on virtually every modern platform including Twitter, Discord, Reddit, Instagram, Facebook, WhatsApp, and more.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Why does it look different on different apps?</h3>
                  <p className="text-sm text-muted-foreground">Different fonts and rendering engines handle stacked combining characters differently. Some apps clip the overflow (so high craziness levels get cut off), while others let it flow freely. Craziness 3–6 works best across most platforms.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Can I reverse / decode Zalgo text?</h3>
                  <p className="text-sm text-muted-foreground">Yes — Zalgo text can be &quot;cleaned&quot; by stripping all Unicode combining characters (Unicode category Mn). The underlying base text is always preserved intact.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-semibold mb-2">Why does clicking Regenerate give different results?</h3>
                  <p className="text-sm text-muted-foreground">The combining marks are placed randomly each time — same text, same settings, different arrangement of marks. This makes every Zalgo output unique.</p>
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold mb-2">Is this the same as the Glitch Text Generator?</h3>
                  <p className="text-sm text-muted-foreground">Zalgo is one specific type of glitch text. Our Glitch Text Generator includes Zalgo as one of 25+ styles. This dedicated tool gives you much finer control with the craziness slider and 5 directional modes.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">All Text Tools</h3>
              <div className="space-y-3">
                {[
                  { href: '/tools', label: 'View All Tools', sub: 'Browse all text tools' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', sub: '25+ glitch & cursed styles' },
                  { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', sub: 'Bold, script, gothic & more' },
                  { href: '/tools/vaporwave-text-generator', label: 'Vaporwave Text', sub: 'Aesthetic retro styles' },
                  { href: '/tools/tiny-text-generator', label: 'Tiny Text Generator', sub: 'Superscript, subscript, small caps' },
                  { href: '/tools/ned-flanders-translator', label: 'Ned Flanders Translator', sub: 'Okely-dokely diddly speak' },
                  { href: '/tools/robot-voice-generator', label: 'Robot Voice Generator', sub: 'Text to robot speech' },
                ].map(l => (
                  <Link key={l.href} href={l.href} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                    <Wrench className="w-4 h-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{l.label}</p>
                      <p className="text-xs text-muted-foreground">{l.sub}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Craziness guide */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Craziness Guide</h3>
              <div className="space-y-2 text-sm">
                {[
                  { level: '1–2', name: 'Whisper', desc: 'Barely corrupted' },
                  { level: '3–4', name: 'Unsettling', desc: 'Noticeably glitched' },
                  { level: '5–6', name: 'Corrupted', desc: 'Classic Zalgo look' },
                  { level: '7–8', name: 'Nightmare', desc: 'Heavy dripping' },
                  { level: '9–10', name: 'He Comes', desc: 'Full horror mode' },
                ].map(r => (
                  <div key={r.level} className="flex items-center gap-3 p-2 rounded-lg bg-background/50">
                    <code className="text-xs font-mono text-primary w-8 flex-shrink-0">{r.level}</code>
                    <span className="font-medium text-sm">{r.name}</span>
                    <span className="text-xs text-muted-foreground ml-auto">{r.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Use cases */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Common Uses</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Horror-themed social media posts',
                  'Creepypasta and internet horror',
                  'Discord server names & messages',
                  'Halloween and spooky content',
                  'Memes and cursed image captions',
                  'Gaming usernames',
                  'Fan fiction with dark themes',
                  'Digital art and graphic design',
                ].map(u => (
                  <li key={u} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">☠</span>
                    <span>{u}</span>
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
