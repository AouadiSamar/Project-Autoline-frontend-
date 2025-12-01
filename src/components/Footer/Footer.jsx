import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// --- Icônes SVG ---
const IconInstagram = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-7 h-7 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.013 4.85.071 1.173.055 1.748.243 2.19.415.42.164.717.375 1.05.708.333.333.543.63.707 1.05.172.443.36 1.018.415 2.19.058 1.266.071 1.646.071 4.85s-.013 3.584-.071 4.85c-.055 1.173-.243 1.748-.415 2.19-.164.42-.375.717-.708 1.05-.333.333-.63.543-1.05.707-.443.172-1.018.36-2.19.415-1.266.058-1.646.071-4.85.071s-3.584-.013-4.85-.071c-1.173-.055-1.748-.243-2.19-.415-.42-.164-.717-.375-1.05-.708-.333-.333-.543-.63-.707-1.05-.172-.443-.36-1.018-.415-2.19-.058-1.266-.071-1.646-.071-4.85s.013-3.584.071-4.85c.055-1.173.243-1.748.415-2.19.164-.42.375-.717.708-1.05.333-.333.63-.543 1.05-.707.443-.172 1.018-.36 2.19-.415C8.416 2.176 8.796 2.163 12 2.163zm0 3.864c-3.321 0-6.007 2.686-6.007 6.007s2.686 6.007 6.007 6.007 6.007-2.686 6.007-6.007-2.686-6.007-6.007-6.007zm0 10.007c-2.21 0-4.007-1.797-4.007-4.007s1.797-4.007 4.007-4.007 4.007 1.797 4.007 4.007-1.797 4.007-4.007 4.007zm6.064-9.333c-.568 0-1.033-.465-1.033-1.033s.465-1.033 1.033-1.033 1.033.465 1.033 1.033-.465 1.033-1.033 1.033z"/>
  </svg>
);

const IconWhatsapp = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-7 h-7 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.039 2.001A10.038 10.038 0 0 0 2 12.039c0 2.946 1.137 5.727 3.197 7.787l-2.19 3.033 3.498-1.174a10.04 10.04 0 0 0 6.534 2.176h.001c5.541 0 10.039-4.498 10.039-10.039S17.581 2 12.039 2zm-.001 18.067a8.038 8.038 0 0 1-4.148-1.144l-.299-.178-3.11 1.047 1.066-3.003-.195-.31c-2.18-3.418-1.636-7.854 1.401-10.892A8.038 8.038 0 0 1 12.038 4.001c4.437 0 8.038 3.601 8.038 8.038s-3.601 8.038-8.038 8.038zm3.023-4.81c-.139-.236-.615-.375-1.288-.718-.673-.343-3.084-1.517-3.56-1.693-.476-.176-.822-.264-1.168.264-.343.528-1.339 1.693-1.64 2.046-.3.353-.615.397-1.131.139s-2.138-.783-4.072-2.518c-1.52-1.336-2.536-2.992-2.839-3.52-.303-.528-.032-.816.236-1.062.243-.223.535-.572.806-.867.271-.295.36-.503.556-.783.193-.28.099-.527-.046-.74s-1.168-2.793-1.597-3.829c-.428-1.036-.874-.897-1.189-.897-.306 0-.66-.043-1.006-.043s-.923.139-1.405.698c-.482.559-1.84 1.789-1.84 4.354 0 2.565 1.884 5.068 2.164 5.421 2.973 4.965 7.155 6.442 7.643 6.649.488.207 1.545.163 2.138-.415.594-.579 1.111-1.921 1.414-2.476.303-.556.176-.923-.086-1.399z"/>
  </svg>
);

const IconYoutube = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-7 h-7 ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 6.816s-.7-.525-2.07-.638c-1.22-.11-3.666-.192-7.93-.192-4.265 0-6.71.082-7.93.192C2.7 6.29 2 6.816 2 6.816s-.7 5.75-.7 11.368c0 5.618.7 11.368.7 11.368s.7.525 2.07.638c1.22.11 3.666.192 7.93.192 4.265 0 6.71-.082 7.93-.192 1.37-.113 2.07-.638 2.07-.638s.7-5.75.7-11.368c0-5.618-.7-11.368-.7-11.368zm-9.3 10.632v-6.736l5.7 3.368-5.7 3.368z"/>
  </svg>
);

