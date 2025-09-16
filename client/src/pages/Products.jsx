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

  const handleEnquiry = (productName) => {
    navigate(`/contact?product=${encodeURIComponent(productName)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="text-center py-16 bg-[url('/images/dairy-bg.jpg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-white text-5xl font-bold drop-shadow-lg">
          Our Fresh Dairy Products
        </h1>
        <p className="relative text-white/80 mt-4 text-lg">
          Pure • Fresh • Hygienic • Farm-to-Table
        </p>
      </section>

      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white/50 backdrop-blur-xl rounded-2xl shadow-xl p-6 text-center transform transition-all duration-300 hover:shadow-2xl"
          >
            <img src={product.img} alt={product.name} className="h-40 mx-auto object-contain drop-shadow-lg" />
            <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.desc}</p>
            <p className="text-green-700 font-medium mt-2">Available: {product.size}</p>
            <button
              onClick={() => handleEnquiry(product.name)}
              className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition"
            >
              Enquire Now
            </button>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
