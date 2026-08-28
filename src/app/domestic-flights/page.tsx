'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Plane, Clock, MapPin, Mail, Shield, Compass, ChevronDown, Send, Users, Calendar, CreditCard,
} from 'lucide-react';



const fromAirports = [
    'Wilson Airport, Nairobi (Kenya)',
    'Jomo Kenyatta International, Nairobi (Kenya)',
    'Arusha Airport, Arusha (Tanzania)',
    'Kilimanjaro International (Tanzania)',
    'Dar es Salaam, Julius Nyerere (Tanzania)',
    'Entebbe International (Uganda)',
    'Kigali International (Rwanda)',
];

const toAirstrips = [
    'Masai Mara — Keekorok',
    'Masai Mara — Musiara',
    'Masai Mara — Ol Kiombo',
    'Masai Mara — Angama',
    'Masai Mara — Mara Serena',
    'Masai Mara — Mara North',
    'Amboseli Airstrip',
    'Samburu / Buffalo Springs Airstrip',
    'Lewa Downs Airstrip',
    'Nanyuki Airfield',
    'Lamu (Manda Airport)',
    'Diani (Ukunda Airstrip)',
    'Malindi Airport',
    'Ol Pejeta Airstrip',
    'Serengeti — Seronera',
    'Serengeti — Kogatende',
    'Serengeti — Lamai',
    'Serengeti — Fort Ikoma',
    'Serengeti — Grumeti',
    'Serengeti — Lobo',
    'Serengeti — Ndutu',
    'Serengeti — Kusini',
    'Lake Manyara Airstrip',
    'Zanzibar (ZNZ)',
    'Selous/Nyerere — Mtemere Airstrip',
    'Ruaha — Msembe / Jongomero',
    'Katavi — Ikuu Airstrip',
    'Mahale Airstrip',
    'Rubondo Island Airstrip',
    'Kasese Airstrip (Queen Elizabeth NP)',
    'Pakuba Airstrip (Murchison Falls NP)',
    'Bugungu Airstrip (Murchison Falls NP)',
    'Kidepo Valley Airstrip',
    'Kisoro Airstrip (near Bwindi)',
    'Kamembe Airport (near Nyungwe)',
];

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

const preferredAirlines = [
    'No preference',
    'SafariLink Aviation',
    'AirKenya',
    'Fly540',
    'Coastal Aviation',
    'Regional Air',
    'Auric Air',
    'AeroLink Uganda',
];

const airlines = [
    {
        name: 'SafariLink Aviation',
        hub: 'Wilson Airport (NBO), Kenya',
        routes: 'Masai Mara (Keekorok, Musiara, Ol Kiombo, Angama), Amboseli, Lamu, Diani, Nanyuki, Samburu, Lewa',
    },
    {
        name: 'AirKenya',
        hub: 'Wilson Airport (NBO), Kenya',
        routes: 'Masai Mara, Amboseli, Lamu, Nanyuki, Samburu, Lewa, Diani',
    },
    {
        name: 'Fly540',
        hub: 'Nairobi, Kenya',
        routes: 'Nairobi to Mombasa, Malindi, Lamu, Kisumu, Eldoret',
    },
    {
        name: 'Coastal Aviation',
        hub: 'Arusha, Tanzania',
        routes: 'Arusha to Serengeti (multiple strips), Zanzibar, Selous/Nyerere, Ruaha, Katavi, Mahale',
    },
    {
        name: 'Regional Air',
        hub: 'Arusha, Tanzania',
        routes: 'Arusha, Serengeti, Lake Manyara, Zanzibar, Dar es Salaam',
    },
    {
        name: 'Auric Air',
        hub: 'Dar es Salaam / Arusha, Tanzania',
        routes: 'Dar es Salaam, Arusha, Serengeti, Rubondo, Kigoma, Bukoba',
    },
    {
        name: 'AeroLink Uganda',
        hub: 'Entebbe, Uganda',
        routes: 'Entebbe to Bwindi, Queen Elizabeth NP (Kasese), Murchison Falls (Pakuba/Bugungu), Kidepo Valley',
    },
];

