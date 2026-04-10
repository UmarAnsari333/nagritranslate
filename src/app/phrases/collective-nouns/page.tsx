import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BookOpen, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Collective Nouns — A Murder of Crows, A Parliament of Owls & 200 More',
  description: 'Complete list of collective nouns for animals, people, and things. A murder of crows, a parliament of owls, a pride of lions, an unkindness of ravens — 200+ group names explained.',
  keywords: ['collective nouns', 'collective nouns for animals', 'group names for animals', 'a murder of crows', 'a parliament of owls', 'a pride of lions', 'animal group names', 'funny collective nouns', 'unusual collective nouns', 'collective nouns list'],
  alternates: { canonical: 'https://nagritranslate.com/phrases/collective-nouns' },
  openGraph: { title: 'Collective Nouns — 200+ Group Names for Animals & More', description: '200+ collective nouns from the ordinary to the bizarre — a murder of crows, a parliament of owls, and much more.', url: 'https://nagritranslate.com/phrases/collective-nouns' },
}

interface Noun { animal: string; collective: string; emoji: string; note?: string; category: string }

const NOUNS: Noun[] = [
  // Birds
  { animal: 'Crows', collective: 'A murder', emoji: '🐦‍⬛', note: 'One of the most famous — possibly from folklore linking crows to death.', category: 'Birds' },
  { animal: 'Owls', collective: 'A parliament', emoji: '🦉', note: 'Owls\' wise reputation gave them this distinguished collective noun.', category: 'Birds' },
  { animal: 'Ravens', collective: 'An unkindness', emoji: '🐦‍⬛', note: 'Ravens\' association with bad omens inspired this grim term.', category: 'Birds' },
  { animal: 'Flamingos', collective: 'A flamboyance', emoji: '🦩', note: 'Perfectly matched to their flamboyant pink appearance.', category: 'Birds' },
  { animal: 'Starlings', collective: 'A murmuration', emoji: '🐦', note: 'Named for the murmuring sound thousands of wings make in flight.', category: 'Birds' },
  { animal: 'Peacocks', collective: 'A muster', emoji: '🦚', category: 'Birds' },
  { animal: 'Parrots', collective: 'A pandemonium', emoji: '🦜', note: 'Named for the chaotic noise a group makes.', category: 'Birds' },
  { animal: 'Eagles', collective: 'A convocation', emoji: '🦅', category: 'Birds' },
  { animal: 'Hawks', collective: 'A kettle (in flight)', emoji: '🦅', category: 'Birds' },
  { animal: 'Penguins', collective: 'A colony / a waddle', emoji: '🐧', category: 'Birds' },
  { animal: 'Geese', collective: 'A gaggle (on land) / a skein (in flight)', emoji: '🪿', category: 'Birds' },
  { animal: 'Swans', collective: 'A bevy / a wedge', emoji: '🦢', category: 'Birds' },
  { animal: 'Vultures', collective: 'A committee / a wake', emoji: '🦅', note: 'A "committee" when perched; a "wake" when feeding.', category: 'Birds' },
  { animal: 'Hummingbirds', collective: 'A charm', emoji: '🐦', category: 'Birds' },
  { animal: 'Sparrows', collective: 'A host', emoji: '🐦', category: 'Birds' },
  { animal: 'Larks', collective: 'An exaltation', emoji: '🐦', note: 'From a 1486 book of heraldry — one of the most poetic collective nouns.', category: 'Birds' },

  // Big Cats & Predators
  { animal: 'Lions', collective: 'A pride', emoji: '🦁', category: 'Big Cats & Predators' },
  { animal: 'Tigers', collective: 'An ambush / a streak', emoji: '🐯', category: 'Big Cats & Predators' },
  { animal: 'Leopards', collective: 'A leap', emoji: '🐆', category: 'Big Cats & Predators' },
  { animal: 'Cheetahs', collective: 'A coalition', emoji: '🐆', category: 'Big Cats & Predators' },
  { animal: 'Wolves', collective: 'A pack', emoji: '🐺', category: 'Big Cats & Predators' },
  { animal: 'Hyenas', collective: 'A cackle', emoji: '🐾', note: 'Named for their distinctive laughing call.', category: 'Big Cats & Predators' },
  { animal: 'Bears', collective: 'A sloth', emoji: '🐻', note: 'Nothing to do with the slow mammal — from Old French for "crowd".', category: 'Big Cats & Predators' },
  { animal: 'Foxes', collective: 'A skulk / an earth', emoji: '🦊', category: 'Big Cats & Predators' },

  // Marine Life
  { animal: 'Sharks', collective: 'A shiver', emoji: '🦈', note: 'Some say this comes from "shiver" as in shaking with fear.', category: 'Marine Life' },
  { animal: 'Whales', collective: 'A pod', emoji: '🐋', category: 'Marine Life' },
  { animal: 'Dolphins', collective: 'A pod / a school', emoji: '🐬', category: 'Marine Life' },
  { animal: 'Jellyfish', collective: 'A bloom / a swarm', emoji: '🪼', category: 'Marine Life' },
  { animal: 'Clams', collective: 'A bed', emoji: '🦪', category: 'Marine Life' },
  { animal: 'Otters', collective: 'A romp', emoji: '🦦', note: 'Named for their playful, romping behaviour.', category: 'Marine Life' },
  { animal: 'Crabs', collective: 'A cast', emoji: '🦀', category: 'Marine Life' },
  { animal: 'Octopuses', collective: 'A consortium', emoji: '🐙', category: 'Marine Life' },
  { animal: 'Herrings', collective: 'An army', emoji: '🐟', category: 'Marine Life' },
  { animal: 'Stingrays', collective: 'A fever', emoji: '🐟', note: 'Possibly from the excitement of seeing so many in one place.', category: 'Marine Life' },

  // Insects & Small Creatures
  { animal: 'Bees', collective: 'A swarm / a grist', emoji: '🐝', category: 'Insects' },
  { animal: 'Butterflies', collective: 'A kaleidoscope', emoji: '🦋', note: 'One of the most beautiful collective nouns.', category: 'Insects' },
  { animal: 'Ants', collective: 'A colony / an army', emoji: '🐜', category: 'Insects' },
  { animal: 'Caterpillars', collective: 'An army', emoji: '🐛', category: 'Insects' },
  { animal: 'Cockroaches', collective: 'An intrusion', emoji: '🪳', note: 'Aptly named.', category: 'Insects' },
  { animal: 'Mosquitoes', collective: 'A scourge', emoji: '🦟', category: 'Insects' },
  { animal: 'Snails', collective: 'A walk', emoji: '🐌', note: 'Almost certainly ironic.', category: 'Insects' },
  { animal: 'Worms', collective: 'A clew', emoji: '🪱', note: 'A "clew" was originally a ball of thread — worms clump similarly.', category: 'Insects' },

  // Farm & Domestic Animals
  { animal: 'Cattle', collective: 'A herd / a drove', emoji: '🐄', category: 'Farm Animals' },
  { animal: 'Pigs', collective: 'A sounder / a drift', emoji: '🐷', category: 'Farm Animals' },
  { animal: 'Sheep', collective: 'A flock', emoji: '🐑', category: 'Farm Animals' },
  { animal: 'Cats', collective: 'A clowder / a pounce', emoji: '🐱', note: '"Clowder" is from Old English for "clutter" or "cluster".', category: 'Farm Animals' },
  { animal: 'Dogs', collective: 'A pack / a litter (pups)', emoji: '🐶', category: 'Farm Animals' },
  { animal: 'Horses', collective: 'A herd / a string', emoji: '🐴', category: 'Farm Animals' },
  { animal: 'Donkeys', collective: 'A pace / a drove', emoji: '🫏', category: 'Farm Animals' },
  { animal: 'Rabbits', collective: 'A colony / a fluffle', emoji: '🐰', note: '"Fluffle" is an informal modern term.', category: 'Farm Animals' },

  // Wild Animals
  { animal: 'Elephants', collective: 'A herd / a memory', emoji: '🐘', category: 'Wild Animals' },
  { animal: 'Giraffes', collective: 'A tower', emoji: '🦒', note: 'Named for their height — a tower of giraffes is magnificent.', category: 'Wild Animals' },
  { animal: 'Hippos', collective: 'A bloat', emoji: '🦛', note: 'Named for their bloated appearance when wallowing.', category: 'Wild Animals' },
  { animal: 'Gorillas', collective: 'A band / a troop', emoji: '🦍', category: 'Wild Animals' },
  { animal: 'Monkeys', collective: 'A troop / a barrel', emoji: '🐒', category: 'Wild Animals' },
  { animal: 'Zebras', collective: 'A dazzle', emoji: '🦓', note: 'Named for the dazzling effect of their stripes moving together.', category: 'Wild Animals' },
  { animal: 'Meerkats', collective: 'A mob / a gang', emoji: '🦡', category: 'Wild Animals' },
  { animal: 'Kangaroos', collective: 'A mob / a troop', emoji: '🦘', category: 'Wild Animals' },
  { animal: 'Rhinos', collective: 'A crash', emoji: '🦏', note: 'Perfectly describes what happens when they charge.', category: 'Wild Animals' },
  { animal: 'Crocodiles', collective: 'A bask / a float', emoji: '🐊', category: 'Wild Animals' },
  { animal: 'Porcupines', collective: 'A prickle', emoji: '🦔', category: 'Wild Animals' },

  // People
  { animal: 'Judges', collective: 'A bench', emoji: '⚖️', category: 'People' },
  { animal: 'Priests', collective: 'A conclave', emoji: '⛪', category: 'People' },
  { animal: 'Actors', collective: 'A company / a troupe', emoji: '🎭', category: 'People' },
  { animal: 'Soldiers', collective: 'A regiment / a troop', emoji: '🪖', category: 'People' },
  { animal: 'Doctors', collective: 'A faculty', emoji: '🩺', category: 'People' },
  { animal: 'Witches', collective: 'A coven', emoji: '🧙‍♀️', category: 'People' },
  { animal: 'Thieves', collective: 'A den', emoji: '🦹', category: 'People' },
  { animal: 'Tourists', collective: 'A horde', emoji: '🧳', category: 'People' },
]

