import React from 'react';

const AutoScrollCarousel = () => {
  const bannerImages = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2F1047a4e865cb49b8972188fb949b7197?format=webp&width=800",
      alt: "Gift A Snack Care Packages Banner 1"
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2F467035ddbbac4a4fa95ed5c2b4865be0?format=webp&width=800",
      alt: "Gift A Snack Care Packages Banner 2"
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2Fda4903eb24f84e80b0293a094107bd3b?format=webp&width=800",
      alt: "Gift A Snack Care Packages Banner 3"
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2F0d9904db419345499be8f6de2dd73269?format=webp&width=800",
      alt: "Gift A Snack Care Packages Banner 4"
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2Fc4f2c47ef67a4739a6eaf30b37aaec35?format=webp&width=800",
      alt: "Gift A Snack Care Packages Banner 5"
    }
  ];

  // Duplicate the images for seamless loop
  const duplicatedImages = [...bannerImages, ...bannerImages];

  return (
    <section className="py-12 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-heading-red mb-2">
            Our Care Package Collection
          </h2>
          <p className="text-gray-600">
            Discover the perfect snack experience for every occasion
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-carousel">
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 w-80 mx-4"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoScrollCarousel;
