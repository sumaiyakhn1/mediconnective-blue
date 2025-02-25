import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      {/* 3 Columns */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Column 1: Logo and Credit Points */}
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-2 mb- flex flex-col items-center md:items-start">
    {/* Image */}
    <img
      src="/kmc.png"
      alt="Medical Conference Logo"
      className="w-32 h-32 mb-4"
    />

    {/* Date and Venue */}
    <div className="text-center md:text-left mt-8">
      <p className="text-sm text-gray-400">
        Date: 8th March, 2025
      </p>
      <p className="text-sm text-gray-400">
        Venue: Hotel Manu Maharani, Ramnagar Nainital
      </p>
    </div>
    </div>

        {/* Column 2: Contact Us */}
        <div className='ml-20'>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400">Email:  amdglobalnet@gmail.com</p>
          <p className="text-sm text-gray-400">Phone: +91 9319311009</p>
          {/* <p className="text-sm text-gray-400">Address: 123 Medical St, Health City</p> */}
          <p className="text-sm text-gray-400">Website:  www.amdglobalnet.com</p>
        </div>

    

        {/* Column 3: Quick Links */}
        <div className='ml-20'>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/Registeration" className="text-sm text-gray-400 hover:text-white">
                Register here
              </a>
            </li>
            <li>
              <a href="/Program" className="text-sm text-gray-400 hover:text-white">
                Schedule
              </a>
            </li>
            <li>
              <a href="/Faculty" className="text-sm text-gray-400 hover:text-white">
                Faculty
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Partners Section */}
      <div className="container mx-auto border-t border-gray-700 pt-8 px-4">
      {/* Centered Heading */}
      <h3 className="text-lg font-semibold mb-8 text-center">Our Partners</h3>

      {/* Partner Logos */}
      <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
        {/* Partner 0 */}
        <div className="flex flex-col items-center text-center w-36 sm:w-auto">
          <a href="https://ukmedicalcouncil.org/" target="_blank" rel="noopener noreferrer">
            <img src="/plogo2.png" alt="Event Management Logo" className="w-20 h-20 mb-2" />
          </a>
          <p className="text-sm text-gray-400">Uttarakhand Medical Council</p>
          <p className="text-xs text-gray-500">Credited 3 hrs C.M.E. accreditation hour</p>
        </div>

        {/* Partner 1 */}
        <div className="flex flex-col items-center text-center w-36 sm:w-auto">
          <a href="https://ujalacygnus.com/" target="_blank" rel="noopener noreferrer">
            <img src="/plogo1.png" alt="Academic Partner 1" className="w-20 h-20 mb-2" />
          </a>
          <p className="text-sm text-gray-400">Ujala Cygnus Central Hospital Haldwani</p>
          <p className="text-xs text-gray-500">Academic Partner</p>
        </div>

        {/* Partner 2 */}
        <div className="flex flex-col items-center text-center w-36 sm:w-auto">
          <img src="/plogonco.png" alt="Academic Partner 2" className="w-20 h-20 mb-2" />
          <p className="text-sm text-gray-400">ONCO IMAGING AND THERAPEUTICS INDIA</p>
          <p className="text-xs text-gray-500">Academic Partner</p>
        </div>

        {/* Partner 3 */}
        <div className="flex flex-col items-center text-center w-36 sm:w-auto">
          <a href="https://www.amdglobalnet.com/" target="_blank" rel="noopener noreferrer">
            <img src="/logo.webp" alt="Event Management Logo" className="w-20 h-20 mb-2" />
          </a>
          <p className="text-sm text-gray-400">AMD Global Net</p>
          <p className="text-xs text-gray-500">Event Management</p>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;