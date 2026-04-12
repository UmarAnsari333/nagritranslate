import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { GenZTranslatorTool } from '@/components/tools/gen-z-translator-tool'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Gen Z Translator — English to Gen Z Slang & Decoder | Free',
  description:
    'Free Gen Z translator. Convert plain English to Gen Z talk — bussin, no cap, slay, rizz, bet, periodt and more. Decode Gen Z slang to plain English. 3 vibe levels. No sign-up.',
  keywords: [
    'gen z translator',
    'gen z talk',
    'gen z slang translator',
    'english to gen z',
    'gen z language translator',
    'gen z slang decoder',
    'gen z words',
    'gen z speak',
    'translate to gen z',
    'gen z slang meaning',
    'what does no cap mean',
    'what does bussin mean',
    'what does slay mean',
    'what does rizz mean',
    'what does bet mean',
    'gen z dictionary',
    'gen z language',
    'decode gen z slang',
    'gen z phrases',
    'gen z lingo',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/tools/gen-z-translator',
  },
  openGraph: {
    title: 'Gen Z Translator — English to Gen Z Slang & Decoder',
    description:
      'Convert English to Gen Z talk (bussin, slay, no cap, rizz, bet) or decode Gen Z slang back to plain English. 3 vibe levels. Free, instant.',
    url: 'https://nagritranslate.com/tools/gen-z-translator',
    type: 'website',
  },
}

const SLANG_GLOSSARY = [
  { term: 'No cap',        meaning: 'No lie / seriously / I\'m not joking',          example: '"This pizza is bussin, no cap."' },
  { term: 'Bussin',        meaning: 'Amazing, delicious, excellent',                  example: '"That outfit is bussin fr."' },
  { term: 'Slay',          meaning: 'To do something exceptionally well',             example: '"She absolutely slayed that presentation."' },
  { term: 'Rizz',          meaning: 'Natural charm and charisma, especially romantic',example: '"He\'s got the rizz, no cap."' },
  { term: 'Bet',           meaning: 'Okay / agreed / I\'ll do it',                   example: '"Meet at 7?" "Bet."' },
  { term: 'Fr / Fr fr',    meaning: 'For real — used to emphasise sincerity',         example: '"I\'m cooked fr fr."' },
  { term: 'Mid',           meaning: 'Mediocre / average / disappointing',             example: '"That movie was so mid."' },
  { term: 'W / L',         meaning: 'Win (W) or Loss (L) — good or bad outcome',     example: '"That\'s a W for sure."' },
  { term: 'NPC',           meaning: 'Someone acting like a background game character',example: '"Don\'t be an NPC bestie."' },
  { term: 'Based',         meaning: 'Confident, having a respectable opinion',        example: '"That take is so based."' },
  { term: 'Lowkey',        meaning: 'Somewhat / secretly / a little bit',             example: '"Lowkey obsessed with this song."' },
  { term: 'Highkey',       meaning: 'Very much / openly / a lot',                    example: '"Highkey love this era."' },
  { term: 'Sus',           meaning: 'Suspicious / sketchy',                           example: '"That\'s kinda sus ngl."' },
  { term: 'Periodt',       meaning: 'Period — final word, emphasis, end of discussion',example: '"She\'s the best, periodt."' },
  { term: 'Delulu',        meaning: 'Delusional in a fun or self-aware way',          example: '"I\'m being delulu about this crush."' },
  { term: 'Ate',           meaning: 'Did something perfectly, nailed it',             example: '"She ate that performance."' },
  { term: 'Understood the assignment', meaning: 'Completed a task perfectly',        example: '"The team understood the assignment."' },
  { term: 'It\'s giving', meaning: 'It resembles / it has the energy of',            example: '"That outfit is giving royalty."' },
  { term: 'Cheugy',        meaning: 'Outdated, try-hard, no longer trendy',           example: '"Minions memes are so cheugy."' },
  { term: 'Touch grass',   meaning: 'Go outside and disconnect from the internet',    example: '"You need to touch grass bestie."' },
  { term: 'The ick',       meaning: 'Sudden feeling of repulsion toward someone',     example: '"He chewed loudly and I got the ick."' },
  { term: 'Main character',meaning: 'Acting like you\'re the hero of the story',     example: '"She\'s giving main character energy."' },
  { term: 'Cooked',        meaning: 'Exhausted, in trouble, or done for',             example: '"I didn\'t study — I\'m cooked."' },
  { term: 'Rent free',     meaning: 'Something/someone living in your mind constantly',example: '"That song is living rent free."' },
]

