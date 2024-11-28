import React from 'react';
import HeroSection from '../../components/google_my_bussiness/HeroSection';
import HowDoUse from '../../components/google_my_bussiness/HowDoUse';
import CommonHeroSection from './CommonHeroSection';
import myGoogle from '../../assets/service/allsetion/google-my.webp';
const GoogleMyBussiness = () => {
  return (
    <>
      {' '}
      {/* <HeroSection /> */}
      <CommonHeroSection image={myGoogle} />
      <HowDoUse />
    </>
  );
};

export default GoogleMyBussiness;
