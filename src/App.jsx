import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Scanner from './views/ScannerView';
import BodyTrack from './views/BodyTrack';
import NutriTrack from './pages/NutriTrack';
import Login from './auth/login';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/BodyTrack" element={<BodyTrack />} />
          <Route path="/NutriTrack" element={<NutriTrack />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
