import { Link } from 'react-router-dom';
import about from '../../assets/service/performance-marketing/performance-about.webp';

const PerformanceKeyword = () => {
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
              Why Choose PandaGuys?
            </h2>
            <p className="text-gray-600">
              We have years of experience in this particular industry and we
              have a proven record of providing excellent performance for
              clients as well.
              {/* <Link
                to={'/contact'}
                className="ml-2 text-cardbg hover:text-blue-600"
              >
                Know more...
              </Link> */}
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

export default PerformanceKeyword;

const keywords = [
  {
    id: 1,
    title: 'Data-driven',
    description:
      'Monitoring, tracking, and campaign analysis guarantee you a maximum return on investment.',
    imageUrl: '',
  },
  {
    id: 2,
    title: 'Tailored Solutions',
    description:
      'Each business is unique; thus, we customize strategies based on your goals.',
    imageUrl: '',
  },
  {
    id: 3,
    title: 'Dedicated Team',
    description:
      'We make sure that nothing except quality service comes from our hands of well-trained skilled teams, guaranteed to cater to your needs.',
    imageUrl: '',
  },
  {
    id: 4,
    title: 'Global Reach',
    description:
      "Headquartered in India, we have been recognized as the year's digital advertising company of the year. With our means, we are able to touch the masses from all around the world.",
    imageUrl: '',
  },
];