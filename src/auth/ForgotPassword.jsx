import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Logo from '../assets/LOGO1.png';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigate = useNavigate(); // Hook navigate

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, username, newPassword });
    // Bisa ditambah logic reset password di sini
  };

  // Fungsi untuk tombol Cancel
  const handleCancel = () => {
    navigate('/login'); 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#A6E3E8] px-6 py-12">
      <div className="flex flex-col md:flex-row w-full max-w-5xl items-center justify-center gap-8">
        
        {/* Left Side: Logo + Text */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center">
          <img
            src={Logo}
            alt="Nutrivision Logo"
            className="w-[250px] md:w-[350px] h-auto object-contain"
          />
          <h1 className="text-green-800 font-bold text-xl mt-4">NUTRIVISION</h1>
          <p className="text-sm text-gray-700 mt-2">
            SCAN YOUR FOOD <br /> SHAPE YOUR HEALTH
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center md:text-left">
            WELCOME TO <span className="text-green-700">NUTRIVISION</span>
          </h2>
          <p className="text-gray-700 text-sm mb-4 text-center md:text-left">
            Scan Your Food, Shape Your Health
          </p>
          <p className="text-sm text-gray-900 font-medium mb-6 text-center md:text-left">
            Forgot Your Password?
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <div className="flex justify-between items-center pt-2">
              <button
                type="button"
                onClick={handleCancel}  
                className="px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 font-semibold transition"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
