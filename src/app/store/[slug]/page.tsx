import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { getStoreItems, getStoreItemBySlug } from '@/lib/content';
import MDXContent from '@/components/MDXContent';

dayjs.extend(localizedFormat);

interface StoreItemPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const items = getStoreItems();
  return items.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: StoreItemPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getStoreItemBySlug(slug);

  if (!item) {
    return {
      title: 'Item Not Found',
    };
  }

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      images: item.heroImage ? [item.heroImage] : undefined,
    },
  };
}

export default async function StoreItemPage({ params }: StoreItemPageProps) {
  const { slug } = await params;
  const item = getStoreItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const displayDate = dayjs(item.updatedDate).format('ll');

  return (
    <main className="md:flex md:justify-center">
      <article className="prose prose-lg max-w-[750px] prose-img:mx-auto">
        {item.heroImage && (
          <Image
            width={750}
            height={422}
            src={item.heroImage}
            alt={item.title}
            className="w-full mb-6 rounded-lg"
          />
        )}
        <div>
          <h1 className="title my-2 text-4xl font-bold">
            {item.title}
            {item.badge && <div className="badge badge-secondary mx-2">{item.badge}</div>}
          </h1>
          <div className="flex place-content-between items-center">
            <div className="grow md:grow-0">
              <span className="text-xl mr-1">{item.pricing}</span>
              {item.oldPricing && (
                <span className="text-md opacity-50 line-through">{item.oldPricing}</span>
              )}
            </div>
            <div>
              {item.custom_link && (
                <a
                  className="btn btn-outline grow md:grow-0 ml-4"
                  href={item.custom_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.custom_link_label}
                </a>
              )}
              {item.checkoutUrl && (
                <a
                  className="btn btn-primary grow md:grow-0 ml-4"
                  href={item.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Now
                </a>
              )}
            </div>
          </div>
          <p className="text-sm opacity-60 mt-2">Last updated: {displayDate}</p>
        </div>
        <div className="divider my-2"></div>
        <MDXContent content={item.content} />
      </article>
    </main>
  );
}
