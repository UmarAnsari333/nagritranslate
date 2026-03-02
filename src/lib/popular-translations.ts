// Popular translation pairs organized by source language
// Complete data for ALL 248 languages based on search volume, linguistic relationships, and geographic proximity

export interface PopularPair {
  target: string;
  reason?: string;
}

// Complete popular translations for all 248 languages
export const popularTranslationsBySource: Record<string, PopularPair[]> = {
  // === MAJOR LANGUAGES ===
  
  // Hindi - Most searched pairs
  'hi': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Tamil', reason: 'South Indian' },
    { target: 'Punjabi', reason: 'North Indian' },
    { target: 'Urdu', reason: 'Similar Script' },
    { target: 'Malayalam', reason: 'South Indian' },
    { target: 'Nepali', reason: 'Neighboring' },
    { target: 'Bengali', reason: 'East Indian' },
    { target: 'Marathi', reason: 'West Indian' },
    { target: 'Gujarati', reason: 'West Indian' },
    { target: 'Telugu', reason: 'South Indian' },
    { target: 'Kannada', reason: 'South Indian' },
    { target: 'Arabic', reason: 'Business' },
  ],

  // English - Most searched pairs
  'en': [
    { target: 'Spanish', reason: '500M+ speakers' },
    { target: 'French', reason: '300M+ speakers' },
    { target: 'German', reason: '130M+ speakers' },
    { target: 'Chinese', reason: '1.3B+ speakers' },
    { target: 'Japanese', reason: '125M+ speakers' },
    { target: 'Korean', reason: '77M+ speakers' },
    { target: 'Arabic', reason: '400M+ speakers' },
    { target: 'Hindi', reason: '600M+ speakers' },
    { target: 'Portuguese', reason: '260M+ speakers' },
    { target: 'Russian', reason: '258M+ speakers' },
    { target: 'Italian', reason: '70M+ speakers' },
    { target: 'Urdu', reason: '230M+ speakers' },
  ],

  // Spanish - Most searched pairs
  'es': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Romance Language' },
    { target: 'Portuguese', reason: 'Similar Language' },
    { target: 'Italian', reason: 'Romance Language' },
    { target: 'German', reason: 'Business' },
    { target: 'Chinese', reason: 'Growing Demand' },
    { target: 'Arabic', reason: 'Business' },
    { target: 'Japanese', reason: 'Business' },
    { target: 'Catalan', reason: 'Regional' },
    { target: 'Galician', reason: 'Regional' },
  ],

  // French - Most searched pairs
  'fr': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Romance Language' },
    { target: 'German', reason: 'EU Business' },
    { target: 'Italian', reason: 'Romance Language' },
    { target: 'Portuguese', reason: 'Romance Language' },
    { target: 'Arabic', reason: 'Large Community' },
    { target: 'Chinese', reason: 'Business' },
    { target: 'Dutch', reason: 'EU Neighbor' },
  ],

  // German - Most searched pairs
  'de': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'EU Neighbor' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'Italian', reason: 'EU Neighbor' },
    { target: 'Turkish', reason: 'Large Community' },
    { target: 'Polish', reason: 'Neighbor' },
    { target: 'Russian', reason: 'Business' },
    { target: 'Dutch', reason: 'Germanic' },
  ],

  // Chinese - Most searched pairs
  'zh-CN': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Japanese', reason: 'Similar Characters' },
    { target: 'Korean', reason: 'East Asian' },
    { target: 'Spanish', reason: 'Business' },
    { target: 'French', reason: 'Business' },
    { target: 'German', reason: 'Business' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Vietnamese', reason: 'Neighbor' },
    { target: 'Thai', reason: 'Neighbor' },
    { target: 'Chinese Traditional', reason: 'Variant' },
  ],

  // Chinese Traditional - Most searched pairs
  'zh-TW': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chinese', reason: 'Simplified Chinese' },
    { target: 'Japanese', reason: 'Similar Characters' },
    { target: 'Korean', reason: 'East Asian' },
    { target: 'Vietnamese', reason: 'Neighbor' },
    { target: 'Cantonese', reason: 'Chinese Variant' },
  ],

  // Japanese - Most searched pairs
  'ja': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chinese', reason: 'Similar Characters' },
    { target: 'Korean', reason: 'East Asian' },
    { target: 'Spanish', reason: 'Business' },
    { target: 'French', reason: 'Business' },
    { target: 'German', reason: 'Business' },
    { target: 'Portuguese', reason: 'Brazilian Ties' },
    { target: 'Vietnamese', reason: 'Asian' },
  ],

  // Korean - Most searched pairs
  'ko': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chinese', reason: 'East Asian' },
    { target: 'Japanese', reason: 'East Asian' },
    { target: 'Spanish', reason: 'Growing Demand' },
    { target: 'Vietnamese', reason: 'Southeast Asian' },
    { target: 'Thai', reason: 'Southeast Asian' },
    { target: 'Russian', reason: 'Neighbor' },
  ],

  // Arabic - Most searched pairs
  'ar': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Colonial Ties' },
    { target: 'Spanish', reason: 'Historical Ties' },
    { target: 'Urdu', reason: 'Similar Script' },
    { target: 'Persian', reason: 'Neighbor' },
    { target: 'Turkish', reason: 'Neighbor' },
    { target: 'Hindi', reason: 'Business' },
    { target: 'Hebrew', reason: 'Regional' },
  ],

  // Urdu - Most searched pairs
  'ur': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Similar Language' },
    { target: 'Arabic', reason: 'Similar Script' },
    { target: 'Punjabi', reason: 'Regional' },
    { target: 'Persian', reason: 'Literary Ties' },
    { target: 'Sindhi', reason: 'Regional' },
    { target: 'Turkish', reason: 'Business' },
    { target: 'Pashto', reason: 'Regional' },
  ],

  // Portuguese - Most searched pairs
  'pt': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Similar Language' },
    { target: 'French', reason: 'Romance Language' },
    { target: 'Italian', reason: 'Romance Language' },
    { target: 'German', reason: 'Business' },
    { target: 'Japanese', reason: 'Brazilian Ties' },
    { target: 'Chinese', reason: 'Business' },
  ],

  // Portuguese Portugal
  'pt-PT': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Neighbor' },
    { target: 'French', reason: 'EU' },
    { target: 'Portuguese Brazil', reason: 'Variant' },
    { target: 'German', reason: 'EU Business' },
  ],

  // Russian - Most searched pairs
  'ru': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Business' },
    { target: 'French', reason: 'Cultural' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'Chinese', reason: 'Neighbor' },
    { target: 'Turkish', reason: 'Business' },
    { target: 'Ukrainian', reason: 'Neighbor' },
    { target: 'Belarusian', reason: 'Neighbor' },
  ],

  // Italian - Most searched pairs
  'it': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Romance Language' },
    { target: 'French', reason: 'Romance Language' },
    { target: 'German', reason: 'EU Business' },
    { target: 'Portuguese', reason: 'Romance Language' },
    { target: 'Romanian', reason: 'Romance Language' },
    { target: 'Albanian', reason: 'Neighbor' },
  ],

  // Turkish - Most searched pairs
  'tr': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Large Community' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Russian', reason: 'Business' },
    { target: 'Persian', reason: 'Neighbor' },
    { target: 'French', reason: 'Cultural' },
    { target: 'Kurdish Kurmanji', reason: 'Regional' },
  ],

  // Persian/Farsi - Most searched pairs
  'fa': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Similar Script' },
    { target: 'Urdu', reason: 'Literary Ties' },
    { target: 'Turkish', reason: 'Neighbor' },
    { target: 'Hindi', reason: 'Literary Ties' },
    { target: 'Dari', reason: 'Similar Language' },
    { target: 'Pashto', reason: 'Neighbor' },
    { target: 'Kurdish Sorani', reason: 'Regional' },
  ],

  // === INDIAN LANGUAGES ===
  
  // Tamil - Most searched pairs
  'ta': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian Language' },
    { target: 'Malayalam', reason: 'Dravidian' },
    { target: 'Telugu', reason: 'Dravidian' },
    { target: 'Kannada', reason: 'Dravidian' },
    { target: 'Sinhala', reason: 'Neighbor' },
    { target: 'Malay', reason: 'Malaysian Ties' },
  ],

  // Telugu - Most searched pairs
  'te': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian Language' },
    { target: 'Tamil', reason: 'Dravidian' },
    { target: 'Malayalam', reason: 'Dravidian' },
    { target: 'Kannada', reason: 'Dravidian' },
    { target: 'Marathi', reason: 'Neighbor' },
  ],

  // Malayalam - Most searched pairs
  'ml': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian Language' },
    { target: 'Tamil', reason: 'Dravidian' },
    { target: 'Telugu', reason: 'Dravidian' },
    { target: 'Kannada', reason: 'Dravidian' },
    { target: 'Arabic', reason: 'Gulf Ties' },
  ],

  // Punjabi Gurmukhi - Most searched pairs
  'pa': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'North Indian' },
    { target: 'Urdu', reason: 'Similar Language' },
    { target: 'Arabic', reason: 'Gulf Ties' },
    { target: 'Sindhi', reason: 'Regional' },
    { target: 'Punjabi Shahmukhi', reason: 'Variant' },
  ],

  // Punjabi Shahmukhi
  'pa-Arab': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Urdu', reason: 'Similar Script' },
    { target: 'Punjabi Gurmukhi', reason: 'Variant' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Arabic', reason: 'Similar Script' },
  ],

  // Bengali - Most searched pairs
  'bn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian Language' },
    { target: 'Urdu', reason: 'Regional' },
    { target: 'Assamese', reason: 'Similar Language' },
    { target: 'Nepali', reason: 'Neighbor' },
    { target: 'Arabic', reason: 'Business' },
  ],

  // Marathi - Most searched pairs
  'mr': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian Language' },
    { target: 'Gujarati', reason: 'Neighbor' },
    { target: 'Kannada', reason: 'Neighbor' },
    { target: 'Telugu', reason: 'Neighbor' },
    { target: 'Sanskrit', reason: 'Historical' },
  ],

  // Gujarati - Most searched pairs
  'gu': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian Language' },
    { target: 'Marathi', reason: 'Neighbor' },
    { target: 'Punjabi', reason: 'North Indian' },
    { target: 'Sindhi', reason: 'Regional' },
    { target: 'Arabic', reason: 'Gulf Ties' },
  ],

  // Kannada - Most searched pairs
  'kn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian Language' },
    { target: 'Tamil', reason: 'Dravidian' },
    { target: 'Telugu', reason: 'Dravidian' },
    { target: 'Malayalam', reason: 'Dravidian' },
    { target: 'Marathi', reason: 'Neighbor' },
  ],

  // Assamese - Most searched pairs
  'as': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian Language' },
    { target: 'Bengali', reason: 'Similar Language' },
    { target: 'Nepali', reason: 'Neighbor' },
    { target: 'Bodo', reason: 'Regional' },
  ],

  // Nepali - Most searched pairs
  'ne': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Similar Language' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Tamil', reason: 'Indian' },
    { target: 'Urdu', reason: 'Regional' },
    { target: 'Tibetan', reason: 'Neighbor' },
  ],

  // Sindhi
  'sd': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Urdu', reason: 'Regional' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Punjabi', reason: 'Regional' },
    { target: 'Gujarati', reason: 'Regional' },
    { target: 'Arabic', reason: 'Similar Script' },
  ],

  // Odia
  'or': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Telugu', reason: 'Neighbor' },
    { target: 'Assamese', reason: 'East Indian' },
  ],

  // Sanskrit
  'sa': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Derived' },
    { target: 'Nepali', reason: 'Derived' },
    { target: 'Bengali', reason: 'Derived' },
    { target: 'Marathi', reason: 'Derived' },
    { target: 'Latin', reason: 'Classical' },
  ],

  // Sinhala
  'si': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Tamil', reason: 'Sri Lankan' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Malayalam', reason: 'Dravidian' },
    { target: 'Pali', reason: 'Historical' },
  ],

  // Bhojpuri
  'bho': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Related' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Urdu', reason: 'Regional' },
    { target: 'Nepali', reason: 'Regional' },
  ],

  // Maithili
  'mai': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Related' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Nepali', reason: 'Regional' },
    { target: 'Bhojpuri', reason: 'Related' },
  ],

  // Dogri
  'doi': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Related' },
    { target: 'Punjabi', reason: 'Neighbor' },
    { target: 'Urdu', reason: 'Regional' },
    { target: 'Kashmiri', reason: 'Regional' },
  ],

  // Konkani
  'gom': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Marathi', reason: 'Neighbor' },
    { target: 'Kannada', reason: 'Neighbor' },
    { target: 'Portuguese', reason: 'Historical' },
  ],

  // Awadhi
  'awa': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Related' },
    { target: 'Bhojpuri', reason: 'Related' },
    { target: 'Urdu', reason: 'Regional' },
  ],

  // Marwadi
  'mwr': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Related' },
    { target: 'Gujarati', reason: 'Neighbor' },
    { target: 'Punjabi', reason: 'Regional' },
    { target: 'Rajasthani', reason: 'Regional' },
  ],

  // Meiteilon Manipuri
  'mni-Mtei': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Assamese', reason: 'Neighbor' },
    { target: 'Burmese', reason: 'Neighbor' },
  ],

  // === SOUTHEAST ASIAN LANGUAGES ===
  
  // Vietnamese - Most searched pairs
  'vi': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chinese', reason: 'East Asian' },
    { target: 'Korean', reason: 'Business' },
    { target: 'Japanese', reason: 'Business' },
    { target: 'French', reason: 'Historical' },
    { target: 'Thai', reason: 'Neighbor' },
    { target: 'Khmer', reason: 'Neighbor' },
  ],

  // Thai - Most searched pairs
  'th': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chinese', reason: 'Business' },
    { target: 'Japanese', reason: 'Business' },
    { target: 'Korean', reason: 'Business' },
    { target: 'Vietnamese', reason: 'Neighbor' },
    { target: 'Malay', reason: 'Neighbor' },
    { target: 'Lao', reason: 'Similar Language' },
  ],

  // Indonesian - Most searched pairs
  'id': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Malay', reason: 'Similar Language' },
    { target: 'Japanese', reason: 'Business' },
    { target: 'Chinese', reason: 'Business' },
    { target: 'Korean', reason: 'Business' },
    { target: 'Dutch', reason: 'Historical' },
    { target: 'Arabic', reason: 'Religious' },
  ],

  // Malay - Most searched pairs
  'ms': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'Similar Language' },
    { target: 'Chinese', reason: 'Business' },
    { target: 'Tamil', reason: 'Community' },
    { target: 'Thai', reason: 'Neighbor' },
    { target: 'Arabic', reason: 'Religious' },
    { target: 'Japanese', reason: 'Business' },
  ],

  // Jawi (Malay Arabic script)
  'ms-Arab': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Malay', reason: 'Same Language' },
    { target: 'Arabic', reason: 'Similar Script' },
    { target: 'Indonesian', reason: 'Related' },
  ],

  // Khmer
  'km': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Thai', reason: 'Neighbor' },
    { target: 'Vietnamese', reason: 'Neighbor' },
    { target: 'Chinese', reason: 'Business' },
    { target: 'French', reason: 'Historical' },
  ],

  // Lao
  'lo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Thai', reason: 'Similar Language' },
    { target: 'Vietnamese', reason: 'Neighbor' },
    { target: 'Chinese', reason: 'Business' },
    { target: 'French', reason: 'Historical' },
  ],

  // Myanmar Burmese
  'my': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Thai', reason: 'Neighbor' },
    { target: 'Chinese', reason: 'Neighbor' },
    { target: 'Japanese', reason: 'Business' },
    { target: 'Bengali', reason: 'Neighbor' },
  ],

  // Tagalog/Filipino - Most searched pairs
  'tl': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Historical' },
    { target: 'Chinese', reason: 'Business' },
    { target: 'Japanese', reason: 'Business' },
    { target: 'Korean', reason: 'Business' },
    { target: 'Indonesian', reason: 'Neighbor' },
  ],

  // Cebuano
  'ceb': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Tagalog', reason: 'Filipino' },
    { target: 'Spanish', reason: 'Historical' },
    { target: 'Japanese', reason: 'Business' },
  ],

  // Ilocano
  'ilo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Tagalog', reason: 'Filipino' },
    { target: 'Spanish', reason: 'Historical' },
  ],

  // Hiligaynon
  'hil': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Tagalog', reason: 'Filipino' },
    { target: 'Cebuano', reason: 'Filipino' },
  ],

  // Kapampangan
  'pam': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Tagalog', reason: 'Filipino' },
    { target: 'Spanish', reason: 'Historical' },
  ],

  // Waray
  'war': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Tagalog', reason: 'Filipino' },
    { target: 'Cebuano', reason: 'Filipino' },
  ],

  // Javanese
  'jw': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Malay', reason: 'Related' },
    { target: 'Dutch', reason: 'Historical' },
  ],

  // Sundanese
  'su': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Javanese', reason: 'Neighbor' },
    { target: 'Malay', reason: 'Related' },
  ],

  // Madurese
  'mad': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Javanese', reason: 'Neighbor' },
  ],

  // Minang
  'min': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Malay', reason: 'Related' },
    { target: 'Javanese', reason: 'Indonesian' },
  ],

  // Balinese
  'ban': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Javanese', reason: 'Neighbor' },
    { target: 'Malay', reason: 'Related' },
  ],

  // Acehnese
  'ace': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Malay', reason: 'Related' },
    { target: 'Arabic', reason: 'Religious' },
  ],

  // Betawi
  'bew': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Javanese', reason: 'Neighbor' },
    { target: 'Malay', reason: 'Related' },
  ],

  // Iban
  'iba': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Malay', reason: 'National Language' },
    { target: 'Indonesian', reason: 'Related' },
  ],

  // Makassar
  'mak': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Buginese', reason: 'Related' },
  ],

  // Batak Toba
  'bbc': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Batak Karo', reason: 'Related' },
    { target: 'Batak Simalungun', reason: 'Related' },
  ],

  // Batak Karo
  'btx': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Batak Toba', reason: 'Related' },
  ],

  // Batak Simalungun
  'bts': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Indonesian', reason: 'National Language' },
    { target: 'Batak Toba', reason: 'Related' },
  ],

  // Bikol
  'bik': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Tagalog', reason: 'Filipino' },
    { target: 'Spanish', reason: 'Historical' },
  ],

  // Pangasinan
  'pag': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Tagalog', reason: 'Filipino' },
    { target: 'Ilocano', reason: 'Neighbor' },
  ],

  // Tetum
  'tet': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Portuguese', reason: 'Official' },
    { target: 'Indonesian', reason: 'Neighbor' },
  ],

  // Chamorro
  'ch': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Historical' },
    { target: 'Tagalog', reason: 'Regional' },
  ],

  // Chuukese
  'chk': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Japanese', reason: 'Regional' },
  ],

  // Fijian
  'fj': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Community' },
    { target: 'Samoan', reason: 'Pacific' },
  ],

  // Samoan
  'sm': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Fijian', reason: 'Pacific' },
    { target: 'Tongan', reason: 'Pacific' },
  ],

  // Tongan
  'to': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Samoan', reason: 'Pacific' },
    { target: 'Fijian', reason: 'Pacific' },
  ],

  // Tahitian
  'ty': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Hawaiian', reason: 'Related' },
  ],

  // Maori
  'mi': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Samoan', reason: 'Pacific' },
    { target: 'Tongan', reason: 'Pacific' },
  ],

  // Hawaiian
  'haw': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Japanese', reason: 'Community' },
    { target: 'Tahitian', reason: 'Related' },
    { target: 'Samoan', reason: 'Pacific' },
  ],

  // Marshallese
  'mh': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Japanese', reason: 'Regional' },
  ],

  // === EUROPEAN LANGUAGES ===
  
  // Dutch - Most searched pairs
  'nl': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Germanic Language' },
    { target: 'French', reason: 'EU Neighbor' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'Indonesian', reason: 'Historical' },
    { target: 'Turkish', reason: 'Large Community' },
    { target: 'Arabic', reason: 'Community' },
  ],

  // Polish - Most searched pairs
  'pl': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Neighbor' },
    { target: 'Russian', reason: 'Slavic Language' },
    { target: 'Ukrainian', reason: 'Neighbor' },
    { target: 'French', reason: 'EU' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'Czech', reason: 'Neighbor' },
  ],

  // Ukrainian - Most searched pairs
  'uk': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Slavic Language' },
    { target: 'Polish', reason: 'Neighbor' },
    { target: 'German', reason: 'Business' },
    { target: 'Turkish', reason: 'Business' },
    { target: 'Belarusian', reason: 'Neighbor' },
  ],

  // Greek - Most searched pairs
  'el': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'EU Business' },
    { target: 'French', reason: 'EU' },
    { target: 'Italian', reason: 'Mediterranean' },
    { target: 'Turkish', reason: 'Neighbor' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'Albanian', reason: 'Neighbor' },
  ],

  // Hebrew - Most searched pairs
  'he': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Russian', reason: 'Large Community' },
    { target: 'French', reason: 'Business' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'Yiddish', reason: 'Historical' },
  ],

  // Czech - Most searched pairs
  'cs': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Neighbor' },
    { target: 'Slovak', reason: 'Similar Language' },
    { target: 'Russian', reason: 'Slavic' },
    { target: 'Polish', reason: 'Neighbor' },
    { target: 'French', reason: 'EU' },
  ],

  // Slovak - Most searched pairs
  'sk': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Czech', reason: 'Similar Language' },
    { target: 'German', reason: 'Business' },
    { target: 'Hungarian', reason: 'Neighbor' },
    { target: 'Polish', reason: 'Neighbor' },
    { target: 'Russian', reason: 'Slavic' },
  ],

  // Hungarian - Most searched pairs
  'hu': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Neighbor' },
    { target: 'Romanian', reason: 'Neighbor' },
    { target: 'Slovak', reason: 'Neighbor' },
    { target: 'French', reason: 'EU' },
    { target: 'Spanish', reason: 'Popular' },
  ],

  // Romanian - Most searched pairs
  'ro': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Italian', reason: 'Romance Language' },
    { target: 'French', reason: 'Romance Language' },
    { target: 'Spanish', reason: 'Romance Language' },
    { target: 'German', reason: 'EU Business' },
    { target: 'Hungarian', reason: 'Neighbor' },
  ],

  // Bulgarian - Most searched pairs
  'bg': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Slavic' },
    { target: 'German', reason: 'EU Business' },
    { target: 'Turkish', reason: 'Neighbor' },
    { target: 'Greek', reason: 'Neighbor' },
    { target: 'Serbian', reason: 'Neighbor' },
  ],

  // Croatian - Most searched pairs
  'hr': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'EU Business' },
    { target: 'Italian', reason: 'Neighbor' },
    { target: 'Serbian', reason: 'Similar Language' },
    { target: 'Slovenian', reason: 'Neighbor' },
    { target: 'Spanish', reason: 'Popular' },
  ],

  // Serbian - Most searched pairs
  'sr': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Business' },
    { target: 'Croatian', reason: 'Similar Language' },
    { target: 'Russian', reason: 'Slavic' },
    { target: 'Hungarian', reason: 'Neighbor' },
    { target: 'Bulgarian', reason: 'Neighbor' },
  ],

  // Slovenian - Most searched pairs
  'sl': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Neighbor' },
    { target: 'Italian', reason: 'Neighbor' },
    { target: 'Croatian', reason: 'Neighbor' },
    { target: 'Hungarian', reason: 'Neighbor' },
  ],

  // Bosnian - Most searched pairs
  'bs': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Business' },
    { target: 'Croatian', reason: 'Similar Language' },
    { target: 'Serbian', reason: 'Similar Language' },
    { target: 'Turkish', reason: 'Historical' },
  ],

  // Macedonian
  'mk': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Bulgarian', reason: 'Similar Language' },
    { target: 'Serbian', reason: 'Neighbor' },
    { target: 'Greek', reason: 'Neighbor' },
    { target: 'German', reason: 'Business' },
  ],

  // Albanian - Most searched pairs
  'sq': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Italian', reason: 'Neighbor' },
    { target: 'Greek', reason: 'Neighbor' },
    { target: 'German', reason: 'Business' },
    { target: 'Turkish', reason: 'Historical' },
  ],

  // Belarusian - Most searched pairs
  'be': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Similar Language' },
    { target: 'Ukrainian', reason: 'Neighbor' },
    { target: 'Polish', reason: 'Neighbor' },
    { target: 'German', reason: 'Business' },
  ],

  // Lithuanian - Most searched pairs
  'lt': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'EU Business' },
    { target: 'Russian', reason: 'Historical' },
    { target: 'Polish', reason: 'Neighbor' },
    { target: 'Latvian', reason: 'Baltic' },
    { target: 'Spanish', reason: 'Popular' },
  ],

  // Latvian - Most searched pairs
  'lv': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'EU Business' },
    { target: 'Russian', reason: 'Historical' },
    { target: 'Lithuanian', reason: 'Baltic' },
    { target: 'Estonian', reason: 'Baltic' },
  ],

  // Estonian - Most searched pairs
  'et': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Finnish', reason: 'Similar Language' },
    { target: 'Russian', reason: 'Historical' },
    { target: 'German', reason: 'EU Business' },
    { target: 'Swedish', reason: 'Historical' },
  ],

  // Swedish - Most searched pairs
  'sv': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Germanic' },
    { target: 'Norwegian', reason: 'Scandinavian' },
    { target: 'Danish', reason: 'Scandinavian' },
    { target: 'Finnish', reason: 'Neighbor' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'French', reason: 'EU' },
  ],

  // Norwegian - Most searched pairs
  'no': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Swedish', reason: 'Scandinavian' },
    { target: 'Danish', reason: 'Scandinavian' },
    { target: 'German', reason: 'Germanic' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'Finnish', reason: 'Neighbor' },
  ],

  // Danish - Most searched pairs
  'da': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Germanic' },
    { target: 'Swedish', reason: 'Scandinavian' },
    { target: 'Norwegian', reason: 'Scandinavian' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'French', reason: 'EU' },
  ],

  // Finnish - Most searched pairs
  'fi': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Swedish', reason: 'Neighbor' },
    { target: 'German', reason: 'Business' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'Estonian', reason: 'Related' },
  ],

  // Icelandic - Most searched pairs
  'is': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Germanic' },
    { target: 'Danish', reason: 'Scandinavian' },
    { target: 'Norwegian', reason: 'Scandinavian' },
    { target: 'Swedish', reason: 'Scandinavian' },
  ],

  // Faroese
  'fo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Danish', reason: 'Related' },
    { target: 'Icelandic', reason: 'Related' },
    { target: 'Norwegian', reason: 'Related' },
  ],

  // Irish
  'ga': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Welsh', reason: 'Celtic' },
    { target: 'Scots Gaelic', reason: 'Celtic' },
    { target: 'French', reason: 'EU' },
    { target: 'Spanish', reason: 'Popular' },
  ],

  // Welsh
  'cy': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Irish', reason: 'Celtic' },
    { target: 'Scots Gaelic', reason: 'Celtic' },
    { target: 'French', reason: 'EU' },
  ],

  // Scots Gaelic
  'gd': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Irish', reason: 'Celtic' },
    { target: 'Welsh', reason: 'Celtic' },
  ],

  // Breton
  'br': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Regional' },
    { target: 'Welsh', reason: 'Celtic' },
  ],

  // Manx
  'gv': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Irish', reason: 'Celtic' },
    { target: 'Scots Gaelic', reason: 'Celtic' },
  ],

  // Basque
  'eu': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'French', reason: 'Regional' },
    { target: 'Catalan', reason: 'Neighbor' },
  ],

  // Catalan
  'ca': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'French', reason: 'Neighbor' },
    { target: 'Italian', reason: 'Romance' },
    { target: 'Portuguese', reason: 'Romance' },
  ],

  // Galician
  'gl': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'Portuguese', reason: 'Similar Language' },
    { target: 'Catalan', reason: 'Regional' },
  ],

  // Corsican
  'co': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Regional' },
    { target: 'Italian', reason: 'Similar Language' },
  ],

  // Occitan
  'oc': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Regional' },
    { target: 'Catalan', reason: 'Similar' },
    { target: 'Spanish', reason: 'Romance' },
  ],

  // Friulian
  'fur': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Italian', reason: 'Regional' },
    { target: 'German', reason: 'Neighbor' },
  ],

  // Ligurian
  'lij': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Italian', reason: 'Regional' },
    { target: 'Genoese', reason: 'Related' },
  ],

  // Lombard
  'lmo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Italian', reason: 'Regional' },
    { target: 'German', reason: 'Neighbor' },
  ],

  // Venetian
  'vec': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Italian', reason: 'Regional' },
    { target: 'Croatian', reason: 'Neighbor' },
  ],

  // Sicilian
  'scn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Italian', reason: 'Regional' },
    { target: 'Arabic', reason: 'Historical' },
  ],

  // Sardinian (not in list but adding related)
  // Limburgish
  'li': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Dutch', reason: 'Neighbor' },
    { target: 'German', reason: 'Neighbor' },
  ],

  // Luxembourgish
  'lb': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Neighbor' },
    { target: 'French', reason: 'Official' },
    { target: 'Dutch', reason: 'Neighbor' },
  ],

  // Frisian
  'fy': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Dutch', reason: 'Regional' },
    { target: 'German', reason: 'Related' },
  ],

  // Hunsrik
  'hrx': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Related' },
    { target: 'Portuguese', reason: 'Brazilian' },
  ],

  // Silesian
  'szl': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Polish', reason: 'Regional' },
    { target: 'German', reason: 'Neighbor' },
    { target: 'Czech', reason: 'Neighbor' },
  ],

  // Latgalian
  'ltg': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Latvian', reason: 'Regional' },
    { target: 'Russian', reason: 'Neighbor' },
  ],

  // Sami North
  'se': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Norwegian', reason: 'Regional' },
    { target: 'Swedish', reason: 'Regional' },
    { target: 'Finnish', reason: 'Neighbor' },
  ],

  // === MIDDLE EASTERN LANGUAGES ===
  
  // Dari
  'fa-AF': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Persian', reason: 'Similar Language' },
    { target: 'Pashto', reason: 'Afghan' },
    { target: 'Hindi', reason: 'Business' },
    { target: 'Urdu', reason: 'Business' },
  ],

  // Pashto
  'ps': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Dari', reason: 'Afghan' },
    { target: 'Urdu', reason: 'Neighbor' },
    { target: 'Persian', reason: 'Neighbor' },
    { target: 'Arabic', reason: 'Religious' },
  ],

  // Kurdish Kurmanji
  'ku': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Turkish', reason: 'Regional' },
    { target: 'Arabic', reason: 'Regional' },
    { target: 'Persian', reason: 'Regional' },
    { target: 'Kurdish Sorani', reason: 'Variant' },
  ],

  // Kurdish Sorani
  'ckb': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Similar Script' },
    { target: 'Persian', reason: 'Neighbor' },
    { target: 'Kurdish Kurmanji', reason: 'Variant' },
    { target: 'Turkish', reason: 'Regional' },
  ],

  // Armenian
  'hy': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Turkish', reason: 'Neighbor' },
    { target: 'Persian', reason: 'Neighbor' },
    { target: 'Arabic', reason: 'Business' },
  ],

  // Georgian
  'ka': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Turkish', reason: 'Neighbor' },
    { target: 'Armenian', reason: 'Neighbor' },
    { target: 'Persian', reason: 'Neighbor' },
  ],

  // Azerbaijani
  'az': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Turkish', reason: 'Similar Language' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Persian', reason: 'Neighbor' },
    { target: 'Armenian', reason: 'Regional' },
  ],

  // Turkish (already covered above)
  
  // Dhivehi (Maldivian)
  'dv': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Religious' },
    { target: 'Sinhala', reason: 'Related' },
    { target: 'Hindi', reason: 'Business' },
  ],

  // Uyghur
  'ug': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chinese', reason: 'Regional' },
    { target: 'Turkish', reason: 'Related' },
    { target: 'Arabic', reason: 'Similar Script' },
  ],

  // Tajik
  'tg': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Persian', reason: 'Similar Language' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Uzbek', reason: 'Neighbor' },
  ],

  // Turkmen
  'tk': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Turkish', reason: 'Related' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Persian', reason: 'Neighbor' },
    { target: 'Uzbek', reason: 'Neighbor' },
  ],

  // Uzbek
  'uz': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Turkish', reason: 'Related' },
    { target: 'Tajik', reason: 'Neighbor' },
    { target: 'Persian', reason: 'Neighbor' },
  ],

  // Kazakh
  'kk': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Turkish', reason: 'Related' },
    { target: 'Chinese', reason: 'Neighbor' },
    { target: 'Uzbek', reason: 'Neighbor' },
  ],

  // Kyrgyz
  'ky': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Turkish', reason: 'Related' },
    { target: 'Kazakh', reason: 'Neighbor' },
    { target: 'Chinese', reason: 'Neighbor' },
  ],

  // Tatar
  'tt': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Turkish', reason: 'Related' },
    { target: 'Tatar', reason: 'Turkic' },
  ],

  // Bashkir
  'ba': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Tatar', reason: 'Neighbor' },
    { target: 'Turkish', reason: 'Related' },
  ],

  // Chuvash
  'cv': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Tatar', reason: 'Neighbor' },
  ],

  // Yakut
  'sah': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Turkish', reason: 'Related' },
  ],

  // Tuvan
  'tyv': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Mongolian', reason: 'Neighbor' },
    { target: 'Turkish', reason: 'Related' },
  ],

  // Udmurt
  'udm': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Finnish', reason: 'Related' },
  ],

  // Komi
  'kv': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Finnish', reason: 'Related' },
  ],

  // Meadow Mari
  'chm': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Finnish', reason: 'Related' },
  ],

  // Buryat
  'bua': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Mongolian', reason: 'Related' },
  ],

  // Ossetian
  'os': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Georgian', reason: 'Neighbor' },
    { target: 'Persian', reason: 'Related' },
  ],

  // Chechen
  'ce': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Arabic', reason: 'Religious' },
  ],

  // Avar
  'av': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Arabic', reason: 'Religious' },
  ],

  // Abkhaz
  'ab': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Georgian', reason: 'Neighbor' },
  ],

  // Crimean Tatar
  'crh': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Turkish', reason: 'Related' },
    { target: 'Russian', reason: 'Regional' },
    { target: 'Ukrainian', reason: 'Regional' },
  ],

  // Egyptian Arabic
  'arz': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Standard Arabic' },
    { target: 'French', reason: 'Business' },
    { target: 'Spanish', reason: 'Popular' },
  ],

  // Yiddish
  'yi': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hebrew', reason: 'Related' },
    { target: 'German', reason: 'Related' },
    { target: 'Russian', reason: 'Community' },
  ],

  // Romani
  'rom': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Romanian', reason: 'Historical' },
    { target: 'Hindi', reason: 'Origin' },
    { target: 'Spanish', reason: 'Community' },
  ],

  // === AFRICAN LANGUAGES ===
  
  // Swahili - Most searched pairs
  'sw': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Trade' },
    { target: 'French', reason: 'African' },
    { target: 'Hindi', reason: 'Business' },
    { target: 'Portuguese', reason: 'African' },
    { target: 'German', reason: 'Business' },
  ],

  // Afrikaans - Most searched pairs
  'af': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Dutch', reason: 'Similar Language' },
    { target: 'German', reason: 'Germanic' },
    { target: 'Zulu', reason: 'South African' },
    { target: 'Xhosa', reason: 'South African' },
    { target: 'Portuguese', reason: 'Neighbor' },
  ],

  // Zulu - Most searched pairs
  'zu': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Afrikaans', reason: 'South African' },
    { target: 'Xhosa', reason: 'Bantu' },
    { target: 'Swahili', reason: 'Bantu' },
    { target: 'Portuguese', reason: 'Neighbor' },
  ],

  // Xhosa - Most searched pairs
  'xh': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Afrikaans', reason: 'South African' },
    { target: 'Zulu', reason: 'Bantu' },
    { target: 'Swahili', reason: 'Bantu' },
  ],

  // Yoruba - Most searched pairs
  'yo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'African' },
    { target: 'Hausa', reason: 'Nigerian' },
    { target: 'Igbo', reason: 'Nigerian' },
    { target: 'Arabic', reason: 'Business' },
  ],

  // Hausa - Most searched pairs
  'ha': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Trade' },
    { target: 'French', reason: 'African' },
    { target: 'Yoruba', reason: 'Nigerian' },
    { target: 'Igbo', reason: 'Nigerian' },
  ],

  // Igbo - Most searched pairs
  'ig': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Yoruba', reason: 'Nigerian' },
    { target: 'Hausa', reason: 'Nigerian' },
    { target: 'French', reason: 'African' },
  ],

  // Amharic - Most searched pairs
  'am': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Tigrinya', reason: 'Ethiopian' },
    { target: 'Somali', reason: 'Neighbor' },
    { target: 'Oromo', reason: 'Ethiopian' },
  ],

  // Somali - Most searched pairs
  'so': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Amharic', reason: 'Neighbor' },
    { target: 'Italian', reason: 'Historical' },
    { target: 'Swahili', reason: 'Neighbor' },
  ],

  // Oromo
  'om': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Amharic', reason: 'Ethiopian' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Somali', reason: 'Neighbor' },
  ],

  // Tigrinya
  'ti': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Amharic', reason: 'Ethiopian' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Tigre', reason: 'Related' },
  ],

  // Lingala
  'ln': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Swahili', reason: 'Neighbor' },
    { target: 'Portuguese', reason: 'Neighbor' },
  ],

  // Kinyarwanda
  'rw': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Swahili', reason: 'Neighbor' },
    { target: 'Kirundi', reason: 'Similar' },
  ],

  // Rundi
  'rn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Swahili', reason: 'Neighbor' },
    { target: 'Kinyarwanda', reason: 'Similar' },
  ],

  // Shona
  'sn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Zulu', reason: 'Neighbor' },
    { target: 'Portuguese', reason: 'Neighbor' },
    { target: 'Swahili', reason: 'Bantu' },
  ],

  // Chichewa
  'ny': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Swahili', reason: 'Neighbor' },
    { target: 'Portuguese', reason: 'Neighbor' },
    { target: 'Zulu', reason: 'Bantu' },
  ],

  // Sesotho
  'st': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Afrikaans', reason: 'South African' },
    { target: 'Zulu', reason: 'South African' },
    { target: 'Xhosa', reason: 'South African' },
  ],

  // Sepedi
  'nso': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Afrikaans', reason: 'South African' },
    { target: 'Zulu', reason: 'South African' },
    { target: 'Sesotho', reason: 'Related' },
  ],

  // Tswana
  'tn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Afrikaans', reason: 'South African' },
    { target: 'Zulu', reason: 'South African' },
    { target: 'Sesotho', reason: 'Related' },
  ],

  // Tsonga
  'ts': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Afrikaans', reason: 'South African' },
    { target: 'Zulu', reason: 'South African' },
    { target: 'Swazi', reason: 'Related' },
  ],

  // Swati
  'ss': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Zulu', reason: 'Similar' },
    { target: 'Afrikaans', reason: 'South African' },
    { target: 'Tsonga', reason: 'Neighbor' },
  ],

  // Ndebele South
  'nr': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Zulu', reason: 'Related' },
    { target: 'Afrikaans', reason: 'South African' },
    { target: 'Xhosa', reason: 'Related' },
  ],

  // Venda
  've': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Afrikaans', reason: 'South African' },
    { target: 'Zulu', reason: 'South African' },
  ],

  // Luganda
  'lg': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Swahili', reason: 'Neighbor' },
    { target: 'Arabic', reason: 'Business' },
    { target: 'French', reason: 'Neighbor' },
  ],

  // Kiga
  'cgg': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Swahili', reason: 'Neighbor' },
    { target: 'Luganda', reason: 'Ugandan' },
  ],

  // Luo
  'luo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Swahili', reason: 'Kenyan' },
    { target: 'Luganda', reason: 'Neighbor' },
  ],

  // Acholi
  'ach': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Swahili', reason: 'Neighbor' },
    { target: 'Luo', reason: 'Related' },
  ],

  // Lango (Alur)
  'alz': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Swahili', reason: 'Neighbor' },
    { target: 'Acholi', reason: 'Related' },
  ],

  // Nuer
  'nus': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Dinka', reason: 'Related' },
  ],

  // Dinka
  'din': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Nuer', reason: 'Related' },
  ],

  // Twi (Akan)
  'ak': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Neighbor' },
    { target: 'Yoruba', reason: 'West African' },
    { target: 'Hausa', reason: 'West African' },
  ],

  // Ewe
  'ee': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Neighbor' },
    { target: 'Twi', reason: 'Ghanaian' },
  ],

  // Ga
  'gaa': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Twi', reason: 'Ghanaian' },
    { target: 'Ewe', reason: 'Ghanaian' },
  ],

  // Fulani
  'ff': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Religious' },
    { target: 'French', reason: 'Regional' },
    { target: 'Hausa', reason: 'Neighbor' },
  ],

  // Bambara
  'bm': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Arabic', reason: 'Religious' },
    { target: 'Fulani', reason: 'Neighbor' },
  ],

  // Dyula
  'dyu': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Regional' },
    { target: 'Bambara', reason: 'Related' },
  ],

  // Wolof
  'wo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Arabic', reason: 'Religious' },
    { target: 'Fulani', reason: 'Neighbor' },
  ],

  // Serer
  // Not in list

  // Susu
  'sus': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Regional' },
    { target: 'Fulani', reason: 'Neighbor' },
  ],

  // Bemba
  'bem': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Swahili', reason: 'Neighbor' },
    { target: 'Chichewa', reason: 'Neighbor' },
  ],

  // Tumbuka
  'tum': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chichewa', reason: 'Neighbor' },
    { target: 'Swahili', reason: 'Neighbor' },
  ],

  // Tiv
  'tiv': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hausa', reason: 'Neighbor' },
    { target: 'Yoruba', reason: 'Nigerian' },
  ],

  // Kituba
  'ktu': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Lingala', reason: 'Neighbor' },
  ],

  // Kikongo
  'kg': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Portuguese', reason: 'Neighbor' },
  ],

  // Sango
  'sg': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Arabic', reason: 'Business' },
  ],

  // Kanuri
  'kr': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Hausa', reason: 'Neighbor' },
  ],

  // Tulu
  'tcy': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Kannada', reason: 'Neighbor' },
    { target: 'Tamil', reason: 'Dravidian' },
    { target: 'Malayalam', reason: 'Dravidian' },
  ],

  // Mizo
  'lus': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Burmese', reason: 'Neighbor' },
  ],

  // Kokborok
  'trp': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Assamese', reason: 'Neighbor' },
  ],

  // Khasi
  'kha': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Assamese', reason: 'Neighbor' },
  ],

  // Dzongkha
  'dz': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Neighbor' },
    { target: 'Nepali', reason: 'Neighbor' },
    { target: 'Tibetan', reason: 'Related' },
  ],

  // Tibetan
  'bo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chinese', reason: 'Neighbor' },
    { target: 'Hindi', reason: 'Neighbor' },
    { target: 'Nepali', reason: 'Neighbor' },
  ],

  // Mongolian
  'mn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chinese', reason: 'Neighbor' },
    { target: 'Russian', reason: 'Neighbor' },
    { target: 'Japanese', reason: 'Business' },
    { target: 'Korean', reason: 'Business' },
  ],

  // Hakha Chin
  'cnh': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Burmese', reason: 'Regional' },
    { target: 'Hindi', reason: 'Neighbor' },
  ],

  // Hmong
  'hmn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Chinese', reason: 'Related' },
    { target: 'Vietnamese', reason: 'Regional' },
    { target: 'Thai', reason: 'Regional' },
  ],

  // Shan
  'shn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Thai', reason: 'Related' },
    { target: 'Burmese', reason: 'Neighbor' },
    { target: 'Chinese', reason: 'Neighbor' },
  ],

  // Kachin (Jingpo)
  'kac': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Burmese', reason: 'Regional' },
    { target: 'Chinese', reason: 'Neighbor' },
  ],

  // Kanuri
  // Already covered

  // Qeqchi
  'kek': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'K\'iche\'', reason: 'Related' },
  ],

  // Quechua
  'qu': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'Portuguese', reason: 'Neighbor' },
    { target: 'Aymara', reason: 'Related' },
  ],

  // Aymara
  'ay': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'Quechua', reason: 'Related' },
  ],

  // Guarani
  'gn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Official' },
    { target: 'Portuguese', reason: 'Neighbor' },
  ],

  // Haitian Creole
  'ht': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Related' },
    { target: 'Spanish', reason: 'Neighbor' },
    { target: 'Portuguese', reason: 'Neighbor' },
  ],

  // Mauritian Creole
  'mfe': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Related' },
    { target: 'Hindi', reason: 'Community' },
    { target: 'Urdu', reason: 'Community' },
  ],

  // Seychellois Creole
  'crs': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Related' },
    { target: 'Swahili', reason: 'Neighbor' },
  ],

  // Papiamento
  'pap': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Dutch', reason: 'Official' },
    { target: 'Spanish', reason: 'Related' },
    { target: 'Portuguese', reason: 'Related' },
  ],

  // Tok Pisin
  'tpi': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'German', reason: 'Related' },
    { target: 'Indonesian', reason: 'Neighbor' },
  ],

  // Jamaican Patois
  'jam': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Neighbor' },
    { target: 'French', reason: 'Related' },
  ],

  // Krio
  'kri': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Business' },
    { target: 'French', reason: 'Neighbor' },
  ],

  // Fon
  'fon': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Regional' },
    { target: 'Yoruba', reason: 'Related' },
  ],

  // Baoule
  'bci': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Yoruba', reason: 'Related' },
  ],

  // Malagasy
  'mg': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'French', reason: 'Official' },
    { target: 'Indonesian', reason: 'Related' },
    { target: 'Swahili', reason: 'Neighbor' },
  ],

  // Esperanto
  'eo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Popular' },
    { target: 'French', reason: 'Popular' },
    { target: 'German', reason: 'Popular' },
    { target: 'Italian', reason: 'Popular' },
  ],

  // Latin
  'la': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Derived' },
    { target: 'French', reason: 'Derived' },
    { target: 'Italian', reason: 'Derived' },
    { target: 'Portuguese', reason: 'Derived' },
    { target: 'Sanskrit', reason: 'Classical' },
  ],

  // Santali Latin
  'sat-Latn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Santali Ol Chiki', reason: 'Variant' },
  ],

  // Santali Ol Chiki
  'sat': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Hindi', reason: 'Indian' },
    { target: 'Bengali', reason: 'Neighbor' },
    { target: 'Santali Latin', reason: 'Variant' },
  ],

  // NKo
  'bm-Nkoo': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Bambara', reason: 'Same Language' },
    { target: 'Arabic', reason: 'Similar Script' },
    { target: 'French', reason: 'Official' },
  ],

  // Tamazight
  'ber-Latn': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Official' },
    { target: 'French', reason: 'Business' },
    { target: 'Tamazight Tifinagh', reason: 'Variant' },
  ],

  // Tamazight Tifinagh
  'ber': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Official' },
    { target: 'French', reason: 'Business' },
    { target: 'Tamazight', reason: 'Variant' },
  ],

  // Baluchi
  'bal': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Persian', reason: 'Neighbor' },
    { target: 'Urdu', reason: 'Neighbor' },
    { target: 'Arabic', reason: 'Religious' },
  ],

  // Afar
  'aa': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Arabic', reason: 'Neighbor' },
    { target: 'Amharic', reason: 'Neighbor' },
    { target: 'Somali', reason: 'Neighbor' },
  ],

  // Kalaallisut (Greenlandic)
  'kl': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Danish', reason: 'Official' },
    { target: 'Icelandic', reason: 'Related' },
  ],

  // Nepalbhasa Newari
  'new': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Nepali', reason: 'Regional' },
    { target: 'Hindi', reason: 'Related' },
    { target: 'Tibetan', reason: 'Related' },
  ],

  // Ndau
  'ndc-ZW': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Shona', reason: 'Related' },
    { target: 'Portuguese', reason: 'Neighbor' },
  ],

  // Nahuatl Eastern Huasteca
  'nhe': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'Nahuatl', reason: 'Related' },
  ],

  // Mam
  'mam': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'K\'iche\'', reason: 'Related' },
  ],

  // Yucatec Maya
  'yua': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'Nahuatl', reason: 'Related' },
  ],

  // Zapotec
  'zap': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Spanish', reason: 'Regional' },
    { target: 'Nahuatl', reason: 'Related' },
  ],

  // Dombe
  'dov': [
    { target: 'English', reason: 'Most Popular' },
    { target: 'Portuguese', reason: 'Regional' },
    { target: 'Shona', reason: 'Neighbor' },
  ],
};

