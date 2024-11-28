import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="web-image relative">
      {/* Overlay */}
      <div className="w-full h-full bg-black/40 absolute top-0 left-0 transition-opacity duration-300 ease-in-out"></div>

      {/* Content */}
      <div className="w-full p-5 md:w-[90%] lg:w-[85%] xl:w-4/5 mx-auto relative z-10">
        <div className="w-full lg:w-4/5 py-5">
          <div className="w-full h-full flex flex-col gap-10">
            {/* Service List */}
            <div className="flex gap-5 flex-wrap">
              {['Web Design', 'Web Development', 'E-commerce', 'Shopify'].map(
                (item, index) => (
                  <div key={index} className="flex gap-2 items-center">
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                    <span className="text-base md:text-lg font-medium text-gray-900">
                      {item}
                    </span>
                  </div>
                )
              )}
            </div>

            {/* Main Heading */}
            <h1 className="w-full text-center md:text-left lg:w-4/5 text-4xl md:text-6xl font-bold text-gray-50">
              We let the website design speak for you!
            </h1>

            {/* Stats Section */}
            <StatsSection />
            {/* Call to Action Button */}
            <div className="text-center md:text-left">
              <button
                onClick={() => navigate('/Contact')}
                className="w-auto text-white px-6 py-3 rounded text-md lg:text-lg font-semibold hover:opacity-80 bg-gradient-to-r from-primary via-cardbg to-secondary transition animate-gradient-text"
              >
                Get Website Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const statsData = [
    {
      icon: '🎉',
      number: '5 +',
      description: 'Years In Business',
    },
    {
      icon: '😊',
      number: '500 +',
      description: 'Happy Clients',
    },
    {
      icon: '👥',
      number: '20 +',
      description: 'Team Size',
    },
    {
      icon: '🏆',
      number: '115 +',
      description: 'Active Clients',
    },
  ];

  return (
    <div className="h-auto">
      <div className=" w-full md:w-[90%] mr-auto  grid grid-cols-2  lg:grid-cols-4 gap-2 md:gap-5 ">
        {statsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 md:p-5 text-center bg-gray-50 rounded"
          >
            <div className="flex items-center justify-center p-3 md:p-5 bg-gradient-to-r from-black/40 to-secondary/10 rounded-full mb-4 text-2xl">
              {item.icon}
            </div>
            <h3 className="text-xl md:text-4xl font-bold text-gray-800 ">
              {item.number}
            </h3>
            <p className="text-base md:text-lg text-gray-800">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
