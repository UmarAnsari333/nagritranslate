import { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { MedievalEnglishTranslatorTool } from '@/components/tools/medieval-english-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Medieval English Translator — Old & Elizabethan English | Free',
  description:
    'Free online Medieval English translator. Convert modern English to Elizabethan / Shakespearean English — thou, thee, thy, -eth verbs, forsooth & more. Rule-based, no AI, instant results.',
  keywords: [
    'medieval english translator',
    'old english translator',
    'elizabethan english translator',
    'shakespearean english translator',
    'thou thee thy translator',
    'middle english converter',
    'convert to old english',
    'archaic english translator',
    'forsooth translator',
    'ye olde english',
    'shakespeare language translator',
    'old fashioned english generator',
    'elizabethan speech generator',
    'thou art translator',
    'verily forsooth generator',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/medieval-english-translator',
  },
  openGraph: {
    title: 'Medieval English Translator — Old & Elizabethan English',
    description:
      'Convert modern English to Elizabethan / Shakespearean English — thou, thee, thy, -eth verbs and 400+ word substitutions. Free, instant, no sign-up.',
    url: 'https://nagritranslate.com/tools/medieval-english-translator',
    type: 'website',
  },
}

const PRONOUN_TABLE = [
  { modern: 'you (subject)', medieval: 'thou', example: '"Thou art brave."' },
  { modern: 'you (object)', medieval: 'thee', example: '"I see thee."' },
  { modern: 'your', medieval: 'thy / thine', example: '"Thy kingdom come."' },
  { modern: 'yourself', medieval: 'thyself', example: '"Know thyself."' },
  { modern: 'we', medieval: 'we', example: '"We shall prevail."' },
  { modern: 'they', medieval: 'they', example: '"They cometh hither."' },
]

const VERB_TABLE = [
  { rule: '2nd person singular (-est)', modern: 'you speak', medieval: 'thou speakest' },
  { rule: '3rd person singular (-eth)', modern: 'he speaks', medieval: 'he speaketh' },
  { rule: 'to be — 2nd person', modern: 'you are', medieval: 'thou art' },
  { rule: 'to be — 3rd person', modern: 'he is', medieval: 'he is' },
  { rule: 'to have — 2nd person', modern: 'you have', medieval: 'thou hast' },
  { rule: 'to have — 3rd person', modern: 'he has', medieval: 'he hath' },
  { rule: 'will — 2nd person', modern: 'you will', medieval: 'thou wilt' },
  { rule: 'do — 2nd person', modern: 'you do', medieval: 'thou dost' },
  { rule: 'shall — 2nd person', modern: 'you shall', medieval: 'thou shalt' },
  { rule: 'can — 2nd person', modern: 'you can', medieval: 'thou canst' },
]

const VOCAB_TABLE = [
  { modern: 'yes', medieval: 'aye / yea' },
  { modern: 'no', medieval: 'nay' },
  { modern: 'hello', medieval: 'hail / good morrow' },
  { modern: 'goodbye', medieval: 'fare thee well' },
  { modern: 'very', medieval: 'most / exceedingly' },
  { modern: 'please', medieval: 'prithee / I prithee' },
  { modern: 'now', medieval: 'presently / forthwith' },
  { modern: 'here', medieval: 'hither' },
  { modern: 'there', medieval: 'thither' },
  { modern: 'go', medieval: 'venture / betake thyself' },
  { modern: 'friend', medieval: 'good fellow / comrade' },
  { modern: 'enemy', medieval: 'foe / adversary' },
  { modern: 'king', medieval: 'sovereign liege' },
  { modern: 'house', medieval: 'abode / dwelling' },
  { modern: 'money', medieval: 'coin / gold' },
]

