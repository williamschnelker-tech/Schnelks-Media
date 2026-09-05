import type { MetadataRoute } from 'next';

const BASE_URL = 'https://schnelks-media.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/services', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/work', changeFrequency: 'monthly' as const, priority: 0.8 },
    { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/privacy-policy', changeFrequency: 'yearly' as const, priority: 0.3 },
    { path: '/sms-terms', changeFrequency: 'yearly' as const, priority: 0.3 },
  ];

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
