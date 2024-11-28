import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PayPerAccordion = (props) => {
  const [openIndex, setOpenIndex] = useState(null);

  // Default accordion data
  const defaultAccordionData = [
    {
      id: 1,
      title: 'What is Pay Per Call?',
      content:
        'Pay Per Call is a form of performance-based advertising where advertisers are charged forphone calls made from advertisements. This model helps generate revenue for theadvertisers in those businesses that require speaking to the customer, such as medicalpractitioners, insurance agents, real estate, banking, and credit services. When businesseswork with a pay-per-call agency that meets their specific needs, effective marketing methodscan be used to target customers who want to make a call.',
    },
    {
      id: 2,
      title: 'Quality Leads',
      content:
        ' The topmost Pay Per Call services in India ensure that businesses get onlythose calls which are made by call seekers fully interested in the service being offered. As aresult, this helps to achieve high conversion rates unlike other digital marketing strategies.',
    },
    {
      id: 3,
      title: 'Interactivity',
      content:
        'The services offered to call customers all- PPC enhances the interactionbetween potential customers and the business which earns the business some confidenceand answers concerns instantly.',
    },
    {
      id: 4,
      title: 'Economical',
      content:
        'The campaigns in Pay Per Call marketing are based on performance meaningthat businesses pay out only when they actually generate leads. Hence it is an ideal modelfor lead generation.',
    },
    {
      id: 5,
      title: 'Measure Returned Value',
      content:
        'Intelligent management software for pay per calladvertising agencies also allows the management of the business timely checks on theactivities of the agencies and control over the services rendered.',
    },
  ];

  const accordionData =
    props.faq?.length > 0 ? props.faq : defaultAccordionData;

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 md:p-0">
      {accordionData.map((item) => (
        <div key={item.id} className="border-b border-slate-200">
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full flex justify-between py-5 text-gray-700"
          >
            <span className="font-semibold text-left text-sm sm:text-base md:text-lg ">
              {item.title}
            </span>
            <motion.span
              initial={{ rotate: 0 }}
              animate={{ rotate: openIndex === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.span>
          </button>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: openIndex === item.id ? 'auto' : 0,
              opacity: openIndex === item.id ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-5 text-sm sm:text-base text-gray-900">
              {item.content}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default PayPerAccordion;
