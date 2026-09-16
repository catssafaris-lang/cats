import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zanzibar Beach Holidays | Indian Ocean Escapes | CATS',
  description: 'Discover Zanzibar beach holidays with idyllic Indian Ocean shores, Swahili culture and tailor-made tropical escapes from CATS Safaris.',
  alternates: { canonical: '/kenya-safaris/zanzibar' },
};

export default function Page() {
  const filtered = safaris.filter(
    (s) => s.type?.includes('zanzibar') || (s.destination === 'beach' && s.slug.includes('zanzibar')),
  );

  return (
    <SafariListingPage
      title="Zanzibar Beach Holidays"
      subtitle="Indian Ocean Island Escapes"
      description="Savour the timeless allure of Zanzibar, where soft white beaches meet clear Indian Ocean water and Swahili heritage fills the air. These beach holidays invite you to slow down, explore Stone Town, enjoy island hospitality and pair a tropical escape with your East African safari."
      heroImage="https://ik.imagekit.io/axd1riwnv/Kenya-14517-scaled.webp"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Zanzibar is the classic finish to an East African safari, a spice island off the Tanzanian coast known
            for its coral-fringed beaches, historic Stone Town and centuries of Swahili and Omani heritage. C.A.T.S
            Safaris arranges Zanzibar stays as a stand-alone beach holiday or as the closing chapter of a{' '}
            <Link href="/kenya-tanzania-safaris" className="text-[var(--forest-canopy)] underline">
              Kenya-Tanzania safari
            </Link>
            .
          </p>
          <p>
            Days here can be as active or restful as you choose, from snorkelling and diving the reef to Stone Town
            walking tours, spice farm visits and dhow sunset cruises. With 15 years of experience linking safari and
            beach itineraries, we handle the flight connections between the mainland and the island seamlessly.
          </p>
          <p>
            Prefer to stay within Kenya for your beach finish? See our{' '}
            <Link href="/kenya-safaris/kenya-and-diani" className="text-[var(--forest-canopy)] underline">
              Kenya safaris and Diani Beach
            </Link>{' '}
            packages instead.
          </p>
        </>
      }
      faqs={[
        {
          question: 'When is the best time to visit Zanzibar?',
          answer:
            'Zanzibar is warm throughout the year, with the clearest beach weather generally from June to October and again from December to February. The short rains in November and the longer rains around March to May can bring showers, but they rarely prevent a rewarding island stay. We use our 15 years of East Africa experience to match your Zanzibar beach holiday to the safari season and your preferred activities.',
        },
        {
          question: 'How do I get from Kenya or Tanzania to Zanzibar?',
          answer:
            'Regular flights connect Zanzibar with Nairobi, Arusha and Dar es Salaam, and the journey from the mainland is usually around one to one and a half hours. C.A.T.S arranges the flight, airport meet-and-greet and resort transfer so that your safari-to-beach connection is straightforward. We can also arrange a domestic flight or ferry option from Dar es Salaam when that best fits your itinerary.',
        },
        {
          question: 'How much does a Zanzibar beach holiday cost?',
          answer:
            'Pricing depends on the season, resort category, room type, length of stay and whether you add diving, private excursions or a mainland Tanzania safari. Zanzibar can be planned as a value-conscious hotel break or an indulgent private-villa experience, with flights and transfers quoted transparently. We prepare a tailored proposal rather than applying a one-size-fits-all price, and can show where each upgrade changes the total.',
        },
        {
          question: 'Is Zanzibar safe for visitors?',
          answer:
            'Zanzibar is a welcoming destination, and the established beach areas and Stone Town are well travelled when normal precautions are followed. Our local representatives arrange reliable transfers, advise on appropriate dress and help guests avoid isolated areas after dark. We monitor current travel guidance and remain available throughout your stay, as we do on every CATS itinerary.',
        },
        {
          question: 'Is Zanzibar suitable for families with children?',
          answer:
            'Yes, many Zanzibar resorts have family rooms, swimming pools, calm-water beaches and child-friendly activities. We can choose accommodation with safe swimming conditions and plan shorter spice, boat or Stone Town excursions around your children’s ages and energy levels. Families combining a safari and Zanzibar can also use a relaxed beach stay to recover between travel days.',
        },
        {
          question: 'What should I pack for a Zanzibar holiday?',
          answer:
            'Pack light beach clothing, reef-safe sun protection, a hat, sandals, swimwear and a light layer for evenings or boat trips. Bring modest clothing that covers shoulders and knees for Stone Town, villages and religious sites, plus insect repellent and a small dry bag for excursions. If Zanzibar follows a safari, we can arrange laundry and help coordinate luggage so you do not need to carry excessive bags.',
        },
        {
          question: 'Do I need vaccinations or malaria protection for Zanzibar?',
          answer:
            'Travellers should obtain personalised advice from a travel-health professional before departure, including guidance on routine vaccinations, malaria prevention and any entry requirements that apply to their nationality. We provide practical destination information, but medical decisions must come from your clinician or travel clinic. Carry prescribed medication in its original packaging and tell us about mobility, dietary or medical needs before we finalise activities.',
        },
        {
          question: 'What can I do in Zanzibar besides relaxing on the beach?',
          answer:
            'Stone Town walking tours, spice-farm visits, dhow sunset cruises, reef snorkelling, scuba diving and dolphin excursions are popular additions to a Zanzibar beach holiday. The best activity mix depends on tides, weather and your interests, so we avoid overloading the itinerary. CATS can arrange private guides and boat trips, with time left free for swimming and rest.',
        },
        {
          question: 'What accommodation is available in Zanzibar?',
          answer:
            'Options range from boutique Stone Town hotels and intimate guesthouses to full-service beachfront resorts and private villas on the north, east and south coasts. We consider beach quality, tides, swimming, atmosphere, meal plans and transfer time rather than choosing solely by star rating. Our team can combine a night in historic Stone Town with a longer stay beside the ocean.',
        },
        {
          question: 'Can CATS customise Zanzibar with a safari or honeymoon?',
          answer:
            'Yes, we regularly tailor Zanzibar as a stand-alone escape, a romantic honeymoon or the final chapter of a Kenya or Tanzania safari. You can choose private 4x4 game drives, a slower beach schedule, diving days, a Stone Town stay or a special dinner and sunset cruise. With 15 years of planning East African journeys, we coordinate the flights, guides and room categories into one coherent trip.',
        },
        {
          question: 'How much should I budget for tipping in Zanzibar?',
          answer:
            'Tipping is discretionary, but guests often leave a small amount for guides, drivers, boat crews and attentive hotel staff when service has been good. We explain local expectations and can suggest a practical daily approach before travel, so you do not have to improvise. Tips should reward individual service and are separate from any service charges already included by the hotel.',
        },
        {
          question: 'Is Zanzibar suitable for solo travellers?',
          answer:
            'Zanzibar works well for solo travellers who want a secure base, a choice of guided excursions and time to explore at their own pace. We can arrange private airport transfers, a local Stone Town guide and small-group or private marine activities according to your comfort level. Our team remains contactable throughout the holiday, while your accommodation is selected for location and atmosphere.',
        },
        {
          question: 'Can I take photographs freely in Zanzibar?',
          answer:
            'Zanzibar offers excellent photography, from dhow sails and coral beaches to Stone Town doors, markets and spice farms. Ask permission before photographing residents, children, religious ceremonies or private property, and follow your guide’s advice around sensitive locations. We can build in golden-hour walks and private excursions that give you time to photograph without rushing.',
        },
        {
          question: 'Can Zanzibar accommodate special diets?',
          answer:
            'Most established Zanzibar hotels can cater for vegetarian, vegan, halal, gluten-free and common allergy-related diets when notified in advance. Seafood, tropical fruit and Swahili dishes are widely available, but guests with serious allergies should discuss preparation procedures directly with the property as well as with us. CATS records dietary requirements at the time of booking and confirms them with every relevant lodge, hotel and excursion provider.',
        },
        {
          question: 'How far ahead should I book Zanzibar, and what if plans change?',
          answer:
            'We recommend booking three to six months ahead for peak beach dates, Christmas and New Year, honeymoon villas or a specific resort, while last-minute options can sometimes be found in quieter periods. We explain each supplier’s deposit, amendment and cancellation terms before you pay and strongly recommend comprehensive travel insurance. If weather, flight schedules or personal circumstances require changes, our team will work through the available alternatives with you.',
        },
      ]}
      relatedDestinations={[
        { name: 'Kenya-Tanzania Safaris', href: '/kenya-tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Tanzania Safaris', href: '/tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Elephants-at-Tsavo-East-National-Park-Kenya-scaled.webp' },
        { name: 'Kenya Safaris and Diani Beach', href: '/kenya-safaris/kenya-and-diani', image: 'https://ik.imagekit.io/axd1riwnv/Kenya-14517-scaled.webp' },
      ]}
    />
  );
}
