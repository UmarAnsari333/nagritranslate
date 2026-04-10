import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { AgarioNamesTool } from '@/components/tools/agario-names-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cool Agario Names Generator - Fancy Nicknames for Agar.io',
  description: 'Generate 80+ cool, fancy, and stylish names for Agar.io using Unicode text styles, decorative frames, symbols, and combined effects. Bold, gothic, script, emoji-decorated names — free and instant.',
  keywords: [
    'agario names', 'cool agario names', 'agar.io names', 'fancy agario nicknames',
    'agario name generator', 'cool names for agario', 'agar.io fancy text',
    'agario unicode names', 'best agario names', 'agario stylish names',
    'agar io name ideas', 'cool cell names agario', 'agario symbols',
    'agario name symbols', 'agar.io name generator',
  ],
  openGraph: {
    title: 'Cool Agario Names Generator — 80+ Fancy Styles for Agar.io',
    description: 'Generate bold, gothic, script, and symbol-decorated names for Agar.io. 4 categories, 80+ styles, instant copy. Free.',
    type: 'website',
  },
}

export default function AgarioNamesPage() {
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
            Cool Agario Names Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Generate 80+ fancy, stylish names for{' '}
            <a href="https://agar.io" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">
              Agar.io
            </a>{' '}
            using Unicode bold, gothic, script, decorative frames, emoji symbols, and combined effects. Stand out on the leaderboard instantly.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <AgarioNamesTool />
            </div>

            {/* What is Agar.io */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What is Agar.io?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <a href="https://agar.io" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 font-semibold">Agar.io</a>{' '}
                is a massively popular browser-based multiplayer game developed by <strong>Matheus Valadares</strong> and released in 2015. Players control a circular cell on a large map and must eat smaller cells (and other players) to grow larger, while avoiding being eaten by bigger cells.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                The game quickly became a viral sensation, reaching millions of players within weeks of launch. It was later acquired by <strong>Miniclip</strong> and expanded with new game modes including FFA (Free For All), Teams, Battle Royale, and Experimental. The name "Agar" refers to agar-agar, a substance used in biology to culture cells in petri dishes — a nod to the game's cell-eating theme.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                One of the most visible aspects of competitive Agar.io play is the <strong>player name displayed on each cell</strong>. A stylish name not only looks impressive on the leaderboard but also signals experience and personality to other players. Many top players use Unicode fonts, decorative symbols, and special character frames to make their names instantly recognizable.
              </p>
            </div>

            {/* Why fancy names matter */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Why Cool Names Matter in Agar.io</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: '👑', title: 'Stand Out on the Leaderboard', desc: 'Fancy Unicode names catch the eye when you appear in the top 10. Players with stylish names are more memorable and often feared.' },
                  { icon: '🎯', title: 'Build Your Identity', desc: 'A unique name with custom styling helps you build a reputation across Agar.io servers and communities.' },
                  { icon: '😨', title: 'Intimidate Opponents', desc: 'Names with skulls (☠), swords (⚔), or dark Fraktur gothic styling can psychologically intimidate smaller cells before they even attack.' },
                  { icon: '🤝', title: 'Join Teams Easily', desc: 'In Team mode, using a shared styled name format helps teammates recognize each other quickly.' },
                  { icon: '📸', title: 'Viral Screenshots', desc: 'Impressive leaderboard moments get shared on Reddit and Discord. A cool name makes your screenshot more shareable.' },
                  { icon: '🎮', title: 'It\'s Just Fun', desc: 'A name you love makes the game more enjoyable. Seeing ꧁𝓚𝓲𝓷𝓰꧂ on screen as you eat others is deeply satisfying.' },
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

            {/* Style categories explained */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">4 Name Style Categories</h2>
              <div className="space-y-4">
                {[
                  {
                    cat: 'Text Styles',
                    count: '19 styles',
                    desc: 'Pure Unicode font transformations — Bold (𝐍𝐚𝐦𝐞), Bold Italic (𝑵𝒂𝒎𝒆), Script (𝒩𝒶𝓂ℯ), Bold Script (𝓝𝓪𝓶𝓮), Fraktur Gothic (𝔑𝔞𝔪𝔢), Bold Fraktur (𝕹𝖆𝖒𝖊), Double Struck (𝕹𝕒𝕞𝕖), Small Caps (ɴᴀᴍᴇ), Fullwidth (Ｎａｍｅ), Circled (Ⓝⓐⓜⓔ), Superscript, Monospace, Upside Down, and more.',
                  },
                  {
                    cat: 'Decorative Frames',
                    count: '27 frames',
                    desc: 'Wrap your name in stylish borders — Dragon (꧁༺Name༻꧂), Japanese (『Name』), Block (░▒▓Name▓▒░), Star (★彡Name彡★), Wide (【Name】), Angle (「Name」), VIP (『ᴠɪᴘ』Name), and many more character frames.',
                  },
                  {
                    cat: 'Symbol Decorated',
                    count: '29 styles',
                    desc: 'Flank your name with powerful emoji and Unicode symbols — ⚡Name⚡, 🔥Name🔥, ☠Name☠, 👑Name👑, ⚔Name⚔, ♔Name♔, ⚜Name⚜, and themed prefixes like 「VIP」Name, 「GOD」Name.',
                  },
                  {
                    cat: 'Combined',
                    count: '20 styles',
                    desc: 'The most visually striking option — combines a text style AND a decorative frame or symbol. Example: ꧁𝓝𝓪𝓶𝓮꧂ (Bold Script + Dragon frame), ★𝔑𝔞𝔪𝔢★ (Fraktur + Stars), 🔥𝐍𝐚𝐦𝐞🔥 (Bold + Fire).',
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

            {/* Tips */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Tips for Choosing the Best Agario Name</h2>
              <div className="space-y-3">
                {[
                  { tip: 'Keep it under 15 characters', detail: 'Agar.io displays names on your cell body. Very long names shrink to fit the cell or get cut off. Shorter names look cleaner and more readable.' },
                  { tip: 'Bold and Sans Bold stand out best at small sizes', detail: 'When your cell is small, complex scripts can become illegible. 𝗕𝗼𝗹𝗱 and 𝐁𝐨𝐥𝐝 styles remain readable even at tiny cell sizes.' },
                  { tip: 'Use frames sparingly', detail: 'Frames add characters to your name length. A simple name like King with a dragon frame ꧁King꧂ uses 9 characters total — still within the limit.' },
                  { tip: 'Combined styles work best for large cells', detail: 'Once you grow large enough, combined styles like ꧁𝓚𝓲𝓷𝓰꧂ look incredible and fully visible to other players.' },
                  { tip: 'Emoji symbols are universal', detail: '⚡, 🔥, 👑 render on all platforms and game clients. They\'re a safe bet for visibility across different devices.' },
                  { tip: 'Try a "team tag" prefix', detail: 'If playing with friends, start names with a shared tag — e.g., 「TM」King and 「TM」Shadow helps teammates spot each other instantly.' },
                ].map((t, i) => (
                  <div key={i} className="flex gap-3 p-3 rounded-xl bg-background/60">
                    <span className="text-primary font-bold flex-shrink-0 text-lg">💡</span>
                    <div>
                      <p className="font-semibold text-sm">{t.tip}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.detail}</p>
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
                    q: 'Do fancy Unicode names work in Agar.io?',
                    a: 'Yes — Agar.io supports Unicode characters in player names, including characters from mathematical font blocks (bold, script, fraktur), fullwidth characters, circled letters, and most emoji. The name is entered in the text field on the game\'s start screen.',
                  },
                  {
                    q: 'Why is there a 15 character limit?',
                    a: 'Agar.io limits names to approximately 15 characters to ensure names fit legibly on player cells. Note that most Unicode mathematical characters (bold, script, etc.) are surrogate pairs — they visually appear as 1 character but may count as 2 in some systems. If a name appears cut off in-game, try a shorter version.',
                  },
                  {
                    q: 'How do I use a generated name in Agar.io?',
                    a: 'Click "Copy" next to any style, go to agar.io, click the name field at the start screen, paste (Ctrl+V / Cmd+V), and click Play. Your styled name will appear on your cell.',
                  },
                  {
                    q: 'Can other players see my fancy name?',
                    a: 'Yes — all other players in the same game server see your name exactly as you set it. The Unicode characters render in their browsers too, so your ꧁𝓚𝓲𝓷𝓰꧂ will look the same to everyone.',
                  },
                  {
                    q: 'What are the most popular Agar.io name styles?',
                    a: 'The most popular styles are Bold Script (𝓝𝓪𝓶𝓮), Bold Fraktur (𝕹𝖆𝖒𝖊), the Dragon frame (꧁Name꧂), and Combined styles like ꧁𝓝𝓪𝓶𝓮꧂. Small Caps (ɴᴀᴍᴇ) is also popular for its clean, elegant look.',
                  },
                  {
                    q: 'Does this work for other .io games?',
                    a: 'Yes! These Unicode name styles work in virtually every browser-based .io game that accepts text input for player names — including Slither.io, Diep.io, Mope.io, Zombs.io, and many others.',
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
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl font-bold mb-4">External Links</h2>
              <ul className="space-y-3">
                {[
                  { href: 'https://agar.io', label: 'Agar.io — Play the Game', desc: 'The official Agar.io game — paste your generated name and start playing.' },
                  { href: 'https://en.wikipedia.org/wiki/Agar.io', label: 'Agar.io — Wikipedia', desc: 'History, gameplay mechanics, and the cultural impact of Agar.io.' },
                  { href: 'https://www.reddit.com/r/Agario/', label: 'r/Agario — Reddit Community', desc: 'Tips, strategies, screenshots, and name ideas from the Agar.io player community.' },
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
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', sub: '25+ cursed styles' },
                  { href: '/tools/cursive-text-generator', label: 'Cursive Text Generator', sub: 'Handwriting styles' },
                  { href: '/tools/tiny-text-generator', label: 'Tiny Text Generator', sub: 'Superscript & small caps' },
                  { href: '/tools/vaporwave-text-generator', label: 'Vaporwave Text', sub: 'Full-width aesthetic' },
                  { href: '/tools/zalgo-text-generator', label: 'Zalgo Text Generator', sub: 'Creepy dripping text' },
                  { href: '/tools/mirror-text', label: 'Mirror Text Generator', sub: 'Da Vinci mirror writing' },
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

            {/* Popular names */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Popular Name Ideas</h3>
              <div className="space-y-2 text-sm font-mono">
                {[
                  '꧁༺ King ༻꧂',
                  '𝓢𝓱𝓪𝓭𝓸𝔀',
                  '★彡 Ghost 彡★',
                  '𝕯𝖗𝖆𝖌𝖔𝖓',
                  '⚡ Zeus ⚡',
                  '꧁✦ Viper ✦꧂',
                  '☠ Reaper ☠',
                  '👑 Ruler 👑',
                  '𝔾𝕠𝕕',
                  '░▒▓ Boss ▓▒░',
                ].map((n, i) => (
                  <div key={i} className="p-2 rounded-lg bg-background/50 text-xs break-all">{n}</div>
                ))}
              </div>
            </div>

            {/* Game tips */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Quick Game Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'Split your cell to eat fast enemies',
                  'Eject mass to bait cells into traps',
                  'Use viruses to protect yourself when small',
                  'Corners of the map have less competition',
                  'Team up temporarily to take down large cells',
                  'A cool name makes the leaderboard more fun',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5 flex-shrink-0">●</span>
                    <span>{tip}</span>
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
