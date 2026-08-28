import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Complete Kenya Safari Lodges & Camps Directory | C.A.T.S Safaris',
  description: 'Comprehensive directory of all safari lodges, tented camps, and beach resorts across Kenya\'s national parks, reserves, and private conservancies. 263 properties with locations, airstrips, and conservancy details.',
  openGraph: {
    title: 'Complete Kenya Safari Lodges & Camps Directory',
    description: 'Every safari lodge and camp in Kenya \u2014 from luxury Mara conservancy camps to budget-friendly park lodges. 263 properties across all parks and reserves.',
    url: 'https://www.catssafaris.com/travel-info/kenya-lodges',
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
  { name: 'Masai Mara', slug: 'masai-mara', lodges: [
      { name: 'Governors\' Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Musiara Airstrip'], notes: 'Classic tented camp on Mara River' },
      { name: 'Little Governors\' Camp', location: 'Masai Mara National Reserve (Mara Triangle)', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Musiara Airstrip'], notes: 'Intimate tented camp with own waterhole, reopening as Wilderness Mara 2026' },
      { name: 'Governors\' Il Moran Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Musiara Airstrip'], notes: 'Exclusive luxury tented camp, BBC Big Cat Diaries location' },
      { name: 'Mara Intrepids Tented Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Talek Airstrip', 'Keekorok Airstrip'], notes: 'Heritage Hotels property overlooking Talek River' },
      { name: 'Mara Elatia Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Talek Airstrip'], notes: 'Heritage Hotels, 16 safari tents' },
      { name: 'Fig Tree Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Talek Airstrip'], notes: 'Luxury tented camp on Talek River' },
      { name: 'Rekero Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Musiara Airstrip', 'Ngerende Airstrip'], notes: 'Asilia Africa, 9 tents on Talek River' },
      { name: 'Sala\'s Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Angama Airstrip'], notes: 'Remote southern Mara, 7 luxury tents' },
      { name: 'Elewana Sand River Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip'], notes: '1920s romantic safari style' },
      { name: 'Serian Nkorombo Mobile Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Musiara Airstrip'], notes: 'Mobile tented camp on riverside' },
      { name: 'Fairmont Mara Safari Club', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Ol Kiombo Airstrip', 'Mara North Airstrip'], notes: 'Luxury tented suites on Mara River' },
      { name: 'Mara Engai Lodge', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip'], notes: 'Luxury lodge overlooking the savannah' },
      { name: 'Ritz-Carlton Masai Mara Safari Camp', location: 'Masai Mara National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Talek Airstrip'], notes: 'Ultra-luxury safari camp' },
      { name: 'Angama Mara', location: 'Mara Triangle', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara Conservancy (Mara Triangle)', nearestAirstrips: ['Angama Airstrip', 'Kichwa Tembo Airstrip'], notes: 'Perched on Oloololo Escarpment, glass-fronted tents' },
      { name: '&Beyond Bateleur Camp', location: 'Mara Triangle', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara Conservancy (Mara Triangle)', nearestAirstrips: ['Angama Airstrip', 'Kichwa Tembo Airstrip'], notes: 'Two intimate camps with infinity pools' },
      { name: '&Beyond Kichwa Tembo Tented Camp', location: 'Mara Triangle', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara Conservancy (Mara Triangle)', nearestAirstrips: ['Kichwa Tembo Airstrip'], notes: 'Edge of Oloololo escarpment' },
      { name: 'Sanctuary Olonana Safari Lodge', location: 'Mara Triangle', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara Conservancy (Mara Triangle)', nearestAirstrips: ['Kichwa Tembo Airstrip', 'Angama Airstrip'], notes: 'Glass-sided suites, swimming pool' },
      { name: 'Serian - The Original', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Alex Walker\'s Serian, intimate tented camp' },
      { name: 'Ngare Serian', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Exclusive camp with treehouse \'The Nest\'' },
      { name: 'Elephant Pepper Camp', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Elewana Collection, intimate tented camp' },
      { name: 'Karen Blixen Camp', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Luxury tented camp on Mara River' },
      { name: 'Kicheche Mara Camp', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Small bush camp, 8 tents' },
      { name: 'Mara Expedition Camp', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Great Plains Conservation, 5 tented suites' },
      { name: 'Offbeat Mara Camp', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Traditional safari camp' },
      { name: 'Offbeat Riding Safaris', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Horseback safari camp' },
      { name: 'Hemingways River Camp', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Luxury tented camp' },
      { name: 'Royal Mara Safari Lodge', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Lodge' },
      { name: 'Saruni Basecamp', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Saruni collection camp' },
      { name: 'Basecamp Mara Bush Houses', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Exclusive private houses' },
      { name: 'Saruni Mara', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Boutique lodge with themed cottages' },
      { name: 'Richard\'s River Camp', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Exclusive camp on Ntiakatek River' },
      { name: 'Safaris Unlimited Africa', location: 'Mara North Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mara North Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Mobile/horseback safari camp' },
      { name: 'Porini Lion Camp', location: 'Olare Motorogi Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Olare Motorogi Conservancy', nearestAirstrips: ['Olare Orok Airstrip'], notes: '10 luxury tents, eco-camp' },
      { name: 'Kicheche Bush Camp', location: 'Olare Motorogi Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Olare Motorogi Conservancy', nearestAirstrips: ['Olare Orok Airstrip'], notes: '6 tents, intimate bush camp' },
      { name: 'Mara Plains Camp', location: 'Olare Motorogi Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Olare Motorogi Conservancy', nearestAirstrips: ['Olare Orok Airstrip'], notes: 'Great Plains Conservation, 7 luxury tents' },
      { name: 'Olare Mara Kempinski', location: 'Olare Motorogi Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Olare Motorogi Conservancy', nearestAirstrips: ['Olare Orok Airstrip'], notes: 'Five-star luxury tented camp, 12 tents' },
      { name: 'Mahali Mzuri', location: 'Olare Motorogi Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Olare Motorogi Conservancy', nearestAirstrips: ['Olare Orok Airstrip'], notes: 'Virgin Limited Edition, 12 luxury tents' },
      { name: 'Naboisho Camp', location: 'Naboisho Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Naboisho Conservancy', nearestAirstrips: ['Naboisho Airstrip'], notes: 'Asilia Africa, 9 tented suites' },
      { name: 'Encounter Mara', location: 'Naboisho Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Naboisho Conservancy', nearestAirstrips: ['Naboisho Airstrip'], notes: 'Asilia Africa camp' },
      { name: 'Hemingways Ol Seki Mara', location: 'Naboisho Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Naboisho Conservancy', nearestAirstrips: ['Naboisho Airstrip'], notes: '10 tented suites with 270-degree views' },
      { name: 'Kicheche Valley Camp', location: 'Naboisho Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Naboisho Conservancy', nearestAirstrips: ['Naboisho Airstrip'], notes: 'Kicheche Camps, in acacia woodland' },
      { name: 'Mara Nyika Camp', location: 'Naboisho Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Naboisho Conservancy', nearestAirstrips: ['Naboisho Airstrip'], notes: 'Great Plains Conservation, luxury tented camp' },
      { name: 'Porini Mara Camp', location: 'Naboisho Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Naboisho Conservancy', nearestAirstrips: ['Naboisho Airstrip'], notes: 'Eco tented camp' },
      { name: 'Saruni Leopard Hill', location: 'Naboisho Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Naboisho Conservancy', nearestAirstrips: ['Naboisho Airstrip'], notes: 'Saruni collection lodge' },
      { name: 'Porini Cheetah Camp', location: 'Ol Kinyei Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Kinyei Conservancy', nearestAirstrips: ['Ol Kinyei Airstrip'], notes: 'Intimate tented camp' },
      { name: 'Porini Mara Camp (Ol Kinyei)', location: 'Ol Kinyei Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Kinyei Conservancy', nearestAirstrips: ['Ol Kinyei Airstrip'], notes: '6 tents on Ole Sabukiye River' },
      { name: 'Porini Ol Kinyei Safari Cottages', location: 'Ol Kinyei Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Kinyei Conservancy', nearestAirstrips: ['Ol Kinyei Airstrip'], notes: '4 cottages with private kitchens' },
      { name: 'Olarro Lodge', location: 'Olarro Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Olarro Conservancy', nearestAirstrips: ['Olare Orok Airstrip', 'Talek Airstrip'], notes: 'All-inclusive luxury lodge retreat, two properties' },
      { name: 'Mara Siana Camp', location: 'Siana Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Siana Conservancy', nearestAirstrips: ['Siana Airstrip', 'Ol Kinyei Airstrip'], notes: 'Small upscale camp in Ripoi/Olarro South Conservancy' },
      { name: 'Spirit of the Masai Mara', location: 'Siana Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Siana Conservancy', nearestAirstrips: ['Siana Airstrip', 'Ol Kinyei Airstrip'], notes: 'Family-owned boutique lodge' },
      { name: 'Mara Bushtops', location: 'Siana Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Siana Conservancy', nearestAirstrips: ['Siana Airstrip', 'Ol Kinyei Airstrip'], notes: 'Ultra-luxury tented camp' },
      { name: 'House in the Wild', location: 'Enonkishu Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Enonkishu Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Eco-lodge on Mara River' },
      { name: 'Cottar\'s 1920s Safari Camp', location: 'Olderkesi Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Olderkesi Conservancy', nearestAirstrips: ['Ol Kinyei Airstrip', 'Siana Airstrip'], notes: 'Vintage luxury 1920s style, private conservancy' },
      { name: 'Mara Serena Safari Lodge', location: 'Mara Triangle', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Angama Airstrip', 'Kichwa Tembo Airstrip'], notes: 'Large lodge modeled on local mud-hut villages, swimming pool' },
      { name: 'Muthu Keekorok Lodge', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip'], notes: 'Historic lodge inside the reserve, formerly Keekorok Lodge' },
      { name: 'Mara Simba Lodge', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Talek Airstrip'], notes: 'Lodge near Talek Gate' },
      { name: 'Sarova Mara Game Camp', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Ol Kinyei Airstrip'], notes: 'Tented camp inside the reserve' },
      { name: 'Masai Mara Sopa Lodge', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Ol Kinyei Airstrip'], notes: 'Hilltop location with panoramic views' },
      { name: 'Sentrim Mara Camp', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Talek Airstrip'], notes: 'Standard tented camp' },
      { name: 'Mara Maisha Camp', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Talek Airstrip'], notes: 'Tented camp' },
      { name: 'Entumoto Safari Camp', location: 'Siana Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Siana Conservancy', nearestAirstrips: ['Siana Airstrip', 'Ol Kinyei Airstrip'], notes: 'Tented camp in Mara Siana Conservancy' },
      { name: 'Emboo River Camp', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Talek Airstrip'], notes: 'Eco-lodge, solar-powered' },
      { name: 'Matira Bush Camp', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Talek Airstrip'], notes: 'Tented camp' },
      { name: 'Sentinel Mara Camp', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Talek Airstrip'], notes: 'Tented camp' },
      { name: 'Basecamp Masai Mara', location: 'Masai Mara National Reserve', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Talek Airstrip'], notes: 'Eco-tourism camp near Talek Gate' },
      { name: 'Basecamp Wilderness', location: 'Naboisho Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Naboisho Conservancy', nearestAirstrips: ['Naboisho Airstrip'], notes: 'Eco-luxury retreat' },
      { name: 'Saruni Eagle View', location: 'Naboisho Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Naboisho Conservancy', nearestAirstrips: ['Naboisho Airstrip'], notes: 'Elevated viewpoint, 9 tents' },
      { name: 'Ol Kinyei Adventure Camp', location: 'Ol Kinyei Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Kinyei Conservancy', nearestAirstrips: ['Ol Kinyei Airstrip'], notes: 'Adventure-focused camp' },
      { name: 'Ososian Mara Lodge', location: 'Siana Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Siana Conservancy', nearestAirstrips: ['Siana Airstrip', 'Ol Kinyei Airstrip'], notes: 'Lodge in Mara Siana Conservancy' },
      { name: 'Siana Springs Tented Camp', location: 'Siana Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Siana Conservancy', nearestAirstrips: ['Siana Airstrip', 'Ol Kinyei Airstrip'], notes: 'Tented camp near natural springs' },
      { name: 'Leleshwa Camp', location: 'Siana Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Siana Conservancy', nearestAirstrips: ['Siana Airstrip', 'Ol Kinyei Airstrip'], notes: 'Tented camp' },
      { name: 'Enkorok Mara Camp', location: 'Siana Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Siana Conservancy', nearestAirstrips: ['Siana Airstrip', 'Ol Kinyei Airstrip'], notes: 'Mid-luxury camp overlooking Oloolotikoshi Hills' },
      { name: 'Mara Training Centre (Enonkishu)', location: 'Enonkishu Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Enonkishu Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Community conservancy lodge' },
      { name: 'David Livingstone Safari Lodge', location: 'Lemek Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Lemek Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Lodge in Koiyaki Lemek area' },
      { name: 'Mara Buffalo Camp', location: 'Lemek Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Lemek Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Tented camp' },
      { name: 'Enkerende Tented Camp', location: 'Lemek Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Lemek Conservancy', nearestAirstrips: ['Mara North Airstrip', 'Ol Kiombo Airstrip'], notes: 'Tented camp' },
      { name: 'Porini Giraffe Camp', location: 'Pardamat Conservation Area', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Pardamat Conservation Area', nearestAirstrips: ['Talek Airstrip', 'Siana Airstrip'], notes: 'Eco-camp' },
      { name: 'Olkinyei Mara Tented Camp', location: 'Masai Mara National Reserve', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Keekorok Airstrip', 'Talek Airstrip'], notes: 'Budget tented camp' },
      { name: 'Basecamp Adventure', location: 'Masai Mara National Reserve', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Talek Airstrip'], notes: 'Budget-friendly tented camp near Talek Gate' }
  ] },
  { name: 'Amboseli & Chyulu Hills', slug: 'amboseli', lodges: [
      { name: 'Ol Tukai Lodge', location: 'Amboseli National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '80 rooms, best Kilimanjaro photography position, Elephant Research Project nearby' },
      { name: 'Amboseli Serena Safari Lodge', location: 'Amboseli National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '92 rooms, hilltop position, pool, Maasai-themed décor, Serena Hotels group' },
      { name: 'Angama Amboseli', location: 'Kimana Sanctuary', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Kimana Sanctuary', nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '15 suites, opened 2023, TIME World\'s Greatest Places 2024, family interconnecting suites' },
      { name: 'Elewana Tortilis Camp', location: 'Kitirua Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Kitirua Conservancy', nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '16 luxury tents, Kenya\'s first eco-camp (1990), Elewana Collection, night drives & walking safaris' },
      { name: 'Kitirua Plains Lodge (A&K Sanctuary)', location: 'Kitirua Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Kitirua Conservancy', nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Opening June 2026, Abercrombie & Kent, 128-acre private concession, ultra-luxury' },
      { name: 'Tawi Lodge', location: 'Private Conservancy SE', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Tawi Wildlife Conservancy', nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Stone & wood cottages, infinity pool over waterhole, solar-powered, most private Amboseli' },
      { name: 'Satao Elerai Camp', location: 'Elerai Conservation Area', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Elerai Conservation Area', nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Closest camp to Kilimanjaro, elevated treehouse-style suites, night drives' },
      { name: 'Elerai Camp', location: 'Elerai Conservation Area', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Elerai Conservancy', nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Luxury tented camp, breathtaking Kilimanjaro views, night drives available' },
      { name: 'Porini Amboseli Camp', location: 'Selenkay Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Selenkay Conservancy', nearestAirstrips: ['Selenkay Airstrip', 'Amboseli Airstrip (HKAM)'], notes: '10 tents, pioneer eco-camp (2001), 100% Maasai staff, Gamewatchers Safaris, night drives' },
      { name: 'Elephant Garden Lodge', location: 'Amboseli Ecosystem', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Opened July 2022, luxury tents, spectacular Kilimanjaro views, popular for photo safaris' },
      { name: 'Ol Donyo Lodge (Great Plains)', location: 'Mbirikani Group Ranch, Chyulu Hills', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mbirikani Group Ranch', nearestAirstrips: ['Ol Donyo Airstrip'], notes: '10 suites, plunge pools, horseback safaris, 430,000-acre ranch, Relais & Châteaux, star beds' },
      { name: 'Campi ya Kanzi', location: 'Kuku Group Ranch, Chyulu Hills', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Kuku Group Ranch', nearestAirstrips: ['Campi ya Kanzi Airstrip'], notes: 'Italian-run eco-lodge, 1,000 km² Maasai conservancy, since 1990, deepest community integration' },
      { name: 'Kilima Safari Camp', location: 'Amboseli National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '72 tented rooms, elevated waterhole & Kilimanjaro views, near Kimana Gate' },
      { name: 'Amboseli Sopa Lodge', location: 'Amboseli National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '83 stone cottages, pool, family-focused, spacious gardens, near Kimana Gate' },
      { name: 'Kibo Safari Camp', location: 'Near Kimana Gate', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '73 tents, TripAdvisor #1 Amboseli, pool, spa, art gallery, great Kilimanjaro views' },
      { name: 'AA Lodge Amboseli', location: 'Near Kimana Gate', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '4km from Kimana Gate, 3-tier building, pool, Kilimanjaro views, AA Lodges chain' },
      { name: 'Sentrim Amboseli Lodge', location: 'Near Kimana Gate', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '60 rooms, 3km from Kimana Gate, pool, spa, Sentrim Hotels group' },
      { name: 'Tulia Amboseli Safari Camp', location: 'Near Kimana Gate', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Eco-friendly luxury tented camp, 5.4km from Kimana Gate, formerly Zebra Plains' },
      { name: 'Elephant Gorge Camp', location: 'Near Kimana', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Atua Enkop Africa collection, Kilimanjaro views, cultural visits available' },
      { name: 'Praro Amboseli Camp', location: 'Near Amboseli', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Zebra Plains Collection, luxury tented camp, Kilimanjaro views' },
      { name: 'Kimana Sanctuary Tented Camp', location: 'Kimana Sanctuary', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Kimana Sanctuary', nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Wildlife corridor between Amboseli & Tsavo, Kilimanjaro views' },
      { name: 'Sungura Safari Camp', location: 'Near Kimana Gate', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '14 tents & cottages, 15 min from gate, Kenya\'s only 100% halal safari camp' },
      { name: 'Ambokili Lodge', location: 'Mbirikani', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Eco-lodge with pool, 2hrs from Nairobi, 1hr from Kilimanjaro, restaurant & bar' },
      { name: 'Ambokili Cottages', location: 'Kimana Town', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Affordable cottages, garden, restaurant, near Amboseli National Park' },
      { name: 'Kimana Amboseli Camp', location: 'Near Kimana Gate', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: '20 tents + 6 cottages, 2km from Kimana Gate, budget-friendly' },
      { name: 'Amboseli Bush Camp', location: 'Near Kimana', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Self-catering accommodation, minutes from park, budget camping' },
      { name: 'Amboseli Eco Camp', location: 'SE of Amboseli', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Eco-camp, bush walks, garden & mountain views, budget-friendly' },
      { name: 'Manjaro Camp', location: 'Near Kimana Gate', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Amboseli Airstrip (HKAM)'], notes: 'Est. 2020, camping & basic rooms, guided walks, Kilimanjaro views' }
  ] },
  { name: 'Tsavo', slug: 'tsavo', lodges: [
      { name: 'Satao Camp', location: 'Tsavo East National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Satao Airstrip'], notes: 'Luxury tented camp overlooking waterhole' },
      { name: 'Galdessa Camp', location: 'Tsavo East National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Satao Airstrip'], notes: 'Riverside luxury tented camp on Galana River' },
      { name: 'Kilaguni Serena Safari Lodge', location: 'Tsavo West National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilaguni Airstrip'], notes: 'Historic lodge, first lodge in a Kenya national park' },
      { name: 'Finch Hattons Luxury Lodge', location: 'Tsavo West National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Finch Hattons Airstrip'], notes: 'Ultra-luxury lodge' },
      { name: 'Severin Safari Camp', location: 'Tsavo West National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kamboyo Airstrip', 'Kilaguni Airstrip'], notes: 'Luxury tented camp' },
      { name: 'Sarova Saltlick Game Lodge', location: 'Taita Hills Wildlife Sanctuary', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Taita Hills Wildlife Sanctuary', nearestAirstrips: ['Taita Hills Airstrip'], notes: 'Iconic stilted lodge overlooking waterhole' },
      { name: 'Ashnil Aruba Lodge', location: 'Tsavo East National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Lodge near Aruba Dam' },
      { name: 'Voi Safari Lodge', location: 'Tsavo East National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Lodge on hilltop with waterhole views' },
      { name: 'Voi Wildlife Lodge', location: 'Tsavo East National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Lodge near Voi' },
      { name: 'Sentrim Tsavo Camp', location: 'Tsavo East National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Tented camp' },
      { name: 'Patterson\'s Camp', location: 'Tsavo East National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Named after Col. Patterson, near Tsavo River' },
      { name: 'Red Elephant Safari Lodge', location: 'Tsavo East National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Lodge near the park' },
      { name: 'Voyager Ziwani Camp', location: 'Tsavo West National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilaguni Airstrip'], notes: 'Tented camp near Lake Jipe' },
      { name: 'Ngulia Safari Lodge', location: 'Tsavo West National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilaguni Airstrip'], notes: 'Lodge famous for bird ringing' },
      { name: 'Rhino Valley Lodge', location: 'Tsavo West National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilaguni Airstrip'], notes: 'Lodge near Ngulia Rhino Sanctuary' },
      { name: 'Taita Hills Safari Resort & Spa', location: 'Taita Hills Wildlife Sanctuary', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Taita Hills Wildlife Sanctuary', nearestAirstrips: ['Taita Hills Airstrip'], notes: '60 rooms, gardens, pool' },
      { name: 'Lions Bluff Lodge', location: 'Lumo Community Wildlife Sanctuary', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Lumo Community Wildlife Sanctuary', nearestAirstrips: ['Taita Hills Airstrip'], notes: 'Eco-lodge on rocky bluff, panoramic views' },
      { name: 'Soroi Cheetah Tented Camp', location: 'Lumo Community Wildlife Sanctuary', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Lumo Community Wildlife Sanctuary', nearestAirstrips: ['Taita Hills Airstrip'], notes: 'Safari tented camp' },
      { name: 'Man Eaters Camp', location: 'Tsavo East National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Budget camp near Tsavo River' },
      { name: 'Ndololo Camp', location: 'Tsavo East National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Budget camping/bandas' },
      { name: 'Manyatta Camp', location: 'Tsavo East National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Budget camp' },
      { name: 'Boma Simba Lodge', location: 'Tsavo East National Park', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Voi Airstrip'], notes: 'Budget lodge near Voi gate' },
      { name: 'Lake Jipe Eco Lodge', location: 'Tsavo West National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilaguni Airstrip'], notes: 'Eco-lodge near Lake Jipe' },
      { name: 'Kitani Safari Lodge', location: 'Tsavo West National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilaguni Airstrip'], notes: 'Basic lodge, self-catering bandas' },
      { name: 'Leopards Lair Cottages', location: 'Tsavo West National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Kilaguni Airstrip'], notes: 'Self-catering bandas' }
  ] },
  { name: 'Samburu & Laikipia', slug: 'samburu-and-laikipia', lodges: [
      { name: 'Samburu Intrepids Tented Camp', location: 'Samburu National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Luxury tented camp on Ewaso Ng\'iro River' },
      { name: 'Elephant Bedroom Camp', location: 'Samburu National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Luxury tented camp on river' },
      { name: 'Elephant Watch Camp', location: 'Samburu National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Intimate camp, elephant research focus' },
      { name: 'Larsens Tented Camp', location: 'Samburu National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Luxury tented camp' },
      { name: 'Joy\'s Camp', location: 'Shaba National Reserve', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Shaba Airstrip', 'Samburu Airstrip (Oryx)'], notes: 'Named after Joy Adamson, luxury tented camp' },
      { name: 'Sasaab Lodge', location: 'Westgate Community Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Westgate Community Conservancy', nearestAirstrips: ['Samburu Airstrip (Oryx)', 'Kalama Airstrip'], notes: 'Safari Collection, 9 rooms with plunge pools' },
      { name: 'Saruni Samburu', location: 'Kalama Community Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Kalama Community Conservancy', nearestAirstrips: ['Kalama Airstrip', 'Samburu Airstrip (Oryx)'], notes: 'Luxury lodge on Kalama Mountains' },
      { name: 'Sarara Camp', location: 'Namunyak Wildlife Conservation Trust', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Namunyak Wildlife Conservation Trust', nearestAirstrips: ['Kalama Airstrip', 'Samburu Airstrip (Oryx)'], notes: 'Remote luxury camp in Matthews Range' },
      { name: 'Saruni Rhino', location: 'Namunyak Wildlife Conservation Trust', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Namunyak Wildlife Conservation Trust', nearestAirstrips: ['Kalama Airstrip'], notes: 'Near Sera Rhino Sanctuary' },
      { name: 'Reteti House', location: 'Namunyak Wildlife Conservation Trust', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Namunyak Wildlife Conservation Trust', nearestAirstrips: ['Kalama Airstrip', 'Samburu Airstrip (Oryx)'], notes: 'Near Reteti Elephant Sanctuary' },
      { name: 'Kicheche Laikipia Camp', location: 'Ol Pejeta Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Pejeta Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: '6 tents near waterhole, Mt Kenya views' },
      { name: 'Ol Pejeta Bush Camp', location: 'Ol Pejeta Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Pejeta Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Tented camp with Mt Kenya views' },
      { name: 'Ol Pejeta Safari Cottages', location: 'Ol Pejeta Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Pejeta Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Owner-run cottages along river' },
      { name: 'Sanctuary Tambarare', location: 'Ol Pejeta Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Pejeta Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: '10 luxury tents, five-star service' },
      { name: 'The River Camp (Ol Pejeta)', location: 'Ol Pejeta Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Pejeta Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Luxury camp with Mt Kenya views' },
      { name: 'Mutara Camp', location: 'Ol Pejeta Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Pejeta Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Cliff-top camp in Mutara Conservancy bordering Ol Pejeta' },
      { name: 'Elewana Kifaru House', location: 'Lewa Wildlife Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Lewa Wildlife Conservancy', nearestAirstrips: ['Lewa Airstrip'], notes: '5 thatched cottages, intimate luxury' },
      { name: 'Elewana Lewa Safari Camp', location: 'Lewa Wildlife Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Lewa Wildlife Conservancy', nearestAirstrips: ['Lewa Airstrip'], notes: '11 tented suites including family suites' },
      { name: 'Sirikoi Lodge', location: 'Lewa Wildlife Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Lewa Wildlife Conservancy', nearestAirstrips: ['Lewa Airstrip'], notes: 'Small family-owned lodge, 4 luxury tents' },
      { name: 'Lewa House', location: 'Lewa Wildlife Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Lewa Wildlife Conservancy', nearestAirstrips: ['Lewa Airstrip'], notes: 'Owner-run lodge, thatched cottages and earthpods' },
      { name: 'Lewa Wilderness', location: 'Lewa Wildlife Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Lewa Wildlife Conservancy', nearestAirstrips: ['Lewa Airstrip'], notes: '9 cottages, walking/riding/flying safaris' },
      { name: 'Borana Lodge', location: 'Borana Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Borana Conservancy', nearestAirstrips: ['Borana Airstrip', 'Lewa Airstrip'], notes: 'Luxury lodge with Mt Kenya views' },
      { name: 'Lengishu House', location: 'Borana Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Borana Conservancy', nearestAirstrips: ['Borana Airstrip', 'Lewa Airstrip'], notes: 'Exclusive-use private house' },
      { name: 'Arijiju Private Retreat', location: 'Borana Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Borana Conservancy', nearestAirstrips: ['Borana Airstrip', 'Lewa Airstrip'], notes: 'Ultra-luxury private retreat' },
      { name: 'Laragai House', location: 'Borana Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Borana Conservancy', nearestAirstrips: ['Borana Airstrip', 'Lewa Airstrip'], notes: 'Private exclusive-use house' },
      { name: 'Solio Lodge', location: 'Solio Ranch', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Solio Ranch', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Safari Collection, 5 cottages, rhino viewing' },
      { name: 'Segera Retreat', location: 'Laikipia Plateau', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Segera Conservancy', nearestAirstrips: ['Segera Airstrip'], notes: 'Luxury retreat on 50,000 acres, art collection' },
      { name: 'Elewana Loisaba Tented Camp', location: 'Loisaba Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Loisaba Conservancy', nearestAirstrips: ['Loisaba Airstrip'], notes: 'Luxury tented camp with star beds' },
      { name: 'Loisaba Lodo Springs', location: 'Loisaba Conservancy', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Loisaba Conservancy', nearestAirstrips: ['Loisaba Airstrip'], notes: '8 luxury rooms with plunge pools' },
      { name: 'Ol Malo Lodge', location: 'Laikipia Plateau', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Malo Ranch', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: '4 cottages on private ranch, adventure lodge' },
      { name: 'Sabuk Lodge', location: 'Laikipia Plateau', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Sabuk Ranch', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Intimate lodge on Ewaso Ng\'iro River gorge' },
      { name: 'Mukutan Retreat', location: 'Laikipia Plateau', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Mukutan Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)', 'Loisaba Airstrip'], notes: 'Exclusive retreat on Mukutan Gorge' },
      { name: 'Nanyuki Laikipia (Ol Malo House)', location: 'Laikipia Plateau', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Malo Ranch', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: '6-bedroom exclusive-use house' },
      { name: 'Ol Lentille Lodge', location: 'Laikipia Plateau', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Lentille Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: '4 exclusive suites, community conservancy' },
      { name: 'Enasoit Private House', location: 'Laikipia Plateau', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Enasoit Private Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Private exclusive-use house near Ol Pejeta' },
      { name: 'Colcheccio House', location: 'Laikipia Plateau', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Colcheccio Ranch', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Exclusive private retreat' },
      { name: 'Samburu Sopa Lodge', location: 'Samburu National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Lodge in the reserve' },
      { name: 'Samburu Simba Lodge', location: 'Samburu National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Lodge in the reserve' },
      { name: 'Samburu Game Lodge', location: 'Samburu National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Historic lodge on Ewaso Ng\'iro River' },
      { name: 'Soroi Samburu Lodge', location: 'Samburu National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Lodge in the reserve' },
      { name: 'Sentrim Samburu Camp', location: 'Samburu National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Tented camp' },
      { name: 'Ashnil Samburu Camp', location: 'Buffalo Springs National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Tented camp in Buffalo Springs' },
      { name: 'Sarova Shaba Game Lodge', location: 'Shaba National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Shaba Airstrip', 'Samburu Airstrip (Oryx)'], notes: '85 rooms in Shaba Reserve' },
      { name: 'Basecamp Samburu', location: 'Kalama Community Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Kalama Community Conservancy', nearestAirstrips: ['Kalama Airstrip', 'Samburu Airstrip (Oryx)'], notes: 'Tented camp with Mt Ololokwe views' },
      { name: 'Kitich Camp', location: 'Namunyak Wildlife Conservation Trust', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Namunyak Wildlife Conservation Trust', nearestAirstrips: ['Kalama Airstrip', 'Samburu Airstrip (Oryx)'], notes: 'Forest camp in Matthews Range' },
      { name: 'Porini Rhino Camp', location: 'Ol Pejeta Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Pejeta Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: '8 tents with wildlife hide' },
      { name: 'Sweetwaters Serena Camp', location: 'Ol Pejeta Conservancy', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Ol Pejeta Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Serena camp with Mt Kenya views' },
      { name: 'Il Ngwesi Lodge', location: 'Il Ngwesi Group Ranch', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Il Ngwesi Group Ranch', nearestAirstrips: ['Il Ngwesi Airstrip', 'Lewa Airstrip'], notes: 'Community-owned eco-lodge, open-fronted bandas' },
      { name: 'Karisia Walking Safaris', location: 'Laikipia Plateau', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Karisia Conservancy', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Mobile walking safari camps' },
      { name: 'Mpala Research Centre', location: 'Laikipia Plateau', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Mpala Research Centre', nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Research-focused accommodation' },
      { name: 'Lion King Bush Camp', location: 'Samburu National Reserve', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Samburu Airstrip (Oryx)'], notes: 'Budget camp' }
  ] },
  { name: 'Rift Valley Lakes', slug: 'rift-valley-lakes', lodges: [
      { name: 'The Cliff (Lake Nakuru)', location: 'Lake Nakuru National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Luxury lodge inside the park' },
      { name: 'Mbweha Camp', location: 'Lake Nakuru National Park', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Congreve Conservancy', nearestAirstrips: ['Naishi Airstrip'], notes: 'Luxury camp on Congreve Conservancy' },
      { name: 'Loldia House', location: 'Lake Naivasha', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Governors\' Camp collection, farmhouse on lake' },
      { name: 'Chui Lodge', location: 'Lake Naivasha', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Oserian Wildlife Sanctuary', nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Exclusive lodge on Oserian Wildlife Conservancy' },
      { name: 'Hippo Point', location: 'Lake Naivasha', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Private estate with Dodo\'s Tower' },
      { name: 'Enashipai Resort & Spa', location: 'Lake Naivasha', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Luxury resort hotel' },
      { name: 'Kiboko Luxury Camp', location: 'Lake Naivasha', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Luxury tented camp' },
      { name: 'Great Rift Valley Lodge & Golf Resort', location: 'Lake Naivasha', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Heritage Hotels lodge with golf course' },
      { name: 'Lake Elementaita Serena Camp', location: 'Lake Elementaita / Soysambu', category: 'Luxury', parkPosition: 'Inside Conservancy', conservancyName: 'Soysambu Conservancy', nearestAirstrips: ['Naivasha Airstrip', 'Naishi Airstrip'], notes: 'Tented camp on Soysambu Conservancy' },
      { name: 'Sarova Lion Hill Game Lodge', location: 'Lake Nakuru National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Lodge inside the park' },
      { name: 'Lake Nakuru Sopa Lodge', location: 'Lake Nakuru National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Lodge on western escarpment' },
      { name: 'Lake Nakuru Lodge', location: 'Lake Nakuru National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Eco-lodge inside the park' },
      { name: 'Flamingo Hill Tented Camp', location: 'Lake Nakuru National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Tented camp near the park' },
      { name: 'Lake Naivasha Sopa Resort', location: 'Lake Naivasha', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Resort on lake shores' },
      { name: 'Lake Naivasha Country Club', location: 'Lake Naivasha', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Heritage property on lake' },
      { name: 'Elsamere Lodge', location: 'Lake Naivasha', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Former home of Joy Adamson' },
      { name: 'Crater Lake Tented Camp', location: 'Lake Naivasha', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Crater Lake Game Sanctuary', nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'On Crater Lake Game Sanctuary' },
      { name: 'Naivasha Kongoni Lodge', location: 'Lake Naivasha', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Lodge on private conservancy' },
      { name: 'Sawela Lodges', location: 'Lake Naivasha', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loldia Airstrip', 'Naivasha Airstrip'], notes: 'Lodge on lake shore' },
      { name: 'Lake Bogoria Spa Resort', location: 'Lake Bogoria National Reserve', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Resort near the lake' },
      { name: 'Lake Baringo Island Camp', location: 'Lake Baringo', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Island camp on Lake Baringo' },
      { name: 'Block\'s Hotel', location: 'Lake Baringo', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Historic hotel at Lake Baringo' },
      { name: 'Tumbili Cliff Lodge', location: 'Lake Baringo', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Clifftop lodge' },
      { name: 'Lake Elementaita Mountain Lodge', location: 'Lake Elementaita / Soysambu', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Soysambu Conservancy', nearestAirstrips: ['Naivasha Airstrip', 'Naishi Airstrip'], notes: 'Lodge above lake' },
      { name: 'Sunbird Lodge', location: 'Lake Elementaita / Soysambu', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Soysambu Conservancy', nearestAirstrips: ['Naivasha Airstrip', 'Naishi Airstrip'], notes: 'Small exclusive lodge in Rift Valley' },
      { name: 'Sleeping Warrior Camp', location: 'Lake Elementaita / Soysambu', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Soysambu Conservancy', nearestAirstrips: ['Naivasha Airstrip', 'Naishi Airstrip'], notes: 'Camp on Soysambu' },
      { name: 'Robert\'s Camp', location: 'Lake Baringo', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Naishi Airstrip'], notes: 'Camp and bandas on lakeside' }
  ] },
  { name: 'Central Kenya', slug: 'central-kenya', lodges: [
      { name: 'Fairmont Mount Kenya Safari Club', location: 'Mount Kenya National Park', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Historic luxury hotel, formerly William Holden\'s retreat' },
      { name: 'Aberdare Country Club', location: 'Aberdare National Park', category: 'Luxury', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Mweiga Airstrip', 'Nyeri Airstrip'], notes: 'Country club lodge, departure point for The Ark' },
      { name: 'Elewana Elsa\'s Kopje', location: 'Meru National Park', category: 'Luxury', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mulika Airstrip', 'Kinna Airstrip'], notes: 'Luxury lodge built into rocks on Mughwango Hill' },
      { name: 'Serena Mountain Lodge', location: 'Mount Kenya National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Lodge in mountain forest with waterhole' },
      { name: 'Bantu Mountain Lodge', location: 'Mount Kenya National Park', category: 'Mid-Range', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Mountain lodge' },
      { name: 'Castle Forest Lodge', location: 'Mount Kenya National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Forest lodge on slopes of Mt Kenya' },
      { name: 'Naro Moru River Lodge', location: 'Mount Kenya National Park', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Nanyuki Airstrip (HKNY)'], notes: 'Lodge near Naro Moru gate' },
      { name: 'The Ark Lodge', location: 'Aberdare National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mweiga Airstrip', 'Nyeri Airstrip'], notes: 'Tree lodge overlooking waterhole and salt lick' },
      { name: 'Treetops Lodge', location: 'Aberdare National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mweiga Airstrip', 'Nyeri Airstrip'], notes: 'Historic tree lodge, Queen Elizabeth visited' },
      { name: 'Sangare Ranch Conservancy', location: 'Aberdare National Park', category: 'Mid-Range', parkPosition: 'Inside Conservancy', conservancyName: 'Sangare Ranch Conservancy', nearestAirstrips: ['Mweiga Airstrip', 'Nyeri Airstrip'], notes: 'Ranch lodge near Aberdares' },
      { name: 'Leopard Rock Lodge', location: 'Meru National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mulika Airstrip', 'Kinna Airstrip'], notes: 'Lodge in the park' },
      { name: 'Murera Springs Eco Lodge', location: 'Meru National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mulika Airstrip', 'Kinna Airstrip'], notes: 'Eco-lodge near Murera Gate' },
      { name: 'iKweta Safari Camp', location: 'Meru National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mulika Airstrip', 'Kinna Airstrip'], notes: 'Tented camp near Murera Gate' },
      { name: 'Meru Wilderness Camp', location: 'Meru National Park', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Mulika Airstrip', 'Kinna Airstrip'], notes: 'Mobile camp style' }
  ] },
  { name: 'Northern Kenya', slug: 'northern-kenya', lodges: [
      { name: 'Desert Rose Lodge', location: 'Lake Turkana', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loiyangalani Airstrip'], notes: 'Lodge on shores of Lake Turkana' },
      { name: 'Eliye Springs Resort', location: 'Lake Turkana', category: 'Mid-Range', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Eliye Springs Airstrip'], notes: 'Resort on western shore of Lake Turkana' },
      { name: 'Marsabit Lodge', location: 'Marsabit National Park', category: 'Budget', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Marsabit Airport'], notes: '24 rooms overlooking crater lake' },
      { name: 'Henry & Rosanna\'s Camp', location: 'Marsabit National Park', category: 'Budget', parkPosition: 'Park Border', conservancyName: null, nearestAirstrips: ['Marsabit Airport'], notes: 'Small camp near Marsabit' },
      { name: 'Oasis Lodge Loiyangalani', location: 'Lake Turkana', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loiyangalani Airstrip'], notes: 'Oasis lodge at Loiyangalani' },
      { name: 'Lobolo Camp', location: 'Lake Turkana', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Loiyangalani Airstrip'], notes: 'Camp at Lake Turkana' },
      { name: 'Kalacha Guest House', location: 'Chalbi Desert', category: 'Budget', parkPosition: 'Outside', conservancyName: null, nearestAirstrips: ['Marsabit Airport'], notes: 'Basic accommodation in Chalbi Desert' }
  ] },
  { name: 'Coast', slug: 'coast', lodges: [
      { name: 'Leopard Beach Resort & Spa', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: '5-star beach resort' },
      { name: 'Diani Reef Beach Resort & Spa', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: '5-star all-inclusive resort' },
      { name: 'Swahili Beach Resort', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Luxury beach resort' },
      { name: 'AfroChic Diani', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Boutique beach hotel' },
      { name: 'Almanara Luxury Boutique Hotel & Villas', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Boutique luxury hotel' },
      { name: 'Waterlovers Beach Resort', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Boutique beach resort' },
      { name: 'Diamonds Leisure Beach & Golf Resort', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'All-inclusive resort with golf' },
      { name: 'The Sands at Nomad', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Boutique beach hotel' },
      { name: 'Kinondo Kwetu', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Exclusive private beach house' },
      { name: 'Chale Island', location: 'Diani Beach', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Private island resort' },
      { name: 'Hemingways Watamu', location: 'Watamu', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'Luxury boutique hotel' },
      { name: 'Medina Palms', location: 'Watamu', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'Swahili-style luxury hotel' },
      { name: 'Lonno Lodge', location: 'Watamu', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'Boutique luxury lodge' },
      { name: 'Diamonds Malindi', location: 'Malindi', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'All-inclusive beach resort' },
      { name: 'Billionaire Resort & Retreat', location: 'Malindi', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'Ultra-luxury resort' },
      { name: 'The Majlis Resort', location: 'Lamu Archipelago', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Lamu Airport (Manda) (HKLU)'], notes: 'Luxury resort on Manda Island' },
      { name: 'Peponi Hotel', location: 'Lamu Archipelago', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Lamu Airport (Manda) (HKLU)'], notes: 'Historic Shela village hotel' },
      { name: 'Manda Bay', location: 'Lamu Archipelago', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Lamu Airport (Manda) (HKLU)'], notes: 'Secluded beach lodge on Manda Island' },
      { name: 'Kizingoni Beach Villas', location: 'Lamu Archipelago', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Lamu Airport (Manda) (HKLU)'], notes: 'Private villas on Lamu' },
      { name: 'Kipungani Explorer', location: 'Lamu Archipelago', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Lamu Airport (Manda) (HKLU)'], notes: 'Elewana Collection beach lodge' },
      { name: 'Mike\'s Camp Kiwayu', location: 'Lamu Archipelago', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Lamu Airport (Manda) (HKLU)'], notes: 'Remote island camp on Kiwayu' },
      { name: 'Serena Beach Resort & Spa', location: 'Mombasa', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mombasa Moi International (HKMO)'], notes: 'Luxury beach resort, Shanzu' },
      { name: 'Sarova Whitesands Beach Resort', location: 'Mombasa', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mombasa Moi International (HKMO)'], notes: 'All-inclusive beach resort' },
      { name: 'English Point Marina Hotel', location: 'Mombasa', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mombasa Moi International (HKMO)'], notes: 'Luxury waterfront hotel' },
      { name: 'Saruni Ocean', location: 'Kisite-Mpunguti Marine Park area', category: 'Luxury', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Beach lodge near Shimoni' },
      { name: 'Shimba Hills Lodge', location: 'Shimba Hills National Reserve', category: 'Mid-Range', parkPosition: 'Inside Park', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Tree lodge overlooking waterhole in rainforest' },
      { name: 'Southern Palms Beach Resort', location: 'Diani Beach', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Beach resort' },
      { name: 'Diani Sea Lodge', location: 'Diani Beach', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Beach lodge' },
      { name: 'Leisure Lodge Beach & Golf Resort', location: 'Diani Beach', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Resort with golf course' },
      { name: 'Nomad Beach Resort', location: 'Diani Beach', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Beach resort' },
      { name: 'Turtle Bay Beach Club', location: 'Watamu', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'All-inclusive beach club' },
      { name: 'Ocean Sports Resort', location: 'Watamu', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'Beach resort with water sports' },
      { name: 'Crystal Bay Resort', location: 'Watamu', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'Resort adjacent to marine park' },
      { name: 'Ocean Beach Resort & Spa', location: 'Malindi', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'Beach resort' },
      { name: 'Sandies Tropical Village', location: 'Malindi', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'Beach village resort' },
      { name: 'Scorpio Villas', location: 'Malindi', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Malindi Airport (HKML)'], notes: 'Villa-style beach accommodation' },
      { name: 'Kizingo Beach Lodge', location: 'Lamu Archipelago', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Lamu Airport (Manda) (HKLU)'], notes: 'Eco beach lodge' },
      { name: 'Jannah Lamu', location: 'Lamu Archipelago', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Lamu Airport (Manda) (HKLU)'], notes: 'Boutique hotel' },
      { name: 'Forodhani House', location: 'Lamu Archipelago', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Lamu Airport (Manda) (HKLU)'], notes: 'Boutique hotel in Shela' },
      { name: 'Voyager Beach Resort', location: 'Mombasa', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mombasa Moi International (HKMO)'], notes: 'Beach resort' },
      { name: 'Nyali Beach Hotel', location: 'Mombasa', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Mombasa Moi International (HKMO)'], notes: 'Classic beach hotel' },
      { name: 'Firefly Eco Retreat', location: 'Kisite-Mpunguti Marine Park area', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Eco retreat near Shimoni' },
      { name: 'Mwazaro Beach Mangrove Lodge', location: 'Kisite-Mpunguti Marine Park area', category: 'Mid-Range', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Beach and mangrove lodge' },
      { name: 'Mpunguti Lodge', location: 'Kisite-Mpunguti Marine Park area', category: 'Budget', parkPosition: 'Beach', conservancyName: null, nearestAirstrips: ['Diani Airstrip (Ukunda) (HKUK)'], notes: 'Basic lodge near Shimoni' }
  ] }
]

const dividerImages: Record<number, string> = {
  2: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&h=400&fit=crop',
  4: 'https://images.unsplash.com/photo-1535338454528-1b5c8bb9b1de?w=1600&h=400&fit=crop',
  7: 'https://images.unsplash.com/photo-1549366021-9f761d450615?w=1600&h=400&fit=crop'
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

export default function KenyaLodgesPage() {
  const totalLodges = regions.reduce((sum, r) => sum + r.lodges.length, 0)
  const totalConservancies = new Set(
    regions.flatMap(r => r.lodges.map(l => l.conservancyName).filter(Boolean))
  ).size

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative bg-[#4F5D56] text-white pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Complete Kenya Safari Lodges &amp; Camps Directory
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6">
            Every safari lodge, tented camp, and beach resort across Kenya&apos;s national parks, reserves, and private conservancies.
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
              <p className="mb-3"><strong className="text-green-800">Inside Park:</strong> You&apos;ll pay daily park entry fees (KWS) for every night you stay. No need to drive in and out.</p>
              <p><strong className="text-purple-800">Inside Conservancy:</strong> Conservancy fees (often included in room rate) replace park entry fees. You&apos;ll only pay park fees on days you drive into the adjacent national park/reserve for game drives.</p>
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
                  alt="Kenya safari landscape"
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
