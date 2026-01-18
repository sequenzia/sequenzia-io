'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HorizontalCardProps {
  title: string;
  img?: string;
  desc: string;
  url: string;
  badge?: string;
  tags?: string[];
  target?: '_blank' | '_self';
}

export default function HorizontalCard({
  title,
  img,
  desc,
  url,
  badge,
  tags,
  target = '_blank',
}: HorizontalCardProps) {
  const router = useRouter();
  const tagUrl = url.split('/').slice(0, -1).join('/') + '/tag';

  const handleCardClick = () => {
    if (target === '_blank') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      router.push(url);
    }
  };

  return (
    <div
      className="rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%] cursor-pointer"
      onClick={handleCardClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
    >
      <div className="hero-content flex-col md:flex-row">
        {img && (
          <Image
            src={img}
            width={750}
            height={422}
            alt={title}
            className="max-w-full md:max-w-[13rem] rounded-lg"
          />
        )}
        <div className="grow w-full">
          <h1 className="text-xl font-bold">
            {title}
            {badge && <div className="badge badge-secondary mx-2">{badge}</div>}
          </h1>
          <p className="py-1 text-1xl">{desc}</p>
          {tags && tags.length > 0 && (
            <div className="card-actions justify-end">
              {tags.map((tag) => (
                <Link
                  key={tag}
                  href={`${tagUrl}/${tag}`}
                  className="badge badge-outline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
