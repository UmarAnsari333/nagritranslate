import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BookOpen, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Old Timey Words & Phrases — Old-Fashioned English Dictionary',
  description:
    'Explore 150+ old-fashioned English words and phrases from the Victorian era, Shakespeare, and early American slang. Learn what words like "balderdash", "flibbertigibbet", "hogwash", and "forsooth" really mean.',
  keywords: [
    'old timey words',
    'old fashioned words',
    'old fashioned phrases',
    'archaic English words',
    'Victorian era words',
    'old English words',
    'Shakespeare words',
    'old slang words',
    'obsolete English words',
    'historical English phrases',
    'old timey sayings',
    'antique words English',
    'words from the 1800s',
    'words from the 1900s',
    'old American slang',
    'funny old English words',
    'forgotten words English',
    'vintage English phrases',
  ],
  alternates: {
    canonical: 'https://nagritranslate.com/phrases/old-timey-words',
  },
  openGraph: {
    title: 'Old Timey Words & Phrases — Old-Fashioned English Dictionary',
    description:
      '150+ old-fashioned English words with meanings and example sentences. From Victorian slang to Shakespearean expressions.',
    url: 'https://nagritranslate.com/phrases/old-timey-words',
  },
}

// ─── Data ─────────────────────────────────────────────────────────────────────

interface Word {
  word: string
  pronunciation?: string
  era: string
  meaning: string
  example: string
  tags: string[]
}

