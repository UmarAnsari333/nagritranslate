'use client'

import { useState } from 'react'
import { Copy, Check, RefreshCw } from 'lucide-react'

// ─── Pass 1: Expand contractions ─────────────────────────────────────────────

const CONTRACTIONS: Record<string, string> = {
  "don't": 'do not', "doesn't": 'does not', "didn't": 'did not',
  "won't": 'will not', "wouldn't": 'would not', "shouldn't": 'should not',
  "couldn't": 'could not', "can't": 'cannot', "mustn't": 'must not',
  "needn't": 'need not', "isn't": 'is not', "aren't": 'are not',
  "wasn't": 'was not', "weren't": 'were not', "hasn't": 'has not',
  "haven't": 'have not', "hadn't": 'had not',
  "i'm": 'i am', "i've": 'i have', "i'd": 'i would', "i'll": 'i will',
  "you're": 'you are', "you've": 'you have', "you'd": 'you would', "you'll": 'you will',
  "he's": 'he is', "he'd": 'he would', "he'll": 'he will',
  "she's": 'she is', "she'd": 'she would', "she'll": 'she will',
  "it's": 'it is', "it'd": 'it would', "it'll": 'it will',
  "we're": 'we are', "we've": 'we have', "we'd": 'we would', "we'll": 'we will',
  "they're": 'they are', "they've": 'they have', "they'd": 'they would', "they'll": 'they will',
  "that's": 'that is', "that'd": 'that would', "that'll": 'that will',
  "what's": 'what is', "who's": 'who is', "where's": 'where is',
  "there's": 'there is', "here's": 'here is', "let's": 'let us',
  "going to": 'going to', "want to": 'wish to', "have to": 'must',
  "got to": 'must', "used to": 'was wont to', "ought to": 'ought to',
}

// ─── Pass 2: Multi-word phrase map (longest match wins) ──────────────────────
// Pronoun + verb pairs — critical for correct thou/art/hast conjugation

