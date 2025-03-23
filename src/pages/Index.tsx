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
                          <span> Ramnagar, Nainital</span>
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
          
          
      <p>
        On behalf of the organizing team, we extend our heartfelt gratitude for your invaluable support and participation in the conference <strong>"Kumaon Cancer Conclave 2025."</strong> Your enthusiasm and contributions helped make this event a resounding success.
      </p>
      <p className="mt-4">
        Your presence added immense value to our discussions, expert-led sessions, and interactive workshops, fostering collaboration, innovation, and meaningful change in cancer care. We truly appreciate your engagement in translating the latest advancements in oncology into real-world clinical applications.
      </p>
      <p className="mt-4">
        Set against the serene backdrop of <strong>Ramnagar, Nainital,</strong> this conference would not have been as impactful without your involvement. We are especially grateful to <strong>Ujala Cygnus Hospital</strong> for joining as our Academic Partner and <strong>AMD Global Net Pvt. Ltd.</strong> for their seamless event coordination.
      </p>
      <p className="mt-4">
        Thank you for being a part of this journey toward <strong>shaping the future of cancer treatment.</strong> We look forward to staying connected and working together in future endeavors.
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
    <div>
    <motion.div 
  className="relative w-full h-screen overflow-hidden"
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
  >
    <source src="/KUMAON CANCER CONCLAVE 2025 (1).mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </motion.video>
</motion.div>

    </div>
  </div>
  );
};

export default Index;
