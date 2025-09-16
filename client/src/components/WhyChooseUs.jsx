// src/components/WhyChooseUs.jsx
import { motion } from "framer-motion";
import { FaLeaf, FaHandshake, FaUsers, FaGlassWhiskey } from "react-icons/fa";

const features = [
  {
    icon: <FaGlassWhiskey className="text-[#74C69D] text-5xl" />,
    title: "Fresh & Pure Milk",
    desc: "Delivered straight from our dairy to your home, without preservatives.",
    color: "from-green-100 to-green-50",
  },
  {
    icon: <FaLeaf className="text-[#FFD166] text-5xl" />,
    title: "Organic Practices",
    desc: "Our cows are fed naturally grown fodder ensuring the best quality milk.",
    color: "from-yellow-100 to-yellow-50",
  },
  {
    icon: <FaUsers className="text-[#EF476F] text-5xl" />,
    title: "Trusted by Families",
    desc: "Over 500+ families and businesses rely on us daily for quality dairy.",
    color: "from-pink-100 to-pink-50",
  },
  {
    icon: <FaHandshake className="text-[#0077B6] text-5xl" />,
    title: "Fair & Honest",
    desc: "We believe in transparency and fair trade with farmers & customers.",
    color: "from-blue-100 to-blue-50",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-[#FFF9F1] overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#0077B6] mb-16"
      >
        Why Choose Us?
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, rotateY: 20 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            className={`bg-gradient-to-br ${feature.color} p-8 rounded-2xl shadow-xl text-center relative`}
          >
            <div className="mb-6 flex justify-center">{feature.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.desc}</p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#0077B6] rounded-full"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
