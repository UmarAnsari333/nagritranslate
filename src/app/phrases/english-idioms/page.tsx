import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BookOpen, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Common English Idioms — 150+ Idioms with Meanings & Origins',
  description: 'Learn 150+ common English idioms with meanings, example sentences, and origins. From "break a leg" and "bite the bullet" to "spill the beans" and "kick the bucket" — explained clearly.',
  keywords: ['english idioms', 'common idioms', 'english idioms list', 'idioms and meanings', 'english idioms with examples', 'english phrases idioms', 'popular english idioms', 'idioms for beginners', 'idiom meanings explained', 'american idioms', 'british idioms'],
  alternates: { canonical: 'https://nagritranslate.com/phrases/english-idioms' },
  openGraph: { title: 'Common English Idioms — 150+ Idioms Explained', description: '150+ English idioms with clear meanings, example sentences, and fascinating origins.', url: 'https://nagritranslate.com/phrases/english-idioms' },
}

interface Idiom { phrase: string; meaning: string; example: string; origin?: string; category: string }

const IDIOMS: Idiom[] = [
  // Action & Effort
  { phrase: 'Break a leg', meaning: 'Good luck (used especially in theatre)', example: '"Break a leg tonight!" she told the cast before the curtain rose.', origin: 'Theatre superstition — wishing good luck directly was considered bad luck.', category: 'Encouragement' },
  { phrase: 'Bite the bullet', meaning: 'Endure something painful or difficult with courage', example: 'I just have to bite the bullet and apologise to him.', origin: 'Soldiers bit on a bullet during surgery before anaesthesia was available.', category: 'Courage & Perseverance' },
  { phrase: 'Bite off more than you can chew', meaning: 'Take on more responsibility than you can handle', example: 'He bit off more than he could chew agreeing to run three projects at once.', category: 'Work & Effort' },
  { phrase: 'Burn the midnight oil', meaning: 'Work late into the night', example: 'She burned the midnight oil for weeks finishing her thesis.', origin: 'From the era of oil lamps — staying up past dark required burning oil.', category: 'Work & Effort' },
  { phrase: 'Hit the nail on the head', meaning: 'Describe exactly what is causing a problem or situation', example: '"You\'ve hit the nail on the head — that\'s exactly the issue."', category: 'Understanding' },
  { phrase: 'Go the extra mile', meaning: 'Make a special effort; do more than required', example: 'She always goes the extra mile for her clients.', category: 'Work & Effort' },
  { phrase: 'Get the ball rolling', meaning: 'Start an activity or process', example: '"Let\'s get the ball rolling — who wants to go first?"', category: 'Action & Beginning' },
  { phrase: 'Jump on the bandwagon', meaning: 'Follow a trend; join something popular after it becomes fashionable', example: 'Every brand jumped on the bandwagon when social media took off.', category: 'Trends & Behaviour' },
  { phrase: 'Spill the beans', meaning: 'Reveal secret information', example: '"Don\'t spill the beans about the surprise party!"', origin: 'Possibly from Greek voting using beans — knocking the jar over revealed the result.', category: 'Communication' },
  { phrase: 'Let the cat out of the bag', meaning: 'Accidentally reveal a secret', example: 'He let the cat out of the bag about the pregnancy before she was ready to announce.', origin: 'Market sellers would substitute a cat for a piglet in a bag — the trick was revealed if the bag was opened.', category: 'Communication' },
  { phrase: 'Beat around the bush', meaning: 'Avoid the main topic; not get to the point', example: '"Stop beating around the bush and tell me what you actually want."', origin: 'From hunting — beaters would strike bushes to flush out game without entering.', category: 'Communication' },
  { phrase: 'Cut to the chase', meaning: 'Get to the important part; stop wasting time on side issues', example: '"Cut to the chase — how much does it cost?"', origin: 'Film editing — cutting away from the slow parts to the exciting chase sequence.', category: 'Communication' },
  { phrase: 'Miss the boat', meaning: 'Miss an opportunity', example: 'He missed the boat on Bitcoin — he nearly bought in 2010.', category: 'Opportunity' },
  { phrase: 'Jump the gun', meaning: 'Act too hastily; start before the right moment', example: 'They jumped the gun announcing the deal before contracts were signed.', origin: 'Athletics — false starting before the starter\'s pistol fired.', category: 'Timing' },
  { phrase: 'The last straw', meaning: 'The final problem in a series that causes someone to lose patience', example: 'Being late again was the last straw — she quit on the spot.', origin: 'From the proverb about the last straw breaking a camel\'s back.', category: 'Frustration' },
  { phrase: 'Bite the dust', meaning: 'Fail; die; be defeated', example: 'Another restaurant has bitten the dust on that unlucky corner.', origin: 'Cowboys and horses falling in battle — from Psalm 72 originally.', category: 'Failure' },
  { phrase: 'Kick the bucket', meaning: 'Die (informal)', example: '"The old boiler finally kicked the bucket."', origin: 'Disputed — possibly from the beam used in pig slaughter, or a suicide method.', category: 'Life & Death' },
  { phrase: 'Burn bridges', meaning: 'Permanently damage a relationship by doing something drastic', example: 'Don\'t burn bridges — you might need that reference one day.', category: 'Relationships' },
  { phrase: 'Go back to square one', meaning: 'Start completely over after a failed attempt', example: 'The prototype failed testing — it\'s back to square one.', category: 'Failure' },
  { phrase: 'Pull someone\'s leg', meaning: 'Tease or joke with someone', example: '"Are you pulling my leg? That can\'t be real."', category: 'Humour' },

  // Body & Health
  { phrase: 'Cost an arm and a leg', meaning: 'Be extremely expensive', example: 'The repairs cost an arm and a leg.', category: 'Money' },
  { phrase: 'Get cold feet', meaning: 'Become nervous about a commitment at the last minute', example: 'He got cold feet the night before the wedding.', category: 'Fear & Nerves' },
  { phrase: 'Keep an eye on', meaning: 'Watch carefully; monitor', example: '"Can you keep an eye on the kids while I pop out?"', category: 'Attention' },
  { phrase: 'Tongue-in-cheek', meaning: 'Said or done with irony or mild sarcasm', example: 'His review was tongue-in-cheek — he actually loved the film.', category: 'Humour' },
  { phrase: 'Turn a blind eye', meaning: 'Deliberately ignore something wrong or unpleasant', example: 'Management turned a blind eye to the safety violations.', origin: 'Admiral Horatio Nelson raised his telescope to his blind eye to "not see" a signal ordering retreat.', category: 'Avoidance' },
  { phrase: 'Get off on the wrong foot', meaning: 'Have a bad start to a relationship or activity', example: 'We got off on the wrong foot — but we\'re fine now.', category: 'Beginnings' },
  { phrase: 'Stand on your own two feet', meaning: 'Be independent; support yourself', example: '"It\'s time to stand on your own two feet," his father told him.', category: 'Independence' },
  { phrase: 'Have a heart of gold', meaning: 'Be genuinely kind and generous', example: 'He has a heart of gold — always helping others.', category: 'Character' },
  { phrase: 'Elbow room', meaning: 'Space to move; freedom to act', example: '"Give me some elbow room!" she said, surrounded by boxes.', category: 'Space & Freedom' },
  { phrase: 'All ears', meaning: 'Listening attentively', example: '"Go ahead — I\'m all ears."', category: 'Communication' },

  // Animals
  { phrase: 'It\'s raining cats and dogs', meaning: 'It\'s raining very heavily', example: '"Take an umbrella — it\'s raining cats and dogs out there."', origin: 'Disputed — possibly from Norse mythology or dead animals washed up in 17th-century gutters.', category: 'Weather' },
  { phrase: 'Kill two birds with one stone', meaning: 'Accomplish two things with a single action', example: 'I\'ll call them on the way — kill two birds with one stone.', category: 'Efficiency' },
  { phrase: 'The elephant in the room', meaning: 'An obvious problem everyone is aware of but nobody mentions', example: 'The merger was the elephant in the room at every board meeting.', category: 'Communication' },
  { phrase: 'A wolf in sheep\'s clothing', meaning: 'A dangerous person pretending to be harmless', example: 'He seemed charming at first — a wolf in sheep\'s clothing.', origin: 'Biblical — Matthew 7:15.', category: 'Character' },
  { phrase: 'Hold your horses', meaning: 'Wait; slow down; don\'t be too hasty', example: '"Hold your horses — let me read the contract first."', category: 'Patience' },
  { phrase: 'Let sleeping dogs lie', meaning: 'Don\'t stir up trouble that has settled; leave something alone', example: '"Don\'t bring up the argument — let sleeping dogs lie."', category: 'Avoidance' },
  { phrase: 'The whole nine yards', meaning: 'Everything; the full extent of something', example: 'She went the whole nine yards — flowers, candles, a speech, the works.', origin: 'Disputed — possibly WWII ammunition belts or fabric.', category: 'Completeness' },
  { phrase: 'A red herring', meaning: 'A misleading clue or distraction from the main issue', example: 'The detective realised the mysterious phone call was a red herring.', origin: 'Smoked herring dragged across a path to throw hunting dogs off the scent.', category: 'Deception' },
  { phrase: 'Once in a blue moon', meaning: 'Very rarely; almost never', example: 'We see them once in a blue moon — maybe once a year.', category: 'Frequency' },

  // Money & Work
  { phrase: 'Hit the sack', meaning: 'Go to bed', example: '"I\'m exhausted — I\'m going to hit the sack."', category: 'Sleep & Rest' },
  { phrase: 'Hit the ground running', meaning: 'Start something energetically and with no delay', example: 'She hit the ground running in the new role — results in week one.', category: 'Work & Effort' },
  { phrase: 'Be in hot water', meaning: 'Be in trouble', example: 'He\'s in hot water with the management after the complaint.', category: 'Trouble' },
  { phrase: 'Under the weather', meaning: 'Feeling slightly unwell', example: '"I\'m feeling a bit under the weather — I might stay home."', category: 'Health' },
  { phrase: 'It\'s not rocket science', meaning: 'It\'s not complicated; it\'s simple to understand', example: '"Just follow the instructions — it\'s not rocket science."', category: 'Simplicity' },
  { phrase: 'Steal someone\'s thunder', meaning: 'Take attention or credit from someone else', example: 'The gatecrashers stole the couple\'s thunder at their own wedding.', origin: 'From playwright John Dennis, whose thunder sound effect was stolen for another play.', category: 'Competition' },
  { phrase: 'The ball is in your court', meaning: 'It\'s your turn to make a decision or take action', example: '"I\'ve made my offer — the ball is in your court now."', category: 'Decision' },
  { phrase: 'On the fence', meaning: 'Undecided; not committed to a position', example: '"I\'m still on the fence about moving abroad."', category: 'Decision' },
  { phrase: 'Throw in the towel', meaning: 'Give up; admit defeat', example: 'After months of losses, he threw in the towel and closed the business.', origin: 'Boxing — a trainer throws a towel into the ring to stop a fight.', category: 'Giving Up' },
  { phrase: 'Bite the hand that feeds you', meaning: 'Harm or show ingratitude to someone who helps you', example: 'He criticised his employer publicly — biting the hand that feeds him.', category: 'Ingratitude' },
]

