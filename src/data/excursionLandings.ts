export interface LandingFaq {
  q: string;
  a: string;
}

export interface ExcursionLanding {
  slug: string;
  productId: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroImage?: string;
  eyebrow: string;
  intro: string[];
  experience: { title: string; text: string }[];
  goodToKnow: string[];
  faqs: LandingFaq[];
}

/* Shared FAQs appended to every landing page (keeps each page at 15+ questions). */
export const sharedExcursionFaqs: LandingFaq[] = [
  {
    q: 'Do you pick up from Nairobi hotels and JKIA?',
    a: 'Yes. Pick-up and drop-off from your Nairobi hotel or Jomo Kenyatta International Airport (JKIA) is included in every C.A.T.S Nairobi excursion and day trip. Share your hotel name or flight details when you book and your driver-guide will meet you there.',
  },
  {
    q: 'Is this a private tour?',
    a: 'Our Nairobi excursions and day trips are run as private tours, so the 4x4 Land Cruiser and driver-guide are reserved for your party only. You set the pace, and timings can be adjusted around your flights or plans.',
  },
  {
    q: 'What vehicle will we use?',
    a: 'A 4x4 Land Cruiser with a pop-up roof, driven by a professional English-speaking driver-guide. The pop-up roof lets everyone stand for clear wildlife viewing and photography.',
  },
  {
    q: 'Are park entrance fees included?',
    a: 'Yes. All park entrance fees for the parks in your itinerary are included in the quoted price, together with bottled drinking water and government taxes. The full included and excluded list is shown on each tour page.',
  },
  {
    q: 'Is the tour suitable for children?',
    a: 'Yes. Our private Nairobi tours are family-friendly. Children under 11 are booked at child rates, and the private vehicle means you can take breaks whenever the family needs one.',
  },
  {
    q: 'What should I wear and bring?',
    a: 'Comfortable layers in neutral colours, a warm top for early mornings, closed shoes, a hat, sunscreen, sunglasses and a camera. Binoculars are a good idea for game drives.',
  },
  {
    q: 'How do I book?',
    a: 'Click Book This Tour, choose your preferred date and number of travellers, and send the request. Our excursions team replies with confirmation and payment details. You can also message us on WhatsApp on +254 723 951 388.',
  },
  {
    q: 'How do I pay?',
    a: 'Payment details are sent with your confirmed quote. See our Payment Methods page for the options we accept.',
  },
  {
    q: 'Can I combine this with a Kenya safari?',
    a: 'Yes. Many guests add a Nairobi excursion or day trip before or after a Masai Mara, Amboseli or Lake Nakuru safari. Tell us your safari dates and we will fit it into your plan.',
  },
];

