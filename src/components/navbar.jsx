import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import Sidebar from '../layout/Sidebar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="bg-[#71C9CD] shadow-md px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2 text-sm font-semibold text-[#2e5e1f] uppercase">
          <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <span>NutriVision</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white font-medium tracking-wide ml-auto items-center">
          <li><Link to="/" className="hover:text-green-200">Home</Link></li>
          <li><Link to="/scanner" className="hover:text-green-200">Scanner</Link></li>
          <li><Link to="/BodyTrack" className="hover:text-green-200">BodyTrack</Link></li>
          <li><Link to="/NutriTrack" className="hover:text-green-200">NutriTrack</Link></li>
          <li><Link to="/AboutTeam" className="hover:text-green-200">AboutTeam</Link></li>
        </ul>

        {/* Account Icon */}
        <div className="hidden md:flex items-center space-x-4 text-white ml-6">
          <FaUserCircle
            size={24}
            className="cursor-pointer hover:text-green-200"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
              <li><Link to="/" onClick={closeMenu} className="hover:text-green-600">Home</Link></li>
              <li><Link to="/scanner" onClick={closeMenu} className="hover:text-green-600">Scanner</Link></li>
              <li><Link to="/BodyTrack" onClick={closeMenu} className="hover:text-green-600">BodyTrack</Link></li>
              <li><Link to="/NutriTrack" onClick={closeMenu} className="hover:text-green-600">NutriTrack</Link></li>
              <li><Link to="/AboutTeam" onClick={closeMenu} className="hover:text-green-600">AboutTeam</Link></li>
              <li><Link to="/login" onClick={closeMenu} className="hover:text-green-600 ml-6">Profile</Link></li>
            </ul>
          </div>

          
        )}
      </nav>

      {/* ✅ Sidebar harus di dalam fungsi komponen */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;
