import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';

const SITE = 'https://kirei-tsurumi.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', '/menu', '/blog', '/access', '/about',
    '/recruit', '/contact', '/privacy',
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  let postPages: MetadataRoute.Sitemap = [];
  try {
    postPages = getAllPosts().map((p) => ({
      url: `${SITE}/blog/${p.slug}`,
      lastModified: p.date ? new Date(p.date) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
  } catch (e) {
    postPages = [];
  }

  return [...staticPages, ...postPages];
}
