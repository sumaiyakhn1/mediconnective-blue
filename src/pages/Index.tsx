import { Calendar, MapPin, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
"use client";
import { motion } from "framer-motion";
import PartnersCarousel from "@/components/PartnersCarousel";

const Index = () => {
  const images = [
    { url: "/1200px-Panchachuli_peaks.jpg", alt: "Medical conference hall" },
    { url: "/img3.jpg", alt: "Medical professionals collaborating" },
    { url: "/img2.jpeg", alt: "Modern medical technology" },
  ];

  const announcements = [
    "• Session 1: Breast Cancer •",
    "• Session 2: Lung Cancer •",
    "• Session 3: Gastrointestinal Oncology •",
    "• Session 4: Gyne Oncology/Genitourinary •",
    "• Session 5: Hematology •",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Countdown timer


  return (
    <div className="animate-fade-in">
      {/* Carousel Section */}
      <div className="relative min-h-[60vh] flex items-center">
        <Carousel className="w-full">
          <CarouselContent
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {images.map((image, index) => (
              <CarouselItem key={index} className="flex-shrink-0 w-full">
                <div
                  className="relative bg-cover bg-center min-h-[60vh] flex items-center"
                  style={{ backgroundImage: `url('${image.url}')` }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        Kumaon Cancer Conclave 2025
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-white">
                       Cutting Edge to Real World
                      </p>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg text-white">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-6 h-6" />
                          <span>March 8, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-6 h-6" />
                          <span> Ramnagar Nainital</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-6 h-6" />
                          <span>100+ Attendees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)} />
          <CarouselNext className="right-4" onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)} />
        </Carousel>
      </div>

      {/* Scrolling Announcements */}
      <div className="bg-primary text-white py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap inline-block">
  <span className="mx-8">•</span>
  {[...announcements, ...announcements].map((announcement, index) => (
    <span key={index} className="mx-8">
      {announcement}
    </span>
  ))}
</div>

</div>


     

      {/* Conference Invitation */}
      <div className="flex justify-center bg-gray-100 min-h-screen px-4">
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-6xl w-full">    
          <h2 className="text-xl font-semibold text-blue-600 mb-4"> Dear Friends,</h2>

          <p className="text-gray-700">
           
           
          </p>
          
          <p className="text-gray-700">
            With immense pleasure, we would like to invite you for the Conference – 
            <span className="font-semibold"> “KUMAON CANCER CONCLAVE 2025” </span> 
            (Cutting Edge to Real World) to be held on 
            <span className="font-semibold"> Saturday, 8th March 2025 </span> 
            at Hotel Manu Maharani, Ramnagar Nainital.
          </p>

        

          <p className="text-gray-700 mt-2">
            The Conference will be organized under the aegis of 
            <span className="font-semibold"> "ONCO IMAGING AND THERAPEUTICS INDIA". </span>
           The conference will focus on translating the latest advancements in oncology into real-world clinical applications. It will feature insightful discussions, expert-led sessions, and interactive workshops, making it a valuable learning opportunity for students, researchers, and academicians alike.
          </p>

          <p className="text-gray-600 italic mt-2">
          Our goal is to foster 
          <span className="font-semibold"> collaboration, innovation, and impactful change in cancer care, equipping participants with enhanced knowledge and tools to improve patient outcomes.</span>
          </p>

          <p className="text-gray-700 mt-2">
          Nestled in the picturesque Kumaon region, Ramnagar, Nainital, offers a perfect blend of scientific engagement and natural tranquility. Known for its serene landscapes, rich biodiversity, and historical significance, the location provides an inspiring environment to learn, collaborate, and reflect.
          </p>

          <p className="text-gray-700 mt-2">
          This joint collaborative conference offers industry leaders a platform to showcase innovations, connect with experts, and shape the future of cancer treatment.  <span className="font-semibold">Ujala Cygnus Hospital ,</span>joins as our  <span className="font-semibold"> Academic Partner </span> with  <span className="font-semibold"> AMD Global Net Pvt. Ltd. </span> as the official event coordinator for a seamless experience.
           
          </p>

          <p className="text-gray-700 mt-2">
          We look forward to your valuable support and participation in making this conference a resounding success. For further details, please feel free to reach out.
          </p>

          <div className="mt-4 text-center md:text-left">
  <p className="text-gray-700 font-medium">Thank You!</p>
  <p className="text-gray-700">Warm Regards,</p>
</div>



          <div className="flex flex-col md:flex-row items-center md:justify-between relative md:top-[-20px] space-y-4 md:space-y-0">
  <div className="flex-1 text-center md:text-left">
    <p className="text-gray-900 font-medium text-lg">Dr. Shalabh Arora</p>
    <p className="text-gray-700">Program - Convener</p>
    <p className="text-gray-700">Cancer Specialist</p>
    <p className="text-gray-700">Ujala Cygnus Central Hospital</p>
    <p className="text-gray-700">Haldwani, Uttarakhand - 262139</p>
    <p className="text-gray-700 font-medium">Ph. 7418385321</p>
  </div>
  <div className="flex-shrink-0">
    <img src="/doc-img/shalabh.png" alt="Dr. Shalabh Arora" className="h-40 w-auto md:h-56 rounded-lg" />
  </div>
</div>


      </div>
    </div>
    <div>
      <PartnersCarousel />
    </div>
    <motion.div 
      className="w-screen h-screen flex justify-center items-center bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        controls
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <source src="/KUMAON CANCER CONCLAVE 2025 (1).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>
    </motion.div>
  </div>
  );
};

export default Index;
