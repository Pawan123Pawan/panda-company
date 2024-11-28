import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/panda.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import google from '../../assets/home/goolge-adds.svg';
import meta from '../../assets/home/meta-adds.svg';
import shopify from '../../assets/home/shopyfy.webp';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaDribbble,
  FaMailBulk,
  FaAddressCard,
  FaMobileAlt,
} from 'react-icons/fa';
import { ImLinkedin } from 'react-icons/im';
import { GrPinterest } from 'react-icons/gr';

function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const products = [
    { name: 'Home', link: '/' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'Our Teams', link: '/all-team' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Careers', link: '/careers' },
    { name: 'Terms & Conditions', link: '/terms-conditions' },
    { name: 'Refund & Cancellation', link: '/refund-cancellation' },
  ];

  const companyLinks = [
    { name: 'Branding', link: '/branding' },
    { name: 'Ad Shoot', link: '/ad-shoot' },
    { name: 'Web Development', link: '/custom-website' },
    { name: 'Performance Marketing', link: '/performance-marketing' },
    {
      name: 'Search Media Marketing',
      link: '/search-media-marketing',
    },
  ];

  const developerLinks = [
    {
      social: <FaMailBulk style={{ fontSize: '25px' }} />,
      name: 'C-32 , 3rd Floor, Masoodpur, Sector D, Vasant Kunj, New Delhi, Delhi 110070',
      link: '#',
    },
    {
      social: <FaAddressCard style={{ fontSize: '18px' }} />,
      name: 'Info@pandaguys.in',
      link: 'mailto:info@pandaguys.in',
    },
    {
      social: <FaMobileAlt style={{ fontSize: '18px' }} />,
      name: '+91-962-506-7150',
      link: 'tel:+91-962-506-7150',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setMessage('Thank you for subscribing!');
      setEmail('');
    } else {
      setMessage('Please enter a valid email address.');
    }
  };

  // Carousel data (replace with actual data if needed)
  const carouselItems = [
    { img: google, name: 'Client 1' },
    { img: meta, name: 'Client 2' },
    { img: shopify, name: 'Client 3' },
  ];

  const responsive = {
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleDownload = () => {
    const pdfPath = '/pandaguys_brochure.pdf';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
    const link = document.createElement('a');
    link.href = '/pandaguys_brochure.pdf';
    link.download = 'pandaguys_brochure.pdf';
    link.click();
  };

  return (
    <footer className="bg-cardbg/40 text-white">
      <div className="max-w-screen-xl px-4 pt-10 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-14">
        <div className="grid grid-cols-7 gap-4 pb-6 border-b border-gray-800">
          <img
            src={logo}
            alt="Logo"
            className="w-40 md:w-32 lg:w-40 col-span-2"
          />
          <div className="block md:hidden col-span-5">
            <Carousel
              responsive={responsive}
              arrows={false}
              infinite={true}
              autoPlay={true}
            >
              {carouselItems.map((carouselItem, i) => (
                <img
                  key={i}
                  src={carouselItem.img}
                  alt="Logo"
                  className="h-16 object-contain"
                />
              ))}
            </Carousel>
          </div>
          <div className="col-span-5 hidden md:block ">
            <div className="flex gap-5 lg:gap-10 items-center">
              <div className="text-xl font-semibold text-gray-800 text-nowrap">
                Your Growth Partner:
              </div>
              <div className="grid grid-cols-3 w-full">
                {carouselItems.map((carouselItem, i) => (
                  <img
                    key={i}
                    src={carouselItem.img}
                    alt="Logo"
                    className="h-16  object-contain"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-6">
          {/* Left Side: Logo & Intro */}
          <div className="flex flex-col lg:items-start">
            <p className="max-w-md lg:text-left mb-4 font-medium text-gray-700">
              Leverage the expertise of our Digital Marketing Experts! With over
              a decade of experience, we specialize in delivering top-notch
              search results using our unique SEO methods. Elevate your online
              presence with us!
            </p>
            <ul className="flex gap-3 mb-8 ">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61563981595918"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition transform group hover:bg-primary  hover:shadow-lg hover:scale-110"
                >
                  <FaFacebookF className="text-gray-700 group-hover:text-white text-xl " />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/digital.pandaguys/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10  rounded-full transition transform group hover:bg-primary hover:shadow-lg hover:scale-110"
                >
                  <FaInstagram className="text-gray-700 group-hover:text-white text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/24Pandaguys"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition transform group hover:bg-primary hover:shadow-lg hover:scale-110"
                >
                  <FaTwitter className="text-gray-700 group-hover:text-white text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/pandaguys/"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition transform group hover:bg-primary hover:shadow-lg hover:scale-110"
                >
                  <ImLinkedin className="text-gray-700 group-hover:text-white text-xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://in.pinterest.com/pandaguys24/best-digital-marketing-agency/"
                  className="flex items-center justify-center w-10 h-10 rounded-full transition transform group hover:bg-primary hover:shadow-lg hover:scale-110"
                >
                  <GrPinterest className="text-gray-700 group-hover:text-white text-xl" />
                </a>
              </li>
            </ul>
          </div>
          {/* Middle Column: Quick Links */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:col-span-2 md:grid-cols-3">
            <div>
              <p className="text-lg font-extrabold text-gray-800">
                Quick Links
              </p>
              <nav className="mt-3">
                <ul className="space-y-3 text-sm lg:text-base font-medium">
                  {products.map((product, index) => (
                    <li key={index}>
                      <Link
                        className="transition ease-in duration-300 text-gray-700 hover:text-primary hover:font-extrabold"
                        to={product.link}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <p className="text-lg font-extrabold text-gray-800">Services</p>
              <nav className="mt-3">
                <ul className="space-y-3 text-sm lg:text-base font-medium">
                  {companyLinks.map((product, index) => (
                    <li key={index}>
                      <Link
                        className="transition ease-in duration-300 text-gray-700 hover:text-primary hover:font-extrabold"
                        to={product.link}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contacts + Newsletter */}
            <div className="col-span-2 md:col-span-1">
              <p className="text-lg font-extrabold text-left sm:text-left text-gray-800">
                Contacts
              </p>
              <nav className="mt-3">
                <ul className="space-y-3 text-sm font-medium">
                  {developerLinks.map((product, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      {product.social}
                      <Link
                        className="ml-2 transition ease-in duration-300 text-gray-700 hover:text-primary hover:font-extrabold"
                        to={product.link}
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Newsletter inside Contacts */}
              <div className="mt-6">
                <p className="text-lg font-semibold text-gray-900">
                  Subscribe to Newsletter
                </p>
                <form className="mt-3 relative flex" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    className="w-full p-3 border-none rounded-l-lg focus:text-gray-600 focus:outline-gray-500 "
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="py-3 px-3 bg-primary text-white rounded-r-lg font-semibold transition hover:bg-primary/90"
                  >
                    Submit
                  </button>
                </form>
                {message && (
                  <p className="text-white mt-4 font-medium">{message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="pt-6 mt-3 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-white-400 font-semibold">
              <Link
                className="inline-block text-white underline transition hover:text-cardbg mr-2"
                to="/terms-conditions"
              >
                Terms &amp; Conditions
              </Link>

              <Link
                className="inline-block text-white underline transition hover:text-cardbg"
                to="/privacy-policy"
              >
                Privacy Policy
              </Link>
            </p>
            <p className="mt-4 text-gray-800 font-semibold text-sm text-white-500 sm:order-first sm:mt-0">
              All rights reserved © 2024 Panda Guys
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
