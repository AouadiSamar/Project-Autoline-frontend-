import React, { useState } from "react";

const COLORS = {
  TEXT_DARK: "#34495E",
  ACCENT_CTA: "#7BC0E3",
  HOVER_CTA: "#5AAAD8",
  TEXT_SECONDARY: "#6B7280",
  BG_INPUT: "#F3F4F6",
};

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Le nom est requis";
    if (!formData.email) newErrors.email = "L'email est requis";
    if (!formData.password) newErrors.password = "Le mot de passe est requis";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    console.log("Inscription réussie:", formData);
    // Ici tu peux appeler ton API d'inscription
  };

  const CTAButton = ({ children, onClick }) => (
    <button
      type="submit"
      onClick={onClick}
      className="w-full py-2 rounded font-semibold transition-colors duration-300"
      style={{ backgroundColor: COLORS.ACCENT_CTA, color: COLORS.TEXT_DARK }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.HOVER_CTA)}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.ACCENT_CTA)}
    >
      {children}
    </button>
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
        <h2 className="text-2xl font-bold mb-6" style={{ color: COLORS.TEXT_DARK }}>
          Créer un compte
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" style={{ color: COLORS.TEXT_DARK }}>
              Nom complet
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              style={{ backgroundColor: COLORS.BG_INPUT }}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium" style={{ color: COLORS.TEXT_DARK }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              style={{ backgroundColor: COLORS.BG_INPUT }}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium" style={{ color: COLORS.TEXT_DARK }}>
              Mot de passe
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              style={{ backgroundColor: COLORS.BG_INPUT }}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>
















    <div>
            <label className="block mb-1 font-medium" style={{ color: COLORS.TEXT_DARK }}>
Vous etes ;            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              style={{ backgroundColor: COLORS.BG_INPUT }}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>






          <div>
            <label className="block mb-1 font-medium" style={{ color: COLORS.TEXT_DARK }}>
              Confirmer mot de passe
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border focus:outline-none"
              style={{ backgroundColor: COLORS.BG_INPUT }}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          <CTAButton>Inscription</CTAButton>
        </form>

        <p className="mt-4 text-sm text-gray-500 text-center">
          Déjà un compte ? <a href="/login" className="text-blue-500 underline">Connexion</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
