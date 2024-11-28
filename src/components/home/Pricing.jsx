import { CheckIcon } from '@heroicons/react/20/solid';
import AOS from 'aos';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { currencyConverter } from '../../utils/halper/currencyconverter';
import { LuDownload } from 'react-icons/lu';
import { BsCheck2Circle } from 'react-icons/bs';
import CalendlyLink from '../calendly/CalendlyLink';

const tiers = [
  {
    name: 'Startup Plan',
    id: 'tier-hobby',
    href: 'startup-plan',
    priceMonthly: '39999',
    description: 'For startups & small Business.',
    features: [
      'Logo Creation ',
      'Website Development ',
      'Social Media Management',
      '1 Month SEO ',
      'GMB Listing ',
      'Tagline Suggestion ',
      'Google Analytics Setup ',
      'Google Search Console Setup ',
      'Sales Funnel ',
      'Email Marketing Setup ',
      'WhatsApp Marketing',
      'Google Ads Setup',
      'Meta Ads Setup ',
    ],
    featured: false,
  },
  {
    name: 'Entrepreneur Plan',
    id: 'tier-enterprise',
    href: 'enterpreneur-plan',
    priceMonthly: '69999',
    description: 'For medium-sized companies.',
    features: [
      'Branding Solutions',
      'Website Development',
      'Social Media Management',
      '3 Months SEO',
      'GMB Listing',
      'Tracking Tool Setup',
      'Google Ads Setup',
      'Meta Ads Setup',
      'LinkedIn Ads Setup ',
      'Email Marketing Setup ',
      'WhatsApp Automation',
      'Sales Funnel ',
      'IVR Marketing ',
      'Ads Shoot',
      'Influencer Marketing',
      'Youtube Marketing ',
      '3 Month Technical Support',
      'Offer Free Hosting ',
    ],
    featured: true,
  },
  {
    name: 'Business Plan',
    id: 'tier-premium',
    href: 'business-plan',
    priceMonthly: '89999',
    description: 'For large companies.',
    features: [
      'Branding Solutions ',
      'Website Development',
      'Social Media Management ',
      '6 Months SEO ',
      'GMB Listing ',
      'Tracking Tool Setup ',
      'Google Ads Setup ',
      'Meta Ads Setup ',
      'LinkedIn Ads Setup ',
      'Email Marketing Setup ',
      'WhatsApp Automation ',
      'Sales Funnel ',
      'IVR Marketing ',
      'Performance Marketing ',
      'Influencer Marketing',
      'Youtube Marketing',
      'CRM Setup ',
      'Cyber Security Solution ',
      'Business Pitch Deck',
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
const handleDownload = () => {
  const pdfPath = '/pandaguys_brochure.pdf';
  // Open the PDF in a new tab
  window.open(pdfPath, '_blank');
  const link = document.createElement('a');
  link.href = '/pandaguys_brochure.pdf';
  link.download = 'pandaguys_brochure.pdf';
  link.click();
};
export default function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div data-aos="fade-up" className="relative isolate bg-white p-5 xl:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-10 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>

      <div className="flex gap-5 lg:flex-row flex-col-reverse">
        <div className="w-full lg:w-[40%]">
          <div className="bg-cardbg h-[300px]  rounded-3xl">
            <div className="text-center lg:text-left text-white mb-16 p-5">
              <h1 className="text-3xl font-bold">Superb Support</h1>
              <p className=" mt-4">
                The support team was fantastic! They quickly resolved my issues
                with professionalism and genuine care for my satisfaction.
              </p>
            </div>
          </div>
          {/* View Our Clients Button */}
          <div className="mt-5 flex justify-center flex-col lg:flex-row">
            <button
              onClick={handleDownload}
              className=" text-white text-lg lg:text-2xl px-6 py-2 lg:py-3 rounded-full text-md font-semibold  bg-gradient-to-r from-primary to-pink-500  transition animate-gradient-text hover:bg-white w-auto  flex items-center justify-center gap-5 text-nowrap sm:w-1/2 lg:w-auto mx-auto"
            >
              Download Brochure <LuDownload />
            </button>
          </div>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-y-6 sm:gap-y-0 lg:max-w-4xl">
          {tiers.map((tier) => {
            const priceInNumber = parseInt(tier.priceMonthly);
            const convertedPrice = currencyConverter(priceInNumber); // Format price in INR
            return (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? 'relative bg-cardbg shadow-2xl'
                    : 'bg-cardbg/5 sm:mx-8 lg:mx-0',
                  'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-cardbg',
                    'text-base font-semibold leading-7'
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 flex items-baseline gap-x-2">
                  <span
                    className={classNames(
                      tier.featured ? 'text-white' : 'text-gray-900',
                      'text-3xl sm:text-base md:text-3xl xl:text-4xl font-bold tracking-tight'
                    )}
                  >
                    {convertedPrice}
                  </span>
                  <span
                    className={classNames(
                      tier.featured ? 'text-gray-400' : 'text-gray-500',
                      'text-base'
                    )}
                  >
                    /month
                  </span>
                </p>
                <p
                  className={classNames(
                    tier.featured ? 'text-gray-300' : 'text-gray-600',
                    'mt-6 text-base leading-7'
                  )}
                >
                  {tier.description}
                </p>

                <div className="overflow-y-auto sidescrollbar mt-2 max-h-[200px]">
                  <ul
                    className={classNames(
                      tier.featured ? 'text-gray-300' : 'text-gray-600',
                      'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
                    )}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          aria-hidden="true"
                          className={classNames(
                            tier.featured
                              ? 'text-indigo-400'
                              : 'text-indigo-600',
                            'h-6 w-5 flex-none'
                          )}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  aria-describedby={tier.id}
                  className={classNames(
                    'w-full mt-8 sm:mt-10 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 flex justify-center items-center gap-2',
                    tier.featured
                      ? 'bg-white text-gray-800 shadow-sm hover:bg-primary hover:text-white border border-white'
                      : 'bg-primary text-white shadow-sm hover:bg-white hover:text-primary border-2 hover:border-primary'
                  )}
                >
                  <CalendlyLink data={`Get started today`} class={``} />
                  <BsCheck2Circle />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
