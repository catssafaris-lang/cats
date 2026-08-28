import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Complete Rwanda Safari Lodges & Camps Directory | C.A.T.S Safaris',
  description: 'Comprehensive directory of all safari lodges, tented camps, and hotels across Rwanda\'s national parks, Lake Kivu, and Kigali. From luxury gorilla trekking lodges at Volcanoes National Park to Big Five camps at Akagera and forest retreats at Nyungwe.',
  openGraph: {
    title: 'Complete Rwanda Safari Lodges & Camps Directory',
    description: 'Every safari lodge and camp in Rwanda — from ultra-luxury gorilla trekking lodges to lakeside retreats and city hotels. Properties across all parks and regions.',
    url: 'https://www.catssafaris.com/travel-info/rwanda-lodges',
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
  { name: 'Volcanoes National Park', slug: 'volcanoes', lodges: [
      { name: 'Singita Kwitonda Lodge', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Ultra-luxury lodge at foothills of Mount Gahinga, 8 suites with volcanic stone, opened 2019' },
      { name: 'Singita Kataza House', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Exclusive-use 4-bedroom villa adjacent to Kwitonda Lodge' },
      { name: 'Bisate Lodge', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Wilderness Safaris, 6 forest villas in volcanic amphitheatre, reforestation project' },
      { name: 'One&Only Gorilla\'s Nest', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Luxury resort with 21 lodge rooms and suites set among eucalyptus, pool and spa' },
      { name: 'Sabyinyo Silverback Lodge', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Governors\' Camp Collection, 9 cottages, community-owned, near Kinigi park HQ' },
      { name: 'Virunga Lodge', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Volcanoes Safaris, 10 bandas on ridge overlooking twin lakes Bulera and Ruhondo' },
      { name: 'Amakoro Songa Lodge', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Luxury lodge near Bisoke trailhead, 10 spacious rooms, volcanic rock design' },
      { name: 'The Retreat by Heaven', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Heaven brand luxury retreat near Musanze, farm-to-table dining, spa' },
      { name: 'Jack Hanna\'s Guest House', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Volcanoes Safaris, exclusive-use villa near Virunga Lodge' },
      { name: 'Wilderness Volcanoes Camp', location: 'Volcanoes National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Wilderness Safaris tented camp at base of Bisoke volcano' },
      { name: 'Mountain Gorilla View Lodge', location: 'Volcanoes National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: '30 rooms near Kinigi park HQ, closest lodge to gorilla trek briefing point' },
      { name: 'Five Volcanoes Boutique Hotel', location: 'Musanze', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Boutique hotel in Musanze town, 22 rooms, restaurant, garden' },
      { name: 'Le Bambou Gorilla Lodge', location: 'Volcanoes National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: '22 rooms near Kinigi, bamboo-themed, warm hospitality' },
      { name: 'Da Vinci Gorilla Lodge', location: 'Volcanoes National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Lodge near park HQ, comfortable rooms, garden setting' },
      { name: 'Tiloreza Volcanoes Ecolodge', location: 'Volcanoes National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Eco-lodge with volcano views, solar-powered, community projects' },
      { name: 'Gorillas Golf Hotel', location: 'Musanze', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Hotel with 9-hole golf course, pool, conference facilities, 10km from park' },
      { name: 'La Locanda', location: 'Musanze', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Italian-run boutique guesthouse, excellent restaurant, garden' },
      { name: 'Hotel Gorillas Volcanoes', location: 'Musanze', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Comfortable hotel in Musanze with volcano views' },
      { name: 'Ubumwe Hotel Musanze', location: 'Musanze', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Modern hotel in Musanze town centre' },
      { name: 'Ikoro Lodge', location: 'Volcanoes National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Lodge near Kinigi with views of the Virunga volcanoes' },
      { name: 'Fatima Hotel', location: 'Musanze', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Hotel in Musanze, restaurant and bar, reliable base for gorilla trekking' },
      { name: 'Red Rocks Rwanda', location: 'Musanze', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Cultural centre and guesthouse, community tourism, dorms and private rooms' },
      { name: 'Hotel Muhabura', location: 'Musanze', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Budget hotel in Musanze town, clean rooms, central location' },
      { name: 'Kinigi Guesthouse', location: 'Volcanoes National Park', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Basic guesthouse near park HQ, walking distance to briefing point' },
      { name: '2 Friends Guesthouse', location: 'Musanze', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Budget guesthouse in Musanze, restaurant, local tours' },
      { name: 'Muhabura Motel', location: 'Musanze', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Musanze (Ruhengeri) Airstrip', 'Kigali International Airport (KGL)'], notes: 'Budget accommodation in town centre' },
  ] },
  { name: 'Nyungwe Forest National Park', slug: 'nyungwe', lodges: [
      { name: 'One&Only Nyungwe House', location: 'Nyungwe Forest National Park', category: 'Luxury', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Luxury tea plantation lodge, 22 rooms, formerly Nyungwe Forest Lodge, set within Gisakura tea estate' },
      { name: 'Nyungwe Top View Hotel', location: 'Nyungwe Forest National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Hilltop hotel overlooking Nyungwe canopy, comfortable rooms' },
      { name: 'Nyungwe Nziza Ecolodge', location: 'Nyungwe Forest National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Eco-lodge near Gisakura, forest views, community-run' },
      { name: 'Nyungwe Forest Nziza Lodge', location: 'Nyungwe Forest National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Lodge near the forest edge, base for canopy walk and chimp tracking' },
      { name: 'Gisakura Guest House', location: 'Nyungwe Forest National Park', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'RDB-managed guesthouse near park entrance, basic but clean rooms' },
      { name: 'Kitabi Eco Centre', location: 'Nyungwe Forest National Park', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Eco-centre with basic rooms, near Kitabi entrance, education focus' },
      { name: 'Uwinka Campsite', location: 'Nyungwe Forest National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Basic campsite inside the park near canopy walkway trailhead' },
  ] },
  { name: 'Akagera National Park', slug: 'akagera', lodges: [
      { name: 'Magashi Camp', location: 'Akagera National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Akagera Airstrip', 'Kigali International Airport (KGL)'], notes: 'Wilderness Safaris, 6 luxury tents on Lake Rwanyakazinga, Big Five, exclusive access' },
      { name: 'Mantis Akagera Game Lodge', location: 'Akagera National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Akagera Airstrip', 'Kigali International Airport (KGL)'], notes: 'Hilltop lodge overlooking Lake Ihema, 44 rooms, pool, the original Akagera lodge, Mantis Collection' },
      { name: 'Ruzizi Tented Lodge', location: 'Akagera National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Akagera Airstrip', 'Kigali International Airport (KGL)'], notes: '9 safari tents near southern entrance on Lake Ihema shore, managed by Akagera Management Company' },
      { name: 'Karenge Bush Camp', location: 'Akagera National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Akagera Airstrip', 'Kigali International Airport (KGL)'], notes: '6 tents at Karenge viewpoint, overlooking lakes, managed by Akagera Management Company' },
      { name: 'Akagera Rhino Lodge', location: 'Akagera National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Akagera Airstrip', 'Kigali International Airport (KGL)'], notes: '24 rooms near southern entrance gate, affordable base for park safaris' },
      { name: 'Akagera Transit Lodge', location: 'Akagera National Park', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Akagera Airstrip', 'Kigali International Airport (KGL)'], notes: 'Basic lodge near park entrance, budget option for self-drive visitors' },
      { name: 'Shakani Campsite', location: 'Akagera National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Akagera Airstrip', 'Kigali International Airport (KGL)'], notes: 'Designated campsite inside the park with basic facilities' },
      { name: 'Muyumbu Campsite', location: 'Akagera National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Akagera Airstrip', 'Kigali International Airport (KGL)'], notes: 'Campsite on Lake Ihema shore, bring your own equipment' },
  ] },
  { name: 'Lake Kivu', slug: 'lake-kivu', lodges: [
      { name: 'Lake Kivu Serena Hotel', location: 'Gisenyi (Rubavu)', category: 'Luxury', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Serena Hotels, lakefront luxury hotel with pool, spa, water sports, conference facilities' },
      { name: 'Cleo Lake Kivu', location: 'Gisenyi (Rubavu)', category: 'Luxury', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Boutique luxury hotel on lakefront, modern design, pool, rooftop bar' },
      { name: 'Green Hills Eco Lodge', location: 'Nyamasheke', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Eco-lodge on hillside above Lake Kivu, community tourism, coffee plantation tours' },
      { name: 'Emeraude Kivu Resort', location: 'Cyangugu (Rusizi)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Resort on southern Lake Kivu, pool, restaurant, near Nyungwe Forest' },
      { name: 'Kivu Marina Bay Hotel', location: 'Gisenyi (Rubavu)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kigali International Airport (KGL)'], notes: 'Lakefront hotel with pool, water sports, conference centre' },
      { name: 'Paradise Malahide Hotel', location: 'Gisenyi (Rubavu)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kigali International Airport (KGL)'], notes: 'Hotel on Lake Kivu shore with pool, gardens, beach access' },
      { name: 'Stipp Hotel Lake Kivu', location: 'Gisenyi (Rubavu)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kigali International Airport (KGL)'], notes: 'Lakeside hotel, modern rooms, restaurant, garden, pool' },
      { name: 'Inzu Lodge', location: 'Gisenyi (Rubavu)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kigali International Airport (KGL)'], notes: 'Boutique lodge on lakefront, intimate setting, community-connected' },
      { name: 'Hotel Gorillas Lake Kivu', location: 'Gisenyi (Rubavu)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kigali International Airport (KGL)'], notes: 'Lakeside hotel, comfortable rooms, restaurant, popular with tour groups' },
      { name: 'Home Saint Jean', location: 'Kibuye (Karongi)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Church-run guesthouse on Lake Kivu peninsula, peaceful setting, clean rooms' },
      { name: 'Cormoran Lodge', location: 'Kibuye (Karongi)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Lodge on Kibuye lakefront, kayaking, boat trips to islands' },
      { name: 'Moriah Hill Resort', location: 'Kibuye (Karongi)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Hillside resort above Kibuye, lake views, conference rooms' },
      { name: 'Hotel Centre Bethanie', location: 'Kibuye (Karongi)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Lakeside hotel in Kibuye, restaurant, boat hire available' },
      { name: 'Palm Garden Resort', location: 'Gisenyi (Rubavu)', category: 'Mid-Range', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kigali International Airport (KGL)'], notes: 'Resort with pool, gardens, lake views, family-friendly' },
      { name: 'Kivu Peace View Hotel', location: 'Kibuye (Karongi)', category: 'Budget', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Kamembe Airport (KME)', 'Kigali International Airport (KGL)'], notes: 'Budget hotel with lake views in Kibuye' },
      { name: 'New Tam Hotel', location: 'Gisenyi (Rubavu)', category: 'Budget', parkPosition: 'Lake Shore', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kigali International Airport (KGL)'], notes: 'Budget hotel near Lake Kivu beach, basic rooms' },
  ] },
  { name: 'Kigali', slug: 'kigali', lodges: [
      { name: 'Kigali Marriott Hotel', location: 'Kigali City Centre', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'International 5-star hotel, pool, spa, rooftop bar, city centre location' },
      { name: 'Radisson Blu Hotel & Convention Centre', location: 'Kigali City Centre', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Modern 5-star hotel, convention centre, pool, multiple restaurants' },
      { name: 'Kigali Serena Hotel', location: 'Kigali City Centre', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Serena Hotels, elegant hotel in city centre, pool, spa, business facilities' },
      { name: 'The Retreat by Heaven Kigali', location: 'Kigali (Kiyovu)', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Boutique luxury hotel with views over Kigali, farm-to-table dining, pool' },
      { name: 'M Hotel Kigali', location: 'Kigali City Centre', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Modern luxury hotel, rooftop pool, city views, business-oriented' },
      { name: 'Hotel des Mille Collines', location: 'Kigali City Centre', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Historic hotel (Hotel Rwanda), pool, central location, 112 rooms' },
      { name: 'Heaven Boutique Hotel', location: 'Kigali (Kiyovu)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Boutique hotel with acclaimed restaurant, garden terrace' },
      { name: 'Ubumwe Grande Hotel', location: 'Kigali City Centre', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Modern hotel, pool, city views, business and leisure facilities' },
      { name: 'Park Inn by Radisson Kigali', location: 'Kigali City Centre', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Modern hotel, restaurant, good airport connections' },
      { name: 'Lemigo Hotel', location: 'Kigali (Kimihurura)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Large hotel near convention centre, pool, multiple restaurants, 200+ rooms' },
      { name: 'Hotel & Spa Villa Portofino', location: 'Kigali (Kiyovu)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Italian-style boutique hotel, spa, restaurant, garden' },
      { name: 'Onomo Hotel Kigali', location: 'Kigali City Centre', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Modern chain hotel, restaurant, good value' },
      { name: 'Gorillas Golf Hotel Kigali', location: 'Kigali (Nyarutarama)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Hotel near Kigali Golf Club, pool, restaurant, conference facilities' },
      { name: 'Four Points by Sheraton Kigali', location: 'Kigali City Centre', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'International chain hotel, modern rooms, restaurant' },
      { name: 'Norrsken Kigali House', location: 'Kigali City Centre', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Innovation hub with hotel, coworking, restaurants, modern design' },
      { name: 'The Manor Hotel', location: 'Kigali (Nyarutarama)', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Boutique hotel in quiet residential area, gardens, restaurant' },
      { name: 'Step Town Hotel', location: 'Kigali City Centre', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Budget hotel in city centre, clean rooms, restaurant' },
      { name: 'Discover Rwanda Youth Hostel', location: 'Kigali (Nyamirambo)', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Backpacker hostel, dorms and private rooms, rooftop bar, cultural tours' },
      { name: 'Kigali Backpackers Hostel', location: 'Kigali City Centre', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Kigali International Airport (KGL)'], notes: 'Budget hostel, social atmosphere, travel desk' },
  ] },
  { name: 'Gishwati-Mukura National Park', slug: 'gishwati-mukura', lodges: [
      { name: 'Gishwati Lodge', location: 'Gishwati-Mukura National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kigali International Airport (KGL)'], notes: 'Forest lodge near Gishwati, primate tracking base, community-linked, opened 2021' },
      { name: 'Pfunda Tea Estate Guest House', location: 'Gishwati-Mukura National Park', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Gisenyi Airport', 'Kigali International Airport (KGL)'], notes: 'Basic guesthouse on Pfunda tea plantation, near Gishwati forest' },
  ] },
]

const dividerImages: Record<number, string> = {
  1: 'https://images.pexels.com/photos/3889843/pexels-photo-3889843.jpeg?auto=compress&cs=tinysrgb&w=1600&h=400&fit=crop',
  3: 'https://images.pexels.com/photos/1574653/pexels-photo-1574653.jpeg?auto=compress&cs=tinysrgb&w=1600&h=400&fit=crop',
  5: 'https://images.pexels.com/photos/2739013/pexels-photo-2739013.jpeg?auto=compress&cs=tinysrgb&w=1600&h=400&fit=crop',
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

export default function RwandaLodgesPage() {
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
            Complete Rwanda Safari Lodges &amp; Camps Directory
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Every safari lodge, tented camp, and hotel across Rwanda&apos;s national parks, Lake Kivu, and Kigali &mdash; from luxury gorilla trekking lodges to lakeside retreats.
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
                <PositionBadge position="Lake Shore" />
                <PositionBadge position="Mountain Route" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Position Matters */}
        <div className="mb-10 bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Why Lodge Location Matters for Your Budget</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="mb-3"><strong className="text-green-800">Inside Park:</strong> You will pay daily park entry fees (RDB) for every night you stay. Perfect for immersive wildlife experiences without daily commutes.</p>
              <p><strong className="text-orange-800">Park Border:</strong> Located just outside the park boundary. Ideal for gorilla trekking as you are close to the briefing point. Park fees apply only on trekking days.</p>
            </div>
            <div>
              <p className="mb-3"><strong className="text-gray-700">Outside:</strong> Town or city-based properties. Usually more affordable with dining and shopping options nearby. Transport to parks required.</p>
              <p><strong className="text-sky-800">Lake Shore:</strong> Lakeside properties offering water activities and relaxation. A great complement to wildlife-focused safari days.</p>
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
                  alt="Rwanda safari landscape"
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
