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
                amdglobalnet@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18} />
                +91 9319311009
              </p>
              <p className="flex items-center gap-2">
                <Globe size={18} />
                www.amdglobalnet.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/Registration" className="hover:text-primary-light">
                  Register Now
                </a>
              </li>
              <li>
                <a href="/Program" className="hover:text-primary-light">
                  Conference Program
                </a>
              </li>
              <li>
                <a href="/Faculty" className="hover:text-primary-light">
                  Meet Our Speakers
                </a>
              </li>
            </ul>
          </div>
          <div>
          
  <h3 className="text-xl font-semibold mb-4">Partners</h3>
  <div className="flex flex-col items-center space-y-2 mr-20">
    {/* First logo full-width */}
    <a href="https://ujalacygnus.com/" target="_blank" rel="noopener noreferrer">
      <img src="/plogo1.png" alt="Partner 1" className="h-12 w-auto mr-20" />
    </a>

    {/* Last two logos in a row */}
    <div className="flex space-x-4 mr-20">
      <a href="https://amdglobalnet.com/" target="_blank" rel="noopener noreferrer">
        <img src="/plogo2.jpeg" alt="Partner 2" className="h-12 w-25" />
      </a>
      <a href="https://oncoimaging.in/index.html#slider" target="_blank" rel="noopener noreferrer">
        <img src="/logo.png" alt="Partner 3" className="h-12 w-17" />
      </a>
    </div>
  </div>
</div>




          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-light/30 text-center">
          <p>© 2024 Medical Conference. All rights reserved.</p>
        </div>
     
    </footer>
  );
};

export default Footer;