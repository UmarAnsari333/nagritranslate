import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { FancyLettersTool } from '@/components/tools/fancy-letters-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fancy Letters Generator - 30+ Unicode Font Styles & Effects',
  description: 'Convert any text into 30+ fancy letter styles — bold, italic, script, gothic, double struck, bubble, subscript, upside down, strikethrough, and more. Free Unicode font generator with alphabet chart.',
  keywords: [
    'fancy letters', 'fancy letter generator', 'unicode font generator', 'fancy text letters',
    'bold letters generator', 'italic letters', 'script letters', 'gothic letters generator',
    'double struck letters', 'bubble letters generator', 'fancy alphabet', 'unicode alphabet',
    'cool letters generator', 'fancy fonts copy paste', 'stylish letters', 'unicode text generator',
    'mathematical bold', 'fraktur letters', 'calligraphy letters', 'small caps generator',
    'superscript letters', 'subscript letters', 'upside down letters', 'strikethrough text',
    'underline text generator', 'monospace text', 'sans serif bold', 'fullwidth letters',
    'squared letters', 'circled letters', 'parenthesized letters', 'regional indicator letters',
  ],
  openGraph: {
    title: 'Fancy Letters Generator — 30+ Unicode Styles & Alphabet Chart',
    description: 'Transform text into bold, script, gothic, bubble, upside down, and 25+ more fancy letter styles. Copy individual letters or full words instantly.',
    type: 'website',
  },
}

