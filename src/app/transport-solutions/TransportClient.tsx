'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

/* ─────────── TYPES ─────────── */
interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: string;
  image: string;
  passengers: string;
  transmission: string;
  fuel: string;
  luggage: string;
  serviceType: string;
  description: string;
  features: string[];
}

/* ─────────── VEHICLE DATA ─────────── */
const vehicles: Vehicle[] = [
  // ── SUVs & Crossovers (Car Hire Only) ──
  {
    id: 'harrier',
    name: 'Toyota Harrier',
    brand: 'Toyota',
    category: 'SUVs & Crossovers',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '5',
    transmission: 'Automatic',
    fuel: 'Petrol',
    luggage: '3 Bags',
    serviceType: 'Self-Drive / Chauffeur',
    description: 'A sleek and stylish crossover SUV, perfect for city driving and upcountry road trips across Kenya.',
    features: ['Air Conditioning', 'Leather Seats', 'Bluetooth Audio', 'Reverse Camera', 'Spacious Boot'],
  },
  {
    id: 'lexus',
    name: 'Lexus SUV',
    brand: 'Lexus',
    category: 'SUVs & Crossovers',
    image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '5 – 7',
    transmission: 'Automatic',
    fuel: 'Petrol / Diesel',
    luggage: '4 Bags',
    serviceType: 'Self-Drive / Chauffeur',
    description: 'Premium luxury SUV offering unmatched comfort for executive travel and VIP transport in Nairobi and beyond.',
    features: ['Premium Leather Interior', 'Climate Control', 'Navigation System', 'Sunroof', 'Premium Audio'],
  },
  {
    id: 'xtrail',
    name: 'Nissan X-Trail',
    brand: 'Nissan',
    category: 'SUVs & Crossovers',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '5',
    transmission: 'Automatic',
    fuel: 'Petrol',
    luggage: '3 Bags',
    serviceType: 'Self-Drive / Chauffeur',
    description: 'A versatile and fuel-efficient crossover ideal for both Nairobi city commutes and weekend getaways.',
    features: ['Air Conditioning', 'Cruise Control', 'Rear Parking Sensors', 'Roof Rails', 'All-Wheel Drive'],
  },
  {
    id: 'cx5',
    name: 'Mazda CX-5',
    brand: 'Mazda',
    category: 'SUVs & Crossovers',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '5',
    transmission: 'Automatic',
    fuel: 'Petrol / Diesel',
    luggage: '3 Bags',
    serviceType: 'Self-Drive / Chauffeur',
    description: 'Sporty and refined, the CX-5 combines elegant design with responsive handling for an enjoyable drive.',
    features: ['Air Conditioning', 'Push-Button Start', 'Bluetooth', 'Leather Trim', 'Alloy Wheels'],
  },
  {
    id: 'prado',
    name: 'Toyota Prado',
    brand: 'Toyota',
    category: 'SUVs & Crossovers',
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '5 – 7',
    transmission: 'Automatic',
    fuel: 'Petrol / Diesel',
    luggage: '4 Bags',
    serviceType: 'Self-Drive / Chauffeur',
    description: 'The legendary Land Cruiser Prado — rugged, reliable, and built for Kenya\u2019s diverse terrain from highways to highlands.',
    features: ['4WD Capability', 'Leather Seats', 'Climate Control', 'Tow Bar', 'Hill Descent Control'],
  },

  // ── Minivans ──
  {
    id: 'noah',
    name: 'Toyota Noah',
    brand: 'Toyota',
    category: 'Minivans',
    image: 'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '7 – 8',
    transmission: 'Automatic',
    fuel: 'Petrol / Hybrid',
    luggage: '4 – 6 Bags',
    serviceType: 'Airport Transfer / Chauffeur / Self-Drive',
    description: 'Spacious and comfortable family minivan, ideal for airport transfers, city tours, and group travel.',
    features: ['Sliding Doors', 'Air Conditioning', 'Ample Luggage Space', 'USB Charging', 'Comfortable Seating'],
  },
  {
    id: 'alphard',
    name: 'Toyota Alphard',
    brand: 'Toyota',
    category: 'Minivans',
    image: 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '6 – 7',
    transmission: 'Automatic',
    fuel: 'Petrol',
    luggage: '4 Bags',
    serviceType: 'Airport Transfer / VIP Chauffeur',
    description: 'The ultimate luxury minivan — executive leather captain seats, whisper-quiet ride, perfect for VIP airport transfers.',
    features: ['Executive Captain Seats', 'Premium Leather', 'Climate Control Zones', 'Power Sliding Doors', 'Privacy Glass'],
  },

  // ── Buses ──
  {
    id: 'rosa',
    name: '22-Seater Coaster Bus',
    brand: 'Toyota',
    category: 'Buses',
    image: 'https://images.pexels.com/photos/68629/pexels-photo-68629.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '22',
    transmission: 'Manual / Automatic',
    fuel: 'Diesel',
    luggage: 'Rear Compartment',
    serviceType: 'Group Transfer / Events / Tours',
    description: 'Mid-size coach ideal for corporate shuttles, wedding parties, school trips, and group excursions across Kenya.',
    features: ['Reclining Seats', 'PA System', 'Air Conditioning', 'Luggage Compartment', 'Professional Driver'],
  },
  {
    id: 'bus29',
    name: '29-Seater Bus',
    brand: 'Various',
    category: 'Buses',
    image: 'https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '29',
    transmission: 'Automatic',
    fuel: 'Diesel',
    luggage: 'Large Undercarriage',
    serviceType: 'Group Transfer / Corporate / Events',
    description: 'Full-size touring coach for larger groups — conferences, team-building trips, and inter-city transfers.',
    features: ['Air Conditioning', 'Reclining Seats', 'PA System', 'Large Luggage Bay', 'Curtains'],
  },
  {
    id: 'bus51',
    name: '51-Seater Bus',
    brand: 'Various',
    category: 'Buses',
    image: 'https://images.pexels.com/photos/1178448/pexels-photo-1178448.jpeg?auto=compress&cs=tinysrgb&w=800',
    passengers: '51',
    transmission: 'Automatic',
    fuel: 'Diesel',
    luggage: 'Large Undercarriage',
    serviceType: 'Large Group Transfer / Corporate / Events',
    description: 'The largest coach option for major events, corporate conferences, and large group transfers across East Africa.',
    features: ['Full Air Conditioning', 'Reclining Seats', 'PA & Entertainment System', 'Massive Luggage Bay', 'Overhead Compartments'],
  },

  // ── Safari Vehicles ──
  {
    id: 'landcruiser',
    name: '4x4 Land Cruiser',
    brand: 'Toyota',
    category: 'Safari Vehicles',
    image: 'https://ik.imagekit.io/axd1riwnv/Safari-masai-mara-vehicle.jpg',
    passengers: 'Up to 7',
    transmission: 'Manual',
    fuel: 'Diesel',
    luggage: '4 Bags',
    serviceType: 'Safari Game Drives',
    description: 'The gold standard for East African safaris — powerful 4WD with pop-up roof for 360\u00b0 wildlife viewing.',
    features: ['Pop-Up Roof Hatch', '4WD All-Terrain', 'Fresh Water Cooler Box', 'Charging Ports', 'Radio Communication'],
  },
  {
    id: 'minivan-safari',
    name: 'Safari Minivan',
    brand: 'Toyota',
    category: 'Safari Vehicles',
    image: 'https://ik.imagekit.io/axd1riwnv/game-drive-vehicle-elephant-herd-kenya-safari-tour-.jpg',
    passengers: 'Up to 7',
    transmission: 'Manual / Automatic',
    fuel: 'Petrol / Diesel',
    luggage: '4 Bags',
    serviceType: 'Safari Game Drives',
    description: 'A reliable pop-up roof safari minivan — comfortable and well-suited for game drives in Kenya\u2019s national parks.',
    features: ['Pop-Up Roof Hatch', 'Comfortable Seating', 'Fresh Water Cooler Box', 'Charging Ports', 'Ample Luggage Space'],
  },
  {
    id: 'open-sided',
    name: 'Open-Sided Game Viewer',
    brand: 'Custom Built',
    category: 'Safari Vehicles',
    image: 'https://ik.imagekit.io/axd1riwnv/Amboseli-game-drive.jpg',
    passengers: 'Up to 7',
    transmission: 'Manual',
    fuel: 'Diesel',
    luggage: 'Rear Rack',
    serviceType: 'Game Drives (Inside Parks Only)',
    description: 'Purpose-built open-sided vehicle for unobstructed wildlife photography and immersive game drive experiences.',
    features: ['360\u00b0 Open Views', 'Tiered Seating', 'Photography-Friendly', 'Canopy Shade', 'Used Exclusively Inside Parks'],
  },
];

