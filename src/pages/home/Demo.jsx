import React from 'react';
import banner from '../../assets/home/hero-section';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[450px] lg:h-[calc(100vh-4rem)] bg-cardbg">
      {/* overlay */}
      <div className="w-full h-full absolute top-0 left-0 bg-[#1e293b]/50 z-10"></div>
      {/* Background Image */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute top-0 left-0 w-full px-6 md:px-10 lg:px-[50px] xl:px-[8%] grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="flex flex-col justify-center items-center lg:items-start h-full gap-4 md:gap-8 z-20 w-[80%] mx-auto lg:w-full">
            <h1 className="text-4xl md:text-5xl lg:text-7xl text-white font-semibold tracking-wide text-center lg:text-left">
              <span className="text-5xl md:text-7xl lg:text-8xl text-shadow font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-black to-cardbg  leading-tight animate-gradient-text drop-shadow-lg">
                Performance
              </span>{' '}
              Marketing Agency
            </h1>

            <p className="text-center lg:text-left md:text-lg lg:text-xl text-white tracking-wide">
              Boost the volume of traffic. Get more prospects. Boost sales of
              businesses. All sizes of establishments can use Panda guys.
            </p>

            <button
              onClick={() => alert('Consultation scheduled!')}
              className=" p-3 md:py-3 md:px-4 text-md md:text-lg rounded-full text-md font-semibold hover:opacity-80 bg-gradient-to-r from-primary via-cardbg to-secondary transition animate-gradient-text mt-10 md:mt-0"
            >
              Schedule A Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
