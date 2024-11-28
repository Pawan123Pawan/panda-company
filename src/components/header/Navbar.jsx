import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../../assets/panda.png';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoCloseSharp } from 'react-icons/io5';
import { navigationData } from '../../utils/staticData/navData';
import SubmenuAccordion from './SubmenuAccordion';
import CalendlyLink from '../../components/calendly/CalendlyLink';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true); // Track if header is visible
  const [lastScrollY, setLastScrollY] = useState(0); // Track the last scroll position
  const [servicesOpen, setServicesOpen] = useState(false);

  // Framer Motion variants for animating the menu
  const menuVariants = {
    open: {
      x: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      x: '-100%',
      transition: { duration: 0.5 },
    },
  };

  const megaMenuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    closed: {
      opacity: 0.8,
      y: '10px',
      transition: { duration: 0.2 },
    },
  };

  // Function to handle the scroll direction
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scrolling down, hide the navbar
        setShowHeader(false);
      } else {
        // if scrolling up, show the navbar
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY); // update the last scroll position
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);
  const handleDownload = () => {
    const pdfPath = '/pandaguys_brochure.pdf';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
    const link = document.createElement('a');
    link.href = '/pandaguys_brochure.pdf';
    link.download = 'pandaguys_brochure.pdf';
    link.click();
  };

  const handleServicesClick = (itemName) => {
    if (itemName === 'Services') {
      setServicesOpen((prev) => !prev);
    } else {
      setIsOpen(false);
    }
  };
  return (
    <>
      <header
        className={`bg-white z-30 sticky top:0 lg:top-8 transition-transform duration-300  ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Mega-menu */}
        <AnimatePresence>
          {isMegaMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={megaMenuVariants}
              className="absolute top-20 w-full z-10"
            >
              <div
                onMouseLeave={() => setIsMegaMenuOpen(false)}
                className="myShadow w-[95%] lg:w-4/5 mx-auto bg-white p-10 rounded"
              >
                <ul className="flex justify-between space-x-4 lg:gap-5 xl:gap-10 text-lg text-gray-800 font-medium capitalize">
                  {navigationData[2]?.submenu?.map((item, index) => (
                    <li key={item.name}>
                      <div className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="w-[40px] h-[40px] p-[10px] flex justify-center items-center bg-primary rounded-full text-white">
                          {item.icon}
                        </span>{' '}
                        {item.name}
                      </div>
                      <ul className="flex flex-col text-[16px] text-gray-700 capitalize">
                        {navigationData[2]?.submenu[index]?.menu?.map(
                          (item) => (
                            <li
                              key={item.name}
                              className="flex items-center gap-2 tracking-wide"
                            >
                              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              <NavLink
                                to={item.href}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className={({ isActive }) =>
                                  isActive
                                    ? 'text-primary text-nowrap underline'
                                    : 'text-nowrap hover:underline hover:text-primary'
                                }
                              >
                                {item.name}
                              </NavLink>
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="flex justify-between items-center w-full lg:w-[98%] xl:w-[90%] px-5 py-4 mx-auto">
          {/* Logo */}
          <div onClick={() => setIsOpen(false)} className="w-[130px] h-[60px]">
            <Link to={'/'}>
              <img src={logo} alt="company logo" className="w-full h-full" />
            </Link>
          </div>
          {/* Hamburger Icon */}
          <div className=" lg:hidden">
            <div className="flex items-center gap-5">
              {/* mobile view brochure */}
              <div className="relative">
                <button
                  onClick={handleDownload}
                  className="ping buble bg-cardbg text-white hover:bg-white text-sm hover:text-primary p-2 rounded-full font-medium transition border-[1.5px] hover:border-primary"
                >
                  Download Brochure
                </button>
              </div>
              {/* Hamburger Icon */}
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="text-2xl font-bold lg:hidden cursor-pointer hover:text-primary"
              >
                <FiMenu />
              </div>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:block md:w-60% lg:w-[50%]">
            <ul className="flex justify-between items-center space-x-4 text-lg text-gray-800 font-medium capitalize">
              {navigationData.map((item, index) => (
                <li
                  key={item.name}
                  onMouseEnter={() =>
                    item.name === 'Services'
                      ? setIsMegaMenuOpen(true)
                      : setIsMegaMenuOpen(false)
                  }
                  className="hover:underline"
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      isActive
                        ? 'font-bold underline text-nowrap'
                        : 'text-nowrap text-gray-700 hover:text-black'
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Schedule meeting */}
          <div className="hidden lg:block">
            <div className="flex gap-5 ">
              <div className="relative ">
                <button
                  onClick={handleDownload}
                  className="ping bg-cardbg text-white hover:bg-white hover:text-primary p-2 rounded-md font-semibold transition border-[1.5px] hover:border-primary"
                >
                  Download Brochure
                </button>
              </div>
              <CalendlyLink
                data={`Schedule Meeting`}
                class={`bg-black hover:bg-cardbg text-white p-2 rounded-md font-semibold`}
              />
            </div>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <motion.nav
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={menuVariants}
          onClick={() => setIsOpen(false)}
          className="w-full bg-black/5 fixed top-0 left-0 bottom-0 lg:hidden h-screen shadow-md "
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[310px] h-screen bg-gray-200 sidescrollbar overflow-y-auto"
          >
            {/* Mobile Menu Header */}
            <motion.div
              className={`flex justify-between items-center sticky top-0 z-20 transition-colors duration-300 py-3 px-5 bg-gray-200 `}
            >
              <Link to={'/'} onClick={() => setIsOpen(false)}>
                <img
                  src={logo}
                  alt="company logo"
                  className="w-[120px] h-[60px]"
                />
              </Link>
              <IoCloseSharp
                onClick={() => setIsOpen(false)}
                className="rounded-full text-2xl font-bold cursor-pointer hover:text-primary hover:bg-primary/30"
              />
            </motion.div>

            {/* Mobile Nav Links */}
            <div className=" px-5 ">
              <ul className="flex flex-col space-y-2 text-lg text-gray-800 font-medium capitalize">
                {navigationData.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.name === 'Services' ? '' : item.href}
                      className={({ isActive }) =>
                        `text-nowrap flex justify-between items-center p-2 rounded-lg transition-colors duration-300 ${
                          isActive && servicesOpen
                            ? 'text-primary'
                            : 'hover:text-primary hover:bg-white text-gray-700'
                        }`
                      }
                      onClick={() => handleServicesClick(item.name)}
                    >
                      {item.name}
                      {item.name === 'Services' && !servicesOpen && (
                        <IoIosArrowDown className="transition-transform duration-300" />
                      )}
                    </NavLink>

                    {servicesOpen && item.name === 'Services' && (
                      <SubmenuAccordion
                        handleSubmenu={() => setIsOpen(false)}
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.nav>
      </header>
    </>
  );
};

export default Navbar;
