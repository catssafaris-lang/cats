import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Safari Tours | Best Kenya Safari Packages',
  description: 'Explore Kenya with handcrafted safari packages — Masai Mara, Amboseli, Tsavo, Lake Nakuru, Samburu & more.',
  alternates: { canonical: '/kenya-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'kenya' || s.destination === 'beach');

  return (
    <SafariListingPage
      title="Kenya Safari Tours"
      subtitle="Discover Kenya"
      description="From the sweeping plains of the Masai Mara to the elephant herds of Amboseli and the white sands of Diani Beach."
      heroImage="https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Kenya is the safari that set the standard for East Africa, and Collective African Tours &amp; Safaris
            (C.A.T.S Safaris) has spent 15 years turning that promise into carefully guided journeys. A Kenya safari
            with C.A.T.S can begin in Nairobi and roll out to the golden grasslands of the{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            or the elephant herds of{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>
            , where the herds move beneath the snows of Mount Kilimanjaro.
          </p>
          <p>
            Choose a short 2–4 day escape, an extended 5–8 day circuit through Lake Nakuru, Samburu and Tsavo, or
            combine wildlife with the coast on a route that ends at Diani Beach. Prefer to save time in the vehicle?
            Our{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              Kenya flight safaris
            </Link>{' '}
            connect Nairobi to the bush by scenic light aircraft in under an hour.
          </p>
          <p>
            Every itinerary includes a private 4x4 safari Land Cruiser, a professional driver-guide, comfortable{' '}
            <Link href="/travel-info/kenya-lodges" className="text-[var(--forest-canopy)] underline">
              lodges and camps
            </Link>
            , and full logistics support. Travelling further afield? We also craft combined{' '}
            <Link href="/kenya-tanzania-safaris" className="text-[var(--forest-canopy)] underline">
              Kenya-Tanzania safaris
            </Link>{' '}
            and gorilla-trekking extensions into Uganda and Rwanda.
          </p>
        </>
      }
      groups={[
        {
          title: 'Short Kenya Safaris (1–4 Days)',
          description: 'Quick, efficient game-drive itineraries ideal for travellers with limited time in Kenya.',
          safaris: filtered.filter((s) => s.destination === 'kenya' && s.duration <= 4),
        },
        {
          title: 'Extended Kenya Safaris (5+ Days)',
          description: 'Unhurried multi-park circuits through the Masai Mara, Amboseli, Lake Nakuru and beyond.',
          safaris: filtered.filter((s) => s.destination === 'kenya' && s.duration >= 5),
        },
        {
          title: 'Safari & Beach Combinations',
          description: 'Pair Kenya wildlife game drives with a relaxing finish on the Indian Ocean coast.',
          safaris: filtered.filter((s) => s.destination === 'beach'),
        },
      ]}
      faqs={[
        {
          question: "When is the best time to take a Kenya safari?",
          answer:
            "Kenya is a year-round safari destination, but the dry months from June to October usually offer the easiest wildlife viewing in the Masai Mara, Amboseli, Tsavo and Lake Nakuru. The Great Migration generally reaches the Masai Mara between July and October, while January to March brings green scenery, newborn animals and fewer visitors. C.A.T.S Safaris can match your dates to the parks and experiences you most want, rather than treating one season as suitable for every traveller.",
        },
        {
          question: "How much does a Kenya safari cost, and what is included?",
          answer:
            "The price depends on the number of days, park fees, lodge or tented-camp category, season, flights and whether you choose a private or shared departure. Our quotations clearly set out accommodation, meals, park fees, transfers, a private 4x4 Land Cruiser and professional driver-guide, so there are no surprises about the main safari costs. Extras such as drinks, balloon flights, cultural visits, visas, tips and personal purchases are normally listed separately before you confirm.",
        },
        {
          question: "Is a Kenya safari safe for international visitors?",
          answer:
            "Yes, a Kenya safari is safe when planned with a reputable operator and sensible travel habits. For 15 years C.A.T.S Safaris has used experienced driver-guides who understand wildlife behaviour, park rules, local roads and the correct distance to keep from animals. Guests should remain inside the vehicle unless the guide authorises a safe stop, follow camp instructions, secure valuables and avoid walking unaccompanied after dark.",
        },
        {
          question: "Are Kenya safaris suitable for families with children?",
          answer:
            "They can be excellent family holidays, especially when we select shorter drives, family rooms and lodges with swimming pools or supervised activities. Children should be able to follow the guide's instructions, and we normally discuss age, attention span and interests before recommending a Masai Mara game drive or longer circuit. We can add child-friendly cultural visits, easy nature walks where permitted and flexible meal times while avoiding unnecessarily tiring transfers.",
        },
        {
          question: "What should I pack and wear on a Kenya safari?",
          answer:
            "Pack light, breathable neutral-coloured layers, a warm fleece for early mornings, a sun hat, sunglasses, sunscreen, insect repellent, comfortable closed shoes and a light rain jacket. Soft-sided luggage is easier for safari vehicles and light aircraft, and binoculars, a refillable water bottle and a small daypack are particularly useful. Bright colours and camouflage are best avoided, while a swimsuit is useful at many lodges and beach hotels.",
        },
        {
          question: "What health precautions are needed for a Kenya safari?",
          answer:
            "Speak with a travel-health professional several weeks before departure about routine vaccinations, recommended vaccines and malaria prevention for your route. Malaria risk exists in many safari and coastal areas, so use repellent, cover up at dusk and follow the medical advice prescribed for you; do not self-prescribe medication. Nairobi and the main lodges have medical support, but guests should bring personal medicines, prescriptions and details of relevant conditions.",
        },
        {
          question: "Which animals and birds can I expect to see in Kenya?",
          answer:
            "The Masai Mara is especially strong for lions, cheetahs, leopards, elephants, buffalo, giraffes, hippos and wildebeest, while Amboseli is celebrated for its elephant herds beneath Kilimanjaro. Tsavo adds red-dust elephants and expansive volcanic scenery, and Lake Nakuru is rewarding for rhino and birdlife. No ethical operator can guarantee a sighting, but private game drives with an experienced guide give you the best opportunity to find the Big Five and discover less obvious species.",
        },
        {
          question: "What vehicle is used, and are Kenya safari roads comfortable?",
          answer:
            "C.A.T.S Safaris uses a private 4x4 safari Land Cruiser with a raised viewing position, comfortable seating, seat belts and a pop-up or open-sided game-viewing roof depending on the vehicle and park rules. The guide chooses when to open the roof, considering weather, dust and wildlife safety, so it is not an unprotected open vehicle at all times. Some roads are paved and others are rough or corrugated, particularly inside parks; Nairobi to Amboseli is commonly four to five hours, Nairobi to the Masai Mara five to six hours and Diani to Tsavo East three to four hours. Private use means the pace, stops, photography and rest breaks can be adapted to your group, and light-aircraft flights can replace selected long transfers.",
        },
        {
          question: "What accommodation is available on a Kenya safari?",
          answer:
            "You can choose from established lodges, permanent tented camps and comfortable mobile-style camps, with options ranging from practical value to luxury. All recommended properties are selected for location, service, security, cleanliness and suitability for your party, not just star rating. Meals usually include breakfast, lunch and dinner, and we can arrange vegetarian, vegan, halal, gluten-free and allergy-aware menus when told in advance, including selected bush dining.",
        },
        {
          question: "Can C.A.T.S customise a private Kenya safari?",
          answer:
            "Yes, every private Kenya safari can be adjusted around your dates, budget, preferred parks, lodge style, flight connections and interests such as photography, birding or a Diani Beach extension. We can combine the Masai Mara, Amboseli, Tsavo, Lake Nakuru and Samburu, or design a shorter route that avoids too much driving. Shared departures are also possible for travellers seeking a lower price, but a private vehicle offers much more flexibility.",
        },
        {
          question: "How much should I budget for tips on a Kenya safari?",
          answer:
            "Tipping is discretionary and should reflect service, but many guests give the driver-guide a daily gratuity at the end of the safari and leave a smaller amount for lodge staff through the property's shared tip box. Your consultant can explain current local norms and whether a camp distributes tips centrally, so you do not need to guess. Tips should be separate from the quoted safari price, and you may also wish to recognise a porter or specialist guide who has given exceptional help.",
        },
        {
          question: "Can solo travellers book a Kenya safari?",
          answer:
            "Absolutely; solo guests can travel in a private Land Cruiser with a professional driver-guide, join a small group, or request a tailor-made combination. A single supplement may apply because the vehicle and room costs are not shared, and we will explain it clearly in the quotation. Solo travellers often appreciate the security, local insight and flexible pace of a private safari, with lodge dining and optional cultural activities providing social opportunities.",
        },
        {
          question: "How should I plan photography and connectivity on safari?",
          answer:
            "A camera with a telephoto lens, spare batteries, extra memory cards, dust protection and compact binoculars are useful; early morning and late afternoon provide the softest light over the Mara and Amboseli. A beanbag or window support is more practical than a large tripod in a moving vehicle, and your guide can position the Land Cruiser without disturbing wildlife. WiFi is available at many lodges but can be slow or limited, while mobile signal is patchy in remote parks, so download essentials and tell family you may be offline between camps.",
        },
        {
          question: "How far ahead should I book, and what if my plans change?",
          answer:
            "For July to October migration travel, Christmas and school holidays, booking six to twelve months ahead gives the best choice of camps, rooms and flights; quieter seasons usually allow more flexibility. We recommend comprehensive travel insurance covering cancellation, medical care, evacuation, baggage and delays, especially when flights or non-refundable lodges are involved. C.A.T.S Safaris will explain each supplier's deposit, cancellation and amendment terms before payment and will help rework the route when availability or travel conditions change.",
        },
        {
          question: "How physically demanding is a Kenya safari, and can I include cultural experiences?",
          answer:
            "Most game drives are seated activities and suit older travellers, but rough tracks, steps, uneven lodge paths and early starts should be discussed with us so we can choose accessible properties and build in rest. Walking safaris are optional and only undertaken with qualified guides where permitted; guests with mobility, medical or fitness concerns should tell us before booking. We can also arrange respectful visits with Maasai and other local communities, with consent-based activities and direct guidance on photography, dress and appropriate contributions.",
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
        { name: 'Tsavo', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Lake Nakuru', href: '/kenya-safaris/extended-safaris', image: 'https://ik.imagekit.io/axd1riwnv/flamingos-lake-nakuru-national-park-kenya_50501081321_o.jpg' },
        { name: 'Samburu', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/reticulated-giraffe-giraffa-camelopardalis-reticulata-samburu-national-reserve-kenya_28942449116_o.jpg' },
        { name: 'Diani Beach', href: '/kenya-safaris/kenya-and-diani', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
      ]}
    />
  );
}
