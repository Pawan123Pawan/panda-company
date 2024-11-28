import Pricing from '../../components/home/Pricing';
import HomeAboutSection from './HomeAboutSection';
import ServiceList from '../../components/home/ServiceList';
import SubServiceList from '../../components/home/SubServicesList';
import HomeOffer from '../../components/home/HomeOffer';
import OurClients from '../../components/home/OurClients';
import MissionVision from '../../components/home/MissionVision';
import FAQ from './FAQ';
import TestimonialsSection from '../../components/TestimonialsSection';
import HeroSection from './HeroSection';
import WorkProcess from '../../components/home/WorkProcess';

const Home = () => {
  return (
    <>
      {/* <HeroCarousel /> */}
      <HeroSection />
      <HomeAboutSection />
      <ServiceList />
      <SubServiceList />
      <MissionVision />
      <Pricing />
      <OurClients />
      <HomeOffer />
      {/* <StepCarousel /> */}
      <WorkProcess />
      <FAQ />
      {/* <CertificateImageCarousel /> */}
      <TestimonialsSection />
    </>
  );
};

export default Home;
