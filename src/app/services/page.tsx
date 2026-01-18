import { Metadata } from 'next';
import HorizontalCard from '@/components/ui/HorizontalCard';

export const metadata: Metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  return (
    <>
      <div>
        <div className="text-3xl w-full font-bold mb-5">Services</div>
      </div>

      <HorizontalCard
        title="ML Consulting"
        img="/post_img.webp"
        desc="Expert guidance on machine learning strategy, architecture, and implementation for your organization."
        badge="Popular"
        url="#"
      />
      <div className="divider my-0"></div>
      <HorizontalCard
        title="Model Development"
        img="/post_img.webp"
        desc="Custom machine learning model development tailored to your specific use case and requirements."
        url="#"
      />
      <div className="divider my-0"></div>
      <HorizontalCard
        title="MLOps Implementation"
        img="/post_img.webp"
        desc="End-to-end ML pipeline setup including training, deployment, monitoring, and maintenance."
        url="#"
        badge="NEW"
      />
      <div className="divider my-0"></div>
      <HorizontalCard
        title="Technical Training"
        img="/post_img.webp"
        desc="Workshops and training sessions on ML/AI topics for your engineering teams."
        url="#"
      />
    </>
  );
}
