import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Cockney Rhyming Slang Dictionary | Nagri Translate',
  description:
    'Learn Cockney rhyming slang — the secret language of East London. Discover classics like dog and bone (phone) and plates of meat (feet), plus how to use them.',
  alternates: {
    canonical: 'https://nagritranslate.com/phrases/cockney-rhyming-slang',
  },
}

interface CockneyPhrase {
  phrase: string
  rhymesWithWord: string
  meaning: string
  shortened?: string
  example: string
  era?: string
  category: string
}

const PHRASES: CockneyPhrase[] = [
  // Body Parts
  { phrase: 'Plates of meat', rhymesWithWord: 'feet', meaning: 'Feet', shortened: 'plates', example: 'My plates are killing me after all that walking.', era: 'Victorian', category: 'Body & Health' },
  { phrase: 'Mince pies', rhymesWithWord: 'eyes', meaning: 'Eyes', shortened: 'minces', example: 'Can\'t believe my mince pies — he actually showed up.', era: 'Victorian', category: 'Body & Health' },
  { phrase: 'Loaf of bread', rhymesWithWord: 'head', meaning: 'Head (brain; intelligence)', shortened: 'loaf', example: 'Use your loaf, mate.', era: 'Victorian', category: 'Body & Health' },
  { phrase: 'North and south', rhymesWithWord: 'mouth', meaning: 'Mouth', shortened: 'north', example: 'Shut your north and listen.', era: 'Victorian', category: 'Body & Health' },
  { phrase: 'Boat race', rhymesWithWord: 'face', meaning: 'Face', shortened: 'boat', example: 'She\'s got a miserable look on her boat.', era: 'Victorian', category: 'Body & Health' },
  { phrase: 'Gregory Peck', rhymesWithWord: 'neck', meaning: 'Neck', shortened: 'gregory', example: 'He\'s got a tattoo on his gregory.', category: 'Body & Health' },
  { phrase: 'Hampstead Heath', rhymesWithWord: 'teeth', meaning: 'Teeth', shortened: 'hampsteads', example: 'Brush your hampsteads before bed.', era: 'Victorian', category: 'Body & Health' },
  { phrase: 'Plates and dishes', rhymesWithWord: 'Mrs (missus)', meaning: 'Wife', shortened: 'plates', example: 'I\'ll have to ask the plates.', category: 'Body & Health' },

  // Communication & Phones
  { phrase: 'Dog and bone', rhymesWithWord: 'phone', meaning: 'Phone (telephone)', shortened: 'dog', example: 'Get on the dog and bone and call him back.', era: 'Victorian', category: 'Communication' },
  { phrase: 'Plates of meat', rhymesWithWord: 'tweet', meaning: 'Tweet (modern usage)', example: 'Did you see her plates? Went viral.', category: 'Communication' },
  { phrase: 'Pen and ink', rhymesWithWord: 'stink', meaning: 'To smell bad; to stink', shortened: 'pen', example: 'This place proper pens and inks.', era: 'Victorian', category: 'Communication' },

  // Money
  { phrase: 'Bread and honey', rhymesWithWord: 'money', meaning: 'Money', shortened: 'bread', example: 'I\'m a bit short on bread this week.', era: 'Victorian', category: 'Money & Work' },
  { phrase: 'Bees and honey', rhymesWithWord: 'money', meaning: 'Money', shortened: 'bees', example: 'Lend us a bit of bees, will ya?', era: 'Victorian', category: 'Money & Work' },
  { phrase: 'Cock and hen', rhymesWithWord: 'ten (£10)', meaning: 'Ten pounds (£10)', shortened: 'cock', example: 'That\'ll cost ya a cock.', era: 'Victorian', category: 'Money & Work' },
  { phrase: 'Lady Godiva', rhymesWithWord: 'fiver (£5)', meaning: 'Five pounds (£5)', shortened: 'lady', example: 'Chuck me a lady and we\'re sorted.', era: 'Victorian', category: 'Money & Work' },
  { phrase: 'Ayrton Senna', rhymesWithWord: 'tenner (£10)', meaning: 'Ten pounds (£10)', shortened: 'ayrton', example: 'It\'s only an ayrton, don\'t be tight.', category: 'Money & Work' },
  { phrase: 'Pony', rhymesWithWord: '(rhyming tradition, not strict rhyme)', meaning: '£25', example: 'He owes me a pony from last month.', era: 'Victorian', category: 'Money & Work' },
  { phrase: 'Bag of sand', rhymesWithWord: 'grand (£1000)', meaning: 'One thousand pounds', shortened: 'bag', example: 'Cost me a full bag of sand to fix the car.', category: 'Money & Work' },

  // People
  { phrase: 'China plate', rhymesWithWord: 'mate', meaning: 'Friend; mate', shortened: 'china', example: 'Alright, my old china? Haven\'t seen you in ages.', era: 'Victorian', category: 'People & Relationships' },
  { phrase: 'Trouble and strife', rhymesWithWord: 'wife', meaning: 'Wife', shortened: 'trouble', example: 'I\'d better check with the trouble first.', era: 'Victorian', category: 'People & Relationships' },
  { phrase: 'Plates of meat', rhymesWithWord: 'beat (copper/police)', meaning: 'Police (on the beat)', example: 'Watch it — there\'s a plate around the corner.', category: 'People & Relationships' },
  { phrase: 'Merchant banker', rhymesWithWord: 'a rude word', meaning: 'An unpleasant person (impolite)', shortened: 'merchant', example: 'What a merchant that bloke is.', category: 'People & Relationships' },
  { phrase: 'April fool', rhymesWithWord: 'tool (fool)', meaning: 'A fool; someone stupid', example: 'Don\'t be a right April fool about it.', category: 'People & Relationships' },
  { phrase: 'Teapot lid', rhymesWithWord: 'kid/quid', meaning: 'A child, or £1', shortened: 'teapot', example: 'How are the teapot lids?', era: 'Victorian', category: 'People & Relationships' },

  // Places & Going Out
  { phrase: 'Frog and toad', rhymesWithWord: 'road', meaning: 'Road', shortened: 'frog', example: 'He\'s out on the frog somewhere.', era: 'Victorian', category: 'Places & Travel' },
  { phrase: 'Rub-a-dub-dub', rhymesWithWord: 'pub', meaning: 'Pub (public house)', shortened: 'rub-a-dub', example: 'Fancy a trip to the rub-a-dub?', era: 'Victorian', category: 'Places & Travel' },
  { phrase: 'Joanna', rhymesWithWord: 'piano', meaning: 'Piano', shortened: 'joanna', example: 'She plays a lovely joanna.', era: 'Victorian', category: 'Places & Travel' },
  { phrase: 'Plates of meat', rhymesWithWord: 'street', meaning: 'Street', example: 'Meet me down the plates.', category: 'Places & Travel' },
  { phrase: 'Apple and pears', rhymesWithWord: 'stairs', meaning: 'Stairs', shortened: 'apples', example: 'Get yourself up the apples to bed.', era: 'Victorian', category: 'Places & Travel' },
  { phrase: 'Artful Dodger', rhymesWithWord: 'lodger', meaning: 'Lodger (someone renting a room)', shortened: 'artful', example: 'My artful is late with the rent again.', era: 'Victorian', category: 'Places & Travel' },

  // Food & Drink
  { phrase: 'Pig\'s ear', rhymesWithWord: 'beer', meaning: 'Beer', shortened: 'pig\'s', example: 'Get us a couple of pig\'s ears in, mate.', era: 'Victorian', category: 'Food & Drink' },
  { phrase: 'Plates of meat', rhymesWithWord: 'eat', meaning: 'Eat', example: 'I haven\'t had a plate all day.', category: 'Food & Drink' },
  { phrase: 'Dustbin lid', rhymesWithWord: 'lid (kid / quid)', meaning: 'A child', shortened: 'dustbin', example: 'The dustbin lids are running wild.', category: 'Food & Drink' },
  { phrase: 'Rosy Lee', rhymesWithWord: 'tea', meaning: 'Tea (the drink)', shortened: 'rosy', example: 'Fancy a nice cup of rosy?', era: 'Victorian', category: 'Food & Drink' },
  { phrase: 'Adam and Eve', rhymesWithWord: 'believe', meaning: 'Believe', shortened: 'adam', example: 'Would you adam and eve it? She only went and won!', era: 'Victorian', category: 'Food & Drink' },

  // Crime & Police
  { phrase: 'Bill and Ben', rhymesWithWord: 'ten (years in prison)', meaning: 'Ten years prison sentence', example: 'He got Bill and Ben for that job.', category: 'Law & Order' },
  { phrase: 'Porridge', rhymesWithWord: '(slang tradition)', meaning: 'Prison (not strict rhyme, but traditional Cockney)', example: 'He\'s doing porridge up north.', era: 'Victorian', category: 'Law & Order' },
  { phrase: 'Sweeney Todd', rhymesWithWord: 'Flying Squad (police)', meaning: 'The Flying Squad / police', shortened: 'sweeney', example: 'The Sweeney raided the place last night.', era: 'Victorian', category: 'Law & Order' },

  // Emotions & States
  { phrase: 'Brown bread', rhymesWithWord: 'dead', meaning: 'Dead', shortened: 'brown', example: 'That phone\'s brown bread — totally smashed.', era: 'Victorian', category: 'States & Feelings' },
  { phrase: 'Cream crackered', rhymesWithWord: 'knackered', meaning: 'Exhausted; tired', shortened: 'cream', example: 'I\'m absolutely cream crackered after today.', category: 'States & Feelings' },
  { phrase: 'Brahms and Liszt', rhymesWithWord: 'p***ed (drunk)', meaning: 'Drunk', shortened: 'brahms', example: 'He was absolutely brahms by nine o\'clock.', era: 'Victorian', category: 'States & Feelings' },
  { phrase: 'Bangers and mash', rhymesWithWord: 'cash', meaning: 'Cash (money)', shortened: 'bangers', example: 'Have you got any bangers on you?', category: 'States & Feelings' },
]

