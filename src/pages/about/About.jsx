import { useEffect } from 'react';
import AOS from 'aos';
import { FaSketch, FaCode, FaRocket } from 'react-icons/fa';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import section from '../../assets/about/section_two.png';
import AboutCard from '../../components/about_card/AboutCard';
import Testmonial from '../../components/about_card/Testmonial';
import Testing from '../../components/about_card/Testing';
import { teamHead } from '../../assets/employees/data';
import panda1 from '../../assets/about/panda1.png';
import panda2 from '../../assets/about/panda2.png';
import panda3 from '../../assets/about/panda3.png';
import panda4 from '../../assets/about/panda4.png';
import panda5 from '../../assets/about/panda5.png';
import panda6 from '../../assets/about/panda6.png';
import aboutbg from '../../assets/about/about_bg.jpeg';
import about from '../../assets/about/about.png';
import OurTeam from '../../components/ourTeam/OurTeam';
import CalendlyLink from '../../components/calendly/CalendlyLink';
import background from '../../assets/about/about.mp4';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize the duration
    });
  }, []);
  const services = [
    {
      id: 1,
      icon: <FaSketch className="text-3xl" />,
      title: 'Designing',
      description: 'Creative design solutions tailored to your needs.',
      ariaLabel: 'Designing services',
    },
    {
      id: 2,
      icon: <FaCode className="text-3xl" />,
      title: 'Development',
      description:
        'Robust web and mobile applications to drive your business forward.',
      ariaLabel: 'Development services',
    },
    {
      id: 3,
      icon: <FaRocket className="text-3xl" />,
      title: 'Launching',
      description: 'Get your product to market quickly and efficiently.',
      ariaLabel: 'Launching services',
    },
  ];
  const cardsData = [
    { title: 'Happy Clients', count: 500, des: '+' },

    { title: 'Team Size', count: 30, des: '+' },

    { title: 'Conversion', count: 50, des: 'K+' },

    { title: 'Experience', count: 5, des: '+Years' },
  ];
  const imgData = [
    { img: panda1, titles: 'panda_first' },

    { img: panda2, titles: 'panda_second' },
    { img: panda3, titles: 'panda_third' },
    { img: panda4, titles: 'panda_fourth' },
    { img: panda5, titles: 'panda_fifth' },
    { img: panda6, titles: 'panda_sixth' },
  ];

  return (
    <>
      <div className="h-[300px] md:h-[450px] lg:h-[calc(100vh-6rem)] p-5 py-14 overflow-hidden flex items-center justify-center relative">
        {/* overlay */}
        <div className="w-full absolute top-0 left-0 z-10 bg-primary/30"></div>
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  object-cover z-[-1] h-full"
        >
          <source src={background} type="video/mp4" />
        </video>
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-shadow font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-black to-white  leading-tight animate-gradient-text drop-shadow-lg text-center">
          About Us
        </h2>
        {/* My content */}
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-[90%] xl:w-[85%] mx-auto ">
          <div className="w-full h-auto flex flex-col justify-center gap-4 ">
            <p className="text-center text-xl md:text-left lg:text-2xl text-primary font-semibold tracking-wider">
              About Us
            </p>
            <h1 className="text-center md:text-left text-3xl md:text-4xl lg:text-5xl  text-shadow font-extrabold text-white ">
              Digital Marketing Agency
            </h1>
            
            <p className="text-white text-base md:text-lg text-center md:text-left">
              <b className="text-prima ">Welcome to Panda Guys</b> Your go-to
              Digital Marketing Agency in India! We at Panda Guys work hard to
              give you top-notch digital marketing services that take your brand
              to the next level. As India's best digital marketing agency, we
              take pride in our ability to come up with strategies that get
              results and fit what each client needs. We started out with a
              dream to create a performance marketing agency that would stand
              out in the busy digital world.
            </p>
          </div>
          <div className="h-full w-full flex justify-center lg:justify-end">
            <img src={about} alt="h-full w-full" />
          </div>
        </div> */}
      </div>
      <div className="w-full lg:w-[99%] m-auto mt-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 mt-5 pt-10">
          Welcome to Panda Guys, where your
          <font className="text-primary"> success</font> story begins! 🚀
        </h2>
        <div className=" w-full lg:w-[90%] xl:w-[85%] mx-auto grid sm:grid-cols-2 grid-cols-1 p-2 md:grid-cols-3 gap-8 my-10 ">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white  rounded-lg transition-transform transform hover:-translate-y-1 hover:ease-in duration-300 hover:shadow-lg p-6 text-center hover:bg-cardbg group"
              data-aos="fade-up"
            >
              <div
                className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full "
                data-aos="fade-up"
              >
                <Link
                  className="text-primary/70 group-hover:text-cardbg transition-colors bg-gray-100 p-5 rounded-full"
                  to="/"
                  aria-label={service.ariaLabel}
                >
                  {service.icon}
                </Link>
              </div>
              <div className="icon-content my-7">
                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors mt-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" p-5">
          <div className="w-full lg:w-[90%] xl:w-[85%] mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:p-9  mt-5">
              {/* <p className="text-xl lg:text-2xl text-primary font-medium mt-3 ">
                Our Services &nbsp;&nbsp;
              </p> */}
              <font className="text-gray-800 font-black text-3xl lg:text-4xl mt-4">
                As a Top Performance Marketing Agency{' '}
              </font>
              <p className="text-[14px] md:text-md lg:text-lg font-medium mt-5 text-gray-700">
                We provide a wide array of services to address the varied
                requirements of our customers. Our offerings span from SEO and
                PPC to social media campaigns and content development. We have
                the skills and resources to boost your company's success in the
                online landscape. Our staff is dedicated to creating the most
                effective digital marketing plans that give your brand the
                highest visibility and customer engagement possible.
              </p>
              <p className="text-[14px] md:text-md lg:text-lg font-medium my-5 text-gray-700">
                Join us and watch your business thrive with top-notch SEO, PPC,
                social media management, content creation, email marketing, and
                web design. Ready to transform your digital presence? Let’s make
                it happen with Panda Guys!
              </p>
              <CalendlyLink
                data={`Schedule Meeting`}
                class={`bg-black hover:bg-cardbg text-white p-2 rounded-md font-semibold`}
              />
            </div>
            <div className="p-4">
              <img
                src={section}
                alt="Section_second"
                className="w-full h-auto rounded-md "
                data-aos="fade-up"
              />
            </div>
          </div>
        </div>
        <div data-aos="fade-in">
          <AboutCard cardsData={cardsData} />
        </div>
        <div className=" hidden md:block mb-4">
          <Testing />
        </div>
        <div className="p-2 md:hidden block" data-aos="fade-up">
          <img src={aboutbg} alt="about_bg" className="w-full h-auto mx-auto" />
        </div>
        <div className="mb-2 mt-4">
          <p className="text-3xl font-bold text-center mb-2 text-gray-800 mt-5">
            Our Happy Clients
          </p>
          <AboutCard cardsData={imgData} />
        </div>
        <div
          data-aos="fade-up "
          className="w-full md:w-[90%] lg:w-[85%] mx-auto"
        >
          <Testmonial />
        </div>
        <div className="mb-2 p-2">
          <div className="flex flex-col items-center">
            <OurTeam data={teamHead} />

            {/* See More Button */}
            <Link to={'/all-team'}>
              <button className="mt-6 px-6 py-2 font-bold text-white bg-primary rounded-full hover:bg-cardbg transition-colors">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
