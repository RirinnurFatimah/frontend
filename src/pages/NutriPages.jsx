import React, { useEffect, useState } from 'react';
import NutriPagePresenter from '../presenter/NutriPagesPresenter';
import Navbar from '../components/navbar';
import Footer from '../components/Footer'; 

const NutriPage = () => {
  const [food, setFood] = useState({ name: '', nutrition: '' });

  useEffect(() => {
    const foodData = NutriPagePresenter.getFoodData();
    setFood(foodData);
  }, []);

  return (
    <div className="min-h-screen bg-[#A6E3E8] flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-xl p-6 shadow-lg border border-green-600">
        <div className="w-full h-48 bg-gray-200 rounded-md mb-6 flex items-center justify-center">
          <span className="text-gray-500">[ Gambar Makanan ]</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{food.name || 'Nama Makanan'}</h2>
        <h3 className="font-semibold mb-1">Kandungan Nutrisi :</h3>
        <p className="text-gray-700 text-justify whitespace-pre-line">
          {food.nutrition || 'Tidak ada data nutrisi tersedia.'}
        </p>
      </div>

      <footer className="mt-12 w-full bg-[#89CFF3] py-4 text-center text-sm text-gray-800">
        <div className="font-semibold">
          CREATED BY <span className="text-green-700">NUTRIVISION</span> <span className="font-bold">TEAM</span>
        </div>
        <div className="text-xs mt-1">© 2025 NutriVision by Team CC25-C7236. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default NutriPage;
