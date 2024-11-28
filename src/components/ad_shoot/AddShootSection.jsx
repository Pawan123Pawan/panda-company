import React from 'react';
import { Link } from 'react-router-dom';

const AddShootSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row ">
        <div className="w-[150px] h-auto text-8xl text-primary ">→</div>
        <div className="w-full  lg:px-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-7 lg:text-5xl">
            Significance of Hiring an Ad Shoot Agency
          </h2>
          <div className="flex justify-center flex-col mt-5">
            <div className="flex gap-5 flex-col md:flex-row lg:gap-10">
              <p className="text-gray-500 max-w-md tracking-wide">
                Engaging an ad shoot agency guarantees that your brand receives
                the focus and creativity it deserves. This is the reason
              </p>
              <p className="text-gray-500 max-w-md tracking-wide">
                <b>Professionalism</b> There are people within ad shoot agencies
                who have the appropriate skills of production such as being able
                to direct, shoot, and edit.
              </p>
              <p className="text-gray-500 max-w-md tracking-wide">
                <b>Materials</b> They have the best materials which make it
                possible for production to be highly polished and professional
                looking.
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

export default AddShootSection;
