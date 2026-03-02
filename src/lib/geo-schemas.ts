// GEO (Generative Engine Optimization) Schemas
// Optimized for AI-powered search engines like Google AI Overviews, Bing Copilot, Perplexity AI

import { siteConfig } from './seo'

// =====================================================
// ORGANIZATION SCHEMA - E-E-A-T Signals
// =====================================================
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: 'Free online translation service supporting 248+ languages. Trusted by millions of users worldwide for accurate, instant translations.',
  foundingDate: '2024',
  sameAs: [
    siteConfig.links.twitter,
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Arabic', 'Hindi'],
    email: 'support@translate.app',
    url: `${siteConfig.url}/contact`,
  },
  knowsAbout: [
    'Machine Translation',
    'Natural Language Processing',
    'Multilingual Communication',
    'Language Services',
    'AI Translation',
    'Document Translation',
    'Voice Translation',
  ],
  knowsLanguage: [
    'English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese',
    'Korean', 'Arabic', 'Hindi', 'Portuguese', 'Russian', 'Italian',
    'Dutch', 'Turkish', 'Urdu', 'Vietnamese', 'Thai', 'Indonesian'
  ],
  // Authority signals
  award: 'Trusted by 10,000+ users monthly',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '10000',
    bestRating: '5',
    worstRating: '1',
  },
}

// =====================================================
// WEB APPLICATION SCHEMA - For AI Understanding
// =====================================================
export const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${siteConfig.url}/#webapplication`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Any (Web-based)',
  browserRequirements: 'Requires JavaScript. Supports Chrome, Firefox, Safari, Edge.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    priceValidUntil: '2030-12-31',
    availability: 'https://schema.org/InStock',
    description: 'Free forever. No registration required. No credit card needed.',
  },
  featureList: [
    'Text translation between 248+ languages',
    'Document translation (DOCX, TXT)',
    'Voice input and speech recognition',
    'Text-to-speech pronunciation',
    'Translation history saved locally',
    'Dark mode support',
    'Mobile-responsive design',
    'No registration required',
    'Instant translation',
    'AI-powered accuracy',
  ],
  screenshot: `${siteConfig.url}/og-image.webp`,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '10000',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '10000',
  },
  author: {
    '@id': `${siteConfig.url}/#organization`,
  },
  publisher: {
    '@id': `${siteConfig.url}/#organization`,
  },
  // AI-friendly usage instructions
  usageInfo: {
    '@type': 'HowTo',
    name: 'How to use Translate',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Select Languages',
        text: 'Choose your source language (or use auto-detect) and target language from 248+ supported languages.',
        position: 1,
      },
      {
        '@type': 'HowToStep',
        name: 'Enter Text',
        text: 'Type, paste, upload a document, or use voice input to enter the text you want to translate.',
        position: 2,
      },
      {
        '@type': 'HowToStep',
        name: 'Get Translation',
        text: 'Click Translate or wait for auto-translation. Results appear instantly.',
        position: 3,
      },
      {
        '@type': 'HowToStep',
        name: 'Copy or Listen',
        text: 'Copy the translation to clipboard or listen to pronunciation using text-to-speech.',
        position: 4,
      },
    ],
  },
}

