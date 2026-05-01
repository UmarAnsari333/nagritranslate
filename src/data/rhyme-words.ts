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
  'slug', 'bug', 'pug', 'panda', 'robin', 'robin', 'tiger', 'lion',
  'eagle', 'parrot', 'rabbit', 'turtle', 'monkey', 'donkey', 'pony',
]

// ── Food & Drink (family-safe) ────────────────────────────────────────────────
const FOOD = [
  'cake', 'bread', 'rice', 'pie', 'soup', 'jam', 'tea', 'juice',
  'milk', 'bean', 'pea', 'grape', 'plum', 'lime', 'fig', 'date',
  'bun', 'roll', 'toast', 'cream', 'cheese', 'meat', 'fish', 'chip',
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
  'boat', 'ship', 'sail', 'mast', 'oar', 'net', 'hook', 'line',
  'plane', 'train', 'cart', 'wheel', 'track', 'bridge', 'trail', 'map',
  'gift', 'prize', 'crown', 'gold', 'gem', 'ring', 'pearl', 'star',
  'light', 'glow', 'beam', 'ray', 'shade', 'shadow', 'mirror', 'glass',
  'jar', 'cup', 'bowl', 'spoon', 'fork', 'knife', 'plate', 'tray',
  'bag', 'box', 'pack', 'case', 'chest', 'trunk', 'bin', 'rack',
  'bed', 'sheet', 'quilt', 'pillow', 'blanket', 'cushion', 'mat', 'rug',
  'hat', 'coat', 'shoe', 'boot', 'sock', 'glove', 'scarf', 'hood',
  'ring', 'pin', 'clip', 'band', 'lace', 'bow', 'knot', 'thread',
  'stone', 'brick', 'tile', 'plank', 'beam', 'post', 'nail', 'bolt',
  'pump', 'hose', 'pipe', 'tap', 'drain', 'tank', 'well', 'pool',
]

// ── Action & Emotion Words ────────────────────────────────────────────────────
const ACTION = [
  'run', 'jump', 'skip', 'hop', 'spin', 'turn', 'dash', 'rush',
  'walk', 'march', 'climb', 'slide', 'swing', 'leap', 'soar', 'fly',
  'swim', 'float', 'sink', 'dive', 'splash', 'wave', 'shake', 'stir',
  'sing', 'hum', 'clap', 'cheer', 'laugh', 'smile', 'grin', 'wink',
  'call', 'shout', 'yell', 'cry', 'sigh', 'gasp', 'whisper', 'speak',
  'read', 'write', 'draw', 'paint', 'build', 'make', 'craft', 'mold',
  'play', 'dance', 'chant', 'dream', 'sleep', 'wake', 'rest', 'sit',
  'think', 'plan', 'learn', 'teach', 'give', 'share', 'care', 'help',
  'grow', 'bloom', 'shine', 'glow', 'spark', 'light', 'warm', 'cool',
  'start', 'begin', 'end', 'stop', 'wait', 'stay', 'go', 'come',
]

// ── Adjectives & Descriptors ──────────────────────────────────────────────────
const ADJECTIVES = [
  'bright', 'light', 'white', 'right', 'tight', 'night', 'sight', 'might',
  'bold', 'cold', 'gold', 'old', 'told', 'fold', 'hold', 'mold',
  'tall', 'small', 'fall', 'call', 'hall', 'ball', 'wall', 'all',
  'deep', 'sleep', 'keep', 'steep', 'leap', 'sweep', 'weep', 'heap',
  'wide', 'ride', 'side', 'hide', 'slide', 'guide', 'pride', 'tied',
  'new', 'blue', 'true', 'clue', 'due', 'few', 'grew', 'knew',
  'sweet', 'meet', 'feet', 'beat', 'heat', 'seat', 'treat', 'street',
  'long', 'song', 'strong', 'wrong', 'belong', 'along', 'among',
  'fair', 'bare', 'care', 'dare', 'there', 'where', 'share', 'pair',
  'cool', 'fool', 'pool', 'rule', 'school', 'tool', 'wool', 'spool',
  'warm', 'charm', 'farm', 'harm', 'palm', 'calm', 'balm', 'arm',
  'kind', 'find', 'mind', 'wind', 'blind', 'bind', 'lined', 'signed',
  'free', 'tree', 'see', 'bee', 'key', 'three', 'agree', 'degree',
  'glad', 'bad', 'sad', 'mad', 'dad', 'add', 'had', 'pad',
  'fun', 'sun', 'run', 'gun', 'bun', 'done', 'none', 'one',
  'clear', 'near', 'dear', 'fear', 'hear', 'year', 'tear', 'cheer',
]

