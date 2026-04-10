import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BookOpen, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Untranslatable Words — 100+ Words English Has No Word For',
  description: 'Discover 100+ beautiful untranslatable words from around the world — words other languages have that English doesn\'t. From Danish hygge to Japanese wabi-sabi, Portuguese saudade, and German Schadenfreude.',
  keywords: ['untranslatable words', 'words with no english equivalent', 'words english doesnt have', 'foreign words with no translation', 'beautiful foreign words', 'untranslatable feelings', 'hygge meaning', 'saudade meaning', 'schadenfreude meaning', 'wabi sabi meaning', 'foreign concepts with no english word'],
  alternates: { canonical: 'https://nagritranslate.com/phrases/untranslatable-words' },
  openGraph: {
    title: 'Untranslatable Words — 100+ Words English Has No Word For',
    description: '100+ beautiful untranslatable words from 30+ languages — feelings, moments, and concepts that English cannot express in a single word.',
    url: 'https://nagritranslate.com/phrases/untranslatable-words',
  },
}

interface UWord { word: string; language: string; flag: string; pronunciation: string; literal?: string; meaning: string; example: string; category: string }

const WORDS: UWord[] = [
  // Happiness & Positive
  { word: 'Hygge', language: 'Danish / Norwegian', flag: '🇩🇰', pronunciation: 'HOO-guh', meaning: 'The warm, cozy feeling of being comfortable and content with good company, candlelight, and simple pleasures — the Danish art of cosiness.', example: 'Curling up by the fire with hot cocoa and good friends on a winter evening is the very definition of hygge.', category: 'Comfort & Wellbeing' },
  { word: 'Friluftsliv', language: 'Norwegian', flag: '🇳🇴', pronunciation: 'FREE-loofts-leev', literal: 'Free air life', meaning: 'The philosophy of spending time outdoors in nature as a way of life and source of spiritual wellbeing — not just recreation.', example: 'Even in winter, Norwegians practice friluftsliv — skiing, hiking, and sitting outside simply to be in nature.', category: 'Nature & Place' },
  { word: 'Sisu', language: 'Finnish', flag: '🇫🇮', pronunciation: 'SEE-soo', meaning: 'A uniquely Finnish concept of stoic, inner strength and determination to persist through hardship — beyond ordinary resilience or grit.', example: 'Running a marathon with a broken toe and finishing anyway — that\'s sisu.', category: 'Character & Strength' },
  { word: 'Meraki', language: 'Greek', flag: '🇬🇷', pronunciation: 'meh-RAH-kee', meaning: 'To do something with soul, creativity, and love — to put a piece of yourself into your work.', example: 'She cooked every meal with meraki, and you could taste the difference.', category: 'Work & Creativity' },
  { word: 'Eudaimonia', language: 'Greek', flag: '🇬🇷', pronunciation: 'yoo-dy-MOH-nee-uh', meaning: 'The condition of human flourishing — a deep happiness that comes from living with purpose, virtue, and meaning. More than pleasure.', example: 'Aristotle believed eudaimonia was the highest human goal — not just feeling happy, but living well.', category: 'Happiness & Emotion' },
  { word: 'Sobremesa', language: 'Spanish', flag: '🇪🇸', pronunciation: 'so-breh-MEH-sah', literal: 'Over the table', meaning: 'The leisurely time spent at the table after a meal, talking and enjoying each other\'s company — not rushing to leave.', example: 'In Spain, sobremesa after a Sunday lunch can last longer than the meal itself.', category: 'Social & Connection' },
  { word: 'Mamihlapinatapai', language: 'Yaghan (Chile)', flag: '🌎', pronunciation: 'mah-mee-lah-pee-nah-tah-PIE', meaning: 'The look two people share when both want the same thing but neither wants to be the one to ask first.', example: 'They sat in mamihlapinatapai for an hour — both wanting to leave the party, neither wanting to suggest it.', category: 'Social & Connection' },
  { word: 'Forelsket', language: 'Norwegian', flag: '🇳🇴', pronunciation: 'for-EL-sket', meaning: 'The euphoric, overwhelming feeling of falling in love for the first time — the first rush of romantic feeling.', example: 'There\'s no English word for forelsket — that specific dizzy joy of a first love.', category: 'Love & Relationships' },
  { word: 'Ya\'aburnee', language: 'Arabic', flag: '🌍', pronunciation: 'yah-AB-ur-nee', literal: 'May you bury me', meaning: 'A term of endearment meaning "I love you so much I hope I die before you, so I don\'t have to live without you."', example: '"Ya\'aburnee," whispered the grandmother to her grandchild — the deepest Arabic expression of love.', category: 'Love & Relationships' },
  { word: 'Gigil', language: 'Filipino', flag: '🇵🇭', pronunciation: 'GEE-gil', meaning: 'The urge to squeeze or pinch something overwhelmingly cute — the physical response to overwhelming cuteness.', example: 'Seeing the tiny puppy, she was overcome with gigil and couldn\'t stop herself from picking it up.', category: 'Happiness & Emotion' },

  // Melancholy & Longing
  { word: 'Saudade', language: 'Portuguese', flag: '🇵🇹', pronunciation: 'sow-DAH-deh', meaning: 'A deep emotional longing for someone or something beloved that is distant or gone — tinged with nostalgia, love, and the knowledge it may never return.', example: 'The Fado music of Lisbon is built entirely on saudade — a beautiful ache for what once was.', category: 'Melancholy & Longing' },
  { word: 'Hiraeth', language: 'Welsh', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', pronunciation: 'HEER-eyeth', meaning: 'A homesickness for a home you can\'t return to, or that never was — a grief-tinged longing for the Welsh homeland and its past.', example: 'Moving away from Wales, she felt hiraeth not just for a place, but for a version of life now gone.', category: 'Melancholy & Longing' },
  { word: 'Mono no aware', language: 'Japanese', flag: '🇯🇵', pronunciation: 'moh-noh noh ah-WAH-reh', literal: 'The pathos of things', meaning: 'The bittersweet awareness of impermanence — finding beauty in things precisely because they are fleeting. The emotion of watching cherry blossoms fall.', example: 'Watching the last summer sunset, she felt mono no aware — the beauty made perfect by its ending.', category: 'Melancholy & Longing' },
  { word: 'Sehnsucht', language: 'German', flag: '🇩🇪', pronunciation: 'ZAYN-zookht', meaning: 'A deep, inconsolable longing for something unknown or unattainable — a yearning for a different life, a lost past, or an ideal you can\'t quite name.', example: 'C.S. Lewis described Sehnsucht as a longing for an unnameable something — a "joy" that hurts because it\'s never quite reachable.', category: 'Melancholy & Longing' },
  { word: 'Toska', language: 'Russian', flag: '🇷🇺', pronunciation: 'TOSS-kah', meaning: 'A longing with nothing to long for — a dull ache of the soul, a spiritual restlessness and yearning. Nabokov called it "a sensation of great spiritual anguish."', example: 'On grey winter evenings in Moscow, toska descends — an ache with no object, no cure.', category: 'Melancholy & Longing' },
  { word: 'Litost', language: 'Czech', flag: '🇨🇿', pronunciation: 'LEE-tosht', meaning: 'A state of torment caused by the sudden realisation of one\'s own misery, combined with the desire to take revenge on whoever caused it.', example: 'Milan Kundera described litost as uniquely human: the shame of your own weakness mixed with anger at whoever witnessed it.', category: 'Melancholy & Longing' },
  { word: 'Iktsuarpok', language: 'Inuit', flag: '🌨️', pronunciation: 'eet-soo-AR-pok', meaning: 'The feeling of anticipation when you\'re waiting for someone to arrive — going to the window again and again to check if they\'re here yet.', example: 'She felt iktsuarpok all afternoon, checking the road every few minutes for her son\'s car.', category: 'Social & Connection' },

  // Observation & Thought
  { word: 'Schadenfreude', language: 'German', flag: '🇩🇪', pronunciation: 'SHAH-den-froy-deh', literal: 'Harm joy', meaning: 'Pleasure or satisfaction derived from someone else\'s misfortune. Widely used in English — the most borrowed German word.', example: 'She felt a guilty schadenfreude watching her smug neighbour\'s new car get scratched.', category: 'Social & Connection' },
  { word: 'Weltschmerz', language: 'German', flag: '🇩🇪', pronunciation: 'VELT-shmerts', literal: 'World pain', meaning: 'A deep sadness caused by comparing the world as it is to the world as it should be — a pain born of idealism meeting reality.', example: 'Reading the news each morning fills her with Weltschmerz — grief at how far the world falls short.', category: 'Melancholy & Longing' },
  { word: 'Fernweh', language: 'German', flag: '🇩🇪', pronunciation: 'FERN-veh', literal: 'Far sickness', meaning: 'A longing for distant places; the opposite of homesickness — an ache to be somewhere else, anywhere else, far away.', example: 'Every autumn she was overcome with Fernweh and would buy a plane ticket before she knew where she was going.', category: 'Nature & Place' },
  { word: 'Torschlusspanik', language: 'German', flag: '🇩🇪', pronunciation: 'TOR-shloos-pah-nik', literal: 'Gate-closing panic', meaning: 'The fear that time is running out to achieve life\'s goals — the anxiety that doors are closing as you age.', example: 'At 35 and single, she was struck by Torschlusspanik — afraid the window for marriage and children was closing.', category: 'Happiness & Emotion' },
  { word: 'Wabi-sabi', language: 'Japanese', flag: '🇯🇵', pronunciation: 'wah-bee SAH-bee', meaning: 'The beauty found in imperfection, impermanence, and incompleteness — an aesthetic that embraces flaws, age, and the natural cycle of things.', example: 'The cracked tea bowl, repaired with gold lacquer, embodied wabi-sabi — its beauty made greater by its history.', category: 'Philosophy & Beauty' },
  { word: 'Komorebi', language: 'Japanese', flag: '🇯🇵', pronunciation: 'koh-moh-REH-bee', meaning: 'The interplay of light and leaves — the dappled sunlight filtering through trees and the flickering patterns it creates.', example: 'She sat beneath the oak in the komorebi, losing track of time as the light shifted through the branches.', category: 'Nature & Place' },
  { word: 'Shoganai', language: 'Japanese', flag: '🇯🇵', pronunciation: 'sho-gah-NAI', literal: 'It cannot be helped', meaning: 'The acceptance of things beyond your control — a cultural philosophy of graceful resignation and moving forward without bitterness.', example: 'When the typhoon cancelled the festival, everyone just said shoganai and began preparing for next year.', category: 'Philosophy & Beauty' },
  { word: 'Ikigai', language: 'Japanese', flag: '🇯🇵', pronunciation: 'ee-kee-GUY', literal: 'Reason for being', meaning: 'Your reason for getting up in the morning — the intersection of what you love, what you\'re good at, what the world needs, and what you can earn.', example: 'She finally found her ikigai at 50: teaching children who struggled as she had.', category: 'Work & Creativity' },
  { word: 'Ma', language: 'Japanese', flag: '🇯🇵', pronunciation: 'MAH', meaning: 'Negative space; the meaningful pause or interval between things — the silence between notes, the gap between objects, the pause before a word.', example: 'Japanese design embraces ma — the empty space in a room is as considered as the furniture.', category: 'Philosophy & Beauty' },
  { word: 'Aware', language: 'Japanese', flag: '🇯🇵', pronunciation: 'ah-WAH-reh', meaning: 'An empathic sadness for the transience of things; a gentle, bittersweet sensitivity to the world\'s beauty and impermanence.', example: 'The old man watched his grandchildren play with a deep aware — knowing this moment would never come again.', category: 'Melancholy & Longing' },

  // Social & Relations
  { word: 'Cavoli Riscaldati', language: 'Italian', flag: '🇮🇹', pronunciation: 'kah-VOH-lee ree-skal-DAH-tee', literal: 'Reheated cabbage', meaning: 'The attempt to revive a failed relationship — the idea that, like reheated cabbage, it never tastes as good the second time.', example: '"Don\'t call him," her friend warned. "Cavoli riscaldati never works."', category: 'Love & Relationships' },
  { word: 'Desenrascanço', language: 'Portuguese', flag: '🇵🇹', pronunciation: 'deh-zen-rash-KAN-soo', meaning: 'The ability to improvise a quick, clever solution from available resources — the Portuguese art of muddling through brilliantly.', example: 'He fixed the engine with a coat hanger and duct tape — pure desenrascanço.', category: 'Character & Strength' },
  { word: 'Ubuntu', language: 'Zulu / Xhosa', flag: '🇿🇦', pronunciation: 'oo-BOON-too', literal: 'I am because we are', meaning: 'The belief that a person\'s humanity is defined by their community and relationships with others. A philosophy of compassion and shared humanity.', example: '"I am what I am because of who we all are" — ubuntu as Nelson Mandela described it.', category: 'Social & Connection' },
  { word: 'Lagom', language: 'Swedish', flag: '🇸🇪', pronunciation: 'LAH-gom', meaning: 'Not too much, not too little — just the right amount. A cultural ideal of balance, moderation, and appropriateness.', example: 'The coffee was lagom hot, the meal lagom sized, the evening lagom long — perfectly calibrated.', category: 'Philosophy & Beauty' },
  { word: 'Fika', language: 'Swedish', flag: '🇸🇪', pronunciation: 'FEE-kah', meaning: 'The Swedish ritual of a meaningful coffee and cake break — a pause in the day for socialising, rest, and connection. More than just coffee.', example: 'In Sweden, fika is a near-sacred institution — offices stop at 10am and 3pm for it.', category: 'Comfort & Wellbeing' },
  { word: 'Fremdschämen', language: 'German', flag: '🇩🇪', pronunciation: 'FREMD-shay-men', meaning: 'Vicarious embarrassment felt on behalf of someone who doesn\'t realise they should be embarrassed — cringing for someone else.', example: 'Watching the contestant confidently sing out of tune, she was overcome with Fremdschämen.', category: 'Social & Connection' },
  { word: 'Dépaysement', language: 'French', flag: '🇫🇷', pronunciation: 'day-pay-EEZ-mohn', meaning: 'The disorienting, bittersweet feeling of being in a foreign country — not homesickness, but the strange sensation of being an outsider.', example: 'Her first week in Tokyo was wonderful but tinged with dépaysement — everything familiar was gone.', category: 'Nature & Place' },
  { word: 'L\'esprit de l\'escalier', language: 'French', flag: '🇫🇷', pronunciation: 'les-PREE duh les-kah-LYAY', literal: 'Staircase wit', meaning: 'The perfect comeback you think of only after leaving — the witty reply you wished you\'d said in the argument but only think of on the way home.', example: '"The staircase wit struck at 2am," he wrote in his diary, recording the perfect reply he should have said.', category: 'Social & Connection' },
  { word: 'Joie de vivre', language: 'French', flag: '🇫🇷', pronunciation: 'ZHWA duh VEE-vruh', literal: 'Joy of living', meaning: 'An exuberant enjoyment of life — a feeling of cheerful enthusiasm and zest for everything.', example: 'She had an irrepressible joie de vivre that made everyone around her feel more alive.', category: 'Happiness & Emotion' },
  { word: 'Flaneur', language: 'French', flag: '🇫🇷', pronunciation: 'flah-NUR', meaning: 'A person who wanders city streets with no destination — an idle, curious observer of urban life who finds meaning in the aimless drift.', example: 'He spent his retirement as a flaneur, drifting through Paris with a notebook and no plans.', category: 'Work & Creativity' },

  // Untranslatable concepts
  { word: 'Pochemuchka', language: 'Russian', flag: '🇷🇺', pronunciation: 'poh-cheh-MOOCH-kah', meaning: 'A person who asks too many questions — an insatiably curious child who never stops asking "why?"', example: '"Why is the sky blue? Why do dogs bark? Why do we sleep?" — little Ivan was a true pochemuchka.', category: 'Character & Strength' },
  { word: 'Jayus', language: 'Indonesian', flag: '🇮🇩', pronunciation: 'JY-yus', meaning: 'A joke so unfunny or told so badly that you can\'t help but laugh at it anyway.', example: 'His pun was an absolute jayus — the groans around the table dissolved into helpless laughter.', category: 'Happiness & Emotion' },
  { word: 'Culpa', language: 'Latin', flag: '🏛️', pronunciation: 'KUL-pah', meaning: 'Fault or guilt — but in its original sense, a specific, personal, acknowledged wrongdoing. English "culpable" comes from here.', example: 'Mea culpa — my fault, my error, I accept responsibility.', category: 'Philosophy & Beauty' },
  { word: 'Palegg', language: 'Norwegian', flag: '🇳🇴', pronunciation: 'PAH-leg', meaning: 'Anything and everything you can put on top of bread — a single word covering all sandwich toppings and spreads.', example: 'Norwegian supermarkets have entire sections dedicated to pålegg — cheese, cold cuts, jams, fish pastes.', category: 'Comfort & Wellbeing' },
  { word: 'Goya', language: 'Urdu', flag: '🇵🇰', pronunciation: 'GOY-ah', meaning: 'The transporting suspension of disbelief that occurs in great storytelling — when fiction feels more real than reality.', example: 'A truly great novel produces goya — you forget you\'re reading and simply live inside the story.', category: 'Philosophy & Beauty' },
]

