import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import About from "./pages/About";
import Contact from "./pages/contact";
import ContactLogin from "./pages/ContactLogin";

import Marketplace from "./pages/marketplace";
import Login from "./pages/login";
import Mechanics from "./pages/mechanics";
import Moteur from "./pages/moteur";


const AppContent = () => {
  const location = useLocation();

  // Pages where the navbar should NOT appear
  const hideNavbarRoutes = ["/"]; // page login

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/" element={<Login />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ContactLogin" element={<ContactLogin />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/mechanics" element={<Mechanics />} />
        <Route path="/moteur" element={<Moteur />} />

      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