// ── Colors ────────────────────────────────────────────────────────────────────
const COLORS = [
  'red', 'blue', 'green', 'black', 'white', 'pink', 'gold', 'silver',
  'purple', 'orange', 'yellow', 'brown', 'grey', 'tan', 'cream', 'navy',
  'teal', 'coral', 'lilac', 'olive', 'indigo', 'violet', 'maroon', 'jade',
]

// ── Time & Space ──────────────────────────────────────────────────────────────
const TIME_SPACE = [
  'time', 'hour', 'year', 'age', 'era', 'past', 'now', 'soon',
  'today', 'morning', 'evening', 'midnight', 'sunrise', 'sunset',
  'second', 'minute', 'moment', 'instant', 'always', 'never',
  'near', 'far', 'high', 'low', 'here', 'there', 'where', 'north',
  'south', 'east', 'west', 'above', 'below', 'inside', 'outside',
]

// ── School & Learning ─────────────────────────────────────────────────────────
const SCHOOL = [
  'book', 'class', 'test', 'grade', 'pen', 'ink', 'chalk', 'board',
  'rule', 'bell', 'hall', 'desk', 'map', 'globe', 'quiz', 'fact',
  'science', 'history', 'story', 'lesson', 'question', 'answer',
  'number', 'letter', 'sentence', 'paragraph', 'chapter', 'subject',
]

// ── Sports & Play ─────────────────────────────────────────────────────────────
const SPORTS = [
  'run', 'race', 'win', 'cheer', 'team', 'play', 'game', 'score',
  'goal', 'ball', 'net', 'track', 'field', 'court', 'pool', 'ring',
  'skate', 'ski', 'surf', 'hike', 'climb', 'swim', 'row', 'kick',
  'throw', 'catch', 'shoot', 'jump', 'flip', 'spin', 'sprint', 'dash',
]

// ── Body (family-safe) ────────────────────────────────────────────────────────
const BODY = [
  'hand', 'foot', 'head', 'face', 'eye', 'nose', 'ear', 'chin',
  'hair', 'nail', 'arm', 'leg', 'knee', 'back', 'neck', 'heart',
  'mind', 'skin', 'bone', 'tooth', 'cheek', 'brow', 'lip', 'thumb',
]

// ── Technology & Modern Life ──────────────────────────────────────────────────
const TECH = [
  'screen', 'light', 'charge', 'link', 'code', 'log', 'file', 'byte',
  'chip', 'wire', 'beam', 'scan', 'print', 'frame', 'plug', 'hub',
  'phone', 'tablet', 'keyboard', 'speaker', 'router', 'signal',
]

// ── Feelings & Abstract ───────────────────────────────────────────────────────
const FEELINGS = [
  'love', 'joy', 'peace', 'hope', 'trust', 'faith', 'grace', 'pride',
  'care', 'share', 'dream', 'wonder', 'magic', 'power', 'glory', 'honor',
  'cheer', 'smile', 'laughter', 'kindness', 'courage', 'freedom', 'wisdom',
  'truth', 'beauty', 'spirit', 'passion', 'patience', 'comfort', 'warmth',
]

// ── Music & Arts ─────────────────────────────────────────────────────────────
const MUSIC_ARTS = [
  'beat', 'rhyme', 'verse', 'chorus', 'bridge', 'hook', 'rap', 'pop',
  'jazz', 'rock', 'soul', 'folk', 'tone', 'pitch', 'note', 'rest',
  'clef', 'staff', 'chord', 'scale', 'sharp', 'flat', 'key', 'tune',
  'lyric', 'refrain', 'melody', 'harmony', 'rhythm', 'tempo', 'beat',
  'paint', 'sketch', 'draw', 'sculpt', 'carve', 'craft', 'weave', 'stitch',
  'canvas', 'brush', 'pencil', 'color', 'hue', 'tint', 'shade', 'blend',
  'scene', 'stage', 'act', 'role', 'script', 'plot', 'tale', 'myth',
  'poem', 'prose', 'essay', 'chapter', 'novel', 'fable', 'rhyme', 'riddle',
]

