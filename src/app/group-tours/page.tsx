import type { Metadata } from 'next';
import TourStyleHub from '@/components/TourStyleHub';
import { groupNairobiTours, groupCoastTours, toCard } from '@/data/tourStyles';

const title = 'Group Joining Safaris & Budget Group Tours from Nairobi & Diani';
const description = 'Affordable group joining safaris in Kenya: shared Nairobi National Park group tours, Masai Mara group safaris from Nairobi, and Tsavo, Amboseli & Shimba Hills group tours from Diani and Mombasa.';
const canonical = '/group-tours';

export const metadata: Metadata = {
  title, description, alternates: { canonical },
  keywords: ['group joining safari Kenya', 'budget safari Kenya', 'Kenya group tours', 'shared safari from Nairobi', 'Masai Mara group safari', 'Nairobi National Park group tour', 'cheap safari from Nairobi', 'group safari from Diani', 'Tsavo East group safari from Mombasa', 'solo traveller safari Kenya', 'joining safari Masai Mara', 'Kenya safari for solo travellers'],
  openGraph: { title, description, url: `https://www.catssafaris.com${canonical}`, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

const faqs = [
  { q: 'What is a group joining safari?', a: 'A group joining safari is a shared tour: you join other travellers in the same safari vehicle on a set itinerary. Sharing the vehicle and guide lowers the cost per person, making it a popular choice for solo travellers, couples and budget-conscious visitors.' },
  { q: 'How is a group tour different from a private tour?', a: 'Group tours share a vehicle and follow a fixed programme, often on set departure days. Private tours give your party its own vehicle and flexible timings. Every C.A.T.S tour card is labelled Group Joining Tour or Private Tour so you can choose easily.' },
  { q: 'Are group tours good for solo travellers?', a: 'Yes. Group joining safaris are one of the most affordable ways for solo travellers to see Kenya, and you travel with like-minded people.' },
  { q: 'How many people are in a group safari vehicle?', a: 'Group numbers vary by vehicle and date. Every guest has a window seat in our safari vehicles. Ask us about the expected group size for your departure date.' },
  { q: 'Do group tours run on fixed dates?', a: 'Many group tours run on set departure days, subject to a minimum number of travellers. Send us your preferred date and we will confirm availability within 24 hours.' },
  { q: 'Is there a Nairobi National Park group tour?', a: 'Yes. Our Nairobi National Park half-day group tour is a shared game drive from Nairobi, a budget-friendly way to see the park close to the city.' },
  { q: 'Can I join a Masai Mara group safari from Nairobi?', a: 'Yes. Our Masai Mara group safaris start and end in Nairobi with shared transport, game drives and accommodation as listed on each package.' },
  { q: 'Do you offer group safaris from Diani Beach and Mombasa?', a: 'Yes. Group tours from the coast include Shimba Hills, Tsavo East, Tsavo West and Amboseli, with pickup from Diani and Mombasa hotels as stated on each package.' },
  { q: 'Can families with children join a group tour?', a: 'Yes, families are welcome. Children under 11 are booked at child rates. For young children who need frequent breaks, a private tour may be more comfortable.' },
  { q: 'What is included in a group joining safari?', a: 'Inclusions vary by package and are listed on each tour page. They typically cover transport in a safari vehicle, a driver-guide, game drives, and the park fees and meals stated in the itinerary.' },
  { q: 'Can I upgrade a group tour to a private tour?', a: 'Yes. Most routes can be run privately for your party. Ask us for a private quote and we will compare the two options for you.' },
  { q: 'What accommodation is used on multi-day group safaris?', a: 'Multi-day packages list their accommodation categories — Economy, Comfort, Luxury or Superior Luxury — on each package page.' },
  { q: 'How do I pay for a group tour?', a: 'A 40% deposit confirms your seat, with the balance due 60 days before departure. Bookings within 60 days of travel are paid in full. See our booking terms.' },
  { q: 'Are prices per person?', a: 'Group joining prices are shown per person as a starting rate. The exact price depends on season and accommodation and is listed on each package page.' },
  { q: 'How fast will you respond to a group tour inquiry?', a: 'We reply within 24 hours; public holidays may take a little longer. For Nairobi National Park and day trips, WhatsApp +254 723 951 388 for immediate help.' },
];

export default function Page() {
  const nbo = groupNairobiTours().map(toCard);
  const coast = groupCoastTours().map(toCard);
  const hero = nbo.find((t) => t.slug === '3-day-endless-mara-group-safari')?.image || nbo[0]?.image || coast[0].image;
  return (
    <TourStyleHub
      eyebrow="Group Joining Tours" canonical={canonical}
      h1="Group Joining Safaris & Budget Group Tours in Kenya"
      heroImage={hero} heroAlt="Group joining safari vehicle on a Kenya game drive"
      lead="Share the vehicle, share the cost, share the adventure. Affordable group safaris from Nairobi and the Kenya coast, ideal for solo travellers, couples and friends."
      trust={['Shared Vehicle · Lower Cost', 'Window Seat for Every Guest', '24-Hour Reply · WhatsApp Instant', '40% Deposit Confirms']}
      intro={[
        'Group joining safaris are the most budget-friendly way to experience Kenya\'s wildlife. You travel with other guests in a shared safari vehicle, following a set itinerary with an experienced driver-guide, and the cost of the vehicle and guide is shared across the group.',
        'Below you will find every C.A.T.S group tour, grouped by where it starts: Nairobi or the Kenya coast (Diani and Mombasa). Prefer your own vehicle and flexible timings? See our private tours.',
      ]}
      sections={[
        { id: 'from-nairobi', title: 'Group Tours from Nairobi', intro: 'Shared Nairobi National Park game drives and Masai Mara and Rift Valley group safaris starting in Nairobi.', tours: nbo },
        { id: 'from-coast', title: 'Group Tours from Diani & Mombasa', intro: 'Shared safaris from the coast to Shimba Hills, Tsavo East, Tsavo West, Amboseli and the Masai Mara.', tours: coast },
      ]}
      faqs={faqs}
      related={[
        { label: 'Private Tours', href: '/private-tours' },
        { label: 'Festive Season Safaris', href: '/festive-season-safaris' },
        { label: 'Group Tours from Nairobi', href: '/kenya-safaris/group-tours-nairobi' },
        { label: 'Group Tours from Kenya Beach', href: '/kenya-safaris/group-tours-beach' },
        { label: 'Nairobi Excursions & Day Trips', href: '/nairobi-excursions-day-trips' },
        { label: 'All Kenya Safaris', href: '/kenya-safaris' },
      ]}
      ctaLine="Join a Group Safari in Kenya"
    />
  );
}
