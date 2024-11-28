import React from 'react';

const HowDoUse = () => {
  return (
    <div className=" p-4 py-14">
      <div className="w-full lg:w-[85%] mx-auto">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            How do businesses use Google My Business?
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mb-8 w-full md:w-4/5 mx-auto">
            Google My Business helps businesses enhance their online presence,
            connect with customers, and drive more traffic through search and
            maps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-14">
          {gmbFeatures.map((item) => (
            <div
              key={item.id}
              className="shadow-lg border-l-2 border-primary shadow-primary hover:shadow-cardbg  overflow-hidden  p-6 cursor-pointer transition-shadow duration-300 hover:shadow-xl rounded-xl"
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

const gmbFeatures = [
  {
    id: 1,
    title: 'Increase Local Visibility',
    desc: 'Boost your Google My Business profile to be shown on top in local searches and Google Maps. It makes it easy for customers to find you. An optimized profile boosts visibility and trust, and helps grow your customer base.',
    icon: '📍',
  },
  {
    id: 2,
    title: 'Customer Reviews',
    desc: 'Google my business helps businesses to boost their online visibility, engage with customers and elevate traffic through both search and maps results',
    icon: '⭐',
  },
  {
    id: 3,
    title: 'Update Business Information',
    desc: 'Let them write reviews for you. The more reviews are positive, the more your business can be credible, and consequently, new clients will go to you since they can depend on the experience of other people.',
    icon: '🕒',
  },
  {
    id: 4,
    title: 'Post Updates and Offers',
    desc: 'Update business information, such as hours of operation, location, and services, so customers can find the information easily to gain trust in your service.',
    icon: '📣',
  },
  {
    id: 5,
    title: 'Insights and Analytics',
    desc: 'You can use performance metrics to understand how the customers are engaging with your business profile. Using this information, you then make the necessary adjustments in your strategy to ensure that their needs are satisfied while enhancing your business performance as a whole.',
    icon: '📊',
  },
  {
    id: 6,
    title: 'Engage with Customers',
    desc: "Once a customer posts a question or message to the business's Google My Business profile, one can directly and promptly respond to that customer inquiry or message. And then, this would improve the customer service and satisfaction by offering prompt, personalized responses for the sense of value and voice among customers.",
    icon: '💬',
  },
];
