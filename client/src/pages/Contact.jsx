// src/pages/Contact.jsx
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaLinkedin, FaWhatsapp ,FaUser , FaHome} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Contact = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");

  // Extract product from query params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const product = params.get("product");
    if (product) {
      setMessage(`I would like to enquire about ${product}.`);
    }
  }, [location.search]);

  return (
    <div className="bg-[#FFF9F1] min-h-screen pb-16">

  {/* Contact Form Section with Background */}
  <div className="relative w-full overflow-hidden h-[calc(100vh-80px)] shadow-2xl flex items-center justify-center">
    {/* Background Dairy Image */}
    <div
      className="absolute inset-0 bg-contain bg-center"
      style={{
        backgroundImage: "url('/hero-section-image/milk.jpg')",
      }}
    ></div>
    {/* Dark overlay for contrast */}
    <div className="absolute inset-0 bg-black/30"></div>

    {/* Contact Form */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative z-10 bg-white/50 backdrop-blur-xl shadow-2xl rounded-3xl flex flex-col items-center justify-center text-center py-6 w-3/7 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0077B6] mb-10">
        Send Us a Message
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD166]" />
          <input
            type="text"
            placeholder="Your Name"
            className="pl-12 p-4 w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FFD166] shadow-md transition"
          />
        </motion.div>

        {/* Contact Number */}
        <motion.div whileFocus={{ scale: 1.02 }} className="relative">
          <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#74C69D]" />
          <input
            type="text"
            placeholder="Contact Number"
            className="pl-12 p-4 w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#74C69D] shadow-md transition"
          />
        </motion.div>

        {/* Address */}
        <motion.div whileFocus={{ scale: 1.02 }} className="relative md:col-span-2">
          <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-[#EF476F]" />
          <input
            type="text"
            placeholder="Address"
            className="pl-12 p-4 w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#EF476F] shadow-md transition"
          />
        </motion.div>

        {/* Message */}
        <motion.div whileFocus={{ scale: 1.02 }} className="relative md:col-span-2">
          <FaEnvelope className="absolute left-4 top-4 text-[#FFD166]" />
          <textarea
            rows="5"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="pl-12 pt-4 p-4 w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#FFD166] shadow-md transition"
          ></textarea>
        </motion.div>

        {/* Submit */}
        <motion.button
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="md:col-span-2 bg-[#74C69D] hover:bg-[#5bb08a] text-white font-bold py-4 rounded-2xl shadow-lg transition"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  </div>

  {/* Owner Info */}
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className="max-w-3xl mx-auto mt-16 bg-white shadow-xl rounded-xl p-6 text-center"
  >
    <h3 className="text-2xl font-bold text-[#0077B6]">Contact Information</h3>
    <div className="flex flex-col md:flex-row justify-center items-center mt-4 space-y-4 md:space-y-0 md:space-x-12">
      <p className="flex items-center gap-2 text-lg">
        <FaPhone className="text-green-600" /> +91 98765 43210
      </p>
      <p className="flex items-center gap-2 text-lg">
        <FaEnvelope className="text-yellow-500" /> daivatamdairy@gmail.com
      </p>
    </div>
  </motion.div>

  {/* Map */}
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
    className="max-w-5xl mx-auto mt-12 rounded-xl overflow-hidden shadow-2xl"
  >
    <iframe
      title="Daivatam Dairy Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635.0095732753157!2d74.65952967506155!3d19.439095581841677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc930004cee473%3A0x1bad78d865be45b4!2z4KSF4KSC4KSc4KSo4KWAIOClsuCkl-CljeCksOCliywg4KSo4KS14KSo4KS-4KSlIOCkpuClgeCkpw!5e1!3m2!1sen!2sin!4v1757958833163!5m2!1sen!2sin"
      width="100%"
      height="400"
      allowFullScreen=""
      loading="lazy"
      className="rounded-xl"
    />
  </motion.div>

  {/* Socials + B2B */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="mt-12 text-center"
  >
    <h3 className="text-2xl font-bold text-[#0077B6] mb-4">Connect With Us</h3>
    <div className="flex justify-center gap-6 text-3xl">
      <FaInstagram className="text-pink-500 hover:scale-110 transition" />
      <FaFacebook className="text-blue-600 hover:scale-110 transition" />
      <FaLinkedin className="text-blue-800 hover:scale-110 transition" />
      <FaWhatsapp className="text-green-600 hover:scale-110 transition" />
    </div>

    <motion.a
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
      href="mailto:daivatamdairy@gmail.com?subject=B2B%20Enquiry"
      className="inline-block mt-6 px-10 py-3 bg-[#FFD166] text-gray-900 font-bold rounded-full shadow-lg hover:bg-[#f6c54f] transition"
    >
      B2B Enquiry
    </motion.a>
  </motion.div>
</div>

  );
};

export default Contact;
