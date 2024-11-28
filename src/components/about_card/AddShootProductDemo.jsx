import React, { useState } from 'react';
import { motion } from 'framer-motion';
import myImage from '../../assets/service/ad_shoot/add-shoot.jpg';
import product from '../../assets/service/ad_shoot/product_shoot.jpg';
function AddShootProductDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <AddShootProduct containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]">
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Planning
          </h2>
          <p className="mt-4 text-left text-base text-neutral-200">
            The process involves concept development, scriptwriting, location
            scouting, casting, and equipment rental, all aimed at capturing the
            audience's attention and aligning with the brand's goals.
          </p>
        </div>
        <img
          src={product}
          alt="linear demo"
          className="absolute bottom-0 right-0 w-3/5 lg:w-2/5  object-contain rounded-2xl"
        />
      </AddShootProduct>
      <AddShootProduct containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Production
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
          Filming involves capturing high-quality footage, directing actors and
          crew to achieve creative vision, and managing logistics and scheduling
          for a smooth production process.
        </p>
      </AddShootProduct>
      <AddShootProduct containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Final Delivery
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base text-neutral-200">
            The task involves delivering the completed commercial in the
            required formats for various platforms.
          </p>
        </div>
        <img
          src={myImage}
          alt="linear demo"
          className="absolute bottom-0 right-0 object-contain rounded-2xl w-1/2"
        />
      </AddShootProduct>
    </div>
  );
}

export default AddShootProductDemo;

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
