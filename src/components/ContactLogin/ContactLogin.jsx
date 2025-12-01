import React from "react";
import { FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-xl rounded-2xl p-8 max-w-4xl w-full grid md:grid-cols-2 gap-8"
      >
        {/* IMAGE */}
        <div className="flex justify-center items-center">
          <img
            src="https://i.ibb.co/dJxwLH9/contact.png"
            alt="Contact"
            className="w-80 h-80 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Contact & Login – OmniSavoir
          </h2>

          <p className="text-gray-600 text-lg">
            Vous pouvez nous contacter sur nos réseaux ou accéder à votre espace
            via le bouton ci-dessous.
          </p>

          {/* Social icons */}
          <div className="flex space-x-6 text-3xl text-blue-600">
            <a href="#" className="hover:text-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-600 transition">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-indigo-600 transition">
              <TbWorldWww />
            </a>
          </div>

          {/* Login button */}
          <Link
            to="/login"
            className="bg-blue-600 text-white text-center py-3 rounded-xl text-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Accéder à mon Espace
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactLogin;
