'use client';

import { useQuoteModal } from '@/context/QuoteModalContext';

interface Experience {
  title: string;
  slug: string;
}

interface ExperienceEnquiryButtonProps {
  experienceName?: string;
  slug?: string;
  experience?: Experience;
  variant?: 'primary' | 'outline';
  label?: string;
}

export default function ExperienceEnquiryButton({ experienceName, slug, experience, variant = 'primary', label }: ExperienceEnquiryButtonProps) {
  const { openModal } = useQuoteModal();

  const name = experienceName || experience?.title || 'Experience';
  const expSlug = slug || experience?.slug || '';
  const buttonLabel = label || 'Enquire About This Experience';

  const baseClasses = "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold transition-all text-base";
  const variantClasses = variant === 'outline'
    ? "border-2 border-[#a68b52] text-[#5c4d42] hover:bg-[#a68b52] hover:text-white"
    : "bg-[#a68b52] hover:bg-[#8a7343] text-white shadow-lg hover:shadow-xl";

  return (
    <button
      onClick={() => openModal(name, `https://www.catssafaris.com/holiday-experiences/${expSlug}`)}
      className={`${baseClasses} ${variantClasses}`}
    >
      {buttonLabel}
    </button>
  );
}
