import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya-Tanzania Combined Safari Tours | Cross-Border Adventures',
  description: 'Experience the best of East Africa — combine Kenya\'s Masai Mara with Tanzania\'s Serengeti, Ngorongoro Crater, Tarangire & Lake Manyara in one unforgettable safari.',
  alternates: { canonical: '/kenya-tanzania-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'kenya-tanzania');

  return (
    <SafariListingPage
      title="Kenya-Tanzania Combined Safaris"
      subtitle="The Best of Both Worlds"
      description="Cross the border from Kenya's Masai Mara into Tanzania's Serengeti — two legendary ecosystems, one extraordinary safari. Explore Ngorongoro Crater, Tarangire, Lake Manyara and more."
      heroImage="https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg"
      safaris={filtered}
      destination="kenya-tanzania"
      introContent={
        <>
          <p>
            The Masai Mara and the Serengeti are a single connected ecosystem split by an international border, and a
            Kenya-Tanzania safari lets you experience both halves in one itinerary. C.A.T.S Safaris has coordinated
            these cross-border journeys for 15 years, handling the border crossing, vehicle changes and permit
            paperwork so the transition feels seamless.
          </p>
          <p>
            A typical route begins with game drives in Kenya&apos;s{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>
            , then crosses into Tanzania for the Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara before
            concluding at Arusha or a{' '}
            <Link href="/kenya-safaris/zanzibar" className="text-[var(--forest-canopy)] underline">
              Zanzibar
            </Link>{' '}
            beach finish.
          </p>
          <p>
            These combined safaris suit travellers who want to see the full range of East African landscapes, from
            Kenya&apos;s open savannah to Tanzania&apos;s volcanic crater floor, in a single trip.
          </p>
        </>
      }
      faqs={[
        {
          question: 'When is the best time for a Kenya-Tanzania safari?',
          answer:
            'The best dates depend on whether you prioritise Kenya’s Masai Mara, Tanzania’s calving season or possible migration river crossings. January to March is often productive for calving in the southern Serengeti, while July to October can offer strong dry-season viewing in both the Mara and northern Tanzania, although herd positions change naturally. CATS uses your travel window and current wildlife conditions to choose the most rewarding route rather than promising a fixed migration event.',
        },
        {
          question: 'How does the border crossing work between Kenya and Tanzania?',
          answer:
            'Road crossings commonly use Namanga or Isebania/Sirari, with the exact post depending on your route, park sequence and current operational arrangements. Guests normally complete immigration on both sides while CATS coordinates the paperwork, luggage handling, vehicle change and guide handover. A light-aircraft transfer is another option when saving time is more important than making the overland crossing.',
        },
        {
          question: 'Do I need separate visas for Kenya and Tanzania?',
          answer:
            'Travellers generally need to satisfy the entry requirements of both Kenya and Tanzania, and an East Africa Tourist Visa is not normally a substitute for Tanzanian entry because its coverage depends on current official rules and nationality. We provide practical guidance based on your passport and route, but you must apply accurately through the relevant authorities. Check visa validity, passport pages and vaccination requirements before international flights are issued.',
        },
        {
          question: 'How much does a combined Kenya-Tanzania safari cost?',
          answer:
            'A cross-border safari costs more than staying in one country because it includes two park systems, border logistics, vehicle or guide changes and sometimes additional internal flights. It can still be good value for travellers who want two ecosystems in one trip, especially when private 4x4 days are planned efficiently. CATS supplies an itemised quotation showing park fees, accommodation, transfers and optional upgrades so you can adjust the balance between comfort and cost.',
        },
        {
          question: 'What are the wildlife differences between Kenya and Tanzania?',
          answer:
            'The Masai Mara and Serengeti are one connected ecosystem, so both offer excellent opportunities for lion, elephant, buffalo, cheetah, leopard, zebra and wildebeest. Tanzania adds the Ngorongoro Crater, Tarangire’s elephant-rich landscapes and broad Serengeti horizons, while Kenya offers distinctive conservancies, the Mara River and varied access to Amboseli or other parks. Combining them gives greater habitat variety and flexibility if the herds are moving across the border.',
        },
        {
          question: 'What makes Ngorongoro Crater worth adding to a combined safari?',
          answer:
            'Ngorongoro’s collapsed volcanic caldera concentrates a remarkable range of wildlife in a compact setting, including lion, buffalo, hippo, elephant and possible black rhino sightings. The crater rim is high and cool, while the floor provides a different landscape from the open Mara and Serengeti plains. We schedule the descent and overnight location carefully so the crater visit complements rather than overwhelms the rest of the journey.',
        },
        {
          question: 'How long should a Kenya-Tanzania safari take?',
          answer:
            'Most meaningful combined itineraries take around eight to fifteen days, allowing several nights in the Mara and enough time in the Serengeti, Ngorongoro or Tarangire. Shorter trips can be designed with flights and fewer parks, but they involve more transitions and less flexibility for wildlife viewing. Our 15 years of East African planning help us protect game-drive time while keeping travel days realistic.',
        },
        {
          question: 'Is a Kenya-Tanzania safari safe?',
          answer:
            'The established safari routes are well travelled, and professional guides, reputable camps and coordinated transfers provide a strong safety framework. CATS manages border procedures and vehicle changes, while your guide advises on wildlife distance, road conditions and local customs. We monitor official travel information and ask guests to follow normal precautions and instructions throughout both countries.',
        },
        {
          question: 'Is this combined safari suitable for families?',
          answer:
            'Families can enjoy both countries when the itinerary uses a private 4x4, age-appropriate accommodation and a sensible number of border or flight days. We check camp minimum ages, walking restrictions and room configurations before confirming the route, then build in rest periods and flexible game drives. A private guide can shorten or extend stops around children’s energy, meals and interests.',
        },
        {
          question: 'What should I pack for two countries on safari?',
          answer:
            'Bring neutral layers, a warm fleece for early mornings and high crater rims, sun protection, comfortable closed shoes, insect repellent and a soft-sided bag where possible. Pack essentials in your hand luggage because a border or aircraft transfer can temporarily separate you from checked bags, and carry spare camera batteries and binoculars. We confirm the season-specific temperatures, laundry arrangements and any light-aircraft baggage allowance before travel.',
        },
        {
          question: 'What health precautions and vaccinations are needed?',
          answer:
            'Ask a travel-health professional about routine vaccinations, malaria prevention, yellow-fever rules and any requirements for both countries well before departure. We give route-specific practical information, but medical decisions must come from your clinician and depend on your personal history and connecting countries. Carry prescriptions in original packaging, bring insurance details and tell us about allergies, mobility or dietary needs.',
        },
        {
          question: 'What accommodation is used on a cross-border safari?',
          answer:
            'Accommodation ranges from comfortable city hotels to permanent tented camps, conservancy lodges, crater-rim properties and private luxury camps. We select locations that reduce unnecessary driving while preserving the different character of the Mara, Serengeti and Ngorongoro areas. Room layouts, family policies, meal plans and Wi-Fi vary, so CATS discusses these practical details before you choose.',
        },
        {
          question: 'Can CATS customise the route or add a Zanzibar beach holiday?',
          answer:
            'Yes, we can start in Nairobi or Arusha, vary the number of nights in each park, use road or air transfers and add conservancies, cultural experiences or photography time. A Zanzibar beach holiday is a popular finish, and we can coordinate the flight from mainland Tanzania or a suitable onward connection. Every itinerary is built around your dates, budget, preferred accommodation and desired pace rather than a fixed group departure.',
        },
        {
          question: 'How much should I tip guides and camp staff in both countries?',
          answer:
            'Tipping is discretionary, but guests commonly tip their private guide daily and contribute to a shared gratuity arrangement for camp or lodge staff when service has been good. CATS explains customary ranges and the practical difference between guide tips, porters and lodge gratuity boxes before the trip. Carry suitable local currency or follow the property’s accepted method, and only reward service you are comfortable endorsing.',
        },
        {
          question: 'How far ahead should I book, and what insurance do I need?',
          answer:
            'Six to twelve months is advisable for peak migration travel, specific camps, family rooms and limited border-route availability, though quieter-season trips may be arranged later. Comprehensive insurance should cover cancellation, medical treatment, emergency evacuation, delays, baggage and missed connections across both countries. We explain each supplier’s deposit and cancellation terms and help rework the itinerary if circumstances or border operations change.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Tanzania Safaris', href: '/tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Zanzibar', href: '/kenya-safaris/zanzibar', image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]}
    />
  );
}
