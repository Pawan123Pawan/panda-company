import core from '../../assets/service/web-development/core-web.png';
import coding from '../../assets/service/web-development/coding.png';
import speed from '../../assets/service/web-development/speed-optimization.png';
import mobile from '../../assets/service/web-development/mobile-freindly.png';

const services = [
  {
    title: 'Core Web Vitals',
    description:
      'By keeping an eye on all the important metrics, our design & development team creates a user journey.',
    image: core,
  },
  {
    title: 'Modern Coding',
    description:
      'Our team has expertise in HTML, CSS, and JavaScript and creates websites that perform.',
    image: coding,
  },
  {
    title: 'Optimized Speed',
    description:
      'Fast-loading websites enhance user experience, and Google ranks speed-optimized sites higher.',
    image: speed,
  },
  {
    title: 'Mobile-Friendly',
    description:
      'We design mobile-friendly websites that attract more customers and ensure smooth performance across all devices.',
    image: mobile,
  },
];

const ServicesList = () => {
  return (
    <div className="w-full md:w-[90%] lg:w-[80%] mx-auto p-8 py-14">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
        How We Manage Work
      </h2>
      <p className="text-center text-base md:text-lg text-gray-700 mt-5 mb-8 w-full md:w-4/5 mx-auto">
        We have very good work in the team web development and ensure that the
        user experience covers all Core Web Vitals, modern coding standards, and
        fast and responsive web apps. Being a prominent Web Design Agency, we
        deliver high quality services regardless of the project.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
        {services.map((service, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-lg border-l-2 border-primary shadow-primary hover:shadow-cardbg  overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-xl "
          >
            <div className="flex justify-center items-center">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="flex flex-col px-2 items-center gap-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-700 text-center">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
