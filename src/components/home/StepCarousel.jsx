import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import panda1 from '../../assets/home/PAnda Guys Website our Work Process-01.webp';
import panda2 from '../../assets/home/PAnda Guys Website our Work Process-02.webp';
import panda3 from '../../assets/home/PAnda Guys Website our Work Process-03.webp';
import panda4 from '../../assets/home/PAnda Guys Website our Work Process-04.webp';
import panda5 from '../../assets/home/PAnda Guys Website our Work Process-05.webp';
import panda6 from '../../assets/home/PAnda Guys Website our Work Process-06.webp';
import panda7 from '../../assets/home/PAnda Guys Website our Work Process-07.webp';
import panda8 from '../../assets/home/PAnda Guys Website our Work Process-08.webp';
import panda9 from '../../assets/home/PAnda Guys Website our Work Process-09.webp';
import number1 from '../../assets/home/number-2.svg';
import number2 from '../../assets/home/number-2_12200246.svg';
import number3 from '../../assets/home/number-3_12200269.svg';
import number4 from '../../assets/home/number-4_12200292.svg';
import number5 from '../../assets/home/number-5_12200315.svg';
import number6 from '../../assets/home/number-6_12200349.svg';
import number7 from '../../assets/home/number-7_12200416.svg';
import number8 from '../../assets/home/number-8_12200525.svg';
import number9 from '../../assets/home/number-9_12200625.svg';
const StepCarousel = () => {
  return (
    <div className="py-14 px-5 w-full md:w-[90%] xl:w-[87%] mx-auto">
      {/* Title and Description */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold">Work Process</h1>
        <p className="text-gray-800 mt-4">
          Explore our services, including Google Ads, Facebook Ads, SEO,
          branding, and business automation to help grow your business.
        </p>
      </div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Control horizontal scroll behavior across screen sizes
  const x = useTransform(scrollYProgress, [0.6, 0], ['0%', '-95%']);

  return (
    <section ref={targetRef} className="relative">
      <div className="sticky top-0 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  const isOdd = card.id % 2 !== 0;

  return (
    <div
      className={`group relative rounded-xl flex flex-col justify-between overflow-hidden p-4 
      h-[270px] w-[280px] sm:h-[320px] sm:w-[350px] md:h-[350px] md:w-[400px] lg:h-[450px] lg:w-[450px] ${
        isOdd ? 'bg-primary/80' : 'bg-black/80'
      }`} // Responsive height and width
    >
      {/* Content above the image for even cards */}
      {!isOdd && (
        <div className="content text-center mb-2">
          <img
            src={card.number}
            className="w-[10%] absolute left-5 top-4 mb-2"
            alt="step number"
          />
          <p className="font-bold text-white text-lg md:text-2xl">
            {card.title}
          </p>
          <p className="text-white mt-4 text-sm">{card.content}</p>
        </div>
      )}

      {/* Image below the content for odd cards */}
      <img
        src={card.url}
        alt="panda"
        className="rounded-md h-1/2 md:h-2/3 object-cover"
      />

      {/* Content below the image for odd cards */}
      {isOdd && (
        <div className="content text-center mt-2">
          <img
            src={card.number}
            className="w-[10%] absolute left-5 bottom-20 mb-2"
            alt="step number"
          />
          <p className="font-bold text-white text-lg md:text-2xl">
            {card.title}
          </p>
          <p className="text-white mt-4 text-sm">{card.content}</p>
        </div>
      )}
    </div>
  );
};

export default StepCarousel;

const cards = [
  {
    url: panda1,
    title: 'Initial Consultation',
    content:
      'Discuss Your Project objectives, identify possible problems, and provide insights on how we may assist you in succeeding.',
    id: 1,
    number: number1,
  },
  {
    url: panda2,
    title: 'Research',
    content:
      'Our Research team uses innovative methods for discovering solutions, carefully reviewing data, and performing extensive research to ensure the quality and reliability of our findings.',
    id: 2,
    number: number2,
  },
  {
    url: panda3,
    title: 'Strategy',
    content:
      'Our strategic approach involves a thorough analysis of your specific objectives and challenges, resulting in customized solutions that align with your vision.',
    id: 3,
    number: number3,
  },
  {
    url: panda4,
    title: 'Implementation',
    content:
      'Modern technology to bring your idea to life, offering high-quality solutions that exceed expectations.',
    id: 4,
    number: number4,
  },
  {
    url: panda5,
    title: 'Development',
    content:
      'From concept to execution, the development process ensures the highest quality and efficiency in our projects.',
    id: 5,
    number: number5,
  },
  {
    url: panda6,
    title: 'Testing',
    content:
      'Before release, all potential concerns are carefully examined to identify and solve issues.',
    id: 6,
    number: number6,
  },
  {
    url: panda7,
    title: 'Optimization',
    content:
      'Through continuous optimization, we ensure our solutions deliver exceptional value and exceed client expectations.',
    id: 7,
    number: number7,
  },
  {
    url: panda8,
    title: 'Final Customization',
    content:
      'Optimizes the site for search engines and conducts thorough testing to guarantee a seamless user experience.',
    id: 8,
    number: number8,
  },
  {
    url: panda9,
    title: 'Launch',
    content:
      'Strategy is meticulously planned to ensure a seamless and successful rollout of your product.',
    id: 9,
    number: number9,
  },
];