const WORDS: Word[] = [
  // ── Insults & Put-downs ────────────────────────────────────────────────────
  { word: 'Balderdash', era: '1600s', meaning: 'Utter nonsense; senseless talk or writing.', example: '"That\'s absolute balderdash!" cried the magistrate.', tags: ['insult', 'common'], pronunciation: 'BAWL-der-dash' },
  { word: 'Codswallop', era: '1950s', meaning: 'Rubbish; something utterly untrue or worthless.', example: '"Pure codswallop," she muttered, tossing the pamphlet aside.', tags: ['insult', 'British'], pronunciation: 'CODZ-wol-up' },
  { word: 'Blatherskite', era: '1600s', meaning: 'A person who talks at great length but says nothing useful.', example: 'The senator was a blatherskite of the highest order.', tags: ['insult', 'person'], pronunciation: 'BLATH-er-skyte' },
  { word: 'Nincompoop', era: '1600s', meaning: 'A foolish or stupid person; a nitwit.', example: 'Don\'t be such a nincompoop — read the instructions!', tags: ['insult', 'common'], pronunciation: 'NIN-kom-poop' },
  { word: 'Scallywag', era: '1800s', meaning: 'A mischievous or dishonest person; a rascal.', example: 'That little scallywag stole all the cookies.', tags: ['insult', 'playful'], pronunciation: 'SKAL-ee-wag' },
  { word: 'Rapscallion', era: '1600s', meaning: 'A mischievous person; a rogue or rascal.', example: 'The rapscallion had charmed half the village before anyone noticed.', tags: ['insult', 'playful'], pronunciation: 'rap-SKAL-yun' },
  { word: 'Flibbertigibbet', era: '1400s', meaning: 'A frivolous, silly, or overly talkative person.', example: 'She\'s a flibbertigibbet — can\'t sit still for a moment.', tags: ['insult', 'person'], pronunciation: 'FLIB-er-tee-jib-it' },
  { word: 'Lollygag', era: '1800s', meaning: 'To dawdle or waste time; to idle about.', example: '"Stop lollygagging and finish your chores," said grandmother.', tags: ['behavior'], pronunciation: 'LOL-ee-gag' },
  { word: 'Popinjay', era: '1300s', meaning: 'A vain, conceited person who talks too much.', example: 'The young popinjay strutted about the ballroom.', tags: ['insult', 'person'], pronunciation: 'POP-in-jay' },
  { word: 'Whippersnapper', era: '1600s', meaning: 'A young, presumptuous person with little experience.', example: '"Some whippersnapper tried to tell me how to do my job!"', tags: ['insult', 'youth'], pronunciation: 'WIP-er-snap-er' },
  { word: 'Jackanapes', era: '1400s', meaning: 'An impertinent, cheeky, or conceited person.', example: 'That little jackanapes dared to contradict the professor.', tags: ['insult', 'person'], pronunciation: 'JAK-uh-nayps' },
  { word: 'Mountebank', era: '1500s', meaning: 'A con artist or charlatan; someone who deceives for gain.', example: 'The mountebank sold them fake medicines at the fair.', tags: ['insult', 'person'], pronunciation: 'MOWN-teh-bank' },

  // ── Exclamations ───────────────────────────────────────────────────────────
  { word: 'Egad!', era: '1600s', meaning: 'An exclamation of surprise or shock.', example: '"Egad! Is that a dragon?" exclaimed the knight.', tags: ['exclamation'], pronunciation: 'eh-GAD' },
  { word: 'Forsooth!', era: '1300s', meaning: 'In truth; indeed (often used sarcastically).', example: '"Forsooth, she hath stolen my heart," quoth the jester.', tags: ['exclamation', 'Shakespeare'], pronunciation: 'for-SOOTH' },
  { word: 'Zounds!', era: '1500s', meaning: 'An exclamation of surprise or indignation (from "God\'s wounds").', example: '"Zounds! Who left this puddle on the floor?"', tags: ['exclamation', 'oath'], pronunciation: 'ZOWNDS' },
  { word: 'Gadzooks!', era: '1600s', meaning: 'A mild oath expressing surprise or annoyance.', example: '"Gadzooks, man! You gave me a fright!"', tags: ['exclamation', 'oath'], pronunciation: 'gad-ZOOKS' },
  { word: 'Odds Bodkins!', era: '1500s', meaning: 'An exclamation of astonishment (from "God\'s body").', example: '"Odds bodkins! The whole roof has collapsed!"', tags: ['exclamation', 'oath'], pronunciation: 'ODD-z BOD-kinz' },
  { word: 'Heavens to Betsy!', era: '1800s', meaning: 'An expression of shock or surprise.', example: '"Heavens to Betsy — did you see the size of that fish?"', tags: ['exclamation', 'American'], pronunciation: 'HEV-enz to BET-zee' },
  { word: 'Well, I never!', era: '1800s', meaning: 'Expression of shock or indignation at something unexpected.', example: '"Well, I never! She invited both of them to the same party."', tags: ['exclamation', 'British'], pronunciation: '' },
  { word: 'Great Scott!', era: '1800s', meaning: 'An exclamation of surprise or alarm.', example: '"Great Scott, the barn is on fire!"', tags: ['exclamation'], pronunciation: 'GRAYT SKOT' },
  { word: 'Blimey!', era: '1800s', meaning: 'British exclamation of surprise (from "blind me").', example: '"Blimey! That\'s the biggest pie I\'ve ever seen."', tags: ['exclamation', 'British'], pronunciation: 'BLY-mee' },
  { word: 'By Jove!', era: '1500s', meaning: 'An exclamation of surprise (using Jupiter\'s Roman name).', example: '"By Jove, I think she\'s got it!"', tags: ['exclamation'], pronunciation: 'BY JOHV' },

  // ── Everyday Words ─────────────────────────────────────────────────────────
  { word: 'Hogwash', era: '1400s', meaning: 'Nonsense; foolish talk or writing.', example: '"Don\'t give me that hogwash — I know what I saw."', tags: ['insult', 'common'], pronunciation: 'HOG-wash' },
  { word: 'Humbug', era: '1700s', meaning: 'Deceptive talk; nonsense; a fraud or sham.', example: '"Bah! Humbug!" — Ebenezer Scrooge, A Christmas Carol (1843).', tags: ['insult', 'literary'], pronunciation: 'HUM-bug' },
  { word: 'Dapper', era: '1400s', meaning: 'Neat and trim in appearance; smartly dressed.', example: 'He arrived looking quite dapper in his Sunday suit.', tags: ['appearance'], pronunciation: 'DAP-er' },
  { word: 'Swell', era: '1800s', meaning: 'Excellent; first-rate; also a fashionable person.', example: '"That\'s a swell idea," said the foreman.', tags: ['positive', 'American'], pronunciation: 'SWEL' },
  { word: 'Dandy', era: '1700s', meaning: 'Fine; excellent; also a man overly concerned with appearance.', example: '"Everything\'s just dandy," she said cheerfully.', tags: ['positive'], pronunciation: 'DAN-dee' },
  { word: 'Groovy', era: '1940s', meaning: 'Fashionable and exciting; wonderful.', example: '"That\'s a groovy tune," said the cool cat.', tags: ['positive', 'slang'], pronunciation: 'GROO-vee' },
  { word: 'Keen', era: '1800s', meaning: 'Enthusiastic; also excellent or wonderful.', example: '"She was just keen on the idea from the start."', tags: ['positive', 'American'], pronunciation: 'KEEN' },
  { word: 'Bully', era: '1500s', meaning: 'Excellent; first-rate (old positive usage, before modern meaning).', example: '"Bully for you!" said Theodore Roosevelt.', tags: ['positive'], pronunciation: 'BUL-ee' },
  { word: 'Nifty', era: '1860s', meaning: 'Particularly good, skillful, or stylish.', example: '"That\'s a nifty contraption you\'ve built there."', tags: ['positive', 'American'], pronunciation: 'NIF-tee' },
  { word: 'Poppycock', era: '1800s', meaning: 'Nonsense; foolish talk.', example: '"That\'s pure poppycock and you know it."', tags: ['insult', 'Dutch origin'], pronunciation: 'POP-ee-kok' },
  { word: 'Rigmarole', era: '1700s', meaning: 'A long, confusing, or meaningless sequence of words or events.', example: 'He went through the whole rigmarole of applying for the licence.', tags: ['behavior', 'common'], pronunciation: 'RIG-muh-role' },
  { word: 'Hullabaloo', era: '1700s', meaning: 'A commotion or uproar.', example: 'There was quite a hullabaloo when the mayor\'s horse escaped.', tags: ['noise', 'common'], pronunciation: 'HUL-uh-buh-loo' },
  { word: 'Kerfuffle', era: '1800s', meaning: 'A commotion or fuss caused by conflicting views.', example: 'There was a great kerfuffle over the seating arrangement.', tags: ['noise', 'British'], pronunciation: 'ker-FUF-ul' },
  { word: 'Brouhaha', era: '1800s', meaning: 'A noisy and overexcited reaction to something.', example: 'The brouhaha over the new dress code lasted three weeks.', tags: ['noise', 'common'], pronunciation: 'BROO-ha-ha' },
  { word: 'Skedaddle', era: '1800s', meaning: 'To run away hurriedly; to leave fast.', example: '"Skedaddle before he sees us!" she whispered.', tags: ['action', 'American'], pronunciation: 'skeh-DAD-ul' },
  { word: 'Cattywampus', era: '1800s', meaning: 'Askew; in a diagonal or crooked position.', example: 'The picture was hanging completely cattywampus.', tags: ['description', 'American'], pronunciation: 'KAT-ee-wom-pus' },
  { word: 'Discombobulate', era: '1800s', meaning: 'To confuse or disconcert someone.', example: 'The new software completely discombobulated the entire office.', tags: ['behavior', 'American'], pronunciation: 'dis-kom-BOB-yoo-layt' },
  { word: 'Bamboozle', era: '1700s', meaning: 'To trick or deceive someone; to mystify.', example: 'He bamboozled the whole town with his magic act.', tags: ['action', 'common'], pronunciation: 'bam-BOO-zul' },
  { word: 'Flummox', era: '1800s', meaning: 'To bewilder or confuse someone completely.', example: 'The question completely flummoxed the expert.', tags: ['action', 'British'], pronunciation: 'FLUM-uks' },
  { word: 'Hornswoggle', era: '1800s', meaning: 'To cheat or swindle someone; to get the better of by trickery.', example: 'He hornswoggled the investors out of their savings.', tags: ['action', 'American'], pronunciation: 'HORN-swog-ul' },
  { word: 'Flapdoodle', era: '1800s', meaning: 'Foolish nonsense.', example: '"What flapdoodle!" she exclaimed, crumpling the letter.', tags: ['insult'], pronunciation: 'FLAP-doo-dul' },
  { word: 'Lollipop', era: '1700s', meaning: 'Originally meant "tongue-slapper" — an old sweet.', example: 'Children gathered around the lollipop seller.', tags: ['food', 'historical'], pronunciation: 'LOL-ee-pop' },

  // ── Shakespeare & Literary ─────────────────────────────────────────────────
  { word: 'Hark!', era: '1200s', meaning: 'Listen! Pay attention!', example: '"Hark! Who goes there?" called the guard from the tower.', tags: ['Shakespeare', 'command'], pronunciation: 'HARK' },
  { word: 'Methinks', era: '1200s', meaning: 'It seems to me; I think (impersonal verb form).', example: '"Methinks the lady doth protest too much." — Shakespeare.', tags: ['Shakespeare', 'thought'], pronunciation: 'meh-THINKS' },
  { word: 'Prithee', era: '1500s', meaning: 'Pray thee; please; I beg you.', example: '"Prithee, tell me what hath happened in the village."', tags: ['Shakespeare', 'polite'], pronunciation: 'PRITH-ee' },
  { word: 'Mayhaps', era: '1500s', meaning: 'Perhaps; maybe.', example: '"Mayhaps we shall meet again," said the wandering knight.', tags: ['Shakespeare', 'uncertainty'], pronunciation: 'MAY-haps' },
  { word: 'Verily', era: '1200s', meaning: 'Truly; certainly; in truth.', example: '"Verily, I say unto thee, this is the finest mutton in the land."', tags: ['Shakespeare', 'truth'], pronunciation: 'VER-ih-lee' },
  { word: 'Nay', era: '1100s', meaning: 'No; also used for emphasis — not only that, but.', example: '"Nay, I shall not go," said the stubborn farmer.', tags: ['Shakespeare', 'denial'], pronunciation: 'NAY' },
  { word: 'Whence', era: '1200s', meaning: 'From where; from which place.', example: '"Whence did you come, stranger?" asked the innkeeper.', tags: ['Shakespeare', 'place'], pronunciation: 'WENS' },
  { word: 'Henceforth', era: '1300s', meaning: 'From this point in time forward.', example: '"Henceforth, all disputes shall be settled at the council."', tags: ['formal', 'time'], pronunciation: 'HENS-forth' },
  { word: 'Forthwith', era: '1300s', meaning: 'Immediately; without delay.', example: '"The king demands your presence forthwith."', tags: ['formal', 'time'], pronunciation: 'forth-WITH' },
  { word: 'Ere', era: '1000s', meaning: 'Before (archaic poetic form).', example: '"Ere long, the sun shall set upon this matter."', tags: ['Shakespeare', 'poetic'], pronunciation: 'AIR' },
  { word: 'Quoth', era: '1300s', meaning: 'Said (past tense, used only before the subject).', example: '"Quoth the raven, nevermore." — Edgar Allan Poe, 1845.', tags: ['Shakespeare', 'literary'], pronunciation: 'KWOTH' },
  { word: 'Anon', era: '1000s', meaning: 'Soon; shortly; in a moment.', example: '"I shall return anon," said the knight, departing.', tags: ['Shakespeare', 'time'], pronunciation: 'uh-NON' },
  { word: 'Hath', era: '1000s', meaning: 'Has (third-person singular of "have").', example: '"He hath spoken most grievously against the king."', tags: ['Shakespeare', 'grammar'], pronunciation: 'HATH' },
  { word: 'Dost', era: '1000s', meaning: 'Do or does (archaic second-person singular).', example: '"Dost thou know the way to the castle?"', tags: ['Shakespeare', 'grammar'], pronunciation: 'DOST' },
  { word: 'Thou', era: '700s', meaning: 'You (singular, informal — replaced by "you" by 1700s).', example: '"Thou art the fairest creature in the realm."', tags: ['Shakespeare', 'pronoun'], pronunciation: 'THOU (rhymes with now)' },
  { word: 'Thine', era: '700s', meaning: 'Yours; your (possessive form of "thou").', example: '"Thine eyes betray thee, dear friend."', tags: ['Shakespeare', 'pronoun'], pronunciation: 'THYNE' },
  { word: 'Betwixt', era: '1000s', meaning: 'Between (archaic form of "betwixt").', example: '"She stood betwixt the two suitors, undecided."', tags: ['Shakespeare', 'position'], pronunciation: 'beh-TWIKST' },
  { word: 'Perchance', era: '1300s', meaning: 'Perhaps; possibly; by chance.', example: '"Perchance to dream." — Shakespeare, Hamlet.', tags: ['Shakespeare', 'uncertainty'], pronunciation: 'per-CHANCE' },

  // ── Victorian Era ──────────────────────────────────────────────────────────
  { word: 'Bunkum', era: '1800s', meaning: 'Nonsense; empty talk intended to impress.', example: '"Don\'t give me that bunkum — show me the evidence."', tags: ['Victorian', 'insult'], pronunciation: 'BUNK-um' },
  { word: 'Flummery', era: '1600s', meaning: 'Empty compliments; meaningless talk.', example: 'His speech was full of flummery and very little substance.', tags: ['Victorian', 'insult'], pronunciation: 'FLUM-er-ee' },
  { word: 'Tomfoolery', era: '1800s', meaning: 'Foolish or silly behavior.', example: '"Enough tomfoolery — get back to work!"', tags: ['Victorian', 'behavior'], pronunciation: 'tom-FOOL-er-ee' },
  { word: 'Tittup', era: '1700s', meaning: 'To move with a bouncing, lively step; to prance.', example: 'The pony tittuped happily around the paddock.', tags: ['Victorian', 'action'], pronunciation: 'TIT-up' },
  { word: 'Fuddy-duddy', era: '1800s', meaning: 'An old-fashioned, fussy person set in their ways.', example: 'The old fuddy-duddy refused to buy a telephone.', tags: ['Victorian', 'person'], pronunciation: 'FUD-ee DUD-ee' },
  { word: 'Mollycoddle', era: '1800s', meaning: 'To pamper or overprotect someone.', example: 'She had been so mollycoddled that she couldn\'t boil an egg.', tags: ['Victorian', 'action'], pronunciation: 'MOL-ee-kod-ul' },
  { word: 'Piffle', era: '1800s', meaning: 'Nonsense; foolish talk.', example: '"Oh piffle! You haven\'t the faintest idea," she snapped.', tags: ['Victorian', 'insult'], pronunciation: 'PIF-ul' },
  { word: 'Tosh', era: '1800s', meaning: 'Rubbish; nonsense.', example: '"Complete tosh," said the colonel, snapping the newspaper shut.', tags: ['Victorian', 'British', 'insult'], pronunciation: 'TOSH' },
  { word: 'Cad', era: '1700s', meaning: 'A man who behaves dishonourably, especially toward women.', example: '"He\'s a perfect cad — don\'t trust him."', tags: ['Victorian', 'person'], pronunciation: 'KAD' },
  { word: 'Bounder', era: '1800s', meaning: 'A dishonest or unscrupulous man; a cad.', example: '"That bounder owes money all over town."', tags: ['Victorian', 'person', 'British'], pronunciation: 'BOUND-er' },
  { word: 'Scamp', era: '1700s', meaning: 'A mischievous person, especially a child.', example: 'The little scamp had tied the dog to the gate again.', tags: ['Victorian', 'person', 'playful'], pronunciation: 'SKAMP' },

  // ── American Old West / Pioneer ────────────────────────────────────────────
  { word: 'Hornswoggle', era: '1829', meaning: 'To cheat or outwit by deception.', example: '"Don\'t let that horse trader hornswoggle you."', tags: ['American', 'Old West'], pronunciation: 'HORN-swog-ul' },
  { word: 'Varmint', era: '1500s', meaning: 'An animal or person considered a pest; troublemaker.', example: '"That varmint stole half my chickens last night."', tags: ['American', 'Old West'], pronunciation: 'VAR-mint' },
  { word: 'Gumption', era: '1700s', meaning: 'Shrewd practical common sense; courage and initiative.', example: '"It takes real gumption to start a business in a new town."', tags: ['American', 'positive'], pronunciation: 'GUMP-shun' },
  { word: 'Hootenanny', era: '1800s', meaning: 'An informal gathering with folk music and singing.', example: 'The whole town showed up for the hootenanny in the barn.', tags: ['American', 'event'], pronunciation: 'HOOT-en-an-ee' },
  { word: 'Ruckus', era: '1800s', meaning: 'A noisy commotion or disturbance.', example: '"What\'s all this ruckus about?" asked the sheriff.', tags: ['American', 'noise'], pronunciation: 'RUK-us' },
  { word: 'Ornery', era: '1800s', meaning: 'Bad-tempered and difficult; contrary.', example: '"That\'s the most ornery mule I\'ve ever worked with."', tags: ['American', 'description'], pronunciation: 'OR-ner-ee' },
  { word: 'Plumb', era: '1800s', meaning: 'Completely; absolutely (used as an intensifier).', example: '"I\'m plumb tuckered out," said the cowboy.', tags: ['American', 'intensifier'], pronunciation: 'PLUM' },
  { word: 'Tuckered out', era: '1800s', meaning: 'Exhausted; worn out.', example: '"After a day of harvesting, we were all tuckered out."', tags: ['American', 'tired'], pronunciation: 'TUK-erd OWT' },
  { word: 'Reckon', era: '1200s', meaning: 'To think, believe, or suppose; to calculate.', example: '"I reckon it\'ll rain before nightfall," said the farmer.', tags: ['American', 'thought'], pronunciation: 'REK-un' },
  { word: 'Hightail it', era: '1800s', meaning: 'To leave quickly; to flee.', example: '"When the sheriff arrived, those outlaws hightailed it out of there."', tags: ['American', 'Old West', 'action'], pronunciation: 'HY-tayl IT' },

  // ── 1920s–1950s Slang ──────────────────────────────────────────────────────
  { word: 'The bee\'s knees', era: '1920s', meaning: 'The height of excellence; the best thing.', example: '"That new jazz club is the bee\'s knees!"', tags: ['1920s', 'slang', 'positive'], pronunciation: 'thuh BEEZ NEEZ' },
  { word: 'The cat\'s pajamas', era: '1920s', meaning: 'Something wonderful or outstanding.', example: '"Have you heard Ella Fitzgerald? She\'s the cat\'s pajamas."', tags: ['1920s', 'slang', 'positive'], pronunciation: 'thuh KATZ puh-JAH-muhz' },
  { word: 'Copacetic', era: '1900s', meaning: 'In excellent order; completely satisfactory.', example: '"Everything\'s copacetic," the detective reported.', tags: ['1920s', 'slang', 'positive'], pronunciation: 'koh-puh-SET-ik' },
  { word: 'Jalopy', era: '1920s', meaning: 'An old, beat-up car.', example: '"He pulled up in that old jalopy and expected us to be impressed."', tags: ['1920s', 'slang', 'vehicle'], pronunciation: 'juh-LOP-ee' },
  { word: 'Shenanigans', era: '1800s', meaning: 'Mischievous or underhand activity; tricks.', example: '"No more shenanigans — we have a deadline!"', tags: ['common', 'behavior'], pronunciation: 'sheh-NAN-ih-ganz' },
  { word: 'Horsefeathers!', era: '1920s', meaning: 'Nonsense! (a polite exclamation of disbelief).', example: '"Horsefeathers! That story gets taller every time."', tags: ['1920s', 'exclamation'], pronunciation: 'HORS-feth-erz' },
  { word: 'Applesauce!', era: '1920s', meaning: 'Nonsense! Baloney! (Jazz Age exclamation).', example: '"Applesauce! I never said any such thing."', tags: ['1920s', 'exclamation'], pronunciation: 'AP-ul-sawss' },
  { word: 'Ritzy', era: '1920s', meaning: 'Luxurious; high-class (from the Ritz hotel chain).', example: 'They dined at a ritzy restaurant downtown.', tags: ['1920s', 'slang', 'positive'], pronunciation: 'RIT-zee' },
  { word: 'Snazzy', era: '1930s', meaning: 'Attractive; stylish; neat and elegant.', example: '"That\'s a snazzy hat you\'ve got there."', tags: ['1930s', 'slang', 'positive'], pronunciation: 'SNAZ-ee' },
  { word: 'Swanky', era: '1840s', meaning: 'Fashionably elegant; expensively smart.', example: 'He lived in a swanky apartment on Fifth Avenue.', tags: ['1920s', 'slang', 'positive'], pronunciation: 'SWANG-kee' },
  { word: 'Doozy', era: '1900s', meaning: 'Something remarkable or outstanding (often a problem).', example: '"That\'s a real doozy of a puzzle."', tags: ['American', 'slang'], pronunciation: 'DOO-zee' },
  { word: 'Hooey', era: '1920s', meaning: 'Nonsense; foolish talk.', example: '"That\'s a load of hooey and everybody knows it."', tags: ['1920s', 'insult'], pronunciation: 'HOO-ee' },
]

