import React from 'react'
import ScanHome from '../layout/scan_home';
import logo from '../assets/logo2.jpg';
const Home = () => {
  return (
    <>
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#A6E3E8] px-6 py-12 gap-12">
      {/* Kiri - Logo */}
      <div className="flex justify-center md:w-1/2">
        <div className="bg-[#71C9CD] p-6 rounded-xl shadow-md">
          <img src={logo} alt="NutriVision Logo" className="w-48 md:w-64" />
        </div>
      </div>


      {/* Kanan - Teks dan Tombol */}
      <div className="flex flex-col items-center text-center md:text-right md:w-1/2 space-y-4 md:pr-20 lg:pr-20">
        <h1 className="text-7xl md:text-8xl font-extrabold text-[#85C125] ">NutriVision</h1>
        <p className="text-5xl font-bold text-black mb-6">Scan Your Food, Shape Your Health</p>
        <p className="text-3xl font-medium text-gray-700 mb-8">
          Take control of your nutrition with smart and personalized guidance.
        </p>
        <a href="#scanhome" className="mt-4 px-6 py-3 bg-black text-white font-bold rounded-xl text-lg hover:bg-[#3b4160] transition duration-200 mx-auto">
          Get Started
        </a>
      </div>
    </section>

    <ScanHome />
    </>
  )
}

export default Home
