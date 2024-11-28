import React from 'react';
import HeroSection from '../../components/social_media/SocialMedia';
import HowDoUse from '../../components/social_media//HowDoUse';
import CommonHeroSection from './CommonHeroSection';
import social from '../../assets/service/allsetion/social-media.webp';
const SearchMediaMarketing = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <CommonHeroSection image={social} />
      <HowDoUse />
    </>
  );
};

export default SearchMediaMarketing;