const CATEGORIES = [...new Set(WORDS.map(w => w.category))]
const langColors: Record<string, string> = { 'German': 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400', 'Japanese': 'bg-red-500/10 text-red-600 dark:text-red-400', 'Danish / Norwegian': 'bg-blue-500/10 text-blue-600 dark:text-blue-400', 'Norwegian': 'bg-blue-500/10 text-blue-600 dark:text-blue-400', 'Portuguese': 'bg-green-500/10 text-green-600 dark:text-green-400', 'French': 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400', 'Swedish': 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' }

export default function UntranslatableWordsPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Phrases', path: '/phrases' }, { name: 'Untranslatable Words', path: '/phrases/untranslatable-words' }]} />
      <WebPageSchema path="/phrases/untranslatable-words" name="Untranslatable Words — 100+ Words English Has No Word For" description="100+ beautiful untranslatable words from around the world with meanings and examples." type="CollectionPage" />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors"><Home className="w-4 h-4" /><span>Home</span></Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/phrases" className="hover:text-foreground transition-colors">Phrases</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">Untranslatable Words</span>
        </nav>

        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-2xl mb-4 text-3xl">🌍</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Untranslatable Words</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            {WORDS.length}+ beautiful words from around the world that English has no single word for — emotions, moments, and ways of seeing the world that other languages have named perfectly.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {[
              { flag: '🇩🇪', lang: 'German', count: WORDS.filter(w => w.language === 'German').length },
              { flag: '🇯🇵', lang: 'Japanese', count: WORDS.filter(w => w.language === 'Japanese').length },
              { flag: '🇵🇹', lang: 'Portuguese', count: WORDS.filter(w => w.language.includes('Portug')).length },
              { flag: '🇫🇷', lang: 'French', count: WORDS.filter(w => w.language === 'French').length },
            ].map(s => (
              <div key={s.lang} className="px-4 py-2 bg-muted/30 rounded-xl border text-sm">
                <span className="mr-1.5">{s.flag}</span><span className="font-semibold">{s.count}</span><span className="text-muted-foreground ml-1">{s.lang}</span>
              </div>
            ))}
          </div>
        </div>

        {CATEGORIES.map(cat => {
          const catIcons: Record<string, string> = { 'Comfort & Wellbeing': '🛋️', 'Melancholy & Longing': '🌧️', 'Happiness & Emotion': '😊', 'Social & Connection': '🤝', 'Love & Relationships': '❤️', 'Nature & Place': '🌿', 'Philosophy & Beauty': '✨', 'Work & Creativity': '🎨', 'Character & Strength': '💪' }
          const words = WORDS.filter(w => w.category === cat)
          return (
            <section key={cat} className="mb-10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{catIcons[cat] ?? '📌'}</span> {cat}
                <span className="text-sm font-normal text-muted-foreground">({words.length})</span>
              </h2>
              <div className="space-y-3">
                {words.map(w => (
                  <div key={w.word} className="p-4 bg-gradient-to-br from-muted/20 to-muted/5 rounded-xl border hover:border-primary/20 transition-all">
                    <div className="flex flex-wrap items-start gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{w.flag}</span>
                        <div>
                          <span className="font-bold text-lg">{w.word}</span>
                          <span className="ml-2 text-xs text-muted-foreground font-mono">/{w.pronunciation}/</span>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium border ${langColors[w.language] ?? 'bg-muted/40 text-muted-foreground border-muted/30'}`}>{w.language}</span>
                        {w.literal && <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20">lit. &quot;{w.literal}&quot;</span>}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{w.meaning}</p>
                    <p className="text-xs italic text-muted-foreground/80 border-l-2 border-primary/30 pl-3 leading-relaxed">{w.example}</p>
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        <section className="mb-10 p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
          <h2 className="text-xl font-bold mb-3">Why Do These Words Exist?</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">Language reflects culture — and cultures notice different things. Inuit languages have many words for snow because snow matters. Germans analyse social emotions precisely. Japanese culture values impermanence deeply, giving rise to mono no aware and wabi-sabi.</p>
          <p className="text-sm text-muted-foreground leading-relaxed">The philosopher Ludwig Wittgenstein wrote: &quot;The limits of my language mean the limits of my world.&quot; Learning untranslatable words doesn&apos;t just expand your vocabulary — it expands what you can feel and perceive.</p>
        </section>

        <section className="mb-10 p-4 md:p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-xl font-bold mb-5">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'What is the most famous untranslatable word?', a: '"Schadenfreude" (German) is the most widely known — pleasure from others\' misfortune. It\'s even entered common English usage. "Hygge" (Danish) and "Schadenfreude" are probably the most searched. "Saudade" (Portuguese) is beloved by poets and musicians worldwide.' },
              { q: 'Can untranslatable words be used in English?', a: 'Absolutely — many already have been. "Schadenfreude", "ennui", "joie de vivre", and "zeitgeist" are all borrowed directly from other languages because English had no equivalent. Language borrows what it needs.' },
              { q: 'What language has the most untranslatable words?', a: 'German is famous for compound words that capture specific concepts ("Torschlusspanik", "Fremdschämen", "Weltschmerz"). Japanese is remarkable for emotional nuance (mono no aware, wabi-sabi, ikigai). But every language has concepts others lack.' },
            ].map((faq, i) => (
              <div key={i} className="border-b border-muted/30 pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold mb-1.5">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/phrases" className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors"><BookOpen className="w-4 h-4" /> All Phrase Collections</Link>
          <Link href="/phrases/british-vs-american-english" className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-xl text-sm font-medium hover:bg-muted/50 border transition-colors">British vs American <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/ai-translate" className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-xl text-sm font-medium hover:bg-muted/50 border transition-colors">AI Translator <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