export const excursionLandings: ExcursionLanding[] = [
  {
    slug: 'giraffe-centre-tour-nairobi',
    productId: 'nairobi-city-tour',
    h1: 'Giraffe Centre Tour Nairobi: Private Day with Game Drive & Sheldrick',
    metaTitle: 'Giraffe Centre Tour Nairobi | Private Day Tour with Pickup | C.A.T.S',
    metaDescription:
      'Private Giraffe Centre tour in Nairobi: hand-feed Rothschild giraffes in Langata, plus a Nairobi National Park game drive and the Sheldrick elephant orphanage. Hotel & JKIA pickup.',
    keywords: [
      'Giraffe Centre tour Nairobi',
      'Giraffe Centre Langata',
      'feed giraffes Nairobi',
      'Nairobi giraffe tour',
      'things to do in Nairobi',
      'Nairobi day tour',
    ],
    eyebrow: 'Nairobi Excursion · Langata',
    intro: [
      'The Giraffe Centre in Langata is one of the most popular things to do in Nairobi. From a raised wooden platform you come face to face with endangered Rothschild\'s giraffes and feed them by hand. The centre is run by the African Fund for Endangered Wildlife (AFEW) Kenya, which works on Rothschild\'s giraffe conservation and education.',
      'With C.A.T.S, the Giraffe Centre is part of our private Nairobi National Park & City Tour. You start with an early game drive in Nairobi National Park, visit the David Sheldrick Wildlife Trust elephant orphanage, then hand-feed giraffes at the Giraffe Centre, all in one private day with hotel or JKIA pickup.',
    ],
    experience: [
      { title: 'Morning game drive', text: 'Nairobi National Park at first light, with the city skyline behind open savannah. Look out for rhino, lion, giraffe, buffalo and plains game; sightings depend on the day.' },
      { title: 'Sheldrick elephant orphanage', text: 'The David Sheldrick Wildlife Trust nursery, where rescued baby elephants are bottle-fed and play in the mud during the late-morning public visiting hour.' },
      { title: 'Giraffe Centre, Langata', text: 'Climb the feeding platform and hand-feed Rothschild\'s giraffes, then learn how the centre helps protect this subspecies.' },
      { title: 'Afternoon choice', text: 'Finish at the Karen Blixen Museum or Bomas of Kenya before your driver-guide returns you to your hotel or the airport.' },
    ],
    goodToKnow: [
      'Private 4x4 Land Cruiser with pop-up roof and English-speaking driver-guide',
      'Lunch and bottled water included',
      'Hotel or JKIA pickup and drop-off included',
      'Expect giraffes to lean in close: keep sunglasses and hats secure',
    ],
    faqs: [
      { q: 'Can you feed the giraffes at the Giraffe Centre?', a: 'Yes. Visitors feed Rothschild\'s giraffes from a raised platform using the feed provided by the centre, under the guidance of the centre\'s staff.' },
      { q: 'Where is the Giraffe Centre?', a: 'In Langata, south-west Nairobi, close to Karen and Nairobi National Park. That is why it combines easily with a game drive and the Sheldrick elephant orphanage in one day.' },
      { q: 'Which giraffes live at the Giraffe Centre?', a: 'Rothschild\'s giraffes, a subspecies found in Kenya and Uganda. They are recognised by their pale legs with no markings below the knee.' },
      { q: 'Can I visit only the Giraffe Centre?', a: 'Our listed tour combines the Giraffe Centre with a Nairobi National Park game drive and the Sheldrick orphanage. If you want a shorter visit, message us and we will quote a custom private transfer and itinerary.' },
      { q: 'How long is the tour?', a: 'It is a full-day private tour, starting early for the game drive and finishing in the afternoon after your chosen cultural stop.' },
      { q: 'Is the Giraffe Centre good for kids?', a: 'Yes, it is one of the most child-friendly attractions in Nairobi. Children love feeding the giraffes, and the visit is short and easy to manage.' },
    ],
  },
  {
    slug: 'sheldrick-elephant-orphanage-tour',
    productId: 'nairobi-city-tour',
    h1: 'Sheldrick Elephant Orphanage Tour: Private Nairobi Day Trip',
    metaTitle: 'Sheldrick Elephant Orphanage Tour Nairobi | Private Tour | C.A.T.S',
    metaDescription:
      'Visit the David Sheldrick Wildlife Trust elephant orphanage on a private Nairobi tour with a Nairobi National Park game drive and the Giraffe Centre. Hotel & JKIA pickup included.',
    keywords: [
      'Sheldrick elephant orphanage tour',
      'David Sheldrick Wildlife Trust visit',
      'elephant orphanage Nairobi',
      'baby elephants Nairobi',
      'Nairobi day tour',
    ],
    eyebrow: 'Nairobi Excursion · Nairobi National Park',
    intro: [
      'The David Sheldrick Wildlife Trust runs its Nairobi elephant nursery on the edge of Nairobi National Park. Orphaned baby elephants, rescued from across Kenya, are hand-raised here before being moved to reintegration units in Tsavo and elsewhere. During the public visiting hour in the late morning, you watch the keepers bottle-feed the orphans and the young elephants play in the mud.',
      'C.A.T.S includes the Sheldrick visit in our private Nairobi National Park & City Tour. We plan the day around the visiting hour, add an early game drive and the Giraffe Centre, and handle pickup and drop-off at your hotel or JKIA.',
    ],
    experience: [
      { title: 'Early game drive', text: 'Search Nairobi National Park for rhino, lion, giraffe and buffalo before the Sheldrick visit. Wildlife sightings are naturally unpredictable.' },
      { title: 'Elephant nursery visit', text: 'Keepers bring the baby elephants out for their milk feed and mud bath, and explain each orphan\'s rescue story.' },
      { title: 'Giraffe Centre', text: 'Hand-feed Rothschild\'s giraffes from the raised platform in nearby Langata.' },
      { title: 'Karen Blixen or Bomas', text: 'Choose a cultural afternoon at the Karen Blixen Museum or Bomas of Kenya.' },
    ],
    goodToKnow: [
      'The orphanage has a set public visiting hour, so tour timings are planned around it',
      'Advance visit booking is required by the Trust; we arrange it with your tour',
      'Private 4x4 Land Cruiser, lunch and bottled water included',
      'Hotel or JKIA pickup and drop-off included',
    ],
    faqs: [
      { q: 'When can you visit the Sheldrick elephant orphanage?', a: 'The Trust opens its Nairobi nursery to the public for one hour in the late morning, usually 11:00 to 12:00. Our itinerary is timed so you arrive before the visit starts.' },
      { q: 'Do I need to book the Sheldrick visit in advance?', a: 'Yes, the Trust requires visits to be booked in advance. Book your tour with us early so we can secure your place.' },
      { q: 'Can you touch the baby elephants?', a: 'During the public visit you watch from behind a rope while keepers feed the orphans. The elephants often come close to the rope, but contact is at the keepers\' discretion.' },
      { q: 'Can I adopt an elephant?', a: 'Yes, the Trust runs a fostering programme online. Fosters can also arrange a separate evening visit through the Trust directly.' },
      { q: 'Is the Sheldrick orphanage inside Nairobi National Park?', a: 'The nursery is on the edge of Nairobi National Park, which is why it combines so easily with a morning game drive.' },
      { q: 'How long does the whole tour take?', a: 'It is a full-day private tour, from an early pickup for the game drive to an afternoon return to your hotel or the airport.' },
    ],
  },
  {
    slug: 'karen-blixen-museum-tour',
    productId: 'nairobi-city-tour',
    h1: 'Karen Blixen Museum Tour: Private Nairobi Wildlife & Culture Day',
    metaTitle: 'Karen Blixen Museum Tour Nairobi | Private Day Tour | C.A.T.S',
    metaDescription:
      'Private Karen Blixen Museum tour in Nairobi, combined with a Nairobi National Park game drive, the Sheldrick elephant orphanage and the Giraffe Centre. Hotel & JKIA pickup.',
    keywords: [
      'Karen Blixen Museum tour',
      'Out of Africa house Nairobi',
      'Karen Nairobi day tour',
      'Nairobi culture tour',
      'things to do in Karen Nairobi',
    ],
    eyebrow: 'Nairobi Excursion · Karen',
    intro: [
      'The Karen Blixen Museum is the farmhouse where Danish author Karen Blixen lived while running her coffee farm at the foot of the Ngong Hills. Her memoir Out of Africa, and the film made from it, made the house one of the best-known heritage sites in Nairobi. Today it is run by the National Museums of Kenya, with period rooms and gardens open to visitors.',
      'With C.A.T.S you visit the museum as part of our private Nairobi National Park & City Tour. The day combines a morning game drive, the Sheldrick elephant orphanage and the Giraffe Centre, then the Karen Blixen Museum in the afternoon (or Bomas of Kenya if you prefer).',
    ],
    experience: [
      { title: 'Nairobi National Park', text: 'A dawn game drive with the city skyline on the horizon. Look out for rhino, lion and giraffe, depending on the day.' },
      { title: 'Sheldrick & Giraffe Centre', text: 'Watch baby elephants at their feed, then hand-feed Rothschild\'s giraffes in Langata.' },
      { title: 'Karen Blixen Museum', text: 'Walk through the restored farmhouse and gardens with views towards the Ngong Hills.' },
      { title: 'Return to your hotel', text: 'Your driver-guide drops you at your hotel or JKIA in the afternoon.' },
    ],
    goodToKnow: [
      'Karen Blixen Museum is the afternoon Option A; Bomas of Kenya is Option B',
      'Private 4x4 Land Cruiser, lunch and bottled water included',
      'Hotel or JKIA pickup and drop-off included',
      'Ideal for travellers interested in Kenya\'s history and film locations',
    ],
    faqs: [
      { q: 'What is the Karen Blixen Museum?', a: 'The former farmhouse of author Karen Blixen, who wrote Out of Africa. It is managed by the National Museums of Kenya and shows furniture and items from her time in Kenya.' },
      { q: 'Where is the Karen Blixen Museum?', a: 'In Karen, a leafy suburb in south-west Nairobi near the Ngong Hills. It is close to the Giraffe Centre and Nairobi National Park.' },
      { q: 'Was Out of Africa filmed at the museum?', a: 'The film was shot at nearby locations rather than inside the museum house, but the museum is the farmhouse Karen Blixen actually lived in, and it displays items connected to the film.' },
      { q: 'Can I choose Bomas of Kenya instead?', a: 'Yes. The afternoon offers a choice between the Karen Blixen Museum and Bomas of Kenya, which showcases traditional homesteads and dances from Kenya\'s communities.' },
      { q: 'How much time is spent at the museum?', a: 'Usually about an hour, which is enough for a guided walk through the house and gardens.' },
      { q: 'Is the museum suitable for children?', a: 'Yes, though younger children often enjoy the giraffes and elephants more. Families can choose Bomas of Kenya for a livelier afternoon.' },
    ],
  },
  {
    slug: 'nairobi-layover-safari',
    productId: 'nairobi-np-private',
    h1: 'Nairobi Layover Safari: Private Game Drive from JKIA',
    metaTitle: 'Nairobi Layover Safari | Private Tour from JKIA Airport | C.A.T.S',
    metaDescription:
      'Turn a long layover at JKIA into a private Nairobi National Park safari. Airport pickup, 4x4 Land Cruiser game drive, park fees and drop-off for your onward flight.',
    keywords: [
      'Nairobi layover safari',
      'JKIA layover tour',
      'Nairobi transit tour',
      'Nairobi airport safari',
      'Nairobi National Park layover',
      'things to do in Nairobi layover',
    ],
    heroImage:
      'https://ik.imagekit.io/axd1riwnv/Nairobi%20National%20Park/360_F_707047866_az9J9SSGiQ94MLRFzySmbVihKtdXWZDh.jpg',
    eyebrow: 'Nairobi Excursion · JKIA Layover',
    intro: [
      'Nairobi National Park is the only national park in the world on the edge of a capital city, and it lies close to Jomo Kenyatta International Airport (JKIA). That makes it one of the few places where a long layover can become a real safari.',
      'Our private Nairobi National Park half-day tour is about 5 hours. Your driver-guide meets you at JKIA, takes you on a game drive in a private 4x4 Land Cruiser, and returns you to the airport in time for your onward flight. Park entrance fees and bottled water are included.',
    ],
    experience: [
      { title: 'Airport meet & greet', text: 'Your driver-guide meets you at JKIA arrivals with a C.A.T.S name board.' },
      { title: 'Private game drive', text: 'Look out for rhino, lion, giraffe, buffalo, zebra and ostrich against the Nairobi skyline. Wildlife sightings are naturally unpredictable.' },
      { title: 'Flexible timing', text: 'Because the vehicle is private, the drive is planned around your arrival and departure times.' },
      { title: 'Back to JKIA', text: 'You are returned to the airport with time to check in for your next flight.' },
    ],
    goodToKnow: [
      'You need to be able to enter Kenya: check your Kenya eTA requirements before travel',
      'Allow enough time for immigration, the tour and airport check-in; send us your flight times and we will advise',
      'Luggage can stay in the vehicle with your driver-guide',
      'Nairobi National Park has no elephants; it is known for rhino, lion and giraffe',
    ],
    faqs: [
      { q: 'How long a layover do I need for a Nairobi safari?', a: 'The private tour itself is about 5 hours. You also need time for immigration on arrival and check-in before your next flight. Send us your flight times and we will tell you honestly whether the tour fits.' },
      { q: 'Do I need a visa or eTA to leave the airport?', a: 'Yes, you need valid entry permission for Kenya to leave the airport. Most visitors apply for a Kenya Electronic Travel Authorisation (eTA) online before travel. Check the official requirements for your nationality.' },
      { q: 'How far is Nairobi National Park from JKIA?', a: 'The park is close to JKIA on the southern side of Nairobi. Drive time depends on traffic and the gate used, and your driver-guide chooses the best route on the day.' },
      { q: 'What can I do with my luggage?', a: 'Your luggage stays securely in the private vehicle with your driver-guide throughout the tour.' },
      { q: 'What animals can I see on a layover safari?', a: 'Nairobi National Park is home to black and white rhino, lion, giraffe, buffalo, zebra, eland, hippo and over 400 bird species. Elephants are not found in the park. As on any safari, sightings vary.' },
      { q: 'What if my flight is delayed?', a: 'Share your flight number when booking. We monitor arrivals and adjust pickup where possible; if a delay makes the tour unworkable, contact us on WhatsApp straight away.' },
    ],
  },
  {
    slug: 'hells-gate-day-trip-from-nairobi',
    productId: 'naivasha-hellsgate-day',
    h1: "Hell's Gate Day Trip from Nairobi: Cycling, Gorge Walk & Lake Naivasha",
    metaTitle: "Hell's Gate Day Trip from Nairobi | Cycling & Naivasha Boat Ride | C.A.T.S",
    metaDescription:
      "Private Hell's Gate day trip from Nairobi: cycle among zebra and giraffe, walk the gorge, then take a Lake Naivasha boat ride and Crescent Island walking safari. Lunch & park fees included.",
    keywords: [
      "Hell's Gate day trip from Nairobi",
      "Hell's Gate National Park cycling",
      "Hell's Gate gorge walk",
      'Lake Naivasha day trip',
      'Crescent Island walking safari',
      'day trips from Nairobi',
    ],
    heroImage: 'https://ik.imagekit.io/axd1riwnv/1-Day-Trip-To-Hells-Gate-Lake-Naivasha.jpg',
    eyebrow: 'Day Trip from Nairobi · Rift Valley',
    intro: [
      "Hell's Gate National Park, about 100 km from Nairobi in the Great Rift Valley, is one of the few Kenyan parks where you can explore by bicycle and on foot. Volcanic cliffs, the Fischer's Tower rock column and a deep gorge carved by water make it one of the most active day trips from Nairobi.",
      "Our private Hell's Gate day trip combines cycling in the park with a boat ride on Lake Naivasha to see hippos and fish eagles, and a walking safari on Crescent Island among zebra, giraffe and wildebeest. Lunch, park fees and hotel or JKIA pickup are included.",
    ],
    experience: [
      { title: "Cycle through Hell's Gate", text: "Ride past Fischer's Tower with zebra, buffalo, warthog and giraffe grazing nearby." },
      { title: 'Gorge walk', text: 'Walk with a local guide through the narrow volcanic gorge and its hot springs.' },
      { title: 'Lake Naivasha boat ride', text: 'Hippos, pelicans and African fish eagles on one of the Rift Valley\'s freshwater lakes.' },
      { title: 'Crescent Island on foot', text: 'A walking safari among zebra, giraffe, waterbuck and wildebeest. There are no large predators on the island.' },
    ],
    goodToKnow: [
      'Private 4x4 Land Cruiser with English-speaking driver-guide',
      'Lunch, bottled water and park entrance fees included',
      'Wear closed shoes and comfortable clothes for cycling and the gorge',
      'Gorge walks may be closed after heavy rain for safety',
    ],
    faqs: [
      { q: "How far is Hell's Gate from Nairobi?", a: 'About 100 km, roughly 2 hours by road depending on traffic, via the Rift Valley escarpment.' },
      { q: "Can you cycle in Hell's Gate National Park?", a: 'Yes. Cycling is permitted in the park and is one of the main reasons to visit. Bikes are available at the park.' },
      { q: "Is the Hell's Gate gorge walk safe?", a: 'The gorge is walked with a local guide. It can be closed after heavy rain because of flash-flood risk, in which case your guide will offer alternatives.' },
      { q: 'Is the cycling difficult?', a: 'The main track is mostly flat and suitable for most reasonably fit adults. You can also drive sections in the vehicle if you prefer.' },
      { q: 'What will we see on the Lake Naivasha boat ride?', a: 'Hippos, fish eagles, pelicans, cormorants and kingfishers are commonly seen. Sightings vary with the season and water levels.' },
      { q: 'Can children do this day trip?', a: 'Yes, with care. Older children usually enjoy the cycling and walking. Younger children can stay in the vehicle for the cycling part and still enjoy the boat ride and Crescent Island.' },
    ],
  },
  {
    slug: 'lake-nakuru-day-trip-from-nairobi',
    productId: 'nakuru-naivasha-day',
    h1: 'Lake Nakuru Day Trip from Nairobi: Rhinos, Flamingos & Lake Naivasha',
    metaTitle: 'Lake Nakuru Day Trip from Nairobi | Rhino & Flamingos | C.A.T.S',
    metaDescription:
      'Private Lake Nakuru day trip from Nairobi: game drive for black and white rhino, Rothschild giraffe and flamingos, plus a Lake Naivasha boat ride and Crescent Island walk. Lunch & park fees included.',
    keywords: [
      'Lake Nakuru day trip from Nairobi',
      'Lake Nakuru National Park tour',
      'Lake Nakuru rhino sanctuary',
      'Lake Nakuru flamingos',
      'Nakuru and Naivasha day trip',
      'day trips from Nairobi',
    ],
    heroImage: 'https://ik.imagekit.io/axd1riwnv/lesser-flamingos-lake-nakuru-national-park-kenya_28355639464_o.jpg',
    eyebrow: 'Day Trip from Nairobi · Rift Valley',
    intro: [
      'Lake Nakuru National Park, about 160 km from Nairobi, is a fenced rhino sanctuary on a Rift Valley soda lake. It is one of the best places in Kenya to look for both black and white rhino, along with Rothschild\'s giraffe, lion, buffalo and large numbers of water birds. Flamingo numbers vary with the lake\'s water levels.',
      'Our private Lake Nakuru day trip adds a boat ride on Lake Naivasha and a Crescent Island walking safari on the way back to Nairobi. Lunch, park fees and hotel or JKIA pickup are included.',
    ],
    experience: [
      { title: 'Lake Nakuru game drive', text: 'Look out for white and black rhino, Rothschild\'s giraffe, lion and buffalo in acacia woodland and along the shoreline.' },
      { title: 'Baboon Cliff viewpoint', text: 'A panoramic view over the lake and the park\'s woodland.' },
      { title: 'Lake Naivasha boat ride', text: 'Hippos, pelicans and fish eagles on Naivasha\'s freshwater lake.' },
      { title: 'Crescent Island walk', text: 'Walk among zebra, giraffe, waterbuck and wildebeest with no vehicles around you.' },
    ],
    goodToKnow: [
      'Private 4x4 Land Cruiser with pop-up roof and English-speaking driver-guide',
      'Lunch, bottled water and park entrance fees included',
      'Early start recommended: the round trip covers a lot of road',
      'Flamingo numbers vary by season and water levels and are not guaranteed',
    ],
    faqs: [
      { q: 'How far is Lake Nakuru from Nairobi?', a: 'About 160 km, roughly 3 hours by road depending on traffic, through the Rift Valley.' },
      { q: 'Will I see flamingos at Lake Nakuru?', a: 'Possibly. Flamingo numbers at Lake Nakuru change with water levels and food availability, so they vary from month to month. Your driver-guide will know where birds have been seen recently.' },
      { q: 'Can I see rhinos at Lake Nakuru?', a: 'Lake Nakuru is a rhino sanctuary with both black and white rhino, and sightings are common, but no wildlife sighting can be guaranteed.' },
      { q: 'Is a day trip to Lake Nakuru worth it?', a: 'Yes, if you have one free day. It is a long day, but it gives you rhino, giraffe and Rift Valley scenery, plus Lake Naivasha on the return.' },
      { q: 'Are there lions at Lake Nakuru?', a: 'Yes, Lake Nakuru has resident lions, and leopards are also present, though they are harder to find.' },
      { q: 'Can I stay overnight instead?', a: 'Yes. If you would like more time, ask about our overnight Lake Nakuru and Naivasha safaris and we will quote accommodation options.' },
    ],
  },
];

export function getLandingBySlug(slug: string): ExcursionLanding | undefined {
  return excursionLandings.find((l) => l.slug === slug);
}
