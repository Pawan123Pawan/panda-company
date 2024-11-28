import React from 'react';
import '../../components/ad_shoot/branding.css';
import HeroSection from '../../components/ad_shoot/HeroSection';
import AddShootSection from '../../components/ad_shoot/AddShootSection';
import AddShootProductDemo from '../../components/about_card/AddShootProductDemo';
import AddShootGallery from '../../components/ad_shoot/AddShootGallery';
import CommonHeroSection from './CommonHeroSection';
import adshoot from '../../assets/service/allsetion/addshoot.webp';

const AdShoot = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <CommonHeroSection image={adshoot} />
      <AddShootSection />
      <AddShootProductDemo />
      <AddShootGallery />
    </>
  );
};

export default AdShoot;
