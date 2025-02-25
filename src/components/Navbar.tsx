import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Faculty", path: "/faculty" },
  { name: "Program", path: "/program" },
  { name: "Registration", path: "/registration" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    
     
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="w-full bg-gray-800 text-white py-1 text-center text-sm">
        Contact Us At amdglobalnet@gmail.com
        {/* Saturday, 8th March 2025 at Hotel Manu Maharani, Ramnagar Nainital. */}
        {/* Kumaon Cancer Conclave 2025 */}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          
  <Link to="/">
  <span className="text-lg font-semibold text-blue-900">Kumaon Cancer Conclave 2025</span>  </Link>
</div>
          
        


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-secondary hover:text-primary"
                } transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "text-primary bg-primary-light"
                    : "text-secondary hover:text-primary hover:bg-gray-50"
                } block px-3 py-2 rounded-md text-base`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;