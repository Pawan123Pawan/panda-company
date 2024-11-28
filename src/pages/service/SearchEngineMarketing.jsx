import React from 'react';
import banner from '../../assets/service/performance-marketing/7541683.jpg';
import image1 from '../../assets/service/performance-marketing/image1.webp';
import image2 from '../../assets/service/performance-marketing/image2.jpg';
import image3 from '../../assets/service/performance-marketing/image3.jpg';
import practice1 from '../../assets/service/performance-marketing/pratice1.jpg';
import practice2 from '../../assets/service/performance-marketing/practice2.webp';
import practice3 from '../../assets/service/performance-marketing/practice3.webp';
import HeroSection from '../../components/Branding/HeroSection';
import ProcessStep from '../../components/ProcessStep';
import CustomCard from '../../components/CustomCard';
import SearchKeyword from '../../components/performance-marketing/PerformanceKeyword';
import CommonHeroSection from './CommonHeroSection';
import SEM from '../../assets/service/allsetion/search-e-marketing.webp';
const SearchEngineMarketing = () => {
  return (
    <>
      {/* <HeroSection
        text={'Search Engine Marketing'}
        content={
          'Boost visibility and drive traffic with targeted SEM strategies that increase your brand’s reach through paid search campaigns and optimize ad performance.'
        }
        image={banner}
        imagePosition={'center'}
      /> */}
      <CommonHeroSection image={SEM} />
      <div className="p-8 py-16">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Increasing Visibility through SEM Strategies
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Utilize focused SEM strategies to enhance your brand's visibility
            above and beyond the paid search campaigns and enhance ad
            performance.
          </p>
        </div>
        <div className="-mt-12">
          <CustomCard data={approaches} />
        </div>
      </div>
      <SearchKeyword />
      <div className="p-8 py-16">
        <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Best Practices for Ad Performance
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Best practices include optimizing ad copy, utilizing negative
            keywords, and analyzing quality scores to improve ad relevance,
            lower costs, and boost performance.
          </p>
        </div>
        <div className="-mt-12">
          <CustomCard data={bestPractices} />
        </div>
      </div>
      <div className="-mt-8">
        <ProcessStep
          step={'Search Engine Marketing Process'}
          description={
            'From keyword research to campaign creation, ad optimization, and continuous performance tracking, our process ensures maximum effectiveness and adaptability.'
          }
          processStages={projectDeliverables}
        />
      </div>
    </>
  );
};

export default SearchEngineMarketing;

const approaches = [
  {
    id: 1,
    title: 'Improving Visibility through Paid Search Ads',
    description:
      'Focus on improving visibility with paid search ads, ad copy and targeting optimization, and careful budgeting to realize maximum potential ROI.',
    imageUrl: image1,
  },
  {
    id: 2,
    title: 'Successful Paid Search Advertising',
    description:
      'Bid on relevant keywords for users actively looking for your products or services, so that your search engine result will be enhanced.',
    imageUrl: image2,
  },
  {
    id: 3,
    title: 'Optimize Ad Copy',
    description:
      'Optimize ad text for higher engagements Improve your ad copy in terms of increasing click through rates and engagements. The target audience needs to get reached through the advertisements.',
    imageUrl: image3,
  },
];

const bestPractices = [
  {
    id: 1,
    title: 'Ad Copy Testing',
    description:
      'One of the most popular tests includes A/B testing on ad headlines and descriptions to determine variations with higher traffic potential.',
    imageUrl: practice1,
  },
  {
    id: 2,
    title: 'Negative Keywords',
    description:
      'Using negative keywords will ensure that your ads do not trigger against irrelevant searches, thus helping your budget efficiency.',
    imageUrl: practice2,
  },
  {
    id: 3,
    title: 'Quality Score Management',
    description:
      'Continuously monitor and optimize your Quality Scores for better advertisement relevance, reduced cost-per-click, and all-around optimization of your ad performance',
    imageUrl: practice3,
  },
];

const projectDeliverables = [
  {
    id: 1,
    title: 'Keyword Research',
    description:
      'Establishing search volume, competition and user intent to determine the most relevant and effective keywords.',
  },
  {
    id: 2,
    title: 'Ad Campaign Creation',
    description:
      'Designing an advertisement campaign comprising of a distinct set of keywords fleshed out with a catchy ad and a call for action.',
  },
  {
    id: 3,
    title: 'Ad Group Optimization',
    description:
      'Combining the keywords into ad groups that are tightly connected to each other thus achieving better targeting at higher quality scores.',
  },
  {
    id: 4,
    title: 'Bid Management',
    description:
      'Use automated and manual bid strategies to maximize ROI and control ad spend while targeting the most valuable search queries.',
  },
  {
    id: 5,
    title: 'Performance Tracking and Reporting',
    description:
      'Track ad performance in real time and adjust bids, keywords, and ad copy based on key metrics such as click-through rates and conversions.',
  },
  {
    id: 6,
    title: 'Campaign Optimization',
    description:
      'Regularly optimize campaigns by analyzing performance data, refining targeting, and adjusting budgets to improve results.',
  },
  {
    id: 7,
    title: 'Final Review and Future Strategy',
    description:
      'Review campaign outcomes and provide actionable recommendations for future SEM strategies and ad performance improvements.',
  },
];
