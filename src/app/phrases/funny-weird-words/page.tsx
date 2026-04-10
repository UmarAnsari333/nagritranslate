import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Funny & Weird English Words | Nagri Translate',
  description:
    'Discover the funniest and weirdest words in the English language. From snollygoster to bumfuzzle — real dictionary words that are delightfully bizarre.',
  alternates: {
    canonical: 'https://nagritranslate.com/phrases/funny-weird-words',
  },
}

interface WeirdWord {
  word: string
  pronunciation: string
  partOfSpeech: string
  meaning: string
  example: string
  category: string
  funFact?: string
}

const WORDS: WeirdWord[] = [
  // Sounds Funny
  { word: 'Bumfuzzle', pronunciation: 'BUM-fuz-ul', partOfSpeech: 'verb', meaning: 'To confuse or perplex someone completely', example: 'The instruction manual bumfuzzled me so much I gave up.', category: 'Sounds Funny' },
  { word: 'Lollygag', pronunciation: 'LOL-ee-gag', partOfSpeech: 'verb', meaning: 'To dawdle or waste time aimlessly', example: 'Stop lollygagging and help me carry these boxes!', category: 'Sounds Funny' },
  { word: 'Kerfuffle', pronunciation: 'kur-FUF-ul', partOfSpeech: 'noun', meaning: 'A commotion or fuss caused by a disagreement', example: 'There was a real kerfuffle at the bus stop this morning.', category: 'Sounds Funny' },
  { word: 'Flibbertigibbet', pronunciation: 'FLIB-er-tee-jib-it', partOfSpeech: 'noun', meaning: 'A frivolous, flighty, or excessively talkative person', example: 'She was a total flibbertigibbet at the party.', category: 'Sounds Funny' },
  { word: 'Widdershins', pronunciation: 'WID-er-shinz', partOfSpeech: 'adverb', meaning: 'In a direction contrary to the sun\'s course; counter-clockwise', example: 'She walked widdershins around the ancient stone circle.', category: 'Sounds Funny' },
  { word: 'Snollygoster', pronunciation: 'SNOL-ee-gos-ter', partOfSpeech: 'noun', meaning: 'A shrewd, unprincipled person, especially a politician', example: 'That snollygoster promised lower taxes but did the opposite.', category: 'Sounds Funny', funFact: 'Used by President Harry Truman in 1952' },
  { word: 'Nincompoop', pronunciation: 'NIN-kum-poop', partOfSpeech: 'noun', meaning: 'A foolish or stupid person', example: 'Don\'t be a nincompoop — of course the stove is hot.', category: 'Sounds Funny' },
  { word: 'Whippersnapper', pronunciation: 'WIP-er-snap-er', partOfSpeech: 'noun', meaning: 'A young person who is presumptuous or overconfident', example: 'Some whippersnapper told me I was parking incorrectly.', category: 'Sounds Funny' },
  { word: 'Gobbledygook', pronunciation: 'GOB-ul-dee-gook', partOfSpeech: 'noun', meaning: 'Language that is meaningless or hard to understand; bureaucratic jargon', example: 'The legal contract was full of gobbledygook.', category: 'Sounds Funny' },

  // Surprisingly Real
  { word: 'Cattywampus', pronunciation: 'KAT-ee-wom-pus', partOfSpeech: 'adjective', meaning: 'Askew, not aligned or in order; diagonally placed', example: 'The picture frame was hung cattywampus.', category: 'Surprisingly Real' },
  { word: 'Discombobulate', pronunciation: 'dis-kom-BOB-yoo-layt', partOfSpeech: 'verb', meaning: 'To confuse or disconcert someone', example: 'The sudden noise completely discombobulated the speaker.', category: 'Surprisingly Real' },
  { word: 'Foofaraw', pronunciation: 'FOO-fuh-raw', partOfSpeech: 'noun', meaning: 'A great fuss or disturbance about something trivial', example: 'There was a huge foofaraw over who brought the wrong cake.', category: 'Surprisingly Real' },
  { word: 'Skedaddle', pronunciation: 'skuh-DAD-ul', partOfSpeech: 'verb', meaning: 'To run away hurriedly; to depart quickly', example: 'The cat skedaddled when the vacuum cleaner came on.', category: 'Surprisingly Real' },
  { word: 'Hullabaloo', pronunciation: 'HUL-uh-buh-loo', partOfSpeech: 'noun', meaning: 'A commotion; a confused noise or excited fuss', example: 'What\'s all this hullabaloo about?', category: 'Surprisingly Real' },
  { word: 'Brouhaha', pronunciation: 'BROO-hah-hah', partOfSpeech: 'noun', meaning: 'A noisy and overexcited reaction or response', example: 'The announcement caused quite a brouhaha online.', category: 'Surprisingly Real' },
  { word: 'Bamboozle', pronunciation: 'bam-BOO-zul', partOfSpeech: 'verb', meaning: 'To trick or deceive someone cleverly', example: 'He bamboozled them into thinking he was a doctor.', category: 'Surprisingly Real' },
  { word: 'Bumbershoot', pronunciation: 'BUM-ber-shoot', partOfSpeech: 'noun', meaning: 'An umbrella', example: 'Don\'t forget your bumbershoot — it looks like rain.', category: 'Surprisingly Real' },

  // Wonderfully Specific
  { word: 'Petrichor', pronunciation: 'PET-rih-kor', partOfSpeech: 'noun', meaning: 'The pleasant, earthy smell after rain falls on dry ground', example: 'The petrichor after the summer storm was intoxicating.', category: 'Wonderfully Specific', funFact: 'Coined by scientists in 1964 from Greek petra (stone) + ichor (the fluid in Greek gods\' veins)' },
  { word: 'Aglet', pronunciation: 'AG-lit', partOfSpeech: 'noun', meaning: 'The plastic or metal tip at the end of a shoelace', example: 'My aglet fell off and now the lace keeps fraying.', category: 'Wonderfully Specific' },
  { word: 'Philtrum', pronunciation: 'FIL-trum', partOfSpeech: 'noun', meaning: 'The vertical groove between the nose and upper lip', example: 'The philtrum is one of the most distinctive parts of the human face.', category: 'Wonderfully Specific' },
  { word: 'Griffonage', pronunciation: 'GRIF-uh-nahj', partOfSpeech: 'noun', meaning: 'Careless or illegible handwriting', example: 'The doctor\'s prescription was pure griffonage.', category: 'Wonderfully Specific' },
  { word: 'Borborygmus', pronunciation: 'bor-buh-RIG-mus', partOfSpeech: 'noun', meaning: 'The rumbling sound made by gas moving through the intestines; a stomach growl', example: 'A loud borborygmus interrupted the meeting.', category: 'Wonderfully Specific' },
  { word: 'Snorkel', pronunciation: 'SNOR-kul', partOfSpeech: 'noun', meaning: 'A tube allowing a swimmer to breathe while face down in water', example: 'She spotted a turtle through her snorkel mask.', category: 'Wonderfully Specific' },
  { word: 'Defenestration', pronunciation: 'dee-fen-uh-STRAY-shun', partOfSpeech: 'noun', meaning: 'The act of throwing someone out of a window', example: 'The defenestration of Prague in 1618 sparked the Thirty Years\' War.', category: 'Wonderfully Specific', funFact: 'There\'s an actual word for this because it happened famously enough to need one' },
  { word: 'Callipygian', pronunciation: 'kal-ih-PIJ-ee-un', partOfSpeech: 'adjective', meaning: 'Having well-shaped buttocks', example: 'Ancient Greek statues celebrated the callipygian ideal.', category: 'Wonderfully Specific' },

  // Ridiculous but Useful
  { word: 'Gardyloo', pronunciation: 'gar-dee-LOO', partOfSpeech: 'exclamation', meaning: 'A warning cry formerly given before throwing slops from a window into the street', example: 'Gardyloo! he cried, tipping the bucket.', category: 'Ridiculous but Useful', funFact: 'Used in medieval Edinburgh before indoor plumbing' },
  { word: 'Collywobbles', pronunciation: 'KOL-ee-wob-ulz', partOfSpeech: 'noun', meaning: 'A stomach ache or uneasy feeling caused by anxiety', example: 'I had the collywobbles before my big speech.', category: 'Ridiculous but Useful' },
  { word: 'Woebegone', pronunciation: 'WOH-beh-gawn', partOfSpeech: 'adjective', meaning: 'Appearing sad or miserable; afflicted with woe', example: 'He had a woebegone expression after losing the match.', category: 'Ridiculous but Useful' },
  { word: 'Snafu', pronunciation: 'snah-FOO', partOfSpeech: 'noun', meaning: 'A chaotic or confused situation; a blunder', example: 'There was a scheduling snafu and two meetings were booked at once.', category: 'Ridiculous but Useful', funFact: 'Military acronym: Situation Normal, All F***ed Up (WWII origin)' },
  { word: 'Flummox', pronunciation: 'FLUM-uks', partOfSpeech: 'verb', meaning: 'To perplex or bewilder completely', example: 'The riddle completely flummoxed the detective.', category: 'Ridiculous but Useful' },
  { word: 'Rumpus', pronunciation: 'RUM-pus', partOfSpeech: 'noun', meaning: 'A noisy disturbance or uproar', example: 'The kids made such a rumpus that the neighbors complained.', category: 'Ridiculous but Useful' },

  // Ancient Gems
  { word: 'Fudgel', pronunciation: 'FUJ-ul', partOfSpeech: 'verb', meaning: 'To pretend to work without actually doing anything', example: 'He was fudgeling all afternoon while the boss was out.', category: 'Ancient Gems', funFact: '18th century word that\'s more relevant than ever in the remote-work era' },
  { word: 'Snoutfair', pronunciation: 'SNOWT-fair', partOfSpeech: 'adjective', meaning: 'Handsome; having a fair countenance', example: 'He was quite snoutfair in his youth.', category: 'Ancient Gems', funFact: '16th century English' },
  { word: 'Grumpish', pronunciation: 'GRUM-pish', partOfSpeech: 'adjective', meaning: 'Surly or grumpy in manner', example: 'He was terribly grumpish before his morning coffee.', category: 'Ancient Gems' },
  { word: 'Quoddamodotative', pronunciation: 'kwod-uh-MOD-oh-tay-tiv', partOfSpeech: 'adjective', meaning: 'Of what kind or manner', example: 'A quoddamodotative inquiry into the nature of things.', category: 'Ancient Gems', funFact: 'Possibly the most unnecessary word ever coined' },
]

