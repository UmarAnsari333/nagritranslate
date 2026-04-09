import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { AurebeshTranslatorTool } from '@/components/tools/aurebesh-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Aurebesh Translator - English to Star Wars Aurebesh Converter',
  description: 'Translate English text into Aurebesh — the written language of the Star Wars universe (Galactic Basic). Free online Aurebesh translator with visual glyphs, letter names, and full alphabet chart.',
  keywords: ['aurebesh translator', 'star wars language', 'aurebesh converter', 'galactic basic', 'star wars alphabet', 'aurebesh alphabet', 'english to aurebesh', 'star wars writing', 'jedi language translator'],
  openGraph: {
    title: 'Aurebesh Translator — English to Star Wars Galactic Basic',
    description: 'Convert English to Aurebesh from the Star Wars universe. Visual glyphs, letter names, and full alphabet reference. Free online.',
    type: 'website',
  },
}

export default function AurebeshTranslatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aurebesh Translator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Convert English into Aurebesh — the written alphabet of the Star Wars universe, also known as Galactic Basic. See your text as Jedi, Sith, and the Galactic Empire would write it.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <AurebeshTranslatorTool />
            </div>

            {/* What is Aurebesh */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">What is Aurebesh?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Aurebesh is the in-universe writing system of the Star Wars galaxy, used to represent the <strong>Galactic Basic Standard</strong> language — the common tongue spoken throughout the galaxy. Its name comes from the first two characters of the alphabet: <em>Aurek</em> (A) and <em>Besh</em> (B), similar to how &quot;alphabet&quot; derives from Greek alpha and beta.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Aurebesh appears throughout Star Wars films, TV series, games, and merchandise — on starship displays, signage, Imperial documents, Jedi texts, and more. It is a true 1-to-1 alphabet mapping: each of the 26 English letters corresponds to a unique Aurebesh character, with additional combined glyphs for common digraphs like TH, SH, CH, NG, OO, AE, and EO.
              </p>
            </div>

            {/* Aurebesh in Star Wars */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">Aurebesh in the Star Wars Universe</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Films & Series', desc: 'Appears on screens, signs, and equipment throughout the Skywalker Saga, The Mandalorian, Andor, Obi-Wan Kenobi, and more.' },
                  { title: 'Jedi Archives', desc: 'The Jedi Temple and ancient Jedi texts use Aurebesh extensively in animated series like The Clone Wars and Rebels.' },
                  { title: 'Imperial Use', desc: 'The Galactic Empire uses Aurebesh on Death Star terminals, TIE fighter displays, and official documents.' },
                  { title: 'Theme Parks', desc: 'Aurebesh signage fills Galaxy\'s Edge at Disneyland and Disney World, making it feel like a real alien world.' },
                  { title: 'Video Games', desc: 'Games like Star Wars: Jedi Fallen Order and Battlefront II feature Aurebesh on in-world displays.' },
                  { title: 'Merchandise', desc: 'Lightsaber hilts, clothing, and collectibles often feature Aurebesh inscriptions with hidden messages.' },
                ].map(item => (
                  <div key={item.title} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How it works */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">How the Translator Works</h2>
              <div className="space-y-4">
                {[
                  { n: '1', title: 'Type English Text', desc: 'Enter any English word, phrase, or sentence into the input field.' },
                  { n: '2', title: 'Digraph Detection', desc: 'The translator first checks for digraphs (TH, SH, CH, NG, OO, AE, EO) which become single Aurebesh characters, then processes individual letters.' },
                  { n: '3', title: 'Visual Glyphs', desc: 'Each character is rendered as its Aurebesh glyph — geometric line-art drawn as SVG for crisp rendering at any size.' },
                  { n: '4', title: 'Three Views', desc: 'Switch between Visual Glyphs, Letter Names (romanized), and the full Alphabet Chart reference.' },
                ].map(s => (
                  <div key={s.n} className="flex gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">{s.n}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{s.title}</h3>
                      <p className="text-sm text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Digraphs */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-4">Aurebesh Digraphs</h2>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                Aurebesh includes 7 special characters for common English letter pairs. When detected in your text, these are automatically combined into a single Aurebesh glyph:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { pair: 'TH', name: 'Thesh' },
                  { pair: 'SH', name: 'Shen' },
                  { pair: 'CH', name: 'Cherek' },
                  { pair: 'NG', name: 'Enth' },
                  { pair: 'OO', name: 'Onith' },
                  { pair: 'AE', name: 'Arent' },
                  { pair: 'EO', name: 'Eosk' },
                ].map(d => (
                  <div key={d.pair} className="p-3 bg-primary/5 rounded-xl text-center border border-primary/10">
                    <p className="text-lg font-bold font-mono text-primary">{d.pair}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{d.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-8 p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-2xl font-bold mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'Is Aurebesh a real language?',
                    a: 'Aurebesh is a real writing system — it\'s a 1-to-1 transliteration of English (or any language written in the Latin alphabet). It\'s not a separate spoken language; it\'s how Galactic Basic (which sounds like English) is written in the Star Wars universe.',
                  },
                  {
                    q: 'When did Aurebesh first appear?',
                    a: 'Aurebesh was first created for Star Wars: Return of the Jedi (1983) but was refined and standardized over subsequent films and the Expanded Universe. It became widely recognized through its extensive use in Star Wars: The Clone Wars animated series.',
                  },
                  {
                    q: 'What are the digraphs for?',
                    a: 'Aurebesh has 7 digraph characters — single glyphs representing two-letter combinations (TH, SH, CH, NG, OO, AE, EO). These are treated as single letters in the Aurebesh alphabet, similar to how some scripts have combined characters.',
                  },
                  {
                    q: 'Can I use the output text anywhere?',
                    a: 'The romanized letter names (HERF · ESK · LETH · LETH · OSK for HELLO) can be copied and shared anywhere. For visual Aurebesh rendering in other software, you\'ll need the Aurebesh font installed.',
                  },
                  {
                    q: 'Are numbers included?',
                    a: 'The Aurebesh alphabet covers A–Z and the 7 digraphs. Numbers, punctuation, and special characters are passed through unchanged in this translator.',
                  },
                ].map(item => (
                  <div key={item.q} className="border-b pb-4 last:border-0 last:pb-0">
                    <h3 className="font-semibold mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-4">All Text Tools</h3>
              <div className="space-y-2">
                {[
                  { href: '/tools', label: 'View All Tools', sub: 'Browse all text tools' },
                  { href: '/tools/zalgo-text-generator', label: 'Zalgo Text Generator', sub: 'Cursed dripping text' },
                  { href: '/tools/ned-flanders-translator', label: 'Ned Flanders Translator', sub: 'Okely-dokely diddly speak' },
                  { href: '/tools/robot-voice-generator', label: 'Robot Voice Generator', sub: 'Text to robot speech' },
                  { href: '/tools/glitch-text-generator', label: 'Glitch Text Generator', sub: '25+ cursed styles' },
                  { href: '/tools/morse-code-translator', label: 'Morse Code Translator', sub: 'Text to Morse with audio' },
                  { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', sub: 'Bold, script, gothic' },
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

            {/* Quick reference */}
            <div className="p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Quick Alphabet Reference</h3>
              <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                {[
                  ['A','Aurek'],['B','Besh'],['C','Cresh'],
                  ['D','Dorn'],['E','Esk'],['F','Forn'],
                  ['G','Grek'],['H','Herf'],['I','Isk'],
                  ['J','Jenth'],['K','Krill'],['L','Leth'],
                  ['M','Mern'],['N','Nern'],['O','Osk'],
                  ['P','Peth'],['Q','Qek'],['R','Resh'],
                  ['S','Senth'],['T','Trill'],['U','Usk'],
                  ['V','Vev'],['W','Wesk'],['X','Xesh'],
                  ['Y','Yirt'],['Z','Zerek'],
                ].map(([l, n]) => (
                  <div key={l} className="flex gap-1.5 items-center">
                    <span className="text-primary font-bold w-4">{l}</span>
                    <span className="text-muted-foreground text-[10px]">{n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div className="p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Star Wars Fun Facts</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  'The Aurebesh alphabet has 34 characters: 26 letters + 7 digraphs + 1 special.',
                  'Galaxy\'s Edge signs at Disney parks contain actual readable Aurebesh messages.',
                  '"The Mandalorian" Beskar steel scenes feature Aurebesh inscriptions with real meaning.',
                  'Many Star Wars fans get Aurebesh tattoos with meaningful phrases.',
                  'The Jedi Order\'s records and lightsaber inscriptions use Aurebesh.',
                ].map((fact, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-primary font-bold flex-shrink-0">★</span>
                    <span>{fact}</span>
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
