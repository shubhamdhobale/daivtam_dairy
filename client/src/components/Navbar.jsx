import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-[#FFD166] font-semibold"
      : "hover:text-[#FFD166] transition-colors";

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white z-10">
      <h1 className="text-2xl font-bold text-[#0077B6]">Daivatam Dairy</h1>
      <ul className="flex space-x-6 text-lg">
        <li>
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
