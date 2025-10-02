import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [activePos, setActivePos] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const activeLink = document.querySelector(".nav-active");
    if (activeLink) {
      setActivePos({
        width: activeLink.offsetWidth,
        left: activeLink.offsetLeft,
      });
    }
  }, [location]);

  return (
    <nav className="flex justify-around items-center px-2 shadow-md bg-white z-10 fixed top-0 left-0 right-0">
      <img
        className="h-22"
        src="/logos/Daivatam logo.jpg"
      />
      <ul className="relative flex space-x-6 text-lg">
        {/* highlight bar */}
        <span
          className="absolute top-0 bottom-0 bg-[#0077B6]/10 rounded-md transition-all duration-300 ease-in-out"
          style={{
            width: activePos.width,
            left: activePos.left,
          }}
        />

        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-semibold px-3 py-2"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 transition-all duration-100 ease-in-out"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-semibold px-3 py-2"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 transition-all duration-100 ease-in-out"
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-semibold px-3 py-2"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 transition-all duration-100 ease-in-out"
            }
          >
            Blogs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-semibold px-3 py-2"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 transition-all duration-100 ease-in-out"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "nav-active relative z-10 text-[#0077B6] font-semibold px-3 py-2"
                : "relative z-10 hover:text-[#0077B6] hover:bg-[#0077B6]/10 hover:rounded-md px-3 py-2 transition-all duration-100 ease-in-out"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <img
        className="h-16"
        src="/logos/Logo Navnath.jpg"
      />
    </nav>
  );
}
