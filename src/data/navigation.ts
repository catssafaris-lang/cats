export interface NavItem {
  name: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Kenya Safaris',
    href: '/kenya-safaris',
    children: [
      { name: 'All Kenya Safaris', href: '/kenya-safaris' },
      { name: 'Masai Mara Safari', href: '/holiday-experiences/masai-mara-national-reserve' },
      { name: 'Amboseli Safari', href: '/holiday-experiences/amboseli-national-park' },
      { name: 'Tsavo Safari', href: '/holiday-experiences/tsavo-national-park' },
      { name: 'Samburu Safari', href: '/holiday-experiences/samburu-national-reserve' },
      { name: 'Lake Nakuru Safari', href: '/holiday-experiences/lake-nakuru-national-park' },
      { name: 'Lake Naivasha Safari', href: '/holiday-experiences/lake-naivasha' },
      { name: 'Aberdare Safari', href: '/holiday-experiences/aberdare-national-park' },
      { name: 'Mount Kenya', href: '/holiday-experiences/mount-kenya' },
      { name: 'Laikipia Plateau', href: '/holiday-experiences/laikipia-plateau' },
    ],
  },
  {
    name: 'Tanzania Safaris',
    href: '/tanzania-safaris',
    children: [
      { name: 'All Tanzania Safaris', href: '/tanzania-safaris' },
      { name: 'Ngorongoro Crater', href: '/holiday-experiences/ngorongoro-crater' },
      { name: 'Tarangire National Park', href: '/holiday-experiences/tarangire-national-park' },
      { name: 'Lake Manyara', href: '/holiday-experiences/lake-manyara-national-park' },
      { name: 'Arusha National Park', href: '/holiday-experiences/arusha-national-park' },
      { name: 'Selous Game Reserve', href: '/holiday-experiences/selous-game-reserve' },
    ],
  },
  {
    name: 'Kenya-Tanzania',
    href: '/tanzania-safaris',
    children: [
      { name: 'Cross-Border Safaris', href: '/tanzania-safaris' },
      { name: 'Wildebeest Migration', href: '/holiday-experiences/wildebeest-migration-masaimara-and-serengeti' },
      { name: 'Wildebeest Calving', href: '/holiday-experiences/wildebeest-calving-safari' },
    ],
  },
  {
    name: 'Uganda Safaris',
    href: '/kenya-uganda-safaris',
    children: [
      { name: 'Kenya-Uganda Safaris', href: '/kenya-uganda-safaris' },
      { name: 'Gorilla Trekking', href: '/kenya-uganda-safaris' },
    ],
  },
  {
    name: 'Rwanda Safaris',
    href: '/kenya-rwanda-safaris',
    children: [
      { name: 'Kenya-Rwanda Safaris', href: '/kenya-rwanda-safaris' },
      { name: 'Gorilla Trekking', href: '/kenya-rwanda-safaris' },
    ],
  },
  {
    name: 'Experiences',
    href: '/holiday-experiences',
    children: [
      { name: 'All Experiences', href: '/holiday-experiences' },
      { name: 'Hot Air Balloon Safari', href: '/holiday-experiences/hot-air-balloon-flight-over-the-masai-mara' },
      { name: 'Beach Holidays', href: '/holiday-experiences/africa-beach-holidays' },
      { name: 'Zanzibar Beach Holidays', href: '/holiday-experiences/zanzibar-beach-holidays' },
      { name: 'Bush Dining', href: '/holiday-experiences/bush-dining-on-your-african-safari' },
      { name: 'Sundowner Experiences', href: '/holiday-experiences/sundowner-on-your-african-safari' },
      { name: 'Night Game Drives', href: '/holiday-experiences/night-game-drive-safaris' },
      { name: 'Photographic Safaris', href: '/holiday-experiences/professional-photographic-safaris-kenya' },
      { name: 'Bird Watching Safaris', href: '/holiday-experiences/bird-watching-safaris-in-kenya-and-tanzania' },
      { name: 'Family Safaris', href: '/holiday-experiences/family-safaris-kenya' },
      { name: 'Honeymoon Safaris', href: '/holiday-experiences/honeymoon-safaris-kenya' },
      { name: 'Cultural Safaris', href: '/holiday-experiences/cultural-safaris' },
      { name: 'Group Safari Tours', href: '/holiday-experiences/group-safari-tours' },
      { name: 'Masai Village Visit', href: '/holiday-experiences/masai-village-cultural-visit' },
      { name: 'Conservation & Tree Planting', href: '/holiday-experiences/conservation-tree-planting' },
      { name: 'Hi-Tech Wildlife Tracking', href: '/holiday-experiences/hi-tech-wildlife-tracking' },
      { name: 'Wellness Travel', href: '/wellness-travel' },
      { name: 'Mountain Climbing', href: '/mountain-climbing' },
    ],
  },
  {
    name: 'Travel Info',
    href: '#',
    children: [
      {
        name: 'Accommodation',
        href: '#',
        children: [
          { name: 'Kenya Lodges & Camps', href: '/travel-info/kenya-lodges' },
          { name: 'Tanzania Lodges & Camps', href: '/travel-info/tanzania-lodges' },
          { name: 'Rwanda Lodges & Camps', href: '/travel-info/rwanda-lodges' },
          { name: 'Uganda Lodges & Camps', href: '/travel-info/uganda-lodges' },
        ],
      },
      {
        name: 'Destinations',
        href: '#',
        children: [
          { name: 'Masai Mara', href: '/holiday-experiences/masai-mara-national-reserve' },
          { name: 'Amboseli', href: '/holiday-experiences/amboseli-national-park' },
          { name: 'Tsavo', href: '/holiday-experiences/tsavo-national-park' },
          { name: 'Samburu', href: '/holiday-experiences/samburu-national-reserve' },
          { name: 'Ngorongoro', href: '/holiday-experiences/ngorongoro-crater' },
          { name: 'Lake Nakuru', href: '/holiday-experiences/lake-nakuru-national-park' },
          { name: 'Mount Kenya', href: '/holiday-experiences/mount-kenya' },
        ],
      },
      {
        name: 'Visas',
        href: '#',
        children: [
          { name: 'Kenya Visa Info', href: '/faqs' },
          { name: 'Tanzania Visa Info', href: '/faqs' },
          { name: 'Uganda Visa Info', href: '/faqs' },
          { name: 'Rwanda Visa Info', href: '/faqs' },
          { name: 'East Africa Tourist Visa', href: '/faqs' },
        ],
      },
      { name: 'FAQs', href: '/faqs' },
      { name: 'SGR Train Schedule', href: '/holiday-experiences/madaraka-express-sgr-train-schedule' },
      { name: 'Transport Solutions', href: '/transport-solutions' },
      { name: '4x4 Safari Vehicles', href: '/transport-solutions' },
      { name: 'Payment Methods', href: '/payment-methods' },
    ],
  },
  {
    name: 'Flights',
    href: '/flights',
    children: [
      { name: 'Flight Safaris', href: '/flights' },
      { name: 'Kenya Flight Safaris', href: '/kenya-flight-safaris' },
      { name: 'Private Charters & Domestic Flights', href: '/domestic-flights' },
      { name: 'Search Worldwide Flights', href: '/flight-search' },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];