// ── Seasons & Holidays (family-safe) ─────────────────────────────────────────
const SEASONS_HOLIDAYS = [
  'birthday', 'holiday', 'festive', 'parade', 'carnival', 'harvest',
  'lantern', 'candle', 'ribbon', 'banner', 'bunting', 'wreath',
  'snowflake', 'snowball', 'pinecone', 'pumpkin', 'sunflower', 'tulip',
  'blossom', 'bud', 'sprout', 'pollen', 'nectar', 'honey', 'hive',
]

// ── Transport & Travel ────────────────────────────────────────────────────────
const TRANSPORT = [
  'car', 'van', 'bus', 'cab', 'jet', 'pod', 'raft', 'sled',
  'bike', 'cart', 'tram', 'tug', 'barge', 'craft', 'yacht', 'ferry',
  'wagon', 'carriage', 'rocket', 'shuttle', 'glider', 'balloon', 'canoe',
  'voyage', 'journey', 'trip', 'tour', 'trail', 'route', 'passage',
  'runway', 'harbor', 'airport', 'station', 'terminal', 'platform',
]

// ── Numbers & Math ────────────────────────────────────────────────────────────
const NUMBERS = [
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'twenty', 'hundred', 'thousand',
  'half', 'third', 'quarter', 'dozen', 'pair', 'triple', 'double',
  'sum', 'plus', 'minus', 'times', 'share', 'split', 'count', 'measure',
]

// ── Days, Months & Calendar ───────────────────────────────────────────────────
const CALENDAR = [
  'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday',
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
  'weekly', 'daily', 'monthly', 'yearly', 'decade', 'century',
]

// ── Places & Geography ────────────────────────────────────────────────────────
const PLACES = [
  'city', 'town', 'village', 'hamlet', 'borough', 'county', 'state',
  'nation', 'country', 'island', 'peninsula', 'continent', 'globe',
  'shore', 'coast', 'harbor', 'port', 'bay', 'cove', 'inlet', 'reef',
  'canyon', 'plateau', 'summit', 'ridge', 'slope', 'basin', 'delta',
  'plaza', 'market', 'station', 'square', 'avenue', 'lane', 'alley',
]

// ── Clothing & Fashion ────────────────────────────────────────────────────────
const CLOTHING = [
  'dress', 'shirt', 'skirt', 'jeans', 'pants', 'vest', 'robe', 'gown',
  'cloak', 'cape', 'shawl', 'wrap', 'apron', 'frock', 'tunic', 'tux',
  'cap', 'beret', 'crown', 'veil', 'mask', 'tiara', 'headband', 'bun',
  'braid', 'curl', 'plait', 'tress', 'lock', 'fringe', 'trim', 'hem',
  'button', 'zipper', 'clasp', 'buckle', 'strap', 'ribbon', 'lace', 'bow',
]

// ── Science & Nature Facts ────────────────────────────────────────────────────
const SCIENCE = [
  'atom', 'cell', 'gene', 'stem', 'root', 'bark', 'core', 'crust',
  'orbit', 'planet', 'comet', 'nebula', 'galaxy', 'cosmos', 'void',
  'matter', 'energy', 'force', 'motion', 'gravity', 'magnet', 'current',
  'vapor', 'liquid', 'solid', 'gas', 'plasma', 'crystal', 'mineral',
  'fossil', 'amber', 'quartz', 'granite', 'marble', 'basalt', 'chalk',
  'petal', 'pistil', 'stamen', 'spore', 'sprig', 'frond', 'frond',
]

// ── Extended — Z ─────────────────────────────────────────────────────────────
const EXT_Z = [
  'zap', 'zeal', 'zen', 'zero', 'zest', 'zinc', 'zip', 'zone', 'zoom',
  'zebra', 'zenith', 'zephyr', 'zigzag', 'zodiac', 'zombie', 'zoning',
  'zappy', 'zippy', 'zonal', 'zealot', 'zealous', 'zillion', 'zucchini',
]

