import { Metadata } from 'next';
import HorizontalCard from '@/components/ui/HorizontalCard';
import { getBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <>
      <div className="mb-5">
        <div className="text-3xl w-full font-bold">Blog</div>
      </div>

      {posts.length === 0 ? (
        <div className="bg-base-200 border-l-4 border-secondary w-full p-4 min-w-full">
          <p className="font-bold">Sorry!</p>
          <p>There are no blog posts to show at the moment. Check back later!</p>
        </div>
      ) : (
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
      )}
    </>
  );
}
