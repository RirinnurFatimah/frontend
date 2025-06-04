import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import Sidebar from '../layout/Sidebar';
import Footer from './Footer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar Utama */}
      <nav className="bg-[#71C9CD] shadow-md px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
        {/* Logo dan Judul */}
        <div className="flex items-center space-x-2 text-sm font-semibold text-[#2e5e1f] uppercase">
          <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <span>NutriVision</span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-white font-medium tracking-wide ml-auto items-center">
          <li><Link to="/" className="hover:text-green-200">Home</Link></li>
          <li><Link to="/scanner" className="hover:text-green-200">Scanner</Link></li>
          <li><Link to="/BodyTrack" className="hover:text-green-200">BodyTrack</Link></li>
          <li><Link to="/NutriTrack" className="hover:text-green-200">NutriTrack</Link></li>
          <li><Link to="/about-team" className="hover:text-green-200">AboutTeam</Link></li>
        </ul>

        {/* Icon Profile */}
        <div className="hidden md:flex items-center space-x-4 text-white ml-6">
          <FaUserCircle
            size={24}
            className="cursor-pointer hover:text-green-200"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </nav>

      {/* Mobile Sidebar - Kiri & Lebih Kecil */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-[#71C9CD] text-white z-40 p-6 md:hidden shadow-lg transition-transform duration-300 ease-in-out">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2 text-sm font-semibold text-[#2e5e1f] uppercase">
              <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full" />
              <span>NutriVision</span>
            </div>
            <FaTimes size={24} className="cursor-pointer" onClick={closeMenu} />
          </div>

          {/* Menu Items */}
          <ul className="flex flex-col space-y-4 text-base font-medium">
            <li><Link to="/" onClick={closeMenu} className="hover:text-green-200">Home</Link></li>
            <li><Link to="/scanner" onClick={closeMenu} className="hover:text-green-200">Scanner</Link></li>
            <li><Link to="/BodyTrack" onClick={closeMenu} className="hover:text-green-200">BodyTrack</Link></li>
            <li><Link to="/NutriTrack" onClick={closeMenu} className="hover:text-green-200">NutriTrack</Link></li>
            <li><Link to="/about-team" onClick={closeMenu} className="hover:text-green-200">AboutTeam</Link></li>
            <li><Link to="/login" onClick={closeMenu} className="hover:text-green-200">Profile</Link></li>
          </ul>
        </div>
      )}

      {/* Sidebar Profile */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
