import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { navigationData } from '../../utils/staticData/navData';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const SubmenuAccordion = ({ handleSubmenu }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto mt-2 ">
      {navigationData[2]?.submenu?.map((item, index) => (
        <div key={item.name} className="border-b border-gray-300">
          {/* Accordion Title */}
          <button
            className={`w-full text-left px-4 py-3 -z-10 rounded-lg font-medium transition-colors flex justify-between items-center ${
              openIndex === index ? 'bg-gray-100' : 'hover:bg-gray-100'
            }`}
            onClick={() => handleAccordionClick(index)}
          >
            {item.name}{' '}
            <>{openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</>
          </button>

          {/* Accordion Content (Submenu) */}
          <motion.div
            initial="closed"
            animate={openIndex === index ? 'open' : 'closed'}
            variants={{
              open: {
                height: 'auto',
                opacity: 1,
                transition: { duration: 0.5 },
              },
              closed: { height: 0, opacity: 0, transition: { duration: 0.5 } },
            }}
            className="overflow-hidden"
          >
            <ul className="p-4 flex flex-col text-[16px] text-gray-700 capitalize rounded-lg ml-3">
              {item.menu?.map((submenuItem) => (
                <li
                  key={submenuItem.name}
                  className="flex items-center gap-2 tracking-wide py-1"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <NavLink
                    to={submenuItem.href}
                    onClick={handleSubmenu}
                    className={({ isActive }) =>
                      isActive
                        ? 'text-primary text-nowrap underline'
                        : 'text-nowrap hover:underline hover:text-primary'
                    }
                  >
                    {submenuItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default SubmenuAccordion;
