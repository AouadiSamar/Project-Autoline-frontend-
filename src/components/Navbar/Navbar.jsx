import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaArrowRightToBracket } from "react-icons/fa6";

import { 
  FaCar, 
  FaTools, 
  FaChalkboardTeacher, 
  FaCogs, 
  FaBrain, 
  FaKey, 
  FaBlog, 
  FaEnvelope, 
  FaHome
} from "react-icons/fa"; 
import { motion } from "framer-motion";
import logo from "../../assets/autolink.png";

const Navbar = () => {
  // Définition des liens avec les icônes React correspondantes
  const NavbarLinks = [
    { title: "الصفحة الرئيسية", url: "#", icon: <FaHome className="text-lg" /> },
    { title: "سوق السيارات والمحرّكات", url: "#", icon: <FaCar className="text-lg" /> },
    { title: "الميكانيكيون", url: "#", icon: <FaTools className="text-lg" /> },
    { title: "مدارس تعليم السياقة", url: "#", icon: <FaChalkboardTeacher className="text-lg" /> },
    { title: "قطع الغيار والإكسسوارات", url: "#", icon: <FaCogs className="text-lg" /> },
    { title: "تشخيص الأعطال بالذكاء الاصطناعي", url: "#", icon: <FaBrain className="text-lg" /> },
    { title: "استئجار سيارة", url: "#", icon: <FaKey className="text-lg" /> },
    { title: "المدونة", url: "#", icon: <FaBlog className="text-lg" /> },
    { title: "اتصل بنا", url: "#", icon: <FaEnvelope className="text-lg" /> },
  ];

  return (
    <nav className="relative z-20" dir="rtl">
      <motion.div
        initial={{ opacity: 0, y: -880 }}
        animate={{ opacity: 1, y: 7 }}
        className="container py-10 flex justify-between items-center"
      >
        {/* Logo */}
        <div>
          <img
            src={logo}
            alt="Autolink Logo"
            className="w-48 h-auto"
            style={{ maxWidth: "200px" }}
          />
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarLinks.map((menu, idx) => (
              <li key={idx}>
                <a
                  href={menu.url}
                  className="inline-flex items-center gap-1 py-2 px-3 relative group font-medium transition-colors duration-300" // Ajout de inline-flex et gap-1 pour aligner l'icône
                  style={{ color: "#003366" }}
                >
                  {menu.icon} {/* Affichage de l'icône */}
                  {menu.title}
                </a>
              </li>
            ))}

            {/* Button Login */}
            <button
              className="primary-btn py-2 px-5 rounded-lg font-semibold shadow inline-flex items-center gap-1" // Ajout de inline-flex et gap-1 pour l'icône du bouton
              style={{
                backgroundColor: "#5AAAD8",
                color: "#FFFFFF",
              }}
            >
              <FaArrowRightToBracket className="text-lg" /> {/* Icône pour le bouton */}
              تسجيل الدخول
            </button>
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" style={{ color: "#003366" }} />
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;