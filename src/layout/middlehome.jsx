import React from 'react';
import Logo from '../assets/logo.jpg';

const MiddleHome = () => {
  const features = [
    {
      img: Logo,
      text: 'Banyak orang kesulitan mengatur asupan nutrisi harian secara efektif.',
    },
    {
      img: Logo,
      text: 'Informasi gizi pada makanan kemasan sering kali tidak jelas atau membingungkan.',
    },
    {
      img: Logo,
      text: 'Sulit menentukan porsi makan yang sesuai dengan tujuan—baik itu menurunkan berat badan, menjaga, atau menambah massa tubuh.',
    },
  ];

  return (
    <section className="bg-[#C7ECEE] py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Mengapa <span className="text-[#85C125]">NUTRIVISION</span> ?
      </h2>

      <div className="grid md:grid-cols-3 gap-12 mb-12 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={`Illustration ${index + 1}`}
              className="w-48 h-48 object-contain rounded-full mb-6"
            />
            <p className="text-gray-800 text-sm md:text-base max-w-xs">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Bagaimana <span className="text-[#85C125]">NUTRIVISION</span> Memnbantu kamu?
      </h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={item.img}
              alt={`Illustration ${index + 1}`}
              className="w-48 h-48 object-contain rounded-full mb-6"
            />
            <p className="text-gray-800 text-sm md:text-base max-w-xs">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiddleHome;
