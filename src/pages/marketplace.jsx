import React from "react";
// Importez les composants existants
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About"; 
// Importez le sélecteur de langue
import LanguageSwitcher from "../components/LanguageSwitcher"; // Mettez à jour le chemin si nécessaire


const Home = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      {/* AJOUT IMPORTANT: Le sélecteur de langue est généralement dans 
        la navigation (Header), mais nous le plaçons ici pour l'exemple. 
      */}
      <div style={{ padding: '20px', textAlign: 'right' }}>
        <LanguageSwitcher /> 
      </div>
      
      <Banner2 />
      <Hero />
      <Banner />
      <Subscribe />
      <Services />
      <Footer />
      
    </main>
  );
};

export default Home;