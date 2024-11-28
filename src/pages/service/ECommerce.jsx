import React from 'react';
import HeroSection from '../../components/Branding/HeroSection';
import bgImage from '../../assets/service/ecommerce/ecommerce.png';
import ProcessStep from '../../components/ProcessStep';
import CommonHeroSection from './CommonHeroSection';
import ecommerce from '../../assets/service/allsetion/e-commerce.webp';

const ECommerce = () => {
  return (
    <>
      {/* <HeroSection
        text="E-commerce"
        content="We craft tailored strategies to drive traffic, increase conversions, and boost sales through targeted campaigns, SEO, and engaging content. Elevate your e-commerce presence and achieve measurable growth with our expert solutions."
        image={bgImage}
        imagePosition="center"
      /> */}
      <CommonHeroSection image={ecommerce} />
      <div className=" w-[95%] mx-auto text-center font-semibold p-3">
        A personalised and tailored approach to creating custom websites that
        perfectly fits your businesses. Custom websites are built from the
        ground up instead of using ready-made templates guaranteeing uniqueness
        in are and branding elements. We have a professional team that devotes
        its efforts to e-commerce website development, optimal user experiences
        that are in line with Core Web Vitals, up-to-date coding practices,
        quick websites, and responsive designs.
      </div>
      <ProcessStep
        step={'6-D Process'}
        description={
          'We have a wide array of processes and within it the 6 ‘D’ principle encompasses Discovering insights, Defining objectives, Designing solutions, Developing products, Deploying strategies and Delivering results for excellent client satisfaction.'
        }
        processStages={projectDeliverables}
      />
    </>
  );
};

export default ECommerce;
const projectDeliverables = [
  {
    id: 1,
    title: 'Discover',
    description:
      'Recognize the needs of the users and obtain inputs to gain a clearer understanding of the party and objectives in order to strategize properly in the designing of the e-commerce site.',
  },
  {
    id: 2,
    title: 'Define',
    description:
      'Establish clearly measurable goals and specific project objectives to ensure that all stakeholders are on the same page and create the foundation for the success of E-commerce website services. ',
  },
  {
    id: 3,
    title: 'Design',
    description:
      'Prepare schemas and drafts in order to illustrate the graphic interface and provide the engaging experience in eCommerce Website Development Services.',
  },
  {
    id: 4,
    title: 'Develop',
    description:
      'The Developing process of the system will apply the modern approaches to the coding of the application but will ensure to include the basic elements but in a high performance, on the e commerce web site development.',
  },
  {
    id: 5,
    title: 'Deploy',
    description:
      'Deploy the web application on the production environment making sure all the systems work well and are thoroughly tested for users.',
  },
  {
    id: 6,
    title: 'Deliver',
    description:
      'Give the ready-made product to the customer, with all the expectations fulfilled and support if needed.',
  },
];
