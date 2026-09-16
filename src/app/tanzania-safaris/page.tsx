import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tanzania Safari Tours | Serengeti, Ngorongoro & Zanzibar',
  description: 'Explore Tanzania — Serengeti Great Migration, Ngorongoro Crater, Tarangire, Lake Manyara & Zanzibar beach holidays.',
  alternates: { canonical: '/tanzania-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'tanzania');

  return (
    <SafariListingPage
      title="Tanzania Safari Tours"
      subtitle="Explore Tanzania"
      description="The endless Serengeti, the ancient Ngorongoro Crater, and the spice island of Zanzibar — Tanzania delivers Africa's most iconic wildlife spectacles."
      heroImage="https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg"
      safaris={filtered}
      destination="tanzania"
      introContent={
        <>
          <p>
            Tanzania is home to some of Africa&apos;s most complete wildlife scenery, from the endless grassland of
            the Serengeti to the wildlife-packed floor of the Ngorongoro Crater. C.A.T.S Safaris runs Tanzania
            itineraries departing from Arusha, covering the northern safari circuit of Serengeti National Park,
            Ngorongoro Conservation Area, Tarangire and Lake Manyara.
          </p>
          <p>
            The Serengeti hosts a large part of the Great Migration for much of the year, with over a million
            wildebeest and zebra moving in a continuous cycle between Tanzania and Kenya&apos;s{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>
            . Ngorongoro Crater, meanwhile, concentrates lion, elephant, rhino, buffalo and grazing herds inside one
            of the world&apos;s largest intact volcanic calderas.
          </p>
          <p>
            With 15 years of East Africa experience, we can extend any Tanzania safari with a{' '}
            <Link href="/kenya-safaris/zanzibar" className="text-[var(--forest-canopy)] underline">
              Zanzibar beach holiday
            </Link>{' '}
            or combine it with Kenya on a{' '}
            <Link href="/kenya-tanzania-safaris" className="text-[var(--forest-canopy)] underline">
              cross-border Kenya-Tanzania safari
            </Link>
            .
          </p>
        </>
      }
      groups={[
        {
          title: 'Short Tanzania Safaris',
          description: 'Efficient 3–5 day circuits through the northern parks.',
          safaris: filtered.filter((s) => s.duration <= 5),
        },
        {
          title: 'Extended Tanzania Safaris',
          description: 'Longer itineraries with more time in the Serengeti and Ngorongoro Crater.',
          safaris: filtered.filter((s) => s.duration >= 6),
        },
      ]}
      faqs={[
        {
          question: 'When is the best time for a Tanzania safari and the Serengeti migration?',
          answer:
            'Tanzania offers excellent resident wildlife year-round, while the southern Serengeti calving season is usually strongest from January to March. The moving herds reach the western corridor and northern Serengeti at different times, with river-crossing possibilities commonly falling around July to October, although nature does not follow a fixed timetable. We use current field conditions and your priorities to select the parks and dates most likely to deliver the experience you want.',
        },
        {
          question: 'What makes the Ngorongoro Crater special?',
          answer:
            'Ngorongoro is a vast collapsed volcanic caldera with a remarkably dense concentration of wildlife on its grassland, lake and woodland floor. Game drives can encounter lion, elephant, buffalo, hippo, hyena and one of Tanzania’s important black-rhino populations in a compact setting. CATS plans the crater visit around park rules, descent times and your wider northern-circuit route rather than treating it as a rushed stop.',
        },
        {
          question: 'Do I need a visa for Tanzania?',
          answer:
            'Many nationalities need a Tanzanian tourist visa, and eligibility, application method and validity depend on your passport. We provide up-to-date practical guidance and check that your itinerary includes the correct entry point, but you remain responsible for submitting accurate documents and meeting official requirements. Your passport should normally have sufficient validity and blank pages, so confirm the current rules before booking flights.',
        },
        {
          question: 'How much does a Tanzania safari cost?',
          answer:
            'The cost of a Tanzania safari reflects park fees, vehicle and guide arrangements, lodge standard, season, internal flights and the number of days spent in the Serengeti. A private 4x4 gives you flexibility and privacy, while carefully selected camps and road or air connections can keep the plan within a target budget. We provide an itemised, tailored quotation so you can compare comfort, location and travel time rather than just a headline price.',
        },
        {
          question: 'How does Tanzania compare with Kenya for wildlife?',
          answer:
            'Tanzania’s northern circuit offers the vast Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara, while Kenya combines the Masai Mara with distinctive habitats such as Amboseli and Samburu. The countries share the Mara-Serengeti ecosystem, so there is overlap in Big Five sightings, but scenery, park rules, crowd levels and seasonal movement differ. Our 15 years of experience help us recommend one country or a combined safari according to your dates and interests.',
        },
        {
          question: 'Is the Ngorongoro Crater at high altitude?',
          answer:
            'The crater rim is roughly 2,300 metres above sea level, so some travellers notice the altitude, cool temperatures or shortness of breath even though the crater floor is lower. We build in a sensible pace, hydration and warm layers, and your professional guide will monitor how you are feeling. Tell us about any respiratory, cardiac or altitude-related concerns early and seek medical advice before travel.',
        },
        {
          question: 'Is Tanzania safe for a private safari?',
          answer:
            'Tanzania is a well-established safari destination, and travelling with a professional guide and reputable camps provides a strong safety structure. Your CATS guide handles wildlife viewing etiquette, road conditions and park procedures, while lodge teams manage camp security and local advice. We keep arrangements flexible and monitor official travel guidance, but travellers should still follow normal precautions and listen to their guide.',
        },
        {
          question: 'Is a Tanzania safari suitable for families and children?',
          answer:
            'Families can enjoy Tanzania, particularly with private vehicles, shorter driving days and lodges that accept children and offer suitable activities. We discuss age restrictions for walking, vehicle time, crater visits and camps before confirming the route, then balance game drives with pool or cultural downtime. A private 4x4 means the guide can adapt stops and pacing to your family rather than following a fixed group schedule.',
        },
        {
          question: 'What should I pack for a Tanzania safari?',
          answer:
            'Pack neutral, breathable layers, a warm fleece for early mornings, a sun hat, closed shoes, sunglasses, sunscreen and insect repellent. Soft-sided luggage is useful for light aircraft, and binoculars, a headlamp, reusable water bottle and camera batteries are practical additions. We confirm baggage rules, laundry availability and the expected temperatures for each park before departure.',
        },
        {
          question: 'What health precautions and vaccinations do I need for Tanzania?',
          answer:
            'Before travelling, consult a travel-health professional about routine vaccinations, malaria prevention, yellow-fever rules where applicable and any personal prescriptions. We can explain the route’s practical conditions, but medical advice must come from your clinician and should be sought well before departure. Carry medication in hand luggage, tell us about allergies or mobility needs, and keep a small personal first-aid kit accessible.',
        },
        {
          question: 'What accommodation is used on Tanzania safaris?',
          answer:
            'Tanzania itineraries can use city hotels, permanent tented camps, mobile camps and lodges ranging from comfortable mid-range properties to private luxury suites. Location matters: staying inside or near the Serengeti can provide more time in the park, while crater-rim accommodation reduces the early descent drive. We match properties to your budget, privacy, family needs and preferred balance of comfort and wilderness atmosphere.',
        },
        {
          question: 'Can I customise a Tanzania safari or add Zanzibar?',
          answer:
            'Yes, CATS builds private Tanzania safari itineraries around your dates, migration interests, photography goals, accommodation style and pace. We can add extra Serengeti nights, Tarangire or Lake Manyara, cultural visits, a mountain climb or a Zanzibar beach holiday after the game drives. Our team coordinates road transfers and flights so the extension feels like one planned journey rather than separate bookings.',
        },
        {
          question: 'What wildlife can I expect to see on a Tanzania safari?',
          answer:
            'The northern circuit offers strong chances of seeing lion, elephant, buffalo, giraffe, zebra, wildebeest, hippo and many antelope, with cheetah, leopard and rhino possible rather than guaranteed. Birdlife is exceptional, especially around the crater and seasonal wetlands, and the migration adds dramatic movement when herds are nearby. Our guides read tracks, habitat and animal behaviour to maximise sightings while respecting park rules and wildlife space.',
        },
        {
          question: 'How much should I tip my Tanzania guide and camp staff?',
          answer:
            'Tipping is discretionary and should reflect service, but many guests give a daily amount to their guide and contribute to a shared camp or lodge gratuity box for support staff. We explain current local expectations and can suggest a simple approach before departure, including how to handle porters and specialist activities. Tips are separate from the safari price and should never replace fair wages or pressure you into spending beyond your comfort.',
        },
        {
          question: 'How far ahead should I book a Tanzania safari, and is insurance needed?',
          answer:
            'Booking six to twelve months ahead is sensible for peak migration dates, preferred Serengeti camps, family rooms and limited crater-rim properties, although shorter or quieter trips may be arranged later. We recommend comprehensive travel insurance covering medical care, evacuation, cancellation, delays and lost baggage, especially when internal flights are involved. CATS explains supplier deposits and cancellation deadlines clearly and helps assess alternatives if your plans change.',
        },
      ]}
      relatedDestinations={[
        { name: 'Kenya-Tanzania Safaris', href: '/kenya-tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Zanzibar', href: '/kenya-safaris/zanzibar', image: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
      ]}
    />
  );
}