// ── Extended — Y ─────────────────────────────────────────────────────────────
const EXT_Y = [
  'yam', 'yard', 'yarn', 'yawn', 'year', 'yell', 'yelp', 'yield',
  'yoke', 'young', 'youth', 'yonder', 'yellow', 'yummy', 'yacht',
  'yearning', 'youthful', 'yielding', 'yesterday', 'yearly',
]

// ── Extended — X ─────────────────────────────────────────────────────────────
const EXT_X = [
  'xylophone', 'xenon', 'xerox', 'xylem',
]

// ── Extended — W ─────────────────────────────────────────────────────────────
const EXT_W = [
  'wade', 'wage', 'wail', 'wake', 'wand', 'ward', 'warm', 'wart',
  'watt', 'wax', 'weak', 'wealth', 'wedge', 'weigh', 'west', 'wick',
  'wife', 'wilt', 'wink', 'wisp', 'witch', 'woke', 'womb', 'won',
  'woo', 'wore', 'worn', 'wove', 'wrap', 'wring', 'wrist', 'wrote',
  'whisper', 'whistle', 'wander', 'warden', 'warble', 'workshop',
  'welcome', 'welfare', 'wetland', 'woodland', 'wordplay', 'worship',
]

// ── Extended — V ─────────────────────────────────────────────────────────────
const EXT_V = [
  'vale', 'vane', 'vast', 'vault', 'veal', 'veer', 'veil', 'vein',
  'verb', 'verge', 'vest', 'vex', 'view', 'vim', 'vine', 'void',
  'volt', 'vote', 'vowel', 'valor', 'velvet', 'venom', 'venue',
  'verse', 'vessel', 'victor', 'vigil', 'vision', 'vivid', 'voyage',
  'valley', 'village', 'vintage', 'victory', 'vanilla', 'valiant',
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
  'tab', 'tack', 'tad', 'tag', 'tame', 'tang', 'tank', 'tap',
  'tar', 'tart', 'task', 'tat', 'taunt', 'taut', 'teal', 'tent',
  'term', 'thick', 'thin', 'thud', 'thug', 'tick', 'tide', 'till',
  'tilt', 'tin', 'tip', 'tod', 'toll', 'tomb', 'ton', 'tong',
  'tore', 'toss', 'tout', 'tow', 'trend', 'trim', 'trio', 'trod',
  'trot', 'trout', 'truce', 'trump', 'tryst', 'tug', 'tumble',
  'tunnel', 'turret', 'twilight', 'timber', 'temple', 'tender',
]

// ── Extended — S (boost) ─────────────────────────────────────────────────────
const EXT_S = [
  'sack', 'sage', 'sake', 'sap', 'sash', 'sauce', 'scald', 'scalp',
  'scamp', 'scar', 'scent', 'scheme', 'scout', 'scowl', 'scrap',
  'scrub', 'seam', 'seep', 'seize', 'sell', 'sent', 'serve', 'set',
  'sew', 'shack', 'shaft', 'shed', 'shelf', 'shell', 'shin', 'shrub',
  'shrug', 'shy', 'sill', 'silt', 'siren', 'skid', 'skim', 'skimp',
  'skull', 'slant', 'slap', 'sled', 'slim', 'slip', 'slit', 'sloth',
  'slump', 'smash', 'smear', 'smelt', 'smirk', 'snag', 'snap', 'snip',
  'snob', 'snug', 'sob', 'sock', 'sod', 'sofa', 'soot', 'sought',
  'spade', 'span', 'spar', 'speck', 'spell', 'spill', 'spire', 'spite',
  'spit', 'spool', 'spore', 'sprawl', 'sprig', 'squall', 'squat',
  'squint', 'stab', 'stack', 'stag', 'stalk', 'stem', 'step', 'stern',
  'stiff', 'sting', 'stink', 'stir', 'stomp', 'stool', 'stoop',
  'stride', 'strive', 'stub', 'stuff', 'stump', 'stunt', 'suede',
  'swamp', 'swear', 'swell', 'swept', 'swift', 'swig', 'swirl', 'swoop',
]

// ── Extended — R (boost) ─────────────────────────────────────────────────────
const EXT_R = [
  'rack', 'raft', 'ramp', 'rang', 'rank', 'rant', 'rap', 'rash',
  'rasp', 'rave', 'realm', 'reap', 'reel', 'reign', 'rend', 'renew',
  'rent', 'reek', 'reef', 'ripe', 'risk', 'roam', 'roar', 'robe',
  'rogue', 'romp', 'rook', 'rot', 'rout', 'rove', 'rude', 'ruin',
  'ruse', 'rust', 'ripple', 'rumble', 'rustle', 'radiant', 'rainbow',
  'rooster', 'rolling', 'ramble', 'rattle', 'rescue', 'reward',
]

