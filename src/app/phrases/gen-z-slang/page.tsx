import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'Gen Z & Internet Slang Dictionary | Nagri Translate',
  description:
    'Decode Gen Z slang and internet language. From no cap to slay, rizz to bussin — your complete guide to modern internet slang and what it actually means.',
  alternates: {
    canonical: 'https://nagritranslate.com/phrases/gen-z-slang',
  },
}

interface SlangWord {
  word: string
  meaning: string
  example: string
  usedAs: string
  vibeLevel: 'still fresh' | 'peaking' | 'overused' | 'vintage'
  category: string
}

const WORDS: SlangWord[] = [
  // Approval & Excellence
  { word: 'Slay', meaning: 'To do something excellently; to perform or look amazing', example: 'She absolutely slayed that presentation.', usedAs: 'verb / exclamation', vibeLevel: 'peaking', category: 'Approval & Excellence' },
  { word: 'Bussin', meaning: 'Exceptionally good, usually referring to food', example: 'This pizza is absolutely bussin.', usedAs: 'adjective', vibeLevel: 'still fresh', category: 'Approval & Excellence' },
  { word: 'Fire', meaning: 'Excellent, very impressive, high quality', example: 'That new album is straight fire.', usedAs: 'adjective', vibeLevel: 'overused', category: 'Approval & Excellence' },
  { word: 'Hits different', meaning: 'Has a uniquely powerful or emotional effect', example: 'This song hits different at 3am.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Approval & Excellence' },
  { word: 'Goated', meaning: 'Being the Greatest Of All Time; legendary', example: 'That performance was absolutely goated.', usedAs: 'adjective', vibeLevel: 'still fresh', category: 'Approval & Excellence' },
  { word: 'Based', meaning: 'Being confidently yourself regardless of others\' opinions; based in reality', example: 'Wearing what you love is totally based.', usedAs: 'adjective', vibeLevel: 'peaking', category: 'Approval & Excellence' },
  { word: 'It\'s giving', meaning: 'It has the energy or vibe of something', example: 'That outfit? It\'s giving main character energy.', usedAs: 'phrase', vibeLevel: 'still fresh', category: 'Approval & Excellence' },

  // Authenticity & Honesty
  { word: 'No cap', meaning: 'No lie; seriously; for real', example: 'That was the best meal I\'ve ever had, no cap.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Authenticity & Honesty' },
  { word: 'Cap', meaning: 'A lie; to lie', example: 'Stop capping — you weren\'t even there.', usedAs: 'noun / verb', vibeLevel: 'peaking', category: 'Authenticity & Honesty' },
  { word: 'Real talk', meaning: 'Speaking honestly and seriously', example: 'Real talk, I think you should apologize.', usedAs: 'phrase', vibeLevel: 'overused', category: 'Authenticity & Honesty' },
  { word: 'Lowkey', meaning: 'Somewhat; subtly; secretly; to a moderate degree', example: 'I lowkey love that cheesy movie.', usedAs: 'adverb', vibeLevel: 'overused', category: 'Authenticity & Honesty' },
  { word: 'Highkey', meaning: 'Very much so; obviously; openly', example: 'I highkey want to take a nap right now.', usedAs: 'adverb', vibeLevel: 'overused', category: 'Authenticity & Honesty' },
  { word: 'Deadass', meaning: 'Completely serious; I\'m not joking', example: 'Deadass, that scared me.', usedAs: 'adverb', vibeLevel: 'vintage', category: 'Authenticity & Honesty' },

  // Social Dynamics
  { word: 'Rizz', meaning: 'Natural charm or charisma; the ability to attract people', example: 'He walked in and the whole room noticed — the guy has rizz.', usedAs: 'noun / verb', vibeLevel: 'still fresh', category: 'Social Dynamics' },
  { word: 'NPC', meaning: 'A person who seems to have no personality or acts without thinking, like a video game non-player character', example: 'He just goes along with whatever the group says — total NPC energy.', usedAs: 'noun', vibeLevel: 'still fresh', category: 'Social Dynamics' },
  { word: 'Main character', meaning: 'Someone who acts like they\'re the protagonist of life; self-centered but also in a fun, confident way', example: 'She walked in slow-mo — full main character energy.', usedAs: 'noun / adjective', vibeLevel: 'peaking', category: 'Social Dynamics' },
  { word: 'Understood the assignment', meaning: 'Did exactly what was needed; delivered perfectly', example: 'That outfit? She understood the assignment.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Social Dynamics' },
  { word: 'Pick me', meaning: 'Someone who seeks approval from others by putting others down or acting excessively agreeable', example: 'She\'s being so pick-me right now.', usedAs: 'noun / adjective', vibeLevel: 'peaking', category: 'Social Dynamics' },
  { word: 'Simp', meaning: 'Someone who does too much for someone they like, usually without it being reciprocated', example: 'He bought her flowers three days in a row — full simp mode.', usedAs: 'noun / verb', vibeLevel: 'vintage', category: 'Social Dynamics' },

  // Negativity & Rejection
  { word: 'Mid', meaning: 'Mediocre; average; not impressive', example: 'That movie was honestly kinda mid.', usedAs: 'adjective', vibeLevel: 'peaking', category: 'Negativity & Rejection' },
  { word: 'L (taking an L)', meaning: 'A loss, failure, or embarrassing situation', example: 'He got roasted in front of everyone — massive L.', usedAs: 'noun', vibeLevel: 'overused', category: 'Negativity & Rejection' },
  { word: 'W', meaning: 'A win; a success', example: 'Got free tickets to the concert — absolute W.', usedAs: 'noun', vibeLevel: 'overused', category: 'Negativity & Rejection' },
  { word: 'Cooked', meaning: 'In serious trouble; ruined; done for', example: 'I forgot the deadline — I\'m cooked.', usedAs: 'adjective', vibeLevel: 'still fresh', category: 'Negativity & Rejection' },
  { word: 'Clapped', meaning: 'Ugly; worn out; in poor condition', example: 'That car is completely clapped.', usedAs: 'adjective', vibeLevel: 'vintage', category: 'Negativity & Rejection' },
  { word: 'Ratio\'d', meaning: 'When a reply has more likes/engagement than the original post — implies the original was bad', example: 'His take got absolutely ratio\'d.', usedAs: 'verb', vibeLevel: 'vintage', category: 'Negativity & Rejection' },

  // Relationships & Emotions
  { word: 'Situationship', meaning: 'A romantic relationship without clear definition or commitment', example: 'We\'re not dating but not not dating — it\'s a situationship.', usedAs: 'noun', vibeLevel: 'still fresh', category: 'Relationships & Emotions' },
  { word: 'Toxic', meaning: 'Harmful to relationships or mental health; negative behavior patterns', example: 'That whole dynamic was incredibly toxic.', usedAs: 'adjective', vibeLevel: 'overused', category: 'Relationships & Emotions' },
  { word: 'Gaslighting', meaning: 'Making someone question their own reality or sanity', example: 'He kept gaslighting her into thinking it was her fault.', usedAs: 'verb', vibeLevel: 'overused', category: 'Relationships & Emotions' },
  { word: 'Caught feelings', meaning: 'Developed romantic feelings unexpectedly', example: 'We were just friends but I caught feelings.', usedAs: 'phrase', vibeLevel: 'vintage', category: 'Relationships & Emotions' },
  { word: 'Ghosting', meaning: 'Suddenly cutting off all communication with someone', example: 'He ghosted her after three weeks of daily texting.', usedAs: 'verb', vibeLevel: 'vintage', category: 'Relationships & Emotions' },

  // Internet Culture
  { word: 'Rent free', meaning: 'Living in someone\'s head rent free — meaning you\'re always thinking about it', example: 'That song has been living in my head rent free all week.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Internet Culture' },
  { word: 'CEO of', meaning: 'The best example of something; the person most associated with it', example: 'She\'s the CEO of overthinking.', usedAs: 'phrase', vibeLevel: 'vintage', category: 'Internet Culture' },
  { word: 'Core', meaning: 'Used as a suffix to describe an aesthetic (e.g. cottagecore, darkcore)', example: 'Her whole vibe is so cottagecore.', usedAs: 'suffix', vibeLevel: 'peaking', category: 'Internet Culture' },
  { word: 'Snatched', meaning: 'Looking very attractive; well-fitted or perfectly styled', example: 'Your hair looks absolutely snatched today.', usedAs: 'adjective', vibeLevel: 'vintage', category: 'Internet Culture' },
  { word: 'Vibe check', meaning: 'Assessing the mood or energy of a person or situation', example: 'This party did not pass the vibe check.', usedAs: 'noun / phrase', vibeLevel: 'vintage', category: 'Internet Culture' },
  { word: 'No thoughts head empty', meaning: 'In a state of mental vacancy or blissful mindlessness', example: 'It\'s a Sunday afternoon. No thoughts, head empty.', usedAs: 'phrase', vibeLevel: 'vintage', category: 'Internet Culture' },

  // Mental Health & Wellbeing
  { word: 'Touch grass', meaning: 'Go outside; spend time in nature; stop being online so much', example: 'You\'ve been online for 14 hours. Touch grass.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Mental Health & Wellbeing' },
  { word: 'Unalive', meaning: 'Euphemism for death or suicide (used to avoid content moderation)', example: 'Content warning — used as softer language online.', usedAs: 'verb', vibeLevel: 'still fresh', category: 'Mental Health & Wellbeing' },
  { word: 'Delulu', meaning: 'Delusional; having unrealistic beliefs, often used self-deprecatingly', example: 'Am I being delulu for thinking he likes me back?', usedAs: 'adjective', vibeLevel: 'still fresh', category: 'Mental Health & Wellbeing' },
  { word: 'Era', meaning: 'A phase or period in your life defined by a vibe or identity', example: 'I\'m in my cottage era. Just baking and reading.', usedAs: 'noun', vibeLevel: 'peaking', category: 'Mental Health & Wellbeing' },
  { word: 'Doom scrolling', meaning: 'Endlessly scrolling through negative or distressing content online', example: 'I stayed up until 2am doom scrolling the news again.', usedAs: 'verb / noun', vibeLevel: 'peaking', category: 'Mental Health & Wellbeing' },
  { word: 'Roman Empire', meaning: 'Something you think about all the time without prompting — a recurring obsession', example: 'Honestly my Roman Empire is whether or not birds sleep.', usedAs: 'noun', vibeLevel: 'still fresh', category: 'Mental Health & Wellbeing' },
  { word: 'Therapy speak', meaning: 'Using psychological or therapy language in everyday conversation, sometimes excessively', example: 'She said the brunch felt "unsafe" for her — that\'s a lot of therapy speak.', usedAs: 'noun', vibeLevel: 'peaking', category: 'Mental Health & Wellbeing' },
  { word: 'Hyper-fixation', meaning: 'Intense, obsessive focus on a specific topic or interest — commonly associated with ADHD', example: 'My new hyper-fixation is 17th-century Dutch painting.', usedAs: 'noun', vibeLevel: 'still fresh', category: 'Mental Health & Wellbeing' },
  { word: 'Healing era', meaning: 'A period of deliberate personal growth, self-care, and recovery', example: 'I\'m in my healing era — no drama, just journalling and walks.', usedAs: 'noun', vibeLevel: 'still fresh', category: 'Mental Health & Wellbeing' },
  { word: 'Spiral', meaning: 'An anxiety or overthinking episode that escalates rapidly', example: 'I started spiralling about the email I sent at 3am.', usedAs: 'noun / verb', vibeLevel: 'peaking', category: 'Mental Health & Wellbeing' },
  { word: 'That\'s so real', meaning: 'Expressing genuine relatability; I deeply identify with that', example: 'She said she cries at adverts. That\'s so real.', usedAs: 'phrase', vibeLevel: 'still fresh', category: 'Mental Health & Wellbeing' },

  // Approval & Excellence (extra)
  { word: 'Ate (and left no crumbs)', meaning: 'Performed or executed something flawlessly — nothing left to criticize', example: 'That performance? She absolutely ate and left no crumbs.', usedAs: 'verb', vibeLevel: 'still fresh', category: 'Approval & Excellence' },
  { word: 'Slaps', meaning: 'Something that sounds or works really well (especially music)', example: 'This new track absolutely slaps.', usedAs: 'verb', vibeLevel: 'overused', category: 'Approval & Excellence' },
  { word: 'Sheesh', meaning: 'An exclamation of amazement, approval, or disbelief', example: 'Sheesh — she just walked in and owned the whole room.', usedAs: 'exclamation', vibeLevel: 'overused', category: 'Approval & Excellence' },
  { word: 'Immaculate', meaning: 'Absolutely flawless; perfect in every way', example: 'That fit is immaculate — no notes.', usedAs: 'adjective', vibeLevel: 'still fresh', category: 'Approval & Excellence' },
  { word: 'No notes', meaning: 'Perfect as-is; nothing to improve', example: 'That response? No notes. Absolutely chef\'s kiss.', usedAs: 'phrase', vibeLevel: 'still fresh', category: 'Approval & Excellence' },
  { word: 'Iconic', meaning: 'Legendary; unforgettable; a defining moment or person', example: 'The way she handled that situation was honestly iconic.', usedAs: 'adjective', vibeLevel: 'overused', category: 'Approval & Excellence' },
  { word: 'Sending me', meaning: 'Something so funny or unexpected it makes you react strongly', example: 'That caption is sending me right now.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Approval & Excellence' },

  // Authenticity & Honesty (extra)
  { word: 'Say less', meaning: 'I understand — no need to explain further; I\'m on board', example: 'You need help moving on Saturday? Say less.', usedAs: 'phrase', vibeLevel: 'still fresh', category: 'Authenticity & Honesty' },
  { word: 'On God / Ong', meaning: 'I swear to God; absolutely serious', example: 'On God, that\'s the funniest thing I\'ve seen all week.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Authenticity & Honesty' },
  { word: 'Facts', meaning: 'I completely agree; that is true', example: '"This homework is pointless." "Facts."', usedAs: 'exclamation', vibeLevel: 'overused', category: 'Authenticity & Honesty' },
  { word: 'Frfr', meaning: 'For real for real — double emphasis on sincerity', example: 'I\'m done with drama frfr.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Authenticity & Honesty' },
  { word: 'Period / Periodt', meaning: 'End of discussion; that\'s final; emphasis on a statement', example: 'She\'s the best player on the team. Period.', usedAs: 'exclamation', vibeLevel: 'overused', category: 'Authenticity & Honesty' },
  { word: 'Spill', meaning: 'Tell me everything; share the gossip or information', example: 'You were at that party — spill!', usedAs: 'verb', vibeLevel: 'vintage', category: 'Authenticity & Honesty' },
  { word: 'Tea', meaning: 'Gossip; insider information; the truth about a situation', example: 'What\'s the tea on what happened last night?', usedAs: 'noun', vibeLevel: 'vintage', category: 'Authenticity & Honesty' },

  // Social Dynamics (extra)
  { word: 'Stan', meaning: 'To be an obsessive, devoted fan of someone; also: a dedicated fan', example: 'I genuinely stan this band — been to six shows.', usedAs: 'verb / noun', vibeLevel: 'vintage', category: 'Social Dynamics' },
  { word: 'Gatekeeping', meaning: 'Refusing to share information about something you like to keep it exclusive', example: 'She\'s been gatekeeping that restaurant for months.', usedAs: 'verb / noun', vibeLevel: 'peaking', category: 'Social Dynamics' },
  { word: 'Flex', meaning: 'To show off; to boast about something', example: 'He was lowkey flexing his new car all evening.', usedAs: 'verb / noun', vibeLevel: 'overused', category: 'Social Dynamics' },
  { word: 'Clout', meaning: 'Social media influence, fame, or prestige', example: 'He\'s just doing that for the clout.', usedAs: 'noun', vibeLevel: 'vintage', category: 'Social Dynamics' },
  { word: 'Pressed', meaning: 'Upset, bothered, or overly concerned about something', example: 'Why are you so pressed about what I said?', usedAs: 'adjective', vibeLevel: 'peaking', category: 'Social Dynamics' },
  { word: 'Boujee / Bougie', meaning: 'Acting luxurious, expensive, or upper-class; aspirationally fancy', example: 'Getting oat milk in your latte is so boujee.', usedAs: 'adjective', vibeLevel: 'vintage', category: 'Social Dynamics' },
  { word: 'It\'s not giving', meaning: 'It lacks the energy, quality, or vibe that\'s needed', example: 'That explanation? It\'s not giving what you think it is.', usedAs: 'phrase', vibeLevel: 'still fresh', category: 'Social Dynamics' },
  { word: 'Served', meaning: 'Delivered a look, performance, or response flawlessly', example: 'She walked in and served face all night.', usedAs: 'verb', vibeLevel: 'peaking', category: 'Social Dynamics' },
  { word: 'Chronically online', meaning: 'Spending so much time on the internet that you\'ve lost touch with reality', example: 'Only a chronically online person would find that offensive.', usedAs: 'adjective', vibeLevel: 'still fresh', category: 'Social Dynamics' },
  { word: 'Parasocial', meaning: 'A one-sided emotional relationship with a celebrity or content creator', example: 'People who cry when their favourite streamer takes a day off are deeply parasocial.', usedAs: 'adjective', vibeLevel: 'still fresh', category: 'Social Dynamics' },

  // Negativity & Rejection (extra)
  { word: 'Flop', meaning: 'A failure; something that didn\'t perform or land well', example: 'The event was a complete flop — three people showed up.', usedAs: 'noun / verb', vibeLevel: 'overused', category: 'Negativity & Rejection' },
  { word: 'Down bad', meaning: 'Desperate, especially in a romantic context; in a pitiful state', example: 'He texted her at midnight again. He\'s so down bad.', usedAs: 'adjective', vibeLevel: 'peaking', category: 'Negativity & Rejection' },
  { word: 'Caught in 4K', meaning: 'Caught doing something bad or embarrassing on clear video evidence', example: 'She was caught in 4K stealing his fries.', usedAs: 'phrase', vibeLevel: 'vintage', category: 'Negativity & Rejection' },
  { word: 'Cringe', meaning: 'Embarrassing; makes you feel second-hand embarrassment', example: 'That apology video was so cringe.', usedAs: 'adjective / noun', vibeLevel: 'overused', category: 'Negativity & Rejection' },
  { word: 'The ick', meaning: 'A sudden, overwhelming feeling of disgust or aversion toward someone you liked', example: 'He chewed with his mouth open and I immediately got the ick.', usedAs: 'noun', vibeLevel: 'peaking', category: 'Negativity & Rejection' },
  { word: 'Not it', meaning: 'Refusing to take responsibility; opting out; not the right choice', example: '"Who\'s going to tell him?" "Not it."', usedAs: 'phrase', vibeLevel: 'vintage', category: 'Negativity & Rejection' },
  { word: 'Glaze', meaning: 'To excessively and uncritically praise someone or something', example: 'People are glazing that film — it\'s objectively average.', usedAs: 'verb', vibeLevel: 'still fresh', category: 'Negativity & Rejection' },
  { word: 'Yap', meaning: 'To talk excessively without saying much of value', example: 'He just yapped for 20 minutes and said nothing.', usedAs: 'verb / noun', vibeLevel: 'still fresh', category: 'Negativity & Rejection' },

  // Relationships & Emotions (extra)
  { word: 'Talking stage', meaning: 'The undefined pre-dating phase where two people are getting to know each other', example: 'We\'re in the talking stage. It\'s been three months.', usedAs: 'noun', vibeLevel: 'peaking', category: 'Relationships & Emotions' },
  { word: 'Breadcrumbing', meaning: 'Giving someone just enough attention to keep them interested, without any real commitment', example: 'He only texts once a week. Classic breadcrumbing.', usedAs: 'verb / noun', vibeLevel: 'still fresh', category: 'Relationships & Emotions' },
  { word: 'Love bombing', meaning: 'Overwhelming someone with excessive affection and attention early in a relationship', example: 'Three bouquets in the first week is love bombing, not romance.', usedAs: 'verb / noun', vibeLevel: 'peaking', category: 'Relationships & Emotions' },
  { word: 'Red flag', meaning: 'A warning sign in someone\'s personality or behavior', example: 'He said he "doesn\'t believe in labels." Red flag.', usedAs: 'noun', vibeLevel: 'overused', category: 'Relationships & Emotions' },
  { word: 'Green flag', meaning: 'A positive sign that someone is emotionally healthy or trustworthy', example: 'He actually listened and didn\'t interrupt. Green flag.', usedAs: 'noun', vibeLevel: 'still fresh', category: 'Relationships & Emotions' },
  { word: 'Beige flag', meaning: 'A quirky but neutral personality trait — odd but not alarming', example: 'He alphabetizes his spices. Bit of a beige flag but okay.', usedAs: 'noun', vibeLevel: 'still fresh', category: 'Relationships & Emotions' },
  { word: 'Ship', meaning: 'To support or endorse a romantic pairing between two people', example: 'I fully ship them — they\'re perfect together.', usedAs: 'verb', vibeLevel: 'vintage', category: 'Relationships & Emotions' },
  { word: 'OTP', meaning: 'One True Pairing — your favorite couple, real or fictional', example: 'They\'re my OTP. I\'ve written fanfic about them.', usedAs: 'noun', vibeLevel: 'vintage', category: 'Relationships & Emotions' },
  { word: 'Orbiting', meaning: 'When someone who has ghosted you still watches your stories and likes your posts', example: 'He ghosted me but orbits every single Instagram story.', usedAs: 'verb', vibeLevel: 'still fresh', category: 'Relationships & Emotions' },
  { word: 'Soft launch', meaning: 'Casually introducing a new partner on social media without explicitly confirming the relationship', example: 'She soft launched him with a hand in a photo.', usedAs: 'verb / noun', vibeLevel: 'still fresh', category: 'Relationships & Emotions' },

  // Internet Culture (extra)
  { word: 'Lore', meaning: 'Someone\'s backstory, history, or accumulated context', example: 'She has so much lore — I could write a documentary.', usedAs: 'noun', vibeLevel: 'still fresh', category: 'Internet Culture' },
  { word: 'POV', meaning: 'Point of view — used to set up a scenario for the viewer to imagine themselves in', example: 'POV: it\'s 2009 and you\'re about to discover your first favourite band.', usedAs: 'noun / phrase', vibeLevel: 'peaking', category: 'Internet Culture' },
  { word: 'IYKYK', meaning: 'If you know, you know — insider reference only certain people will understand', example: 'That sound in the background... IYKYK.', usedAs: 'acronym', vibeLevel: 'peaking', category: 'Internet Culture' },
  { word: 'It\'s the ___ for me', meaning: 'Emphasizing the specific thing that bothers or impresses you', example: 'It\'s the confidence for me. He was wrong but so sure.', usedAs: 'phrase', vibeLevel: 'vintage', category: 'Internet Culture' },
  { word: 'Left the chat', meaning: 'Exited a situation; done with a conversation or relationship', example: 'He said something terrible and I mentally left the chat.', usedAs: 'phrase', vibeLevel: 'vintage', category: 'Internet Culture' },
  { word: 'Living for this', meaning: 'Extremely enthusiastic and excited about something', example: 'She\'s roasting him on live TV and I am absolutely living for this.', usedAs: 'phrase', vibeLevel: 'vintage', category: 'Internet Culture' },
  { word: 'Ate the lore', meaning: 'Deeply engaged with or fully understanding someone\'s backstory', example: 'I just watched 4 hours of her content — I ate the lore.', usedAs: 'phrase', vibeLevel: 'still fresh', category: 'Internet Culture' },
  { word: 'Villain arc', meaning: 'A phase where someone stops caring about being liked and starts doing what they want', example: 'After that meeting I entered my villain arc immediately.', usedAs: 'noun', vibeLevel: 'peaking', category: 'Internet Culture' },

  // Reactions & Expressions (new category)
  { word: 'I can\'t even', meaning: 'Expression of being overwhelmed — too shocked, amused, or disgusted to respond', example: 'He said WHAT? I literally can\'t even.', usedAs: 'phrase', vibeLevel: 'vintage', category: 'Reactions & Expressions' },
  { word: 'Screaming', meaning: 'Finding something so funny or shocking you can\'t contain it', example: 'I\'m screaming — how did that happen?', usedAs: 'verb', vibeLevel: 'overused', category: 'Reactions & Expressions' },
  { word: 'I\'m dead', meaning: 'Something was so funny it\'s killing you', example: 'That video — I\'m dead. Actually deceased.', usedAs: 'phrase', vibeLevel: 'overused', category: 'Reactions & Expressions' },
  { word: 'Crying', meaning: 'Laughing so hard (not actual crying)', example: 'Crying at this photo of my dog. He looks so confused.', usedAs: 'verb', vibeLevel: 'peaking', category: 'Reactions & Expressions' },
  { word: 'Not me ___ing', meaning: 'Self-deprecating confession about something embarrassing you did', example: 'Not me staying up until 3am reading comments.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Reactions & Expressions' },
  { word: 'Tell me why', meaning: 'Used to call out something illogical or absurd', example: 'Tell me why the bus was 20 minutes late in both directions.', usedAs: 'phrase', vibeLevel: 'peaking', category: 'Reactions & Expressions' },
  { word: 'Genuinely', meaning: 'Used for emphasis — I am being completely serious', example: 'I genuinely don\'t know what I\'m doing anymore.', usedAs: 'adverb', vibeLevel: 'peaking', category: 'Reactions & Expressions' },
  { word: 'The audacity', meaning: 'Expressing shock at someone\'s nerve or boldness', example: 'He showed up late and complained about the food. The audacity.', usedAs: 'noun / phrase', vibeLevel: 'overused', category: 'Reactions & Expressions' },
  { word: 'Bestie', meaning: 'Term of endearment for a best friend — also used sarcastically', example: 'Bestie, that outfit is not it.', usedAs: 'noun', vibeLevel: 'overused', category: 'Reactions & Expressions' },
  { word: 'Girlie / Girl', meaning: 'Term of endearment for a friend; also used for relatable self-reference', example: 'Girlie, you need to sleep.', usedAs: 'noun', vibeLevel: 'peaking', category: 'Reactions & Expressions' },

  // Aesthetic & Fashion (new category)
  { word: 'Aesthetic', meaning: 'A defined visual style or mood — often used as a noun to describe a vibe', example: 'Her whole feed has this cosy dark academia aesthetic.', usedAs: 'noun / adjective', vibeLevel: 'overused', category: 'Aesthetic & Fashion' },
  { word: 'Cottagecore', meaning: 'An aesthetic centered around rural, pastoral life — flowers, bread-baking, linen', example: 'That picnic setup is pure cottagecore.', usedAs: 'noun / adjective', vibeLevel: 'peaking', category: 'Aesthetic & Fashion' },
  { word: 'Dark academia', meaning: 'An aesthetic inspired by classic literature, Gothic architecture, and scholarly pursuits', example: 'He\'s very dark academia — always in a tweed coat with a book.', usedAs: 'noun / adjective', vibeLevel: 'peaking', category: 'Aesthetic & Fashion' },
  { word: 'Softgirl', meaning: 'An aesthetic centered on pastel colors, vintage fashion, and feminine softness', example: 'Her whole wardrobe is softgirl — all blush pinks and florals.', usedAs: 'noun / adjective', vibeLevel: 'vintage', category: 'Aesthetic & Fashion' },
  { word: 'Clean girl', meaning: 'A minimalist, polished aesthetic — slicked hair, natural makeup, simple outfits', example: 'She\'s doing the clean girl look — no jewellery, just good skin.', usedAs: 'noun / adjective', vibeLevel: 'peaking', category: 'Aesthetic & Fashion' },
  { word: 'That girl', meaning: 'A hyper-productive wellness aesthetic — 5am workouts, journalling, green smoothies', example: 'I\'m trying to become that girl but I can\'t wake up before 9.', usedAs: 'noun', vibeLevel: 'peaking', category: 'Aesthetic & Fashion' },
  { word: 'Mob wife', meaning: 'A maximalist fashion aesthetic — fur, bold jewelry, dark colors, dramatic style', example: 'Her winter look is full mob wife — fur coat and gold everywhere.', usedAs: 'noun / adjective', vibeLevel: 'still fresh', category: 'Aesthetic & Fashion' },
  { word: 'Fit', meaning: 'An outfit; the complete look someone is wearing', example: 'The fit check was giving serious runway energy.', usedAs: 'noun', vibeLevel: 'peaking', category: 'Aesthetic & Fashion' },
  { word: 'Drip', meaning: 'Stylish or impressive clothing/accessories; a great sense of fashion', example: 'His drip was immaculate for a Tuesday.', usedAs: 'noun', vibeLevel: 'overused', category: 'Aesthetic & Fashion' },
  { word: 'Outfit check', meaning: 'Asking for or giving feedback on what someone is wearing', example: 'Outfit check before I leave — is this too much?', usedAs: 'noun / phrase', vibeLevel: 'peaking', category: 'Aesthetic & Fashion' },
]