const FAQ = [
  {
    q: 'Is this real Old English or Middle English?',
    a: "This translator produces Early Modern English — the variety spoken in England roughly 1470–1700, best known from Shakespeare's plays and the King James Bible. True Old English (Anglo-Saxon, before 1100) and Middle English (Chaucer's era, 1100–1470) look very different and are nearly unreadable to modern speakers. Early Modern English is the 'medieval-sounding' register most people think of.",
  },
  {
    q: "What's the difference between thou, thee, and thy?",
    a: "Thou is the subject form (like 'I' or 'he'): 'Thou art wise.' Thee is the object form (like 'me' or 'him'): 'I see thee.' Thy is the possessive (like 'your'): 'Thy sword is sharp.' Thine is used before vowels: 'Thine eyes are bright.' — exactly like 'a' vs 'an' in modern English.",
  },
  {
    q: "Why does 'he speaks' become 'he speaketh'?",
    a: "In Early Modern English the third-person singular present tense used the suffix -eth rather than modern -s. This gives us familiar forms like 'he hath' (has), 'he doth' (does), and 'he goeth' (goes). The translator detects when the previous token is he/she/it and automatically applies the -eth transformation.",
  },
  {
    q: 'Does the translator handle contractions?',
    a: "Yes. Contractions are expanded before any substitution: you're → you are → thou art, he's → he is, they've → they have, etc. This ensures pronoun-verb agreement is applied correctly even in casual modern text.",
  },
  {
    q: 'Can I use the output in a Shakespeare class or historical fiction?',
    a: "The output is a good stylistic approximation for creative purposes — stories, roleplaying, themed events, or school drama projects. For strict academic analysis of actual Shakespeare texts, consult the original folio editions or scholarly annotated editions rather than a generated approximation.",
  },
]

