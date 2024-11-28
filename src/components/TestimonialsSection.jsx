import React, { useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import Carousel from 'react-multi-carousel';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';

import ava1 from '../assets/clientAvatar/people_11045248.svg';
import ava2 from '../assets/clientAvatar/woman_706830.svg';
import ava3 from '../assets/clientAvatar/ava3.svg';
import ava4 from '../assets/clientAvatar/ava4.svg';
import ava5 from '../assets/clientAvatar/ava5.svg';
import ava6 from '../assets/clientAvatar/ava6.svg';
import ava7 from '../assets/clientAvatar/ava7.svg';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    // screens from 768px to 1024px
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    // screens smaller than 768px
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};
const TestimonialsSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-primary">
      <div className="lg:w-[90%] mx-auto px-4 py-24">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Description Column */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-[40%] text-center lg:text-left"
          >
            <h1 className=" text-2xl sm:text-3xl font-bold text-white mb-6">
              Clients Reviews
            </h1>
            <p className=" text-md md:text-base lg:text-lg text-white my-6 lg:my-10">
              Here's what our satisfied clients have to say about us! 🌟 We're
              honored to partner with such innovative and driven businesses,
              helping them achieve remarkable results. Read their experiences
              and discover how we've contributed to their success. Your business
              could be next!
            </p>
            <button
              onClick={() => navigate('/service')}
              className=" text-primary px-6 py-2 rounded-full text-md lg:text-lg font-semibold bg-white w-[50%] max-w-[300px] hover:bg-[#c799c5] hover:text-white"
            >
              Get Start Today
            </button>
            {/* <button
              onClick={() => navigate('/service')}
              className=" text-white px-6 py-3 rounded-full text-md font-semibold hover:opacity-80 bg-gradient-to-r from-primary via-cardbg to-secondary transition animate-gradient-text w-[50%] max-w-[300px]"
            >
              Get Start Today
            </button> */}
          </div>

          {/* Testimonials Column */}
          <div className="w-full lg:w-[60%] px-5 overflow-hidden">
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={3000}
              infinite={true}
              pauseOnHover={true}
              removeArrowOnDeviceType={['desktop', 'tablet', 'mobile']}
              className="testimonial-slider"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;

const testimonials = [
  {
    clientName: 'Arjun Mehta',
    avatar: ava1,
    feedback:
      'Panda Guys boosted our online traffic using effective SEO and social media strategies.',
  },
  {
    clientName: 'Priya Singh',
    avatar: ava2,
    feedback:
      'Google Ads campaigns increased our leads. Excellent service and a responsive team.',
  },
  {
    clientName: 'Rajesh Kumar',
    avatar: ava3,
    feedback:
      'Their content and branding services helped us stand out in the market.',
  },
  {
    clientName: 'Neha Sharma',
    avatar: ava4,
    feedback:
      "Panda Guys' strategies increased our sales. We are highly satisfied with them.",
  },
  {
    clientName: 'Anil Patel',
    avatar: ava5,
    feedback:
      'Our social media engagement skyrocketed thanks to their creativity and expertise.',
  },
  {
    clientName: 'Kavita Gupta',
    avatar: ava6,
    feedback:
      'Our ROI significantly improved with their effective PPC campaigns. Great job, team!',
  },
  {
    clientName: 'Suresh Verma',
    avatar: ava7,
    feedback:
      'Their website design exceeded expectations. It looks amazing and functions perfectly now.',
  },
];
