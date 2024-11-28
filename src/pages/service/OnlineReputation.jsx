import React from 'react';
import banner from '../../assets/service/orm/orm.jpg';
import HeroSection from '../../components/Branding/HeroSection';
import ProcessStep from '../../components/ProcessStep';
import CommonHeroSection from './CommonHeroSection';
import ORM from '../../assets/service/allsetion/ORM.webp';
const OnlineReputation = () => {
  return (
    <>
      {/* <HeroSection
        text={'Management of Online Reputation'}
        content={
          'Strengthen and maintain your brand’s reliability and trust by implementing any of the approaches of online reputation management effectively—be it monitoring feedback, managing reviews, engaging your audience, or creating an image!'
        }
        image={banner}
        imagePosition={''}
      /> */}
      <CommonHeroSection image={ORM} />
      <ProcessStep
        step={'Online Reputation Management Process'}
        description={
          'Process of Management of Online Reputation Encompasses Very Many Steps We support your brand to manage the image that is out there on the internet as well as the trust of its audiences by offering steps such as protection of their reputation, review management, active monitoring as well as crisis management services.'
        }
        processStages={projectDeliverables}
      />
    </>
  );
};

export default OnlineReputation;
const projectDeliverables = [
  {
    id: 1,
    title: 'Reputation Assessment',
    description:
      'Assess the level of online presence and the factors that determine it, including comments and ratings on review sites, conversations on social media channels, and general perception of the brand.',
  },
  {
    id: 2,
    title: 'Review Management',
    description:
      'Formulate and put in place measures on how to handle reviews so that there is an emphasison good reviews and criticism is countered where possible.',
  },
  {
    id: 3,
    title: 'Content Strategy',
    description:
      'Construct a content strategy focused on ensuring that favourable narratives about the brand are published and information on products, missions, and customer services is well documented.',
  },
  {
    id: 4,
    title: 'Social Media Monitoring',
    description:
      'Social Media Monitoring Engage in the monitoring of social networks to collect mentions, interact with the audience and control the Brand out there in a more active manner.',
  },
  {
    id: 5,
    title: 'Crisis Management',
    description:
      'Prepare a crisis resolution strategy ahead of time so that any such problems can be dealt with quickly and efficiently and also limit the damage any such problems may cause to your image.',
  },
  {
    id: 6,
    title: 'Ongoing Reporting and Analysis',
    description:
      'Conduct sentiment analysis of the brand, share reports on engagement and suggest any further actions that may be required to enhance your brand’s online reputation.',
  },
];
