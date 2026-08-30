import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Complete Tanzania Safari Lodges & Camps Directory | C.A.T.S Safaris',
  description: 'Comprehensive directory of all safari lodges, tented camps, beach resorts, and mountain camps across Tanzania\'s national parks, conservation areas, and concessions. 254 properties with locations, airstrips, and concession details.',
  openGraph: {
    title: 'Complete Tanzania Safari Lodges & Camps Directory',
    description: 'Every safari lodge and camp in Tanzania \u2014 from Serengeti luxury to Zanzibar beach resorts. 254 properties across all parks and conservation areas.',
    url: 'https://www.catssafaris.com/travel-info/tanzania-lodges',
    siteName: 'C.A.T.S Safaris',
    type: 'website',
  },
}

interface Lodge {
  name: string
  location: string
  category: string
  parkPosition: string
  conservancyName: string | null
  nearestAirstrips: string[]
  notes: string
}

interface Region {
  name: string
  slug: string
  lodges: Lodge[]
}

const regions: Region[] = [
  { name: 'Serengeti', slug: 'serengeti', lodges: [
      { name: 'Four Seasons Safari Lodge Serengeti', location: 'Serengeti National Park (Central Seronera)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Permanent luxury lodge with infinity pool, spa, gourmet dining' },
      { name: 'Namiri Plains', location: 'Serengeti National Park (Central Serengeti)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Tented camp focused on cheetah conservation, spacious suites' },
      { name: 'One Nature Nyaruswiga', location: 'Serengeti National Park (Central Seronera)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Exclusive luxury lodge, great for families and groups' },
      { name: 'Melia Serengeti Lodge', location: 'Serengeti National Park (Central Seronera)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Luxury permanent lodge, Melia Collection property' },
      { name: 'Roving Bushtops', location: 'Serengeti National Park (Mobile)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip', 'Kogatende Airstrip', 'Ndutu Airstrip'], notes: 'Ultra-luxury mobile camp, moves between Ndutu and Mara areas' },
      { name: 'Elewana Serengeti Pioneer Camp', location: 'Serengeti National Park (Central Seronera)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Premium tented camp with classic safari atmosphere' },
      { name: 'Serengeti Migration Camp (Elewana)', location: 'Serengeti National Park (Northern Serengeti)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kogatende Airstrip', 'Lobo Airstrip'], notes: 'Elewana Collection, permanent tented camp near Grumeti River' },
      { name: 'Serengeti Bushtops Camp', location: 'Serengeti National Park (Northern Serengeti/Mara)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kogatende Airstrip'], notes: 'Luxury permanent tented camp in the Mara area' },
      { name: 'Lemala Kuria Hills Lodge', location: 'Serengeti National Park (Northern Serengeti/Mara)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kogatende Airstrip', 'Lamai Airstrip'], notes: 'Glass-fronted suites with plunge pools near Mara River' },
      { name: 'Sayari Camp (Asilia)', location: 'Serengeti National Park (Northern Serengeti/Sayari)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Sayari Airstrip', 'Kogatende Airstrip'], notes: 'Asilia Africa premium camp, stunning northern location' },
      { name: 'Lemala Nanyukie Lodge', location: 'Serengeti National Park (Northern Serengeti)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kogatende Airstrip', 'Lobo Airstrip'], notes: 'New luxury lodge in northern Serengeti' },
      { name: 'Anantya Serengeti', location: 'Serengeti National Park (Central Serengeti)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'New luxury lodge in central Serengeti' },
      { name: 'Zawadi Camp', location: 'Serengeti National Park (Central Serengeti)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Intimate luxury camp' },
      { name: 'Mwanga Moto Camp', location: 'Serengeti National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Premium tented camp' },
      { name: 'Mwiba Lodge', location: 'Mwiba Wildlife Reserve (Southern Serengeti)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mwiba Wildlife Reserve', nearestAirstrips: ['Ndutu Airstrip', 'Seronera Airstrip'], notes: 'Ultra-luxury lodge in private concession south of Serengeti' },
      { name: 'Singita Sasakwa Lodge', location: 'Grumeti Reserves (Private Concession)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Grumeti Reserves', nearestAirstrips: ['Sasakwa Airstrip', 'Grumeti Airstrip'], notes: 'Ultra-luxury lodge, colonial grandeur, 10 private cottages' },
      { name: 'Singita Sabora Tented Camp', location: 'Grumeti Reserves (Private Concession)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Grumeti Reserves', nearestAirstrips: ['Sasakwa Airstrip', 'Grumeti Airstrip'], notes: 'Luxury vintage-style tented camp in private reserve' },
      { name: 'Singita Faru Faru Lodge', location: 'Grumeti Reserves (Private Concession)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Grumeti Reserves', nearestAirstrips: ['Sasakwa Airstrip', 'Grumeti Airstrip'], notes: 'Modern luxury lodge on Grumeti River' },
      { name: 'Singita Serengeti House', location: 'Grumeti Reserves (Private Concession)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Grumeti Reserves', nearestAirstrips: ['Sasakwa Airstrip', 'Grumeti Airstrip'], notes: 'Exclusive-use luxury villa in Grumeti Reserves' },
      { name: 'Singita Explore Mobile Tented Camp', location: 'Grumeti Reserves (Private Concession)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Grumeti Reserves', nearestAirstrips: ['Sasakwa Airstrip', 'Grumeti Airstrip'], notes: 'Mobile tented camp in Grumeti Reserves' },
      { name: 'Singita Mara River Tented Camp', location: 'Grumeti Reserves (Lamai Triangle)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Grumeti Reserves (Lamai Wedge)', nearestAirstrips: ['Lamai Airstrip'], notes: '6 luxury tents overlooking Mara River in Lamai Triangle' },
      { name: 'andBeyond Grumeti Serengeti Tented Camp', location: 'Grumeti Reserves (Private Concession)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Grumeti Reserves', nearestAirstrips: ['Grumeti Airstrip', 'Sasakwa Airstrip'], notes: 'Luxury tented camp by andBeyond in Grumeti' },
      { name: 'Dunia Camp', location: 'Serengeti National Park (Central Seronera)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Intimate tented camp in central Serengeti' },
      { name: 'Serengeti Serena Safari Lodge', location: 'Serengeti National Park (Central Seronera)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Permanent lodge with traditional Maasai-inspired design' },
      { name: 'Serengeti Sopa Lodge', location: 'Serengeti National Park (Central Seronera)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Large permanent lodge overlooking Serengeti plains' },
      { name: 'Seronera Wildlife Lodge', location: 'Serengeti National Park (Central Seronera)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Historic lodge in central Serengeti near Seronera valley' },
      { name: 'Serengeti Safari Camp (Nomad)', location: 'Serengeti National Park (Mobile)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip', 'Kogatende Airstrip', 'Ndutu Airstrip'], notes: 'Mobile camp following the Great Migration, moves several times a year' },
      { name: 'andBeyond Serengeti Under Canvas', location: 'Serengeti National Park (Mobile)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip', 'Kogatende Airstrip', 'Ndutu Airstrip'], notes: 'Luxury mobile tented camp, 9 tents, follows migration' },
      { name: 'Olakira Migration Camp', location: 'Serengeti National Park (Mobile)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip', 'Kogatende Airstrip', 'Ndutu Airstrip'], notes: 'Mobile tented camp, 9 tents, follows migration between Ndutu and Mara' },
      { name: 'Legendary Serengeti Camp', location: 'Serengeti National Park (Central Seronera)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Classic tented camp in central Serengeti' },
      { name: 'Mbuzi Mawe Serena Camp', location: 'Serengeti National Park (Central Seronera)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Serena tented camp built around kopjes' },
      { name: 'Mbalageti Lodge', location: 'Serengeti National Park (Western Corridor)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kirawira Airstrip', 'Seronera Airstrip'], notes: 'Permanent lodge in western Serengeti' },
      { name: 'Kirawira Tented Camp', location: 'Serengeti National Park (Western Corridor)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kirawira Airstrip'], notes: 'Luxury tented camp in the western corridor' },
      { name: 'Nomad Lamai Serengeti', location: 'Serengeti National Park (Northern Serengeti/Lamai)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lamai Airstrip', 'Kogatende Airstrip'], notes: 'Intimate lodge in the Lamai Wedge area' },
      { name: 'Lamai Serengeti', location: 'Serengeti National Park (Northern Serengeti/Lamai)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lamai Airstrip', 'Kogatende Airstrip'], notes: 'Permanent lodge in the Lamai area' },
      { name: 'Lamai Private', location: 'Serengeti National Park (Northern Serengeti/Lamai)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lamai Airstrip', 'Kogatende Airstrip'], notes: 'Exclusive-use villa in the Lamai area' },
      { name: 'Mkombe\'s House Lamai', location: 'Serengeti National Park (Northern Serengeti/Lamai)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lamai Airstrip', 'Kogatende Airstrip'], notes: 'Private house in the Lamai Wedge' },
      { name: 'Taasa Lodge', location: 'Serengeti National Park (Northern Serengeti/Lobo)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lobo Airstrip'], notes: 'Luxury tented lodge in northern Serengeti/Lobo area' },
      { name: 'Bologonya Under Canvas', location: 'Serengeti National Park (Northern Serengeti)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kogatende Airstrip', 'Lobo Airstrip'], notes: 'Tented camp in northern Serengeti' },
      { name: 'Serengeti North Wilderness Camp', location: 'Serengeti National Park (Northern Serengeti)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kogatende Airstrip', 'Lobo Airstrip'], notes: 'Wilderness camp in northern Serengeti' },
      { name: 'Sanctuary Kichakani Camp', location: 'Serengeti National Park (Mobile)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip', 'Kogatende Airstrip', 'Ndutu Airstrip'], notes: 'Luxury mobile camp following the migration' },
      { name: 'Serengeti Wilderness Camp', location: 'Serengeti National Park (Central Serengeti)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Tented camp in central Serengeti' },
      { name: 'andBeyond Klein\'s Camp', location: 'Klein\'s Camp Concession (Loliondo)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Klein\'s Camp Concession', nearestAirstrips: ['Klein\'s Camp Airstrip'], notes: 'Private concession on Serengeti border, walking safaris, night drives' },
      { name: 'Nduara Loliondo (Nomad)', location: 'Loliondo Game Controlled Area', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Loliondo Game Controlled Area', nearestAirstrips: ['Klein\'s Camp Airstrip', 'Lobo Airstrip'], notes: 'Nomadic mobile camp in Maasai concession, yurt-style tents' },
      { name: 'Siringit Serengeti Camp', location: 'Serengeti National Park (Central Seronera)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Basic but genuine tented camp, affordable option' },
      { name: 'Lemala Ewanjan Tented Camp', location: 'Serengeti National Park (Central Seronera)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Tented camp with private plunge pools in Seronera area' },
      { name: 'Entara Olmara Camp', location: 'Serengeti National Park (Central Seronera)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Tented camp with star-bed platform and waterhole views' },
      { name: 'Kati Kati Tented Camp', location: 'Serengeti National Park (Central Seronera)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip'], notes: 'Budget-friendly mobile tented camp in central Serengeti' },
      { name: 'Mbali Mbali Soroi Serengeti Lodge', location: 'Serengeti National Park (Western Corridor)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kirawira Airstrip', 'Grumeti Airstrip'], notes: 'Family-friendly lodge in western corridor' },
      { name: 'Sanctuary Kusini Camp', location: 'Serengeti National Park (Southern Serengeti)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Ndutu Airstrip', 'Seronera Airstrip'], notes: 'Small tented camp in southern plains, secluded location' },
      { name: 'Kimondo Camp (Asilia)', location: 'Serengeti National Park (Mobile)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip', 'Kogatende Airstrip', 'Ndutu Airstrip'], notes: 'Asilia seasonal mobile camp following the migration' },
      { name: 'Ubuntu Camp', location: 'Serengeti National Park (Mobile)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Seronera Airstrip', 'Kogatende Airstrip', 'Ndutu Airstrip'], notes: 'Seasonal mobile camp following the migration' }
  ] },
  { name: 'Ngorongoro', slug: 'ngorongoro', lodges: [
      { name: 'andBeyond Ngorongoro Crater Lodge', location: 'Ngorongoro Conservation Area (Crater Rim)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Iconic luxury lodge on crater rim, closed for rebuild until 2027' },
      { name: 'Ngorongoro Lodge Melia Collection', location: 'Ngorongoro Conservation Area (Crater Rim)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Luxury lodge on the crater rim, Melia brand' },
      { name: 'Elewana The Manor at Ngorongoro', location: 'Ngorongoro Conservation Area (Karatu)', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Ngorongoro Airstrip'], notes: 'Colonial-style manor house estate near Ngorongoro' },
      { name: 'Escarpment Luxury Lodge', location: 'Ngorongoro Conservation Area (Karatu)', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Ngorongoro Airstrip'], notes: 'Stylish luxury lodge on the Rift Valley escarpment' },
      { name: 'Ndutu Safari Lodge', location: 'Ngorongoro Conservation Area (Ndutu)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ndutu Airstrip'], notes: 'Historic lodge in the Ndutu area, great for calving season' },
      { name: 'Lemala Ndutu Tented Camp', location: 'Ngorongoro Conservation Area (Ndutu)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ndutu Airstrip'], notes: 'Seasonal tented camp in Ndutu area' },
      { name: 'Ndutu Wilderness Camp', location: 'Ngorongoro Conservation Area (Ndutu)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ndutu Airstrip'], notes: 'Tented camp in the Ndutu area' },
      { name: 'Osero Exclusive Mobile Camp', location: 'Ngorongoro Conservation Area (Ndutu)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ndutu Airstrip'], notes: 'Exclusive-use mobile camp in Ndutu area' },
      { name: 'Ngorongoro Serena Safari Lodge', location: 'Ngorongoro Conservation Area (Crater Rim)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Permanent lodge on the crater rim with spectacular views' },
      { name: 'Ngorongoro Sopa Lodge', location: 'Ngorongoro Conservation Area (Crater Rim)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Large lodge on the eastern crater rim' },
      { name: 'Ngorongoro Wildlife Lodge', location: 'Ngorongoro Conservation Area (Crater Rim)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Classic lodge on the crater rim, panoramic views' },
      { name: 'Lemala Ngorongoro Tented Camp', location: 'Ngorongoro Conservation Area (Crater Rim)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Tented camp in acacia forest near crater rim' },
      { name: 'Sanctuary Ngorongoro Crater Camp', location: 'Ngorongoro Conservation Area (Crater Rim)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Luxury tented camp in crater rim valley' },
      { name: 'Ngorongoro Lion\'s Paw Camp', location: 'Ngorongoro Conservation Area (Crater Rim)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Small tented camp on the crater rim' },
      { name: 'Entamanu Ngorongoro (Nomad)', location: 'Ngorongoro Conservation Area (Crater Rim)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Nomad Tanzania camp on the crater rim' },
      { name: 'The Highlands (Asilia)', location: 'Ngorongoro Conservation Area (Olmoti)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ngorongoro Conservation Area', nearestAirstrips: ['Ngorongoro Airstrip', 'Lake Manyara Airstrip (HTMA)'], notes: 'Unique dome-shaped tents on the slopes of Olmoti volcano' },
      { name: 'Gibb\'s Farm', location: 'Ngorongoro Conservation Area (Karatu)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Ngorongoro Airstrip'], notes: 'Historic working coffee farm with luxury cottages' },
      { name: 'Plantation Lodge', location: 'Ngorongoro Conservation Area (Karatu)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Ngorongoro Airstrip'], notes: 'Charming lodge in Karatu near NCA entrance' },
      { name: 'Kitela Lodge', location: 'Ngorongoro Conservation Area (Karatu)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Ngorongoro Airstrip'], notes: 'Lodge set in coffee plantation near Karatu' },
      { name: 'Ngorongoro Farm House', location: 'Ngorongoro Conservation Area (Karatu)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Ngorongoro Airstrip'], notes: 'Farm lodge near Ngorongoro entrance' }
  ] },
  { name: 'Tarangire', slug: 'tarangire', lodges: [
      { name: 'Lemala Mpingo Ridge Lodge', location: 'Tarangire National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Luxury lodge on escarpment overlooking Tarangire River' },
      { name: 'Elewana Tarangire Treetops', location: 'Tarangire area (bordering)', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Randilen WMA', nearestAirstrips: ['Tarangire Airstrip (Kuro)', 'Lake Manyara Airstrip (HTMA)'], notes: 'Tree lodge built in baobab trees, just outside park' },
      { name: 'Lolkisale Camp', location: 'Tarangire National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Luxury tented camp in the heart of Tarangire' },
      { name: 'Elephant Springs Lodge', location: 'Tarangire National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Luxury lodge by Karibu Camps' },
      { name: 'Tarangire Safari Lodge', location: 'Tarangire National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Family-owned since 1985, panoramic river views' },
      { name: 'Tarangire Sopa Lodge', location: 'Tarangire National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Large permanent lodge inside the park' },
      { name: 'Sanctuary Swala Camp', location: 'Tarangire National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Luxury tented camp in southern Tarangire' },
      { name: 'Chem Chem Lodge', location: 'Tarangire area (Private Concession)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Chem Chem Concession', nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Tarangire Airstrip (Kuro)'], notes: 'Luxury lodge in private concession between Tarangire and Manyara' },
      { name: 'Little Chem Chem', location: 'Tarangire area (Private Concession)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Chem Chem Concession', nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Tarangire Airstrip (Kuro)'], notes: 'Intimate tented camp in private concession' },
      { name: 'Forest Chem Chem', location: 'Tarangire area (Private Concession)', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Chem Chem Concession', nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Tarangire Airstrip (Kuro)'], notes: 'Forest camp in private concession' },
      { name: 'Kuro Tarangire (Nomad)', location: 'Tarangire National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Organic-style camp deep in the park' },
      { name: 'Tarangire River Camp', location: 'Tarangire National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Tented camp on the Tarangire River' },
      { name: 'Kikoti Safari Camp', location: 'Tarangire area (bordering)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Tented camp on park boundary' },
      { name: 'Tarangire Simba Lodge', location: 'Tarangire area (bordering)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Lodge near park entrance' },
      { name: 'Lake Burunge Tented Lodge', location: 'Tarangire area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Lodge near Lake Burunge between Tarangire and Manyara' },
      { name: 'Maramboi Tented Lodge', location: 'Tarangire area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Tented lodge between Tarangire and Manyara' },
      { name: 'Maweninga Camp', location: 'Tarangire National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Tented camp in Tarangire' },
      { name: 'Ndovu Tented Lodge', location: 'Tarangire area (bordering)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Tented lodge near Tarangire' },
      { name: 'Oliver\'s Camp', location: 'Tarangire National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Classic safari camp, excellent guiding, rustic style' },
      { name: 'Sangaiwe Tented Lodge', location: 'Tarangire area (bordering)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Budget tented lodge near Tarangire' },
      { name: 'Baobab Tented Camp', location: 'Tarangire area (bordering)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Tarangire Airstrip (Kuro)'], notes: 'Budget tented camp near park entrance' }
  ] },
  { name: 'Lake Manyara', slug: 'lake-manyara', lodges: [
      { name: 'andBeyond Lake Manyara Tree Lodge', location: 'Lake Manyara National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Luxury treehouse suites in mahogany forest inside the park' },
      { name: 'Escarpment Luxury Lodge (Manyara)', location: 'Lake Manyara area', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Luxury lodge on the Rift Valley escarpment' },
      { name: 'Lake Manyara Serena Safari Lodge', location: 'Lake Manyara area (escarpment)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Permanent lodge on Rift Valley escarpment, 67 rooms' },
      { name: 'Lake Manyara Wildlife Lodge', location: 'Lake Manyara area (escarpment)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Lodge on the escarpment above the park' },
      { name: 'Kirurumu Manyara Lodge', location: 'Lake Manyara area (escarpment)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Tented lodge on the escarpment' },
      { name: 'Wayo Lake Manyara Green Camp', location: 'Lake Manyara National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Green tented camp inside the park' },
      { name: 'Wellworth Lake Manyara Kilimamoja Lodge', location: 'Lake Manyara area (escarpment)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Lodge on escarpment overlooking the park' },
      { name: 'Africa Safari Manyara Escarpment', location: 'Lake Manyara area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Safari camp on the escarpment' },
      { name: 'Lemala Manyara Camp', location: 'Lake Manyara National Park', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Tented camp near Lake Manyara' },
      { name: 'Migunga Forest Camp', location: 'Lake Manyara area', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)'], notes: 'Forest tented camp near Lake Manyara' }
  ] },
  { name: 'Arusha', slug: 'arusha', lodges: [
      { name: 'Elewana Arusha Coffee Lodge', location: 'Arusha', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Arusha Airport (ARK)', 'Kilimanjaro International (JRO)'], notes: 'Luxury lodge in coffee plantation near Arusha' },
      { name: 'Hatari Lodge', location: 'Arusha National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Arusha Airport (ARK)'], notes: 'Stylish lodge near Arusha NP with Mount Meru views' },
      { name: 'Koroi Forest Camp', location: 'Arusha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Arusha Airport (ARK)'], notes: 'Tented camp nestled in Arusha NP forest' },
      { name: 'Ngare Sero Mountain Lodge', location: 'Arusha National Park (bordering)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Arusha Airport (ARK)'], notes: 'Historic lodge near Arusha NP entrance' },
      { name: 'Meru View Lodge', location: 'Arusha National Park (bordering)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Arusha Airport (ARK)'], notes: 'Lodge with Mount Meru views near Arusha NP' },
      { name: 'Arusha Serena Hotel', location: 'Arusha', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Arusha Airport (ARK)', 'Kilimanjaro International (JRO)'], notes: 'Hotel in Arusha town, safari gateway' },
      { name: 'The Arusha Hotel', location: 'Arusha', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Arusha Airport (ARK)', 'Kilimanjaro International (JRO)'], notes: 'Historic hotel in Arusha town center' },
      { name: 'Legendary Lodge', location: 'Arusha', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Arusha Airport (ARK)', 'Kilimanjaro International (JRO)'], notes: 'Boutique lodge in coffee estate near Arusha' },
      { name: 'Moivaro Coffee Plantation Lodge', location: 'Arusha', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Arusha Airport (ARK)', 'Kilimanjaro International (JRO)'], notes: 'Lodge set in coffee plantation near Arusha' }
  ] },
  { name: 'Nyerere/Selous', slug: 'nyerere-selous', lodges: [
      { name: 'Sand Rivers Selous (Nomad)', location: 'Nyerere National Park (Selous)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Premium riverside camp, stone and thatch cottages' },
      { name: 'Beho Beho', location: 'Nyerere National Park (Selous)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Historic luxury lodge on hilltop overlooking the reserve' },
      { name: 'Serena Mivumo River Lodge', location: 'Nyerere National Park (Selous)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Luxury treehouse-style lodge on Rufiji River' },
      { name: 'Nyerere Tented Camp', location: 'Nyerere National Park (Selous)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'New luxury tented camp with fly camping' },
      { name: 'Siwandu Camp (Laba)', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Tented camp on Lake Nzerakera' },
      { name: 'Roho ya Selous (Asilia)', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Asilia tented camp, 8 suites near Rufiji tributary' },
      { name: 'Rufiji River Camp', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Foxes Safari Camps property on the Rufiji River' },
      { name: 'Azura Selous', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Luxury tented camp on the Rufiji River' },
      { name: 'Kiba Point Selous', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Small exclusive camp, 3 bandas' },
      { name: 'Selous Safari Camp', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Classic safari camp in the reserve' },
      { name: 'Selous Serena Camp', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Serena tented camp on Lake Manze' },
      { name: 'Jimbiza Bay Camp', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Camp on Lake Jimbiza' },
      { name: 'Africa Safari Nyerere', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: '25 bungalows with private pools' },
      { name: 'Retreat Selous', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Tented retreat in the reserve' },
      { name: 'Amara Selous', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Safari camp in Nyerere NP' },
      { name: 'Selous River Camp', location: 'Nyerere National Park (Selous)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Camp on the river, 13 rooms' },
      { name: 'Sable Mountain Lodge', location: 'Nyerere National Park (Selous border)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mtemere Airstrip'], notes: 'Forest and mountain views on park boundary' }
  ] },
  { name: 'Ruaha', slug: 'ruaha', lodges: [
      { name: 'Jabali Ridge', location: 'Ruaha National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Asilia premium lodge built into rocky ridge' },
      { name: 'Kilimatonge Wilderness Camp', location: 'Ruaha National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Authentic Tanzania wilderness camp' },
      { name: 'Kigelia Camp (Nomad)', location: 'Ruaha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Rustic yet elegant bush camp' },
      { name: 'Kwihala Camp (Asilia)', location: 'Ruaha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Asilia tented camp in prime wildlife area' },
      { name: 'Jongomero Camp', location: 'Ruaha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Jongomero Airstrip'], notes: 'Remote tented camp in southern Ruaha' },
      { name: 'Ruaha River Lodge', location: 'Ruaha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'First lodge in Ruaha, overlooking Ruaha River, Foxes Safari Camps' },
      { name: 'Ikuka Safari Camp', location: 'Ruaha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Owner-run exclusive camp' },
      { name: 'Mwagusi Camp', location: 'Ruaha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Classic bush camp on Mwagusi Sand River' },
      { name: 'Tandala Tented Camp', location: 'Ruaha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Tented camp in Ruaha' },
      { name: 'Kokoko Camp (Asilia)', location: 'Ruaha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Private-use camp with top guide' },
      { name: 'Kichaka Camp', location: 'Ruaha National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Safari camp in Ruaha, family-friendly' },
      { name: 'Mdonya Old River Camp', location: 'Ruaha National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Msembe Airstrip'], notes: 'Budget-friendly camp on riverbed' }
  ] },
  { name: 'Mikumi', slug: 'mikumi', lodges: [
      { name: 'Vuma Hills Tented Camp', location: 'Mikumi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: '16 tents on wooden decks, Foxes Safari Camps' },
      { name: 'Stanley\'s Kopje', location: 'Mikumi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Tented camp on a kopje, Foxes Safari Camps' },
      { name: 'Mikumi Safari Lodge', location: 'Mikumi National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Lodge near park gate' },
      { name: 'Mikumi Wildlife Lodge (Wellworth)', location: 'Mikumi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Lodge in Kikoboga area with plains views' },
      { name: 'Matembezi Safari Lodge', location: 'Mikumi National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Safari lodge in Mikumi area' },
      { name: 'Angalia Tented Camp', location: 'Mikumi National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Tented camp in Mikumi' },
      { name: 'Camp Bastian Mikumi', location: 'Mikumi National Park (bordering)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Budget camp near Mikumi' },
      { name: 'Tan Swiss Lodge', location: 'Mikumi National Park (bordering)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Budget lodge near Mikumi' },
      { name: 'Mikumi Adventure Lodge', location: 'Mikumi National Park', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Budget adventure lodge' },
      { name: 'Asante Afrika Camp', location: 'Mikumi National Park', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Budget camp at park entrance, 8 rooms' }
  ] },
  { name: 'Katavi', slug: 'katavi', lodges: [
      { name: 'Palahala Luxury Camp', location: 'Katavi National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Katavi Airstrip (Ikuu)'], notes: 'Premium luxury camp in Katavi' },
      { name: 'Chada Katavi (Nomad)', location: 'Katavi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Katavi Airstrip (Ikuu)'], notes: 'Classic 6-tent camp deep in the park' },
      { name: 'Katavi Wildlife Camp', location: 'Katavi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Katavi Airstrip (Ikuu)'], notes: 'Foxes Safari Camps, 5 tents' },
      { name: 'Mbali Mbali Katavi Lodge', location: 'Katavi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Katavi Airstrip (Ikuu)'], notes: '10-room safari lodge in Katavi' },
      { name: 'Katuma Bush Lodge', location: 'Katavi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Katavi Airstrip (Ikuu)'], notes: 'Bush lodge in Katavi' },
      { name: 'Flycatcher Katavi Camp', location: 'Katavi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Katavi Airstrip (Ikuu)'], notes: 'Tented camp in Katavi' }
  ] },
  { name: 'Mahale', slug: 'mahale', lodges: [
      { name: 'Greystoke Mahale (Nomad)', location: 'Mahale Mountains National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mahale Airstrip', 'Kigoma Airport'], notes: 'Iconic chimp trekking lodge on Lake Tanganyika beach' },
      { name: 'Kungwe Beach Lodge', location: 'Mahale Mountains National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mahale Airstrip', 'Kigoma Airport'], notes: 'Beach lodge on Lake Tanganyika, chimp trekking' },
      { name: 'Mbali Mbali Mahale Lodge', location: 'Mahale Mountains National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mahale Airstrip', 'Kigoma Airport'], notes: 'Lodge for chimp trekking safaris' },
      { name: 'Chimp Nest Camp', location: 'Mahale Mountains area (Ntakata Forest)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mahale Airstrip', 'Kigoma Airport'], notes: 'Simple mobile camp run by Tongwe Trust in wild forest' }
  ] },
  { name: 'Gombe', slug: 'gombe', lodges: [
      { name: 'Lupita Island', location: 'Lake Tanganyika', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigoma Airport'], notes: 'Luxury island lodge on Lake Tanganyika' },
      { name: 'Gombe Forest Lodge', location: 'Gombe Stream National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kigoma Airport'], notes: 'Exclusive tented camp for 14 guests, chimp trekking' },
      { name: 'Mbali Mbali Gombe Lodge', location: 'Gombe Stream National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kigoma Airport'], notes: 'Lodge near Gombe NP for chimp trekking' },
      { name: 'Kasekela Luxury Tented Camp', location: 'Gombe Stream National Park (near)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kigoma Airport'], notes: 'Luxury tented camp inspired by Gombe chimps' },
      { name: 'Kigoma Hilltop Hotel', location: 'Kigoma (Lake Tanganyika)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigoma Airport'], notes: 'Hotel in Kigoma, base for Gombe visits' }
  ] },
  { name: 'Kilimanjaro', slug: 'kilimanjaro', lodges: [
      { name: 'Marangu Hotel', location: 'Moshi/Marangu area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Historic hotel since 1932 at foothills of Kilimanjaro' },
      { name: 'Kaliwa Lodge', location: 'Moshi area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Charming lodge near Moshi, Kilimanjaro views' },
      { name: 'Kilimanjaro Mountain Resort', location: 'Moshi area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Resort near Kilimanjaro base' },
      { name: 'Weru Weru River Lodge', location: 'Moshi area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Lodge on the Weru Weru River near Moshi' },
      { name: 'Mandara Hut', location: 'Kilimanjaro National Park (Marangu Route, 2700m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Mountain hut on Marangu Route, dormitory-style' },
      { name: 'Horombo Hut', location: 'Kilimanjaro National Park (Marangu Route, 3720m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Mountain hut on Marangu Route, dormitory-style' },
      { name: 'Kibo Hut', location: 'Kilimanjaro National Park (Marangu Route, 4703m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Mountain hut on Marangu Route, summit base' },
      { name: 'Machame Camp', location: 'Kilimanjaro National Park (Machame Route, 3000m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Tented campsite on Machame Route' },
      { name: 'Shira Camp', location: 'Kilimanjaro National Park (Machame/Lemosho Route, 3840m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Tented campsite on Shira Plateau' },
      { name: 'Barranco Camp', location: 'Kilimanjaro National Park (Machame/Lemosho Route, 3960m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Tented campsite below Barranco Wall' },
      { name: 'Karanga Camp', location: 'Kilimanjaro National Park (Machame Route, 3995m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Tented campsite on Machame Route' },
      { name: 'Barafu Camp', location: 'Kilimanjaro National Park (Multiple Routes, 4673m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Summit base camp used by multiple routes' },
      { name: 'Mti Mkubwa Camp (Big Tree)', location: 'Kilimanjaro National Park (Lemosho Route, 2780m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'First camp on Lemosho Route' },
      { name: 'Shira 1 Camp', location: 'Kilimanjaro National Park (Lemosho Route, 3500m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Camp on Lemosho Route' },
      { name: 'Shira 2 Camp', location: 'Kilimanjaro National Park (Lemosho Route, 3840m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Camp on Lemosho/Machame Route' },
      { name: 'Lava Tower Camp', location: 'Kilimanjaro National Park (Multiple Routes, 4630m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'High-altitude camp near Lava Tower' },
      { name: 'School Hut Camp', location: 'Kilimanjaro National Park (Northern Circuit/Rongai, 4750m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Last camp before summit on Northern Circuit/Rongai' },
      { name: 'Simba Camp (Rongai)', location: 'Kilimanjaro National Park (Rongai Route, 2625m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'First camp on Rongai Route' },
      { name: 'Second Cave Camp', location: 'Kilimanjaro National Park (Rongai Route, 3450m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Second camp on Rongai Route' },
      { name: 'Third Cave Camp', location: 'Kilimanjaro National Park (Rongai Route, 3800m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Third camp on Rongai Route' },
      { name: 'Crater Camp', location: 'Kilimanjaro National Park (Summit, 5729m)', category: 'Budget', parkPosition: 'Mountain Route', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Rare overnight camp inside the crater' },
      { name: 'Aishi Machame Hotel', location: 'Machame area', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Hotel near Machame gate' }
  ] },
  { name: 'Lake Natron', slug: 'lake-natron', lodges: [
      { name: 'Lake Natron Camp (Ngare Sero)', location: 'Lake Natron area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Natron Airstrip', 'Arusha Airport (ARK)'], notes: '10 Bedu-style tents on shores of Lake Natron' },
      { name: 'Lake Natron Halisi Camp', location: 'Lake Natron area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Natron Airstrip', 'Arusha Airport (ARK)'], notes: 'Camp near Lake Natron, Maasai culture experiences' },
      { name: 'Lengai Safari Lodge', location: 'Lake Natron area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Natron Airstrip', 'Arusha Airport (ARK)'], notes: 'Lodge near Lake Natron and Ol Doinyo Lengai volcano' },
      { name: 'Africa Safari Lake Natron', location: 'Lake Natron area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Natron Airstrip', 'Arusha Airport (ARK)'], notes: 'Safari tents to luxury glamping with pool' },
      { name: 'Lake Natron Maasai Giraffe Eco Lodge', location: 'Lake Natron area', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Natron Airstrip', 'Arusha Airport (ARK)'], notes: 'Eco lodge with pool and garden' }
  ] },
  { name: 'Lake Eyasi', slug: 'lake-eyasi', lodges: [
      { name: 'Lake Eyasi Safari Lodge', location: 'Lake Eyasi area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Ngorongoro Airstrip'], notes: '16-room lodge, Hadzabe cultural visits' },
      { name: 'Kisima Ngeda Camp', location: 'Lake Eyasi area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Ngorongoro Airstrip'], notes: '8 palm-roofed tented chalets overlooking Lake Eyasi' },
      { name: 'Tindiga Tented Camp', location: 'Lake Eyasi area', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Lake Manyara Airstrip (HTMA)', 'Ngorongoro Airstrip'], notes: 'Small tented camp on hill overlooking Eyasi Ecosystem' }
  ] },
  { name: 'Saadani', slug: 'saadani', lodges: [
      { name: 'Kisampa Bush Retreat', location: 'Saadani National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Saadani Airstrip'], notes: 'Exclusive wilderness retreat in Saadani' },
      { name: 'Saadani Safari Lodge', location: 'Saadani National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Saadani Airstrip'], notes: 'Beach and bush lodge in coastal park' },
      { name: 'Simply Saadani Camp', location: 'Saadani National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Saadani Airstrip'], notes: '9 banda suites where bush meets beach' },
      { name: 'Saadani Park Bandas (TANAPA)', location: 'Saadani National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Saadani Airstrip'], notes: 'TANAPA-managed mid-range cottages inside the park' }
  ] },
  { name: 'Mkomazi', slug: 'mkomazi', lodges: [
      { name: 'Mkomazi Wilderness Retreat', location: 'Mkomazi National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: '7 luxury tents on Dindera Hill' },
      { name: 'Babu\'s Camp', location: 'Mkomazi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: 'Permanent tented camp among baobab trees' },
      { name: 'Mkomazi View Camp', location: 'Mkomazi National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilimanjaro International (JRO)'], notes: '6 tents near Mbula Rhino Sanctuary' }
  ] },
  { name: 'Zanzibar', slug: 'zanzibar', lodges: [
      { name: 'andBeyond Mnemba Island', location: 'Zanzibar (Mnemba Island, northeast)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Exclusive private island, 12 bandas, world-class diving' },
      { name: 'Park Hyatt Zanzibar', location: 'Zanzibar (Stone Town)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury hotel in Stone Town waterfront' },
      { name: 'Zanzi Resort', location: 'Zanzibar (West Coast)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury resort on west coast' },
      { name: 'Zuri Zanzibar', location: 'Zanzibar (North Coast, Kendwa)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Eco-conscious luxury resort with private beach' },
      { name: 'Elewana Kilindi Zanzibar', location: 'Zanzibar (North Coast, Kendwa)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'All-suite luxury resort with pavilion-style villas' },
      { name: 'Essque Zalu Zanzibar', location: 'Zanzibar (North Coast, Nungwi)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury resort on Nungwi beach' },
      { name: 'RIU Palace Zanzibar', location: 'Zanzibar (North Coast, Nungwi)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'All-inclusive luxury resort' },
      { name: 'Gold Zanzibar Beach House & Spa', location: 'Zanzibar (North Coast, Kendwa)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Boutique luxury beachfront resort' },
      { name: 'Melia Zanzibar', location: 'Zanzibar (North Coast, Kiwengwa)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury all-inclusive resort on Kiwengwa beach' },
      { name: 'Zanzibar White Sand Luxury Villas & Spa', location: 'Zanzibar (East Coast, Paje)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury villa resort on Paje beach' },
      { name: 'Baraza Resort & Spa', location: 'Zanzibar (East Coast, Bwejuu)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Award-winning 5-star all-inclusive boutique hotel' },
      { name: 'The Palms', location: 'Zanzibar (East Coast, Bwejuu)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Exclusive luxury boutique hotel, 6 villas' },
      { name: 'Zawadi Hotel', location: 'Zanzibar (East Coast)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Intimate luxury hotel on the east coast' },
      { name: 'Tulia Zanzibar Unique Beach Resort', location: 'Zanzibar (East Coast, Pongwe)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Boutique luxury resort on Pongwe beach' },
      { name: 'The Residence Zanzibar', location: 'Zanzibar (South Coast, Kizimkazi)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury resort on southwest coast' },
      { name: 'Konokono Beach Resort', location: 'Zanzibar (South Coast)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury all-inclusive resort' },
      { name: 'Xanadu Villas & Retreat', location: 'Zanzibar (East Coast)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury villa retreat' },
      { name: 'The Mora Zanzibar', location: 'Zanzibar (North Coast)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury all-inclusive resort' },
      { name: 'Bawe Island', location: 'Zanzibar (Bawe Island)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Private island luxury resort' },
      { name: 'Hotel Verde Zanzibar - Azam Luxury Resort', location: 'Zanzibar (Stone Town)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury resort and spa in Stone Town area' },
      { name: 'Emerson Spice Hotel', location: 'Zanzibar (Stone Town)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Boutique hotel in restored Stone Town mansion' },
      { name: 'Zanzibar Serena Hotel', location: 'Zanzibar (Stone Town)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Luxury hotel in historic Stone Town building' },
      { name: 'The Neela Boutique Hotel', location: 'Zanzibar (Stone Town)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Boutique hotel in Stone Town' },
      { name: 'Jafferji House', location: 'Zanzibar (Stone Town)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Heritage boutique hotel in Stone Town' },
      { name: 'Z Hotel Zanzibar', location: 'Zanzibar (North Coast, Nungwi)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Stylish beach hotel in Nungwi' },
      { name: 'Breezes Beach Club & Spa', location: 'Zanzibar (East Coast, Bwejuu)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Beach resort and spa on Bwejuu beach' },
      { name: 'Unguja Lodge', location: 'Zanzibar (South Coast, Kizimkazi)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Boutique lodge on the south coast' },
      { name: 'Shooting Star Lodge', location: 'Zanzibar (South Coast, Kizimkazi)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Boutique relaxation lodge' },
      { name: 'Chumbe Island Coral Park', location: 'Zanzibar (Chumbe Island)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Eco-lodge on private island with coral reef sanctuary' },
      { name: 'Paradise Beach Resort', location: 'Zanzibar (East Coast, Marumbi)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Family-friendly 4-star beach resort' },
      { name: 'Zanzibar Bay Resort', location: 'Zanzibar (East Coast, Marumbi)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: '4-star beach resort, 104 rooms' },
      { name: 'Dhow Inn', location: 'Zanzibar (East Coast, Paje)', category: 'Budget', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Zanzibar Airport (ZNZ)'], notes: 'Budget boutique hotel in Paje' }
  ] },
  { name: 'Pemba', slug: 'pemba', lodges: [
      { name: 'The Aiyana Resort & Spa', location: 'Pemba Island', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Pemba Airport (PMA)'], notes: '5-star luxury resort on Pemba Island' },
      { name: 'Fundu Lagoon', location: 'Pemba Island (southwest shore)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Pemba Airport (PMA)'], notes: 'Private boutique hotel on mangrove-fringed beach' },
      { name: 'The Manta Resort', location: 'Pemba Island (north tip)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Pemba Airport (PMA)'], notes: '20 rooms, famous underwater room' },
      { name: 'Emerald Bay Resort', location: 'Pemba Island', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Pemba Airport (PMA)'], notes: 'Beach resort on Pemba' },
      { name: 'Pemba Eco Lodge', location: 'Pemba Island', category: 'Budget', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Pemba Airport (PMA)'], notes: 'Eco-friendly budget lodge' }
  ] },
  { name: 'Mafia', slug: 'mafia', lodges: [
      { name: 'Basecamp Mafia Island', location: 'Mafia Island Marine Park', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mafia Airport (MFA)'], notes: 'Beach lodge in Chole Bay, diving and whale sharks' },
      { name: 'Pole Pole Bungalows', location: 'Mafia Island Marine Park', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mafia Airport (MFA)'], notes: 'Eco-lodge on hillside overlooking Chole Bay' },
      { name: 'Chole Mjini', location: 'Mafia Island (Chole Island)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mafia Airport (MFA)'], notes: 'Treehouse eco-lodge on Chole Island ruins' },
      { name: 'Eco Shamba Kilole Lodge', location: 'Mafia Island', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mafia Airport (MFA)'], notes: 'Eco lodge on Mafia Island' },
      { name: 'Butiama Marine Camp', location: 'Mafia Island', category: 'Budget', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mafia Airport (MFA)'], notes: 'Beach camp with dive center' }
  ] },
  { name: 'Other', slug: 'other', lodges: [
      { name: 'Thanda Island', location: 'Shungimbili Island (near Mafia)', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mafia Airport (MFA)'], notes: 'Exclusive-use private island' },
      { name: 'Hondo Hondo Udzungwa Forest Tented Camp', location: 'Udzungwa Mountains National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Tented camp in forest setting near park entrance' },
      { name: 'Udzungwa Falls Lodge', location: 'Udzungwa Mountains National Park (bordering)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Lodge overlooking rainforest' },
      { name: 'Rubondo Island Camp (Asilia)', location: 'Rubondo Island National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Rubondo Island Airstrip'], notes: 'Only lodge on the island, 8 luxury bandas on Lake Victoria' },
      { name: 'Utengule Coffee Lodge', location: 'Kitulo National Park area (Mbeya)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Mbeya Airport'], notes: '16 luxurious rooms in coffee estate near Mbeya' },
      { name: 'Lazy Lagoon Island Lodge', location: 'Lazy Lagoon Island (near Bagamoyo)', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Dar es Salaam Airport (DAR)'], notes: 'Private island lodge near Bagamoyo coast' },
      { name: 'Mufindi Highland Lodge', location: 'Mufindi Highlands', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Iringa Airport'], notes: 'Lodge in Southern Highlands tea and forest area' },
      { name: 'Udzungwa Forest Camp', location: 'Udzungwa Mountains National Park (bordering)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mikumi Airstrip'], notes: 'Eco-friendly tented camp near the park' },
      { name: 'Kitulo Plateau Guest Lodge', location: 'Kitulo National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mbeya Airport'], notes: 'Basic guest rooms and bandas inside the park' }
  ] }
]

const dividerImages: Record<number, string> = {
  2: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=400&fit=crop',
  7: 'https://images.unsplash.com/photo-1535338454528-1b5c8bb9b1de?w=1600&h=400&fit=crop',
  12: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&h=400&fit=crop'
}

function CategoryBadge({ category }: { category: string }) {
  const styles: Record<string, string> = {
    Luxury: 'bg-amber-100 text-amber-800 border-amber-300',
    'Mid-Range': 'bg-blue-100 text-blue-800 border-blue-300',
    Budget: 'bg-green-100 text-green-800 border-green-300',
  }
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full border ${styles[category] || 'bg-gray-100 text-gray-700 border-gray-300'}`}>
      {category}
    </span>
  )
}

function PositionBadge({ position }: { position: string }) {
  const styles: Record<string, string> = {
    'Inside Park': 'bg-green-100 text-green-800 border-green-300',
    'Inside Conservancy': 'bg-purple-100 text-purple-800 border-purple-300',
    'Park Border': 'bg-orange-100 text-orange-800 border-orange-300',
    Outside: 'bg-gray-100 text-gray-700 border-gray-300',
    Beach: 'bg-cyan-100 text-cyan-800 border-cyan-300',
    'Mountain Route': 'bg-yellow-900/10 text-yellow-900 border-yellow-800/30',
  }
  return (
    <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full border ${styles[position] || 'bg-gray-100 text-gray-700 border-gray-300'}`}>
      {position}
    </span>
  )
}

function LodgeTable({ lodges }: { lodges: Lodge[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#4F5D56] text-white">
            <th className="text-left px-3 py-2.5 font-semibold">Lodge Name</th>
            <th className="text-left px-3 py-2.5 font-semibold">Category</th>
            <th className="text-left px-3 py-2.5 font-semibold hidden md:table-cell">Location</th>
            <th className="text-left px-3 py-2.5 font-semibold hidden md:table-cell">Position</th>
            <th className="text-left px-3 py-2.5 font-semibold hidden md:table-cell">Conservancy / Concession</th>
            <th className="text-left px-3 py-2.5 font-semibold hidden md:table-cell">Airstrip(s)</th>
            <th className="text-left px-3 py-2.5 font-semibold hidden md:table-cell">Notes</th>
          </tr>
        </thead>
        <tbody>
          {lodges.map((lodge, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}>
              <td className="px-3 py-2.5 align-top">
                <span className="font-bold text-gray-900">{lodge.name}</span>
                <div className="md:hidden mt-1 space-y-1 text-xs text-gray-600">
                  <div>{lodge.location}</div>
                  <div className="flex flex-wrap gap-1">
                    <PositionBadge position={lodge.parkPosition} />
                    {lodge.conservancyName && (
                      <span className="text-purple-700 font-medium">{lodge.conservancyName}</span>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-3 py-2.5 align-top"><CategoryBadge category={lodge.category} /></td>
              <td className="px-3 py-2.5 align-top text-gray-700 hidden md:table-cell">{lodge.location}</td>
              <td className="px-3 py-2.5 align-top hidden md:table-cell"><PositionBadge position={lodge.parkPosition} /></td>
              <td className="px-3 py-2.5 align-top text-gray-700 hidden md:table-cell">{lodge.conservancyName || '\u2014'}</td>
              <td className="px-3 py-2.5 align-top text-gray-600 hidden md:table-cell">{lodge.nearestAirstrips.join(', ') || '\u2014'}</td>
              <td className="px-3 py-2.5 align-top text-gray-600 text-xs hidden md:table-cell max-w-xs">{lodge.notes || '\u2014'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function TanzaniaLodgesPage() {
  const totalLodges = regions.reduce((sum, r) => sum + r.lodges.length, 0)
  const totalConservancies = new Set(
    regions.flatMap(r => r.lodges.map(l => l.conservancyName).filter(Boolean))
  ).size

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative bg-[#4F5D56] text-white pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-serif">
            Complete Tanzania Safari Lodges &amp; Camps Directory
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Every safari lodge, tented camp, beach resort, and mountain camp across Tanzania&apos;s national parks, conservation areas, and concessions.
          </p>
          <div className="inline-block bg-white/10 rounded-full px-6 py-2 text-lg font-semibold">
            {totalLodges} Properties
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-[var(--warm-ivory)] border-b">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#A68B52]">{totalLodges}</div>
            <div className="text-sm text-gray-600">Total Lodges &amp; Camps</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#A68B52]">{regions.length}</div>
            <div className="text-sm text-gray-600">Regions Covered</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold text-[#A68B52]">{totalConservancies}</div>
            <div className="text-sm text-gray-600">Conservancies & Concessions</div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Table of Contents */}
        <nav className="mb-10 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Jump to Region</h2>
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <a
                key={r.slug}
                href={`#${r.slug}`}
                className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-[#A68B52] hover:text-white text-sm rounded-full text-gray-700 transition-colors border"
              >
                {r.name} <span className="text-xs opacity-70">({r.lodges.length})</span>
              </a>
            ))}
          </div>
        </nav>

        {/* Legend */}
        <div className="mb-8 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Key</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Category</h3>
              <div className="flex flex-wrap gap-2">
                <CategoryBadge category="Luxury" />
                <CategoryBadge category="Mid-Range" />
                <CategoryBadge category="Budget" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Position</h3>
              <div className="flex flex-wrap gap-2">
                <PositionBadge position="Inside Park" />
                <PositionBadge position="Inside Conservancy" />
                <PositionBadge position="Park Border" />
                <PositionBadge position="Outside" />
                <PositionBadge position="Beach" />
                <PositionBadge position="Mountain Route" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Position Matters */}
        <div className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">\ud83c\udfd5\ufe0f Why Lodge Location Matters for Your Budget</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="mb-3"><strong className="text-green-800">Inside Park:</strong> You&apos;ll pay daily park entry fees (TANAPA) for every night you stay. No need to drive in and out.</p>
              <p><strong className="text-purple-800">Inside Conservancy:</strong> Concession fees (often included in room rate) replace park entry fees. You&apos;ll only pay park fees on days you drive into the adjacent national park/reserve for game drives.</p>
            </div>
            <div>
              <p className="mb-3"><strong className="text-orange-800">Park Border:</strong> Located just outside the gate. You&apos;ll pay park fees each day you enter for game drives, but save on nights when you don&apos;t.</p>
              <p><strong className="text-gray-700">Outside:</strong> Town or city-based. Park fees apply only on game drive days. Usually the most affordable base.</p>
            </div>
          </div>
        </div>

        {/* Region Sections */}
        {regions.map((region, idx) => (
          <section key={region.slug} id={region.slug} className="mb-12">
            {dividerImages[idx] && (
              <div className="relative w-full h-32 md:h-48 rounded-xl overflow-hidden mb-8">
                <Image
                  src={dividerImages[idx]}
                  alt="Tanzania safari landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 bg-[#A68B52] rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-serif">
                {region.name}
              </h2>
              <span className="text-sm text-gray-500 font-medium">{region.lodges.length} {region.lodges.length === 1 ? 'property' : 'properties'}</span>
            </div>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <LodgeTable lodges={region.lodges} />
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="mt-16 mb-8 bg-[#4F5D56] text-white rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 font-serif">Can&apos;t Decide? Let Us Help</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            With {totalLodges} properties to choose from, finding the perfect lodge can be overwhelming.
            Our safari experts will match you with the ideal accommodation based on your budget, interests, and travel dates.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#A68B52] hover:bg-[#8B7343] text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Get Free Expert Advice
          </a>
        </section>
      </div>
    </div>
  )
}
