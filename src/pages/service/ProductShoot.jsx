import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../components/lib/utils';
import HeroSection from '../../components/Branding/HeroSection';
import ProcessList from '../../components/ProcessStep';
import HtmlContent from '../../components/html_content/HtmlContent';
import CommonHeroSection from './CommonHeroSection';
import productShoot from '../../assets/service/allsetion/productshoot.webp';

const productData = [
  {
    id: 1,
    title: 'Apple Vision Pro',
    description:
      'The all-new Apple Vision Pro was the best thing that happened around 8 months ago, not anymore.',
    imageUrl:
      'https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'Google Pixel Fold',
    description:
      'A revolutionary foldable device that combines the best of both phone and tablet.',
    imageUrl:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
  {
    id: 3,
    title: 'Samsung Galaxy S23 Ultra',
    description:
      "Samsung's latest flagship with exceptional camera quality and performance.",
    imageUrl:
      'https://images.unsplash.com/photo-1501426026826-31c667bdf23d?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3',
  },
];

export default function ProductShoot() {
  return (
    <>
      {/* <HeroSection
        text="Product Shoot"
        content="Product Shoot: Capture your products in the best light, enhancing visuals to attract and engage customers."
      /> */}
      <CommonHeroSection image={productShoot} />

      <div className="p-3 w-full md:w-[90%] lg:w-[85%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productData.map((product) => (
            <div
              key={product.id}
              className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-primary to-pink-500 animate-gradient-text p-8 my-10"
            >
              <div className="relative z-10">
                <div className="h-[250px]">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="rounded-2xl h-full w-full"
                  />
                </div>
                <motion.div className="py-4 relative z-20">
                  <h2 className="text-white text-2xl text-left font-bold">
                    {product.title}
                  </h2>
                  <p className="text-neutral-200 text-left mt-4">
                    {product.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="pb-10 px-10 py-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 lg:text-5xl xl:text-6xl">
              Characteristics of an Appropriate Product Shoot Studio
            </h3>
            <HtmlContent
              htmlContent="<ul class='list-disc space-y-2 font-semibold'>
        <li>Flexible Spaces: Several backdrops and environments suitable for different
        kinds of pr       oducts.</li>
        <li>Contemporary Lighting: Multi-colored photo shoot studio lamps for superb
        image quality.
        </li>
        <li>Technical Guidance: Helps the client in carrying out the food photography in a
        seamless manner.

       
        </ul>"
            />
          </div>
          <div className="pb-10 px-10 py-4">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-5 lg:text-5xl xl:text-6xl">
              How to do a Product Photoshoot
            </h3>
            <HtmlContent
              htmlContent="<ul class='list-disc space-y-2 font-semibold'>
        <li>Prepare In Advance: Decide on the goal of the photograph and compose a
        shot list to avoid missing any essential photographs.</li>
        <li>Photograph Styling: Consider the placement of all aspects, props, and
        backgrounds to create a pleasing picture.</li>
        <li>Lighting: Proper serial shoot with professional-grade accent lighting can draw
        out the greatest elements of the product and give it a clean professional
        presentation.
        </li>
        <li>Coherence: Make sure all product pictures are of the same brand style and
        quality to create a brand image.
        </li>
        <li>Editing: This is the stage where one gets to polish the pictures after which
        they can be used for marketing purposes.
        </li>
        </ul>"
            />
          </div>
        </div>
      </div>
      <ProcessList
        step={'Product Shoot Step'}
        processStages={projectDeliverables}
      />
    </>
  );
}

const projectDeliverables = [
  {
    id: 1,
    title: 'Project Planning and Briefing',
    description:
      'Conduct an initial meeting with the client to discuss the goals, style, and specifications for the product shoot, ensuring alignment on expectations and deliverables.',
  },
  {
    id: 2,
    title: 'Moodboard and Style Guide Creation',
    description:
      'Develop a moodboard and style guide to establish the visual direction for the shoot, covering lighting, background, and overall aesthetic to match the brand’s identity.',
  },
  {
    id: 3,
    title: 'Location and Equipment Setup',
    description:
      'Identify and set up the location, lighting, and necessary equipment to achieve the desired look and quality for the product photos.',
  },
  {
    id: 4,
    title: 'Product Preparation and Styling',
    description:
      'Prepare and style the products to highlight their best features, ensuring they are camera-ready and aligned with the planned aesthetic.',
  },
  {
    id: 5,
    title: 'Photography Session',
    description:
      'Conduct the actual product photography session, capturing multiple angles and styles as per the brief, ensuring high-quality and engaging visuals.',
  },
  {
    id: 6,
    title: 'Editing and Retouching',
    description:
      'Perform photo editing and retouching to enhance the images, ensuring they meet the client’s quality standards and align with the brand’s look.',
  },
  {
    id: 7,
    title: 'Quality Assurance and Review',
    description:
      'Review all edited photos to ensure consistency, high quality, and alignment with the client’s requirements before final delivery.',
  },
  {
    id: 8,
    title: 'Final Delivery and Post-Shoot Support',
    description:
      'Deliver the final edited images to the client, and provide any necessary support for resizing, format adjustments, or additional requests post-shoot.',
  },
];
