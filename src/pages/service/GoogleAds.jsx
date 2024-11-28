import banner from '../../assets/service/google-ads/google-ads.webp';
import HeroSection from '../../components/Branding/HeroSection';
import CustomServicesCard from '../../components/CustomServicesCard';
import GoogleAdsProduct from '../../components/google-ads/GoogleAdsProduct';
import ProcessStep from '../../components/ProcessStep';
import WebsiteCallAction from '../../components/webdevelopment/WebsiteCallAction';
import CommonHeroSection from './CommonHeroSection';
import googleAd from '../../assets/service/allsetion/google-ad.webp';

const GoogleAds = () => {
  return (
    <>
      {/* <HeroSection
        text={'Google Ads Services'}
        content={
          'Enhancing business capabilities using creativeGoogle Ads. Attract Relevant Traffic & Increase Sales with expertly handled Google advertising campaigns that showcase your brand and captivate your clients.'
        }
        image={banner}
        imagePosition={'center'}
      /> */}
      <CommonHeroSection image={googleAd} />
      <div className="p-5 py-16">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Maximize Your Advertising with Google Ads
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Enhance your ad campaigns with features like scheduling,
            geotargeting, keyword planning, conversion tracking, remarketing,
            and ad extensions to maximize engagement and drive results.
          </p>
          <CustomServicesCard services={googleAdsFeatures} />
        </div>
      </div>
      <WebsiteCallAction
        text={'Are You Facing Problems With Your Google Ads Suspension ?'}
        description={'We provide High Quality Google Ads Agency Accounts.'}
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
          <CustomServicesCard services={googleAdsTypes} />
        </div>
      </div>
      <GoogleAdsProduct />
      <div className="mt-14">
        <ProcessStep
          step={'Google Ads Services'}
          // description={
          //   'This project encompasses key deliverables such as keyword research, ad copy creation, campaign setup, landing page optimization, performance monitoring, and detailed reporting for campaign success.'
          // }
          processStages={projectDeliverables}
        />
      </div>
    </>
  );
};

export default GoogleAds;

const googleAdsFeatures = [
  {
    id: 1,
    title: 'Ad Scheduling',
    description:
      'Set specific times and days to display your ads for optimal engagement.',
    icon: '⏰',
  },
  {
    id: 2,
    title: 'Geotargeting',
    description:
      'Show your ads in specific locations to reach the right audience.',
    icon: '📍',
  },
  {
    id: 3,
    title: 'Keyword Planner',
    description: 'Discover new keywords to improve your campaign performance.',
    icon: '🔍',
  },
  {
    id: 4,
    title: 'Conversion Tracking',
    description:
      'Track actions that users take after clicking on your ad to measure success.',
    icon: '📈',
  },
  {
    id: 5,
    title: 'Remarketing',
    description:
      'Target users who have previously interacted with your site with personalized ads.',
    icon: '🔁',
  },
  {
    id: 6,
    title: 'Ad Extensions',
    description:
      'Enhance your ads with additional information such as phone numbers or links.',
    icon: '🔗',
  },
];

const googleAdsTypes = [
  {
    id: 1,
    title: 'Search Ads',
    description: 'Text-based ads that appear on search engine results pages.',
    icon: '🔍',
  },
  {
    id: 2,
    title: 'Display Ads',
    description: 'Visual ads displayed on websites, apps, and videos.',
    icon: '🖼️',
  },
  {
    id: 3,
    title: 'Video Ads',
    description:
      'Ads that appear before, during, or after videos on platforms like YouTube.',
    icon: '🎥',
  },
  {
    id: 4,
    title: 'Shopping Ads',
    description:
      'Product listings that appear on Google search results and Google Shopping.',
    icon: '🛒',
  },
  {
    id: 5,
    title: 'App Ads',
    description: 'Promote your mobile app across Google’s largest properties.',
    icon: '📱',
  },

  {
    id: 6,
    title: 'Local Ads',
    description: 'Ads that help you reach customers in your local area.',
    icon: '📍',
  },
];

const projectDeliverables = [
  {
    id: 1,
    title: 'Keyword Research',
    description:
      'Carry out detailed keyword research as part of Google Ads Services in order to pinpoint the best keywords that would reach the target audience in terms of the advertising campaign goals, further improving the efficiency of advertising activities in our ad agency.',
  },
  {
    id: 2,
    title: 'Ad Copy Creation',
    description:
      'Create captivating ad copy in different formats while observing brand guidelines and effectively conveying the core ideas. The advertising agency writes a good copy that speaks to your target market.',
  },
  {
    id: 3,
    title: 'Campaign Setup',
    description:
      'Implement Google Ads Services campaigns within the preceding category of the structure of the account, criteria, and budget according to specific purposes. Rely on our ad agency to develop fruitful campaigns.',
  },
  {
    id: 4,
    title: 'Landing Page',
    description:
      'Optimization Perform landing page optimization for better user interface and increased conversions while ensuring the adverts are consistent. The advertising agency works to ensures that the landing pages are appropriate.',
  },
  {
    id: 5,
    title: 'Performance Monitoring',
    description:
      'Monitor campaign performance metrics, such as CTR, CPC, conversions on specific timelines to determine the success of the campaign and mitigation strategies in place. Our ad agency offers ongoing management to maximize your returns on investment from our Google Ads Services ',
  },
  {
    id: 6,
    title: 'Reporting and Analysis',
    description:
      'Report on the findings of campaigns conducted, changes observed and suggestions for improvement for the next campaigns supported by data. Let our advertising agency handle the appropriate reporting and insight gathering for you.',
  },
];
