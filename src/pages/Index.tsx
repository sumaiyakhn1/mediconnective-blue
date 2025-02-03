import { Calendar, MapPin, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      alt: "Conference collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Medical presentation",
    },
    {
      url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Technology in medicine",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Modern medical technology",
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Medical Conference 2024
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Advancing Healthcare Through Innovation
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg mb-8">
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
            
            {/* Carousel Section */}
            <div className="max-w-4xl mx-auto">
              <Carousel className="w-full">
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="relative aspect-video overflow-hidden rounded-xl">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-primary">About</h2>
            <p className="text-secondary">
              Join us for three days of cutting-edge medical research, networking
              opportunities, and hands-on workshops led by world-renowned experts.
            </p>
          </div>

          {/* Highlights Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-primary">Highlights</h2>
            <ul className="list-disc list-inside text-secondary">
              <li>50+ Expert Speakers</li>
              <li>Interactive Workshops</li>
              <li>Networking Events</li>
              <li>Latest Medical Research</li>
            </ul>
          </div>

          {/* Registration Section */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-primary">Register Now</h2>
            <p className="text-secondary mb-4">
              Early bird registration is now open with special pricing available
              until March 31st.
            </p>
            <a
              href="/registration"
              className="inline-block bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors duration-200"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;