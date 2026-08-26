import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';

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
