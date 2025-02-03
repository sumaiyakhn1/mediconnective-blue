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
      url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&fit=crop",
      alt: "Medical conference hall"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&fit=crop",
      alt: "Medical professionals collaborating"
    },
    {
      url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1491&fit=crop",
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
                        Medical Conference 2024
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-white">
                        Advancing Healthcare Through Innovation
                      </p>
                      <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg text-white">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-6 h-6" />
                          <span>June 15-17, 2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-6 h-6" />
                          <span>San Francisco, CA</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-6 h-6" />
                          <span>500+ Attendees</span>
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

      {/* Main Content */}
      // ... keep existing code (grid sections with about, highlights, and registration)
    </div>
  );
};

export default Index;