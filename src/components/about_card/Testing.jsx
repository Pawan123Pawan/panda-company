import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import slide1 from '../../assets/about/about_slide1.png';
import slide2 from '../../assets/about/about_slide2.png';
import slide3 from '../../assets/about/about_slide3.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Testing() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.photo:not(:first-child)', { opacity: 0, scale: 0.5 });
      const animation = gsap.to('.photo:not(:first-child)', {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: '.gallery',
        start: 'top top',
        end: 'bottom bottom',
        pin: '.rightblock',
        animation: animation,
        scrub: true,
        // markers: true, // Remove this for production
      });
    });
    return () => ctx.revert();
  }, []);

  const images = [
    { src: slide1, alt: 'A beautiful scenic view' },
    { src: slide2, alt: 'A product shot' },
    { src: slide3, alt: 'An artistic design' },
  ];

  return (
    <div className="roots p-4 md:p-8 lg:p-12">
      <p className="text-3xl font-bold text-center mb-6 text-gray-800 mt-5">
        Leading The Future Of
        <font className="text-primary"> Digital Marketing </font> Excellence
      </p>
      <div className="gallery flex flex-col md:flex-row overflow-hidden">
        <div
          className="left md:w-1/2 flex flex-col"
          style={{ marginTop: '10%' }}
        >
          <div className="details ">
            <p className="text-lg md:text-[18px] text-gray-700 leading-relaxed mt-4">
              <p className="text-lg font-black">
                <font className="text-primary text-3xl">Our Services</font>
              </p>
            </p>

            <p className="text-lg md:text-[18px] font-semibold text-gray-700 leading-relaxed mb-4">
              As a top performance marketing firm, we provide a wide array of
              services to address the varied requirements of our customers. Our
              offerings span from SEO and PPC to social media campaigns and
              content development. We have the skills and resources to boost
              your company's success in the online landscape. Our staff is
              dedicated to creating the most effective digital marketing plans
              that give your brand the highest visibility and customer
              engagement possible.
            </p>
          </div>
          <div className="details ">
            <p className="text-lg md:text-[18px] text-gray-700 leading-relaxed mt-4">
              <p className="text-lg font-black">
                <font className="text-primary text-3xl"> Our Strategy</font>
              </p>
            </p>

            <p className="text-lg md:text-[18px] font-semibold text-gray-700 leading-relaxed mb-4">
              Panda Guys, we recognize the fact that each corporation is
              distinct and so are their marketing possibilities. Therefore, we
              perceive every project uniquely, and work towards the goals
              articulated for the project. The first step in our process is to
              understand your business and your customers, and after that, a
              thorough digital marketing strategy is developed. As one of the
              leading digital marketing companies, we are equipped with research
              and analytics tools to not only run the advertising campaigns but
              also guarantee their success and performance improvement.
            </p>
          </div>
          <div className="details ">
            <p className="text-lg md:text-[18px] text-gray-700 leading-relaxed mt-4">
              <p className="text-lg font-black">
                <font className="text-primary text-3xl"> Our Pledge</font>
              </p>
            </p>

            <p className="text-lg md:text-[18px] font-semibold text-gray-700 leading-relaxed mb-4">
              We promise that customers will receive the highest degree of
              service and expect specific performance. Our professionals labour
              with such diligence in order for your firm to have any chances of
              growing. As the number one agency for digital marketing in India,
              we are always looking for new developments and always manage to
              incorporate the changes in the digital world within the current
              period. It is our desire to establish strong and healthy bonds
              with our customers and assist them in employing successful online
              marketing strategies for a long time.
            </p>
          </div>
          <div className="details ">
            <p className="text-lg md:text-[18px] text-gray-700 leading-relaxed mt-4">
              <p className="text-lg font-black">
                <font className="text-primary text-3xl">
                  {' '}
                  Why We Are The Best?
                </font>
              </p>
            </p>

            <p className="text-lg md:text-[18px] font-semibold text-gray-700 leading-relaxed mb-4">
              When you go with Panda Guys, you get a performance marketing
              agency that embraces every aspect of your business. Our history of
              success speaks for itself and shows why we are the best for
              businesses that are ready to move forward with their online
              marketing. With Panda Guys you can always expect:
            </p>
            <ul className="font-semibold list-disc ml-4 text-primary">
              <li>Tailor-made online marketing services</li>
              <li>Expert analysis and creative techniques</li>
              <li>Regular updates and honest report</li>
            </ul>
            <p className="mt-4">
              <Link to={'/service'}>
                <button className="relative flex items-center px-6 py-3 border border-secondary overflow-hidden font-medium transition-all bg-cardbg rounded-md group">
                  <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-mr-4 group-hover:-mt-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-primary rounded group-hover:-ml-4 group-hover:-mb-4">
                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-primary rounded-md group-hover:translate-x-0"></span>
                  <span className="relative w-full text-left font-bold text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                    View All Services
                  </span>
                </button>
              </Link>
            </p>
          </div>
        </div>

        <div className="rightblock w-full md:w-1/2 h-screen flex flex-col justify-center">
          <div
            className="relative p-4"
            style={{ width: '38vw', height: '50vw', borderRadius: '20%' }}
          >
            {images.map((image, index) => (
              <div key={index} className="photo absolute w-full h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testing;