const FAQ = [
  {
    q: 'What is Gen Z talk / Gen Z slang?',
    a: <>Gen Z talk refers to the vocabulary, expressions and communication style used predominantly by <a href="https://en.wikipedia.org/wiki/Generation_Z" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">Generation Z</a> (people born roughly 1997–2012). It blends internet culture, <a href="https://en.wikipedia.org/wiki/African-American_Vernacular_English" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">AAVE (African American Vernacular English)</a>, gaming terminology, and ironic humour into a distinct dialect that spreads through platforms like TikTok, Twitter/X, Instagram and Discord. Key characteristics include heavy use of acronyms (fr, ngl, idk), dramatic understatement (lowkey), and context-dependent single-word sentences (bet, slay, periodt).</>,
  },
  {
    q: 'What does "no cap" mean in Gen Z?',
    a: <>"No cap" means "no lie" or "I&apos;m being serious." It comes from the phrase "don&apos;t cap" meaning "don&apos;t lie." Using "cap" alone means something is a lie — for example, "that&apos;s cap" means "that&apos;s not true." Oxford Dictionaries tracks <a href="https://www.oxfordlearnersdictionaries.com/definition/english/no-cap" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">no cap</a> as an established informal term, reflecting how widely it has entered mainstream English.</>,
  },
  {
    q: 'What does "bussin" mean?',
    a: <>"Bussin" means something is extremely good, especially food. It derives from <a href="https://en.wikipedia.org/wiki/African-American_Vernacular_English" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">AAVE</a> and was popularised on TikTok around 2020–2021. Originally used mainly for food ("this is bussin"), it expanded to describe anything excellent. "Bussin bussin" is an intensified form meaning incredibly good.</>,
  },
  {
    q: 'What does "rizz" mean?',
    a: <>"Rizz" means natural charm or charisma, especially the ability to attract romantic interest effortlessly. It was popularised by streamer Kai Cenat and went mainstream in 2022–2023. Oxford University Press named <a href="https://en.wikipedia.org/wiki/Oxford_Word_of_the_Year" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">rizz its 2023 Word of the Year</a>. "W rizz" means great charisma; "L rizz" means no charisma at all. The verb form is "to rizz someone up" — to charm them.</>,
  },
  {
    q: 'What is the difference between Lowkey, Highkey and No Cap vibe levels?',
    a: 'These are the three translation intensity levels in this tool. Lowkey replaces key content words (amazing → bussin, cool → fire) while keeping the sentence mostly readable. Highkey replaces more words including common verbs and adjectives for authentic Gen Z speak. No Cap goes full chaos — replaces almost everything possible and injects fillers like "fr", "bestie" and "no cap" at the end of sentences.',
  },
  {
    q: 'Why does Gen Z talk the way they do?',
    a: <>Gen Z grew up with the internet as a primary social space. Their language is shaped by meme culture (where irony and absurdity are prized), gaming (terms like NPC), <a href="https://en.wikipedia.org/wiki/African-American_Vernacular_English" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">AAVE</a> which has heavily influenced internet vernacular, and the speed of TikTok where new slang spreads globally in days. According to <a href="https://www.pewresearch.org/internet/2022/08/10/teens-social-media-and-technology-2022/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">Pew Research Center</a>, 67 % of US teens use TikTok — making it the single biggest engine of Gen Z language spread today.</>,
  },
]

