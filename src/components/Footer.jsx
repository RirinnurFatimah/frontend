import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#71C9CD] text-green-900 w-full px-4 py-6">
      {/* Container dengan lebar maksimum yang sedang */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-4">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-base font-bold tracking-wide">NUTRIVISION</h1>
          <p className="text-xs tracking-widest mt-1">SCAN YOUR FOOD</p>
          <p className="text-xs tracking-widest">SHAPE YOUR HEALTH</p>
          <div className="flex justify-center md:justify-start space-x-3 mt-3 text-green-900">
            <a href="https://www.instagram.com/teamnutrivision?igsh=MXRkczhucW9uNzJtZg==" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="mailto:teamnutrivision@gmail.com" aria-label="Email"><FaEnvelope size={18} /></a>
          </div>
        </div>

        {/* Center Section */}
        <div className="mb-2 md:mb-0 flex justify-center">
          <p className="text-black font-semibold text-center text-sm leading-tight">
            CREATED BY <span className="text-green-800 font-medium">NUTRIVISION TEAM</span>
          </p>
        </div>

        {/* Right Section kosong untuk spacing */}
        <div></div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-xs text-black max-w-4xl mx-auto tracking-tight">
        © 2025 Nutrivision by Team CC25-CF220. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
