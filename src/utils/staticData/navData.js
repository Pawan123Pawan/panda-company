import { TbDeviceDesktopStar } from 'react-icons/tb';
import { FaCode } from 'react-icons/fa';
import { VscGraph } from 'react-icons/vsc';
import { FaUsers } from 'react-icons/fa6';

export const navigationData = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  {
    name: 'Services',
    href: '/service',
    submenu: [
      {
        name: 'Digital Advertisement',
        icon: <TbDeviceDesktopStar />,
        href: '',
        menu: [
          { name: 'Pay Per Call', href: '/pay-per-call' },
          {
            name: 'Pay Per Leads',
            href: '/pay-per-leads',
          },
          {
            name: 'Pay Per Click',
            href: '/pay-per-click',
          },
          {
            name: 'Performance Marketing',
            href: '/performance-marketing',
          },
          { name: 'Branding', href: '/branding' },
          { name: 'Ad Shoot', href: '/ad-shoot' },
          {
            name: 'Product Shoot',
            href: '/product-shoot',
          },
        ],
      },
      {
        name: 'Web Development',
        icon: <FaCode />,
        href: '/web-development',
        menu: [
          { name: 'Wordpress', href: '/wordpress' },
          { name: 'E-Commerce', href: '/ecommerce' },
          { name: 'Custom Website', href: '/custom-website' },
          { name: 'Shopify Store', href: '/shopify-store' },
        ],
      },
      {
        name: 'Performance Marketing',
        icon: <VscGraph />,
        href: '/performance-marketing',
        menu: [
          { name: 'Google Ads', href: '/google-ads' },
          { name: 'LinkedIn Ads', href: '/linkedin-ads' },
          { name: 'YouTube Ads', href: '/youtube-ads' },
          { name: 'Facebook Ads', href: '/facebook-ads' },
          {
            name: 'Email Marketing',
            href: '/email-marketing',
          },
          {
            name: 'IVR Marketing',
            href: '/ivr-marketing',
          },
          {
            name: 'PR Management',
            href: '/pr-management',
          },
        ],
      },
      {
        name: 'Free Traffic Generation',
        icon: <FaUsers />,
        href: '/free-traffic-generation',
        menu: [
          {
            name: 'Google My Business',
            href: '/google-my-business',
          },
          {
            name: 'Search Engine Marketing',
            href: '/search-engine-marketing',
          },
          {
            name: 'Social Media Marketing',
            href: '/social-media-marketing',
          },
          {
            name: 'Social Media Optimization',
            href: '/social-media-optimization',
          },
          {
            name: 'Search Engine Optimization',
            href: '/search-engine-optimization',
          },
          {
            name: 'Online Reputation Management',
            href: '/online-reputation-management',
          },
        ],
      },
    ],
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
];
