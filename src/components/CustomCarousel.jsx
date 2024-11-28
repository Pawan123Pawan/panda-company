import React from 'react';
import Carousel from 'react-multi-carousel';

const CustomCarousel = ({ setSelectedImageIndex, images, clientData }) => {
  // Responsive breakpoints
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: clientData ? 2 : 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      {/* Carousel Container */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        {...(clientData
          ? { removeArrowOnDeviceType: ['desktop', 'tablet', 'mobile'] }
          : {})}
      >
        {images &&
          images.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer mr-5 p-5 bg-primary/50 rounded-xl"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img
                src={item.url}
                alt={`Images ${index}`}
                className="w-full   h-[300px] "
              />
            </div>
          ))}

        {clientData &&
          clientData.map((item, index) => (
            <div
              key={''}
              onClick={() => setSelectedImageIndex(index)}
              className="cursor-pointer flex flex-col justify-center h-[50vh] p-5 rounded-xl bg-gradient-to-r from-primary to-pink-500  animate-gradient-text mr-5 "
            >
              <div className="w-[150px] h-[80px] flex items-center justify-center mx-auto p-2 rounded-xl bg-white">
                <img
                  src={item.logo}
                  alt="client"
                  className=" w-full h-full object-contain"
                />
              </div>
              <div className="mt-6 flex flex-col justify-center items-center px-5">
                <h3 className="text-white text-xl font-semibold tracking-wide">
                  {item.name}
                </h3>
                <p className="mt-3 text-[15px] tracking-wide text-white text-center">
                  {item.description.substring(0, 50)}....
                </p>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};

export default CustomCarousel;
