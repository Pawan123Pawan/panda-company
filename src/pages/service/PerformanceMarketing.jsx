import React from 'react';
import HeroSection from '../../components/Branding/HeroSection';
import banner from '../../assets/service/performance-marketing/7541683.jpg';
import image1 from '../../assets/service/performance-marketing/image1.webp';
import image2 from '../../assets/service/performance-marketing/image2.jpg';
import image3 from '../../assets/service/performance-marketing/image3.jpg';
import practice1 from '../../assets/service/performance-marketing/pratice1.jpg';
import practice2 from '../../assets/service/performance-marketing/practice2.webp';
import practice3 from '../../assets/service/performance-marketing/practice3.webp';
import CustomCard from '../../components/CustomCard';
import PerformanceKeyword from '../../components/performance-marketing/PerformanceKeyword';
import ProcessStep from '../../components/ProcessStep';
import CommonHeroSection from './CommonHeroSection';
import performance from '../../assets/service/allsetion/performance.webp';

const PerformanceMarketing = () => {
  return (
    <>
      {/* <HeroSection
        text={'Performance Marketing'}
        content={
          'Performance marketing approaches enhance your business growth, delivering measurable success through targeted advertising, data-driven optimization, and cross-channel marketing.'
        }
        image={banner}
        imagePosition={'center'}
      /> */}
      <CommonHeroSection image={performance} />
      <div className="p-8 py-16">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Performance Marketing Agency
          </h2>
          <p className="text-left text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            What do you do when you need to enhance your online presence with
            the help of a performance marketing and advertising agency? Look no
            further than PandaGuys, a top digital marketing agency in India
            offering a range of services, including SEO, PPC and social media
            marketing. We’ll be with you every step of the way whether you are
            an experienced business owner or just starting up and want to drive
            your business successfully online with the help of our
            professionals.
          </p>
        </div>
        <div className="-mt-12">
          <CustomCard data={approaches} />
        </div>
      </div>
      <PerformanceKeyword />
      <div className="p-8 py-16">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Best Practices in Performance Marketing
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Best practices include A/B testing, real-time analytics, and
            audience segmentation to improve ad performance, enhance user
            engagement, and optimize digital campaigns for better conversion
            rates.
          </p>
        </div>
        <div className="-mt-12">
          <CustomCard data={bestPractices} />
        </div>
      </div>
      <div className="-mt-8">
        <ProcessStep
          step={'Our Performance Marketing Services'}
          // description={
          //   'From kickoff meetings and market research to campaign strategy, creative assets, implementation, and ongoing optimization, we ensure effective performance tracking and valuable insights for future success.'
          // }
          processStages={projectDeliverables}
        />
      </div>
    </>
  );
};

export default PerformanceMarketing;

const approaches = [
  {
    id: 1,
    title: 'Data-Driven Optimization',
    description:
      'Leverage analytics and insights to optimize campaigns for maximum ROI and efficient budget allocation.',
    imageUrl: image1,
  },
  {
    id: 2,
    title: 'Cross-Channel Marketing',
    description:
      'Utilize multiple platforms like search, social, and display ads to enhance audience reach and engagement.',
    imageUrl: image2,
  },
  {
    id: 3,
    title: 'Targeted Advertising',
    description:
      'Reach specific demographics and segments with tailored messaging to increase conversion rates and customer acquisition.',
    imageUrl: image3,
  },
];

const bestPractices = [
  {
    id: 1,
    title: 'A/B Testing',
    description:
      'Experiment with different versions of ads or landing pages to identify the highest-performing variation.',
    imageUrl: practice1,
  },
  {
    id: 2,
    title: 'Real-Time Analytics',
    description:
      'Monitor campaign performance in real-time to make data-driven decisions and adjust strategies on the fly for optimal outcomes.',
    imageUrl: practice2,
  },
  {
    id: 3,
    title: 'Audience Segmentation',
    description:
      'Divide your audience into segments based on behavior, interests, or demographics to deliver more personalized and effective campaigns.',
    imageUrl: practice3,
  },
];

const projectDeliverables = [
  {
    id: 1,
    title: 'SEO',
    description:
      'Get more organic traffic and recognition for your website with our SEO expertise. <ul class="list-disc ml-4 my-2"><li>Keyword Research</li><li>Keyword-Enhanced Strategy</li><li>Information Resource Creation</li><li>On-page and Off-page SEO</li><li>Activities including Local SEO</li></ul>',
  },
  {
    id: 2,
    title: 'PPC',
    description:
      'Achieve quick results through focused and targeted PPC campaigns. <ul class="list-disc ml-4 my-2"><li>Google Ads PPC</li><li>Microsoft Advertising</li><li>Social Media Advertising</li></ul>',
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    description:
      'Engage with your target audience and build brand awareness through social platforms. <ul class="list-disc ml-4 my-2"><li>Content Generation</li><li>Community Marketing Ideas</li><li>Sources Marketing</li></ul>',
  },
  {
    id: 4,
    title: 'Content Creation',
    description:
      'Develop specific content for audiences to increase conversions and cost per action. <ul class="list-disc ml-4 my-2"><li>Blog Posts</li><li>Articles</li><li>White Papers</li><li>E-books and More</li></ul>',
  },
  {
    id: 5,
    title: 'Email Campaigns',
    description:
      'Execute effective email marketing campaigns to nurture opportunities and drive sales. <ul class="list-disc ml-4 my-2"><li>Email Campaigns and Execution</li><li>Email Campaigns</li><li>Design and Development</li><li>Automation</li><li>A/B Campaigns</li></ul>',
  },
  {
    id: 6,
    title: 'Performance Marketing Strategies',
    description:
      'Drive quality leads with business marketing strategies focused on B2B activities for CEOs, account-based marketers, content-based marketers, and email B2B marketers. <ul class="list-disc ml-4 my-2"><li>E-commerce Business Performance Marketing</li><li>Product Pages that Sell – Optimized Ad Content</li><li>Campaign Retargeting</li><li>A/B Campaigns</li></ul>',
  },
];
