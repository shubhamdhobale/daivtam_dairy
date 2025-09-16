import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF9F1]">
      {/* Hero */}
      <section className="relative text-center py-16 bg-[url('/images/dairy-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">About Us</h1>
          <p className="text-lg text-white/80 mt-3">Our Journey • Our Promise • Our Values</p>
        </div>
      </section>

      {/* About Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="rounded-3xl overflow-hidden shadow-xl"
        >
          <img
            src="/about/image.png"
            alt="Our Dairy Farm"
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-green-700">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-green-700">Daivatam Dairy</span>, we believe in 
            bringing you the purest and freshest dairy products, straight from our farms to your table.  
            With a commitment to quality, hygiene, and tradition, we nurture our cows with love and 
            care to ensure every drop of milk is as natural as it gets.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our story began with a passion for authentic dairy and a vision to connect people 
            with the farm-fresh goodness they truly deserve. Over the years, we’ve grown into a trusted 
            name for milk, paneer, curd, ghee, and more – while staying rooted in our values.
          </p>
        </motion.div>
      </section>

      {/* Mission & Stats */}
      <section className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-4xl font-bold text-green-700">10+</h3>
            <p className="text-gray-600 mt-2">Years of Experience</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-4xl font-bold text-green-700">1000+</h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-4xl font-bold text-green-700">100%</h3>
            <p className="text-gray-600 mt-2">Pure & Natural Products</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
