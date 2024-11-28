import React from 'react';
import nackBand from '../../assets/service/branding/PAnda guys Branding-10.jpg';
import tShirt from '../../assets/service/branding/PAnda guys Branding-11.jpg';
import pen from '../../assets/service/branding/PAnda guys Branding-14.jpg';
import dairy from '../../assets/service/branding/PAnda guys Branding-15.jpg';
import botel from '../../assets/service/branding/PAnda guys Branding-17.jpg';
import cup2 from '../../assets/service/branding/skjdgkjgsgkhars-12.jpg';
import keyChain from '../../assets/service/branding/skjdgkjgsgkhars-13.jpg';
import handBand from '../../assets/service/branding/skjdgkjgsgkhars-16.jpg';
import cup from '../../assets/service/branding/panda guys mug abck side.jpg';

const images = [
  {
    id: 1,
    title: 'Nack Band',
    src: nackBand,
    alt: 'Nack Band',
    description:
      'Stylish and comfortable nack band perfect for daily wear, adding a touch of flair to your outfit.',
  },
  {
    id: 2,
    title: 'T-Shirt',
    src: tShirt,
    alt: 'T-Shirt',
    description:
      'A trendy t-shirt designed with vibrant colors and a modern fit, ideal for casual outings and everyday wear.',
  },
  {
    id: 3,
    title: 'Pen',
    src: pen,
    alt: 'Pen',
    description:
      'An elegant pen crafted for professional settings, providing a smooth writing experience and stylish appearance for any occasion.',
  },
  {
    id: 4,
    title: 'Dairy',
    src: dairy,
    alt: 'Dairy',
    description:
      'Quality dairy products that are fresh, delicious, and nutritious, perfect for enhancing your meals and satisfying your cravings.',
  },
  {
    id: 5,
    title: 'Botel',
    src: botel,
    alt: 'Bottle',
    description:
      'A durable and eco-friendly water bottle designed for outdoor activities, ensuring you stay hydrated wherever your adventures take you.',
  },
  {
    id: 6,
    title: 'Branding Cup',
    src: cup2,
    alt: 'Branding Cup',
    description:
      'A stylish cup that perfectly complements your morning coffee or tea, featuring a unique design that stands out.',
  },
  {
    id: 7,
    title: 'Key Chain',
    src: keyChain,
    alt: 'Key Chain',
    description:
      'A creative keychain designed to keep your keys organized and easily accessible while adding a personal touch to your belongings.',
  },
  {
    id: 8,
    title: 'Hand Band',
    src: handBand,
    alt: 'Hand Band',
    description:
      'Comfortable hand band designed for everyday wear, offering a stylish accessory that enhances your look without compromising comfort.',
  },
  {
    id: 9,
    title: 'Cup',
    src: cup,
    alt: 'Cup',
    description:
      'A beautiful cup featuring an artistic design that elevates your drinking experience, making it perfect for any beverage.',
  },
];

const ImageCard = ({ title, src, alt, description, status }) => {
  return (
    <div className="overflow-hidden cursor-pointer group rounded-xl">
      {status === 'odd' && (
        <div className="p-4 bg-primary">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
            {title}
          </h3>
          <p className="text-sm md:text-base lg:text-lg text-white">
            {description}
          </p>
        </div>
      )}
      <div className="h-[250px] md:h-[350px] lg:h-[400px] xl:h-[500px] w-full relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          className="imageHandel h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute top-0 left-0 bg-overlayColor h-full w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      {status === 'even' && (
        <div className="p-5 bg-primary">
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

const BrandingGallery = () => {
  return (
    <div className="w-full md:w-[90%] xl:w-[87%] mx-auto py-20 px-5">
      <div className="pb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 lg:text-5xl xl:text-6xl">
          The Importance of Branding
        </h3>
        <p className="text-gray-700 max-w-2xl tracking-wide text-base md:text-md lg:text-lg">
          Branding is quite simple; to put it in one statement, branding is the
          face of the business. The reputation a company builds allows the
          customers to have brand loyalty. Strong branding does not just aid in
          providing a company with sales, it has the ability to provide the
          company with loyal customers as well as even the most sought employees
          in the market.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
        {images.map((image, index) => (
          <ImageCard
            key={image.title} // Use title or a unique ID if available
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

export default BrandingGallery;
