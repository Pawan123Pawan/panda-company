import React from 'react';

const HowDoUse = () => {
  return (
    <div className=" p-4 py-14">
      <div className="w-full lg:w-[85%] mx-auto">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            How do businesses use Search Media Marketing?
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mb-8 w-full md:w-4/5 mx-auto">
            Social media marketing helps businesses engage with their audience
            and enhance their online presence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-14">
          {smmFeatures.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-lg border-l-2 border-primary shadow-primary hover:shadow-cardbg  overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl "
            >
              <div className="flex gap-3 lg:gap-5 items-center">
                <div className="text-3xl lg:text-5xl xl:text-7xl ">
                  {item.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 ">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 mt-5 tracking-wide lg:text-md xl:text-lg">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowDoUse;

const smmFeatures = [
  {
    id: 1,
    title: 'Building Brand Awareness',
    desc: 'Social media marketing helps increase brand visibility and awareness by reaching a wider audience through engaging content.',
    icon: '📣',
  },
  {
    id: 2,
    title: 'Customer Engagement',
    desc: 'Engage with customers through comments, messages, and posts to build relationships and foster loyalty.',
    icon: '💬',
  },
  {
    id: 3,
    title: 'Targeted Advertising',
    desc: 'Use targeted ads to reach specific demographics and interests, ensuring your message reaches the right audience.',
    icon: '🎯',
  },
  {
    id: 4,
    title: 'Content Promotion',
    desc: 'Promote blog posts, videos, and other content on social media to drive traffic to your website and increase conversions.',
    icon: '📈',
  },
  {
    id: 5,
    title: 'Analytics and Insights',
    desc: 'Analyze social media metrics to gain insights into customer behavior and campaign performance for continuous improvement.',
    icon: '📊',
  },
  {
    id: 6,
    title: 'Community Building',
    desc: 'Foster a sense of community by creating engaging content that encourages discussions and sharing among followers.',
    icon: '🤝',
  },
];
