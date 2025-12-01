import React from "react";
import { motion } from "framer-motion";

const Marketplace = () => {
  // Fake Data (Frontend Only)
  const cars = [
    {
      id: 1,
      title: "BMW Série 3",
      description: "Voiture en excellent état, moteur puissant et consommation faible.",
      price: "95,000",
      image: "https://placehold.co/300x200/004aad/ffffff?text=BMW"
    },
    {
      id: 2,
      title: "Volkswagen Golf 7",
      description: "Une berline fiable avec un confort remarquable et un design moderne.",
      price: "68,000",
      image: "https://placehold.co/300x200/008080/ffffff?text=Golf+7"
    },
    {
      id: 3,
      title: "Kia Rio",
      description: "Voiture économique idéale pour les trajets quotidiens.",
      price: "37,500",
      image: "https://placehold.co/300x200/666/ffffff?text=Kia+Rio"
    },
  ];

  return (
    <section className="container mx-auto py-16 px-4" dir="rtl">
      <h1 className="text-4xl font-bold text-center mb-12" style={{ color: "#003366" }}>
        سوق السيارات
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {cars.map((car) => (
          <motion.div
            key={car.id}
            whileHover={{ scale: 1.04 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
          >
            {/* Image small & uniform */}
            <div className="h-40 w-full bg-gray-100 flex items-center justify-center">
              <img
                src={car.image}
                alt={car.title}
                className="h-36 w-auto object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-5 flex flex-col justify-between">
              <h2 className="text-2xl font-bold mb-2 text-[#003366]">{car.title}</h2>

              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {car.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-extrabold text-[#00CED1]">
                  {car.price} د.ت
                </span>

                <button className="py-2 px-4 rounded-lg bg-[#003366] text-white font-semibold shadow hover:bg-[#00CED1] transition">
                  شراء
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;
