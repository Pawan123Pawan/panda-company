import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OurTeam = ({ data }) => {
  return (
    <div className="flex flex-col items-center mb-4 py- px-2 ">
      <p className="text-3xl font-bold text-center m-4 text-gray-800">
        Our
        <font className="text-primary"> Team </font>
      </p>
      <div className="text-center grid gap-3 md:gap-4 lg:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full max-w-screen-xl">
        {data.map((employee) => (
          <div
            key={employee.id}
            className="flex flex-col items-center border-l-2 md:border-l-4 border-cardbg bg-white rounded-lg shadow-lg shadow-primary hover:shadow-cardbg p-4 hover:shadow-xl transition-shadow"
          >
            <Link to={employee.linkedin} target="_blank">
              <img
                className="rounded-full border border-primary w-36 h-36 object-cover mb-4 transform hover:scale-105 duration-300 ease-in-out shadow-lg shadow-white hover:shadow-primary hover:shadow-xl"
                src={employee.image}
                alt={employee.name}
              />
            </Link>
            <h5 className="text-lg font-bold text-[#3f003c]">
              {employee.name}
            </h5>
            <p className="text-md font-normal text-secondary">
              {employee?.department}
            </p>
            <p className="text-sm text-primary mb-2">{employee.position}</p>
            <div className="flex items-center space-x-4">
              {employee.linkedin && (
                <Link
                  to={employee.linkedin}
                  target="_blank"
                  className="text-blue-700 hover:text-blue-500"
                >
                  <FaLinkedin size={20} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
