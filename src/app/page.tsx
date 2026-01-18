import HorizontalCard from '@/components/ui/HorizontalCard';
import { getBlogPosts } from '@/lib/content';

export default function Home() {
  const posts = getBlogPosts();
  const lastPosts = posts.slice(0, 3);

  return (
    <>
      <div className="pb-12 mt-5">
        <div className="text-xl py-1">Hey there</div>
        <div className="text-5xl font-bold">I&apos;m Stephen Sequenzia</div>
        <div className="text-3xl py-3 font-bold">ML/AI Engineer</div>
        <div className="py-2">
          <span className="text-lg">
            Building intelligent systems and machine learning solutions.
            Specializing in deep learning, NLP, and production ML pipelines.
          </span>
        </div>
        <div className="mt-8">
          <a
            className="btn"
            href="mailto:stephen@sequenzia.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let&apos;s connect!
          </a>
          <a
            href="https://github.com/ssequenzia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline ml-5"
          >
            GitHub
          </a>
        </div>
      </div>

      <div>
        <div className="text-3xl w-full font-bold mb-2">My last projects {`</>`}</div>
      </div>

      <HorizontalCard
        title="Demo Project 1"
        img="/post_img.webp"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        url="#"
        badge="NEW"
      />
      <div className="divider my-0"></div>
      <HorizontalCard
        title="Demo Project 2"
        img="/post_img.webp"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        url="#"
      />
      <div className="divider my-0"></div>
      <HorizontalCard
        title="Demo Project 3"
        img="/post_img.webp"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        url="#"
        badge="FOSS"
      />

      <div>
        <div className="text-3xl w-full font-bold mb-5 mt-10">Latest from blog</div>
      </div>

      {lastPosts.map((post) => (
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
    </>
  );
}
