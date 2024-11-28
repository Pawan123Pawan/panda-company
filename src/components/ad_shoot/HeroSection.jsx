const HeroSection = () => {
  return (
    <div className="add-image relative h-[400px] md:h-[calc(100vh-8rem)]">
      {/* Overlay */}
      <div className="w-full h-full bg-[#121240]/50 absolute top-0 left-0 transition-opacity duration-300 ease-in-out"></div>

      {/* Content */}
      <div className="w-full p-5 md:w-[90%] lg:w-[85%] xl:w-4/5 mx-auto relative z-10">
        <div className="w-full lg:w-4/5 py-5">
          <div className="w-full h-full flex flex-col gap-3 mt-[4rem] md:mt-[10rem]">
            {/* <div className=" text-center md:text-left text-lg lg:text-xl text-white font-semibold tracking-wider">
              Service
            </div> */}
            <h1 className="text-center md:text-left text-5xl md:text-7xl text-shadow font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-cardbg   leading-tight animate-gradient-text drop-shadow-lg py-2">
              Ads Shoot
            </h1>
            {/* Main Heading */}
            <p className="w-full text-center md:text-left lg:w-4/5 font-medium text-white text-base md:text-lg ">
              Professional ad and product shoots, capturing high-quality images
              to enhance your brand's identity and engage your target audience,
              boosting marketing efforts and leaving a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
