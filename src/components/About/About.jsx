import React from "react";
import { motion } from "framer-motion";
import { FaCar, FaTools, FaRobot } from "react-icons/fa";
import AboutImg from "../../assets/logooo.jpg";

const AboutData = [
  {
    id: 1,
    title: "من نحن",
    description:
      "منصّة AutoLink هي أول منصة تونسية تجمع كل ما يخص السيارات في مكان واحد: بيع وشراء، ميكانيكيون، مدارس سياقة، قطع غيار، وتشخيص الأعطال عبر الذكاء الاصطناعي.",
    icon: <FaCar className="text-4xl text-primary" />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "مهمتنا",
    description:
      "نهدف إلى تبسيط عالم السيارات في تونس من خلال توفير خدمات موثوقة، سريعة، وفي متناول الجميع، سواء كنت تريد شراء سيارة، إصلاحها، أو تعلم السياقة.",
    icon: <FaTools className="text-4xl text-primary" />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "رؤيتنا",
    description:
      "نعمل على بناء أكبر شبكة رقمية في تونس لقطاع السيارات، تعتمد على التكنولوجيا والذكاء الاصطناعي لتقديم تجربة مستخدم متطورة.",
    icon: <FaRobot className="text-4xl text-primary" />,
    delay: 0.4,
  },
];

const SlideUp = (delay) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay, ease: "easeInOut" },
  },
});

const AboutPage = () => {
  return (
    <section className="bg-white pt-20 pb-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold mb-10">من نحن</h1>

          <div className="flex flex-col gap-8">
            {AboutData.map((item) => (
              <motion.div
                key={item.id}
                variants={SlideUp(item.delay)}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="bg-[#f7f7f7] p-6 rounded-2xl hover:bg-white hover:shadow-xl duration-300"
              >
                <div className="flex items-center gap-4 mb-3">
                  {item.icon}
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <img
            src={AboutImg}
            alt="About Auto"
            className="rounded-3xl shadow-2xl w-full max-w-md"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default AboutPage;
