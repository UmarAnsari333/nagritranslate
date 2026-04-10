import { Metadata } from 'next'
import { Wrench } from 'lucide-react'
import { GibberishTranslatorTool } from '@/components/tools/gibberish-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gibberish Translator — Pig Latin, Ubbi Dubbi, Ob, Op, Idig & Tutnese',
  description: 'Translate English to Gibberish and back. Supports 6 secret language styles: Pig Latin, Ubbi Dubbi, Ob Language, Op Language, Idig, and Tutnese. Encode and decode instantly with word-by-word breakdown.',
  keywords: [
    'gibberish translator', 'pig latin translator', 'ubbi dubbi translator', 'ob language translator',
    'op language translator', 'idig translator', 'tutnese translator', 'secret language translator',
    'pig latin generator', 'pig latin encoder', 'pig latin decoder', 'pig latin converter',
    'ubbi dubbi', 'ob language', 'op language', 'idig gibberish', 'tutnese',
    'kids secret language', 'playground language', 'gibberish language',
    'english to pig latin', 'pig latin to english', 'gibberish encoder decoder',
    'text to gibberish', 'gibberish generator', 'funny language translator',
  ],
  openGraph: {
    title: 'Gibberish Translator — 6 Secret Language Styles',
    description: 'Encode and decode English in Pig Latin, Ubbi Dubbi, Ob, Op, Idig, and Tutnese. Word-by-word breakdown, listen aloud, instant copy.',
    type: 'website',
  },
}

