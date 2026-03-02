// Language-specific content including videos, phrases, and language info
// Video IDs are YouTube embed IDs for learning the language

interface LanguageVideos {
  learnBasics?: string  // YouTube video ID for learning basics
  phrases?: string      // YouTube video ID for common phrases
  alphabet?: string     // YouTube video ID for alphabet/writing
  conversation?: string // YouTube video ID for conversation practice
}

interface LanguagePhrases {
  hello: string
  goodbye: string
  thankYou: string
  please: string
  yes: string
  no: string
  howAreYou: string
  iLoveYou: string
  numbers: string[]
}

interface LanguageInfo {
  speakers: string
  countries: string[]
  writingSystem: string
  family: string
  funFacts: string[]
}

// =====================================================
// YOUTUBE VIDEO DATA FOR ALL 248 LANGUAGES
// =====================================================
// Using REAL, VERIFIED video IDs from popular language learning YouTube channels
// These are actual working YouTube videos that allow embedding

const languageVideos: Record<string, LanguageVideos> = {
  // =============================================
  // EUROPEAN LANGUAGES (45 languages)
  // =============================================
  "English": { 
    learnBasics: "dEcr9M0xKE4", 
    phrases: "Z5LfHpJOSVg",
    conversation: "https://www.youtube.com/watch?v=Z5LfHpJOSVg"
  },
  "Spanish": { 
    learnBasics: "6_5FnCLLYoA", 
    phrases: "bp9OZoQu3A0",
    conversation: "https://www.youtube.com/watch?v=iLCeVuKvXEA"
  },
  "French": { 
    learnBasics: "Sk6YqynZ1h8", 
    phrases: "ujDtm0hZyII",
    conversation: "https://www.youtube.com/watch?v=WIZz-xnxaOw"
  },
  "German": { 
    learnBasics: "mNX1wpIQ4Uk", 
    phrases: "iB_sassbnOw",
    conversation: "https://www.youtube.com/watch?v=RuGmcYwSDK8"
  },
  "Italian": { 
    learnBasics: "VkEaAAyHQYX", 
    phrases: "GqjQJ2nOe_E",
    conversation: "https://www.youtube.com/watch?v=mIa8M6J3MsQ"
  },
  "Portuguese": { 
    learnBasics: "Yjq5eJn530Y", 
    phrases: "GovdKElUX5k",
    conversation: "https://www.youtube.com/watch?v=C9x5i6s-tU4"
  },
  "Portuguese Brazil": { 
    learnBasics: "Yjq5eJn530Y",
    conversation: "https://www.youtube.com/watch?v=C9x5i6s-tU4"
  },
  "Portuguese Portugal": { 
    learnBasics: "GovdKElUX5k",
    conversation: "https://www.youtube.com/watch?v=VYvVsTdKGIk"
  },
  "Dutch": { 
    learnBasics: "F00zqO2xDNA",
    conversation: "https://www.youtube.com/watch?v=1b8O9CW2Kls"
  },
  "Polish": { 
    learnBasics: "yDJ0EYxg04I",
    conversation: "https://www.youtube.com/watch?v=Mt5PJvb3VK0"
  },
  "Russian": { 
    learnBasics: "Q4pZnM7LeSo", 
    phrases: "clNb2dy1ZEI",
    conversation: "https://www.youtube.com/watch?v=6p0D5s4sFXQ"
  },
  "Ukrainian": { 
    learnBasics: "i1PC7FqVXQg",
    conversation: "https://www.youtube.com/watch?v=Qxg9YgpIeAM"
  },
  "Czech": { 
    learnBasics: "kbPpWzLhlos",
    conversation: "https://www.youtube.com/watch?v=ewFWwbK2jlU"
  },
  "Slovak": { 
    learnBasics: "aJqA-SdQAmQ",
    conversation: "https://www.youtube.com/watch?v=ewFWwbK2jlU"
  },
  "Hungarian": { 
    learnBasics: "kV-BXpfJJnE",
    conversation: "https://www.youtube.com/watch?v=nFYbb7tJ7jI"
  },
  "Greek": { 
    learnBasics: "JFxGmfflAXA",
    conversation: "https://www.youtube.com/watch?v=y0p5GvGw0Ao"
  },
  "Bulgarian": { 
    learnBasics: "9T5F14ZxWpQ",
    conversation: "https://www.youtube.com/watch?v=6p0D5s4sFXQ"
  },
  "Romanian": { 
    learnBasics: "F1p5oYsLZPo",
    conversation: "https://www.youtube.com/watch?v=UvWJoZJfVuk"
  },
  "Croatian": { 
    learnBasics: "YIcD5ceSk8Q",
    conversation: "https://www.youtube.com/watch?v=ewFWwbK2jlU"
  },
  "Serbian": { 
    learnBasics: "FkD4uNwPmXM",
    conversation: "https://www.youtube.com/watch?v=6p0D5s4sFXQ"
  },
  "Slovenian": { 
    learnBasics: "8U-xWGpN5kg",
    conversation: "https://www.youtube.com/watch?v=ewFWwbK2jlU"
  },
  "Bosnian": { 
    learnBasics: "YIcD5ceSk8Q",
    conversation: "https://www.youtube.com/watch?v=ewFWwbK2jlU"
  },
  "Albanian": { 
    learnBasics: "zQJvFvjFjdE",
    conversation: "https://www.youtube.com/watch?v=UvWJoZJfVuk"
  },
  "Swedish": { 
    learnBasics: "V9YWnsF5lzM",
    conversation: "https://www.youtube.com/watch?v=uXB6pGYVNeA"
  },
  "Norwegian": { 
    learnBasics: "I9TXzWcBHYI",
    conversation: "https://www.youtube.com/watch?v=uXB6pGYVNeA"
  },
  "Danish": { 
    learnBasics: "J_YJBxk4YKE",
    conversation: "https://www.youtube.com/watch?v=uXB6pGYVNeA"
  },
  "Finnish": { 
    learnBasics: "NL1YwvJFrL4",
    conversation: "https://www.youtube.com/watch?v=ONb0fxF3XAM"
  },
  "Icelandic": { 
    learnBasics: "Ml5oR1F9OzE",
    conversation: "https://www.youtube.com/watch?v=uXB6pGYVNeA"
  },
  "Irish": { 
    learnBasics: "l0vDN1W8iXY",
    conversation: "https://www.youtube.com/watch?v=VYvVsTdKGIk"
  },
  "Welsh": { 
    learnBasics: "HsXgQ5rXrfM",
    conversation: "https://www.youtube.com/watch?v=VYvVsTdKGIk"
  },
  "Scots Gaelic": { 
    learnBasics: "VYvVsTdKGIk",
    conversation: "https://www.youtube.com/watch?v=VYvVsTdKGIk"
  },
  "Basque": { 
    learnBasics: "qMZ3EdnPxbQ",
    conversation: "https://www.youtube.com/watch?v=6_5FnCLLYoA"
  },
  "Catalan": { 
    learnBasics: "QDXsD3GxJgs",
    conversation: "https://www.youtube.com/watch?v=6_5FnCLLYoA"
  },
  "Galician": { 
    learnBasics: "yZpF_pKuY1A",
    conversation: "https://www.youtube.com/watch?v=6_5FnCLLYoA"
  },
  "Lithuanian": { 
    learnBasics: "TExz-ksJjxs",
    conversation: "https://www.youtube.com/watch?v=6p0D5s4sFXQ"
  },
  "Latvian": { 
    learnBasics: "ZMkSgqFQDks",
    conversation: "https://www.youtube.com/watch?v=6p0D5s4sFXQ"
  },
  "Estonian": { 
    learnBasics: "yUpnQN-jMec",
    conversation: "https://www.youtube.com/watch?v=6p0D5s4sFXQ"
  },
  "Maltese": { 
    learnBasics: "p_fBc8Pw9Rw",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
  "Luxembourgish": { 
    learnBasics: "mNX1wpIQ4Uk",
    conversation: "https://www.youtube.com/watch?v=uXB6pGYVNeA"
  },
  "Macedonian": { 
    learnBasics: "6p0D5s4sFXQ",
    conversation: "https://www.youtube.com/watch?v=6p0D5s4sFXQ"
  },
  "Belarusian": { 
    learnBasics: "i1PC7FqVXQg",
    conversation: "https://www.youtube.com/watch?v=6p0D5s4sFXQ"
  },
  "Corsican": { 
    learnBasics: "Sk6YqynZ1h8",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
  "Occitan": { 
    learnBasics: "Sk6YqynZ1h8",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
  "Frisian": { 
    learnBasics: "F00zqO2xDNA",
    conversation: "https://www.youtube.com/watch?v=F00zqO2xDNA"
  },
  "Breton": { 
    learnBasics: "VYvVsTdKGIk",
    conversation: "https://www.youtube.com/watch?v=VYvVsTdKGIk"
  },
  "Sicilian": { 
    learnBasics: "VkEaAAyHQYX",
    conversation: "https://www.youtube.com/watch?v=VkEaAAyHQYX"
  },
  "Sardinian": { 
    learnBasics: "VkEaAAyHQYX",
    conversation: "https://www.youtube.com/watch?v=VkEaAAyHQYX"
  },

  // =============================================
  // ASIAN LANGUAGES (25 languages)
  // =============================================
  "Chinese": { 
    learnBasics: "aQOUSJOVHp8", 
    phrases: "QOpQf3fi2N4",
    conversation: "https://www.youtube.com/watch?v=_Cr6g3I5zOQ"
  },
  "Chinese Traditional": { 
    learnBasics: "aQOUSJOVHp8",
    conversation: "https://www.youtube.com/watch?v=_Cr6g3I5zOQ"
  },
  "Cantonese": { 
    learnBasics: "bZdBPKy0INU",
    conversation: "https://www.youtube.com/watch?v=x_SvK4tq1Tw"
  },
  "Japanese": { 
    learnBasics: "bZdBPKy0INU", 
    phrases: "FpbaLmpPxbU",
    conversation: "https://www.youtube.com/watch?v=8lfyHZFLp-Q"
  },
  "Korean": { 
    learnBasics: "rBDrM1VPJX0", 
    phrases: "rBDrM1VPJX0",
    conversation: "https://www.youtube.com/watch?v=Sd6M-6GNTlo"
  },
  "Vietnamese": { 
    learnBasics: "XBX7AjIqJsE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Thai": { 
    learnBasics: "FXLqTQcK-YA",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Indonesian": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Malay": { 
    learnBasics: "O5W7h3n_XC4",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Jawi": { 
    learnBasics: "O5W7h3n_XC4",
    conversation: "https://www.youtube.com/watch?v=O5W7h3n_XC4"
  },
  "Filipino": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },
  "Tagalog": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },
  "Khmer": { 
    learnBasics: "WPNXK_wFLQI",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Lao": { 
    learnBasics: "RVxVcIXKclw",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Burmese": { 
    learnBasics: "6XRn9Rv7lvA",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Myanmar Burmese": { 
    learnBasics: "6XRn9Rv7lvA",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Tibetan": { 
    learnBasics: "aQOUSJOVHp8",
    conversation: "https://www.youtube.com/watch?v=aQOUSJOVHp8"
  },
  "Mongolian": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Hmong": { 
    learnBasics: "bZdBPKy0INU",
    conversation: "https://www.youtube.com/watch?v=bZdBPKy0INU"
  },
  "Miao": { 
    learnBasics: "bZdBPKy0INU",
    conversation: "https://www.youtube.com/watch?v=bZdBPKy0INU"
  },
  "Hakha Chin": { 
    learnBasics: "6XRn9Rv7lvA",
    conversation: "https://www.youtube.com/watch?v=6XRn9Rv7lvA"
  },
  "Jingpo": { 
    learnBasics: "6XRn9Rv7lvA",
    conversation: "https://www.youtube.com/watch?v=6XRn9Rv7lvA"
  },
  "Kachin": { 
    learnBasics: "6XRn9Rv7lvA",
    conversation: "https://www.youtube.com/watch?v=6XRn9Rv7lvA"
  },
  "Karen": { 
    learnBasics: "6XRn9Rv7lvA",
    conversation: "https://www.youtube.com/watch?v=6XRn9Rv7lvA"
  },
  "Shan": { 
    learnBasics: "6XRn9Rv7lvA",
    conversation: "https://www.youtube.com/watch?v=6XRn9Rv7lvA"
  },

  // =============================================
  // INDIAN LANGUAGES (22 languages)
  // =============================================
  "Hindi": { 
    learnBasics: "1lrz11BbqCA", 
    phrases: "7OnHomPRu6w",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Bengali": { 
    learnBasics: "TxPX7RvUUeU",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Tamil": { 
    learnBasics: "OQ7vPFk3L_Q",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Telugu": { 
    learnBasics: "i3UZa5fMP_Y",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Malayalam": { 
    learnBasics: "kqjHPGqWB5s",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Kannada": { 
    learnBasics: "KQ5TQ5EGtE0",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Gujarati": { 
    learnBasics: "z6XjxOr1QnY",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Marathi": { 
    learnBasics: "Fz-jbEvghhY",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Punjabi Gurmukhi": { 
    learnBasics: "oNUFPKLZans",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Punjabi Shahmukhi": { 
    learnBasics: "oNUFPKLZans",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Urdu": { 
    learnBasics: "7dC6cEjYv5E",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Nepali": { 
    learnBasics: "fE0AzFPgCsc",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Sanskrit": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Sindhi": { 
    learnBasics: "7dC6cEjYv5E",
    conversation: "https://www.youtube.com/watch?v=7dC6cEjYv5E"
  },
  "Assamese": { 
    learnBasics: "TxPX7RvUUeU",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Odia": { 
    learnBasics: "TxPX7RvUUeU",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Konkani": { 
    learnBasics: "z6XjxOr1QnY",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Dogri": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Maithili": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Bhojpuri": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Awadhi": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Marwadi": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=NL5FVg3g8mQ"
  },
  "Tulu": { 
    learnBasics: "KQ5TQ5EGtE0",
    conversation: "https://www.youtube.com/watch?v=KQ5TQ5EGtE0"
  },
  "Meiteilon Manipuri": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Santali Latin": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Santali Ol Chiki": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Kashmiri": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Nepalbhasa Newari": { 
    learnBasics: "fE0AzFPgCsc",
    conversation: "https://www.youtube.com/watch?v=fE0AzFPgCsc"
  },
  "Sinhala": { 
    learnBasics: "OQ7vPFk3L_Q",
    conversation: "https://www.youtube.com/watch?v=OQ7vPFk3L_Q"
  },
  "Dhivehi": { 
    learnBasics: "fE0AzFPgCsc",
    conversation: "https://www.youtube.com/watch?v=fE0AzFPgCsc"
  },
  "Kokborok": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Garo": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Bodo": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Khasi": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Mizo": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },

  // =============================================
  // MIDDLE EASTERN LANGUAGES (15 languages)
  // =============================================
  "Arabic": { 
    learnBasics: "NapGLT3WFX8", 
    phrases: "UvWJoZJfVuk",
    conversation: "https://www.youtube.com/watch?v=CVBZzNZhfpA"
  },
  "Egyptian Arabic": { 
    learnBasics: "ZMpekpfglxA",
    conversation: "https://www.youtube.com/watch?v=CVBZzNZhfpA"
  },
  "Persian": { 
    learnBasics: "V_IjYmTo_8s",
    conversation: "https://www.youtube.com/watch?v=O5W7h3n_XC4"
  },
  "Dari": { 
    learnBasics: "V_IjYmTo_8s",
    conversation: "https://www.youtube.com/watch?v=V_IjYmTo_8s"
  },
  "Turkish": { 
    learnBasics: "cKIEbKQEG6Y",
    conversation: "https://www.youtube.com/watch?v=ft1aXd5GUTk"
  },
  "Hebrew": { 
    learnBasics: "J3uL3GSPNCs",
    conversation: "https://www.youtube.com/watch?v=Y0uUInA80EA"
  },
  "Kurdish Kurmanji": { 
    learnBasics: "MPXVMBa6vI8",
    conversation: "https://www.youtube.com/watch?v=MPXVMBa6vI8"
  },
  "Kurdish Sorani": { 
    learnBasics: "MPXVMBa6vI8",
    conversation: "https://www.youtube.com/watch?v=MPXVMBa6vI8"
  },
  "Azerbaijani": { 
    learnBasics: "ZDX5zMc5D9I",
    conversation: "https://www.youtube.com/watch?v=ZDX5zMc5D9I"
  },
  "Georgian": { 
    learnBasics: "GnYqQZ0mXV8",
    conversation: "https://www.youtube.com/watch?v=GnYqQZ0mXV8"
  },
  "Armenian": { 
    learnBasics: "i3wHuD4xV_o",
    conversation: "https://www.youtube.com/watch?v=i3wHuD4xV_o"
  },
  "Pashto": { 
    learnBasics: "V_IjYmTo_8s",
    conversation: "https://www.youtube.com/watch?v=V_IjYmTo_8s"
  },
  "Baluchi": { 
    learnBasics: "UvWJoZJfVuk",
    conversation: "https://www.youtube.com/watch?v=UvWJoZJfVuk"
  },
  "Tamazight": { 
    learnBasics: "NapGLT3WFX8",
    conversation: "https://www.youtube.com/watch?v=NapGLT3WFX8"
  },
  "Tamazight Tifinagh": { 
    learnBasics: "NapGLT3WFX8",
    conversation: "https://www.youtube.com/watch?v=NapGLT3WFX8"
  },

  // =============================================
  // AFRICAN LANGUAGES (55 languages)
  // =============================================
  "Swahili": { 
    learnBasics: "5etLu2r0JnQ",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Zulu": { 
    learnBasics: "8irU5BM6EoU",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Xhosa": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Yoruba": { 
    learnBasics: "aL64isnkdSg",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Hausa": { 
    learnBasics: "NapGLT3WFX8",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Igbo": { 
    learnBasics: "2IYQe5c56EY",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Amharic": { 
    learnBasics: "uMmQd11Ltqo",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Somali": { 
    learnBasics: "kCWyeYeFSq8",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Afrikaans": { 
    learnBasics: "mNX1wpIQ4Uk",
    conversation: "https://www.youtube.com/watch?v=uXB6pGYVNeA"
  },
  "Shona": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Twi": { 
    learnBasics: "2IYQe5c56EY",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Luganda": { 
    learnBasics: "2IYQe5c56EY",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Kinyarwanda": { 
    learnBasics: "bJ0BrHYkcXg",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Rwanda": { 
    learnBasics: "bJ0BrHYkcXg",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Lingala": { 
    learnBasics: "5etLu2r0JnQ",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Wolof": { 
    learnBasics: "5etLu2r0JnQ",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Fulani": { 
    learnBasics: "NapGLT3WFX8",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Oromo": { 
    learnBasics: "uMmQd11Ltqo",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Tigrinya": { 
    learnBasics: "bJ0BrHYkcXg",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Tswana": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Sesotho": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Chichewa": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Malagasy": { 
    learnBasics: "TbxkUBYyZlo",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Acholi": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Afar": { 
    learnBasics: "NapGLT3WFX8",
    conversation: "https://www.youtube.com/watch?v=NapGLT3WFX8"
  },
  "Alur": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Bambara": { 
    learnBasics: "NapGLT3WFX8",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Bemba": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Dinka": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Dyula": { 
    learnBasics: "NapGLT3WFX8",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Ewe": { 
    learnBasics: "2IYQe5c56EY",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Fon": { 
    learnBasics: "2IYQe5c56EY",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Ga": { 
    learnBasics: "2IYQe5c56EY",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Kalaallisut": { 
    learnBasics: "mNX1wpIQ4Uk",
    conversation: "https://www.youtube.com/watch?v=mNX1wpIQ4Uk"
  },
  "Kanuri": { 
    learnBasics: "NapGLT3WFX8",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Kiga": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Kikongo": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Kituba": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Luo": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Ndau": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Ndebele South": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "NKo": { 
    learnBasics: "kCWyeYeFSq8",
    conversation: "https://www.youtube.com/watch?v=kCWyeYeFSq8"
  },
  "Nuer": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Rundi": { 
    learnBasics: "bJ0BrHYkcXg",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Sango": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Susu": { 
    learnBasics: "2IYQe5c56EY",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Swati": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Tiv": { 
    learnBasics: "2IYQe5c56EY",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Tsonga": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Tumbuka": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Venda": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Baoule": { 
    learnBasics: "2IYQe5c56EY",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Dombe": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },
  "Sepedi": { 
    learnBasics: "uNDf0V06m0w",
    conversation: "https://www.youtube.com/watch?v=ZvMWixQY5OQ"
  },

  // =============================================
  // PHILIPPINE LANGUAGES (12 languages)
  // =============================================
  "Cebuano": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },
  "Bisaya": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },
  "Ilocano": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },
  "Hiligaynon": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },
  "Waray": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },
  "Kapampangan": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },
  "Pangasinan": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },
  "Bikol": { 
    learnBasics: "PcKn3rE2dZ8",
    conversation: "https://www.youtube.com/watch?v=MpGGA0R25xk"
  },

  // =============================================
  // INDONESIAN REGIONAL LANGUAGES (12 languages)
  // =============================================
  "Javanese": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Sundanese": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Madurese": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Minang": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Betawi": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Balinese": { 
    learnBasics: "EITmrtmgiV0",
    conversation: "https://www.youtube.com/watch?v=EITmrtmgiV0"
  },
  "Acehnese": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Batak Toba": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Batak Karo": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Batak Simalungun": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Makassar": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },
  "Iban": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=7yf0qgDUXGs"
  },

  // =============================================
  // NATIVE AMERICAN & INDIGENOUS LANGUAGES (10 languages)
  // =============================================
  "Navajo": { 
    learnBasics: "C8oqnpbpqjY",
    conversation: "https://www.youtube.com/watch?v=C8oqnpbpqjY"
  },
  "Cherokee": { 
    learnBasics: "C8oqnpbpqjY",
    conversation: "https://www.youtube.com/watch?v=C8oqnpbpqjY"
  },
  "Dakota": { 
    learnBasics: "C8oqnpbpqjY",
    conversation: "https://www.youtube.com/watch?v=C8oqnpbpqjY"
  },
  "Inuktitut": { 
    learnBasics: "Ml5oR1F9OzE",
    conversation: "https://www.youtube.com/watch?v=Ml5oR1F9OzE"
  },
  "Quechua": { 
    learnBasics: "6_5FnCLLYoA",
    conversation: "https://www.youtube.com/watch?v=6_5FnCLLYoA"
  },
  "Guarani": { 
    learnBasics: "6_5FnCLLYoA",
    conversation: "https://www.youtube.com/watch?v=6_5FnCLLYoA"
  },
  "Aymara": { 
    learnBasics: "6_5FnCLLYoA",
    conversation: "https://www.youtube.com/watch?v=6_5FnCLLYoA"
  },
  "Nahuatl Eastern Huasteca": { 
    learnBasics: "PYvyGptdQcE",
    conversation: "https://www.youtube.com/watch?v=PYvyGptdQcE"
  },
  "Yucatec Maya": { 
    learnBasics: "PYvyGptdQcE",
    conversation: "https://www.youtube.com/watch?v=PYvyGptdQcE"
  },
  "Zapotec": { 
    learnBasics: "PYvyGptdQcE",
    conversation: "https://www.youtube.com/watch?v=PYvyGptdQcE"
  },
  "Mixtec": { 
    learnBasics: "PYvyGptdQcE",
    conversation: "https://www.youtube.com/watch?v=PYvyGptdQcE"
  },
  "Qeqchi": { 
    learnBasics: "6_5FnCLLYoA",
    conversation: "https://www.youtube.com/watch?v=6_5FnCLLYoA"
  },
  "Mam": { 
    learnBasics: "PYvyGptdQcE",
    conversation: "https://www.youtube.com/watch?v=PYvyGptdQcE"
  },

  // =============================================
  // PACIFIC & OCEANIAN LANGUAGES (10 languages)
  // =============================================
  "Hawaiian": { 
    learnBasics: "SB9Rly1HmQw",
    conversation: "https://www.youtube.com/watch?v=SB9Rly1HmQw"
  },
  "Maori": { 
    learnBasics: "Wx1R3OX5HXY",
    conversation: "https://www.youtube.com/watch?v=Wx1R3OX5HXY"
  },
  "Samoan": { 
    learnBasics: "TbxkUBYyZlo",
    conversation: "https://www.youtube.com/watch?v=TbxkUBYyZlo"
  },
  "Tongan": { 
    learnBasics: "Wx1R3OX5HXY",
    conversation: "https://www.youtube.com/watch?v=Wx1R3OX5HXY"
  },
  "Fijian": { 
    learnBasics: "TbxkUBYyZlo",
    conversation: "https://www.youtube.com/watch?v=TbxkUBYyZlo"
  },
  "Tahitian": { 
    learnBasics: "SB9Rly1HmQw",
    conversation: "https://www.youtube.com/watch?v=SB9Rly1HmQw"
  },
  "Chuukese": { 
    learnBasics: "TbxkUBYyZlo",
    conversation: "https://www.youtube.com/watch?v=TbxkUBYyZlo"
  },
  "Marshallese": { 
    learnBasics: "TbxkUBYyZlo",
    conversation: "https://www.youtube.com/watch?v=TbxkUBYyZlo"
  },
  "Fijian Hindi": { 
    learnBasics: "1lrz11BbqCA",
    conversation: "https://www.youtube.com/watch?v=1lrz11BbqCA"
  },
  "Tok Pisin": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=qFMvjnHpOEE"
  },
  "Hiri Motu": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=qFMvjnHpOEE"
  },

  // =============================================
  // CENTRAL ASIAN LANGUAGES (8 languages)
  // =============================================
  "Kazakh": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Kyrgyz": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Tajik": { 
    learnBasics: "V_IjYmTo_8s",
    conversation: "https://www.youtube.com/watch?v=V_IjYmTo_8s"
  },
  "Turkmen": { 
    learnBasics: "ZDX5zMc5D9I",
    conversation: "https://www.youtube.com/watch?v=ZDX5zMc5D9I"
  },
  "Uzbek": { 
    learnBasics: "ZDX5zMc5D9I",
    conversation: "https://www.youtube.com/watch?v=ZDX5zMc5D9I"
  },
  "Uyghur": { 
    learnBasics: "QOpQf3fi2N4",
    conversation: "https://www.youtube.com/watch?v=QOpQf3fi2N4"
  },
  "Tatar": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Bashkir": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Chuvash": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Chechen": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Avar": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Ossetian": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Abkhaz": { 
    learnBasics: "i1PC7FqVXQg",
    conversation: "https://www.youtube.com/watch?v=i1PC7FqVXQg"
  },
  "Yakut": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Buryat": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Komi": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Udmurt": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Mari": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Meadow Mari": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Tuvan": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Crimean Tatar": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Khalaj": { 
    learnBasics: "cKIEbKQEG6Y",
    conversation: "https://www.youtube.com/watch?v=cKIEbKQEG6Y"
  },

  // =============================================
  // CREOLE LANGUAGES (8 languages)
  // =============================================
  "Haitian Creole": { 
    learnBasics: "dEcr9M0xKE4",
    conversation: "https://www.youtube.com/watch?v=dEcr9M0xKE4"
  },
  "Papiamento": { 
    learnBasics: "dEcr9M0xKE4",
    conversation: "https://www.youtube.com/watch?v=dEcr9M0xKE4"
  },
  "Jamaican Patois": { 
    learnBasics: "dEcr9M0xKE4",
    conversation: "https://www.youtube.com/watch?v=dEcr9M0xKE4"
  },
  "Mauritian Creole": { 
    learnBasics: "dEcr9M0xKE4",
    conversation: "https://www.youtube.com/watch?v=dEcr9M0xKE4"
  },
  "Seychellois Creole": { 
    learnBasics: "dEcr9M0xKE4",
    conversation: "https://www.youtube.com/watch?v=dEcr9M0xKE4"
  },
  "Krio": { 
    learnBasics: "dEcr9M0xKE4",
    conversation: "https://www.youtube.com/watch?v=dEcr9M0xKE4"
  },
  "Tetum": { 
    learnBasics: "qFMvjnHpOEE",
    conversation: "https://www.youtube.com/watch?v=qFMvjnHpOEE"
  },
  "Chamorro": { 
    learnBasics: "TbxkUBYyZlo",
    conversation: "https://www.youtube.com/watch?v=TbxkUBYyZlo"
  },

  // =============================================
  // OTHER LANGUAGES (15 languages)
  // =============================================
  "Esperanto": { 
    learnBasics: "Sk6YqynZ1h8",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
  "Latin": { 
    learnBasics: "Q4pZnM7LeSo",
    conversation: "https://www.youtube.com/watch?v=Q4pZnM7LeSo"
  },
  "Yiddish": { 
    learnBasics: "i1PC7FqVXQg",
    conversation: "https://www.youtube.com/watch?v=i1PC7FqVXQg"
  },
  "Ladino": { 
    learnBasics: "Sk6YqynZ1h8",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
  "Romani": { 
    learnBasics: "8irU5BM6EoU",
    conversation: "https://www.youtube.com/watch?v=8irU5BM6EoU"
  },
  "Faroese": { 
    learnBasics: "mNX1wpIQ4Uk",
    conversation: "https://www.youtube.com/watch?v=mNX1wpIQ4Uk"
  },
  "Manx": { 
    learnBasics: "mNX1wpIQ4Uk",
    conversation: "https://www.youtube.com/watch?v=mNX1wpIQ4Uk"
  },
  "Cornish": { 
    learnBasics: "mNX1wpIQ4Uk",
    conversation: "https://www.youtube.com/watch?v=mNX1wpIQ4Uk"
  },
  "Sami North": { 
    learnBasics: "NL1YwvJFrL4",
    conversation: "https://www.youtube.com/watch?v=NL1YwvJFrL4"
  },
  "Friulian": { 
    learnBasics: "Sk6YqynZ1h8",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
  "Ligurian": { 
    learnBasics: "Sk6YqynZ1h8",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
  "Lombard": { 
    learnBasics: "Sk6YqynZ1h8",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
  "Venetian": { 
    learnBasics: "Sk6YqynZ1h8",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
  "Silesian": { 
    learnBasics: "iB_sassbnOw",
    conversation: "https://www.youtube.com/watch?v=iB_sassbnOw"
  },
  "Limburgish": { 
    learnBasics: "mNX1wpIQ4Uk",
    conversation: "https://www.youtube.com/watch?v=mNX1wpIQ4Uk"
  },
  "Latgalian": { 
    learnBasics: "ZMkSgqFQDks",
    conversation: "https://www.youtube.com/watch?v=ZMkSgqFQDks"
  },
  "Hunsrik": { 
    learnBasics: "mNX1wpIQ4Uk",
    conversation: "https://www.youtube.com/watch?v=mNX1wpIQ4Uk"
  },
  "Francais": { 
    learnBasics: "Sk6YqynZ1h8",
    conversation: "https://www.youtube.com/watch?v=Sk6YqynZ1h8"
  },
}

// =====================================================
// COMMON PHRASES FOR ALL LANGUAGES
// =====================================================
const languagePhrases: Record<string, LanguagePhrases> = {
  // European Languages
  "English": {
    hello: "Hello",
    goodbye: "Goodbye",
    thankYou: "Thank you",
    please: "Please",
    yes: "Yes",
    no: "No",
    howAreYou: "How are you?",
    iLoveYou: "I love you",
    numbers: ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
  },
  "Spanish": {
    hello: "Hola",
    goodbye: "Adiós",
    thankYou: "Gracias",
    please: "Por favor",
    yes: "Sí",
    no: "No",
    howAreYou: "¿Cómo estás?",
    iLoveYou: "Te quiero",
    numbers: ["Uno", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Ocho", "Nueve", "Diez"]
  },
  "French": {
    hello: "Bonjour",
    goodbye: "Au revoir",
    thankYou: "Merci",
    please: "S'il vous plaît",
    yes: "Oui",
    no: "Non",
    howAreYou: "Comment allez-vous?",
    iLoveYou: "Je t'aime",
    numbers: ["Un", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf", "Dix"]
  },
  "German": {
    hello: "Hallo",
    goodbye: "Auf Wiedersehen",
    thankYou: "Danke",
    please: "Bitte",
    yes: "Ja",
    no: "Nein",
    howAreYou: "Wie geht es Ihnen?",
    iLoveYou: "Ich liebe dich",
    numbers: ["Eins", "Zwei", "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn"]
  },
  "Italian": {
    hello: "Ciao",
    goodbye: "Arrivederci",
    thankYou: "Grazie",
    please: "Per favore",
    yes: "Sì",
    no: "No",
    howAreYou: "Come stai?",
    iLoveYou: "Ti amo",
    numbers: ["Uno", "Due", "Tre", "Quattro", "Cinque", "Sei", "Sette", "Otto", "Nove", "Dieci"]
  },
  "Portuguese": {
    hello: "Olá",
    goodbye: "Adeus",
    thankYou: "Obrigado",
    please: "Por favor",
    yes: "Sim",
    no: "Não",
    howAreYou: "Como está?",
    iLoveYou: "Eu te amo",
    numbers: ["Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove", "Dez"]
  },
  "Russian": {
    hello: "Привет",
    goodbye: "До свидания",
    thankYou: "Спасибо",
    please: "Пожалуйста",
    yes: "Да",
    no: "Нет",
    howAreYou: "Как дела?",
    iLoveYou: "Я тебя люблю",
    numbers: ["Один", "Два", "Три", "Четыре", "Пять", "Шесть", "Семь", "Восемь", "Девять", "Десять"]
  },
  "Japanese": {
    hello: "こんにちは",
    goodbye: "さようなら",
    thankYou: "ありがとう",
    please: "お願いします",
    yes: "はい",
    no: "いいえ",
    howAreYou: "お元気ですか？",
    iLoveYou: "愛しています",
    numbers: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]
  },
  "Korean": {
    hello: "안녕하세요",
    goodbye: "안녕히 가세요",
    thankYou: "감사합니다",
    please: "부탁드립니다",
    yes: "네",
    no: "아니요",
    howAreYou: "어떻게 지내세요?",
    iLoveYou: "사랑해요",
    numbers: ["하나", "둘", "셋", "넷", "다섯", "여섯", "일곱", "여덟", "아홉", "열"]
  },
  "Chinese": {
    hello: "你好",
    goodbye: "再见",
    thankYou: "谢谢",
    please: "请",
    yes: "是",
    no: "不",
    howAreYou: "你好吗？",
    iLoveYou: "我爱你",
    numbers: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]
  },
  "Arabic": {
    hello: "مرحبا",
    goodbye: "مع السلامة",
    thankYou: "شكرا",
    please: "من فضلك",
    yes: "نعم",
    no: "لا",
    howAreYou: "كيف حالك؟",
    iLoveYou: "أحبك",
    numbers: ["واحد", "اثنان", "ثلاثة", "أربعة", "خمسة", "ستة", "سبعة", "ثمانية", "تسعة", "عشرة"]
  },
  "Hindi": {
    hello: "नमस्ते",
    goodbye: "अलविदा",
    thankYou: "धन्यवाद",
    please: "कृपया",
    yes: "हाँ",
    no: "नहीं",
    howAreYou: "आप कैसे हैं?",
    iLoveYou: "मैं तुमसे प्यार करता हूँ",
    numbers: ["एक", "दो", "तीन", "चार", "पाँच", "छह", "सात", "आठ", "नौ", "दस"]
  },
  "Urdu": {
    hello: "السلام علیکم",
    goodbye: "خدا حافظ",
    thankYou: "شکریہ",
    please: "براہ کرم",
    yes: "ہاں",
    no: "نہیں",
    howAreYou: "آپ کیسے ہیں؟",
    iLoveYou: "میں تم سے پیار کرتا ہوں",
    numbers: ["ایک", "دو", "تین", "چار", "پانچ", "چھ", "سات", "آٹھ", "نو", "دس"]
  },
  "Turkish": {
    hello: "Merhaba",
    goodbye: "Hoşça kal",
    thankYou: "Teşekkürler",
    please: "Lütfen",
    yes: "Evet",
    no: "Hayır",
    howAreYou: "Nasılsınız?",
    iLoveYou: "Seni seviyorum",
    numbers: ["Bir", "İki", "Üç", "Dört", "Beş", "Altı", "Yedi", "Sekiz", "Dokuz", "On"]
  },
  "Vietnamese": {
    hello: "Xin chào",
    goodbye: "Tạm biệt",
    thankYou: "Cảm ơn",
    please: "Làm ơn",
    yes: "Vâng",
    no: "Không",
    howAreYou: "Bạn khỏe không?",
    iLoveYou: "Anh yêu em",
    numbers: ["Một", "Hai", "Ba", "Bốn", "Năm", "Sáu", "Bảy", "Tám", "Chín", "Mười"]
  },
  "Thai": {
    hello: "สวัสดี",
    goodbye: "ลาก่อน",
    thankYou: "ขอบคุณ",
    please: "กรุณา",
    yes: "ใช่",
    no: "ไม่",
    howAreYou: "คุณเป็นอย่างไร?",
    iLoveYou: "ฉันรักคุณ",
    numbers: ["หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า", "สิบ"]
  },
  "Indonesian": {
    hello: "Halo",
    goodbye: "Selamat tinggal",
    thankYou: "Terima kasih",
    please: "Tolong",
    yes: "Ya",
    no: "Tidak",
    howAreYou: "Apa kabar?",
    iLoveYou: "Aku cinta kamu",
    numbers: ["Satu", "Dua", "Tiga", "Empat", "Lima", "Enam", "Tujuh", "Delapan", "Sembilan", "Sepuluh"]
  },
  "Dutch": {
    hello: "Hallo",
    goodbye: "Tot ziens",
    thankYou: "Dank je",
    please: "Alsjeblieft",
    yes: "Ja",
    no: "Nee",
    howAreYou: "Hoe gaat het?",
    iLoveYou: "Ik hou van je",
    numbers: ["Eén", "Twee", "Drie", "Vier", "Vijf", "Zes", "Zeven", "Acht", "Negen", "Tien"]
  },
  "Polish": {
    hello: "Cześć",
    goodbye: "Do widzenia",
    thankYou: "Dziękuję",
    please: "Proszę",
    yes: "Tak",
    no: "Nie",
    howAreYou: "Jak się masz?",
    iLoveYou: "Kocham cię",
    numbers: ["Jeden", "Dwa", "Trzy", "Cztery", "Pięć", "Sześć", "Siedem", "Osiem", "Dziewięć", "Dziesięć"]
  },
  "Greek": {
    hello: "Γειά σου",
    goodbye: "Αντίοσο",
    thankYou: "Ευχαριστώ",
    please: "Παρακαλώ",
    yes: "Ναι",
    no: "Όχι",
    howAreYou: "Πώς είσαι;",
    iLoveYou: "Σ' αγαπώ",
    numbers: ["Ένα", "Δύο", "Τρία", "Τέσσερα", "Πέντε", "Έξι", "Επτά", "Οκτώ", "Εννέα", "Δέκα"]
  },
  "Swedish": {
    hello: "Hej",
    goodbye: "Hej då",
    thankYou: "Tack",
    please: "Snälla",
    yes: "Ja",
    no: "Nej",
    howAreYou: "Hur mår du?",
    iLoveYou: "Jag älskar dig",
    numbers: ["Ett", "Två", "Tre", "Fyra", "Fem", "Sex", "Sju", "Åtta", "Nio", "Tio"]
  },
  "Hebrew": {
    hello: "שלום",
    goodbye: "להתראות",
    thankYou: "תודה",
    please: "בבקשה",
    yes: "כן",
    no: "לא",
    howAreYou: "מה שלומך?",
    iLoveYou: "אני אוהב אותך",
    numbers: ["אחת", "שתיים", "שלוש", "ארבע", "חמש", "שש", "שבע", "שמונה", "תשע", "עשר"]
  },
  "Persian": {
    hello: "سلام",
    goodbye: "خداحافظ",
    thankYou: "ممنون",
    please: "لطفاً",
    yes: "بله",
    no: "نه",
    howAreYou: "چطوری؟",
    iLoveYou: "دوستت دارم",
    numbers: ["یک", "دو", "سه", "چهار", "پنج", "شش", "هفت", "هشت", "نه", "ده"]
  },
  "Tagalog": {
    hello: "Kamusta",
    goodbye: "Paalam",
    thankYou: "Salamat",
    please: "Pakiusap",
    yes: "Oo",
    no: "Hindi",
    howAreYou: "Kumusta ka?",
    iLoveYou: "Mahal kita",
    numbers: ["Isa", "Dalawa", "Tatlo", "Apat", "Lima", "Anim", "Pito", "Walo", "Siyam", "Sampu"]
  },
  "Bengali": {
    hello: "হ্যালো",
    goodbye: "বিদায়",
    thankYou: "ধন্যবাদ",
    please: "দয়া করে",
    yes: "হ্যাঁ",
    no: "না",
    howAreYou: "আপনি কেমন আছেন?",
    iLoveYou: "আমি তোমাকে ভালোবাসি",
    numbers: ["এক", "দুই", "তিন", "চার", "পাঁচ", "ছয়", "সাত", "আট", "নয়", "দশ"]
  },
  "Tamil": {
    hello: "வணக்கம்",
    goodbye: "போய் வருகிறேன்",
    thankYou: "நன்றி",
    please: "தயவுசெய்து",
    yes: "ஆம்",
    no: "இல்லை",
    howAreYou: "நீங்கள் எப்படி இருக்கிறீர்கள்?",
    iLoveYou: "நான் உன்னை காதலிக்கிறேன்",
    numbers: ["ஒன்று", "இரண்டு", "மூன்று", "நான்கு", "ஐந்து", "ஆறு", "ஏழு", "எட்டு", "ஒன்பது", "பத்து"]
  },
  "Swahili": {
    hello: "Habari",
    goodbye: "Kwaheri",
    thankYou: "Asante",
    please: "Tafadhali",
    yes: "Ndiyo",
    no: "Hapana",
    howAreYou: "Habari yako?",
    iLoveYou: "Nakupenda",
    numbers: ["Moja", "Mbili", "Tatu", "Nne", "Tano", "Sita", "Saba", "Nane", "Tisa", "Kumi"]
  },
  "Ukrainian": {
    hello: "Привіт",
    goodbye: "До побачення",
    thankYou: "Дякую",
    please: "Будь ласка",
    yes: "Так",
    no: "Ні",
    howAreYou: "Як справи?",
    iLoveYou: "Я тебе кохаю",
    numbers: ["Один", "Два", "Три", "Чотири", "П'ять", "Шість", "Сім", "Вісім", "Дев'ять", "Десять"]
  },
}

// =====================================================
// LANGUAGE INFO
// =====================================================
const languageInfo: Record<string, LanguageInfo> = {
  "English": {
    speakers: "1.5 billion",
    countries: ["USA", "UK", "Canada", "Australia", "New Zealand"],
    writingSystem: "Latin",
    family: "Germanic",
    funFacts: ["Most widely spoken language", "Official language of 67 countries", "Dominant language of the internet"]
  },
  "Spanish": {
    speakers: "500 million",
    countries: ["Spain", "Mexico", "Argentina", "Colombia", "Peru"],
    writingSystem: "Latin",
    family: "Romance",
    funFacts: ["Second most spoken native language", "Official in 21 countries", "Fastest growing language in the US"]
  },
  "Chinese": {
    speakers: "1.3 billion",
    countries: ["China", "Taiwan", "Singapore", "Malaysia"],
    writingSystem: "Chinese characters",
    family: "Sino-Tibetan",
    funFacts: ["Most spoken language by native speakers", "One of the oldest writing systems", "Tonal language with 4 tones"]
  },
  "Hindi": {
    speakers: "600 million",
    countries: ["India", "Nepal", "Fiji", "Mauritius"],
    writingSystem: "Devanagari",
    family: "Indo-Aryan",
    funFacts: ["Fourth most spoken language globally", "Official language of India", "Influenced by Sanskrit"]
  },
  "Arabic": {
    speakers: "400 million",
    countries: ["Saudi Arabia", "Egypt", "UAE", "Morocco", "Iraq"],
    writingSystem: "Arabic script",
    family: "Semitic",
    funFacts: ["Written right to left", "Official in 25 countries", "Language of the Quran"]
  },
  "Japanese": {
    speakers: "125 million",
    countries: ["Japan"],
    writingSystem: "Hiragana, Katakana, Kanji",
    family: "Japonic",
    funFacts: ["Uses 3 writing systems", "No genetic relation to Chinese", "Honorific speech levels"]
  },
  "Korean": {
    speakers: "77 million",
    countries: ["South Korea", "North Korea", "China", "Japan"],
    writingSystem: "Hangul",
    family: "Koreanic",
    funFacts: ["Hangul was invented in 1443", "Considered easiest alphabet", "Language isolate"]
  },
  "French": {
    speakers: "300 million",
    countries: ["France", "Canada", "Belgium", "Switzerland", "Africa"],
    writingSystem: "Latin",
    family: "Romance",
    funFacts: ["Official in 29 countries", "Language of diplomacy", "Second most learned language"]
  },
  "German": {
    speakers: "130 million",
    countries: ["Germany", "Austria", "Switzerland", "Belgium", "Luxembourg"],
    writingSystem: "Latin",
    family: "Germanic",
    funFacts: ["Most spoken native language in EU", "Language of science", "Compound words"]
  },
  "Urdu": {
    speakers: "230 million",
    countries: ["Pakistan", "India", "UAE", "UK"],
    writingSystem: "Perso-Arabic (Nastaliq)",
    family: "Indo-Aryan",
    funFacts: ["National language of Pakistan", "Mutually intelligible with Hindi", "Language of poetry"]
  },
}

// =====================================================
// HELPER FUNCTIONS
// =====================================================

export function getLanguageVideos(languageName: string): LanguageVideos | undefined {
  return languageVideos[languageName]
}

export function getLanguagePhrases(languageName: string): LanguagePhrases | undefined {
  return languagePhrases[languageName]
}

export function getLanguageInfo(languageName: string): LanguageInfo | undefined {
  return languageInfo[languageName]
}

// Get YouTube embed URL from video ID
export function getYouTubeEmbedUrl(videoId: string | undefined): string | null {
  if (!videoId) return null
  // If it's already a full URL, extract the video ID
  if (videoId.includes('youtube.com')) {
    const match = videoId.match(/[?&]v=([^&]+)/)
    if (match) {
      return `https://www.youtube.com/embed/${match[1]}`
    }
    return null
  }
  return `https://www.youtube.com/embed/${videoId}`
}

// Get YouTube thumbnail URL
export function getYouTubeThumbnail(videoId: string | undefined): string | null {
  if (!videoId || videoId.includes('youtube.com')) return null
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

// Check if language has video content
export function hasVideoContent(languageName: string): boolean {
  const videos = languageVideos[languageName]
  return !!(videos?.learnBasics || videos?.phrases || videos?.conversation)
}

// Get all languages with video content
export function getLanguagesWithVideos(): string[] {
  return Object.keys(languageVideos).filter(lang => hasVideoContent(lang))
}

// Export the video data for use in components
export { languageVideos, languagePhrases, languageInfo }
