import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import getnow from '../../assets/portfolio/get_now_solutions.png';
import ayuvilla from '../../assets/portfolio/ayu_villa.png';
import theindian from '../../assets/portfolio/theinidanvoyage.png';
import funtook from '../../assets/portfolio/funtook.png';
import alphawings from '../../assets/portfolio/alphawings.png';
import vedinz from '../../assets/portfolio/vedinz.png';
const ProcessList = React.lazy(
  () => import('../../components/webdevelopment/ProcessList')
);

const Portfolio = (props) => {
  const portfolioItems = props.portfolioItems || [
    {
      id: 1,
      title: 'Getnow Solutions',
      link: 'https://getnow-solutions.com',
      image: getnow,
      altText: 'Get_Now_pay',
    },
    {
      id: 2,
      title: 'Ayu Villa Project',
      link: 'https://ayuvilla.com',
      image: ayuvilla,
      altText: 'AyuVilla',
    },
    {
      id: 3,
      title: 'The Indian Voyage',
      link: 'https://www.theindianvoyage.com/',
      image: theindian,
      altText: 'The_Indian_Voyage',
    },
    {
      id: 4,
      title: 'Funtook',
      link: 'https://funtook.in/',
      image: funtook,
      altText: 'FunTook',
    },
    {
      id: 5,
      title: 'AlphaWings',
      link: 'https://alphawings.in/',
      image: alphawings,
      altText: 'Alpha_Wings',
    },
    // {
    //   id: 6,
    //   title: 'Vedinz',
    //   link: 'https://www.vedinz.com',
    //   image: vedinz,
    //   altText: 'Vedinz',
    // },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="hidden md:block">
        <div className="flex gap-2 p-5 md:py-10 sm:w-[98%] xl:w-4/5 mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative p-4 mb-4 group"
              initial={{ width: '20%' }}
              whileHover={{ width: '40%' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="absolute top-0 left-0 w-full h-full z-10 group-hover:hidden"
                style={{
                  background:
                    'linear-gradient(180deg, #000000 15%, rgba(0, 0, 0, 0) 100%)',
                }}
              >
                <div className="text-white p-6">
                  <h1 className="text-xl font-semibold mb-2">0{index + 1}</h1>
                  <p className="md:text-xl lg:text-2xl font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="item-image h-[300px] lg:h-[600px] overflow-hidden">
                  <div
                    className={`pic transition-transform duration-[6000ms] delay-1000 ease-in-out relative ${
                      hoveredIndex === index
                        ? 'transform -translate-y-3/4 scroll-smooth'
                        : 'transform translate-y-0'
                    }`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.image}
                        alt={item.altText}
                        className="w-full filter grayscale group-hover:grayscale-0"
                        loading="lazy"
                        srcSet={`${item.image}?w=300 300w, ${item.image}?w=600 600w, ${item.image}?w=1200 1200w`}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </a>
                  </div>
                </div>
                <div className="item-info-div bg-primary p-4 text-center hidden group-hover:block">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    {item.title}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <div className=" grid grid-col-1 gap-2 p-5 md:py-10 sm:w-[98%] xl:w-4/5 mx-auto">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative p-4 mb-4 group "
              initial={{ height: '200px' }}
              whileHover={{ height: '500px' }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="absolute top-0 left-0 w-full h-full z-10 group-hover:hidden"
                style={{
                  background:
                    'linear-gradient(180deg, #72006d 15%, rgba(0, 0, 0, 0) 100%)',
                }}
              >
                <div className="text-white p-6">
                  <h1 className="text-xl font-semibold mb-2">0{index + 1}</h1>
                  <p className="md:text-xl lg:text-2xl font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
              <div className="overflow-hidden">
                <div className="item-image h-full overflow-hidden">
                  <div
                    className={`pic transition-transform duration-[6000ms] delay-1000 ease-in-out relative ${
                      hoveredIndex === index
                        ? 'transform -translate-y-3/4 scroll-smooth'
                        : 'transform translate-y-0'
                    }`}
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={item.image}
                        alt={item.altText}
                        className="w-full filter grayscale group-hover:grayscale-0"
                        loading="lazy"
                        srcSet={`${item.image}?w=300 300w, ${item.image}?w=600 600w, ${item.image}?w=1200 1200w`}
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                      />
                    </a>
                  </div>
                </div>
                <div className="item-info-div bg-primary p-4 text-center hidden group-hover:block">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-bold"
                  >
                    {item.title}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {props.processList && (
        <Suspense fallback={<div>Loading...</div>}>
          <ProcessList />
        </Suspense>
      )}
    </>
  );
};

export default Portfolio;
