import React from 'react';
import { FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#71C9CD] text-green-900 w-full px-6 py-6">
      {/* Kontainer utama */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Kiri - Logo dan ikon */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-base font-bold tracking-wide">NUTRIVISION</h1>
          <p className="text-xs tracking-widest mt-1">SCAN YOUR FOOD</p>
          <p className="text-xs tracking-widest">SHAPE YOUR HEALTH</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" aria-label="Instagram"><FaInstagram size={16} /></a>
            <a href="#" aria-label="Email"><FaEnvelope size={16} /></a>
          </div>
        </div>

        {/* Tengah - Teks pembuat */}
        <div className="text-center">
          <p className="text-black font-bold text-sm">
            CREATED BY <span className="text-green-800 font-bold">NUTRIVISION TEAM</span>
          </p>
        </div>
      </div>

      {/* Bawah - Teks hak cipta */}
      <div className="mt-4 text-center text-xs text-black tracking-tight">
        © 2025 Nutrivision by Team CC25-CF220. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
