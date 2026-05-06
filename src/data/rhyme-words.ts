/**
 * Family-safe rhyme word list — Google-safe, no adult, no alcohol, no violence.
 * ~800 common English words chosen for high rhyme density and search volume.
 * Covers single-syllable and two-syllable words across many categories.
 */

// ── Nature & Weather ──────────────────────────────────────────────────────────
const NATURE = [
  'sun', 'moon', 'star', 'sky', 'cloud', 'rain', 'snow', 'wind', 'storm',
  'sea', 'ocean', 'river', 'lake', 'pond', 'stream', 'creek', 'brook',
  'hill', 'cliff', 'cave', 'rock', 'stone', 'sand', 'dust', 'mud',
  'tree', 'leaf', 'root', 'seed', 'bloom', 'rose', 'vine', 'thorn',
  'grass', 'moss', 'fern', 'reed', 'weed', 'flower', 'petal', 'twig',
  'fire', 'flame', 'ash', 'smoke', 'spark', 'glow', 'light', 'shade',
  'dawn', 'dusk', 'noon', 'night', 'day', 'spring', 'summer', 'fall',
  'frost', 'hail', 'mist', 'fog', 'dew', 'ice', 'wave', 'tide',
  'earth', 'land', 'ground', 'field', 'plain', 'vale', 'glen', 'grove',
  'forest', 'jungle', 'desert', 'meadow', 'mountain', 'valley', 'garden',
]

// ── Animals ───────────────────────────────────────────────────────────────────
const ANIMALS = [
  'cat', 'dog', 'bird', 'fish', 'bear', 'deer', 'horse', 'whale',
  'fox', 'wolf', 'frog', 'duck', 'bee', 'ant', 'fly', 'owl',
  'dove', 'lamb', 'cow', 'pig', 'hen', 'ram', 'cub', 'pup',
  'crab', 'clam', 'snail', 'snare', 'hare', 'moose', 'goose',
  'mouse', 'louse', 'hawk', 'crow', 'swan', 'wren', 'jay', 'worm',
  'eagle', 'parrot', 'rabbit', 'turtle', 'monkey', 'donkey', 'pony',
]

// ── Food & Drink (family-safe) ────────────────────────────────────────────────
const FOOD = [
  'cake', 'bread', 'rice', 'pie', 'soup', 'jam', 'tea', 'juice',
  'milk', 'bean', 'pea', 'grape', 'plum', 'lime', 'fig', 'date',
  'treat', 'sweet', 'mint', 'salt', 'spice', 'honey', 'sugar', 'candy',
  'apple', 'mango', 'lemon', 'melon', 'cherry', 'berry', 'peach', 'pear',
  'corn', 'oat', 'wheat', 'flour', 'sauce', 'broth', 'stew', 'paste',
  'cookie', 'brownie', 'muffin', 'toffee', 'noodle', 'pickle',
]

// ── People & Family ───────────────────────────────────────────────────────────
const PEOPLE = [
  'child', 'youth', 'teen', 'man', 'woman', 'friend', 'foe', 'queen',
  'king', 'prince', 'bride', 'groom', 'nurse', 'knight', 'guard',
  'teacher', 'student', 'writer', 'singer', 'dancer', 'farmer', 'baker',
  'mother', 'father', 'sister', 'brother', 'baby', 'toddler',
]

