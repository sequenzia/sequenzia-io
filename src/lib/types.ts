export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: string;
  heroImage?: string;
  badge?: string;
  tags?: string[];
  content: string;
}

export interface StoreItem {
  slug: string;
  title: string;
  description: string;
  custom_link_label: string;
  custom_link?: string;
  updatedDate: Date;
  pricing?: string;
  oldPricing?: string;
  badge?: string;
  checkoutUrl?: string;
  heroImage?: string;
  content: string;
}
