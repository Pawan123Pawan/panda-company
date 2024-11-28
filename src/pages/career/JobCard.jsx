import { useState } from 'react';
import { IoClose } from "react-icons/io5";


{
  /* {
            title: "Sales Executive",
            location: "Onsite - Chicago",
            postedDate: "October 18, 2024",
            description: "As a Sales Executive, you’ll help drive the company's growth by developing and managing client relationships:",
            description2: "Looking to make an impact in sales? Join us as a Sales Executive to connect with clients and drive revenue growth.",
            responsibilities: [
            "Identify and pursue new business opportunities.",
            "Develop and maintain client relationships.",
            "Collaborate with marketing and product teams to create proposals.",
            "Negotiate contracts and close deals.",
            "Achieve sales targets and report on sales performance."
            ],
            requirements: [
            "Proven experience in B2B sales or related field.",
            "Excellent communication and negotiation skills.",
            "Ability to build and maintain client relationships.",
            "Goal-oriented and motivated by achieving targets.",
            "Bachelor's degree in Business, Marketing, or related field."
            ]
        } */
}
function JobCard({ data }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleDetailsClick = () => {
    setShowDetails(true);
  };

  const handleCloseClick = () => {
    setShowDetails(false);
  };

  return (
    <div className="p-6 bg-white myShadow rounded-lg max-w-md">
      <h2 className="text-2xl font-bold text-gray-800">{data.title}</h2>
      <p className="text-gray-600 mt-2">Pandaguys - {data.location}</p>
      <p className="text-gray-500 mt-1">Posted: {data.postedDate}</p>

      <div className="mt-4">
        <p className="text-gray-700">{data.description2}</p>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={handleDetailsClick}
          className="text-cardbg/60 font-medium hover:text-cardbg transition duration-200"
        >
          See Details
        </button>
        <a href={'#jobClick'}>
          <button className="border-2 rounded-full border-primary text-primary  hover:text-white px-4 py-2  hover:bg-cardbg transition duration-300">
            Apply
          </button>
        </a>
      </div>

      {/* Modal for Job Description data */}
      {showDetails && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg mx-4 max-h-[90vh] overflow-y-auto sidescrollbar relative">
            <h3 className="text-xl font-bold text-cardbg">Job Description</h3>
            <p className="text-gray-700 mt-4">{data.description}</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {data?.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4">**Requirements:**</p>
            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
              {data?.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>

            <button
              onClick={handleCloseClick}
              className="bg-black text-white p-2 rounded hover:bg-cardbg transition duration-300 absolute top-4 right-4"
            >
              <IoClose/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobCard;
