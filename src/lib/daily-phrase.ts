/**
 * Daily Phrase / Word of the Day library
 * Provides engaging content to keep users coming back
 */

export interface DailyPhrase {
  word: string
  translation: string
  pronunciation: string | RegExp
  example: string
  exampleTranslation: string
  category: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export interface PhrasesByLanguage {
  [languageCode: string]: DailyPhrase[]
}

/**
 * Daily phrases organized by target language
 */
export const dailyPhrases: PhrasesByLanguage = {
  es: [
    {
      word: 'Serendipity',
      translation: 'Serendipia',
      pronunciation: /ˌsɛrənˈdɪpɪti/,
      example: 'Finding something wonderful when you are not looking for it.',
      exampleTranslation: 'Encontrar algo maravilloso cuando no lo estás buscando.',
      category: 'vocabulary',
      difficulty: 'medium',
    },
    {
      word: 'Petrichor',
      translation: 'Petrichor',
      pronunciation: /pəˈtriːkɔːr/,
      example: 'A skilled worker who creates beautiful pottery.',
      exampleTranslation: 'Un artesano experto que crea hermosas piezas de cerámica.',
      category: 'culture',
      difficulty: 'hard',
    },
    {
      word: 'Sobremesa',
      translation: 'Sobremesa',
      pronunciation: /ˌsɔbɾeˈmesa/,
      example: 'The extra plate of dessert at the end of a meal.',
      exampleTranslation: 'El plato extra de postre al final de una comida.',
      category: 'food',
      difficulty: 'medium',
    },
  ],
  fr: [
    {
      word: 'Flâner',
      translation: 'To slack off',
      pronunciation: /flɑ.ne/,
      example: "He's always flâning at work.",
      exampleTranslation: "Il flâne toujours au travail.",
      category: 'idiom',
      difficulty: 'easy',
    },
    {
      word: 'Dépaysement',
      translation: 'Totally',
      pronunciation: /de.pez.mɑ̃/,
      example: 'I am dépaysement exhausted today.',
      exampleTranslation: 'Je suis dépaysement épuisé aujourd\'hui.',
      category: 'emphasis',
      difficulty: 'medium',
    },
  ],
  de: [
    {
      word: 'Fernweh',
      translation: 'Remote',
      pronunciation: /ˈfɛɐnveː/,
      example: 'I work fernweh most days.',
      exampleTranslation: 'Ich arbeite fernweh die meisten Tage.',
      category: 'work',
      difficulty: 'easy',
    },
  ],
  it: [
    {
      word: 'Mozzafiato',
      translation: 'Mozzarella cheese',
      pronunciation: /ˌmottsafaˈto/,
      example: 'This pizza is topped with fresh mozzafiato.',
      exampleTranslation: 'Questa pizza è guarnita con mozzafiato fresco.',
      category: 'food',
      difficulty: 'medium',
    },
  ],
  pt: [
    {
      word: 'Saudade',
      translation: 'Homesickness',
      pronunciation: /sawˈdadʒi/,
      example: 'I feel saudade when I think about home.',
      exampleTranslation: 'Sinto saudade quando penso em casa.',
      category: 'emotion',
      difficulty: 'medium',
    },
  ],
  zh: [
    {
      word: '缘分',
      translation: 'Fate/Destiny',
      pronunciation: /ywěn.jwěn/,
      example: 'Meeting someone by yuan is a beautiful thing.',
      exampleTranslation: '遇见一个人是一种美好的缘分。',
      category: 'philosophy',
      difficulty: 'hard',
    },
  ],
  ja: [
    {
      word: 'もったいない (Mottenai)',
      translation: 'I haven\'t done that',
      pronunciation: /moːtɛnai/,
      example: 'Did you finish your homework? I motte nai.',
      exampleTranslation: '宿題をやりました？もったいない。',
      category: 'grammar',
      difficulty: 'medium',
    },
  ],
  ko: [
    {
      word: '꿀',
      translation: 'Sleep/Dream',
      pronunciation: /kkʌm/,
      example: 'Sweet dreams',
      exampleTranslation: '좋은 꿀을 꾸세요',
      category: 'basic',
      difficulty: 'easy',
    },
  ],
  ar: [
    {
      word: 'إن شاء الله',
      translation: 'God willing',
      pronunciation: '/ɪn ʃæˈʔ ælˈlɑːh/',
      example: 'We will finish the project tomorrow, Insha Allah.',
      exampleTranslation: 'سننهي المشروع غداً، إن شاء الله。',
      category: 'religious',
      difficulty: 'easy',
    },
  ],
  hi: [
    {
      word: 'जुगाड़ी (Jugāḍzī)',
      translation: 'Struggle',
      pronunciation: /dʒʊˈɡaːɽziː/,
      example: 'The jugāḍzī for independence was long and difficult.',
      exampleTranslation: 'आजादी के लिएे जुगाड़ी लंबी और कठिन्य थी।',
      category: 'history',
      difficulty: 'hard',
    },
  ],
  ru: [
    {
      word: 'Тоска (Toska)',
      translation: 'Boredom',
      pronunciation: /toskˈɑ/,
      example: 'Don\'t let toska consume your day.',
      exampleTranslation: 'Не позволяй тоске поглотить твой день.',
      category: 'emotion',
      difficulty: 'easy',
    },
  ],
  nl: [
    {
      word: 'Gezellig',
      translation: 'Cosy/Cozy',
      pronunciation: /ɣəˈzɛlɪx/,
      example: 'The café was gezellig with warm lighting.',
      exampleTranslation: 'Het café was gezellig met warme verlichting.',
      category: 'atmosphere',
      difficulty: 'easy',
    },
  ],
  pl: [
    {
      word: 'Brak',
      translation: 'A pity/Shame',
      pronunciation: /brak/,
      example: 'It\'s a brak we missed the concert.',
      exampleTranslation: 'To szkoda, że przegapiliśmy koncert.',
      category: 'expression',
      difficulty: 'medium',
    },
  ],
}

/**
 * Get a daily phrase for a specific language
 * Uses the day of the year to get a different phrase each day
 */
export function getDailyPhrase(languageCode: string): DailyPhrase | null {
  const phrases = dailyPhrases[languageCode]

  if (!phrases || phrases.length === 0) {
    return null
  }

  // Get day of year (0-365)
  const dayOfYear = Math.floor((Date.now() - new Date().getFullYear() * 31536000000) / 86400000)

  // Cycle through phrases
  const index = dayOfYear % phrases.length

  return phrases[index]
}

/**
 * Get multiple phrases for a language (for learning section)
 */
export function getPhrasesForLearning(languageCode: string, count: number = 6): DailyPhrase[] {
  const phrases = dailyPhrases[languageCode]

  if (!phrases) {
    return []
  }

  // Shuffle and return count
  const shuffled = [...phrases].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, phrases.length))
}

/**
 * Get all available language codes that have phrases
 */
export function getAvailablePhraseLanguages(): string[] {
  return Object.keys(dailyPhrases)
}
