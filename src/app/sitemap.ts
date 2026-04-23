import { MetadataRoute } from "next";
import { phrasesIndex } from "@/lib/phrases-data";
import { learnIndex } from "@/lib/learn-data";
import { vocabularyIndex } from "@/lib/vocabulary-data";
import { languagePillarIndex } from "@/lib/language-pillar-data";

const BUILD_DATE = new Date("2026-04-02");
const BASE_URL = "https://nagritranslate.com";

// ── Utilities ─────────────────────────────────────────────────────────────────

// ── Sitemap ───────────────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Static pages
    {
      url: BASE_URL,
      lastModified: BUILD_DATE,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/translation`,
      lastModified: BUILD_DATE,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/languages`,
      lastModified: new Date("2026-03-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date("2026-03-15"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/language`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/phrases`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/phrases/old-timey-words`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/phrases/funny-weird-words`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/phrases/british-vs-american-english`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/phrases/english-idioms`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/phrases/collective-nouns`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/phrases/words-borrowed-from-other-languages`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/phrases/gen-z-slang`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/phrases/untranslatable-words`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/phrases/cockney-rhyming-slang`,
      lastModified: BUILD_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/learn`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/vocabulary`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/translators`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/tools`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools/word-counter`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/case-converter`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/slug-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/random-word-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/url-encoder-decoder`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/sort-deduplicate`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/text-repeater`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/text-reverser`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/remove-whitespace`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/find-replace`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/citation-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/sort-text`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/add-prefix-suffix`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/cursive-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/glitch-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/fontlu`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/tools/subscript-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/text-obfuscator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/fancy-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/numbers-to-words`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/morse-code-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/tiny-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/vaporwave-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/english-to-binary`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/ned-flanders-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/robot-voice-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/zalgo-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/navi-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/aurebesh-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/mirror-text`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/agario-names`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/emoji-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/fancy-letters`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/gibberish-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/al-bhed-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/medieval-english-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/papyrus-font-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/lorem-ipsum-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/comic-sans-font-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/pig-latin-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/gen-z-translator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/wolf-name-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/twitch-name-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/tools/preppy-font-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/tools/aesthetic-fonts-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools/underline-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/runic-alphabet-converter`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/emoji-buttons`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/standard-galactic-alphabet`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/speak-with-emojis`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/tools/letters-to-numbers`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${BASE_URL}/tools/calligraphy-alphabet`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${BASE_URL}/tools/circled-text-generator`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly",
      priority: 0.88,
    },

    // ── Educational content
    ...phrasesIndex.map((lang) => ({
      url: `${BASE_URL}/phrases/${lang.slug}`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...learnIndex.map((lang) => ({
      url: `${BASE_URL}/learn/${lang.slug}`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...vocabularyIndex.map((lang) => ({
      url: `${BASE_URL}/vocabulary/${lang.slug}`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...languagePillarIndex.map((lang) => ({
      url: `${BASE_URL}/language/${lang.slug}`,
      lastModified: BUILD_DATE,
      changeFrequency: "weekly" as const,
      priority: 0.87,
    })),
  ];
}
