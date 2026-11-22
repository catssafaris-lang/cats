import type { Metadata } from 'next';
import TourStyleHub from '@/components/TourStyleHub';
import { festiveNairobiTours, toCard, isExcursion, isDayTrip } from '@/data/tourStyles';

const title = 'Christmas & New Year Safaris from Nairobi 2026/27 | Festive Season Kenya Tours';
const description = 'Festive season 2026/27 in Kenya: Christmas and New Year safaris from Nairobi, Nairobi National Park tours over the holidays, Boxing Day day trips and short Masai Mara & Amboseli breaks. Book early for 16 Dec – 2 Jan.';
const canonical = '/festive-season-safaris';

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  keywords: ['Christmas safari Kenya 2026', 'New Year safari Kenya', 'festive season safari from Nairobi', 'Kenya holiday packages December 2026', 'Nairobi National Park Christmas tour', 'things to do in Nairobi at Christmas', 'Boxing Day safari Nairobi', 'New Year Masai Mara safari', 'December safari Kenya', 'Christmas holiday Kenya family', 'Nairobi day trips December', 'festive holiday tours Kenya', 'Kenya safari Christmas deals', 'Amboseli Christmas safari'],
  openGraph: { title, description, url: `https://www.catssafaris.com${canonical}`, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

const faqs = [
  { q: 'When is the festive season for safaris in Kenya?', a: 'In our season calendar the festive peak runs from 16 December to 2 January. It is one of the busiest periods of the year for Kenya safaris, so lodges and vehicles book up early.' },
  { q: 'Is Nairobi National Park open on Christmas Day and New Year\'s Day?', a: 'Kenya Wildlife Service parks, including Nairobi National Park, normally open every day of the year. A Christmas morning or New Year\'s Day game drive is a popular family outing. Check with us when booking in case of any special notice.' },
  { q: 'What is the best festive-season trip if I only have one day?', a: 'A private Nairobi National Park half-day tour or a full-day trip to Amboseli, Lake Naivasha with Hell\'s Gate, Lake Nakuru or Ol Pejeta. All start and end in Nairobi with hotel pickup.' },
  { q: 'What can families do in Nairobi over the Christmas holidays?', a: 'Families enjoy Nairobi National Park game drives, the Giraffe Centre, the Sheldrick elephant orphanage visiting hour and the Karen Blixen Museum. These can be combined into one private day with hotel pickup.' },
  { q: 'Are festive-season prices higher?', a: 'Yes. 16 December to 2 January is priced at peak-season rates on our multi-day packages. Prices shown on cards are starting rates — the festive rate for each package is in its pricing table.' },
  { q: 'What is the weather like in Kenya in late December?', a: 'Late December is generally warm, and the short rains usually ease by mid-December, leaving the parks green with good game viewing. Weather can vary, so pack a light rain jacket.' },
  { q: 'Can I spend Christmas or New Year at a safari lodge?', a: 'Yes. Many lodges host festive dinners. Some lodges add a compulsory festive supplement; where this applies we tell you before you confirm.' },
  { q: 'How early should I book a Christmas safari?', a: 'As early as possible. Popular lodges in the Masai Mara and Amboseli often fill weeks ahead of the holidays. Excursions in Nairobi can sometimes be arranged at shorter notice — WhatsApp us to check.' },
  { q: 'Is the Great Migration in the Masai Mara over Christmas?', a: 'The main Mara River crossing period is usually July to October. In December the herds are generally in Tanzania\'s Serengeti, but the Masai Mara still offers excellent year-round resident wildlife, including big cats, depending on conditions.' },
  { q: 'Do you offer private and group tours over the festive season?', a: 'Yes. Each tour on this page is labelled Private Tour or Group Joining Tour. Private tours give your family its own vehicle; group tours share the vehicle to lower the cost.' },
  { q: 'Can I do a Boxing Day or New Year\'s Day day trip from Nairobi?', a: 'Yes, subject to availability. Day trips leave Nairobi early in the morning and return the same evening. Tell us your date and we will confirm.' },
  { q: 'Do you pick up from Nairobi hotels and JKIA during the holidays?', a: 'Yes. Hotel and JKIA pickup is included on our Nairobi excursions and day trips, and Nairobi pickup is included on multi-day safaris as shown on each package.' },
  { q: 'Are children\'s rates available over the festive season?', a: 'Yes. Children under 11 are booked at child rates. Tell us their ages so we can recommend family-friendly lodges and drive times.' },
  { q: 'How do I pay for a festive-season booking?', a: 'A 40% deposit confirms your booking, with the balance due 60 days before departure. Festive bookings made within 60 days of travel are paid in full. See our booking terms.' },
  { q: 'How quickly will you reply over the holidays?', a: 'We reply within 24 hours; public holidays may take a little longer. For Nairobi National Park and day trips, WhatsApp +254 723 951 388 for the fastest response.' },
  { q: 'Can you arrange a festive trip to the coast after a safari?', a: 'Yes. We can add Diani Beach or another coastal stay after your safari. See our Nairobi to Diani Beach tours or ask us for a combined quote.' },
];

export default function Page() {
  const tours = festiveNairobiTours();
  const pick = (f: (s: (typeof tours)[number]) => boolean) => tours.filter(f).map(toCard);
  const nnp = tours.find((t) => t.slug === 'nairobi-national-park-half-day-private-tour');
  return (
    <TourStyleHub
      eyebrow="Festive Season 2026/27" canonical={canonical}
      h1="Christmas & New Year Safaris from Nairobi 2026/27"
      heroImage={nnp?.image || toCard(tours[0]).image}
      heroAlt="Festive season game drive in Nairobi National Park"
      lead="Spend the holidays in the wild. Nairobi National Park tours, Boxing Day day trips and short Christmas and New Year safaris — all starting in Nairobi."
      trust={['Festive Peak: 16 Dec – 2 Jan', 'Private & Group Options', 'Hotel & JKIA Pickup', 'WhatsApp for Instant Help']}
      intro={[
        'The festive season is one of the best times to discover Kenya with family and friends. Whether you are home for Christmas, visiting Nairobi over New Year, or looking for a Boxing Day adventure, every tour on this page starts in Nairobi and is ready to book.',
        'Choose a few hours in Nairobi National Park, a full day trip to Amboseli, Lake Naivasha, Lake Nakuru or Ol Pejeta, or a short Christmas or New Year break in the Masai Mara or Amboseli. Each card shows whether it is a Private Tour or a Group Joining Tour.',
      ]}
      notice="Festive dates (16 December – 2 January) are peak season. Card prices are starting rates; the festive rate for each package is shown in its pricing table. Lodges fill early — send your dates now so we can hold your preferred option."
      sections={[
        { id: 'nairobi-national-park', title: 'Nairobi National Park & City Tours over the Holidays', intro: 'Christmas morning game drives, New Year family outings, Giraffe Centre and Sheldrick visits — a few hours from your Nairobi hotel.', tours: pick(isExcursion) },
        { id: 'day-trips', title: 'Boxing Day & New Year Day Trips from Nairobi', intro: 'Out after breakfast, back in Nairobi the same evening.', tours: pick(isDayTrip) },
        { id: 'short-breaks', title: 'Short Christmas & New Year Safaris (2–4 Days)', intro: 'Celebrate under the African sky in the Masai Mara, Amboseli, Ol Pejeta or the Rift Valley lakes.', tours: pick((s) => s.durationUnit === 'days' && s.duration >= 2 && s.duration <= 4) },
        { id: 'holiday-safaris', title: 'Festive Holiday Safaris (5–8 Days)', intro: 'See in the New Year across several of Kenya\'s headline parks.', tours: pick((s) => s.durationUnit === 'days' && s.duration >= 5) },
      ]}
      faqs={faqs}
      related={[
        { label: 'Private Tours', href: '/private-tours' },
        { label: 'Group Joining Tours', href: '/group-tours' },
        { label: 'Nairobi Excursions & Day Trips', href: '/nairobi-excursions-day-trips' },
        { label: 'Giraffe Centre Tour', href: '/nairobi-excursions-day-trips/giraffe-centre-tour-nairobi' },
        { label: 'Sheldrick Elephant Orphanage Tour', href: '/nairobi-excursions-day-trips/sheldrick-elephant-orphanage-tour' },
        { label: 'Nairobi to Diani Beach Tours', href: '/kenya-safaris/nairobi-to-diani' },
        { label: 'Booking Terms', href: '/travel-info/booking-terms' },
      ]}
      ctaLine="Book Your Festive Safari Before the Lodges Fill"
    />
  );
}
