import { Metadata } from 'next';
import HorizontalShopItem from '@/components/ui/HorizontalShopItem';
import { getStoreItems } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Store',
};

export default function StorePage() {
  const items = getStoreItems();

  return (
    <>
      <div className="mb-5">
        <div className="text-3xl w-full font-bold">Store</div>
      </div>

      {items.length === 0 ? (
        <div className="bg-base-200 border-l-4 border-secondary w-full p-4 min-w-full">
          <p className="font-bold">Coming Soon!</p>
          <p>There are no items in the store at the moment. Check back later!</p>
        </div>
      ) : (
        <ul>
          {items.map((item) => (
            <div key={item.slug}>
              <HorizontalShopItem
                title={item.title}
                img={item.heroImage}
                desc={item.description}
                pricing={item.pricing}
                oldPricing={item.oldPricing}
                badge={item.badge}
                url={`/store/${item.slug}`}
              />
              <div className="divider my-0" />
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
