import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import Home from './components/home';
import Scanner from './views/ScannerView';
import BodyTrack from './views/BodyTrack';
import NutriTrack from './views/NutriTrack';
import NutriPages from './pages/NutriPages';
import Login from './auth/login';
import Register from './auth/register';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import AboutTeam from './components/AboutTeam';
import PrivateRoute from './layout/PrivateRoute'; 
import ScrollToTop from './layout/ScrollToTop';

const App = () => {
  return (
    <main>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/BodyTrack" element={<BodyTrack />} />
          <Route path="/NutriTrack" element={<NutriTrack />} />
          <Route path="/NutriPages" element={<NutriPages />} />
          <Route path="/about-team" element={<AboutTeam />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;

