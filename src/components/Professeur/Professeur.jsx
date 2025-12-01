import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// Assurez-vous que les chemins d'accès aux images sont corrects dans votre projet
import d from "../../assets/d.jpg";
import tet from "../../assets/tet.jpg";

// Données traduites en ARABE
const professorsData = [
  {
    id: 1,
    name: "د. كريم بن صالح", // Dr. Karim Ben Salah
    subject: "الرياضيات", // Mathématiques
    description: "خبير في التحليل والجبر، مع أكثر من 10 سنوات خبرة.", // Expert en analyse et algèbre, 10+ ans d’expérience.
    image: d,
  },
  {
    id: 2,
    name: "السيدة نادية الطرابلسي", // Mme Nadia Trabelsi
    subject: "الفيزياء", // Physique
    description: "متخصصة في الفيزياء الحديثة والميكانيكا.", // Spécialiste en physique moderne et mécanique.
    image: tet,
  },
  {
    id: 3,
    name: "ا سمر العوادي", // Mr. Samar Aouadi
    subject: "علوم الحاسوب", // Informatique (Computer Science)
    description: "مطور ويب متكامل (Full Stack) ومُدرّس شغوف.", // Développeur full stack & enseignant passionné.
    image: tet,
  },
];

// Le composant Professeur
const Professeur = () => {
  return (
    // Ajout de dir="rtl" pour le support du langage de droite à gauche (Right-to-Left)
    <div
      className="min-h-screen bg-gray-50 px-6 py-10"
      dir="rtl"
    >
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10" dir="rtl">
        أساتذتنا
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {professorsData.map((prof) => (
          <Link to={`/professeurs/${prof.id}`} key={prof.id}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-2xl p-6 cursor-pointer hover:shadow-2xl transition"
            >
              {/* PHOTO */}
              <div className="flex justify-center mb-4">
                <img
                  src={prof.image}
                  alt={prof.name}
                  className="w-28 h-28 rounded-full object-cover shadow"
                />
              </div>

              {/* INFO */}
              <h3 className="text-xl font-bold text-center text-gray-800">
                {prof.name}
              </h3>

              <p className="text-blue-600 text-center font-semibold mt-1">
                {prof.subject}
              </p>

              <p className="text-gray-600 text-center mt-2 text-sm">
                {prof.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Professeur;