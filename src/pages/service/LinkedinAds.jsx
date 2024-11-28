import banner from '../../assets/service/linkedin/linkdin-banner.jpg';
import AddShootGallery from '../../components/ad_shoot/AddShootGallery';
import HeroSection from '../../components/Branding/HeroSection';
import CustomServicesCard from '../../components/CustomServicesCard';
import image1 from '../../assets/service/linkedin/linkedin-1.jpg';
import image2 from '../../assets/service/linkedin/linkedin-2.jpg';
import WebsiteCallAction from '../../components/webdevelopment/WebsiteCallAction';
import ProcessStep from '../../components/ProcessStep';
import CommonHeroSection from './CommonHeroSection';
import linkedin from '../../assets/service/allsetion/linkedin.webp';
const LinkedinAds = () => {
  return (
    <>
      {/* <HeroSection
        text={'LinkedIn Ads'}
        content={
          'Unlock your business potential with targeted LinkedIn Ads—reach your ideal audience, boost engagement, and drive meaningful conversions effortlessly!'
        }
        image={banner}
        imagePosition={''}
      /> */}
      <CommonHeroSection image={linkedin} />
      <div className="p-5 py-16">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Elevate Your Marketing with Expert LinkedIn Ads Agency
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Leverage LinkedIn Ads to connect with professionals, enhance brand
            visibility, generate leads, and drive engagement through targeted
            campaigns tailored to your business goals.
          </p>
          <CustomServicesCard services={linkedinAdsFeatures} />
        </div>
      </div>
      <AddShootGallery items={items} />
      <WebsiteCallAction
        text={'Need Help with Your LinkedIn Advertising Strategy?'}
        description={
          'We offer tailored solutions to enhance your LinkedIn Ads performance and drive valuable leads.'
        }
      />

      <div className="p-5 py-16">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Different Types of LinkedIn Ads Explained
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Explore the various types of LinkedIn Ads designed to help
            businesses connect with professionals, build brand awareness, and
            generate quality leads.
          </p>
          <CustomServicesCard services={linkedinAdsTypes} />
        </div>
      </div>
      <ProcessStep
        step={'Comprehensive LinkedIn Ads Project Deliverables'}
        description={
          'Providing full-fledged LinkedIn Ads solutions, such as audience targeting, creative development, campaign management, performance tracking, and reporting for achieving business objectives.'
        }
        processStages={projectDeliverables}
      />
    </>
  );
};

export default LinkedinAds;

const linkedinAdsFeatures = [
  {
    id: 1,
    title: 'Audience Targeting',
    description:
      'Define your audience by job title, industry, and more for precise reach.',
    icon: '🎯',
  },
  {
    id: 2,
    title: 'Sponsored Content',
    description:
      'Promote your posts to increase visibility and engagement on the platform.',
    icon: '📢',
  },
  {
    id: 3,
    title: 'Lead Gen Forms',
    description:
      'Capture leads directly from your ads without leaving LinkedIn.',
    icon: '📝',
  },
  {
    id: 4,
    title: 'InMail Messaging',
    description:
      "Send personalized messages directly to your target audience's inbox.",
    icon: '📬',
  },
  {
    id: 5,
    title: 'Conversion Tracking',
    description:
      'Measure the actions users take after interacting with your ads to optimize performance.',
    icon: '📈',
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    description:
      'Gain insights into your ad performance with detailed analytics and reporting.',
    icon: '📊',
  },
];

const items = [
  {
    id: 1,
    title: 'LinkedIn Campaign Management',
    src: image1,
    alt: 'LinkedIn Campaign Management',
    description:
      'Expert management of your LinkedIn ad campaigns to maximize reach and engagement, driving valuable leads to your business.',
  },
  {
    id: 2,
    title: 'Performance Analytics',
    src: image2,
    alt: 'Performance Analytics',
    description:
      'In-depth analysis of your LinkedIn ad performance, providing insights and strategies for continuous improvement and growth.',
  },
];

const linkedinAdsTypes = [
  {
    id: 1,
    title: 'Sponsored Content',
    description:
      'Promoted posts that appear in the LinkedIn feed, increasing visibility and engagement.',
    icon: '📢',
  },
  {
    id: 2,
    title: 'Text Ads',
    description:
      'Simple ads that appear on the sidebar, combining catchy headlines with a call-to-action.',
    icon: '✍️',
  },
  {
    id: 3,
    title: 'InMail Ads',
    description:
      "Personalized messages sent directly to LinkedIn members' inboxes for targeted outreach.",
    icon: '📬',
  },
  {
    id: 4,
    title: 'Video Ads',
    description:
      'Engaging video content that appears in the feed, allowing brands to tell their story visually.',
    icon: '🎥',
  },
  {
    id: 5,
    title: 'Dynamic Ads',
    description:
      "Personalized ads that adapt to the viewer's profile, increasing relevance and engagement.",
    icon: '✨',
  },
  {
    id: 6,
    title: 'Carousel Ads',
    description:
      'Ads featuring multiple images or videos that users can swipe through, showcasing different products or stories.',
    icon: '📚',
  },
];

const projectDeliverables = [
  {
    id: 1,
    title: 'Audience Targeting',
    description:
      'Define and segment target audiences based on demographics, interests, and job titles to enhance ad relevance.',
  },
  {
    id: 2,
    title: 'Ad Creative Development',
    description:
      'Create visually engaging ad creatives and copy that resonate with professionals and align with brand messaging.',
  },
  {
    id: 3,
    title: 'Campaign Setup',
    description:
      'Establish LinkedIn ad campaigns, including selecting ad formats, targeting options, and budget management.',
  },
  {
    id: 4,
    title: 'Lead Gen Forms Optimization',
    description:
      'Design and optimize lead generation forms to capture quality leads effectively, ensuring a seamless user experience.',
  },
  {
    id: 5,
    title: 'Performance Monitoring',
    description:
      'Continuously track key performance indicators (KPIs) such as engagement rates, conversion rates, and cost per lead.',
  },
  {
    id: 6,
    title: 'Reporting and Insights',
    description:
      'Deliver comprehensive reports on campaign performance, providing actionable insights and recommendations for future strategies.',
  },
];
