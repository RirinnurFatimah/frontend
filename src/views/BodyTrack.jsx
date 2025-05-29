import React, { useState } from 'react';
import { processBodyData } from '../presenter/BodyTrackPresenter';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const BodyTrack = () => {
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    gender: '',
    activityLevel: 1,
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleActivityChange = (e) => {
    setFormData({ ...formData, activityLevel: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedData = {
      ...formData,
      age: Number(formData.age),
      height: Number(formData.height),
      weight: Number(formData.weight),
    };
    const resultData = processBodyData(parsedData);
    setResult(resultData);
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-[#A6E3E8] mt-14 py-6 px-4">
      <h1 className="text-2xl font-extrabold text-center mt-4 mb-2 text-black">TRACK YOUR BODY HERE</h1>
      <p className="text-center font-bold text-sm text-black max-w-xl mx-auto mb-2">
        Masukkan data tubuhmu seperti berat badan, tinggi badan, usia, dan jenis kelamin untuk mengetahui status kesehatanmu — apakah kamu berada dalam kategori ideal, underweight, overweight, atau obesitas.
      </p>
      <p className="text-center text-sm text-gray-600 mb-6">
        Dari sini, kamu bisa mulai perjalanan menuju tubuh yang lebih sehat dan seimbang!
      </p>

      <div className="min-h-screen bg-[#A6E3E8] flex items-center justify-center py-12">
        <div className="bg-white max-w-xl w-full p-8 rounded-3xl shadow-lg">
          <h2 className="text-center text-2xl font-semibold mb-6 text-[#2F4F4F]">Input Your Body Track</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
            <input
              type="number"
              name="age"
              placeholder="Umur"
              value={formData.age}
              onChange={handleChange}
              className="bg-[#DDF7FA] p-2 rounded-md focus:outline-none"
            />
            <input
              type="number"
              name="height"
              placeholder="Tinggi Badan"
              value={formData.height}
              onChange={handleChange}
              className="bg-[#DDF7FA] p-2 rounded-md focus:outline-none"
            />
            <input
              type="number"
              name="weight"
              placeholder="Berat Badan"
              value={formData.weight}
              onChange={handleChange}
              className="bg-[#DDF7FA] p-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              className="bg-[#DDF7FA] p-2 rounded-md focus:outline-none"
            />

            <div>
              <label className="block text-center font-medium text-sm mb-1 mt-3">Level Aktifitas</label>
              <input
                type="range"
                name="activityLevel"
                min="1"
                max="4"
                value={formData.activityLevel}
                onChange={handleActivityChange}
                className="w-full accent-cyan-600"
              />
            </div>

            <div className="bg-[#DDF7FA] border border-[#BEE3E8] p-4 text-sm rounded-md">
              <p className="mb-2 font-medium text-center">Panduan Pemilihan Level Aktivitas</p>
              <ul className="list-decimal list-inside space-y-1 text-justify">
                <li>Level 1 = Aktivitas fisik sangat rendah (gaya hidup sangat sedentari, jarang bergerak)</li>
                <li>Level 2 = Aktivitas fisik rendah (sedikit bergerak, aktivitas ringan)</li>
                <li>Level 3 = Aktivitas fisik sedang (olahraga ringan–sedang beberapa kali seminggu)</li>
                <li>Level 4 = Aktivitas fisik tinggi (rutin berolahraga intens atau pekerjaan fisik berat)</li>
              </ul>
            </div>

            <button type="submit" className="bg-[#215732] hover:bg-[#1b4728] text-white font-semibold py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>


      {/* Result Box (DI LUAR FORM) */}
      <div className="bg-blue-50 border border-blue-200 p-4 rounded-md shadow-inner mt-6 max-w-xl mx-auto min-h-[100px]">
        <h3 className="font-semibold text-teal-800 text-lg mb-2">Result</h3>
        {result ? (
          <>
            <p className="text-sm">BMI: <span className="font-semibold">{result.bmi}</span></p>
            <p className="text-sm">Kategori: <span className="font-semibold">{result.category}</span></p>
          </>
        ) : (
          <p className="text-gray-500 text-sm italic">Hasil akan ditampilkan di sini setelah kamu submit.</p>
        )}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default BodyTrack;
