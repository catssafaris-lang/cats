export interface NavSubItem {
  name: string;
  href: string;
}

export type NavItem = NavSubItem;

export interface NavDropdownItem {
  name: string;
  href: string;
  description?: string;
  children?: NavSubItem[];
}

export interface NavSection {
  name: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export const navigationData: NavSection[] = [
  {
    name: 'Safari Experiences',
    dropdown: [
      {
        name: 'Nairobi Kenya Safaris',
        href: '/kenya-safaris',
        children: [
          { name: '2–4 Day Safari Tours', href: '/kenya-safaris#short-safaris' },
          { name: '5–8 Day Safari Tours', href: '/kenya-safaris#extended-safaris' },
          { name: 'Masai Mara Safaris', href: '/kenya-safaris#masai-mara' },
          { name: 'Amboseli Safaris', href: '/kenya-safaris#amboseli' },
        ],
      },
      { name: 'Kenya Flight Safaris', href: '/kenya-flight-safaris' },
      { name: 'Group Tours from Nairobi', href: '/kenya-safaris#group-tours-nairobi' },
      { name: 'Group Tours from Kenya Beach', href: '/kenya-safaris#group-tours-beach' },
      { name: 'Nairobi Excursions', href: '/kenya-safaris#nairobi-excursions' },
      { name: 'Nairobi Day Trips', href: '/kenya-safaris#nairobi-day-trips' },
      { name: 'Nairobi to Diani Beach Tours', href: '/kenya-safaris#nairobi-to-diani' },
      { name: 'Diani One Day Excursions & Safaris', href: '/kenya-safaris#diani-excursions' },
      { name: 'Safaris from Diani Beach', href: '/kenya-safaris#safaris-from-diani' },
      { name: 'Kenya Beach to Nairobi Safaris', href: '/kenya-safaris#beach-to-nairobi' },
      { name: 'Kenya Safaris and Diani Beach', href: '/kenya-safaris#kenya-and-diani' },
      { name: 'Tanzania Safaris', href: '/tanzania-safaris' },
      { name: 'Kenya-Tanzania Safaris', href: '/tanzania-safaris#kenya-tanzania' },
      { name: 'Uganda Safaris', href: '/kenya-uganda-safaris' },
      { name: 'Rwanda Safaris', href: '/kenya-rwanda-safaris' },
      { name: 'Mountain Climbing', href: '/mountain-climbing' },
      { name: 'Zanzibar Beach Holidays', href: '/kenya-safaris#zanzibar' },
    ],
  },
  {
    name: 'Experiences',
    dropdown: [
      { name: 'Wildlife Safari Adventures', href: '/holiday-experiences/wildlife-safari-adventures-in-kenya', description: 'Big Five game drives across Kenya\'s iconic reserves' },
      { name: 'Cultural Immersion Tours', href: '/holiday-experiences/cultural-immersion-tours-in-kenya', description: 'Authentic Maasai, Samburu & coastal Swahili heritage' },
      { name: 'Bird Watching Safaris', href: '/holiday-experiences/bird-watching-safaris-in-kenya-and-tanzania', description: '1,100+ species — flamingos, fish eagles, shoebills' },
      { name: 'Beach & Coast Holidays', href: '/holiday-experiences/beach-and-coast-holidays-in-kenya', description: 'Diani, Watamu & Lamu white-sand escapes' },
      { name: 'Honeymoon & Romance', href: '/holiday-experiences/honeymoon-and-romantic-getaways-in-kenya', description: 'Private bush dinners & sunset dhow cruises' },
      { name: 'Family Safari Holidays', href: '/holiday-experiences/family-safari-holidays-in-kenya', description: 'Kid-friendly lodges & junior ranger programs' },
      { name: 'Photography Safaris', href: '/holiday-experiences/photography-safaris-in-kenya', description: 'Golden-hour game drives with expert guides' },
      { name: 'Hot Air Balloon Rides', href: '/holiday-experiences/hot-air-balloon-safaris-over-masai-mara', description: 'Sunrise flights over the Mara with champagne breakfast' },
      { name: 'Gorilla & Primate Trekking', href: '/holiday-experiences/gorilla-trekking-safaris-in-uganda-and-rwanda', description: 'Mountain gorilla encounters in Bwindi & Volcanoes' },
      { name: 'Walking & Hiking Safaris', href: '/holiday-experiences/walking-and-hiking-safaris-in-kenya', description: 'Guided bush walks through conservancies' },
      { name: 'Fishing Adventures', href: '/holiday-experiences/fishing-adventures-in-kenya', description: 'Deep-sea sport fishing & freshwater angling' },
      { name: 'Wellness & Spa Retreats', href: '/wellness-travel', description: 'Lodge-based wellness in Kenya\'s wild landscapes' },
      { name: 'Golf Safaris', href: '/holiday-experiences/golf-safaris-in-kenya', description: 'Championship courses with wildlife backdrops' },
      { name: 'Corporate & MICE Travel', href: '/holiday-experiences/corporate-and-mice-travel-in-kenya', description: 'Conferences, team-building & incentive trips' },
      { name: 'Water Sports & Diving', href: '/holiday-experiences/water-sports-and-diving-in-kenya', description: 'Snorkelling, kite-surfing & scuba on the reef' },
      { name: 'Camping Safaris', href: '/holiday-experiences/camping-safaris-in-kenya', description: 'Tented bush camps under African skies' },
      { name: 'Culinary Safari Experiences', href: '/holiday-experiences/culinary-safari-experiences-in-kenya', description: 'Bush dining, Swahili cooking & farm-to-table' },
    ],
  },
  {
    name: 'Travel Information',
    dropdown: [
      { name: 'Booking Terms & Conditions', href: '/travel-info/booking-terms' },
      { name: 'What to Pack for Safari', href: '/travel-info/what-to-pack' },
      { name: '4x4 Safari Jeeps', href: '/transport-solutions' },
      { name: 'FAQs', href: '/faqs' },
      { name: 'Baggage Policy', href: '/travel-info/baggage-policy' },
      { name: 'Kenya Lodges & Camps', href: '/travel-info/kenya-lodges' },
      { name: 'Tanzania Lodges & Camps', href: '/travel-info/tanzania-lodges' },
      { name: 'Uganda Lodges & Camps', href: '/travel-info/uganda-lodges' },
      { name: 'Rwanda Lodges & Camps', href: '/travel-info/rwanda-lodges' },
      { name: 'Kenya Visa Information', href: '/travel-info/kenya-visa' },
      { name: 'Tanzania Visa Information', href: '/travel-info/tanzania-visa' },
      { name: 'Uganda Visa Information', href: '/travel-info/uganda-visa' },
      { name: 'Rwanda Visa Information', href: '/travel-info/rwanda-visa' },
      { name: 'Payment Methods', href: '/payment-methods' },
    ],
  },
  {
    name: 'Flights',
    dropdown: [
      { name: 'Safari Flights Overview', href: '/flights' },
      { name: 'Private Charter & Airstrips', href: '/domestic-flights' },
      { name: 'Search & Book Flights', href: '/flight-search' },
      { name: 'Kenya Flight Safaris', href: '/kenya-flight-safaris' },
    ],
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];
