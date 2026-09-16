import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5–8 Day Safari Tours from Nairobi | CATS Safaris Kenya',
  description: 'Explore Kenya on a 5–8 day safari from Nairobi, combining superb game drives, Masai Mara wildlife and remarkable national parks.',
  alternates: { canonical: '/kenya-safaris/extended-safaris' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.destination === 'kenya' &&
      s.type?.includes('nairobi-departure') &&
      s.duration >= 5 &&
      s.duration <= 8 &&
      !s.type?.includes('flight-safari') &&
      !s.type?.includes('nairobi-diani'),
  );

  return (
    <SafariListingPage
      title="5–8 Day Safari Tours from Nairobi"
      subtitle="Extended Kenya Safari Adventures"
      description="Travel deeper into Kenya’s wild landscapes on a 5–8 day safari from Nairobi. Follow the rhythm of unhurried game drives through the Masai Mara, Amboseli, Lake Nakuru and beyond, with time to seek the Big Five, photograph dramatic scenery and settle into exceptional safari lodges."
      heroImage="https://ik.imagekit.io/axd1riwnv/great-wildebeest-migration-masai-mara-kenya_28358405063_o.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            An extended 5–8 day Kenya safari gives you time to properly explore two or three national parks instead
            of rushing between one or two. Classic circuits from Nairobi combine{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            with{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            and Lake Nakuru, giving you a genuine chance at all of the Big Five as well as flamingo-lined lakeshores
            and Rift Valley scenery.
          </p>
          <p>
            C.A.T.S Safaris has run these longer Kenya itineraries for 15 years, pairing each with a private 4x4 Land
            Cruiser, an experienced driver-guide and a choice of{' '}
            <Link href="/travel-info/kenya-lodges" className="text-[var(--forest-canopy)] underline">
              lodges and tented camps
            </Link>
            . For guests who want to save travel time between parks, ask about upgrading sections of your route to a{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              flight safari
            </Link>
            .
          </p>
          <p>
            An extended safari also pairs naturally with a beach finish. Many travellers extend their Kenya safari
            with a stay at{' '}
            <Link href="/kenya-safaris/kenya-and-diani" className="text-[var(--forest-canopy)] underline">
              Diani Beach
            </Link>{' '}
            once the game drives are complete.
          </p>
        </>
      }
      groups={[
        {
          title: '5–6 Day Safaris',
          description: 'A comfortable circuit through two or three parks with generous time at each.',
          safaris: filtered.filter((s) => s.duration >= 5 && s.duration <= 6),
        },
        {
          title: '7–8 Day Safaris',
          description: 'Our most complete Kenya itineraries, covering the Masai Mara, Amboseli, Lake Nakuru and more.',
          safaris: filtered.filter((s) => s.duration >= 7 && s.duration <= 8),
        },
      ]}
      faqs={[
        {
          question: "When is the best time for a 5–8 day Kenya safari?",
          answer:
            "June to October is popular for dry tracks, concentrated wildlife and the Great Migration in the Masai Mara, while January to March often combines green scenery, newborn animals and fewer visitors. The best month depends on whether you prioritise migration, photography, birding, budget or cooler road conditions. C.A.T.S Safaris has guided extended circuits for 15 years and can sequence the parks around your actual dates rather than promising one universal season.",
        },
        {
          question: "How much does a 5–8 day Kenya safari cost?",
          answer:
            "Pricing varies with the number of nights, parks, lodge or tented-camp category, season, park fees, flights and whether you choose a private or shared vehicle. Our quote itemises the private 4x4 Land Cruiser, professional driver-guide, accommodation, meals, park fees and transfers so the main costs are clear. Balloon flights, drinks, tips, visas, laundry, premium activities and personal purchases may be extra, and we identify them before booking.",
        },
        {
          question: "Is an extended Kenya safari safe?",
          answer:
            "Yes, a longer safari is safe when operated by an experienced company and when guests follow their guide's instructions. C.A.T.S Safaris uses professional guides who understand wildlife behaviour, park rules, road conditions and the practical differences between the Masai Mara, Amboseli, Lake Nakuru and Tsavo. Remain in the vehicle near animals, secure valuables, use camp escorts after dark and tell us promptly about any health or mobility concern.",
        },
        {
          question: "Are 5–8 day safaris suitable for families with children?",
          answer:
            "They can be very rewarding because the longer schedule allows shorter game drives, rest days and more time to settle into family-friendly lodges rather than rushing between parks. We tailor the route to children's ages, choose family rooms or connecting options and can include pools, easy cultural visits and flexible meal times. Young travellers still need to cope with early starts and bumpy tracks, so we avoid unnecessary long transfers and keep the private vehicle available for breaks.",
        },
        {
          question: "What should I pack and wear for an extended safari?",
          answer:
            "Pack light, breathable neutral clothing, a warm fleece, sun hat, sunglasses, sunscreen, insect repellent, closed shoes, a rain jacket and enough personal medication for the full route. Soft-sided luggage, a daypack, binoculars, refillable bottle, camera batteries and dust protection are more useful than bulky suitcases or formal clothes. Laundry is available at many lodges, so packing less makes vehicle and air transfers easier; add a swimsuit if your itinerary includes a lodge pool.",
        },
        {
          question: "What health precautions are needed on a longer Kenya safari?",
          answer:
            "Consult a travel-health professional about routine vaccinations, recommended vaccines, malaria prevention and any medication required for your personal conditions well before departure. Malaria risk exists across much of the route, so use repellent, cover up at dusk and take prescribed prophylaxis; carry medicines in hand luggage with copies of prescriptions. Lake Nakuru and the central highlands are elevated compared with the coast, but this is not usually high-altitude travel; hydration, rest and sun protection remain important.",
        },
        {
          question: "Which parks and wildlife are covered on an extended Kenya safari?",
          answer:
            "Classic circuits combine the Masai Mara for lions, cheetahs, leopards, elephants, buffalo and possible migration with Amboseli for elephants beneath Kilimanjaro and Lake Nakuru for rhino and birdlife. Longer or customised routes may add Tsavo or Samburu, introducing red-dust landscapes, reticulated giraffe and different habitats. The Big Five are possible but not guaranteed, and more days give your guide time to follow fresh tracks, vary habitats and enjoy unhurried game drives.",
        },
        {
          question: "What vehicle is used, and how long are the drives between parks?",
          answer:
            "C.A.T.S Safaris provides a private 4x4 safari Land Cruiser with comfortable seats, seat belts, a raised viewing roof and room for camera equipment. The vehicle is managed for weather, dust and park rules, giving you excellent views without sacrificing a secure structure around wildlife. Drive times depend on the sequence, weather, traffic and park tracks; Nairobi to the Masai Mara is commonly five to six hours, Nairobi to Amboseli four to five hours and connections between parks can take much of a day. We build overnight stops and game-viewing opportunities into the itinerary, while light-aircraft flights can replace selected long sections for travellers who prefer more time in camp.",
        },
        {
          question: "What accommodation and food are provided on an extended safari?",
          answer:
            "You can choose lodges, permanent tented camps or comfortable camps from practical to luxury, with selection based on location, service, security, facilities and budget. Remote properties may use solar power, scheduled hot water or limited WiFi, while staff remain attentive and meals are generally substantial and fresh. We can arrange vegetarian, vegan, halal, gluten-free and allergy-aware food with advance notice, plus bush breakfasts, sundowners or private dining where conditions permit.",
        },
        {
          question: "Can I customise a 5–8 day Kenya safari?",
          answer:
            "Absolutely; we can change the park combination, lodge standard, number of nights, flight legs, game-drive rhythm and beach extension around your priorities. Add a hot-air balloon over the Mara, photography time, a Maasai cultural experience, birding at Lake Nakuru or a Diani finish, or simplify the circuit for less driving. Private travel gives the greatest flexibility, while small-group departures may reduce cost for travellers with fixed dates.",
        },
        {
          question: "How much should I budget for tips on an extended safari?",
          answer:
            "Tipping is discretionary, but many guests thank the driver-guide at the end of the full circuit and use lodge or camp tip boxes for shared staff. Because you may change properties, your consultant can explain whether each camp pools gratuities and when a direct tip is more appropriate. Tips for specialist guides, porters or exceptional service are additional and should be based on your satisfaction, not treated as a compulsory hidden fee.",
        },
        {
          question: "Can solo travellers join a 5–8 day Kenya safari?",
          answer:
            "Yes, solo guests can choose a private Land Cruiser with a dedicated guide, a small group or a tailor-made route that matches their interests. Single supplements may apply to accommodation, vehicle and flights, and we explain the calculation clearly while checking shared dates that may lower the cost. A longer trip gives solo travellers time to build rapport with the guide and enjoy social lodge dining without giving up privacy.",
        },
        {
          question: "What photography and connectivity can I expect across several parks?",
          answer:
            "Bring a telephoto lens, wide lens, spare batteries, memory cards, dust protection and binoculars; a beanbag is often more practical than a tripod in the Land Cruiser. Dawn and late afternoon provide the best light, while extra days let photographers wait for behaviour instead of rushing between sightings; your guide can position the vehicle thoughtfully. Lodge WiFi and mobile signal vary significantly, with remote Mara, Tsavo or Samburu camps often offline, so download maps, reading and emergency contacts beforehand.",
        },
        {
          question: "How far ahead should I book, and what insurance is recommended?",
          answer:
            "Book six to twelve months ahead for migration season, Christmas, school holidays, popular lodges and specific flight schedules, especially for families or photography groups. Comprehensive insurance should cover cancellation, medical treatment and evacuation, delays, baggage, activities and non-refundable deposits. C.A.T.S Safaris explains each supplier's cancellation and amendment deadlines before payment and will help re-route the trip if conditions or availability change.",
        },
        {
          question: "How physically demanding is an extended safari, and can I include local culture?",
          answer:
            "Most time is spent seated in the vehicle, but repeated early starts, bumpy tracks, vehicle steps, uneven lodge paths and heat can be tiring, so we can add rest days and choose accessible accommodation for older guests. Walking safaris are optional, guided and subject to local rules, and you can enjoy a complete extended Kenya safari without them. We can arrange respectful Maasai or other community visits with local hosts, consent-based activities, guidance on dress and responsible photography.",
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
        { name: 'Short Safaris', href: '/kenya-safaris/short-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Flight Safaris', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/reticulated-giraffe-giraffa-camelopardalis-reticulata-samburu-national-reserve-kenya_28942449116_o.jpg' },
      ]}
    />
  );
}
