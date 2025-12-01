import React, { useState, useMemo } from "react"; 
import { motion } from "framer-motion";
import PropTypes from 'prop-types';
// Note: Assurez-vous que les chemins d'accès aux images sont corrects
import ue from "../../assets/ue.jpg"; 
import yt from "../../assets/yt.jpg";
import T from "../../assets/TAALM.jpg";


// --- NOUVELLE PALETTE COULEURS (Inspirée de l'image) ---
const PRIMARY_COLOR_BRAND = "#34495E"; // Gris Foncé / Anthracite
const PRIMARY_COLOR_CLASS = "#7BC0E3"; // Bleu Ciel / Bleu Clair (CTA)
const PRIMARY_COLOR_HOVER_CLASS = "#5AAAD8"; // Variante de Bleu Clair
const ACCENT_COLOR = "#F7DC6F";       // Jaune Clair / Moutarde
const TEXT_COLOR = "#34495E";         // Gris Foncé / Anthracite
const BG_COLOR = "#F3F4F6";           // Blanc Cassé / Gris Très Clair

// --- PRODUITS AUTO-ÉCOLE (Aucun changement dans les données) ---
const mockProducts = {
  ar: [
    {
      id: 1,
      name: "حصة تدريب سياقة (1 ساعة)",
      price: "30 د.ت",
      description: "حصة فردية مع مدرب محترف لتعلم أساسيات السياقة.",
      imageUrl: ue,
    },
    {
      id: 3,
      name: "سيارة تعليم سياقة ليوم كامل",
      price: "150 د.ت / يوم",
      description: "سيارة مجهزة بدواسات مزدوجة خاصة بمدارس تعليم السياقة.",
      imageUrl:yt,
    },
    // Note: Le produit avec ID 1 est dupliqué et en FR, ce qui peut causer des problèmes.
    // Je le laisse tel quel pour la fidélité au code source, mais c'est à corriger.
    {
      id: 4, 
      name: "Séance de conduite (1h)",
      price: "30 DT",
      description: "Séance individuelle avec moniteur professionnel.",
      imageUrl: T,
    },
  ],
};

// --- TEXTES TRADUITS (Aucun changement) ---
const translations = {
  ar: {
    langSwitch: "Passer au Français (FR)",
    title: "أفضل عروض مدارس تعليم السياقة",
    subtitle: "احجز حصص تدريب، سيارات تعليم، وباقات خاصة بأسعار مناسبة.",
    buyButton: "احجز الآن",
    direction: "rtl",
    alignment: "text-right",
    flexDir: "flex-row-reverse",
  },
  fr: {
    langSwitch: "Switch to Arabic (AR)",
    title: "Nos Offres Auto-École",
    subtitle: "Réservez des séances de conduite, voitures d’apprentissage et packs formation.",
    buyButton: "Réserver",
    direction: "ltr",
    alignment: "text-left",
    flexDir: "flex-row",
  },
};

// --- ICÔNE PANIER (Aucun changement) ---
const IconCart = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);
IconCart.propTypes = { className: PropTypes.string };


// --- COMPONENT AVEC NOUVELLES COULEURS ---
const FeaturedProducts = () => {
  const [language, setLanguage] = useState("ar");

  const toggleLanguage = () => {
    setLanguage(prev => (prev === "ar" ? "fr" : "ar"));
  };

  const t = useMemo(() => translations[language], [language]);
  const products = useMemo(() => mockProducts[language], [language]);

  // --- CLASSES TAILWIND DYNAMIQUES MISES À JOUR ---
  const bgCtaClass = `bg-[${PRIMARY_COLOR_CLASS}]`; // Bleu Ciel
  const hoverBgCtaClass = `hover:bg-[${PRIMARY_COLOR_HOVER_CLASS}]`; // Bleu Ciel Hover
  const ringCtaClass = `ring-[${ACCENT_COLOR}]/50`; // Anneau Jaune Moutarde
  const textCtaClass = `text-[${PRIMARY_COLOR_CLASS}]`; // Texte en Bleu Ciel
  const bgLightClass = `bg-[${BG_COLOR}]`; // Fond en Blanc Cassé
  const textDarkClass = `text-[${TEXT_COLOR}]`; // Texte en Gris Foncé
  const bgBrandClass = `bg-[${PRIMARY_COLOR_BRAND}]`; // Bouton switch en Gris Foncé

  return (
    <section dir={t.direction} className={`relative ${bgLightClass} overflow-hidden py-16 md:py-24`}>
      
      {/* Container */}
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Language Switch */}
        <div className={`mb-12 flex ${t.direction === 'rtl' ? 'justify-start' : 'justify-end'}`}>
          <button
            onClick={toggleLanguage}
            className={`px-4 py-2 font-semibold text-white rounded-lg shadow-md transition duration-300 ${
              language === 'ar'
                ? `${bgBrandClass} hover:bg-[#2A3749]` // Gris foncé pour la langue inactive
                : `${bgCtaClass} ${hoverBgCtaClass}` // Bleu clair pour la langue active
            }`}
          >
            {t.langSwitch}
          </button>
        </div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-16 ${textDarkClass}`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t.title}</h1>
          {/* Le sous-titre utilise le texte gris 600, mais est cohérent avec le style */}
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`bg-white rounded-xl shadow-2xl hover:shadow-3xl hover:ring-4 ${ringCtaClass} ${t.alignment}`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>

              {/* Details */}
              <div className="p-4 space-y-2">
                <h3 className={`text-xl font-bold truncate ${textDarkClass}`}>{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
              </div>

              {/* Price + Button */}
              <div className="p-4 pt-0 border-t border-gray-100">
                {/* Le prix est mis en évidence par la couleur d'action Bleu Ciel */}
                <p className={`text-2xl font-extrabold mb-3 ${textCtaClass}`}>{product.price}</p>

                {/* Bouton CTA en Bleu Ciel, hover en Bleu Ciel (foncé) */}
                <button className={`w-full flex justify-center items-center gap-2 ${bgCtaClass} text-white py-3 rounded-lg ${hoverBgCtaClass} transition duration-300`}>
                  <IconCart className="w-5 h-5" stroke="white" /> {/* Ajout de stroke="white" pour l'icône */}
                  <span>{t.buyButton}</span>
                </button>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedProducts;