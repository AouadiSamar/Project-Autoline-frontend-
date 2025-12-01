import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import logo from "../../assets/autolink.png";
import axios from "axios";

const Navbar = () => {
  const [NavbarMenu, setNavbarMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/pages/");
        setNavbarMenu(res.data);
      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };
    fetchMenu();
  }, []);

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
            alt="OmniSavoir Logo"
            className="w-48 h-auto"
            style={{ maxWidth: "200px" }}
          />
        </div>

        {/* Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu, idx) => (
              <li key={idx}>
                <a
                  href={menu.url}
                  className="inline-block py-2 px-3 relative group"
                  style={{ color: "#003366" }} // bleu marine
                >
                  <div
                    className="w-2 h-2 absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 hidden group-hover:block"
                    style={{ backgroundColor: "#5AAAD8" }} 
                      

                  ></div>
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
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "#5AAAD8")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "#5AAAD8")
              }
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
