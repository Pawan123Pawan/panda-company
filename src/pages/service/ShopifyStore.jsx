import React, { useState } from 'react';
import HeroSection from '../../components/Branding/HeroSection';
import bgImage from '../../assets/service/shopify/shopify.png';
import daniel from '../../assets/portfolio/daniel.png';
import vedinz from '../../assets/portfolio/vedinz.png';
import Portfolio from '../../pages/portfolio/Portfolio';
import CommonHeroSection from './CommonHeroSection';
import shopify from '../../assets/service/allsetion/shopify.webp';
const ShopifyStore = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Daniel',
      link: 'https://daniel.com',
      image: daniel,
      altText: 'Daniel',
    },
    {
      id: 2,
      title: 'Vedinz',
      link: 'https://vedinz.com',
      image: vedinz,
      altText: 'Vedinz',
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      {/* <HeroSection
        text="Shopify"
        content="Shopify is a powerful e-commerce platform that enables businesses to easily create, customize, and manage online stores efficiently."
        image={bgImage}
        imagePosition="center"
      /> */}
      <CommonHeroSection image={shopify} />
      {/* <Portfolio portfolioItems={portfolioItems} text="Shopify" /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 p-5 md:py-10 sm:w-[98%] xl:w-3/5 mx-auto">
        {portfolioItems.map((item, index) => (
          <div
            key={item.id}
            className="relative p-4 mb-4 group"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="overflow-hidden">
              <div className="item-image h-[300px] lg:h-[500px] overflow-hidden">
                <div
                  className={`pic transition-transform duration-[6000ms] ease-in-out relative ${
                    hoveredIndex === index
                      ? 'transform -translate-y-3/4 scroll-smooth'
                      : 'transform translate-y-0'
                  }`}
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={item.image}
                      alt={item.altText}
                      className="w-full"
                      loading="lazy"
                      srcSet={`${item.image}?w=300 300w, ${item.image}?w=600 600w, ${item.image}?w=1200 1200w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="item-info-div bg-primary p-4 text-center">
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
        ))}
      </div>
    </div>
  );
};

export default ShopifyStore;
