import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import banner from '../../assets/home/panda-hero-section.jpg';
import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';

const carouselItems = [
  {
    id: 1,
    image: banner,
  },
  {
    id: 2,
    image: banner,
  },
  {
    id: 3,
    image: banner,
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
    <div className="relative w-full h-[450px] lg:h-[calc(100vh-4rem)]  overflow-x-hidden bg-cardbg">
      {carouselItems.map((item, index) => (
        <motion.div
          key={item.id}
          className=" absolute inset-0 flex flex-col items-center justify-center text-white"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ x: index === currentIndex ? '0vw' : '100vw' }}
          animate={{ x: index === currentIndex ? 0 : '-100vw' }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {index === currentIndex && (
            <div className="absolute top-0 left-0 w-full px-6 md:px-10 lg:px-[50px] xl:px-[8%] grid grid-cols-1 lg:grid-cols-2 h-full">
              <motion.div
                className="flex flex-col justify-center items-center lg:items-start h-full gap-4 md:gap-8 z-20 w-[80%] mx-auto lg:w-full  "
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl text-white font-semibold tracking-wide text-center lg:text-left"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Performance Marketing Agency
                </motion.h1>

                <motion.p
                  className="text-center lg:text-left md:text-lg lg:text-xl text-white tracking-wide"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Boost the volume of traffic. Get more prospects. Boost sales
                  of businesses. All sizes of establishments can use Panda guys.
                </motion.p>

                <motion.button
                  className="bg-cardbg p-2 px-3 md:py-3  md:px-4 text-md md:text-lg font-semibold mt-10 md:mt-0"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    opacity: {
                      duration: 1.2,
                      delay: 0.1,
                      type: 'spring',
                      stiffness: 120,
                    },
                  }}
                  onClick={() => alert('Consultation scheduled!')}
                >
                  Schedule A Free Consultation
                </motion.button>
              </motion.div>
            </div>
          )}
        </motion.div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#00000063] text-white p-2 rounded-full"
      >
        <MdOutlineChevronLeft className="text-2xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#00000063] text-white p-2 rounded-full"
      >
        <MdOutlineChevronRight className="text-2xl" />
      </button>
    </div>
  );
};

export default HeroCarousel;
