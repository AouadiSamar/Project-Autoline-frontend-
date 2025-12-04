import React, { useState } from "react";
import RegisterImage from "../../assets/login-image.jpg";

const COLORS = {
  TEXT_DARK: "#34495E",
  ACCENT_CTA: "#7BC0E3",
  HOVER_CTA: "#5AAAD8",
  TEXT_SECONDARY: "#6B7280",
  BG_INPUT: "#F3F4F6",
  ACCENT_GREEN: "#99D9C1",
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
    if (!formData.fullName) newErrors.fullName = "الاسم مطلوب";
    if (!formData.email) newErrors.email = "البريد الإلكتروني مطلوب";
    if (!formData.password) newErrors.password = "كلمة المرور مطلوبة";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "كلمات المرور غير متطابقة";
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
    console.log("تم التسجيل بنجاح:", formData);
    // يمكنك هنا استدعاء API التسجيل
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
    <div className="flex min-h-screen">

      {/* LEFT - FORM */}
      <div className="flex items-center justify-center w-full md:w-1/2 bg-gray-100 p-4">
        <div className="bg-white rounded-lg shadow-md w-full max-w-md p-6">
          <h2 className="text-2xl font-bold mb-6" style={{ color: COLORS.ACCENT_GREEN }}>
            إنشاء حساب
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium" style={{ color: COLORS.TEXT_DARK }}>
                الاسم الكامل
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border"
                style={{ backgroundColor: COLORS.BG_INPUT }}
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium" style={{ color: COLORS.TEXT_DARK }}>
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border"
                style={{ backgroundColor: COLORS.BG_INPUT }}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium" style={{ color: COLORS.TEXT_DARK }}>
                كلمة المرور
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border"
                style={{ backgroundColor: COLORS.BG_INPUT }}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium" style={{ color: COLORS.TEXT_DARK }}>
                تأكيد كلمة المرور
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded border"
                style={{ backgroundColor: COLORS.BG_INPUT }}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <CTAButton>تسجيل</CTAButton>
          </form>

          <div className="mt-4 text-sm text-center text-gray-500">
            <h2 className="text-base font-normal">
              لديك حساب بالفعل؟{" "}
              <a
                href="/"
                style={{ color: COLORS.ACCENT_GREEN }}
                className="underline hover:opacity-80 transition"
              >
                تسجيل الدخول
              </a>
            </h2>
          </div>

        </div>
      </div>

      {/* RIGHT - IMAGE */}
      <div className="hidden md:flex w-1/2">
        <img
          src={RegisterImage}
          alt="Login Illustration"
          className="object-cover w-full h-full"
        />
      </div>

    </div>
  );
};

export default Register;