export default function GibberishTranslatorPage() {
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
            Gibberish Translator
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Encode and decode English using 6 classic gibberish secret languages — Pig Latin, Ubbi Dubbi, Ob, Op, Idig, and Tutnese. Includes word-by-word breakdown and listen-aloud mode.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Tool */}
          <div className="lg:col-span-2">
            <div className="p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <GibberishTranslatorTool />
            </div>

            {/* What is Gibberish */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">What is Gibberish?</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Gibberish (also called <strong>language games</strong> or <strong>secret languages</strong>) refers to a family of word-play systems where English words are transformed according to consistent phonetic rules. The result sounds garbled or incomprehensible to uninitiated listeners, while anyone who knows the rules can decode it instantly — making it perfect as a playground secret language between friends.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Unlike codes that substitute letters (like Caesar cipher or ROT13), gibberish languages operate at the <strong>syllable and phoneme level</strong> — inserting sounds, moving consonant clusters, or replacing individual consonants with specific syllables. This makes them faster to speak aloud and more musical-sounding than character-by-character ciphers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These languages have been used by children (and adults) for generations as a form of secret communication, wordplay, and entertainment. Linguists classify them as <strong>argot</strong> or <strong>cant</strong> — informal in-group languages created for fun or privacy rather than for systematic communication.
              </p>
            </div>

            {/* Variant histories */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">The 6 Gibberish Styles — History & Rules</h2>
              <div className="space-y-6">
                {[
                  {
                    emoji: '🐷',
                    name: 'Pig Latin',
                    history: 'The most widely known language game in the English-speaking world. References to Pig Latin appear as early as 1869 in the US. The origin of the name is unclear — one theory is that it derives from "Dog Latin," a medieval term for crude or garbled Latin, which was later corrupted into "Pig Latin." By the early 20th century it was a staple of American children\'s culture.',
                    rules: [
                      'Word starts with one or more consonants: move the entire consonant cluster to the end and add "ay". Example: "string" → "ingstray".',
                      'Word starts with a vowel: leave the word as-is and add "way" to the end. Example: "apple" → "appleway".',
                      'Capitalisation is preserved — the new first letter becomes the capital.',
                    ],
                  },
                  {
                    emoji: '🫧',
                    name: 'Ubbi Dubbi',
                    history: 'Made famous by the American children\'s TV show Zoom (1972–1978), produced by WGBH Boston and broadcast on PBS. The show featured child performers teaching the language to viewers as a recurring segment. "Ubbi Dubbi" became one of the most recognisable gibberish styles in the US and is still well-remembered by those who grew up watching Zoom.',
                    rules: [
                      'Before every vowel (a, e, i, o, u), insert "ub".',
                      '"hello" → h + ub+e + ll + ub+o = "hubellubo".',
                      'To decode: remove every "ub" that appears immediately before a vowel.',
                    ],
                  },
                  {
                    emoji: '🔵',
                    name: 'Ob Language',
                    history: 'The "Ob" variant is one of the oldest and most geographically widespread insertion languages, documented in children\'s language play across the United States, United Kingdom, Australia, and New Zealand. It follows exactly the same phonological pattern as Ubbi Dubbi but uses "ob" as the inserted syllable, making it slightly easier to speak quickly.',
                    rules: [
                      'Before every vowel, insert "ob".',
                      '"hello" → "hobellobo", "cat" → "cobat".',
                      'Decode by removing all "ob" that precede a vowel.',
                    ],
                  },
                  {
                    emoji: '🟠',
                    name: 'Op Language',
                    history: 'The "Op" variant is particularly associated with Australian schoolyard culture, though it has also been documented in the American South and parts of Canada. The "op" insertion is slightly harsher-sounding than "ob" or "ub", which some speakers find more amusing and more effectively disguises the original words.',
                    rules: [
                      'Before every vowel, insert "op".',
                      '"hello" → "hopelloрo", "world" → "woporld".',
                      'Decode by removing all "op" that precede a vowel.',
                    ],
                  },
                  {
                    emoji: '🌀',
                    name: 'Idig / Igpay',
                    history: 'The "Idig" variant is the most extreme of the vowel-insertion family. By using the four-character string "idig" rather than two characters, words become substantially longer and far harder to parse by untrained listeners. It has been documented in various American and British communities and is sometimes called "Igpay" (itself Pig Latin for "pig"). It produces the most authentic-sounding gibberish of any variant.',
                    rules: [
                      'Before every vowel, insert "idig".',
                      '"hello" → "hidigellidigio".',
                      'Decode by removing all "idig" that precede a vowel.',
                    ],
                  },
                  {
                    emoji: '🔤',
                    name: 'Tutnese',
                    history: 'Tutnese (also called "Tut" or "King Tut Language") operates on a fundamentally different principle from the other variants. Rather than inserting sounds around vowels, it replaces every consonant with a specific pronounceable syllable. Each consonant has a unique replacement: B→bub, C→cash, D→dud, F→fuf, G→gug, H→hash, J→jay, K→kack, L→lul, M→mum, N→nun, P→pub, Q→quack, R→rut, S→sus, T→tut, V→vuv, W→wash, X→ex, Y→yub, Z→zub. The name "King Tut" references the Egyptian pharaoh, evoking an exotic-sounding ancient language.',
                    rules: [
                      'Every consonant is replaced with its Tutnese syllable.',
                      'Vowels are left completely unchanged.',
                      '"hello" → hash + e + lul + lul + o = "hashelullulo".',
                    ],
                  },
                ].map(v => (
                  <div key={v.name} className="p-5 bg-primary/5 rounded-xl">
                    <h3 className="font-bold text-lg mb-2">{v.emoji} {v.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{v.history}</p>
                    <ul className="space-y-1">
                      {v.rules.map((r, i) => (
                        <li key={i} className="text-sm flex gap-2">
                          <span className="text-primary flex-shrink-0">→</span>
                          <span className="text-muted-foreground">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* How to speak */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">How to Speak Gibberish Fluently</h2>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Start with Pig Latin', detail: 'It\'s the easiest to learn because you only apply one rule per word (move consonants to end). Practice with simple words: cat→atcay, dog→ogday, fish→ishfay.' },
                  { step: '2', title: 'Practise common words first', detail: 'Translate the 50 most common English words (the, and, is, you, that…) in your head until the response is instant. These appear so often that fluency depends on automatic recall.' },
                  { step: '3', title: 'Think in syllables, not letters', detail: 'For insertion variants (Ubbi Dubbi, Ob, Op, Idig), you\'re operating on vowel sounds — not spelling. "eight" has one vowel sound "ay", so it becomes "ubеight" not "ubеubigубhubт".' },
                  { step: '4', title: 'Use the listen button to train your ear', detail: 'Click the 🔊 Listen button to hear your translated text spoken aloud. Repeatedly listening to gibberish trains your brain to parse the phoneme patterns, making decoding much faster.' },
                  { step: '5', title: 'Practise the swap feature', detail: 'Hit the swap (↔) button to take your gibberish output and immediately decode it back. If you get the original text, your encoding was correct. This is the fastest way to verify your understanding.' },
                  { step: '6', title: 'Progress to Tutnese last', detail: 'Tutnese requires memorising a 21-consonant table. Learn it in groups: stop consonants (b/d/p/t/k), fricatives (f/v/s/z/h), then liquids and nasals (l/r/m/n). Once memorised, Tutnese sounds completely unlike English to uninitiated listeners.' },
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

            {/* FAQ */}
            <div className="mt-6 p-4 md:p-8 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">FAQ</h2>
              <div className="space-y-4">
                {[
                  {
                    q: 'What is the difference between Gibberish and Pig Latin?',
                    a: 'Pig Latin is one specific variant of gibberish. "Gibberish" is an umbrella term for any language game that scrambles English words according to consistent rules. Pig Latin is the most well-known, but Ubbi Dubbi, Ob Language, Op Language, Idig, and Tutnese are all also types of gibberish.',
                  },
                  {
                    q: 'Can native speakers actually have conversations in these languages?',
                    a: 'Yes — fluent speakers of Pig Latin and Ubbi Dubbi can hold real-time conversations at near-normal speaking speed. The transformation becomes automatic with practice, similar to how bilingual speakers switch between languages. Tutnese is slower because of the consonant substitution table, but fluent Tutnese speakers do exist.',
                  },
                  {
                    q: 'Is the decoding (Gibberish → English) always accurate?',
                    a: 'For the vowel-insertion variants (Ubbi Dubbi, Ob, Op, Idig), decoding is mathematically reversible and always accurate. Pig Latin decoding is accurate for the vast majority of words but can occasionally produce an incorrect result for words where the consonant cluster could have been split differently. Tutnese decoding uses a greedy longest-match algorithm which is highly accurate.',
                  },
                  {
                    q: 'Are these real languages?',
                    a: 'They are language games — systematic but informal. Linguists classify them as "ludlings" (from Latin ludus, "play") or "speech disguises." They have real phonological rules and can be used for genuine communication, but they are not natural languages with native speakers, grammars, or vocabulary in the traditional sense.',
                  },
                  {
                    q: 'Why do kids love Gibberish?',
                    a: 'Language games offer children agency and exclusivity — a communication system adults don\'t automatically understand. They also develop phonological awareness (understanding how sounds work in language), which research has linked to better reading and literacy outcomes. The playfulness and rhythm of gibberish languages also make them inherently entertaining.',
                  },
                  {
                    q: 'What does "Ubbi Dubbi" mean?',
                    a: '"Ubbi Dubbi" is itself the Ubbi Dubbi encoding of "I don\'t know" — which in Ubbi Dubbi would be rendered as something like "ubi dubon\'ubt kubnobow." More likely it was simply invented as a catchy, self-referential name for the language when Zoom popularised it in the 1970s.',
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
                  { href: 'https://en.wikipedia.org/wiki/Pig_Latin', label: 'Pig Latin — Wikipedia', desc: 'Full history, rules, and cultural references for Pig Latin including its appearances in media.' },
                  { href: 'https://en.wikipedia.org/wiki/Language_game', label: 'Language Game — Wikipedia', desc: 'Overview of ludlings and language games across cultures — covers Ubbi Dubbi, Pig Latin, Tutnese and many more.' },
                  { href: 'https://en.wikipedia.org/wiki/Ubbi_dubbi', label: 'Ubbi Dubbi — Wikipedia', desc: 'History of the Zoom TV show\'s Ubbi Dubbi language and its cultural impact on American children\'s television.' },
                  { href: 'https://en.wikipedia.org/wiki/Tutnese', label: 'Tutnese — Wikipedia', desc: 'Complete Tutnese consonant table, history, and regional variations of the King Tut language game.' },
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
                  { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', sub: 'Bold, script, gothic styles' },
                  { href: '/tools/emoji-translator', label: 'Emoji Translator', sub: 'Convert text to emoji' },
                  { href: '/tools/ned-flanders-translator', label: 'Ned Flanders Translator', sub: 'Diddly-doodly speak' },
                  { href: '/tools/aurebesh-translator', label: 'Aurebesh Translator', sub: 'Star Wars Galactic script' },
                  { href: '/tools/mirror-text', label: 'Mirror Text Generator', sub: 'Da Vinci mirror writing' },
                  { href: '/tools/morse-code-translator', label: 'Morse Code Translator', sub: 'Text ↔ Morse with audio' },
                  { href: '/tools/zalgo-text-generator', label: 'Zalgo Text Generator', sub: 'Creepy dripping text' },
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

            {/* Quick cheat sheet */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Quick Reference</h3>
              <div className="space-y-2 text-xs">
                {[
                  { name: '🐷 Pig Latin', ex: 'hello → ellohay' },
                  { name: '🫧 Ubbi Dubbi', ex: 'hello → hubellubo' },
                  { name: '🔵 Ob Language', ex: 'hello → hobellobo' },
                  { name: '🟠 Op Language', ex: 'hello → hopelloрo' },
                  { name: '🌀 Idig', ex: 'hello → hidigellidigio' },
                  { name: '🔤 Tutnese', ex: 'hello → hashelullulo' },
                ].map(s => (
                  <div key={s.name} className="p-2 bg-background/60 rounded-lg">
                    <p className="font-semibold">{s.name}</p>
                    <p className="font-mono text-muted-foreground">{s.ex}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun facts */}
            <div className="p-4 md:p-6 bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl border">
              <h3 className="text-lg font-bold mb-3">Fun Facts</h3>
              <div className="space-y-3 text-xs text-muted-foreground">
                <p>🎬 Pig Latin appears in the 1919 silent film <strong>Don't Change Your Husband</strong> — one of its earliest recorded media appearances.</p>
                <p>📺 The Zoom TV show (1972–1978) taught Ubbi Dubbi to an entire generation of American children — it was so popular that kids genuinely conversed in it at school.</p>
                <p>🔬 Linguists classify language games as <strong>ludlings</strong> — a portmanteau of Latin <em>ludus</em> (play) and <em>linguam</em> (language).</p>
                <p>🧠 Research shows that children who learn language games show stronger <strong>phonological awareness</strong> — a key predictor of reading ability.</p>
                <p>👑 "Tutnese" is named after <strong>Tutankhamun</strong>, the Egyptian pharaoh, giving it an air of mysterious ancient origin it doesn't actually have.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
