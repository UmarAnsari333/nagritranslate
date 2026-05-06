// Topics curated for "words related to [topic]" searches

const NATURE = [
  'ocean', 'forest', 'mountain', 'fire', 'storm', 'rain', 'snow', 'wind',
  'desert', 'river', 'jungle', 'island', 'cave', 'volcano', 'glacier',
  'earthquake', 'tornado', 'thunder', 'lightning', 'flood', 'drought',
  'tide', 'reef', 'swamp', 'meadow', 'cliff', 'waterfall', 'valley',
  'aurora', 'fog', 'mist', 'frost', 'hail', 'avalanche', 'wildfire',
]

const SPACE = [
  'space', 'star', 'moon', 'sun', 'planet', 'galaxy', 'comet', 'asteroid',
  'nebula', 'blackhole', 'universe', 'cosmos', 'orbit', 'gravity', 'meteor',
  'satellite', 'telescope', 'astronaut', 'rocket', 'supernova',
]

const EMOTIONS = [
  'love', 'hate', 'fear', 'joy', 'peace', 'anger', 'hope', 'sadness',
  'loneliness', 'courage', 'anxiety', 'happiness', 'grief', 'pride',
  'shame', 'envy', 'jealousy', 'regret', 'nostalgia', 'wonder',
  'gratitude', 'guilt', 'trust', 'betrayal', 'desire', 'passion',
  'sorrow', 'rage', 'ecstasy', 'melancholy', 'euphoria', 'despair',
]

const TIME = [
  'winter', 'summer', 'autumn', 'spring', 'morning', 'night', 'time',
  'memory', 'dream', 'future', 'past', 'eternity', 'death', 'life',
  'youth', 'childhood', 'old age', 'midnight', 'dawn', 'dusk', 'twilight',
]

const PEOPLE_SOCIETY = [
  'war', 'family', 'friendship', 'freedom', 'justice', 'power', 'wealth',
  'poverty', 'education', 'religion', 'culture', 'history', 'politics',
  'society', 'community', 'identity', 'tradition', 'revolution', 'crime',
]

const CONCEPTS = [
  'magic', 'mystery', 'darkness', 'light', 'chaos', 'order', 'truth',
  'beauty', 'wisdom', 'evil', 'fate', 'destiny', 'luck', 'karma',
  'paradise', 'hell', 'heaven', 'spirit', 'soul', 'mind', 'consciousness',
]

const ANIMALS = [
  'wolf', 'lion', 'eagle', 'dragon', 'horse', 'bear', 'snake', 'owl',
  'raven', 'fox', 'tiger', 'deer', 'whale', 'shark', 'bee', 'spider',
  'dog', 'cat', 'bird', 'fish', 'butterfly', 'crow', 'phoenix',
]

const PLACES = [
  'city', 'village', 'home', 'school', 'prison', 'hospital', 'market',
  'church', 'castle', 'farm', 'battlefield', 'garden', 'library',
  'tavern', 'harbor', 'dungeon', 'wilderness', 'ruins', 'temple',
  'palace', 'tower', 'graveyard', 'lighthouse', 'crossroads',
]

const ACTIVITIES = [
  'music', 'art', 'dance', 'poetry', 'writing', 'travel', 'cooking',
  'sailing', 'mining', 'trading', 'painting', 'singing', 'building',
  'fighting', 'healing', 'teaching', 'learning', 'praying',
]

const OBJECTS = [
  'sword', 'crown', 'book', 'blood', 'gold', 'silver', 'stone', 'water',
  'coin', 'shield', 'arrow', 'poison', 'potion', 'scroll', 'throne',
  'clock', 'compass', 'lantern', 'bridge', 'door', 'window', 'well',
]

const SCIENCE_TECH = [
  'chemistry', 'physics', 'biology', 'evolution', 'climate', 'energy',
  'electricity', 'nuclear', 'genetics', 'brain', 'computer', 'data',
  'virus', 'bacteria', 'atom', 'quantum', 'radiation',
]

const FOOD_DRINK = [
  'food', 'bread', 'wine', 'coffee', 'tea', 'beer', 'honey', 'salt',
]

const MYTHOLOGICAL = [
  'god', 'goddess', 'demon', 'angel', 'witch', 'wizard', 'knight',
  'king', 'queen', 'hero', 'villain', 'monster', 'ghost', 'vampire',
  'mythology', 'legend', 'prophecy', 'curse', 'blessing',
]

const ALL_TOPICS = [
  ...NATURE, ...SPACE, ...EMOTIONS, ...TIME, ...PEOPLE_SOCIETY,
  ...CONCEPTS, ...ANIMALS, ...PLACES, ...ACTIVITIES, ...OBJECTS,
  ...SCIENCE_TECH, ...FOOD_DRINK, ...MYTHOLOGICAL,
]

export const TOPIC_WORDS: string[] = [
  ...new Set(ALL_TOPICS.map((w) => w.toLowerCase())),
].sort()