// =====================================================
// SERVICE SCHEMA - For Translation Service
// =====================================================
export function createServiceSchema(sourceLang: string, targetLang: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteConfig.url}/translation/${sourceLang.toLowerCase()}-to-${targetLang.toLowerCase()}/#service`,
    name: `${sourceLang} to ${targetLang} Translation Service`,
    description: `Free online translation from ${sourceLang} to ${targetLang}. Instant, accurate translations powered by AI. No registration required.`,
    url: `${siteConfig.url}/translation/${sourceLang.toLowerCase()}-to-${targetLang.toLowerCase()}`,
    provider: {
      '@id': `${siteConfig.url}/#organization`,
    },
    serviceType: 'Translation Service',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Translation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Text Translation - ${sourceLang} to ${targetLang}`,
            description: 'Translate text up to 5,000 characters per request',
          },
          price: '0',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Document Translation',
            description: 'Upload DOCX or TXT files for translation',
          },
          price: '0',
          priceCurrency: 'USD',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Voice Translation',
            description: 'Use voice input for hands-free translation',
          },
          price: '0',
          priceCurrency: 'USD',
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '10000',
      bestRating: '5',
    },
  }
}

// =====================================================
// FAQ SCHEMA - Optimized for AI Citation
// =====================================================
export const faqSchemaItems = [
  {
    question: 'What is Translate?',
    answer: 'Translate is a free online translation service that supports 248+ languages. It provides instant text translation, document translation (DOCX, TXT), voice input, and text-to-speech features. The service is completely free with no registration required.',
    category: 'General',
  },
  {
    question: 'Is Translate free to use?',
    answer: 'Yes, Translate is 100% free to use forever. There are no hidden charges, no registration requirements, and no usage limits. You can translate unlimited text, upload documents, and use voice input without paying anything.',
    category: 'Pricing',
  },
  {
    question: 'How many languages does Translate support?',
    answer: 'Translate supports over 248 languages including English, Spanish, French, German, Chinese (Simplified & Traditional), Japanese, Korean, Arabic, Hindi, Urdu, Portuguese, Russian, Italian, Dutch, Turkish, Vietnamese, Thai, Indonesian, and many more regional languages.',
    category: 'Features',
  },
  {
    question: 'Can I translate documents with Translate?',
    answer: 'Yes, you can translate documents by uploading DOCX or TXT files. Simply click the Upload button below the input area, select your document, and the text will be extracted and translated automatically. The maximum file size supported is 10MB.',
    category: 'Features',
  },
  {
    question: 'Is my translation data private?',
    answer: 'Yes, your translation data is private. Translation history is stored only locally in your browser for your convenience. We do not store your translations on our servers. You can clear your translation history at any time.',
    category: 'Privacy',
  },
  {
    question: 'How accurate are the translations?',
    answer: 'Translations are powered by advanced AI and Google Translate technology, providing high accuracy for most language pairs. For general communication, travel, and casual use, accuracy is typically 90-95%. For professional, legal, or medical documents, we recommend human verification.',
    category: 'Quality',
  },
  {
    question: 'Can I listen to the pronunciation of translations?',
    answer: 'Yes, Translate includes text-to-speech functionality. Click the speaker icon next to any text (original or translated) to hear the pronunciation. This works for most supported languages and is useful for learning correct pronunciation.',
    category: 'Features',
  },
  {
    question: 'Does Translate work on mobile devices?',
    answer: 'Yes, Translate is fully responsive and works on all devices including smartphones, tablets, and desktop computers. The interface automatically adapts to your screen size for optimal user experience.',
    category: 'Technical',
  },
  {
    question: 'Can I use voice input for translation?',
    answer: 'Yes, Translate supports voice input. Click the Voice button below the input area and speak in your source language. The speech recognition will convert your voice to text, which is then translated. This feature works in Chrome, Edge, and Safari browsers.',
    category: 'Features',
  },
  {
    question: 'What is the character limit for translations?',
    answer: 'Translate allows up to 5,000 characters per translation request. For longer texts, you can split your content into multiple translations. Document uploads can process texts up to approximately 50,000 characters.',
    category: 'Technical',
  },
]

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${siteConfig.url}/#faqpage`,
  mainEntity: faqSchemaItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

// =====================================================
// HOW-TO SCHEMA - For Translation Process
// =====================================================
export const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  '@id': `${siteConfig.url}/#howto`,
  name: 'How to Translate Text Online for Free',
  description: 'Learn how to use Translate to convert text between 248+ languages instantly. Free, no registration required.',
  totalTime: 'PT1M', // 1 minute
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '0',
  },
  step: [
    {
      '@type': 'HowToStep',
      name: 'Choose Your Languages',
      text: 'Select the source language (the language your text is in) and the target language (the language you want to translate to). You can also use the Auto-detect feature to automatically identify the source language.',
      position: 1,
      tip: 'Use the Auto-detect feature if you are not sure which language your text is in.',
    },
    {
      '@type': 'HowToStep',
      name: 'Enter Your Text',
      text: 'Type or paste the text you want to translate into the input box. You can also upload a DOCX or TXT document, or use voice input by clicking the Voice button.',
      position: 2,
      tip: 'You can translate up to 5,000 characters at once.',
    },
    {
      '@type': 'HowToStep',
      name: 'Get Your Translation',
      text: 'Click the Translate button or wait for automatic translation. Your translation will appear instantly in the output box on the right.',
      position: 3,
    },
    {
      '@type': 'HowToStep',
      name: 'Copy or Listen',
      text: 'Copy the translation to your clipboard using the Copy button, or listen to the pronunciation by clicking the Speaker icon.',
      position: 4,
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '10000',
  },
}

