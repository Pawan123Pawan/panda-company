// Service Card Component
import React, { useEffect } from 'react';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';
const ServiceCard = (props) => {
  const { service } = props;
  const hasLocations = service.address;
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      {!hasLocations ? (
        <>
          <div
            className="rounded overflow-hidden p-6 cursor-pointer transition-shadow duration-300 myCard group border-cardbg hover:bg-cardbg"
            onClick={() => navigate(service.link)}
          >
            <div className="flex flex-col justify-center items-center space-x-4">
              <div className="bg-white border ring-1 ring-primary p-5 rounded-full text-3xl">
                {service.icon}
              </div>
              <div className="flex justify-center flex-col items-center gap-5 mt-5">
                <h3 className="text-xl font-semibold text-center group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center group-hover:text-white">
                  {service.description}
                </p>
              </div>
              {/* CTA Button */}
              <div className="mt-4">
                <button
                  onClick={() => navigate(service.link)}
                  className="bg-primary text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 text-sm group-hover:bg-white group-hover:text-gray-800 "
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="bg-white shadow-lg rounded-lg p-6 mt-3 max-w-sm mx-auto"
            data-aos="fade-up"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-200 p-3 rounded-full">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <div className="flex flex-col">
                <h3 className="text-[18px] font-semibold">{service.address}</h3>
                <p className="text-gray-600 text-[16px]">{service.location}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ServiceCard;
