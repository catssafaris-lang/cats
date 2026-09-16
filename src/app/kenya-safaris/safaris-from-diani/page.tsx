import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Multi-Day Safaris from Diani Beach | CATS Safaris Kenya',
  description: 'Book a multi-day safari from Diani Beach for Kenya game drives, Tsavo wildlife and a seamless coast-to-bush adventure.',
  alternates: { canonical: '/kenya-safaris/safaris-from-diani' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('diani-departure') && !s.type?.includes('day-trip') && !s.type?.includes('group-safari'),
  );

  return (
    <SafariListingPage
      title="Multi-Day Safaris from Diani Beach"
      subtitle="Escape the Coast, Enter the Wild"
      description="Leave Diani Beach behind for a multi-day Kenya safari through the untamed landscapes of Tsavo and beyond. Private guided game drives reveal red-dust elephants, lions, giraffes and wide horizons, before your journey returns you to the ease of the Indian Ocean coast."
      heroImage="https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Diani Beach makes an excellent base for a Kenya safari, sitting close to the Tsavo parks and within easy
            reach of Amboseli. C.A.T.S Safaris arranges private, guided multi-day safaris directly from your Diani
            resort, using a 4x4 Land Cruiser and a professional driver-guide for the entire journey.
          </p>
          <p>
            Tsavo East and Tsavo West are home to the famous red-dust elephants, along with lion, giraffe, buffalo and
            some of Kenya&apos;s most dramatic volcanic scenery, while routes extending to{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>{' '}
            add the classic backdrop of Mount Kilimanjaro. After the safari, you return to the beach for a final
            night or more of relaxation.
          </p>
          <p>
            Looking for something shorter? Our{' '}
            <Link href="/kenya-safaris/diani-excursions" className="text-[var(--forest-canopy)] underline">
              Diani day excursions
            </Link>{' '}
            fit a wildlife encounter into a single day, while our{' '}
            <Link href="/kenya-safaris/group-tours-beach" className="text-[var(--forest-canopy)] underline">
              group safaris from the coast
            </Link>{' '}
            offer a shared, lower-cost alternative. With 15 years of local experience, we tailor every route to your
            available time.
          </p>
        </>
      }
      groups={[
        {
          title: '2–3 Day Safaris',
          description: 'A focused escape into Tsavo or Amboseli that fits neatly around a beach holiday.',
          safaris: filtered.filter((s) => s.duration >= 2 && s.duration <= 3),
        },
        {
          title: '4+ Day Safaris',
          description: 'Longer circuits that add extra parks and more time for game drives.',
          safaris: filtered.filter((s) => s.duration >= 4),
        },
      ]}
      faqs={[
        {
          question: "When is the best time for a safari from Diani Beach?",
          answer:
            "Tsavo and Amboseli can be visited throughout the year, while June to October and January to February are usually drier and make wildlife easier to find around water. The coastal shoulder and green seasons can offer fewer visitors, vivid scenery and good value, although short rains may affect road conditions. C.A.T.S Safaris coordinates your safari with the beach weather and your preferred balance of game drives and relaxation.",
        },
        {
          question: "How much does a multi-day safari from Diani Beach cost?",
          answer:
            "The cost depends on duration, Tsavo East or West and other parks visited, accommodation level, season, vehicle exclusivity and whether you add flights or a beach hotel. Our quote sets out the private 4x4 Land Cruiser, professional driver-guide, park fees, accommodation, meals and Diani transfers so the core price is transparent. Drinks, tips, optional activities, visas, laundry and personal spending are commonly additional and are identified in advance.",
        },
        {
          question: "Is it safe to travel from Diani Beach into Tsavo?",
          answer:
            "Yes, a professionally organised coast-to-bush safari is safe when guests follow local advice and wildlife rules. C.A.T.S Safaris has 15 years of experience operating from Diani and uses trained driver-guides who know the routes, park tracks and safe distances around elephants, lions and buffalo. Keep valuables secure, remain in the vehicle unless the guide authorises a stop and follow camp security procedures after dark.",
        },
        {
          question: "Are safaris from Diani suitable for families?",
          answer:
            "They are a practical way for families to add wildlife to a beach holiday, particularly with a private vehicle and a two- or three-day Tsavo itinerary. We can plan shorter drives, family rooms, pool time and flexible meal stops, while older children may enjoy a longer route to Amboseli or Taita Hills. Children must follow the guide's instructions and remain seated and quiet near wildlife, and we discuss age suitability for any walking or cultural visit.",
        },
        {
          question: "What should I pack for a Diani-to-Tsavo safari?",
          answer:
            "Bring light neutral layers, a warm top for dawn, sun protection, insect repellent, comfortable closed shoes, a light rain jacket, binoculars and a refillable water bottle. Soft-sided luggage is easiest in a 4x4, and a small daypack keeps camera equipment and medication accessible; beach luggage can normally remain at your hotel if arranged ahead. Pack a swimsuit for the coast, but avoid relying only on beachwear once you enter the parks.",
        },
        {
          question: "What health precautions are needed from Diani Beach to Tsavo?",
          answer:
            "Consult a travel-health professional about routine vaccinations, recommended vaccines and malaria prevention for both coastal and safari areas. Malaria risk exists on this route, so use repellent, cover up at dusk and take prescribed medication as directed; bring personal medicines and a copy of prescriptions. Heat, humidity, dust and long drives can be tiring, so drink water, protect yourself from the sun and tell us about medical or dietary needs before departure.",
        },
        {
          question: "What wildlife can I see on a safari from Diani?",
          answer:
            "Tsavo East is known for red-dust elephants, while Tsavo West adds volcanic scenery, springs and varied habitats; both can produce lion, buffalo, giraffe, zebra, hippo and abundant birdlife. Routes to Amboseli may add elephant herds beneath Kilimanjaro, and Taita Hills can bring different landscapes and species. Wildlife is free-ranging and sightings are never guaranteed, but a private game drive gives your guide time to track signs and wait at water sources.",
        },
        {
          question: "What vehicle is used, and how long are the drives from Diani?",
          answer:
            "C.A.T.S Safaris uses a private 4x4 safari Land Cruiser with comfortable seating, seat belts and a raised pop-up viewing roof suited to Tsavo's broad landscapes. The roof is managed according to weather, dust, wildlife and park rules, so the vehicle remains a secure platform rather than an unprotected open car. Diani to Tsavo East commonly takes around three to four hours, depending on your resort, traffic, weather and gate, while Amboseli is a longer transfer and internal park roads can be rough or corrugated. Private use allows beach pick-up times, photo stops, rest breaks and the pace of game drives to suit your party, while a scheduled or charter flight can replace selected connections.",
        },
        {
          question: "What accommodation and food should I expect in Tsavo?",
          answer:
            "You can stay in lodges, permanent tented camps or comfortable safari camps, from practical options to luxury properties with pools, views and private bathrooms. We choose properties for location, service, security and your group's needs, and explain power, hot-water and WiFi arrangements because remote camps can operate differently from beach hotels. Meals are substantial and can accommodate vegetarian, vegan, halal, gluten-free and allergy-aware diets when requested in advance, with bush dining only where safe.",
        },
        {
          question: "Can I customise a safari from Diani Beach?",
          answer:
            "Yes, we can design a private route through Tsavo East, Tsavo West, Amboseli, Taita Hills or another suitable park around your available nights and interests. Choose a value camp or luxury lodge, add extra game drives, combine road and flight legs, or return to Diani after the safari. Group departures can lower the price, but a private Land Cruiser offers greater flexibility for families, photographers and travellers with mobility needs.",
        },
        {
          question: "What are the tipping customs on a coastal Kenya safari?",
          answer:
            "Tipping is optional and based on service, with many guests thanking the driver-guide at the end and contributing to the lodge's shared tip box for other staff. C.A.T.S Safaris can explain current local expectations and each property's distribution method, so you do not need to carry out separate envelopes for everyone. A tip for a porter, specialist guide or exceptional service is welcome but should remain separate from the quoted package.",
        },
        {
          question: "Can solo travellers book a safari from Diani?",
          answer:
            "Yes, solo guests can travel privately with a professional driver-guide or join a small shared departure when dates match. A single supplement may apply to the vehicle and room, and we will show that cost clearly while looking for practical shared options. A private safari offers security, flexible stops and a relaxed way to move from a beach hotel into the bush, while lodges provide social opportunities.",
        },
        {
          question: "How should I photograph Tsavo, and will I stay connected?",
          answer:
            "A telephoto lens, spare batteries, extra memory cards, dust protection and binoculars are useful for red-dust elephants and distant predators, while a wider lens captures Tsavo's volcanic or arid landscapes. Early and late game drives provide softer light, and your guide can position the vehicle with care around waterholes and animals. WiFi and mobile signal are much less reliable in the parks than at Diani Beach, so download travel documents and expect some offline time.",
        },
        {
          question: "How far ahead should I book, and what if I need to cancel?",
          answer:
            "Booking several months ahead is sensible for school holidays, peak dry seasons and popular Diani resorts, while shorter-notice trips may work outside those periods. We strongly recommend travel insurance covering cancellation, medical evacuation, delays, baggage and non-refundable lodge or transport costs. Before payment, we provide each supplier's deposit and amendment rules and help rework the route when weather or availability changes.",
        },
        {
          question: "How physically demanding is a Diani safari, and can I add culture?",
          answer:
            "Game drives are seated, but the road can be bumpy and camps may involve steps or uneven paths, so older travellers and guests with mobility concerns should tell us early. Walking activities are optional, guided and subject to park or conservancy rules, meaning a comfortable vehicle-based safari is still a complete experience. Depending on the route, we can arrange a respectful local or Maasai community visit with consent, appropriate dress guidance and clear expectations about photography.",
        },
      ]}
      relatedDestinations={[
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
        { name: 'Diani Excursions', href: '/kenya-safaris/diani-excursions', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Group Tours from Beach', href: '/kenya-safaris/group-tours-beach', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Beach to Nairobi', href: '/kenya-safaris/beach-to-nairobi', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
      ]}
    />
  );
}
