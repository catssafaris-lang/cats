import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2–4 Day Safari Tours from Nairobi | CATS Safaris Kenya',
  description: 'Book a 2–4 day Kenya safari from Nairobi, with Big Five game drives in Masai Mara, Amboseli and Kenya’s leading wildlife parks.',
  alternates: { canonical: '/kenya-safaris/short-safaris' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) =>
      s.destination === 'kenya' &&
      s.type?.includes('nairobi-departure') &&
      s.duration >= 2 &&
      s.duration <= 4 &&
      !s.type?.includes('day-trip') &&
      !s.type?.includes('flight-safari'),
  );

  return (
    <SafariListingPage
      title="2–4 Day Safari Tours from Nairobi"
      subtitle="Short Kenya Safari Escapes"
      description="Make the most of a short Kenya safari from Nairobi with expertly guided game drives in the Masai Mara, Amboseli and other iconic wildlife parks. These 2–4 day tours pair efficient travel with unforgettable encounters with the Big Five, elephants, lions and wide-open savannah."
      heroImage="https://ik.imagekit.io/axd1riwnv/Kenya_MasaiMara_GreatPlainsMaraPlains_WildlifeWildebeestMigration.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            A 2–4 day safari from Nairobi is the fastest way to experience Kenya&apos;s wildlife without a long
            itinerary. C.A.T.S Safaris departs daily from Nairobi hotels and Jomo Kenyatta International Airport for
            game drives in{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            and{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>
            , two of Kenya&apos;s most rewarding national parks for spotting the Big Five in a compact window.
          </p>
          <p>
            Each short safari runs in a private 4x4 Land Cruiser with a professional driver-guide, so you set your own
            pace between game drives. Travellers with even less time can consider our{' '}
            <Link href="/kenya-safaris/nairobi-day-trips" className="text-[var(--forest-canopy)] underline">
              Nairobi day trips
            </Link>{' '}
            or upgrade to a{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              flight safari
            </Link>{' '}
            to reach the Mara in under an hour.
          </p>
          <p>
            With 15 years of experience running Kenya safaris, our team pairs every package with comfortable{' '}
            <Link href="/travel-info/kenya-lodges" className="text-[var(--forest-canopy)] underline">
              lodges and tented camps
            </Link>{' '}
            suited to your budget, from economy to luxury.
          </p>
        </>
      }
      groups={[
        {
          title: '2-Day Safaris',
          description: 'A quick, focused introduction to Kenya wildlife over a single overnight stay.',
          safaris: filtered.filter((s) => s.duration === 2),
        },
        {
          title: '3–4 Day Safaris',
          description: 'More time for multiple game drives and a second national park.',
          safaris: filtered.filter((s) => s.duration >= 3 && s.duration <= 4),
        },
      ]}
      faqs={[
        {
          question: 'When is the best time for a 2–4 day safari from Nairobi?',
          answer:
            "The Masai Mara is rewarding year-round, while July to October is especially popular for dry weather and the Great Migration. Amboseli is also excellent in the dry seasons from June to October and January to February, when wildlife gathers near water and views of Mount Kilimanjaro are often clear. C.A.T.S Safaris can match your dates to the best park and lodge for a short Kenya safari.",
        },
        {
          question: 'How much does a short Kenya safari from Nairobi cost?',
          answer:
            "Price depends on the number of nights, park fees, lodge category, season, vehicle and whether you choose a private or shared departure. A private 4x4 Land Cruiser costs more than a group safari but gives your party its own guide, flexible game-drive timing and no shared itinerary. We provide a clear quotation with accommodation, transport, meals and park fees itemised before you book.",
        },
        {
          question: 'Is a 2–4 day safari from Nairobi safe?',
          answer:
            "Yes, our short safaris use established lodges, registered park routes and professional driver-guides who have operated in Kenya for 15 years. Guides handle wildlife distances, park rules and road conditions, and guests remain in the vehicle unless the guide identifies a safe designated area. We also monitor road and weather conditions and coordinate hotel, lodge and airport transfers throughout the trip.",
        },
        {
          question: 'Are these short Kenya safaris suitable for families with children?',
          answer:
            "Yes, families often choose a 2–4 day itinerary because it gives children a meaningful wildlife experience without a long time away from home. We can request family rooms, plan shorter game-drive sections and include child-friendly lodges, although very young children may find early starts and bumpy tracks tiring. Tell us the children’s ages so we can recommend Masai Mara, Amboseli or a gentler combination and build in breaks.",
        },
        {
          question: 'What should I pack and wear for a short safari from Nairobi?',
          answer:
            "Pack light, neutral-coloured layers, a fleece or jacket for cool early mornings, comfortable trousers, closed walking shoes, a hat, sunscreen, insect repellent and a reusable water bottle. A soft-sided bag is easier to store in the 4x4 Land Cruiser than a hard suitcase, and binoculars and a camera are useful additions. Evenings can be cool and afternoons warm, so layers are more practical than heavy clothing.",
        },
        {
          question: 'Are there health or mobility considerations on a 2–4 day safari?',
          answer:
            "Consult your travel clinician about Kenya vaccinations, malaria prevention and any medication well before departure, and carry prescriptions in their original packaging. Game-drive roads can be uneven and lodge paths may include steps, but we can select accessible accommodation, reduce driving time and arrange assistance where available. Share mobility, dietary or medical needs early so the professional driver-guide and lodge team can prepare safely.",
        },
        {
          question: 'Which wildlife can I expect on a short safari from Nairobi?',
          answer:
            "Masai Mara is known for lion, leopard, cheetah, elephant, buffalo, giraffe, zebra, wildebeest and abundant birdlife, while Amboseli is particularly strong for large elephant herds beneath Kilimanjaro. Rhino sightings are possible but never guaranteed, and wildlife remains free-ranging rather than placed on a schedule. Our guides use local knowledge and patient game drives to maximise sightings without disturbing animals.",
        },
        {
          question: 'What vehicle is used, and is it comfortable for a short safari?',
          answer:
            "Private short safaris travel in a well-maintained 4x4 Land Cruiser with a pop-up roof, large windows, seat belts and room for viewing and photography. The suspension and high ground clearance are suited to Kenyan park tracks, although some sections are naturally bumpy. Your professional driver-guide controls the pace and can schedule comfort stops on the journey from Nairobi.",
        },
        {
          question: 'What are the pickup times and daily schedule?',
          answer:
            "Most road departures leave your Nairobi hotel or Jomo Kenyatta International Airport early in the morning to make good progress and reach the park for an afternoon game drive. A typical day combines travel with morning or afternoon game drives, lodge meals and rest, with exact timings depending on the park and accommodation. We confirm pickup, return and flight-compatible timings with you rather than treating a short safari as a rigid timetable.",
        },
        {
          question: 'What is included and excluded in the short safari price?',
          answer:
            "Packages normally include private 4x4 transport, a professional driver-guide, accommodation, specified meals, park entrance fees and the game drives listed in the itinerary. International flights, visas, travel insurance, drinks, personal purchases and optional activities are generally excluded unless the quotation says otherwise. We explain every inclusion before confirmation, including airport transfers and any applicable single-room supplement.",
        },
        {
          question: 'Can I customise a 2–4 day safari itinerary?',
          answer:
            "Yes, C.A.T.S Safaris can adjust the park combination, lodge standard, departure time, number of game drives and airport or hotel arrangements. You might focus two nights on predator viewing in the Masai Mara, choose Amboseli for elephants and Kilimanjaro, or add a Nairobi National Park visit. Our 15 years of local experience help keep the route realistic instead of packing too much travel into a short safari.",
        },
        {
          question: 'How many people travel on a short safari, and can I have a private vehicle?',
          answer:
            "A private safari reserves the Land Cruiser and driver-guide for your booking, making it suitable for couples, families, solo travellers and small groups. Shared departures may have several guests and operate on a fixed route and schedule, which can lower the price but reduces flexibility. We can quote both options so you can compare privacy, comfort and value before choosing.",
        },
        {
          question: 'Can you accommodate food allergies and special diets?',
          answer:
            "Yes, lodges in the Masai Mara and Amboseli can usually provide vegetarian, vegan, halal and many allergy-aware meals when notified in advance. Tell us about allergies, intolerances, children’s preferences or religious requirements at booking, and carry essential snacks for long road sections. Bottled or treated drinking water arrangements are confirmed in your itinerary, while alcoholic drinks and premium beverages are normally extra.",
        },
        {
          question: 'Are short safaris good for photography?',
          answer:
            "They are, particularly in the Masai Mara for predator action and wide savannah scenes or in Amboseli for elephants against Mount Kilimanjaro. The pop-up roof and open viewing sides of the 4x4 Land Cruiser provide strong angles, and the guide can position the vehicle respectfully without blocking other guests. Bring spare batteries, memory cards and a dust-protective bag, because charging and network access can be limited at some lodges.",
        },
        {
          question: 'How far ahead should I book, and what are the cancellation options?',
          answer:
            "Book as early as possible for July to October, school holidays and preferred Mara or Amboseli lodges, although we can often arrange last-minute short safaris subject to availability. We confirm the itinerary and deposit requirements in writing, then apply the accommodation and supplier cancellation terms stated in your quotation. If plans change, contact us promptly and we will explore date changes, lodge alternatives or a revised safari rather than waiting until departure.",
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
        { name: 'Extended Safaris', href: '/kenya-safaris/extended-safaris', image: 'https://ik.imagekit.io/axd1riwnv/flamingos-lake-nakuru-national-park-kenya_50501081321_o.jpg' },
        { name: 'Flight Safaris', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/reticulated-giraffe-giraffa-camelopardalis-reticulata-samburu-national-reserve-kenya_28942449116_o.jpg' },
      ]}
    />
  );
}