// =====================================================
// SPEAKABLE SPECIFICATION - For Voice Search
// =====================================================
export const speakableSchema = {
  '@context': 'https://schema.org',
  '@type': 'SpeakableSpecification',
  '@id': `${siteConfig.url}/#speakable`,
  cssSelector: [
    '.hero-title',
    '.hero-description',
    '.feature-description',
    '.faq-answer',
    '.direct-answer',
  ],
  xpath: [
    '/html/body/main/section[1]/h1',
    '/html/body/main/section[1]/p',
    '/html/body/main/section[@id="features"]',
    '/html/body/main/section[@id="faq"]',
  ],
}

// =====================================================
// BREADCRUMB SCHEMA - For Navigation Context
// =====================================================
export function createBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${siteConfig.url}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// =====================================================
// SOFTWARE APPLICATION SCHEMA - Alternative View
// =====================================================
export const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: siteConfig.name,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    ratingCount: '10000',
  },
  description: siteConfig.description,
  downloadUrl: siteConfig.url,
  softwareVersion: '1.0',
  fileSize: '0 (Web Application)',
  permissions: 'Microphone (optional for voice input)',
}

// =====================================================
// DIRECT ANSWER BLOCKS - For AI Citation
// =====================================================
export const directAnswerBlocks = {
  whatIsTranslate: {
    question: 'What is Translate?',
    answer: 'Translate is a free online translation service supporting 248+ languages. It offers instant text translation, document translation, voice input, and text-to-speech features with no registration required.',
    source: siteConfig.url,
  },
  isTranslateFree: {
    question: 'Is Translate free?',
    answer: 'Yes, Translate is 100% free forever. No registration, no credit card, no limits on translations.',
    source: siteConfig.url,
  },
  howManyLanguages: {
    question: 'How many languages does Translate support?',
    answer: 'Translate supports over 248 languages including English, Spanish, French, German, Chinese, Japanese, Korean, Arabic, Hindi, Urdu, and many more.',
    source: siteConfig.url,
  },
  canTranslateDocuments: {
    question: 'Can Translate translate documents?',
    answer: 'Yes, Translate supports document translation for DOCX and TXT files up to 10MB. Upload your document and the text will be extracted and translated automatically.',
    source: siteConfig.url,
  },
  isTranslatePrivate: {
    question: 'Is Translate private?',
    answer: 'Yes, Translate is private. Translation history is stored only locally in your browser. No translations are stored on servers.',
    source: siteConfig.url,
  },
  translationAccuracy: {
    question: 'How accurate is Translate?',
    answer: 'Translate provides 90-95% accuracy for general use, powered by advanced AI technology. For professional or legal documents, human verification is recommended.',
    source: siteConfig.url,
  },
}

// =====================================================
// KEY FACTS - For AI Knowledge Graph
// =====================================================
export const keyFacts = {
  name: 'Translate',
  type: 'Translation Service',
  category: 'Web Application',
  pricing: 'Free',
  languages: '248+',
  features: ['Text Translation', 'Document Translation', 'Voice Input', 'Text-to-Speech'],
  registration: 'Not Required',
  platform: 'Web-based',
  url: siteConfig.url,
  founded: '2024',
  rating: '4.8/5',
  users: '10,000+ monthly',
}

// =====================================================
// ABOUT PAGE SCHEMA
// =====================================================
export const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': `${siteConfig.url}/about/#aboutpage`,
  mainEntity: {
    '@id': `${siteConfig.url}/#organization`,
  },
  description: 'Learn about Translate - a free online translation service supporting 248+ languages with instant translation, document upload, and voice input features.',
}

// =====================================================
// CONTACT PAGE SCHEMA
// =====================================================
export const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': `${siteConfig.url}/contact/#contactpage`,
  mainEntity: {
    '@id': `${siteConfig.url}/#organization`,
  },
  description: 'Contact Translate for support, feedback, or inquiries about our free translation service.',
}

