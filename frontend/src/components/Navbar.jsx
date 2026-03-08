import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logonew from "../assets/logonew.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const pages = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">

        {/* Logo */}
<Link to="/" className="flex items-center gap-3">

  {/* Logo Badge */}
  <div className="bg-white rounded-full p-1 shadow-md">
    <img
      src={logonew}
      alt="Bloom & Grow"
      className="w-20 h-20 object-contain"
    />
  </div>

  <span
    className={`font-heading text-3xl transition ${
      scrolled ? "text-brand-dark" : "text-white"
    }`}
  >
    Bloom & Grow Nursery
  </span>

</Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">

          {pages.map((page) => {
            const isActive = location.pathname === page.path;

            return (
              <Link
                key={page.name}
                to={page.path}
                className={`font-body text-sm relative transition ${
                  scrolled ? "text-brand-dark" : "text-white"
                }`}
              >
                {page.name}

                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-brand-accent"></span>
                )}
              </Link>
            );
          })}

          {/* CTA */}
          <Link
            to="/contact"
            className="bg-brand-accent text-white px-5 py-2 rounded-full text-sm font-medium shadow hover:scale-105 transition"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden ${
            scrolled ? "text-brand-dark" : "text-white"
          }`}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-lg mt-4 mx-4 rounded-xl p-6 flex flex-col items-center gap-4">

          {pages.map((page) => (
            <Link
              key={page.name}
              to={page.path}
              onClick={() => setMenuOpen(false)}
              className="text-brand-dark font-medium"
            >
              {page.name}
            </Link>
          ))}

          <Link
            to="/contact"
            className="bg-brand-accent text-white px-6 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Enroll Now
          </Link>

        </div>
      )}
    </nav>
  );
}