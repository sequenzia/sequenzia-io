import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  img: string;
  desc: string;
  url: string;
  badge?: string;
  tags?: string[];
  target?: '_blank' | '_self';
}

export default function Card({
  title,
  img,
  desc,
  url,
  badge,
  tags,
  target = '_blank',
}: CardProps) {
  const CardContent = (
    <div className="card bg-base-100 transition ease-in-out hover:shadow-xl mx-6 my-2 hover:scale-[102%]">
      <Image
        width={750}
        height={422}
        src={img}
        alt={title}
        className="rounded-t-2xl"
      />
      <div className="card-body">
        <h2 className="card-title">
          {title}
          {badge && <div className="badge badge-secondary">{badge}</div>}
        </h2>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          {tags?.map((tag) => (
            <div key={tag} className="badge badge-outline">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (target === '_blank') {
    return (
      <div className="md:w-1/3 w-full">
        <a href={url} target="_blank" rel="noopener noreferrer">
          {CardContent}
        </a>
      </div>
    );
  }

  return (
    <div className="md:w-1/3 w-full">
      <Link href={url}>{CardContent}</Link>
    </div>
  );
}
