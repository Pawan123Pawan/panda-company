import React, { useEffect } from 'react';
import paypercall from '../../assets/service/paypercall.webp';
import { motion } from 'framer-motion';
import AOS from 'aos';
import Carousel from 'react-multi-carousel';
import sideBg from '../../assets/service/payPerServiceside.jpg';
import PayPerAccordion from './PayPerAccordion';
import OurClients from '../../components/home/OurClients';
function PayPerCall() {
  const responsive = {
    superLarge: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3,
    },
    large: {
      breakpoint: { max: 1199, min: 992 },
      items: 2,
    },
    medium: {
      breakpoint: { max: 991, min: 768 },
      items: 2,
    },
    small: {
      breakpoint: { max: 767, min: 550 },
      items: 2,
    },
    phone: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
    },
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const faqData = [
    {
      id: 1,
      title: 'What is Pay Per Call & How Does It Work ?',
      content:
        'Pay Per Call is a marketing model where you pay for incoming phone calls generated by targeted ads. We drive high-quality calls from potential customers who are interested in your services, ensuring you only pay for actual leads.',
    },
    {
      id: 2,
      title: 'How do you ensure the quality of the calls?',
      content:
        'We use advanced targeting and filtering techniques to ensure the calls we generate are from relevant and interested prospects. We also continuously monitor and optimize campaigns to improve lead quality and match your business needs.',
    },
    {
      id: 3,
      title: 'What types of businesses benefit most from Pay Per Call?',
      content:
        'Pay Per Call is ideal for businesses that rely on phone conversations to close deals, such as service-based industries, legal services, healthcare, and home services. If your business thrives on direct customer interaction, this model can be highly effective.',
    },
    {
      id: 4,
      title: 'How are calls tracked and reported?',
      content:
        'We use tracking technologies to monitor each call’s source and performance. You receive detailed reports that include call metrics, such as duration, call time, and geographic location, allowing you to assess the effectiveness of the leads and make informed decisions.',
    },
  ];
  const targetLeads = [
    {
      title: 'Cost-Effective',
      description:
        'Pay only for genuine, high-quality calls, ensuring your budget is spent on leads that matter',
    },
    {
      title: ' Target Leads',
      description:
        'Reach potential customers who are actively searching for your services, increasing the likelihood of conversion.',
    },
    {
      title: 'Performance Based',
      description:
        'Only pay for results, reducing the risk of wasted spend on ineffective results, reducing advertising.',
    },
    {
      title: 'Increased Visibility',
      description:
        'Expand your reach with targeted campaigns that attract qualified leads to your business.',
    },
  ];
  return (
    <div className="overflow-hidden">
      {/* <WaveAnimation /> */}
      <div className="w-full">
        <div className="w-full h-[250px] md:h-[350px] lg:h-[550px]">
          <img src={paypercall} alt="pay-per-call" className="w-full h-full" />
        </div>
        {/* <div className=" bg-gradient-to-r from-primary/30 to-secondary p-5 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-[90%] xl:w-[85%] mx-auto ">
            <div className="w-full h-full flex flex-col justify-center gap-4 ">
              <div className=" text-center md:text-left text-lg lg:text-xl text-primary font-semibold tracking-wider">
                Service
              </div>
              <h1 className="text-center md:text-left text-3xl lg:text-5xl  text-shadow font-extrabold text-gray-800 ">
                PPC Services In India Management Agency
              </h1>
              
              <p className="w-full text-center md:text-left lg:w-4/5 font-medium text-gray-700 text-base md:text-lg lg:text-xl  tracking-wide">
                In the age of digital transformation, organisations are always
                on the lookout for new ways to engage with potential customers
                and avoid the churn in sales. Pay Per Call (PPC) services are at
                the core of marketing that has probably been the most impactful
                and in the right direction.
              </p>
            </div>
            <div>
              <img src={paypercall} alt="hero-image" />
            </div>
          </div>
        </div> */}

        {/* Carousel Section */}
        <div
          className="mt-6 px-4 lg:px-16 lg:w-[92%] mx-auto"
          style={{ textAlign: 'center' }}
        >
          <h2 className="font-bold text-gray-900 text-[24px] sm:text-[30px] lg:text-[36px]">
            Target <span className="text-primary">Leads</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base lg:text-lg">
            Enhance your conversion chances by reaching potential customers who
            are actively seeking your services.
          </p>

          <Carousel
            responsive={responsive}
            infinite={true}
            showDots={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            arrows={false}
            itemClass="w-full p-2 py-5 md:p-5 "
            containerClass="carousel-container mt-8"
          >
            {targetLeads?.map((ele, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center rounded-2xl h-64 sm:h-72 p-5 hover:bg-cardbg group"
              >
                <div>
                  <h3 className="font-bold text-[18px] text-gray-800 sm:text-[22px] md:text-[25px] underline group-hover:text-white">
                    {ele?.title}
                  </h3>
                </div>
                <p className="text-center text-gray-700 mt-2 group-hover:text-white">
                  {ele?.description}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* Animated Section */}
      <div data-aos="fade-up" className="px-3 lg:w-[90%] mx-auto xl:w-[85%]">
        <p
          className=" text-[30px] font-black md:p-4 mt-3"
          style={{ textAlign: 'center' }}
        >
          Pay Per Call Service Advantages
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {/* Accordion Animation */}
          <div className="md:p-2 p-2" data-aos="fade-up-right">
            <PayPerAccordion />
          </div>

          {/* Image Animation */}
          <div className="p-4" data-aos="fade-up-left">
            <img
              src={sideBg}
              alt="pay-per-call-side-bg"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="mt-3 px-3 lg:w-[90%] mx-auto xl:w-[85%]"
      >
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {/* Accordion Animation */}
          <div className="md:p-4 md:w-[90%]" data-aos="fade-up-right">
            <font className="md:p-3 p-2 text-[20px] font-bold text-center md:text-left">
              Frequently Asked Questions ?
            </font>
            <br />
            <p className="text-left md:p-2 p-2">
              Welcome to our FAQs section! Here, you’ll discover answers to
              frequently asked questions about our performance marketing
              services, strategies, and more. If you don’t find the information
              you need, our support team is ready to assist you further. We’re
              here to help you succeed
            </p>
          </div>

          {/* Image Animation */}
          <div className="md:p-2 p-2" data-aos="fade-up-left">
            <PayPerAccordion faq={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PayPerCall;
