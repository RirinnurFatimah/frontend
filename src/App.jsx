import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import Navbar from './components/navbar';
import Home from './components/home';
import Scanner from './views/ScannerView';
import BodyTrack from './views/BodyTrack';
import NutriTrack from './pages/NutriTrack';
import Login from './auth/login';
import Register from './auth/register';
import AboutTeam from './components/AboutTeam';

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className="">
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/BodyTrack" element={<BodyTrack />} />
          <Route path="/NutriTrack" element={<NutriTrack />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about-team" element={<AboutTeam />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
