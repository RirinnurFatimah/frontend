import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#b2e3ea] flex flex-col items-center justify-between text-gray-800">
      {/* Konten Utama */}
      <div className="max-w-6xl mx-auto p-6 pt-12 flex flex-col lg:flex-row items-center gap-12">
        {/* Gambar */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/src/assets/Nutrivision.jpg"
            alt="Healthy Food"
            className="rounded-3xl w-[280px] lg:w-[350px] object-contain"
          />
        </div>

        {/* Teks */}
        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
          <h1 className="text-3xl font-bold">
            WELCOME TO <span className="text-green-700">NUTRIVISION</span>
          </h1>
          <p className="text-lg font-semibold mt-4">
            Scan Your Food, Shape Your Health
          </p>
          <p className="text-justify leading-relaxed mt-4">
            Nutrivision adalah platform cerdas yang membantu pengguna mengelola asupan nutrisi secara praktis
            melalui pemindaian makanan dengan foto atau barcode. Dengan teknologi machine learning,
            Nutrivision menganalisis kebutuhan gizi harian berdasarkan data pribadi pengguna dan memberikan
            rekomendasi nutrisi yang sesuai untuk mendukung tujuan diet seperti menurunkan, menjaga, atau
            menambah berat badan.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-10 space-y-4">
        <h2 className="text-xl font-semibold">
          Mulai hidup sehatmu sekarang bersama <span className="text-green-700 font-bold">NUTRIVISION</span>!
        </h2>
        <Link to="/login">
          <button className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">
            Get Started
          </button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="bg-[#a5d8e0] w-full text-center py-4 text-sm">
        <div className="font-semibold text-gray-800">
          CREATED BY <span className="text-green-800">NUTRIVISION TEAM</span>
        </div>
        <div className="mt-1 text-gray-700">
          © 2025 Nutrivision by Team CC25–CF220. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Landing;
