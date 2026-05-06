// ── Antonym Words ─────────────────────────────────────────────────────────────
// Purpose-built list for /antonyms pages.
// Weighted toward adjectives & verbs — the parts of speech richest in
// antonym coverage in the Datamuse API (rel_ant endpoint).

// ── Emotional state adjectives ────────────────────────────────────────────────
const EMOTIONS: string[] = [
  'happy', 'sad', 'joyful', 'miserable', 'cheerful', 'gloomy', 'delighted', 'depressed',
  'elated', 'melancholy', 'ecstatic', 'despondent', 'blissful', 'sorrowful', 'content',
  'discontented', 'satisfied', 'dissatisfied', 'pleased', 'displeased', 'grateful',
  'ungrateful', 'thankful', 'resentful', 'hopeful', 'hopeless', 'optimistic', 'pessimistic',
  'confident', 'insecure', 'excited', 'bored', 'enthusiastic', 'apathetic', 'eager',
  'reluctant', 'willing', 'unwilling', 'motivated', 'unmotivated', 'energetic', 'lethargic',
  'passionate', 'indifferent', 'curious', 'incurious', 'interested', 'uninterested',
  'engaged', 'disengaged', 'alert', 'drowsy', 'attentive', 'inattentive', 'focused',
  'distracted', 'calm', 'anxious', 'peaceful', 'restless', 'relaxed', 'stressed',
  'serene', 'troubled', 'tranquil', 'disturbed', 'composed', 'flustered', 'settled',
  'unsettled', 'secure', 'threatened', 'brave', 'cowardly', 'fearless', 'fearful',
  'bold', 'timid', 'courageous', 'afraid', 'daring', 'hesitant', 'adventurous',
  'cautious', 'proud', 'ashamed', 'dignified', 'embarrassed', 'honored', 'humiliated',
  'cherished', 'neglected', 'appreciated', 'unappreciated', 'valued', 'purposeful',
  'fulfilled', 'unfulfilled', 'connected', 'disconnected', 'attached', 'detached',
  'trusting', 'suspicious', 'accepting', 'rejecting', 'forgiving', 'unforgiving',
  'compassionate', 'heartless', 'empathetic', 'caring', 'uncaring', 'loving',
  'affectionate', 'upbeat', 'downcast', 'buoyant', 'liberated', 'constrained',
  'thrilled', 'disappointed', 'exhilarated', 'deflated', 'inspired', 'uninspired',
  'uplifted', 'dejected', 'animated', 'lifeless', 'spirited', 'listless', 'bright',
  'sullen', 'earnest', 'halfhearted', 'zealous', 'indolent', 'vigorous', 'weary',
  'refreshed', 'drained', 'renewed', 'depleted', 'invigorated', 'exhausted',
  'encouraged', 'discouraged', 'emboldened', 'intimidated', 'empowered', 'disempowered',
];

