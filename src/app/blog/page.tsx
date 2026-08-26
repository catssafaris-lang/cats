import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog';
import BlogFilters from './BlogFilters';

export const metadata: Metadata = {
  title: 'Safari Travel Journal',
  description: 'Safari planning advice, wildlife stories and travel inspiration from C.A.T.S Safaris in Kenya and Tanzania.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#4F5D56] px-4 pb-20 pt-40 text-center text-white sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--golden-savannah)]">The C.A.T.S Journal</p>
        <h1 className="font-playfair mx-auto mb-5 max-w-4xl text-4xl font-bold md:text-6xl">Stories from the wild</h1>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">Practical ideas, destination notes and thoughtful inspiration for your next East African journey.</p>
      </section>
      <section className="bg-[var(--warm-ivory)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl"><BlogFilters posts={blogPosts} /></div>
      </section>
    </>
  );
}