const airstripDirectory = [
    {
        country: 'Kenya',
        strips: [
            'Wilson Airport (HKNW) — Nairobi, hub for all bush flights',
            'Masai Mara — Keekorok',
            'Masai Mara — Musiara',
            'Masai Mara — Ol Kiombo',
            'Masai Mara — Angama',
            'Masai Mara — Mara Serena',
            'Masai Mara — Mara North',
            'Amboseli Airstrip',
            'Samburu / Buffalo Springs Airstrip',
            'Lewa Downs Airstrip',
            'Nanyuki Airfield',
            'Lamu (Manda Airport)',
            'Diani (Ukunda Airstrip)',
            'Malindi Airport',
            'Ol Pejeta Airstrip',
        ],
    },
    {
        country: 'Tanzania',
        strips: [
            'Arusha Airport (ARK) — gateway to Northern Circuit',
            'Serengeti — Seronera',
            'Serengeti — Kogatende',
            'Serengeti — Lamai',
            'Serengeti — Fort Ikoma',
            'Serengeti — Grumeti',
            'Serengeti — Lobo',
            'Serengeti — Ndutu',
            'Serengeti — Kusini',
            'Lake Manyara Airstrip',
            'Zanzibar (ZNZ)',
            'Selous/Nyerere — Mtemere Airstrip',
            'Ruaha — Msembe Airstrip / Jongomero',
            'Katavi — Ikuu Airstrip',
            'Mahale Airstrip',
            'Rubondo Island Airstrip',
        ],
    },
    {
        country: 'Uganda',
        strips: [
            'Entebbe International (EBB)',
            'Kasese Airstrip (Queen Elizabeth NP)',
            'Pakuba Airstrip (Murchison Falls NP)',
            'Bugungu Airstrip (Murchison Falls NP)',
            'Kidepo Valley Airstrip',
            'Kisoro Airstrip (near Bwindi)',
        ],
    },
    {
        country: 'Rwanda',
        strips: [
            'Kigali International (KGL)',
            'Kamembe Airport (near Nyungwe)',
        ],
    },
];


