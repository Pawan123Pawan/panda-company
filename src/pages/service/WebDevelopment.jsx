import React from 'react';
import HeroSection from '../../components/webdevelopment/HeroSection';
import TechnologyShowcase from '../../components/webdevelopment/TechnologyShowcase';
import ServicesList from '../../components/webdevelopment/ServicesList';
import WebsiteCallAction from '../../components/webdevelopment/WebsiteCallAction';
import ProcessList from '../../components/webdevelopment/ProcessList';
import CommonHeroSection from './CommonHeroSection';
import development from '../../assets/service/allsetion/Custom Web.webp';

const WebDevelopment = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <CommonHeroSection image={development} />
      <TechnologyShowcase />
      <ServicesList />
      <WebsiteCallAction
        text={'Unlock Your Potential!'}
        description={
          "Book now and discover the unmatched power of expert digital marketing! Let's elevate your brand together! 🚀"
        }
      />
      <ProcessList />
    </>
  );
};

export default WebDevelopment;
