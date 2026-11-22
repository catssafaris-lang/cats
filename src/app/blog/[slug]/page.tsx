import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { getRelatedSafaris } from '@/data/blogRelated';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Article Not Found', alternates: { canonical: `/blog/${slug}` } };
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/blog/${slug}` } };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();
  const related = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 2);
  const relatedSafaris = getRelatedSafaris(post.slug);
  const fallbackRelated = related.length ? related : blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="relative flex min-h-[480px] items-end overflow-hidden text-white md:min-h-[560px]">
        <Image src={post.image} alt={post.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-40 sm:px-6 lg:px-8">
          <Link href="/blog" className="mb-6 inline-block text-sm font-semibold text-white/80 hover:text-white">Back to the journal</Link>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[var(--golden-savannah)]">{post.category}</p>
          <h1 className="font-playfair mb-4 max-w-4xl text-4xl font-bold md:text-6xl">{post.title}</h1>
          <div className="flex gap-3 text-sm text-white/75"><time>{post.date}</time><span aria-hidden="true">|</span><span>{post.readTime}</span></div>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-3 lg:px-8">
        <article className="prose prose-stone max-w-none lg:col-span-2">
          {post.content.split(/\n\n+/).map((paragraph, index) => <p key={index} className="mb-6 text-lg leading-8 text-stone-700">{paragraph}</p>)}
          <section className="not-prose mt-12 rounded-2xl border border-[var(--forest-canopy)]/15 bg-white p-6 md:p-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6435]">Turn this guide into a trip</p>
            <h2 className="font-playfair mb-6 text-2xl font-bold text-[var(--forest-canopy)] md:text-3xl">Safaris Related to This Article</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {relatedSafaris.map((s) => (
                <Link key={s.slug} href={`/safari/${s.slug}`} className="group block overflow-hidden rounded-xl border border-stone-200 transition-shadow hover:shadow-lg">
                  <div className="relative h-36 w-full"><Image src={s.image} alt={s.title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" /></div>
                  <div className="p-4">
                    <h3 className="font-playfair mb-2 text-base font-bold leading-snug text-[var(--forest-canopy)] group-hover:text-[#7a6435]">{s.title.split('|')[0].trim()}</h3>
                    <p className="text-xs text-stone-600">{s.durationUnit === 'hours' ? `${s.duration} hours` : `${s.duration} ${s.duration === 1 ? 'day' : 'days'}`} · From ${s.priceFrom.toLocaleString()}</p>
                    <span className="mt-3 inline-block text-sm font-semibold text-[var(--forest-canopy)] underline-offset-4 group-hover:underline">Book This Safari →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </article>
        <aside className="lg:col-span-1">
          <div className="sticky top-28 rounded-2xl bg-[var(--savannah-dust)] p-6">
            <h2 className="font-playfair mb-5 text-2xl font-bold text-[var(--forest-canopy)]">More to explore</h2>
            <div className="space-y-5">
              {fallbackRelated.map((item) => <Link key={item.slug} href={`/blog/${item.slug}`} className="group block border-b border-[var(--forest-canopy)]/15 pb-5 last:border-0 last:pb-0"><p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--golden-savannah)]">{item.category}</p><h3 className="font-playfair text-lg font-bold text-[var(--forest-canopy)] group-hover:text-[var(--golden-savannah)]">{item.title}</h3></Link>)}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
