import image1 from '../../assets/service/ad_shoot/backpack.jpg';
import image2 from '../../assets/service/ad_shoot/Baseball cap.jpg';
import image3 from '../../assets/service/ad_shoot/smartwatch.jpg';
import image4 from '../../assets/service/ad_shoot/tote bag.jpg';
import image5 from '../../assets/service/ad_shoot/earbuds.jpg';
import image6 from '../../assets/service/ad_shoot/dairy.jpg';

const images = [
  {
    id: 1,
    title: 'Backpack',
    src: image1,
    alt: 'Backpack',
    description:
      'A versatile backpack ideal for school, work, or travel, featuring multiple compartments for organization and a sleek design.',
  },
  {
    id: 2,
    title: 'Baseball Cap',
    src: image2,
    alt: 'Baseball Cap',
    description:
      'A trendy baseball cap that adds a sporty touch to any outfit while providing protection from the sun.',
  },
  {
    id: 3,
    title: 'Smartwatch',
    src: image3,
    alt: 'Smartwatch',
    description:
      'A cutting-edge smartwatch that tracks your fitness and keeps you connected on the go, all while looking sleek on your wrist.',
  },
  {
    id: 4,
    title: 'Canvas Tote Bag',
    src: image4,
    alt: 'Canvas Tote Bag',
    description:
      'An eco-friendly canvas tote bag perfect for shopping or daily errands, combining style and sustainability.',
  },
  {
    id: 5,
    title: 'Wireless Earbuds',
    src: image5,
    alt: 'Wireless Earbuds',
    description:
      'High-quality wireless earbuds that deliver superior sound and comfort, perfect for music lovers on the move.',
  },
  {
    id: 6,
    title: 'Notebook',
    src: image6,
    alt: 'Notebook',
    description:
      'A beautifully designed notebook for jotting down thoughts, ideas, or sketches, featuring high-quality paper.',
  },
];

const ImageCard = ({ title, src, alt, description, status }) => {
  return (
    <div className="overflow-hidden cursor-pointer group  rounded-xl">
      {status === 'odd' && (
        <div className="p-4 bg-gradient-to-r from-primary to-pink-500 animate-gradient-text">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-white">
            {description}
          </p>
        </div>
      )}
      <div className="h-[250px] md:h-[350px] lg:h-[400px]  w-full relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="imageHandel h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 bg-overlayColor h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      {status === 'even' && (
        <div className="p-5 bg-gradient-to-r from-primary to-pink-500 animate-gradient-text">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-3">
            {title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-white">
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

const AddShootGallery = ({ items }) => {
  const data = items ? items : images;
  return (
    <div className="w-full md:w-[90%] xl:w-[87%] mx-auto py-20 px-5">
      {/* <div className="pb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 lg:text-5xl xl:text-6xl">
          Why Go for the Best Ad Shoot Company?
        </h3>
        <HtmlContent
          htmlContent="<ul class='list-disc space-y-2 font-semibold'>
        <li>Going for the top ad shoot company can help in landing the perfect ad
        campaign. The following are the advantages that come into play.</li>
        <li>Experience: The best companies are fully backed with lots of experience and
        ready made projects done.</li>
        <li>Quality: They work in very high quality levels making sure that all aspects are
        proper.

        </li>
        <li>Reputation: A company with integrity will typically provide output that meets
        the demands of their 
        
        
        .
        </li>
        <li>Editing: This is the stage where one gets to polish the pictures after which
        they can be used for marketing purposes.
        </li>
        </ul>"
        />
      </div> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        {data.map((image, index) => (
          <ImageCard
            key={image.id}
            title={image.title}
            src={image.src}
            alt={image.alt}
            description={image.description}
            status={index % 2 === 0 ? 'odd' : 'even'}
          />
        ))}
      </div>
    </div>
  );
};

export default AddShootGallery;