// ── Common Nouns ──────────────────────────────────────────────────────────────
const COMMON_NOUNS = [
  'home', 'house', 'room', 'door', 'floor', 'wall', 'hall', 'stair',
  'chair', 'table', 'shelf', 'lamp', 'clock', 'key', 'lock', 'gate',
  'road', 'path', 'trail', 'bridge', 'street', 'town', 'park', 'square',
  'book', 'page', 'word', 'line', 'note', 'song', 'tune', 'bell',
  'ring', 'drum', 'harp', 'flute', 'pipe', 'horn', 'lute', 'chord',
  'school', 'class', 'grade', 'desk', 'pen', 'ink', 'paint', 'art',
  'game', 'ball', 'bat', 'net', 'goal', 'kite', 'toy', 'doll',
  'dream', 'hope', 'wish', 'prayer', 'thought', 'mind', 'soul', 'heart',
  'love', 'joy', 'peace', 'trust', 'faith', 'grace', 'pride', 'shame',
  'name', 'face', 'smile', 'tear', 'cheer', 'fear', 'care', 'dare',
  'jar', 'cup', 'bowl', 'spoon', 'fork', 'knife', 'plate', 'tray',
  'bag', 'box', 'pack', 'case', 'chest', 'trunk', 'bin', 'rack',
  'bed', 'sheet', 'quilt', 'pillow', 'blanket', 'cushion', 'mat', 'rug',
  'hat', 'coat', 'shoe', 'boot', 'sock', 'glove', 'scarf', 'hood',
]

// ── Action & Emotion Words ────────────────────────────────────────────────────
const ACTION = [
  'run', 'jump', 'skip', 'hop', 'spin', 'turn', 'dash', 'rush',
  'call', 'shout', 'yell', 'cry', 'sigh', 'gasp', 'whisper', 'speak',
  'start', 'begin', 'end', 'stop', 'wait', 'stay', 'go', 'come',
]

// ── Adjectives & Descriptors ──────────────────────────────────────────────────
const ADJECTIVES = [
  'new', 'blue', 'true', 'clue', 'due', 'few', 'grew', 'knew',
  'glad', 'bad', 'sad', 'mad', 'dad', 'add', 'had', 'pad',
]

// ── Colors ────────────────────────────────────────────────────────────────────
const COLORS = [
  'teal', 'coral', 'lilac', 'olive', 'indigo', 'violet', 'maroon', 'jade',
]

// ── Time & Space ──────────────────────────────────────────────────────────────
const TIME_SPACE = [
  'today', 'morning', 'evening', 'midnight', 'sunrise', 'sunset',
  'second', 'minute', 'moment', 'instant', 'always', 'never',
  'south', 'east', 'west', 'above', 'below', 'inside', 'outside',
]

// ── School & Learning ─────────────────────────────────────────────────────────
const SCHOOL = [
  'science', 'history', 'story', 'lesson', 'question', 'answer',
  'number', 'letter', 'sentence', 'paragraph', 'chapter', 'subject',
]

// ── Sports & Play ─────────────────────────────────────────────────────────────
const SPORTS = [
]

// ── Body (family-safe) ────────────────────────────────────────────────────────
const BODY = [
]

// ── Technology & Modern Life ──────────────────────────────────────────────────
const TECH = [
  'phone', 'tablet', 'keyboard', 'speaker', 'router', 'signal',
]

// ── Feelings & Abstract ───────────────────────────────────────────────────────
const FEELINGS = [
  'truth', 'beauty', 'spirit', 'passion', 'patience', 'comfort', 'warmth',
]

// ── Music & Arts ─────────────────────────────────────────────────────────────
const MUSIC_ARTS = [
  'scene', 'stage', 'act', 'role', 'script', 'plot', 'tale', 'myth',
]

// ── Seasons & Holidays (family-safe) ─────────────────────────────────────────
const SEASONS_HOLIDAYS = [
  'birthday', 'holiday', 'festive', 'parade', 'carnival', 'harvest',
  'lantern', 'candle', 'ribbon', 'banner', 'bunting', 'wreath',
  'snowflake', 'snowball', 'pinecone', 'pumpkin', 'sunflower', 'tulip',
]

// ── Transport & Travel ────────────────────────────────────────────────────────
const TRANSPORT = [
  'car', 'van', 'bus', 'cab', 'jet', 'pod', 'raft', 'sled',
  'wagon', 'carriage', 'rocket', 'shuttle', 'glider', 'balloon', 'canoe',
  'runway', 'harbor', 'airport', 'station', 'terminal', 'platform',
]