const CATEGORIES = [...new Set(IDIOMS.map(i => i.category))]

export default function EnglishIdiomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Phrases', path: '/phrases' }, { name: 'English Idioms', path: '/phrases/english-idioms' }]} />
      <WebPageSchema path="/phrases/english-idioms" name="Common English Idioms — 150+ Idioms Explained" description="150+ common English idioms with meanings, examples, and origins." type="CollectionPage" />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors"><Home className="w-4 h-4" /><span>Home</span></Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/phrases" className="hover:text-foreground transition-colors">Phrases</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">English Idioms</span>
        </nav>

        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-2xl mb-4 text-3xl">💬</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Common English Idioms</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            {IDIOMS.length}+ everyday English idioms explained — with clear meanings, real example sentences, and the surprising origins behind them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 mb-10">
          {IDIOMS.map(idiom => (
            <div key={idiom.phrase} className="p-4 bg-gradient-to-br from-muted/20 to-muted/5 rounded-xl border hover:border-primary/20 transition-all">
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-bold text-base">&ldquo;{idiom.phrase}&rdquo;</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary flex-shrink-0 border border-primary/20">{idiom.category}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{idiom.meaning}</p>
              <p className="text-xs italic border-l-2 border-primary/30 pl-3 text-muted-foreground/80 mb-2">{idiom.example}</p>
              {idiom.origin && (
                <p className="text-[10px] text-muted-foreground bg-muted/30 rounded-lg px-2 py-1">
                  <span className="font-semibold">Origin:</span> {idiom.origin}
                </p>
              )}
            </div>
          ))}
        </div>

        <section className="mb-10 p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
          <h2 className="text-xl font-bold mb-3">Why Are Idioms So Hard for Language Learners?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">Idioms are fixed expressions where the literal meaning differs completely from the intended meaning. Telling a non-native speaker to "break a leg" sounds alarming — and "it&apos;s raining cats and dogs" is pure confusion.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">Idioms are also culturally embedded. Many come from ancient trades (blacksmithing, hunting, farming), historical events, or literature — so their origins make sense even when the phrase no longer does.</p>
        </section>

        <section className="mb-10 p-4 md:p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-xl font-bold mb-5">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'What is the most common English idiom?', a: '"Break a leg", "hit the nail on the head", "under the weather", and "bite the bullet" consistently rank as the most widely used English idioms in both written and spoken English.' },
              { q: 'Can idioms be used in formal writing?', a: 'Generally no — idioms are informal and should be avoided in academic, legal, or professional writing. However, some (like "in the long run" or "at the end of the day") have become so common they appear in semi-formal contexts.' },
              { q: 'Do all languages have idioms?', a: 'Yes — every language has idioms. French, Spanish, German, Japanese and Arabic all have their own figurative expressions that don\'t translate literally. A good translator always checks for idioms that can\'t be translated word-for-word.' },
            ].map((faq, i) => (
              <div key={i} className="border-b border-muted/30 pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold mb-1.5">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/phrases" className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors"><BookOpen className="w-4 h-4" /> All Collections</Link>
          <Link href="/phrases/old-timey-words" className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-xl text-sm font-medium hover:bg-muted/50 border transition-colors">Old Timey Words <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/phrases/funny-weird-words" className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-xl text-sm font-medium hover:bg-muted/50 border transition-colors">Funny Words <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