export default function FancyLettersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Fancy Letters Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert any text into 30+ fancy letter styles using{' '}
            <a href="https://home.unicode.org" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">
              Unicode
            </a>{' '}
            — bold, italic, script, gothic, bubble, upside down, strikethrough and more. Browse the full alphabet chart and copy individual letters or entire words.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <FancyLettersTool />
            </div>

            {/* What are fancy letters */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What Are Fancy Letters?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Fancy letters are characters from the{' '}
                <a href="https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 font-semibold">
                  Unicode Mathematical Alphanumeric Symbols block
                </a>{' '}
                (U+1D400–U+1D7FF), introduced in{' '}
                <a href="https://en.wikipedia.org/wiki/Unicode" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">
                  Unicode 3.1
                </a>{' '}
                (released 2001). Originally designed for mathematical notation — so that formulas could use bold A for matrices or script ℱ for functions — these characters have since become widely used for decorative text on social media, usernames, bios, and creative writing.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Unlike custom fonts (which require installation), Unicode fancy letters are <strong>plain text characters</strong>. They paste anywhere text is accepted — Instagram bios, Twitter/X posts, Discord usernames, game nicknames, WhatsApp messages, and more. The style is carried within the character itself, not by formatting markup.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Beyond the Mathematical block, Unicode also includes circled letters (Ⓐ–Ⓩ), squared letters (🄰–🅉), parenthesized letters (⒜–⒵), regional indicators (🇦–🇿), and combining diacritical marks that stack above or below characters to create effects like underline, strikethrough, and dot-above decoration.
              </p>
            </div>

            {/* Unicode history */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">A Brief History of Unicode Fancy Text</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The Unicode Consortium was founded in 1991 with the goal of creating a universal character encoding standard that could represent every writing system in the world. Before Unicode, text encoding was fragmented across hundreds of incompatible systems — ASCII for English, various ISO standards for European languages, and proprietary encodings for East Asian scripts.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Unicode's Mathematical Alphanumeric Symbols block was added to address the needs of scientific publishing. Academic papers and textbooks rely heavily on styled letters: bold vectors, italic scalars, script operators, Fraktur algebra. By encoding these as dedicated characters rather than formatting rules, mathematical content could be copied, searched, and displayed universally across different software.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The rise of social media in the 2010s gave these mathematical characters an unexpected second life. Platforms like Instagram and Twitter strip most formatting — you can't bold text in a bio — but Unicode fancy letters bypass this restriction entirely because they are the characters, not styled versions of regular characters. This sparked a wave of creative text tools and "copy-paste fonts" websites.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Unicode 15.1 (released 2023) contains over <strong>149,000 characters</strong> across 161 scripts, including emoji, historic scripts, symbols, and the full mathematical font range used by this tool.
              </p>
            </div>

            {/* Style categories */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Style Categories Explained</h2>
              <div className="space-y-4">
                {[
                  {
                    cat: 'Font Styles',
                    count: '19 styles',
                    desc: 'Pure Unicode font transforms based on the Mathematical Alphanumeric Symbols block. Includes Bold (𝐀–𝐙), Italic (𝐴–𝑍), Bold Italic (𝑨–𝒁), Script/Calligraphy (𝒜–𝒵), Bold Script (𝓐–𝓩), Gothic/Fraktur (𝔄–ℨ), Bold Fraktur (𝕬–𝖅), Double Struck (𝔸–ℤ), Sans Serif, Sans Bold, Sans Italic, Sans Bold Italic, Monospace, Small Caps, Superscript, Subscript, Fullwidth, Upside Down, and Upper Bold.',
                  },
                  {
                    cat: 'Effect Styles',
                    count: '9 styles',
                    desc: 'Created using Unicode combining diacritical marks that stack on top of or below regular characters. Includes Strikethrough (t̶e̶x̶t̶), Underline (t̲e̲x̲t̲), Double Underline (t̳e̳x̳t̳), Overline (t̅e̅x̅t̅), Crossed (t̵e̵x̵t̵), Dot Above (ṫėẋṫ), Bold+Underline, Script+Underline, and Bold+Strikethrough — combining font and effect in a single pass.',
                  },
                  {
                    cat: 'Symbol Styles',
                    count: '5 styles',
                    desc: 'Enclosed alphabet characters from various Unicode blocks. Bubble/Circled letters (Ⓐⓐ) from the Enclosed Alphanumerics block, Parenthesized letters (⒜) from Enclosed CJK, Squared letters (🄰) from Enclosed Alphanumeric Supplement, and Regional Indicator symbols (🇦) originally designed for flag emoji sequences.',
                  },
                ].map(c => (
                  <div key={c.cat} className="p-4 bg-primary/5 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold">{c.cat}</h3>
                      <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">{c.count}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to use */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Use Fancy Letters</h2>
              <div className="space-y-3">
                {[
                  { step: '1', title: 'Type or paste your text', detail: 'Enter any text in the input field on the Convert Text tab. All 30+ styles update instantly as you type.' },
                  { step: '2', title: 'Browse the style grid', detail: 'Scroll through the style cards to preview your text in every available style. Each card shows the style name and your text transformed.' },
                  { step: '3', title: 'Copy your favourite style', detail: 'Click the copy button on any style card to copy that version to your clipboard. Paste it anywhere — Instagram, Twitter, Discord, TikTok bio, or game username.' },
                  { step: '4', title: 'Use the Alphabet Chart tab', detail: 'Switch to the Alphabet Chart tab to select a specific style and see the full A–Z uppercase and a–z lowercase grid. Click any individual letter to copy just that character.' },
                  { step: '5', title: 'Mix and match letters', detail: 'Use the Alphabet Chart to hand-pick letters from different styles and combine them. For example, take a Bold "H" and a Script "ello" to create a unique mixed-style word.' },
                ].map(t => (
                  <div key={t.step} className="flex gap-3 p-3 rounded-xl bg-background/60">
                    <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center flex-shrink-0">{t.step}</span>
                    <div>
                      <p className="font-semibold text-sm">{t.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to use */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Where to Use Fancy Letters</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '📸', title: 'Instagram Bios & Captions', desc: 'Instagram strips formatting from bios and captions — but Unicode letters paste as-is. Bold or script bios immediately stand out from plain text profiles.' },
                  { icon: '🐦', title: 'Twitter / X Posts', desc: 'Make tweets visually distinctive with bold or italic key words. Since Twitter has no native bold, Unicode is the only way to emphasise text in posts.' },
                  { icon: '🎮', title: 'Game Usernames', desc: 'Most games accept Unicode in usernames — Agar.io, Roblox, Minecraft, Discord, Steam. Fancy letters make your name memorable and visually unique on leaderboards.' },
                  { icon: '💬', title: 'Discord & WhatsApp', desc: 'Create stylish nicknames, server names, and channel descriptions. Unicode letters work alongside Discord\'s own markdown formatting for layered effects.' },
                  { icon: '🎵', title: 'TikTok & YouTube', desc: 'Stand out in comment sections and username searches with a bold or script display name. Script and calligraphy styles are especially popular on creator platforms.' },
                  { icon: '✉️', title: 'Email Subjects & Signatures', desc: 'Strikethrough and underline effects work in email clients that render Unicode. Some marketers use fullwidth or bold letters in subject lines (use sparingly).' },
                ].map(item => (
                  <div key={item.title} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold text-sm mb-2 flex items-center gap-2">
                      <span>{item.icon}</span>{item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
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
                    q: 'Are these actual fonts or just special characters?',
                    a: 'They are special Unicode characters, not custom fonts. Each "bold A" (𝐀) or "script A" (𝒜) is a distinct character with its own Unicode code point. This is why they paste as styled text on platforms that don\'t support custom fonts — the style is part of the character itself.',
                  },
                  {
                    q: 'Will fancy letters work everywhere I paste them?',
                    a: 'They work in any system that supports Unicode, which includes virtually all modern websites, apps, and operating systems. A small number of older systems or specialized form fields may not render them correctly and show boxes or question marks instead.',
                  },
                  {
                    q: 'Why do some styles look incomplete? (subscript, regional indicators)',
                    a: 'Some Unicode blocks don\'t have characters for every letter. Subscript letters, for example, only have partial coverage — letters without a subscript equivalent fall back to the regular character. Regional indicator symbols (🇦–🇿) may combine into flag emoji when placed side by side in some apps.',
                  },
                  {
                    q: 'Do these characters affect SEO or text search?',
                    a: 'Partially. Search engines like Google generally index Unicode mathematical characters but may not treat 𝐇𝐞𝐥𝐥𝐨 as identical to "Hello" for ranking purposes. For important page text, stick to regular characters. Fancy letters are best used for display elements like headings or usernames.',
                  },
                  {
                    q: 'Can screen readers read fancy letters?',
                    a: 'Screen readers handle Unicode fancy letters inconsistently. Some announce the character\'s Unicode name ("mathematical bold capital A"), which is not fluent for users. For accessibility, avoid using fancy letters for body text or important information that screen reader users need to understand.',
                  },
                  {
                    q: 'How do strikethrough and underline effects work?',
                    a: 'They use Unicode combining diacritical marks — invisible characters that modify the preceding character. U+0336 (combining long stroke overlay) creates s̶t̶r̶i̶k̶e̶t̶h̶r̶o̶u̶g̶h̶, U+0332 (combining low line) creates u̲n̲d̲e̲r̲l̲i̲n̲e̲. These are appended after each character, so the styled text is still plain text.',
                  },
                ].map(item => (
                  <div key={item.q} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* External links */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl font-bold mb-4">External Resources</h2>
              <ul className="space-y-3">
                {[
                  { href: 'https://home.unicode.org', label: 'Unicode Consortium — unicode.org', desc: 'The official body that maintains the Unicode Standard. Browse character charts, technical reports, and the latest Unicode version announcements.' },
                  { href: 'https://en.wikipedia.org/wiki/Mathematical_Alphanumeric_Symbols', label: 'Mathematical Alphanumeric Symbols — Wikipedia', desc: 'Detailed reference for the Unicode Mathematical block (U+1D400–U+1D7FF) with character tables and history of the block\'s inclusion.' },
                  { href: 'https://en.wikipedia.org/wiki/Combining_character', label: 'Combining Characters — Wikipedia', desc: 'How Unicode combining diacritical marks (used for strikethrough, underline, and other overlay effects) work technically.' },
                  { href: 'https://www.compart.com/en/unicode', label: 'Compart Unicode Database', desc: 'Search and browse individual Unicode characters by name, code point, or category. Useful for finding specific fancy letter code points.' },
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

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">Related Text Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools', label: 'View All Tools', sub: 'Browse all text tools' },
                  { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', sub: 'Bold, script, gothic & more' },
                  { href: '/tools/cursive-text-generator', label: 'Cursive Text Generator', sub: 'Handwriting styles' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', sub: '25+ cursed styles' },
                  { href: '/tools/tiny-text-generator', label: 'Tiny Text Generator', sub: 'Superscript & small caps' },
                  { href: '/tools/vaporwave-text-generator', label: 'Vaporwave Text', sub: 'Full-width aesthetic' },
                  { href: '/tools/mirror-text', label: 'Mirror Text Generator', sub: 'Da Vinci mirror writing' },
                  { href: '/tools/agario-names', label: 'Cool Agario Names', sub: 'Fancy game nicknames' },
                  { href: '/tools/zalgo-text-generator', label: 'Zalgo Text Generator', sub: 'Creepy dripping text' },
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

            {/* Popular styles preview */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Popular Styles</h3>
              <div className="space-y-2 text-sm">
                {[
                  { style: 'Bold', example: '𝐅𝐚𝐧𝐜𝐲 𝐋𝐞𝐭𝐭𝐞𝐫𝐬' },
                  { style: 'Script', example: '𝒻𝒶𝓃𝒸𝓎 𝓁ℯ𝓉𝓉ℯ𝓇𝓈' },
                  { style: 'Gothic', example: '𝔉𝔞𝔫𝔠𝔶 𝔏𝔢𝔱𝔱𝔢𝔯𝔰' },
                  { style: 'Double Struck', example: '𝔽𝕒𝕟𝕔𝕪 𝕃𝕖𝕥𝕥𝕖𝕣𝕤' },
                  { style: 'Bubble', example: 'Ⓕⓐⓝⓒⓨ ⓛⓔⓣⓣⓔⓡⓢ' },
                  { style: 'Small Caps', example: 'ꜰᴀɴᴄʏ ʟᴇᴛᴛᴇʀꜱ' },
                  { style: 'Upside Down', example: 'sɹǝʇʇǝl ʎɔuɐɟ' },
                ].map(s => (
                  <div key={s.style} className="p-3 bg-background/60 rounded-xl">
                    <p className="text-xs text-muted-foreground mb-1">{s.style}</p>
                    <p className="font-mono text-sm leading-snug">{s.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick tip */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Quick Tips</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>💡 Use the <strong>Alphabet Chart</strong> tab to hand-pick letters from any style and combine them for a unique look.</p>
                <p>💡 <strong>Regional Indicators</strong> (🇦🇧🇨) may form flag emoji when placed side-by-side in some apps — use a space between each letter if needed.</p>
                <p>💡 <strong>Combining effects</strong> like strikethrough and underline stack visually, so you can apply Bold first, then paste into another tool for extra effects.</p>
                <p>💡 <strong>Monospace</strong> style is great for code-like text or ASCII art spacing since every character is the same width.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
