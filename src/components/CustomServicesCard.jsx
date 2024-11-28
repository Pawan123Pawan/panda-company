import React from 'react';

const CustomServicesCard = ({ services }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div className="shadow-lg border-l-2 border-primary shadow-primary hover:shadow-cardbg rounded overflow-hidden  p-6 cursor-pointer transition-shadow duration-300 hover:shadow-xl ">
            <div className="flex items-center space-x-4" key={idx}>
              {/* Icon */}
              <div className="bg-gray-100 border border-secondary p-4 rounded-full text-2xl">
                {service.icon}
              </div>
              {/* Title and Description */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomServicesCard;
