import { motion } from 'framer-motion';

const CustomCard = ({ data }) => {
  return (
    <div className="w-full mx-auto p-5 md:w-[90%]  lg:w-[87%] py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((product) => (
          <div
            key={product.id}
            className="w-full relative rounded-xl overflow-hidden max-w-md mx-auto p-5 hover:bg-primary group" // Added group class
          >
            <div className="relative z-10">
              <div className="h-[250px]">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="rounded-xl h-full w-full"
                />
              </div>

              <motion.div className="py-4 relative z-20">
                <h2 className="text-primary text-2xl text-left font-bold group-hover:text-white">
                  {product.title}
                </h2>
                <p className="text-gray-700 text-left mt-4 group-hover:text-white">
                  {product.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCard;
