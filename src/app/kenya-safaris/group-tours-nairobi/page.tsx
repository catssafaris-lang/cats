import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Group Safari Tours from Nairobi | Kenya Safaris | CATS',
  description: 'Join a group Kenya safari from Nairobi for guided game drives, shared adventure and outstanding wildlife viewing in iconic parks.',
  alternates: { canonical: '/kenya-safaris/group-tours-nairobi' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('group-safari') && !s.type?.includes('diani-departure') && !s.type?.includes('mombasa-departure'),
  );

  return (
    <SafariListingPage
      title="Group Safari Tours from Nairobi"
      subtitle="Shared Kenya Safari Adventures"
      description="Set out from Nairobi with fellow travellers on a sociable, expertly guided Kenya group safari. Share sunrise game drives, Masai Mara wildlife sightings and memorable evenings in the bush while experienced guides reveal the parks, animals and stories that make Kenya extraordinary."
      heroImage="https://ik.imagekit.io/axd1riwnv/4-days-masai-mara-and-lake-nakuru-park-group-joining-landcruiser_Urf4r.jpeg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            A group safari is the most cost-effective way to experience Kenya&apos;s wildlife, sharing a 4x4 Land
            Cruiser and driver-guide with a small number of fellow travellers on a fixed departure date. C.A.T.S
            Safaris runs scheduled group departures from Nairobi to{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            and other leading parks, with the same standard of guiding as our private itineraries.
          </p>
          <p>
            These tours suit solo travellers, budget-conscious groups and anyone who enjoys sharing the excitement of
            game drives with new people. Prefer complete privacy and a flexible schedule? Our{' '}
            <Link href="/kenya-safaris/short-safaris" className="text-[var(--forest-canopy)] underline">
              private short safaris
            </Link>{' '}
            and{' '}
            <Link href="/kenya-safaris/extended-safaris" className="text-[var(--forest-canopy)] underline">
              extended safaris
            </Link>{' '}
            remain fully customisable. After 15 years running both formats, we can advise which suits your travel
            style and budget best.
          </p>
        </>
      }
      faqs={[
        {
          question: 'When is the best time to join a group safari from Nairobi?',
          answer:
            "The Masai Mara is excellent throughout the year, with July to October popular for dry weather and the Great Migration, while January to February often brings clear skies and good game viewing. Lake Nakuru and Amboseli also work well in the dry seasons, although green-season travel can offer fewer visitors and vivid scenery. C.A.T.S Safaris will recommend a park and departure date based on your wildlife priorities rather than relying on one season for every itinerary.",
        },
        {
          question: 'How much does a Nairobi group safari cost compared with a private safari?',
          answer:
            "Group tours share the 4x4 Land Cruiser, driver-guide and operating costs, so they are usually the most affordable way to reach the Masai Mara, Lake Nakuru or Amboseli. The final price varies with duration, park fees, lodge category, season, meal plan and any single-room supplement. We can quote a private alternative as well, which costs more but gives your party control over stops, game-drive timing and vehicle space.",
        },
        {
          question: 'Are group safaris from Nairobi safe?',
          answer:
            "Yes, C.A.T.S Safaris has 15 years of experience arranging scheduled Kenya safari departures with professional driver-guides and established accommodation. Your guide manages wildlife distances, road conditions, park rules and group communication, and guests remain in the vehicle except at approved safe locations. We also confirm pickup details and monitor weather and route conditions before leaving Nairobi.",
        },
        {
          question: 'Are Nairobi group safaris suitable for children and families?',
          answer:
            "Families can join when children are comfortable with early starts, long road journeys and shared vehicle routines. A private safari is often preferable for toddlers because it allows more breaks and avoids needing to follow another group’s schedule, while older children usually enjoy tracking lions, elephants and giraffes. Tell us the children’s ages so we can suggest a shorter Masai Mara or Lake Nakuru itinerary and family-friendly accommodation.",
        },
        {
          question: 'What should I pack and wear for a Nairobi group safari?',
          answer:
            "Pack neutral layers, comfortable trousers, a fleece or jacket for cool mornings, closed shoes, a hat, sunscreen, insect repellent, a refillable bottle and binoculars. A soft-sided bag is easier to fit in shared vehicle storage than a hard suitcase, and a camera with dust protection is useful. Keep passport, medication, money and other essentials in a small day bag that stays with you.",
        },
        {
          question: 'What health and accessibility considerations apply?',
          answer:
            "Consult a travel clinician about vaccinations and malaria prevention, and carry prescriptions in their original packaging. Park roads are uneven and some lodges have steps, so guests with mobility limits should tell us before booking; we can discuss an accessible lodge, extra assistance or a private vehicle. Hydration, motion-sickness preparation and rest stops are especially important on the drive from Nairobi to the Mara.",
        },
        {
          question: 'Which wildlife and parks can I expect on a Nairobi group tour?',
          answer:
            "The Masai Mara is known for lion, leopard, cheetah, elephant, buffalo, giraffe, zebra, wildebeest and abundant birdlife, while Lake Nakuru is noted for rhino, Rothschild’s giraffe and its escarpment scenery. Amboseli offers memorable elephant viewing with Mount Kilimanjaro as a backdrop. Wildlife is never guaranteed, but our guides use local knowledge and patient game drives to maximise sightings responsibly.",
        },
        {
          question: 'What vehicle is used on a Nairobi group safari?',
          answer:
            "Scheduled departures use a well-maintained 4x4 Land Cruiser with a pop-up roof, open viewing sides, seat belts and high clearance for Kenyan park tracks. Sharing the vehicle keeps the safari affordable but means you should expect less personal space and a group-agreed pace. If you want more room, private guiding or repeated stops for photography, we can arrange an exclusive Land Cruiser.",
        },
        {
          question: 'What are the departure times and Nairobi pickup logistics?',
          answer:
            "Group tours normally collect guests early from selected Nairobi hotels or an agreed central meeting point so the vehicle can clear city traffic and reach the park efficiently. Return times vary by itinerary, and traffic around Nairobi can make the final arrival later than the scheduled game-drive finish. We confirm the pickup window in advance and can advise whether an airport connection should be booked with extra time.",
        },
        {
          question: 'What is included and excluded in a Nairobi group safari?',
          answer:
            "The package normally includes shared 4x4 transport, a professional driver-guide, Nairobi pickup, park entrance fees, accommodation on overnight tours, specified meals and the listed game drives. International flights, visas, travel insurance, drinks, tips, personal purchases and activities not shown in the itinerary are generally excluded. Your written quotation sets out all inclusions and any single supplement before you confirm.",
        },
        {
          question: 'Can I customise a scheduled group safari from Nairobi?',
          answer:
            "A group departure has fixed dates, a planned route and shared game-drive schedule, so major changes are not possible without changing to a private safari. We can often accommodate dietary requirements, room preferences, Nairobi pickup details and a pre- or post-tour transfer. For a bespoke combination of Masai Mara, Lake Nakuru and Amboseli or a slower photography pace, our private 4x4 option is more suitable.",
        },
        {
          question: 'How large are Nairobi group safari vehicles, and can solo travellers join?',
          answer:
            "Vehicles commonly carry up to six or seven travellers plus the professional driver-guide, depending on the departure and safe seating capacity. Solo travellers are very welcome and often choose group tours to meet fellow visitors while avoiding the full cost of a private vehicle, although a single-room supplement may apply. Friends and families can request adjacent seats, subject to the final passenger list.",
        },
        {
          question: 'Can you meet dietary needs, and should I tip the guide?',
          answer:
            "Lodges can usually provide vegetarian, vegan, halal and allergy-aware meals when we receive details before departure, and we can note children’s preferences. Carry water and snacks for long road sections, especially if you have a strict allergy or dietary requirement. Tips for the driver-guide and lodge staff are voluntary but customary for good service, and we can explain appropriate local etiquette without adding an automatic charge.",
        },
        {
          question: 'What photography opportunities are available on a Nairobi group safari?',
          answer:
            "The Mara offers big-cat and migration photography, Lake Nakuru adds rhino and escarpment landscapes, and Amboseli is exceptional for elephants with Kilimanjaro. The pop-up roof gives good viewing angles, but in a shared vehicle the guide must balance different guests’ requests and cannot always wait indefinitely. Bring spare batteries, memory cards and a dust-proof bag, and follow park rules when positioning for photographs.",
        },
        {
          question: 'How early should I book, and what if I need to cancel?',
          answer:
            "Book early for July to October, school holidays and a preferred lodge because group seats and accommodation can sell out. We confirm the deposit, final travel details and supplier cancellation conditions in writing; those terms determine refunds and date-change options. If plans change, contact C.A.T.S Safaris promptly so we can look for another departure, room or route subject to availability.",
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Group Tours from Beach', href: '/kenya-safaris/group-tours-beach', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Short Safaris', href: '/kenya-safaris/short-safaris', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
      ]}
    />
  );
}
