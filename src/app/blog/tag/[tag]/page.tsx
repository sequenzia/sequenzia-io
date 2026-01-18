import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HorizontalCard from '@/components/ui/HorizontalCard';
import { getPostsByTag, getAllTags } from '@/lib/content';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag,
  }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `Blog - ${tag}`,
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <>
      <div className="mb-5">
        <div className="text-3xl w-full font-bold">Blog - {tag}</div>
      </div>

      <ul>
        {posts.map((post) => (
          <div key={post.slug}>
            <HorizontalCard
              title={post.title}
              img={post.heroImage}
              desc={post.description}
              url={`/blog/${post.slug}`}
              target="_self"
              badge={post.badge}
              tags={post.tags}
            />
            <div className="divider my-0" />
          </div>
        ))}
      </ul>
    </>
  );
}
