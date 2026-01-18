import { getBlogPosts } from '@/lib/content';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/config';

export const dynamic = 'force-static';

const BASE_URL = 'https://sequenzia.io';

export async function GET() {
  const posts = getBlogPosts();

  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}/</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}/</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${post.pubDate.toUTCString()}</pubDate>
    </item>`
    )
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_TITLE}</title>
    <link>${BASE_URL}</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
