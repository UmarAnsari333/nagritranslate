import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'English Words Borrowed from Other Languages | Nagri Translate',
  description:
    'Explore everyday English words borrowed from French, Latin, Arabic, Hindi, Japanese, and more. Discover the fascinating origins hiding in common vocabulary.',
  alternates: {
    canonical: 'https://nagritranslate.com/phrases/words-borrowed-from-other-languages',
  },
}

interface BorrowedWord {
  word: string
  sourceLanguage: string
  sourceWord: string
  originalMeaning: string
  englishMeaning: string
  era?: string
  flag: string
}

const WORDS: BorrowedWord[] = [
  // French
  { word: 'Beef', sourceLanguage: 'French', flag: '🇫🇷', sourceWord: 'bœuf', originalMeaning: 'ox/cattle', englishMeaning: 'meat from a cow', era: '11th century' },
  { word: 'Pork', sourceLanguage: 'French', flag: '🇫🇷', sourceWord: 'porc', originalMeaning: 'pig', englishMeaning: 'meat from a pig', era: '13th century' },
  { word: 'Bouquet', sourceLanguage: 'French', flag: '🇫🇷', sourceWord: 'bouquet', originalMeaning: 'bunch of flowers', englishMeaning: 'a bunch of flowers', era: '17th century' },
  { word: 'Ballet', sourceLanguage: 'French', flag: '🇫🇷', sourceWord: 'ballet', originalMeaning: 'a dance', englishMeaning: 'a form of dance performance', era: '17th century' },
  { word: 'Cliché', sourceLanguage: 'French', flag: '🇫🇷', sourceWord: 'cliché', originalMeaning: 'a printing plate (stereotyped)', englishMeaning: 'an overused expression', era: '19th century' },
  { word: 'Fiancé', sourceLanguage: 'French', flag: '🇫🇷', sourceWord: 'fiancé', originalMeaning: 'betrothed', englishMeaning: 'a person engaged to be married', era: '19th century' },
  { word: 'Entrepreneur', sourceLanguage: 'French', flag: '🇫🇷', sourceWord: 'entrepreneur', originalMeaning: 'one who undertakes', englishMeaning: 'a person who starts a business', era: '18th century' },
  { word: 'Rendezvous', sourceLanguage: 'French', flag: '🇫🇷', sourceWord: 'rendez-vous', originalMeaning: 'present yourselves', englishMeaning: 'a meeting at a set time and place', era: '16th century' },

  // Latin
  { word: 'Animal', sourceLanguage: 'Latin', flag: '🏛️', sourceWord: 'animalis', originalMeaning: 'having breath', englishMeaning: 'a living creature', era: '14th century' },
  { word: 'Agenda', sourceLanguage: 'Latin', flag: '🏛️', sourceWord: 'agenda', originalMeaning: 'things to be done', englishMeaning: 'a list of items to be discussed', era: '17th century' },
  { word: 'Camera', sourceLanguage: 'Latin', flag: '🏛️', sourceWord: 'camera obscura', originalMeaning: 'dark chamber', englishMeaning: 'a device for capturing images', era: '18th century' },
  { word: 'Bonus', sourceLanguage: 'Latin', flag: '🏛️', sourceWord: 'bonus', originalMeaning: 'good', englishMeaning: 'an extra payment or benefit', era: '18th century' },
  { word: 'Exit', sourceLanguage: 'Latin', flag: '🏛️', sourceWord: 'exit', originalMeaning: 'he/she goes out', englishMeaning: 'a way out; to leave', era: '16th century' },
  { word: 'Virus', sourceLanguage: 'Latin', flag: '🏛️', sourceWord: 'virus', originalMeaning: 'poison/venom', englishMeaning: 'an infectious agent', era: '14th century' },
  { word: 'Alibi', sourceLanguage: 'Latin', flag: '🏛️', sourceWord: 'alibi', originalMeaning: 'elsewhere', englishMeaning: 'a claim of being elsewhere during a crime', era: '18th century' },

  // Arabic
  { word: 'Algebra', sourceLanguage: 'Arabic', flag: '🇸🇦', sourceWord: 'al-jabr', originalMeaning: 'reunion of broken parts', englishMeaning: 'a branch of mathematics', era: '16th century' },
  { word: 'Alcohol', sourceLanguage: 'Arabic', flag: '🇸🇦', sourceWord: 'al-kuḥl', originalMeaning: 'the kohl (eye powder)', englishMeaning: 'an intoxicating drink', era: '16th century' },
  { word: 'Coffee', sourceLanguage: 'Arabic', flag: '🇸🇦', sourceWord: 'qahwa', originalMeaning: 'a type of wine', englishMeaning: 'a hot drink made from beans', era: '17th century' },
  { word: 'Magazine', sourceLanguage: 'Arabic', flag: '🇸🇦', sourceWord: 'makhazin', originalMeaning: 'storehouses', englishMeaning: 'a periodical publication', era: '16th century' },
  { word: 'Sugar', sourceLanguage: 'Arabic', flag: '🇸🇦', sourceWord: 'sukkar', originalMeaning: 'sugar (from Sanskrit)', englishMeaning: 'a sweet crystalline substance', era: '13th century' },
  { word: 'Sofa', sourceLanguage: 'Arabic', flag: '🇸🇦', sourceWord: 'suffah', originalMeaning: 'a raised stone platform or bench', englishMeaning: 'an upholstered seat', era: '17th century' },
  { word: 'Safari', sourceLanguage: 'Arabic', flag: '🇸🇦', sourceWord: 'safar', originalMeaning: 'journey/travel', englishMeaning: 'an overland trip to observe wildlife', era: '19th century' },

  // Hindi / Sanskrit
  { word: 'Shampoo', sourceLanguage: 'Hindi', flag: '🇮🇳', sourceWord: 'chāmpo', originalMeaning: 'to massage', englishMeaning: 'a liquid soap for washing hair', era: '18th century' },
  { word: 'Jungle', sourceLanguage: 'Hindi', flag: '🇮🇳', sourceWord: 'jangal', originalMeaning: 'rough uncultivated land', englishMeaning: 'an area of dense tropical forest', era: '18th century' },
  { word: 'Thug', sourceLanguage: 'Hindi', flag: '🇮🇳', sourceWord: 'ṭhag', originalMeaning: 'swindler, cheat', englishMeaning: 'a violent criminal', era: '19th century' },
  { word: 'Bungalow', sourceLanguage: 'Hindi', flag: '🇮🇳', sourceWord: 'bangla', originalMeaning: 'house in the Bengal style', englishMeaning: 'a low, single-story house', era: '17th century' },
  { word: 'Bandana', sourceLanguage: 'Hindi', flag: '🇮🇳', sourceWord: 'bandhani', originalMeaning: 'a tie-dye technique', englishMeaning: 'a large handkerchief', era: '18th century' },
  { word: 'Avatar', sourceLanguage: 'Sanskrit', flag: '🇮🇳', sourceWord: 'avatāra', originalMeaning: 'descent (of a deity)', englishMeaning: 'a digital representation of a person', era: '20th century' },

  // Japanese
  { word: 'Emoji', sourceLanguage: 'Japanese', flag: '🇯🇵', sourceWord: '絵文字 (e-moji)', originalMeaning: 'picture character', englishMeaning: 'a small digital image expressing emotion', era: '21st century' },
  { word: 'Karate', sourceLanguage: 'Japanese', flag: '🇯🇵', sourceWord: '空手 (karate)', originalMeaning: 'empty hand', englishMeaning: 'a martial art using hand strikes', era: '20th century' },
  { word: 'Tsunami', sourceLanguage: 'Japanese', flag: '🇯🇵', sourceWord: '津波 (tsunami)', originalMeaning: 'harbour wave', englishMeaning: 'a giant sea wave caused by an earthquake', era: '19th century' },
  { word: 'Anime', sourceLanguage: 'Japanese', flag: '🇯🇵', sourceWord: 'アニメ (anime)', originalMeaning: 'animation (borrowed back from English!)', englishMeaning: 'Japanese animated films and TV shows', era: '20th century' },
  { word: 'Tycoon', sourceLanguage: 'Japanese', flag: '🇯🇵', sourceWord: '大君 (taikun)', originalMeaning: 'great lord', englishMeaning: 'a wealthy and powerful businessperson', era: '19th century' },

  // German
  { word: 'Kindergarten', sourceLanguage: 'German', flag: '🇩🇪', sourceWord: 'Kindergarten', originalMeaning: 'children\'s garden', englishMeaning: 'a school for young children', era: '19th century' },
  { word: 'Hamburger', sourceLanguage: 'German', flag: '🇩🇪', sourceWord: 'Hamburger', originalMeaning: 'from Hamburg', englishMeaning: 'a grilled patty in a bun', era: '19th century' },
  { word: 'Pretzel', sourceLanguage: 'German', flag: '🇩🇪', sourceWord: 'Brezel', originalMeaning: 'from Latin bracchiatus (arm)', englishMeaning: 'a baked bread in a knot shape', era: '19th century' },
  { word: 'Doppelganger', sourceLanguage: 'German', flag: '🇩🇪', sourceWord: 'Doppelgänger', originalMeaning: 'double walker', englishMeaning: 'a person\'s look-alike', era: '19th century' },
  { word: 'Angst', sourceLanguage: 'German', flag: '🇩🇪', sourceWord: 'Angst', originalMeaning: 'fear', englishMeaning: 'a feeling of deep anxiety', era: '20th century' },
  { word: 'Wanderlust', sourceLanguage: 'German', flag: '🇩🇪', sourceWord: 'Wanderlust', originalMeaning: 'desire to wander', englishMeaning: 'a strong desire to travel', era: '20th century' },

  // Italian
  { word: 'Piano', sourceLanguage: 'Italian', flag: '🇮🇹', sourceWord: 'pianoforte', originalMeaning: 'soft-loud', englishMeaning: 'a musical keyboard instrument', era: '18th century' },
  { word: 'Umbrella', sourceLanguage: 'Italian', flag: '🇮🇹', sourceWord: 'ombrella', originalMeaning: 'little shade', englishMeaning: 'a device for protection from rain', era: '17th century' },
  { word: 'Ghetto', sourceLanguage: 'Italian', flag: '🇮🇹', sourceWord: 'ghetto', originalMeaning: 'foundry (the area in Venice)', englishMeaning: 'a part of a city occupied by a minority group', era: '16th century' },
  { word: 'Carnival', sourceLanguage: 'Italian', flag: '🇮🇹', sourceWord: 'carnevale', originalMeaning: 'farewell to meat', englishMeaning: 'a festive period of celebration', era: '16th century' },

  // Spanish / Portuguese
  { word: 'Alligator', sourceLanguage: 'Spanish', flag: '🇪🇸', sourceWord: 'el lagarto', originalMeaning: 'the lizard', englishMeaning: 'a large reptile', era: '16th century' },
  { word: 'Barbecue', sourceLanguage: 'Spanish', flag: '🇪🇸', sourceWord: 'barbacoa', originalMeaning: 'a wooden frame for cooking/sleeping', englishMeaning: 'cooking meat over open flame', era: '17th century' },
  { word: 'Tornado', sourceLanguage: 'Spanish', flag: '🇪🇸', sourceWord: 'tronada', originalMeaning: 'thunderstorm', englishMeaning: 'a violent rotating column of air', era: '16th century' },
  { word: 'Avocado', sourceLanguage: 'Spanish', flag: '🇪🇸', sourceWord: 'aguacate', originalMeaning: 'from Nahuatl ahuacatl (testicle)', englishMeaning: 'a green fruit with a buttery texture', era: '17th century' },
]

