import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import contactImg from "../../assets/logoooo.jpg"; // mets ton image ici

const Contact = () => {
  return (
    <section dir="rtl" className="py-20 bg-[#f7f7f7]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* -------- LEFT : TEXT + INFO -------- */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-dark">اتصل بنا</h1>
          <p className="text-dark2 leading-relaxed text-lg">
            نحن هنا للإجابة على جميع استفساراتك حول منصتنا التعليمية OmniSavoir.
            تواصل معنا في أي وقت وسنكون سعداء بخدمتك.
          </p>

          {/* Contact infos */}
          <div className="space-y-4 text-dark2 text-lg">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-secondary text-2xl" />
              <span>+216 55 555 555</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-secondary text-2xl" />
              <span>contact@omnisavoir.tn</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-secondary text-2xl" />
              <span>تونس، الجمهورية التونسية</span>
            </div>
          </div>

          {/* Contact form */}
          <form className="space-y-4 pt-4">
            <input
              type="text"
              placeholder="الاسم الكامل"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-secondary"
            />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full p-3 rounded-xl border border-gray-300 focus:outline-secondary"
            />
            <textarea
              placeholder="اكتب رسالتك هنا..."
              className="w-full p-3 rounded-xl border border-gray-300 h-32 focus:outline-secondary"
            ></textarea>

            <button
              type="submit"
              className="primary-btn w-full text-lg py-3"
            >
              إرسال الرسالة
            </button>
          </form>
        </motion.div>

        {/* -------- RIGHT : IMAGE -------- */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src={contactImg}
            alt="Contact"
            className="w-full max-w-md object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