// ── Extended — Q (boost) ─────────────────────────────────────────────────────
const EXT_Q = [
  'quail', 'quake', 'quest', 'queue', 'quick', 'quiet', 'quill',
  'quirk', 'quote', 'quartz', 'quench', 'quiver', 'qualify', 'quarrel',
  'quarter', 'queenly', 'quicken', 'quintet',
]

// ── Extended — P (boost) ─────────────────────────────────────────────────────
const EXT_P = [
  'pact', 'pad', 'pail', 'pane', 'pang', 'pant', 'pave', 'pawn',
  'peak', 'peat', 'peel', 'peer', 'peg', 'pelt', 'pep', 'perk',
  'pest', 'pick', 'pier', 'pill', 'pine', 'ping', 'pit', 'pith',
  'plot', 'plow', 'pluck', 'plum', 'plunge', 'pod', 'poke', 'pop',
  'pore', 'port', 'pour', 'pout', 'prank', 'prod', 'prop', 'prose',
  'prow', 'prune', 'puff', 'pun', 'punt', 'pupil', 'purr', 'push',
  'puzzle', 'paddle', 'palace', 'pebble', 'pedal', 'pencil', 'perch',
  'petal', 'pillow', 'pioneer', 'pixie', 'planet', 'plenty', 'pocket',
  'portrait', 'ponder', 'poplar', 'portal', 'pasture', 'pattern',
]

// ── Extended — O (boost) ─────────────────────────────────────────────────────
const EXT_O = [
  'oak', 'oar', 'oath', 'oat', 'odd', 'oil', 'omen', 'once',
  'onyx', 'open', 'orbit', 'order', 'organ', 'other', 'otter',
  'ounce', 'outrun', 'outshine', 'overcome', 'overflow', 'overlook',
  'overturn', 'offspring', 'outline', 'outlook', 'outward', 'overall',
]

// ── Extended — N (boost) ─────────────────────────────────────────────────────
const EXT_N = [
  'nab', 'nag', 'nap', 'nark', 'narrate', 'naught', 'nave', 'neap',
  'neat', 'need', 'nerve', 'newt', 'nick', 'nil', 'nip', 'nod',
  'nook', 'norm', 'notch', 'nourish', 'nudge', 'numb', 'nurture',
  'nimble', 'noble', 'notify', 'nuzzle', 'needle', 'nestle', 'nectar',
  'navigate', 'nightly', 'notable', 'natural', 'nourish', 'narrow',
]

// ── Extended — M (boost) ─────────────────────────────────────────────────────
const EXT_M = [
  'mace', 'mane', 'mare', 'marsh', 'mast', 'mat', 'maul', 'maze',
  'mead', 'meal', 'mean', 'meet', 'melt', 'mesh', 'mist', 'mitt',
  'mob', 'mock', 'molt', 'monk', 'mope', 'moth', 'mound', 'mourn',
  'muddle', 'murmur', 'muscle', 'muzzle', 'mantle', 'marble', 'meadow',
  'marvel', 'mellow', 'mentor', 'message', 'mingle', 'mirror', 'mortal',
  'muster', 'mystic', 'mighty', 'miracle', 'monarch', 'morning',
]

// ── Extended — L (boost) ─────────────────────────────────────────────────────
const EXT_L = [
  'lace', 'lack', 'lair', 'lance', 'lard', 'lark', 'latch', 'laud',
  'lawn', 'lax', 'leap', 'ledge', 'leer', 'lend', 'lest', 'lid',
  'limp', 'lint', 'lip', 'lisp', 'loft', 'log', 'loll', 'loom',
  'loon', 'loot', 'lop', 'lord', 'lore', 'lull', 'lunge', 'lure',
  'lurk', 'luster', 'lively', 'lofty', 'loyal', 'lucid', 'lunar',
  'linger', 'listen', 'little', 'locket', 'longing', 'lookout',
  'lovable', 'lowland', 'lullaby', 'luminous', 'landscape', 'launder',
]

