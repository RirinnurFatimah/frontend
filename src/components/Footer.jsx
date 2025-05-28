import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#71C9CD] text-green-900 px-6 py-8">
      {/* Top Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-lg font-bold">NUTRIVISION</h1>
          <p className="text-xs tracking-widest">SCAN YOUR FOOD</p>
          <p className="text-xs tracking-widest">SHAPE YOUR HEALTH</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-green-900">
            <a href="#"><FaInstagram size={18} /></a>
            <a href="#"><FaEnvelope size={18} /></a>
          </div>
        </div>

        {/* Center Section */}
        <div className="mb-2 md:mb-0 flex justify-center">
          <p className="text-black font-bold text-center">
            CREATED BY <span className="text-green-800">NUTRIVISION TEAM</span>
          </p>
        </div>

        {/* Right Section (empty for spacing or future use) */}
        <div></div>
      </div>

      {/* Bottom Text */}
      <div className=" mb-2 text-center text-sm text-black">
        © 2025 Nutrivision by Team CC25-CF220. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
