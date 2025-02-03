import { Calendar, MapPin, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const images = [
    {
      url: "/1200px-Panchachuli_peaks.jpg",
      alt: "Medical conference hall"
    },
    {
      url: "/Kumaon.jpg",
      alt: "Medical professionals collaborating"
    },
    {
      url: "/kumaon2.jpg",
      alt: "Modern medical technology"
    }
  ];

  const announcements = [
    "Early bird registration now open! Save 20% until March 31st",
    "50+ Expert Speakers Confirmed",
    "New Workshop: Advanced Surgical Techniques",
    "Special Panel on Healthcare Innovation",
    "Networking Dinner on June 15th"
  ];

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
                  {/* Dark overlay for better text readability */}
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


      <div className="flex justify-center bg-gray-100 min-h-screen px-4">
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 max-w-6xl w-full">    
  <h2 className="text-xl font-semibold text-blue-600 mb-4">Message from the Doctor</h2>

  <p className="text-gray-700">
   
    <span className="font-semibold"> Dear Pharma Associates,</span> 
    
  </p>
  
  <p className="text-gray-700">
    With immense pleasure, we would like to invite you for the Conference – 
    <span className="font-semibold"> “KUMAON CANCER CONCLAVE 2025” </span> 
    (Cutting Edge to Real World) to be held on 
    <span className="font-semibold"> Saturday, 8th March 2025 </span> 
    at Hotel Manu Maharani, Ramnagar Nainital.
  </p>

  <p className="text-gray-700 mt-2">
    This Conference is designed for Medical, Radiation, Surgical Oncologists, Hematologists, 
    and other healthcare professionals. We are expecting around 100+ participants across India. 
    This meeting will be a great learning opportunity for students, researchers, and academicians.
  </p>

  <p className="text-gray-700 mt-2">
    The Conference will be organized under the aegis of 
    <span className="font-semibold"> "ONCO IMAGING AND THERAPEUTICS INDIA". </span>
  </p>

  <p className="text-gray-600 italic mt-2">
    This is a multi-company sponsorship event.
  </p>

  <p className="text-gray-700 mt-2">
    We look forward to your earnest support to successfully drive this scientific conference. 
    Feel free to speak or write to us for any further information.
  </p>

  <p className="text-gray-700 mt-2">
    We have engaged <span className="font-semibold">AMD GLOBAL NET PVT. LTD</span> 
    as an Event Coordinator to drive the said event.
  </p>

  <p className="text-gray-700 mt-2">
    You are requested to kindly make payment as below.
  </p>

 

  <p className="text-gray-700 mt-4">Thank You!</p>
  <p className="text-gray-700">Warm Regards,</p>

  <div className="mt-2">
    <p className="text-gray-900 font-medium">Dr. Shalabh Arora</p>
    <p className="text-gray-700">Program - Convener</p>
    <p className="text-gray-700">Cancer Specialist</p>
    <p className="text-gray-700">Ujala Cygnus Central Hospital</p>
    <p className="text-gray-700">Haldwani, Uttarakhand - 262139</p>
    <p className="text-gray-700">Ph. 7418385321</p>
  </div>
</div>
</div>
</div>

  );
};

export default Index;