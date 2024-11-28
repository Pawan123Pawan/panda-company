import React, { useState } from 'react';
import first from '../../assets/service/prmarketing/first.png';
import second from '../../assets/service/prmarketing/second.png';
import third from '../../assets/service/prmarketing/THIRD.png';
import fourth from '../../assets/service/prmarketing/fourth.png';
import ProcessStep from '../../components/ProcessStep';
import bg from '../../assets/service/prmarketing/bg.png';
import CommonHeroSection from './CommonHeroSection';
import prMarketing from '../../assets/service/allsetion/pr.webp';
const PrMarketing = () => {
  const projectDeliverables = [
    {
      id: 1,
      title: 'PR Strategy Development',
      description:
        'PR Strategy Development and Implementation Create a full-fledged PR strategy with key messages, targeted media, and outreach strategies for effective promotion of the brand.',
    },
    {
      id: 2,
      title: 'Press Release Creation',
      description:
        'Write and Edit Press Releases Write a powerful press release covering news, announcements of new products, and key facts about the company relevant to the audience.',
    },
    {
      id: 3,
      title: 'Media Outreach',
      description:
        'Media Relations Outreach Update almost the same content describing what would be done in this section – not only the internet media but also offline ones reaching the right journalists, bloggers, influencers, etc.',
    },
    {
      id: 4,
      title: 'Event Planning and Management',
      description:
        'Event Planning and Management All Events must be planned and executed. For example: press tours, product launches, and media invite only events',
    },
    {
      id: 5,
      title: 'Content Creation for PR',
      description:
        'Public Relations Content Development Write suitable content like articles, opinion editorials, and other blogs that will be useful in the PR campaign and promote the brand.',
    },
    {
      id: 6,
      title: 'Media Monitoring and Analysis',
      description:
        'Media Coverage and Evaluation Report Media coverage is kept under surveillance as well as the output and effectiveness of PR are assessed and reports about sentiment reach and brand mention are produced.',
    },
  ];

  const services = [
    {
      title: 'Public relations',
      description:
        'Best PR tactics tailored to avoid conflict with your business interests. This will include internal research of the company undergoing restructuring, its competitors, and target market in order to identify the needs and devise the most suitable communication. the tactics will please stakeholders while maintaining or increasing the visibility of the clients’ brands. Messages knowing the right usable channels; stakeholder’s relations and potential conflicts.',
      imgUrl: first,
    },
    {
      title: 'Media relations',
      description:
        'We’ll help you to reach out to journalists and influencers in order to promote your content. Our media relations specialists have well recognized and advanced media contacts with journalists and influencers for different industries. Ensuring that press materials are prepared, stories pitched, and interviews coordinated in such a way that the information enhances their uniqueness and selling features to the target market. Thought leadership is apparent in this situation with the client.',
      imgUrl: second,
    },
    {
      title: 'Crisis communications',
      description:
        'We want to prepare you in advance and assist you in challenging times. Now, as the pace of news increases, it is imperative to have a solid crisis communication plan in place. We will work together to understand the risks that such events may pose, create aggressive countermeasures and guideline policies for your staff communications. In the case of individual crises, our specialists will prepare you to cope with the crisis and the media as well as all other parties concerned in order to shield your brand from any reputational risks.',
      imgUrl: third,
    },
    {
      title: 'Social media',
      description:
        'We will assist you in societies with the services of your provider. Our social media strategists will develop a seasonal content calendar that meets PR campaigns and the general marketing strategy of the company. We will provide interesting content, take care of your social media pages, and communicate with your audience for the best online interaction. By analysis and audience understanding, we will ensure the importance of this strategy in social media for the purpose of brand loyalty and customer engagement.',
      imgUrl: fourth,
    },
  ];

  const [expandedService, setExpandedService] = useState(null);

  const toggleExpand = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const truncateContent = (content) => {
    const words = content.split(' ');
    return words.length > 15 ? `${words.slice(0, 15).join(' ')}...` : content;
  };

  return (
    <div
      className="relative flex mx-auto flex-col bg-[#f8fafb] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      {/* <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url(${bg})`,
                  }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                      Witness the Influence of PR Management
                    </h1>
                    <h2 className="text-white font-semibold leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      It is essential for you as an organisation to market and
                      present your ideas in the best way possible. Our services
                      for PR management get you in front of the right
                      individuals at the right time.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#0e161b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  What We Provide
                </h1>
                <p className="text-[#0e161b] text-base font-normal leading-normal max-w-[720px]">
                  We offer PR management solutions based on your individual
                  needs. Therefore together wi ll develop a plan which will help
                  in achieving these desires.
                </p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3">
                {services.map((item, index) => (
                  <div key={index} className="flex flex-col gap-1 pb-6">
                    <div
                      className="aspect-square h-auto w-full rounded-xl bg-cover bg-center bg-no-repeat"
                      style={{ backgroundImage: `url(${item.imgUrl})` }}
                    ></div>
                    <h2 className="text-[#0e161b] text-lg font-bold leading-tight">
                      {item.title}
                    </h2>
                    <p className="text-[#0e161b] text-sm font-normal leading-normal">
                      {expandedService === index
                        ? item.description
                        : truncateContent(item.description)}
                      <button
                        className="text-blue-500 ml-1"
                        onClick={() => toggleExpand(index)}
                      >
                        {expandedService === index ? 'Read Less' : 'Read More'}
                      </button>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <CommonHeroSection image={prMarketing} />
      <ProcessStep
        step={'Client Relationship Management Process'}
        description={
          'From sorority initiation and industry background checks to promoting strategic advertising, designing, executing, and fine-tuning efforts, we also make sure that there is a performance measure and lessons drawn from it for future success.'
        }
        processStages={projectDeliverables}
      />
    </div>
  );
};

export default PrMarketing;
