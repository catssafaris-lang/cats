'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { BlogPost } from '@/data/blog';

export default function BlogFilters({ posts }: { posts: BlogPost[] }) {
  const categories = ['All', ...Array.from(new Set(posts.map((post) => post.category)))];
  const [category, setCategory] = useState('All');
  const filtered = useMemo(
    () => category === 'All' ? posts : posts.filter((post) => post.category === category),
    [category, posts]
  );

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-12" aria-label="Filter blog posts by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${category === item ? 'bg-[var(--golden-savannah)] text-white' : 'bg-white text-[var(--forest-canopy)] hover:bg-[var(--savannah-dust)]'}`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.slug} className="group overflow-hidden rounded-2xl border border-stone-100 bg-white shadow-sm transition-shadow hover:shadow-xl">
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-56 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--forest-canopy)]">{post.category}</span>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs text-stone-500"><time>{post.date}</time><span aria-hidden="true">|</span><span>{post.readTime}</span></div>
                <h2 className="font-playfair mb-3 text-2xl font-bold text-[var(--forest-canopy)] transition-colors group-hover:text-[var(--golden-savannah)]">{post.title}</h2>
                <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-stone-600">{post.excerpt}</p>
                <span className="font-semibold text-[var(--golden-savannah)]">Read article</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </>
  );
}