// ── Personality and character adjectives ─────────────────────────────────────
const CHARACTER: string[] = [
  'honest', 'dishonest', 'truthful', 'deceptive', 'sincere', 'insincere', 'genuine',
  'fake', 'authentic', 'counterfeit', 'reliable', 'unreliable', 'trustworthy',
  'untrustworthy', 'dependable', 'undependable', 'loyal', 'disloyal', 'faithful',
  'unfaithful', 'consistent', 'inconsistent', 'fair', 'unfair', 'just', 'unjust',
  'impartial', 'biased', 'objective', 'subjective', 'rational', 'irrational',
  'logical', 'illogical', 'reasonable', 'unreasonable', 'sensible', 'nonsensical',
  'wise', 'foolish', 'intelligent', 'stupid', 'clever', 'obtuse', 'educated',
  'uneducated', 'knowledgeable', 'ignorant', 'experienced', 'inexperienced',
  'skilled', 'unskilled', 'talented', 'untalented', 'capable', 'incapable',
  'competent', 'incompetent', 'efficient', 'inefficient', 'productive', 'unproductive',
  'responsible', 'irresponsible', 'mature', 'immature', 'organized', 'disorganized',
  'disciplined', 'undisciplined', 'decisive', 'indecisive', 'ambitious', 'lazy',
  'hardworking', 'idle', 'diligent', 'negligent', 'dedicated', 'uncommitted',
  'persistent', 'stubborn', 'flexible', 'adaptable', 'rigid', 'creative',
  'unimaginative', 'innovative', 'conventional', 'original', 'ordinary', 'unique',
  'exceptional', 'average', 'outstanding', 'mediocre', 'remarkable', 'unremarkable',
  'extraordinary', 'mundane', 'distinguished', 'obscure', 'prominent', 'unknown',
  'famous', 'anonymous', 'celebrated', 'ignored', 'polite', 'rude', 'courteous',
  'discourteous', 'respectful', 'disrespectful', 'considerate', 'inconsiderate',
  'thoughtful', 'thoughtless', 'mindful', 'careless', 'careful', 'reckless',
  'deliberate', 'hasty', 'patient', 'impatient', 'tolerant', 'intolerant',
  'cooperative', 'uncooperative', 'helpful', 'unhelpful', 'generous', 'selfish',
  'selfless', 'self-centered', 'altruistic', 'egotistical', 'charitable', 'stingy',
  'benevolent', 'malevolent', 'perceptive', 'oblivious', 'aware', 'unaware',
  'reflective', 'measured', 'calculated', 'spontaneous', 'systematic', 'chaotic',
  'orderly', 'structured', 'unstructured', 'methodical', 'haphazard', 'precise',
  'vague', 'assertive', 'submissive', 'dominant', 'meek', 'resolute', 'wavering',
  'determined', 'proactive', 'reactive', 'goal-oriented', 'aimless', 'principled',
  'unprincipled', 'virtuous', 'corrupt', 'conscientious', 'sloppy', 'upright',
  'devious', 'candid', 'secretive', 'guileless', 'cunning', 'modest', 'boastful',
  'humble', 'arrogant', 'diplomatic', 'blunt', 'discreet', 'indiscreet', 'tactful',
  'amiable', 'hostile', 'warm', 'aloof', 'sociable', 'antisocial', 'outgoing',
  'introverted', 'extroverted', 'shy', 'talkative', 'gregarious', 'solitary',
];

// ── Physical state and appearance adjectives ──────────────────────────────────
const PHYSICAL: string[] = [
  'beautiful', 'ugly', 'handsome', 'plain', 'attractive', 'unattractive', 'elegant',
  'awkward', 'graceful', 'clumsy', 'neat', 'messy', 'tidy', 'untidy', 'clean', 'dirty',
  'pure', 'impure', 'fresh', 'stale', 'new', 'old', 'young', 'aged', 'youthful',
  'elderly', 'healthy', 'sick', 'fit', 'unfit', 'strong', 'weak', 'muscular', 'frail',
  'robust', 'feeble', 'agile', 'nimble', 'supple', 'lithe', 'inflexible', 'loose',
  'tight', 'taut', 'slack', 'firm', 'soft', 'hard', 'rough', 'smooth', 'sleek',
  'coarse', 'fine', 'delicate', 'sturdy', 'fragile', 'tough', 'brittle', 'solid',
  'hollow', 'dense', 'sparse', 'thick', 'thin', 'plump', 'lean', 'fat', 'slim',
  'heavy', 'light', 'large', 'small', 'big', 'little', 'huge', 'tiny', 'enormous',
  'miniature', 'massive', 'microscopic', 'giant', 'compact', 'spacious', 'cramped',
  'wide', 'narrow', 'broad', 'tall', 'short', 'long', 'deep', 'shallow', 'high',
  'low', 'raised', 'sunken', 'flat', 'bumpy', 'level', 'uneven', 'straight', 'curved',
  'colorless', 'vibrant', 'faded', 'shiny', 'matte', 'glossy', 'opaque', 'transparent',
  'clear', 'cloudy', 'visible', 'invisible', 'present', 'absent', 'near', 'far',
  'close', 'adjacent', 'remote', 'alive', 'dead', 'awake', 'asleep', 'active',
  'inactive', 'moving', 'still', 'fast', 'slow', 'quick', 'rapid', 'gradual',
  'temporary', 'permanent', 'intact', 'damaged', 'complete', 'incomplete', 'whole',
  'broken', 'perfect', 'imperfect', 'flawless', 'flawed', 'pristine', 'worn',
  'preserved', 'destroyed', 'natural', 'artificial', 'organic', 'synthetic', 'raw',
  'processed', 'polished', 'wet', 'dry', 'moist', 'arid', 'humid', 'sticky',
  'slippery', 'fixed', 'movable', 'mobile', 'immobile', 'stationary', 'crooked',
  'open', 'closed', 'full', 'empty', 'occupied', 'vacant', 'used', 'unused',
  'compressed', 'stretched', 'shrunk', 'erected', 'collapsed', 'assembled',
];