// Default fallback for languages not specifically listed
export const defaultPopularTranslations: PopularPair[] = [
  { target: 'English', reason: 'Popular' },
  { target: 'Spanish', reason: 'Popular' },
  { target: 'French', reason: 'Popular' },
  { target: 'German', reason: 'Popular' },
  { target: 'Chinese', reason: 'Popular' },
  { target: 'Japanese', reason: 'Popular' },
  { target: 'Arabic', reason: 'Popular' },
  { target: 'Hindi', reason: 'Popular' },
];

// Get popular translations for a source language
export function getPopularTranslations(sourceLang: string, count: number = 8): PopularPair[] {
  const pairs = popularTranslationsBySource[sourceLang] || defaultPopularTranslations;
  return pairs.slice(0, count);
}

// Language family data for internal linking
export interface LanguageFamily {
  name: string;
  languages: string[];
  description: string;
}

export const languageFamilies: LanguageFamily[] = [
  {
    name: 'Germanic Languages',
    languages: ['English', 'German', 'Dutch', 'Afrikaans', 'Swedish', 'Norwegian', 'Danish', 'Icelandic', 'Frisian', 'Luxembourgish', 'Yiddish'],
    description: 'Includes English, German, Dutch, and Scandinavian languages'
  },
  {
    name: 'Romance Languages',
    languages: ['Spanish', 'French', 'Italian', 'Portuguese', 'Portuguese Brazil', 'Portuguese Portugal', 'Romanian', 'Catalan', 'Galician', 'Occitan', 'Corsican'],
    description: 'Languages derived from Latin'
  },
  {
    name: 'Sino-Tibetan',
    languages: ['Chinese', 'Chinese Traditional', 'Cantonese', 'Tibetan', 'Myanmar Burmese', 'Dzongkha'],
    description: 'Includes Chinese languages and Tibetan'
  },
  {
    name: 'Semitic Languages',
    languages: ['Arabic', 'Hebrew', 'Amharic', 'Tigrinya', 'Afar', 'Egyptian Arabic'],
    description: 'Includes Arabic and Hebrew'
  },
  {
    name: 'Indo-Aryan Languages',
    languages: ['Hindi', 'Bengali', 'Urdu', 'Punjabi Gurmukhi', 'Punjabi Shahmukhi', 'Marathi', 'Gujarati', 'Nepali', 'Sinhala', 'Assamese', 'Odia', 'Sanskrit', 'Bhojpuri', 'Maithili', 'Dogri', 'Konkani', 'Sindhi', 'Awadhi', 'Marwadi', 'Meiteilon Manipuri'],
    description: 'Major language family of South Asia'
  },
  {
    name: 'Dravidian Languages',
    languages: ['Tamil', 'Telugu', 'Malayalam', 'Kannada', 'Tulu'],
    description: 'Major language family of South India'
  },
  {
    name: 'Slavic Languages',
    languages: ['Russian', 'Ukrainian', 'Belarusian', 'Polish', 'Czech', 'Slovak', 'Serbian', 'Croatian', 'Bosnian', 'Bulgarian', 'Slovenian', 'Macedonian'],
    description: 'Major language family of Eastern Europe'
  },
  {
    name: 'Turkic Languages',
    languages: ['Turkish', 'Kazakh', 'Uzbek', 'Azerbaijani', 'Turkmen', 'Kyrgyz', 'Tatar', 'Bashkir', 'Chuvash', 'Yakut', 'Tuvan', 'Crimean Tatar', 'Uyghur'],
    description: 'Languages spoken across Central Asia'
  },
  {
    name: 'Japonic Languages',
    languages: ['Japanese', 'Korean'],
    description: 'East Asian language family'
  },
  {
    name: 'Iranian Languages',
    languages: ['Persian', 'Dari', 'Pashto', 'Kurdish Kurmanji', 'Kurdish Sorani', 'Tajik', 'Baluchi', 'Ossetian'],
    description: 'Languages of Iran and surrounding regions'
  },
  {
    name: 'Austronesian Languages',
    languages: ['Indonesian', 'Malay', 'Jawi', 'Tagalog', 'Cebuano', 'Ilocano', 'Hiligaynon', 'Malagasy', 'Fijian', 'Samoan', 'Tongan', 'Tahitian', 'Maori', 'Hawaiian', 'Chamorro', 'Tetum'],
    description: 'Languages of Southeast Asia and the Pacific'
  },
  {
    name: 'Bantu Languages',
    languages: ['Swahili', 'Zulu', 'Xhosa', 'Shona', 'Kinyarwanda', 'Rundi', 'Lingala', 'Chichewa', 'Sesotho', 'Tswana', 'Luganda', 'Kikongo', 'Bemba', 'Tumbuka'],
    description: 'Languages of sub-Saharan Africa'
  },
  {
    name: 'Afro-Asiatic Languages',
    languages: ['Arabic', 'Hebrew', 'Amharic', 'Tigrinya', 'Somali', 'Oromo', 'Hausa', 'Fulani'],
    description: 'Languages of North Africa and the Horn of Africa'
  },
  {
    name: 'West African Languages',
    languages: ['Yoruba', 'Igbo', 'Hausa', 'Fulani', 'Twi', 'Wolof', 'Bambara', 'Ewe', 'Ga', 'Dyula'],
    description: 'Languages of West Africa'
  },
  {
    name: 'Nilo-Saharan Languages',
    languages: ['Dinka', 'Nuer', 'Acholi', 'Luo', 'Alur', 'Maasai'],
    description: 'Languages of the Nile Valley and East Africa'
  },
  {
    name: 'Celtic Languages',
    languages: ['Irish', 'Welsh', 'Scots Gaelic', 'Breton', 'Manx', 'Cornish'],
    description: 'Languages of the Celtic nations'
  },
  {
    name: 'Baltic Languages',
    languages: ['Lithuanian', 'Latvian', 'Latgalian'],
    description: 'Languages of the Baltic region'
  },
  {
    name: 'Finno-Ugric Languages',
    languages: ['Finnish', 'Estonian', 'Hungarian', 'Udmurt', 'Komi', 'Meadow Mari'],
    description: 'Languages of Northern Europe and Russia'
  },
  {
    name: 'Caucasian Languages',
    languages: ['Georgian', 'Armenian', 'Azerbaijani', 'Chechen', 'Abkhaz', 'Avar', 'Ossetian'],
    description: 'Languages of the Caucasus region'
  },
  {
    name: 'Austroasiatic Languages',
    languages: ['Vietnamese', 'Khmer', 'Mon', 'Khasi'],
    description: 'Languages of Southeast Asia'
  },
  {
    name: 'Tai-Kadai Languages',
    languages: ['Thai', 'Lao', 'Shan'],
    description: 'Languages of Thailand and Laos'
  },
  {
    name: 'Philippine Languages',
    languages: ['Tagalog', 'Cebuano', 'Ilocano', 'Hiligaynon', 'Kapampangan', 'Bikol', 'Waray', 'Pangasinan'],
    description: 'Languages of the Philippines'
  },
  {
    name: 'Indigenous American Languages',
    languages: ['Quechua', 'Aymara', 'Guarani', 'Nahuatl Eastern Huasteca', 'Yucatec Maya', 'Zapotec', 'Mam'],
    description: 'Native languages of the Americas'
  },
  {
    name: 'Creole Languages',
    languages: ['Haitian Creole', 'Mauritian Creole', 'Seychellois Creole', 'Papiamento', 'Tok Pisin', 'Jamaican Patois', 'Krio'],
    description: 'Creole languages from around the world'
  },
  {
    name: 'Constructed Languages',
    languages: ['Esperanto'],
    description: 'Artificially created languages'
  },
  {
    name: 'Classical Languages',
    languages: ['Latin', 'Sanskrit', 'Classical Greek'],
    description: 'Historical languages with literary traditions'
  },
];

