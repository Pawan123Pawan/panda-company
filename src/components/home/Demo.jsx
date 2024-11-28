import React, { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import certificate1 from '../../assets/ourcertificate/Akshay-kumar-2024-04-21-pdf.jpg';
import certificate2 from '../../assets/ourcertificate/google-ads-Advance.webp';
import certificate3 from '../../assets/ourcertificate/google-ads-measurement-certification.webp';
import certificate4 from '../../assets/ourcertificate/google-ads-search-certification (1).webp';
import certificate5 from '../../assets/ourcertificate/google-ads-search-certification.webp';

// Example images array
const images = [
  {
    id: 1,
    title: 'Beautiful Sunset',
    url: certificate1,
  },
  {
    id: 2,
    title: 'Mountain View',
    url: certificate2,
  },
  {
    id: 3,
    title: 'Ocean Waves',
    url: certificate3,
  },
  {
    id: 4,
    title: 'City Lights',
    url: certificate4,
  },
  {
    id: 5,
    title: 'Forest Path',
    url: certificate5,
  },
];

const CertificateImageCarousel = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // Function to close the modal
  const closeModal = () => setSelectedImageIndex(null);

  // Responsive breakpoints
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full mx-auto py-10 pb-20 relative">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">Our Certificate's</h1>
        <p className="text-gray-800 mt-4 w-[90%] lg:w-[70%] mx-auto">
          Our certificate represents our commitment to excellence and expertise
          in digital marketing. We deliver tailored services designed to enhance
          your brand and drive measurable results that exceed your expectations.
        </p>
      </div>
      {/* Carousel Container */}
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
      >
        {images.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer mr-5 p-5 bg-primary/50 rounded-xl"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={item.url}
              alt={`Image ${index}`}
              className="w-full  rounded-lg h-[300px]"
            />
          </div>
        ))}
      </Carousel>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={images[selectedImageIndex]?.url}
              alt="Selected"
              className="max-w-full max-h-[90vh] rounded-lg"
            />
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black p-2 rounded-full"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateImageCarousel;
