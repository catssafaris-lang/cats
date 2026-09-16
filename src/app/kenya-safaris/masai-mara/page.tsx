import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Masai Mara Safaris | Kenya Big Five Game Drives | CATS',
  description: 'Discover Masai Mara safaris with expertly guided Kenya game drives, Big Five wildlife viewing and Great Migration experiences.',
  alternates: { canonical: '/kenya-safaris/masai-mara' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.type?.includes('masai-mara') && !s.type?.includes('flight-safari'));

  return (
    <SafariListingPage
      title="Masai Mara Safaris"
      subtitle="Kenya’s Legendary Wildlife Reserve"
      description="Answer the call of the Masai Mara on a Kenya safari shaped around world-class game drives. Scan golden plains for lion, leopard, cheetah, elephant and buffalo, follow the Mara River during the Great Migration, and experience the enduring drama of one of Africa’s finest wildlife reserves."
      heroImage="https://ik.imagekit.io/axd1riwnv/Masai-Mara-Kenya-wildlife-and-wildebeest-migration-safari-tour-packages.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            The Masai Mara National Reserve is Kenya&apos;s most celebrated safari destination and the northern
            extension of Tanzania&apos;s Serengeti ecosystem. Its open grassland supports one of the highest
            concentrations of lions in Africa, along with resident leopard, cheetah, elephant, buffalo and giraffe
            populations that make Big Five game drives here consistently rewarding.
          </p>
          <p>
            Between July and October, the Mara hosts the dramatic river crossings of the Great Migration, as over a
            million wildebeest and zebra cross the crocodile-filled Mara River. C.A.T.S Safaris has guided visitors to
            these crossings for 15 years, running private game drives from both Nairobi and the reserve&apos;s own
            airstrips for guests booking a{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              flight safari
            </Link>
            .
          </p>
          <p>
            A Masai Mara safari pairs naturally with other Kenya highlights. Consider extending your trip with{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            for elephant herds beneath Kilimanjaro, or choose one of our{' '}
            <Link href="/kenya-safaris/extended-safaris" className="text-[var(--forest-canopy)] underline">
              extended safaris
            </Link>{' '}
            to combine the Mara with Lake Nakuru in a single circuit.
          </p>
        </>
      }
      groups={[
        {
          title: 'Short Masai Mara Safaris',
          description: 'Efficient 2–4 day game drive itineraries focused on the reserve.',
          safaris: filtered.filter((s) => s.duration <= 4),
        },
        {
          title: 'Extended Masai Mara Circuits',
          description: 'Longer itineraries combining the Mara with other Kenya parks.',
          safaris: filtered.filter((s) => s.duration >= 5),
        },
      ]}
      faqs={[
        {
          question: "When is the best time to visit the Masai Mara?",
          answer:
            "The Masai Mara offers excellent resident wildlife throughout the year, but July to October is the peak period for the Great Migration and possible Mara River crossings. January to March is often drier with fewer visitors, while November and May can bring green scenery and good value between rains. C.A.T.S Safaris plans around your priorities because migration timing is natural and river crossings cannot be guaranteed on a particular day.",
        },
        {
          question: "How much does a Masai Mara safari cost?",
          answer:
            "Cost is shaped by the number of nights, whether you drive from Nairobi or fly to a Mara airstrip, the reserve or conservancy location, season and accommodation level. A quotation from C.A.T.S Safaris itemises the private 4x4 Land Cruiser, professional driver-guide, park or conservancy fees, accommodation, meals and transfers. Balloon flights, drinks, visas, tips, laundry and personal purchases are usually additional, and we identify those costs before you book.",
        },
        {
          question: "Is the Masai Mara safe for visitors?",
          answer:
            "The Masai Mara is a well-established safari destination, and it is safe when guests follow their guide and camp's instructions. Our professional driver-guides have 15 years of local operating experience and maintain a safe distance from lions, elephants, buffalo and other wildlife. Never leave the vehicle or walk between tents without permission, especially after dark, and use the camp escort service when one is provided.",
        },
        {
          question: "Is a Masai Mara safari suitable for children?",
          answer:
            "Yes, families often find the Mara memorable because wildlife is abundant and sightings can be rewarding without endless searching. We can request family tents or interconnecting rooms, plan shorter game drives with breaks and recommend conservancies that offer supervised nature or cultural activities for suitable ages. Children must remain quiet and seated near wildlife, and we discuss age limits for walking and balloon experiences before confirming them.",
        },
        {
          question: "What should I pack for Masai Mara game drives?",
          answer:
            "Bring neutral, layered clothing, a warm fleece for dawn drives, a sun hat, sunglasses, sunscreen, insect repellent, closed shoes and a light waterproof jacket. Soft-sided luggage is easiest in a safari vehicle or small aircraft, and binoculars, a refillable bottle and a dustproof daypack are valuable. Even in warm months the Mara can feel cool before sunrise, so pack a fleece rather than relying only on shorts and T-shirts.",
        },
        {
          question: "What health precautions are needed in the Masai Mara?",
          answer:
            "Consult a travel-health professional about routine vaccinations, malaria prevention and any medication needed for your personal health before travelling. Malaria risk is present, so use repellent, cover exposed skin at dusk and follow prescribed prophylaxis; camps provide mosquito measures but these are not a substitute for medical advice. The Mara is at moderate elevation rather than extreme altitude, though first-day fatigue and dehydration are worth preventing with water, rest and sensible pacing.",
        },
        {
          question: "What wildlife can I expect to see in the Masai Mara?",
          answer:
            "The Mara is renowned for lion prides, leopard, cheetah, elephant, buffalo, giraffe, hippo and large resident herds of wildebeest and zebra. During the migration season, crocodiles and river crossings add drama, while hyena, jackal, bat-eared fox and abundant raptors reward careful observation. Sightings remain wild and unpredictable, but a private Masai Mara game drive lets your guide spend time with good sightings instead of following a fixed group schedule.",
        },
        {
          question: "What vehicle is used, and how long is the journey to the Masai Mara?",
          answer:
            "C.A.T.S Safaris provides a private 4x4 safari Land Cruiser with a raised pop-up roof or suitable open viewing configuration, comfortable seats and seat belts. The roof gives excellent visibility and photography angles while retaining a secure vehicle structure, and it is closed when weather or park rules require it. The road journey from Nairobi is usually about five to six hours, with rougher tracks near the reserve and possible game-viewing stops through the Great Rift Valley. A light aircraft from Nairobi's Wilson Airport takes roughly 45 minutes to an hour, while the private vehicle allows the guide to adjust the route, stop for a leopard or patiently wait at a respectful distance from a migration crossing.",
        },
        {
          question: "Should I stay inside the reserve or in a Masai Mara conservancy?",
          answer:
            "Accommodation inside the reserve places you close to major wildlife areas and the Mara River, while neighbouring conservancies such as Naboisho or Olare Motorogi often offer fewer vehicles, walking and night drives where permitted. We recommend lodges and tented camps for location, service, security, cleanliness and the style of experience you want, not simply for luxury branding. Both options can provide excellent rooms, hot showers and quality meals, with bush breakfasts or dinners arranged when conditions and safety allow.",
        },
        {
          question: "Can my Masai Mara itinerary be tailored or private?",
          answer:
            "Yes, we can build a private itinerary around migration, predators, birding, photography, a hot-air balloon flight or a longer Kenya circuit. You can combine the Mara with Lake Nakuru, Amboseli or Diani Beach, choose road or air transfers and select a lodge or tented camp that suits your budget. Shared vehicles cost less, but a private Land Cruiser gives families, photographers and solo travellers the greatest control over timing and stops.",
        },
        {
          question: "What are the tipping customs in the Masai Mara?",
          answer:
            "Tipping is optional but appreciated when your driver-guide and camp team have provided attentive service. Many guests give the guide a gratuity at the end of the stay and use a camp's shared tip box for housekeeping, kitchen and other staff, while we can explain the current local range in your briefing. You may also tip a specialist walking guide or porter directly, and it is best to carry small amounts in Kenyan shillings or suitable foreign currency.",
        },
        {
          question: "Can solo travellers visit the Masai Mara?",
          answer:
            "Solo travellers are welcome and can choose a private Land Cruiser, a small-group departure or a tailor-made flight safari. A single supplement may apply for the room and vehicle, but we explain the calculation clearly and can discuss dates where a shared departure reduces the cost. The Mara's sociable lodge atmosphere and optional cultural activities provide company, while a C.A.T.S guide gives you local support and security throughout.",
        },
        {
          question: "What photography and connectivity should I expect in the Mara?",
          answer:
            "A telephoto lens, spare batteries, memory cards, dust protection and binoculars are ideal for lions, cheetahs and distant migration herds; a beanbag is generally more practical than a tripod in the Land Cruiser. Early morning and late afternoon offer the best light, and your guide can position the vehicle carefully without blocking other guests or approaching animals. Camps often have WiFi and some mobile signal, but connectivity is intermittent in remote areas, so download maps and keep important contacts offline.",
        },
        {
          question: "How far ahead should I book, and what happens if plans change?",
          answer:
            "For July to October migration travel, school holidays and Christmas, reserve camps and air seats six to twelve months ahead where possible. Travel insurance should cover cancellation, medical evacuation, delays, baggage and any non-refundable flights or lodge deposits. Before taking payment, C.A.T.S Safaris explains each booking condition and will help amend dates, accommodation or routing when suppliers have availability.",
        },
        {
          question: "Are Masai Mara safaris physically demanding, and can I visit a Maasai community?",
          answer:
            "Game drives are mostly seated, but tracks can be bumpy and camps may have steps, uneven paths or tents separated from the main area, so tell us about mobility needs before we select accommodation. Walking safaris are optional, guided and subject to conservancy rules; they are not required to enjoy the Mara. We can arrange a respectful Maasai community visit with local hosts, clear consent and guidance on dress, donations and photography rather than treating culture as a staged performance.",
        },
      ]}
      relatedDestinations={[
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
        { name: 'Lake Nakuru', href: '/kenya-safaris/extended-safaris', image: 'https://ik.imagekit.io/axd1riwnv/flamingos-lake-nakuru-national-park-kenya_50501081321_o.jpg' },
        { name: 'Samburu', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/reticulated-giraffe-giraffa-camelopardalis-reticulata-samburu-national-reserve-kenya_28942449116_o.jpg' },
        { name: 'Flight Safaris', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
      ]}
    />
  );
}
