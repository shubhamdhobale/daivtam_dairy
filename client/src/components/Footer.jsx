import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-green-100 via-white to-green-50 text-gray-800 pt-16 pb-8 overflow-hidden w-full">
      {/* Wave top effect */}
      {/* <div className="absolute top-0 left-0 min-w-screen overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.91,22.19,98.59,29.05,146.8,20.41C230,56,284,21,339.1,9.86c54.23-11,104.79,1.85,158,13.42C561,34,615,42,668,37.58c54.68-4.57,104.36-27.51,158-30.53C885.23,4.82,939,27,993.78,43.27c56.44,16.93,113.14,18.91,170.22,1.49V0Z"
            opacity=".25"
            fill="#86efac"
          ></path>
          <path
            d="M0,0V15.81C47.91,36.93,98.59,46.86,146.8,46.86c83.2,0,137.2-45.27,192.3-61.38,54.23-15.83,104.79-5.41,158,5.76C561,6,615,20,668,18.16c54.68-1.68,104.36-17,158-20.34C885.23-5.2,939,8.92,993.78,18.82c56.44,10.67,113.14,12,170.22-1.36V0Z"
            opacity=".5"
            fill="#4ade80"
          ></path>
          <path
            d="M0,0V5.63C47.91,19.57,98.59,29.49,146.8,29.49,230,29.49,284,8,339.1,1.84c54.23-6.11,104.79,2.52,158,8.74C561,18,615,26,668,24.32c54.68-1.77,104.36-11.36,158-14.06C885.23,7.21,939,16.44,993.78,21.64c56.44,5.39,113.14,6.08,170.22-1.17V0Z"
            fill="#22c55e"
          ></path>
        </svg>
      </div>   */}

      {/* Content */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-green-700">Anjani Agro Dairy</h2>
          <p className="mt-3 text-gray-600">
            Freshness you can trust, quality you deserve. Delivering dairy
            goodness every day from our farm to your family.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-green-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="hover:text-green-600 transition">
                Products
              </a>
            </li>
            <li>
              <a href="/gallery" className="hover:text-green-600 transition">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">Get in Touch</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <MapPin size={18} className="text-green-600" />
              Rahuri, Maharashtra, India
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} className="text-green-600" />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} className="text-green-600" />
              info@anjaniagro.com
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Anjani Agro Dairy. All rights reserved.
      </div>
    </footer>
  );
}
