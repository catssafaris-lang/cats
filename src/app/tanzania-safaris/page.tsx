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
          question: 'When is the best time to visit the Serengeti?',
          answer:
            'The Serengeti offers excellent game viewing year-round due to its resident wildlife, but the Great Migration timing varies seasonally: calving season is typically January to March in the southern plains, with river crossings from around June to October further north.',
        },
        {
          question: 'What makes the Ngorongoro Crater special?',
          answer:
            'The crater floor is a self-contained ecosystem within a collapsed volcanic caldera, holding an unusually dense and easily viewed population of lion, elephant, buffalo, hippo and one of Tanzania\'s few remaining black rhino populations.',
        },
        {
          question: 'How do I get to Tanzania\'s northern safari circuit?',
          answer:
            'Most itineraries begin in Arusha, reached by international flight via Kilimanjaro International Airport, with road or light-aircraft transfers connecting you to the Serengeti, Ngorongoro, Tarangire and Lake Manyara.',
        },
        {
          question: 'Can a Tanzania safari be combined with Zanzibar?',
          answer:
            'Yes, this is one of our most popular combinations. A short flight connects Arusha or Dar es Salaam to Zanzibar for a beach finish after your safari.',
        },
      ]}
      relatedDestinations={[
        { name: 'Kenya-Tanzania Safaris', href: '/kenya-tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Wildebeest-migration-at-Mara-River.jpg' },
        { name: 'Zanzibar', href: '/kenya-safaris/zanzibar', image: 'https://ik.imagekit.io/axd1riwnv/diani-beach-aerial.jpg' },
        { name: 'Masai Mara', href: '/kenya-safaris/masai-mara', image: 'https://ik.imagekit.io/axd1riwnv/tsavo-east-elephants.jpg' },
      ]}
    />
  );
}
