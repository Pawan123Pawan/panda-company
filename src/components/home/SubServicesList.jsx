import React, { useEffect } from 'react';
import AOS from 'aos';
import ServiceCard from '../ServiceCard';

// Data
const services = [
  {
    id: 1,
    title: 'Performance Marketing',
    description:
      'Drive measurable results and optimize marketing campaigns to enhance your business performance and ROI.',
    icon: '📈',
    link: '/performance-marketing',
  },
  {
    id: 2,
    title: 'WordPress Development',
    description:
      'Create custom WordPress websites that are optimized, scalable, and tailored to your business needs.',
    icon: '🖥️',
    link: '/wordpress',
  },
  {
    id: 3,
    title: 'Custom Website Development',
    description:
      'Design and develop fully customized websites that deliver a unique, user-friendly, and engaging experience.',
    icon: '🌐',
    link: '/custom-website',
  },
  {
    id: 4,
    title: 'Shopify Development',
    description:
      'Build Shopify stores to boost your eCommerce business, providing seamless and secure shopping experiences.',
    icon: '🛒',
    link: '/shopify-store',
  },
  {
    id: 5,
    title: 'Email Marketing',
    description:
      'Reach and engage your audience effectively through targeted email campaigns designed to drive conversions.',
    icon: '✉️',
    link: '/email-marketing',
  },
  {
    id: 6,
    title: 'P.R Marketing',
    description:
      'Enhance brand reputation and visibility with tailored public relations campaigns and strategic media outreach.',
    icon: '📢',
    link: '/pr-management',
  },
  {
    id: 7,
    title: 'IVR Marketing',
    description:
      'Use Interactive Voice Response systems to automate marketing and engage customers through phone calls.',
    icon: '📞',
    link: '/ivr-marketing',
  },
  {
    id: 8,
    title: 'Performance Marketing',
    description:
      'Boost ROI with data-driven performance marketing—target, optimize, and convert effectively for measurable success!',
    icon: '💬',
    link: '/performance-marketing',
  },
  {
    id: 9,
    title: 'Local SEO',
    description:
      'Improve your local business visibility with targeted SEO strategies to reach local customers effectively.',
    icon: '📍',
    link: '/local-seo',
  },
  {
    id: 10,
    title: 'SEO',
    description:
      "Boost your website's organic search rankings with proven SEO techniques to drive more traffic.",
    icon: '🔍',
    link: '/search-engine-optimization',
  },
  {
    id: 11,
    title: 'Social Media Marketing',
    description:
      'Engage your audience and grow your brand through strategic social media marketing campaigns across platforms.',
    icon: '📱',
    link: '/social-media-marketing',
  },
  {
    id: 12,
    title: 'ORM (Online Reputation Management)',
    description:
      "Monitor and manage your brand's online reputation, ensuring a positive image across all digital platforms.",
    icon: '💼',
    link: '/online-reputation-management',
  },
];

const SubServiceList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="w-full lg:w-[85%] xl:w-[86%] mx-auto pb-20 p-4"
    >
      {/* Title and Description */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="text-gray-800 mt-4 w-[90%] lg:w-[85%] mx-auto">
          Panda Guys offers tailored digital marketing services—including SEO,
          PPC, social media management, content creation, email marketing, web
          design and many more—to elevate your brand and drive measurable
          results. Our team of seasoned professionals works closely with you to
          understand your unique business needs and develop customized
          strategies that deliver outstanding results.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default SubServiceList;
