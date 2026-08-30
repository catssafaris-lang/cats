'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useQuoteModal } from '@/context/QuoteModalContext';
import {
    MapPin, Mountain, Plane, Globe, Waves,
    CheckCircle2, ChevronDown, Check
} from 'lucide-react';
import Link from 'next/link';

// Data models
const certifications = [
    { name: "15 Years Safari Expertise" },
    { name: "Trusted Partner Network" },
    { name: "5-Star TripAdvisor Rated" },
    { name: "Eco-Conscious Safaris" },
    { name: "Tailored Itineraries" },
    { name: "Family & Kid Friendly" },
];

const stats = [
    { title: "15 Years", subtitle: "of East Africa expertise" },
    { title: "69+ Packages", subtitle: "from day trips to 15-day epics" },
    { title: "5 Countries", subtitle: "Kenya, Tanzania, Uganda, Rwanda, Zanzibar" },
    { title: "Big 5 Territory", subtitle: "Lions, leopards, elephants, rhinos, buffalo" },
    { title: "24/7 Support", subtitle: "From booking to goodbye — we're always here" }
];

const travelerTypes = [
    {
        title: "Solo Travelers & Backpackers",
        image: "https://ik.imagekit.io/axd1riwnv/serval-leptailurus-serval-masai-mara-kenya_53324324768_o.jpg",
        desc: "Join our affordable group joining safaris from Nairobi, or let us craft a private solo adventure through Kenya's hidden gems. You'll never feel alone."
    },
    {
        title: "Couples & Honeymooners",
        image: "https://ik.imagekit.io/axd1riwnv/1214967167-612x612.jpg",
        desc: "Imagine a private bush dinner under a canopy of stars in the Masai Mara, a hot air balloon sunrise, or a barefoot beach walk in Zanzibar."
    },
    {
        title: "Families with Children",
        image: "https://ik.imagekit.io/axd1riwnv/game-drives-at-Masai-mara.jpg",
        desc: "Shorter game drives, junior ranger experiences, family suites in wildlife lodges, and guides who know how to make a 7-year-old fall in love with elephants."
    },
    {
        title: "Friends & Groups",
        image: "https://ik.imagekit.io/axd1riwnv/Safari%20PHOTOS/WhatsApp%20Image%202026-05-31%20at%2009.19.12%20(1).jpeg",
        desc: "Affordable group joining safaris to experience the Big Five, or private group adventures with your own dedicated guide."
    },
    {
        title: "Corporate & Incentive Groups",
        image: "https://ik.imagekit.io/axd1riwnv/Safari%20PHOTOS/WhatsApp%20Image%202026-05-31%20at%2009.18.29%20(4).jpeg",
        desc: "Bespoke corporate retreats, incentive trips, and team safaris that inspire — from bush conferences to luxury lodge experiences."
    },
    {
        title: "Photographers & Creatives",
        image: "https://ik.imagekit.io/axd1riwnv/wahlbergs-eagle-hieraaetus-wahlbergi-masai-mara-kenya_53283693265_o.jpg",
        desc: "Dedicated photographic safaris with specially positioned vehicles, expert wildlife photographer guides, and access to the best light."
    },
    {
        title: "Students & Researchers",
        image: "https://ik.imagekit.io/axd1riwnv/young-impala-masai-mara-kenya_53283695205_o.jpg",
        desc: "Educational safaris designed for schools, universities, and research groups — combining wildlife conservation learning with genuine authentic immersion."
    },
    {
        title: "Accessibility-Focused",
        image: "https://ik.imagekit.io/axd1riwnv/van1-365x255.jpg",
        desc: "We work with accessible lodges and modified vehicles to ensure that everyone can experience the magic of an African safari."
    }
];

const itineraries = [
    {
        title: "Kenya Safaris from Nairobi",
        icon: MapPin,
        packages: [
            "2-Day Masai Mara Express — See the Big Five and Masai culture in 48 hours.",
            "3-Day Masai Mara Safari — The classic Kenya safari with bush sundowners.",
            "3-Day Amboseli Safari — Elephants against the backdrop of Kilimanjaro.",
            "4-Day Masai Mara & Lake Nakuru — The combination of predators and flamingos.",
            "5-Day Masai Mara, Nakuru & Amboseli — Three iconic parks, five unforgettable days.",
            "6-Day Kenya Wildlife Safari — Add Samburu's unique species.",
            "7-Day Grand Kenya Safari — The comprehensive Kenya experience.",
            "8-Day Kenya Explorer — Deep dive into Kenya's wilderness.",
            "10-12 Day Ultimate Kenya — Every major park. The definitive Kenya safari."
        ]
    },
    {
        title: "Kenya Safaris + Beach Options",
        icon: Waves,
        packages: [
            "5-Day Masai Mara Safari + Diani Beach",
            "7-Day Kenya Safari & Beach",
            "8-Day Bush & Beach Adventure",
            "10-Day Ultimate Kenya & Coast",
            "1-Day Shimba Hills Excursion (From Coast)",
            "2-Day Tsavo East Safari (From Coast)",
            "3-Day Tsavo East & West",
            "4-Day Tsavo & Amboseli",
            "5-Day Ultimate Beach Safari"
        ]
    },
    {
        title: "Flight Safaris",
        icon: Plane,
        packages: [
            "Masai Mara Flight Safari — Fly from Wilson Airport directly to the Mara.",
            "Amboseli Flight Safari — Land beneath Kilimanjaro in under an hour.",
            "Samburu Flight Safari — Fly to Kenya's wild north.",
            "Lewa Conservancy Flight Safari — Exclusive rhino conservation.",
            "Mombasa/Diani to Masai Mara — Fly directly from the coast."
        ]
    },
    {
        title: "Tanzania & Combined Safaris",
        icon: Globe,
        packages: [
            "1-Day Arusha National Park",
            "2-Day Tarangire & Ngorongoro",
            "3-Day Serengeti Express",
            "4-Day Northern Tanzania Circuit",
            "5-Day Serengeti & Ngorongoro",
            "7-Day Ultimate Tanzania",
            "7-Day Kenya & Tanzania (Masai Mara + Serengeti + Ngorongoro)",
            "10-Day Cross-Border Epic",
            "14-15 Day Ultimate East Africa"
        ]
    },
    {
        title: "Specialty (Day Trips, Mountains & Zanzibar)",
        icon: Mountain,
        packages: [
            "Nairobi National Park Day Trip",
            "David Sheldrick Elephant Orphanage & Giraffe Centre",
            "Mount Kilimanjaro — 5-9 day climbs with expert guides",
            "Mount Kenya — Technical and non-technical routes",
            "Zanzibar Beach Holiday — 3-7 nights in luxury beachfront resorts",
            "Group Joining Safaris — Regular departures to Mara, Amboseli, and more"
        ]
    }
];

