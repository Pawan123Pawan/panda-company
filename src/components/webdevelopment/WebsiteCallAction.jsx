import React from 'react';
import { useNavigate } from 'react-router-dom';

const WebsiteCallAction = ({ text, description, image, imagePosition }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto mt-10">
      {/* Adding the custom class fixed-image */}
      <div
        className="relative py-12 lg:py-16 p-3 overflow-hidden fixed-image"
        style={{
          backgroundImage: image ? `url(${image})` : '',
          backgroundPositionY: imagePosition ? imagePosition : '',
        }}
      >
        <div className="w-full h-full absolute top-0 left-0 bg-primary/50"></div>
        <div className="flex flex-col lg:flex-row justify-between items-center relative w-full px-5 mx-auto lg:w-4/5">
          <div className="w-full lg:w-1/2">
            <h1 className="text-white text-3xl md:text-5xl font-semibold text-center lg:text-left">
              {text}
            </h1>
            <p className="py-6 text-white text-center lg:text-left text-md md:text-lg">
              {description}
            </p>
          </div>
          <div
            onClick={() => navigate('/contact')}
            className="flex items-center justify-center p-3 px-5 md:py-3 md:px-4 text-md md:text-lg lg:text-xl rounded-xl font-semibold md:w-1/5 bg-white text-primary hover:bg-primary hover:text-white"
          >
            Call Now
            <span className="ml-1">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="48"
                  d="m268 112 144 144-144 144m124-144H100"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCallAction;
