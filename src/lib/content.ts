import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, StoreItem } from './types';
import createSlug from './createSlug';

const contentDirectory = path.join(process.cwd(), 'src/content');

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(contentDirectory, 'blog');
  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const filePath = path.join(blogDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const staticSlug = filename.replace(/\.mdx?$/, '');
    const slug = createSlug(data.title, staticSlug);

    return {
      slug,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDate),
      updatedDate: data.updatedDate,
      heroImage: data.heroImage,
      badge: data.badge,
      tags: data.tags,
      content,
    } as BlogPost;
  });

  return posts.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}

export function getAllTags(): string[] {
  const posts = getBlogPosts();
  const tagsSet = new Set<string>();
  posts.forEach((post) => {
    post.tags?.forEach((tag) => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getBlogPosts();
  return posts.filter((post) => post.tags?.includes(tag));
}

export function getStoreItems(): StoreItem[] {
  const storeDir = path.join(contentDirectory, 'store');
  const files = fs.readdirSync(storeDir).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

  const items = files.map((filename) => {
    const filePath = path.join(storeDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    const staticSlug = filename.replace(/\.mdx?$/, '');
    const slug = createSlug(data.title, staticSlug);

    return {
      slug,
      title: data.title,
      description: data.description,
      custom_link_label: data.custom_link_label,
      custom_link: data.custom_link,
      updatedDate: new Date(data.updatedDate),
      pricing: data.pricing,
      oldPricing: data.oldPricing,
      badge: data.badge,
      checkoutUrl: data.checkoutUrl,
      heroImage: data.heroImage,
      content,
    } as StoreItem;
  });

  return items.sort((a, b) => b.updatedDate.getTime() - a.updatedDate.getTime());
}

export function getStoreItemBySlug(slug: string): StoreItem | undefined {
  const items = getStoreItems();
  return items.find((item) => item.slug === slug);
}
