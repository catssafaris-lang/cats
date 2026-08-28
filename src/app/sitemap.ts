import { safaris } from '@/data/safaris';
import { experiences } from '@/data/experiences';
import { blogPosts } from '@/data/blog';

export default function sitemap() {
  const baseUrl = 'https://www.catssafaris.com';

  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/kenya-safaris', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/tanzania-safaris', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/kenya-uganda-safaris', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/kenya-rwanda-safaris', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/holiday-experiences', priority: 0.9, changeFrequency: 'weekly' as const },
    { url: '/flights', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/domestic-flights', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/kenya-flight-safaris', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/flight-search', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/mountain-climbing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/wellness-travel', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/transport-solutions', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/travel-info/kenya-lodges', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/travel-info/tanzania-lodges', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/travel-info/rwanda-lodges', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/travel-info/uganda-lodges', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/faqs', priority: 0.6, changeFrequency: 'monthly' as const },
    { url: '/payment-methods', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  const safariPages = safaris.map((s) => ({
    url: `/safari/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const experiencePages = experiences.map((e) => ({
    url: `/holiday-experiences/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const blogPages = blogPosts.map((p) => ({
    url: `/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages.map((p) => ({
      url: `${baseUrl}${p.url}`,
      lastModified: new Date(),
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...safariPages.map((p) => ({ ...p, url: `${baseUrl}${p.url}` })),
    ...experiencePages.map((p) => ({ ...p, url: `${baseUrl}${p.url}` })),
    ...blogPages.map((p) => ({ ...p, url: `${baseUrl}${p.url}` })),
  ];
}