// ── Size, quantity and degree adjectives ──────────────────────────────────────
const SIZE: string[] = [
  'abundant', 'scarce', 'plentiful', 'rare', 'frequent', 'infrequent', 'numerous',
  'infinite', 'finite', 'unlimited', 'limited', 'maximum', 'minimum', 'rich', 'poor',
  'wealthy', 'destitute', 'affluent', 'impoverished', 'prosperous', 'penniless',
  'amplified', 'reduced', 'magnified', 'diminished', 'excessive', 'insufficient',
  'adequate', 'inadequate', 'ample', 'meager', 'total', 'partial', 'entire',
  'barren', 'significant', 'insignificant', 'important', 'unimportant', 'major',
  'minor', 'primary', 'secondary', 'colossal', 'petite', 'bulky', 'slender',
  'stocky', 'lanky', 'stout', 'oversize', 'undersized', 'oversized', 'boundless',
  'particular', 'extreme', 'moderate', 'intense', 'mild', 'severe', 'trivial',
];

// ── Time-related adjectives ────────────────────────────────────────────────────
const TIME_ADJ: string[] = [
  'early', 'late', 'ancient', 'modern', 'current', 'outdated', 'contemporary',
  'historical', 'timely', 'untimely', 'punctual', 'tardy', 'prompt', 'delayed',
  'immediate', 'brief', 'lengthy', 'instant', 'prolonged', 'fleeting', 'lasting',
  'momentary', 'enduring', 'transient', 'volatile', 'dynamic', 'static', 'progressive',
  'regressive', 'advancing', 'retreating', 'developing', 'declining', 'accelerating',
  'decelerating', 'scheduled', 'unscheduled', 'planned', 'impromptu', 'regular',
  'irregular', 'ongoing', 'finished', 'recent', 'distant', 'eventual', 'perpetual',
  'occasional', 'constant', 'continuous', 'intermittent', 'recurring', 'nonrecurring',
  'obsolete', 'up-to-date', 'timeless', 'dated', 'eternal', 'ephemeral', 'abrupt',
];

// ── Positional and spatial adjectives ─────────────────────────────────────────
const POSITION: string[] = [
  'north', 'south', 'east', 'west', 'inside', 'outside', 'interior', 'exterior',
  'internal', 'external', 'central', 'peripheral', 'local', 'global', 'domestic',
  'foreign', 'urban', 'rural', 'coastal', 'inland', 'forward', 'backward', 'ahead',
  'behind', 'leading', 'following', 'preceding', 'succeeding', 'upper', 'lower',
  'outer', 'inner', 'foreground', 'background', 'concealed', 'exposed', 'sheltered',
  'horizontal', 'vertical', 'parallel', 'perpendicular', 'ascending', 'descending',
  'upward', 'downward', 'inward', 'outward', 'northward', 'southward', 'lateral',
];

// ── Quality, value and correctness adjectives ─────────────────────────────────
const QUALITY: string[] = [
  'good', 'bad', 'excellent', 'terrible', 'great', 'awful', 'wonderful', 'horrible',
  'fantastic', 'dreadful', 'superb', 'inferior', 'superior', 'premium', 'basic',
  'inaccurate', 'obvious', 'subtle', 'straightforward', 'complex', 'simple',
  'complicated', 'easy', 'difficult', 'effortless', 'challenging', 'stressful',
  'comfortable', 'uncomfortable', 'pleasant', 'unpleasant', 'enjoyable', 'satisfying',
  'unsatisfying', 'rewarding', 'meaningful', 'meaningless', 'useful', 'useless',
  'beneficial', 'detrimental', 'positive', 'negative', 'constructive', 'destructive',
  'successful', 'unsuccessful', 'functional', 'dysfunctional', 'available',
  'unavailable', 'obtainable', 'unobtainable', 'achievable', 'unachievable',
  'possible', 'impossible', 'feasible', 'infeasible', 'practical', 'impractical',
  'realistic', 'unrealistic', 'valid', 'invalid', 'legitimate', 'illegitimate',
  'appropriate', 'inappropriate', 'suitable', 'unsuitable', 'relevant', 'irrelevant',
  'applicable', 'acceptable', 'unacceptable', 'worthy', 'unworthy', 'deserving',
  'undeserving', 'valuable', 'worthless', 'precious', 'cheap', 'expensive',
  'warranted', 'fitting', 'unfitting', 'credible', 'incredible', 'plausible',
  'unverified', 'certified', 'uncertified', 'approved', 'rejected', 'endorsed',
];

