import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../../assets/autolink.png";

const Navbar = () => {
  const NavbarLinks = [
    { title: "الصفحة الرئيسية", url: "#" },
    { title: "سوق السيارات", url: "#" },
    { title: "الميكانيكيون", url: "#" },
    { title: "مدارس تعليم السياقة", url: "#" },
    { title: "قطع الغيار والإكسسوارات", url: "#" },
    { title: "تشخيص الأعطال بالذكاء الاصطناعي", url: "#" },
    { title: "استئجار سيارة", url: "#" },
    { title: "المدونة", url: "#" },
    { title: "اتصل بنا", url: "#" },
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

        {/* Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarLinks.map((menu, idx) => (
              <li key={idx}>
                <a
                  href={menu.url} // maintenant défini
                  className="inline-block py-2 px-3 relative group"
                  style={{ color: "#003366" }}
                >
                  {menu.title}
                </a>
              </li>
            ))}

            {/* Button Login */}
            <button
              className="primary-btn py-2 px-5 rounded-lg font-semibold shadow"
              style={{
                backgroundColor: "#5AAAD8",
                color: "#FFFFFF",
              }}
            >
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
