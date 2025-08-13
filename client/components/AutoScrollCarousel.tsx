import React from 'react';

const AutoScrollCarousel = () => {
  const bannerImages = [
    {
      id: 1,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2Fcc1ec39d8575411982eb29ccb37b3a32?format=webp&width=800",
      alt: "Gift A Snack Care Packages Banner 1"
    },
    {
      id: 2,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2Fcc1ec39d8575411982eb29ccb37b3a32?format=webp&width=800",
      alt: "Gift A Snack Care Packages Banner 2"
    },
    {
      id: 3,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2Fcc1ec39d8575411982eb29ccb37b3a32?format=webp&width=800",
      alt: "Gift A Snack Care Packages Banner 3"
    },
    {
      id: 4,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2Fcc1ec39d8575411982eb29ccb37b3a32?format=webp&width=800",
      alt: "Gift A Snack Care Packages Banner 4"
    },
    {
      id: 5,
      src: "https://cdn.builder.io/api/v1/image/assets%2F79b7dfd5cb0f4ca0b96e836c27c6ef40%2Fcc1ec39d8575411982eb29ccb37b3a32?format=webp&width=800",
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
                className="flex-shrink-0 w-96 mx-4"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
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