// ── Moral and ethical adjectives ─────────────────────────────────────────────
const MORAL: string[] = [
  'moral', 'immoral', 'ethical', 'unethical', 'righteous', 'sinful', 'noble',
  'ignoble', 'honorable', 'dishonorable', 'decent', 'indecent', 'innocent', 'guilty',
  'blameless', 'culpable', 'lawful', 'unlawful', 'legal', 'illegal', 'permitted',
  'forbidden', 'allowed', 'prohibited', 'authorized', 'unauthorized', 'respectable',
  'disreputable', 'sacred', 'profane', 'holy', 'unholy', 'blessed', 'cursed',
  'spiritual', 'worldly', 'pious', 'impious', 'devout', 'irreverent', 'remorseful',
  'cruel', 'gentle', 'harsh', 'kind', 'unkind', 'benign', 'malignant',
];

// ── Mental and intellectual adjectives ────────────────────────────────────────
const INTELLECTUAL: string[] = [
  'smart', 'dumb', 'gifted', 'unintelligent', 'cerebral', 'instinctive', 'analytical',
  'illiterate', 'qualified', 'unqualified', 'advanced', 'beginner', 'proficient',
  'keen', 'quick-witted', 'slow-witted', 'astute', 'naive', 'sophisticated',
  'simple-minded', 'discerning', 'undiscerning', 'skeptical', 'credulous', 'inquisitive',
  'studious', 'perfunctory', 'meticulous', 'literal', 'figurative', 'abstract',
];

// ── Social and relational adjectives ─────────────────────────────────────────
const SOCIAL: string[] = [
  'welcoming', 'unwelcoming', 'approachable', 'unapproachable', 'responsive',
  'unresponsive', 'communicative', 'uncommunicative', 'expressive', 'reserved',
  'vocal', 'silent', 'articulate', 'inarticulate', 'eloquent', 'fluent', 'professional',
  'nonstandard', 'unconventional', 'orthodox', 'heterodox', 'mainstream', 'alternative',
  'dependent', 'self-sufficient', 'reliant', 'individual', 'collective', 'personal',
  'democratic', 'authoritarian', 'equal', 'unequal', 'equitable', 'inequitable',
  'unifying', 'divisive', 'integrative', 'segregating', 'public', 'private', 'national',
  'aggressive', 'harmonious', 'discordant', 'united', 'divided', 'allied', 'opposed',
  'empowering', 'controlling', 'liberating', 'oppressive', 'enabling', 'disabling',
];

// ── Sensory adjectives ────────────────────────────────────────────────────────
const SENSORY: string[] = [
  'tart', 'tasty', 'tasteless', 'delicious', 'disgusting', 'fragrant', 'foul',
  'overpowering', 'refreshing', 'stifling', 'soothing', 'irritating', 'acidic',
  'alkaline', 'crispy', 'soggy', 'crunchy', 'chewy', 'tender', 'pale', 'saturated',
];

// ── Health and condition adjectives ───────────────────────────────────────────
const HEALTH: string[] = [
  'nutritious', 'unhealthy', 'treated', 'untreated', 'medicated', 'protected',
  'at-risk', 'toxic', 'nontoxic', 'sterile', 'healed', 'injured', 'recovered',
  'wounded', 'normal', 'abnormal', 'typical', 'atypical', 'sufficient', 'lacking',
];

// ── Economic and financial adjectives ────────────────────────────────────────
const ECONOMIC: string[] = [
  'economical', 'high-end', 'low-end', 'taxed', 'untaxed', 'regulated', 'unregulated',
  'expanding', 'contracting', 'liquid', 'illiquid', 'solvent', 'insolvent',
  'creditworthy', 'bankrupt', 'employed', 'unemployed', 'paid', 'unpaid',
  'compensated', 'uncompensated', 'taxable', 'tax-exempt', 'prohibitive', 'frugal',
];

