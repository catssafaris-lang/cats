import Link from 'next/link';
import { Metadata } from 'next';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';

export const metadata: Metadata = {
  title: 'Kenya & Uganda Safaris | C.A.T.S | Gorilla Trekking & Wildlife Tours',
  description:
    'Combine Kenya wildlife safaris with Uganda mountain gorilla trekking. C.A.T.S coordinates seamless cross-border adventures from the Masai Mara to Bwindi Impenetrable Forest.',
  keywords: [
    'Kenya Uganda safari',
    'gorilla trekking Uganda',
    'Bwindi gorilla safari',
    'Kenya Uganda combined safari',
    'Big Five gorilla trekking',
    'East Africa safari',
    'CATS safaris',
    'Masai Mara Bwindi',
  ],
};

export default function KenyaUgandaSafarisPage() {
  const filtered = safaris.filter((s) => s.destination === 'kenya-uganda');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.catssafaris.com',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Kenya & Uganda Safaris',
                item: 'https://www.catssafaris.com/kenya-uganda-safaris',
              },
            ],
          }),
        }}
      />
      <SafariListingPage
        title="Kenya & Uganda Safaris"
        subtitle="Savannah Meets Rainforest"
        description="Experience Kenya's Big Five savannahs and Uganda's ancient forests — from the Masai Mara to Bwindi Impenetrable Forest for an unforgettable gorilla encounter."
        heroImage="https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg"
        safaris={filtered}
        destination="kenya-uganda"
        introContent={
          <>
            <p>
              A Kenya-Uganda safari merges the open-plains drama of Kenya&apos;s{' '}
              <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
                Masai Mara
              </Link>
              , Amboseli and Lake Nakuru with Uganda&apos;s primate-rich rainforests. Trek to within metres of a
              mountain gorilla family in Bwindi Impenetrable National Park, cruise the Kazinga Channel, and track
              tree-climbing lions in Queen Elizabeth National Park.
            </p>
            <p>
              C.A.T.S Safaris has coordinated cross-border East Africa itineraries for 15 years, handling every
              gorilla trekking permit, flight connection and lodge booking so the journey between countries feels
              effortless. Most itineraries combine a Kenya wildlife safari with a dedicated multi-day gorilla trekking
              extension in Uganda.
            </p>
            <p>
              Looking for a similar combination with a shorter flight to the gorillas? See our{' '}
              <Link href="/kenya-rwanda-safaris" className="text-[var(--forest-canopy)] underline">
                Kenya-Rwanda safaris
              </Link>{' '}
              instead.
            </p>
          </>
        }
        faqs={[
          {
            question: 'What does a gorilla trekking permit in Uganda include?',
            answer:
              'A Uganda gorilla permit covers one guided visit to a habituated mountain gorilla family, normally with up to one hour in their presence, plus the ranger and tracker team. Permit fees are set by the Uganda Wildlife Authority and can change, so CATS confirms the current cost and availability before taking your deposit. We secure permits as part of the itinerary because daily spaces are limited and cannot be treated like a last-minute park ticket.',
          },
          {
            question: 'How far ahead should I book gorilla trekking Uganda?',
            answer:
              'We recommend booking six to twelve months ahead for peak dates, specific trekking sectors, family groups and combined Kenya-Uganda safaris. Last-minute permits can occasionally appear, but relying on them risks losing your preferred date or lodge, especially in the drier seasons. CATS has coordinated these journeys for 15 years and confirms the permit before building the flights, transfers and accommodation around it.',
          },
          {
            question: 'How fit do I need to be for gorilla trekking in Bwindi?',
            answer:
              'Gorilla treks can take from a few hours to most of a day over steep, muddy and uneven forest terrain, depending on where the family has moved. You should be comfortable walking uphill for several hours, but no technical climbing experience is required. We can request a suitable trekking sector, arrange a porter and plan a realistic pace, while a clinician can advise on fitness or medical concerns.',
          },
          {
            question: 'What should I expect during a Uganda gorilla trek?',
            answer:
              'After a ranger briefing, your group follows trackers through dense forest until the gorilla family is located, then observes quietly from the permitted distance for the allocated time. The route may involve climbing, vines, rain and long pauses while trackers read signs, so the experience is an active wildlife encounter rather than a guaranteed short walk. Our team prepares you with the right clothing, porter support, water and transfer timing.',
          },
          {
            question: 'When is the best time for gorilla trekking in Uganda?',
            answer:
              'Gorilla trekking is possible throughout the year, while the drier periods around June to September and December to February often make trails more manageable. Rainforest weather remains changeable and rain can occur in any month, but wet-season travel may offer quieter permits and lush scenery. We balance trail conditions, permit availability and your Kenya safari dates when recommending a season.',
          },
          {
            question: 'What are the visa requirements for a Kenya-Uganda safari?',
            answer:
              'Travellers must meet the current entry requirements for both Kenya and Uganda, and the correct visa or travel authorisation depends on nationality and route. CATS gives practical guidance and checks that flights and border arrangements match your documents, but applications must be completed accurately through official channels. Check passport validity, blank pages and any vaccination certificate requirements well before departure.',
          },
          {
            question: 'Are there age limits for gorilla trekking in Uganda?',
            answer:
              'Uganda generally requires gorilla trekkers to be at least 15 years old on the date of trekking, subject to current authority rules. Younger children can still enjoy Kenya’s wildlife, cultural activities or other Uganda experiences while an adult treks, and we can discuss a family-friendly design. We verify the current minimum age and any exceptional arrangements before securing permits because the rule is strictly enforced.',
          },
          {
            question: 'Is gorilla trekking safe in Bwindi forest?',
            answer:
              'Gorilla trekking is conducted with trained park rangers and trackers who monitor the forest, the gorilla family and the group’s distance throughout the visit. Guests receive safety instructions, must follow the guide’s direction and should never touch, feed or approach the animals. CATS uses experienced local partners, keeps transfers coordinated and will discuss any current travel advice before departure.',
          },
          {
            question: 'What should I wear and pack for gorilla trekking?',
            answer:
              'Wear long trousers, a long-sleeved top, waterproof hiking boots, gaiters or thick socks, gardening-style gloves and a waterproof jacket or poncho. Pack water, snacks, sunscreen, insect repellent, a small daypack, camera protection and spare layers because forest conditions change quickly. Porters can carry your daypack and help on difficult ground, and we confirm the lodge’s laundry and equipment options in advance.',
          },
          {
            question: 'What are the photography rules around gorillas?',
            answer:
              'Photography is allowed, but flashes are prohibited and guests must maintain the distance set by rangers while keeping voices low and movements calm. Long lenses or a camera with good low-light performance are useful in the forest, but no image is worth disturbing a gorilla or delaying the group. Your tracker will position the group responsibly, and CATS can arrange a private or small trekking group where available for a more considered experience.',
          },
          {
            question: 'What health precautions are needed for Uganda gorilla trekking?',
            answer:
              'Consult a travel-health professional about routine vaccinations, malaria prevention, yellow-fever rules and your ability to trek at altitude before travelling. Guests should not trek when ill, particularly with a contagious respiratory infection, because gorillas are vulnerable to human disease. Tell us about medical, mobility or dietary requirements early so we can arrange a porter, suitable room and sensible schedule, while your clinician makes the medical decision.',
          },
          {
            question: 'How high is Bwindi, and will altitude be a problem?',
            answer:
              'Bwindi’s trailheads and ridges are at roughly 1,200 to 2,600 metres, so the physical exertion and elevation can be noticeable even though this is not a high-altitude expedition. We allow time to rest after the Kenya-Uganda flight, keep hydration practical and avoid rushing the trek. If you have a respiratory, cardiac or altitude history, seek medical advice and share relevant information with us before booking.',
          },
          {
            question: 'What wildlife and accommodation can I combine with gorilla trekking?',
            answer:
              'A Kenya-Uganda itinerary can pair the Masai Mara, Amboseli or Lake Nakuru with Bwindi, Queen Elizabeth National Park, the Kazinga Channel and chimpanzee or other forest experiences. Accommodation ranges from comfortable safari lodges to intimate forest lodges near the chosen trekking sector, and location is important because transfers can be long. We select properties by access, family policy, comfort, meal needs and the time available for wildlife rather than by star rating alone.',
          },
          {
            question: 'Is a Kenya-Uganda safari good value, and can it be customised?',
            answer:
              'Combining Kenya’s Big Five safari with gorilla trekking creates two very different wildlife experiences and can be better value than arranging separate trips, because one team coordinates flights, permits and transfers. The gorilla permit is a substantial part of the budget, but private 4x4 days and carefully chosen lodges let us control the rest of the cost. CATS can tailor the number of Kenya nights, trekking sector, activity level, accommodation and photography time around your priorities.',
          },
          {
            question: 'How do tipping, solo travel and cancellation work on this safari?',
            answer:
              'Tipping is discretionary; guests commonly recognise their private guide, ranger or trackers, porter and lodge staff separately when service has been good, and we explain local expectations before travel. Solo travellers can trek privately or join a permitted group, with transfers and accommodation chosen to preserve comfort and security. Because permits and lodges have strict terms, comprehensive insurance for cancellation, medical care and evacuation is essential, and we explain deadlines before payment.',
          },
        ]}
          relatedDestinations={[
            { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
            { name: 'Kenya-Rwanda Safaris', href: '/kenya-rwanda-safaris', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
            { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        ]}
      />
    </>
  );
}