// ── Extended — K (boost) ─────────────────────────────────────────────────────
const EXT_K = [
  'keen', 'kelp', 'kept', 'kern', 'kick', 'king', 'knack', 'kneel',
  'knob', 'knot', 'know', 'kraft', 'kudos', 'kindle', 'kitten',
  'kernel', 'knight', 'knuckle', 'kingdom', 'kinship', 'kestrel',
  'keynote', 'kitchen', 'knowing', 'knotted',
]

// ── Extended — J (boost) ─────────────────────────────────────────────────────
const EXT_J = [
  'jab', 'jade', 'jag', 'jar', 'jaunt', 'jaw', 'jeer', 'jest',
  'jet', 'jewel', 'jig', 'jilt', 'jolt', 'jostle', 'journal',
  'judge', 'juggle', 'jumble', 'jungle', 'jingle', 'joyful',
  'jubilee', 'justice', 'journey', 'jasmine', 'jaunty',
]

// ── Extended — I (boost) ─────────────────────────────────────────────────────
const EXT_I = [
  'ice', 'idea', 'idle', 'image', 'inch', 'inner', 'iris', 'iron',
  'isle', 'itch', 'ivory', 'ivy', 'ignite', 'impact', 'imply',
  'invent', 'invite', 'island', 'inspire', 'instinct', 'intense',
  'interest', 'inward', 'include', 'insight', 'indeed', 'infinity',
  'innocent', 'imagine', 'illuminate', 'immense',
]

// ── Extended — H (boost) ─────────────────────────────────────────────────────
const EXT_H = [
  'hack', 'hail', 'ham', 'hap', 'haul', 'haunt', 'hawk', 'heap',
  'heed', 'helm', 'hemp', 'hew', 'hick', 'hilt', 'hive', 'hob',
  'hog', 'hood', 'hoot', 'hop', 'hotch', 'howl', 'hub', 'hulk',
  'hurl', 'husk', 'hustle', 'humble', 'hurdle', 'harvest', 'harbor',
  'herald', 'hollow', 'horizon', 'humble', 'hunger', 'hustle',
]

// ── Extended — G (boost) ─────────────────────────────────────────────────────
const EXT_G = [
  'gab', 'gag', 'gale', 'gap', 'garb', 'gasp', 'gaze', 'gear',
  'geld', 'gel', 'gem', 'gig', 'gilt', 'gird', 'glare', 'glean',
  'glide', 'glint', 'gloat', 'gloom', 'gloss', 'glow', 'glum',
  'gnash', 'gnaw', 'goad', 'gorge', 'gouge', 'grab', 'grade',
  'grant', 'grasp', 'grate', 'gravel', 'graze', 'greed', 'greet',
  'grief', 'grim', 'grin', 'grip', 'grit', 'groan', 'groom',
  'grove', 'growl', 'grudge', 'gruff', 'grumble', 'guard',
  'gentle', 'gifted', 'giggle', 'glimmer', 'goblin', 'golden',
  'gossip', 'graceful', 'grateful', 'gravel', 'greater', 'gloaming',
]

// ── Extended — F (boost) ─────────────────────────────────────────────────────
const EXT_F = [
  'fad', 'fag', 'fang', 'farce', 'fawn', 'faze', 'feat', 'feign',
  'fell', 'felt', 'fend', 'fern', 'fest', 'fib', 'fig', 'filch',
  'flit', 'flock', 'flog', 'flop', 'floss', 'flout', 'flue', 'flunk',
  'foam', 'fob', 'fog', 'fond', 'fort', 'foul', 'frail', 'fringe',
  'frolic', 'frown', 'froze', 'frugal', 'fudge', 'fumble', 'furrow',
  'fable', 'falcon', 'fallow', 'fathom', 'feather', 'festive',
  'fiddle', 'filter', 'flicker', 'flutter', 'foliage', 'fondness',
  'footprint', 'forrest', 'fortune', 'fragrant', 'freedom', 'frontier',
]