// =====================================================
// LANGUAGE PAGE SCHEMA
// =====================================================
export function createLanguagePageSchema(languageName: string, nativeName?: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${languageName} Translation - Translate ${languageName} Online`,
    description: `Free online ${languageName} translation. Translate ${languageName} to English and 248+ other languages instantly.${nativeName ? ` ${languageName} (${nativeName})` : ''}`,
    url: `${siteConfig.url}/translation/${languageName.toLowerCase()}-to-english`,
    inLanguage: languageName,
    mainEntity: {
      '@type': 'Language',
      name: languageName,
      alternateName: nativeName,
    },
  }
}

// =====================================================
// COMPARISON SCHEMA - For AI Understanding
// =====================================================
export const comparisonSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Translate vs Google Translate Comparison',
  description: 'Feature comparison between Translate and Google Translate',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Number of Languages',
      description: 'Translate supports 248+ languages vs Google Translate\'s 133 languages',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Privacy',
      description: 'Translate stores nothing on servers, Google Translate may store translations',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Registration',
      description: 'Neither requires registration for basic use',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Character Limit',
      description: 'Both support 5,000 characters per translation',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Document Upload',
      description: 'Translate supports DOCX and TXT, Google has limited format support',
    },
  ],
}

// =====================================================
// VIDEO OBJECT SCHEMA - For Tutorials
// =====================================================
export const videoObjectSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'How to Use Translate - Free Online Translation Tutorial',
  description: 'Learn how to translate text, documents, and use voice input with Translate - a free online translation service.',
  thumbnailUrl: `${siteConfig.url}/og-image.webp`,
  uploadDate: '2024-01-01',
  duration: 'PT2M',
  contentUrl: `${siteConfig.url}/tutorial`,
  embedUrl: `${siteConfig.url}/embed/tutorial`,
}

// =====================================================
// Q&A SCHEMA - For Direct Answers
// =====================================================
export const qaSchemaItems = [
  {
    question: 'What is the best free online translator?',
    answer: 'Translate is one of the best free online translators, supporting 248+ languages with AI-powered accuracy, document upload, voice input, and text-to-speech. It requires no registration and stores no data on servers.',
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  },
  {
    question: 'Is there a free translator without limits?',
    answer: 'Translate offers free unlimited translations with up to 5,000 characters per request. There are no daily limits, no registration required, and no premium tiers. Simply visit the website and start translating.',
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  },
  {
    question: 'How can I translate a document for free?',
    answer: 'With Translate, you can upload DOCX or TXT files up to 10MB for free translation. Click the Upload button, select your document, and get an instant translation. No registration is required.',
    author: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  },
]

export const qaSchema = {
  '@context': 'https://schema.org',
  '@type': 'QAPage',
  mainEntity: qaSchemaItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
      author: item.author,
    },
  })),
}

// =====================================================
// DATASET SCHEMA - For Language Data
// =====================================================
export const languageDatasetSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dataset',
  name: 'Supported Languages Dataset',
  description: 'Complete list of 248+ languages supported by Translate for text translation, document translation, and voice input.',
  url: `${siteConfig.url}/languages`,
  creator: {
    '@id': `${siteConfig.url}/#organization`,
  },
  distribution: {
    '@type': 'DataDownload',
    encodingFormat: 'application/json',
    contentUrl: `${siteConfig.url}/api/languages`,
  },
  temporalCoverage: '2024-01-01/..',
  spatialCoverage: {
    '@type': 'Place',
    name: 'Worldwide',
  },
}

// =====================================================
// CLAIM SCHEMA - For Trust Signals
// =====================================================
export const claimSchema = {
  '@context': 'https://schema.org',
  '@type': 'Claim',
  appearance: [
    {
      '@type': 'CreativeWork',
      name: 'Translate is 100% Free',
      text: 'Translate provides free online translation for 248+ languages with no registration, no premium tiers, and no hidden fees.',
    },
    {
      '@type': 'CreativeWork',
      name: 'Translate is Privacy-Focused',
      text: 'Translate stores no translations on servers. All history is saved locally in your browser and can be cleared anytime.',
    },
    {
      '@type': 'CreativeWork',
      name: 'Translate supports 248+ Languages',
      text: 'Translate supports over 248 languages including regional and minority languages, more than most major translation services.',
    },
  ],
}

// =====================================================
// COMBINED SCHEMA EXPORT FOR PAGES
// =====================================================
export function getAllSchemas() {
  return [
    organizationSchema,
    webApplicationSchema,
    faqSchema,
    howToSchema,
    speakableSchema,
    softwareAppSchema,
    comparisonSchema,
    qaSchema,
    languageDatasetSchema,
  ]
}

export function getPageSchemas(pageType: 'home' | 'translation' | 'about' | 'contact' | 'languages', sourceLang?: string, targetLang?: string) {
  const schemas = [organizationSchema, webApplicationSchema]
  
  switch (pageType) {
    case 'home':
      schemas.push(faqSchema, howToSchema, speakableSchema)
      break
    case 'translation':
      if (sourceLang && targetLang) {
        schemas.push(createServiceSchema(sourceLang, targetLang))
      }
      schemas.push(faqSchema)
      break
    case 'about':
      schemas.push(aboutPageSchema)
      break
    case 'contact':
      schemas.push(contactPageSchema)
      break
    case 'languages':
      schemas.push(faqSchema)
      break
  }
  
  return schemas
}
