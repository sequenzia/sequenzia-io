import Image from 'next/image';
import Link from 'next/link';

interface HorizontalShopItemProps {
  title: string;
  img?: string;
  desc: string;
  url: string;
  badge?: string;
  pricing?: string;
  oldPricing?: string;
}

export default function HorizontalShopItem({
  title,
  img,
  desc,
  url,
  badge,
  pricing,
  oldPricing,
}: HorizontalShopItemProps) {
  return (
    <div className="rounded-lg bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%]">
      <Link href={url}>
        <div className="hero-content flex-col md:flex-row">
          {img && (
            <Image
              width={750}
              height={422}
              src={img}
              alt={title}
              className="max-w-full md:max-w-[13rem] rounded-lg"
            />
          )}
          <div className="grow w-full p-5 md:p-0">
            <h1 className="text-xl font-bold">
              {title}
              {badge && <div className="badge badge-secondary mx-2">{badge}</div>}
            </h1>
            <div>
              <span className="text-xl mr-1">{pricing}</span>
              {oldPricing && (
                <span className="text-md opacity-50 line-through">{oldPricing}</span>
              )}
            </div>
            <p className="py-1 text-1xl">{desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
