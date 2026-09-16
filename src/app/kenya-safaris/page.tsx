import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kenya Safari Tours | Best Kenya Safari Packages',
  description: 'Explore Kenya with handcrafted safari packages — Masai Mara, Amboseli, Tsavo, Lake Nakuru, Samburu & more.',
  alternates: { canonical: '/kenya-safaris' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'kenya' || s.destination === 'beach');

  return (
    <SafariListingPage
      title="Kenya Safari Tours"
      subtitle="Discover Kenya"
      description="From the sweeping plains of the Masai Mara to the elephant herds of Amboseli and the white sands of Diani Beach."
      heroImage="https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg"
      safaris={filtered}
      destination="kenya"
      introContent={
        <>
          <p>
            Kenya is the safari that set the standard for East Africa, and Collective African Tours &amp; Safaris
            (C.A.T.S Safaris) has spent 15 years turning that promise into carefully guided journeys. A Kenya safari
            with C.A.T.S can begin in Nairobi and roll out to the golden grasslands of the{' '}
            <Link href="/kenya-safaris/masai-mara" className="text-[var(--forest-canopy)] underline">
              Masai Mara
            </Link>{' '}
            or the elephant herds of{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli
            </Link>
            , where the herds move beneath the snows of Mount Kilimanjaro.
          </p>
          <p>
            Choose a short 2–4 day escape, an extended 5–8 day circuit through Lake Nakuru, Samburu and Tsavo, or
            combine wildlife with the coast on a route that ends at Diani Beach. Prefer to save time in the vehicle?
            Our{' '}
            <Link href="/kenya-flight-safaris" className="text-[var(--forest-canopy)] underline">
              Kenya flight safaris
            </Link>{' '}
            connect Nairobi to the bush by scenic light aircraft in under an hour.
          </p>
          <p>
            Every itinerary includes a private 4x4 safari Land Cruiser, a professional driver-guide, comfortable{' '}
            <Link href="/travel-info/kenya-lodges" className="text-[var(--forest-canopy)] underline">
              lodges and camps
            </Link>
            , and full logistics support. Travelling further afield? We also craft combined{' '}
            <Link href="/kenya-tanzania-safaris" className="text-[var(--forest-canopy)] underline">
              Kenya-Tanzania safaris
            </Link>{' '}
            and gorilla-trekking extensions into Uganda and Rwanda.
          </p>
        </>
      }
      groups={[
        {
          title: 'Short Kenya Safaris (1–4 Days)',
          description: 'Quick, efficient game-drive itineraries ideal for travellers with limited time in Kenya.',
          safaris: filtered.filter((s) => s.destination === 'kenya' && s.duration <= 4),
        },
        {
          title: 'Extended Kenya Safaris (5+ Days)',
          description: 'Unhurried multi-park circuits through the Masai Mara, Amboseli, Lake Nakuru and beyond.',
          safaris: filtered.filter((s) => s.destination === 'kenya' && s.duration >= 5),
        },
        {
          title: 'Safari & Beach Combinations',
          description: 'Pair Kenya wildlife game drives with a relaxing finish on the Indian Ocean coast.',
          safaris: filtered.filter((s) => s.destination === 'beach'),
        },
      ]}
      faqs={[
        {
          question: 'How many days do I need for a Kenya safari?',
          answer:
            'Most first-time visitors are well served by 5–8 days, enough time to cover two or three parks such as the Masai Mara, Amboseli and Lake Nakuru without rushing. If your schedule is tighter, our 2–4 day safaris from Nairobi still deliver excellent Big Five game drives.',
        },
        {
          question: 'What is the best time of year for a Kenya safari?',
          answer:
            'Kenya offers year-round game viewing. The dry months from June to October bring the Great Migration to the Masai Mara and easier wildlife spotting across most parks, while January to March offers green scenery, newborn wildlife and fewer crowds.',
        },
        {
          question: 'Can I combine a Kenya safari with a beach holiday?',
          answer:
            'Yes. Many of our clients pair a wildlife safari through Tsavo, Amboseli or the Masai Mara with several relaxing days at Diani Beach or Zanzibar. See our Kenya safaris and Diani Beach packages for ready-made itineraries.',
        },
        {
          question: 'Do you offer both road and flight safaris?',
          answer:
            'Both. Road safaris in a private 4x4 Land Cruiser are our most popular option and give you flexibility to stop for photographs, while our Kenya flight safaris use scenic light-aircraft transfers to save travel time on longer circuits.',
        },
        {
          question: 'What is included in a C.A.T.S Kenya safari package?',
          answer:
            'Every package includes a private guided vehicle, professional driver-guide, park entrance fees, accommodation at your chosen category of lodge or camp, and airport transfers. Meals and inclusions vary by itinerary and are listed on each safari page.',
        },
      ]}
      relatedDestinations={[
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
        { name: 'Tsavo', href: '/kenya-safaris/safaris-from-diani', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
        { name: 'Lake Nakuru', href: '/kenya-safaris/extended-safaris', image: 'https://ik.imagekit.io/axd1riwnv/lake-nakuru-flamingos.jpg' },
        { name: 'Samburu', href: '/kenya-flight-safaris', image: 'https://ik.imagekit.io/axd1riwnv/samburu-reticulated-giraffe.jpg' },
        { name: 'Diani Beach', href: '/kenya-safaris/kenya-and-diani', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
      ]}
    />
  );
}
