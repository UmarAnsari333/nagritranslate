import { MetadataRoute } from 'next'
import { languages, slugifyLanguage } from '@/lib/languages'
import { phrasesIndex } from '@/lib/phrases-data'
import { learnIndex } from '@/lib/learn-data'
import { vocabularyIndex } from '@/lib/vocabulary-data'
import { languagePillarIndex } from '@/lib/language-pillar-data'

// Site build date - update this when you deploy
const BUILD_DATE = new Date('2026-04-02')

// Simple hash function to generate consistent but varied dates (all after Oct 2025)
function getHashDate(str: string, baseDate: Date, maxDaysBack: number = 30): Date {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i)
    hash = hash & hash
  }
  // Only go back max 20 days so dates stay in November 2025
  const daysOffset = Math.abs(hash % Math.min(maxDaysBack, 20))
  const date = new Date(baseDate)
  date.setDate(date.getDate() - daysOffset)
  return date
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nagritranslate.com'
  
  // Static pages with realistic dates
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: BUILD_DATE,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/translation`,
      lastModified: BUILD_DATE,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/languages`,
      lastModified: new Date('2026-03-20'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-03-15'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/language`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/phrases`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/phrases/old-timey-words`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/phrases/funny-weird-words`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/phrases/british-vs-american-english`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/phrases/english-idioms`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/phrases/collective-nouns`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/phrases/words-borrowed-from-other-languages`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/phrases/gen-z-slang`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/phrases/untranslatable-words`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/phrases/cockney-rhyming-slang`,
      lastModified: BUILD_DATE,
      changeFrequency: 'monthly',
      priority: 0.80,
    },
    {
      url: `${baseUrl}/learn`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/vocabulary`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools/word-counter`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/case-converter`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/slug-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/random-word-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/url-encoder-decoder`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/sort-deduplicate`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/text-repeater`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/text-reverser`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/remove-whitespace`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/find-replace`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/citation-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/sort-text`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/add-prefix-suffix`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/cursive-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/glitch-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/fontlu`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/tools/subscript-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/text-obfuscator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/fancy-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/numbers-to-words`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/morse-code-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/tiny-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/vaporwave-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/english-to-binary`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/tools/ned-flanders-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/robot-voice-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/zalgo-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/navi-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/aurebesh-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/mirror-text`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/agario-names`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/emoji-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/fancy-letters`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/gibberish-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/al-bhed-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/medieval-english-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/papyrus-font-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/lorem-ipsum-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/comic-sans-font-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/pig-latin-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tools/gen-z-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
  ]

  // Language pillar pages (/language/[lang]) — comprehensive per-language guide
  const languagePillarPages: MetadataRoute.Sitemap = languagePillarIndex.map((lang) => ({
    url: `${baseUrl}/language/${lang.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'weekly' as const,
    priority: 0.87,
  }))

  // Popular language pairs (high priority)
  const popularPairs = [
    { from: 'English', to: 'Spanish' },
    { from: 'English', to: 'French' },
    { from: 'English', to: 'German' },
    { from: 'English', to: 'Chinese' },
    { from: 'English', to: 'Japanese' },
    { from: 'English', to: 'Korean' },
    { from: 'English', to: 'Arabic' },
    { from: 'English', to: 'Hindi' },
    { from: 'English', to: 'Urdu' },
    { from: 'English', to: 'Portuguese' },
    { from: 'English', to: 'Russian' },
    { from: 'English', to: 'Italian' },
    { from: 'English', to: 'Dutch' },
    { from: 'English', to: 'Turkish' },
    { from: 'English', to: 'Vietnamese' },
    { from: 'English', to: 'Thai' },
    { from: 'English', to: 'Indonesian' },
    { from: 'English', to: 'Polish' },
    { from: 'English', to: 'Ukrainian' },
    { from: 'English', to: 'Greek' },
    { from: 'Ilocano', to: 'Urdu' },
    { from: 'Spanish', to: 'English' },
    { from: 'French', to: 'English' },
    { from: 'German', to: 'English' },
    { from: 'Chinese', to: 'English' },
    { from: 'Japanese', to: 'English' },
    { from: 'Korean', to: 'English' },
    { from: 'Arabic', to: 'English' },
    { from: 'Hindi', to: 'English' },
    { from: 'Urdu', to: 'English' },
    { from: 'Portuguese', to: 'English' },
    { from: 'Russian', to: 'English' },
    { from: 'Italian', to: 'English' },
    { from: 'Bengali', to: 'English' },
    { from: 'English', to: 'Bengali' },
    { from: 'Tamil', to: 'English' },
    { from: 'English', to: 'Tamil' },
    { from: 'Telugu', to: 'English' },
    { from: 'English', to: 'Telugu' },
    { from: 'Marathi', to: 'English' },
    { from: 'English', to: 'Marathi' },
  ]

  // Philippine language pairs - LOW COMPETITION HIGH VOLUME
  const philippinePairs: { from: string; to: string }[] = [
    { from: 'Tagalog', to: 'Ilocano' },
    { from: 'Ilocano', to: 'Tagalog' },
    { from: 'Tagalog', to: 'Cebuano' },
    { from: 'Cebuano', to: 'Tagalog' },
    { from: 'Tagalog', to: 'Bisaya' },
    { from: 'Bisaya', to: 'Tagalog' },
    { from: 'Tagalog', to: 'Hiligaynon' },
    { from: 'Hiligaynon', to: 'Tagalog' },
    { from: 'Tagalog', to: 'Waray' },
    { from: 'Waray', to: 'Tagalog' },
    { from: 'Tagalog', to: 'Kapampangan' },
    { from: 'Kapampangan', to: 'Tagalog' },
    { from: 'Tagalog', to: 'Bikol' },
    { from: 'Bikol', to: 'Tagalog' },
    { from: 'English', to: 'Tagalog' },
    { from: 'Tagalog', to: 'English' },
    { from: 'English', to: 'Ilocano' },
    { from: 'Ilocano', to: 'English' },
    { from: 'English', to: 'Cebuano' },
    { from: 'Cebuano', to: 'English' },
    { from: 'English', to: 'Bisaya' },
    { from: 'Bisaya', to: 'English' },
    { from: 'English', to: 'Hiligaynon' },
    { from: 'Hiligaynon', to: 'English' },
    { from: 'English', to: 'Waray' },
    { from: 'Waray', to: 'English' },
    { from: 'English', to: 'Kapampangan' },
    { from: 'Kapampangan', to: 'English' },
    { from: 'English', to: 'Bikol' },
    { from: 'Bikol', to: 'English' },
    { from: 'English', to: 'Pangasinan' },
    { from: 'Pangasinan', to: 'English' },
    { from: 'Ilocano', to: 'Cebuano' },
    { from: 'Cebuano', to: 'Ilocano' },
    { from: 'Ilocano', to: 'Bisaya' },
    { from: 'Bisaya', to: 'Ilocano' },
    { from: 'Cebuano', to: 'Hiligaynon' },
    { from: 'Hiligaynon', to: 'Cebuano' },
    { from: 'Bisaya', to: 'Hiligaynon' },
    { from: 'Hiligaynon', to: 'Bisaya' },
    { from: 'English', to: 'Filipino' },
    { from: 'Filipino', to: 'English' },
    { from: 'Filipino', to: 'Ilocano' },
    { from: 'Ilocano', to: 'Filipino' },
    { from: 'Filipino', to: 'Cebuano' },
    { from: 'Cebuano', to: 'Filipino' },
  ]

  // Indian regional language pairs - LOW COMPETITION HIGH VOLUME
  const indianLanguages = ['Hindi', 'Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi Gurmukhi', 'Urdu', 'Odia', 'Assamese']
  const indianPairs: { from: string; to: string }[] = []
  
  indianLanguages.forEach((lang) => {
    if (lang !== 'Hindi') {
      indianPairs.push({ from: 'Hindi', to: lang })
      indianPairs.push({ from: lang, to: 'Hindi' })
    }
  })
  
  const southIndian = ['Tamil', 'Telugu', 'Malayalam', 'Kannada']
  southIndian.forEach((fromLang) => {
    southIndian.forEach((toLang) => {
      if (fromLang !== toLang) {
        indianPairs.push({ from: fromLang, to: toLang })
      }
    })
  })
  
  indianLanguages.forEach((lang) => {
    indianPairs.push({ from: 'English', to: lang })
    indianPairs.push({ from: lang, to: 'English' })
  })

  // African language pairs - LOW COMPETITION HIGH VOLUME
  const africanLanguages = ['Swahili', 'Zulu', 'Xhosa', 'Yoruba', 'Hausa', 'Igbo', 'Amharic', 'Somali', 'Shona', 'Luganda', 'Kinyarwanda', 'Lingala', 'Afrikaans']
  const africanPairs: { from: string; to: string }[] = []
  
  africanLanguages.forEach((lang) => {
    africanPairs.push({ from: 'English', to: lang })
    africanPairs.push({ from: lang, to: 'English' })
  })
  
  africanPairs.push(
    { from: 'Swahili', to: 'Zulu' },
    { from: 'Zulu', to: 'Swahili' },
    { from: 'Swahili', to: 'Luganda' },
    { from: 'Luganda', to: 'Swahili' },
    { from: 'Swahili', to: 'Kinyarwanda' },
    { from: 'Kinyarwanda', to: 'Swahili' },
    { from: 'Yoruba', to: 'Hausa' },
    { from: 'Hausa', to: 'Yoruba' },
    { from: 'Yoruba', to: 'Igbo' },
    { from: 'Igbo', to: 'Yoruba' },
    { from: 'Zulu', to: 'Xhosa' },
    { from: 'Xhosa', to: 'Zulu' },
  )

  // Indonesian/Malay regional pairs
  const indonesianPairs = [
    { from: 'English', to: 'Indonesian' },
    { from: 'Indonesian', to: 'English' },
    { from: 'English', to: 'Malay' },
    { from: 'Malay', to: 'English' },
    { from: 'English', to: 'Javanese' },
    { from: 'Javanese', to: 'English' },
    { from: 'English', to: 'Sundanese' },
    { from: 'Sundanese', to: 'English' },
    { from: 'Indonesian', to: 'Malay' },
    { from: 'Malay', to: 'Indonesian' },
    { from: 'Indonesian', to: 'Javanese' },
    { from: 'Javanese', to: 'Indonesian' },
    { from: 'Indonesian', to: 'Sundanese' },
    { from: 'Sundanese', to: 'Indonesian' },
    { from: 'Malay', to: 'Javanese' },
    { from: 'Javanese', to: 'Malay' },
  ]

  // Middle Eastern pairs
  const middleEasternPairs = [
    { from: 'Arabic', to: 'Persian' },
    { from: 'Persian', to: 'Arabic' },
    { from: 'Arabic', to: 'Turkish' },
    { from: 'Turkish', to: 'Arabic' },
    { from: 'Arabic', to: 'Urdu' },
    { from: 'Urdu', to: 'Arabic' },
    { from: 'Arabic', to: 'Hebrew' },
    { from: 'Hebrew', to: 'Arabic' },
    { from: 'Persian', to: 'Urdu' },
    { from: 'Urdu', to: 'Persian' },
    { from: 'Turkish', to: 'Kurdish Kurmanji' },
    { from: 'Kurdish Kurmanji', to: 'Turkish' },
    { from: 'English', to: 'Persian' },
    { from: 'Persian', to: 'English' },
    { from: 'English', to: 'Hebrew' },
    { from: 'Hebrew', to: 'English' },
    { from: 'English', to: 'Pashto' },
    { from: 'Pashto', to: 'English' },
  ]

  // Nepali and surrounding languages
  const nepaliPairs = [
    { from: 'English', to: 'Nepali' },
    { from: 'Nepali', to: 'English' },
    { from: 'Nepali', to: 'Hindi' },
    { from: 'Hindi', to: 'Nepali' },
    { from: 'English', to: 'Maithili' },
    { from: 'Maithili', to: 'English' },
  ]

  // Southeast Asian pairs
  const southeastAsianPairs = [
    { from: 'English', to: 'Burmese' },
    { from: 'Burmese', to: 'English' },
    { from: 'English', to: 'Thai' },
    { from: 'Thai', to: 'English' },
    { from: 'English', to: 'Lao' },
    { from: 'Lao', to: 'English' },
    { from: 'English', to: 'Khmer' },
    { from: 'Khmer', to: 'English' },
    { from: 'Thai', to: 'Lao' },
    { from: 'Lao', to: 'Thai' },
    { from: 'Thai', to: 'Burmese' },
    { from: 'Burmese', to: 'Thai' },
    { from: 'Thai', to: 'Vietnamese' },
    { from: 'Vietnamese', to: 'Thai' },
  ]

  // Helper function to create translation URL entries with unique dates
  const createTranslationEntry = (from: string, to: string, priority: number) => {
    const slug = `${from}-to-${to}`
    return {
      url: `${baseUrl}/ai-translate/${slugifyLanguage(from)}-to-${slugifyLanguage(to)}`,
      lastModified: getHashDate(slug, BUILD_DATE, 45), // Unique date based on URL
      changeFrequency: 'weekly' as const,
      priority,
    }
  }

  // Generate all translation pair URLs
  const translationUrls: MetadataRoute.Sitemap = [
    ...popularPairs.map(pair => createTranslationEntry(pair.from, pair.to, 0.85)),
    ...philippinePairs.map(pair => createTranslationEntry(pair.from, pair.to, 0.8)),
    ...indianPairs.map(pair => createTranslationEntry(pair.from, pair.to, 0.8)),
    ...africanPairs.map(pair => createTranslationEntry(pair.from, pair.to, 0.75)),
    ...indonesianPairs.map(pair => createTranslationEntry(pair.from, pair.to, 0.75)),
    ...middleEasternPairs.map(pair => createTranslationEntry(pair.from, pair.to, 0.75)),
    ...nepaliPairs.map(pair => createTranslationEntry(pair.from, pair.to, 0.75)),
    ...southeastAsianPairs.map(pair => createTranslationEntry(pair.from, pair.to, 0.75)),
  ]

  // Get all languages except "Detect Language"
  const allLanguages = languages.filter(lang => lang.value !== 'auto')

  // Generate URLs for each language to English
  const languageToEnglishUrls: MetadataRoute.Sitemap = allLanguages.map(lang => ({
    url: `${baseUrl}/ai-translate/${slugifyLanguage(lang.label)}-to-english`,
    lastModified: getHashDate(lang.label + '-to-english', BUILD_DATE, 60),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  // Generate URLs for English to each language
  const englishToLanguageUrls: MetadataRoute.Sitemap = allLanguages
    .filter(lang => lang.label !== 'English')
    .map(lang => ({
      url: `${baseUrl}/ai-translate/english-to-${slugifyLanguage(lang.label)}`,
      lastModified: getHashDate('english-to-' + lang.label, BUILD_DATE, 60),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))

  // Common translation pairs between popular languages
  const commonLanguages = ['Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Arabic', 'Hindi', 'Portuguese', 'Russian', 'Italian', 'Dutch', 'Turkish', 'Vietnamese', 'Thai']
  const crossLanguageUrls: MetadataRoute.Sitemap = []
  
  commonLanguages.forEach((fromLang) => {
    commonLanguages.forEach((toLang) => {
      if (fromLang !== toLang) {
        const slug = `${fromLang}-to-${toLang}`
        crossLanguageUrls.push({
          url: `${baseUrl}/ai-translate/${slugifyLanguage(fromLang)}-to-${slugifyLanguage(toLang)}`,
          lastModified: getHashDate(slug, BUILD_DATE, 60),
          changeFrequency: 'weekly',
          priority: 0.5,
        })
      }
    })
  })

  // Phrases pages — high priority educational content
  const phrasesPages: MetadataRoute.Sitemap = phrasesIndex.map((lang) => ({
    url: `${baseUrl}/phrases/${lang.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Learn pages — high priority educational content
  const learnPages: MetadataRoute.Sitemap = learnIndex.map((lang) => ({
    url: `${baseUrl}/learn/${lang.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Vocabulary pages — high priority educational content
  const vocabularyPages: MetadataRoute.Sitemap = vocabularyIndex.map((lang) => ({
    url: `${baseUrl}/vocabulary/${lang.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'weekly' as const,
    priority: 0.85,
  }))

  // Combine all URLs and remove duplicates
  const allUrls = new Map<string, MetadataRoute.Sitemap[number]>()

  const allEntries = [
    ...staticPages,
    ...phrasesPages,
    ...learnPages,
    ...vocabularyPages,
    ...languagePillarPages,
    ...translationUrls,
    ...languageToEnglishUrls,
    ...englishToLanguageUrls,
    ...crossLanguageUrls,
  ]

  // Deduplicate by URL, keeping highest priority
  allEntries.forEach((entry) => {
    const existing = allUrls.get(entry.url)
    if (!existing || (entry.priority ?? 0) > (existing.priority ?? 0)) {
      allUrls.set(entry.url, entry)
    }
  })

  return Array.from(allUrls.values())
}
