import React, { useState } from 'react';
import { processBodyData } from '../presenter/BodyTrackPresenter';
import Navbar from '../components/navbar';

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
    <div className="min-h-screen bg-cyan-100 py-6 px-4">
      <h1 className="text-2xl font-bold text-center mb-2 text-teal-900">TRACK YOUR BODY HERE</h1>
      <p className="text-center text-sm text-gray-700 max-w-xl mx-auto mb-2">
        Masukkan data tubuhmu seperti berat badan, tinggi badan, usia, dan jenis kelamin untuk mengetahui status kesehatanmu — apakah kamu berada dalam kategori ideal, underweight, overweight, atau obesitas.
      </p>
      <p className="text-center text-sm text-gray-600 mb-6">
        Dari sini, kamu bisa mulai perjalanan menuju tubuh yang lebih sehat dan seimbang!
      </p>

      {/* Form Box */}
      <div className="bg-white max-w-xl mx-auto p-6 rounded-xl shadow-md">
        <h2 className="text-center font-semibold text-lg mb-4">Input Your Body Track</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="number"
            name="age"
            placeholder="Umur"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            name="height"
            placeholder="Tinggi Badan"
            value={formData.height}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            name="weight"
            placeholder="Berat Badan"
            value={formData.weight}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="gender"
            placeholder="Gender"
            value={formData.gender}
            onChange={handleChange}
            className="border p-2 rounded-md"
          />

          <label className="mt-2 text-sm font-semibold">Level Aktivitas</label>
          <input
            type="range"
            name="activityLevel"
            min="1"
            max="4"
            value={formData.activityLevel}
            onChange={handleActivityChange}
            className="accent-cyan-600"
          />

          <div className="bg-cyan-50 p-3 text-sm rounded-md border border-cyan-200">
            <p className="mb-1 font-medium">Panduan Pemilihan Level Aktivitas</p>
            <ul className="list-decimal list-inside space-y-1">
              <li>Level 1 = Aktivitas fisik sangat rendah (gaya hidup sangat sedentari, jarang bergerak)</li>
              <li>Level 2 = Aktivitas fisik rendah (sedikit bergerak, aktivitas ringan)</li>
              <li>Level 3 = Aktivitas fisik sedang (olahraga ringan–sedang beberapa kali seminggu)</li>
              <li>Level 4 = Aktivitas fisik tinggi (rutin berolahraga intens atau pekerjaan fisik berat)</li>
            </ul>
          </div>

          <button type="submit" className="bg-black text-white py-2 px-4 rounded-md mt-4">
            Submit
          </button>
        </form>
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
    </>
  );
};

export default BodyTrack;
