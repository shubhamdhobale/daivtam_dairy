import { useState } from 'react'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import { FaLeaf, FaHeart, FaCheckCircle } from "react-icons/fa";

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
    pauseOnHover: false,
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

  const videosettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,         
    arrows: false,
    pauseOnHover: false,
  };

  const videos = [
    { id: 1, src: "/videos/farm1.mp4" },
    { id: 2, src: "/videos/farm2.mp4" },
    { id: 3, src: "/videos/farm3.mp4" },
  ];

  const posts = [
    { id: 1, img: "/posts/insta5.webp" , href: "#" },
    { id: 2, img: "/posts/insta2.jpg" , href: "#" },
    { id: 3, img: "/posts/insta3.jpg" , href: "#" },
    { id: 4, img: "/posts/insta4.webp" , href: "#" },
  ];

  return (
    <div className='overflow-hidden pt-20'>
      <section>
        <Hero />
      </section>

      <section className="relative bg-white py-16 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0077B6] mb-6">
            About Daivatam
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Founded in <span className="font-semibold text-[#0077B6]">2000</span>, 
            <span className="font-semibold"> Navnath Dairy</span> has established itself 
            as a trusted name in milk procurement and processing. 
            With years of expertise, the company has now launched its premium dairy brand 
            <span className="font-semibold text-green-700"> Daivatam</span>, 
            dedicated to delivering <span className="italic">purity, taste,</span> 
            and <span className="italic">innovation</span> in dairy products.
          </p>
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-1 bg-[#FFD166] rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#FFF9F1]">
        <div className="container mx-auto px-6 md:px-16">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-emerald-900 mb-12"
          >
            Our Dairy Delights
          </motion.h2>

          {/* Slider */}
          <Slider {...settings}>
            {recommendedProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="px-4"
              >
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
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
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>
      
      <section>
        <WhyChooseUs/>
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-900 mb-12">
            Our Farm in Motion
          </h2>
          <Slider {...videosettings}>
            {videos.map((video) => (
              <div key={video.id} className="flex justify-center">
                <video
                  src={video.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="rounded-2xl shadow-lg max-h-[500px] w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-16 bg-[#FFF9F1]">
        <div className="container mx-auto px-6 md:px-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-emerald-900 mb-12">
            From Our Social Feed
          </h2>
          <Slider {...settings} className="rounded-3xl overflow-hidden">
            {posts.map((post, index) => (
              <a 
                key={index} 
                href={post.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group"
              >
                <img
                  src={post.img}
                  alt={`Instagram Post ${index + 1}`}
                  className="w-full h-96 object-cover rounded-3xl group-hover:scale-95 transition duration-500 px-4"
                />
              </a>
            ))}
          </Slider>
        </div>
      </section>

      <section>
        <Testimonials/>
      </section>

      <section className="py-16 bg-[#FFF9F1]">
        <div className="container mx-auto px-6 md:px-16 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-emerald-900 mb-8"
          >
            Animal Welfare
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 md:text-lg leading-relaxed max-w-3xl mx-auto mb-12"
          >
            At <span className="font-semibold text-emerald-800">Daivatam Dairy</span>, 
            our commitment goes beyond milk. We ensure that our cows are treated with 
            care and respect, enjoying nutritious, toxin-free feed and a healthy environment. 
            Every drop of milk you enjoy comes from happy, well-cared-for animals — because 
            purity, taste, and compassion go hand in hand. 🐄💛
          </motion.p>

          {/* Interactive Features */}
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            >
              <FaLeaf className="text-green-600 text-4xl mb-4" />
              <h3 className="font-semibold text-xl mb-2">Natural Feed</h3>
              <p className="text-gray-600 text-sm">
                Our cows enjoy high-quality, nutrient-rich feed for healthy and pure milk.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            >
              <FaHeart className="text-red-500 text-4xl mb-4" />
              <h3 className="font-semibold text-xl mb-2">Happy Cows</h3>
              <p className="text-gray-600 text-sm">
                We prioritize animal well-being, creating a caring and stress-free environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer"
            >
              <FaCheckCircle className="text-yellow-500 text-4xl mb-4" />
              <h3 className="font-semibold text-xl mb-2">Pure & Safe Milk</h3>
              <p className="text-gray-600 text-sm">
                Every product is sourced from well-treated cows and processed under strict hygiene standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section>
        <CallToAction/>
      </section>
    </div>
  )
}

export default Home
