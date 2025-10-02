import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="">
      {/* Hero Video Section */}
      <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
        <section className="relative w-full h-96 flex items-center justify-center overflow-hidden">
        <video src="/videos/footer_video.mp4" autoPlay muted loop className="w-full h-full object-cover absolute z-0"/>
        <div className="w-full h-full relative text-center flex flex-col justify-center items-center z-10 bg-whi bg-opacity-30 p-8 rounded-md">
          <h1 className="font-bold text-3xl tracking-wide font-sans leading-loose drop-shadow-2xl text-white">The Ancient Farming Practices Thriving in Our Village</h1>
          <p className="font-semibold tracking-wider text-md text-white">An ancient system of farming that still thrives in our village</p>
          <button className="relative px-8 py-4 mt-12 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#0077B6] bg-white transition-all duration-500  hover:text-white hover:scale-110 hover:outline-[#0077B6] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#0077B6]">
            Learn more
          </button>
        </div>
      </section>
      </section>

      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-br from-green-50 via-white to-green-100 text-gray-800 pt-20 pb-10 overflow-hidden w-full">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-green-700">Daivtam Agro Dairy</h2>
            <p className="mt-3 text-gray-600 leading-relaxed text-sm md:text-base">
              Freshness you can trust, quality you deserve. Delivering dairy
              goodness every day from our farm to your family.  
              <br />
              <span className="italic text-green-700 font-medium">
                “Purity in every drop, care in every step.”
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {["Home", "Products", "Gallery", "Contact"].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-green-600 hover:underline transition duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Promise */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">Our Promise</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>✅ 100% Pure & Fresh Dairy</li>
              <li>✅ Ethically Sourced Milk</li>
              <li>✅ Hygienic Processing</li>
              <li>✅ Trusted by Families</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm text-gray-600">
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
            <div className="flex gap-4 mt-6">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: Instagram, link: "#" },
                { Icon: Twitter, link: "#" },
              ].map(({ Icon, link }, idx) => (
                <a
                  key={idx}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-green-600 text-white rounded-full hover:scale-110 hover:bg-green-700 transition transform duration-300 shadow-md"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        {/* <div className="border-t border-green-200 mt-10 pt-4 text-center text-sm text-gray-600">
          Anjani Agro Dairy. All rights reserved. | 
          <span className="text-green-700 font-medium"> Made with ❤️ in Maharashtra</span>
        </div> */}
      </div>
    </footer>
  );
}
