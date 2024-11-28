import React from 'react';

const HowDoUse = () => {
  return (
    <div className=" p-4 py-14">
      <div className="w-full lg:w-[85%] mx-auto">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            How do businesses use IVR?
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600  mb-8 w-full md:w-4/5 mx-auto">
            IVRs is an interactive tool that help businesses in automating
            customer service, streamline workflows, and reduce wait time.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-14">
          {ivrFeatures.map((item) => (
            <div
              key={item.id}
              className="bg-white p-6 shadow-lg border-l-2 border-primary shadow-primary hover:shadow-cardbg rounded-xl overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl "
            >
              <div className="flex gap-3 lg:gap-5 items-center">
                <div className="text-3xl lg:text-5xl xl:text-7xl ">
                  {item.icon}
                </div>
                <h3 className="text-xl lg:text-2xl font-semibold text-gray-700 ">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 mt-5 tracking-wide text-sm lg:text-md xl:text-lg">
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

const ivrFeatures = [
  {
    id: 1,
    title: 'Cash on Delivery (COD) Verification',
    desc: 'by automating order verification, IVR system helps in minimizing businesses loss and Optimize processes for COD orders.',
    icon: '💰',
  },
  {
    id: 2,
    title: 'Local Language Interaction',
    desc: 'IVR system helps business to enable language inclusivity which thus allowing them to interact with customers in their preferred language for better accessability.',
    icon: '🌍',
  },
  {
    id: 3,
    title: 'Be Available After Hours',
    desc: "IVR system manage calls for businesses and provide hem with valid automated response in case live support isn't available",
    icon: '⏰',
  },
  {
    id: 4,
    title: 'Gather Feedback',
    desc: 'IVR allow business to collect customer feedback quickly and efficiently hence making it easy for staff to contact customers later through live support.',
    icon: '📝',
  },
  {
    id: 5,
    title: 'Personalization',
    desc: 'Give your customers a warm welcome every time by customizing IVR interactions with their past preferences.',
    icon: '🎯',
  },
  {
    id: 6,
    title: 'IVR for Customer Surveys',
    desc: 'IVR systems automate customer surveys to collect feedback, helping businesses understand and improve customer satisfaction.',
    icon: '📊',
  },
];
