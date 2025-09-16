// src/components/Testimonials.jsx
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Patil",
    role: "Local Farmer",
    feedback:
      "Daivatam Dairy has been a true partner in my journey. Their products are always fresh, and their support for farmers is commendable.",
    rating: 5,
    img: "/coustomer.png",
  },
  {
    name: "Sneha Joshi",
    role: "Cafe Owner",
    feedback:
      "The quality of milk and dairy products is unmatched. My customers love the taste – I’ll always recommend Daivatam Dairy.",
    rating: 4,
    img: "/coustomer.png",
  },
  {
    name: "Vikram Shah",
    role: "B2B Client",
    feedback:
      "Professional, reliable, and committed to quality. Partnering with Daivatam Dairy has boosted my business significantly.",
    rating: 5,
    img: "/coustomer.png",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="bg-[#FFF9F1] py-20 px-6 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center text-[#0077B6] mb-12"
      >
        What Our Customers Say
      </motion.h2>

      <Slider {...settings}>
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="px-4 py-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition">
              <FaQuoteLeft className="text-4xl text-[#FFD166] mb-4" />
              <p className="text-gray-700 italic mb-6">“{t.feedback}”</p>
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#0077B6]">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
              <div className="flex justify-center mt-3 text-[#FFD166]">
                {[...Array(t.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
