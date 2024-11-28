import { FaqData } from '../../utils/staticData/FaqData';
import PayPerAccordion from '../service/PayPerAccordion';
import faq5 from '../../assets/home/faq5.webp';
import faq4 from '../../assets/home/faq4.webp';
import faq3 from '../../assets/home/faq3.webp';
import faq2 from '../../assets/home/faq2.webp';
import faq1 from '../../assets/home/faq1.webp';
import { useEffect } from 'react';
import AOS from 'aos';

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="w-full md:w-[90%] xl:w-[87%] mx-auto p-6 py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image Section */}
        <div data-aos="fade-right" className="relative md:h-[400px] lg:h-auto">
          <h1 className="block md:hidden text-3xl sm:text-4xl text-center sm:text-left font-bold text-gray-800 mb-6">
            Frequently asked questions
          </h1>
          {/* Pulsing image */}
          <img
            src={faq1}
            alt="faq1"
            className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] top-[50%] right-[30%] animate-pulse"
          />

          {/* Bouncing image 1 */}
          <img
            src={faq2}
            alt="faq2"
            className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] right-[15%]  md:top-20 animate-bounce"
          />

          {/* Bouncing image 2 */}
          <img
            src={faq3}
            alt="faq3"
            className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] bottom-0 md:bottom-[10%] animate-bounce"
          />

          {/* Bouncing image 3 */}
          <img
            src={faq4}
            alt="faq4"
            className="absolute w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] right-[10%] bottom-1 md:bottom-[10%] animate-bounce"
          />

          {/* Main FAQ illustration image */}
          <img
            src={faq5}
            alt="FAQ illustration"
            className="rounded-lg object-cover w-full h-full"
          />
        </div>

        {/* FAQ Content Section */}
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center mt-12 lg:mt-0"
        >
          <h1 className="hidden md:block text-3xl sm:text-4xl text-center sm:text-left font-bold text-gray-800 mb-6">
            Frequently asked questions
          </h1>
          <PayPerAccordion faq={FaqData} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
