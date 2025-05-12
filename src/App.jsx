import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Scanner from './pages/scanner';
import ML1 from './pages/ml1';
import ML2 from './pages/ml2';
import Login from './auth/login';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/ml1" element={<ML1 />} />
          <Route path="/ml2" element={<ML2 />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
