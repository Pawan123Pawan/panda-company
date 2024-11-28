import banner from '../../assets/service/email-marketing/email-marketing.webp';
import HeroSection from '../../components/Branding/HeroSection';
import ServicesSection from '../../components/email-marketing/EmailMarketing';
import ProcessStep from '../../components/ProcessStep';
import CommonHeroSection from './CommonHeroSection';
import emailMarketing from '../../assets/service/allsetion/email.webp';
const EmailMarketing = () => {
  return (
    <>
      {/* <HeroSection
        text={'Email Marketing Services'}
        content={
          'We are always ahead of the competition. For this reason, when you subscribe, expert information and unique offers will come to your address only. This is the most effective way of sending emails in the market!'
        }
        image={banner}
        imagePosition={''}
      /> */}
      <CommonHeroSection image={emailMarketing} />

      <div className=" py-12 px-6 w-full md:w-[90%] xl:w-[87%] mx-auto">
        <h2 className="text-center text-sm font-semibold text-primary mb-2">
          WHAT WE DO
        </h2>
        <h3 className="text-center text-2xl font-bold text-gray-800 mb-8">
          WE MAKE IT EASY
        </h3>
        <ServicesSection />
      </div>

      <ProcessStep
        step={'Taking Email Newsletters to the Next Level'}
        description={
          'The process of planning, developing, and analysing the effectiveness of email notonly as a medium but as an instrument of marketing communicationwith the utmostdegree of proficiency.'
        }
        processStages={emailMarketingApproach}
      />
    </>
  );
};

export default EmailMarketing;

const emailMarketingApproach = [
  {
    title: 'Audience Research',
    description:
      'Audience Analysis Try to go deeper and find out the demographics, likes, and habits of the perfect user, to get even more engaged with the audience. Explore their issues and motives to craft your email content. ',
  },
  {
    title: 'Goals',
    description:
      'Goals Comment on the Realistic and Objective Goals within Your Email Campaign or Marketing Plan. Such, for poverty alleviation say, may be an increased number of primary school pupils enrolled, or in efforts expanded toward raised health standards.',
  },
  {
    title: 'Email List',
    description:
      'Email List Create and manage your own Email List. Preferably these should be organic lists where every subscriber has opted in. Use embedded forms on your website and social media to allow and encourage sign ups but also give something back to the target audience.',
  },
  {
    title: 'Email Marketing Platform',
    description:
      'Email Marketing Platform In case you need extra features for managing your email campaigns, look for good email marketing tools and providers to get the most of your strategies. Mailchimp, SendGrid, and Constant Contact are just a few of the finest email marketing platforms that you can use.',
  },
  {
    title: 'Campaign Type',
    description:
      'Campaign Type List all possible identified campaigns, define whether these would be newsletters, selling or new product intro mails, etc and define the call to action for each campaign how the customer’s behavior should be affected.',
  },
  {
    title: 'Email Content',
    description:
      'Email content Pre-design, write and build the email content. It should be interesting, contemporary, corporate, and beneficial to the reader in accordance with your branding.',
  },
  {
    title: 'Email Testing',
    description:
      'Email Testing Use creative key email aspects like email subject, images, and call to actions to create various emails and test different strategies to see which one your audience responds to best. One can also use A/B testing when need be to better assess the variations.',
  },
  {
    title: 'Results Measurement',
    description:
      'Results Measurement Leverage analytics tools to evaluate your email campaigns. For example; open rates, click-through rates, conversions etc. help to ascertain whether or not the targets are achieved and where to improve on.',
  },
];
