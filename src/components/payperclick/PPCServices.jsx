import React from 'react';
import CustomServicesCard from '../CustomServicesCard';

const PPCServices = () => {
  return (
    <div className="w-full lg:w-[90%] xl:w-[86%] mx-auto pb-20 p-5">
      {/* Title and Description */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold">Our Best PPC Services</h1>
        <p className="text-gray-600 mt-4 w-full lg:w-3/5 mx-auto text-base lg:text-lg">
          Optimize keyword bidding, create engaging ads, track performance,
          target ideal audiences, test variations, and re-engage potential
          customers effectively.
        </p>
      </div>
      <CustomServicesCard services={services} />
    </div>
  );
};

export default PPCServices;

const services = [
  {
    id: 1,
    icon: '🗝️',
    title: 'Keyword Bidding',
    description:
      'Optimize bids for keywords to maximize ROI and outrank competitors in search results.',
  },
  {
    id: 2,
    icon: '💡',
    title: 'Ad Creation',
    description:
      'Craft compelling ad copy and visuals that grab attention and encourage clicks.',
  },
  {
    id: 3,
    icon: '📈',
    title: 'Performance Tracking',
    description:
      'Monitor campaign performance and adjust strategies to improve click-through and conversion rates.',
  },
  {
    id: 4,
    icon: '🎯',
    title: 'Targeting Options',
    description:
      'Target the right audience based on demographics, interests, and behavior for better engagement.',
  },
  {
    id: 5,
    icon: '⚙️',
    title: 'A/B Testing',
    description:
      'Test different ad variations to identify the most effective approach for your PPC campaigns.',
  },
  {
    id: 6,
    icon: '💬',
    title: 'Remarketing',
    description:
      'Re-engage users who previously interacted with your brand to boost conversion chances.',
  },
];