// ── Environmental adjectives ───────────────────────────────────────────────────
const ENVIRONMENT: string[] = [
  'free-range', 'indoor', 'outdoor', 'developed', 'undeveloped', 'deforested',
];

// ── Action verbs with clear antonyms ──────────────────────────────────────────
const VERBS: string[] = [
  'accept', 'reject', 'add', 'remove', 'advance', 'retreat', 'allow', 'forbid',
  'answer', 'appear', 'disappear', 'arrive', 'depart', 'ascend', 'descend',
  'attack', 'defend', 'attract', 'repel', 'begin', 'end', 'believe', 'doubt',
  'bless', 'curse', 'borrow', 'lend', 'build', 'destroy', 'buy', 'sell', 'catch',
  'throw', 'celebrate', 'mourn', 'clarify', 'confuse', 'combine', 'separate',
  'come', 'go', 'compress', 'expand', 'connect', 'disconnect', 'construct',
  'demolish', 'continue', 'stop', 'cooperate', 'compete', 'create', 'erase',
  'decrease', 'increase', 'deposit', 'withdraw', 'divide', 'multiply', 'earn',
  'spend', 'encourage', 'discourage', 'enter', 'exit', 'fail', 'succeed', 'fill',
  'blame', 'freeze', 'melt', 'gain', 'give', 'take', 'grow', 'shrink', 'help',
  'hinder', 'hide', 'reveal', 'hire', 'fire', 'honor', 'disgrace', 'include',
  'exclude', 'inspire', 'invite', 'join', 'keep', 'discard', 'laugh', 'cry',
  'learn', 'teach', 'lift', 'drop', 'like', 'dislike', 'listen', 'ignore',
  'break', 'merge', 'split', 'obey', 'disobey', 'produce', 'consume', 'protect',
  'harm', 'pull', 'push', 'punish', 'reward', 'repair', 'damage', 'rise', 'fall',
  'save', 'waste', 'send', 'receive', 'start', 'finish', 'strengthen', 'weaken',
  'rest', 'accelerate', 'decelerate', 'activate', 'deactivate', 'agree', 'disagree',
  'degrade', 'upgrade', 'delay', 'expedite', 'educate', 'mislead', 'elevate',
  'demote', 'empower', 'enable', 'disable', 'enlighten', 'enrich', 'impoverish',
  'establish', 'abolish', 'excite', 'bore', 'extend', 'shorten', 'generate',
  'eliminate', 'grant', 'harden', 'soften', 'heal', 'illuminate', 'improve',
  'worsen', 'initiate', 'conclude', 'insert', 'integrate', 'isolate', 'intensify',
  'legalize', 'criminalize', 'liberate', 'imprison', 'maintain', 'neglect',
  'maximize', 'minimize', 'nourish', 'starve', 'organize', 'disorganize', 'permit',
  'prohibit', 'preserve', 'promote', 'provide', 'withhold', 'rebuild', 'recognize',
  'recover', 'reduce', 'reinforce', 'release', 'capture', 'resolve', 'complicate',
  'support', 'oppose', 'tighten', 'loosen', 'validate', 'invalidate', 'value',
  'develop', 'deteriorate', 'emerge', 'surface', 'sink', 'flourish', 'wither',
  'dissolve', 'dismantle', 'launch', 'cancel', 'abort', 'introduce', 'propose',
  'refuse', 'acknowledge', 'admit', 'conceal', 'confess', 'display', 'share',
  'embrace', 'avoid', 'seek', 'flee', 'pursue', 'abandon', 'absorb', 'emit',
  'assemble', 'disassemble', 'pack', 'unpack', 'load', 'unload', 'install',
  'uninstall', 'publish', 'retract', 'broadcast', 'silence', 'amplify', 'muffle',
  'reclaim', 'commission', 'decommission', 'certify', 'decertify', 'register',
];

