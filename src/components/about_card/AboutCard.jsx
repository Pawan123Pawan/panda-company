import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import Carousel from 'react-multi-carousel';

const AboutCard = (props) => {
  const { cardsData } = props;
  const hasImage = cardsData.some((card) => card.count);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablets: {
      breakpoint: { max: 1024, min: 900 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 900, min: 696 },
      items: 2,
    },
    phones: {
      breakpoint: { max: 696, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Track screen width and update centerMode
  const [isMobile, setIsMobile] = useState(false);

  const checkMobileScreen = () => {
    setIsMobile(window.innerWidth <= 696); // You can adjust this value for your mobile screen size.
  };

  useEffect(() => {
    checkMobileScreen();
    window.addEventListener('resize', checkMobileScreen);
    return () => {
      window.removeEventListener('resize', checkMobileScreen);
    };
  }, []);

  return (
    <div className="w-[98%] md:w-[90%] xl:w-[85%] m-auto p-6 bg-white">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={!isMobile && hasImage}
        arrows={false}
      >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="bg-white mx-2 border-l-2 border-cardbg shadow-lg my-2 lg:my-4  rounded-md"
          >
            {card.img ? (
              <div>
                <img
                  src={card.img}
                  alt={card.title} // Use card.title for alt text
                  className="w-50 h-auto md:p-2 mx-auto"
                />
              </div>
            ) : (
              <div className="myShadow rounded-lg p-6 m-2 text-center transition-transform transform hover:scale-105">
                <h2 className="text-xl md:text-2xl font-bold text-cardbg">
                  {card.title}
                </h2>
                <CountUp
                  start={0}
                  end={card.count}
                  duration={6.0}
                  separator=","
                  className="text-3xl md:text-4xl font-extrabold text-primary my-5"
                />
                <font className="font-black text-[25px] text-primary">
                  {card.des}
                </font>
                <p className="text-sm md:text-base text-gray-600 mt-2"></p>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default AboutCard;