const LANGUAGES = ['French', 'Latin', 'Arabic', 'Hindi', 'Sanskrit', 'Japanese', 'German', 'Italian', 'Spanish']

const LANGUAGE_FLAGS: Record<string, string> = {
  French: '🇫🇷', Latin: '🏛️', Arabic: '🇸🇦', Hindi: '🇮🇳', Sanskrit: '🇮🇳',
  Japanese: '🇯🇵', German: '🇩🇪', Italian: '🇮🇹', Spanish: '🇪🇸', Portuguese: '🇵🇹',
}

export default function WordsBorrowedPage() {
  const byLanguage = LANGUAGES.reduce<Record<string, BorrowedWord[]>>((acc, lang) => {
    acc[lang] = WORDS.filter(w => w.sourceLanguage === lang)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Phrases', path: '/phrases' },
        { name: 'Words Borrowed from Other Languages', path: '/phrases/words-borrowed-from-other-languages' },
      ]} />
      <WebPageSchema
        path="/phrases/words-borrowed-from-other-languages"
        name="English Words Borrowed from Other Languages | Nagri Translate"
        description="Explore everyday English words borrowed from French, Arabic, Hindi, Japanese, German, and more."
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
          <span className="text-foreground font-medium">Words Borrowed from Other Languages</span>
        </nav>

        {/* Hero */}
        <div className="mb-10 text-center">
          <div className="text-5xl mb-4">🌍</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">English Words Borrowed from Other Languages</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            English is a linguistic magpie — it steals words from everywhere. Over 60% of English vocabulary comes from other languages.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span className="bg-muted/30 px-3 py-1 rounded-full">{WORDS.length}+ borrowed words</span>
            <span className="bg-muted/30 px-3 py-1 rounded-full">{LANGUAGES.length} source languages</span>
            <span className="bg-muted/30 px-3 py-1 rounded-full">Origins from 10th–21st century</span>
          </div>
        </div>

        {/* Stats banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'From French & Latin', value: '60%' },
            { label: 'From Germanic', value: '26%' },
            { label: 'From Greek', value: '6%' },
            { label: 'From other languages', value: '8%' },
          ].map(s => (
            <div key={s.label} className="text-center p-4 bg-muted/10 rounded-xl border">
              <p className="text-2xl font-bold text-primary">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* By language */}
        {LANGUAGES.map(lang => (
          byLanguage[lang].length > 0 && (
            <section key={lang} className="mb-12">
              <h2 className="text-xl font-bold mb-4 pb-2 border-b flex items-center gap-2">
                <span className="text-2xl">{LANGUAGE_FLAGS[lang]}</span>
                From {lang}
                <span className="ml-auto text-sm font-normal text-muted-foreground">{byLanguage[lang].length} words</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {byLanguage[lang].map(w => (
                  <div key={w.word} className="p-4 bg-muted/10 rounded-xl border border-muted/30 hover:border-primary/30 transition-colors">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-base font-bold">{w.word}</h3>
                      {w.era && <span className="text-xs text-muted-foreground">{w.era}</span>}
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-mono">{w.sourceWord}</span>
                      <span className="text-xs text-muted-foreground">"{w.originalMeaning}"</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{w.englishMeaning}</p>
                  </div>
                ))}
              </div>
            </section>
          )
        ))}

        {/* Why section */}
        <section className="mb-12 p-6 bg-muted/10 rounded-2xl border">
          <h2 className="text-xl font-bold mb-4">Why Did English Borrow So Many Words?</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <p>
              <strong className="text-foreground">The Norman Conquest (1066):</strong> When William the Conqueror invaded England, French became the language of the court and aristocracy. Over centuries, French and Old English merged, giving modern English an enormous vocabulary where both Anglo-Saxon and French words survive (ask/inquire, wish/desire, buy/purchase).
            </p>
            <p>
              <strong className="text-foreground">The British Empire:</strong> As Britain colonized much of the world, it brought back words from India (shampoo, thug, bungalow), Australia (kangaroo), and Africa (safari). Trade routes added Arabic, Malay, and Chinese contributions.
            </p>
            <p>
              <strong className="text-foreground">Science & the Renaissance:</strong> Latin and Greek became the languages of scholarship — almost all scientific, medical, and legal terms come from these roots. New inventions needed new words, and classical languages provided the building blocks.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What percentage of English words are borrowed?',
                a: 'Roughly 80% of English vocabulary is borrowed from other languages. About 29% comes from French, 29% from Latin, 26% from Germanic languages, 6% from Greek, and the rest from many others.',
              },
              {
                q: 'Which language has contributed the most words to English?',
                a: 'French and Latin together account for the largest share, largely because of the Norman Conquest in 1066 and centuries of using Latin in the church, law, and science.',
              },
              {
                q: 'Is English still borrowing words from other languages?',
                a: 'Yes, constantly. Emoji from Japanese, schadenfreude from German, détente from French, and bona fide from Latin are all recent enough to feel borrowed. English shows no signs of stopping.',
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
