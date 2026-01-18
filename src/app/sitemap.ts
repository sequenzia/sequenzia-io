import { MetadataRoute } from 'next';
import { getBlogPosts, getStoreItems, getAllTags } from '@/lib/content';

export const dynamic = 'force-static';

const BASE_URL = 'https://sequenzia.io';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts();
  const items = getStoreItems();
  const tags = getAllTags();

  const blogPosts = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.pubDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const storeItems = items.map((item) => ({
    url: `${BASE_URL}/store/${item.slug}`,
    lastModified: item.updatedDate,
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  const tagPages = tags.map((tag) => ({
    url: `${BASE_URL}/blog/tag/${tag}`,
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/store`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/cv`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...blogPosts,
    ...storeItems,
    ...tagPages,
  ];
}