const categories = ['All', 'SUVs & Crossovers', 'Minivans', 'Buses', 'Safari Vehicles'];

/* ─────────── COMPONENT ─────────── */

// SVG Icon Components
function PlaneIcon({ className = "w-8 h-8" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>;
}
function CarIcon({ className = "w-8 h-8" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>;
}
function BinocularsIcon({ className = "w-8 h-8" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}
function PartyIcon({ className = "w-8 h-8" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>;
}
function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>;
}
function EmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>;
}
function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z" /></svg>;
}
function ClockIcon({ className = "w-5 h-5" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function GearIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
}
function UsersIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>;
}
function FuelIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" /></svg>;
}
function LuggageIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>;
}
function HandshakeIcon({ className = "w-8 h-8" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" /></svg>;
}
function ClockLgIcon({ className = "w-8 h-8" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function WalletIcon({ className = "w-8 h-8" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>;
}
function StarIcon({ className = "w-8 h-8" }: { className?: string }) {
  return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>;
}
function CheckCircleIcon({ className = "w-16 h-16" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
}
function GridIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>;
}
function MinibusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>;
}
function BusIcon({ className = "w-4 h-4" }: { className?: string }) {
  return <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0V5.625m0 12.375v-3.75m0-4.5v-.938M14.25 7.5h4.875c.621 0 1.125.504 1.125 1.125v3m0 0h-4.5m4.5 0v3.375M14.25 7.5V5.625m0 0a.375.375 0 00-.375-.375H5.625a.375.375 0 00-.375.375v1.875" /></svg>;
}

export function TransportClient() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedVehicle, setExpandedVehicle] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', vehicleType: '', serviceType: '', pickupDate: '', pickupTime: '', pickupLocation: '', dropoffLocation: '', passengers: '', message: '',
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const filteredVehicles = activeCategory === 'All' ? vehicles : vehicles.filter(v => v.category === activeCategory);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, formType: 'transport', safariUrl: '/transport-solutions' }),
      });
      if (res.ok) setFormStatus('sent');
      else setFormStatus('error');
    } catch { setFormStatus('error'); }
  };

  const faqs = [
    {
      question: 'What areas do you cover for airport transfers?',
      answer: 'We provide transfers to and from JKIA (Jomo Kenyatta International Airport), Wilson Airport, and the Nairobi SGR Terminus. We also arrange transfers from Moi International Airport in Mombasa and Ukunda Airstrip for coastal destinations.',
    },
    {
      question: 'Do you offer self-drive car hire?',
      answer: `Yes! Our SUVs and crossovers (Harrier, Lexus, X-Trail, CX-5, Prado) are available for self-drive hire. You'll need a valid driving licence and to meet our rental terms. Chauffeur-driven service is also available for all vehicles.`,
    },
    {
      question: 'How do I book a vehicle?',
      answer: 'Simply fill out the enquiry form below, call us on +254 723 951 388, or email info@catssafaris.com with your travel dates, group size, and vehicle preference. We\u2019ll respond within 2 hours during business hours.',
    },
    {
      question: 'Are your drivers professional and licensed?',
      answer: 'Absolutely. All chauffeurs in our partner network are professionally trained, hold valid PSV licences, and have extensive experience with both city driving and long-distance routes across Kenya.',
    },
    {
      question: 'Can I hire a vehicle for multiple days or weeks?',
      answer: `Yes, we offer daily, weekly, and monthly rates for all car hire vehicles. Longer hire periods come with discounted rates \u2014 contact us for a custom quote.`,
    },
    {
      question: 'Do safari vehicles come with a driver-guide?',
      answer: 'Yes. All safari vehicles (Land Cruisers, minivans, and open-sided game viewers) are provided with an experienced, English-speaking driver-guide who doubles as your wildlife spotter.',
    },
    {
      question: 'Do you provide services outside Nairobi?',
      answer: `Yes. Our dedicated 4\u00d74 Toyota Land Cruiser / Safari Van handles all game drives and park excursions \u2014 including Nairobi National Park, Amboseli, and the Masai Mara. The Toyota Prado is available for transfers to and from lodges or park gates but does not do game drives. Contact us for a custom quote.`,
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Please contact us directly for our cancellation terms. We understand plans change and we handle each situation with flexibility and fairness. WhatsApp or call us as soon as possible if your plans change.',
    },
  ];

  return (
    <main className="bg-[#faf6ef] text-gray-800 font-sans">

      {/* ════════════════════════════════════════════════════════
          HERO — Cinematic full-width with fleet showcase
      ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden border-b-[3px] border-[#c8962e]">
        {/* Background image — fleet in the Mara */}
        <Image
          src="https://ik.imagekit.io/axd1riwnv/game-drive-vehicle-elephant-herd-kenya-safari-tour-.jpg"
          alt="C.A.T.S safari fleet vehicles in the Masai Mara"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a12]/97 via-[#0d1f16]/88 to-[#122a1c]/50" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-48 pb-24 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#c8962e]/15 border border-[#c8962e]/50 rounded-full px-6 py-2.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#e8b84a] animate-pulse" />
              <span className="text-[#e8b84a] text-sm font-semibold tracking-[0.25em] uppercase">C.A.T.S Transport Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-7 tracking-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
              Premium Vehicle Hire{' '}
              <span className="text-[#e8b84a]">Across Kenya</span>
            </h1>

            <p className="text-lg text-gray-300 mb-12 leading-relaxed max-w-xl">
              Airport transfers, self-drive car hire, safari game-drive vehicles, and executive group transport — all from one trusted provider with 15 years of East African expertise.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <button onClick={scrollToForm} className="group bg-gradient-to-r from-[#c8962e] to-[#d4a017] hover:from-[#b8860b] hover:to-[#c8962e] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#c8962e]/30 hover:shadow-[#c8962e]/50 flex items-center gap-2">
                Get a Free Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              <a href="https://wa.me/254723951388?text=Hello%20C.A.T.S!%20I%27d%20like%20to%20enquire%20about%20transport." target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.826-6.326-2.21l-.442-.365-3.044 1.02 1.02-3.044-.365-.442A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                WhatsApp Us
              </a>
              <a href="tel:+254723951388" className="border-2 border-white/30 hover:border-[#e8b84a]/80 text-white font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2 backdrop-blur-sm">
                <PhoneIcon className="w-5 h-5" /> +254 723 951 388
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { num: '50+', label: 'Vehicles' },
                { num: '15+', label: 'Years Experience' },
                { num: '1,000+', label: 'Happy Clients' },
                { num: '24/7', label: 'Availability' },
              ].map(s => (
                <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-xl px-4 py-4 border border-white/10 text-center border-l-[3px] border-l-[#c8962e]">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#e8b84a]">{s.num}</div>
                  <div className="text-xs text-gray-400 mt-1 uppercase tracking-[0.15em]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          SERVICES — What We Offer
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#c8962e] font-bold tracking-[0.3em] uppercase text-xs">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f16] mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>Transport for Every Occasion</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">From airport arrivals to Masai Mara game drives, weddings to corporate conferences — we have the perfect vehicle and driver for you.</p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#c8962e] to-[#e8b84a] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'plane', title: 'Airport & SGR Transfers', desc: 'Reliable pickup and drop-off at JKIA, Wilson Airport, and SGR Terminus. Meet-and-greet service with flight tracking.', vehicles: 'Noah \u2022 Alphard \u2022 Coaster \u2022 29/51-Seater Buses' },
              { icon: 'car', title: 'Car Hire', desc: 'Self-drive or chauffeur-driven. Explore Kenya at your own pace with our range of SUVs, crossovers, and luxury vehicles.', vehicles: 'Harrier \u2022 Lexus \u2022 X-Trail \u2022 CX-5 \u2022 Prado \u2022 Noah \u2022 Alphard' },
              { icon: 'safari', title: 'Safari Vehicles', desc: 'Purpose-built 4x4 Land Cruisers and safari minivans with pop-up roofs for game drives across Kenya and Tanzania.', vehicles: 'Land Cruiser \u2022 Safari Minivan \u2022 Game Viewer' },
              { icon: 'events', title: 'Events & Groups', desc: 'Weddings, conferences, school trips, corporate retreats — coaches and buses for groups of every size.', vehicles: 'Coaster \u2022 29-Seater Bus \u2022 51-Seater Bus' },
            ].map(s => (
              <div key={s.title} className="group relative bg-gradient-to-br from-[#0d1f16] to-[#1a3d2b] rounded-2xl p-7 text-white hover:shadow-2xl hover:shadow-[#c8962e]/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden border-t-[3px] border-t-[#c8962e]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8962e]/8 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="mb-5 text-[#e8b84a]">{s.icon === 'plane' ? <PlaneIcon /> : s.icon === 'car' ? <CarIcon /> : s.icon === 'safari' ? <BinocularsIcon /> : <PartyIcon />}</div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>{s.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{s.desc}</p>
                  <p className="text-[#e8b84a] text-xs font-semibold">{s.vehicles}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8962e]/40 to-transparent" />

      {/* ════════════════════════════════════════════════════════
          FLEET — Vehicle Showcase with Filter
      ════════════════════════════════════════════════════════ */}
      <section id="fleet" className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="text-[#c8962e] font-bold tracking-[0.3em] uppercase text-xs">Our Fleet</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f16] mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>Choose Your Perfect Vehicle</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            From compact SUVs to 51-seater coaches, every vehicle in our partner network is maintained to the highest standards of safety and comfort.
          </p>
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#c8962e] to-[#e8b84a] mx-auto mt-5" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#0d1f16] text-[#e8b84a] shadow-lg shadow-[#0d1f16]/30 border border-[#c8962e]/30'
                  : 'bg-white text-gray-600 hover:bg-[#0d1f16]/5 border border-gray-200 hover:border-[#c8962e]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map(vehicle => (
            <div key={vehicle.id} className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:shadow-[#c8962e]/10 transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-[#c8962e]/30 border-t-[3px] border-t-[#c8962e]">
              {/* Image */}
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-[#c8962e] to-[#d4a017] backdrop-blur-sm text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    {vehicle.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={scrollToForm}
                    className="bg-[#c8962e] text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg hover:bg-[#b8860b] transition-all"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[#c8962e] text-xs font-bold uppercase tracking-[0.15em]">{vehicle.brand}</span>
                  <span className="text-xs text-gray-400 bg-[#faf6ef] px-2 py-0.5 rounded">{vehicle.serviceType.split(' / ')[0]}</span>
                </div>
                <h3 className="text-xl font-extrabold text-[#0d1f16] mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>{vehicle.name}</h3>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { icon: 'gear', val: vehicle.transmission },
                    { icon: 'users', val: vehicle.passengers + ' Pax' },
                    { icon: 'fuel', val: vehicle.fuel },
                    { icon: 'luggage', val: vehicle.luggage },
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-600 bg-[#faf6ef] rounded-lg px-3 py-2">
                      <span className="text-[#0d1f16]">{spec.icon === 'gear' ? <GearIcon /> : spec.icon === 'users' ? <UsersIcon /> : spec.icon === 'fuel' ? <FuelIcon /> : <LuggageIcon />}</span> <span>{spec.val}</span>
                    </div>
                  ))}
                </div>

                {/* Expand/Collapse */}
                <button
                  onClick={() => setExpandedVehicle(expandedVehicle === vehicle.id ? null : vehicle.id)}
                  className="text-[#c8962e] text-sm font-semibold hover:text-[#b8860b] transition-colors mb-4 block tracking-wide"
                >
                  {expandedVehicle === vehicle.id ? '\u25b2 Hide Details' : '\u25bc View Details'}
                </button>

                {expandedVehicle === vehicle.id && (
                  <div className="border-t border-[#c8962e]/15 pt-4 mb-4 animate-fadeIn">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{vehicle.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map(f => (
                        <span key={f} className="bg-[#0d1f16]/5 text-[#0d1f16] text-xs px-3 py-1.5 rounded-full font-medium border border-[#0d1f16]/10">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <button
                  onClick={scrollToForm}
                  className="w-full bg-gradient-to-r from-[#0d1f16] to-[#1a3d2b] hover:from-[#0a1a12] hover:to-[#143323] text-white font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg border border-[#c8962e]/20 hover:border-[#c8962e]/40"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FLEET GALLERY — Showcase strip
      ════════════════════════════════════════════════════════ */}
      <section className="bg-[#0d1f16] py-4 border-y border-[#c8962e]/30">
        <div className="max-w-7xl mx-auto px-2">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
            {[
              { src: 'https://ik.imagekit.io/axd1riwnv/Safari-masai-mara-vehicle.jpg', alt: 'Land Cruiser safari vehicle in the Masai Mara' },
              { src: 'https://ik.imagekit.io/axd1riwnv/game-drive-vehicle-elephant-herd-kenya-safari-tour-.jpg', alt: 'Game drive vehicle with elephant herd' },
              { src: 'https://ik.imagekit.io/axd1riwnv/Amboseli-game-drive.jpg', alt: 'Game drive in Amboseli National Park' },
              { src: 'https://ik.imagekit.io/axd1riwnv/game-drive-Satao-Elerai-Amboseli-National-Park-Kenya_Tett-Safaris.webp', alt: 'Safari vehicle at Satao Elerai Amboseli' },
              { src: 'https://ik.imagekit.io/axd1riwnv/Ecotourism-Safari-Masai-Mara.jpg', alt: 'Ecotourism safari vehicle Masai Mara' },
              { src: 'https://ik.imagekit.io/axd1riwnv/4-days-masai-mara-and-lake-nakuru-park-group-joining-landcruiser_Urf4r.jpeg', alt: 'Group safari Land Cruiser' },
            ].map((img, i) => (
              <div key={i} className="relative h-28 md:h-36 rounded-lg overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 33vw, 16vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PRICING — Clean Tables
      ════════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#c8962e] font-bold tracking-[0.3em] uppercase text-xs">Pricing</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f16] mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>Transparent Rates, No Hidden Fees</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Standard rates below. For multi-day hire, long-term contracts, or special events, contact us for a custom quote.
            </p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#c8962e] to-[#e8b84a] mx-auto mt-5" />
          </div>

          {/* Airport / SGR Transfers */}
          <div className="mb-12">
            <h3 className="text-xl font-extrabold text-[#0d1f16] mb-5 flex items-center gap-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              <span className="w-10 h-10 bg-[#0d1f16] rounded-xl flex items-center justify-center text-white border-l-[3px] border-l-[#c8962e]"><PlaneIcon className="w-5 h-5" /></span>
              Airport & SGR Transfers
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm border-t-[3px] border-t-[#c8962e]">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-[#0a1a12] to-[#122a1c] text-white">
                  <tr>
                    <th className="px-5 py-4 text-left font-bold">Vehicle</th>
                    <th className="px-5 py-4 text-center font-bold">Passengers</th>
                    <th className="px-5 py-4 text-center font-bold">JKIA</th>
                    <th className="px-5 py-4 text-center font-bold">Wilson</th>
                    <th className="px-5 py-4 text-center font-bold">SGR Terminus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { vehicle: 'Toyota Noah', pax: '7 \u2013 8', jkia: '$45', wilson: '$35', sgr: '$45' },
                    { vehicle: 'Toyota Alphard', pax: 'Up to 7', jkia: '$65', wilson: '$50', sgr: '$65' },
                    { vehicle: '22-Seater Coaster', pax: '22', jkia: '$120', wilson: '$100', sgr: '$120' },
                    { vehicle: '29-Seater Bus', pax: '29', jkia: '$180', wilson: '$150', sgr: '$180' },
                    { vehicle: '51-Seater Bus', pax: '51', jkia: '$250', wilson: '$200', sgr: '$250' },
                  ].map((r, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#faf6ef]'} hover:bg-[#c8962e]/5 transition-colors`}>
                      <td className="px-5 py-4 font-bold text-[#0d1f16]">{r.vehicle}</td>
                      <td className="px-5 py-4 text-center text-gray-500">{r.pax}</td>
                      <td className="px-5 py-4 text-center font-extrabold text-[#c8962e]">{r.jkia}</td>
                      <td className="px-5 py-4 text-center font-extrabold text-[#c8962e]">{r.wilson}</td>
                      <td className="px-5 py-4 text-center font-extrabold text-[#c8962e]">{r.sgr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">* Prices are per vehicle, not per person. Rates may vary during peak hours, weekends, and public holidays.</p>
          </div>

          {/* Car Hire */}
          <div className="mb-12">
            <h3 className="text-xl font-extrabold text-[#0d1f16] mb-5 flex items-center gap-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              <span className="w-10 h-10 bg-[#0d1f16] rounded-xl flex items-center justify-center text-white border-l-[3px] border-l-[#c8962e]"><CarIcon className="w-5 h-5" /></span>
              Car Hire (Self-Drive / Chauffeur)
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm border-t-[3px] border-t-[#c8962e]">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-[#0a1a12] to-[#122a1c] text-white">
                  <tr>
                    <th className="px-5 py-4 text-left font-bold">Vehicle</th>
                    <th className="px-5 py-4 text-center font-bold">Daily Rate</th>
                    <th className="px-5 py-4 text-center font-bold">Weekly Rate</th>
                    <th className="px-5 py-4 text-center font-bold">Monthly Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { vehicle: 'Toyota Harrier', daily: 'From $75', weekly: 'From $350', monthly: 'From $1,200' },
                    { vehicle: 'Nissan X-Trail', daily: 'From $70', weekly: 'From $320', monthly: 'From $1,100' },
                    { vehicle: 'Mazda CX-5', daily: 'From $70', weekly: 'From $320', monthly: 'From $1,100' },
                    { vehicle: 'Lexus SUV', daily: 'From $105', weekly: 'From $550', monthly: 'From $2,000' },
                    { vehicle: 'Toyota Prado', daily: 'From $95', weekly: 'From $500', monthly: 'From $1,800' },
                    { vehicle: 'Toyota Noah', daily: 'From $65', weekly: 'From $300', monthly: 'From $1,000' },
                    { vehicle: 'Toyota Alphard', daily: 'From $90', weekly: 'From $450', monthly: 'From $1,600' },
                    { vehicle: '22-Seater Coaster', daily: 'From $165', weekly: 'From $900', monthly: 'Contact Us' },
                    { vehicle: '29-Seater Bus', daily: 'From $215', weekly: 'From $1,200', monthly: 'Contact Us' },
                    { vehicle: '51-Seater Bus', daily: 'From $315', weekly: 'From $1,800', monthly: 'Contact Us' },
                  ].map((r, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#faf6ef]'} hover:bg-[#c8962e]/5 transition-colors`}>
                      <td className="px-5 py-4 font-bold text-[#0d1f16]">{r.vehicle}</td>
                      <td className="px-5 py-4 text-center font-extrabold text-[#c8962e]">{r.daily}</td>
                      <td className="px-5 py-4 text-center font-extrabold text-[#c8962e]">{r.weekly}</td>
                      <td className="px-5 py-4 text-center font-extrabold text-[#c8962e]">{r.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">* Self-drive rates shown. Chauffeur-driven service add $30\u2013$50/day. Fuel not included. Rates may vary during weekends and public holidays.</p>
          </div>

          {/* Safari Vehicles */}
          <div>
            <h3 className="text-xl font-extrabold text-[#0d1f16] mb-5 flex items-center gap-3" style={{ fontFamily: 'var(--font-playfair)' }}>
              <span className="w-10 h-10 bg-[#0d1f16] rounded-xl flex items-center justify-center text-white border-l-[3px] border-l-[#c8962e]"><BinocularsIcon className="w-5 h-5" /></span>
              Safari Vehicles
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm border-t-[3px] border-t-[#c8962e]">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-[#0a1a12] to-[#122a1c] text-white">
                  <tr>
                    <th className="px-5 py-4 text-left font-bold">Vehicle</th>
                    <th className="px-5 py-4 text-center font-bold">Max Passengers</th>
                    <th className="px-5 py-4 text-center font-bold">Per Day Rate</th>
                    <th className="px-5 py-4 text-center font-bold">Includes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { vehicle: '4x4 Land Cruiser', pax: '7', rate: 'From $300', includes: 'Driver-guide, fuel, water' },
                    { vehicle: 'Safari Minivan', pax: '7', rate: 'From $220', includes: 'Driver-guide, fuel, water' },
                    { vehicle: 'Open-Sided Game Viewer', pax: '7', rate: 'From $400', includes: 'Driver-guide, fuel, water' },
                  ].map((r, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#faf6ef]'} hover:bg-[#c8962e]/5 transition-colors`}>
                      <td className="px-5 py-4 font-bold text-[#0d1f16]">{r.vehicle}</td>
                      <td className="px-5 py-4 text-center text-gray-500">{r.pax}</td>
                      <td className="px-5 py-4 text-center font-extrabold text-[#c8962e]">{r.rate}</td>
                      <td className="px-5 py-4 text-center text-gray-500 text-xs">{r.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">* Safari vehicle rates include an English-speaking driver-guide, fuel, and fresh water. Park entry fees are separate.</p>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8962e]/40 to-transparent" />

      {/* ════════════════════════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-[#faf6ef]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#c8962e] font-bold tracking-[0.3em] uppercase text-xs">Why Choose C.A.T.S</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f16] mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>Your Journey, Our Priority</h2>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#c8962e] to-[#e8b84a] mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'handshake', title: 'Trusted Partner Network', desc: 'Every vehicle owner, driver, and transport operator in our network is vetted for safety, reliability, and service excellence.' },
              { icon: 'clock', title: '24/7 Availability', desc: 'Early morning flights, late-night arrivals, weekend getaways — our transport solutions are available around the clock, 365 days a year.' },
              { icon: 'wallet', title: 'Transparent Pricing', desc: 'No hidden fees, no surprises. Get a clear quote upfront with all costs included. What you see is what you pay.' },
              { icon: 'star', title: '15 Years of Experience', desc: 'With 15 years in East African travel and transport, we know the roads, the routes, and exactly what travellers need.' },
            ].map(item => (
              <div key={item.title} className="group text-center bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:shadow-[#c8962e]/10 hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-b-[3px] hover:border-b-[#c8962e]">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0d1f16] to-[#1a3d2b] rounded-2xl flex items-center justify-center text-white mx-auto mb-5 group-hover:scale-110 transition-transform shadow-lg shadow-[#0d1f16]/20 ring-2 ring-[#c8962e]/20">
                  {item.icon === 'handshake' ? <HandshakeIcon /> : item.icon === 'clock' ? <ClockLgIcon /> : item.icon === 'wallet' ? <WalletIcon /> : <StarIcon />}
                </div>
                <h3 className="text-lg font-extrabold text-[#0d1f16] mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8962e]/40 to-transparent" />

      {/* ════════════════════════════════════════════════════════
          CORPORATE TRANSPORT SERVICES
      ════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-white" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, rgba(13,31,22,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-6">
            <span className="text-[#c8962e] font-bold tracking-[0.3em] uppercase text-xs">Corporate Solutions</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0d1f16] mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>Tailored Transport for Business</h2>
            <p className="text-gray-500 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
              From executive airport transfers and conference shuttles to long-term fleet leasing across Nairobi, Mombasa, and East Africa &mdash; 
              C.A.T.S delivers reliable, professional corporate transport solutions built around your schedule and budget.
            </p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#c8962e] to-[#e8b84a] mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            {/* Corporate Car Hire */}
            <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#c8962e]/15 transition-all duration-500 cursor-pointer border border-transparent hover:border-[#c8962e]/20"
                 onClick={() => { const el = document.getElementById('enquiry'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
              <div className="relative h-52 md:h-64">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Corporate car hire Nairobi — executive sedan and SUV fleet for business travel in Kenya"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] to-transparent" />
                <span className="absolute bottom-4 left-6 inline-block bg-gradient-to-r from-[#c8962e] to-[#d4a017] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.15em] uppercase shadow-md">For Business</span>
              </div>
              <div className="bg-gradient-to-br from-[#0d1f16] to-[#122a1c] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Corporate Car Hire</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-5">
                  Need a premium vehicle for a day, a week, or an entire project? C.A.T.S connects you with 
                  late-model SUVs, executive sedans, and luxury MPVs through our trusted partner network &mdash; self-drive or with a professional chauffeur. Perfect for 
                  NGO field operations, diplomatic missions, conference logistics, and business travel across Kenya and East Africa.
                </p>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {['Self-Drive & Chauffeur', 'Daily / Weekly / Monthly', 'GPS Tracking', 'Fuel Plans Available', 'Insurance Included', 'Airport Delivery'].map(tag => (
                    <li key={tag} className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-[#c8962e]/20">{tag}</li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-[#e8b84a] font-bold group-hover:gap-4 transition-all">
                  <span>Enquire Now</span>
                  <span className="text-xl">&rarr;</span>
                </div>
              </div>
            </div>

            {/* Corporate Leasing */}
            <div className="group rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#c8962e]/15 transition-all duration-500 cursor-pointer border border-transparent hover:border-[#c8962e]/20"
                 onClick={() => { const el = document.getElementById('enquiry'); el?.scrollIntoView({ behavior: 'smooth' }); }}>
              <div className="relative h-52 md:h-64">
                <Image
                  src="https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Corporate vehicle leasing Kenya — long-term fleet leasing contracts for businesses in Nairobi"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a12] to-transparent" />
                <span className="absolute bottom-4 left-6 inline-block bg-gradient-to-r from-[#c8962e] to-[#d4a017] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-[0.15em] uppercase shadow-md">Long-Term</span>
              </div>
              <div className="bg-gradient-to-br from-[#0d1f16] to-[#122a1c] p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Corporate Leasing</h3>
                <p className="text-gray-200 text-sm leading-relaxed mb-5">
                  Lock in a dedicated fleet without the overhead of ownership. The C.A.T.S corporate leasing programme offers 3-month, 6-month, and 
                  12-month contracts on SUVs, minivans, buses, and safari vehicles &mdash; maintained, insured, and delivered to your doorstep. 
                  Ideal for tour operators, hotels, schools, embassies, and organisations operating across Nairobi, Mombasa, and upcountry Kenya.
                </p>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {['3 / 6 / 12 Month Terms', 'Maintained & Insured', 'Replacement Guarantee', 'Dedicated Account Manager', 'Fleet Branding Available', 'Nationwide Coverage'].map(tag => (
                    <li key={tag} className="bg-white/10 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-[#c8962e]/20">{tag}</li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-[#e8b84a] font-bold group-hover:gap-4 transition-all">
                  <span>Get a Leasing Quote</span>
                  <span className="text-xl">&rarr;</span>
                </div>
              </div>
            </div>
          </div>

          {/* Corporate Benefits Bar */}
          <div className="mt-14 bg-gradient-to-r from-[#0a1a12] to-[#122a1c] rounded-2xl p-8 md:p-10 border border-[#c8962e]/15">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { stat: '50+', label: 'Corporate Clients Served' },
                { stat: '200+', label: 'Vehicles in Partner Network' },
                { stat: '24/7', label: 'Roadside Support' },
                { stat: '98%', label: 'On-Time Delivery Rate' },
              ].map(item => (
                <div key={item.label}>
                  <div className="text-3xl md:text-4xl font-black text-[#e8b84a]">{item.stat}</div>
                  <div className="text-white/80 text-sm mt-1">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          CTA BANNER
      ════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=1800" alt="Safari fleet" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a12]/97 to-[#0a1a12]/88" />
        </div>
        {/* Gold ornamental lines */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8962e]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8962e]/50 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Ready to Hit the Road?</h2>
            <p className="text-gray-300 text-lg">Get a free quote in under 2 hours. Airport pickups, safaris, events — we&apos;ve got you covered.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button onClick={scrollToForm} className="bg-gradient-to-r from-[#c8962e] to-[#d4a017] hover:from-[#b8860b] hover:to-[#c8962e] text-white font-bold px-10 py-4 rounded-xl transition-all shadow-xl shadow-[#c8962e]/30 text-lg hover:ring-2 hover:ring-[#e8b84a]/50">
              Make an Enquiry
            </button>
            <a href="tel:+254723951388" className="border-2 border-[#c8962e]/40 hover:border-[#e8b84a] text-white font-bold px-8 py-4 rounded-xl transition-all text-lg flex items-center gap-2">
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
          FAQ ACCORDION
      ════════════════════════════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <span className="text-[#c8962e] font-bold tracking-[0.3em] uppercase text-xs">FAQs</span>
          <h2 className="text-3xl font-extrabold text-[#0d1f16] mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>Frequently Asked Questions</h2>
          <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#c8962e] to-[#e8b84a] mx-auto mt-5" />
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className={`bg-white rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-all duration-300 ${expandedFaq === i ? 'border-l-[3px] border-l-[#c8962e] border-gray-100' : 'border-gray-100'}`}>
              <button
                onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left font-bold text-[#0d1f16] hover:bg-[#faf6ef]/50 transition-all"
              >
                <span className="pr-4">{faq.question}</span>
                <span className={`text-[#c8962e] text-2xl flex-shrink-0 transition-transform duration-300 ${expandedFaq === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              {expandedFaq === i && (
                <div className="px-7 pb-5 text-gray-600 text-sm leading-relaxed border-t border-[#c8962e]/15 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#c8962e]/40 to-transparent" />

      {/* ════════════════════════════════════════════════════════
          CONTACT / ENQUIRY FORM — Split layout
      ════════════════════════════════════════════════════════ */}
      <section ref={formRef} id="enquiry" className="bg-gradient-to-br from-[#0d1f16] to-[#0a1a12] py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#c8962e] font-bold tracking-[0.3em] uppercase text-xs">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3" style={{ fontFamily: 'var(--font-playfair)' }}>Make a Transport Enquiry</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Fill out the form and our team will respond within 2 hours during business hours.
            </p>
            <div className="w-[60px] h-[2px] bg-gradient-to-r from-[#c8962e] to-[#e8b84a] mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-[#c8962e]/15">
                <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>Get in Touch</h3>
                <div className="space-y-5">
                  {[
                    { icon: 'phone', label: 'Phone / WhatsApp', value: '+254 723 951 388', href: 'tel:+254723951388' },
                    { icon: 'email', label: 'Email', value: 'info@catssafaris.com', href: 'mailto:info@catssafaris.com' },
                    { icon: 'pin', label: 'Location', value: 'Nairobi, Kenya', href: '' },
                    { icon: 'time', label: 'Availability', value: '24 hours, 7 days a week', href: '' },
                  ].map(c => (
                    <div key={c.label} className="flex items-start gap-4">
                      <span className="text-[#e8b84a] mt-0.5">{c.icon === 'phone' ? <PhoneIcon className="w-6 h-6" /> : c.icon === 'email' ? <EmailIcon className="w-6 h-6" /> : c.icon === 'pin' ? <MapPinIcon className="w-6 h-6" /> : <ClockIcon className="w-6 h-6" />}</span>
                      <div>
                        <div className="text-gray-400 text-xs uppercase tracking-[0.15em] mb-1">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-white font-semibold hover:text-[#e8b84a] transition-colors">{c.value}</a>
                        ) : (
                          <div className="text-white font-semibold">{c.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="https://wa.me/254723951388?text=Hello%20C.A.T.S!%20I%27d%20like%20to%20enquire%20about%20transport."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold py-4 rounded-xl transition-all shadow-lg w-full text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.75.75 0 00.913.913l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.592-.826-6.326-2.21l-.442-.365-3.044 1.02 1.02-3.044-.365-.442A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {formStatus === 'sent' ? (
                <div className="bg-green-500/10 border border-green-400/20 rounded-2xl p-12 text-center">
                  <div className="mx-auto mb-4 text-green-400"><CheckCircleIcon /></div>
                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair)' }}>Enquiry Sent!</h3>
                  <p className="text-gray-300">We&apos;ll get back to you within 2 hours. Check your email or WhatsApp.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-[#c8962e]/15 space-y-5 border-t-[3px] border-t-[#c8962e]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-300 text-sm font-semibold mb-2 block">Full Name *</label>
                      <input
                        type="text" required placeholder="Your full name"
                        value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-b-[#c8962e] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-semibold mb-2 block">Phone / WhatsApp *</label>
                      <input
                        type="tel" required placeholder="+254 7xx xxx xxx"
                        value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-b-[#c8962e] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm font-semibold mb-2 block">Email Address</label>
                    <input
                      type="email" placeholder="your@email.com"
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-b-[#c8962e] transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-300 text-sm font-semibold mb-2 block">Service Required *</label>
                      <select
                        required value={formData.serviceType} onChange={e => setFormData({...formData, serviceType: e.target.value})}
                        className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-b-[#c8962e] transition-all [&>option]:text-gray-800"
                      >
                        <option value="">Select a service</option>
                        <option>Airport Transfer (JKIA)</option>
                        <option>Airport Transfer (Wilson)</option>
                        <option>SGR / Syokimau Transfer</option>
                        <option>Self-Drive Car Hire</option>
                        <option>Chauffeur-Driven Hire</option>
                        <option>Safari / Excursion Vehicle</option>
                        <option>Wedding / Events Transport</option>
                        <option>Corporate / Group Transport</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-semibold mb-2 block">Vehicle Preference</label>
                      <select
                        value={formData.vehicleType} onChange={e => setFormData({...formData, vehicleType: e.target.value})}
                        className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-b-[#c8962e] transition-all [&>option]:text-gray-800"
                      >
                        <option value="">Select a vehicle (optional)</option>
                        <option>Toyota Harrier</option>
                        <option>Lexus SUV</option>
                        <option>Nissan X-Trail</option>
                        <option>Mazda CX-5</option>
                        <option>Toyota Prado</option>
                        <option>Toyota Noah</option>
                        <option>Toyota Alphard</option>
                        <option>22-Seater Coaster Bus</option>
                        <option>29-Seater Bus</option>
                        <option>51-Seater Bus</option>
                        <option>4x4 Land Cruiser</option>
                        <option>Safari Minivan</option>
                        <option>Open-Sided Game Viewer</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="text-gray-300 text-sm font-semibold mb-2 block">Travel Date</label>
                      <input
                        type="date"
                        value={formData.pickupDate} onChange={e => setFormData({...formData, pickupDate: e.target.value})}
                        className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-b-[#c8962e] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-semibold mb-2 block">Pickup Time</label>
                      <input
                        type="time"
                        value={formData.pickupTime} onChange={e => setFormData({...formData, pickupTime: e.target.value})}
                        className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-b-[#c8962e] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-semibold mb-2 block">Passengers</label>
                      <input
                        type="number" placeholder="e.g. 4" min="1"
                        value={formData.passengers} onChange={e => setFormData({...formData, passengers: e.target.value})}
                        className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-b-[#c8962e] transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-gray-300 text-sm font-semibold mb-2 block">Pickup Location</label>
                      <input
                        type="text" placeholder="e.g. JKIA, Hilton Hotel"
                        value={formData.pickupLocation} onChange={e => setFormData({...formData, pickupLocation: e.target.value})}
                        className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-b-[#c8962e] transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm font-semibold mb-2 block">Drop-off Location</label>
                      <input
                        type="text" placeholder="e.g. Serena Hotel, Mombasa"
                        value={formData.dropoffLocation} onChange={e => setFormData({...formData, dropoffLocation: e.target.value})}
                        className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-b-[#c8962e] transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm font-semibold mb-2 block">Details / Special Requests</label>
                    <textarea
                      rows={4} placeholder="Travel details, number of bags, any special requirements\u2026"
                      value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-white/8 border-b-2 border-white/20 border-t-0 border-l-0 border-r-0 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-b-[#c8962e] transition-all resize-none"
                    />
                  </div>
                  <p className="text-gray-500 text-xs">By submitting this form you agree to our <a href="/privacy" className="text-[#e8b84a] hover:underline">privacy policy</a>. Your data will only be used to respond to your enquiry.</p>
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full bg-gradient-to-r from-[#c8962e] via-[#d4a017] to-[#c8962e] hover:from-[#b8860b] hover:via-[#c8962e] hover:to-[#b8860b] text-white font-bold py-4 rounded-xl transition-all shadow-xl shadow-[#c8962e]/30 text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:ring-2 hover:ring-[#e8b84a]/40"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                        Sending...
                      </>
                    ) : (
                      'Send Enquiry'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
