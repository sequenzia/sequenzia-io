import { Metadata } from 'next';
import TimeLine from '@/components/cv/TimeLine';

export const metadata: Metadata = {
  title: 'Resume',
};

export default function CVPage() {
  return (
    <>
      <div className="mb-5">
        <div className="text-3xl w-full font-bold">Profile</div>
      </div>

      <div className="mb-10 text-justify">
        ML/AI Engineer with expertise in building production-grade machine learning systems.
        Experienced in deep learning, natural language processing, and scalable ML infrastructure.
        Passionate about turning research into practical applications that solve real-world problems.
      </div>

      <div className="mb-5">
        <div className="text-3xl w-full font-bold">Education</div>
      </div>

      <div className="time-line-container grid gap-4 mb-10">
        <TimeLine
          title="Master of Science in Computer Science"
          subtitle="2018 to 2020 at University Name, City, Country"
        >
          Specialized in Machine Learning and Artificial Intelligence.
        </TimeLine>
        <TimeLine
          title="Bachelor of Science in Computer Science"
          subtitle="2014 to 2018 at University Name, City, Country"
        >
          Focus on algorithms, data structures, and software engineering.
        </TimeLine>
      </div>

      <div className="mb-5">
        <div className="text-3xl w-full font-bold">Experience</div>
      </div>

      <div className="time-line-container mb-10">
        <TimeLine
          title="Senior ML Engineer at Tech Company"
          subtitle="From 2022 to Present at Company Name, City"
        >
          Leading the development of production ML pipelines and infrastructure.
          Building and deploying large language models for enterprise applications.
          Mentoring junior engineers and establishing ML best practices.
        </TimeLine>
        <TimeLine
          title="ML Engineer at Startup"
          subtitle="From 2020 to 2022 at Company Name, City"
        >
          Developed computer vision models for real-time object detection.
          Built end-to-end ML pipelines from data collection to deployment.
          Reduced inference latency by 40% through model optimization.
        </TimeLine>
        <TimeLine
          title="Software Engineer at Tech Company"
          subtitle="From 2018 to 2020 at Company Name, City"
        >
          Developed backend services and APIs using Python and Go.
          Implemented data processing pipelines for analytics.
          Contributed to the transition towards microservices architecture.
        </TimeLine>
      </div>

      <div className="mb-5">
        <div className="text-3xl w-full font-bold">Certifications</div>
      </div>

      <ul className="list-disc mx-6 mb-10 grid gap-2">
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            AWS Machine Learning Specialty
          </a>
        </li>
        <li>
          <a href="#" target="_blank" rel="noopener noreferrer">
            Google Cloud Professional ML Engineer
          </a>
        </li>
      </ul>

      <div className="mb-5">
        <div className="text-3xl w-full font-bold">Skills</div>
      </div>

      <ul className="list-disc md:columns-5 columns-2 mx-6">
        <li>Python</li>
        <li>PyTorch</li>
        <li>TensorFlow</li>
        <li>Transformers</li>
        <li>LLMs</li>
        <li>MLOps</li>
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>AWS</li>
        <li>GCP</li>
        <li>SQL</li>
        <li>Go</li>
        <li>TypeScript</li>
        <li>Git</li>
        <li>Linux</li>
      </ul>
    </>
  );
}