const destinations = [
    { title: "Masai Mara, Kenya", img: 'https://ik.imagekit.io/axd1riwnv/lion-panthera-leo-masai-mara-kenya_53282529954_o.jpg', desc: "The world's greatest wildlife arena. Home to over 2 million wildebeest.", best: "Big Five, Great Migration, big cats, hot air balloons." },
    { title: "Amboseli, Kenya", img: 'https://ik.imagekit.io/axd1riwnv/sunset-at-amboseli-national-300x213.jpg', desc: "Giant herds of elephants silhouetted against Mount Kilimanjaro.", best: "Elephants, Kilimanjaro views, photography." },
    { title: "Serengeti, Tanzania", img: 'https://ik.imagekit.io/axd1riwnv/Safari%20PHOTOS/WhatsApp%20Image%202026-05-31%20at%2009.22.33.jpeg', desc: "Endless plains stretching to the horizon holding vast plains game.", best: "Great Migration, big cats, vast landscapes." },
    { title: "Ngorongoro, Tanzania", img: 'https://ik.imagekit.io/axd1riwnv/114036745.avif', desc: "A self-contained Eden of 25,000 animals including the black rhino.", best: "Big Five in one day, unique landscapes." },
    { title: "Zanzibar", img: 'https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=800', desc: "The Spice Island. White sand beaches, turquoise waters, and Stone Town.", best: "Beach relaxation, snorkeling, culture." },
    { title: "Mount Kilimanjaro", img: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800', desc: "Africa's highest peak at 5,895 meters. A breathtaking ascent.", best: "Mountain climbing, bucket-list adventure." }
];

const experiences = [
    { title: "Hot Air Balloon Safaris", image: "https://ik.imagekit.io/axd1riwnv/Safari%20PHOTOS/WhatsApp%20Image%202026-05-31%20at%2009.19.14%20(1).jpeg", desc: "Float silently over the Masai Mara or Serengeti at sunrise. Land for a champagne breakfast." },
    { title: "Bush Dining & Sundowners", image: "https://images.pexels.com/photos/16444270/pexels-photo-16444270.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Gourmet meals in the wilderness. Watch the African sunset with a cocktail." },
    { title: "Night Game Drives", image: "https://ik.imagekit.io/axd1riwnv/young-spotted-hyenas-crocuta-crocuta-masai-mara-kenya_53283609824_o.jpg", desc: "Leopards hunting, hyenas calling, bush babies leaping through the trees." },
    { title: "Hi-Tech Tracking", image: "https://ik.imagekit.io/axd1riwnv/Samburu-National-Park.jpg", desc: "Join conservation teams using GPS collars to locate lions and rhinos." },
    { title: "Walking Safaris", image: "https://images.pexels.com/photos/15993988/pexels-photo-15993988.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Walk the paths of Masai warriors. Feel the earth beneath your feet." },
    { title: "Masai Village Visits", image: "https://ik.imagekit.io/axd1riwnv/mara-masai-dancers-590x390.jpg", desc: "Learn about ancient ways of life, watch traditional dances, and see authentic beadwork." },
    { title: "Bird Watching", image: "https://ik.imagekit.io/axd1riwnv/wahlbergs-eagle-hieraaetus-wahlbergi-masai-mara-kenya_53283693265_o.jpg", desc: "Spot everything from lilac-breasted rollers to crowned cranes with a specialist." },
    { title: "Wildebeest Migration", image: "https://ik.imagekit.io/axd1riwnv/experiences-great-migration-safaris-1600x670-Wildebeest-jumping-into-Mara-River-Great-Migration-Kenya-Tanzania-65138518_xxl.jpg", desc: "Track the 1,800-mile journey of 2 million animals." }
];

const familyAdventures = [
    { title: "Junior Ranger Programs", image: "https://ik.imagekit.io/axd1riwnv/game-drives-at-Masai-mara.jpg", desc: "Kids earn badges spotting the Big 5, learning animal tracks, and identifying bird calls with fun activity sheets." },
    { title: "Family Game Drives", image: "https://ik.imagekit.io/axd1riwnv/game-drives-at-Masai-mara.jpg", desc: "Shorter, exciting morning drives designed for young attention spans — with guaranteed wow moments." },
    { title: "Bush Craft for Kids", image: "https://ik.imagekit.io/axd1riwnv/Samburu-National-Park.jpg", desc: "Fire-starting, shelter-building, and survival skills taught by Masai warriors — unforgettable for teens." },
    { title: "Family Safari Suites", image: "https://ik.imagekit.io/axd1riwnv/Samburu-National-Park.jpg", desc: "Spacious interconnected rooms at wildlife lodges with kids menus, babysitting, and splash pools." },
    { title: "Cultural Workshops", image: "https://ik.imagekit.io/axd1riwnv/mara-masai-dancers-590x390.jpg", desc: "Beadwork, traditional cooking, and Masai dance lessons the whole family can enjoy together." },
    { title: "Stargazing Safaris", image: "https://images.pexels.com/photos/29093739/pexels-photo-29093739.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Zero light pollution means the Milky Way like you have never seen it. Guided astronomy sessions for all ages." }
];

const adventureActivities = [
    { title: "White Water Rafting", image: "https://images.pexels.com/photos/32651303/pexels-photo-32651303.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Class III-V rapids on the Tana River — an adrenaline rush surrounded by tropical forest." },
    { title: "Mountain Climbing", image: "https://images.pexels.com/photos/15993989/pexels-photo-15993989.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Summit Kilimanjaro (5,895m) or Mt. Kenya (5,199m) with expert high-altitude guides." },
    { title: "Cycling Safaris", image: "https://ik.imagekit.io/axd1riwnv/Samburu-National-Park.jpg", desc: "Pedal through Hell's Gate gorges alongside zebras and giraffes — one of Kenya's most unique experiences." },
    { title: "Scuba & Snorkeling", image: "https://images.pexels.com/photos/5582144/pexels-photo-5582144.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Explore the coral reefs of Diani, Watamu, and Zanzibar — sea turtles, whale sharks, and technicolor fish." },
    { title: "Zip-Lining & Canopy Walks", image: "https://ik.imagekit.io/axd1riwnv/Samburu-National-Park.jpg", desc: "Soar through the Kereita Forest canopy or walk suspended bridges in the Kakamega Rainforest." },
    { title: "Deep Sea Fishing", image: "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&w=800", desc: "Battle marlin, sailfish, and yellowfin tuna off the Kenyan coast — world-class sport fishing." }
];

const whyChooseUs = [
    { title: "100% Locally Owned", desc: "A Nairobi-based company with 15 years in the industry. Your money stays in Africa and supports local communities." },
    { title: "Trusted Partner Network", desc: "15 years building relationships with the best lodges, tour operators, guides, and transport partners across East Africa." },
    { title: "Expert Guides", desc: "Multi-lingual experts who read the bush like a book and bring stories to life." },
    { title: "Fully Customizable", desc: "No two travelers are the same. If you can dream it, we will build it." },
    { title: "Transparent Pricing", desc: "Economy, Comfort, and Luxury tiers. No hidden fees. What you see is what you pay." },
    { title: "24/7 Support", desc: "From the moment you enquire until you leave Africa, we're always one call away." }
];

const includedItems = [
    "Accommodation (Economy, Comfort, or Luxury)",
    "Full board meals (Breakfast, lunch, and dinner)",
    "4×4 safari vehicle with pop-up roof",
    "Professional, certified naturalist guide",
    "All national park entrance & conservation fees",
    "Airport Transfers (Pick-up and drop-off)",
    "Bottled drinking water throughout",
    "Morning and afternoon game drives",
    "Cultural visits where applicable",
    "Domestic flights for flight safari packages"
];

const faqs = [
    { q: "How do I book a safari with C.A.T.S?", a: "It's easy! WhatsApp us, email us, call us, or fill out the enquiry form. Our advisors respond within hours." },
    { q: "How far in advance should I book?", a: "2-3 months for peak season (Jul-Oct). However, we can arrange safaris as quickly as the day before departure." },
    { q: "What's the best time to visit Kenya and Tanzania?", a: "Year-round. Peak wildlife is July-October. Green season (March-May) offers fewer crowds and lower prices." },
    { q: "Is safari safe for children?", a: "Absolutely! We design family-friendly safaris with shorter drives and family suites at lodges." },
    { q: "What should I pack for safari?", a: "Neutral-colored clothing, comfortable shoes, sun hat, sunscreen, binoculars, camera, and a warm layer for mornings." },
    { q: "Can I customize my safari itinerary?", a: "100% yes. Every safari can be tailored. Add days, change parks, upgrade accommodations — it's your way." }
];

// Inline SVG star for certifications bar
function GoldStar() {
    return (
        <svg className="w-5 h-5 text-[var(--color-golden-savannah)]" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
    );
}


export default function AboutPageClient() {
    const { openModal } = useQuoteModal();
    const [openItinerary, setOpenItinerary] = useState<number | null>(0);
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="bg-[var(--color-warm-ivory)] min-h-screen text-[var(--color-driftwood)] font-sans">
            
            {/* 1. HERO SECTION */}
            <section className="relative pt-48 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={'https://ik.imagekit.io/axd1riwnv/lion-panthera-leo-masai-mara-kenya_53282529954_o.jpg'}
                        alt="Sweeping savannah"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2d3530]/90 via-[#4f5d56]/80 to-[#3a4740]/90"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-wider" 
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Collective African Tours & Safaris
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-[var(--color-golden-savannah)] font-semibold text-2xl tracking-widest uppercase mb-4"
                    >
                        C.A.T.S
                    </motion.div>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-2xl text-[var(--color-savannah-dust)] font-light max-w-3xl mx-auto italic"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Your Gateway to the Wild Heart of Africa<br/>
                        <span className="text-lg opacity-80 not-italic uppercase tracking-widest mt-4 block">Kenya • Tanzania • Uganda • Rwanda • Zanzibar</span>
                    </motion.p>
                </div>
            </section>

            {/* 2. TRUSTED BY TRAVELERS */}
            <section className="bg-[var(--color-forest-canopy)] text-white py-8 border-y border-[var(--color-logo-sage)] overflow-hidden hidden md:block">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-center text-sm font-bold tracking-[0.2em] text-[var(--color-golden-savannah)] mb-6 uppercase">Trusted By Travelers Worldwide</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center flex-row">
                        {certifications.map((cert, idx) => (
                            <div key={idx} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                                <GoldStar />
                                <span className="text-sm tracking-wider uppercase font-medium">{cert.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. OUR STORY */}
            <section className="py-24 bg-[var(--color-warm-ivory)]">
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-2 uppercase">Who We Are</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-canopy)] mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Your Expert Safari Team
                        </h3>
                        <div className="space-y-6 text-lg leading-relaxed text-[var(--color-driftwood)] border-l-2 border-[var(--color-golden-savannah)] pl-6">
                            <p>
                                Collective African Tours &amp; Safaris (C.A.T.S) is a Nairobi-based safari company with 15 years of expertise connecting travellers to the best wildlife, adventure, and cultural experiences across East Africa.
                            </p>
                            <p>
                                Our founder spent years as a safari sales consultant — learning every park, lodge, and hidden gem across Kenya and Tanzania. After years of selling someone else&apos;s vision, he founded C.A.T.S to deliver his own — built on firsthand knowledge of what travellers truly want: authentic encounters, seamless logistics, and moments that stay with you forever.
                            </p>
                            <p>
                                Today, our team works through a trusted network of experienced tour operators, certified naturalist guides, handpicked lodges, and reliable transport partners. From family safaris with junior ranger programs to honeymoon getaways and adrenaline-fuelled adventures, we design every itinerary with the same goal — giving you the trip of a lifetime.
                            </p>
                            <p>
                                Whether you&apos;re chasing the Great Migration, summiting Kilimanjaro, exploring Zanzibar&apos;s spice markets, or introducing your children to elephants for the first time — our team is here to make it happen, seamlessly and affordably.
                            </p>
                            <p className="italic text-[var(--color-forest-canopy)] font-semibold pt-4">
                                &quot;We don&apos;t just plan safaris. We craft the experiences that change your life.&quot;
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[400px] md:h-[600px] rounded-t-[100px] md:rounded-t-full rounded-b-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-[var(--color-savannah-dust)]">
                        <Image
                            src={'/images/blog/transport-fleet-hero.jpg'}
                            alt="C.A.T.S fleet of Land Cruiser 4x4 safari vehicles with Kenyan plates on the Masai Mara"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-[var(--color-deep-jungle)] opacity-10"></div>
                    </div>
                </div>
            </section>


            {/* MISSION, VISION & CORE VALUES */}
            <section className="py-24 bg-[var(--warm-ivory)]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-2 uppercase">What Drives Us</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-canopy)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Our Mission, Vision & Values
                        </h3>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-[var(--color-forest-canopy)] rounded-3xl p-10 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-logo-sage)] rounded-full -mr-16 -mt-16 opacity-20"></div>
                            <h4 className="text-xs font-bold tracking-[0.2em] text-[var(--color-golden-savannah)] mb-4 uppercase">Our Mission</h4>
                            <p className="text-2xl font-bold mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
                                To deliver authentic, life-changing African safari experiences through a trusted network of expert local partners.
                            </p>
                            <p className="text-[var(--color-savannah-dust)] leading-relaxed">
                                At Collective African Tours and Safaris, we connect travellers with the real Africa — its wildlife, cultures, landscapes, and communities. Every safari we plan is built on 15 years of on-the-ground expertise, personal relationships with lodge operators and specialist guides, and a deep commitment to responsible tourism. We ensure every journey is seamless, safe, and unforgettable — whether it is a family game drive in the Masai Mara, a honeymoon balloon ride over the Serengeti, or a once-in-a-lifetime gorilla trek in Rwanda.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-[var(--color-sunset-bronze)] to-[var(--color-golden-savannah)] rounded-3xl p-10 text-white relative overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16 opacity-10"></div>
                            <h4 className="text-xs font-bold tracking-[0.2em] text-white/80 mb-4 uppercase">Our Vision</h4>
                            <p className="text-2xl font-bold mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
                                To be East Africa&apos;s most trusted safari company — known for expertise, integrity, and transformative travel.
                            </p>
                            <p className="text-white/90 leading-relaxed">
                                We envision a world where every traveller who dreams of Africa can access a professionally crafted, fairly priced, and deeply personal safari experience. From first-time visitors to seasoned wildlife enthusiasts, from solo adventurers to multi-generational families — C.A.T.S aims to be the first name people trust when planning their East African adventure. We are building a legacy of excellence across Kenya, Tanzania, Uganda, Rwanda, and Zanzibar.
                            </p>
                        </div>
                    </div>

                    {/* Core Values */}
                    <div className="mb-8">
                        <h4 className="text-center text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-10 uppercase">Our Core Values</h4>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Expertise & Knowledge",
                                    desc: "15 years of hands-on safari experience across East Africa. Our founder began as a safari sales consultant before founding C.A.T.S to deliver his own vision of what African travel should be — personal, authentic, and expertly executed. Every recommendation we make is backed by first-hand knowledge of the parks, lodges, routes, and seasons."
                                },
                                {
                                    title: "Trust & Transparency",
                                    desc: "No hidden costs, no bait-and-switch pricing. We provide detailed, itemised quotations so you know exactly what you are paying for. Our 5-star TripAdvisor rating and returning client base reflect the trust we have earned through honest, professional service."
                                },
                                {
                                    title: "Personalised Service",
                                    desc: "Every safari is custom-built around your interests, budget, fitness level, and travel dates. We do not sell generic packages — we design bespoke itineraries that match your dream. Whether you want the Great Migration, Big Five photography, cultural immersion, or a beach-and-bush combination, we tailor every detail."
                                },
                                {
                                    title: "Safety & Reliability",
                                    desc: "Your safety is non-negotiable. We work exclusively with licensed, experienced safari guides and vetted accommodation partners. Our 24/7 on-ground support means you are never alone — from the moment you land to the moment you depart, we are a phone call away."
                                },
                                {
                                    title: "Responsible Tourism",
                                    desc: "We believe tourism should benefit the communities and ecosystems it touches. We partner with eco-certified lodges, support community conservancies, and promote low-impact travel practices. Every safari with C.A.T.S contributes to wildlife conservation and local livelihoods."
                                },
                                {
                                    title: "Family & Inclusivity",
                                    desc: "Africa is for everyone. We specialise in family-friendly safaris with child-appropriate activities, accessible travel options, and group experiences designed for all ages and abilities. From toddlers to grandparents, solo travellers to corporate groups — everyone belongs on safari."
                                }
                            ].map((value, idx) => (
                                <div key={idx} className="bg-[var(--color-warm-ivory)] border border-[var(--color-savannah-dust)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                                    <div className="w-10 h-10 bg-[var(--color-forest-canopy)] rounded-full flex items-center justify-center mb-4">
                                        <Check className="text-[var(--color-golden-savannah)]" size={20} />
                                    </div>
                                    <h5 className="text-xl font-bold text-[var(--color-forest-canopy)] mb-3">{value.title}</h5>
                                    <p className="text-[var(--color-driftwood)] leading-relaxed text-sm">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* OUR CAPABILITIES */}
            <section className="py-24 bg-[var(--color-savannah-dust)]/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-2 uppercase">What We Deliver</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-canopy)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Full-Service Safari Planning & Beyond
                        </h3>
                        <p className="text-lg text-[var(--color-driftwood)] mt-4 max-w-3xl mx-auto">
                            From the moment you enquire to the moment you return home, C.A.T.S handles every detail of your East African adventure. Our network of trusted partners across five countries ensures seamless, professional service at every stage.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Safari Game Drives",
                                items: ["Big Five wildlife safaris", "Great Migration tracking", "Night game drives", "Walking safaris with armed rangers", "Photographic safaris with specialist guides", "Hot air balloon safaris"]
                            },
                            {
                                title: "Beach & Island Holidays",
                                items: ["Zanzibar beach holidays", "Diani Beach getaways", "Mombasa coastal tours", "Lamu Island retreats", "Safari-and-beach combinations", "Water sports and diving"]
                            },
                            {
                                title: "Mountain & Adventure",
                                items: ["Mount Kilimanjaro expeditions", "Mount Kenya climbing", "Gorilla trekking in Rwanda and Uganda", "White-water rafting", "Cycling and hiking tours", "Cultural walking trails"]
                            },
                            {
                                title: "Travel & Logistics",
                                items: ["Airport transfers and meet-and-greet", "Domestic and charter flights", "4x4 safari vehicle hire", "Hotel and lodge reservations", "Visa guidance for Kenya, Tanzania, Uganda, Rwanda", "24/7 on-ground support"]
                            }
                        ].map((category, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-savannah-dust)] hover:shadow-lg transition-all duration-300">
                                <h5 className="text-lg font-bold text-[var(--color-forest-canopy)] mb-4 pb-3 border-b border-[var(--color-savannah-dust)]">{category.title}</h5>
                                <ul className="space-y-2">
                                    {category.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-driftwood)]">
                                            <CheckCircle2 className="text-[var(--color-logo-sage)] shrink-0 mt-0.5" size={14} />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. BY THE NUMBERS */}
            <section className="py-20 bg-[var(--color-savannah-dust)] border-y border-[#4f5d56]/20">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-center text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-12 uppercase">C.A.T.S By The Numbers</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <span className="text-3xl md:text-4xl font-extrabold text-[var(--color-forest-canopy)] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>{stat.title}</span>
                                <span className="text-sm md:text-base text-[var(--color-driftwood)] font-medium leading-tight">{stat.subtitle}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

                        {/* MEET DAVID — IMMERSIVE WITH TESTIMONIAL */}
            <section className="relative py-0 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://ik.imagekit.io/axd1riwnv/Masai-Mara-Kenya-wildlife-and-wildebeest-migration-safari-tour-packages.jpg"
                        alt="East African savannah at golden hour"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2c1810]/93 via-[#2c1810]/82 to-[#2c1810]/60" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 md:py-28">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-golden-savannah)] text-center">The Human Touch</p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Meet David &mdash; Your Safari Partner Across East Africa
                    </h2>
                    <p className="text-white/60 text-center mb-14 text-sm uppercase tracking-widest">Turning First Enquiries Into Journeys of a Lifetime</p>

                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
                        {/* Left — David's Story */}
                        <div className="space-y-5 text-base md:text-lg leading-relaxed text-white/85">
                            <p>
                                David is one of the driving forces behind Collective African Tours &amp; Safaris. With over 15&nbsp;years navigating Kenya&apos;s national parks, private conservancies, and coastal retreats, he brings an intimate knowledge of the land that no guidebook can match &mdash; the exact bend in the Mara River where crossings happen, which Amboseli waterhole elephants favour at dawn, and which Tsavo ridge catches the best sunset light.
                            </p>
                            <p>
                                His warm, practical approach means every detail &mdash; from game-drive timing and lodge selection to bush dinner surprises and SGR train bookings &mdash; is handled with care and deep local expertise. Working alongside our wider team and trusted partner network across East Africa, David ensures your safari feels genuinely, unmistakably yours.
                            </p>
                            <p>
                                Whether you&apos;re planning a first-time Masai Mara wildlife safari, a multi-country gorilla trekking expedition through Uganda and Rwanda, a Mount Kilimanjaro summit, or a family beach escape on the Kenyan coast &mdash; David and the C.A.T.S team are here to make it personal.
                            </p>

                            <div className="pt-4 flex flex-wrap gap-8">
                                <div className="text-center">
                                    <p className="text-3xl font-extrabold text-[var(--color-golden-savannah)]">15+</p>
                                    <p className="text-[11px] text-white/50 mt-1 uppercase tracking-wider">Years</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-extrabold text-[var(--color-golden-savannah)]">5</p>
                                    <p className="text-[11px] text-white/50 mt-1 uppercase tracking-wider">Countries</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-extrabold text-[var(--color-golden-savannah)]">500+</p>
                                    <p className="text-[11px] text-white/50 mt-1 uppercase tracking-wider">Safaris</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-3xl font-extrabold text-[var(--color-golden-savannah)]">100%</p>
                                    <p className="text-[11px] text-white/50 mt-1 uppercase tracking-wider">Tailor Made</p>
                                </div>
                            </div>
                        </div>

                        {/* Right — Testimonial */}
                        <div className="relative">
                            <div className="absolute -top-4 -left-2 text-[var(--color-golden-savannah)] text-7xl leading-none opacity-30" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>&ldquo;</div>
                            <blockquote className="bg-white/[0.07] backdrop-blur-md rounded-2xl border border-white/10 p-8 md:p-10">
                                <div className="flex mb-4 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 text-[var(--color-golden-savannah)]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                    ))}
                                </div>
                                <p className="text-white/80 text-[15px] leading-relaxed italic mb-3">
                                    &ldquo;After a dreadful let-down by another operator only 10&nbsp;days before our trip, we engaged David to help us plan our dream holiday. We needed a private guide for 8&nbsp;days around 4&nbsp;different national parks, park entrance fees, taxis and train tickets&nbsp;&mdash; David assisted us remotely via WhatsApp and email.&rdquo;
                                </p>
                                <p className="text-white/80 text-[15px] leading-relaxed italic mb-3">
                                    &ldquo;From the taxi pickup at Nairobi&nbsp;&mdash; David even sending a photo of our driver so we could see who he was after a long flight!&nbsp;&mdash; to our guide Benson who arrived early to collect us, there started the most wonderful 8&nbsp;days of our lives. We have travelled widely but this trip will forever be in our hearts.&rdquo;
                                </p>
                                <p className="text-white/80 text-[15px] leading-relaxed italic mb-6">
                                    &ldquo;David ensured every stage was seamless&nbsp;&mdash; we were collected, dropped off, tickets booked, and he checked in with us at every stage. He even checked in a few days after we arrived home. A special, seamless service which was 5&#8209;star throughout. We feel we have made friends for life.&rdquo;
                                </p>
                                <footer className="flex items-center gap-3">
                                    <div className="h-px flex-1 bg-white/15" />
                                    <cite className="text-sm not-italic text-[var(--color-golden-savannah)] font-semibold tracking-wide">Verified Guest &bull; 18-Day Kenya Safari</cite>
                                </footer>
                            </blockquote>

                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[var(--color-golden-savannah)] px-8 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-xl hover:bg-[#d0b46c]">
                                    Talk with David &amp; Our Team
                                </Link>
                                <a href="https://wa.me/254723951388" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition hover:bg-white/15">
                                    WhatsApp Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* 5. WHO TRAVELS WITH US */}
            <section className="py-24 bg-[var(--color-warm-ivory)]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-2 uppercase">Your Story</h2>
                        <h3 className="text-4xl font-bold text-[var(--color-forest-canopy)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Who Travels With C.A.T.S?
                        </h3>
                        <p className="mt-4 max-w-2xl mx-auto text-[var(--color-driftwood)] font-medium text-lg">
                            Africa calls to everyone differently. We design safaris that speak to YOUR story.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {travelerTypes.map((type, idx) => (
                            <div key={idx} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-[var(--color-savannah-dust)] hover:border-[#a68b52]/30 group">
                                <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-6 relative">
                                    <Image src={type.image} alt={type.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
                                </div>
                                <h4 className="text-xl font-bold text-[var(--color-deep-jungle)] mb-3">{type.title}</h4>
                                <p className="text-[var(--color-driftwood)] leading-relaxed text-sm md:text-base">{type.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. OUR SAFARI ITINERARIES (ACCORDION) */}
            <section className="py-24 bg-[var(--color-forest-canopy)] text-white">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-golden-savannah)] mb-2 uppercase">69+ Ways to Experience Africa</h2>
                        <h3 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Our Safari Itineraries
                        </h3>
                        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-lg">
                            We don&apos;t believe in one-size-fits-all. Every itinerary is a story designed to maximize your encounters.
                        </p>
                    </div>
                    <div className="space-y-4">
                        {itineraries.map((group, idx) => {
                            const isOpen = openItinerary === idx;
                            return (
                                <div key={idx} className="border border-[var(--color-logo-sage)] rounded-xl overflow-hidden bg-[var(--color-deep-jungle)]">
                                    <button 
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--color-logo-sage)] transition-colors"
                                        onClick={() => setOpenItinerary(isOpen ? null : idx)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-[#ebe7df]/10 text-[var(--color-golden-savannah)] rounded-lg">
                                                <group.icon size={24} />
                                            </div>
                                            <h4 className="text-xl font-bold text-[var(--color-warm-ivory)]">{group.title}</h4>
                                        </div>
                                        <ChevronDown className={`transform transition-transform duration-300 text-[var(--color-soft-amber)] ${isOpen ? 'rotate-180' : ''}`} size={24} />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div 
                                                initial={{ height: 0 }} 
                                                animate={{ height: "auto" }} 
                                                exit={{ height: 0 }} 
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 pt-2 pl-20 bg-[var(--color-deep-jungle)]">
                                                    <ul className="space-y-3">
                                                        {group.packages.map((pkg, i) => (
                                                            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm md:text-base">
                                                                <Check className="mt-1 text-[var(--color-sunset-bronze)] shrink-0" size={16} />
                                                                <span>{pkg}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 7. DESTINATIONS */}
            <section className="py-24 bg-[var(--color-warm-ivory)]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-2 uppercase">Where We Take You</h2>
                        <h3 className="text-4xl font-bold text-[var(--color-forest-canopy)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Our Selected Destinations
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
                        {destinations.map((dest, idx) => (
                            <div key={idx} className="group relative h-64 md:h-96 rounded-2xl overflow-hidden cursor-pointer">
                                <Image
                                    src={dest.img}
                                    alt={dest.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-jungle)] via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <h4 className="text-2xl font-bold mb-2 tracking-wide font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>{dest.title}</h4>
                                    <p className="text-sm text-gray-200 mb-4 line-clamp-2">{dest.desc}</p>
                                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                        <p className="text-xs uppercase tracking-wider text-[var(--color-golden-savannah)] font-semibold border-t border-[#c4a35a]/30 pt-4">
                                            Best for: <span className="text-white normal-case font-normal ml-1">{dest.best}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. EXPERIENCES (Masonry/Grid) */}
            <section className="py-24 bg-[var(--color-savannah-dust)] bg-opacity-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-2 uppercase">More Than Game Drives</h2>
                        <h3 className="text-4xl font-bold text-[var(--color-forest-canopy)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Unforgettable Safari Experiences
                        </h3>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl border border-[var(--color-savannah-dust)] shadow-sm flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                                <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-4 relative">
                                    <Image src={exp.image} alt={exp.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
                                </div>
                                <h4 className="text-lg font-bold text-[var(--color-forest-canopy)] mb-2">{exp.title}</h4>
                                <p className="text-sm md:text-base text-[var(--color-driftwood)] leading-relaxed flex-grow">{exp.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAMILY ADVENTURES */}
            <section className="py-24 bg-gradient-to-b from-[var(--color-savannah-dust)]/30 to-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-[var(--color-sunset-bronze)]/10 text-[var(--color-sunset-bronze)] text-sm font-bold tracking-wider uppercase mb-4">For The Whole Family</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-forest-canopy)] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Family Adventures & Kids Activities
                        </h2>
                        <p className="text-lg text-[var(--color-driftwood)] max-w-3xl mx-auto">
                            Safari isn&apos;t just for adults. We design family-friendly experiences that ignite curiosity in children, 
                            thrill teenagers, and create memories that bind families together for life. From junior ranger programs 
                            to stargazing under zero-light-pollution skies — every age finds wonder here.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {familyAdventures.map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-savannah-dust)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-5 relative">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
                                </div>
                                <h3 className="text-xl font-bold text-[var(--color-deep-jungle)] mb-3">{item.title}</h3>
                                <p className="text-[var(--color-driftwood)] leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ADVENTURE ACTIVITIES */}
            <section className="py-24 bg-[var(--color-forest-canopy)] text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)' }} />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-[var(--color-sunset-bronze)] text-sm font-bold tracking-wider uppercase mb-4">Beyond The Game Drive</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Adventure Activities
                        </h2>
                        <p className="text-lg text-white/80 max-w-3xl mx-auto">
                            East Africa isn&apos;t just about watching wildlife from a vehicle. Climb Africa&apos;s highest peak, 
                            raft Class V rapids, cycle through gorges alongside zebras, or dive into the Indian Ocean&apos;s 
                            most spectacular coral reefs. Your adventure, your way.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {adventureActivities.map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
                            >
                                <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mb-5 relative">
                                    <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-white/80 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. WHY CHOOSE US & WHATS INCLUDED */}
            <section className="py-24 bg-[var(--warm-ivory)] border-y border-[var(--color-savannah-dust)]">
                <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16">
                    {/* Why Us */}
                    <div>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-2 uppercase">The C.A.T.S Difference</h2>
                        <h3 className="text-4xl font-bold text-[var(--color-forest-canopy)] mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Why Choose Us?
                        </h3>
                        <div className="space-y-8">
                            {whyChooseUs.map((item, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="mt-1 flex-shrink-0 text-[var(--color-logo-sage)]">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-[var(--color-deep-jungle)] mb-1">{item.title}</h4>
                                        <p className="text-[var(--color-driftwood)] font-medium text-sm md:text-base">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What's Included */}
                    <div className="bg-[var(--color-forest-canopy)] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute -right-20 -top-20 opacity-5">
                            <Image src="/images/cats-logo.jpg" alt="Watermark" width={300} height={300} className="rounded-full" />
                        </div>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-golden-savannah)] mb-2 uppercase">Transparent Value</h2>
                        <h3 className="text-3xl lg:text-4xl font-bold mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                            What&apos;s Included in Every Safari
                        </h3>
                        <ul className="space-y-4">
                            {includedItems.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-4 text-gray-200">
                                    <div className="bg-[var(--color-logo-sage)] p-1 rounded-full mt-1 shrink-0">
                                        <Check size={14} className="text-[var(--color-golden-savannah)]" />
                                    </div>
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 10. CONSERVATION */}
            <section className="py-24 bg-[var(--color-logo-sage)] text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="w-full h-48 md:h-56 rounded-2xl overflow-hidden mx-auto mb-6 relative">
                        <Image src="https://ik.imagekit.io/axd1riwnv/experiences-great-migration-safaris-1600x670-Wildebeest-jumping-into-Mara-River-Great-Migration-Kenya-Tanzania-65138518_xxl.jpg" alt="Conservation" fill className="object-cover" sizes="(max-width: 768px) 100vw, 400px" />
                    </div>
                    <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-golden-savannah)] mb-2 uppercase">Our Promise to Africa</h2>
                    <h3 className="text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Conservation & Sustainability
                    </h3>
                    <p className="text-xl italic text-[var(--color-savannah-dust)] mb-12">
                        &quot;This is our home. Every step we take is done with an eye toward preserving it for generations to come.&quot;
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-[#2d3530]/40 p-6 rounded-2xl">
                            <h4 className="font-bold text-lg mb-2 text-[var(--color-golden-savannah)]">Carbon Reduction</h4>
                            <p className="text-sm text-gray-300">Offsetting our footprint through tree planting and supporting renewable energy.</p>
                        </div>
                        <div className="bg-[#2d3530]/40 p-6 rounded-2xl">
                            <h4 className="font-bold text-lg mb-2 text-[var(--color-golden-savannah)]">Zero Plastics</h4>
                            <p className="text-sm text-gray-300">Safaris operate with reusable water bottles. We partner with eco-conscious lodges.</p>
                        </div>
                        <div className="bg-[#2d3530]/40 p-6 rounded-2xl">
                            <h4 className="font-bold text-lg mb-2 text-[var(--color-golden-savannah)]">Anti-Poaching</h4>
                            <p className="text-sm text-gray-300">Financial support dedicated to anti-poaching units protecting endangered species.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 11. FAQs */}
            <section className="py-24 bg-[var(--color-warm-ivory)]">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-[var(--color-sunset-bronze)] mb-2 uppercase">Got Questions?</h2>
                        <h3 className="text-4xl font-bold text-[var(--color-forest-canopy)]" style={{ fontFamily: 'var(--font-playfair)' }}>
                            Frequently Asked Questions
                        </h3>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, idx) => {
                            const isOpen = openFaq === idx;
                            return (
                                <div key={idx} className="bg-white border border-[var(--color-savannah-dust)] rounded-xl overflow-hidden shadow-sm">
                                    <button 
                                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[var(--color-savannah-dust)] transition-colors"
                                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                                    >
                                        <span className="font-bold text-[var(--color-deep-jungle)] pr-8">{faq.q}</span>
                                        <ChevronDown className={`shrink-0 transform transition-transform duration-300 text-[var(--color-sunset-bronze)] ${isOpen ? 'rotate-180' : ''}`} size={20} />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div 
                                                initial={{ height: 0 }} 
                                                animate={{ height: "auto" }} 
                                                exit={{ height: 0 }} 
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-5 text-[var(--color-driftwood)] font-medium leading-relaxed border-t border-[var(--color-savannah-dust)] pt-4">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* 12. FINAL CTA */}
            <section className="py-24 bg-[var(--color-deep-jungle)] text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[var(--color-logo-sage)] via-[var(--color-golden-savannah)] to-[var(--color-sunset-bronze)]"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
                        Your African Adventure Starts Now
                    </h2>
                    <p className="text-xl text-[var(--color-savannah-dust)] mb-10 italic max-w-2xl mx-auto">
                        &quot;The Africa you&apos;ve dreamed of. The safari you deserve. The adventure that changes everything.&quot;
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            onClick={() => openModal('General Enquiry', 'https://www.catssafaris.com/about')} 
                            className="bg-gradient-to-r from-[var(--color-sunset-bronze)] to-[var(--color-golden-savannah)] text-white px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wide hover:shadow-lg hover:scale-105 transition-all duration-300"
                        >
                            Request A Free Custom Quote
                        </button>
                    </div>
                </div>
            </section>

        </div>
    );
}
