import React from "react";
import BannerPng from "../../assets/car.jpg"; // ← L'image de l'illustration
import { motion } from "framer-motion";

const TEXT_COLOR_DARK = "#34495E";       // Gris Foncé / Anthracite
const PRIMARY_COLOR_CTA = "#7BC0E3";     // Bleu Ciel / Bleu Clair
const HOVER_COLOR_CTA = "#5AAAD8";       // Bleu Ciel foncé pour Hover
const BG_COLOR_MINT = "#E6F5EF";         // Vert Menthe / Vert Pâle

const Banner2 = () => {
  
  const textDarkClass = `text-[${TEXT_COLOR_DARK}]`;
  const bgCtaClass = `bg-[${PRIMARY_COLOR_CTA}]`;
  const hoverCtaClass = `hover:bg-[${HOVER_COLOR_CTA}]`;

  return (
    <section dir="rtl" className={`py-14 md:py-24 bg-[${BG_COLOR_MINT}]`}>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        
        {/* Banner Text (Doit être le premier élément dans le code pour RTL si on utilise flex-row-reverse ou si l'on veut respecter l'ordre visuel) */}
        {/* En grille 2 colonnes, le texte est automatiquement à droite en RTL */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} // Animation adaptée au RTL (vient de la droite)
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          {/* Le texte est aligné à droite (text-right) */}
          <div className="text-center md:text-right space-y-4 lg:max-w-[450px] md:ml-auto">
            
            <h1 className={`text-4xl font-bold !leading-snug ${textDarkClass}`}>
              انضم إلى مجتمع AutoLink وابدأ رحلتك في عالم السيارات
            </h1>
            
            {/* Le texte du paragraphe est également dans la couleur foncée */}
            <p className={`text-lg text-gray-700 ${textDarkClass}`}>
              اكتشف كل ما تحتاجه: شراء وبيع السيارات، ميكانيكيون معتمدون، قطع غيار، تشخيص أعطال، ومدارس سياقة. 
              بيئة متكاملة لدعم تجربتك في عالم السيارات بكل سهولة وأمان.
            </p>
            
            <a
              href="https://chat.whatsapp.com/FQSKgJ5f1eIAhlyF5sVym0"
              // Utilisation des nouvelles classes de couleurs pour le bouton CTA
              className={`inline-block px-8 py-3 mt-8 font-semibold text-white rounded-lg shadow-md transition duration-300 ${bgCtaClass} ${hoverCtaClass} primary-btn`}
              target="_blank"
              rel="noopener noreferrer"
            >
              انضم الآن
            </a>
          </div>
        </motion.div>
        
        {/* Banner Image (Se déplace à gauche dans une mise en page RTL) */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }} // Animation adaptée au RTL (va à gauche)
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            src={BannerPng}
            alt="Auto Community Banner"
            className="w-full md:max-w-[600px] lg:max-w-[800px] " 
          />
        </div>
        
      </div>
    </section>
  );
};

export default Banner2;