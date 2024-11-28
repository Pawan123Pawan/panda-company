const processStages = [
  {
    title: 'Discover',
    description:
      'Analyse the audience and collect data to formulate the project needs and aims to ensure appropriate organising of the workflow.',
  },
  {
    title: 'Define',
    description:
      'Articulate project goals and clients’ expectations for facilitation of the project execution and post completion evaluation.',
  },
  {
    title: 'Design',
    description:
      'Prepare the structure and screens of the interface by developing and designing wireframes, in order to build a friendly interface for the target users.',
  },
  {
    title: 'Develop',
    description:
      'Constructing the application assumes employing modern software development practices by delivering the relevant features while also optimising the application performance.',
  },
  {
    title: 'Deploy',
    description:
      'Put the application within the production context ensuring everything is in order for the users and all parts working properly have been tested.',
  },
  {
    title: 'Deliver',
    description:
      'Ensure the remaining obligations in respect of the project execution have been performed and the client is provided with the final deliverable.',
  },
];

const ProcessList = () => {
  return (
    <div className="p-8 py-16 bg-green-100">
      <div className="w-full md:w-[90%] lg:w-[80%] mx-auto ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Our Six D's Process
        </h2>
        <p className="text-center text-base md:text-lg font-semibold text-gray-700 mt-5 mb-8 w-full md:w-4/5 mx-auto">
          At Panda Guys, we follow a detailed 6-step process.
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
              <p className="text-gray-700">{stage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessList;