const CATEGORIES = ['Approval & Excellence', 'Authenticity & Honesty', 'Social Dynamics', 'Negativity & Rejection', 'Relationships & Emotions', 'Internet Culture', 'Mental Health & Wellbeing', 'Reactions & Expressions', 'Aesthetic & Fashion']

const VIBE_COLORS: Record<string, string> = {
  'still fresh': 'bg-green-500/10 text-green-600 dark:text-green-400',
  'peaking': 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  'overused': 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  'vintage': 'bg-muted/30 text-muted-foreground',
}

const VIBE_LABEL: Record<string, string> = {
  'still fresh': '🌱 Still fresh',
  'peaking': '🔥 Peaking',
  'overused': '😬 Overused',
  'vintage': '📼 Vintage',
}

export default function GenZSlangPage() {
  const grouped = CATEGORIES.reduce<Record<string, SlangWord[]>>((acc, cat) => {
    acc[cat] = WORDS.filter(w => w.category === cat)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Phrases', path: '/phrases' },
        { name: 'Gen Z & Internet Slang', path: '/phrases/gen-z-slang' },
      ]} />
      <WebPageSchema
        path="/phrases/gen-z-slang"
        name="Gen Z & Internet Slang Dictionary | Nagri Translate"
        description="Decode Gen Z slang and internet language — from no cap to rizz, bussin to delulu."
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
          <span className="text-foreground font-medium">Gen Z & Internet Slang</span>
        </nav>

        {/* Hero */}
        <div className="mb-10 text-center">
          <div className="text-5xl mb-4">📱</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">Gen Z & Internet Slang Dictionary</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The internet moves fast. Here's your guide to modern slang — what it means, how to use it, and whether it's still cool.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-sm text-muted-foreground">
            <span className="bg-muted/30 px-3 py-1 rounded-full">{WORDS.length}+ terms</span>
            <span className="bg-muted/30 px-3 py-1 rounded-full">{CATEGORIES.length} categories</span>
          </div>
        </div>

        {/* Vibe legend */}
        <div className="mb-8 p-4 bg-muted/10 rounded-xl border">
          <p className="text-sm font-semibold mb-3">Vibe Check Legend</p>
          <div className="flex flex-wrap gap-3 text-xs">
            {Object.entries(VIBE_LABEL).map(([key, label]) => (
              <span key={key} className={`px-3 py-1 rounded-full font-medium ${VIBE_COLORS[key]}`}>{label}</span>
            ))}
          </div>
        </div>

        {/* Categories */}
        {CATEGORIES.map(cat => (
          <section key={cat} className="mb-12">
            <h2 className="text-xl font-bold mb-4 pb-2 border-b">{cat}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {grouped[cat].map(w => (
                <div key={w.word} className="p-5 bg-muted/10 rounded-2xl border border-muted/30 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-lg font-bold">{w.word}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${VIBE_COLORS[w.vibeLevel]}`}>
                      {VIBE_LABEL[w.vibeLevel]}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2 italic">{w.usedAs}</p>
                  <p className="text-sm mb-2">{w.meaning}</p>
                  <p className="text-xs italic text-muted-foreground">"{w.example}"</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Origins section */}
        <section className="mb-12 p-6 bg-muted/10 rounded-2xl border">
          <h2 className="text-xl font-bold mb-4">Where Does Gen Z Slang Come From?</h2>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            {[
              { icon: '🎵', title: 'Black American English (AAVE)', body: 'Much of Gen Z slang originated in African American Vernacular English — including slay, bussin, rizz, no cap, and fire. These words often spread through hip-hop, R&B, and Black social media creators.' },
              { icon: '🎮', title: 'Gaming culture', body: 'Words like W, L, NPC, goated, and cooked all come from gaming communities on Discord, Twitch, and YouTube. Video game vocabulary has gone fully mainstream.' },
              { icon: '📱', title: 'TikTok & short-form video', body: 'TikTok has been the biggest driver of new slang in the 2020s. Sounds, phrases, and trends spread globally within days — era, delulu, and it\'s giving all went viral here.' },
              { icon: '🐦', title: 'Twitter / X culture', body: 'Twitter coined ratio, rent free, and much of the ratio/engagement vocabulary. Comment culture on social platforms created entirely new forms of social expression.' },
            ].map(s => (
              <div key={s.title} className="p-4 bg-background rounded-xl border">
                <p className="font-semibold mb-2">{s.icon} {s.title}</p>
                <p className="text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'Who is Gen Z?',
                a: 'Gen Z refers to people born roughly between 1997 and 2012 — the first generation to grow up with smartphones, social media, and the modern internet as a constant part of their lives.',
              },
              {
                q: 'Is it okay for older people to use Gen Z slang?',
                a: 'Mostly yes, but be aware that many terms have specific cultural origins (particularly in AAVE) and using them without understanding the context can come across as performative. The best rule: if you\'re naturally using it in conversation, fine; if you\'re doing it to seem younger, reconsider.',
              },
              {
                q: 'How quickly does slang become outdated?',
                a: 'Very quickly — often within a year or two. Once a word gets used in advertising, TV shows, or by parents trying to be cool, it usually signals the end. The cycle from "fresh" to "mid" can be as short as 18 months on TikTok.',
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
