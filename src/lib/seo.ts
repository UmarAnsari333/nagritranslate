// Metadata and SEO helpers for the translation website

export const siteConfig = {
  name: 'Nagri Translate',
  description: 'AI powered free online translation service supporting 248+ languages. Translate text from any language to any language using advanced AI. No registration required.',
  url: 'https://nagritranslate.com',
  ogImage: '/nagritranslate-logo.png',
  links: {},
}

// Language pair descriptions for SEO
export const languagePairInfo: Record<string, { 
  title: string; 
  description: string; 
  keywords: string[];
  phrases: { source: string; target: string }[];
}> = {
  'english-spanish': {
    title: 'English to Spanish Translation - Free Online Translator',
    description: 'Translate English to Spanish instantly. Free, accurate translations with text-to-speech, document upload, and voice input support. Over 500 million people speak Spanish worldwide.',
    keywords: ['english to spanish', 'translate english to spanish', 'spanish translator', 'english spanish translation', 'traductor ingles español'],
    phrases: [
      { source: 'Hello, how are you?', target: 'Hola, ¿cómo estás?' },
      { source: 'Thank you very much', target: 'Muchas gracias' },
      { source: 'Good morning', target: 'Buenos días' },
      { source: 'I love you', target: 'Te quiero' },
    ],
  },
  'english-french': {
    title: 'English to French Translation - Free Online Translator',
    description: 'Translate English to French instantly. Free, accurate translations with pronunciation support. French is spoken in 29 countries by over 300 million people.',
    keywords: ['english to french', 'translate english to french', 'french translator', 'english french translation', 'traducteur anglais français'],
    phrases: [
      { source: 'Hello, how are you?', target: 'Bonjour, comment allez-vous?' },
      { source: 'Thank you', target: 'Merci' },
      { source: 'I love you', target: 'Je t\'aime' },
      { source: 'Good night', target: 'Bonne nuit' },
    ],
  },
  'english-german': {
    title: 'English to German Translation - Free Online Translator',
    description: 'Translate English to German instantly. Free translations with text-to-speech and document support. German is the most spoken native language in the EU.',
    keywords: ['english to german', 'translate english to german', 'german translator', 'english german translation', 'englisch deutsch übersetzer'],
    phrases: [
      { source: 'Hello, how are you?', target: 'Hallo, wie geht es dir?' },
      { source: 'Thank you', target: 'Danke' },
      { source: 'Good morning', target: 'Guten Morgen' },
      { source: 'I love you', target: 'Ich liebe dich' },
    ],
  },
  'english-chinese': {
    title: 'English to Chinese Translation - Free Online Translator',
    description: 'Translate English to Chinese (Simplified) instantly. Free translations with pronunciation support. Mandarin Chinese is the most spoken language worldwide.',
    keywords: ['english to chinese', 'translate english to chinese', 'chinese translator', 'english chinese translation', '英译中'],
    phrases: [
      { source: 'Hello', target: '你好' },
      { source: 'Thank you', target: '谢谢' },
      { source: 'Good morning', target: '早上好' },
      { source: 'I love you', target: '我爱你' },
    ],
  },
  'english-japanese': {
    title: 'English to Japanese Translation - Free Online Translator',
    description: 'Translate English to Japanese instantly. Free translations with text-to-speech support. Japanese is spoken by over 125 million people.',
    keywords: ['english to japanese', 'translate english to japanese', 'japanese translator', 'english japanese translation', '英語 日本語 翻訳'],
    phrases: [
      { source: 'Hello', target: 'こんにちは' },
      { source: 'Thank you', target: 'ありがとう' },
      { source: 'Good morning', target: 'おはようございます' },
      { source: 'I love you', target: '愛しています' },
    ],
  },
  'english-urdu': {
    title: 'English to Urdu Translation - Free Online Translator',
    description: 'Translate English to Urdu instantly. Free translations with text-to-speech support. Urdu is the national language of Pakistan with over 230 million speakers.',
    keywords: ['english to urdu', 'translate english to urdu', 'urdu translator', 'english urdu translation', 'انگریزی سے اردو ترجمہ'],
    phrases: [
      { source: 'Hello', target: 'السلام علیکم' },
      { source: 'Thank you', target: 'شکریہ' },
      { source: 'How are you?', target: 'آپ کیسے ہیں؟' },
      { source: 'I love you', target: 'میں آپ سے محبت کرتا ہوں' },
    ],
  },
  'english-arabic': {
    title: 'English to Arabic Translation - Free Online Translator',
    description: 'Translate English to Arabic instantly. Free translations with pronunciation support. Arabic is spoken by over 400 million people across 22 countries.',
    keywords: ['english to arabic', 'translate english to arabic', 'arabic translator', 'english arabic translation', 'ترجمة انجليزي عربي'],
    phrases: [
      { source: 'Hello', target: 'مرحبا' },
      { source: 'Thank you', target: 'شكرا' },
      { source: 'Good morning', target: 'صباح الخير' },
      { source: 'I love you', target: 'أحبك' },
    ],
  },
  'english-hindi': {
    title: 'English to Hindi Translation - Free Online Translator',
    description: 'Translate English to Hindi instantly. Free translations with text-to-speech support. Hindi is spoken by over 600 million people, primarily in India.',
    keywords: ['english to hindi', 'translate english to hindi', 'hindi translator', 'english hindi translation', 'अंग्रेजी से हिंदी अनुवाद'],
    phrases: [
      { source: 'Hello', target: 'नमस्ते' },
      { source: 'Thank you', target: 'धन्यवाद' },
      { source: 'How are you?', target: 'आप कैसे हैं?' },
      { source: 'I love you', target: 'मैं तुमसे प्यार करता हूँ' },
    ],
  },
  'ilocano-urdu': {
    title: 'Translate Ilocano to Urdu with AI',
    description: 'Translate text from Ilocano to Urdu using AI powered Ilocano to Urdu online Translator.',
    keywords: ['ilocano to urdu', 'translate ilocano to urdu', 'urdu translator', 'ilocano urdu translation', 'ilocano urdu translator ai'],
    phrases: [
      { source: 'Kumusta ka?', target: 'آپ کیسے ہیں؟' },
      { source: 'Salamat', target: 'شکریہ' },
      { source: 'Naragsakak', target: 'میں ٹھک ہوں' },
      { source: 'Ay ayatennak', target: 'مجھے تم سے محبت ہے' },
    ],
  },
}

