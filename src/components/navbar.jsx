import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/logo2.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#71C9CD] shadow-md px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2 text-xl font-bold text-[#85C125]">
        <img src={Logo} alt="" className="h-8 w-8" />
        <span>NutriVision</span>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-black font-medium">
        <li><Link to="/" className="hover:text-green-600">Home</Link></li>
        <li><Link to="/scanner" className="hover:text-green-600">Scanner</Link></li>
        <li><Link to="/ml1" className="hover:text-green-600">ML1</Link></li>
        <li><Link to="/ml2" className="hover:text-green-600">ML2</Link></li>
        <li><Link to="/login" className="hover:text-red-600">Logout</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden text-white" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-30 bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center py-4 space-y-4 text-gray-700 font-medium">
            <li><Link to="/" className="hover:text-green-600">Home</Link></li>
            <li><Link to="/scanner" onClick={closeMenu} className="hover:text-green-600">Scanner</Link></li>
            <li><Link to="/ml1" onClick={closeMenu} className="hover:text-green-600">ML1</Link></li>
            <li><Link to="/ml2" onClick={closeMenu} className="hover:text-green-600">ML2</Link></li>
            <li><Link to="/login" onClick={closeMenu} className="hover:text-red-600">Logout</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
