'use client'

import { useState, useMemo } from 'react'
import { Copy, RefreshCw } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'

// ─── Emoji word map ───────────────────────────────────────────────────────────

const EMOJI_MAP: Record<string, string> = {

  // ── Greetings & farewells ──────────────────────────────────────────────────
  hello: '👋', hi: '👋', hey: '👋', greet: '👋', howdy: '👋',
  bye: '👋', goodbye: '👋', farewell: '👋', later: '👋', ciao: '👋',
  welcome: '🤗', thanks: '🙏', thank: '🙏', please: '🙏', sorry: '😔',
  congrats: '🎉', congratulation: '🎉', cheers: '🥂', bravo: '👏', clap: '👏',

  // ── Emotions & feelings ────────────────────────────────────────────────────
  happy: '😊', happiness: '😊', joy: '😂', joyful: '😂',
  love: '❤️', loving: '❤️',
  sad: '😢', sadness: '😢', cry: '😭',
  angry: '😠', anger: '😠', rage: '😡', furious: '😡', mad: '😡',
  fear: '😨', scared: '😨', afraid: '😨', terror: '😱', horror: '😱',
  worried: '😟', worry: '😟', anxious: '😟', nervous: '😬',
  surprise: '😲', shocked: '😲', astonished: '😲',
  excited: '🤩', excitement: '🤩', thrilled: '🤩', enthusiastic: '🤩',
  bored: '😑', boring: '😑', dull: '😑',
  tired: '😴', exhausted: '😴', sleepy: '😴',
  laugh: '😂', smile: '😊', grin: '😁',
  fun: '🎉', funny: '😂', hilarious: '😂', humor: '😂',
  cool: '😎', awesome: '🤩', amazing: '🤩', incredible: '🤩',
  great: '👍', good: '👍', bad: '👎', terrible: '😱', awful: '😱',
  perfect: '✨', excellent: '🌟', fantastic: '🎉', wonderful: '🌟',
  sick: '🤒', ill: '🤒', pain: '😣', hurt: '🤕',
  confused: '😕', puzzled: '😕', lost: '😕',
  think: '🤔', curious: '🤔', wonder: '🤔', doubt: '🤔',
  crazy: '🤪', insane: '🤪', bizarre: '🤪', wacky: '🤪',
  shy: '😊', embarrassed: '😳', awkward: '😳',
  proud: '😤', arrogant: '😤',
  disgusted: '🤢', gross: '🤢', yuck: '🤮',
  calm: '😌', relaxed: '😌', peaceful: '☮️', content: '😌',
  lonely: '😔', alone: '😔', isolated: '😔',
  jealous: '😒', envious: '😒',
  grateful: '🙏', thankful: '🙏', blessed: '🙏',
  hopeful: '🌈', optimistic: '🌈',
  depressed: '😞', hopeless: '😞', miserable: '😞',
  nostalgic: '💭', sentimental: '💭',
  romantic: '💕', passionate: '🔥', affectionate: '💞',

  // ── People & relationships ─────────────────────────────────────────────────
  person: '👤', people: '👥', human: '👤',
  man: '👨', woman: '👩', boy: '👦', girl: '👧',
  baby: '👶', child: '🧒', teenager: '🧑', adult: '🧑', elder: '👴',
  family: '👨‍👩‍👧‍👦', parent: '👨‍👩‍👧', mom: '👩', mother: '👩', dad: '👨', father: '👨',
  brother: '👦', sister: '👧', grandma: '👵', grandpa: '👴', grandparent: '👴',
  friend: '👫', couple: '💑', husband: '👨', wife: '👩',
  wedding: '💒', marriage: '💍', kiss: '💋', hug: '🤗', date: '💑',
  king: '🤴', queen: '👸', prince: '🤴', princess: '👸',
  boss: '👔', leader: '👑', master: '🎓', servant: '🧹',
  soldier: '💂', warrior: '⚔️', hero: '🦸', villain: '🦹',
  doctor: '👨‍⚕️', nurse: '👩‍⚕️', teacher: '👨‍🏫', student: '🎓', chef: '👨‍🍳',
  artist: '🎨', musician: '🎵', scientist: '🔬', engineer: '⚙️', pilot: '✈️',
  police: '👮', firefighter: '🧑‍🚒', judge: '⚖️', lawyer: '⚖️',
  neighbor: '🏘️', stranger: '👤', guard: '💂', spy: '🕵️', detective: '🕵️',
  angel: '😇', devil: '😈', ghost: '👻', zombie: '🧟', vampire: '🧛',

  // ── Body parts ─────────────────────────────────────────────────────────────
  eye: '👁️', eyes: '👀', look: '👀', sight: '👀', vision: '👁️', blind: '👁️',
  ear: '👂', ears: '👂', hear: '👂', listen: '👂', deaf: '👂',
  nose: '👃', smell: '👃', sniff: '👃',
  mouth: '👄', lip: '👄', lips: '👄', tongue: '👅', taste: '👅',
  tooth: '🦷', teeth: '🦷', smile: '😁',
  hand: '✋', hands: '👐', finger: '☝️', fist: '✊', handwave: '👋', point: '👆',
  arm: '💪', elbow: '💪', shoulder: '🦴', wrist: '⌚',
  leg: '🦵', knee: '🦵', foot: '🦶', feet: '🦶', toe: '🦶',
  head: '🗣️', face: '😀', cheek: '😊', chin: '😤', forehead: '🤦',
  hair: '💇', beard: '🧔', mustache: '👨',
  heart: '❤️', lung: '🫁', brain: '🧠', bone: '🦴', muscle: '💪',
  blood: '🩸', tear: '💧', sweat: '💧', skin: '🫲', body: '🧍',
  neck: '🦒', back: '🔙', chest: '🫀', belly: '🤰', stomach: '🤢',
  thumb: '👍', nail: '💅', palm: '🖐️', spine: '🦴',

  // ── Clothing & accessories ─────────────────────────────────────────────────
  shirt: '👕', tshirt: '👕', top: '👕', blouse: '👚',
  pants: '👖', jeans: '👖', shorts: '🩳', skirt: '👗', dress: '👗',
  suit: '👔', tie: '👔', jacket: '🧥', coat: '🧥', hoodie: '🧥',
  shoes: '👟', boot: '👢', heel: '👠', sneaker: '👟', sandal: '👡',
  hat: '🎩', cap: '🧢', crown: '👑', helmet: '⛑️',
  glasses: '👓', sunglasses: '🕶️', watch: '⌚', ring: '💍', necklace: '📿',
  earring: '💎', bracelet: '📿', bag: '👜', purse: '👛', backpack: '🎒',
  glove: '🧤', scarf: '🧣', sock: '🧦', underwear: '🩲', swimsuit: '🩱',
  uniform: '👔', costume: '🎭', mask: '🎭', cape: '🦸', armor: '🛡️',
  wallet: '👛', umbrella: '☂️', belt: '👔',

  // ── Space & universe ───────────────────────────────────────────────────────
  space: '🌌', universe: '🌌', galaxy: '🌌', cosmos: '🌌',
  planet: '🪐', earth: '🌍', mars: '🔴', saturn: '🪐', jupiter: '🪐',
  sun: '☀️', moon: '🌙', star: '⭐', comet: '☄️', meteor: '☄️', asteroid: '☄️',
  rocket: '🚀', shuttle: '🚀', astronaut: '👨‍🚀', satellite: '🛰️', telescope: '🔭',
  orbit: '🔄', gravity: '⬇️', black: '⚫', nebula: '🌌', constellation: '⭐',
  alien: '👽', ufo: '🛸', extraterrestrial: '👽', wormhole: '🕳️',
  supernova: '💥', eclipse: '🌑', atmosphere: '🌍', sky: '🌤️',

  // ── Nature & weather ───────────────────────────────────────────────────────
  rain: '🌧️', snow: '❄️', wind: '💨', storm: '⛈️',
  thunder: '⚡', lightning: '⚡', rainbow: '🌈', fog: '🌫️', ice: '🧊', hail: '🌨️',
  frost: '❄️', dew: '💧', mist: '🌫️', humid: '💧', drought: '☀️', flood: '🌊',
  fire: '🔥', water: '💧', cloud: '☁️',
  ocean: '🌊', sea: '🌊', beach: '🏖️', wave: '🌊',
  mountain: '⛰️', hill: '⛰️', forest: '🌲', jungle: '🌴', tree: '🌳',
  flower: '🌸', rose: '🌹', leaf: '🍃', plant: '🌱', grass: '🌿', bush: '🌿',
  nature: '🌿', world: '🌍', river: '🏞️', lake: '🏞️', waterfall: '🌊',
  sand: '🏜️', sandy: '🏜️', desert: '🏜️', dust: '💨', dirt: '🌱', soil: '🌱',
  land: '🌍', ground: '🌱', island: '🏝️', pond: '🐸',
  cave: '🕳️', rock: '🪨', stone: '🪨', cliff: '⛰️', valley: '🏔️', swamp: '🐊',
  sunrise: '🌅', sunset: '🌇', dawn: '🌅', dusk: '🌆', horizon: '🌅',
  earthquake: '💥', volcano: '🌋', tornado: '🌪️', tsunami: '🌊', avalanche: '⛰️',
  tropical: '🌴', arctic: '🧊', tundra: '❄️',

  // ── Seasons ────────────────────────────────────────────────────────────────
  spring: '🌸', summer: '☀️', autumn: '🍂', fall: '🍂', winter: '❄️',
  seasonal: '📅', bloom: '🌸', blossom: '🌸', harvest: '🌾', freeze: '🧊',

  // ── Directions ────────────────────────────────────────────────────────────
  north: '⬆️', south: '⬇️', east: '➡️', west: '⬅️',
  up: '⬆️', down: '⬇️', left: '⬅️', right: '➡️',
  ahead: '⬆️', backward: '⬇️', inward: '🔄', outward: '🔄',
  above: '⬆️', below: '⬇️', inside: '📦', outside: '🚪',
  near: '📍', far: '🔭', between: '↔️', around: '🔄', through: '🚪',
  toward: '➡️', away: '↩️',

  // ── Farming & agriculture ──────────────────────────────────────────────────
  farm: '🚜', farmer: '👨‍🌾', farming: '🚜',
  crop: '🌾', wheat: '🌾', corn: '🌽', rice: '🌾', grain: '🌾',
  seed: '🌱', fertile: '🌱', field: '🌾', meadow: '🌿',
  barn: '🏚️', tractor: '🚜', plow: '🚜', agriculture: '🌾',
  orchard: '🍎', garden: '🌷', greenhouse: '🌱', plantation: '🌿',
  famine: '😔', irrigation: '💧', scarecrow: '🎃',
  milk: '🥛', egg: '🥚', honey: '🍯', butter: '🧈', cheese: '🧀',

  // ── Animals ───────────────────────────────────────────────────────────────
  dog: '🐶', cat: '🐱', bird: '🐦', fish: '🐟', rabbit: '🐰', bear: '🐻',
  lion: '🦁', tiger: '🐯', monkey: '🐵', elephant: '🐘', horse: '🐴', cow: '🐄',
  pig: '🐷', hen: '🐔', rooster: '🐓', duck: '🦆', penguin: '🐧', snake: '🐍', frog: '🐸',
  wolf: '🐺', fox: '🦊', panda: '🐼', koala: '🐨', deer: '🦌', unicorn: '🦄',
  dragon: '🐉', dinosaur: '🦕', shark: '🦈', whale: '🐳', dolphin: '🐬',
  butterfly: '🦋', bee: '🐝', spider: '🕷️', bug: '🐛', ant: '🐜', turtle: '🐢',
  crocodile: '🐊', gorilla: '🦍', eagle: '🦅', owl: '🦉', bat: '🦇', mouse: '🐭',
  rat: '🐀', sheep: '🐑', goat: '🐐', camel: '🐪', giraffe: '🦒', zebra: '🦓',
  rhino: '🦏', hippo: '🦛', parrot: '🦜', flamingo: '🦩', peacock: '🦚',
  crab: '🦀', lobster: '🦞', shrimp: '🦐', squid: '🦑', octopus: '🐙',
  worm: '🪱', beetle: '🐞', snail: '🐌', hedgehog: '🦔', raccoon: '🦝',
  otter: '🦦', seal: '🦭', moose: '🫎', bison: '🦬', llama: '🦙',
  parrot: '🦜', crow: '🐦', hawk: '🦅', dove: '🕊️', swan: '🦢', heron: '🦢',
  pet: '🐾', animal: '🐾', wild: '🌿', prey: '🦁', predator: '🐺',

  // ── Food & drink ──────────────────────────────────────────────────────────
  food: '🍽️', eat: '🍽️', hungry: '🍽️', appetite: '🍽️',
  pizza: '🍕', burger: '🍔', sandwich: '🥪', taco: '🌮', sushi: '🍣',
  ramen: '🍜', pasta: '🍝', bread: '🍞', cake: '🎂', cookie: '🍪',
  'ice cream': '🍦', chocolate: '🍫', candy: '🍬', sweet: '🍬',
  apple: '🍎', banana: '🍌', orange: '🍊', grape: '🍇', strawberry: '🍓',
  watermelon: '🍉', cherry: '🍒', lemon: '🍋', mango: '🥭', pineapple: '🍍',
  avocado: '🥑', salad: '🥗', soup: '🍲', steak: '🥩', chicken: '🍗',
  coffee: '☕', tea: '🍵', juice: '🧃', beer: '🍺', wine: '🍷',
  champagne: '🍾', drink: '🥤', cook: '👨‍🍳', cooking: '👨‍🍳',
  breakfast: '🥞', lunch: '🥙', dinner: '🍽️', restaurant: '🍽️', bar: '🍺',
  feast: '🍽️', meal: '🍽️', snack: '🍿', delicious: '😋', yummy: '😋',
  sour: '🍋', spicy: '🌶️', bitter: '😖', salty: '🧂', tasty: '😋',
  vegetable: '🥦', carrot: '🥕', potato: '🥔', tomato: '🍅', onion: '🧅',
  mushroom: '🍄', broccoli: '🥦', pepper: '🌶️', garlic: '🧄',
  fruit: '🍎', nut: '🥜', peanut: '🥜', almond: '🌰', walnut: '🌰',
  butter: '🧈', cheese: '🧀', yogurt: '🥛', cream: '🥛', sugar: '🍬', salt: '🧂',
  noodle: '🍜', dumpling: '🥟', pie: '🥧', waffle: '🧇',
  pancake: '🥞', popcorn: '🍿', pretzel: '🥨', donut: '🍩', muffin: '🧁', cupcake: '🧁',

  // ── Health & medicine ──────────────────────────────────────────────────────
  health: '💊', healthy: '💚', unhealthy: '🤒', medicine: '💊', pill: '💊',
  drug: '💊', vaccine: '💉', injection: '💉', syringe: '💉',
  hospital: '🏥', clinic: '🏥', pharmacy: '💊', surgery: '🏥', operation: '🏥',
  wound: '🩹', bandage: '🩹', scar: '🩹', bruise: '🤕', bleed: '🩸',
  heal: '💚', cure: '💊', treatment: '💊', therapy: '🧘', recovery: '💚',
  virus: '🦠', bacteria: '🦠', germ: '🦠', infection: '🦠', disease: '🤒',
  fever: '🤒', cold: '🤧', cough: '😷', sneeze: '🤧', flu: '🤒',
  allergy: '🤧', asthma: '😮‍💨', diabetes: '💉', cancer: '🎗️', heart: '❤️',
  mental: '🧠', stress: '😩', burnout: '😩', anxiety: '😟', trauma: '😢',
  diet: '🥗', exercise: '💪', fitness: '🏋️', nutrition: '🥦', calorie: '🍽️',
  vitamin: '💊', supplement: '💊', protein: '💪', fat: '🍖', carb: '🍞',
  weight: '⚖️', obese: '😔', thin: '🦴', muscle: '💪', flexible: '🤸',
  breathe: '😮‍💨', breath: '💨', oxygen: '💨', heartbeat: '❤️', pulse: '❤️',
  dizzy: '😵', faint: '😵', nausea: '🤢', vomit: '🤮', diarrhea: '🚽',
  pregnant: '🤰', birth: '👶', death: '💀', die: '💀', alive: '💚',

  // ── Household items ────────────────────────────────────────────────────────
  home: '🏠', house: '🏠', apartment: '🏢', room: '🚪', door: '🚪', window: '🪟',
  table: '🪑', chair: '🪑', sofa: '🛋️', couch: '🛋️', desk: '🖥️', shelf: '📚',
  bed: '🛏️', pillow: '🛏️', blanket: '🛏️', mattress: '🛏️',
  kitchen: '🍳', bathroom: '🚿', bedroom: '🛏️', living: '🛋️', garage: '🚗',
  wall: '🧱', floor: '🪵', ceiling: '🏠', roof: '🏠', stair: '🪜', ladder: '🪜',
  toilet: '🚽', shower: '🚿', bath: '🛁', sink: '🚿', faucet: '🚿',
  lamp: '💡', light: '💡', fan: '💨', heater: '🔥', cooler: '🧊',
  fridge: '🧊', microwave: '📡', oven: '🍳', stove: '🍳', toaster: '🍞',
  washing: '🧺', laundry: '🧺', mop: '🧹', broom: '🧹', vacuum: '🌀',
  trash: '🗑️', bin: '🗑️', garbage: '🗑️', recycle: '♻️', waste: '🗑️',
  cup: '☕', mug: '☕', plate: '🍽️', bowl: '🥣', spoon: '🥄', fork: '🍴', knife: '🔪',
  pot: '🫕', pan: '🍳', kettle: '☕', jar: '🫙', bottle: '🍶', box: '📦',
  key: '🔑', lock: '🔒', safe: '🔒', alarm: '⏰', curtain: '🪟', rug: '🪵',
  mirror: '🪞', clock: '🕐', frame: '🖼️', plant: '🌱', vase: '🏺',

  // ── Objects & technology ───────────────────────────────────────────────────
  phone: '📱', mobile: '📱', computer: '💻', laptop: '💻', tablet: '📱',
  camera: '📷', tv: '📺', television: '📺', radio: '📻', headphone: '🎧',
  speaker: '🔊', microphone: '🎤', battery: '🔋', charger: '🔌', cable: '🔌',
  keyboard: '⌨️', mouse: '🖱️', screen: '🖥️', monitor: '🖥️', printer: '🖨️',
  book: '📚', pen: '✒️', pencil: '✏️', paper: '📄', notebook: '📓',
  letter: '✉️', email: '📧', message: '💬', chat: '💬', call: '📞', video: '📹',
  internet: '🌐', website: '🌐', app: '📱', software: '💻', program: '💻',
  code: '💻', coding: '💻', data: '📊', database: '🗄️', server: '🖥️',
  network: '🌐', wifi: '📶', bluetooth: '📡', signal: '📡', cloud: '☁️',
  money: '💰', dollar: '💵', coin: '🪙', bank: '🏦', wallet: '👛', credit: '💳',
  gift: '🎁', diamond: '💎', gold: '🏅', silver: '🥈', treasure: '💰',
  trophy: '🏆', medal: '🏅', flag: '🚩', map: '🗺️', compass: '🧭',
  sword: '⚔️', shield: '🛡️', bow: '🏹', arrow: '🏹', gun: '🔫',
  tool: '🔧', hammer: '🔨', wrench: '🔧', screw: '🔩', rope: '🪢', chain: '⛓️',
  bomb: '💣', dynamite: '💥', bullet: '💥', weapon: '⚔️',
  scroll: '📜', document: '📄', file: '🗂️', folder: '📁', archive: '📦',
  search: '🔍', idea: '💡', plan: '📝', note: '📝', list: '📋',
  candle: '🕯️', torch: '🔦', lantern: '🪔', crystal: '💎', potion: '🧪',
  wand: '🪄', crown: '👑', ring: '💍', gem: '💎', jewel: '💎',

  // ── Code & secrets ─────────────────────────────────────────────────────────
  secret: '🤫', hidden: '👁️', invisible: '👻', mystery: '🔍',
  clue: '🔍', hint: '💡', riddle: '❓', puzzle: '🧩', cipher: '🔐',
  encrypt: '🔐', decrypt: '🔓', password: '🔑', secure: '🔒', security: '🔒',
  hack: '💻', cyber: '🔐', digital: '💻', algorithm: '🔢', script: '📜',
  debug: '🐛', error: '❌', encode: '🔐', decode: '🔓',
  undercover: '🕵️', disguise: '🎭', whisper: '🤫', silent: '🤫',
  private: '🔒', confidential: '🔒', anonymous: '🎭',

  // ── Transport & travel ─────────────────────────────────────────────────────
  car: '🚗', truck: '🚚', bus: '🚌', van: '🚐', motorcycle: '🏍️', bicycle: '🚲',
  train: '🚂', subway: '🚇', tram: '🚃', taxi: '🚕', ambulance: '🚑', firetruck: '🚒',
  plane: '✈️', helicopter: '🚁', boat: '⛵', ship: '🚢', submarine: '🤿',
  rocket: '🚀', hot: '🔥', balloon: '🎈',
  road: '🛣️', highway: '🛣️', bridge: '🌉', tunnel: '🚇', street: '🛣️',
  traffic: '🚦', parking: '🅿️', parked: '🅿️', fuel: '⛽', gas: '⛽', tire: '🔧',
  travel: '✈️', journey: '🗺️', trip: '✈️', tour: '🗺️', cruise: '🚢',
  vacation: '🏖️', holiday: '🏖️', camp: '🏕️', explore: '🗺️', adventure: '🗺️',
  destination: '📍', departure: '✈️', arrival: '🏁', airport: '✈️', station: '🚉',
  ticket: '🎟️', passport: '📔', visa: '📄', luggage: '🧳', suitcase: '🧳',

  // ── Activities & sports ────────────────────────────────────────────────────
  play: '🎮', game: '🎮', sport: '⚽',
  football: '🏈', soccer: '⚽', basketball: '🏀', baseball: '⚾', tennis: '🎾',
  golf: '⛳', swim: '🏊', run: '🏃', walk: '🚶', cycle: '🚴', bike: '🚴',
  hike: '🥾', gym: '🏋️', workout: '💪', yoga: '🧘', meditate: '🧘',
  dance: '💃', sing: '🎤', guitar: '🎸', piano: '🎹', drum: '🥁',
  read: '📖', write: '✍️', draw: '🎨', paint: '🎨', photograph: '📷',
  race: '🏎️', climb: '🧗', surf: '🏄', ski: '⛷️', skate: '⛸️',
  hunt: '🏹', fishing: '🎣', boxing: '🥊', boxer: '🥊', wrestle: '🤼', compete: '🏆',
  training: '🏋️', practice: '📚', perform: '🎭', act: '🎭', cheer: '📣',
  win: '🏆', champion: '🏆', record: '📈',
  party: '🎉', celebrate: '🎉', birthday: '🎂', christmas: '🎄', halloween: '🎃',
  concert: '🎵', show: '🎭', festival: '🎊', carnival: '🎡', circus: '🎪',
  movie: '🎬', film: '🎬', theater: '🎭', museum: '🏛️', gallery: '🖼️',
  shopping: '🛍️', gaming: '🎮', hobby: '🎨',

  // ── Social media & internet ────────────────────────────────────────────────
  post: '📤', share: '🔗', like: '👍', dislike: '👎', comment: '💬',
  follow: '👣', unfollow: '❌', subscribe: '🔔', notification: '🔔',
  upload: '📤', download: '📥', stream: '📺', livestream: '🔴', streaming: '📺',
  viral: '🔥', trend: '📈', hashtag: '🏷️', tag: '🏷️', mention: '📣',
  photo: '📷', selfie: '🤳', video: '📹', story: '📖', reel: '🎞️',
  profile: '👤', account: '🔑', login: '🔑', logout: '🚪', password: '🔑',
  website: '🌐', link: '🔗', url: '🔗', blog: '📝', vlog: '📹',
  chat: '💬', dm: '💬', inbox: '📥', reply: '↩️', forward: '➡️',
  emoji: '😊', sticker: '🏷️', gif: '🎞️', meme: '😂',
  online: '🌐', offline: '📴', connect: '🔗', disconnect: '❌',

  // ── Numbers as words ───────────────────────────────────────────────────────
  zero: '0️⃣', one: '1️⃣', two: '2️⃣', three: '3️⃣', four: '4️⃣', five: '5️⃣',
  six: '6️⃣', seven: '7️⃣', eight: '8️⃣', nine: '9️⃣', ten: '🔟',
  hundred: '💯', thousand: '🔢', million: '💰', billion: '💰',
  first: '🥇', second: '🥈', third: '🥉', last: '🏁', half: '½',
  double: '✌️', triple: '3️⃣', single: '1️⃣', pair: '👥', dozen: '🔢',

  // ── Music & arts ──────────────────────────────────────────────────────────
  music: '🎵', song: '🎵', beat: '🥁', rhythm: '🎵', melody: '🎵', harmony: '🎵',
  album: '💿', playlist: '🎵', concert: '🎤', stage: '🎭', performance: '🎭',
  art: '🎨', painting: '🖼️', sculpture: '🗿', drawing: '✏️', sketch: '✏️',
  poetry: '📜', poem: '📜', story: '📖', novel: '📚', comic: '📚',
  movie: '🎬', cinema: '🎬', animation: '🎞️', cartoon: '📺', documentary: '📽️',
  drama: '🎭', comedy: '😂', action: '💥', romance: '💕', horror: '😱',
  color: '🎨', red: '🔴', blue: '🔵', green: '🟢', yellow: '🟡', orange: '🟠',
  purple: '🟣', white: '⚪', pink: '🩷', brown: '🟤', gray: '🩶',

  // ── Education & knowledge ──────────────────────────────────────────────────
  school: '🏫', university: '🎓', college: '🎓', class: '📚', lesson: '📖',
  study: '📚', learn: '📚', teach: '👨‍🏫', graduate: '🎓', exam: '📝',
  test: '📝', quiz: '❓', homework: '📝', essay: '📄', report: '📊',
  math: '🔢', science: '🔬', history: '📜', geography: '🌍', biology: '🧬',
  chemistry: '⚗️', physics: '⚡', language: '🗣️', english: '📚', literature: '📖',
  research: '🔬', experiment: '🧪', laboratory: '🔬', microscope: '🔬', telescope: '🔭',
  knowledge: '🧠', wisdom: '🦉', intelligent: '🧠', genius: '🧠', stupid: '😅',
  memory: '💭', forget: '😶', remember: '💭', understand: '💡',
  library: '📚', dictionary: '📖', encyclopedia: '📚', theory: '💡',
  certificate: '📜', degree: '🎓', scholarship: '🎓', award: '🏆',

  // ── Business & work ────────────────────────────────────────────────────────
  work: '💼', job: '💼', career: '💼', profession: '💼', occupation: '💼',
  office: '🏢', meeting: '🤝', presentation: '📊', project: '📋', deadline: '⏰',
  team: '👥', colleague: '👔', manager: '👔', employee: '👔', intern: '👔',
  company: '🏢', business: '💼', startup: '🚀', corporate: '🏢', enterprise: '🏢',
  product: '📦', service: '🤝', customer: '👤', client: '👤', sale: '💰',
  profit: '📈', loss: '📉', revenue: '💰', investment: '💹', stock: '📈',
  market: '🛒', trade: '🤝', deal: '🤝', contract: '📄', agreement: '🤝',
  email: '📧', report: '📊', budget: '💰', expense: '💸', salary: '💵',
  promote: '📈', fire: '🔥', hire: '✅', interview: '🎤', resume: '📄',
  retire: '🏖️', resign: '👋', quit: '🚪',

  // ── Wealth & value ─────────────────────────────────────────────────────────
  rich: '💰', wealth: '💰', wealthy: '💰', millionaire: '💰', billionaire: '💰',
  poor: '😔', poverty: '😔', broke: '😔', debt: '💸',
  rare: '💎', scarce: '💎', precious: '💎', valuable: '💎', priceless: '💎',
  common: '📦', abundant: '🌟', plentiful: '🌾',
  luxury: '👑', expensive: '💸', cheap: '💵', free: '🆓', afford: '💳',
  earn: '💰', spend: '💸', save: '🏦', invest: '📈', donate: '🎁',
  buy: '🛒', sell: '💰', pay: '💳', borrow: '🤝', lend: '🤝', steal: '🦹',

  // ── Waste & desolation ─────────────────────────────────────────────────────
  wasteland: '🏜️', empty: '🕳️', barren: '🏜️', desolate: '🏚️',
  ruin: '🏚️', decay: '💀', rot: '🍂', junk: '🗑️',
  abandon: '🏚️', neglect: '😔', worn: '👴',
  crumble: '💥', collapse: '💥', damage: '💥',
  broken: '💔', shattered: '💥', wreck: '💥', destroy: '💥',

  // ── Actions & common verbs ─────────────────────────────────────────────────
  go: '🏃', going: '🏃', gone: '👋', come: '👋', coming: '👋', came: '👋',
  get: '✋', got: '✋', give: '🎁', gave: '🎁', take: '✋', took: '✋',
  make: '🔨', made: '🔨', build: '🏗️', built: '🏗️', create: '✨',
  send: '📤', sent: '📤', receive: '📥', got: '📥',
  use: '🔧', used: '🔧', need: '❗', want: '💭',
  see: '👁️', saw: '👁️', watch: '👀', hear: '👂', listen: '👂',
  speak: '💬', say: '💬', said: '💬', tell: '💬', told: '💬',
  ask: '❓', asked: '❓', answer: '💡', answered: '💡',
  know: '🧠', knew: '🧠', think: '🤔', thought: '🤔',
  believe: '🙏', trust: '🤝', hope: '🌈', wish: '⭐', dream: '💭',
  move: '🏃', stay: '🏠', leave: '👋', arrive: '🏁', return: '🔄',
  follow: '👣', lead: '👑', protect: '🛡️', attack: '⚔️', defend: '🛡️',
  escape: '🏃', seek: '🔍', find: '🔍', found: '🔍', discover: '🗺️',
  open: '🔓', close: '🔒', lock: '🔒', unlock: '🔓', break: '💥', fix: '🔧',
  start: '🚀', begin: '🚀', stop: '🛑', end: '🏁', finish: '🏁', continue: '▶️',
  wait: '⏳', hurry: '⚡', rush: '🏃', slow: '🐢', pause: '⏸️',
  push: '👐', pull: '🤝', throw: '🤾', catch: '🤲', hit: '👊', kick: '🦶',
  jump: '⬆️', fell: '⬇️', climb: '🧗', fly: '✈️', swim: '🏊',
  sit: '🪑', stand: '🧍', lie: '🛏️', sleep: '😴', wake: '⏰', rest: '😴',
  eat: '🍽️', drink: '🥤', breathe: '😮‍💨', live: '💚', die: '💀',
  grow: '📈', shrink: '📉', change: '🔄', improve: '📈', worsen: '📉',
  help: '🆘', support: '🤝', assist: '🤝', save: '💾', rescue: '🦸',
  fight: '👊', argue: '💬', agree: '✅', disagree: '❌', negotiate: '🤝',
  win: '🏆', lose: '😞', draw: '🤝', fail: '❌', succeed: '✅',
  try: '💪', attempt: '💪', give: '🎁', up: '⬆️',
  buy: '🛒', sell: '💰', pay: '💳', spend: '💸', earn: '💰',
  show: '👁️', hide: '🙈', reveal: '👁️', cover: '🙈', expose: '👁️',
  clean: '🧹', wash: '🧼', dry: '☀️', cook: '👨‍🍳', serve: '🍽️',
  call: '📞', text: '💬', meet: '🤝', visit: '👋', invite: '✉️',
  celebrate: '🎉', mourn: '😢', pray: '🙏', bless: '✨', curse: '💀',
  read: '📖', write: '✍️', type: '⌨️', draw: '🎨', design: '🎨',
  sing: '🎤', dance: '💃', laugh: '😂', cry: '😭', scream: '😱',
  born: '👶', die: '💀', marry: '💍', divorce: '💔',
  work: '💼', play: '🎮', study: '📚', relax: '😌', enjoy: '😊',

  // ── Abstract concepts ──────────────────────────────────────────────────────
  yes: '✅', no: '❌', ok: '👌', done: '✅',
  danger: '⚠️', warning: '⚠️', safe: '✅', risk: '⚠️',
  problem: '🤔', solution: '✅', question: '❓', truth: '✅', lie: '🤥',
  peace: '☮️', war: '⚔️', freedom: '🕊️', justice: '⚖️', law: '⚖️',
  power: '⚡', energy: '⚡', force: '💥', strength: '💪', weakness: '😔',
  success: '✅', failure: '❌', victory: '🏆', defeat: '😞',
  life: '💚', death: '💀', fate: '⭐', destiny: '⭐', luck: '🍀',
  magic: '✨', miracle: '✨', curse: '💀', blessing: '✨', prayer: '🙏',
  time: '⏰', past: '⏪', present: '🎁', future: '🚀', history: '📜',
  change: '🔄', progress: '📈', evolution: '🔄', revolution: '💥',
  truth: '✅', lie: '🤥', secret: '🤫', mystery: '🔍', surprise: '🎁',
  love: '❤️', hate: '😡', fear: '😨', courage: '💪', coward: '😨',
  hope: '🌈', despair: '😞', faith: '🙏', doubt: '🤔',
  big: '🐘', small: '🐭', tall: '📏', short: '📏', long: '📏',
  fast: '⚡', slow: '🐢', hot: '🔥', cold: '🥶', warm: '🌡️', cool: '😎',
  light: '💡', dark: '🌑', darkness: '🌑', bright: '✨', dim: '🌑',
  loud: '📢', quiet: '🤫', hard: '💪', soft: '🧸', rough: '🪨', smooth: '🧈',
  real: '✅', fake: '🤡', true: '✅', false: '❌', possible: '✅', impossible: '❌',
  important: '❗', urgent: '🚨', normal: '✅', strange: '👽', weird: '🤪',
  beautiful: '😍', ugly: '😬', cute: '🥰', pretty: '🌸', handsome: '😎',
  kind: '💚', cruel: '😈', gentle: '🕊️', rough: '💥', sweet: '🍬',
  smart: '🧠', wise: '🦉', foolish: '😅', brave: '💪', afraid: '😨',
  alive: '💚', dead: '💀', awake: '⏰', asleep: '😴', present: '👤', absent: '👻',

  // ── Time ──────────────────────────────────────────────────────────────────
  morning: '🌅', afternoon: '🌤️', evening: '🌆', night: '🌙', midnight: '🕛',
  today: '📅', tomorrow: '📅', yesterday: '📅',
  week: '📅', month: '📅', year: '📅', decade: '📅', century: '📜',
  monday: '📅', tuesday: '📅', wednesday: '📅', thursday: '📅',
  friday: '🎉', saturday: '🎉', sunday: '☀️',
  january: '❄️', february: '💕', march: '🌸', april: '🌧️',
  may: '🌸', june: '☀️', july: '🎆', august: '☀️',
  september: '🍂', october: '🎃', november: '🍂', december: '🎄',
  now: '⏰', soon: '⏳', late: '⏰', early: '🌅', never: '❌', always: '♾️',
  often: '🔄', sometimes: '🤔', rarely: '💎', once: '1️⃣',
  ancient: '🏛️', modern: '🏙️', new: '✨', old: '👴', young: '👶',
  forever: '♾️', eternal: '♾️', temporary: '⏳', moment: '⏱️',

  // ── Places & buildings ─────────────────────────────────────────────────────
  hospital: '🏥', school: '🏫', office: '🏢', bank: '🏦', hotel: '🏨',
  shop: '🛒', store: '🏪', mall: '🛍️', park: '🌳', zoo: '🦁', museum: '🏛️',
  church: '⛪', mosque: '🕌', temple: '🛕', palace: '🏯', castle: '🏰',
  stadium: '🏟️', theater: '🎭', cinema: '🎬', library: '📚',
  city: '🏙️', town: '🏘️', village: '🏡', country: '🌍', nation: '🌍',
  tower: '🗼', bridge: '🌉', tunnel: '🚇', mine: '⛏️',
  ruins: '🏚️', cemetery: '⚰️', dungeon: '⛓️', fortress: '🏰',
  laboratory: '🔬', factory: '🏭', market: '🛒', harbor: '⛵',
  inn: '🏨', tavern: '🍺', oasis: '🌴', camp: '🏕️',
}