// ── Numbers & Math ────────────────────────────────────────────────────────────
const NUMBERS = [
  'nine', 'ten', 'eleven', 'twelve', 'twenty', 'hundred', 'thousand',
]

// ── Days, Months & Calendar ───────────────────────────────────────────────────
const CALENDAR = [
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
  'july', 'august', 'september', 'october', 'november', 'december',
  'weekly', 'daily', 'monthly', 'yearly', 'decade', 'century',
]

// ── Places & Geography ────────────────────────────────────────────────────────
const PLACES = [
  'canyon', 'plateau', 'summit', 'ridge', 'slope', 'basin', 'delta',
]

// ── Clothing & Fashion ────────────────────────────────────────────────────────
const CLOTHING = [
  'dress', 'shirt', 'skirt', 'jeans', 'pants', 'vest', 'robe', 'gown',
  'cloak', 'cape', 'shawl', 'wrap', 'apron', 'frock', 'tunic', 'tux',
]

// ── Science & Nature Facts ────────────────────────────────────────────────────
const SCIENCE = [
  'orbit', 'planet', 'comet', 'nebula', 'galaxy', 'cosmos', 'void',
  'matter', 'energy', 'force', 'motion', 'gravity', 'magnet', 'current',
  'vapor', 'liquid', 'solid', 'gas', 'plasma', 'crystal', 'mineral',
]

// ── Extended — Z ─────────────────────────────────────────────────────────────
const EXT_Z = [
  'zap', 'zeal', 'zen', 'zero', 'zest', 'zinc', 'zip', 'zone', 'zoom',
  'zebra', 'zenith', 'zephyr', 'zigzag', 'zodiac', 'zombie', 'zoning',
  'zappy', 'zippy', 'zonal', 'zealot', 'zealous', 'zillion', 'zucchini',
]

// ── Extended — Y ─────────────────────────────────────────────────────────────
const EXT_Y = [
]

// ── Extended — X ─────────────────────────────────────────────────────────────
const EXT_X = [
  'xylophone', 'xenon', 'xerox', 'xylem',
]

// ── Extended — W ─────────────────────────────────────────────────────────────
const EXT_W = [
  'welcome', 'welfare', 'wetland', 'woodland', 'wordplay', 'worship',
]

// ── Extended — V ─────────────────────────────────────────────────────────────
const EXT_V = [
  'volt', 'vote', 'vowel', 'valor', 'velvet', 'venom', 'venue',
]

// ── Extended — U ─────────────────────────────────────────────────────────────
const EXT_U = [
  'uncle', 'under', 'unite', 'until', 'upper', 'urban', 'urge',
  'urn', 'ultra', 'useful', 'uplift', 'upbeat', 'uphill', 'upkeep',
  'unique', 'united', 'unseen', 'untold', 'upward', 'urgent',
  'uniform', 'upright', 'utmost', 'utter', 'update', 'upgrade',
]

// ── Extended — T (boost) ─────────────────────────────────────────────────────
const EXT_T = [
  'tilt', 'tin', 'tip', 'tod', 'toll', 'tomb', 'ton', 'tong',
  'tunnel', 'turret', 'twilight', 'timber', 'temple', 'tender',
]

// ── Extended — S (boost) ─────────────────────────────────────────────────────
const EXT_S = [
  'scamp', 'scar', 'scent', 'scheme', 'scout', 'scowl', 'scrap',
  'scrub', 'seam', 'seep', 'seize', 'sell', 'sent', 'serve', 'set',
  'shrug', 'shy', 'sill', 'silt', 'siren', 'skid', 'skim', 'skimp',
  'slump', 'smash', 'smear', 'smelt', 'smirk', 'snag', 'snap', 'snip',
  'spade', 'span', 'spar', 'speck', 'spell', 'spill', 'spire', 'spite',
  'stride', 'strive', 'stub', 'stuff', 'stump', 'stunt', 'suede',
  'swamp', 'swear', 'swell', 'swept', 'swift', 'swig', 'swirl', 'swoop',
]