const IconWorld = ({ className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`w-7 h-7 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a15.3 15.3 0 0 0 4 10 15.3 15.3 0 0 0-4 10 15.3 15.3 0 0 0-4-10 15.3 15.3 0 0 0 4-10z"></path>
    <path d="M2 12h20"></path>
  </svg>
);

// --- Palette de couleurs centralisée ---
const COLORS = {
  BG_FOOTER: "#f7f7f7",
  TEXT_DARK: "#2C3E50",
  TEXT_SECONDARY: "#7F8C8D",
  ACCENT: "#3498DB",
  ACCENT_HOVER: "#2980B9",
  INPUT_BG: "#FFFFFF",
  BUTTON_TEXT: "#FFFFFF",
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer dir="rtl" className={`py-28`} style={{ backgroundColor: COLORS.BG_FOOTER, color: COLORS.TEXT_DARK }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8">

          {/* Section 1: À propos */}
          <div className="space-y-4 max-w-[350px]">
            <h1 className="text-3xl font-bold" style={{ color: COLORS.ACCENT }}>AutoLink</h1>
            <p className="leading-relaxed" style={{ color: COLORS.TEXT_SECONDARY }}>
              AutoLink هي منصتك المتكاملة لإدارة كل ما يتعلق بسيارتك: من إيجاد ميكانيكي إلى شراء أو بيع مركبة، وقطع الغيار الأصلية. هدفنا هو تسهيل عالم السيارات عليك.
            </p>
          </div>

          {/* Section 2: Liens */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold" style={{ color: COLORS.TEXT_DARK }}>خدماتنا</h1>
              <ul className="space-y-3 text-lg" style={{ color: COLORS.TEXT_SECONDARY }}>
                <li className="hover:text-blue-600 duration-200 cursor-pointer"><Link to="/mechanics">إيجاد ميكانيكي</Link></li>
                <li className="hover:text-blue-600 duration-200 cursor-pointer"><Link to="/car-rental">استئجار سيارة</Link></li>
                <li className="hover:text-blue-600 duration-200 cursor-pointer"><Link to="/buy-car">شراء وبيع سيارة</Link></li>
                <li className="hover:text-blue-600 duration-200 cursor-pointer"><Link to="/car-parts">قطع غيار وإكسسوارات</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h1 className="text-2xl font-bold" style={{ color: COLORS.TEXT_DARK }}>روابط سريعة</h1>
              <ul className="space-y-3 text-lg" style={{ color: COLORS.TEXT_SECONDARY }}>
                <li className="hover:text-blue-600 duration-200 cursor-pointer"><Link to="/">الرئيسية</Link></li>
                <li className="hover:text-blue-600 duration-200 cursor-pointer"><Link to="/services">كل الخدمات</Link></li>
                <li className="hover:text-blue-600 duration-200 cursor-pointer"><Link to="/faq">الأسئلة الشائعة</Link></li>
                <li className="hover:text-blue-600 duration-200 cursor-pointer"><Link to="/terms">شروط الاستخدام</Link></li>
              </ul>
            </div>
          </div>

          {/* Section 3: Newsletter & Social */}
          <div className="space-y-4 max-w-[350px]">
            <h1 className="text-2xl font-bold" style={{ color: COLORS.TEXT_DARK }}>اشترك في النشرة الإخبارية</h1>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="p-3 rounded-s-xl w-full py-4 text-right"
                style={{ backgroundColor: COLORS.INPUT_BG, color: COLORS.TEXT_DARK }}
              />
              <button
                className="py-4 px-6 rounded-e-xl font-semibold transition duration-300"
                style={{ backgroundColor: COLORS.ACCENT, color: COLORS.BUTTON_TEXT }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = COLORS.ACCENT_HOVER}
                onMouseOut={e => e.currentTarget.style.backgroundColor = COLORS.ACCENT}
              >
                اشتراك
              </button>
            </div>

            <h2 className="text-xl font-semibold pt-4" style={{ color: COLORS.TEXT_DARK }}>تابعنا</h2>
            <div className="flex space-x-reverse space-x-6">
              <a href="#"><IconWhatsapp className="cursor-pointer text-green-500 hover:scale-110 duration-200" /></a>
              <a href="#"><IconInstagram className="cursor-pointer text-pink-600 hover:scale-110 duration-200" /></a>
              <a href="#"><IconWorld className="cursor-pointer text-blue-600 hover:scale-110 duration-200" /></a>
              <a href="#"><IconYoutube className="cursor-pointer text-red-600 hover:scale-110 duration-200" /></a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* COPYRIGHT */}
      <div className="container mx-auto px-4 text-center mt-10 pt-6 border-t" style={{ borderColor: COLORS.TEXT_SECONDARY }}>
        <p className="text-sm opacity-80" style={{ color: COLORS.TEXT_SECONDARY }}>
          جميع الحقوق محفوظة © 2025 <span className="font-semibold">AutoLink</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
