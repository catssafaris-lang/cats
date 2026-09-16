import Link from 'next/link';
import { Metadata } from 'next';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';

export const metadata: Metadata = {
  title: 'Kenya & Rwanda Safaris | C.A.T.S | Gorilla Trekking & Safari Adventures',
  description:
    'Combine Kenya safari adventures with Rwanda gorilla trekking in Volcanoes National Park. C.A.T.S delivers seamless cross-border itineraries from the Masai Mara to the Virunga Mountains.',
  keywords: [
    'Kenya Rwanda safari',
    'gorilla trekking Rwanda',
    'Volcanoes National Park',
    'Kenya Rwanda combined safari',
    'golden monkey trekking',
    'East Africa safari',
    'CATS safaris',
    'Masai Mara Rwanda',
  ],
};

export default function KenyaRwandaSafarisPage() {
  const filtered = safaris.filter((s) => s.destination === 'kenya-rwanda');

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
                name: 'Kenya & Rwanda Safaris',
                item: 'https://www.catssafaris.com/kenya-rwanda-safaris',
              },
            ],
          }),
        }}
      />
      <SafariListingPage
        title="Kenya & Rwanda Safaris"
        subtitle="Savannah Meets the Virunga Mountains"
        description="From the sweeping savannahs of the Masai Mara to the misty Virunga Mountains — track mountain gorillas and witness the Great Migration in one seamless journey."
        heroImage="https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg"
        safaris={filtered}
        destination="kenya-rwanda"
        introContent={
          <>
            <p>
              A Kenya-Rwanda safari combines two of Africa&apos;s most extraordinary wildlife experiences. Begin with
              Kenya&apos;s legendary national parks, the{' '}
              <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
                Masai Mara
              </Link>
              , Amboseli and Lake Nakuru, then fly to Kigali for an unforgettable mountain gorilla trek in Volcanoes
              National Park.
            </p>
            <p>
              C.A.T.S Safaris has run these cross-border itineraries for 15 years, coordinating every transfer,
              gorilla permit and lodge booking so guests move between Kenya&apos;s open plains and Rwanda&apos;s
              volcanic highlands without complication. Many itineraries also include golden monkey trekking, offered
              only in Rwanda and Uganda.
            </p>
            <p>
              Prefer to trek in Uganda instead? See our{' '}
              <Link href="/kenya-uganda-safaris" className="text-[var(--forest-canopy)] underline">
                Kenya-Uganda safaris
              </Link>{' '}
              for the Bwindi Impenetrable Forest option.
            </p>
          </>
        }
        faqs={[
          {
            question: 'What does a Rwanda gorilla trekking permit include and cost?',
            answer:
              'A Volcanoes National Park gorilla permit covers one guided visit to a habituated family, normally allowing one hour with the gorillas alongside park rangers and trackers. Rwanda’s authority sets the price and may revise it, so CATS confirms the current cost, date and availability before your booking is final. We secure permits early because a limited number are released for each trekking day.',
          },
          {
            question: 'How far ahead should I book gorilla trekking in Rwanda?',
            answer:
              'Six to twelve months ahead is sensible for popular dates, school holidays, private arrangements and a specific gorilla trekking sector or lodge. Last-minute permits may occasionally be available, but they can involve less choice and a rushed flight or accommodation plan. With 15 years of East Africa experience, CATS books the permit first and then aligns your Kenya safari, Kigali transfer and Volcanoes National Park stay.',
          },
          {
            question: 'How fit do I need to be for a Rwanda gorilla trek?',
            answer:
              'Treks can range from a short walk to several hours over steep volcanic slopes, forest paths and uneven ground, depending on the gorilla family’s location. You need reasonable walking fitness and confidence on hills, but no technical climbing skills are required. We can request an appropriate sector, arrange a porter and plan rest time, while a medical professional should advise on individual fitness concerns.',
          },
          {
            question: 'What happens during a gorilla trek in Volcanoes National Park?',
            answer:
              'The morning begins with a ranger briefing before trackers lead the group through bamboo and montane forest to locate the assigned family. Once found, guests observe quietly from the required distance for the allocated time, following ranger instructions about movement and noise. CATS prepares your transport, clothing, water, porter support and lodge timing so the day feels organised even when the forest route is unpredictable.',
          },
          {
            question: 'When is the best time for gorilla trekking in Rwanda?',
            answer:
              'The drier periods around June to September and December to February often provide easier trail conditions, although Volcanoes National Park is open for trekking year-round. Rain is possible even in the dry season, while wetter months can bring lush scenery and sometimes more flexible availability. We weigh weather, permit dates, Masai Mara plans and your tolerance for muddy trails before recommending travel dates.',
          },
          {
            question: 'What visas do I need for a Kenya-Rwanda safari?',
            answer:
              'Entry requirements differ by nationality, so you must meet the current rules for Kenya and Rwanda and obtain any required visa or travel authorisation. CATS helps map the documents to your itinerary and flight connections, but applications and declarations must be made accurately through official government channels. Confirm passport validity, blank pages and any vaccination certificate rules before departure.',
          },
          {
            question: 'Are there age limits for gorilla trekking in Rwanda?',
            answer:
              'Rwanda generally requires gorilla trekkers to be at least 15 years old on the trekking date, subject to current authority policy. Younger family members can enjoy a Kenya safari, golden monkey trekking where permitted or cultural activities while an adult takes the gorilla trek. We check the current rule before taking payment because age eligibility is enforced at the park entrance.',
          },
          {
            question: 'Is gorilla trekking in Rwanda safe?',
            answer:
              'Volcanoes National Park treks operate with trained rangers and trackers who manage the route, monitor the gorillas and enforce a safe viewing distance. Guests must follow instructions, avoid sudden movements and never touch or feed the animals, even if a gorilla approaches. We use trusted local partners, monitor travel guidance and keep your Kigali, lodge and park transfers coordinated.',
          },
          {
            question: 'What should I wear and pack for a Rwanda gorilla trek?',
            answer:
              'Wear sturdy waterproof hiking boots, long trousers, a long-sleeved layer, gaiters or thick socks, gardening gloves and a waterproof jacket. A small daypack should hold water, snacks, sunscreen, insect repellent, camera protection and an extra layer because mountain weather changes quickly. Porters are available to carry bags and assist on steep ground, and we can advise on laundry and equipment at your lodge.',
          },
          {
            question: 'Can I photograph gorillas in Rwanda?',
            answer:
              'Photography is permitted without flash, provided guests stay at the distance directed by rangers and keep the group quiet and calm. A lightweight camera with a fast lens or a telephoto lens is useful in dim forest light, but photography must never delay the group or disturb the animals. We can request a private arrangement where available and build in time for golden monkeys or Kigali photography as well.',
          },
          {
            question: 'What health precautions are needed for Rwanda gorilla trekking?',
            answer:
              'Consult a travel-health professional about routine vaccinations, malaria prevention, yellow-fever regulations and any personal medical needs before your Kenya-Rwanda safari. Do not trek with a contagious respiratory illness because mountain gorillas are vulnerable to human infections, and tell our team promptly if you feel unwell. We can arrange practical support such as a porter and suitable room, while medical clearance remains your clinician’s responsibility.',
          },
          {
            question: 'What altitude should I expect in Volcanoes National Park?',
            answer:
              'The park lies at roughly 2,400 to 4,500 metres, and the trailhead and trek can feel strenuous because of both elevation and steep terrain. Most guests acclimatise comfortably with a night in Kigali or near the park, steady pacing, hydration and rest, but altitude affects people differently. If you have heart, lung or previous altitude concerns, seek professional medical advice before committing to the trek.',
          },
          {
            question: 'What wildlife and accommodation can I add to Rwanda?',
            answer:
              'A Kenya-Rwanda itinerary combines the Masai Mara, Amboseli or Lake Nakuru with mountain gorillas, golden monkeys, Kigali and the volcanic landscapes of Volcanoes National Park. We use carefully selected Kigali hotels and forest lodges, considering drive time, room layouts, meal requirements and the early trekking start. Rwanda’s compact geography can make transfers efficient, leaving room for a second activity or a slower cultural day.',
          },
          {
            question: 'Is a Kenya-Rwanda safari good value and can CATS customise it?',
            answer:
              'The permit is a major cost, but combining it with a private Kenya safari lets one team coordinate flights, guides, transfers and accommodation and creates a rare Big Five-and-gorilla experience. We can adjust the number of Masai Mara nights, add golden monkey trekking or cultural visits, and choose accommodation from comfortable to high-end. Our private 4x4 guides and 15 years of planning experience help protect your time while keeping the overall budget visible.',
          },
          {
            question: 'How do tipping, solo travel and insurance work?',
            answer:
              'Tipping is optional; guests may thank their private guide, ranger or trackers, porter and lodge staff separately, and CATS explains local expectations before departure. Solo travellers can request a private trek or join an approved group, with airport and park transfers arranged around their comfort. Comprehensive insurance covering permit-related cancellation, medical treatment, evacuation, delays and baggage is strongly recommended because park and lodge terms are strict.',
          },
        ]}
          relatedDestinations={[
            { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
            { name: 'Kenya-Uganda Safaris', href: '/kenya-uganda-safaris', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
            { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        ]}
      />
    </>
  );
}
