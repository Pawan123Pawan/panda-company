import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import scaled from '../../assets/about/services-image.jpg';
import { motion, useScroll, useTransform } from 'framer-motion';
import SubServiceList from '../../components/home/SubServicesList';

import panda from '../../assets/panda_service.png';

import pandabg from '../../assets/panda_back.png';

function ServicePage() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  // Scroll hook setup
  const pandaRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: pandaRef, // target the image container
    offset: ['start end', 'end start'], // animation triggers when the image starts entering and leaves the viewport
  });

  // Transformations based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], ['100%', '-100%']); // Scroll the image vertically
  const opacity = useTransform(scrollYProgress, [0, 2], [0, 3]); // Fade in based on scroll

  return (
    <>
      <div className="p-3 bg-primary">
        <div className="w-full lg:w-[90%] xl:w-[85%] mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col items-center lg:items-start justify-center">
              <motion.h2
                initial={{ opacity: 0, x: -300 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1.0, delay: 1.1 },
                }}
                className="text-[28px] sm:text-[35px] font-bold md:p-3 mt-3 tracking-wide lg:tracking-widest"
              >
                <span className="text-5xl md:text-7xl lg:text-8xl text-shadow font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-500 to-white  leading-tight animate-gradient-text drop-shadow-lg">
                  Our Services
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 300 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 1.0, delay: 0.9 },
                }}
                className="text-white/80 text-[16px] sm:text-[18px] md:p-3 tracking-wide text-center md:text-left"
              >
                We are committed to offering the best digital marketing
                solutions available. Our talented team works continuously to
                provide outstanding results, ensuring your organization grows
                digitally.
              </motion.p>
            </div>

            <div className="p-4">
              <motion.img
                initial={{ opacity: 0, x: 200 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.7, delay: 0.7 },
                }}
                src={scaled}
                alt="about_scale_image"
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      <SubServiceList />
      <div className="bg-cardbg w-auto h-full relative overflow-hidden rounded-t-[50px] xl:rounded-t-[150px]">
        {/* Background Panda Image */}
        <img
          src={pandabg}
          alt="panda"
          ref={pandaRef}
          style={{ y, opacity }}
          transition={{
            duration: 1.0,
            delay: 0.5,
          }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row justify-between items-center relative z-10 p-4 lg:pt-24">
          {/* Left Side Content */}
          <div className="w-full md:w-[30%] text-center md:text-left text-white mb-4 md:mb-0">
            <h2 className="font-black text-[20px] text-primary p-1 rounded bg-white">
              We Offer Expert Digital Marketing Services To Help Your Business
              Grow.
            </h2>
            <p className="text-[15px mt-5">
              We offer personalized strategies, advanced technology, a
              comprehensive approach, and continuous optimization to drive
              business growth and online success.
            </p>
          </div>

          {/* Centered Panda Image */}
          <motion.div className="flex flex-col justify-end h-full md:w-[40%]">
            <img
              src={panda}
              alt="panda"
              className="animate-customBounce w-full h-auto"
            />
          </motion.div>

          {/* Right Side Content */}
          <div className="w-full md:w-[30%] text-white text-center md:text-right mb-4 md:mb-0">
            <ul className="list-disc space-y-5">
              <li className="flex items-start">
                <span>
                  <strong className="text-primary p-1 rounded bg-white text-base md:text-lg">
                    Strategies for Maximum Results:
                  </strong>
                  <br />
                  Personalized services to meet your particular goals for
                  significant results and growth.
                </span>
              </li>
              <li className="flex items-start">
                <span>
                  <strong className="text-primary p-1 rounded bg-white text-base md:text-lg">
                    Creative Technology and Skills:
                  </strong>
                  <br />
                  Innovative tools and methods to stay ahead of the competition.
                </span>
              </li>
              <li className="flex items-start">
                <span>
                  <strong className="text-primary p-1 rounded bg-white text-base md:text-lg">
                    Comprehensive Approach:
                  </strong>
                  <br />
                  Professional services for improving every aspect of your web
                  presence.
                </span>
              </li>
              <li className="flex items-start">
                <span>
                  <strong className="text-primary p-1 rounded bg-white text-base md:text-lg">
                    Insight-Driven Optimization:
                  </strong>
                  <br />
                  Continuous analysis and optimization to guarantee consistent
                  performance and development.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicePage;