const MULTI_WORD: Record<string, string> = {
  // YOU + verb (→ thou + correct conjugation)
  'you are': 'thou art',
  'you were': 'thou wast',
  'you have been': 'thou hast been',
  'you have': 'thou hast',
  'you had': 'thou hadst',
  'you will be': 'thou wilt be',
  'you will have': 'thou wilt have',
  'you will': 'thou wilt',
  'you would': 'thou wouldst',
  'you should': 'thou shouldst',
  'you shall': 'thou shalt',
  'you can': 'thou canst',
  'you could': 'thou couldst',
  'you must': 'thou must',
  'you may': 'thou mayst',
  'you might': 'thou mightest',
  'you do not': 'thou dost not',
  'you do': 'thou dost',
  'you did not': 'thou didst not',
  'you did': 'thou didst',
  'you know': 'thou knowest',
  'you think': 'thou thinkest',
  'you speak': 'thou speakest',
  'you say': 'thou sayest',
  'you see': 'thou seest',
  'you hear': 'thou hearest',
  'you feel': 'thou feelest',
  'you love': 'thou lovest',
  'you hate': 'thou hatest',
  'you like': 'thou likest',
  'you want': 'thou desirest',
  'you need': 'thou needest',
  'you wish': 'thou wishest',
  'you go': 'thou goest',
  'you come': 'thou comest',
  'you make': 'thou makest',
  'you take': 'thou takest',
  'you give': 'thou givest',
  'you find': 'thou findest',
  'you bring': 'thou bringest',
  'you help': 'thou helpest',
  'you fight': 'thou fighteth',
  'you follow': 'thou followest',
  'you believe': 'thou believest',
  'you tell': 'thou tellest',
  'you ask': 'thou askest',
  'you seek': 'thou seekest',
  'you leave': 'thou leavest',
  'you stay': 'thou stayest',
  'you live': 'thou livest',
  'you die': 'thou diest',
  'you run': 'thou runnest',
  'you walk': 'thou walkest',
  'you eat': 'thou eatest',
  'you drink': 'thou drinkest',
  'you sleep': 'thou sleepest',
  'you sit': 'thou sittest',
  'you stand': 'thou standest',
  'you understand': 'thou understandest',
  'you remember': 'thou rememberest',
  'you forget': 'thou forgettest',
  'you trust': 'thou trustest',
  'you fear': 'thou fearest',
  'you try': 'thou triest',
  'you serve': 'thou servest',
  'you ride': 'thou ridest',
  'you choose': 'thou choosest',
  'you lead': 'thou leadest',
  'you fall': 'thou fallest',
  'you call': 'thou callest',
  'you wait': 'thou tarriest',
  'you hurry': 'thou makest haste',
  'you work': 'thou toilest',
  'you play': 'thou sportest',
  'you learn': 'thou learnest',
  'you write': 'thou inscribest',
  'you read': 'thou readest',
  'you carry': 'thou bearest',
  'you travel': 'thou journeyest',
  'you return': 'thou returnest',
  'you change': 'thou changest',
  'you care': 'thou carest',
  'you dare': 'thou darest',

  // HE/SHE/IT + verb (→ -eth forms)
  'he is': 'he is', 'she is': 'she is', 'it is': 'it is',
  'he was': 'he was', 'she was': 'she was', 'it was': 'it was',
  'he has been': 'he hath been', 'she has been': 'she hath been',
  'he has': 'he hath', 'she has': 'she hath', 'it has': 'it hath',
  'he had': 'he had', 'she had': 'she had',
  'he does not': 'he doth not', 'she does not': 'she doth not',
  'he does': 'he doth', 'she does': 'she doth', 'it does': 'it doth',
  'he goes': 'he goeth', 'she goes': 'she goeth', 'it goes': 'it goeth',
  'he says': 'he sayeth', 'she says': 'she sayeth',
  'he speaks': 'he speaketh', 'she speaks': 'she speaketh',
  'he comes': 'he cometh', 'she comes': 'she cometh', 'it comes': 'it cometh',
  'he knows': 'he knoweth', 'she knows': 'she knoweth',
  'he thinks': 'he thinketh', 'she thinks': 'she thinketh',
  'he wants': 'he desireth', 'she wants': 'she desireth',
  'he loves': 'he loveth', 'she loves': 'she loveth',
  'he hates': 'he hateth', 'she hates': 'she hateth',
  'he makes': 'he maketh', 'she makes': 'she maketh',
  'he takes': 'he taketh', 'she takes': 'she taketh',
  'he gives': 'he giveth', 'she gives': 'she giveth',
  'he runs': 'he runneth', 'she runs': 'she runneth',
  'he walks': 'he walketh', 'she walks': 'she walketh',
  'he lives': 'he liveth', 'she lives': 'she liveth',
  'he dies': 'he dieth', 'she dies': 'she dieth',
  'he seeks': 'he seeketh', 'she seeks': 'she seeketh',
  'he fights': 'he fighteth', 'she fights': 'she fighteth',
  'he falls': 'he falleth', 'she falls': 'she falleth',
  'he calls': 'he calleth', 'she calls': 'she calleth',
  'he fears': 'he feareth', 'she fears': 'she feareth',
  'he helps': 'he helpeth', 'she helps': 'she helpeth',
  'he rides': 'he rideth', 'she rides': 'she rideth',
  'he leads': 'he leadeth', 'she leads': 'she leadeth',
  'he follows': 'he followeth', 'she follows': 'she followeth',
  'he needs': 'he needeth', 'she needs': 'she needeth',
  'he believes': 'he believeth', 'she believes': 'she believeth',
  'he hears': 'he heareth', 'she hears': 'she heareth',
  'he feels': 'he feeleth', 'she feels': 'she feeleth',
  'he looks': 'he looketh', 'she looks': 'she looketh',
  'he serves': 'he serveth', 'she serves': 'she serveth',
  'he carries': 'he carrieth', 'she carries': 'she carrieth',
  'he chooses': 'he chooseth', 'she chooses': 'she chooseth',
  'he brings': 'he bringeth', 'she brings': 'she bringeth',
  'he works': 'he toileth', 'she works': 'she toileth',
  'he writes': 'he inscribeth', 'she writes': 'she inscribeth',
  'he travels': 'he journeyeth', 'she travels': 'she journeyeth',

  // I + common phrases
  'i am': 'I am',
  'i have': 'I have',
  'i will': 'I shall',
  'i would': 'I would',
  'i should': 'I should',
  'i can': 'I can',
  'i do not': 'I do not',
  'i did not': 'I did not',
  'i know': 'I know',
  'i think': 'methinks',
  'i believe': 'I believe',
  'i feel': 'I feel',
  'i love': 'I love',
  'i want': 'I desire',
  'i need': 'I require',
  'i wish': 'I wish',
  'i hope': 'I hope',
  'i see': 'I behold',
  'i hear': 'I hearken',
  'i say': 'I speak',
  'i go': 'I venture',
  'i come': 'I come',
  'i make': 'I craft',
  'i take': 'I seize',
  'i give': 'I bestow',
  'i find': 'I discover',
  'i ask': 'I beseech',
  'i try': 'I endeavor',
  'i fear': 'I dread',
  'i seek': 'I seek',
  'i live': 'I dwell',
  'i serve': 'I serve',
  'i ride': 'I ride',
  'i follow': 'I follow',
  'i trust': 'I trust',
  'i pray': 'I prithee',

  // Common modern phrases → medieval equivalents
  'thank you very much': 'I am most grateful',
  'thank you': 'I thank thee',
  'you are welcome': 'thou art most welcome',
  'of course': 'certes',
  'by the way': 'withal',
  'in fact': 'in sooth',
  'as well': 'likewise',
  'right now': 'forthwith',
  'a lot': 'greatly',
  'a lot of': 'many a',
  'kind of': 'somewhat',
  'sort of': 'somewhat',
  'i am sorry': 'I beg thy pardon',
  'excuse me': 'prithee pardon me',
  'good morning': 'good morrow',
  'good night': 'good eventide',
  'good evening': 'good eventide',
  'good afternoon': 'good day',
  'goodbye': 'fare thee well',
  'see you later': 'until we meet again',
  'what is your name': 'how art thou called',
  'my name is': 'I am called',
  'how are you': 'how dost thou fare',
  'i am fine': 'I fare well',
  'i am not sure': 'methinks I know not',
  'i do not know': 'I know not',
  'i am going': 'I venture hence',
  'we are going': 'we venture hence',
  'no problem': 'think naught of it',
  'never mind': 'trouble thyself not',
  'long time ago': 'in days of yore',
  'once upon a time': 'in days of yore',
  'all the time': 'ever and always',
  'of course not': 'certes not',
  'by the way': 'withal',
  'what do you think': 'what thinkest thou',
  'what do you want': 'what dost thou desire',
  'where are you going': 'whither dost thou venture',
  'who are you': 'who art thou',
  'what is this': 'what is this',
  'come with me': 'come hither with me',
  'go away': 'begone',
  'hurry up': 'make haste',
  'be careful': 'have care',
  'good luck': 'god speed thee',
  'i love you': 'I hold thee most dear',
  'i miss you': 'I long for thy presence',
  'i hate you': 'thou art mine enemy',
  'help me': 'aid me, prithee',
  'trust me': 'trust me well',
  'follow me': 'follow hence',
  'listen to me': 'hearken to me',
  'look at me': 'gaze upon me',
  'wait for me': 'tarry for me',
  'leave me alone': 'trouble me not',
  'i give up': 'I yield',
  'no way': 'nay, not thus',
  'right away': 'forthwith',
  'let me know': 'inform me',
  'well done': 'well done, good sir',
  'of all time': 'in all the ages',
  'at the same time': 'at the selfsame time',
  'i am sure': 'I am certes',
  'in the end': 'at the last',
  'at the end': 'at the last',
  'for example': 'for instance',
  'i have to': 'I must',
  'i need to': 'I must',
  'i want to': 'I desire to',
  'i would like': 'I would fain',
  'do you want': 'dost thou desire',
  'can you': 'canst thou',
  'will you': 'wilt thou',
}

