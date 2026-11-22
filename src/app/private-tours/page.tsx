import type { Metadata } from 'next';
import TourStyleHub from '@/components/TourStyleHub';
import { privateNairobiTours, toCard, isExcursion, isDayTrip } from '@/data/tourStyles';

const title = 'Private Tours & Private Safaris from Nairobi | Kenya Private Safari';
const description = 'Private Nairobi National Park tours, private day trips from Nairobi and private Kenya safaris to Masai Mara, Amboseli, Nakuru & Ol Pejeta. Your own 4x4 Land Cruiser & driver-guide, hotel/JKIA pickup.';
const canonical = '/private-tours';

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  keywords: ['private safari Kenya', 'private tours Nairobi', 'private Nairobi National Park tour', 'private day trip from Nairobi', 'private Masai Mara safari', 'private Amboseli safari', 'Kenya private safari packages', 'private safari from Nairobi', 'tailor-made Kenya safari', 'private game drive Nairobi', 'Nairobi private tour guide', 'private family safari Kenya'],
  openGraph: { title, description, url: `https://www.catssafaris.com${canonical}`, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

const faqs = [
  { q: 'What is a private tour with C.A.T.S?', a: 'A private tour means the safari vehicle and driver-guide are reserved for your party only. You do not share with other travellers, so pickup time, pace, stops and photography time are planned around you.' },
  { q: 'What is the difference between a private tour and a group joining tour?', a: 'On a private tour you have your own vehicle and flexible timings. On a group joining tour you share a vehicle with other travellers on fixed dates and a set itinerary, which lowers the cost per person. Both styles are clearly labelled on every C.A.T.S tour card.' },
  { q: 'Which private tour is best if I only have a few hours in Nairobi?', a: 'The private Nairobi National Park half-day tour is the most popular choice. The park is about 7 km from the city centre and close to JKIA, so it fits easily around meetings or flights.' },
  { q: 'Can I do a private safari during a layover?', a: 'Yes, if your layover is long enough to clear immigration and return to JKIA with a comfortable margin. Share your flight times and we will advise whether a Nairobi National Park game drive fits.' },
  { q: 'Do private tours include hotel or airport pickup?', a: 'Yes. Pickup and drop-off from your Nairobi hotel or JKIA is included in our Nairobi private excursions and day trips. Multi-day safaris include Nairobi pickup as shown on each package.' },
  { q: 'What vehicle is used on private safaris?', a: 'Private safaris use a 4x4 safari vehicle with a pop-up roof, typically a Toyota Land Cruiser, so everyone can stand for wildlife viewing and photography. Vehicle details are shown on each package.' },
  { q: 'Are private tours suitable for families with young children?', a: 'Yes. A private vehicle lets you take breaks when children need them. Children under 11 are booked at child rates. Tell us your children\'s ages so we can recommend suitable lodges and drive times.' },
  { q: 'Which private day trips from Nairobi are available?', a: 'Popular private day trips include Amboseli National Park, Lake Naivasha with Crescent Island and Hell\'s Gate, Lake Nakuru, and Ol Pejeta Conservancy, plus Nairobi city excursions such as the Giraffe Centre and Sheldrick elephant orphanage.' },
  { q: 'Can I customise a private safari itinerary?', a: 'Yes. Our listed private safaris are tried-and-tested routes, and we can adjust parks, nights and accommodation level to suit your dates and budget. Ask for a tailored quote.' },
  { q: 'What accommodation levels are available on private safaris?', a: 'Multi-day private safaris are offered in Economy, Comfort, Luxury and Superior Luxury accommodation. You choose the category when you book.' },
  { q: 'How are private tour prices shown?', a: 'Each card shows the starting price in US dollars. The full price depends on season, number of travellers and accommodation level, and is listed in the pricing table on every package page.' },
  { q: 'Are park entrance fees included?', a: 'Park entrance fees for the parks in your itinerary are included in our package prices unless the package says otherwise. The full inclusions and exclusions are listed on each tour page.' },
  { q: 'How far ahead should I book a private safari?', a: 'For peak months (July to October and the Christmas–New Year period) we recommend booking as early as possible, as preferred lodges fill first. Nairobi excursions can often be arranged at shorter notice — WhatsApp us to check.' },
  { q: 'How do I pay for a private tour?', a: 'A 40% deposit confirms your booking, with the balance due 60 days before departure. Bookings made within 60 days of travel are paid in full. See our booking terms for details.' },
  { q: 'How quickly will you reply to my private tour inquiry?', a: 'We reply within 24 hours; public holidays may take a little longer. For Nairobi National Park and day trips, message us on WhatsApp on +254 723 951 388 for immediate assistance.' },
  { q: 'Are your driver-guides experienced?', a: 'Our team leader brings more than 15 years of experience across safari, tourism, transport and travel operations, and we work with experienced, English-speaking driver-guides.' },
];

export default function Page() {
  const all = privateNairobiTours().map(toCard);
  const tours = privateNairobiTours();
  const pick = (f: (s: (typeof tours)[number]) => boolean) => tours.filter(f).map(toCard);
  return (
    <TourStyleHub
      eyebrow="Private Tours" canonical={canonical}
      h1="Private Tours & Private Safaris from Nairobi"
      heroImage={all.find((t) => t.slug === '3-day-mara-encounter-masai-mara')?.image || all[0].image}
      heroAlt="Private Kenya safari game drive from Nairobi"
      lead="Your own 4x4 safari vehicle, your own driver-guide, your timetable. Private Nairobi National Park tours, private day trips and private Kenya safaris with hotel or JKIA pickup."
      trust={['Your Own Vehicle & Guide', 'Hotel & JKIA Pickup', '24-Hour Reply · WhatsApp Instant', '40% Deposit Confirms']}
      intro={[
        'A private safari is the most flexible way to experience Kenya. Instead of sharing a vehicle on fixed departure dates, your party travels with a dedicated driver-guide in a 4x4 safari vehicle with a pop-up roof. You decide when to start, how long to stay with a sighting and when to stop for photographs or a break.',
        'This page lists every C.A.T.S private tour that starts in Nairobi, from a few hours in Nairobi National Park to full Kenya safaris across the Masai Mara, Amboseli, Lake Nakuru, Lake Naivasha, Ol Pejeta, Samburu and Tsavo. Looking to share costs instead? See our group joining tours.',
      ]}
      sections={[
        { id: 'nairobi-excursions', title: 'Private Nairobi National Park Tours & Excursions', intro: 'Half-day and full-day private game drives and city excursions — ideal for business travellers, layovers and families.', tours: pick(isExcursion) },
        { id: 'day-trips', title: 'Private Day Trips from Nairobi', intro: 'Leave after breakfast and return to Nairobi the same evening, in your own vehicle with your own guide.', tours: pick(isDayTrip) },
        { id: 'short-safaris', title: 'Private 2–4 Day Safaris from Nairobi', intro: 'Short private safaris to the Masai Mara, Amboseli, Ol Pejeta and the Rift Valley lakes — by road or fly-in.', tours: pick((s) => s.durationUnit === 'days' && s.duration >= 2 && s.duration <= 4) },
        { id: 'classic-safaris', title: 'Private 5–8 Day Kenya Safaris', intro: 'Classic multi-park private safaris combining Kenya\'s headline reserves at a relaxed, family-friendly pace.', tours: pick((s) => s.durationUnit === 'days' && s.duration >= 5) },
      ]}
      faqs={faqs}
      related={[
        { label: 'Group Joining Tours', href: '/group-tours' },
        { label: 'Festive Season Safaris', href: '/festive-season-safaris' },
        { label: 'Nairobi Excursions & Day Trips', href: '/nairobi-excursions-day-trips' },
        { label: 'Nairobi Layover Safari', href: '/nairobi-excursions-day-trips/nairobi-layover-safari' },
        { label: 'Giraffe Centre Tour', href: '/nairobi-excursions-day-trips/giraffe-centre-tour-nairobi' },
        { label: 'Kenya Flight Safaris', href: '/kenya-flight-safaris' },
        { label: 'All Kenya Safaris', href: '/kenya-safaris' },
      ]}
      ctaLine="Plan Your Private Safari from Nairobi"
    />
  );
}
