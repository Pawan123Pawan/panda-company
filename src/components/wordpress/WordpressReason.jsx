import wordpress_reason from '../../assets/service/wordpress/wordpress_reason.jpg';

const WordpressReason = () => {
  return (
    <div className=" p-5 bg-white">
      <div className="w-full lg:w-[90%] xl:w-[87%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:p-9  mt-5 text-center md:text-left">
          <font className="text-gray-800 font-semibold text-3xl lg:text-4xl mt-4">
            What is the reason for the supremacy of WordPress Development over
            Others?
          </font>
          <p className="text-center lg:text-left text-base md:text-lg mt-5 text-gray-700">
            WordPress is such a flexible website building platform that more
            than 40% of pages on the internet run on it. The reason behind this
            is its flexibility, ease of use and availability of a myriad of
            plugins for just about anything imaginable. Hence, it is an
            appropriate platform for businesses regardless of the scale. From
            basic blogs to the most advanced e-commerce sites, WordPress
            development services fit all the clients' needs.
          </p>
          <p className="text-center lg:text-left text-base md:text-lg my-5 text-gray-700">
            The Importance of a WordPress Development Company When you decide to
            partner with a WordPress development company, you can be sure that
            you will get a quality end product that meets all the required
            standards. Such companies have a wide variety of services, which
            encompass all stages of building a website.
          </p>
        </div>
        <div className="p-4">
          <img
            src={wordpress_reason}
            alt="wordpress_reason"
            className="w-full h-auto rounded-md "
          />
        </div>
      </div>
    </div>
  );
};

export default WordpressReason;
