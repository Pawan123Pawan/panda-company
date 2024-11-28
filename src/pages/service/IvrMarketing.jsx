import React from 'react';
import HeroSection from '../../components/IVR-marketing/HeroSection';
import HowDoUse from '../../components/IVR-marketing/HowDoUse';
import CommonHeroSection from './CommonHeroSection';
import IVR from '../../assets/service/allsetion/IVR.webp';
const IvrMarketing = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <CommonHeroSection image={IVR} />
      <HowDoUse />
    </>
  );
};

export default IvrMarketing;
