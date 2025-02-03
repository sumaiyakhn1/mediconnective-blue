import { Calendar, MapPin, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Medical Conference 2024
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Advancing Healthcare Through Innovation
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
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