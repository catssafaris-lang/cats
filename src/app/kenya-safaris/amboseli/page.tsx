import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Amboseli Safaris | Kenya Elephant Game Drives | CATS',
  description: 'Plan an Amboseli safari in Kenya for close elephant encounters, classic game drives and unforgettable views of Mount Kilimanjaro.',
  alternates: { canonical: '/kenya-safaris/amboseli' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('amboseli') && !s.type?.includes('flight-safari') && !s.type?.includes('nairobi-diani'),
  );

  return (
    <SafariListingPage
      title="Amboseli Safaris"
      subtitle="Elephants Beneath Kilimanjaro"
      description="Discover Amboseli National Park, where great elephant herds cross open plains beneath the snow-capped silhouette of Mount Kilimanjaro. A Kenya safari here brings rewarding game drives, superb photography and the chance to spot lions, giraffes, buffalo and prolific birdlife in an unforgettable setting."
      heroImage="https://ik.imagekit.io/axd1riwnv/elephants-kilimanjaro-photo-safari-in-amboseli.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Amboseli National Park sits at the foot of Mount Kilimanjaro, Africa&apos;s highest peak, and is famous
            for hosting some of the continent&apos;s largest and best-studied free-ranging elephant herds. Open
            plains and swamp-fed grasslands make for exceptional sightings and some of the most photographed wildlife
            scenery in Kenya.
          </p>
          <p>
            C.A.T.S Safaris has guided travellers through Amboseli for 15 years, running private game drives from
            Nairobi and combining the park with{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            or Tsavo on longer circuits. Guests short on time can also reach Amboseli quickly on a{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              Kenya flight safari
            </Link>
            .
          </p>
          <p>
            Beyond elephants, Amboseli supports lion, giraffe, buffalo, spotted hyena and over 400 recorded bird
            species. Many guests continue their trip toward the coast; see our{' '}
            <Link href="/kenya-safaris/safaris-from-diani" className="text-[var(--forest-canopy)] underline">
              safaris from Diani Beach
            </Link>{' '}
            for routes that link Amboseli with the Indian Ocean.
          </p>
        </>
      }
      groups={[
        {
          title: 'Short Amboseli Safaris',
          description: '2–4 day itineraries focused on elephant game drives and Kilimanjaro views.',
          safaris: filtered.filter((s) => s.duration <= 4),
        },
        {
          title: 'Amboseli Combined Circuits',
          description: 'Longer safaris pairing Amboseli with the Masai Mara, Tsavo or Lake Nakuru.',
          safaris: filtered.filter((s) => s.duration >= 5),
        },
      ]}
      faqs={[
        {
          question: "When is the best time to visit Amboseli?",
          answer:
            "Amboseli is rewarding year-round, with the dry seasons from June to October and January to February often making wildlife easier to spot around the swamps. Clear early mornings in these periods also provide the best chance of seeing Mount Kilimanjaro, while the green seasons bring dramatic skies, newborn animals and fewer visitors. C.A.T.S Safaris plans around your priorities because Kilimanjaro's visibility depends on weather and cannot be guaranteed every day.",
        },
        {
          question: "How much does an Amboseli safari cost?",
          answer:
            "Pricing depends on nights, season, accommodation category, road or flight transfers, park fees and whether the 4x4 is private or shared. Our quotation includes the agreed accommodation, meals, park entry, private vehicle and professional driver-guide, with each major inclusion shown clearly. Drinks, tips, laundry, optional cultural activities, flights and personal purchases can be extra, and we flag these before you confirm.",
        },
        {
          question: "Is Amboseli safe for safari visitors?",
          answer:
            "Amboseli is a well-managed safari destination and is safe when guests follow the guide's instructions and park regulations. Our driver-guides have 15 years of experience reading elephant behaviour and maintaining a respectful distance from elephants, buffalo, lions and other wildlife. Remain inside the Land Cruiser unless the guide approves a safe stop, do not feed animals and use camp escorts after dark where required.",
        },
        {
          question: "Is Amboseli suitable for families with children?",
          answer:
            "Yes, Amboseli can work very well for families because the open landscapes and elephant herds often produce memorable sightings without excessively long searches. We can select family rooms, a private vehicle, shorter game drives and lodges with pools or age-appropriate activities, while building in rest during the hottest part of the day. Children must stay quiet, seated and supervised around wildlife, and we confirm minimum ages for any walking or community activity.",
        },
        {
          question: "What should I pack and wear for Amboseli?",
          answer:
            "Pack breathable neutral layers, a warm fleece for early starts, a sun hat, sunglasses, sunscreen, insect repellent, sturdy closed shoes and a light rain jacket. Amboseli can be dusty, so a scarf or buff, lens cloth and dustproof daypack help, while soft-sided luggage is easier in the Land Cruiser. Bring binoculars and a refillable bottle, and pack a swimsuit if your lodge has a pool for relaxing after a game drive.",
        },
        {
          question: "What health precautions are needed in Amboseli?",
          answer:
            "A travel-health professional should advise you on routine vaccinations, recommended vaccines and malaria prevention before departure. Malaria risk exists in safari areas, so use repellent, cover up at dusk and follow prescribed prophylaxis; lodges also provide nets or other measures where appropriate. Amboseli is not extreme mountain altitude, but heat, dust and early starts can cause dehydration or fatigue, so drink water and tell us about medical or dietary needs.",
        },
        {
          question: "What wildlife can I see in Amboseli?",
          answer:
            "Amboseli is famous for large, closely studied elephant families, often photographed against Mount Kilimanjaro, as well as lion, cheetah, buffalo, giraffe, zebra, wildebeest and spotted hyena. Swamps attract hippos and a rich range of waterbirds, and the park is rewarding for birders who watch the seasonal wetlands carefully. Big Five sightings are possible but never guaranteed, and the strength of an Amboseli safari is the combination of elephants, open plains and the mountain landscape.",
        },
        {
          question: "What vehicle is used, and how long is the journey to Amboseli?",
          answer:
            "C.A.T.S Safaris uses a private 4x4 safari Land Cruiser with a raised viewing roof, comfortable seats and seat belts, giving a stable platform for watching Amboseli elephants. The roof or windows are adjusted for weather, dust and park rules, so guests have excellent visibility without being exposed outside the vehicle. The road transfer from Nairobi generally takes around four to five hours, with rough or dusty approaches and internal tracks but opportunities for scenery and early wildlife viewing. A light-aircraft flight from Wilson Airport takes roughly 40 minutes, while private use lets the guide slow down at elephant sightings and adapt the route for families or photographers.",
        },
        {
          question: "What accommodation and meals are available in Amboseli?",
          answer:
            "Amboseli offers lodges, permanent tented camps and comfortable camps in different price categories, with choices based on location, service, security and your preferred atmosphere. Rooms and tents normally have private bathrooms, although some camps may use solar heating or have limited power at certain times. Meals are good quality and can include vegetarian, vegan, halal, gluten-free and allergy-aware options when requested in advance, with bush breakfast or sundowners arranged where safe.",
        },
        {
          question: "Can I customise a private Amboseli safari?",
          answer:
            "Yes, we can tailor an Amboseli itinerary around elephants, birding, photography, Kilimanjaro views, a Maasai cultural visit or a combination with the Masai Mara and Tsavo. You can choose road or air transfers, lodge standard, number of game drives and private or shared travel. A private 4x4 gives you the most flexibility to pause at a herd or return to camp for a child's rest without following another group's timetable.",
        },
        {
          question: "How much should I tip on an Amboseli safari?",
          answer:
            "Tipping is discretionary, but guests commonly thank the driver-guide at the end of the safari and contribute to a shared lodge tip box for housekeeping, kitchen and general staff. We can explain current Kenyan norms and the property's system during your briefing, so tips are distributed fairly. You may also give a small direct gratuity to a specialist guide or porter, and tips are separate from the safari price.",
        },
        {
          question: "Can solo travellers book an Amboseli safari?",
          answer:
            "Solo travellers can book a private Land Cruiser, join a small group or request a tailor-made road or flight itinerary. A single supplement may apply because the room and vehicle are not shared, but C.A.T.S Safaris explains the cost and can explore lower-cost shared dates. Amboseli's lodges are friendly places to meet other guests, while your professional guide provides dependable local support throughout the trip.",
        },
        {
          question: "How do I photograph Amboseli elephants and Kilimanjaro, and will I have signal?",
          answer:
            "A telephoto lens, spare batteries, memory cards, dust protection and binoculars are ideal for elephants, birds and distant wildlife, while a wide lens captures the mountain and plains. Early morning is usually best for a clearer Kilimanjaro silhouette and softer light; your guide can position the Land Cruiser without crowding animals. Lodge WiFi and mobile signal vary, and coverage can be patchy in the park, so keep essential documents and contacts available offline.",
        },
        {
          question: "How far in advance should I book, and can I change the itinerary?",
          answer:
            "Book several months ahead for school holidays, peak dry seasons and rooms with the best views, while quieter dates often allow more flexibility. Comprehensive travel insurance should cover cancellation, medical evacuation, delays and non-refundable lodge or flight costs. C.A.T.S Safaris explains supplier terms before payment and will help adjust dates, accommodation or the Masai Mara connection when availability permits.",
        },
        {
          question: "Is an Amboseli safari physically demanding, and can I meet local communities?",
          answer:
            "Game drives are seated, though rough tracks, vehicle steps, heat and uneven lodge paths can matter for older guests or anyone with limited mobility, so tell us early and we will choose suitable properties. Walking activities are optional, guided and subject to local rules; you can enjoy Amboseli without them. A respectful Maasai community experience can be added with local hosts, prior consent and clear guidance on photography, dress and appropriate contributions.",
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Tsavo', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Diani Beach', href: '/kenya-safaris/safaris-from-diani', image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
        { name: 'Flight Safaris', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/reticulated-giraffe-giraffa-camelopardalis-reticulata-samburu-national-reserve-kenya_28942449116_o.jpg' },
      ]}
    />
  );
}