// ── Nouns with clear antonyms (high search volume) ────────────────────────────
const NOUNS_WITH_ANTONYMS: string[] = [
  'advantage', 'disadvantage', 'beginning', 'ending', 'birth', 'death', 'cause',
  'courage', 'cowardice', 'generosity', 'greed', 'kindness', 'cruelty', 'patience',
  'impatience', 'honesty', 'dishonesty', 'loyalty', 'betrayal', 'freedom', 'slavery',
  'health', 'illness', 'beauty', 'ugliness', 'intelligence', 'stupidity', 'order',
  'rejection', 'permission', 'prohibition', 'agreement', 'disagreement', 'cooperation',
  'teacher', 'student', 'master', 'servant', 'employer', 'employee', 'expert',
  'summit', 'valley', 'peak', 'trough', 'origin', 'destination', 'source', 'result',
  'opening', 'morning', 'evening', 'sunrise', 'sunset', 'summer', 'winter', 'past',
  'future', 'offense', 'defense', 'asset', 'liability', 'income', 'expense',
  'benefit', 'drawback', 'merit', 'flaw', 'virtue', 'vice', 'clarity', 'confusion',
  'unity', 'division', 'inclusion', 'exclusion', 'equality', 'inequality', 'justice',
];

// ── Extended vocabulary — adjectives common in GRE/SAT prep and everyday writing
const EXTENDED: string[] = [
  'assiduous', 'attainable', 'unattainable', 'audacious', 'austere', 'lavish',
];

// ── Appearance and style adjectives ──────────────────────────────────────────
const APPEARANCE: string[] = [
  'adorned', 'unadorned', 'embellished', 'stripped', 'decorated', 'stark',
];

// ── Academic and intellectual vocabulary ─────────────────────────────────────
const ACADEMIC: string[] = [
];

// ── Professional and work-related adjectives ──────────────────────────────────
const PROFESSIONAL: string[] = [
];

// ── Communication adjectives ───────────────────────────────────────────────────
const COMMUNICATION: string[] = [
];

// ── Weather and nature adjectives ─────────────────────────────────────────────
const WEATHER: string[] = [
];

// ── Motion and energy adjectives ─────────────────────────────────────────────
const MOTION: string[] = [
];

// ── Additional high-value adjective pairs ─────────────────────────────────────
const EXTRA2: string[] = [
];

// ── Legal, formal and civic adjectives ────────────────────────────────────────
const LEGAL: string[] = [
  'disclosed', 'withheld', 'documented', 'undocumented', 'registered', 'unregistered',
];

// ── Technology and digital adjectives ─────────────────────────────────────────
const TECHNOLOGY: string[] = [
  'digital', 'analog', 'online', 'offline', 'encrypted', 'unencrypted', 'open-source',
  'installed', 'uninstalled', 'activated', 'deactivated', 'enabled', 'disabled',
];

// ── Food and taste adjectives ──────────────────────────────────────────────────
const FOOD: string[] = [
];

// ── Relationship and social bond adjectives ────────────────────────────────────
const RELATIONSHIP: string[] = [
];

// ── Specific verb forms not yet covered ───────────────────────────────────────
const VERBS2: string[] = [
];

// ── Final vocabulary batch — adjectives commonly searched for antonyms ────────
const FINAL: string[] = [
];

// ── SAT/GRE vocabulary pairs commonly searched ────────────────────────────────
const SAT_GRE: string[] = [
];

// ── Merge and deduplicate ─────────────────────────────────────────────────────
export const ANTONYM_WORDS: string[] = [
  ...new Set([
    ...EMOTIONS, ...CHARACTER, ...PHYSICAL, ...SIZE, ...TIME_ADJ, ...POSITION,
    ...QUALITY, ...MORAL, ...INTELLECTUAL, ...SOCIAL, ...SENSORY, ...HEALTH,
    ...ECONOMIC, ...ENVIRONMENT, ...VERBS, ...NOUNS_WITH_ANTONYMS, ...EXTENDED,
    ...APPEARANCE, ...ACADEMIC, ...PROFESSIONAL, ...COMMUNICATION, ...WEATHER,
    ...MOTION, ...EXTRA2, ...LEGAL, ...TECHNOLOGY, ...FOOD, ...RELATIONSHIP,
    ...VERBS2, ...FINAL, ...SAT_GRE,
    // Final top-up to clear 3,000
  ].map((w) => w.toLowerCase().trim())),
].sort()
