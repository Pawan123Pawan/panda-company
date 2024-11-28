import React, { useEffect, useState } from 'react';
import CustomCarousel from '../CustomCarousel';
import { clientData } from '../../utils/staticData/clientData';
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';

const OurClients = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const navigate = useNavigate();
  // Function to close the modal
  const closeModal = () => setSelectedImageIndex(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="py-16">
      <div className="p-5 w-full lg:w-[90%] xl:w-[87%] mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Section Header */}
          <div
            data-aos="fade-right"
            className="flex flex-col gap-3 lg:gap-6 text-center lg:text-left"
          >
            <h2 className="text-lg md:text-2xl font-bold text-gray-800">
              SOME OF OUR PRECIOUS CLIENTS
            </h2>

            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary  leading-tight animate-gradient-text drop-shadow-lg lg:py-2">
              Pandaguys
            </h1>

            <p className="text-md text-gray-800 max-w-[600px] mx-auto md:mx-0 text-center lg:pr-10 md:text-left">
              Meet some of our valued clients who trust us to drive their
              success! 🚀 We’re proud to partner with innovative businesses that
              are making waves in their industries. Join our family and let’s
              achieve greatness together!
            </p>

            {/* View Our Clients Button */}
            <div className="mt-3">
              <button
                onClick={() => navigate('/service')}
                className=" text-white px-6 py-3 rounded-full text-md font-semibold  bg-gradient-to-r from-primary to-pink-500  transition animate-gradient-text hover:bg-white"
              >
                View Our Services
              </button>
            </div>
          </div>

          {/* Client Logos Grid */}
          <div className="mt-5 md:mt-0">
            <CustomCarousel
              setSelectedImageIndex={setSelectedImageIndex}
              clientData={clientData}
            />
          </div>

          {/* client data Modal */}
          {selectedImageIndex !== null && (
            <div
              onClick={closeModal}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            >
              <div className="relative bg-white rounded-lg p-6 w-[90%] md:w-[60%] xl:w-[40%] ">
                <button
                  onClick={closeModal}
                  className="absolute top-2 right-2 text-white bg-black p-2 rounded-full"
                >
                  ✖
                </button>

                <div className="flex flex-col items-center lg:p-10 gap-6">
                  <img
                    src={clientData[selectedImageIndex]?.logo}
                    alt={`${clientData[selectedImageIndex]?.name} Logo`}
                    className="w-[150px] h-[50px] mb-4"
                  />
                  <div className="flex flex-col">
                    <h3 className="text-2xl font-semibold">
                      {clientData[selectedImageIndex]?.name} 👍
                    </h3>
                    <h4 className="text-lg text-gray-600">
                      {clientData[selectedImageIndex]?.title}
                    </h4>
                    <p className="mt-2 text-gray-800 bg-yellow-100 p-3 rounded-lg">
                      {clientData[selectedImageIndex]?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