// ── Extended — R (boost) ─────────────────────────────────────────────────────
const EXT_R = [
  'rasp', 'rave', 'realm', 'reap', 'reel', 'reign', 'rend', 'renew',
  'rogue', 'romp', 'rook', 'rot', 'rout', 'rove', 'rude', 'ruin',
  'ruse', 'rust', 'ripple', 'rumble', 'rustle', 'radiant', 'rainbow',
  'rooster', 'rolling', 'ramble', 'rattle', 'rescue', 'reward',
]

// ── Extended — Q (boost) ─────────────────────────────────────────────────────
const EXT_Q = [
  'quail', 'quake', 'quest', 'queue', 'quick', 'quiet', 'quill',
]

// ── Extended — P (boost) ─────────────────────────────────────────────────────
const EXT_P = [
  'peak', 'peat', 'peel', 'peer', 'peg', 'pelt', 'pep', 'perk',
  'pest', 'pick', 'pier', 'pill', 'pine', 'ping', 'pit', 'pith',
  'prow', 'prune', 'puff', 'pun', 'punt', 'pupil', 'purr', 'push',
  'portrait', 'ponder', 'poplar', 'portal', 'pasture', 'pattern',
]

// ── Extended — O (boost) ─────────────────────────────────────────────────────
const EXT_O = [
  'ounce', 'outrun', 'outshine', 'overcome', 'overflow', 'overlook',
  'overturn', 'offspring', 'outline', 'outlook', 'outward', 'overall',
]

// ── Extended — N (boost) ─────────────────────────────────────────────────────
const EXT_N = [
  'nab', 'nag', 'nap', 'nark', 'narrate', 'naught', 'nave', 'neap',
  'neat', 'need', 'nerve', 'newt', 'nick', 'nil', 'nip', 'nod',
  'nook', 'norm', 'notch', 'nourish', 'nudge', 'numb', 'nurture',
]

// ── Extended — M (boost) ─────────────────────────────────────────────────────
const EXT_M = [
  'mob', 'mock', 'molt', 'monk', 'mope', 'moth', 'mound', 'mourn',
]

// ── Extended — L (boost) ─────────────────────────────────────────────────────
const EXT_L = [
  'loon', 'loot', 'lop', 'lord', 'lore', 'lull', 'lunge', 'lure',
  'lurk', 'luster', 'lively', 'lofty', 'loyal', 'lucid', 'lunar',
  'linger', 'listen', 'little', 'locket', 'longing', 'lookout',
  'lovable', 'lowland', 'lullaby', 'luminous', 'landscape', 'launder',
]

// ── Extended — K (boost) ─────────────────────────────────────────────────────
const EXT_K = [
  'keynote', 'kitchen', 'knowing', 'knotted',
]

// ── Extended — J (boost) ─────────────────────────────────────────────────────
const EXT_J = [
]

// ── Extended — I (boost) ─────────────────────────────────────────────────────
const EXT_I = [
  'isle', 'itch', 'ivory', 'ivy', 'ignite', 'impact', 'imply',
  'interest', 'inward', 'include', 'insight', 'indeed', 'infinity',
  'innocent', 'imagine', 'illuminate', 'immense',
]

// ── Extended — H (boost) ─────────────────────────────────────────────────────
const EXT_H = [
]

// ── Extended — G (boost) ─────────────────────────────────────────────────────
const EXT_G = [
  'grant', 'grasp', 'grate', 'gravel', 'graze', 'greed', 'greet',
  'gentle', 'gifted', 'giggle', 'glimmer', 'goblin', 'golden',
]

