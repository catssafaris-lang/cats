import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diani Beach One Day Excursions and Safaris | CATS',
  description: 'Discover Diani Beach day excursions and one-day Kenya safaris, from coastal adventures to rewarding wildlife game drives.',
  alternates: { canonical: '/kenya-safaris/diani-excursions' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('diani-one-day') || (s.type?.includes('diani-departure') && s.type?.includes('day-trip')),
  );

  return (
    <SafariListingPage
      title="Diani Beach One Day Excursions and Safaris"
      subtitle="A Day of Coast and Wildlife"
      description="Make every day on Kenya’s coast count with a Diani Beach excursion or one-day safari. Set out for a guided game drive, discover local coastal landscapes and wildlife, and return to your beach retreat with the colours, sounds and stories of Kenya’s untamed south."
      heroImage="https://ik.imagekit.io/axd1riwnv/Kenya-14517-scaled.webp"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Not every guest at Diani Beach has time for a multi-day safari, so C.A.T.S Safaris runs a set of one-day
            excursions that fit around a beach holiday. Options include wildlife game drives, cultural visits and the
            popular Wasini Island dolphin excursion, all departing directly from your Diani resort.
          </p>
          <p>
            These day trips run with a private guide and vehicle and can start early to make the most of morning
            wildlife activity before returning you to the beach by evening. For guests wanting a longer wildlife
            encounter, our{' '}
            <Link href="/kenya-safaris/safaris-from-diani" className="text-[var(--forest-canopy)] underline">
              multi-day safaris from Diani Beach
            </Link>{' '}
            add overnight stays in Tsavo or Amboseli.
          </p>
          <p>
            With 15 years of coastal operating experience, we know exactly how to time these excursions around tides,
            traffic and daylight for the smoothest possible day out.
          </p>
        </>
      }
      faqs={[
        {
          question: 'When is the best time for a Diani Beach day excursion?',
          answer:
            "Wildlife trips to Tsavo East are most comfortable in the drier months from June to October and January to February, when roads are easier and animals gather near water. Wasini Island and Kisite Marine Park can be visited year-round, although sea conditions and visibility vary with tides, wind and seasonal rain. C.A.T.S Safaris checks the marine forecast and park conditions before confirming the most suitable Diani excursion.",
        },
        {
          question: 'How much do Diani one-day excursions and safaris cost?',
          answer:
            "The price depends on whether you choose a private Tsavo game drive, a Wasini dhow trip, the vehicle size, park or marine fees, meals and the number of travellers. A private 4x4 Land Cruiser gives your party more flexibility, while a shared excursion can reduce the cost per person. Your quotation separates transport, entrance fees, meals and optional extras so there are no surprises.",
        },
        {
          question: 'Are Diani day trips and safaris safe?',
          answer:
            "Yes, our 15 years of coastal operating experience guide every road, marine and wildlife excursion. A professional driver-guide manages park rules and wildlife distances in Tsavo, while licensed boat crews follow marine safety procedures around Wasini Island and Kisite Marine Park. We monitor weather, tides and road conditions and will recommend a safe alternative if conditions make an activity unsuitable.",
        },
        {
          question: 'Are these Diani excursions suitable for families with children?',
          answer:
            "Yes, families can choose a gentle wildlife game drive, a short coastal visit or the Wasini dolphin excursion depending on the children’s ages and interests. We can allow extra comfort stops, arrange child-friendly meals and avoid an unnecessarily demanding schedule, although a Tsavo day safari involves an early start and long drive. Children should follow the guide’s instructions around wildlife, boats, coral and the ocean at all times.",
        },
        {
          question: 'What should I pack and wear for a Diani day safari or marine trip?',
          answer:
            "For Tsavo, wear light neutral clothing and closed shoes, and bring a hat, sunscreen, insect repellent, sunglasses, binoculars and a camera. For Wasini Island, pack swimwear, a towel, reef-safe sunscreen, sandals and a dry bag, while a light layer protects you from wind on the dhow. Bring only essentials because soft bags are easier to store in the vehicle and boat.",
        },
        {
          question: 'Are there health, swimming or mobility considerations?',
          answer:
            "Ask your clinician about Kenya travel vaccinations and malaria precautions, and bring any prescribed medication in its original packaging. The Tsavo route can be bumpy, while a dhow, snorkelling and uneven island paths require balance and some mobility, but we can discuss an easier coastal option or vehicle assistance. Tell us about pregnancy, medical conditions, seasickness, allergies or mobility needs before booking so the team can plan responsibly.",
        },
        {
          question: 'What wildlife and marine life can I see from Diani?',
          answer:
            "Tsavo East can produce sightings of red-dust elephants, lion, buffalo, giraffe, zebra, antelope and many birds, although no wild animal sighting is guaranteed. The Wasini excursion focuses on dolphins, colourful reef fish, turtles and coral habitats around Kisite Marine Park, subject to sea conditions. Our guides prioritise respectful viewing and never chase animals or promise a particular encounter.",
        },
        {
          question: 'What vehicle and boat are used, and how comfortable are they?',
          answer:
            "Wildlife excursions use a well-maintained 4x4 Land Cruiser with a pop-up roof, seat belts, large windows and high clearance for Tsavo tracks. Marine excursions use a local dhow or licensed boat appropriate to the route, with safety equipment and a crew familiar with the coast. Road and sea travel can both be bumpy, so we build in breaks and advise guests prone to motion sickness to prepare accordingly.",
        },
        {
          question: 'What time do Diani excursions depart and return?',
          answer:
            "Tsavo game drives generally start before sunrise so guests can reach the park during active morning hours, returning to the Diani resort in the evening after the drive back. Wasini and Kisite trips usually depart in the morning, with timing planned around tides and the dhow schedule. Pickup and estimated return times are confirmed with your resort and adjusted for traffic, weather and daylight.",
        },
        {
          question: 'What is included and excluded in a Diani day trip?',
          answer:
            "A wildlife excursion normally includes resort pickup and drop-off, private transport, a professional guide, the listed game drive, park fees and specified meals. The marine trip normally includes boat transport, marine park fees, snorkelling where offered and the stated lunch, while drinks, equipment hire and personal purchases may be extra. We list every inclusion, including towels, transfers and child equipment where available, in the quotation.",
        },
        {
          question: 'Can I customise a Diani Beach day excursion?',
          answer:
            "Yes, we can tailor a private itinerary around a wildlife game drive, Wasini dolphin cruise, Kisite snorkelling, coastal scenery or a cultural stop. You can choose a half-day or full-day pace, add hotel or airport transfers, and request a private vehicle rather than a shared departure. Our coastal team balances your wish list with Tsavo driving time, tides and realistic return arrangements.",
        },
        {
          question: 'How many people can join, and are private excursions available?',
          answer:
            "Private Diani excursions are available for solo travellers, couples, families and larger private parties, with vehicle choice matched to the group. Shared marine or wildlife departures may combine several guests and offer a lower price, but follow a set route and schedule. Ask us about the maximum boat or vehicle capacity for your selected activity so comfort and safety are maintained.",
        },
        {
          question: 'Can you provide food for dietary requirements?',
          answer:
            "We can request vegetarian, vegan, halal, child-friendly and allergy-aware meals for both wildlife and marine excursions when informed in advance. Wasini trips commonly include a Swahili seafood lunch, with a suitable alternative arranged for guests who do not eat seafood or have dietary restrictions. Carry water and a small snack for the road, and tell us about severe allergies before departure.",
        },
        {
          question: 'Are Diani excursions good for photography?',
          answer:
            "Yes, Tsavo offers striking red-earth landscapes, elephants and big-sky game-drive scenes, while Wasini provides dolphins, dhow details, coral and Indian Ocean colour. The Land Cruiser’s pop-up roof gives useful wildlife angles, and the boat crew can advise on safe photography without approaching marine animals too closely. Protect cameras from dust and spray, bring spare batteries and use a dry bag on the dhow.",
        },
        {
          question: 'How far ahead should I book, and what if plans change?',
          answer:
            "Reserve early during high season, school holidays and popular marine dates because park vehicles, boats and resort pickup slots can fill quickly, although last-minute bookings are sometimes possible. We confirm the deposit, booking details and supplier cancellation terms in writing, including weather-related marine changes. If your plans change, contact C.A.T.S Safaris promptly and we will explore a new date or alternative excursion subject to availability and the applicable terms.",
        },
      ]}
      relatedDestinations={[
        { name: 'Safaris from Diani', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Group Tours from Beach', href: '/kenya-safaris/group-tours-beach', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Kenya Safaris and Diani Beach', href: '/kenya-safaris/kenya-and-diani', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]}
    />
  );
}
