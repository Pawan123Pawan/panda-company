import React from 'react';
import banner from '../../assets/service/social_media/social_media.jpg';
import HeroSection from '../../components/Branding/HeroSection';
import ProcessStep from '../../components/ProcessStep';
import CustomCard from '../../components/CustomCard';
import image1 from '../../assets/service/performance-marketing/image1.webp';
import image2 from '../../assets/service/performance-marketing/image2.jpg';
import image3 from '../../assets/service/performance-marketing/image3.jpg';
import CommonHeroSection from './CommonHeroSection';
import social from '../../assets/service/allsetion/social-media.webp';
const SearchMediaOptimization = () => {
  return (
    <>
      {/* <HeroSection
        text="Search Media Optimization"
        content="Unlock the full potential of your brand with Social Media Optimization. Enhance your online presence, engage your audience, and drive traffic through tailored strategies across various social media platforms."
        image={banner} // You may want to change this to a relevant SMO image
        imagePosition="center"
      /> */}
      <CommonHeroSection image={social} />
      <CustomCard data={approaches} />
      <ProcessStep
        step={'Social Media Optimization Process'}
        description={
          'From Initial Analysis to Performance Tracking We provide you with a comprehensive process from initial analysis and strategy development to creating content, engaging, and performance tracking to maximize the visibility and engagement for your social media presence.'
        }
        processStages={projectDeliverables}
      />
    </>
  );
};

export default SearchMediaOptimization;
const projectDeliverables = [
  {
    id: 1,
    title: 'Social Media Audit',
    description:
      'Social Media Audit Assess existing social media accounts to identify your strengths, weaknesses, and potential improvement areas.',
  },
  {
    id: 2,
    title: 'Strategy Development',
    description:
      'Strategy Development Personalized social media strategy: aligns with brand goals and target audience.',
  },
  {
    id: 3,
    title: 'Content Creation',
    description:
      'Content Creation Develop engaging and relevant content that resonates with your audience and drives interaction.',
  },
  {
    id: 4,
    title: 'Posting and Scheduling',
    description:
      'Posting and Scheduling Maintain a consistent posting schedule to keep engagement and visibility high across all social media platforms.',
  },
  {
    id: 5,
    title: 'Community Engagement',
    description:
      'Community Engagement Engage with followers, respond to comments, and cultivate a community around your brand to build loyalty and trust.',
  },
  {
    id: 6,
    title: 'Performance Tracking and Reporting',
    description:
      'Monitor performance and report Track social media metrics with detailed reports that offer insights and recommendations for continuous optimization',
  },
];
const approaches = [
  {
    id: 1,
    title: 'Liberate your inner talent',
    description:
      'Create your web presence, interact with your publics, and drive traffic across multiple social media platforms by using the appropriate customized tactics.',
    imageUrl: image1,
  },
  {
    id: 2,
    title: 'Content visuals',
    description:
      'Create relevant images and videos for your audience as well as build shares and engagements through that content.',
    imageUrl: image2,
  },
  {
    id: 3,
    title: 'Hyper-targeting',
    description:
      'Utilize advanced capabilities on multiple social media platforms to target idealized demographics, interests and behaviors.',
    imageUrl: image3,
  },
];
