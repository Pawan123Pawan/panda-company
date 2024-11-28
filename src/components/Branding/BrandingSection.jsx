import React from 'react';
import { Link } from 'react-router-dom';

const BrandingSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row ">
        <div className="w-[150px] h-auto text-8xl text-primary ">→</div>
        <div className="w-full  lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-7 lg:text-5xl">
            Finding the Best Branding Company.
          </h2>
          <div className="flex justify-center flex-col mt-5">
            <div className="flex gap-5 flex-col md:flex-row lg:gap-10">
              <p className="text-gray-500 max-w-md tracking-wide">
                People work towards building memorable brands which attracts
                people to some of the best branding firms. Most companies will
                be doing strategic planning which entails knowing the company’s
                vision. For the simplest and most appealing brands, they will
                create mouth-watering designs for the brand identity which goes
                hand in hand with the brand voice whilst making sure it remains
                the same throughout all marketing channels.
              </p>
              <p className="text-gray-500 max-w-md tracking-wide">
                When collaborating with an award-winning branding agency based
                in India, you are most likely to find professionalism and
                experience that will help you gain a competitive edge. Most of
                these agencies have a rich history of delivering results to
                clients and understand the contemporary branding methods. They
                will make sure that you not only have a pretty brand but one
                that has a market and makes sense in the current era.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to={'/contact'}
                className="text-primary font-medium hover:text-primary/80 text-left text-base md:text-xl"
              >
                Let&apos;s work together →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;