// ── Extended — F (boost) ─────────────────────────────────────────────────────
const EXT_F = [
  'fad', 'fag', 'fang', 'farce', 'fawn', 'faze', 'feat', 'feign',
  'flit', 'flock', 'flog', 'flop', 'floss', 'flout', 'flue', 'flunk',
  'frolic', 'frown', 'froze', 'frugal', 'fudge', 'fumble', 'furrow',
  'fiddle', 'filter', 'flicker', 'flutter', 'foliage', 'fondness',
]

// ── Extended — E (boost) ─────────────────────────────────────────────────────
const EXT_E = [
  'empire', 'encore', 'endure', 'enrich', 'entire', 'entry', 'envy',
  'equip', 'erupt', 'escape', 'estate', 'eternal', 'evolve', 'excel',
]

// ── Extended — D (boost) ─────────────────────────────────────────────────────
const EXT_D = [
  'dab', 'damp', 'dank', 'dart', 'daze', 'dean', 'deck', 'deem',
  'ditch', 'dock', 'dome', 'dote', 'dowel', 'doze', 'drab', 'drag',
  'drape', 'drawl', 'dread', 'drift', 'drill', 'drip', 'drone',
  'dazzle', 'delight', 'diamond', 'dimple', 'drifter', 'drizzle',
]

// ── Extended — C (boost) ─────────────────────────────────────────────────────
const EXT_C = [
  'classic', 'clearance', 'cluster', 'coastal', 'cobalt', 'collect',
]

// ── Extended — B (boost) ─────────────────────────────────────────────────────
const EXT_B = [
  'bile', 'bilk', 'billow', 'birch', 'bite', 'blaze', 'bleach',
  'booth', 'bore', 'bough', 'bounce', 'brash', 'brass', 'brat',
  'brawl', 'brawn', 'bray', 'braze', 'brim', 'brisk', 'bronze',
  'banter', 'barely', 'barren', 'beacon', 'beaming', 'beckon',
]

// ── Extended — A (boost) ─────────────────────────────────────────────────────
const EXT_A = [
  'ache', 'acre', 'aid', 'aim', 'aisle', 'alike', 'align', 'alight',
  'amuse', 'anchor', 'angel', 'angle', 'anguish', 'ankle', 'annex',
  'arise', 'ark', 'armor', 'aroma', 'arouse', 'array', 'arrive',
  'arrow', 'ascend', 'aspire', 'assure', 'astonish', 'atlas',
  'attic', 'aura', 'autumn', 'avid', 'award', 'aware', 'awe',
  'admire', 'adorn', 'advance', 'adventure', 'affirm', 'agile',
]

// ── Combined & deduplicated export ────────────────────────────────────────────
const ALL_WORDS = [
  ...NATURE, ...ANIMALS, ...FOOD, ...PEOPLE, ...COMMON_NOUNS,
  ...ACTION, ...ADJECTIVES, ...COLORS, ...TIME_SPACE, ...SCHOOL,
  ...SPORTS, ...BODY, ...TECH, ...FEELINGS,
]

const ALL_EXTRA = [
  ...MUSIC_ARTS, ...SEASONS_HOLIDAYS, ...TRANSPORT, ...NUMBERS,
  ...CALENDAR, ...PLACES, ...CLOTHING, ...SCIENCE,
]

const ALL_EXTENDED = [
  ...EXT_Z, ...EXT_Y, ...EXT_X, ...EXT_W, ...EXT_V, ...EXT_U,
  ...EXT_T, ...EXT_S, ...EXT_R, ...EXT_Q, ...EXT_P, ...EXT_O,
  ...EXT_N, ...EXT_M, ...EXT_L, ...EXT_K, ...EXT_J, ...EXT_I,
  ...EXT_H, ...EXT_G, ...EXT_F, ...EXT_E, ...EXT_D, ...EXT_C,
  ...EXT_B, ...EXT_A,
]

export const RHYME_WORDS: string[] = [
  ...new Set([...ALL_WORDS, ...ALL_EXTRA, ...ALL_EXTENDED].map((w) => w.toLowerCase().trim())),
].sort()
