import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, ChevronRight, BookOpen, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BreadcrumbSchema } from '@/components/breadcrumb-schema'
import { WebPageSchema } from '@/components/webpage-schema'

export const metadata: Metadata = {
  title: 'British vs American English — 200+ Word Differences Explained',
  description: 'Complete guide to British vs American English differences. From boot/trunk and biscuit/cookie to lorry/truck and chemist/drugstore — 200+ words compared with context and usage.',
  keywords: ['british vs american english', 'british english vs american english', 'uk vs us english words', 'british english words', 'american english words', 'english differences', 'british american vocabulary', 'uk us spelling differences', 'british slang vs american slang', 'english dialect differences'],
  alternates: { canonical: 'https://nagritranslate.com/phrases/british-vs-american-english' },
  openGraph: {
    title: 'British vs American English — 200+ Word Differences',
    description: '200+ British and American English word pairs compared by category — food, transport, clothing, home, and more.',
    url: 'https://nagritranslate.com/phrases/british-vs-american-english',
  },
}

interface Pair { british: string; american: string; category: string; note?: string }

const PAIRS: Pair[] = [
  // Food & Drink
  { british: 'Biscuit', american: 'Cookie', category: 'Food', note: 'British "biscuit" is hard/crispy; American "biscuit" is a soft bread roll' },
  { british: 'Chips', american: 'French fries', category: 'Food', note: '"Chips" in the US means crisps' },
  { british: 'Crisps', american: 'Chips / Potato chips', category: 'Food' },
  { british: 'Jam', american: 'Jelly', category: 'Food', note: 'British "jelly" is what Americans call "Jell-O"' },
  { british: 'Jelly', american: 'Jell-O / Gelatin', category: 'Food' },
  { british: 'Aubergine', american: 'Eggplant', category: 'Food' },
  { british: 'Courgette', american: 'Zucchini', category: 'Food' },
  { british: 'Rocket', american: 'Arugula', category: 'Food' },
  { british: 'Coriander', american: 'Cilantro', category: 'Food' },
  { british: 'Swede', american: 'Rutabaga', category: 'Food' },
  { british: 'Mangetout', american: 'Snow peas', category: 'Food' },
  { british: 'Spring onion', american: 'Green onion / Scallion', category: 'Food' },
  { british: 'Pudding', american: 'Dessert (generic)', category: 'Food', note: '"Pudding" in the UK means any dessert, not just the creamy dish' },
  { british: 'Takeaway', american: 'Takeout', category: 'Food' },
  { british: 'Tin (of beans)', american: 'Can (of beans)', category: 'Food' },
  { british: 'Mince', american: 'Ground beef', category: 'Food' },
  { british: 'Fizzy drink', american: 'Soda / Pop', category: 'Food' },
  { british: 'Squash (drink)', american: 'Juice concentrate', category: 'Food' },
  { british: 'Full stop', american: 'Period', category: 'Language' },

  // Transport
  { british: 'Boot', american: 'Trunk', category: 'Transport', note: 'The storage space at the back of a car' },
  { british: 'Bonnet', american: 'Hood', category: 'Transport', note: 'The cover over the car engine' },
  { british: 'Lorry', american: 'Truck', category: 'Transport' },
  { british: 'Motorway', american: 'Highway / Freeway', category: 'Transport' },
  { british: 'Caravan', american: 'Trailer / RV', category: 'Transport' },
  { british: 'Petrol', american: 'Gas / Gasoline', category: 'Transport' },
  { british: 'Windscreen', american: 'Windshield', category: 'Transport' },
  { british: 'Indicator', american: 'Turn signal / Blinker', category: 'Transport' },
  { british: 'Car park', american: 'Parking lot', category: 'Transport' },
  { british: 'Zebra crossing', american: 'Crosswalk', category: 'Transport' },
  { british: 'Underground / Tube', american: 'Subway', category: 'Transport' },
  { british: 'Tram', american: 'Streetcar / Trolley', category: 'Transport' },
  { british: 'Coach', american: 'Bus (long-distance)', category: 'Transport' },
  { british: 'Pavement', american: 'Sidewalk', category: 'Transport' },
  { british: 'Dual carriageway', american: 'Divided highway', category: 'Transport' },
  { british: 'Diversion', american: 'Detour', category: 'Transport' },
  { british: 'Roundabout', american: 'Traffic circle / Rotary', category: 'Transport' },
  { british: 'Flyover', american: 'Overpass', category: 'Transport' },

  // Home & Building
  { british: 'Flat', american: 'Apartment', category: 'Home' },
  { british: 'Ground floor', american: 'First floor', category: 'Home', note: 'British "first floor" = American "second floor"' },
  { british: 'Lift', american: 'Elevator', category: 'Home' },
  { british: 'Tap', american: 'Faucet', category: 'Home' },
  { british: 'Rubbish bin', american: 'Trash can / Garbage can', category: 'Home' },
  { british: 'Dustbin', american: 'Trash can', category: 'Home' },
  { british: 'Garden', american: 'Yard / Backyard', category: 'Home' },
  { british: 'Wardrobe', american: 'Closet', category: 'Home' },
  { british: 'Curtains', american: 'Drapes / Drapes', category: 'Home' },
  { british: 'Skirting board', american: 'Baseboard', category: 'Home' },
  { british: 'Letterbox', american: 'Mailbox', category: 'Home' },
  { british: 'Estate agent', american: 'Real estate agent / Realtor', category: 'Home' },
  { british: 'Solicitor', american: 'Lawyer / Attorney', category: 'Home' },
  { british: 'Post', american: 'Mail', category: 'Home' },
  { british: 'Postcode', american: 'ZIP code', category: 'Home' },

  // Clothing
  { british: 'Jumper', american: 'Sweater', category: 'Clothing' },
  { british: 'Waistcoat', american: 'Vest', category: 'Clothing' },
  { british: 'Vest', american: 'Undershirt', category: 'Clothing' },
  { british: 'Trainers', american: 'Sneakers', category: 'Clothing' },
  { british: 'Trousers', american: 'Pants', category: 'Clothing' },
  { british: 'Pants / Knickers', american: 'Underwear', category: 'Clothing' },
  { british: 'Braces', american: 'Suspenders', category: 'Clothing' },
  { british: 'Suspenders', american: 'Garter belt', category: 'Clothing' },
  { british: 'Mackintosh / Mac', american: 'Raincoat', category: 'Clothing' },
  { british: 'Dressing gown', american: 'Bathrobe', category: 'Clothing' },
  { british: 'Nappy', american: 'Diaper', category: 'Clothing' },
  { british: 'Dummy', american: 'Pacifier', category: 'Baby' },
  { british: 'Pram / Pushchair', american: 'Stroller / Baby carriage', category: 'Baby' },

  // Work & School
  { british: 'CV', american: 'Résumé', category: 'Work' },
  { british: 'Headmaster / Headmistress', american: 'Principal', category: 'School' },
  { british: 'Maths', american: 'Math', category: 'School' },
  { british: 'Rubber', american: 'Eraser', category: 'School' },
  { british: 'Sellotape', american: 'Scotch tape', category: 'School' },
  { british: 'Holiday', american: 'Vacation', category: 'Work', note: 'British "holiday" = going away; "bank holiday" = US "public holiday"' },
  { british: 'Annual leave', american: 'PTO / Vacation time', category: 'Work' },
  { british: 'Redundant', american: 'Laid off', category: 'Work' },
  { british: 'Mobile (phone)', american: 'Cell phone', category: 'Tech' },

  // Medical
  { british: 'Chemist / Pharmacy', american: 'Drugstore / Pharmacy', category: 'Medical' },
  { british: 'GP (General Practitioner)', american: 'Primary care doctor', category: 'Medical' },
  { british: 'Casualty / A&E', american: 'Emergency Room (ER)', category: 'Medical' },
  { british: 'Plaster', american: 'Band-Aid', category: 'Medical' },
  { british: 'Paracetamol', american: 'Acetaminophen / Tylenol', category: 'Medical' },
  { british: 'Anaesthetic', american: 'Anesthetic', category: 'Medical' },

  // Everyday / Slang
  { british: 'Cheeky', american: '(no exact equivalent — rude but playful)', category: 'Slang' },
  { british: 'Gutted', american: 'Devastated / Really bummed', category: 'Slang' },
  { british: 'Knackered', american: 'Exhausted / Beat', category: 'Slang' },
  { british: 'Brilliant / Brill', american: 'Awesome / Amazing', category: 'Slang' },
  { british: 'Rubbish', american: 'Garbage / Trash (also: nonsense)', category: 'Slang' },
  { british: 'Fancy (verb)', american: 'Want / Like (e.g. "I fancy a coffee")', category: 'Slang' },
  { british: 'Dodgy', american: 'Sketchy / Shady', category: 'Slang' },
  { british: 'Chuffed', american: 'Pleased / Thrilled', category: 'Slang' },
  { british: 'Peckish', american: 'A little hungry', category: 'Slang' },
  { british: 'Quid', american: 'Buck (1 pound = 1 dollar equivalent)', category: 'Slang' },
  { british: 'Fortnight', american: 'Two weeks', category: 'Time' },
  { british: 'Bloke', american: 'Guy / Dude', category: 'Slang' },
  { british: 'Loo / WC / Toilet', american: 'Bathroom / Restroom', category: 'Slang' },
  { british: 'Queue', american: 'Line (to queue = to wait in line)', category: 'Slang' },
  { british: 'Ring (someone)', american: 'Call (someone)', category: 'Slang' },

  // Spelling differences
  { british: 'Colour', american: 'Color', category: 'Spelling' },
  { british: 'Flavour', american: 'Flavor', category: 'Spelling' },
  { british: 'Centre', american: 'Center', category: 'Spelling' },
  { british: 'Theatre', american: 'Theater', category: 'Spelling' },
  { british: 'Catalogue', american: 'Catalog', category: 'Spelling' },
  { british: 'Recognise', american: 'Recognize', category: 'Spelling' },
  { british: 'Travelling', american: 'Traveling', category: 'Spelling' },
  { british: 'Defence', american: 'Defense', category: 'Spelling' },
  { british: 'Programme', american: 'Program', category: 'Spelling' },
  { british: 'Licence (noun)', american: 'License', category: 'Spelling' },
  { british: 'Tyre', american: 'Tire', category: 'Spelling' },
  { british: 'Grey', american: 'Gray', category: 'Spelling' },
  { british: 'Mould', american: 'Mold', category: 'Spelling' },
  { british: 'Cosy', american: 'Cozy', category: 'Spelling' },
  { british: 'Judgement', american: 'Judgment', category: 'Spelling' },
  { british: 'Ageing', american: 'Aging', category: 'Spelling' },
  { british: 'Aluminium', american: 'Aluminum', category: 'Spelling' },
  { british: 'Aeroplane', american: 'Airplane', category: 'Spelling' },
  { british: 'Behaviour', american: 'Behavior', category: 'Spelling' },
  { british: 'Cheque', american: 'Check', category: 'Spelling' },
  { british: 'Connexion / Connection', american: 'Connection', category: 'Spelling' },
  { british: 'Draught', american: 'Draft', category: 'Spelling' },
  { british: 'Enquire', american: 'Inquire', category: 'Spelling' },
  { british: 'Favour', american: 'Favor', category: 'Spelling' },
  { british: 'Fibre', american: 'Fiber', category: 'Spelling' },
  { british: 'Glamour', american: 'Glamor', category: 'Spelling' },
  { british: 'Harbour', american: 'Harbor', category: 'Spelling' },
  { british: 'Honour', american: 'Honor', category: 'Spelling' },
  { british: 'Humour', american: 'Humor', category: 'Spelling' },
  { british: 'Jewellery', american: 'Jewelry', category: 'Spelling' },
  { british: 'Labour', american: 'Labor', category: 'Spelling' },
  { british: 'Neighbour', american: 'Neighbor', category: 'Spelling' },
  { british: 'Practise (verb)', american: 'Practice (verb & noun)', category: 'Spelling' },
  { british: 'Rumour', american: 'Rumor', category: 'Spelling' },
  { british: 'Saviour', american: 'Savior', category: 'Spelling' },
  { british: 'Skilful', american: 'Skillful', category: 'Spelling' },
  { british: 'Specialise', american: 'Specialize', category: 'Spelling' },
  { british: 'Storey (building floor)', american: 'Story', category: 'Spelling' },
  { british: 'Sulphur', american: 'Sulfur', category: 'Spelling' },
  { british: 'Vapour', american: 'Vapor', category: 'Spelling' },

  // Food (extra)
  { british: 'Jacket potato', american: 'Baked potato', category: 'Food' },
  { british: 'Prawns', american: 'Shrimp', category: 'Food' },
  { british: 'Broad beans', american: 'Fava beans', category: 'Food' },
  { british: 'Porridge', american: 'Oatmeal', category: 'Food' },
  { british: 'Double cream', american: 'Heavy cream', category: 'Food' },
  { british: 'Icing sugar', american: 'Powdered sugar / Confectioners\' sugar', category: 'Food' },
  { british: 'Caster sugar', american: 'Superfine sugar', category: 'Food' },
  { british: 'Treacle', american: 'Molasses', category: 'Food' },
  { british: 'Hundreds and thousands', american: 'Sprinkles', category: 'Food' },
  { british: 'Starter', american: 'Appetizer', category: 'Food' },
  { british: 'Desiccated coconut', american: 'Shredded coconut', category: 'Food' },
  { british: 'Scone', american: 'Biscuit (Southern US)', category: 'Food', note: 'The British scone is denser; American biscuits are soft and buttery' },
  { british: 'Digestive biscuit', american: 'Graham cracker (approximate)', category: 'Food' },
  { british: 'Lemonade (fizzy)', american: 'Sprite / 7UP', category: 'Food', note: 'British "lemonade" is fizzy; American "lemonade" is still and made from lemons' },
  { british: 'Bap / Cob / Roll', american: 'Sandwich roll / Bun', category: 'Food' },
  { british: 'Butty', american: 'Sandwich', category: 'Food', note: 'Mainly Northern English — "bacon butty", "chip butty"' },
  { british: 'Spotted dick', american: 'Spotted pudding / Suet cake', category: 'Food', note: 'A classic British steamed pudding with currants — the name raises eyebrows in the US' },
  { british: 'Afters', american: 'Dessert', category: 'Food' },

  // Transport (extra)
  { british: 'Articulated lorry', american: 'Semi-truck / 18-wheeler', category: 'Transport' },
  { british: 'Number plate', american: 'License plate', category: 'Transport' },
  { british: 'Overtake', american: 'Pass', category: 'Transport' },
  { british: 'Give way', american: 'Yield', category: 'Transport' },
  { british: 'Reversing', american: 'Backing up', category: 'Transport' },
  { british: 'Sat nav', american: 'GPS', category: 'Transport' },
  { british: 'Cul-de-sac', american: 'Dead end / Cul-de-sac', category: 'Transport' },
  { british: 'Lay-by', american: 'Rest stop / Pull-off', category: 'Transport' },
  { british: 'Overtaking lane', american: 'Fast lane / Passing lane', category: 'Transport' },
  { british: 'Dodgems', american: 'Bumper cars', category: 'Transport' },
  { british: 'Hire car', american: 'Rental car', category: 'Transport' },
  { british: 'Return ticket', american: 'Round-trip ticket', category: 'Transport' },
  { british: 'Single ticket', american: 'One-way ticket', category: 'Transport' },
  { british: 'Pushbike', american: 'Bicycle / Bike', category: 'Transport' },

  // Home (extra)
  { british: 'Cooker', american: 'Stove / Range', category: 'Home' },
  { british: 'Hob', american: 'Stovetop / Burner', category: 'Home' },
  { british: 'Washing-up liquid', american: 'Dish soap', category: 'Home' },
  { british: 'Hoover', american: 'Vacuum cleaner', category: 'Home', note: '"Hoover" is a brand name that became a generic verb in British English' },
  { british: 'Flannel', american: 'Washcloth', category: 'Home' },
  { british: 'Drawing pin', american: 'Thumbtack / Pushpin', category: 'Home' },
  { british: 'Plug socket', american: 'Outlet / Power outlet', category: 'Home' },
  { british: 'Airing cupboard', american: 'Linen closet', category: 'Home', note: 'British homes have a cupboard with a hot water cylinder to dry towels/sheets' },
  { british: 'Loft', american: 'Attic', category: 'Home' },
  { british: 'Torch', american: 'Flashlight', category: 'Home' },
  { british: 'Estate / Housing estate', american: 'Neighborhood / Subdivision', category: 'Home' },
  { british: 'Semi-detached house', american: 'Duplex', category: 'Home' },
  { british: 'Terraced house', american: 'Townhouse / Row house', category: 'Home' },
  { british: 'Detached house', american: 'Single-family home', category: 'Home' },
  { british: 'Bungalow', american: 'Ranch house', category: 'Home' },
  { british: 'Conservatory', american: 'Sunroom / Florida room', category: 'Home' },
  { british: 'Patio doors', american: 'Sliding glass doors', category: 'Home' },
  { british: 'Mains (electricity)', american: 'The grid / Power lines', category: 'Home' },

  // Clothing (extra)
  { british: 'Dungarees', american: 'Overalls', category: 'Clothing' },
  { british: 'Swimming costume / Swimsuit', american: 'Bathing suit / Swimsuit', category: 'Clothing' },
  { british: 'Polo neck', american: 'Turtleneck', category: 'Clothing' },
  { british: 'Anorak', american: 'Windbreaker', category: 'Clothing' },
  { british: 'Wellies / Wellington boots', american: 'Rain boots / Rubber boots', category: 'Clothing' },
  { british: 'Plimsolls', american: 'Canvas sneakers', category: 'Clothing' },
  { british: 'Tights', american: 'Pantyhose / Stockings', category: 'Clothing' },
  { british: 'Handbag', american: 'Purse', category: 'Clothing' },
  { british: 'Fringe', american: 'Bangs', category: 'Clothing', note: 'Refers to the hair style' },
  { british: 'Pinafore', american: 'Jumper dress / Pinafore', category: 'Clothing' },
  { british: 'Cagoule', american: 'Rain jacket / Windbreaker', category: 'Clothing' },
  { british: 'Baseball cap', american: 'Cap / Hat', category: 'Clothing' },

  // School (extra)
  { british: 'Sixth form', american: '11th–12th grade / Senior year', category: 'School', note: 'British students stay in "sixth form" before university' },
  { british: 'University', american: 'College', category: 'School', note: 'Americans often say "college" to mean any higher education institution' },
  { british: 'Marking', american: 'Grading', category: 'School' },
  { british: 'Revision', american: 'Studying (for exams)', category: 'School' },
  { british: 'Coursework', american: 'Homework / Assignments', category: 'School' },
  { british: 'State school', american: 'Public school', category: 'School', note: 'A British "public school" is actually an elite private school — the opposite of the US meaning' },
  { british: 'Invigilator', american: 'Proctor', category: 'School' },
  { british: 'Timetable', american: 'Schedule', category: 'School' },
  { british: 'Form teacher', american: 'Homeroom teacher', category: 'School' },
  { british: 'Primary school', american: 'Elementary school', category: 'School' },
  { british: 'Secondary school', american: 'Middle school + High school', category: 'School' },
  { british: 'Dinner lady', american: 'Lunch lady', category: 'School' },

  // Work (extra)
  { british: 'Fortnight\'s notice', american: 'Two weeks\' notice', category: 'Work' },
  { british: 'Letting agent', american: 'Rental agency / Property manager', category: 'Work' },
  { british: 'Pensioner', american: 'Retiree / Senior', category: 'Work' },
  { british: 'Trade union', american: 'Labor union', category: 'Work' },

  // Medical (extra)
  { british: 'Consultant', american: 'Specialist', category: 'Medical' },
  { british: 'Surgery (doctor\'s practice)', american: 'Doctor\'s office', category: 'Medical', note: 'In the UK, "going to surgery" means visiting your GP\'s office, not having an operation' },
  { british: 'Optician', american: 'Optometrist', category: 'Medical' },
  { british: 'Physiotherapist', american: 'Physical therapist', category: 'Medical' },
  { british: 'Antiseptic cream', american: 'Antibiotic ointment / Neosporin', category: 'Medical' },
  { british: 'Cotton wool', american: 'Cotton balls / Cotton', category: 'Medical' },
  { british: 'Ibuprofen / Nurofen', american: 'Advil / Ibuprofen', category: 'Medical' },

  // Slang (extra)
  { british: 'Gobsmacked', american: 'Blown away / Speechless', category: 'Slang' },
  { british: 'Proper', american: 'Really / Very', category: 'Slang', note: '"That\'s proper good" = "That\'s really good"' },
  { british: 'Banter', american: 'Playful teasing / Trash talk', category: 'Slang' },
  { british: 'Cheers', american: 'Thanks / Thank you', category: 'Slang' },
  { british: 'Sorted', american: 'All good / Handled / Done', category: 'Slang' },
  { british: 'Ace', american: 'Great / Awesome', category: 'Slang' },
  { british: 'Bodge', american: 'Botch / Hack job', category: 'Slang' },
  { british: 'Faff', american: 'Fuss around / Waste time', category: 'Slang' },
  { british: 'Fit', american: 'Attractive / Hot', category: 'Slang' },
  { british: 'Sacked', american: 'Fired', category: 'Slang' },
  { british: 'Skive', american: 'Skip (work/school)', category: 'Slang' },
  { british: 'Taking the mickey', american: 'Making fun of / Mocking', category: 'Slang' },
  { british: 'Naff', american: 'Uncool / Tacky', category: 'Slang' },
  { british: 'Gormless', american: 'Clueless / Dopey', category: 'Slang' },
  { british: 'Reckon', american: 'Think / Suppose / Figure', category: 'Slang' },
  { british: 'Wicked', american: 'Awesome / Cool', category: 'Slang', note: 'British English (especially London) — opposite of its literal meaning' },
  { british: 'Mint', american: 'Great / Excellent', category: 'Slang', note: 'Common in Northern England' },
  { british: 'Skint', american: 'Broke / Flat broke', category: 'Slang' },
  { british: 'Miffed', american: 'Annoyed / Slightly offended', category: 'Slang' },
  { british: 'Mug', american: 'Idiot / Fool', category: 'Slang', note: 'In British slang, a "mug" is someone easily deceived' },
  { british: 'Hiya', american: 'Hey / Hi there', category: 'Slang' },
  { british: 'Ta', american: 'Thanks', category: 'Slang', note: 'Informal British way of saying thank you' },
  { british: 'Alright?', american: 'How\'s it going? / What\'s up?', category: 'Slang', note: 'A British greeting — not asking if you\'re literally okay' },
  { british: 'Innit', american: 'Isn\'t it / Right', category: 'Slang', note: 'Tag question popular in London slang' },
  { british: 'Cheeky Nando\'s', american: 'Casual meal out (no equivalent)', category: 'Slang', note: 'A very British cultural concept — grabbing an impromptu meal at Nando\'s' },

  // Entertainment
  { british: 'Cinema', american: 'Movie theater', category: 'Entertainment' },
  { british: 'Film', american: 'Movie', category: 'Entertainment' },
  { british: 'Autumn', american: 'Fall', category: 'Entertainment', note: 'Both are understood everywhere, but "fall" is almost exclusively American' },
  { british: 'Fancy dress', american: 'Costume', category: 'Entertainment', note: '"Fancy dress party" in the UK = Halloween / costume party in the US' },
  { british: 'Holiday camp', american: 'Summer camp / Resort', category: 'Entertainment' },
  { british: 'Pantomime / Panto', american: 'No direct equivalent', category: 'Entertainment', note: 'A uniquely British theatrical tradition, usually around Christmas' },
  { british: 'Bonfire Night', american: 'No equivalent', category: 'Entertainment', note: 'November 5th — Guy Fawkes Night; fireworks and bonfires' },
  { british: 'Box set', american: 'Complete series / DVD set', category: 'Entertainment' },
  { british: 'Advert', american: 'Commercial / Ad', category: 'Entertainment' },
  { british: 'Presenter', american: 'Host (TV/radio)', category: 'Entertainment' },
  { british: 'Licence fee (BBC)', american: 'Cable bill / Subscription (no equivalent)', category: 'Entertainment', note: 'UK pays a TV licence fee to fund the BBC' },
  { british: 'Series', american: 'Season (of a TV show)', category: 'Entertainment' },
  { british: 'Newsreader', american: 'News anchor', category: 'Entertainment' },

  // Sports
  { british: 'Football', american: 'Soccer', category: 'Sports', note: 'The word "soccer" actually originated in England — it\'s short for "Association football"' },
  { british: 'Pitch', american: 'Field', category: 'Sports' },
  { british: 'Kit', american: 'Uniform / Jersey', category: 'Sports' },
  { british: 'Match', american: 'Game', category: 'Sports' },
  { british: 'Nil', american: 'Zero (in scores)', category: 'Sports' },
  { british: 'Fixture', american: 'Scheduled game', category: 'Sports' },
  { british: 'Supporter', american: 'Fan', category: 'Sports' },
  { british: 'Innings', american: 'Inning', category: 'Sports', note: 'In cricket, "innings" is both singular and plural' },
  { british: 'Netball', american: 'No direct equivalent', category: 'Sports', note: 'Popular team sport in the UK and Commonwealth — like basketball but no backboard' },
  { british: 'Squash (sport)', american: 'Squash', category: 'Sports', note: 'Same sport, just much more popular in Britain' },
  { british: 'Athletics', american: 'Track and field', category: 'Sports' },
  { british: 'Swimming baths / Pool', american: 'Swimming pool / Rec center', category: 'Sports' },
  { british: 'Manager (football)', american: 'Coach / Head coach', category: 'Sports' },

  // Money & Banking
  { british: 'Banknotes / Notes', american: 'Bills', category: 'Money' },
  { british: 'Cashpoint / ATM / Cash machine', american: 'ATM', category: 'Money' },
  { british: 'Current account', american: 'Checking account', category: 'Money' },
  { british: 'Standing order', american: 'Automatic payment', category: 'Money' },
  { british: 'Cheque', american: 'Check', category: 'Money' },
  { british: 'Hire purchase', american: 'Installment plan / Layaway', category: 'Money' },
  { british: 'VAT (Value Added Tax)', american: 'Sales tax', category: 'Money', note: 'VAT is included in UK prices; US sales tax is added at checkout' },
  { british: 'Pension', american: '401(k) / Retirement plan', category: 'Money' },
  { british: 'The dole', american: 'Unemployment benefits', category: 'Money' },
  { british: 'Council tax', american: 'Property tax', category: 'Money' },
  { british: 'National Insurance', american: 'Social Security / Medicare taxes', category: 'Money' },

  // Language & Punctuation
  { british: 'Inverted commas / Speech marks', american: 'Quotation marks', category: 'Language' },
  { british: 'Square brackets', american: 'Brackets', category: 'Language' },
  { british: 'Brackets / Round brackets', american: 'Parentheses', category: 'Language' },
  { british: 'Exclamation mark', american: 'Exclamation point', category: 'Language' },
  { british: 'Autumn term', american: 'Fall semester', category: 'Language' },
  { british: 'Whilst', american: 'While', category: 'Language' },
  { british: 'Amongst', american: 'Among', category: 'Language' },
  { british: 'Learnt / Learnt', american: 'Learned', category: 'Language' },
  { british: 'Burnt', american: 'Burned', category: 'Language' },
  { british: 'Got (have got)', american: 'Gotten', category: 'Language', note: '"I\'ve got" is British; "I\'ve gotten" is American' },
  { british: 'Anti-clockwise', american: 'Counter-clockwise', category: 'Language' },
  { british: 'Maths', american: 'Math', category: 'Language' },
  { british: 'In hospital', american: 'In the hospital', category: 'Language' },
  { british: 'At university', american: 'In college / At school', category: 'Language' },
  { british: 'At the weekend', american: 'On the weekend', category: 'Language' },
  { british: 'Different to', american: 'Different from / Different than', category: 'Language' },
]

