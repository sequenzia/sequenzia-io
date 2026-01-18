import { Metadata } from 'next';
import HorizontalCard from '@/components/ui/HorizontalCard';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function ProjectsPage() {
  return (
    <>
      <div>
        <div className="text-3xl w-full font-bold mb-5">Machine Learning Projects</div>
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

      <div>
        <div className="text-3xl w-full font-bold mb-5 mt-10">Open Source</div>
      </div>

      <HorizontalCard
        title="Demo Project 3"
        img="/post_img.webp"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        url="#"
        badge="FOSS"
      />
      <div className="divider my-0"></div>
      <HorizontalCard
        title="Demo Project 4"
        img="/post_img.webp"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        url="#"
      />
      <div className="divider my-0"></div>
      <HorizontalCard
        title="Demo Project 5"
        img="/post_img.webp"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        url="#"
      />
    </>
  );
}
