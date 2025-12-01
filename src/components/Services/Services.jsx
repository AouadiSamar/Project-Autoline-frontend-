import React, { useState } from "react";
import { motion } from "framer-motion";
import qo from "../../assets/qo.jpg";
import ap from "../../assets/ap.jpg";
import oiu from "../../assets/oiu.jpg";

const workshops = [
  { id: 1, name: "ورشة الميكانيكا الأولى", mechanic: "أحمد بن علي", specialty: "تصليح المحركات", image: qo },
  { id: 2, name: "ورشة الخبراء", mechanic: "سارة الخميسي", specialty: "صيانة السيارات الكهربائية", image: ap },
  { id: 3, name: "الورشة الحديثة", mechanic: "محمد الصغير", specialty: "فحص الأعطال العامة", image: oiu },
];

const COLORS = {
  BG_SECTION: "#F3F4F6",
  BG_CARD: "#FFFFFF",
  TEXT_DARK: "#34495E",
  ACCENT_CTA: "#7BC0E3",
  HOVER_CTA: "#5AAAD8",
  TEXT_SECONDARY: "#6B7280",
};

const Services = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section
      dir="rtl"
      className="py-16 md:py-24 min-h-screen flex flex-col items-center"
      style={{ backgroundColor: COLORS.BG_SECTION }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-right mb-12"
        >
          <h1 className="text-5xl font-extrabold mb-6" style={{ color: COLORS.TEXT_DARK }}>
            اكتشف أفضل الورشات والمختصين
          </h1>
          <p className="text-xl mb-4 leading-relaxed" style={{ color: COLORS.TEXT_DARK }}>
            نحن نقدم قائمة مختارة من الورشات المعتمدة ومختصي الميكانيكا ذوي الخبرة لمساعدتك على صيانة سيارتك بأمان.
          </p>
          <p className="text-lg" style={{ color: COLORS.TEXT_SECONDARY }}>
            اختر الورشة المناسبة لك، تعرف على الميكانيكيين، وتواصل معهم للحصول على أفضل الخدمات.
          </p>
        </motion.div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {workshops.map((workshop, idx) => (
            <motion.div
              key={workshop.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
              style={{ backgroundColor: COLORS.BG_CARD }}
            >
              <div className="relative w-full h-64">
                <img
                  src={workshop.image}
                  alt={workshop.name}
                  className="w-full h-full object-cover"
                  onLoad={() => setIsImageLoaded(true)}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/400x300/EF4444/ffffff?text=Image+Error";
                  }}
                />
              </div>

              <div className="p-6 text-right">
                <h2 className="text-2xl font-bold mb-2" style={{ color: COLORS.TEXT_DARK }}>
                  {workshop.name}
                </h2>
                <p className="mb-1" style={{ color: COLORS.TEXT_DARK }}>
                  الميكانيكي: {workshop.mechanic}
                </p>
                <p className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>
                  التخصص: {workshop.specialty}
                </p>

                <button
                  className="mt-4 font-semibold py-2 px-6 rounded-xl shadow transition transform hover:scale-105"
                  style={{ backgroundColor: COLORS.ACCENT_CTA, color: "#FFFFFF" }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = COLORS.HOVER_CTA)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = COLORS.ACCENT_CTA)}
                >
                  تواصل مع الورشة
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
