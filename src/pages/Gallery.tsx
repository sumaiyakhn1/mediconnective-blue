import React, { useState, useEffect } from 'react';

interface Image {
  src: string;
  caption: string;
}

const images: Image[] = [
  { src: 'img1.jpg', caption: 'Doctor Conference Nanital' },
  { src: 'img4.jpg', caption: 'Conference Nanital' },
  { src: 'img5.jpg', caption: 'Doctor Conference Nanital' },
  { src: 'img6.jpg', caption: 'Doctor Conference' },
  { src: 'img7.jpg', caption: 'Conference Nanital' },
  { src: 'img8.jpg', caption: 'Doctor Conference Nanital' },
  // Add more images as needed
];

const Gallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Automatically transition to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 bg-gradient-to-b from-blue-50 to-white py-4">
      <div className="p-2 ">
  {/* Heading and Subtitle Section */}
  <div className="text-center mb-4">
    <h1 className="text-5xl font-bold text-blue-600">Gallery</h1>
    <p className="text-lg text-gray-600 mt-2 italic">
      Explore our collection of stunning images
    </p>
  </div>
</div>


      {/* Slideshow Section */}
      <div className="mb-8 relative">
        <div className="relative h-96 overflow-hidden">
          <img
            src={images[currentSlide].src}
            alt={images[currentSlide].caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
            {images[currentSlide].caption}
          </div>
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
        >
          &gt;
        </button>
      </div>

      {/* Grid Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-center">
              {image.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;