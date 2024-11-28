import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { BiSolidMessageRoundedDetail } from 'react-icons/bi';

const Testimonial = () => {
  const quotes = [
    {
      id: '1',
      text: `Fantastic Results! - Our website traffic and engagement skyrocketed thanks to Panda Guys. Great team, highly recommend!`,
      imgSrc:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      author: 'Amit Sharma',
      source: 'LittleSnippets.net',
    },
    {
      id: '2',
      text: `Boosted Our Brand! - Panda Guys enhanced our online visibility with targeted strategies. Real leads, real results!`,
      imgSrc:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample27.jpg',
      author: 'Sunita Nair',
      source: 'LittleSnippets.net',
    },
    {
      id: '3',
      text: `Professional & Effective - Exceeded Expectations! - From ads to SEO, they delivered excellent results with a great ROI. Totally worth it!`,
      imgSrc:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg',
      author: 'Priya Desai',
      source: 'LittleSnippets.net',
    },
    {
      id: '4',
      text: `Social Media Experts! - Our social media looks amazing, and engagement is up. Panda Guys nailed it!`,
      imgSrc:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      author: 'Rahul Mehta',
      source: 'LittleSnippets.net',
    },
  ];

  const responsive = {
    superLarge: { breakpoint: { max: 4000, min: 1200 }, items: 3 },
    large: { breakpoint: { max: 1199, min: 992 }, items: 3 },
    medium: { breakpoint: { max: 991, min: 768 }, items: 2 },
    small: { breakpoint: { max: 767, min: 0 }, items: 1 },
  };

  const [isMobile, setIsMobile] = useState(false);

  // Update the state based on window size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="p-6 lg:p-12">
      <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
        What our clients say
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2500}
        arrows={!isMobile}
        containerClass=""
        itemClass="justify-center"
      >
        {quotes.map((quote, index) => (
          <div
            key={quote.id}
            className="group h-[300px] bg-white rounded-lg myShadow border-l-2 border-primary p-6 m-3  transition-shadow duration-300 ease-in-out relative overflow-hidden"
          >
            <div
              className={`w-16 h-16 rounded-full absolute top-0 right-0 -mr-4 -mt-4 flex items-center justify-center ${
                (index + 1) % 2 === 0 ? 'bg-primary' : 'bg-primary'
              } group-hover:scale-110 transition-transform duration-300`}
            >
              <p className="text-white font-bold text-xl">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </p>
            </div>
            <BiSolidMessageRoundedDetail className="text-4xl text-primary" />
            <h1 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors duration-300">
              {quote.author}
            </h1>

            <p className="text-sm text-secondary mt-2 font-semibold leading-6">
              {quote.text}
            </p>

            {/* <p className="text-sm text-gray-500 italic">
              Source: {quote.source}
            </p> */}

            <div className="mt-4 flex justify-center">
              <img
                src={quote.imgSrc}
                alt={quote.author}
                className="w-16 h-16 rounded-full border-4 border-gray-100 group-hover:border-primary transition-colors duration-300"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