// Get language family for a given language
export function getLanguageFamily(languageLabel: string): LanguageFamily | undefined {
  return languageFamilies.find(family => 
    family.languages.some(lang => 
      lang.toLowerCase() === languageLabel.toLowerCase()
    )
  );
}

// Related languages based on script/geography
export const relatedLanguages: Record<string, string[]> = {
  'Hindi': ['Urdu', 'Sanskrit', 'Marathi', 'Nepali', 'Punjabi Gurmukhi', 'Gujarati'],
  'Urdu': ['Hindi', 'Persian', 'Arabic', 'Punjabi Shahmukhi', 'Sindhi'],
  'Spanish': ['Portuguese', 'Italian', 'French', 'Catalan', 'Galician'],
  'Portuguese': ['Spanish', 'Galician', 'Italian', 'French'],
  'French': ['Italian', 'Spanish', 'Portuguese', 'Romanian', 'Catalan'],
  'German': ['Dutch', 'English', 'Afrikaans', 'Danish', 'Swedish', 'Yiddish'],
  'English': ['German', 'Dutch', 'Afrikaans', 'Swedish', 'Danish', 'Scots Gaelic'],
  'Russian': ['Ukrainian', 'Belarusian', 'Bulgarian', 'Serbian', 'Polish'],
  'Chinese': ['Japanese', 'Korean', 'Vietnamese', 'Cantonese', 'Chinese Traditional'],
  'Japanese': ['Chinese', 'Korean', 'Ryukyuan'],
  'Korean': ['Japanese', 'Chinese'],
  'Arabic': ['Hebrew', 'Persian', 'Urdu', 'Turkish', 'Egyptian Arabic'],
  'Persian': ['Dari', 'Tajik', 'Urdu', 'Kurdish Sorani', 'Pashto'],
  'Turkish': ['Azerbaijani', 'Kazakh', 'Uzbek', 'Turkmen', 'Crimean Tatar'],
  'Tamil': ['Malayalam', 'Telugu', 'Kannada', 'Sinhala'],
  'Telugu': ['Tamil', 'Kannada', 'Malayalam'],
  'Malayalam': ['Tamil', 'Telugu', 'Kannada'],
  'Kannada': ['Telugu', 'Tamil', 'Malayalam'],
  'Thai': ['Lao', 'Khmer', 'Vietnamese', 'Shan'],
  'Vietnamese': ['Chinese', 'Thai', 'Khmer'],
  'Swedish': ['Norwegian', 'Danish', 'Finnish', 'German'],
  'Norwegian': ['Swedish', 'Danish', 'German', 'Sami North'],
  'Danish': ['Swedish', 'Norwegian', 'German'],
  'Polish': ['Czech', 'Slovak', 'Ukrainian', 'Russian', 'Silesian'],
  'Czech': ['Slovak', 'Polish', 'German'],
  'Greek': ['Albanian', 'Turkish', 'Bulgarian', 'Armenian'],
  'Hebrew': ['Arabic', 'Yiddish', 'English'],
  'Indonesian': ['Malay', 'Javanese', 'Dutch', 'Sundanese'],
  'Malay': ['Indonesian', 'Thai', 'Tagalog', 'Jawi'],
  'Swahili': ['Arabic', 'English', 'French', 'Luganda'],
  'Zulu': ['Xhosa', 'Swati', 'Ndebele South', 'Afrikaans'],
  'Amharic': ['Tigrinya', 'Arabic', 'Somali', 'Oromo'],
  'Italian': ['Spanish', 'French', 'Portuguese', 'Sicilian', 'Venetian'],
  'Bengali': ['Hindi', 'Assamese', 'Urdu', 'Nepali', 'Maithili'],
  'Punjabi Gurmukhi': ['Hindi', 'Urdu', 'Sindhi', 'Punjabi Shahmukhi'],
  'Marathi': ['Hindi', 'Gujarati', 'Kannada', 'Konkani'],
  'Gujarati': ['Hindi', 'Marathi', 'Punjabi Gurmukhi', 'Sindhi'],
  'Nepali': ['Hindi', 'Bengali', 'Tibetan', 'Maithili'],
  'Sinhala': ['Tamil', 'Malayalam', 'Hindi', 'Dhivehi'],
};

