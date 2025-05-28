import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#a0e3f0] px-4 py-10">
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 order-1 md:order-2">
        <img
          src="/src/assets/LOGO1.png"
          alt="Nutrivision Logo"
          className="w-[250px] md:w-[350px] h-auto object-contain"
        />
      </div>

      {/* Form Login */}
      <div className="w-full md:w-1/2 px-6 md:px-16 order-2 md:order-1">
        <h2 className="text-3xl font-bold mb-2 text-gray-800 text-center md:text-left">
          WELCOME TO <span className="text-green-700">NUTRIVISION</span>
        </h2>
        <p className="text-gray-700 text-lg text-center md:text-left">Scan Your Food, Shape Your Health</p>
        <p className="text-sm text-gray-800 font-semibold mt-2 mb-6 text-center md:text-left">Login to your account</p>

        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1 font-medium text-gray-800">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-medium text-gray-800">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md transition"
          >
            Sign In
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 border border-green-600 text-green-800 py-2 rounded-md hover:bg-green-100 transition"
          >
            Masuk Dengan Google <FcGoogle size={20} />
          </button>

          <div className="text-right">
            <Link to="/forgot-password" className="text-sm text-blue-700 hover:underline">
              Forgot password?
            </Link>
          </div>
        </form>

        <p className="mt-6 text-sm text-center">
          Not a member?{' '}
          <Link to="/register" className="text-blue-800 font-semibold hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
