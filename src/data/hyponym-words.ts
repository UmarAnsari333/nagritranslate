// Words with rich hyponyms — curated for "types of [word]" searches

const ANIMALS = [
  'dog', 'cat', 'bird', 'fish', 'snake', 'shark', 'whale', 'insect', 'spider',
  'bear', 'deer', 'monkey', 'lizard', 'frog', 'crab', 'eagle', 'owl', 'parrot',
  'turtle', 'dolphin', 'ant', 'butterfly', 'beetle', 'fly', 'bee', 'horse',
]

const FOOD = [
  'grain', 'herb', 'spice', 'drink', 'tea', 'wine', 'beer', 'soup', 'cake',
  'cookie', 'pasta', 'rice', 'mushroom', 'pepper', 'bean', 'lentil',
]

const PEOPLE = [
  'doctor', 'artist', 'scientist', 'athlete', 'musician', 'writer', 'teacher',
  'soldier', 'engineer', 'lawyer', 'chef', 'actor', 'dancer', 'pilot', 'sailor',
  'farmer', 'hunter', 'priest', 'monk', 'warrior', 'spy', 'criminal',
]

const PLACES = [
  'building', 'city', 'country', 'island', 'mountain', 'river', 'lake', 'ocean',
  'forest', 'desert', 'village', 'street', 'bridge', 'tower', 'temple', 'palace',
  'school', 'hospital', 'market', 'port', 'cave', 'valley', 'bay', 'cliff',
]

const OBJECTS = [
  'weapon', 'tool', 'vehicle', 'boat', 'aircraft', 'furniture', 'instrument',
  'fabric', 'metal', 'stone', 'wood', 'glass', 'plastic', 'rope', 'container',
  'clock', 'lamp', 'mirror', 'hat', 'shoe', 'coat', 'ring', 'coin',
]

const NATURE = [
  'tree', 'flower', 'grass', 'rock', 'cloud', 'storm', 'wind', 'wave',
  'mineral', 'crystal', 'gem', 'soil', 'plant', 'moss', 'vine', 'seed',
  'star', 'planet', 'galaxy', 'moon', 'comet', 'volcano', 'glacier',
]

const CONCEPTS = [
  'music', 'sport', 'game', 'language', 'religion', 'art', 'dance', 'poetry',
  'science', 'math', 'philosophy', 'law', 'government', 'war', 'trade',
  'currency', 'color', 'shape', 'emotion', 'disease', 'medicine', 'drug',
]

const ALL_WORDS = [
  ...ANIMALS, ...FOOD, ...PEOPLE, ...PLACES, ...OBJECTS, ...NATURE, ...CONCEPTS,
]

export const HYPONYM_WORDS: string[] = [
  ...new Set(ALL_WORDS.map((w) => w.toLowerCase())),
].sort()
