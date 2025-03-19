import React, { useState, useEffect } from "react";

const images = [
  { src: "gallery-img/g1.JPG", caption: "Doctor Conference Nanital" },
  { src: "gallery-img/g6.JPG", caption: "Doctor Conference Nanital" },
  { src: "gallery-img/g2.JPG", caption: "Doctor Conference" },
  { src: "gallery-img/g3.JPG", caption: "Conference Nanital" },
  { src: "gallery-img/g4.JPG", caption: "Doctor Conference Nanital" },
  { src: "gallery-img/g5.JPG", caption: "Doctor Conference Nanital" },
  { src: "gallery-img/g7.JPG", caption: "Doctor Conference Nanital" },
  { src: "gallery-img/g8.JPG", caption: "" },
  { src: "gallery-img/g9.JPG", caption: "" },
  { src: "gallery-img/g10.JPG", caption: "" },
   { src: "gallery-img/g11.JPG", caption: "" },
   { src: "gallery-img/g12.JPG", caption: "" },
   { src: "gallery-img/g13.JPG", caption: "" },
  { src: "gallery-img/g14.JPG", caption: "" },
  { src: "gallery-img/g15.JPG", caption: "" },
  { src: "gallery-img/g16.JPG", caption: "" },
  { src: "gallery-img/g17.JPG", caption: "" },
  { src: "gallery-img/g18.JPG", caption: "" },
  { src: "gallery-img/g19.JPG", caption: "" },
  { src: "gallery-img/g20.JPG", caption: "" },
  { src: "gallery-img/g21.JPG", caption: "" },
  { src: "gallery-img/g22.jpg", caption: "" },
  { src: "gallery-img/g23.jpg", caption: "" },
  { src: "gallery-img/g24.jpg", caption: "" },
  { src: "gallery-img/g25.jpg", caption: "" },
  { src: "gallery-img/g26.jpg", caption: "" },
  { src: "gallery-img/g27.jpg", caption: "" },
  { src: "gallery-img/g28.jpg", caption: "" },
  { src: "gallery-img/g29.jpg", caption: "" },
  { src: "gallery-img/g30.jpg", caption: "" },
  

 
];

const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Automatically transition to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setZoomedImage(null);
      } else if (event.key === "ArrowRight" && zoomedImage) {
        setZoomedImage((prev) => {
          const currentIndex = images.findIndex((img) => img.src === prev);
          return images[(currentIndex + 1) % images.length].src;
        });
      } else if (event.key === "ArrowLeft" && zoomedImage) {
        setZoomedImage((prev) => {
          const currentIndex = images.findIndex((img) => img.src === prev);
          return images[(currentIndex - 1 + images.length) % images.length].src;
        });
      }
    };
  
    if (zoomedImage) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }
  
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedImage]);
  
  return (
    <div className="p-2 bg-gradient-to-b from-blue-50 to-white py-4">
      <div className="p-2">
        {/* Heading and Subtitle Section */}
        <div className="text-center mb-4">
          <h1 className="text-5xl font-bold text-blue-900">Moments from the Conclave</h1>
          <p className="text-lg text-gray-600 mt-2 italic">
          ~Highlights from our insightful and engaging conference.
          </p>
        </div>
      </div>

      {/* Slideshow Section */}
      <div className="mb-8 relative">
      <div className="relative h-64 md:h-96 lg:h-[500px] overflow-hidden">

          <img
            src={images[currentSlide].src}
            alt={images[currentSlide].caption}
            className="w-full h-full object-cover cursor-pointer"
            onClick={() => setZoomedImage(images[currentSlide].src)}
          />
        
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
              className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setZoomedImage(image.src)}
            />
          
          </div>
        ))}
      </div>

      {/* Zoomed Image Modal */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setZoomedImage(null)}
        >
          <img
            src={zoomedImage}
            alt="Zoomed"
            className="max-w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
        </div>
      )}
      <div className="text-center mt-6">
  <p className="text-lg text-gray-700">Want to see more conference moments?</p>
  <a
    href="https://photos.app.goo.gl/PsNy8RSfRuuS1U5B7"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-2 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-md hover:bg-blue-800 transition duration-300"
  >
    View Full Gallery
  </a>
</div>

    </div>
  );
};

export default Gallery;