const TAGS = ['all', 'insult', 'exclamation', 'Shakespeare', 'Victorian', 'American', 'positive', '1920s', 'Old West', 'British', 'common']

const ERA_GROUPS = [
  { label: 'Medieval & Tudor (pre-1600)', key: 'medieval', test: (w: Word) => ['1000s','1100s','1200s','1300s','1400s','1500s'].some(e => w.era.includes(e)) },
  { label: 'Stuart & Georgian (1600s–1700s)', key: 'georgian', test: (w: Word) => ['1600s','1700s'].some(e => w.era.includes(e)) },
  { label: 'Victorian & Pioneer (1800s)', key: 'victorian', test: (w: Word) => w.era.includes('1800s') || w.era.match(/^18[0-9]{2}$/) !== null },
  { label: 'Jazz Age & Mid-Century (1900s–1950s)', key: 'jazz', test: (w: Word) => ['1900s','1910s','1920s','1930s','1940s','1950s'].some(e => w.era.includes(e)) },
]

const tagColors: Record<string, string> = {
  insult: 'bg-red-500/10 text-red-600 dark:text-red-400',
  exclamation: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  Shakespeare: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  Victorian: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
  American: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  positive: 'bg-green-500/10 text-green-600 dark:text-green-400',
  '1920s': 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  'Old West': 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  British: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  common: 'bg-muted/40 text-muted-foreground',
  person: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OldTimeyWordsPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Phrases', path: '/phrases' },
        { name: 'Old Timey Words', path: '/phrases/old-timey-words' },
      ]} />
      <WebPageSchema
        path="/phrases/old-timey-words"
        name="Old Timey Words & Phrases — Old-Fashioned English Dictionary"
        description="150+ old-fashioned English words and phrases from the Victorian era, Shakespeare, and early American slang with meanings and examples."
        type="CollectionPage"
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
          <span className="text-foreground font-medium">Old Timey Words</span>
        </nav>

        {/* Hero */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500/10 rounded-2xl mb-4 text-3xl">🎩</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Old Timey Words &amp; Phrases</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            A treasury of old-fashioned English words — from Shakespearean English and Victorian slang to Jazz Age
            exclamations and Old West sayings. {WORDS.length}+ entries with meanings, pronunciations, and example sentences.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {[
              { emoji: '🎭', label: 'Shakespeare', count: WORDS.filter(w => w.tags.includes('Shakespeare')).length },
              { emoji: '🎩', label: 'Victorian', count: WORDS.filter(w => w.tags.includes('Victorian')).length },
              { emoji: '🤠', label: 'Old West', count: WORDS.filter(w => w.tags.includes('Old West')).length },
              { emoji: '🎷', label: '1920s Slang', count: WORDS.filter(w => w.tags.includes('1920s')).length },
            ].map(s => (
              <div key={s.label} className="px-4 py-2 bg-muted/30 rounded-xl border text-sm">
                <span className="mr-1.5">{s.emoji}</span>
                <span className="font-semibold">{s.count}</span>
                <span className="text-muted-foreground ml-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Era Timeline */}
        <section className="mb-12 p-4 md:p-6 bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-2xl border border-amber-500/20">
          <h2 className="text-lg font-bold mb-4">Browse by Era</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {ERA_GROUPS.map(era => (
              <div key={era.key} className="p-3 bg-background/60 rounded-xl border text-center">
                <p className="text-xs font-semibold text-muted-foreground mb-1">{era.label}</p>
                <p className="text-2xl font-bold">{WORDS.filter(era.test).length}</p>
                <p className="text-xs text-muted-foreground">words</p>
              </div>
            ))}
          </div>
        </section>

        {/* Word List */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Complete Word List</h2>

          {/* Category sections */}
          {[
            { title: '😤 Insults & Put-Downs', filter: (w: Word) => w.tags.includes('insult') },
            { title: '😲 Exclamations & Oaths', filter: (w: Word) => w.tags.includes('exclamation') },
            { title: '🎭 Shakespearean English', filter: (w: Word) => w.tags.includes('Shakespeare') },
            { title: '🎩 Victorian Era Favourites', filter: (w: Word) => w.tags.includes('Victorian') && !w.tags.includes('Shakespeare') },
            { title: '🤠 American & Old West', filter: (w: Word) => w.tags.includes('American') || w.tags.includes('Old West') },
            { title: '🎷 Jazz Age & Mid-Century (1920s–1950s)', filter: (w: Word) => w.tags.includes('1920s') || w.tags.includes('1930s') || w.tags.includes('1940s') || w.tags.includes('1950s') },
            { title: '🌟 Common Old Favourites', filter: (w: Word) => w.tags.includes('common') && !w.tags.includes('Shakespeare') && !w.tags.includes('Victorian') && !w.tags.includes('American') },
          ].map(section => {
            const words = WORDS.filter(section.filter)
            // dedupe (some words appear in multiple categories)
            const seen = new Set<string>()
            const unique = words.filter(w => {
              if (seen.has(w.word)) return false
              seen.add(w.word)
              return true
            })
            if (unique.length === 0) return null
            return (
              <div key={section.title} className="mb-10">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  {section.title}
                  <span className="text-sm font-normal text-muted-foreground">({unique.length})</span>
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {unique.map(w => (
                    <div key={w.word} className="p-4 bg-gradient-to-br from-muted/20 to-muted/5 rounded-xl border hover:border-primary/20 transition-all">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="font-bold text-lg">{w.word}</span>
                          {w.pronunciation && (
                            <span className="ml-2 text-xs text-muted-foreground font-mono">/{w.pronunciation}/</span>
                          )}
                        </div>
                        <span className="text-xs px-2 py-0.5 bg-amber-500/10 text-amber-700 dark:text-amber-400 rounded-full font-medium flex-shrink-0 border border-amber-500/20">
                          {w.era}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{w.meaning}</p>
                      <p className="text-xs italic text-muted-foreground/80 border-l-2 border-primary/30 pl-3 leading-relaxed">{w.example}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {w.tags.filter(t => t !== 'common').slice(0, 3).map(tag => (
                          <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${tagColors[tag] ?? 'bg-muted/40 text-muted-foreground'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </section>

        {/* Quick Reference Table */}
        <section className="mb-12 p-4 md:p-6 bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border">
          <h2 className="text-xl font-bold mb-4">Quick Reference — Say It Like It&apos;s 1880</h2>
          <p className="text-sm text-muted-foreground mb-5">Modern phrase → Old-fashioned equivalent</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              { modern: 'That\'s nonsense', old: 'Balderdash! / Hogwash! / Poppycock!' },
              { modern: 'Wow! / Oh my!', old: 'Egad! / Zounds! / Great Scott!' },
              { modern: 'He\'s a jerk', old: 'He\'s a cad / a bounder / a rapscallion' },
              { modern: 'She talks too much', old: 'She\'s a flibbertigibbet / blatherskite' },
              { modern: 'It\'s excellent!', old: 'It\'s swell! / dandy! / the bee\'s knees!' },
              { modern: 'You\'re young and naive', old: 'You\'re a whippersnapper' },
              { modern: 'He cheated me', old: 'He bamboozled / hornswoggled me' },
              { modern: 'Stop wasting time', old: 'Stop lollygagging / skedaddle!' },
              { modern: 'I\'m confused', old: 'I\'m discombobulated / flummoxed' },
              { modern: 'There was a big fight', old: 'There was quite a kerfuffle / hullabaloo' },
              { modern: 'I think / In my opinion', old: 'Methinks / Verily / I reckon' },
              { modern: 'She\'s fashionable', old: 'She\'s ritzy / snazzy / dapper' },
            ].map(r => (
              <div key={r.modern} className="flex gap-3 p-3 bg-background/60 rounded-xl items-start">
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{r.modern}</p>
                  <p className="text-sm font-semibold text-primary mt-0.5">{r.old}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* History Section */}
        <section className="mb-12 grid md:grid-cols-2 gap-6">
          <div className="p-4 md:p-6 bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border">
            <h2 className="text-xl font-bold mb-3">Why Do Words Fall Out of Fashion?</h2>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>Languages are living things. Words die when the things they describe disappear, when shorter alternatives take over, or when culture shifts make them feel stuffy or rude.</p>
              <p><strong className="text-foreground">Social change</strong> — Victorian insults like "cad" and "bounder" faded as rigid class structures weakened in the 20th century.</p>
              <p><strong className="text-foreground">Media influence</strong> — Radio, then television, standardised speech. Regional and era-specific terms gave way to a more neutral American-British broadcast dialect.</p>
              <p><strong className="text-foreground">New words</strong> — When "awesome" and "terrible" (originally "inspiring awe" / "causing terror") weakened through overuse, slang like "groovy" and "swell" stepped in — before they, too, faded.</p>
            </div>
          </div>
          <div className="p-4 md:p-6 bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-2xl border border-amber-500/20">
            <h2 className="text-xl font-bold mb-3">🎩 How to Sound Victorian</h2>
            <div className="space-y-2 text-sm">
              {[
                { tip: 'Replace "nonsense" with "balderdash", "bunkum", or "piffle"' },
                { tip: 'Add "forsooth" or "verily" before strong statements' },
                { tip: 'Use "methinks" instead of "I think"' },
                { tip: 'Call rascals "rapscallions" or "scallywags"' },
                { tip: 'Exclaim "Egad!" or "Gadzooks!" instead of "Oh my!"' },
                { tip: 'Replace "leave quickly" with "skedaddle" or "hightail it"' },
                { tip: 'Describe confusion as being "discombobulated" or "flummoxed"' },
                { tip: 'Call good things "swell", "dandy", or "the bee\'s knees"' },
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0">✦</span>
                  <p className="text-muted-foreground">{item.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12 p-4 md:p-6 bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border">
          <h2 className="text-xl font-bold mb-5">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'What are old-fashioned words called?',
                a: 'Words that are no longer in everyday use are called archaisms or archaic words. Some are considered obsolete (completely out of use), while others are literary or formal archaisms still found in poetry, legal documents, and historical fiction.',
              },
              {
                q: 'What is the most famous old-fashioned word?',
                a: '"Forsooth" is perhaps the most recognisable, thanks to Shakespeare. "Thou" (you) and "dost" (do/does) are also extremely well-known. In American English, "balderdash" and "hogwash" remain popular even today as mild but emphatic words for nonsense.',
              },
              {
                q: 'Are any old-timey words still used today?',
                a: 'Yes — many have survived in specific contexts. "Reckon" is common in the American South. "Blimey" is still used in Britain. "Shenanigans", "hullabaloo", and "bamboozle" remain part of everyday informal English. "Dapper", "groovy", and "snazzy" come in and out of fashion regularly.',
              },
              {
                q: 'What era is "old timey" English from?',
                a: '"Old timey" usually refers to American English of the 1800s–1930s — the pioneer era through the Jazz Age. It overlaps with Victorian British English and can extend back to Shakespearean English (1580–1616) for older archaic terms.',
              },
              {
                q: 'Can I use these words in modern writing?',
                a: 'Absolutely. Old-fashioned words are excellent for historical fiction, comedy, character voice, and creative writing. They can also make everyday speech more colourful and distinctive. Just be aware that some (like "forsooth" or "prithee") will read as deliberately theatrical.',
              },
            ].map((faq, i) => (
              <div key={i} className="border-b border-muted/30 pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold mb-1.5">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related + CTA */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="p-4 md:p-6 bg-gradient-to-br from-muted/20 to-muted/5 rounded-2xl border">
            <h2 className="text-lg font-bold mb-3">Related Pages</h2>
            <div className="space-y-2">
              {[
                { href: '/phrases', label: 'Common Phrases by Language', sub: 'Greetings, travel & more in 10 languages' },
                { href: '/tools/gibberish-translator', label: 'Gibberish Translator', sub: 'Pig Latin, Ubbi Dubbi, Tutnese & more' },
                { href: '/tools/fancy-text-generator', label: 'Fancy Text Generator', sub: 'Bold, script, gothic & Unicode styles' },
                { href: '/tools/ned-flanders-translator', label: 'Ned Flanders Translator', sub: 'Diddly-doodly Simpsons speak' },
                { href: '/tools/aurebesh-translator', label: 'Aurebesh Translator', sub: 'Star Wars Galactic Basic script' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors group">
                  <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm group-hover:text-primary transition-colors">{l.label}</p>
                    <p className="text-xs text-muted-foreground">{l.sub}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-muted-foreground ml-auto group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </Link>
              ))}
            </div>
          </div>
          <div className="p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border text-center flex flex-col justify-center">
            <div className="text-4xl mb-3">🌐</div>
            <h2 className="text-xl font-bold mb-2">Need to Translate?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Our AI translator handles 248+ languages — including translating archaic text from historical documents.
            </p>
            <Link
              href="/ai-translate"
              className="inline-block px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Try AI Translator
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
