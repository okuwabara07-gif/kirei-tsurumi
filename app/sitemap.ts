import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const baseUrl = 'https://kirei-tsurumi.com'

export const revalidate = 3600 // Revalidate every hour for fresh DB articles

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getAllPosts()
  const blogUrls = posts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))


  // Static pages
  const staticPages = [
    { url: baseUrl, priority: 1, changeFreq: 'weekly' },
    { url: `${baseUrl}/about`, priority: 0.8, changeFreq: 'monthly' },
    { url: `${baseUrl}/access`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/menu`, priority: 0.7, changeFreq: 'monthly' },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFreq: 'weekly' },
    { url: `${baseUrl}/diagnosis`, priority: 0.8, changeFreq: 'monthly' },
    { url: `${baseUrl}/recruit`, priority: 0.6, changeFreq: 'monthly' },
    { url: `${baseUrl}/contact`, priority: 0.6, changeFreq: 'monthly' },
    { url: `${baseUrl}/privacy`, priority: 0.5, changeFreq: 'monthly' },
    { url: `${baseUrl}/disclaimer`, priority: 0.3, changeFreq: 'yearly' },
    { url: `${baseUrl}/tokusho`, priority: 0.3, changeFreq: 'yearly' },
  ]

  const staticUrls = staticPages.map(page => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFreq as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: page.priority,
  }))

  // Deduplicate by URL (combine static + blog URLs, remove duplicates)
  const allUrls = [...staticUrls, ...blogUrls]
  const seenUrls = new Set<string>()
  const deduped = allUrls.filter(item => {
    if (seenUrls.has(item.url)) return false
    seenUrls.add(item.url)
    return true
  })

  return deduped
}
