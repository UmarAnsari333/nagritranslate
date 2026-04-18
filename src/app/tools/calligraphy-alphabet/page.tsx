import { Metadata } from 'next'
import { CalligraphyAlphabetTool } from '@/components/tools/calligraphy-alphabet-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Calligraphy Alphabet Generator - Copy & Paste Calligraphy Text',
  description: 'Generate beautiful calligraphy alphabet text online. Choose from 18+ styles including Bold Script, Elegant Script, Gothic Fraktur, and more. Free, instant copy & paste — works on Instagram, WhatsApp, and anywhere.',
  keywords: [
    'calligraphy alphabet', 'calligraphy text generator', 'calligraphy font generator',
    'calligraphy letters', 'calligraphy alphabet copy paste', 'calligraphy text copy paste',
    'cursive calligraphy', 'gothic calligraphy', 'calligraphy font online', 'calligraphy generator free',
    'script font generator', 'gothic font generator', 'fraktur font generator', 'blackletter font generator',
    'calligraphy writing', 'fancy calligraphy letters', 'calligraphy alphabet a to z',
    'bold script generator', 'elegant script font', 'calligraphy style text',
    'calligraphy copy paste instagram', 'calligraphy text for bio', 'calligraphy name generator',
    'medieval font generator', 'old english font generator', 'calligraphy letters online',
  ],
  openGraph: {
    title: 'Calligraphy Alphabet Generator — 18+ Styles, Free & Instant',
    description: 'Generate Bold Script, Elegant Script, Gothic Fraktur, and 15+ more calligraphy styles. Copy and paste anywhere.',
    type: 'website',
  },
}

const STYLE_PREVIEWS = [
  { name: 'Bold Script',    sample: '𝓒𝓪𝓵𝓵𝓲𝓰𝓻𝓪𝓹𝓱𝔂' },
  { name: 'Elegant Script', sample: '𝒞𝒶𝓁𝓁𝒾ℊ𝓇𝒶𝓅𝒽𝓎' },
  { name: 'Gothic Fraktur', sample: '𝔠𝔞𝔩𝔩𝔦𝔤𝔯𝔞𝔭𝔥𝔶' },
  { name: 'Bold Gothic',    sample: '𝖈𝖆𝖑𝖑𝖎𝖌𝖗𝖆𝖕𝖍𝖞' },
]

