import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/content';
import MDXContent from '@/components/MDXContent';

dayjs.extend(localizedFormat);

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      images: post.heroImage ? [post.heroImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const displayDate = dayjs(post.pubDate).format('ll');

  return (
    <main className="md:flex md:justify-center">
      <article className="prose prose-lg max-w-[750px] prose-img:mx-auto">
        {post.heroImage && (
          <Image
            width={750}
            height={422}
            src={post.heroImage}
            alt={post.title}
            className="w-full mb-6 rounded-lg"
          />
        )}
        <h1 className="title my-2 text-4xl font-bold">{post.title}</h1>
        {post.pubDate && <time>{displayDate}</time>}
        <br />
        {post.badge && <div className="badge badge-secondary my-1">{post.badge}</div>}
        {post.tags?.map((tag) => (
          <Link
            key={tag}
            href={`/blog/tag/${tag}`}
            className="badge badge-outline ml-2 no-underline"
          >
            {tag}
          </Link>
        ))}
        {post.updatedDate && (
          <div>
            Last updated on <time>{post.updatedDate}</time>
          </div>
        )}
        <div className="divider my-2"></div>
        <MDXContent content={post.content} />
      </article>
    </main>
  );
}
