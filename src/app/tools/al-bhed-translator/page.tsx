import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { AlBhedTranslatorTool } from '@/components/tools/al-bhed-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Al Bhed Translator — Final Fantasy X Language Encoder & Decoder',
  description: 'Translate English to Al Bhed and back instantly. The complete Final Fantasy X cipher with Primer Mode — simulate discovering letters one-by-one just like in the game. Includes the full 26-letter substitution table and famous FFX phrases.',
  keywords: [
    'al bhed translator', 'al bhed', 'final fantasy x al bhed', 'ffx al bhed',
    'al bhed to english', 'english to al bhed', 'al bhed decoder', 'al bhed encoder',
    'al bhed cipher', 'al bhed alphabet', 'al bhed language', 'al bhed converter',
    'final fantasy x language', 'ffx language', 'al bhed primer', 'al bhed translation',
    'spira language', 'rikku language', 'final fantasy language translator',
    'al bhed dictionary', 'al bhed chart', 'al bhed substitution',
  ],
  openGraph: {
    title: 'Al Bhed Translator — Final Fantasy X Cipher',
    description: 'Encode and decode English in Al Bhed. Primer Mode lets you simulate discovering letters one-by-one, just like in FFX. Full cipher table included.',
    type: 'website',
  },
}

export default function AlBhedTranslatorPage() {
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
            Al Bhed Translator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            The complete{' '}
            <a href="https://finalfantasy.fandom.com/wiki/Al_Bhed_language" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">
              Final Fantasy X
            </a>{' '}
            Al Bhed cipher. Encode English into Al Bhed or decode Al Bhed back to English — with Primer Mode to simulate unlocking letters one-by-one just like in the game.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <AlBhedTranslatorTool />
            </div>

            {/* What is Al Bhed */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What is the Al Bhed Language?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Al Bhed is the language of the Al Bhed people in{' '}
                <a href="https://en.wikipedia.org/wiki/Final_Fantasy_X" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 font-semibold">
                  Final Fantasy X
                </a>{' '}
                (Square, 2001), one of the best-selling and most critically acclaimed entries in the Final Fantasy series. In the game's world of <strong>Spira</strong>, the Al Bhed are a technically skilled tribe shunned by mainstream society for their use of machina (machinery) — which is forbidden by the dominant religious institution, Yevon.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Unlike most fictional languages (such as Tolkien's Elvish or Klingon), Al Bhed is not a constructed language with its own grammar, vocabulary, and phonology. Instead, it is a <strong>simple monoalphabetic substitution cipher</strong> applied to English. Every letter of the English alphabet maps to a different letter — A becomes Y, E becomes A, H becomes R, and so on across all 26 letters.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This design choice was intentional and brilliant: players can hear Al Bhed spoken by characters like <strong>Rikku</strong> and <strong>Brother</strong>, and as they progress through the game discovering <strong>Al Bhed Primers</strong> — instruction books hidden throughout Spira — the written Al Bhed text in the game world gradually becomes readable. It creates a genuine feeling of learning a language, and players who collect all 26 Primers can read every piece of Al Bhed text in the game.
              </p>
            </div>

            {/* Al Bhed in the game */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Al Bhed in Final Fantasy X — Lore & Story</h2>
              <div className="space-y-5">
                {[
                  {
                    title: 'Who are the Al Bhed?',
                    body: 'The Al Bhed are a people distinguished by their distinctive green spiral eyes — a trait that makes them easily identifiable and targets of discrimination. They live primarily on a salvage ship and at a secret Home base in the Bikanel Desert. Their leader is Cid, and his daughter Rikku is one of the game\'s main party members. The Al Bhed are among the few in Spira who reject the doctrine of Yevon and seek technological solutions to the eternal threat of Sin.',
                  },
                  {
                    title: 'The Al Bhed Primers',
                    body: 'There are 26 Al Bhed Primers scattered across the game world — one for each letter of the alphabet. Finding a Primer permanently teaches the player (and protagonist Tidus) what that letter means in Al Bhed. Primers are found in chests, on the ground, given by NPCs, and some are missable. Collecting all 26 is required for the "Translator" achievement in HD remaster versions. If you miss a Primer in early areas, it can sometimes be found in a later shop or location.',
                  },
                  {
                    title: 'Rikku — the Al Bhed heart of the story',
                    body: 'Rikku is Yuna\'s cousin and joins the party early in the game. She speaks English fluently but switches to Al Bhed when talking with family, particularly her brother Brother and her father Cid. Key plot moments — including the reveal that Yuna\'s pilgrimage will result in her death — are discussed in Al Bhed specifically so Tidus cannot understand them early in the game. Players who have collected enough Primers get to read these conversations fully, dramatically changing their understanding of the plot.',
                  },
                  {
                    title: 'Al Bhed in gameplay',
                    body: 'Outside of story dialogue, Al Bhed text appears on signs, equipment, and menus within the game world. The Bikanel Desert area and the Al Bhed Home location are filled with Al Bhed script. Al Bhed Merchants sell rare items and appear throughout the game. Players fluent in Al Bhed (through Primers or this translator) can read these environmental details for additional world-building.',
                  },
                ].map(s => (
                  <div key={s.title} className="p-4 bg-primary/5 rounded-xl">
                    <h3 className="font-semibold mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How the cipher works */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">How the Al Bhed Cipher Works</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Al Bhed is a <strong>monoalphabetic substitution cipher</strong> — the simplest category of substitution cipher, where each letter always maps to the same other letter. The complete mapping is:
              </p>
              <div className="grid grid-cols-6 sm:grid-cols-9 lg:grid-cols-13 gap-1 mb-6">
                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((l, i) => (
                  <div key={l} className="rounded-lg border bg-muted/10 text-center py-1.5 px-1">
                    <p className="text-[10px] font-bold text-muted-foreground">{l}</p>
                    <p className="text-xs font-mono font-bold text-primary">{'YPLTAVKREZGMSHUBXNCDIJFQOW'[i]}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Encoding example',
                    steps: [
                      '"H" → R (H maps to R)',
                      '"E" → A (E maps to A)',
                      '"L" → M (L maps to M)',
                      '"L" → M (L maps to M)',
                      '"O" → U (O maps to U)',
                      '"Hello" → RAMMU',
                    ],
                  },
                  {
                    title: 'Key properties',
                    steps: [
                      'Every letter always maps to the same letter',
                      'Numbers, punctuation, and spaces are unchanged',
                      'The cipher is self-inverse — encoding twice returns the original (almost — actually encoding ≠ decoding since the map isn\'t symmetric)',
                      'Case is preserved — uppercase stays uppercase',
                      '26 unique mappings, no letter maps to itself',
                    ],
                  },
                ].map(col => (
                  <div key={col.title} className="p-4 bg-background/60 rounded-xl">
                    <h3 className="font-semibold text-sm mb-3">{col.title}</h3>
                    <ul className="space-y-1.5">
                      {col.steps.map((s, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-2">
                          <span className="text-primary flex-shrink-0">→</span>
                          <span className="font-mono">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Famous phrases */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Famous Al Bhed Phrases from FFX</h2>
              <div className="space-y-3">
                {[
                  { alBhed: 'Rammu!', english: 'Hello!', speaker: 'Rikku\'s greeting to Tidus' },
                  { alBhed: 'Fryd yna oui tuehk?', english: 'What are you doing?', speaker: 'Common Al Bhed phrase' },
                  { alBhed: 'E mega oui', english: 'I like you', speaker: 'Al Bhed expression' },
                  { alBhed: 'E luimt kad icad du drec.', english: 'I could get used to this.', speaker: 'Tidus (iconic FFX quote)' },
                  { alBhed: 'E muja Vehym Vyhdyco', english: 'I love Final Fantasy', speaker: 'Encoded for fans' },
                  { alBhed: 'Rammu Funmt', english: 'Hello World', speaker: 'Classic programmer greeting' },
                ].map(phrase => (
                  <div key={phrase.alBhed} className="flex flex-wrap items-start gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="flex-1 min-w-[120px]">
                      <p className="font-mono font-bold text-primary">{phrase.alBhed}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">= &quot;{phrase.english}&quot;</p>
                    </div>
                    <span className="text-xs text-muted-foreground italic self-end">{phrase.speaker}</span>
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
                    q: 'Is Al Bhed a real language?',
                    a: 'No — Al Bhed is a fictional cipher created for Final Fantasy X. It is not a natural language with its own grammar or vocabulary. It is English text with every letter substituted according to a fixed 26-letter map. However, the in-game lore treats it as a real spoken language of the Al Bhed people.',
                  },
                  {
                    q: 'Is encoding the same as decoding in Al Bhed?',
                    a: 'No — the cipher map is not symmetric. Encoding (English → Al Bhed) uses one map, and decoding (Al Bhed → English) uses the reverse. For example, A encodes to Y, but Y encodes to O — not back to A. You need the correct mode for the direction you want.',
                  },
                  {
                    q: 'What are Al Bhed Primers and where do you find them?',
                    a: 'Al Bhed Primers are 26 in-game items that teach the player one letter of the Al Bhed cipher each. They are scattered throughout Spira — in treasure chests, on the ground, and given by NPCs. Some are missable if you progress past certain story points. The HD remaster versions include a Primer shop in later areas to recover missed ones.',
                  },
                  {
                    q: 'What does "Primer Mode" in this tool do?',
                    a: 'Primer Mode simulates the in-game experience of gradually learning Al Bhed. Use the slider to set how many Primers you\'ve "found" (0–26). Only letters from discovered Primers are translated — the rest appear as-is, exactly like reading untranslated Al Bhed text in the game before collecting a Primer.',
                  },
                  {
                    q: 'Can you speak Al Bhed aloud?',
                    a: 'Yes — voice actors in FFX speak Al Bhed dialogue using the substitution phonetically. Characters like Rikku and Brother speak Al Bhed in cutscenes. Since it is derived from English phonemes with substituted letters, it is pronounceable by English speakers and sounds vaguely like a real language when spoken quickly.',
                  },
                  {
                    q: 'Does Al Bhed appear in other Final Fantasy games?',
                    a: 'Al Bhed appears in Final Fantasy X-2 (the 2003 sequel), where the Al Bhed characters return and their language is used again. Minor references appear in other Square Enix games. The cipher itself is unique to the FFX universe and does not appear in unrelated Final Fantasy titles.',
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
                  { href: 'https://finalfantasy.fandom.com/wiki/Al_Bhed_language', label: 'Al Bhed Language — Final Fantasy Wiki', desc: 'Complete Al Bhed cipher table, Primer locations, and all in-game Al Bhed text from FFX and FFX-2.' },
                  { href: 'https://en.wikipedia.org/wiki/Final_Fantasy_X', label: 'Final Fantasy X — Wikipedia', desc: 'History, development, reception, and legacy of FFX — one of the best-selling RPGs of all time.' },
                  { href: 'https://finalfantasy.fandom.com/wiki/Al_Bhed', label: 'Al Bhed (people) — Final Fantasy Wiki', desc: 'Lore, culture, and story of the Al Bhed tribe including Rikku, Cid, Brother, and their role in Spira.' },
                  { href: 'https://en.wikipedia.org/wiki/Substitution_cipher', label: 'Substitution Cipher — Wikipedia', desc: 'How monoalphabetic substitution ciphers like Al Bhed work, with history going back to ancient Rome.' },
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
                  { href: '/tools', label: 'View All Tools', sub: 'Browse all text utilities' },
                  { href: '/tools/aurebesh-translator', label: 'Aurebesh Translator', sub: 'Star Wars Galactic script' },
                  { href: '/tools/gibberish-translator', label: 'Gibberish Translator', sub: 'Pig Latin, Ubbi Dubbi & more' },
                  { href: '/tools/morse-code-translator', label: 'Morse Code Translator', sub: 'Text ↔ Morse with audio' },
                  { href: '/tools/emoji-translator', label: 'Emoji Translator', sub: 'Convert text to emoji' },
                  { href: '/tools/ned-flanders-translator', label: 'Ned Flanders Translator', sub: 'Diddly-doodly speak' },
                  { href: '/tools/mirror-text', label: 'Mirror Text Generator', sub: 'Da Vinci mirror writing' },
                  { href: '/tools/fancy-letters', label: 'Fancy Letters', sub: '50+ Unicode font styles' },
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

            {/* Quick cipher reference */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Quick Cipher Reference</h3>
              <div className="grid grid-cols-2 gap-1 text-xs font-mono">
                {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((eng, i) => (
                  <div key={eng} className="flex items-center gap-2 px-2 py-1 bg-background/60 rounded">
                    <span className="font-bold w-4">{eng}</span>
                    <span className="text-muted-foreground">→</span>
                    <span className="font-bold text-primary">{'YPLTAVKREZGMSHUBXNCDIJFQOW'[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">FFX Fun Facts</h3>
              <div className="space-y-3 text-xs text-muted-foreground">
                <p>🎮 Final Fantasy X sold over <strong>8.5 million copies</strong> on PS2, making it one of the best-selling games of that generation.</p>
                <p>🌊 Al Bhed text appears in <strong>over 200 locations</strong> throughout Spira — signs, menus, cutscene dialogue, and equipment names.</p>
                <p>👁️ The Al Bhed are identified by their <strong>spiral green irises</strong> — a trait that causes discrimination from Yevon followers.</p>
                <p>📖 Collecting all 26 Primers in a single playthrough is challenging — several are <strong>permanently missable</strong> if you advance the story past their locations.</p>
                <p>🎵 The FFX soundtrack by <strong>Nobuo Uematsu</strong> (with Masashi Hamauzu and Junya Nakano) is widely considered one of the greatest in video game history.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
