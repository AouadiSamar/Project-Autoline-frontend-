import React from "react";
import { motion } from "framer-motion";

import mechanicImg from "../../assets/ya.jpg";
import mechanicIm from "../../assets/remoc.jpg";
import rentalImg from "../../assets/trr.jpg";
import buyCarImg from "../../assets/voiture.jpg";
import partsImg from "../../assets/TAALM.jpg";
import drivingSchoolImg from "../../assets/logoo.jpg";
import sellCarImg from "../../assets/OIP.jpg";
import T from "../../assets/T.jpg";

const COLORS = {
  BG_SECTION: "#F3F4F6", // Gris très clair
  BG_CARD: "#FFFFFF",     // Blanc pur
  TEXT_DARK: "#34495E",   // Gris foncé
  ACCENT_CTA: "#7BC0E3", // Bleu clair
  TEXT_SECONDARY: "#6B7280",
  HOVER_CTA: "#5AAAD8",
};

export const servicesData = [
  {
    id: 1,
    title: "إيجاد ميكانيكي موثوق",
    description: "اعثر على أقرب ميكانيكي معتمد لإصلاح سيارتك أو تقديم خدمات الصيانة.",
    img: mechanicImg,
    link: "/mechanics",
  },
  {
    id: 2,
    title: "خدمة السحب والإنقاذ",
    description: "خدمة الطوارئ والسحب لجميع أنواع السيارات.",
    img: mechanicIm,
    link: "/mechanics",
  },
  {
    id: 3,
    title: "استئجار سيارة",
    description: "اختر من بين مجموعة واسعة من السيارات للإيجار حسب احتياجاتك.",
    img: rentalImg,
    link: "/car-rental",
  },
  {
    id: 4,
    title: "شراء سيارة",
    description: "تصفح سيارات جديدة ومستعملة واحصل على أفضل العروض.",
    img: buyCarImg,
    link: "/buy-car",
  },
  {
    id: 5,
    title: "مدارس تعليم القيادة",
    description: "ابحث عن مدارس سياقة معتمدة وموثوقة.",
    img: partsImg,
    link: "/driving-schools",
  },
  {
    id: 6,
    title: "بيع سيارتي",
    description: "اعرض سيارتك للبيع بسرعة وسهولة.",
    img: sellCarImg,
    link: "/sell-car",
  },
  {
    id: 7,
    title: "قطع غيار وإكسسوارات",
    description: "جميع قطع الغيار الأصلية لمختلف السيارات.",
    img: T,
    link: "/car-parts",
  },
];

const Hero = () => (
  <section dir="rtl" className={`py-20`} style={{ backgroundColor: COLORS.BG_SECTION }}>
    <div className="container mx-auto text-center mb-12">
      <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: COLORS.TEXT_DARK }}>
        اكتشف خدمات <span style={{ color: COLORS.ACCENT_CTA }}>AutoLink</span> المتكاملة
      </h1>
      <p className="text-lg" style={{ color: COLORS.TEXT_SECONDARY }}>
        كل ما تحتاجه في مكان واحد: ميكانيكيون، سيارات للإيجار، سيارات للشراء وقطع الغيار.
      </p>
    </div>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {servicesData.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="rounded-2xl p-6 hover:shadow-2xl transition cursor-pointer flex flex-col items-center"
          style={{ backgroundColor: COLORS.BG_CARD }}
        >
          <motion.img
            src={service.img}
            alt={service.title}
            className="w-32 h-32 object-cover rounded-full mb-4 shadow-lg"
            whileHover={{ scale: 1.07 }}
          />

          <h2 className="text-2xl font-semibold mb-2" style={{ color: COLORS.TEXT_DARK }}>
            {service.title}
          </h2>

          <p className="text-center mb-4" style={{ color: COLORS.TEXT_SECONDARY }}>
            {service.description}
          </p>

          <a
            href={service.link}
            className="mt-auto px-6 py-2 rounded-xl text-white transition"
            style={{ backgroundColor: COLORS.ACCENT_CTA }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = COLORS.HOVER_CTA)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = COLORS.ACCENT_CTA)}
          >
            اذهب الآن
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Hero;
