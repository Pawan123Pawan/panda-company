import React from 'react';
import HeroSection from '../../components/Branding/HeroSection';
import banner from '../../assets/service/payperleads/payperleads.jpg';
import CustomServicesCard from '../../components/CustomServicesCard';
import ProcessStep from '../../components/ProcessStep';
import WebsiteCallAction from '../../components/webdevelopment/WebsiteCallAction';
import CommonHeroSection from './CommonHeroSection';
import payperlead from '../../assets/service/allsetion/payperlead.webp';
const PayPerLeads = () => {
  return (
    <div>
      {/* <HeroSection
        text={' Pay Per Lead Agency'}
        content={
          'To increase the possibility of success in business today, high-quality leads must be enerated. These are the services you only need to remember when looking for Pay Per Lead Generation Services. Such services eliminate the guesswork associated with generating potential clients by allowing you to pay only for those leads that you actually receive. Now let us understand the specific details on how A Pay Per Lead Agency can improve your business.'
        }
        image={banner}
        imagePosition={'center'}
      /> */}
      <CommonHeroSection image={payperlead} />
      <div className="p-5 py-16">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Real-Time Analytics
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Monitor lead generation progress with real-time reports and
            insights, providing actionable data.
          </p>
          <CustomServicesCard services={payPerLeadFeatures} />
        </div>
      </div>
      <WebsiteCallAction
        text={'Need More High-Quality Leads?'}
        description={
          'We provide tailored lead generation services to boost your sales pipeline.'
        }
      />
      <div className="p-5 py-16">
        <div className="w-full md:w-[90%] lg:w-[87%] mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
            Key Pay Per Lead Campaign Features
          </h2>
          <p className="text-center text-base md:text-lg text-gray-600 mt-5 mb-8 w-full md:w-4/5 mx-auto">
            Explore essential features that ensure you pay only for qualified
            leads that convert into paying customers.
          </p>
          <CustomServicesCard services={payPerLeadTypes} />
        </div>
      </div>
      <div className="mt-14">
        <ProcessStep
          step={'How Does a Pay Per Lead Agency Operate?'}
          description={
            'A Pay Per Lead Agency is in charge of designing the appropriate campaignsto interest probable customers who are ready to purchase your offerings. Hereis what their standard practice looks like:'
          }
          processStages={projectDeliverables}
        />
      </div>
      {/* <div className="my-4 px-2 text-center">
        <h1 className="text-3xl font-bold">
          Pay Per Lead Agency - Making The Right Choice
        </h1>
        <p className="font-bold my-4">
          It is important to keep in mind the experience, reputation and the
          techniques the firm employs. Only if there are specific requirements
          and the company has advanced tools to track and verify leads should
          one consider the pay per lead generation company. A good lead
          generation pay per lead companies create campaigns set out to achieve
          specific business goals which are formulated together with the
          customers.
        </p>
      </div> */}
    </div>
  );
};

export default PayPerLeads;

const payPerLeadFeatures = [
  {
    id: 1,
    title: 'Lead Validation',
    description:
      'Ensure only qualified leads are counted, minimizing wasted spending.',
    icon: '✅',
  },
  {
    id: 2,
    title: 'Targeted Audience',
    description:
      'Reach the right audience by narrowing down specific demographics and interests.',
    icon: '🎯',
  },
  {
    id: 3,
    title: 'Custom Lead Forms',
    description:
      'Capture leads through customized forms designed to match your business goals.',
    icon: '📝',
  },
  {
    id: 4,
    title: 'Conversion Tracking',
    description:
      'Track leads through to conversion and understand your cost-per-lead metrics.',
    icon: '📊',
  },
  {
    id: 5,
    title: 'Real-Time Analytics',
    description:
      'Monitor lead generation progress with real-time reports and insights.',
    icon: '📈',
  },
  {
    id: 6,
    title: 'Lead Nurturing',
    description:
      'Automate follow-ups and nurture leads to move them down the sales funnel.',
    icon: '🤝',
  },
];

const payPerLeadTypes = [
  {
    id: 1,
    title: 'Exclusive Leads',
    description:
      'Leads generated specifically for your business and not shared with competitors.',
    icon: '🔒',
  },
  {
    id: 2,
    title: 'Shared Leads',
    description:
      'Lower-cost leads that are sold to multiple companies for broader opportunities.',
    icon: '🔗',
  },
  {
    id: 3,
    title: 'Inbound Leads',
    description:
      'Leads generated from potential customers actively seeking your services.',
    icon: '📥',
  },
  {
    id: 4,
    title: 'Outbound Leads',
    description:
      'Leads generated through outreach efforts like cold calling or email campaigns.',
    icon: '📤',
  },
  {
    id: 5,
    title: 'Qualified Leads',
    description:
      'Leads that meet specific criteria to ensure higher chances of conversion.',
    icon: '🔍',
  },
  {
    id: 6,
    title: 'B2B Leads',
    description:
      'Leads tailored to business clients, focusing on specific industries or sectors.',
    icon: '🏢',
  },
];

const projectDeliverables = [
  {
    id: 1,
    title: 'Customised Campaign Development',
    description:
      'Together with your company, theagency comes up with tailored campaigns to suit a particular audience.',
  },
  {
    id: 2,
    title: 'Lead Capture',
    description:
      'The agency uses forms as follows for lead capture, in which the potential customers are requested to fill in and contact us through several marketing channels such as social networks, email marketing, SEO, and many such',
  },
  {
    id: 3,
    title: 'Lead Verification',
    description:
      'Such leads are filtered and cross checked whose sale of leads pass on a guaranteed sale to the sales movement.',
  },
  {
    id: 4,
    title: 'Performance Tracking',
    description:
      'The agency measures the success of the campaign and makes changes where the intended results are not attained.',
  },
];
