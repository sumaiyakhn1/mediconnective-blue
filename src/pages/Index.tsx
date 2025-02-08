import { Calendar, MapPin, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const Index = () => {
  const images = [
    {
      url: "/1200px-Panchachuli_peaks.jpg",
      alt: "Medical conference hall"
    },
    {
      url: "/img3.jpg",
      alt: "Medical professionals collaborating"
    },
    {
      url: "/img2.jpeg",
      alt: "Modern medical technology"
    }
  ];

  const announcements = [
    "Session 1: Breast Cancer",
    "Session 2: Lung Cancer",
    "Session 3: Gastrointestial Oncology",
    "Session 4: Gyne Oncology/Genitourinary",
    "Session 5: Hematology",
  ];

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date('2025-03-08').getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div 
                  className="relative bg-cover bg-center min-h-[60vh] flex items-center"
                  style={{
                    backgroundImage: `url('${image.url}')`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                  
                  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
                        Kumaon Cancer Conclave 2025
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-white">
                        Advancing Healthcare Through Innovation
                      </p>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg text-white">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-6 h-6" />
                          <span>March 8, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-6 h-6" />
                          <span> Ramnagar Nainital.</span>
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
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      {/* Marquee Section */}
      <div className="bg-primary text-white py-3 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap inline-block">
          {[...announcements, ...announcements].map((announcement, index) => (
            <span key={index} className="mx-8">
              {announcement} •
            </span>
          ))}
        </div>
      </div>

      {/* Countdown Section */}
      <div className="py-8 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div 
                key={unit}
                className="bg-white/50 backdrop-blur px-6 py-3 rounded-lg shadow-sm flex items-center gap-2"
              >
                <span className="text-2xl font-bold text-primary">{value}</span>
                <span className="text-sm text-gray-600 capitalize">{unit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

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
          This conference is organized under the <span className="font-semibold"> aegis of Onco Imaging and Therapeutics India </span>and aims to bring together Medical, Radiation, and Surgical Oncologists, Hematologists, and other healthcare professionals.
          </p>

          <p className="text-gray-700 mt-2">
            The Conference will be organized under the aegis of 
            <span className="font-semibold"> "ONCO IMAGING AND THERAPEUTICS INDIA". </span>
           the conference will focus on translating the latest advancements in oncology into real-world clinical applications. It will feature insightful discussions, expert-led sessions, and interactive workshops, making it a valuable learning opportunity for students, researchers, and academicians alike.
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

          <p className="text-gray-700 mt-4">Thank You!</p>
          <p className="text-gray-700">Warm Regards,</p>
          <div className="flex items-center justify-between">
          <div>
          <div className="ml-4">
            <img src="/shalabh.png" alt="MedConf 2024 Logo" className="h-40 w-auto" />
          </div>
            <p className="text-gray-900 font-medium">Dr. Shalabh Arora</p>
            
            <p className="text-gray-700">Program - Convener</p>
            <p className="text-gray-700">Cancer Specialist</p>
            <p className="text-gray-700">Ujala Cygnus Central Hospital</p>
            <p className="text-gray-700">Haldwani, Uttarakhand - 262139</p>
            <p className="text-gray-700">Ph. 7418385321</p>
          </div>
          <div className="ml-4">
           
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Index;