const destinations = [
    {
        name: 'Masai Mara',
        info: 'July-October wildebeest migration, year-round big cat sightings',
        image: 'https://ik.imagekit.io/axd1riwnv/3days-maasai-mara-luxury-safari.jpg',
    },
    {
        name: 'Serengeti',
        info: 'Great Migration, vast endless plains',
        image: 'https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg',
    },
    {
        name: 'Amboseli',
        info: 'Kilimanjaro views, large elephant herds',
        image: 'https://ik.imagekit.io/axd1riwnv/elephant-bull-front-of-kilimanjaro-amboseli.jpg',
    },
    {
        name: 'Samburu',
        info: "Unique northern species — Grevy's zebra, gerenuk, reticulated giraffe",
        image: 'https://ik.imagekit.io/axd1riwnv/Samburu-National-Park.jpg',
    },
    {
        name: 'Lamu',
        info: 'Swahili heritage architecture, dhow sailing',
        image: 'https://images.pexels.com/photos/15898680/pexels-photo-15898680.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        name: 'Bwindi',
        info: 'Mountain gorilla trekking in ancient rainforest',
        image: 'https://images.pexels.com/photos/38294689/pexels-photo-38294689.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
        name: 'Ruaha',
        info: 'Wild dogs, elephants, remote untouched wilderness',
        image: 'https://images.pexels.com/photos/16444279/pexels-photo-16444279.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
];

const whyFlyBush = [
    'Save 5-8 hours of driving on rough, dusty roads',
    'Arrive fresh and ready for an afternoon game drive',
    'Aerial views of the Great Rift Valley, migration herds, and volcanic landscapes',
    'Access ultra-remote camps in Katavi, Mahale, and Ruaha that are otherwise a full day\'s drive away',
];

const faqs = [
    {
        q: 'How much luggage can I bring on a bush flight?',
        a: 'Most operators enforce a strict limit of 15-20kg per person in soft-sided duffel bags only, with no hard-shell suitcases permitted due to limited cargo space on small aircraft. Weight limits and bag policies vary by airline, so always confirm with your operator before you fly.',
    },
    {
        q: 'Are bush flights safe?',
        a: 'The bush flight operators listed here are established East African carriers that fly these routes daily and maintain their own safety and maintenance standards. Each airline sets and is responsible for its own safety policies — always review the specific airline\'s information before booking.',
    },
    {
        q: 'How far in advance should I book a bush flight?',
        a: 'We recommend booking as early as possible, ideally at the same time you confirm your safari itinerary, since seat availability on small aircraft is limited, especially during peak season (July-October).',
    },
    {
        q: 'Can I combine multiple bush flights in one trip?',
        a: 'Yes. Many of our guests fly Nairobi to the Masai Mara, then on to Amboseli or the Tanzanian parks before returning to Nairobi or continuing to Zanzibar. We can help you plan a multi-stop bush flight routing.',
    },
    {
        q: 'What is the cancellation and rebooking policy for bush flights?',
        a: 'Cancellation, change, and refund policies are set entirely by each individual airline (SafariLink, AirKenya, Coastal Aviation, and others) and vary by fare type. C.A.T.S does not set or control these policies — please review the specific airline\'s terms and conditions before booking.',
    },
    {
        q: 'Do bush planes fly in bad weather?',
        a: 'Bush flight schedules can be affected by weather and are subject to each airline\'s own operational decisions. Always allow buffer time between a bush flight and an onward international connection.',
    },
    {
        q: 'Which airport do I fly from in Nairobi?',
        a: 'Nearly all bush flights out of Nairobi depart from Wilson Airport (HKNW), a smaller domestic airport separate from Jomo Kenyatta International Airport (JKIA). We can arrange your transfer between the two.',
    },
    {
        q: 'Can C.A.T.S book my bush flight for me?',
        a: 'Yes. As an affiliate travel partner, we help you compare bush flight options and routings and can submit a booking request to the airline on your behalf. Final terms, fares, and confirmations are issued directly by the airline.',
    },
];

export default function DomesticFlightsClient() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+254',
        country: '',
        flightType: 'domestic',
        from: '',
        destination: '',
        returnDestination: '',
        departureDate: '',
        returnDate: '',
        adults: '1',
        children: '0',
        infants: '0',
        travelClass: 'economy',
        airline: 'No preference',
        message: '',
    });
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const bodyLines = [
            `Flight Type: ${formData.flightType === 'charter' ? 'Private Charter' : 'Bush / Domestic Flight'}`,
            `Name: ${formData.name}`,
            `Email: ${formData.email}`,
            `Phone: ${formData.countryCode} ${formData.phone}`,
            `Country of Residence: ${formData.country}`,
            `From: ${formData.from}`,
            `To: ${formData.destination}`,
            `Return Destination: ${formData.returnDestination}`,
            `Departure Date: ${formData.departureDate}`,
            `Return Date: ${formData.returnDate}`,
            `Adults: ${formData.adults}`,
            `Children: ${formData.children}`,
            `Infants: ${formData.infants}`,
            `Travel Class: ${formData.travelClass}`,
            `Preferred Airline: ${formData.airline}`,
            `Special Requests: ${formData.message}`,
        ];

        const subject = encodeURIComponent('[Bush Flight Booking Request]');
        const body = encodeURIComponent(bodyLines.join('\n'));

        window.location.href = `mailto:info@catssafaris.com?subject=${subject}&body=${body}`;
    };

    return (
        <div className="bg-[#faf8f0] text-[#2f3b34]">
            {/* HERO */}
            <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://ik.imagekit.io/axd1riwnv/aerial-view-hemingways-watamu-malindi-and-watamu-beach-kenya.jpg"
                        alt="Small aircraft over the East African savanna"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-40 pb-20">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-white/15 text-white backdrop-blur-sm border border-white/30">
                        <Plane size={16} />
                        Bush &amp; Domestic Flights
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Bush Flights &amp; Domestic Flights Across East Africa
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                        Connect from Nairobi, Arusha, Entebbe, and Kigali directly to remote safari camps, migration
                        airstrips, and gorilla trekking bases on light aircraft operated by East Africa's leading
                        bush flight carriers.
                    </p>
                </div>
            </section>

            {/* BOOKING FORM */}
            <section className="py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-[#e7efe6] text-[#2f5233]">
                            Request a Flight
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#2f3b34]">
                            Bush Flight Booking Form
                        </h2>
                        <p className="text-lg max-w-2xl mx-auto text-[#5c6b62]">
                            Tell us your route and dates, and our team will arrange the best available bush flight
                            for you.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl shadow-lg border border-[#e3ddc9] p-8 md:p-10"
                    >
                        {/* Flight Type Toggle */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold mb-3 text-[#2f3b34]">Flight Type</label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { value: 'domestic', label: 'Bush / Domestic Flight' },
                                    { value: 'charter', label: 'Private Charter' },
                                ].map((opt) => (
                                    <button
                                        key={opt.value}
                                        type="button"
                                        onClick={() => setFormData((prev) => ({ ...prev, flightType: opt.value }))}
                                        className={`flex items-center gap-2 p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                            formData.flightType === opt.value
                                                ? 'shadow-md border-[#a68b52] bg-[#faf8f3] text-[#2f3b34]'
                                                : 'border-gray-200 hover:border-gray-300 text-[#6b7280]'
                                        }`}
                                    >
                                        <Plane size={16} />
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-[#e3ddc9] text-[#2f3b34]">
                                Contact Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Email Address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50"
                                        placeholder="your@email.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Phone Number</label>
                                    <div className="flex gap-2">
                                        <select
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                            className="w-[110px] shrink-0 px-2 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50 text-sm bg-white"
                                        >
                                            <option value="+1">US +1</option>
                                            <option value="+44">UK +44</option>
                                            <option value="+254">KE +254</option>
                                            <option value="+255">TZ +255</option>
                                            <option value="+256">UG +256</option>
                                            <option value="+250">RW +250</option>
                                            <option value="+251">ET +251</option>
                                            <option value="+27">ZA +27</option>
                                            <option value="+971">AE +971</option>
                                            <option value="+49">DE +49</option>
                                            <option value="+33">FR +33</option>
                                            <option value="+39">IT +39</option>
                                            <option value="+34">ES +34</option>
                                            <option value="+31">NL +31</option>
                                            <option value="+61">AU +61</option>
                                            <option value="+86">CN +86</option>
                                            <option value="+91">IN +91</option>
                                            <option value="+81">JP +81</option>
                                            <option value="+55">BR +55</option>
                                            <option value="+52">MX +52</option>
                                            <option value="+7">RU +7</option>
                                            <option value="+966">SA +966</option>
                                            <option value="+974">QA +974</option>
                                            <option value="+90">TR +90</option>
                                        </select>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50"
                                            placeholder="723 951 388"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Country of Residence</label>
                                    <input
                                        type="text"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50"
                                        placeholder="e.g. United States"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Flight Details */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-[#e3ddc9] text-[#2f3b34] flex items-center gap-2">
                                <Calendar size={18} className="text-[#a68b52]" />
                                Flight Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">From</label>
                                    <select
                                        name="from"
                                        value={formData.from}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50 bg-white"
                                    >
                                        <option value="">Select a departure airport</option>
                                        {fromAirports.map((a) => (
                                            <option key={a} value={a}>{a}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Flying To *</label>
                                    <select
                                        name="destination"
                                        required
                                        value={formData.destination}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50 bg-white"
                                    >
                                        <option value="">Select destination</option>
                                        {flightDestinations.map((g) => (
                                            <optgroup key={g.group} label={g.group}>
                                                {g.destinations.map((d) => (
                                                    <option key={d} value={d}>{d}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Return Destination</label>
                                    <select
                                        name="returnDestination"
                                        value={formData.returnDestination}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50 bg-white"
                                    >
                                        <option value="">Same as departure (optional)</option>
                                        {flightDestinations.map((g) => (
                                            <optgroup key={g.group} label={g.group}>
                                                {g.destinations.map((d) => (
                                                    <option key={d} value={d}>{d}</option>
                                                ))}
                                            </optgroup>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Preferred Airline</label>
                                    <select
                                        name="airline"
                                        value={formData.airline}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50 bg-white"
                                    >
                                        {preferredAirlines.map((a) => (
                                            <option key={a} value={a}>{a}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Departure Date</label>
                                    <input
                                        type="date"
                                        name="departureDate"
                                        value={formData.departureDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Return Date</label>
                                    <input
                                        type="date"
                                        name="returnDate"
                                        value={formData.returnDate}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Passengers & Class */}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold mb-4 pb-2 border-b border-[#e3ddc9] text-[#2f3b34] flex items-center gap-2">
                                <Users size={18} className="text-[#a68b52]" />
                                Passengers &amp; Class
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Adults (12+)</label>
                                    <select
                                        name="adults"
                                        value={formData.adults}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50 bg-white"
                                    >
                                        {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Children (2-11)</label>
                                    <select
                                        name="children"
                                        value={formData.children}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50 bg-white"
                                    >
                                        {Array.from({ length: 7 }, (_, i) => i).map((n) => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Infants (&lt;2)</label>
                                    <select
                                        name="infants"
                                        value={formData.infants}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50 bg-white"
                                    >
                                        {Array.from({ length: 4 }, (_, i) => i).map((n) => (
                                            <option key={n} value={n}>{n}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-[#2f3b34] flex items-center gap-1">
                                        <CreditCard size={14} className="text-[#a68b52]" />
                                        Class
                                    </label>
                                    <select
                                        name="travelClass"
                                        value={formData.travelClass}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50 bg-white"
                                    >
                                        <option value="economy">Economy</option>
                                        <option value="premium-economy">Premium Economy</option>
                                        <option value="business">Business</option>
                                        <option value="first">First Class</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Special Requests */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium mb-1 text-[#2f3b34]">Special Requests</label>
                            <textarea
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a68b52]/50"
                                placeholder="Baggage needs, connecting flights, group details, etc."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full inline-flex items-center justify-center gap-2 bg-[#2f5233] text-white font-semibold py-4 rounded-lg hover:bg-[#25401f] transition-colors"
                        >
                            <Send size={18} />
                            Send Booking Request
                        </button>
                    </form>
                </div>
            </section>

            {/* AIRLINES */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-[#faf1da] text-[#a68b52]">
                            Our Partner Carriers
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3b34]">
                            Airlines Operating Domestic &amp; Bush Flights
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {airlines.map((a) => (
                            <div key={a.name} className="border border-[#e3ddc9] rounded-xl p-6 bg-[#faf8f0]">
                                <div className="flex items-center gap-3 mb-2">
                                    <Plane size={20} className="text-[#a68b52]" />
                                    <h3 className="font-bold text-lg text-[#2f3b34]">{a.name}</h3>
                                </div>
                                <p className="text-sm font-medium text-[#5c6b62] mb-2">Hub: {a.hub}</p>
                                <p className="text-sm text-[#5c6b62]">{a.routes}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-[#8a8577] mt-8 text-center max-w-3xl mx-auto">
                        Each airline sets its own schedules, fares, and baggage and cancellation policies. C.A.T.S
                        assists with routing and booking requests but does not control airline operations or policy.
                    </p>
                </div>
            </section>

            {/* POPULAR SAFARI DESTINATIONS */}
            

            {/* AIRSTRIP DIRECTORY */}
            
      {/* Popular Safari Destinations */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-900 mb-4">Popular Safari Destinations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">Fly direct to East Africa&apos;s most spectacular wildlife destinations. From the Great Migration in the Masai Mara to mountain gorilla trekking in Bwindi, experience the best safari flights across Kenya, Tanzania, Uganda, and Rwanda.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Masai Mara', country: 'Kenya', desc: 'Witness the Great Migration, Big Five game drives, and vast savannah plains. The Mara is Africa\'s most iconic safari destination with year-round wildlife.', img: 'https://ik.imagekit.io/axd1riwnv/3days-maasai-mara-luxury-safari.jpg', airstrip: 'Keekorok / Musiara / Ol Kiombo' },
              { name: 'Amboseli', country: 'Kenya', desc: 'Spectacular views of Mount Kilimanjaro towering over vast elephant herds. Amboseli offers unmatched photography with Africa\'s highest peak as backdrop.', img: 'https://ik.imagekit.io/axd1riwnv/10-reasons-to-visit-amboseli-national-park-1.jpg', airstrip: 'Amboseli Airstrip' },
              { name: 'Serengeti', country: 'Tanzania', desc: 'Endless plains teeming with over two million wildebeest during the Great Migration. The ultimate African safari experience for wildlife enthusiasts.', img: 'https://ik.imagekit.io/axd1riwnv/Serengeti-National-Park-Western-part.jpg', airstrip: 'Seronera / Kogatende / Grumeti' },
              { name: 'Ngorongoro Crater', country: 'Tanzania', desc: 'UNESCO World Heritage Site and the world\'s largest intact volcanic caldera. Home to the densest concentration of wildlife including the rare black rhino.', img: 'https://ik.imagekit.io/axd1riwnv/Ngorongoro-crater3.jpg', airstrip: 'Lake Manyara Airstrip' },
              { name: 'Samburu', country: 'Kenya', desc: 'Rugged wilderness home to the Samburu Special Five: Grevy\'s zebra, reticulated giraffe, Somali ostrich, gerenuk, and Beisa oryx.', img: 'https://ik.imagekit.io/axd1riwnv/Samburu-National-Park.jpg', airstrip: 'Samburu Airstrip' },
              { name: 'Bwindi Impenetrable Forest', country: 'Uganda', desc: 'Trek through ancient rainforest to encounter endangered mountain gorillas in their natural habitat. An unforgettable, life-changing wildlife experience.', img: 'https://images.pexels.com/photos/38294689/pexels-photo-38294689.jpeg?auto=compress&cs=tinysrgb&w=600', airstrip: 'Kihihi Airstrip' },
              { name: 'Zanzibar', country: 'Tanzania', desc: 'Pristine white sand beaches, turquoise Indian Ocean waters, and historic Stone Town. The perfect post-safari beach extension with world-class diving.', img: 'https://images.pexels.com/photos/5582144/pexels-photo-5582144.jpeg?auto=compress&cs=tinysrgb&w=600', airstrip: 'Abeid Amani Karume International' },
              { name: 'Tsavo', country: 'Kenya', desc: 'Kenya\'s largest national park, famed for red elephants, dramatic lava flows, and the historic man-eaters. Vast wilderness with fewer crowds.', img: 'https://ik.imagekit.io/axd1riwnv/Tsavo-national-park-elephants-at-waterhole-64984306.jpg', airstrip: 'Tsavo West / Voi Airstrip' },
              { name: 'Lake Nakuru', country: 'Kenya', desc: 'Flamingo paradise and rhino sanctuary in the Great Rift Valley. Thousands of flamingos paint the shoreline pink alongside both black and white rhinos.', img: 'https://ik.imagekit.io/axd1riwnv/11-days-lake-nakuru-masai-mara.jpg', airstrip: 'Naishi Airstrip' },
              { name: 'Volcanoes National Park', country: 'Rwanda', desc: 'Rwanda\'s premier gorilla trekking destination in the Virunga Mountains. Home to golden monkeys and the legacy of Dian Fossey\'s conservation work.', img: 'https://images.pexels.com/photos/19755751/pexels-photo-19755751.jpeg?auto=compress&cs=tinysrgb&w=600', airstrip: 'Kigali International' },
              { name: 'Tarangire', country: 'Tanzania', desc: 'Ancient baobab trees and massive elephant herds along the Tarangire River. One of Tanzania\'s best-kept secrets with incredible dry season wildlife.', img: 'https://images.pexels.com/photos/33498304/pexels-photo-33498304.jpeg?auto=compress&cs=tinysrgb&w=600', airstrip: 'Tarangire Airstrip' },
              { name: 'Murchison Falls', country: 'Uganda', desc: 'The world\'s most powerful waterfall where the Nile forces through a narrow 7-metre gorge. Combine thrilling boat safaris with Big Five game drives.', img: 'https://images.pexels.com/photos/29897218/pexels-photo-29897218.jpeg?auto=compress&cs=tinysrgb&w=600', airstrip: 'Pakuba Airstrip' },
              { name: 'Ol Pejeta Conservancy', country: 'Kenya', desc: 'Home to the last two northern white rhinos on Earth and East Africa\'s largest black rhino sanctuary. A vital conservation success story.', img: 'https://ik.imagekit.io/axd1riwnv/Ol-Pejeta-Wildlife-conservancy-book-best-Africa-wildlife-safari-in-Kenya129-scaled.jpg', airstrip: 'Nanyuki Airstrip' },
              { name: 'Queen Elizabeth NP', country: 'Uganda', desc: 'Famous tree-climbing lions of Ishasha, Kazinga Channel boat cruises, and over 600 bird species. Uganda\'s most popular and diverse national park.', img: 'https://images.pexels.com/photos/4577791/pexels-photo-4577791.jpeg?auto=compress&cs=tinysrgb&w=600', airstrip: 'Kasese Airstrip' },
            ].map((dest, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-amber-100">
                <div className="relative h-48 overflow-hidden">
                  <img src={dest.img} alt={`Fly to ${dest.name} - ${dest.country} Safari Flights`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute top-3 right-3 bg-amber-800/90 text-white px-3 py-1 rounded-full text-sm font-medium">{dest.country}</div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-amber-900 mb-2">{dest.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{dest.desc}</p>
                  <p className="text-amber-700 text-xs font-medium">Nearest Airstrip: {dest.airstrip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-[#e7efe6] text-[#2f5233]">
                            Directory
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3b34]">
                            East African Airstrips Directory
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {airstripDirectory.map((c) => (
                            <div key={c.country} className="bg-white border border-[#e3ddc9] rounded-xl p-6">
                                <h3 className="font-bold text-xl mb-4 text-[#2f5233] flex items-center gap-2">
                                    <MapPin size={18} />
                                    {c.country}
                                </h3>
                                <ul className="space-y-2">
                                    {c.strips.map((s) => (
                                        <li key={s} className="text-sm text-[#5c6b62] border-b border-[#efe9d8] pb-2 last:border-0">
                                            {s}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DESTINATION GUIDES */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-[#faf1da] text-[#a68b52]">
                            Where to Fly
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3b34]">
                            Destination Guides
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((d) => (
                            <div key={d.name} className="rounded-xl overflow-hidden shadow-md border border-[#e3ddc9]">
                                <div className="relative h-52 w-full">
                                    <Image src={d.image} alt={d.name} fill className="object-cover" />
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-[#2f3b34] mb-1">{d.name}</h3>
                                    <p className="text-sm text-[#5c6b62]">{d.info}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHY FLY BUSH */}
            <section className="py-16 md:py-20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-[#e7efe6] text-[#2f5233]">
                            The Bush Flight Advantage
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3b34]">Why Fly Bush</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {whyFlyBush.map((w, i) => (
                            <div key={i} className="flex items-start gap-4 bg-white border border-[#e3ddc9] rounded-xl p-6">
                                <Compass size={22} className="text-[#a68b52] shrink-0 mt-1" />
                                <p className="text-[#2f3b34]">{w}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQS */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 bg-[#faf1da] text-[#a68b52]">
                            Questions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2f3b34]">
                            Bush Flight FAQs
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((f, i) => (
                            <div key={i} className="border border-[#e3ddc9] rounded-xl overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between text-left px-6 py-4 bg-[#faf8f0] hover:bg-[#f3ecd8] transition-colors"
                                >
                                    <span className="font-semibold text-[#2f3b34]">{f.q}</span>
                                    <ChevronDown
                                        size={18}
                                        className={`shrink-0 transition-transform text-[#a68b52] ${openFaq === i ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 py-4 text-[#5c6b62] bg-white">{f.a}</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 text-center bg-gradient-to-br from-[#2f5233] to-[#1c3320]">
                <div className="max-w-2xl mx-auto px-4">
                    <Shield size={40} className="mx-auto mb-6 text-[#e9cd82]" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Let Us Arrange Your Bush Flight
                    </h2>
                    <p className="text-lg text-white/85 mb-8">
                        With 15 years connecting travelers to Africa's wildest places, C.A.T.S will help you find
                        the right bush flight to complete your safari.
                    </p>
                    <a
                        href="mailto:info@catssafaris.com"
                        className="inline-flex items-center gap-2 bg-[#e9cd82] text-[#1c3320] font-semibold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        <Mail size={18} />
                        info@catssafaris.com
                    </a>
                </div>
            </section>
        </div>
    );
}