// ─── Stemming: try to find a root match ──────────────────────────────────────

function lookupEmoji(word: string): string | null {
  const w = word.toLowerCase()
  if (EMOJI_MAP[w]) return EMOJI_MAP[w]

  const stems = [
    w.replace(/ies$/, 'y'),
    w.replace(/ves$/, 'f'),
    w.replace(/ves$/, 'fe'),
    w.replace(/oes$/, 'o'),
    w.replace(/sses$/, 'ss'),
    w.replace(/xes$/, 'x'),
    w.replace(/ches$/, 'ch'),
    w.replace(/shes$/, 'sh'),
    w.replace(/ses$/, 's'),
    w.replace(/s$/, ''),
    w.replace(/es$/, ''),
    w.replace(/es$/, 'e'),
    w.replace(/ed$/, ''),
    w.replace(/ed$/, 'e'),
    w.replace(/ing$/, ''),
    w.replace(/ing$/, 'e'),
    w.replace(/ning$/, 'n'),
    w.replace(/tting$/, 't'),
    w.replace(/pping$/, 'p'),
    w.replace(/rring$/, 'r'),
    w.replace(/mming$/, 'm'),
    w.replace(/gging$/, 'g'),
    w.replace(/dding$/, 'd'),
    w.replace(/bbing$/, 'b'),
    w.replace(/ly$/, ''),
    w.replace(/ness$/, ''),
    w.replace(/tion$/, ''),
    w.replace(/tion$/, 'te'),
    w.replace(/ful$/, ''),
    w.replace(/less$/, ''),
    w.replace(/er$/, ''),
    w.replace(/er$/, 'e'),
    w.replace(/est$/, ''),
    w.replace(/ment$/, ''),
    w.replace(/al$/, ''),
    w.replace(/ous$/, ''),
    w.replace(/ish$/, ''),
    w.replace(/ward$/, ''),
    w.replace(/ity$/, ''),
    w.replace(/ness$/, ''),
    w.replace(/age$/, ''),
    w.replace(/ance$/, ''),
    w.replace(/ence$/, ''),
    w.replace(/ive$/, ''),
    w.replace(/ize$/, ''),
    w.replace(/ise$/, ''),
    w.replace(/en$/, ''),
    w.replace(/ify$/, ''),
    w.replace(/able$/, ''),
    w.replace(/ible$/, ''),
  ]

  for (const stem of stems) {
    if (stem && stem !== w && EMOJI_MAP[stem]) return EMOJI_MAP[stem]
  }
  return null
}