// ─── Pass 3: Word-level dictionary ───────────────────────────────────────────

const WORD_MAP: Record<string, string> = {
  // Pronouns
  you: 'thou', your: 'thy', yours: 'thine', yourself: 'thyself',

  // To Be
  am: 'am', are: 'art', is: 'is', was: 'was', were: 'were',
  been: 'been', being: 'being',

  // To Have
  has: 'hath', have: 'have', had: 'had', having: 'having',

  // To Do
  does: 'doth', did: 'didst',

  // Modals (standalone, after thou was already handled in multi-word)
  will: 'shall', would: 'wouldst', should: 'shouldst',
  shall: 'shalt', can: 'canst', could: 'couldst',
  may: 'mayst', might: 'mightest', must: 'must',

  // Greetings & basic responses
  hello: 'hail', hi: 'hail', hey: 'hark',
  goodbye: 'fare thee well', bye: 'fare thee well',
  yes: 'aye', no: 'nay', ok: 'very well', okay: 'very well',
  please: 'prithee', sorry: 'I beg thy pardon',
  thanks: 'gramercy', thank: 'thank', welcome: 'most welcome',
  sure: 'certes', certainly: 'certes', absolutely: 'verily',

  // Intensifiers & adverbs
  very: 'most', really: 'verily', actually: 'in sooth',
  truly: 'verily', honestly: 'in good sooth', indeed: 'forsooth',
  obviously: 'plainly', clearly: 'plainly', definitely: 'certes',
  probably: 'like as not', possibly: 'haply', perhaps: 'perchance',
  maybe: 'mayhaps', basically: 'in sum', essentially: 'in truth',
  quite: 'right', rather: 'somewhat', pretty: 'passing',
  extremely: 'exceeding', incredibly: 'wondrously',
  approximately: 'about', almost: 'nigh', nearly: 'nigh',
  enough: 'sufficient', too: 'overmuch', also: 'likewise',
  however: 'howbeit', therefore: 'wherefore', thus: 'thus',
  hence: 'hence', furthermore: 'moreover', meanwhile: 'withal',
  otherwise: 'else', nevertheless: 'nonetheless', yet: 'yet',

  // Time adverbs
  always: 'ever', never: 'ne\'er', often: 'oft', sometimes: 'at times',
  usually: 'customarily', rarely: 'seldom', soon: 'anon',
  immediately: 'forthwith', quickly: 'apace', slowly: 'with leisure',
  now: 'presently', then: 'thereafter', before: 'ere', after: 'thereafter',
  already: 'already', still: 'yet', again: 'once more', finally: 'at last',
  recently: 'of late', lately: 'of late', eventually: 'in time',
  suddenly: 'of a sudden', suddenly: 'of a sudden',

  // Place adverbs
  here: 'hither', there: 'thither', where: 'whither',
  everywhere: 'throughout', somewhere: 'someplace', nowhere: 'nowhere',
  inside: 'within', outside: 'without', above: 'above', below: 'below',
  away: 'hence', back: 'hence', forward: 'onward', together: 'together',
  alone: 'alone', apart: 'asunder',

  // Conjunctions & prepositions
  because: 'for', since: 'since', while: 'whilst', although: 'albeit',
  though: 'albeit', unless: 'lest', until: 'until', whether: 'whether',
  if: 'if', when: 'when', where: 'where', how: 'how', why: 'wherefore',

  // Question words
  what: 'what', which: 'which', who: 'who', whom: 'whom', whose: 'whose',

  // Negation
  not: 'not', nothing: 'naught', nobody: 'no one', nowhere: 'nowhere',
  neither: 'neither', nor: 'nor',

  // Determiners & quantifiers
  this: 'this', that: 'that', these: 'these', those: 'those',
  some: 'some', any: 'any', all: 'all', both: 'both', each: 'each',
  every: 'every', few: 'few', many: 'many', much: 'much',
  more: 'more', most: 'most', less: 'less', least: 'least',
  another: 'another', other: 'other', such: 'such', own: 'own',
  anything: 'aught', something: 'somewhat', everything: 'all things',
  anyone: 'any soul', someone: 'some soul', everyone: 'all folk',

  // People
  man: 'man', men: 'men', woman: 'woman', women: 'women',
  girl: 'maiden', boy: 'lad', child: 'child', children: 'children',
  baby: 'babe', infant: 'babe', teenager: 'youth', adult: 'grown soul',
  person: 'soul', people: 'folk', human: 'mortal', humans: 'mortals',
  friend: 'good fellow', friends: 'companions', companion: 'companion',
  enemy: 'foe', enemies: 'foes', foe: 'foe', rival: 'adversary',
  stranger: 'stranger', foreigner: 'stranger from distant lands',
  neighbor: 'neighbour', master: 'master', servant: 'servant',
  slave: 'serf', peasant: 'villein', merchant: 'merchant',
  soldier: 'soldier', warrior: 'warrior', knight: 'knight',
  king: 'king', queen: 'queen', prince: 'prince', princess: 'princess',
  duke: 'duke', lord: 'lord', lady: 'lady', baron: 'baron',
  bishop: 'bishop', priest: 'priest', monk: 'friar', nun: 'nun',
  wizard: 'sorcerer', witch: 'witch', dragon: 'dragon', hero: 'champion',
  thief: 'knave', murderer: 'murderer', criminal: 'villain',
  judge: 'magistrate', lawyer: 'advocate', doctor: 'physician',
  teacher: 'scholar', student: 'pupil', farmer: 'husbandman',
  blacksmith: 'smith', carpenter: 'carpenter', cook: 'cook',
  guard: 'sentinel', spy: 'spy', advisor: 'counsellor',

  // Family
  mother: 'mother', father: 'father', brother: 'brother', sister: 'sister',
  son: 'son', daughter: 'daughter', husband: 'husband', wife: 'wife',
  grandfather: 'grandsire', grandmother: 'grandam', uncle: 'uncle',
  aunt: 'aunt', cousin: 'cousin', family: 'kin', relative: 'kinsman',
  ancestor: 'forebear', descendant: 'offspring',

  // Body
  head: 'head', face: 'visage', eye: 'eye', eyes: 'eyes',
  ear: 'ear', nose: 'nose', mouth: 'mouth', lips: 'lips',
  teeth: 'teeth', tongue: 'tongue', hair: 'hair', neck: 'neck',
  shoulder: 'shoulder', arm: 'arm', hand: 'hand', hands: 'hands',
  finger: 'finger', chest: 'breast', heart: 'heart', stomach: 'belly',
  back: 'back', leg: 'leg', foot: 'foot', feet: 'feet',
  skin: 'skin', blood: 'blood', bone: 'bone', soul: 'soul',
  mind: 'mind', brain: 'wit', voice: 'voice', breath: 'breath',

  // Places
  home: 'dwelling', house: 'abode', room: 'chamber', door: 'door',
  window: 'window', floor: 'floor', wall: 'wall', roof: 'roof',
  castle: 'castle', palace: 'palace', tower: 'tower', dungeon: 'dungeon',
  city: 'city', town: 'town', village: 'village', farm: 'farm',
  church: 'church', temple: 'temple', inn: 'inn', tavern: 'tavern',
  market: 'market', school: 'school', prison: 'gaol', hospital: 'infirmary',
  road: 'road', street: 'lane', path: 'path', bridge: 'bridge',
  gate: 'gate', wall: 'rampart', field: 'field', garden: 'garden',
  forest: 'forest', woods: 'wood', tree: 'tree', river: 'river',
  lake: 'lake', sea: 'sea', ocean: 'ocean', island: 'isle',
  mountain: 'mountain', hill: 'hill', valley: 'vale', cave: 'cavern',
  land: 'land', kingdom: 'realm', country: 'realm', world: 'world',
  earth: 'earth', heaven: 'heaven', hell: 'perdition',
  sky: 'firmament', north: 'north', south: 'south', east: 'east', west: 'west',

  // Things & Objects
  money: 'coin', gold: 'gold', silver: 'silver', treasure: 'treasure',
  sword: 'sword', shield: 'shield', armor: 'armour', bow: 'bow',
  arrow: 'arrow', knife: 'dagger', weapon: 'weapon', ring: 'ring',
  crown: 'crown', throne: 'throne', flag: 'banner', key: 'key',
  map: 'map', scroll: 'scroll', book: 'tome', letter: 'missive',
  message: 'missive', paper: 'parchment', pen: 'quill', ink: 'ink',
  candle: 'candle', fire: 'fire', torch: 'torch', lamp: 'lantern',
  rope: 'rope', chain: 'chain', cage: 'cage', box: 'coffer',
  bag: 'sack', ship: 'vessel', boat: 'vessel', cart: 'cart',
  horse: 'steed', dog: 'hound', cat: 'cat', bird: 'bird',
  wolf: 'wolf', lion: 'lion', bear: 'bear', eagle: 'eagle',
  snake: 'serpent', rat: 'rat', deer: 'deer', ox: 'ox',
  food: 'victuals', bread: 'bread', meat: 'meat', fish: 'fish',
  wine: 'wine', ale: 'ale', water: 'water', feast: 'banquet',
  meal: 'repast', cup: 'goblet', plate: 'platter', pot: 'pot',
  cloth: 'cloth', clothes: 'garb', dress: 'gown', coat: 'cloak',
  hat: 'helm', shoes: 'boots', gloves: 'gloves',
  medicine: 'physic', poison: 'poison', spell: 'incantation',
  magic: 'sorcery', curse: 'curse', blessing: 'blessing',
  phone: 'speaking glass', computer: 'thinking machine',
  car: 'horseless carriage', internet: 'the great realm of knowledge',
  television: 'moving picture box', radio: 'speaking box',
  electricity: 'lightning force', gun: 'fire stick',

  // Time
  today: 'this day', tomorrow: 'the morrow', yesterday: 'yester-day',
  morning: 'morrow', evening: 'eventide', night: 'eve',
  midnight: 'the witching hour', noon: 'midday', afternoon: 'after midday',
  dawn: 'break of dawn', sunset: 'eventide', sunrise: 'break of dawn',
  day: 'day', week: 'sennight', month: 'month', year: 'year',
  century: 'century', age: 'age', era: 'age', time: 'hour',
  moment: 'moment', second: 'instant', minute: 'moment',
  hour: 'bell', season: 'season', spring: 'spring', summer: 'summer',
  autumn: 'autumn', winter: 'winter',
  past: 'times past', future: 'time to come', present: 'the now',

  // Verbs (base forms — for contexts not covered by multi-word)
  go: 'venture', went: 'ventured', gone: 'gone', going: 'venturing',
  come: 'come', came: 'came', coming: 'coming',
  see: 'behold', saw: 'beheld', seen: 'beheld', seeing: 'beholding',
  look: 'gaze upon', looked: 'gazed upon', looking: 'gazing upon',
  hear: 'hearken', heard: 'hearkened', hearing: 'hearkening',
  listen: 'hearken', listened: 'hearkened',
  say: 'speak', said: 'spoke', saying: 'speaking',
  tell: 'relate', told: 'related', telling: 'relating',
  speak: 'speak', spoke: 'spoke', spoken: 'spoken', speaking: 'speaking',
  talk: 'speak', talked: 'spoke', talking: 'speaking',
  know: 'know', knew: 'knew', known: 'known', knowing: 'knowing',
  think: 'deem', thought: 'deemed', thinking: 'deeming',
  believe: 'believe', believed: 'believed', believing: 'believing',
  feel: 'feel', felt: 'felt', feeling: 'feeling',
  want: 'desire', wanted: 'desired', wanting: 'desiring',
  need: 'require', needed: 'required', needing: 'requiring',
  like: 'fancy', liked: 'fancied', liking: 'fancying',
  love: 'love', loved: 'loved', loving: 'loving',
  hate: 'despise', hated: 'despised', hating: 'despising',
  make: 'craft', made: 'crafted', making: 'crafting',
  take: 'seize', took: 'seized', taken: 'seized', taking: 'seizing',
  give: 'bestow', gave: 'bestowed', given: 'bestowed', giving: 'bestowing',
  get: 'procure', got: 'procured', gotten: 'procured', getting: 'procuring',
  find: 'discover', found: 'discovered', finding: 'discovering',
  put: 'place', putting: 'placing',
  bring: 'fetch', brought: 'fetched', bringing: 'fetching',
  keep: 'maintain', kept: 'maintained', keeping: 'maintaining',
  let: 'permit', letting: 'permitting',
  help: 'aid', helped: 'aided', helping: 'aiding',
  call: 'summon', called: 'summoned', calling: 'summoning',
  try: 'endeavor', tried: 'endeavored', trying: 'endeavoring',
  use: 'employ', used: 'employed', using: 'employing',
  ask: 'beseech', asked: 'besought', asking: 'beseeching',
  answer: 'reply', answered: 'replied', answering: 'replying',
  show: 'reveal', showed: 'revealed', shown: 'revealed', showing: 'revealing',
  send: 'dispatch', sent: 'dispatched', sending: 'dispatching',
  buy: 'procure', bought: 'procured', buying: 'procuring',
  sell: 'vend', sold: 'vended', selling: 'vending',
  run: 'flee with haste', ran: 'fled with haste', running: 'fleeing',
  walk: 'tread', walked: 'trod', walking: 'treading',
  eat: 'sup', ate: 'supped', eaten: 'supped', eating: 'supping',
  drink: 'quaff', drank: 'quaffed', drunk: 'quaffed', drinking: 'quaffing',
  sleep: 'slumber', slept: 'slumbered', sleeping: 'slumbering',
  wake: 'rouse', woke: 'roused', woken: 'roused', waking: 'rousing',
  sit: 'be seated', sat: 'was seated', sitting: 'seated',
  stand: 'stand', stood: 'stood', standing: 'standing',
  live: 'dwell', lived: 'dwelt', living: 'dwelling',
  die: 'perish', died: 'perished', dying: 'perishing',
  kill: 'slay', killed: 'slew', killing: 'slaying',
  fight: 'do battle', fought: 'did battle', fighting: 'doing battle',
  attack: 'assail', attacked: 'assailed', attacking: 'assailing',
  defend: 'safeguard', defended: 'safeguarded', defending: 'safeguarding',
  save: 'deliver', saved: 'delivered', saving: 'delivering',
  protect: 'protect', protected: 'protected', protecting: 'protecting',
  escape: 'flee', escaped: 'fled', escaping: 'fleeing',
  follow: 'follow', followed: 'followed', following: 'following',
  lead: 'lead', led: 'led', leading: 'leading',
  ride: 'ride', rode: 'rode', ridden: 'ridden', riding: 'riding',
  fly: 'soar', flew: 'soared', flown: 'soared', flying: 'soaring',
  fall: 'fall', fell: 'fell', fallen: 'fallen', falling: 'falling',
  rise: 'rise', rose: 'rose', risen: 'risen', rising: 'rising',
  return: 'return', returned: 'returned', returning: 'returning',
  leave: 'depart', left: 'departed', leaving: 'departing',
  arrive: 'arrive', arrived: 'arrived', arriving: 'arriving',
  travel: 'journey', traveled: 'journeyed', travelling: 'journeying',
  wait: 'tarry', waited: 'tarried', waiting: 'tarrying',
  hurry: 'make haste', hurried: 'made haste', hurrying: 'making haste',
  start: 'commence', started: 'commenced', starting: 'commencing',
  begin: 'commence', began: 'commenced', beginning: 'commencing',
  stop: 'cease', stopped: 'ceased', stopping: 'ceasing',
  finish: 'conclude', finished: 'concluded', finishing: 'concluding',
  end: 'conclude', ended: 'concluded', ending: 'concluding',
  open: 'open', opened: 'opened', opening: 'opening',
  close: 'close', closed: 'closed', closing: 'closing',
  win: 'triumph', won: 'triumphed', winning: 'triumphing',
  lose: 'forfeit', lost: 'forfeited', losing: 'forfeiting',
  play: 'sport', played: 'sported', playing: 'sporting',
  work: 'toil', worked: 'toiled', working: 'toiling',
  learn: 'learn', learned: 'learned', learning: 'learning',
  teach: 'instruct', taught: 'instructed', teaching: 'instructing',
  build: 'construct', built: 'constructed', building: 'constructing',
  write: 'inscribe', wrote: 'inscribed', written: 'inscribed', writing: 'inscribing',
  read: 'read', reading: 'reading',
  carry: 'bear', carried: 'bore', carrying: 'bearing',
  throw: 'hurl', threw: 'hurled', thrown: 'hurled', throwing: 'hurling',
  catch: 'seize', caught: 'seized', catching: 'seizing',
  meet: 'encounter', met: 'encountered', meeting: 'encountering',
  choose: 'choose', chose: 'chose', chosen: 'chosen', choosing: 'choosing',
  create: 'forge', created: 'forged', creating: 'forging',
  destroy: 'raze', destroyed: 'razed', destroying: 'razing',
  change: 'transform', changed: 'transformed', changing: 'transforming',
  remember: 'recall', remembered: 'recalled', remembering: 'recalling',
  forget: 'forget', forgot: 'forgot', forgotten: 'forgot', forgetting: 'forgetting',
  understand: 'comprehend', understood: 'comprehended', understanding: 'comprehending',
  trust: 'trust', trusted: 'trusted', trusting: 'trusting',
  fear: 'dread', feared: 'dreaded', fearing: 'dreading',
  wonder: 'marvel', wondered: 'marveled', wondering: 'marveling',
  pray: 'pray', prayed: 'prayed', praying: 'praying',
  swear: 'swear', swore: 'swore', sworn: 'sworn', swearing: 'swearing',
  promise: 'pledge', promised: 'pledged', promising: 'pledging',
  lie: 'speak falsely', lied: 'spoke falsely', lying: 'speaking falsely',
  steal: 'purloin', stole: 'purloined', stolen: 'purloined', stealing: 'purloining',
  search: 'seek', searched: 'sought', searching: 'seeking',
  seek: 'seek', sought: 'sought', seeking: 'seeking',
  hide: 'conceal', hid: 'concealed', hidden: 'concealed', hiding: 'concealing',
  reveal: 'reveal', revealed: 'revealed', revealing: 'revealing',
  discover: 'discover', discovered: 'discovered', discovering: 'discovering',
  plan: 'devise', planned: 'devised', planning: 'devising',
  prepare: 'prepare', prepared: 'prepared', preparing: 'preparing',
  decide: 'resolve', decided: 'resolved', deciding: 'resolving',
  agree: 'concur', agreed: 'concurred', agreeing: 'concurring',
  disagree: 'dispute', disagreed: 'disputed', disagreeing: 'disputing',
  offer: 'proffer', offered: 'proffered', offering: 'proffering',
  accept: 'accept', accepted: 'accepted', accepting: 'accepting',
  refuse: 'refuse', refused: 'refused', refusing: 'refusing',
  celebrate: 'revel', celebrated: 'reveled', celebrating: 'reveling',
  suffer: 'suffer', suffered: 'suffered', suffering: 'suffering',
  survive: 'survive', survived: 'survived', surviving: 'surviving',
  fail: 'fail', failed: 'failed', failing: 'failing',
  succeed: 'triumph', succeeded: 'triumphed', succeeding: 'triumphing',

  // Adjectives
  good: 'goodly', great: 'mighty', bad: 'ill', terrible: 'dreadful',
  horrible: 'horrid', wonderful: 'wondrous', amazing: 'wondrous',
  awesome: 'magnificent', fantastic: 'magnificent', incredible: 'wondrous',
  beautiful: 'fair', ugly: 'ill-favored', handsome: 'comely',
  cute: 'comely', attractive: 'comely',
  big: 'great', large: 'great', huge: 'vast', enormous: 'vast',
  massive: 'vast', giant: 'colossal', small: 'little', tiny: 'wee',
  short: 'brief', long: 'long', tall: 'tall', wide: 'broad',
  narrow: 'narrow', deep: 'deep', high: 'high', low: 'low',
  thick: 'thick', thin: 'slender', fat: 'stout', thin: 'slender',
  heavy: 'heavy', light: 'light', hard: 'hard', soft: 'soft',
  sharp: 'sharp', dull: 'dull', smooth: 'smooth', rough: 'rough',
  clean: 'clean', dirty: 'soiled', wet: 'wet', dry: 'dry',
  hot: 'hot', cold: 'cold', warm: 'warm', cool: 'cool',
  dark: 'dark', bright: 'bright', loud: 'loud', quiet: 'quiet',
  fast: 'swift', slow: 'slow', old: 'aged', young: 'youthful',
  new: 'new', ancient: 'ancient', modern: 'of this age',
  rich: 'wealthy', poor: 'poor', empty: 'empty', full: 'full',
  free: 'free', busy: 'occupied', ready: 'prepared', safe: 'safe',
  dangerous: 'perilous', easy: 'simple', difficult: 'arduous',
  hard: 'arduous', possible: 'possible', impossible: 'impossible',
  real: 'true', fake: 'false', true: 'true', false: 'false',
  right: 'right', wrong: 'ill', correct: 'correct', incorrect: 'errant',
  happy: 'merry', sad: 'woeful', angry: 'wrathful', scared: 'afeared',
  surprised: 'astonished', confused: 'bewildered', tired: 'weary',
  sick: 'ill', healthy: 'hale', dead: 'deceased', alive: 'living',
  brave: 'valiant', cowardly: 'craven', strong: 'stout', weak: 'feeble',
  wise: 'wise', foolish: 'foolish', clever: 'cunning', stupid: 'witless',
  honest: 'honest', evil: 'wicked', holy: 'sacred', dark: 'dark',
  lost: 'wayward', strange: 'peculiar', weird: 'strange', funny: 'amusing',
  serious: 'grave', important: 'of great import', special: 'singular',
  ordinary: 'common', normal: 'common', usual: 'customary',
  different: 'different', same: 'same', similar: 'alike',
  alone: 'alone', together: 'together', far: 'distant', near: 'nigh',
  next: 'next', last: 'last', first: 'first', only: 'only',
  kind: 'kind', cruel: 'cruel', gentle: 'gentle', rough: 'rough',
  loyal: 'loyal', treacherous: 'treacherous', noble: 'noble',
  humble: 'humble', proud: 'proud', greedy: 'greedy', generous: 'generous',
  patient: 'patient', hasty: 'hasty', careful: 'careful', careless: 'careless',
  powerful: 'mighty', helpless: 'helpless', innocent: 'innocent', guilty: 'guilty',
  lost: 'wayward', found: 'found', open: 'open', closed: 'closed',
  broken: 'broken', fixed: 'mended', hidden: 'hidden', visible: 'visible',
  known: 'known', unknown: 'unknown', possible: 'possible',

  // Numbers
  one: 'one', two: 'two', three: 'three', four: 'four', five: 'five',
  six: 'six', seven: 'seven', eight: 'eight', nine: 'nine', ten: 'ten',
  hundred: 'hundred', thousand: 'thousand', million: 'million',
  first: 'first', second: 'second', third: 'third',
  half: 'half', quarter: 'quarter',

  // Common nouns (misc)
  problem: 'trouble', solution: 'remedy', plan: 'scheme', idea: 'notion',
  question: 'query', answer: 'reply', reason: 'reason', purpose: 'purpose',
  story: 'tale', news: 'tidings', secret: 'secret', truth: 'truth',
  lie: 'falsehood', promise: 'pledge', deal: 'bargain', law: 'law',
  rule: 'decree', order: 'decree', power: 'power', strength: 'strength',
  skill: 'skill', talent: 'gift', luck: 'fortune', chance: 'fortune',
  fate: 'fate', destiny: 'destiny', choice: 'choice', decision: 'resolution',
  war: 'war', battle: 'battle', peace: 'peace', victory: 'victory',
  defeat: 'defeat', honor: 'honour', glory: 'glory', shame: 'shame',
  fear: 'dread', hope: 'hope', love: 'love', hate: 'hatred',
  anger: 'wrath', sadness: 'sorrow', joy: 'joy', pain: 'pain',
  death: 'death', life: 'life', birth: 'birth', marriage: 'marriage',
  journey: 'journey', quest: 'quest', adventure: 'adventure',
  danger: 'peril', risk: 'hazard', reward: 'reward', punishment: 'punishment',
  crime: 'transgression', sin: 'sin', prayer: 'prayer', miracle: 'miracle',
  dream: 'dream', vision: 'vision', memory: 'memory', thought: 'thought',
  word: 'word', name: 'name', title: 'title', rank: 'rank',
  age: 'age', size: 'size', shape: 'shape', color: 'colour',
  light: 'light', darkness: 'darkness', shadow: 'shadow',
  sound: 'sound', song: 'song', music: 'music', dance: 'dance',
  game: 'sport', sport: 'sport', race: 'race', tournament: 'tournament',
  gift: 'gift', treasure: 'treasure', price: 'price', value: 'worth',
  trade: 'trade', work: 'toil', job: 'station', task: 'task',
  language: 'tongue', word: 'word', speech: 'speech', silence: 'silence',
}