export default function MedievalEnglishTranslatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Text Tools', path: '/tools' },
        { name: 'Medieval English Translator', path: '/tools/medieval-english-translator' },
      ]} />
      <WebPageSchema
        path="/tools/medieval-english-translator"
        name="Medieval English Translator — Old & Elizabethan English"
        description="Free online Medieval English translator. Convert modern English to Elizabethan / Shakespearean English — thou, thee, thy, -eth verbs, forsooth & more."
        type="WebApplication"
      />
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-foreground transition-colors">Tools</Link>
          <span>/</span>
          <span className="text-foreground font-medium">Medieval English Translator</span>
        </nav>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Medieval English Translator</h1>
          <p className="text-muted-foreground text-lg">
            Convert modern English into Elizabethan / Shakespearean English — with correct{' '}
            <em>thou / thee / thy</em> pronouns, <em>-eth</em> verb endings, and 400+ archaic
            word substitutions. Fully rule-based, no AI, instant.
          </p>
        </div>

        {/* ── Tool ───────────────────────────────────────────────────────── */}
        <MedievalEnglishTranslatorTool />

        {/* ── What Is Early Modern English ──────────────────────────────── */}
        <section className="mt-16 mb-10">
          <h2 className="text-2xl font-bold mb-4">What Is "Medieval" English?</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-sm leading-relaxed space-y-4">
            <p>
              When people say "medieval English" or "old English" in everyday speech they usually mean the
              archaic-sounding register of{' '}
              <strong>Early Modern English</strong> — the variety spoken and written in England roughly
              1470–1700 CE. This is the language of Shakespeare's plays, the{' '}
              <a
                href="https://www.kingjamesbibleonline.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                King James Bible (1611) <ExternalLink className="w-3 h-3" />
              </a>
              , and Christopher Marlowe's tragedies.
            </p>
            <p>
              Linguists distinguish three earlier stages of the English language (see{' '}
              <a
                href="https://www.britannica.com/topic/English-language/Middle-English"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
              >
                Britannica — Middle English <ExternalLink className="w-3 h-3" />
              </a>
              ):
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Old English / Anglo-Saxon</strong> (before ~1100 CE) — nearly unreadable
                to modern eyes: <em>Hwæt! We Gardena in geardagum…</em> (Beowulf)
              </li>
              <li>
                <strong>Middle English</strong> (~1100–1470 CE) — Chaucer's Canterbury Tales,
                still challenging: <em>Whan that Aprill with his shoures soote…</em>
              </li>
              <li>
                <strong>Early Modern English</strong> (~1470–1700 CE) — Shakespeare,
                KJV Bible, immediately recognisable to modern readers
              </li>
            </ul>
            <p>
              This translator targets <strong>Early Modern English</strong> — the register most learners,
              writers, and role-players actually want when they ask for "medieval" or "Shakespearean" style.
            </p>
          </div>
        </section>

        {/* ── Pronoun System ────────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">The Thou / Thee / Thy Pronoun System</h2>
          <p className="text-sm text-muted-foreground mb-4">
            The biggest change between modern and Early Modern English is the second-person singular
            pronoun. Modern English collapsed everything into "you" — Early Modern kept a full
            inflected set (see{' '}
            <a
              href="https://en.wikipedia.org/wiki/Thou"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              Wikipedia — Thou <ExternalLink className="w-3 h-3" />
            </a>
            ):
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Modern English</th>
                  <th className="text-left px-4 py-3 font-semibold">Early Modern</th>
                  <th className="text-left px-4 py-3 font-semibold">Example</th>
                </tr>
              </thead>
              <tbody>
                {PRONOUN_TABLE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-4 py-2.5">{row.modern}</td>
                    <td className="px-4 py-2.5 font-medium italic text-primary">{row.medieval}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Verb Conjugation ──────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Verb Conjugation Rules</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Early Modern English used distinct verb endings for different persons. The two most
            important for giving text a "Shakespearean" feel are{' '}
            <strong>-est</strong> (2nd person singular) and <strong>-eth</strong> (3rd person
            singular). See the{' '}
            <a
              href="https://www.shakespeare.org.uk/explore-shakespeare/shakespedia/shakespeares-language/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              Shakespeare's Globe language guide <ExternalLink className="w-3 h-3" />
            </a>{' '}
            for more context.
          </p>
          <div className="overflow-x-auto rounded-xl border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Rule</th>
                  <th className="text-left px-4 py-3 font-semibold">Modern</th>
                  <th className="text-left px-4 py-3 font-semibold">Elizabethan</th>
                </tr>
              </thead>
              <tbody>
                {VERB_TABLE.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                    <td className="px-4 py-2.5 text-muted-foreground">{row.rule}</td>
                    <td className="px-4 py-2.5">{row.modern}</td>
                    <td className="px-4 py-2.5 font-medium italic text-primary">{row.medieval}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Vocabulary ────────────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Common Vocabulary Substitutions</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Beyond pronouns and verb endings, Early Modern English had a rich vocabulary of its own.
            The{' '}
            <a
              href="https://www.merriam-webster.com/words-at-play/top-shakespearean-words"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              Merriam-Webster Shakespeare vocabulary list <ExternalLink className="w-3 h-3" />
            </a>{' '}
            and the{' '}
            <a
              href="https://www.bl.uk/collection-guides/shakespeare"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-0.5 font-medium"
            >
              British Library Shakespeare collection <ExternalLink className="w-3 h-3" />
            </a>{' '}
            are excellent further reading. A selection of the 400+ substitutions this tool applies:
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {VOCAB_TABLE.map((row, i) => (
              <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/30 text-sm">
                <span className="text-muted-foreground">{row.modern}</span>
                <span className="text-muted-foreground">→</span>
                <span className="font-medium italic text-primary">{row.medieval}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── External Resources ────────────────────────────────────────── */}
        <section className="mb-10 p-6 rounded-2xl border bg-muted/10">
          <h2 className="text-lg font-bold mb-4">Further Reading & Authoritative Sources</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.bl.uk/shakespeare/articles/shakespeares-language"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                British Library — Shakespeare's Language <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-muted-foreground"> — scholarly overview of Early Modern English grammar and vocabulary</span>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Early_Modern_English"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Wikipedia — Early Modern English <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-muted-foreground"> — phonology, morphology, and historical context</span>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Middle_English"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Wikipedia — Middle English <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-muted-foreground"> — Chaucer's era, distinct from Early Modern</span>
            </li>
            <li>
              <a
                href="https://www.poetryfoundation.org/poets/william-shakespeare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Poetry Foundation — William Shakespeare <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-muted-foreground"> — primary texts in Early Modern English</span>
            </li>
            <li>
              <a
                href="https://www.gutenberg.org/ebooks/author/65"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Project Gutenberg — Shakespeare's Complete Works <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-muted-foreground"> — free primary source texts</span>
            </li>
            <li>
              <a
                href="https://www.oed.com/information/using-the-oed/glossary-grammatical-terms/archaic/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Oxford English Dictionary — Archaic Terms Glossary <ExternalLink className="w-3 h-3" />
              </a>
              <span className="text-muted-foreground"> — definitions and dating of archaic English words</span>
            </li>
          </ul>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────────────── */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-5">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border p-5">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
