import React, { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import useTitle from '../pages/hooks/useTitle';
import panda from '../assets/panda_service.png';

import OurTeam from './ourTeam/OurTeam';
import { allTeam } from '../assets/employees/data';
import CareerPage from '../pages/career/CareerPage';

const Home = lazy(() => import('../pages/home/Home'));
const About = lazy(() => import('../pages/about/About'));
const NotFound = lazy(() => import('../pages/notfound/NotFound'));
const ServicePage = lazy(() => import('../pages/service/ServicePage'));
const Blog = lazy(() => import('../pages/blog/Blog'));
const SingleBlog = lazy(() => import('../pages/blog/SingleBlog'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const PayPerCall = lazy(() => import('../pages/service/PayPerCall'));
const PayPerClick = lazy(() => import('../pages/service/PayPerClick'));
const PerformanceMarketing = lazy(
  () => import('../pages/service/PerformanceMarketing')
);
const Branding = lazy(() => import('../pages/service/Branding'));
const AdShoot = lazy(() => import('../pages/service/AdShoot'));
const ProductShoot = lazy(() => import('../pages/service/ProductShoot'));
const PayPerLeads = lazy(() => import('../pages/service/PayPerLeads'));
const Wordpress = lazy(() => import('../pages/service/Wordpress'));
const ECommerce = lazy(() => import('../pages/service/ECommerce'));
const ShopifyStore = lazy(() => import('../pages/service/ShopifyStore'));
const GoogleAds = lazy(() => import('../pages/service/GoogleAds'));
const LinkedinAds = lazy(() => import('../pages/service/LinkedinAds'));
const FacebookAds = lazy(() => import('../pages/service/FacebookAds'));
const YoutubeAds = lazy(() => import('../pages/service/YoutubeAds'));
const EmailMarketing = lazy(() => import('../pages/service/EmailMarketing'));
const IvrMarketing = lazy(() => import('../pages/service/IvrMarketing'));
const PrMarketing = lazy(() => import('../pages/service/PrMarketing'));
const GoogleMyBussiness = lazy(
  () => import('../pages/service/GoogleMyBussiness')
);
const SearchEngineMarketing = lazy(
  () => import('../pages/service/SearchEngineMarketing')
);
const SearchMediaMarketing = lazy(
  () => import('../pages/service/SearchMediaMarketing')
);
const SearchMediaOptimization = lazy(
  () => import('../pages/service/SearchMediaOptimization')
);
const SearchEngineOptimization = lazy(
  () => import('../pages/service/SearchEngineOptimization')
);
const OnlineReputation = lazy(
  () => import('../pages/service/OnlineReputation')
);
const WebDevelopment = lazy(() => import('../pages/service/WebDevelopment'));
const Portfolio = lazy(() => import('../pages/portfolio/Portfolio'));
const Pricing = lazy(() => import('../components/home/Pricing'));
const TermsConditions = lazy(
  () => import('../components/footer/TermsConditions')
);
const RefundCancellation = lazy(
  () => import('../components/footer/RefundCancellation')
);

const titleMap = {
  '/': 'Panda Guys Digital Marketing Agency',
  '/about': 'About Us',
  '/service': 'Our Services',
  '/blog': 'Blog',
  '/blog/:blogId': 'Blog Post',
  '/pay-per-call': 'Pay Per Call',
  '/pay-per-click': 'Pay Per Click',
  '/performance-marketing': 'Performance Marketing',
  '/branding': 'Branding',
  '/ad-shoot': 'Ad Shoot',
  '/product-shoot': 'Product Shoot',
  '/pay-per-leads': 'Pay Per Leads',
  '/wordpress': 'WordPress Services',
  '/ecommerce': 'E-Commerce Services',
  '/shopify-store': 'Shopify Store Services',
  '/google-ads': 'Google Ads Services',
  '/linkedin-ads': 'LinkedIn Ads Services',
  '/facebook-ads': 'Facebook Ads Services',
  '/youtube-ads': 'YouTube Ads Services',
  '/email-marketing': 'Email Marketing Services',
  '/ivr-marketing': 'IVR Marketing Services',
  '/pr-management': 'PR Management Services',
  '/google-my-business': 'Google My Business Services',
  '/search-engine-marketing': 'Search Engine Marketing Services',
  '/search-media-optimization': 'Search Media Optimization Services',
  '/search-media-marketing': 'Search Media Marketing Services',
  '/search-engine-optimization': 'Search Engine Optimization Services',
  '/online-reputation-management': 'Online Reputation Management',
  '/custom-website': 'Custom Website Development',
  '/contact': 'Contact Us',
  '/portfolio': 'Portfolio',
  '/pricing': 'Pricing',
  '/terms-conditions': 'Terms and Conditions',
  '/refund-cancellation': 'Refund and Cancellation Policy',
  '/career': 'Career|Pandaguys',
};

const AllRoutes = () => {
  const location = useLocation();
  const currentTitle = titleMap[location.pathname] || 'Default Title'; // Fallback title

  useTitle(currentTitle); // Set the title using your hook

  return (
    <div>
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center h-screen">
            <div className="relative flex items-center justify-center">
              <div className="animate-spin h-32 w-32 border-8 border-dashed border-primary/60 rounded-full"></div>
              <div className="absolute flex items-center justify-center h-32 w-32">
                <img src={panda} alt="loading_panda" className="h-16 w-16" />
              </div>
            </div>
            <p className="mt-4 text-lg text-primary/80">Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<SingleBlog />} />
          <Route path="/pay-per-call" element={<PayPerCall />} />
          <Route path="/pay-per-click" element={<PayPerClick />} />
          <Route
            path="/performance-marketing"
            element={<PerformanceMarketing />}
          />
          <Route path="/branding" element={<Branding />} />
          <Route path="/ad-shoot" element={<AdShoot />} />
          <Route path="/product-shoot" element={<ProductShoot />} />
          <Route path="/pay-per-leads" element={<PayPerLeads />} />
          <Route path="/wordpress" element={<Wordpress />} />
          <Route path="/ecommerce" element={<ECommerce />} />
          <Route path="/shopify-store" element={<ShopifyStore />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/linkedin-ads" element={<LinkedinAds />} />
          <Route path="/facebook-ads" element={<FacebookAds />} />
          <Route path="/youtube-ads" element={<YoutubeAds />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/ivr-marketing" element={<IvrMarketing />} />
          <Route path="/pr-management" element={<PrMarketing />} />
          <Route path="/google-my-business" element={<GoogleMyBussiness />} />
          <Route
            path="/search-engine-marketing"
            element={<SearchEngineMarketing />}
          />
          <Route
            path="/social-media-optimization"
            element={<SearchMediaOptimization />}
          />
          <Route
            path="/social-media-marketing"
            element={<SearchMediaMarketing />}
          />
          <Route
            path="/search-engine-optimization"
            element={<SearchEngineOptimization />}
          />
          <Route
            path="/online-reputation-management"
            element={<OnlineReputation />}
          />
          <Route path="/custom-website" element={<WebDevelopment />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/portfolio"
            element={<Portfolio text="Portfolio" processList />}
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/refund-cancellation" element={<RefundCancellation />} />
          <Route path="/all-team" element={<OurTeam data={allTeam} />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default AllRoutes;
