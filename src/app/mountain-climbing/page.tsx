import Link from 'next/link';
import { safaris } from '@/data/safaris';
import SafariListingPage from '@/components/SafariListingPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mountain Climbing Safaris | Mt Kilimanjaro & Mt Kenya Treks | CATS',
  description: 'Summit Africa\'s greatest peaks with CATS Safaris — Kilimanjaro Marangu, Machame, Lemosho, Rongai and Northern Circuit routes plus Mt Kenya Sirimon, Naro Moru and Chogoria climbs.',
  alternates: { canonical: '/mountain-climbing' },
};

export default function Page() {
  const filtered = safaris.filter((s) => s.destination === 'mountain');

  return (
    <SafariListingPage
      title="Mountain Climbing Safaris"
      subtitle="Summit Africa's Greatest Peaks"
      description="From the snow-capped summit of Mount Kilimanjaro — Africa's highest point at 5,895 metres — to the jagged twin peaks of Mount Kenya, our mountain climbing expeditions combine expert guiding, careful acclimatisation and unmatched alpine scenery."
      heroImage="https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1800"
      safaris={filtered}
      destination="mountain"
      introContent={
        <>
          <p>
            Mount Kilimanjaro rises 5,895 metres above the Tanzanian plains as Africa&apos;s highest peak and the
            world&apos;s tallest free-standing mountain, while Mount Kenya&apos;s jagged twin summits offer a
            technical, less-crowded alternative just across the border in Kenya. C.A.T.S Safaris has organised
            mountain climbing expeditions on both peaks for 15 years, with experienced guides, porters and mountain
            cooks supporting every route.
          </p>
          <p>
            On Kilimanjaro, choose from classic routes including Marangu, Machame, Lemosho, Rongai and the extended
            Northern Circuit, each offering different scenery and acclimatisation profiles. On Mount Kenya, the
            Sirimon, Naro Moru and Chogoria routes climb through bamboo forest and moorland to the peaks of Point
            Lenana. Careful, gradual ascent planning is central to every itinerary to maximise summit success and
            safety.
          </p>
          <p>
            Combine your climb with a wildlife safari before or after; see our{' '}
            <Link href="/kenya-safaris/amboseli" className="text-[var(--forest-canopy)] underline">
              Amboseli safaris
            </Link>{' '}
            for views of Kilimanjaro from the Kenyan side, or our{' '}
            <Link href="/tanzania-safaris" className="text-[var(--forest-canopy)] underline">
              Tanzania safari tours
            </Link>{' '}
            to pair your climb with the Serengeti and Ngorongoro Crater.
          </p>
        </>
      }
      groups={[
        {
          title: 'Mount Kilimanjaro Routes',
          description: 'Marangu, Machame, Lemosho, Rongai and Northern Circuit ascents to Uhuru Peak.',
          safaris: filtered.filter((s) => s.parks.some((p) => p.toLowerCase().includes('kilimanjaro'))),
        },
        {
          title: 'Mount Kenya Routes',
          description: 'Sirimon, Naro Moru and Chogoria climbs to Point Lenana.',
          safaris: filtered.filter((s) => s.parks.some((p) => p.toLowerCase().includes('kenya'))),
        },
      ]}
      faqs={[
        {
          question: 'Which Kilimanjaro route has the best summit success rate?',
          answer:
            'Longer routes with more acclimatisation days, such as Lemosho and the Northern Circuit, generally have higher summit success rates than shorter routes like Marangu, because the body has more time to adjust to altitude.',
        },
        {
          question: 'Do I need climbing experience to summit Kilimanjaro?',
          answer:
            'No technical climbing skills are required for the standard trekking routes; Kilimanjaro is a high-altitude walk rather than a technical climb. Good fitness and proper acclimatisation are more important than prior mountaineering experience.',
        },
        {
          question: 'How does Mount Kenya compare to Kilimanjaro?',
          answer:
            'Point Lenana, the main trekking summit on Mount Kenya at 4,985 metres, is reached without technical climbing and typically takes fewer days than Kilimanjaro, making it a good option for a shorter mountain adventure or as training for Kilimanjaro.',
        },
        {
          question: 'What is included in a mountain climbing package?',
          answer:
            'Packages typically include park fees, professional mountain guides, porters, a cook, camping or hut accommodation, and meals on the mountain. Full inclusions are listed on each individual route page.',
        },
        {
          question: 'When is the best time to climb Kilimanjaro or Mount Kenya?',
          answer:
            'The driest and most favourable climbing windows are January to mid-March and June to October, avoiding the long rains. Both mountains can be climbed outside these windows with the right gear, but trails can be wetter and colder.',
        },
      ]}
      relatedDestinations={[
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/amboseli-elephants-kilimanjaro.jpg' },
        { name: 'Tanzania Safaris', href: '/tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg' },
        { name: 'Mount Kenya', href: '/mountain-climbing', image: 'https://ik.imagekit.io/axd1riwnv/mount-kenya-peaks.jpg' },
      ]}
    />
  );
}
