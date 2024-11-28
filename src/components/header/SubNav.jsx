import React from 'react';
import { IoMdCall } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SubNav = () => {
  return (
    <div className="hidden lg:block z-50 w-full sticky top-0  bg-primary p-1 px-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2 text-white ">
            {' '}
            <IoMdCall />
            <p> +91-962-506-7150</p>
          </div>
          <div className="flex items-center space-x-2 text-white ">
            {' '}
            <MdOutlineEmail />
            <p> Info@pandaguys.in</p>
          </div>
          {/* <div className="flex items-center space-x-2 text-white ">
          {' '}
          <MdOutlineEmail />
          <p>11047 SW 16TH Manor, Davie, FL, USA 33324</p>
        </div> */}
        </div>
        <div className="flex text-white space-x-4">
          <Link target="_blank" to={'https://www.linkedin.com/in/pandaguys/'}>
            <FaLinkedin />
          </Link>
          <Link
            target="_blank"
            to={
              'https://www.facebook.com/people/Panda-Guys/pfbid06bLMcoSqaJTqbfaHukzRdVFkPiAwxfHybmoL4BCwnfUox7AUFk1Ko2cQdxh7o7HGl/'
            }
          >
            <FaFacebook />
          </Link>
          <Link
            target="_blank"
            to={'https://www.instagram.com/digital.pandaguys/'}
          >
            <FaInstagram />
          </Link>
          <Link target="_blank" to={'https://x.com/pandaguys24'}>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubNav;