// Get related languages for a given language
export function getRelatedLanguages(languageLabel: string, count: number = 5): string[] {
  return relatedLanguages[languageLabel] || [];
}

// External resources for languages
export interface ExternalResource {
  title: string;
  url: string;
  type: 'wikipedia' | 'dictionary' | 'learning' | 'news';
}

export const externalResourcesByLanguage: Record<string, ExternalResource[]> = {
  'English': [
    { title: 'English Wikipedia', url: 'https://en.wikipedia.org/wiki/English_language', type: 'wikipedia' },
    { title: 'Merriam-Webster Dictionary', url: 'https://www.merriam-webster.com/', type: 'dictionary' },
    { title: 'BBC Learning English', url: 'https://www.bbc.co.uk/learningenglish/', type: 'learning' },
  ],
  'Spanish': [
    { title: 'Spanish Wikipedia', url: 'https://en.wikipedia.org/wiki/Spanish_language', type: 'wikipedia' },
    { title: 'Real Academia Española', url: 'https://dle.rae.es/', type: 'dictionary' },
    { title: 'SpanishDict', url: 'https://www.spanishdict.com/', type: 'learning' },
  ],
  'French': [
    { title: 'French Wikipedia', url: 'https://en.wikipedia.org/wiki/French_language', type: 'wikipedia' },
    { title: 'Larousse Dictionary', url: 'https://www.larousse.fr/dictionnaires/francais', type: 'dictionary' },
    { title: 'French Together', url: 'https://frenchtogether.com/', type: 'learning' },
  ],
  'German': [
    { title: 'German Wikipedia', url: 'https://en.wikipedia.org/wiki/German_language', type: 'wikipedia' },
    { title: 'DW Learn German', url: 'https://www.dw.com/en/learn-german/s-2469', type: 'learning' },
    { title: 'Leo Dictionary', url: 'https://dict.leo.org/', type: 'dictionary' },
  ],
  'Chinese': [
    { title: 'Chinese Wikipedia', url: 'https://en.wikipedia.org/wiki/Chinese_language', type: 'wikipedia' },
    { title: 'MDBG Dictionary', url: 'https://www.mdbg.net/chinese/dictionary', type: 'dictionary' },
    { title: 'ChinesePod', url: 'https://chinesepod.com/', type: 'learning' },
  ],
  'Japanese': [
    { title: 'Japanese Wikipedia', url: 'https://en.wikipedia.org/wiki/Japanese_language', type: 'wikipedia' },
    { title: 'Jisho Dictionary', url: 'https://jisho.org/', type: 'dictionary' },
    { title: 'Tae Kim\'s Guide', url: 'https://guidetojapanese.org/learn/', type: 'learning' },
  ],
  'Korean': [
    { title: 'Korean Wikipedia', url: 'https://en.wikipedia.org/wiki/Korean_language', type: 'wikipedia' },
    { title: 'Naver Dictionary', url: 'https://dict.naver.com/', type: 'dictionary' },
    { title: 'Talk To Me In Korean', url: 'https://talktomeinkorean.com/', type: 'learning' },
  ],
  'Arabic': [
    { title: 'Arabic Wikipedia', url: 'https://en.wikipedia.org/wiki/Arabic', type: 'wikipedia' },
    { title: 'Almaany Dictionary', url: 'https://www.almaany.com/', type: 'dictionary' },
    { title: 'ArabicPod101', url: 'https://www.arabicpod101.com/', type: 'learning' },
  ],
  'Hindi': [
    { title: 'Hindi Wikipedia', url: 'https://en.wikipedia.org/wiki/Hindi', type: 'wikipedia' },
    { title: 'Hindi Learner', url: 'https://www.hindilearner.com/', type: 'learning' },
    { title: 'Shabdkosh Dictionary', url: 'https://www.shabdkosh.com/', type: 'dictionary' },
  ],
  'Urdu': [
    { title: 'Urdu Wikipedia', url: 'https://en.wikipedia.org/wiki/Urdu', type: 'wikipedia' },
    { title: 'Urdu Lughat', url: 'https://urduword.com/', type: 'dictionary' },
  ],
  'Russian': [
    { title: 'Russian Wikipedia', url: 'https://en.wikipedia.org/wiki/Russian_language', type: 'wikipedia' },
    { title: 'Reverso Context', url: 'https://context.reverso.net/translation/', type: 'dictionary' },
    { title: 'Russian for Everyone', url: 'https://www.russianforeveryone.com/', type: 'learning' },
  ],
  'Portuguese': [
    { title: 'Portuguese Wikipedia', url: 'https://en.wikipedia.org/wiki/Portuguese_language', type: 'wikipedia' },
    { title: 'Infopédia Dictionary', url: 'https://www.infopedia.pt/', type: 'dictionary' },
  ],
  'Portuguese Brazil': [
    { title: 'Portuguese Wikipedia', url: 'https://en.wikipedia.org/wiki/Portuguese_language', type: 'wikipedia' },
    { title: 'Michaelis Dictionary', url: 'https://michaelis.uol.com.br/', type: 'dictionary' },
  ],
  'Italian': [
    { title: 'Italian Wikipedia', url: 'https://en.wikipedia.org/wiki/Italian_language', type: 'wikipedia' },
    { title: 'Treccani Dictionary', url: 'https://www.treccani.it/vocabolario/', type: 'dictionary' },
  ],
  'Turkish': [
    { title: 'Turkish Wikipedia', url: 'https://en.wikipedia.org/wiki/Turkish_language', type: 'wikipedia' },
    { title: 'Turkish Dictionary', url: 'https://www.sozluk.gov.tr/', type: 'dictionary' },
  ],
  'Persian': [
    { title: 'Persian Wikipedia', url: 'https://en.wikipedia.org/wiki/Persian_language', type: 'wikipedia' },
    { title: 'FarsiDic', url: 'https://www.farsidic.com/', type: 'dictionary' },
  ],
  'Tamil': [
    { title: 'Tamil Wikipedia', url: 'https://en.wikipedia.org/wiki/Tamil_language', type: 'wikipedia' },
    { title: 'Tamil Dictionary', url: 'https://www.tamildict.com/', type: 'dictionary' },
  ],
  'Telugu': [
    { title: 'Telugu Wikipedia', url: 'https://en.wikipedia.org/wiki/Telugu_language', type: 'wikipedia' },
  ],
  'Malayalam': [
    { title: 'Malayalam Wikipedia', url: 'https://en.wikipedia.org/wiki/Malayalam', type: 'wikipedia' },
  ],
  'Punjabi Gurmukhi': [
    { title: 'Punjabi Wikipedia', url: 'https://en.wikipedia.org/wiki/Punjabi_language', type: 'wikipedia' },
  ],
  'Bengali': [
    { title: 'Bengali Wikipedia', url: 'https://en.wikipedia.org/wiki/Bengali_language', type: 'wikipedia' },
  ],
  'Thai': [
    { title: 'Thai Wikipedia', url: 'https://en.wikipedia.org/wiki/Thai_language', type: 'wikipedia' },
    { title: 'Thai2English', url: 'https://www.thai2english.com/', type: 'dictionary' },
  ],
  'Vietnamese': [
    { title: 'Vietnamese Wikipedia', url: 'https://en.wikipedia.org/wiki/Vietnamese_language', type: 'wikipedia' },
  ],
  'Indonesian': [
    { title: 'Indonesian Wikipedia', url: 'https://en.wikipedia.org/wiki/Indonesian_language', type: 'wikipedia' },
    { title: 'Kamus.net', url: 'https://www.kamus.net/', type: 'dictionary' },
  ],
  'Greek': [
    { title: 'Greek Wikipedia', url: 'https://en.wikipedia.org/wiki/Greek_language', type: 'wikipedia' },
  ],
  'Hebrew': [
    { title: 'Hebrew Wikipedia', url: 'https://en.wikipedia.org/wiki/Hebrew_language', type: 'wikipedia' },
    { title: 'Morfix Dictionary', url: 'https://www.morfix.co.il/', type: 'dictionary' },
  ],
  'Polish': [
    { title: 'Polish Wikipedia', url: 'https://en.wikipedia.org/wiki/Polish_language', type: 'wikipedia' },
  ],
  'Dutch': [
    { title: 'Dutch Wikipedia', url: 'https://en.wikipedia.org/wiki/Dutch_language', type: 'wikipedia' },
  ],
  'Swedish': [
    { title: 'Swedish Wikipedia', url: 'https://en.wikipedia.org/wiki/Swedish_language', type: 'wikipedia' },
  ],
  'Ukrainian': [
    { title: 'Ukrainian Wikipedia', url: 'https://en.wikipedia.org/wiki/Ukrainian_language', type: 'wikipedia' },
  ],
  'Nepali': [
    { title: 'Nepali Wikipedia', url: 'https://en.wikipedia.org/wiki/Nepali_language', type: 'wikipedia' },
  ],
  'Marathi': [
    { title: 'Marathi Wikipedia', url: 'https://en.wikipedia.org/wiki/Marathi_language', type: 'wikipedia' },
  ],
  'Gujarati': [
    { title: 'Gujarati Wikipedia', url: 'https://en.wikipedia.org/wiki/Gujarati_language', type: 'wikipedia' },
  ],
  'Kannada': [
    { title: 'Kannada Wikipedia', url: 'https://en.wikipedia.org/wiki/Kannada', type: 'wikipedia' },
  ],
  'Sinhala': [
    { title: 'Sinhala Wikipedia', url: 'https://en.wikipedia.org/wiki/Sinhala_language', type: 'wikipedia' },
  ],
  'Swahili': [
    { title: 'Swahili Wikipedia', url: 'https://en.wikipedia.org/wiki/Swahili_language', type: 'wikipedia' },
  ],
  'Hungarian': [
    { title: 'Hungarian Wikipedia', url: 'https://en.wikipedia.org/wiki/Hungarian_language', type: 'wikipedia' },
  ],
  'Finnish': [
    { title: 'Finnish Wikipedia', url: 'https://en.wikipedia.org/wiki/Finnish_language', type: 'wikipedia' },
  ],
  'Czech': [
    { title: 'Czech Wikipedia', url: 'https://en.wikipedia.org/wiki/Czech_language', type: 'wikipedia' },
  ],
  'Romanian': [
    { title: 'Romanian Wikipedia', url: 'https://en.wikipedia.org/wiki/Romanian_language', type: 'wikipedia' },
  ],
  'Danish': [
    { title: 'Danish Wikipedia', url: 'https://en.wikipedia.org/wiki/Danish_language', type: 'wikipedia' },
  ],
  'Norwegian': [
    { title: 'Norwegian Wikipedia', url: 'https://en.wikipedia.org/wiki/Norwegian_language', type: 'wikipedia' },
  ],
  'Tagalog': [
    { title: 'Tagalog Wikipedia', url: 'https://en.wikipedia.org/wiki/Tagalog_language', type: 'wikipedia' },
  ],
  'Malay': [
    { title: 'Malay Wikipedia', url: 'https://en.wikipedia.org/wiki/Malay_language', type: 'wikipedia' },
  ],
  'Amharic': [
    { title: 'Amharic Wikipedia', url: 'https://en.wikipedia.org/wiki/Amharic', type: 'wikipedia' },
  ],
  'Yoruba': [
    { title: 'Yoruba Wikipedia', url: 'https://en.wikipedia.org/wiki/Yoruba_language', type: 'wikipedia' },
  ],
  'Zulu': [
    { title: 'Zulu Wikipedia', url: 'https://en.wikipedia.org/wiki/Zulu_language', type: 'wikipedia' },
  ],
  'Afrikaans': [
    { title: 'Afrikaans Wikipedia', url: 'https://en.wikipedia.org/wiki/Afrikaans', type: 'wikipedia' },
  ],
  'Catalan': [
    { title: 'Catalan Wikipedia', url: 'https://en.wikipedia.org/wiki/Catalan_language', type: 'wikipedia' },
  ],
  'Basque': [
    { title: 'Basque Wikipedia', url: 'https://en.wikipedia.org/wiki/Basque_language', type: 'wikipedia' },
  ],
  'Armenian': [
    { title: 'Armenian Wikipedia', url: 'https://en.wikipedia.org/wiki/Armenian_language', type: 'wikipedia' },
  ],
  'Georgian': [
    { title: 'Georgian Wikipedia', url: 'https://en.wikipedia.org/wiki/Georgian_language', type: 'wikipedia' },
  ],
  'Azerbaijani': [
    { title: 'Azerbaijani Wikipedia', url: 'https://en.wikipedia.org/wiki/Azerbaijani_language', type: 'wikipedia' },
  ],
  'Kazakh': [
    { title: 'Kazakh Wikipedia', url: 'https://en.wikipedia.org/wiki/Kazakh_language', type: 'wikipedia' },
  ],
  'Uzbek': [
    { title: 'Uzbek Wikipedia', url: 'https://en.wikipedia.org/wiki/Uzbek_language', type: 'wikipedia' },
  ],
  'Mongolian': [
    { title: 'Mongolian Wikipedia', url: 'https://en.wikipedia.org/wiki/Mongolian_language', type: 'wikipedia' },
  ],
  'Khmer': [
    { title: 'Khmer Wikipedia', url: 'https://en.wikipedia.org/wiki/Khmer_language', type: 'wikipedia' },
  ],
  'Lao': [
    { title: 'Lao Wikipedia', url: 'https://en.wikipedia.org/wiki/Lao_language', type: 'wikipedia' },
  ],
  'Bulgarian': [
    { title: 'Bulgarian Wikipedia', url: 'https://en.wikipedia.org/wiki/Bulgarian_language', type: 'wikipedia' },
  ],
  'Serbian': [
    { title: 'Serbian Wikipedia', url: 'https://en.wikipedia.org/wiki/Serbian_language', type: 'wikipedia' },
  ],
  'Croatian': [
    { title: 'Croatian Wikipedia', url: 'https://en.wikipedia.org/wiki/Croatian_language', type: 'wikipedia' },
  ],
  'Slovenian': [
    { title: 'Slovenian Wikipedia', url: 'https://en.wikipedia.org/wiki/Slovene_language', type: 'wikipedia' },
  ],
  'Slovak': [
    { title: 'Slovak Wikipedia', url: 'https://en.wikipedia.org/wiki/Slovak_language', type: 'wikipedia' },
  ],
  'Lithuanian': [
    { title: 'Lithuanian Wikipedia', url: 'https://en.wikipedia.org/wiki/Lithuanian_language', type: 'wikipedia' },
  ],
  'Latvian': [
    { title: 'Latvian Wikipedia', url: 'https://en.wikipedia.org/wiki/Latvian_language', type: 'wikipedia' },
  ],
  'Estonian': [
    { title: 'Estonian Wikipedia', url: 'https://en.wikipedia.org/wiki/Estonian_language', type: 'wikipedia' },
  ],
  'Irish': [
    { title: 'Irish Wikipedia', url: 'https://en.wikipedia.org/wiki/Irish_language', type: 'wikipedia' },
  ],
  'Welsh': [
    { title: 'Welsh Wikipedia', url: 'https://en.wikipedia.org/wiki/Welsh_language', type: 'wikipedia' },
  ],
  'Albanian': [
    { title: 'Albanian Wikipedia', url: 'https://en.wikipedia.org/wiki/Albanian_language', type: 'wikipedia' },
  ],
  'Belarusian': [
    { title: 'Belarusian Wikipedia', url: 'https://en.wikipedia.org/wiki/Belarusian_language', type: 'wikipedia' },
  ],
  'Icelandic': [
    { title: 'Icelandic Wikipedia', url: 'https://en.wikipedia.org/wiki/Icelandic_language', type: 'wikipedia' },
  ],
  'Maltese': [
    { title: 'Maltese Wikipedia', url: 'https://en.wikipedia.org/wiki/Maltese_language', type: 'wikipedia' },
  ],
  'Latin': [
    { title: 'Latin Wikipedia', url: 'https://en.wikipedia.org/wiki/Latin', type: 'wikipedia' },
  ],
  'Esperanto': [
    { title: 'Esperanto Wikipedia', url: 'https://en.wikipedia.org/wiki/Esperanto', type: 'wikipedia' },
  ],
  'Sanskrit': [
    { title: 'Sanskrit Wikipedia', url: 'https://en.wikipedia.org/wiki/Sanskrit', type: 'wikipedia' },
  ],
  'Punjabi Shahmukhi': [
    { title: 'Punjabi Wikipedia', url: 'https://en.wikipedia.org/wiki/Punjabi_language', type: 'wikipedia' },
  ],
  'Chinese Traditional': [
    { title: 'Chinese Wikipedia', url: 'https://en.wikipedia.org/wiki/Chinese_language', type: 'wikipedia' },
  ],
  'Cantonese': [
    { title: 'Cantonese Wikipedia', url: 'https://en.wikipedia.org/wiki/Cantonese', type: 'wikipedia' },
  ],
  'Dari': [
    { title: 'Dari Wikipedia', url: 'https://en.wikipedia.org/wiki/Dari_language', type: 'wikipedia' },
  ],
  'Pashto': [
    { title: 'Pashto Wikipedia', url: 'https://en.wikipedia.org/wiki/Pashto', type: 'wikipedia' },
  ],
  'Kurdish Kurmanji': [
    { title: 'Kurdish Wikipedia', url: 'https://en.wikipedia.org/wiki/Kurdish_languages', type: 'wikipedia' },
  ],
  'Kurdish Sorani': [
    { title: 'Kurdish Wikipedia', url: 'https://en.wikipedia.org/wiki/Kurdish_languages', type: 'wikipedia' },
  ],
};

// Get external resources for a language
export function getExternalResources(languageLabel: string): ExternalResource[] {
  return externalResourcesByLanguage[languageLabel] || [
    { 
      title: `${languageLabel} Wikipedia`, 
      url: `https://en.wikipedia.org/wiki/${encodeURIComponent(languageLabel)}_language`, 
      type: 'wikipedia' as const
    },
  ];
}
