// Words that have homophones — curated for the homophones feature

const CLASSIC_CONFUSABLES = [
  'there', 'their', 'hear', 'here', 'your', 'to', 'too', 'its',
  'affect', 'accept', 'allowed', 'aloud', 'altar', 'alter',
  'principal', 'stationary', 'complement', 'compliment',
]

const NATURE = [
  'sea', 'sun', 'son', 'flower', 'flour', 'rain', 'reign', 'rein',
  'morning', 'mourning', 'dew', 'due', 'mist', 'missed',
  'hail', 'bale', 'gale', 'vale', 'plain', 'plane', 'blew', 'blue',
]

const ANIMALS = [
  'bear', 'bare', 'deer', 'dear', 'hare', 'hair', 'moose', 'lynx',
  'ewe', 'yew', 'you', 'fawn', 'faun', 'gnu', 'knew', 'new',
  'mussel', 'muscle', 'sole', 'soul', 'bee', 'be',
]

const BODY = [
  'eye', 'heel', 'heal', 'vein', 'vane', 'waste', 'waist',
]

const ACTIONS = [
  'write', 'right', 'rite', 'brake', 'break', 'buy', 'by', 'bye',
  'read', 'red', 'lead', 'led', 'flew', 'flu', 'flue',
  'kneel', 'know', 'no', 'knot', 'not', 'wrap', 'rap', 'threw', 'through',
  'wear', 'where', 'ware', 'meet', 'meat', 'feet', 'feat',
  'sail', 'sale', 'tail', 'tale', 'mail', 'male', 'pare', 'pear', 'pair',
  'fare', 'fair', 'steal', 'steel', 'reel', 'real', 'week', 'weak',
  'road', 'rode', 'loan', 'lone', 'groan', 'grown', 'role', 'roll',
  'whole', 'hole', 'peace', 'piece', 'one', 'won', 'eight', 'ate',
  'four', 'for', 'fore', 'night', 'knight', 'knave', 'nave',
]

const OBJECTS = [
  'ring', 'cellar', 'seller', 'ceiling', 'sealing', 'coarse', 'course',
  'board', 'bored', 'chord', 'cord', 'kernel', 'colonel',
  'pane', 'pain', 'scene', 'seen', 'seam', 'seem', 'suite', 'sweet',
  'berry', 'bury', 'bread', 'bred', 'clause', 'claws', 'dye', 'die',
  'prey', 'pray', 'prophet', 'profit', 'queue', 'cue',
  'serial', 'cereal', 'sighs', 'size', 'slay', 'sleigh',
  'wade', 'weighed', 'waive', 'wave', 'war', 'wore',
]

const ALL_WORDS = [
  ...CLASSIC_CONFUSABLES, ...NATURE, ...ANIMALS, ...BODY, ...ACTIONS, ...OBJECTS,
]

export const HOMOPHONE_WORDS: string[] = [
  ...new Set(ALL_WORDS.map((w) => w.toLowerCase())),
].sort()
