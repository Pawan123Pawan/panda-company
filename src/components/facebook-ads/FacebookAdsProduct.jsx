import React, { useState } from 'react';
import { motion } from 'framer-motion';
import image1 from '../../assets/service/google-ads/google-ads1.jpg';
import image2 from '../../assets/service/google-ads/google-ads2.jpg';

function FacebookAdsProduct() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <AddShootProduct containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px]">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Accelerate Your Commercial Performance Using Facebook Ads
          </h2>
          <p className="mt-4 text-left text-base text-neutral-200">
            Engage audiences, drive traffic, boost business with targeted
            Facebook Ads.
          </p>
        </div>
        <img
          src={image1}
          alt="Google Search Ads example"
          className="absolute bottom-0 right-0 w-3/5 object-contain rounded-2xl"
        />
      </AddShootProduct>
      <AddShootProduct containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Leverage Facebook Ads to Connect with Customers
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
          Boost your brand image with memorable Facebook Ads. Reach active
          audiences, effectively target your market, and expand your business.
        </p>
      </AddShootProduct>
      <AddShootProduct containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Drive Sales through Facebook advertisements
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
            Here with interesting advertisements you can promote your products
            right on Facebook and increase the exposure effectively to earn more
            sales on the internet.
          </p>
        </div>
        <img
          src={image2}
          alt="Google Shopping Ads example"
          className="absolute bottom-0 right-0 object-contain rounded-2xl w-1/2"
        />
      </AddShootProduct>
    </div>
  );
}

export default FacebookAdsProduct;

const AddShootProduct = ({ children, containerClassName, className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (clientX - (rect.left + rect.width / 2)) / 20;
    const y = (clientY - (rect.top + rect.height / 2)) / 20;
    setMousePosition({ x, y });
  };

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          : 'translate3d(0, 0, 0)',
        transition: 'transform 0.1s ease-out',
      }}
      className={`mx-auto w-full bg-pink-500 relative rounded-2xl overflow-hidden ${containerClassName}`}
    >
      <div
        className="relative h-full bg-gradient-to-r from-primary animate-gradient-text to-transparent sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            '0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)',
        }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale(1.03)`
              : 'translate3d(0, 0, 0) scale(1)',
            transition: 'transform 0.1s ease-out',
          }}
          className={`h-full px-4 py-20 sm:px-10 ${className}`}
        >
          <Noise />
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: 'url(/noise.webp)',
        backgroundSize: '30%',
      }}
    ></div>
  );
};
