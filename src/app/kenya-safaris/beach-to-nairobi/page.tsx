import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Beach to Nairobi Safari Tours | CATS Safaris',
  description: 'Journey from Kenya’s coast to Nairobi on a safari with immersive game drives, Tsavo wildlife and remarkable changing landscapes.',
  alternates: { canonical: '/kenya-safaris/beach-to-nairobi' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('beach-to-nairobi') || s.slug.includes('coast-to-nairobi'),
  );

  return (
    <SafariListingPage
      title="Kenya Beach to Nairobi Safari Tours"
      subtitle="A Coast-to-Capital Safari Journey"
      description="Travel from Kenya’s sunlit beaches to Nairobi through some of the country’s most compelling safari country. These coast-to-capital tours weave game drives in Tsavo and other wildlife parks with dramatic scenery, offering elephants, big cats and a rewarding overland adventure."
      heroImage="https://ik.imagekit.io/axd1riwnv/wide-shot-of-a-beautiful-jungle-under-the-colorful-sky-captured-in-tsavo-west-kilimanjaro-kenya-1024x576.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            For travellers ending their Kenya holiday inland, a beach to Nairobi safari turns the return journey into
            an adventure in its own right. C.A.T.S Safaris routes these itineraries through Tsavo&apos;s red-earth
            plains, with stops for game drives among elephant herds, lion and giraffe, before arriving in Nairobi
            ready for your onward flight.
          </p>
          <p>
            These tours mirror our{' '}
            <Link href="/kenya-safaris/nairobi-to-diani" className="text-[var(--forest-canopy)] underline">
              Nairobi to Diani Beach
            </Link>{' '}
            routes but run in the opposite direction, so guests who started their holiday at the coast can still
            experience Kenya&apos;s wildlife parks before departure. With 15 years of experience coordinating overland
            transfers, C.A.T.S handles every stop, lodge booking and airport connection.
          </p>
        </>
      }
      faqs={[
        {
          question: 'When is the best time for a beach to Nairobi safari?',
          answer:
            "Tsavo East, Tsavo West and Amboseli are generally easiest for road travel and game viewing in the dry seasons from June to October and January to February. The green season can bring dramatic landscapes, newborn animals and fewer visitors, although rain may slow park tracks and transfers. C.A.T.S Safaris uses your travel dates, flight plans and wildlife priorities to recommend the most practical coast-to-capital route.",
        },
        {
          question: 'How much does a beach to Nairobi safari cost?',
          answer:
            "The price reflects the number of nights, parks visited, road or flight transfers, lodge category, park fees, season, vehicle and meal plan. A private 4x4 Land Cruiser with a professional driver-guide gives the most control and is priced differently from a shared departure or scheduled flight. We provide a written quotation separating accommodation, transport, game drives, park fees and optional upgrades.",
        },
        {
          question: 'Is it safe to travel from Kenya’s coast to Nairobi by safari vehicle?',
          answer:
            "Yes, our professional driver-guides have 15 years of experience coordinating coast-to-capital routes and wildlife travel in Tsavo and Amboseli. They choose appropriate roads, follow park regulations, manage safe wildlife distances and plan stops at established lodges or facilities. We monitor weather, road conditions and flight or airport changes and keep you informed throughout the transfer.",
        },
        {
          question: 'Is a beach to Nairobi safari suitable for families with children?',
          answer:
            "Families can turn a necessary transfer into an exciting safari, especially when the itinerary includes an overnight in Tsavo or Amboseli rather than one long drive. Children can watch for elephants, giraffes, zebras and lions, but road days and bumpy tracks may be tiring for toddlers, so a private vehicle allows useful flexibility. We can arrange family rooms, shorter driving sections, comfort stops and child-friendly meals when you share the children’s ages.",
        },
        {
          question: 'What should I pack and wear for a coast-to-Nairobi safari?',
          answer:
            "Pack light neutral layers, a fleece or jacket for cool inland mornings, comfortable trousers, closed shoes, hat, sunscreen, insect repellent, water, medication and a camera. A soft-sided bag is easier to store in the Land Cruiser and a small day bag keeps travel documents and valuables accessible during transfers. If beginning at the beach, keep swimwear separate, but prepare for cooler highland weather as you approach Nairobi.",
        },
        {
          question: 'What health and mobility considerations apply on this journey?',
          answer:
            "Consult a travel clinician about Kenya vaccinations and malaria precautions, and carry prescriptions in their original packaging. Long drives, uneven park tracks and lodge steps can challenge guests with limited mobility, but we can shorten sections, choose suitable accommodation or arrange a flight from Mombasa or Ukunda. Tell us about medical needs, pregnancy, motion sickness or accessibility requirements before confirming the route.",
        },
        {
          question: 'Which wildlife and parks can I see between the beach and Nairobi?',
          answer:
            "Tsavo East is known for red-dust elephants, lion, buffalo, giraffe, zebra and open savannah, while Tsavo West adds volcanic landscapes, Mzima Springs and varied habitats. Amboseli is especially memorable for large elephant herds beneath Mount Kilimanjaro, and rhino or leopard sightings are possible but never guaranteed. Our guides use local knowledge and patient game drives while respecting the animals and park rules.",
        },
        {
          question: 'What vehicle is used, and how comfortable is the road journey?',
          answer:
            "Overland itineraries use a well-maintained private 4x4 Land Cruiser with a pop-up roof, seat belts, large windows and high clearance for park tracks. The vehicle is comfortable for safari viewing, but the coastal roads, city traffic and rougher game-drive tracks can still be tiring over long distances. We schedule rest stops and can recommend a flight or split journey when comfort and time are more important than the overland experience.",
        },
        {
          question: 'How long does the journey take, and how are pickups and airport transfers arranged?',
          answer:
            "A direct coast-to-Nairobi drive takes roughly eight to nine hours, while a safari itinerary usually divides it with one or more overnight park stays and game drives. Pickup can be from a Diani resort, Mombasa hotel, Ukunda or Mombasa airport, with the final Nairobi drop-off coordinated to your hotel or flight. Traffic near Mombasa, Nairobi and the airport can be unpredictable, so we build generous buffers and confirm each meeting time.",
        },
        {
          question: 'What is included and excluded in a beach to Nairobi safari?',
          answer:
            "The quotation normally includes private transport or the stated flight, a professional driver-guide, accommodation, specified meals, park entrance fees, game drives and the listed coastal or airport transfers. International flights, visas, travel insurance, drinks, tips, personal purchases and optional activities are generally excluded unless specifically added. We explain luggage limits, single-room supplements and every transfer leg before you pay a deposit.",
        },
        {
          question: 'Can I customise the route from Diani or Mombasa to Nairobi?',
          answer:
            "Yes, you can choose a direct transfer, Tsavo East, Tsavo West, Amboseli or a combination, then select lodge standard and the number of game drives. We can also arrange a coast-to-capital route in reverse, add a beach night, include a flight for one leg or coordinate an airport connection. Our 15 years of route-planning experience help balance wildlife time with realistic driving and flight schedules.",
        },
        {
          question: 'How many people travel, and can I book a private safari vehicle?',
          answer:
            "A private 4x4 Land Cruiser is reserved for your solo trip, couple, family or small group, allowing flexible stops and luggage planning. Shared departures may reduce the price but use a fixed schedule and shared vehicle capacity, which is less adaptable for children, photographers or guests with mobility needs. We can quote both formats and advise on the most comfortable arrangement for your party.",
        },
        {
          question: 'Can you accommodate special diets, and what is the tipping etiquette?',
          answer:
            "Lodges can usually provide vegetarian, vegan, halal and allergy-aware meals when dietary details are sent before booking, and we can arrange child-friendly options. Carry water and snacks for road sections because service stops vary, and tell us about severe allergies or religious requirements early. Tips for the driver-guide and lodge staff are voluntary but appreciated for good service; we can advise on customary amounts without adding them automatically.",
        },
        {
          question: 'What photography opportunities does this coast-to-capital route offer?',
          answer:
            "The route combines Indian Ocean departure scenes with Tsavo’s red-earth elephants, volcanic Tsavo West landscapes and, when included, Amboseli’s Kilimanjaro backdrop. The Land Cruiser’s pop-up roof gives strong wildlife angles, while the guide can position the vehicle respectfully and plan stops in good light. Bring spare batteries, memory cards and dust protection, and keep cameras secure during road and airport transfers.",
        },
        {
          question: 'How far ahead should I book, and what happens if I need to change or cancel?',
          answer:
            "Book early for July to October, school holidays, peak beach dates and preferred lodges or flights, although we can sometimes arrange a last-minute transfer. We confirm the deposit, flight or accommodation conditions and cancellation terms in writing, including any non-refundable park fees. If plans change, contact C.A.T.S Safaris immediately so we can explore a revised route, new date or flight subject to supplier availability.",
        },
      ]}
      relatedDestinations={[
        { name: 'Nairobi to Diani', href: '/kenya-safaris/nairobi-to-diani', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Safaris from Diani', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
      ]}
    />
  );
}