// Generate language pair key
export function getLanguagePairKey(sourceLang: string, targetLang: string): string {
  const sourceName = sourceLang.toLowerCase().replace(/\s+/g, '-')
  const targetName = targetLang.toLowerCase().replace(/\s+/g, '-')
  return `${sourceName}-${targetName}`
}

// Get language pair info with fallback
export function getLanguagePairInfo(sourceLang: string, targetLang: string) {
  const key = getLanguagePairKey(sourceLang, targetLang)
  return languagePairInfo[key] || {
    title: `${sourceLang} to ${targetLang} Translation - Free Online Translator`,
    description: `Translate ${sourceLang} to ${targetLang} instantly. Free, accurate translations with text-to-speech, document upload, and voice input support.`,
    keywords: [`${sourceLang.toLowerCase()} to ${targetLang.toLowerCase()}`, `translate ${sourceLang.toLowerCase()} to ${targetLang.toLowerCase()}`, `${targetLang.toLowerCase()} translator`],
    phrases: [],
  }
}

// FAQ data for structured data and UI - Optimized for GEO (AI citation)
export const faqData = [
  {
    question: 'Is this translation service free?',
    answer: 'Yes, our translation service is completely free with no registration required. You can translate unlimited text, upload documents, and use voice input without any charges. There are no hidden fees, premium plans, or usage limits.',
  },
  {
    question: 'How many languages are supported?',
    answer: 'We support over 248 languages including English, Spanish, French, German, Chinese (Simplified and Traditional), Japanese, Korean, Arabic, Hindi, Urdu, Portuguese, Russian, Italian, Dutch, Turkish, Vietnamese, Thai, Indonesian, and many more regional and minority languages. You can translate between any combination of these languages.',
  },
  {
    question: 'Can I translate documents?',
    answer: 'Yes, you can upload DOCX and TXT files for translation. Simply click the "Upload" button below the input area to select your document. The text will be extracted and translated automatically. The maximum file size is approximately 10MB.',
  },
  {
    question: 'Is my translation data stored?',
    answer: 'Translation history is stored locally in your browser for convenience. You can clear it anytime from the history sidebar. We do not store your translations on our servers. Your privacy is protected.',
  },
  {
    question: 'How accurate are the translations?',
    answer: 'Our translations use advanced AI and Google Translate technology, providing 90-95% accuracy for most language pairs. For general communication, travel, and everyday use, accuracy is excellent. For professional, legal, or medical documents, we recommend human verification.',
  },
  {
    question: 'Can I listen to the pronunciation?',
    answer: 'Yes, click the speaker icon next to any text to hear the pronunciation. This works for both the original text and the translation in most supported languages. Text-to-speech is powered by your browser\'s speech synthesis API.',
  },
  {
    question: 'Does Translate work on mobile devices?',
    answer: 'Yes, Translate is fully responsive and works on all devices including smartphones, tablets, and desktop computers. No app download is required - simply visit the website in your mobile browser.',
  },
  {
    question: 'Can I use voice input for translation?',
    answer: 'Yes, Translate supports voice input. Click the "Voice" button below the input area and speak in your source language. The speech recognition will convert your voice to text, which is then translated. This feature works best in Chrome, Edge, and Safari browsers.',
  },
  {
    question: 'What is the character limit for translations?',
    answer: 'Translate allows up to 5,000 characters per translation request. For longer texts, you can split your content into multiple translations. Document uploads can process texts up to approximately 50,000 characters.',
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No, Translate does not require any account creation or registration. You can start translating immediately without providing any personal information. Simply visit the website and begin translating.',
  },
]

// Statistics for trust signals
export const statsData = [
  { value: '248+', label: 'Languages Supported', icon: 'globe' },
  { value: '100%', label: 'Free Forever', icon: 'check' },
  { value: '5,000', label: 'Characters per Translation', icon: 'text' },
  { value: 'No', label: 'Registration Required', icon: 'user' },
]