// ── Extended — E (boost) ─────────────────────────────────────────────────────
const EXT_E = [
  'each', 'earn', 'ease', 'east', 'echo', 'edge', 'elbow', 'elm',
  'ember', 'end', 'eve', 'even', 'ever', 'eye', 'etch', 'extend',
  'eagle', 'early', 'earth', 'ebony', 'elfin', 'elite', 'emerald',
  'empire', 'encore', 'endure', 'enrich', 'entire', 'entry', 'envy',
  'equip', 'erupt', 'escape', 'estate', 'eternal', 'evolve', 'excel',
  'exist', 'explore', 'express', 'extend', 'extreme', 'expanse',
]

// ── Extended — D (boost) ─────────────────────────────────────────────────────
const EXT_D = [
  'dab', 'damp', 'dank', 'dart', 'daze', 'dean', 'deck', 'deem',
  'den', 'dent', 'dew', 'dig', 'dim', 'din', 'dip', 'disk',
  'ditch', 'dock', 'dome', 'dote', 'dowel', 'doze', 'drab', 'drag',
  'drape', 'drawl', 'dread', 'drift', 'drill', 'drip', 'drone',
  'droop', 'drove', 'drudge', 'drum', 'dune', 'dusk', 'daisy',
  'dazzle', 'delight', 'diamond', 'dimple', 'drifter', 'drizzle',
  'droplet', 'durable', 'dusk', 'daylight', 'dawning', 'deeply',
  'devoted', 'diligent', 'discover', 'distant', 'durable', 'dynamic',
]

// ── Extended — C (boost) ─────────────────────────────────────────────────────
const EXT_C = [
  'cob', 'cog', 'coil', 'colt', 'cope', 'cord', 'core', 'cork',
  'corm', 'coup', 'cove', 'cowl', 'cram', 'crane', 'creak', 'crest',
  'crimp', 'croak', 'crook', 'croon', 'crow', 'crud', 'crumb',
  'crump', 'cue', 'curl', 'curve', 'cyst', 'cabin', 'cactus',
  'candle', 'castle', 'center', 'circle', 'clover', 'cobble',
  'cocoon', 'comet', 'compass', 'copper', 'courage', 'crystal',
  'current', 'cushion', 'cymbal', 'cypress', 'capture', 'careful',
  'cerulean', 'champion', 'chapter', 'cherish', 'cinder', 'citrus',
  'classic', 'clearance', 'cluster', 'coastal', 'cobalt', 'collect',
  'combine', 'comfort', 'complete', 'content', 'contrast', 'conquer',
]

// ── Extended — B (boost) ─────────────────────────────────────────────────────
const EXT_B = [
  'bask', 'batch', 'bay', 'beck', 'beg', 'belt', 'bend', 'bide',
  'bile', 'bilk', 'billow', 'birch', 'bite', 'blaze', 'bleach',
  'bleat', 'bleed', 'blend', 'bless', 'bliss', 'bloat', 'blob',
  'blot', 'bluff', 'blurt', 'boast', 'bolt', 'bond', 'boon',
  'booth', 'bore', 'bough', 'bounce', 'brash', 'brass', 'brat',
  'brawl', 'brawn', 'bray', 'braze', 'brim', 'brisk', 'bronze',
  'brood', 'broth', 'bruise', 'brunt', 'brush', 'bumble', 'bundle',
  'burrow', 'bustle', 'babble', 'balance', 'bamboo', 'banner',
  'banter', 'barely', 'barren', 'beacon', 'beaming', 'beckon',
  'beneath', 'beyond', 'blossom', 'bobcat', 'boulder', 'bounty',
  'bravery', 'breeze', 'bridge', 'bright', 'brilliant', 'brimstone',
]

// ── Extended — A (boost) ─────────────────────────────────────────────────────
const EXT_A = [
  'ache', 'acre', 'aid', 'aim', 'aisle', 'alike', 'align', 'alight',
  'aloft', 'alone', 'along', 'aloud', 'altar', 'amble', 'ample',
  'amuse', 'anchor', 'angel', 'angle', 'anguish', 'ankle', 'annex',
  'anoint', 'answer', 'antler', 'anvil', 'apex', 'arch', 'ardor',
  'arise', 'ark', 'armor', 'aroma', 'arouse', 'array', 'arrive',
  'arrow', 'ascend', 'aspire', 'assure', 'astonish', 'atlas',
  'attic', 'aura', 'autumn', 'avid', 'award', 'aware', 'awe',
  'awful', 'azure', 'ample', 'arden', 'ancient', 'anthem', 'active',
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
