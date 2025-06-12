
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';
import Logo from '../assets/logo.jpg';
import Sidebar from '../layout/Sidebar';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path) =>
    location.pathname === path
      ? 'text-green-200 border-b-2 border-green-200 font-bold scale-105 transition-transform duration-200'
      : 'text-white hover:text-green-100';

  return (
    <>
      {/* Navbar Utama */}
      <nav className="bg-[#71C9CD] shadow-md px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
        {/* Logo dan Judul */}
        <div className="flex items-center space-x-2 text-sm font-extrabold text-[#2e5e1f] uppercase">
          <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full" />
          <span>NutriVision</span>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 font-medium tracking-wide ml-auto items-center">
          <li><Link to="/home" className={isActive('/home')}>Home</Link></li>
          <li><Link to="/scanner" className={isActive('/scanner')}>Scanner</Link></li>
          <li><Link to="/BodyTrack" className={isActive('/BodyTrack')}>BodyTrack</Link></li>
          <li><Link to="/NutriTrack" className={isActive('/NutriTrack')}>NutriTrack</Link></li>
          <li><Link to="/about-team" className={isActive('/about-team')}>AboutTeam</Link></li>
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-64 h-full bg-[#71C9CD] text-white z-40 p-6 md:hidden shadow-lg transition-transform duration-300 ease-in-out">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center space-x-2 text-sm font-semibold text-[#2e5e1f] uppercase">
                <img src={Logo} alt="Logo" className="h-8 w-8 rounded-full" />
                <span>NutriVision</span>
              </div>
              <FaTimes size={24} className="cursor-pointer" onClick={closeMenu} />
            </div>
            <ul className="flex flex-col items-center space-y-5 font-medium">
              <li><Link to="/home" onClick={closeMenu} className={isActive('/home')}>Home</Link></li>
              <li><Link to="/scanner" onClick={closeMenu} className={isActive('/scanner')}>Scanner</Link></li>
              <li><Link to="/BodyTrack" onClick={closeMenu} className={isActive('/BodyTrack')}>BodyTrack</Link></li>
              <li><Link to="/NutriTrack" onClick={closeMenu} className={isActive('/NutriTrack')}>NutriTrack</Link></li>
              <li><Link to="/about-team" onClick={closeMenu} className={isActive('/about-team')}>AboutTeam</Link></li>
            <li>
                <button
                  onClick={() => {
                    closeMenu();
                    setIsSidebarOpen(true);
                  }}
                  className="flex items-center space-x-2 text-green-700 hover:text-green-800"
                >
                  <FaUserCircle size={20} />
                  <span>Profile</span>
                </button>
              </li>
            </ul>
          </div>
        )}

      </nav>

      {/* Sidebar Profile */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Navbar;

