import React from 'react';
import HeroSection from '../../components/Branding/HeroSection';
import BrandingSection from '../../components/Branding/BrandingSection';
import BrandingGallery from '../../components/Branding/BrandingGallery';
import ProcessList from '../../components/webdevelopment/ProcessList';
import CommonHeroSection from './CommonHeroSection';
import branding from '../../assets/service/allsetion/branding.webp';

const Branding = () => {
  return (
    <>
      {/* <HeroSection
        text="The Power of Branding"
        content="Branding is one of the major priorities for business across the world. In simple terms,
branding involves your customers bringing to memory a certain message or a certain
logo when they hear your business name. Moreover, a branding agency can support
and help with constructing one’s image as well as maintaining this image. Note that
branding agencies also have their limitations and there is a need to understand how
to best utilise them and what this will entail.
"
      /> */}
      <CommonHeroSection image={branding} />
      <BrandingSection />
      <BrandingGallery />
      {/* <ProcessList /> */}
    </>
  );
};

export default Branding;
