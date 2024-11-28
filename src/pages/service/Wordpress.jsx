import React, { useState } from 'react';
import HeroSection from '../../components/Branding/HeroSection';
import bgImage from '../../assets/service/wordpress/wordpress.jpg';
import theindian from '../../assets/portfolio/theinidanvoyage.png';
import ayu from '../../assets/portfolio/ayu_villa.png';
import Portfolio from '../../pages/portfolio/Portfolio';
import ProcessList from '../../components/ProcessStep';
import WordpressReason from '../../components/wordpress/WordpressReason';
import CustomServicesCard from '../../components/CustomServicesCard';
import CommonHeroSection from './CommonHeroSection';
import wordpress from '../../assets/service/allsetion/wordpress.webp';

const Wordpress = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'The Indian Voyage',
      link: 'https://www.theindianvoyage.com/',
      image: theindian,
      altText: 'The_Indian_Voyage',
    },
    {
      id: 2,
      title: 'Ayu Villa',
      link: 'https://ayuvilla.com',
      image: ayu,
      altText: 'AyuVilla',
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
    <>
      {/* <HeroSection
        text="WordPress Development"
        content="WordPress development is a powerful and flexible platform that allows businesses to create engaging, interactive websites. Our expertise and tailored strategies help you create a professional and user-friendly WordPress website."
        image={bgImage}
        imagePosition="center"
      /> */}
      <CommonHeroSection image={wordpress} />
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
      <div className="bg-white py-5 lg:py-14">
        <div className=" w-full md:w-[90%] lg:w-[80%] mx-auto ">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Mastering WordPress Development for Your Business
          </h1>
          <p className="text-center text-base md:text-lg text-gray-700 mx-auto">
            It would be quite improbable to find any modern business that has
            not embraced the use of the internet in its operations, bearing in
            mind the current scenario that the technology and the internet have
            almost taken over everything. Of the many alternatives available for
            building websites, WordPress development takes in rather the longest
            proportion of the market share. It is heartening to know that the
            difference between failing and achieving your objectives on the
            internet, relies on the WordPress development services agencies that
            you will work with. This article seeks to elaborate on the important
            aspects of WordPress Development and why it is essential for you as
            a business.
          </p>
        </div>
      </div>
      <WordpressReason />
      <div className="bg-white py-5 lg:pb-14">
        <div className=" w-full md:w-[90%] lg:w-[80%] mx-auto ">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 lg:mb-8 text-gray-800">
            The Core Services Offered by a WordPress Development Company
          </h1>
          <CustomServicesCard services={services} />
        </div>
      </div>
      <ProcessList
        step={'Comprehensive WordPress Project Deliverables Guide'}
        processStages={projectDeliverables}
      />
    </>
  );
};

export default Wordpress;
const projectDeliverables = [
  {
    id: 1,
    title: 'Project Kickoff',
    description:
      'Conduct an initial meeting with the client to discuss WordPress site goals, scope, and technical requirements, ensuring alignment on expectations.',
  },
  {
    id: 2,
    title: 'Theme Selection and Customization',
    description:
      'Assist the client in selecting a suitable WordPress theme and customize it to align with their branding and functionality needs.',
  },
  {
    id: 3,
    title: 'Plugin Research and Setup',
    description:
      'Identify and install the necessary plugins for SEO, security, and performance optimization, ensuring smooth integration with the WordPress site.',
  },
  {
    id: 4,
    title: 'Content Migration and Creation',
    description:
      'Migrate existing content to the new WordPress site or create new content, ensuring proper formatting, SEO optimization, and user engagement.',
  },
  {
    id: 5,
    title: 'Website Development and Design',
    description:
      'Develop custom features, implement responsive designs, and ensure cross-browser compatibility while adhering to the latest WordPress standards.',
  },
  {
    id: 6,
    title: 'Testing and Quality Assurance',
    description:
      'Perform thorough testing across devices and browsers to ensure the site is bug-free, responsive, and ready for launch.',
  },
  {
    id: 7,
    title: 'SEO and Performance Optimization',
    description:
      'Optimize the site for search engines and performance, focusing on page speed, mobile-friendliness, and overall SEO best practices.',
  },
  {
    id: 8,
    title: 'Launch and Post-Launch Support',
    description:
      'Launch the WordPress site, monitor performance, and provide ongoing support for any technical issues or updates post-launch.',
  },
];

const services = [
  {
    icon: '🎨',
    title: 'Custom Theme Development',
    description:
      'Design themes with brand colors, logos, and textures for an enhanced, user experience.',
  },
  {
    icon: '🔌',
    title: 'Plugin Development',
    description:
      'Create unique plugins to introduce new website functionalities not available with standard options.',
  },
  {
    icon: '⚡',
    title: 'Website Optimization',
    description:
      'Optimize site performance, speed, and SEO for improved visibility, positioning, and user engagement.',
  },
  {
    icon: '🛠️',
    title: 'Maintenance and Support',
    description:
      'Provide regular maintenance and support to keep the website secure, functional, and up-to-date.',
  },
];
