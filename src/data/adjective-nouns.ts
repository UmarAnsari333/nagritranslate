// Common nouns curated for "adjectives for [noun]" searches
// Covers animals, people, places, nature, abstract concepts, objects

const ANIMALS = [
  'dog', 'cat', 'horse', 'bird', 'fish', 'lion', 'tiger', 'bear', 'wolf', 'fox',
  'rabbit', 'deer', 'eagle', 'owl', 'hawk', 'shark', 'whale', 'dolphin', 'snake',
  'dragon', 'elephant', 'giraffe', 'gorilla', 'monkey', 'leopard', 'cheetah', 'zebra',
  'penguin', 'parrot', 'crow', 'dove', 'swan', 'duck', 'frog', 'turtle', 'lizard',
  'butterfly', 'bee', 'spider', 'ant', 'mouse', 'rat', 'bat', 'panther', 'jaguar',
  'panda', 'koala', 'kangaroo', 'flamingo', 'peacock', 'crocodile', 'octopus', 'raven',
]

const PEOPLE = [
  'person', 'man', 'woman', 'child', 'baby', 'boy', 'girl', 'teenager', 'adult',
  'friend', 'enemy', 'stranger', 'neighbor', 'teacher', 'student', 'doctor', 'nurse',
  'artist', 'writer', 'poet', 'musician', 'singer', 'dancer', 'actor', 'hero',
  'villain', 'warrior', 'soldier', 'knight', 'king', 'queen', 'prince', 'princess',
  'leader', 'boss', 'mentor', 'parent', 'mother', 'father', 'sister', 'brother',
]

const PLACES = [
  'city', 'town', 'village', 'country', 'world', 'island', 'castle', 'house',
  'room', 'home', 'street', 'road', 'bridge', 'tower', 'temple', 'church',
  'school', 'library', 'hospital', 'market', 'garden', 'park', 'forest', 'jungle',
  'mountain', 'valley', 'desert', 'beach', 'ocean', 'river', 'lake', 'waterfall',
  'cave', 'cliff', 'hill', 'plain', 'meadow', 'field', 'farm', 'barn',
  'palace', 'mansion', 'cottage', 'cabin', 'inn', 'tavern', 'prison', 'dungeon',
  'battlefield', 'harbor', 'airport', 'station', 'plaza', 'alley', 'corridor', 'pathway',
]

const NATURE = [
  'sky', 'sun', 'moon', 'star', 'cloud', 'storm', 'rain', 'snow', 'wind', 'fire',
  'water', 'earth', 'air', 'ice', 'fog', 'mist', 'thunder', 'lightning', 'shadow',
  'light', 'darkness', 'dawn', 'dusk', 'night', 'day', 'morning', 'evening',
  'spring', 'summer', 'autumn', 'winter', 'season', 'weather', 'climate',
  'tree', 'flower', 'rose', 'leaf', 'branch', 'root', 'grass', 'moss', 'vine',
  'stone', 'rock', 'sand', 'soil', 'dust', 'mud', 'crystal', 'gem', 'diamond',
]

const ABSTRACT = [
  'love', 'hate', 'joy', 'pain', 'hope', 'fear', 'peace', 'war', 'life', 'death',
  'time', 'fate', 'truth', 'lie', 'dream', 'memory', 'thought', 'idea', 'belief',
  'faith', 'doubt', 'trust', 'betrayal', 'courage', 'cowardice', 'pride', 'shame',
  'beauty', 'ugliness', 'wisdom', 'ignorance', 'power', 'weakness', 'freedom',
  'justice', 'chaos', 'order', 'silence', 'noise', 'anger', 'grief', 'loneliness',
  'happiness', 'sadness', 'emotion', 'feeling', 'spirit', 'soul', 'mind', 'heart',
  'friendship', 'kindness', 'cruelty', 'grace', 'charm', 'mystery', 'magic', 'destiny',
]

const OBJECTS = [
  'book', 'letter', 'word', 'story', 'song', 'music', 'art', 'painting', 'sculpture',
  'sword', 'shield', 'armor', 'bow', 'arrow', 'knife', 'blade', 'gun', 'weapon',
  'door', 'window', 'wall', 'floor', 'ceiling', 'staircase', 'mirror', 'clock',
  'candle', 'lamp', 'lantern', 'torch', 'ring', 'crown', 'necklace', 'key', 'lock',
  'table', 'chair', 'bed', 'throne', 'bench', 'desk', 'chest', 'box', 'bag',
  'food', 'bread', 'wine', 'fruit', 'meat', 'cake', 'soup', 'tea', 'coffee',
  'coin', 'treasure', 'jewel', 'potion', 'spell', 'wand', 'staff', 'scroll',
]

const BODY_MIND = [
  'eye', 'hand', 'voice', 'face', 'smile', 'tear', 'blood', 'breath', 'heartbeat',
]

const EXTRA = [
  // Q
  'quiver', 'quota', 'quicksand',
  // V
  'volcano', 'vision', 'virtue', 'vortex', 'victory', 'valor', 'veil', 'voyage',
  'vapor', 'viper', 'venom', 'vessel', 'vault', 'vow', 'vineyard',
  // Z
  'zone', 'zenith', 'zombie', 'zeal', 'zephyr', 'zigzag', 'zodiac',
  // U
  'universe', 'union', 'unity', 'umbrella', 'underworld', 'urn', 'utopia',
  'uprising', 'underdog', 'uproar',
  // O
  'oak', 'omen', 'oracle', 'outlaw', 'orphan', 'oven', 'offering', 'oasis',
  'obsession', 'obstacle', 'offspring', 'outcast',
  // I
  'iron', 'idol', 'impulse', 'innocence', 'imagination', 'instinct', 'ivory',
  'illusion', 'inferno', 'iris', 'icon', 'ink', 'isle',
  // J
  'joker', 'jade', 'javelin',
  // N
  'noble', 'nomad', 'north', 'nightmare', 'nation', 'nectar', 'nest', 'nun',
  'nymph', 'nave', 'nerve', 'necromancer',
  // Y
  'youth', 'yard', 'yarn', 'year', 'yearning', 'yield', 'yoke',
  // X
  'xylophone', 'xenon',
  // E (thin — only 7)
  'empire', 'echo', 'edge', 'era', 'exile', 'ember', 'essence',
  'elf', 'envy', 'eternity', 'enigma', 'elder',
  // K (thin — only 7)
  'kingdom', 'knowledge', 'karma', 'kite', 'knot', 'kettle', 'kin',
  'keeper', 'kindle',
  // A (thin — only 14)
  'anchor', 'abyss', 'angel', 'ashes', 'aura', 'axe', 'arch', 'altar',
  // G (thin — only 14)
  'grave', 'gate', 'glacier', 'gale', 'gift', 'grove', 'greed', 'guilt',
  'gleam', 'glow', 'grotto', 'gust',
  // R (thin — only 14)
  'rage', 'realm', 'ruin', 'refuge', 'relic', 'reef', 'ritual', 'riddle',
]

const ALL_NOUNS = [
  ...ANIMALS, ...PEOPLE, ...PLACES, ...NATURE, ...ABSTRACT, ...OBJECTS, ...BODY_MIND, ...EXTRA,
]

export const ADJECTIVE_NOUNS: string[] = [
  ...new Set(ALL_NOUNS.map((w) => w.toLowerCase())),
].sort()
