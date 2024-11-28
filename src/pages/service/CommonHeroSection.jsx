import React from 'react';

const CommonHeroSection = ({ image }) => {
  return (
    <div className="w-full h-[250px] md:h-[350px] lg:h-[550px]">
      <img src={image} alt="services-image" className="w-full h-full" />
    </div>
  );
};

export default CommonHeroSection;