// ─── Pass 4: Auto-eth rule ────────────────────────────────────────────────────
// For 3rd person verbs not explicitly in the dictionary

function applyEthRule(word: string, prevWord: string): string {
  const thirds = ['he', 'she', 'it']
  if (!thirds.includes(prevWord.toLowerCase())) return word
  // ends in -es (not -ss-es): goeth, maketh, loveth
  if (word.match(/[^s]es$/) && word.length > 3) {
    return word.slice(0, -2) + 'eth'
  }
  // ends in single -s after vowel or common consonant
  if (word.match(/[aeioulmnrv]s$/) && word.length > 3) {
    return word.slice(0, -1) + 'eth'
  }
  return word
}

// ─── Core translation engine ──────────────────────────────────────────────────

function expandContractions(text: string): string {
  let result = text
  // Sort longest first to prevent partial matches
  const sorted = Object.entries(CONTRACTIONS).sort((a, b) => b[0].length - a[0].length)
  for (const [contraction, expansion] of sorted) {
    const regex = new RegExp(contraction.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
    result = result.replace(regex, expansion)
  }
  return result
}

function applyMultiWord(text: string): string {
  let result = text
  // Sort longest phrases first
  const sorted = Object.entries(MULTI_WORD).sort((a, b) => b[0].length - a[0].length)
  for (const [en, navi] of sorted) {
    const escaped = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    const regex = new RegExp(`\\b${escaped}\\b`, 'gi')
    result = result.replace(regex, (match) => {
      // Preserve original capitalisation of first letter
      return match[0] === match[0].toUpperCase()
        ? navi.charAt(0).toUpperCase() + navi.slice(1)
        : navi
    })
  }
  return result
}

function applyWordMap(text: string): string {
  // Tokenize preserving punctuation and spaces
  return text.replace(/\b[a-zA-Z'-]+\b/g, (word) => {
    const lower = word.toLowerCase()
    const mapped = WORD_MAP[lower]
    if (!mapped) return word
    // Preserve capitalisation
    if (word[0] === word[0].toUpperCase() && word[0] !== word[0].toLowerCase()) {
      return mapped.charAt(0).toUpperCase() + mapped.slice(1)
    }
    return mapped
  })
}

function applyEthPass(text: string): string {
  const tokens = text.split(/(\s+)/)
  const result: string[] = []
  for (let i = 0; i < tokens.length; i++) {
    const tok = tokens[i]
    if (/^\s+$/.test(tok)) { result.push(tok); continue }
    // Find previous non-space token
    let prev = ''
    for (let j = i - 1; j >= 0; j--) {
      if (!/^\s+$/.test(tokens[j])) { prev = tokens[j].replace(/[^a-zA-Z]/g, ''); break }
    }
    result.push(applyEthRule(tok, prev))
  }
  return result.join('')
}

function fixCapitalization(text: string): string {
  // Capitalize first letter of each sentence
  return text.replace(/(^|[.!?]\s+)([a-z])/g, (_, prefix, letter) =>
    prefix + letter.toUpperCase()
  )
}

export function translateToMedieval(text: string): string {
  let result = text
  result = expandContractions(result)
  result = applyMultiWord(result)
  result = applyWordMap(result)
  result = applyEthPass(result)
  result = fixCapitalization(result)
  return result
}

// ─── Examples ─────────────────────────────────────────────────────────────────

const EXAMPLES = [
  { modern: 'Hello, how are you?', label: 'Greeting' },
  { modern: "I don't know what you're thinking.", label: 'Statement' },
  { modern: "She loves him but he doesn't know.", label: '3rd Person' },
  { modern: "We need to hurry up right now!", label: 'Urgency' },
  { modern: "He goes to the market every morning.", label: '-eth Rule' },
  { modern: "Do you want to come with me tonight?", label: 'Invitation' },
  { modern: "I think you should trust me.", label: 'Advice' },
  { modern: "The king is dead. Long live the queen!", label: 'Royal' },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function MedievalEnglishTranslatorTool() {
  const [input, setInput] = useState("Hello! I don't know what you're thinking, but I think you should come with me right now.")
  const [copied, setCopied] = useState(false)

  const output = input.trim() ? translateToMedieval(input) : ''

  function copy() {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="space-y-5 w-full min-w-0">

      {/* Info banner */}
      <div className="flex items-start gap-2 text-xs text-muted-foreground bg-amber-500/5 border border-amber-500/20 rounded-lg px-3 py-2">
        <span>⚔️</span>
        <span>Elizabethan English translator — expands contractions, applies <strong>thou/thee/thy</strong> pronoun system, <strong>-eth/-est</strong> verb conjugation, and 400+ word substitutions.</span>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-semibold mb-2">Modern English</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          rows={4}
          placeholder="Type modern English here…"
          className="w-full px-4 py-3 rounded-xl border bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
        />
        <p className="text-xs text-muted-foreground mt-1">{input.length} characters</p>
      </div>

      {/* Output */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-semibold">Medieval English</label>
          <button onClick={copy} disabled={!output}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              copied ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-primary/10 text-primary hover:bg-primary/20 disabled:opacity-40'
            }`}>
            {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="min-h-[100px] p-4 rounded-xl border bg-muted/5 text-base leading-relaxed">
          {output
            ? <span className="text-foreground font-serif">{output}</span>
            : <span className="text-muted-foreground/50 text-sm italic">Translation will appear here…</span>
          }
        </div>
      </div>

      {/* Quick examples */}
      <div>
        <p className="text-xs font-semibold text-muted-foreground mb-2">Try an example:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {EXAMPLES.map(ex => (
            <button key={ex.label} onClick={() => setInput(ex.modern)}
              className="text-left px-3 py-2 rounded-lg border bg-muted/10 hover:bg-muted/30 hover:border-primary/30 transition-colors">
              <span className="block text-[10px] text-muted-foreground mb-0.5">{ex.label}</span>
              <span className="block text-xs leading-tight">{ex.modern}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Transformation rules reference */}
      <div className="rounded-xl border overflow-hidden">
        <div className="px-4 py-2.5 bg-muted/20 border-b">
          <p className="text-sm font-semibold">Key Transformation Rules</p>
        </div>
        <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x text-xs">
          <div className="p-4 space-y-1.5">
            <p className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Pronouns</p>
            {[
              ['you (subject)', 'thou'],
              ['you (object)', 'thee'],
              ['your', 'thy'],
              ['yours', 'thine'],
              ['yourself', 'thyself'],
            ].map(([m, e]) => (
              <div key={m} className="flex justify-between">
                <span className="text-muted-foreground">{m}</span>
                <span className="font-semibold font-serif">{e}</span>
              </div>
            ))}
          </div>
          <div className="p-4 space-y-1.5">
            <p className="font-semibold text-amber-700 dark:text-amber-400 mb-2">Verb Conjugations</p>
            {[
              ['you are', 'thou art'],
              ['you have', 'thou hast'],
              ['you do', 'thou dost'],
              ['you will', 'thou wilt'],
              ['he/she has', 'hath'],
              ['he/she does', 'doth'],
              ['he/she speaks', 'speaketh'],
              ['he/she goes', 'goeth'],
            ].map(([m, e]) => (
              <div key={m} className="flex justify-between">
                <span className="text-muted-foreground">{m}</span>
                <span className="font-semibold font-serif">{e}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
