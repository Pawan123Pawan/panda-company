import banner from '../../assets/service/seo/seo-banner.png';
import CustomServicesCard from '../../components/CustomServicesCard';
import ProcessStep from '../../components/ProcessStep';
import WebsiteCallAction from '../../components/webdevelopment/WebsiteCallAction';
import CommonHeroSection from './CommonHeroSection';
import SEO from '../../assets/service/allsetion/search-engine.webp';
const SearchEngineOptimization = () => {
  return (
    <>
      {/* <div className="bg-gradient-to-r from-primary/30 to-secondary p-5 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-[90%] xl:w-[85%] mx-auto">
          <div className="w-full h-full flex flex-col justify-center gap-4">
            <div className="text-center md:text-left text-lg lg:text-xl text-primary font-semibold tracking-wider">
              Service
            </div>
            <h1 className="text-center md:text-left text-3xl lg:text-5xl text-shadow font-extrabold text-gray-800">
              Search Engine Optimization (SEO)
            </h1>
           
            <p className="w-full text-center md:text-left lg:w-4/5 font-medium text-gray-700 text-base md:text-lg lg:text-xl tracking-wide">
              We'll increase organic traffic for your website with our
              professional SEO. We're here to make improvements to rankings for
              the business online within a search engine. Let's turn all those
              clicks into customers!
            </p>
          </div>
          <div>
            <img src={banner} alt="SEO banner" />
          </div>
        </div>
      </div> */}
      <CommonHeroSection image={SEO} />
      <div className="p-5 py-16">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Maximize Your Online Presence with SEO
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Improve your website's search engine optimization through deep
            strategies, which will include on-page SEO, technical SEO, building
            backlinks, content optimization, and more. Get the highest ranks and
            organic traffic for your site today. Let us get your website soaring
            up in the search engines now!
          </p>
          <CustomServicesCard services={seoFeatures} />
        </div>
      </div>
      <WebsiteCallAction
        text={'Struggling with Low Website Traffic?'}
        description={
          'We provide comprehensive SEO solutions to help you rank higher and attract more visitors.'
        }
      />
      <div className="p-5 py-16">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Essential SEO Strategies Explained
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Learn about the core SEO strategies that help businesses gain higher
            search engine rankings and attract more organic traffic to their
            websites.
          </p>
          <CustomServicesCard services={seoStrategies} />
        </div>
      </div>
      <div className="mt-14">
        <ProcessStep
          step={'SEO Project Deliverables'}
          description={
            'Our SEO services include comprehensive keyword research, on-page and technical optimization, content creation, backlink strategy, performance tracking, and detailed reporting.'
          }
          processStages={seoDeliverables}
        />
      </div>
    </>
  );
};

export default SearchEngineOptimization;

const seoFeatures = [
  {
    id: 1,
    title: 'On-Page SEO',
    description:
      'Enhance page elements to improve keyword relevance, user experience, and search engine visibility.',
    icon: '📝',
  },
  {
    id: 2,
    title: 'Technical SEO',
    description:
      'Optimize website for speed, mobile compatibility, structured data, and error-free crawling.',
    icon: '⚙️',
  },
  {
    id: 3,
    title: 'Backlink Building',
    description:
      'Build high-authority backlinks for credibility, ranking, and organic traffic growth.',
    icon: '🔗',
  },
  {
    id: 4,
    title: 'Keyword Research',
    description:
      'Identify high-traffic, relevant keywords for better search visibility and user retention.',
    icon: '🔍',
  },
  {
    id: 5,
    title: 'Content Optimization',
    description:
      'Make content readable, keyword-rich, and engaging with clear structure and headings.',
    icon: '📚',
  },
  {
    id: 6,
    title: 'Mobile Optimization',
    description:
      'Ensure responsive, fast, user-friendly design for mobile devices to boost rankings.',
    icon: '📱',
  },
];

const seoStrategies = [
  {
    id: 1,
    title: 'Local SEO',
    description:
      'Optimize your website to attract local customers through location-based searches.',
    icon: '📍',
  },
  {
    id: 2,
    title: 'E-commerce SEO',
    description:
      'Improve visibility of online stores through product page optimization.',
    icon: '🛒',
  },
  {
    id: 3,
    title: 'Voice Search SEO',
    description:
      'Optimize your content for voice search queries to capture a growing segment of users.',
    icon: '🎤',
  },
  {
    id: 4,
    title: 'Video SEO',
    description:
      'Increase your video content’s visibility on platforms like YouTube and Google.',
    icon: '🎥',
  },
  {
    id: 5,
    title: 'Technical SEO',
    description:
      'Ensure your site is crawlable, fast-loading, and error-free for better rankings.',
    icon: '⚙️',
  },
  {
    id: 6,
    title: 'International SEO',
    description:
      'Optimize your website for different languages and regions to reach global audiences.',
    icon: '🌍',
  },
];

const seoDeliverables = [
  {
    id: 1,
    title: 'Keyword Research',
    description:
      'Identify relevant keywords that complement your business and the search patterns of users.',
  },
  {
    id: 2,
    title: 'On-Page Optimization',
    description:
      'Improve meta descriptions, titles, headings, and content structure to boost relevance and rankings.',
  },
  {
    id: 3,
    title: 'Technical Audit',
    description:
      'Identify and fix technical issues to make the site’s layout search engine-friendly.',
  },
  {
    id: 4,
    title: 'Content Development',
    description:
      'Create original, SEO-optimized content that resonates with your target audience.',
  },
  {
    id: 5,
    title: 'Link Building',
    description:
      'Develop a strategy to acquire quality backlinks that enhance site authority and rankings.',
  },
  {
    id: 6,
    title: 'Analytics and Reporting',
    description:
      'Provide detailed reports analyzing tracked metrics for performance insights.',
  },
];
