import IconCloud from '../../components/magicui/icon-cloud';
import meta from '../../assets/Panda guys website services icons/meta ads.svg';
import adshoot from '../../assets/Panda guys website services icons/Ad Shoot.svg';
import branding from '../../assets/Panda guys website services icons/Branding.svg';
import custom from '../../assets/Panda guys website services icons/custome website.svg';
import ecommerce from '../../assets/Panda guys website services icons/E-Commerce.svg';
import emailmarket from '../../assets/Panda guys website services icons/Email Marketing.svg';
import googleads from '../../assets/Panda guys website services icons/google ads.svg';
import googlemybusiness from '../../assets/Panda guys website services icons/Google My Business.svg';
import ivr from '../../assets/Panda guys website services icons/IVR Marketing.svg';
import linkedin from '../../assets/Panda guys website services icons/linkedin.svg';
import orm from '../../assets/Panda guys website services icons/ORM.svg';
import payperleads from '../../assets/Panda guys website services icons/Pay Per Leads.svg';
import payperclick from '../../assets/Panda guys website services icons/Pay Per Click.svg';
import paypercall from '../../assets/Panda guys website services icons/Pay Per Call.svg';
import performance from '../../assets/Panda guys website services icons/Performance Marketing.svg';
import prmanagement from '../../assets/Panda guys website services icons/Pr management.svg';
import productshoot from '../../assets/Panda guys website services icons/product shoot.svg';

const slugs = [
  'facebook',
  'typescript',
  'javascript',
  'dart',
  'java',
  'react',
  'flutter',
  'android',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'prisma',
  'amazonaws',
  'postgresql',
  'firebase',
  'nginx',
  'vercel',
  'testinglibrary',
  'jest',
  'cypress',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'androidstudio',
  'sonarqube',
  'figma',
];

export function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-background px-10 sm:px-20 pb-20 pt-8">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