export default function CalligraphyAlphabetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-8 md:py-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4 border border-primary/20">
            ✒️ 18+ Calligraphy Styles · Copy & Paste
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Calligraphy Alphabet Generator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Transform any text into beautiful calligraphy instantly. Choose from Bold Script, Elegant Cursive, Gothic Fraktur, Blackletter, and 14 more styles — all copy-paste ready.
          </p>

          {/* Style previews */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
            {STYLE_PREVIEWS.map(s => (
              <div key={s.name} className="flex flex-col items-center px-4 py-3 rounded-xl bg-muted/40 border">
                <span className="text-xl sm:text-2xl leading-snug">{s.sample}</span>
                <span className="text-[10px] text-muted-foreground mt-1">{s.name}</span>
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
            <div className="p-4 md:p-8 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-rose-500/5 rounded-2xl border">
              <CalligraphyAlphabetTool />
            </div>

            {/* How to use */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Use</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { n: '1', title: 'Type Your Text', desc: 'Enter any name, word, phrase, or sentence. The preview updates instantly across all styles.' },
                  { n: '2', title: 'Filter by Category', desc: 'Browse all styles, or filter to Script, Gothic, or Decorative to narrow down your favourites.' },
                  { n: '3', title: 'Save Favourites', desc: 'Click the heart on any style to save it. Access your favourites quickly via the Favourites filter.' },
                  { n: '4', title: 'Copy & Paste', desc: 'Click any style card or the Copy button to grab the text. Works on all platforms — Instagram, WhatsApp, Discord, Twitter.' },
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

            {/* What is calligraphy */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4">What Is Calligraphy?</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Calligraphy</strong> (from Greek <em>kallos</em> "beauty" + <em>graphe</em> "writing") is the art of beautiful, decorative handwriting. For thousands of years it was practiced with reed pens, quill feathers, and brush pens — and today it has crossed into digital typography.
                </p>
                <p>
                  Our tool generates calligraphy-style text using <strong className="text-foreground">Unicode mathematical and script characters</strong>. These are real Unicode characters — not images or custom fonts — so they work anywhere you can paste text: social media, messaging apps, documents, and websites.
                </p>
                <p>
                  The styles fall into three families: <strong className="text-foreground">Script/Cursive</strong> (flowing, pen-like letterforms), <strong className="text-foreground">Gothic/Fraktur</strong> (angular blackletter derived from medieval manuscripts), and <strong className="text-foreground">Decorative</strong> (embellished variations with symbols and flourishes).
                </p>
              </div>
            </div>

            {/* Styles guide */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Calligraphy Style Guide</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: '✒️',
                    title: 'Script & Cursive Styles',
                    desc: 'Flowing, connected letterforms that mimic traditional pen calligraphy. Bold Script is the most popular online — thick strokes, high contrast. Elegant Script is thinner and more refined, closer to copperplate calligraphy.',
                    example: '𝓑𝓮𝓪𝓾𝓽𝓲𝓯𝓾𝓵 · 𝒞𝒶𝓁𝓁𝒾ℊ𝓇𝒶𝓅𝒽𝓎',
                  },
                  {
                    icon: '🖤',
                    title: 'Gothic & Fraktur Styles',
                    desc: 'Angular blackletter scripts developed in medieval European manuscripts. Fraktur was the primary printing type in Germany until the 20th century. Bold Gothic adds weight for a dramatic, powerful look.',
                    example: '𝔊𝔬𝔱𝔥𝔦𝔠 · 𝕭𝖑𝖆𝖈𝖐𝖑𝖊𝖙𝖙𝖊𝖗',
                  },
                  {
                    icon: '✨',
                    title: 'Decorative Styles',
                    desc: 'Script and gothic enhanced with surrounding symbols — hearts, stars, crowns, and flourishes. Perfect for Instagram bios, social media names, and creative messages where you want extra flair.',
                    example: '♡ 𝓛𝓸𝓿𝓮 ♡ · ✦ 𝒮𝓉𝒶𝓇𝓈 ✦',
                  },
                ].map(g => (
                  <div key={g.title} className="p-4 rounded-xl border bg-muted/20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{g.icon}</span>
                      <h3 className="font-semibold">{g.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{g.desc}</p>
                    <p className="text-lg font-mono select-all">{g.example}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Where to use */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Where to Use Calligraphy Text</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: '📸', title: 'Instagram Bio & Posts', desc: 'Script fonts stand out in bios and captions. Bold Script is the #1 Instagram calligraphy style.' },
                  { icon: '💬', title: 'WhatsApp & Messaging', desc: 'Send calligraphy messages for birthdays, anniversaries, and special occasions.' },
                  { icon: '🎮', title: 'Discord & Gaming', desc: 'Gothic fonts are hugely popular for gaming usernames and server names.' },
                  { icon: '🐦', title: 'Twitter / X & Threads', desc: 'Stand out in the feed with a calligraphy display name or tweet.' },
                  { icon: '🎂', title: 'Digital Cards & Invitations', desc: 'Add a calligraphy heading to wedding invites, birthday greetings, or event announcements.' },
                  { icon: '✍️', title: 'Names & Signatures', desc: 'Generate your name in calligraphy for a stylish digital signature or username.' },
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
                    q: 'Why does the calligraphy text work without a special font installed?',
                    a: 'The characters are standard Unicode code points — specifically the Mathematical Script, Fraktur, and Double-Struck blocks (U+1D400–U+1D7FF). They\'re built into every modern operating system, so they render everywhere without installing anything.',
                  },
                  {
                    q: 'Can I use these calligraphy letters on Instagram?',
                    a: 'Yes! Copy any result and paste it directly into your Instagram bio, caption, story text, or DMs. Bold Script and Elegant Script are the most popular styles for Instagram calligraphy.',
                  },
                  {
                    q: 'What is the difference between Script and Gothic calligraphy?',
                    a: 'Script (cursive) calligraphy features flowing, rounded letterforms with connected strokes — think elegant pen writing. Gothic (Blackletter/Fraktur) uses angular, dense strokes with sharp serifs, originally developed for medieval manuscripts and German printing.',
                  },
                  {
                    q: 'Do numbers and punctuation get converted?',
                    a: 'Letters A–Z (upper and lowercase) are fully converted. Numbers and most punctuation marks don\'t have equivalents in the Script/Fraktur Unicode blocks, so they pass through as standard characters.',
                  },
                  {
                    q: 'Can I save my favourite styles?',
                    a: 'Yes — click the heart icon on any style card to save it as a favourite. Your favourites are stored locally in your browser and accessible via the Favourites filter button.',
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

            {/* Styles count */}
            <div className="p-4 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl border border-purple-500/20">
              <h3 className="font-bold mb-3">✒️ 18 Calligraphy Styles</h3>
              <div className="space-y-2 text-sm">
                {[
                  ['✒️ Script / Cursive', '6 styles'],
                  ['🖤 Gothic / Fraktur', '4 styles'],
                  ['✨ Decorative',        '8 styles'],
                ].map(([cat, count]) => (
                  <div key={cat} className="flex justify-between py-1 border-b border-border/30 last:border-0">
                    <span className="text-muted-foreground">{cat}</span>
                    <span className="font-semibold text-primary">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick alphabet */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3">Quick Alphabet — Bold Script</h3>
              <p className="text-xl leading-relaxed break-all select-all">
                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(c => ({
                  A:'𝓐',B:'𝓑',C:'𝓒',D:'𝓓',E:'𝓔',F:'𝓕',G:'𝓖',H:'𝓗',I:'𝓘',J:'𝓙',K:'𝓚',L:'𝓛',M:'𝓜',
                  N:'𝓝',O:'𝓞',P:'𝓟',Q:'𝓠',R:'𝓡',S:'𝓢',T:'𝓣',U:'𝓤',V:'𝓥',W:'𝓦',X:'𝓧',Y:'𝓨',Z:'𝓩',
                }[c] ?? c)).join('')}
              </p>
              <p className="text-xl leading-relaxed break-all select-all mt-2">
                {'abcdefghijklmnopqrstuvwxyz'.split('').map(c => ({
                  a:'𝓪',b:'𝓫',c:'𝓬',d:'𝓭',e:'𝓮',f:'𝓯',g:'𝓰',h:'𝓱',i:'𝓲',j:'𝓳',k:'𝓴',l:'𝓵',m:'𝓶',
                  n:'𝓷',o:'𝓸',p:'𝓹',q:'𝓺',r:'𝓻',s:'𝓼',t:'𝓽',u:'𝓾',v:'𝓿',w:'𝔀',x:'𝔁',y:'𝔂',z:'𝔃',
                }[c] ?? c)).join('')}
              </p>
              <p className="text-[10px] text-muted-foreground mt-2">Click to select and copy</p>
            </div>

            {/* Related tools */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3">Related Tools</h3>
              <div className="space-y-2">
                {[
                  { name: 'Cursive Text Generator', path: '/tools/cursive-text-generator', icon: '✍️' },
                  { name: 'Fancy Text Generator',   path: '/tools/fancy-text-generator',   icon: '✨' },
                  { name: 'Fancy Letters',           path: '/tools/fancy-letters',           icon: '🔡' },
                  { name: 'Preppy Font Generator',   path: '/tools/preppy-font-generator',   icon: '🎀' },
                  { name: 'Aesthetic Fonts',          path: '/tools/aesthetic-fonts-generator', icon: '🌸' },
                  { name: 'Glitch Text Generator',   path: '/tools/glitch-text-generator',   icon: '👾' },
                  { name: 'Runic Alphabet',           path: '/tools/runic-alphabet-converter', icon: '᚛' },
                ].map(t => (
                  <Link key={t.path} href={t.path} className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted/50 transition-colors text-sm group">
                    <span className="text-lg w-6 text-center">{t.icon}</span>
                    <span className="group-hover:text-primary transition-colors">{t.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tips */}
            <div className="p-4 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="font-bold mb-3">💡 Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong className="text-foreground">Bold Script</strong> is best for Instagram bios</li>
                <li>• <strong className="text-foreground">Gothic Fraktur</strong> is popular for gaming names</li>
                <li>• Mix a decorative style like ♡ Heart Script for birthdays</li>
                <li>• Use the alphabet chart to click-insert individual letters</li>
                <li>• Heart ❤️ your favourites for quick access later</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