const CATEGORIES = ['All', 'Food', 'Transport', 'Home', 'Clothing', 'Work', 'School', 'Medical', 'Slang', 'Entertainment', 'Sports', 'Money', 'Language', 'Spelling']

const catColors: Record<string, string> = {
  Food: 'bg-orange-500/10 text-orange-600 dark:text-orange-400',
  Transport: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
  Home: 'bg-green-500/10 text-green-600 dark:text-green-400',
  Clothing: 'bg-pink-500/10 text-pink-600 dark:text-pink-400',
  Work: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
  School: 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400',
  Medical: 'bg-red-500/10 text-red-600 dark:text-red-400',
  Slang: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
  Entertainment: 'bg-fuchsia-500/10 text-fuchsia-600 dark:text-fuchsia-400',
  Sports: 'bg-lime-500/10 text-lime-700 dark:text-lime-400',
  Money: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
  Spelling: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
  Baby: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
  Language: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
  Time: 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
  Tech: 'bg-violet-500/10 text-violet-600 dark:text-violet-400',
}

const uniqueCategories = [...new Set(PAIRS.map(p => p.category))]

export default function BritishVsAmericanPage() {
  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema items={[
        { name: 'Home', path: '/' },
        { name: 'Phrases', path: '/phrases' },
        { name: 'British vs American English', path: '/phrases/british-vs-american-english' },
      ]} />
      <WebPageSchema path="/phrases/british-vs-american-english" name="British vs American English — 200+ Word Differences" description="Complete guide to British vs American English vocabulary differences by category." type="CollectionPage" />
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap">
          <Link href="/" className="flex items-center gap-1 hover:text-foreground transition-colors"><Home className="w-4 h-4" /><span>Home</span></Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/phrases" className="hover:text-foreground transition-colors">Phrases</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">British vs American English</span>
        </nav>

        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center gap-3 text-4xl mb-4">🇬🇧 🆚 🇺🇸</div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">British vs American English</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            The same language, but surprisingly different vocabulary. {PAIRS.length}+ word pairs compared across food, transport, clothing, home, slang, and spelling — with usage notes where it matters.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {[
              { emoji: '🍽️', label: 'Food', count: PAIRS.filter(p => p.category === 'Food').length },
              { emoji: '🚗', label: 'Transport', count: PAIRS.filter(p => p.category === 'Transport').length },
              { emoji: '🏠', label: 'Home', count: PAIRS.filter(p => p.category === 'Home').length },
              { emoji: '💬', label: 'Slang', count: PAIRS.filter(p => p.category === 'Slang').length },
            ].map(s => (
              <div key={s.label} className="px-4 py-2 bg-muted/30 rounded-xl border text-sm">
                <span className="mr-1.5">{s.emoji}</span><span className="font-semibold">{s.count}</span><span className="text-muted-foreground ml-1">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* By Category */}
        {uniqueCategories.map(cat => {
          const words = PAIRS.filter(p => p.category === cat)
          const icons: Record<string, string> = { Food: '🍽️', Transport: '🚗', Home: '🏠', Clothing: '👕', Work: '💼', School: '📚', Medical: '🏥', Slang: '💬', Spelling: '✍️', Baby: '👶', Language: '📝', Time: '🕐', Tech: '📱', Entertainment: '🎬', Sports: '⚽', Money: '💷' }
          return (
            <section key={cat} className="mb-10">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-2xl">{icons[cat] ?? '📌'}</span> {cat}
                <span className="text-sm font-normal text-muted-foreground">({words.length} pairs)</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-2">
                {words.map(p => (
                  <div key={p.british + p.american} className="p-3 bg-muted/20 rounded-xl border hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🇬🇧</span>
                          <span className="font-semibold text-sm">{p.british}</span>
                        </div>
                      </div>
                      <span className="text-muted-foreground text-xs">→</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-base">🇺🇸</span>
                          <span className="font-semibold text-sm text-primary">{p.american}</span>
                        </div>
                      </div>
                    </div>
                    {p.note && <p className="text-xs text-muted-foreground mt-1.5 border-t border-muted/30 pt-1.5">{p.note}</p>}
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        {/* Fun Facts */}
        <section className="mb-10 p-4 md:p-6 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl border">
          <h2 className="text-xl font-bold mb-4">Why Are They So Different?</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">🚢 The Great Separation</h3>
              <p>American English began diverging in the 1600s when English colonists arrived. Cut off from Britain, words evolved independently. Noah Webster's 1828 dictionary deliberately simplified spellings ("colour" → "color") to give America its own linguistic identity.</p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">🔄 Who Changed More?</h3>
              <p>Surprisingly, American English often preserves older forms. Words like "fall" (for autumn), "gotten", and "I guess" were standard 17th-century English. Britain moved on; America kept them. So neither dialect is "more correct" — they're simply different branches of the same tree.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-10 p-4 md:p-6 bg-muted/20 rounded-2xl border">
          <h2 className="text-xl font-bold mb-5">FAQ</h2>
          <div className="space-y-4">
            {[
              { q: 'Is British English "proper" English?', a: 'Neither dialect is more correct. Both are fully valid standards. British English is used in the UK, Australia, New Zealand, and much of Asia and Africa. American English dominates in the US, Canada, and is the most common in global media and tech.' },
              { q: 'What\'s the most confusing British/American word pair?', a: '"Pants" causes the most embarrassment. In the UK, "pants" means underwear. Telling a British person their pants look great has a very different meaning than saying it to an American. Similarly, "fanny" is a mild US word for bottom but highly rude in British English.' },
              { q: 'Which spelling system should I use?', a: 'Use the system of your audience. If writing for a UK, Australian, or international publication, use British spellings. For US audiences, use American. Most word processors can switch between the two — just set your spell-check language.' },
            ].map((faq, i) => (
              <div key={i} className="border-b border-muted/30 pb-4 last:border-0 last:pb-0">
                <h3 className="font-semibold mb-1.5">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link href="/phrases" className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors"><BookOpen className="w-4 h-4" /> All Phrase Collections</Link>
          <Link href="/phrases/old-timey-words" className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-xl text-sm font-medium hover:bg-muted/50 border transition-colors">Old Timey Words <ArrowRight className="w-4 h-4" /></Link>
          <Link href="/phrases/english-idioms" className="flex items-center gap-2 px-4 py-2 bg-muted/30 rounded-xl text-sm font-medium hover:bg-muted/50 border transition-colors">English Idioms <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
