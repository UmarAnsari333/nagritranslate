// Top words for /bigram-explorer/[word] static generation and sitemap
export const BIGRAM_WORDS = [
  // Common adjectives
  'dark', 'bright', 'cold', 'hot', 'free', 'high', 'low', 'long', 'short',
  'hard', 'soft', 'deep', 'new', 'old', 'good', 'bad', 'fast', 'slow',
  'young', 'big', 'small', 'great', 'light', 'strong', 'weak', 'heavy',
  'fresh', 'real', 'true', 'false', 'open', 'close', 'clean', 'clear',
  'early', 'late', 'full', 'empty', 'rich', 'poor', 'safe', 'wild',
  'warm', 'cool', 'sweet', 'sharp', 'smooth', 'rough', 'quiet', 'loud',
  'happy', 'sad', 'angry', 'kind', 'brave', 'smart', 'simple', 'busy',
  'ready', 'sure', 'dead', 'alive', 'alone', 'lost', 'broken', 'golden',
  'black', 'white', 'red', 'blue', 'green', 'silver',

  // Common nouns
  'time', 'day', 'night', 'life', 'world', 'home', 'work', 'school',
  'water', 'fire', 'love', 'war', 'money', 'power', 'city', 'road',
  'hand', 'eye', 'mind', 'heart', 'book', 'word', 'name', 'place',
  'air', 'light', 'sun', 'moon', 'door', 'window', 'room', 'wall',
  'floor', 'ground', 'sky', 'sea', 'land', 'river', 'stone', 'tree',
  'blood', 'body', 'face', 'voice', 'man', 'woman', 'child', 'family',
  'friend', 'enemy', 'king', 'god', 'death', 'dream', 'truth', 'hope',
  'fear', 'pain', 'joy', 'peace', 'war', 'game', 'road', 'path',
  'coffee', 'food', 'rain', 'wind', 'snow', 'storm', 'cloud', 'flower',

  // Common verbs
  'run', 'walk', 'go', 'come', 'take', 'give', 'make', 'get', 'put',
  'set', 'keep', 'let', 'try', 'ask', 'know', 'see', 'think', 'feel',
  'look', 'want', 'call', 'move', 'turn', 'bring', 'use', 'play',
  'live', 'learn', 'hold', 'need', 'help', 'build', 'stand', 'fall',
  'grow', 'start', 'stop', 'lead', 'push', 'pull', 'break', 'cut',
  'read', 'write', 'speak', 'fight', 'carry', 'eat', 'drink', 'sleep',
  'rise', 'fall', 'leave', 'stay', 'find', 'lose', 'win', 'fail',
  'show', 'hide', 'save', 'spend', 'reach', 'pass', 'catch', 'throw',
]

// Deduplicate in case any words appear twice
const seen = new Set<string>()
export const BIGRAM_WORDS_UNIQUE = BIGRAM_WORDS.filter(w => {
  if (seen.has(w)) return false
  seen.add(w)
  return true
})
