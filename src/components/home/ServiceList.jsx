import AOS from 'aos';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: 'Google Ads',
    description: 'Boost your visibility with Google Ads.',
    icon: '🌐',
    link: '/google-ads',
  },
  {
    id: 2,
    title: 'Facebook Ads',
    description: 'Reach your audience with Facebook Ads.',
    icon: '📱',
    link: '/facebook-ads',
  },
  {
    id: 3,
    title: 'SEO',
    description: 'Optimize your website for search engines.',
    icon: '🔍',
    link: '/search-engine-optimization',
  },
  {
    id: 4,
    title: 'Branding',
    description: 'Build your brand identity.',
    icon: '🏷️',
    link: '/branding',
  },
  {
    id: 5,
    title: 'Business Automation',
    description: 'Automate your business processes.',
    icon: '⚙️',
    link: '/business-automation',
  },
  {
    id: 6,
    title: 'Pay Per Call',
    description: 'Drive high-quality calls to your business with Pay Per Call.',
    icon: '📞',
    link: '/pay-per-call',
  },
];

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();
  return (
    <div
      className=" shadow-lg border-l-2 border-primary shadow-primary hover:shadow-cardbg rounded overflow-hidden  p-6 cursor-pointer transition-shadow duration-300 hover:shadow-xl "
      onClick={() => navigate(service.link)}
    >
      <div className="flex items-center space-x-4">
        {/* Icon */}
        <div className="bg-gray-100 p-4 rounded-full text-2xl">
          {service.icon}
        </div>
        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

const ServiceList = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      className="w-full lg:w-[90%] xl:w-[86%] mx-auto pb-20 p-5"
    >
      {/* Title and Description */}
      <div className="text-center mb-16">
        <h1 className="text-3xl font-bold">Our Core Services</h1>
        <p className="text-gray-800 mt-4">
          Explore our services, including Google Ads, Facebook Ads, SEO,
          branding, and business automation to help grow your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
