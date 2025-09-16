import { motion } from "framer-motion";
import { FaRegClock, FaUser } from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "Benefits of Fresh Dairy Products",
    image: "/blog/blog1.png",
    author: "Daivatam Dairy",
    date: "Sept 15, 2025",
    excerpt: "Discover why fresh milk and dairy products are healthier and tastier than processed alternatives...",
  },
  {
    id: 2,
    title: "Sustainable Dairy Farming Practices",
    image: "/blog/blog2.png",
    author: "Team Daivatam",
    date: "Sept 10, 2025",
    excerpt: "Learn how eco-friendly dairy farming supports the environment and improves product quality...",
  },
  {
    id: 3,
    title: "The Journey of Milk: From Cow to Cup",
    image: "/blog/blog3.png",
    author: "Admin",
    date: "Aug 28, 2025",
    excerpt: "Follow the journey of pure milk from our farms to your home, ensuring freshness at every step...",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-[#FFF9F1] min-h-screen pt-24 pb-16 px-6 md:px-16">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#74C69D] to-[#0077B6] text-white rounded-3xl shadow-lg p-10 md:p-16 mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg md:text-xl">Fresh Insights, Dairy Knowledge & Healthy Living</p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover transform hover:scale-105 transition duration-500"
            />
            <div className="p-6 text-left">
              <h2 className="text-xl font-bold text-[#0077B6] mb-2">{blog.title}</h2>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <FaUser /> {blog.author}
                </span>
                <span className="flex items-center gap-1">
                  <FaRegClock /> {blog.date}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{blog.excerpt}</p>
              <a
                href={`/blog/${blog.id}`}
                className="text-[#74C69D] font-semibold hover:text-[#0077B6] transition"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
