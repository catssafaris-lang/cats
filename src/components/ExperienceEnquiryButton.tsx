'use client';

import { Mail } from 'lucide-react';

interface Experience {
  title: string;
  slug?: string;
}

interface Props {
  experience: Experience;
  variant?: 'primary' | 'outline';
  label?: string;
}

export default function ExperienceEnquiryButton({ experience, variant = 'primary', label = 'Enquire Now' }: Props) {
  const subject = encodeURIComponent(`Enquiry: ${experience.title}`);
  const body = encodeURIComponent(`Hello,\n\nI am interested in the "${experience.title}" experience. Please send me more details including availability and pricing.\n\nThank you.`);

  const baseClasses = "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-sm";
  const variantClasses = variant === 'primary'
    ? "bg-green-800 hover:bg-green-700 text-white shadow-lg hover:shadow-xl"
    : "border-2 border-green-800 text-green-800 hover:bg-green-50";

  return (
    <a href={`mailto:info@catssafaris.com?subject=${subject}&body=${body}`} className={`${baseClasses} ${variantClasses}`}>
      <Mail className="w-4 h-4" />
      {label}
    </a>
  );
}
