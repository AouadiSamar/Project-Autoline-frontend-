import React from "react";
// Import des composants
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Banner from "../components/Banner/Banner";
import Subscribe from "../components/Subscribe/Subscribe";
import Banner2 from "../components/Banner/Banner2";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import AssistantAvatar from "../components/Chatbot/AssistantAvatar";

// Import du hook pour la traduction
import { useTranslation } from 'react-i18next'; 

// Définition du composant LanguageSwitcher
// Nous le définissons ici (dans le même fichier) pour éviter l'export multiple.
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    // Mise à jour de la langue
    i18n.changeLanguage(lng);
    // Gestion de la direction (RTL pour l'arabe)
    document.documentElement.setAttribute('dir', lng === 'ar' ? 'rtl' : 'ltr');
  };

  return (
    // Style de base pour placer le sélecteur en haut à droite
    <div style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10 }}> 
      <button 
        onClick={() => changeLanguage('fr')}
        style={{ marginRight: '5px', padding: '5px 10px', cursor: 'pointer' }}
      >
        Français
      </button>
      <span> | </span>
      <button 
        onClick={() => changeLanguage('ar')}
        style={{ marginLeft: '5px', padding: '5px 10px', cursor: 'pointer' }}
      >
        العربية
      </button>
    </div>
  );
};


// Définition du composant Home
const Home = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      {/* AFFICHER LE SÉLECTEUR DE LANGUE :
        Nous intégrons ici le LanguageSwitcher défini ci-dessus. 
        Note: Dans une application réelle, il est préférable de le placer dans un composant Header/Navbar.
      */}

      <Banner2 />
      <Hero />
         <AssistantAvatar /> 
      <Banner />
      <Subscribe />
      <Services />
      <Footer />
      {/* <About /> est importé mais non utilisé. J'ai gardé les imports pour la cohérence */}
    </main>
  );
};

// Seul et unique export par défaut
export default Home;