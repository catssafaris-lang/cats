'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  if (!images || images.length === 0) return null;

  const openImage = (index: number) => setSelectedIndex(index);
  const closeModal = () => setSelectedIndex(null);
  const prevImage = () => setSelectedIndex(i => i !== null ? (i - 1 + images.length) % images.length : null);
  const nextImage = () => setSelectedIndex(i => i !== null ? (i + 1) % images.length : null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((img, index) => (
          <button key={index} onClick={() => openImage(index)} className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer">
            <Image src={img} alt={`${alt} ${index + 1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 50vw, 25vw" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={closeModal}>
          <button onClick={closeModal} className="absolute top-4 right-4 text-white/80 hover:text-white z-10"><X className="w-8 h-8" /></button>
          <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 text-white/80 hover:text-white z-10"><ChevronLeft className="w-10 h-10" /></button>
          <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 text-white/80 hover:text-white z-10"><ChevronRight className="w-10 h-10" /></button>
          <div className="relative w-full max-w-5xl aspect-video mx-4" onClick={e => e.stopPropagation()}>
            <Image src={images[selectedIndex]} alt={`${alt} ${selectedIndex + 1}`} fill className="object-contain" sizes="100vw" />
          </div>
          <p className="absolute bottom-4 text-white/60 text-sm">{selectedIndex + 1} / {images.length}</p>
        </div>
      )}
    </>
  );
}
