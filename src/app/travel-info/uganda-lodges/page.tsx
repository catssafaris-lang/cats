import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Complete Uganda Safari Lodges & Camps Directory | C.A.T.S Safaris',
  description: 'Comprehensive directory of all safari lodges, tented camps, and guesthouses across Uganda\'s national parks, gorilla trekking areas, and wildlife reserves. Properties with locations, airstrips, and concession details for planning your Uganda safari.',
  openGraph: {
    title: 'Complete Uganda Safari Lodges & Camps Directory',
    description: 'Every safari lodge and camp in Uganda — from luxury gorilla trekking lodges in Bwindi to remote wilderness camps in Kidepo Valley. Properties across all parks and reserves.',
    url: 'https://www.catssafaris.com/travel-info/uganda-lodges',
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
  { name: 'Bwindi Impenetrable Forest', slug: 'bwindi-impenetrable-forest', lodges: [
      { name: 'Sanctuary Gorilla Forest Camp', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip', 'Kisoro Airstrip'], notes: 'Only luxury camp inside the park, Sanctuary Retreats, 8 tents' },
      { name: 'Bwindi Lodge', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: 'Volcanoes Safaris, 8 bandas with forest-edge views' },
      { name: 'Mahogany Springs Lodge', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: '4-star lodge overlooking Munyaga River, 14 suites' },
      { name: 'Clouds Mountain Gorilla Lodge', location: 'Bwindi Impenetrable NP (Nkuringo)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip', 'Kihihi Airstrip'], notes: 'Volcanoes Safaris, stone cottages at 1,900m with Virunga views' },
      { name: 'Silverback Lodge', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: 'Marasa Africa, luxury lodge above Buhoma village' },
      { name: 'Gorilla Safari Lodge', location: 'Bwindi Impenetrable NP (Rushaga)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Luxury lodge near Rushaga gorilla tracking sector' },
      { name: 'Haven Lodge Bwindi', location: 'Bwindi Impenetrable NP (Rushaga)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Haven Collection, private cottages with forest views' },
      { name: 'Chameleon Hill Lodge', location: 'Lake Mutanda, near Bwindi', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Colourful lodge on Lake Mutanda with Virunga volcano views' },
      { name: 'Bisate Lodge', location: 'Near Bwindi/Mgahinga', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Wilderness Safaris, 6 forest villas, reforestation project' },
      { name: 'Buhoma Lodge', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: 'Community-partnership lodge, 10 bandas near park headquarters' },
      { name: 'Engagi Lodge', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: '6 cottages overlooking Bwindi forest canopy' },
      { name: 'Trackers Safari Lodge', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: 'Mid-range lodge with forest views, near Buhoma trailhead' },
      { name: 'Nkuringo Bwindi Gorilla Lodge', location: 'Bwindi Impenetrable NP (Nkuringo)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip', 'Kihihi Airstrip'], notes: 'Community lodge on Nkuringo hilltop, Virunga views' },
      { name: 'Gorilla Heights Lodge', location: 'Bwindi Impenetrable NP (Nkuringo)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Lodge overlooking Bwindi from Nkuringo ridge' },
      { name: 'Ichumbi Gorilla Lodge', location: 'Bwindi Impenetrable NP (Rushaga)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Lodge near Rushaga tracking sector' },
      { name: 'Gorilla Mist Camp', location: 'Bwindi Impenetrable NP (Rushaga)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Tented camp near Rushaga sector' },
      { name: 'Lake Mutanda Resort', location: 'Lake Mutanda, near Bwindi', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Lakeside resort with volcano views, boat trips available' },
      { name: 'Bakiga Lodge', location: 'Bwindi Impenetrable NP (Ruhija)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip', 'Kisoro Airstrip'], notes: 'Lodge near Ruhija gorilla tracking sector, 2,350m altitude' },
      { name: 'Gorilla Valley Lodge', location: 'Bwindi Impenetrable NP (Rushaga)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Cottages near Rushaga tracking point' },
      { name: 'Broadbill Forest Camp', location: 'Bwindi Impenetrable NP (Ruhija)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip', 'Kisoro Airstrip'], notes: 'Tented camp in Ruhija sector, birding-focused' },
      { name: 'Gift of Nature Lodge', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: 'Community lodge near Buhoma gate' },
      { name: 'Ride 4 a Woman Guesthouse', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: 'Social enterprise guesthouse, community-run' },
      { name: 'Buhoma Community Rest Camp', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: 'UWA community campsite and bandas, budget-friendly' },
      { name: 'Nkuringo Community Camp', location: 'Bwindi Impenetrable NP (Nkuringo)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Community-run bandas and campsite at Nkuringo' },
      { name: 'Ruhija Community Rest Camp', location: 'Bwindi Impenetrable NP (Ruhija)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip', 'Kisoro Airstrip'], notes: 'UWA basic bandas in Ruhija sector' },
      { name: 'Wagtail Eco Safari Camp', location: 'Bwindi Impenetrable NP (Buhoma)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kihihi Airstrip'], notes: 'Budget eco-camp near Buhoma' },
  ] },
  { name: 'Queen Elizabeth National Park', slug: 'queen-elizabeth', lodges: [
      { name: 'Mweya Safari Lodge', location: 'Mweya Peninsula, Queen Elizabeth NP', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Iconic lodge on Mweya Peninsula overlooking Kazinga Channel, pool' },
      { name: 'Kyambura Gorge Lodge', location: 'Queen Elizabeth NP (Kyambura)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Volcanoes Safaris, converted coffee farm on gorge rim, chimp tracking' },
      { name: 'Katara Lodge', location: 'Queen Elizabeth NP (Katunguru)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Luxury cottages overlooking the Rift Valley and Lake Edward' },
      { name: 'Ishasha Wilderness Camp', location: 'Queen Elizabeth NP (Ishasha Sector)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Ishasha Airstrip', 'Kihihi Airstrip'], notes: 'Luxury tented camp on Ntungwe River, famous tree-climbing lions area' },
      { name: 'Pumba Safari Cottages', location: 'Queen Elizabeth NP (Katunguru)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Luxury cottages near Kazinga Channel' },
      { name: 'Kasenyi Safari Camp', location: 'Queen Elizabeth NP (Kasenyi)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Tented camp on Kasenyi plains, prime lion territory' },
      { name: 'Jacana Safari Lodge', location: 'Queen Elizabeth NP (Maramagambo)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Lodge near Maramagambo Forest and crater lakes' },
      { name: 'Enjojo Lodge', location: 'Queen Elizabeth NP (Ishasha Sector)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Ishasha Airstrip', 'Kihihi Airstrip'], notes: 'Eco-lodge near Ishasha sector, tree-climbing lion country' },
      { name: 'Bush Lodge Queen Elizabeth', location: 'Queen Elizabeth NP', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Standard lodge inside the park' },
      { name: 'Twin Lakes Safari Lodge', location: 'Queen Elizabeth NP (Crater Lakes)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kasese Airstrip'], notes: 'Lodge between crater lakes, scenic setting' },
      { name: 'Park View Safari Lodge', location: 'Kasese, near Queen Elizabeth NP', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kasese Airstrip'], notes: 'Lodge in Kasese town with park views' },
      { name: 'Queen Elizabeth Bush Lodge', location: 'Queen Elizabeth NP', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Mid-range lodge in the park' },
      { name: 'Ihamba Lakeside Safari Lodge', location: 'Queen Elizabeth NP (Katunguru)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Lodge on the shores of Lake George' },
      { name: 'Marafiki Safari Lodge', location: 'Queen Elizabeth NP', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Safari lodge near the park' },
      { name: 'Simba Safari Camp', location: 'Queen Elizabeth NP', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'Budget tented camp inside the park' },
      { name: 'Mweya Hostel', location: 'Mweya Peninsula, Queen Elizabeth NP', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mweya Airstrip', 'Kasese Airstrip'], notes: 'UWA budget hostel on Mweya Peninsula' },
      { name: 'Ishasha Jungle Lodge', location: 'Queen Elizabeth NP (Ishasha Sector)', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Ishasha Airstrip', 'Kihihi Airstrip'], notes: 'Budget lodge near Ishasha sector' },
  ] },
  { name: 'Murchison Falls National Park', slug: 'murchison-falls', lodges: [
      { name: 'Paraa Safari Lodge', location: 'Murchison Falls NP (South Bank)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Pakuba Airstrip', 'Bugungu Airstrip'], notes: 'Historic lodge at Paraa crossing, pool, views over the Nile' },
      { name: 'Chobe Safari Lodge', location: 'Murchison Falls NP (North Bank)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Pakuba Airstrip'], notes: 'Luxury lodge on north bank of the Victoria Nile' },
      { name: 'Baker\'s Lodge', location: 'Murchison Falls NP (South Bank)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Pakuba Airstrip', 'Bugungu Airstrip'], notes: 'Wild Frontiers, 8 thatched chalets on the Nile' },
      { name: 'Nile Safari Lodge', location: 'Murchison Falls NP (South Bank)', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Pakuba Airstrip', 'Bugungu Airstrip'], notes: 'Luxury lodge outside park on Nile bank, pool and spa' },
      { name: 'Pakuba Safari Lodge', location: 'Murchison Falls NP (North Bank)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Pakuba Airstrip'], notes: 'Restored historic lodge on north bank, 25 rooms' },
      { name: 'Murchison River Lodge', location: 'Near Murchison Falls NP (South)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Bugungu Airstrip', 'Pakuba Airstrip'], notes: 'Lodge near southern gate, pool and gardens' },
      { name: 'Sambiya River Lodge', location: 'Near Murchison Falls NP (South)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Bugungu Airstrip', 'Pakuba Airstrip'], notes: 'Lodge near Sambiya River, close to park gate' },
      { name: 'Fort Murchison Lodge', location: 'Near Murchison Falls NP', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Bugungu Airstrip', 'Pakuba Airstrip'], notes: 'Lodge near the park entrance' },
      { name: 'Twiga Safari Lodge', location: 'Near Murchison Falls NP', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Bugungu Airstrip'], notes: 'Safari lodge near the southern entrance' },
      { name: 'Kabalega Wilderness Lodge', location: 'Near Murchison Falls NP', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Bugungu Airstrip'], notes: 'Lodge near park entrance, named after Kabalega Falls' },
      { name: 'Heritage Safari Lodge', location: 'Near Murchison Falls NP', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Bugungu Airstrip'], notes: 'Mid-range lodge with gardens near park' },
      { name: 'Red Chilli Rest Camp', location: 'Murchison Falls NP (South Bank)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Pakuba Airstrip', 'Bugungu Airstrip'], notes: 'Budget bandas and camping inside the park near Paraa' },
      { name: 'Yebo Safari Camp', location: 'Near Murchison Falls NP', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Bugungu Airstrip'], notes: 'Budget-friendly camp near park entrance' },
      { name: 'Murchison Backpackers', location: 'Near Murchison Falls NP', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Bugungu Airstrip'], notes: 'Backpacker accommodation and camping' },
  ] },
  { name: 'Kibale Forest National Park', slug: 'kibale-forest', lodges: [
      { name: 'Primate Lodge Kibale', location: 'Kibale Forest NP (Kanyanchu)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kasese Airstrip', 'Fort Portal Airstrip'], notes: 'UWA luxury lodge inside the forest, cottages and treehouses' },
      { name: 'Kyaninga Lodge', location: 'Near Kibale Forest NP', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip', 'Kasese Airstrip'], notes: 'Hand-built log cabins on Kyaninga crater lake, infinity pool' },
      { name: 'Ndali Lodge', location: 'Near Kibale Forest NP', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip', 'Kasese Airstrip'], notes: 'Hilltop lodge overlooking Ndali-Kasenda crater lakes' },
      { name: 'Papaya Lake Lodge', location: 'Near Kibale Forest NP', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip', 'Kasese Airstrip'], notes: 'Boutique lodge on a crater lake near Fort Portal' },
      { name: 'Turaco Treetops Lodge', location: 'Near Kibale Forest NP', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip', 'Kasese Airstrip'], notes: 'Mid-range lodge on edge of Kibale Forest' },
      { name: 'Kibale Forest Camp', location: 'Near Kibale Forest NP', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip', 'Kasese Airstrip'], notes: 'Safari camp near Kanyanchu visitor centre' },
      { name: 'Isunga Lodge', location: 'Near Kibale Forest NP', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip', 'Kasese Airstrip'], notes: 'Lodge on forest edge near chimp tracking start' },
      { name: 'Mountains of the Moon Hotel', location: 'Fort Portal', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip'], notes: 'Established hotel in Fort Portal, base for Kibale visits' },
      { name: 'Chimpanzee Forest Guesthouse', location: 'Kibale Forest NP (Kanyanchu)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip', 'Kasese Airstrip'], notes: 'UWA guesthouse inside the park at Kanyanchu' },
      { name: 'Rwenzori View Guesthouse', location: 'Fort Portal', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip'], notes: 'Budget guesthouse in Fort Portal' },
      { name: 'Kanyanchu River Camp', location: 'Kibale Forest NP (Kanyanchu)', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Fort Portal Airstrip', 'Kasese Airstrip'], notes: 'UWA basic bandas near Kanyanchu centre' },
  ] },
  { name: 'Kidepo Valley National Park', slug: 'kidepo-valley', lodges: [
      { name: 'Apoka Safari Lodge', location: 'Kidepo Valley NP', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Apoka Airstrip', 'Lomej Airstrip'], notes: 'Wild Frontiers, luxury lodge overlooking Narus Valley, pool' },
      { name: 'Kidepo Savannah Lodge', location: 'Kidepo Valley NP', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Apoka Airstrip', 'Lomej Airstrip'], notes: 'Luxury lodge with views of Narus Valley' },
      { name: 'Nga\'Moru Wilderness Camp', location: 'Kidepo Valley NP', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Apoka Airstrip', 'Lomej Airstrip'], notes: 'Tented camp in Narus Valley, community-run' },
      { name: 'Kidepo Wilderness Camp', location: 'Kidepo Valley NP', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Apoka Airstrip', 'Lomej Airstrip'], notes: 'Safari camp in the valley' },
      { name: 'Adere Safari Lodge', location: 'Kidepo Valley NP', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Apoka Airstrip', 'Lomej Airstrip'], notes: 'Mid-range lodge inside the park' },
      { name: 'UWA Bandas Kidepo', location: 'Kidepo Valley NP', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Apoka Airstrip', 'Lomej Airstrip'], notes: 'UWA basic bandas and campsite at Apoka' },
  ] },
  { name: 'Lake Mburo National Park', slug: 'lake-mburo', lodges: [
      { name: 'Mihingo Lodge', location: 'Lake Mburo NP', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lake Mburo Airstrip'], notes: 'Award-winning eco-lodge on rocky hilltop, pool, horseback safaris' },
      { name: 'Kigambira Safari Lodge', location: 'Lake Mburo NP', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lake Mburo Airstrip'], notes: 'Luxury lodge near Lake Mburo shore' },
      { name: 'Rwakobo Rock', location: 'Lake Mburo NP', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Lake Mburo Airstrip'], notes: 'Built into rock outcrops overlooking the park' },
      { name: 'Arcadia Cottages Lake Mburo', location: 'Lake Mburo NP', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Lake Mburo Airstrip'], notes: 'Self-contained cottages near the park' },
      { name: 'Mantana Tented Camp', location: 'Lake Mburo NP', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lake Mburo Airstrip'], notes: 'Mobile tented camp on lake shore' },
      { name: 'Eagle\'s Nest Lodge', location: 'Lake Mburo NP', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Lake Mburo Airstrip'], notes: 'Mid-range lodge near the park' },
      { name: 'Leopard Rest Camp', location: 'Lake Mburo NP', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Lake Mburo Airstrip'], notes: 'Budget camp near the park' },
      { name: 'UWA Bandas Lake Mburo', location: 'Lake Mburo NP', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Lake Mburo Airstrip'], notes: 'UWA basic bandas and campsite inside the park' },
  ] },
  { name: 'Mgahinga Gorilla National Park', slug: 'mgahinga-gorilla', lodges: [
      { name: 'Mount Gahinga Lodge', location: 'Mgahinga Gorilla NP', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Volcanoes Safaris, stone-and-thatch bandas at foot of Mt Gahinga' },
      { name: 'Clouds Lodge Mgahinga', location: 'Near Mgahinga Gorilla NP', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Luxury lodge near park entrance with volcano views' },
      { name: 'Travellers Rest Hotel', location: 'Kisoro, near Mgahinga', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Historic hotel est. 1950s, base for gorilla tracking since Dian Fossey era' },
      { name: 'Amajambere Iwacu Community Camp', location: 'Near Mgahinga Gorilla NP', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Community camp at foot of Virunga volcanoes' },
      { name: 'Lake Chahafi Resort', location: 'Kisoro, near Mgahinga', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Lakeside resort near Kisoro town' },
      { name: 'Kisoro Tourist Hotel', location: 'Kisoro', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'Budget hotel in Kisoro town' },
      { name: 'UWA Bandas Mgahinga', location: 'Mgahinga Gorilla NP', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kisoro Airstrip'], notes: 'UWA basic bandas at Ntebeko gate' },
  ] },
  { name: 'Semuliki National Park', slug: 'semuliki', lodges: [
      { name: 'Semuliki Safari Lodge', location: 'Semuliki Wildlife Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Semliki Airstrip', 'Fort Portal Airstrip'], notes: 'Luxury lodge in Toro-Semliki Wildlife Reserve, hot springs visits' },
      { name: 'UWA Bandas Semuliki', location: 'Semuliki NP', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Semliki Airstrip', 'Fort Portal Airstrip'], notes: 'UWA accommodation near Sempaya hot springs' },
      { name: 'Ntoroko Game Lodge', location: 'Near Semuliki NP', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Semliki Airstrip'], notes: 'Lodge near Lake Albert and Semliki flats' },
      { name: 'Bumaga Campsite', location: 'Semuliki NP', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Semliki Airstrip', 'Fort Portal Airstrip'], notes: 'Basic campsite inside the park' },
  ] },
  { name: 'Rwenzori Mountains National Park', slug: 'rwenzori-mountains', lodges: [
      { name: 'Equator Snow Lodge', location: 'Near Rwenzori Mountains NP', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kasese Airstrip'], notes: 'Luxury lodge at the foot of the Rwenzoris, base for trekking' },
      { name: 'Rwenzori Trekking Services Camp', location: 'Rwenzori Mountains NP (Kilembe Trail)', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kasese Airstrip'], notes: 'Base camp and mountain huts along Kilembe Trail' },
      { name: 'Ruboni Community Camp', location: 'Near Rwenzori Mountains NP', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kasese Airstrip'], notes: 'Community-run camp at Ruboni, nature walks and day hikes' },
      { name: 'Rwenzori Mountaineering Services', location: 'Rwenzori Mountains NP (Central Circuit)', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kasese Airstrip'], notes: 'Mountain huts along Central Circuit trail to Margherita Peak' },
      { name: 'Mihunga Safari Lodge', location: 'Near Rwenzori Mountains NP', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kasese Airstrip'], notes: 'Lodge near Rwenzoris with mountain views' },
      { name: 'Sandton Hotel Kasese', location: 'Kasese', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kasese Airstrip'], notes: 'Town hotel as budget base for Rwenzori treks' },
  ] },
  { name: 'Ziwa Rhino Sanctuary', slug: 'ziwa-rhino-sanctuary', lodges: [
      { name: 'Amuka Safari Lodge', location: 'Ziwa Rhino Sanctuary', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Nakitoma Airstrip'], notes: 'Lodge inside the sanctuary, rhino tracking walks' },
      { name: 'Ziwa Rhino Lodge', location: 'Ziwa Rhino Sanctuary', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Nakitoma Airstrip'], notes: 'Accommodation inside the sanctuary with rhino walks' },
      { name: 'Ziwa Rhino Campsite', location: 'Ziwa Rhino Sanctuary', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Nakitoma Airstrip'], notes: 'Basic camping and bandas at the sanctuary' },
  ] },
  { name: 'Jinja & Source of the Nile', slug: 'jinja-source-of-the-nile', lodges: [
      { name: 'Wildwaters Lodge', location: 'Private island on the Nile, Jinja', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Jinja Airstrip'], notes: 'Luxury lodge on private island above Itanda Falls, Wild Frontiers' },
      { name: 'The Haven Jinja', location: 'Jinja, Nile River', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Jinja Airstrip'], notes: 'Boutique hotel on the Nile with pool and gardens' },
      { name: 'Lemala Wildwaters Lodge', location: 'Nile River, Jinja', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Jinja Airstrip'], notes: 'Luxury tented suites on the Nile rapids' },
      { name: 'Jinja Nile Resort', location: 'Jinja', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Jinja Airstrip'], notes: 'Resort hotel on the Nile, pool, conference facilities' },
      { name: 'Source of the Nile Hotel', location: 'Jinja', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Jinja Airstrip'], notes: 'Hotel near the source of the Nile' },
      { name: 'Nile River Camp', location: 'Jinja', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Jinja Airstrip'], notes: 'Tented camp on the Nile, rafting base' },
      { name: '2 Friends Beach Hotel', location: 'Jinja', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Jinja Airstrip'], notes: 'Beachfront hotel on Lake Victoria near Jinja' },
      { name: 'Nile River Explorers', location: 'Jinja', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Jinja Airstrip'], notes: 'Backpacker camp and rafting outfitter on the Nile' },
      { name: 'Adrift Nile High Camp', location: 'Jinja', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Jinja Airstrip'], notes: 'Adventure camp, white water rafting base' },
  ] },
  { name: 'Entebbe & Kampala', slug: 'entebbe-and-kampala', lodges: [
      { name: 'Kampala Serena Hotel', location: 'Kampala', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Five-star hotel in central Kampala, pool, spa, conference centre' },
      { name: 'Sheraton Kampala Hotel', location: 'Kampala', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Luxury hotel in Kampala city centre, pool and gardens' },
      { name: 'Lake Victoria Serena Golf Resort & Spa', location: 'Entebbe', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Luxury lakeside resort with golf course, pool, spa, near airport' },
      { name: 'Protea Hotel by Marriott Entebbe', location: 'Entebbe', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'International-standard hotel near Entebbe airport' },
      { name: 'K Hotel Entebbe', location: 'Entebbe', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Comfortable hotel near airport, gardens and pool' },
      { name: 'Boma Entebbe', location: 'Entebbe', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Guesthouse near Entebbe Botanical Gardens' },
      { name: 'Papyrus Guest House', location: 'Entebbe', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Popular guesthouse on the shores of Lake Victoria' },
      { name: 'The Boma Hotel Entebbe', location: 'Entebbe', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Boutique hotel in Entebbe with garden setting' },
      { name: 'Hotel No. 5', location: 'Entebbe', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Boutique hotel in Entebbe town centre' },
      { name: 'Cassia Lodge', location: 'Kampala', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Hillside lodge in Kampala with city views' },
      { name: 'Red Chilli Hideaway', location: 'Kampala', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Backpacker hostel and campsite in Kampala' },
      { name: 'Backpackers Hostel Entebbe', location: 'Entebbe', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Entebbe International Airport (HUEN)'], notes: 'Budget hostel near Entebbe airport' },
  ] },
]

const dividerImages: Record<number, string> = {
  2: 'https://images.pexels.com/photos/3392225/pexels-photo-3392225.jpeg?auto=compress&cs=tinysrgb&w=1600&h=400&fit=crop',
  4: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1600&h=400&fit=crop',
  7: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=1600&h=400&fit=crop',
  10: 'https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=1600&h=400&fit=crop',
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
    'Lake Shore': 'bg-sky-100 text-sky-800 border-sky-300',
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
            <th className="text-left px-3 py-2.5 font-semibold hidden md:table-cell">Conservancy</th>
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

export default function UgandaLodgesPage() {
  const totalLodges = regions.reduce((sum, r) => sum + r.lodges.length, 0)
  const totalConservancies = new Set(
    regions.flatMap(r => r.lodges.map(l => l.conservancyName).filter(Boolean))
  ).size

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative bg-[#4F5D56] text-white pt-32 md:pt-36 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Complete Uganda Safari Lodges &amp; Camps Directory
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Every safari lodge, tented camp, and guesthouse across Uganda&apos;s national parks, gorilla trekking areas, and wildlife reserves.
          </p>
          <div className="inline-block bg-white/10 rounded-full px-6 py-2 text-lg font-semibold">
            {totalLodges} Properties
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white border-b">
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
            <div className="text-sm text-gray-600">Conservancies</div>
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
                <PositionBadge position="Mountain Route" />
                <PositionBadge position="Lake Shore" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Position Matters */}
        <div className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Why Lodge Location Matters for Your Budget</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="mb-3"><strong className="text-green-800">Inside Park:</strong> You&apos;ll pay daily UWA park entry fees for every night you stay. No need to drive in and out. Best for maximising game-viewing time.</p>
              <p><strong className="text-orange-800">Park Border:</strong> Located just outside the gate. You&apos;ll pay park fees each day you enter for activities, but save on nights when you rest at the lodge.</p>
            </div>
            <div>
              <p className="mb-3"><strong className="text-purple-800">Inside Conservancy:</strong> Some lodges sit within private wildlife concessions. Conservancy fees may be included in the rate and replace daily park fees.</p>
              <p><strong className="text-gray-700">Outside:</strong> Town or city-based accommodation. Park fees apply only on activity days. Usually the most affordable base for exploring nearby parks.</p>
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
                  alt="Uganda safari landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1.5 h-10 bg-[#A68B52] rounded-full" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Can&apos;t Decide? Let Us Help</h2>
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
