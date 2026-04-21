/**
 * TRANSLATOR QUEUE
 * ─────────────────────────────────────────────────────────────────────────────
 * Add language pairs here in the order you want them published.
 * The GitHub Actions cron job picks pairs from the TOP of this list,
 * moves them to translator-feed.json with the current timestamp, and
 * deploys to Vercel automatically.
 *
 * HOW TO ADD:
 *   Add a new { from, to } object at the TOP of the array.
 *   It will go live on the next cron run (every 30 min by default).
 *
 * HOW TO BATCH-ADD:
 *   Add multiple pairs. Each cron run moves PAIRS_PER_RUN pairs (default: 1).
 *   Set PAIRS_PER_RUN in scripts/release-pair.mjs to push faster.
 */

export type QueuedPair = {
  from: string
  to: string
}

export const translatorQueue: QueuedPair[] = [
  // ── Add new pairs here (top = next to publish) ──────────────────────────

  { from: 'Bisaya',        to: 'English'       },
  { from: 'Icelandic',     to: 'English'       },
  { from: 'Georgian',      to: 'English'       },
  { from: 'Slovak',        to: 'English'       },
  { from: 'Hungarian',     to: 'English'       },
  { from: 'Kinyarwanda',   to: 'English'       },
  { from: 'English',       to: 'Pashto'        },
  { from: 'Esperanto',     to: 'English'       },
  { from: 'English',       to: 'Haitian Creole'},
  { from: 'Yiddish',       to: 'English'       },
  { from: 'Maori',         to: 'English'       },
  { from: 'English',       to: 'Basque'        },
  { from: 'Italian',       to: 'Spanish'       },
  { from: 'Tigrinya',      to: 'English'       },
  { from: 'Zulu',          to: 'English'       },
  { from: 'English',       to: 'Zulu'          },
  { from: 'Samoan',        to: 'English'       },
  { from: 'Macedonian',    to: 'English'       },
  { from: 'Yoruba',        to: 'English'       },
  { from: 'English',       to: 'Yoruba'        },
  { from: 'Hawaiian',         to: 'English'          },
  { from: 'English',          to: 'Azerbaijani'      },
  { from: 'English',          to: 'Belarusian'       },
  { from: 'Chinese',          to: 'Myanmar Burmese'  },
  { from: 'Shona',            to: 'English'          },
  { from: 'Hindi',            to: 'Urdu'             },
  { from: 'English',          to: 'Maltese'          },
  { from: 'Twi',              to: 'English'          },
  { from: 'Korean',           to: 'Japanese'         },
  { from: 'Russian',          to: 'Spanish'          },
  { from: 'Hindi',            to: 'Telugu'           },
  { from: 'Telugu',           to: 'Hindi'            },
  { from: 'English',          to: 'Afrikaans'        },
  { from: 'English',          to: 'Lithuanian'       },
  { from: 'Greek',            to: 'English'          },
  { from: 'Malay',            to: 'English'          },
  { from: 'Serbian',          to: 'English'          },
  { from: 'Spanish',          to: 'Urdu'             },
  { from: 'Korean',           to: 'Spanish'          },
  { from: 'Chichewa',         to: 'English'          },
  { from: 'Nepali',           to: 'English'          },
  { from: 'English',          to: 'Mongolian'        },
  { from: 'Hmong',            to: 'English'          },
  { from: 'Catalan',          to: 'English'          },
  { from: 'English',          to: 'Estonian'         },
  { from: 'Latvian',          to: 'English'          },
  { from: 'Croatian',         to: 'English'          },
  { from: 'Sinhala',          to: 'English'          },
  { from: 'Oromo',            to: 'English'          },
  { from: 'English',          to: 'Uzbek'            },
  { from: 'Uzbek',            to: 'English'          },
  { from: 'English',          to: 'Luxembourgish'    },
  { from: 'Hausa',            to: 'English'          },
  { from: 'Haitian Creole',  to: 'Spanish'          },
  { from: 'Xhosa',           to: 'English'          },
  { from: 'Danish',          to: 'English'          },
  { from: 'Haitian Creole',  to: 'English'          },
  { from: 'Arabic',          to: 'Spanish'          },
  { from: 'Welsh',           to: 'English'          },
  { from: 'Spanish',         to: 'Haitian Creole'   },
  { from: 'Marathi',         to: 'English'          },

]
