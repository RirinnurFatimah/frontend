import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Close Button */}
      <div className="flex justify-end p-4">
        <button onClick={onClose}>
          <FaTimes size={24} className="text-gray-700 hover:text-red-500" />
        </button>
      </div>

      {/* Profile Content */}
      <div className="px-6 text-center">
        <h1 className="text-2xl font-bold text-green-800 mb-1">NUTRIVISION</h1>
        <p className="text-xs text-gray-500 mb-4 tracking-wide">SCAN YOUR FOOD — SHAPE YOUR HEALTH</p>
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="profile"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h2 className="font-semibold text-lg mb-1">Your Full Name</h2>

        <div className="text-left text-sm mt-4 space-y-2">
          <div>
            <p className="font-semibold">Username</p>
            <p className="text-gray-600">yourusername</p>
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-blue-500 underline">your@gmail.com</p>
          </div>
          <div>
            <p className="font-semibold">About Me</p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam...
            </p>
          </div>
        </div>

        <button className="mt-6 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