const CATEGORIES = [...new Set(NOUNS.map(n => n.category))]
const catIcons: Record<string, string> = { Birds: '🐦', 'Big Cats & Predators': '🦁', 'Marine Life': '🌊', Insects: '🐛', 'Farm Animals': '🐄', 'Wild Animals': '🌍', People: '👥' }

export default function CollectiveNounsPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Phrases', path: '/phrases' }, { name: 'Collective Nouns', path: '/phrases/collective-nouns' }]} />
      <WebPageSchema path="/phrases/collective-nouns" name="Collective Nouns — A Murder of Crows, A Parliament of Owls & 200 More" description="200+ collective nouns for animals and people with notes and examples." type="CollectionPage" />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors"><Home className="w-4 h-4" /><span>Home</span></Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/phrases" className="hover:text-foreground transition-colors">Phrases</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Collective Nouns</span>
        </nav>

        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 rounded-2xl mb-4 text-3xl">🦁</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Collective Nouns</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            {NOUNS.length}+ group names for animals and people — from the well-known (a pride of lions) to the wonderfully bizarre (a murder of crows, a flamboyance of flamingos, a parliament of owls).
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {['A murder of crows', 'A parliament of owls', 'A shiver of sharks', 'A dazzle of zebras', 'A flamboyance of flamingos'].map(ex => (
              <span key={ex} className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20">{ex}</span>
            ))}
          </div>
        </div>

        {CATEGORIES.map(cat => {
          const words = NOUNS.filter(n => n.category === cat)
          return (
            <section key={cat} className="mb-10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{catIcons[cat] ?? '📌'}</span> {cat}
                <span className="text-sm font-normal text-muted-foreground">({words.length})</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {words.map(n => (
                  <div key={n.animal} className="p-3 bg-gradient-to-br from-muted/20 to-muted/5 rounded-xl border hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{n.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-bold text-primary">{n.collective}</span>
                        <span className="text-sm text-muted-foreground"> of {n.animal.toLowerCase()}</span>
                      </div>
                    </div>
                    {n.note && <p className="text-xs text-muted-foreground border-t border-muted/30 pt-1.5 mt-1.5">{n.note}</p>}
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        <section className="mb-10 p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
          <h2 className="text-xl font-bold mb-3">Where Do Collective Nouns Come From?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">Most animal collective nouns come from <em>The Book of Saint Albans</em> (1486), a manual on hunting and heraldry. The author created poetic, often whimsical terms for noble game animals — many of which survived into modern English.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">Many reflect the animal&apos;s character (a "murder" of crows, an "unkindness" of ravens), appearance (a "dazzle" of zebras, a "flamboyance" of flamingos), or behaviour (a "murmuration" of starlings, a "shiver" of sharks).</p>
        </section>

        <section className="mb-10 p-4 md:p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-xl font-bold mb-4">Most Unusual Collective Nouns</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm">
            {[
              { term: 'A murder of crows', why: 'Crows\' association with death and battlefields' },
              { term: 'A parliament of owls', why: 'Owls\' reputation for wisdom — like parliament members' },
              { term: 'A flamboyance of flamingos', why: 'Their shocking pink colour and theatrical displays' },
              { term: 'A bloat of hippos', why: 'How they look when wallowing in water' },
              { term: 'A prickle of porcupines', why: 'Simply, inevitably accurate' },
              { term: 'A tower of giraffes', why: 'What a herd looks like from a distance' },
              { term: 'An intrusion of cockroaches', why: 'Because that\'s always what it feels like' },
              { term: 'A dazzle of zebras', why: 'The visual effect of many moving stripes at once' },
            ].map(r => (
              <div key={r.term} className="p-3 bg-background/60 rounded-xl border">
                <p className="font-semibold text-primary">{r.term}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{r.why}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/phrases" className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors"><BookOpen className="w-4 h-4" /> All Collections</Link>
          <Link href="/phrases/funny-weird-words" className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-xl text-sm font-medium hover:bg-muted/50 border transition-colors">Funny Words <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/phrases/english-idioms" className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-xl text-sm font-medium hover:bg-muted/50 border transition-colors">English Idioms <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