// ─── Modes ────────────────────────────────────────────────────────────────────

type Mode = 'append' | 'replace' | 'emoji-only'

const MODES: { id: Mode; label: string; description: string }[] = [
  { id: 'append', label: 'Append', description: 'Keep text + add emoji after matched words' },
  { id: 'replace', label: 'Replace', description: 'Replace matched words with emoji' },
  { id: 'emoji-only', label: 'Emoji Only', description: 'Show only emojis for matched words' },
]

// ─── Translation logic ────────────────────────────────────────────────────────

function translate(text: string, mode: Mode): { output: string; matchCount: number } {
  let matchCount = 0

  // Handle multi-word phrases first
  const multiWordPhrases = Object.keys(EMOJI_MAP)
    .filter(k => k.includes(' '))
    .sort((a, b) => b.length - a.length)

  let processedText = text
  const placeholders: string[] = []

  for (const phrase of multiWordPhrases) {
    const regex = new RegExp(phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    processedText = processedText.replace(regex, (match) => {
      const idx = placeholders.length
      const emoji = EMOJI_MAP[phrase]
      if (mode === 'append') placeholders.push(`${match} ${emoji}`)
      else placeholders.push(emoji)
      matchCount++
      return `\x00PHRASE${idx}\x00`
    })
  }

  const tokens = processedText.split(/(\s+|[^\w\x00]+)/)

  const result = tokens.map(token => {
    const phraseMatch = token.match(/^\x00PHRASE(\d+)\x00$/)
    if (phraseMatch) return placeholders[parseInt(phraseMatch[1])]
    if (/^\s+$/.test(token) || /^[^\w]+$/.test(token)) return token

    const emoji = lookupEmoji(token)
    if (emoji) {
      matchCount++
      if (mode === 'append') return `${token} ${emoji}`
      if (mode === 'replace') return emoji
      if (mode === 'emoji-only') return emoji
    }
    if (mode === 'emoji-only') return ''
    return token
  })

  let output = result.join('')
  if (mode === 'emoji-only') {
    output = output.replace(/\s+/g, ' ').trim()
  }

  return { output, matchCount }
}

// ─── Examples ─────────────────────────────────────────────────────────────────

const EXAMPLES = [
  { label: 'Secret Message', input: 'A rich farm is rare in this sandy waste. Code is used when secrets are sent.' },
  { label: 'Love & Friends', input: 'I love my family and friends so much, they make me happy' },
  { label: 'Weather', input: 'Today the sun is shining but there are some clouds and rain coming' },
  { label: 'Food', input: 'I want pizza, burger, and coffee for dinner tonight' },
  { label: 'Animals', input: 'The dog chased the cat and the bird flew away to the tree' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function EmojiTranslatorTool() {
  const [input, setInput] = useState('')
  const [mode, setMode] = useState<Mode>('append')

  const { output, matchCount } = useMemo(() => {
    if (!input.trim()) return { output: '', matchCount: 0 }
    return translate(input, mode)
  }, [input, mode])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(output)
      toast({ title: 'Copied!', description: 'Emoji text copied to clipboard.' })
    } catch {
      toast({ title: 'Failed to copy', description: 'Please copy manually.', variant: 'destructive' })
    }
  }

  return (
    <div className="space-y-6 w-full min-w-0">
      {/* Examples */}
      <div>
        <p className="text-sm font-medium mb-2 text-muted-foreground">Try an example:</p>
        <div className="flex flex-wrap gap-2">
          {EXAMPLES.map(ex => (
            <button
              key={ex.label}
              onClick={() => setInput(ex.input)}
              className="text-xs px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-primary font-medium"
            >
              {ex.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mode selector */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Translation Mode</label>
        <div className="grid grid-cols-3 gap-2">
          {MODES.map(m => (
            <button
              key={m.id}
              onClick={() => setMode(m.id)}
              className={`p-3 rounded-xl border text-left transition-all ${
                mode === m.id
                  ? 'border-primary bg-primary/10 text-primary'
                  : 'border-border bg-muted/10 hover:border-primary/30 hover:bg-primary/5'
              }`}
            >
              <p className="text-xs font-bold">{m.label}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{m.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Your Text</label>
        <Textarea
          placeholder="Type something and watch the emojis appear..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="min-h-[120px] resize-none text-sm"
        />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>{input.length} characters</span>
          {input && (
            <button onClick={() => setInput('')} className="flex items-center gap-1 hover:text-foreground transition-colors">
              <RefreshCw className="w-3 h-3" /> Clear
            </button>
          )}
        </div>
      </div>

      {/* Output */}
      {input.trim() && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Result</h3>
              {matchCount > 0 && (
                <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full font-medium">
                  {matchCount} emoji{matchCount !== 1 ? 's' : ''} added
                </span>
              )}
            </div>
            <Button size="sm" variant="outline" onClick={copy} className="h-7 px-2 gap-1 text-xs">
              <Copy className="w-3 h-3" /> Copy
            </Button>
          </div>

          <div className="p-5 rounded-xl bg-muted/20 border min-h-[80px]">
            <p className="text-base leading-relaxed whitespace-pre-wrap break-words select-all">
              {output || <span className="text-muted-foreground text-sm">No matched words found.</span>}
            </p>
          </div>

          {matchCount === 0 && (
            <p className="text-xs text-muted-foreground">
              No words matched. Try words like happy, love, fire, dog, pizza, sun, farm, secret, etc.
            </p>
          )}
        </div>
      )}

      {!input.trim() && (
        <div className="text-center py-10 text-muted-foreground">
          <div className="text-5xl mb-3">😊 ❤️ 🔥</div>
          <p className="text-sm">Type any text and we&apos;ll add matching emojis.</p>
          <p className="text-xs mt-1 opacity-60">2000+ words across 25 categories — emotions, body parts, clothing, space, health, household & more.</p>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 pt-2">
        <div className="text-center p-3 bg-muted/20 rounded-xl">
          <p className="text-2xl font-bold text-primary">2000+</p>
          <p className="text-xs text-muted-foreground">Words mapped</p>
        </div>
        <div className="text-center p-3 bg-muted/20 rounded-xl">
          <p className="text-2xl font-bold text-primary">25+</p>
          <p className="text-xs text-muted-foreground">Categories</p>
        </div>
        <div className="text-center p-3 bg-muted/20 rounded-xl">
          <p className="text-2xl font-bold text-primary">50+</p>
          <p className="text-xs text-muted-foreground">Stem variants</p>
        </div>
      </div>
    </div>
  )
}
