export interface WordPair {
  before: string
  after: string
  hint: string
}

export const FILL_IN_BLANK_PAIRS: WordPair[] = [
  { before: 'make',   after: 'difference', hint: 'make ___ difference'   },
  { before: 'pay',    after: 'attention',  hint: 'pay ___ attention'     },
  { before: 'out',    after: 'control',    hint: 'out ___ control'       },
  { before: 'in',     after: 'future',     hint: 'in ___ future'         },
  { before: 'take',   after: 'action',     hint: 'take ___ action'       },
  { before: 'word',   after: 'mouth',      hint: 'word ___ mouth'        },
  { before: 'under',  after: 'pressure',   hint: 'under ___ pressure'    },
  { before: 'keep',   after: 'mind',       hint: 'keep ___ mind'         },
  { before: 'break',  after: 'news',       hint: 'break ___ news'        },
  { before: 'draw',   after: 'conclusion', hint: 'draw ___ conclusion'   },
  { before: 'play',   after: 'role',       hint: 'play ___ role'         },
  { before: 'come',   after: 'terms',      hint: 'come ___ terms'        },
  { before: 'at',     after: 'cost',       hint: 'at ___ cost'           },
  { before: 'give',   after: 'chance',     hint: 'give ___ chance'       },
  { before: 'hold',   after: 'ground',     hint: 'hold ___ ground'       },
  { before: 'raise',  after: 'question',   hint: 'raise ___ question'    },
  { before: 'set',    after: 'example',    hint: 'set ___ example'       },
  { before: 'take',   after: 'risk',       hint: 'take ___ risk'         },
  { before: 'face',   after: 'fact',       hint: 'face ___ fact'         },
  { before: 'find',   after: 'solution',   hint: 'find ___ solution'     },
  { before: 'reach',  after: 'agreement',  hint: 'reach ___ agreement'   },
  { before: 'cross',  after: 'mind',       hint: 'cross ___ mind'        },
  { before: 'make',   after: 'impact',     hint: 'make ___ impact'       },
  { before: 'bear',   after: 'mind',       hint: 'bear ___ mind'         },
]

export const FEATURED_PAIRS: WordPair[] = [
  { before: 'make',  after: 'difference', hint: 'make ___ difference' },
  { before: 'pay',   after: 'attention',  hint: 'pay ___ attention'   },
  { before: 'out',   after: 'control',    hint: 'out ___ control'     },
  { before: 'in',    after: 'future',     hint: 'in ___ future'       },
  { before: 'take',  after: 'action',     hint: 'take ___ action'     },
  { before: 'word',  after: 'mouth',      hint: 'word ___ mouth'      },
  { before: 'keep',  after: 'mind',       hint: 'keep ___ mind'       },
  { before: 'break', after: 'news',       hint: 'break ___ news'      },
]
