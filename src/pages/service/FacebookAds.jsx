import React from 'react';
import banner from '../../assets/service/facebookads/facebook.png';
import HeroSection from '../../components/Branding/HeroSection';
import CustomServicesCard from '../../components/CustomServicesCard';
import WebsiteCallAction from '../../components/webdevelopment/WebsiteCallAction';
import FacebookAdsProduct from '../../components/facebook-ads/FacebookAdsProduct';
import ProcessStep from '../../components/ProcessStep';
import CommonHeroSection from './CommonHeroSection';
import metaAd from '../../assets/service/allsetion/meta-ad.webp';
const FacebookAds = () => {
  return (
    <>
      {/* <HeroSection
        text={'Meta Ads Services'}
        content={
          'Empowering businesses with innovative advertising solutions. Drive targeted traffic and boost conversions with expertly managed Meta Ads campaigns that elevate your brand and engage customers.'
        }
        image={banner}
        imagePosition={'center'}
      /> */}
      <CommonHeroSection image={metaAd} />
      <div className="p-5 py-16">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Leveraging Meta Ads for Effective Advertising
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Leverage a number of tools to upgrade and enhance your ad campaign,
            including but not limited to, ad scheduling, geotargeting, audience
            segmentation analysis, conversion metrics tracking, retargeting, and
            vertical ad formats to boost engagement, dwindle costs and increase
            sales.
          </p>
          <CustomServicesCard services={adFeatures} />
        </div>
      </div>
      <WebsiteCallAction
        text={
          'Are You Having Issues Due to Your Facebook Ads Account Being Suspended?'
        }
        description={'Get High Quality Facebook Ads Agency Accounts from Us.'}
      />
      <div className="p-5 py-16">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Different Types of Google Ads Explained
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Discover the various types of Google Ads that enable businesses to
            effectively engage their target audience, enhance visibility, and
            drive traffic across multiple digital channels.
          </p>
          <CustomServicesCard services={adTypes} />
        </div>
      </div>
      <FacebookAdsProduct />
      <div className="mt-14">
        <ProcessStep
          step={'Deliverables of Facebook Ads Project'}
          description={
            'The project includes key deliverables, such as audience research, ad creative design,campaigns setup, landing pages enhancement, conducting performance analysis, and comprehensive reporting to enable successful execution of the campaign.'
          }
          processStages={facebookAdCampaignSteps}
        />
      </div>
    </>
  );
};

export default FacebookAds;

const adFeatures = [
  {
    title: 'Ad Scheduling',
    description:
      'Schedule your ads for specific time frames and days to ensure maximum response from your audience.',
    icon: '⏰',
  },
  {
    title: 'Geotargeting',
    description:
      'Target your ads in specific areas to reach relevant audiences.',
    icon: '📍',
  },
  {
    title: 'Audience Insights',
    description:
      'Gain deeper understanding of your audience to strategize and improve campaign effectiveness.',
    icon: '👥',
  },
  {
    title: 'Conversion Tracking',
    description:
      'Analyze user behavior after interacting with your ad to assess its effectiveness.',
    icon: '📈',
  },
  {
    title: 'Retargeting',
    description:
      'Show ads to users who have visited your website before, using reminder advertisements.',
    icon: '🔁',
  },
  {
    title: 'Ad Formats',
    description:
      'Enhance your ads with various formats like carousel ads, video ads, and slideshow ads.',
    icon: '🎨',
  },
];

const adTypes = [
  {
    title: 'Feed Ads',
    description:
      "Ads that contain text, images, and videos, appearing within social media users' News Feeds.",
    icon: '🔍',
  },
  {
    title: 'Story Ads',
    description:
      'Full-screen vertical ad formats that are placed within Facebook Stories.',
    icon: '📖',
  },
  {
    title: 'Video Ads',
    description:
      'Ads that play within Facebook videos or before, in between, or after other videos.',
    icon: '🎥',
  },
  {
    title: 'Carousel Ads',
    description:
      'Ads with multiple images or videos, allowing users to scroll through.',
    icon: '🛒',
  },
  {
    title: 'Instant Experience Ads',
    description:
      'Full-screen ads that quickly engage users by taking up the whole screen.',
    icon: '📱',
  },
  {
    title: 'Local Awareness Ads',
    description:
      'Ads aimed at reaching customers within the vicinity of the business.',
    icon: '📍',
  },
];

const facebookAdCampaignSteps = [
  {
    id: 1,
    title: 'Audience Research',
    description:
      'Conduct comprehensive audience research to identify the right demographics and audience interests aligned with campaign goals.',
  },
  {
    id: 2,
    title: 'Ad Creative Development',
    description:
      'Develop ad creatives that fit various formats, align with brand identity, and communicate core messages effectively.',
  },
  {
    id: 3,
    title: 'Campaign Setup',
    description:
      'Set up Facebook Ads campaigns, including account structure, targeting features, and budget distribution based on campaign goals.',
  },
  {
    id: 4,
    title: 'Landing Page Optimization',
    description:
      'Optimize landing pages to improve user experience, conversion rates, and ensure consistency with ad messages.',
  },
  {
    id: 5,
    title: 'Performance Monitoring',
    description:
      'Continuously monitor key performance indicators such as CTR, CPC, conversion rates, and audience targeting to enhance efficiency.',
  },
  {
    id: 6,
    title: 'Reporting and Analysis',
    description:
      'Generate reports on campaign results, insights, and data-driven suggestions for improvement in future campaigns.',
  },
];
