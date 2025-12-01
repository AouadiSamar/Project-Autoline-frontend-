import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import loginImage from "../../assets/login-image.jpg";

const COLORS = {
  PRIMARY: "#7BC0E3",    // Bleu Ciel (Bouton Connexion)
  DARK: "#34495E",       // Gris Foncé (Texte principal)
  LIGHT: "#F3F4F6",      // Blanc Cassé (Fond des inputs)
  WHITE: "#FFFFFF",
  ACCENT_GREEN: "#99D9C1", // Vert Menthe (Titre et Lien secondaire)
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // Redirect to Home
    navigate("/Home");
  };

  // Définition de la couleur de survol pour le bouton (plus propre)
  const hoverColor = "#5AAAD8";

  return (
    <div className="min-h-screen flex" dir="rtl"> {/* Ajout de dir="rtl" pour le formulaire */}
      {/* Left: Image */}
      <div className="hidden md:flex w-1/2">
        <img
          src={loginImage}
          alt="Login Illustration"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right: Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 flex items-center justify-center bg-white"
      >
        <div className="max-w-md w-full p-8">
          <h2
            className="text-3xl font-bold mb-6 text-right" // Ajout de text-right
            // Titre en Vert Menthe
            style={{ color: COLORS.ACCENT_GREEN }}
          >
            تسجيل الدخول
          </h2>


          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium text-right" style={{ color: COLORS.DARK }}>
                البريد الإلكتروني
              </label>
              <input
                type="email"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none text-right" // Ajout de text-right
                style={{ backgroundColor: COLORS.LIGHT }}
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-right" style={{ color: COLORS.DARK }}>
                كلمة المرور
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none text-right" // Ajout de text-right
                style={{ backgroundColor: COLORS.LIGHT }}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold transition hover:scale-105"
              style={{ backgroundColor: COLORS.PRIMARY }}
              // Utilisation de la variable hoverColor pour le survol
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.PRIMARY)}
            >
              تسجيل الدخول
            </button>
          </form>

          <p className="mt-6 text-center text-gray-500">
            ليس لديك حساب؟{" "}
            <a
              href="/register"
              className="font-medium hover:underline"
              // Lien en Vert Menthe
              style={{ color: COLORS.ACCENT_GREEN }}
            >
              إنشاء حساب
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;