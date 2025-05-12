import { Link } from 'react-router-dom';

const ScanHome = () => {
  return (
    <section id="scanhome" className="min-h-screen flex flex-col items-center justify-center bg-[#A6E3E8] text-center px-4 space-y-20">
      <h1 className="text-6xl md:text-7xl font-extrabold text-black ">
        Saatnya Peduli Dengan Apa Yang Kamu Konsumsi
      </h1>
      <Link
        to="/scanner"
        className="bg-gray-300 text-black px-6 py-3 rounded-xl text-lg font-bold hover:bg-[#6ca31f] transition duration-200"
      >
        Scan Makananmu Hari Ini
      </Link>
    </section>
  );
};

export default ScanHome;
