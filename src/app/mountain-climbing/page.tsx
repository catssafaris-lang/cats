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
          question: 'Is a Kilimanjaro climb harder than Mount Kenya?',
          answer:
            'Kilimanjaro is higher at 5,895 metres and usually involves more days of sustained altitude, while Mount Kenya’s Point Lenana is lower but can include steeper terrain and more technical options beyond the trekking summit. Neither standard trekking summit requires prior mountaineering expertise, but both demand steady fitness and preparation. CATS recommends the route according to your time, altitude experience, comfort with camping and appetite for technical ground.',
        },
        {
          question: 'How can I prevent altitude sickness on a mountain climb?',
          answer:
            'Gradual ascent, extra acclimatisation days, slow pacing, hydration, sleep and early reporting of symptoms are the most important safeguards. Headache, nausea, dizziness or unusual fatigue should never be ignored, and our professional guides assess the group daily and can stop or descend if necessary. Discuss preventive medication and any medical condition with a travel-health professional before departure; no itinerary can eliminate altitude risk.',
        },
        {
          question: 'What training do I need for Kilimanjaro or Mount Kenya?',
          answer:
            'Build several months of aerobic fitness through walking, hiking, stairs or cycling, and include long uphill walks with a daypack before departure. Strengthening legs and core helps with uneven ground, while practising consecutive walking days prepares you for the summit schedule. Technical climbing training is unnecessary on standard routes, but CATS can recommend a realistic route and pace based on your experience.',
        },
        {
          question: 'Which Kilimanjaro route should I choose?',
          answer:
            'Marangu uses hut accommodation and a direct profile, Machame is a scenic camping route, Lemosho offers a longer approach, Rongai is quieter on the northern side, and the Northern Circuit gives the most acclimatisation time. Route choice affects scenery, traffic, accommodation, duration and summit success rather than simply difficulty. We match the route to your fitness, preferred comfort, season and available days, then pair you with an experienced guide team.',
        },
        {
          question: 'What are the summit success rates?',
          answer:
            'Longer itineraries generally produce better summit outcomes because they give the body more time to acclimatise, while no responsible operator can guarantee a summit. Success also depends on health, pacing, weather, prior altitude experience and how honestly symptoms are reported. CATS prioritises safety over a target photo and uses professional guides who monitor the group throughout the Kilimanjaro climb or Mount Kenya trek.',
        },
        {
          question: 'When is the best season to climb?',
          answer:
            'The most popular dry windows are roughly January to mid-March and June to October, when trails are often clearer and summit conditions more predictable. Mountains create their own weather, and climbs outside these periods can still work with suitable equipment but may be wetter, colder and quieter. We choose dates around your route, acclimatisation plan and tolerance for changing conditions rather than treating a season as a guarantee.',
        },
        {
          question: 'What gear and clothing should I pack?',
          answer:
            'Pack moisture-wicking layers, warm insulating and waterproof shells, broken-in hiking boots, gloves, a hat, headlamp, sunglasses, sunscreen and a comfortable daypack. Summit nights are cold, so a properly rated sleeping bag and warm layers are essential, while trekking poles and blister care are useful on descents. We provide a route-specific kit list and confirm what can be hired locally or carried by porters before you travel.',
        },
        {
          question: 'Are there age limits for a mountain climb?',
          answer:
            'There is no single practical age answer because route authorities, accommodation and medical fitness all matter, although young trekkers and older climbers require particularly careful planning. We assess experience, walking ability, acclimatisation time and supervision rather than accepting a booking without discussion. A clinician should confirm fitness for high altitude, and families can choose a shorter Mount Kenya route or safari add-on when appropriate.',
        },
        {
          question: 'Are guides, porters and cooks included?',
          answer:
            'Our mountain packages use professional local guides, porters and, on camping routes, cooks who manage camp, meals and route logistics. Porters carry shared equipment within park regulations, but climbers should still carry a comfortable daypack with water, layers and personal essentials. We use established teams, discuss fair tipping expectations and never encourage unsafe overloading or unsupported ascents.',
        },
        {
          question: 'How much does a Kilimanjaro climb or Mount Kenya trek cost?',
          answer:
            'Pricing reflects park fees, route length, permits, guide and porter teams, camping or hut accommodation, meals, transfers, equipment and the season. Longer routes cost more but may offer better acclimatisation and a stronger chance of reaching the summit safely, so the cheapest option is not always the best value. CATS provides an itemised quotation and explains optional gear hire, private departures, transfers and gratuities before you commit.',
        },
        {
          question: 'How many acclimatisation days should I allow?',
          answer:
            'For Kilimanjaro, six- to eight-day routes are commonly preferred over rushed shorter itineraries, while Mount Kenya plans should also include a gradual ascent and a sensible summit night. The correct number depends on the route, your previous altitude exposure, fitness and recovery needs. We design the itinerary around “climb high, sleep lower” opportunities where possible and build in flexibility for a guide-led decision.',
        },
        {
          question: 'What happens if I need an emergency evacuation?',
          answer:
            'Our guides carry communication equipment, follow park safety procedures and arrange the appropriate descent or evacuation response if a climber becomes seriously unwell. Evacuation logistics and costs vary by mountain, location and policy, so comprehensive insurance with high-altitude trekking and emergency evacuation cover is essential. We explain the route’s support arrangements before departure and keep a mainland contact team available throughout the climb.',
        },
        {
          question: 'Is mountain climbing safe for families and solo travellers?',
          answer:
            'A private departure can work well for solo travellers and families because the guide can adjust pace, breaks and encouragement, but every participant must meet the route’s fitness and age expectations. Standard trekking routes are non-technical, yet altitude, cold, weather and fatigue make professional support important. CATS can combine a climb with a Tanzania safari or Amboseli visit, giving non-climbing family members an alternative programme where needed.',
        },
        {
          question: 'Can I eat safely and meet dietary requirements on the mountain?',
          answer:
            'Mountain cooks prepare filling meals such as soups, rice, pasta, vegetables, fruit and protein, with menus adapted to the route and camping facilities. Vegetarian, vegan, halal and allergy-related requirements can usually be accommodated when shared well in advance, although remote kitchens cannot offer the same variety as a hotel. Tell CATS about dietary needs and medications at booking so the cook and guide team can plan supplies.',
        },
        {
          question: 'How far ahead should I book, and what insurance is needed?',
          answer:
            'Booking several months ahead is recommended for preferred routes, peak dry-season dates, guide teams, equipment and any safari or beach extension. Insurance should explicitly cover high-altitude trekking, medical treatment, emergency evacuation, cancellation, delays and baggage, because ordinary travel policies may exclude a Kilimanjaro climb. We explain deposits and cancellation terms before confirming the route and can help adjust dates when circumstances change.',
        },
      ]}
      relatedDestinations={[
        { name: 'Amboseli', href: '/kenya-safaris/amboseli', image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg' },
        { name: 'Tanzania Safaris', href: '/tanzania-safaris', image: 'https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg' },
        { name: 'Mount Kenya', href: '/mountain-climbing', image: 'https://ik.imagekit.io/axd1riwnv/Kenya-14517-scaled.webp' },
      ]}
    />
  );
}
