import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger & close icons
import logo from "../assets/logo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-primary-dark h-20 shadow-md relative flex items-center z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full px-4 md:px-6">
        
        {/* Brand + Logo (clickable) */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <img src={logo} alt="Kindle Kids Logo" className="w-10 h-10 sm:w-11 sm:h-11" />
          <span className="font-bold text-base sm:text-lg tracking-wide text-white whitespace-nowrap">
            Kindle Kids Nursery
          </span>
        </div>

        {/* Desktop Centered Nav */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white rounded-full px-4 py-2 flex space-x-4 xl:space-x-6 shadow-md border border-gray-200">
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Link
                  key={page.name}
                  to={page.path}
                  className={`relative px-3 py-1 rounded-full font-medium transition-all duration-300 text-sm
                    ${
                      isActive
                        ? "text-neutral-heading"
                        : "text-primary-dark hover:text-accent-dark"
                    }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-secondary rounded-full -z-10 transition-all duration-300"></span>
                  )}
                  {page.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right side (CTA + Hamburger) */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* CTA button only on desktop (from lg up) */}
          <Link
            to="/contact"
            className="hidden lg:inline-block bg-accent text-white px-4 py-2 rounded-full font-medium shadow hover:bg-accent-dark transition"
          >
            Enroll Now
          </Link>

          {/* Hamburger visible < lg */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-2 right-2 bg-white shadow-lg rounded-xl lg:hidden">
          <div className="flex flex-col items-center py-4 space-y-2">
            {pages.map((page) => {
              const isActive = location.pathname === page.path;
              return (
                <Link
                  key={page.name}
                  to={page.path}
                  onClick={() => setMenuOpen(false)}
                  className={`w-full text-center py-2 font-medium transition rounded-md
                    ${
                      isActive
                        ? "bg-secondary text-neutral-heading"
                        : "text-primary-dark hover:text-accent-dark"
                    }`}
                >
                  {page.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
