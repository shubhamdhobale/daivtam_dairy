import { useState } from 'react'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';

const images = [
  "/hero-section-image/m2.jpg",
  "/hero-section-image/m3.jpg",
  "/hero-section-image/m5.jpg",
  "/hero-section-image/m2.jpg",
  "/hero-section-image/milk.jpg",
];

const recommendedProducts = [
  {
    name: "Fresh Cow Milk",
    desc: "Pure & farm-fresh cow milk delivered daily.",
    img: "/products/cowmilk.png",
    price: "₹50 / Litre",
  },
  {
    name: "Organic Paneer",
    desc: "Soft, rich, and protein-packed paneer for your meals.",
    img: "/products/paneer.png",
    price: "₹320 / Kg",
  },
  {
    name: "Pure Desi Ghee",
    desc: "Traditional hand-churned ghee full of aroma & taste.",
    img: "/products/ghee.png",
    price: "₹900 / Kg",
  },
  {
    name: "Fresh Curd",
    desc: "Thick, creamy curd made with natural fermentation.",
    img: "/products/curd.png",
    price: "₹80 / Kg",
  },
];

const Home = () => {

  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: "40px",
    beforeChange: (_, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div>
      <Hero />
      <WhyChooseUs/>

      <section className="py-16 bg-[#FFF9F1]">
        <div className="container mx-auto px-16">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-emerald-900 mb-12"
          >
            Recommended For You
          </motion.h2>

          {/* Product Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {recommendedProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
              >
                {/* Product Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-emerald-800">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                  <p className="text-lg font-bold text-emerald-700 mt-4">
                    {item.price}
                  </p>

                  {/* Button */}
                  <button className="mt-4 flex items-center mx-auto gap-2 px-5 py-2 rounded-full bg-emerald-600 text-white font-medium shadow-md hover:bg-emerald-700 transition">
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-20 ">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-emerald-900 mb-10"
          >
            Farm Gallery
          </motion.h2>

          {/* Slider */}
          <Slider {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-6 py-10">
              <motion.div
                animate={{
                  scale: activeSlide === index ? 1.2 : 1, // Center image scales up
                  opacity: activeSlide === index ? 1 : 0.6, // Side images slightly dimmed
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    Dairy Life #{index + 1}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
        </div>
      </section>

      <Testimonials/>

      <CallToAction/>
    </div>
  )
}

export default Home
