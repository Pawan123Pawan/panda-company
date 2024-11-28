import React from 'react';
import HtmlContent from '../components/html_content/HtmlContent';
const ProcessStep = ({ step, description, processStages }) => {
  return (
    <div className="p-8 py-16 bg-green-100">
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          {/* Our 6-D Process */}
          {step}
        </h2>
        <p className="text-center text-base md:text-lg text-gray-700 mt-5 mb-8 w-full md:w-4/5 mx-auto">
          {description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {processStages.map((stage, index) => (
            <div key={index} className="mx-auto rounded-lg p-5 ">
              <h3 className="font-bold text-8xl text-gray-300">{`${String(
                index + 1
              ).padStart(2, '0')}.`}</h3>
              <h3 className="text-xl md:text-2xl text-gray-800 font-semibold font-mono my-3">
                {stage.title}
              </h3>
              <HtmlContent htmlContent={stage?.description} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;
