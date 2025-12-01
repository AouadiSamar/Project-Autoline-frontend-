import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaPhone, FaTools, FaMapMarkerAlt } from "react-icons/fa";

const Mechanics = () => {
  // Fake data frontend only
  const mechanics = [
    {
      id: 1,
      name: "ميكانيكي أحمد",
      rating: 4.8,
      city: "تونس العاصمة",
      speciality: "ميكانيك السيارات الفارهة",
      phone: "+216 98 123 456",
      image: "https://placehold.co/400x250/004aad/ffffff?text=Ahmed"
    },
    {
      id: 2,
      name: "ميكانيكي سامي",
      rating: 4.5,
      city: "سوسة",
      speciality: "صيانة السيارات الكهربائية",
      phone: "+216 97 654 321",
      image: "https://placehold.co/400x250/008080/ffffff?text=Sami"
    },
    {
      id: 3,
      name: "ميكانيكي ليلى",
      rating: 4.9,
      city: "صفاقس",
      speciality: "تشخيص الأعطال بالذكاء الاصطناعي",
      phone: "+216 95 987 654",
      image: "https://placehold.co/400x250/666/ffffff?text=Leila"
    },
  ];

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        قائمة الميكانيكيين
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mechanics.map((mec) => (
          <motion.div
            key={mec.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200"
          >
            {/* Image */}
            <img
              src={mec.image}
              alt={mec.name}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-1">
                {mec.name}
              </h2>

              {/* Rating */}
              <div className="flex items-center text-yellow-500 mb-2">
                <FaStar className="mr-1" />
                <span className="text-sm">{mec.rating} / 5</span>
              </div>

              {/* City */}
              <p className="flex items-center text-gray-600 mb-1">
                <FaMapMarkerAlt className="text-blue-600 mr-2" />
                {mec.city}
              </p>

              {/* Speciality */}
              <p className="flex items-center text-gray-700 mb-1">
                <FaTools className="text-gray-700 mr-2" />
                {mec.speciality}
              </p>

              {/* Phone */}
              <p className="flex items-center text-green-700 font-semibold mt-2">
                <FaPhone className="mr-2" />
                {mec.phone}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Mechanics;
