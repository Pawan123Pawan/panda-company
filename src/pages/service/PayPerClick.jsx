import React from 'react';
import HeroSection from '../../components/Branding/HeroSection';
import banner from '../../assets/service/payperclick/2425.jpg';
import CustomCard from '../../components/CustomCard';
import image1 from '../../assets/service/payperclick/pay-per-click-1.webp';
import image2 from '../../assets/service/payperclick/pay-per-click-2.webp';
import image3 from '../../assets/service/payperclick/pay-per-click-3.webp';
import PPCServices from '../../components/payperclick/PPCServices';
import ProcessStep from '../../components/ProcessStep';
import payperclick from '../../assets/service/allsetion/payperclick.webp';
import CommonHeroSection from './CommonHeroSection';

const PayPerClick = () => {
  return (
    <>
      {/* <HeroSection
        text={'Pay Per Click'}
        content={
          'With our PPC knowledge, we will optimize your campaigns for optimal ROI, ensuring that each click takes you closer to your business objectives.Our open reporting will keep you up to date on the development of your campaign, allowing you to make data-driven decisions and optimize your   strategy for long-term success.'
        }
        image={banner}
        imagePosition={'center'}
      /> */}
      <CommonHeroSection image={payperclick} />
      <CustomCard data={payPerClickData} />
      <PPCServices />
      <ProcessStep
        step={'Our 6-D Process'}
        description={
          'Conduct client consultations, keyword research, campaign structure design, engaging ad creation, successful campaign launch, and performance analysis to achieve maximum PPC success and improvements.'
        }
        processStages={ppcProjectDeliverySteps}
      />
    </>
  );
};

export default PayPerClick;

const payPerClickData = [
  {
    id: 1,
    title: 'Keyword Bidding',
    description:
      'Advertisers bid on specific keywords relevant to their business, determining the cost of each click based on competition.',
    imageUrl: image1,
  },
  {
    id: 2,
    title: 'Ad Copy',
    description:
      'Crafting compelling ad copy is crucial to attract users and maximize click-through rates (CTR) in PPC campaigns.',
    imageUrl: image2,
  },
  {
    id: 3,
    title: 'Quality Score',
    description:
      'A score determined by search engines based on the relevance of keywords, ad copy, and landing page experience, affecting ad ranking and cost.',
    imageUrl: image3,
  },
];

const ppcProjectDeliverySteps = [
  {
    id: 1,
    title: 'Initial Consultation',
    description:
      'Meet with the client to understand their business goals, target audience, and budget for PPC campaigns.',
  },
  {
    id: 2,
    title: 'Keyword Research',
    description:
      "Conduct thorough keyword research to identify high-value keywords that align with the client's objectives.",
  },
  {
    id: 3,
    title: 'Campaign Structure',
    description:
      'Create a structured campaign framework, including ad groups, targeting settings, and budget allocation.',
  },
  {
    id: 4,
    title: 'Ad Creation',
    description:
      'Design compelling ad copy and visuals that resonate with the target audience and encourage clicks.',
  },
  {
    id: 5,
    title: 'Launch Campaign',
    description:
      'Deploy the PPC campaign and monitor initial performance to ensure everything is functioning correctly.',
  },
  {
    id: 6,
    title: 'Performance Analysis',
    description:
      'Analyze campaign performance data, making adjustments as needed to optimize for better results.',
  },
];
