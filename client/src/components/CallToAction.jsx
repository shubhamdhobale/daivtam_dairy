// src/components/CallToAction.jsx
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="relative w-full bg-gradient-to-t from-[#0077B6] to-[#74C69D] py-20 overflow-hidden">
      <img
        src="/decor/milk-splash.png"
        alt="Milk Splash"
        className="absolute top-0 left-0 w-48 opacity-20"
      />
      <img
        src="/decor/cow.png"
        alt="Cow Illustration"
        className="absolute bottom-0 right-0 w-64 opacity-30"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-9 max-w-4xl mx-auto text-center text-white px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-lg">
          Join the <span className="text-[#FFD166]">Daivatam Dairy</span> Family
        </h2>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          Whether you’re a customer, a café owner, or a business partner, we’d
          love to bring you the purest dairy experience.  
          <br /> Fresh, ethical, and straight from our farm to you.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* WhatsApp Button */}
          <motion.a
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919876543210"
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition"
          >
            <FaWhatsapp className="text-2xl" /> Chat on WhatsApp
          </motion.a>

          {/* Email Button */}
          <motion.a
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:daivatamdairy@gmail.com?subject=Enquiry"
            className="flex items-center gap-3 px-8 py-4 bg-[#FFD166] text-gray-900 font-bold rounded-full shadow-lg hover:bg-[#f6c54f] transition"
          >
            <FaEnvelope className="text-2xl" /> Send an Email
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default CallToAction;