const CATEGORIES = ['Body & Health', 'Communication', 'Money & Work', 'People & Relationships', 'Places & Travel', 'Food & Drink', 'Law & Order', 'States & Feelings']

export default function CockneyRhymingSlangPage() {
  const grouped = CATEGORIES.reduce<Record<string, CockneyPhrase[]>>((acc, cat) => {
    acc[cat] = PHRASES.filter(p => p.category === cat)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Phrases', path: '/phrases' },
        { name: 'Cockney Rhyming Slang', path: '/phrases/cockney-rhyming-slang' },
      ]} />
      <WebPageSchema
        path="/phrases/cockney-rhyming-slang"
        name="Cockney Rhyming Slang Dictionary | Nagri Translate"
        description="Learn Cockney rhyming slang — the secret language of East London. Dog and bone, plates of meat, china plate, and more."
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
          <span className="text-foreground font-medium">Cockney Rhyming Slang</span>
        </nav>

        {/* Hero */}
        <div className="mb-10 text-center">
          <div className="text-5xl mb-4">🎭</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Cockney Rhyming Slang</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The secret language of East London. A phrase that rhymes with the word you mean — then drop the rhyming part so nobody can follow.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span className="bg-muted/30 px-3 py-1 rounded-full">{PHRASES.length}+ phrases</span>
            <span className="bg-muted/30 px-3 py-1 rounded-full">{CATEGORIES.length} categories</span>
            <span className="bg-muted/30 px-3 py-1 rounded-full">From 1840s to today</span>
          </div>
        </div>

        {/* How it works */}
        <div className="mb-10 p-6 bg-gradient-to-br from-red-500/5 to-blue-500/5 rounded-2xl border">
          <h2 className="text-lg font-bold mb-4">How Cockney Rhyming Slang Works</h2>
          <div className="grid sm:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-background rounded-xl border text-center">
              <p className="text-2xl mb-2">1️⃣</p>
              <p className="font-semibold mb-1">Pick a word</p>
              <p className="text-muted-foreground">Say you want to say <em>phone</em></p>
            </div>
            <div className="p-4 bg-background rounded-xl border text-center">
              <p className="text-2xl mb-2">2️⃣</p>
              <p className="font-semibold mb-1">Find a rhyming phrase</p>
              <p className="text-muted-foreground"><em>"Dog and bone"</em> rhymes with phone</p>
            </div>
            <div className="p-4 bg-background rounded-xl border text-center">
              <p className="text-2xl mb-2">3️⃣</p>
              <p className="font-semibold mb-1">Drop the rhyming word</p>
              <p className="text-muted-foreground">Just say <em>"dog"</em> — never "bone"</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            The genius (and secrecy) is that outsiders hear "dog" and have no idea it means "phone".
          </p>
        </div>

        {/* Famous examples quick ref */}
        <div className="mb-10">
          <h2 className="text-xl font-bold mb-4">Famous Examples at a Glance</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {[
              { phrase: 'Dog and bone', means: 'Phone' },
              { phrase: 'Plates of meat', means: 'Feet' },
              { phrase: 'China plate', means: 'Mate' },
              { phrase: 'Apple and pears', means: 'Stairs' },
              { phrase: 'Bread and honey', means: 'Money' },
              { phrase: 'Rosy Lee', means: 'Tea' },
              { phrase: 'Loaf of bread', means: 'Head' },
              { phrase: 'Pig\'s ear', means: 'Beer' },
              { phrase: 'Adam and Eve', means: 'Believe' },
              { phrase: 'Brown bread', means: 'Dead' },
              { phrase: 'Trouble and strife', means: 'Wife' },
              { phrase: 'Frog and toad', means: 'Road' },
            ].map(e => (
              <div key={e.phrase} className="p-3 bg-muted/10 rounded-xl border text-center text-sm">
                <p className="font-semibold">{e.phrase}</p>
                <p className="text-muted-foreground text-xs mt-0.5">= {e.means}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Full dictionary by category */}
        {CATEGORIES.map(cat => (
          grouped[cat].length > 0 && (
            <section key={cat} className="mb-12">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b">{cat}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {grouped[cat].map(p => (
                  <div key={p.phrase} className="p-5 bg-muted/10 rounded-2xl border border-muted/30 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold">{p.phrase}</h3>
                      {p.era && <span className="text-xs text-muted-foreground shrink-0">{p.era}</span>}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">rhymes with <em>{p.rhymesWithWord}</em></span>
                      {p.shortened && <span className="text-xs bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2 py-0.5 rounded-full">say: "{p.shortened}"</span>}
                    </div>
                    <p className="text-sm font-semibold mb-1">= {p.meaning}</p>
                    <p className="text-xs italic text-muted-foreground">"{p.example}"</p>
                  </div>
                ))}
              </div>
            </section>
          )
        ))}

        {/* History section */}
        <section className="mb-12 p-6 bg-muted/10 rounded-2xl border">
          <h2 className="text-xl font-bold mb-4">History of Cockney Rhyming Slang</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">Origins (1840s):</strong> Cockney rhyming slang emerged in the East End of London in the mid-19th century. The most popular theory is that it was created deliberately as a secret code — by market traders, criminals, and the working class — so that outsiders (including police) couldn't understand conversations.
            </p>
            <p>
              <strong className="text-foreground">Who are Cockneys?</strong> Traditionally, a Cockney is someone born within earshot of the Bow Bells (the bells of St Mary-le-Bow church in Cheapside, London). Today it broadly refers to working-class East Londoners and their dialect.
            </p>
            <p>
              <strong className="text-foreground">Spread & modern use:</strong> Thanks to British TV shows like EastEnders and films like Lock, Stock and Two Smoking Barrels, Cockney slang is now understood (if not spoken) across the UK and internationally. New phrases are still being coined — many named after celebrities whose names rhyme with common words.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Do real Londoners still use Cockney rhyming slang?',
                a: 'Yes, but it varies. Older East Londoners use it naturally. Younger Londoners use it ironically or for specific classic phrases like "china" (mate), "bread" (money), and "dog" (phone). It\'s very much alive but more of a cultural identity marker than a secret code now.',
              },
              {
                q: 'Why do you drop the rhyming word?',
                a: 'That\'s the whole secret! If you say "dog and bone" — someone who knows the code knows you mean phone. But if you only say "dog", an outsider has no way to guess the connection. The rhyming word stays hidden, making the code work.',
              },
              {
                q: 'Are there modern additions to Cockney rhyming slang?',
                a: 'Yes — many. Modern phrases often use celebrity names: "Britney Spears" for beers, "Jordan and Peter" for heater (radiator), "Barack Obama" for drama. The tradition of creating new rhymes is ongoing.',
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
