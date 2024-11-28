import about from '../../assets/service/performance-marketing/performance-about.webp';
import { Link } from 'react-router-dom';

const YoutubeKeywords = () => {
  return (
    <div className="w-full lg:w-[90%] xl:w-[85%] mx-auto -mt-8 px-5 pb-5 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-12">
        {/* Left: Image */}
        <div className="w-full h-[300px] md:h-[350px] lg:h-[500px] lg:w-1/2 rounded-lg overflow-hidden group cursor-pointer">
          <img
            src={about}
            alt="Team working"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </div>

        {/* Right: Text and Stats */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {/* Title and description */}
          <div className="text-left">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-5">
              YouTube Ads Keywords
            </h2>
            <p className="text-gray-600">
              Key terms like TrueView, CPV, and YouTube Analytics are essential
              for optimizing ad performance, improving audience targeting, and
              maximizing the impact of your YouTube advertising campaigns.
              <Link
                to={'/contact'}
                className="ml-2 text-cardbg hover:text-blue-600"
              >
                Learn more...
              </Link>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-col-1 md:grid-cols-2 gap-6 ">
            {/* Adjusted the text alignment to center for uniformity */}
            {keywords?.map((item, index) => (
              <div key={index} className="myShadow2 p-5">
                <h3 className="text-xl  font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm lg:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeKeywords;

const keywords = [
  {
    id: 1,
    title: 'TrueView Ads',
    description:
      "A YouTube ad format that allows users to skip ads after five seconds, ensuring you're only charged for ads watched or engaged with.",
  },
  {
    id: 2,
    title: 'Cost Per View (CPV)',
    description:
      'A bidding model where advertisers pay based on the number of views or interactions (like clicks) their ad receives.',
  },
  {
    id: 3,
    title: 'YouTube Analytics',
    description:
      'A tool that helps measure the performance of your YouTube Ads, tracking key metrics such as views, watch time, and audience retention.',
  },
  {
    id: 4,
    title: 'Bumper Ads',
    description:
      'Short, non-skippable video ads that last up to six seconds, designed for brief but impactful messages.',
  },
];