export default function GenZTranslatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Text Tools', path: '/tools' },
          { name: 'Gen Z Translator', path: '/tools/gen-z-translator' },
        ]}
      />
      <WebPageSchema
        path="/tools/gen-z-translator"
        name="Gen Z Translator — English to Gen Z Slang & Decoder"
        description="Convert plain English to Gen Z talk or decode Gen Z slang. Covers bussin, no cap, slay, rizz, bet, mid and 50+ more terms."
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
          <span className="text-foreground font-medium">Gen Z Translator</span>
        </nav>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Gen Z Translator</h1>
          <p className="text-muted-foreground text-lg">
            Convert plain English to Gen Z talk — bussin, no cap, slay, rizz, bet, periodt and
            more. Or decode Gen Z slang back to English. Three vibe levels. Free, instant.
          </p>
        </div>

        {/* Tool */}
        <GenZTranslatorTool />

        {/* Full slang glossary */}
        <section className="mt-14 mb-10">
          <h2 className="text-2xl font-bold mb-4">Gen Z Slang Dictionary — 24 Essential Terms</h2>
          <div className="space-y-3">
            {SLANG_GLOSSARY.map((item) => (
              <div key={item.term} className="p-4 rounded-xl border bg-muted/5 flex gap-4">
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-bold text-primary">{item.term}</span>
                    <span className="text-sm text-foreground">— {item.meaning}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 italic">{item.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What is Gen Z talk */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">What Is Gen Z Talk?</h2>
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
            <p>
              Gen Z talk — also called <strong className="text-foreground">Gen Z slang</strong>,{' '}
              <strong className="text-foreground">Gen Z speak</strong>, or just{' '}
              <strong className="text-foreground">Gen Z language</strong> — is the informal vocabulary
              and communication style used by{' '}
              <a href="https://en.wikipedia.org/wiki/Generation_Z" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">Generation Z</a>{' '}
              (born roughly 1997–2012). It spreads primarily through{' '}
              <strong className="text-foreground">TikTok, Instagram, Discord and Twitter/X</strong>,
              making it one of the fastest-evolving dialects in history.
            </p>
            <p>
              Unlike traditional slang, Gen Z talk is heavily shaped by{' '}
              <a href="https://en.wikipedia.org/wiki/African-American_Vernacular_English" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">AAVE (African American Vernacular English)</a>,
              internet meme culture, and gaming terminology. Words like{' '}
              <em>bussin</em>, <em>slay</em>, <em>lowkey</em> and <em>bet</em> all have roots in
              AAVE that were adopted into mainstream internet culture. This borrowing has sparked
              important conversations about credit and cultural exchange — a topic covered in depth by{' '}
              <a href="https://www.pewresearch.org/short-reads/2023/06/14/gen-z-boomer-or-both-the-generation-gap-and-how-young-and-old-americans-see-one-another/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">Pew Research Center</a>.
            </p>
            <p>
              New Gen Z terms can go from niche internet joke to global usage in a matter of days —
              <em>rizz</em> and <em>delulu</em> both exploded to mainstream recognition in 2023
              almost overnight, a phenomenon studied by{' '}
              <a href="https://en.wikipedia.org/wiki/Oxford_Word_of_the_Year" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">Oxford Dictionaries</a>{' '}
              (which named <em>rizz</em> its 2023 Word of the Year). Understanding Gen Z talk is
              increasingly important for brands, parents, teachers, and anyone communicating with
              younger audiences.
            </p>
          </div>
        </section>

        {/* Generation Years */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-2">All Generation Years — Who Is Gen Z?</h2>
          <p className="text-sm text-muted-foreground mb-5">
            Generations are defined by birth year ranges. Here is how every living generation lines up — and which one speaks Gen Z slang.
          </p>
          <div className="overflow-x-auto rounded-2xl border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/10">
                  <th className="text-left px-4 py-3 font-semibold">Generation</th>
                  <th className="text-left px-4 py-3 font-semibold">Birth Years</th>
                  <th className="text-left px-4 py-3 font-semibold">Ages in 2025</th>
                  <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Key trait</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  { name: 'The Silent Generation', years: '1928–1945', ages: '80–97', trait: 'Pre-TV era, WWII / post-war cohort', wiki: 'https://en.wikipedia.org/wiki/Silent_Generation', highlight: false },
                  { name: 'Baby Boomers', years: '1946–1964', ages: '61–79', trait: 'Post-war boom, TV generation, Woodstock', wiki: 'https://en.wikipedia.org/wiki/Baby_boomers', highlight: false },
                  { name: 'Generation X', years: '1965–1980', ages: '45–60', trait: 'Latchkey kids, MTV, early internet pioneers', wiki: 'https://en.wikipedia.org/wiki/Generation_X', highlight: false },
                  { name: 'Millennials (Gen Y)', years: '1981–1996', ages: '29–44', trait: 'Digital natives, social media, student debt', wiki: 'https://en.wikipedia.org/wiki/Millennials', highlight: false },
                  { name: 'Generation Z', years: '1997–2012', ages: '13–28', trait: '📱 TikTok, bussin, rizz, no cap — this tool\'s home base', wiki: 'https://en.wikipedia.org/wiki/Generation_Z', highlight: true },
                  { name: 'Generation Alpha', years: '2013–2025', ages: '0–12', trait: 'iPad kids, born into AI, skibidi toilet era', wiki: 'https://en.wikipedia.org/wiki/Generation_Alpha', highlight: false },
                ].map((gen) => (
                  <tr key={gen.name} className={gen.highlight ? 'bg-primary/5 font-medium' : 'hover:bg-muted/5'}>
                    <td className="px-4 py-3">
                      <a href={gen.wiki} target="_blank" rel="noopener noreferrer"
                        className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity">
                        {gen.name}
                      </a>
                      {gen.highlight && <span className="ml-2 text-[10px] font-bold bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full uppercase tracking-wide">You are here</span>}
                    </td>
                    <td className="px-4 py-3 tabular-nums text-muted-foreground">{gen.years}</td>
                    <td className="px-4 py-3 tabular-nums text-muted-foreground">{gen.ages}</td>
                    <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{gen.trait}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            * Exact boundary years vary by source. The ranges above follow{' '}
            <a href="https://www.pewresearch.org/short-reads/2019/01/17/where-millennials-end-and-generation-z-begins/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">Pew Research Center</a>{' '}
            and{' '}
            <a href="https://en.wikipedia.org/wiki/Generation" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:opacity-80">Wikipedia</a> definitions.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {FAQ.map((item, i) => (
              <div key={i} className="rounded-xl border p-5">
                <h3 className="font-semibold mb-2">{item.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:opacity-80">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related tools */}
        <section className="mb-10 grid sm:grid-cols-2 gap-4">
          <Link href="/phrases/gen-z-slang"
            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border bg-gradient-to-br from-violet-500/5 to-purple-500/10 border-violet-500/20 hover:shadow-md transition-all">
            <div>
              <p className="font-bold text-sm mb-1">📱 Gen Z & Internet Slang Guide</p>
              <p className="text-xs text-muted-foreground">Full glossary — no cap, rizz, bussin decoded</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </Link>
          <Link href="/tools/gibberish-translator"
            className="group flex items-center justify-between gap-4 p-5 rounded-2xl border bg-gradient-to-br from-pink-500/5 to-rose-500/10 border-pink-500/20 hover:shadow-md transition-all">
            <div>
              <p className="font-bold text-sm mb-1">🐷 Gibberish Translator</p>
              <p className="text-xs text-muted-foreground">Pig Latin, Ubbi Dubbi & more secret languages</p>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  )
}
