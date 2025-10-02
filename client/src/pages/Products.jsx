import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  const products = [
    { name: "Fresh Cow Milk", img: "/products/cowmilk.png", desc: "Pure, fresh cow milk from our farm.", size: "500ml / 1L" },
    { name: "Paneer", img: "/products/paneer.png", desc: "Soft, fresh paneer – perfect for cooking.", size: "200g / 500g" },
    { name: "Curd", img: "/products/curd.png", desc: "Thick and creamy homemade-style curd.", size: "500ml / 1L" },
    { name: "Ghee", img: "/products/ghee.png", desc: "Traditional desi ghee with rich aroma.", size: "250g / 500g" },
    { name: "Butter", img: "/products/butter.png", desc: "Smooth, delicious butter made from pure milk.", size: "200g / 500g" },
  ];

  

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 pt-20">
      {/* Hero Section */}
      <section className="text-center py-20 bg-[url('/hero-section-image/m2.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="text-white text-5xl font-extrabold drop-shadow-lg">
            Our <span className="text-green-300">Fresh Dairy</span> Products
          </h1>
          <div className="w-24 h-1 bg-green-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-white/80 mt-6 text-lg max-w-2xl mx-auto">
            Pure • Fresh • Hygienic • Farm-to-Table goodness crafted with love from our village.
          </p>
        </div>
      </section>

      {/* Horizontal Cards Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 space-y-20">
        {products.map((product, index) => {
          const isReversed = index % 2 === 1;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isReversed ? 150 : -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center rounded-3xl bg-white/40 backdrop-blur-md shadow-lg overflow-hidden border border-green-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 ${
                isReversed ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Product Image */}
              <div className="md:w-1/2 w-full flex justify-center bg-gradient-to-br from-green-100 to-green-50 p-8">
                <img
                  src={product.img}
                  alt={product.name}
                  className="h-64 object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Product Info */}
              <div className="md:w-1/2 w-full p-10 text-center md:text-left">
                <h3 className="text-3xl font-bold text-green-800 tracking-wide">
                  {product.name}
                </h3>
                <p className="text-gray-700 mt-4 leading-relaxed">{product.desc}</p>
                <p className="text-green-700 font-medium mt-3 text-lg">
                  Available Sizes: <span className="font-semibold">{product.size}</span>
                </p>
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold shadow-md hover:shadow-green-500/50 hover:scale-105 transition duration-300"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
