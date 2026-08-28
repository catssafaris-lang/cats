'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Plane, Clock, CreditCard, Shield, MapPin, Mail, Phone, Globe, ExternalLink, Users, Calendar, ChevronDown, Send, CheckCircle, HelpCircle } from 'lucide-react';
import { useQuoteModal } from '@/context/QuoteModalContext';
import { getIKUrl } from '@/lib/imagekit';

const popularRoutes = [
    {
        city: 'Nairobi',
        country: 'Kenya',
        code: 'NBO',
        airport: 'Jomo Kenyatta International (NBO)',
        description: 'Nairobi is the undisputed gateway to Kenya safaris, connecting travelers directly to the Masai Mara, Amboseli, and Tsavo national parks. Cheap flights to Nairobi land at JKIA, East Africa\'s busiest hub, with onward bush flights to every major reserve. Direct flights to Nairobi are offered by Kenya Airways, Ethiopian Airlines, Qatar Airways, and KLM from most world capitals.',
        bestTime: 'June – October & Jan – Feb',
        airlines: 'Kenya Airways, Ethiopian Airlines, Qatar Airways, KLM, Emirates',
        startingFrom: '$650',
        image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    {
        city: 'Mombasa',
        country: 'Kenya',
        code: 'MBA',
        airport: 'Moi International (MBA)',
        description: 'International flights to Mombasa deliver you straight to Kenya\'s idyllic coastline — Diani Beach, coral reefs, and the historic Fort Jesus. Combine a beach holiday with a Tsavo safari for the classic bush-to-beach itinerary. Affordable connections run via Nairobi, Dubai, and Doha for travelers seeking cheap flights to Kenya\'s coast.',
        bestTime: 'Dec – March & July – Sept',
        airlines: 'Kenya Airways, Qatar Airways, flydubai, Ethiopian Airlines',
        startingFrom: '$700',
        image: 'https://images.pexels.com/photos/16444267/pexels-photo-16444267.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    {
        city: 'Kilimanjaro',
        country: 'Tanzania',
        code: 'JRO',
        airport: 'Kilimanjaro International (JRO)',
        description: 'Cheap flights to Kilimanjaro put you at the foot of Africa\'s highest peak, minutes from Arusha and the launchpad for Serengeti and Ngorongoro Crater safaris. KLM operates the only direct flight from Europe, while Ethiopian, Kenya Airways, and Qatar Airways route seamlessly through their hub cities for excellent fares.',
        bestTime: 'June – October (dry season)',
        airlines: 'KLM (direct), Ethiopian Airlines, Kenya Airways, Qatar Airways',
        startingFrom: '$780',
        image: getIKUrl('elephant-bull-front-of-kilimanjaro-amboseli.jpg'),
    },
    {
        city: 'Zanzibar',
        country: 'Tanzania',
        code: 'ZNZ',
        airport: 'Abeid Amani Karume International (ZNZ)',
        description: 'Flights to Zanzibar from major cities worldwide land you on this spice island paradise of powder-white beaches, Stone Town\'s winding alleys, and dhow sunset cruises. Zanzibar pairs perfectly as a post-safari beach extension after a Serengeti migration safari, with frequent connections from Dar es Salaam, Nairobi, and the Gulf hubs.',
        bestTime: 'June – October & Dec – Feb',
        airlines: 'Qatar Airways, Turkish Airlines, Kenya Airways, Ethiopian Airlines',
        startingFrom: '$720',
        image: 'https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    {
        city: 'Dar es Salaam',
        country: 'Tanzania',
        code: 'DAR',
        airport: 'Julius Nyerere International (DAR)',
        description: 'Affordable flights to Tanzania through Dar es Salaam open the door to the wild, uncrowded southern safari circuit — Nyerere (Selous), Ruaha, and Mikumi national parks. As Tanzania\'s commercial capital, DAR offers strong international connectivity and easy onward links to Zanzibar and the northern parks.',
        bestTime: 'June – October (dry season)',
        airlines: 'Ethiopian Airlines, Kenya Airways, Turkish Airlines, Qatar Airways',
        startingFrom: '$740',
        image: 'https://images.pexels.com/photos/30282791/pexels-photo-30282791.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    {
        city: 'Entebbe',
        country: 'Uganda',
        code: 'EBB',
        airport: 'Entebbe International (EBB)',
        description: 'Flights to Entebbe Uganda are the essential first step for gorilla trekking Uganda adventures in Bwindi Impenetrable Forest, plus Queen Elizabeth and Murchison Falls national parks. Qatar Airways, Ethiopian Airlines, and KLM offer well-timed connections into Entebbe on the shores of Lake Victoria.',
        bestTime: 'June – Aug & Dec – Feb',
        airlines: 'Qatar Airways, Ethiopian Airlines, KLM, Kenya Airways, Turkish Airlines',
        startingFrom: '$760',
        image: 'https://images.pexels.com/photos/29891537/pexels-photo-29891537.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    {
        city: 'Kigali',
        country: 'Rwanda',
        code: 'KGL',
        airport: 'Kigali International (KGL)',
        description: 'Fly into Kigali for premium gorilla trekking in Volcanoes National Park and big-game safaris in Akagera. Rwanda\'s spotlessly clean, walkable capital has become a major East African aviation hub thanks to RwandAir\'s growing global network, complemented by Qatar Airways and Ethiopian Airlines connections.',
        bestTime: 'June – Sept & Dec – Feb',
        airlines: 'RwandAir, Qatar Airways, Ethiopian Airlines, Kenya Airways',
        startingFrom: '$790',
        image: 'https://images.pexels.com/photos/6876743/pexels-photo-6876743.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    {
        city: 'Addis Ababa',
        country: 'Ethiopia',
        code: 'ADD',
        airport: 'Bole International (ADD)',
        description: 'Addis Ababa is East Africa\'s largest aviation hub and home base of Ethiopian Airlines, the region\'s largest carrier. Most cheap flights to East Africa from the Americas, Europe, and Asia connect here, making Addis a smart stopover for travelers hunting for last minute flights to Africa at the best possible fares.',
        bestTime: 'Year-round mild climate',
        airlines: 'Ethiopian Airlines (hub carrier), United, Lufthansa codeshares',
        startingFrom: '$600',
        image: 'https://images.pexels.com/photos/33721957/pexels-photo-33721957.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
    {
        city: 'Doha',
        country: 'Qatar',
        code: 'DOH',
        airport: 'Hamad International (DOH)',
        description: 'Doha is one of the best connection hubs for booking flights to Africa, with Qatar Airways operating an extensive network of daily flights to Nairobi, Kilimanjaro, Zanzibar, Entebbe, and Dar es Salaam. Hamad International\'s five-star transit facilities make Doha a favorite stopover for premium and business class safari travelers.',
        bestTime: 'Year-round hub connectivity',
        airlines: 'Qatar Airways (hub carrier)',
        startingFrom: '$680',
        image: 'https://images.pexels.com/photos/30554238/pexels-photo-30554238.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    },
];

const kenyaFlights = [
    {
        route: 'Nairobi → Masai Mara',
        duration: '45 min',
        airstrip: 'Ol Kiombo / Keekorok / Mara Serena',
        description: 'Skip the 6-hour drive and fly directly to the heart of the Great Migration.',
    },
    {
        route: 'Nairobi → Amboseli',
        duration: '35 min',
        airstrip: 'Amboseli Airstrip',
        description: 'Arrive with stunning aerial views of Mount Kilimanjaro and elephant herds below.',
    },
    {
        route: 'Nairobi → Samburu',
        duration: '1 hr',
        airstrip: 'Samburu / Buffalo Springs Airstrip',
        description: 'Access Kenya\'s northern frontier — home to rare Samburu Special Five wildlife.',
    },
    {
        route: 'Nairobi → Lewa Conservancy',
        duration: '50 min',
        airstrip: 'Lewa Downs Airstrip',
        description: 'Fly to one of Africa\'s most successful rhino sanctuaries in the Laikipia Plateau.',
    },
    {
        route: 'Nairobi → Tsavo',
        duration: '50 min',
        airstrip: 'Tsavo East / Tsavo West Airstrip',
        description: 'Reach Kenya\'s largest national park — famous for red elephants and the Maneaters.',
    },
    {
        route: 'Nairobi → Lamu',
        duration: '1 hr 30 min',
        airstrip: 'Manda Island Airport',
        description: 'Reach the UNESCO World Heritage Swahili island on the Kenyan coast.',
    },
    {
        route: 'Nairobi → Diani Beach',
        duration: '1 hr',
        airstrip: 'Ukunda Airstrip',
        description: 'Fly to Kenya\'s premier beach destination — voted Africa\'s leading beach multiple times.',
    },
    {
        route: 'Nairobi → Mombasa',
        duration: '1 hr 10 min',
        airstrip: 'Moi International Airport (MBA)',
        description: 'Fly to the coast for beach holidays, marine adventures, and Fort Jesus history.',
    },
    {
        route: 'Nairobi → Nanyuki / Mt Kenya',
        duration: '40 min',
        airstrip: 'Nanyuki Airstrip',
        description: 'Gateway to Mount Kenya, Ol Pejeta Conservancy, and the Laikipia wilderness.',
    },
    {
        route: 'Nairobi → Lake Naivasha',
        duration: '25 min',
        airstrip: 'Naivasha Airstrip',
        description: 'Quick hop to the Great Rift Valley — flamingos, boat rides, and Hell\'s Gate.',
    },
    {
        route: 'Nairobi → Malindi',
        duration: '1 hr 20 min',
        airstrip: 'Malindi Airport',
        description: 'Reach Malindi Marine Park, Watamu, and the Gede Ruins on the north coast.',
    },
    {
        route: 'Mombasa → Masai Mara',
        duration: '1 hr 30 min',
        airstrip: 'Ol Kiombo / Keekorok',
        description: 'Combine your beach holiday with the ultimate safari experience — coast to bush.',
    },
];

const tanzaniaFlights = [
    {
        route: 'Arusha → Serengeti',
        duration: '1 hr 30 min',
        airstrip: 'Seronera / Kogatende / Lobo / Grumeti',
        description: 'Fly over the Ngorongoro Crater rim into the endless Serengeti plains.',
    },
    {
        route: 'Arusha → Tarangire',
        duration: '40 min',
        airstrip: 'Kuro Airstrip',
        description: 'Reach the park of giant baobabs and the largest elephant herds in Tanzania.',
    },
    {
        route: 'Arusha → Lake Manyara',
        duration: '30 min',
        airstrip: 'Lake Manyara Airstrip',
        description: 'Gateway to tree-climbing lions and the Ngorongoro Conservation Area.',
    },
    {
        route: 'Dar es Salaam → Nyerere (Selous)',
        duration: '45 min',
        airstrip: 'Nyerere / Selous Airstrips',
        description: 'Access Africa\'s largest game reserve — wild dogs, boat safaris, and untouched bush.',
    },
    {
        route: 'Dar es Salaam → Ruaha',
        duration: '1 hr 30 min',
        airstrip: 'Msembe Airstrip',
        description: 'Tanzania\'s hidden gem — massive lion prides, wild dogs, and zero crowds.',
    },
    {
        route: 'Arusha → Katavi',
        duration: '2 hr 30 min',
        airstrip: 'Katavi Airstrip',
        description: 'Reach one of Africa\'s most remote and untouched wilderness areas.',
    },
    {
        route: 'Serengeti → Zanzibar',
        duration: '2 hr',
        airstrip: 'Abeid Amani Karume (ZNZ)',
        description: 'The classic combo — from the Serengeti plains straight to Zanzibar beaches.',
    },
    {
        route: 'Dar es Salaam → Mafia Island',
        duration: '30 min',
        airstrip: 'Mafia Airport',
        description: 'Pristine coral reefs, whale sharks, and untouched tropical island paradise.',
    },
];

const flightTips = [
    {
        icon: Clock,
        title: 'Best Time to Book',
        description: 'Book 3-6 months in advance for the best fares on cheap flights to Kenya and Tanzania. Peak safari season (July-October) fills up fast, so plan early for the Great Migration and secure Nairobi flight deals before prices climb.',
    },
    {
        icon: Plane,
        title: 'Best Airlines to East Africa',
        description: 'Kenya Airways, Ethiopian Airlines, Qatar Airways, Emirates, KLM, and Turkish Airlines all offer excellent connections. Ethiopian Airlines flights via Addis Ababa and Kenya Airways deals via Nairobi are consistently among the most affordable options for booking flights to Africa.',
    },
    {
        icon: Shield,
        title: 'Visa & Health Requirements',
        description: 'Most nationalities need an e-visa or East Africa Tourist Visa for Kenya, Tanzania, Uganda, and Rwanda. A Yellow Fever vaccination certificate is required if transiting through an endemic country — we help guide you through every step.',
    },
    {
        icon: CreditCard,
        title: 'Currency & Payment Tips',
        description: 'US Dollars (post-2013, no marks/tears) are widely accepted for park fees and flights, alongside Kenyan Shillings and Tanzanian Shillings. Carry a mix of cash and cards, and notify your bank before departure to avoid transaction blocks.',
    },
    {
        icon: Users,
        title: 'Bush Flight Baggage Rules',
        description: 'Small aircraft to bush airstrips enforce strict limits — typically 15kg per person in soft-sided duffel bags only (no hard-shell suitcases). Pack light, layered clothing; we advise every guest booking domestic safari flights on exact allowances.',
    },
    {
        icon: Globe,
        title: 'Best Connection Hubs',
        description: 'Addis Ababa, Dubai, Doha, Istanbul, and Amsterdam are the top connection hubs for flights to East Africa, each offering short layovers and onward same-day connections to Nairobi, Kilimanjaro, Zanzibar, and Entebbe.',
    },
    {
        icon: Calendar,
        title: 'Budget & Timing Tips',
        description: 'Flying mid-week (Tuesday–Thursday) typically yields cheaper fares than weekend departures. Connecting flights via Addis Ababa or Doha are often more affordable than direct routes — ideal for travelers seeking last minute flights to Africa.',
    },
    {
        icon: MapPin,
        title: 'Airport Transfers & Coordination',
        description: 'We coordinate every arrival and departure with your safari schedule, arranging private airport transfers so your international flight, domestic bush flight, and lodge transport connect seamlessly — no waiting, no missed connections.',
    },
];

// All destinations with airstrips for the booking form
const flightDestinations = [
    { group: 'Kenya', destinations: [
        'Masai Mara National Reserve',
        'Amboseli National Park',
        'Samburu National Reserve',
        'Lewa Conservancy',
        'Tsavo East National Park',
        'Tsavo West National Park',
        'Lamu Island',
        'Diani Beach (Ukunda)',
        'Mombasa',
        'Nanyuki / Mt Kenya',
        'Lake Naivasha',
        'Malindi / Watamu',
        'Ol Pejeta Conservancy',
        'Meru National Park',
    ]},
    { group: 'Tanzania', destinations: [
        'Serengeti National Park',
        'Tarangire National Park',
        'Lake Manyara National Park',
        'Ngorongoro Conservation Area',
        'Nyerere (Selous) Game Reserve',
        'Ruaha National Park',
        'Katavi National Park',
        'Zanzibar',
        'Mafia Island',
        'Arusha',
    ]},
    { group: 'Uganda', destinations: [
        'Bwindi Impenetrable Forest (Gorillas)',
        'Queen Elizabeth National Park',
        'Murchison Falls National Park',
        'Entebbe',
    ]},
    { group: 'Rwanda', destinations: [
        'Volcanoes National Park (Gorillas)',
        'Akagera National Park',
        'Kigali',
    ]},
];

export default function FlightsPageClient() {
    const { openModal } = useQuoteModal();
return (
        <div>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/categories/flight-safaris.jpg"
                        alt="Bush plane on an African safari airstrip"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-48 pb-24">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-white/20 text-white backdrop-blur-sm">
                        <Plane size={16} />
                        Flight Booking
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair, serif)' }}>
                        Cheap Flights to East Africa — Nairobi, Kilimanjaro & Zanzibar
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
                        Search cheap flights to Kenya, Tanzania, Uganda & Rwanda, or book safari flights on domestic bush planes and charter aircraft to every national park with an airstrip
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/flight-search"
                            className="bg-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                            style={{ color: '#5c4d42' }}
                        >
                            <Globe size={20} />
                            Search International Flights
                        </a>
                        <Link
                            href="/domestic-flights"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            <Plane size={20} />
                            Book a Bush Flight
                        </Link>
                    </div>
                </div>
            </section>


            
            {/* Kenya Domestic / Bush Flights */}
            <section className="py-16 md:py-20" style={{ backgroundColor: '#f7f4ed' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#e8ebe9', color: '#4f5d56' }}>
                            Kenya Domestic Flights
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4f5d56', fontFamily: 'var(--font-playfair, serif)' }}>
                            Kenya Bush & Domestic Flights — Fly to Masai Mara & Beyond
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
                            Skip the long drives — fly to Masai Mara, Amboseli, and Kenya&apos;s national parks, reserves, and coastal
                            destinations in under an hour. Scheduled and charter bush flights depart daily from Wilson Airport, Nairobi,
                            connecting seamlessly with your safari flights Kenya Tanzania itinerary.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {kenyaFlights.map((flight) => (
                            <div
                                key={flight.route}
                                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f0ebe0' }}>
                                        <Plane size={18} style={{ color: '#a68b52' }} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold" style={{ color: '#4f5d56' }}>{flight.route}</h3>
                                        <span className="text-xs font-medium" style={{ color: '#a68b52' }}>~{flight.duration}</span>
                                    </div>
                                </div>
                                <p className="text-xs font-medium mb-1" style={{ color: '#9ca3af' }}>{flight.airstrip}</p>
                                <p className="text-sm" style={{ color: '#6b7280' }}>{flight.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/domestic-flights"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: '#a68b52' }}
                        >
                            Request a Kenya Flight Quote
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Tanzania & East Africa Flights */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#e8ebe9', color: '#4f5d56' }}>
                            Tanzania & East Africa
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4f5d56', fontFamily: 'var(--font-playfair, serif)' }}>
                            Tanzania Bush & Safari Flights — Serengeti to Zanzibar
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
                            Fly between Tanzania&apos;s legendary national parks — from the Serengeti plains to the beaches of Zanzibar.
                            Affordable flights to Tanzania and bush flight connections link all major safari circuits, so you spend more
                            time on safari and less time on the road.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tanzaniaFlights.map((flight) => (
                            <div
                                key={flight.route}
                                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#f0ebe0' }}>
                                        <Plane size={18} style={{ color: '#a68b52' }} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sm" style={{ color: '#4f5d56' }}>{flight.route}</h3>
                                        <span className="text-xs font-medium" style={{ color: '#a68b52' }}>~{flight.duration}</span>
                                    </div>
                                </div>
                                <p className="text-xs font-medium mb-1" style={{ color: '#9ca3af' }}>{flight.airstrip}</p>
                                <p className="text-xs" style={{ color: '#6b7280' }}>{flight.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link
                            href="/domestic-flights"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: '#a68b52' }}
                        >
                            Request a Tanzania Flight Quote
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Popular International Destinations */}
            <section className="py-16 md:py-20" style={{ backgroundColor: '#f7f4ed' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#e8ebe9', color: '#4f5d56' }}>
                            International Gateways
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4f5d56', fontFamily: 'var(--font-playfair, serif)' }}>
                            Popular International Flight Destinations to East Africa
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto" style={{ color: '#6b7280' }}>
                            From cheap flights to Nairobi and Kilimanjaro to direct connections into Zanzibar, Entebbe, and Kigali —
                            explore the nine airports that connect travelers worldwide to East Africa&apos;s iconic wildlife, mountains,
                            and beaches. Every route below is served by internationally recognized airlines with excellent safety
                            records and safari-friendly baggage policies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularRoutes.map((route) => (
                            <div
                                key={route.city}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={route.image}
                                        alt={`Flights to ${route.city}, ${route.country}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    <span
                                        className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold tracking-wide text-white shadow-md"
                                        style={{ backgroundColor: '#c9861a' }}
                                    >
                                        {route.code}
                                    </span>
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair, serif)' }}>
                                            {route.city}, {route.country}
                                        </h3>
                                        <p className="text-sm text-white/80 flex items-center gap-1">
                                            <MapPin size={12} />
                                            {route.airport}
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-1">
                                    <p className="text-sm leading-relaxed mb-4" style={{ color: '#6b7280' }}>
                                        {route.description}
                                    </p>
                                    <div className="grid grid-cols-1 gap-2 mb-4 mt-auto">
                                        <div className="flex items-start gap-2 text-xs">
                                            <Calendar size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#a68b52' }} />
                                            <span style={{ color: '#4f5d56' }}><strong>Best Season:</strong> {route.bestTime}</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-xs">
                                            <Plane size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#a68b52' }} />
                                            <span style={{ color: '#4f5d56' }}><strong>Key Airlines:</strong> {route.airlines}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#e8e3d9' }}>
                                        <div>
                                            <p className="text-xs" style={{ color: '#9ca3af' }}>Starting from</p>
                                            <p className="text-lg font-bold" style={{ color: '#1a3d2b' }}>{route.startingFrom}</p>
                                        </div>
                                        <a
                                            href="/flight-search"
                                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                                            style={{ backgroundColor: '#1a3d2b' }}
                                        >
                                            Search Flights
                                            <ArrowRight size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Search flights CTA */}
                    <div className="text-center mt-10">
                        <a
                            href="/flight-search"
                            
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-lg text-white transition-opacity hover:opacity-90"
                            style={{ backgroundColor: '#1a3d2b' }}
                        >
                            <Globe size={20} />
                            Search & Compare International Flights
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </section>

            {/* Flight Tips */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#e8ebe9', color: '#4f5d56' }}>
                            Travel Tips
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#4f5d56', fontFamily: 'var(--font-playfair, serif)' }}>
                            Expert Tips for Flying to East Africa
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#6b7280' }}>
                            Everything you need to know to find cheap flights to safari destinations and travel like a seasoned expert —
                            from baggage rules to visas, connection hubs, and airport transfers
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {flightTips.map((tip) => (
                            <div
                                key={tip.title}
                                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                            >
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#f0ebe0' }}>
                                    <tip.icon size={24} style={{ color: '#a68b52' }} />
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{ color: '#4f5d56', fontFamily: 'var(--font-playfair, serif)' }}>
                                    {tip.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#6b7280' }}>
                                    {tip.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            
            {/* FAQ Section */}
            <section className="py-16 md:py-20" style={{ backgroundColor: '#f7f4ed' }}>
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: '#a68b52', color: 'white' }}>
                            <HelpCircle size={16} />
                            Frequently Asked Questions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#4f5d56', fontFamily: 'var(--font-playfair, serif)' }}>
                            Everything You Need to Know About Flights to Africa
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                q: 'What is the cheapest time to fly to East Africa?',
                                a: 'The most affordable fares to Nairobi, Kilimanjaro, and Entebbe are typically found during the low season (April to mid-June and November). Booking 8 to 12 weeks in advance and flying midweek can save 20 to 40 percent compared to peak-season pricing. Use our international flight search to compare over 700 airlines in real time.',
                            },
                            {
                                q: 'What is the baggage allowance on bush flights?',
                                a: 'Most bush-plane operators in Kenya and Tanzania allow 15 kg per person in soft-sided bags (no hard suitcases or wheels). Dimensions must not exceed 62 cm x 36 cm x 24 cm. Excess luggage can be stored at your Nairobi or Arusha hotel. We recommend packing light and wearing neutral safari colours on board.',
                            },
                            {
                                q: 'How do I get from Nairobi airport to Wilson Airport for a bush flight?',
                                a: 'Jomo Kenyatta International Airport (JKIA) is roughly 15 km from Wilson Airport. A pre-arranged transfer takes 30 to 45 minutes depending on traffic. We coordinate all airport-to-airport transfers as part of your safari package so you never need to navigate Nairobi independently.',
                            },
                            {
                                q: 'Do you book the flights directly or through partners?',
                                a: 'For international flights, we connect you with a global search engine comparing fares across 700-plus airlines. For domestic bush flights, our team books directly with licensed East African carriers such as SafariLink, AirKenya, Coastal Aviation, and Auric Air. Either way, your booking is handled by the airline — we coordinate logistics and ensure seamless safari connections.',
                            },
                            {
                                q: 'Can I fly directly from the Serengeti to Zanzibar?',
                                a: 'Yes. Coastal Aviation and Regional Air operate daily connections from Serengeti airstrips (Seronera, Grumeti, Kogatende) to Zanzibar, often via Arusha. Flight time is approximately 2.5 to 3 hours with a short stop. This is the most popular bush flight route for clients combining a Serengeti safari with a beach extension.',
                            },
                            {
                                q: 'What airlines fly to Nairobi from Europe and North America?',
                                a: 'Direct services to Nairobi (JKIA) include Kenya Airways from London, Amsterdam, and Paris; British Airways from London Heathrow; and KLM from Amsterdam. From North America, Kenya Airways flies nonstop from New York JFK. One-stop options via the Gulf (Emirates, Qatar Airways, Etihad) or via Addis Ababa (Ethiopian Airlines) are often the most affordable.',
                            },
                            {
                                q: 'Is it safe to fly on bush planes in Africa?',
                                a: 'Absolutely. Licensed bush operators like SafariLink, AirKenya, and Coastal Aviation maintain rigorous safety standards and are regulated by their respective national civil aviation authorities. Aircraft are typically Cessna Caravans or de Havilland Twin Otters — proven workhorses of the safari industry for decades.',
                            },
                            {
                                q: 'How far in advance should I book safari flights?',
                                a: 'For peak season (July to October in Kenya and Tanzania, June to September in Uganda and Rwanda), we recommend booking 3 to 6 months ahead. Bush flight seats are limited to 8 to 14 passengers per aircraft, and popular routes like Nairobi to Masai Mara sell out quickly during the Great Migration season.',
                            },
                        ].map((faq, i) => (
                            <details key={i} className="bg-white rounded-lg shadow-sm border" style={{ borderColor: '#e8e3d9' }}>
                                <summary className="px-6 py-4 cursor-pointer font-semibold hover:bg-gray-50 transition-colors" style={{ color: '#4f5d56', fontFamily: 'var(--font-playfair, serif)' }}>
                                    {faq.q}
                                </summary>
                                <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20" style={{ background: 'linear-gradient(135deg, #a68b52 0%, #8a7245 100%)' }}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair, serif)' }}>
                        Need Help Planning Your Trip?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Let our safari experts help you coordinate flights with your safari itinerary.
                        We&apos;ll create a seamless travel experience from takeoff to your first game drive.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/domestic-flights"
                            className="bg-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
                            style={{ color: '#5c4d42' }}
                        >
                            Get a Free Flight Quote
                            <ArrowRight size={20} />
                        </Link>
                        <Link
                            href="/safaris"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                        >
                            Browse Safari Packages
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
