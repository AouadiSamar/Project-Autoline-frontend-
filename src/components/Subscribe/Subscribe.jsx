import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import cars from "../../assets/trr.jpg";
import er from "../../assets/er.jpg";
import auto from "../../assets/auto.jpg";
import tt from "../../assets/tt.jpg";

// --- Palette de couleurs ---
const COLORS = {
  BG_SECTION: "#F3F4F6",
  BG_CARD: "#FFFFFF",
  TEXT_DARK: "#34495E",
  ACCENT_CTA: "#7BC0E3",
  HOVER_CTA: "#5AAAD8",
  TEXT_SECONDARY: "#6B7280",
};

// --- Données mock des produits ---
const mockProducts = {
  ar: [
    { id: 1, name: "سيارة سيدان فاخرة", price: "150,000 د.ج", description: "سيارة جديدة 2024 بمواصفات كاملة وتصميم رياضي.", imageUrl: cars },
    { id: 2, name: "موتوسيكل فيسبا كلاسيك", price: "45,000 د.ج", description: "وسيلة نقل أنيقة واقتصادية للمدينة.", imageUrl: er },
    { id: 3, name: "مجموعة إطارات ميشلان", price: "12,000 د.ج", description: "4 إطارات عالية الأداء لجميع المواسم.", imageUrl: auto },
    { id: 4, name: "علبة تروس أصلية", price: "25,000 د.ج", description: "قطعة غيار أصلية لسيارات الدفع الرباعي.", imageUrl: tt },
  ],
  fr: [
    { id: 1, name: "Berline de Luxe", price: "150,000 DA", description: "Nouvelle voiture 2024, toutes options et design sportif.", imageUrl: cars },
    { id: 2, name: "Vespa Classique", price: "45,000 DA", description: "Moyen de transport élégant et économique pour la ville.", imageUrl: er },
    { id: 3, name: "Jeu de Pneus Michelin", price: "12,000 DA", description: "4 pneus haute performance pour toutes saisons.", imageUrl: auto },
    { id: 4, name: "Boîte de Vitesses Originale", price: "25,000 DA", description: "Pièce de rechange d'origine pour véhicules 4x4.", imageUrl: tt },
  ],
};

// --- Traductions ---
const translations = {
  ar: {
    title: "أفضل العروض والمنتجات",
    subtitle: "اكتشف مجموعتنا المختارة من السيارات الجديدة، المستعملة، وقطع الغيار الأصلية. تسوق بسهولة وأمان.",
    buyButton: "شراء الآن",
    direction: "rtl",
    alignment: "text-right",
  },
  fr: {
    title: "Nos Produits Vedettes",
    subtitle: "Découvrez notre sélection de voitures neuves, d'occasion et de pièces détachées d'origine. Achetez facilement et en toute sécurité.",
    buyButton: "Acheter Maintenant",
    direction: "ltr",
    alignment: "text-left",
  },
};

// --- Icône panier SVG ---
const IconCart = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);

const FeaturedProducts = () => {
  const [language, setLanguage] = useState("ar");

  const toggleLanguage = () => setLanguage(prev => (prev === "ar" ? "fr" : "ar"));

  const t = useMemo(() => translations[language], [language]);
  const products = useMemo(() => mockProducts[language], [language]);

  return (
    <section dir={t.direction} style={{ backgroundColor: COLORS.BG_SECTION }} className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Bouton pour changer la langue */}
        <div className={`mb-8 flex justify-${language === "ar" ? "end" : "start"}`}>
     
        </div>

        {/* Bloc de titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`text-center mb-16`}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: COLORS.TEXT_DARK }}>{t.title}</h1>
          <p className={`text-lg max-w-3xl mx-auto`} style={{ color: COLORS.TEXT_SECONDARY }}>{t.subtitle}</p>
        </motion.div>

        {/* Grille des produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
              style={{ backgroundColor: COLORS.BG_CARD }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className={`p-4 space-y-2 ${t.alignment}`}>
                <h3 className="text-xl font-bold truncate" style={{ color: COLORS.TEXT_DARK }}>{product.name}</h3>
                <p className="text-sm line-clamp-2" style={{ color: COLORS.TEXT_SECONDARY }}>{product.description}</p>
              </div>
              <div className={`p-4 pt-0 border-t border-gray-100 ${t.alignment}`}>
                <p className="text-2xl font-extrabold mb-3" style={{ color: COLORS.ACCENT_CTA }}>{product.price}</p>
                <button
                  className="w-full inline-flex justify-center items-center gap-2 font-semibold py-3 px-4 rounded-lg shadow-lg transform hover:scale-[1.02] transition duration-300"
                  style={{ backgroundColor: COLORS.ACCENT_CTA, color: "#FFFFFF" }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = COLORS.HOVER_CTA}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = COLORS.ACCENT_CTA}
                >
                  <IconCart className="w-5 h-5" />
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