const CATEGORIES = ['Sounds Funny', 'Surprisingly Real', 'Wonderfully Specific', 'Ridiculous but Useful', 'Ancient Gems']

const CATEGORY_ICONS: Record<string, string> = {
  'Sounds Funny': '😂',
  'Surprisingly Real': '😲',
  'Wonderfully Specific': '🎯',
  'Ridiculous but Useful': '🤷',
  'Ancient Gems': '⚗️',
}

export default function FunnyWeirdWordsPage() {
  const grouped = CATEGORIES.reduce<Record<string, WeirdWord[]>>((acc, cat) => {
    acc[cat] = WORDS.filter(w => w.category === cat)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Phrases', path: '/phrases' },
        { name: 'Funny & Weird English Words', path: '/phrases/funny-weird-words' },
      ]} />
      <WebPageSchema
        path="/phrases/funny-weird-words"
        name="Funny & Weird English Words | Nagri Translate"
        description="Discover the funniest and weirdest real words in the English language."
        type="Article"
      />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/phrases" className="hover:text-foreground transition-colors">Phrases</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Funny & Weird Words</span>
        </nav>

        {/* Hero */}
        <div className="mb-10 text-center">
          <div className="text-5xl mb-4">🤪</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Funny & Weird English Words</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real words from real dictionaries that sound absolutely made up. English is wonderfully, gloriously weird.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span className="bg-muted/30 px-3 py-1 rounded-full">{WORDS.length}+ words</span>
            <span className="bg-muted/30 px-3 py-1 rounded-full">{CATEGORIES.length} categories</span>
            <span className="bg-muted/30 px-3 py-1 rounded-full">All real dictionary words</span>
          </div>
        </div>

        {/* Word of the Moment highlight */}
        <div className="mb-10 p-6 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20">
          <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-2">Word of the moment</p>
          <p className="text-2xl font-bold mb-1">Bumfuzzle</p>
          <p className="text-muted-foreground mb-2"><em>verb</em> — To confuse or perplex someone completely</p>
          <p className="text-sm italic">"The instruction manual bumfuzzled me so much I gave up."</p>
        </div>

        {/* Categories */}
        {CATEGORIES.map(cat => (
          <section key={cat} className="mb-12">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b flex items-center gap-2">
              <span className="text-2xl">{CATEGORY_ICONS[cat]}</span>
              {cat}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {grouped[cat].map(w => (
                <div key={w.word} className="p-5 bg-muted/10 rounded-2xl border border-muted/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold">{w.word}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full shrink-0">{w.partOfSpeech}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 font-mono">/{w.pronunciation}/</p>
                  <p className="text-sm mb-2">{w.meaning}</p>
                  <p className="text-xs italic text-muted-foreground mb-2">"{w.example}"</p>
                  {w.funFact && (
                    <p className="text-xs bg-amber-500/10 text-amber-700 dark:text-amber-400 px-3 py-1.5 rounded-lg">
                      💡 {w.funFact}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Fun facts section */}
        <section className="mb-12 p-6 bg-muted/10 rounded-2xl border">
          <h2 className="text-xl font-bold mb-4">Why Is English So Weird?</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-background rounded-xl border">
              <p className="font-semibold mb-2">🌍 It borrowed from everyone</p>
              <p className="text-muted-foreground">English absorbed words from Latin, French, Norse, Arabic, Hindi, and hundreds of other languages — creating a gloriously chaotic vocabulary.</p>
            </div>
            <div className="p-4 bg-background rounded-xl border">
              <p className="font-semibold mb-2">📚 It never throws words away</p>
              <p className="text-muted-foreground">Most languages drop archaic words. English keeps them. Words from the 1400s sit comfortably next to brand new internet slang.</p>
            </div>
            <div className="p-4 bg-background rounded-xl border">
              <p className="font-semibold mb-2">🎭 It loves making new ones</p>
              <p className="text-muted-foreground">English speakers invent new words constantly — the Oxford English Dictionary adds thousands of new entries every year.</p>
            </div>
            <div className="p-4 bg-background rounded-xl border">
              <p className="font-semibold mb-2">🔢 It's absurdly large</p>
              <p className="text-muted-foreground">English has over 170,000 words in current use and 47,000 obsolete words — far more than most other languages.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Are these real words I can use?',
                a: 'Yes! Every word here is in legitimate dictionaries. Some are archaic and may get confused looks, but "kerfuffle", "discombobulate", "gobbledygook", and "snafu" are used in everyday conversation.',
              },
              {
                q: 'What\'s the weirdest-sounding real English word?',
                a: '"Quoddamodotative" is hard to beat — it means "of what kind or manner" and may be the least useful word ever to appear in print.',
              },
              {
                q: 'Where can I find more unusual English words?',
                a: 'The Oxford English Dictionary is the gold standard. "The Meaning of Liff" by Douglas Adams and John Lloyd is a comedic classic about words for concepts that lack names.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group p-5 bg-muted/10 rounded-xl border border-muted/30 cursor-pointer">
                <summary className="font-semibold text-sm list-none flex items-center justify-between">
                  {q}
                  <ChevronRight className="w-4 h-4 transition-transform group-open:rotate-90 shrink-0" />
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <div className="pt-6 border-t">
          <Link href="/phrases" className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to all phrase collections
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
