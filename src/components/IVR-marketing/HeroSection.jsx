import React from 'react';
import banner from '../../assets/service/IVR-marketing/banner-ivr.png';
const HeroSection = () => {
  return (
    <div className=" bg-gradient-to-r from-primary/30 to-secondary p-5 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-[90%] xl:w-[85%] mx-auto ">
        <div className="w-full h-full flex flex-col justify-center gap-4 ">
          <div className=" text-center md:text-left text-lg lg:text-xl text-primary font-semibold tracking-wider">
            Service
          </div>
          <h1 className="text-center md:text-left text-3xl lg:text-5xl  text-shadow font-extrabold text-gray-800 ">
            Interactive Voice Response (IVR) System
          </h1>
          {/* Main Heading */}
          <p className="w-full text-center md:text-left lg:w-4/5 font-medium text-gray-700 text-base md:text-lg lg:text-xl  tracking-wide">
            Improve customer satisfaction and efficiency with a personalized IVR
            greeting powered by Cloudshope.
          </p>
        </div>
        <div>
          <img src={banner} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
