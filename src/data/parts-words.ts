// Words with rich part-whole relationships — curated for "parts of [word]" searches

const HUMAN_BODY = [
  'body', 'head', 'face', 'brain', 'skull', 'spine', 'skeleton', 'torso',
  'chest', 'shoulder', 'arm', 'elbow', 'wrist', 'hand', 'finger', 'thumb',
  'leg', 'knee', 'ankle', 'foot', 'toe', 'heel', 'hip', 'back', 'neck',
  'eye', 'ear', 'nose', 'mouth', 'jaw', 'cheek', 'chin', 'forehead', 'temple',
  'lip', 'tongue', 'tooth', 'throat', 'lung', 'heart', 'stomach', 'liver',
  'kidney', 'muscle', 'bone', 'skin', 'hair', 'nail', 'vein', 'artery',
]

const VEHICLES = [
  'car', 'truck', 'bus', 'train', 'airplane', 'ship', 'boat', 'bicycle',
  'motorcycle', 'helicopter', 'submarine', 'rocket', 'tractor', 'crane',
  'tank', 'ambulance', 'fire truck', 'van', 'carriage', 'wagon',
  'engine', 'wheel', 'tire', 'axle', 'brake', 'steering wheel', 'dashboard',
]

const BUILDINGS = [
  'palace', 'hospital', 'school', 'library', 'stadium', 'theater', 'museum',
  'bridge', 'tower', 'lighthouse', 'barn', 'warehouse', 'garage', 'cabin',
  'apartment', 'skyscraper', 'prison', 'fortress', 'inn', 'hotel',
  'roof', 'wall', 'floor', 'ceiling', 'door', 'window', 'staircase', 'chimney',
  'basement', 'attic', 'balcony', 'hallway', 'corridor', 'lobby', 'arch',
]

const ROOMS = [
  'kitchen', 'bedroom', 'bathroom', 'living room', 'dining room', 'office',
]

const NATURE_LANDSCAPE = [
  'tree', 'flower', 'plant', 'grass', 'leaf', 'branch', 'root', 'stem', 'petal',
  'seed', 'bark', 'trunk', 'bud', 'thorn', 'vine', 'fern', 'mushroom',
  'forest', 'mountain', 'volcano', 'glacier', 'river', 'ocean', 'lake', 'cave',
  'valley', 'island', 'cliff', 'desert', 'swamp', 'waterfall', 'reef', 'beach',
  'atmosphere', 'soil', 'rock', 'crystal', 'wave', 'cloud', 'storm',
]

const ANIMALS_ANATOMY = [
  'bird', 'fish', 'insect', 'spider', 'snake', 'whale', 'horse', 'bee',
  'butterfly', 'crab', 'lobster', 'shrimp', 'shell', 'wing', 'fin', 'tail',
  'claw', 'beak', 'feather', 'scale', 'antler', 'horn', 'hoof', 'paw',
]

const TECHNOLOGY = [
  'computer', 'laptop', 'phone', 'smartphone', 'tablet', 'camera', 'television',
  'radio', 'clock', 'watch', 'keyboard', 'mouse', 'printer', 'scanner',
  'microphone', 'speaker', 'battery', 'circuit', 'antenna', 'screen', 'lens',
  'robot', 'drone', 'telescope', 'microscope',
]

const MUSIC = [
  'guitar', 'piano', 'violin', 'drum', 'trumpet', 'flute', 'saxophone',
  'cello', 'harp', 'organ', 'clarinet', 'trombone', 'banjo', 'sitar',
  'orchestra', 'band', 'song', 'symphony', 'opera', 'choir',
]

const FOOD_ANATOMY = [
  'apple', 'orange', 'banana', 'grape', 'strawberry', 'tomato', 'pumpkin',
  'bread', 'cake', 'pizza', 'burger', 'sandwich', 'egg', 'nut', 'corn',
]

const WEAPONS_MILITARY = [
  'sword', 'bow', 'arrow', 'gun', 'rifle', 'cannon', 'bomb', 'missile',
]

const CLOTHING = [
  'shirt', 'dress', 'coat', 'jacket', 'shoe', 'boot', 'hat', 'glove',
  'helmet', 'mask', 'crown', 'ring', 'necklace', 'bracelet', 'earring',
]

const SOCIAL_POLITICAL = [
  'story', 'poem', 'novel', 'film', 'album', 'game',
]

const SCIENCE_CONCEPTS = [
  'atom', 'molecule', 'cell', 'dna', 'chromosome', 'nucleus', 'electron',
  'solar system', 'galaxy', 'star', 'planet', 'moon', 'comet', 'nebula',
  'ecosystem', 'food chain', 'water cycle', 'carbon cycle',
]

const FURNITURE_HOME = [
  'table', 'chair', 'bed', 'sofa', 'desk', 'shelf', 'cabinet', 'drawer',
  'refrigerator', 'sink', 'bathtub', 'toilet', 'shower',
]

const SPORTS = [
  'football', 'basketball', 'tennis', 'baseball', 'cricket', 'golf',
]

const ALL_WORDS = [
  ...HUMAN_BODY, ...VEHICLES, ...BUILDINGS, ...ROOMS, ...NATURE_LANDSCAPE,
  ...ANIMALS_ANATOMY, ...TECHNOLOGY, ...MUSIC, ...FOOD_ANATOMY,
  ...WEAPONS_MILITARY, ...CLOTHING, ...SOCIAL_POLITICAL, ...SCIENCE_CONCEPTS,
  ...FURNITURE_HOME, ...SPORTS,
]

export const PARTS_WORDS: string[] = [
  ...new Set(ALL_WORDS.map((w) => w.toLowerCase())),
].sort()
