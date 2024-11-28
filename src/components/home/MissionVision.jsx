import React, { useEffect } from 'react';
import AOS from 'aos';
const missionData = [
  {
    title: 'Mission',
    icon: '🎯',

    description:
      'Our mission is to help businesses grow by offering effective and creative digital marketing solutions. We focus on building strong connections, driving results, and supporting brands in the digital space.',
  },
  {
    title: 'Vision',
    icon: '👁️',
    description:
      'Our vision is to be a top digital marketing company, known for helping businesses succeed online. We aim to create a future where every brand can reach its full potential in the digital world.',
  },
];

const marketingStrategies = {
  title: 'Strategy',
  icon: '💎',
  description: '',
  strategies: [
    { id: 1, name: 'Market Research' },
    { id: 2, name: 'SEO & Content Marketing' },
    { id: 3, name: 'Social Media Marketing' },
    { id: 4, name: 'Paid Advertising (PPC)' },
    { id: 5, name: 'Email Marketing' },
    { id: 6, name: 'Analytics & Optimization' },
    { id: 7, name: 'Influencer & Affiliate Marketing' },
    { id: 8, name: 'Many more' },
  ],
};

const MissionVision = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="relative w-full missionImage h-[40vh] lg:h-[50vh] -z-10">
        {/* overlay */}
        <div className="w-full h-full absolute top-0 left-0 bg-primary/50"></div>
      </div>
      <div className="flex justify-end z-10">
        {/* bg-gradient-to-r from-primary via-secondary to-primary */}
        <section
          data-aos="fade-left"
          className="w-[95%] md:w-[80%] lg:w-[55%] p-6 bg-primary/90 text-white -mt-[200px] lg:-mt-[270px] h-auto md:h-[40vh] lg:h-[50vh] animate-gradient-text"
        >
          <div className="text-4xl font-bold">
            <span className="block text-4xl lg:text-6xl">OUR</span>{' '}
            <span className="text-6xl lg:text-8xl text-shadow font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-500 to-white  leading-tight animate-gradient-text drop-shadow-lg">
              MISSION
            </span>{' '}
          </div>
          <p className="mt-2">
            Our mission is to help businesses grow by providing creative and
            effective digital marketing solutions. We aim to be a leading force
            in the industry, helping brands thrive and reach their full
            potential in the digital world.
          </p>
        </section>
      </div>

      <div className="w-full ">
        {/* Header */}
        {/* Mission Section */}
        <section className="py-20   w-full lg:w-[90%] xl:w-[87%] mx-auto">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div data-aos="fade-left" className="flex flex-col gap-5">
                {missionData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 lg:gap-6 myShadow rounded overflow-hidden  p-6 transition-shadow duration-300  xl:px-10"
                  >
                    <div className="text-6xl mb-4">{item.icon}</div>
                    <div>
                      <h2 className="text-xl lg:text-2xl font-semibold mb-2 text-gray-800">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 text-md xl:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-6">
                <div data-aos="fade-right" className="flex gap-5">
                  <div className="text-6xl md:text-8xl mb-4">
                    {marketingStrategies.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                      {marketingStrategies.title}
                    </h2>
                    <p className="text-gray-600 text-md xl:text-lg tracking-wide">
                      Define clear goals, optimize resources, implement targeted
                      actions, monitor performance, adjust quickly to
                      challenges, and achieve sustainable success.
                    </p>
                  </div>
                </div>
                <ul
                  data-aos="fade-up"
                  className="grid grid-cols-1 md:grid-cols-2 justify-center gap-3 lg:mt-8"
                >
                  {marketingStrategies?.strategies?.map((item) => (
                    <li
                      key={item.id}
                      className="text-left text-md lg:text-lg flex items-center px-5 md:px-0"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-5"></div>
                      <div className="text-gray-700">{item.name}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MissionVision;
