import CalendlyLink from '../calendly/CalendlyLink';

const HomeOffer = () => {
  return (
    <div className="w-full mx-auto py-10">
      {/* Adding the custom class fixed-image */}
      <div className="relative py-12 lg:py-16 p-3 overflow-hidden fixed-image">
        <div className="w-full h-full absolute top-0 left-0 bg-primary/50"></div>
        <div className="flex flex-col justify-center items-center relative">
          <h1 className="text-white text-3xl md:text-5xl font-semibold text-center">
            Book Your Appointment Today!
          </h1>
          <p className="py-6 text-white text-center text-md md:text-lg w-full lg:w-3/5 mx-auto">
            Take your digital marketing to the next level with our expert
            services. Secure your spot now for an exclusive consultation with
            our specialists. Don’t wait—transform your business today!
          </p>

          <CalendlyLink
            data={`Schedule a Meeting`}
            class={`bg-white text-gray-800 text-xl px-3 py-2 md:px-5 md:py-2 rounded-full cursor-pointer transition-transform duration-500 ease-in-out delay-500 hover:bg-primary hover:text-white`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeOffer;
