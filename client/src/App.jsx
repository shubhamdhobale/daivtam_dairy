import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-[#FFF9F1] min-h-screen text-gray-800 flex flex-col">
      {/* SEO Tags */}
      <Helmet>
        <title>Daivatam Dairy | Fresh & Pure Dairy Products</title>
        <meta
          name="description"
          content="Farm fresh milk, curd, paneer, ghee & more. Delivered directly from Daivatam Dairy to your home."
        />
        <meta property="og:title" content="Daivatam Dairy" />
        <meta
          property="og:description"
          content="Pure, fresh and ethical dairy products delivered to your home."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Navbar always visible */}
      <Navbar />

      {/* Main routed content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}

export default App;
