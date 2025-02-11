
import { Mail, Phone, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2">
                <Mail size={18} />
                contact@medconf2024.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <Globe size={18} />
                www.medconf2024.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/registration" className="hover:text-primary-light">
                  Register Now
                </a>
              </li>
              <li>
                <a href="/program" className="hover:text-primary-light">
                  Conference Program
                </a>
              </li>
              <li>
                <a href="/faculty" className="hover:text-primary-light">
                  Meet Our Speakers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Partners</h3>
            <div className="flex flex-col space-y-4">
              <a href="https://partner1.com" target="_blank" rel="noopener noreferrer" className="block w-40 h-20">
                <img src="/plogo1.png" alt="Partner 1" className="w-full h-full object-contain" />
              </a>
              <a href="https://partner2.com" target="_blank" rel="noopener noreferrer" className="block w-40 h-20">
                <img src="/plogo2.jpeg" alt="Partner 2" className="w-full h-full object-contain" />
              </a>
              <a href="https://partner3.com" target="_blank" rel="noopener noreferrer" className="block w-40 h-20">
                <img src="/path-to-logo3.png" alt="Partner 3" className="w-full h-full object-contain" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-light/30 text-center">
          <p>© 2024 Medical Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
