import MapComponent from './MapComponent';

const locations = [
  {
    title: 'Office Address',
    timings: 'Mon-Fri 10am to 6pm.',
    address:
      'C-32 , 3rd Floor, Masoodpur, Sector D, Vasant Kunj, New Delhi, Delhi 110070',
  },
  // {
  //   title: 'Dubai office',
  //   timings: 'Mon-Sat 9am to 6pm.',
  //   address:
  //     'Office No. 401, Crystal Tower - Business Bay - Dubai - United Arab Emirates',
  // },
  // {
  //   title: 'USA office',
  //   timings: 'Mon-Sat 9am to 6pm.',
  //   address: '11047 sw 16th manor davie, fl ,usa 3324',
  // },
];

const ContactAddress = () => {
  return (
    <div className="rounded-lg bg-[#eae8ff83] mx-auto">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
            {/* Map Section */}
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-300 rounded-lg overflow-hidden">
              {/* <MapComponent /> */}
              <iframe
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14022.991854331014!2d77.1596288!3d28.5172297!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f2402e5d567%3A0xea07a3972bc254c1!2sPanda%20Guys%20Performance%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1732273412522!5m2!1sen!2sin"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Address Section */}
            <div className="space-y-4">
              <p className="text-4xl font-bold text-gray-800">Our Offices</p>
              <p className="text-lg text-gray-700">
                Find us at these locations:
              </p>
              <div className="space-y-4 divide-y-2">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                  >
                    <p className="text-xl font-semibold text-gray-700">
                      {location.title}
                    </p>
                    <p className="text-base text-gray-600">
                      {location.timings}
                    </p>
                    <p className="text-sm font-semibold text-cardbg">
                      {location.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
