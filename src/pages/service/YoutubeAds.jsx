import React from 'react';
import HeroSection from '../../components/Branding/HeroSection';
import banner from '../../assets/service/youtubeads/youtube.jpg';
import image1 from '../../assets/service/performance-marketing/image1.webp';
import image2 from '../../assets/service/performance-marketing/image2.jpg';
import image3 from '../../assets/service/performance-marketing/image3.jpg';
import practice1 from '../../assets/service/performance-marketing/pratice1.jpg';
import practice2 from '../../assets/service/performance-marketing/practice2.webp';
import practice3 from '../../assets/service/performance-marketing/practice3.webp';
import CustomCard from '../../components/CustomCard';
import YoutubeKeywords from '../../components/performance-marketing/YoutubeKeywords';
import ProcessStep from '../../components/ProcessStep';
import CommonHeroSection from './CommonHeroSection';
import youtube from '../../assets/service/allsetion/youtube.webp';
const YouTubeAds = () => {
  return (
    <>
      {/* <HeroSection
        text={'YouTube Ads'}
        content={
          'Providing full-fledged LinkedIn Ads solutions, such as audience targeting, creative development, campaign management, performance tracking, and reporting for achieving business objectives.'
        }
        image={banner}
        imagePosition={'center'}
      /> */}
      <CommonHeroSection image={youtube} />
      <div className="p-8 py-16">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            YouTube Ads Approaches
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Maximize the impact of your YouTube Ads by utilizing effective
            strategies, including audience targeting, captivating video content,
            and measurable analytics to boost engagement and conversions.
          </p>
        </div>
        <div className="-mt-12">
          <CustomCard data={approaches} />
        </div>
      </div>
      <YoutubeKeywords />
      <div className="p-8 py-16">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Best Practices in YouTube Advertising
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Implement best practices like engaging storytelling, optimized ad
            placements, and performance monitoring to ensure your YouTube Ads
            deliver results that matter.
          </p>
        </div>
        <div className="-mt-12">
          <CustomCard data={bestPractices} />
        </div>
      </div>
      <div className="-mt-8">
        <ProcessStep
          step={'YouTube Ads Campaign Process'}
          description={
            'From initial consultation and video production to targeting, launch, and campaign optimization, we provide a comprehensive process that ensures your YouTube ads generate the best possible outcomes.'
          }
          processStages={projectDeliverables}
        />
      </div>
    </>
  );
};

export default YouTubeAds;

const approaches = [
  {
    id: 1,
    title: 'Compelling Video Content',
    description:
      'Create engaging video ads that capture attention and communicate your message clearly within the first few seconds.',
    imageUrl: image1,
  },
  {
    id: 2,
    title: 'Audience Targeting',
    description:
      'Reach the right people by using YouTube’s advanced targeting options, including demographics, interests, and custom audiences.',
    imageUrl: image2,
  },
  {
    id: 3,
    title: 'Skippable and Non-Skippable Ads',
    description:
      'Use different ad formats like skippable in-stream ads or non-skippable ads to tailor your campaign to the audience’s viewing preferences.',
    imageUrl: image3,
  },
];

const bestPractices = [
  {
    id: 1,
    title: 'Engaging Storytelling',
    description:
      'Create videos that tell a compelling story and connect with the audience on an emotional level, encouraging them to take action.',
    imageUrl: practice1,
  },
  {
    id: 2,
    title: 'Optimized Ad Placement',
    description:
      'Strategically place ads in front of relevant content or channels to maximize visibility and engagement.',
    imageUrl: practice2,
  },
  {
    id: 3,
    title: 'Performance Tracking',
    description:
      'Monitor key metrics like view rate, cost-per-view, and conversions to assess ad performance and optimize for better results.',
    imageUrl: practice3,
  },
];

const projectDeliverables = [
  {
    id: 1,
    title: 'Consultation and Strategy',
    description:
      'Discuss goals, define target audience, and craft a tailored YouTube Ads strategy to ensure alignment with objectives.',
  },
  {
    id: 2,
    title: 'Video Production',
    description:
      'Produce high-quality video ads that captivate the audience and deliver your message effectively.',
  },
  {
    id: 3,
    title: 'Targeting and Campaign Setup',
    description:
      'Configure YouTube Ads campaigns with precise audience targeting, ensuring your ads are shown to relevant viewers.',
  },
  {
    id: 4,
    title: 'Campaign Launch',
    description:
      'Launch your YouTube Ads campaign and monitor its performance, making adjustments where necessary for better outcomes.',
  },
  {
    id: 5,
    title: 'Optimization',
    description:
      'Continuously optimize your campaign by analyzing data and making adjustments to maximize engagement and conversion rates.',
  },
  {
    id: 6,
    title: 'Reporting and Insights',
    description:
      'Provide comprehensive reports on campaign performance, offering insights and recommendations for future improvements.',
  },
];
