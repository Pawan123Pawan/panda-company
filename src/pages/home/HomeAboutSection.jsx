import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import IconCloudDemo from './IconCloud';
import panda from '../../assets/panda_service.png';
const HomeAboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="w-full lg:w-[90%] xl:w-[87%] mx-auto py-20 p-5 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 lg:gap-12">
        {/* Left: Image */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[550px] lg:w-1/2 rounded-lg overflow-hidden">
          <IconCloudDemo />
        </div>

        {/* Right: Text and Stats */}
        <div
          className="w-full lg:w-1/2 flex flex-col gap-6"
          data-aos="fade-left"
        >
          {/* Title and description */}
          <div className="text-left mb-5">
            <p className="text-cardbg text-lg font-semibold mb-3">About Us</p>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-5">
              Trusted by thousands of creators worldwide
            </h2>
            <p className="text-gray-600">
              Pandaguys Empowering businesses with Pandaguys: Unlock growth,
              innovate solutions, and achieve success through our expert-driven
              strategies.
              <Link
                to={'/about'}
                className="ml-2 text-cardbg hover:text-blue-600"
              >
                Know more...
              </Link>
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 lg:gap-10 text-center">
            {/** Adjusted the text alignment to center for uniformity **/}
            <div className="myShadow2 p-5">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                <CountUp start={0} end={8000} duration={2.5} />+
              </h3>
              <p className="text-gray-500 text-sm lg:text-base">
                Creators on the platform
              </p>
            </div>

            <div className="myShadow2 p-5">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                <CountUp start={0} end={3} duration={2.5} />%
              </h3>
              <p className="text-gray-500 text-sm lg:text-base">
                Flat platform fee
              </p>
            </div>

            <div className="myShadow2 p-5">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                <CountUp start={0} end={99.9} duration={2.5} decimals={1} />%
              </h3>
              <p className="text-gray-500 text-sm lg:text-base">
                Uptime guarantee
              </p>
            </div>

            <div className="myShadow2 p-5">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                <CountUp
                  start={0}
                  end={70}
                  duration={2.5}
                  prefix="$"
                  decimals={0}
                />
                M
              </h3>
              <p className="text-gray-500 text-sm lg:text-base">
                Paid out to creators
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutSection;
