import React from 'react';

const ServicesSection = ({ items }) => {
  const data = items || services;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-8">
      {data.map((service, index) => (
        <div
          key={index}
          className="bg-white p-6  flex items-start space-x-4 shadow-lg border-l-2 border-primary shadow-primary hover:shadow-cardbg rounded overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl "
        >
          <div className="text-5xl lg:text-6xl xl:text-8xl">{service.icon}</div>
          <div>
            <h4 className="text-lg font-semibold text-gray-800 uppercase mb-2">
              {service.title}
            </h4>
            <p className="text-sm lg:text-base text-gray-700">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const services = [
  {
    icon: '📈',
    title: 'MARKET FORECAST',
    description:
      'Market Forecast Get sensible market assessments by utilising available data topredict and beat industry developments trends',
  },
  {
    icon: '💸',
    title: 'CASH FLOW',
    description:
      'Cash Flow Efficient management and control of cash flows within business operations in order to ensure an uninterrupted flow and stability of activities.',
  },
  {
    icon: '🔧',
    title: 'STRATEGIC PLANNING',
    description:
      ' Strategic Planning Design strategies which will be able to accomplish the objectives of the organisation in the long run and cope up with changes in the environment.',
  },
  {
    icon: '💰',
    title: 'FUND RAISING',
    description:
      'FundRaising Planning the right strategies and logistics, a company can also target the most suitable investors for its business to raise money faster.',
  },
  {
    icon: '📊',
    title: 'BUDGET ACCOUNTING',
    description:
      'Budget Accounting Budgeting can be used to enhance the financial discipline of any business in each operational unit throughout the organisation.',
  },
  {
    icon: '🎯',
    title: 'TARGET MARKETING',
    description:
      'Target Marketing Through Monitoring the activities and behaviour of competitors develop marketing strategies which will attract the desired audience effectively.',
  },
];

export default ServicesSection;
