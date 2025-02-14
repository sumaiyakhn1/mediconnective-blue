import React, { useState, useEffect } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

const images = [
  { src: "/img7.jpg", title: "", description: "Womens Day special" },
  { src: "/img8.jpg", title: "", description: "Cancer special Podcast" },
  { src: "/img1.jpg", title: "", description: "Award function." },
  { src: "/img4.jpg", title: "", description: "Doctors meeting" },
  { src: "/img5.jpg", title: "", description: "Oncology conference" },
  { src: "/img6.jpg", title: "", description: "Award function" },
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (

    
    <div className="container mx-auto p-6">
       <motion.h2
      className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 drop-shadow-lg mb-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      Gallery
    </motion.h2>
    <p className="text-lg text-secondary mb-8 text-center">  
  Explore our gallery featuring a stunning collection of moments, capturing the essence of innovation, creativity, and excellence.  
</p>

      <div className="mt-6">
        {/* <h3 className="text-xl font-bold mb-3">Carousel View</h3> */}
        {isMounted && (
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image.src} alt={image.title} className="w-full h-64 object-cover rounded-lg" />
              </div>
            ))}
          </Slider>
        )}
      </div>

   

      <div className="grid grid-cols-3 gap-4">
  {images.map((image, index) => (
    <div key={index} className="relative cursor-pointer group">
      <img src={image.src} alt={image.title} className="w-full h-48 object-cover rounded-lg" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white text-lg font-semibold">{image.title}</h3>
        <p className="text-white text-sm">{image.description}</p>
      </div>
    </div>
  ))}
</div>



    </div>
  );
};
export default Gallery;