import { Link } from "react-router-dom";
import instaIcon from "../assets/insta.webp";
import facebookIcon from "../assets/facebook.webp";
import xIcon from "../assets/twitter.webp";
import threadsIcon from "../assets/threads.webp";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-3">

        {/* Left: Branding & Tagline */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Kindle Kids</h2>
          <p className="text-sm text-secondary leading-relaxed">
            Nurturing curiosity, creativity, and joy for every child.
          </p>
        </div>

        {/* Center: Policies / Links */}
        <div className="text-sm">
          <h3 className="font-semibold mb-3">Policies & Links</h3>
          <ul className="space-y-2">
            <li><Link to="/terms" className="hover:text-secondary transition">Terms of Use</Link></li>
            <li><Link to="/privacy" className="hover:text-secondary transition">Privacy Policy</Link></li>
            <li><Link to="/cookies" className="hover:text-secondary transition">Cookie Policy</Link></li>
            <li><Link to="/sitemap" className="hover:text-secondary transition">Sitemap</Link></li>
            <li><Link to="/consent" className="hover:text-secondary transition">Consent Choices</Link></li>
          </ul>
        </div>

        {/* Right: Social & Map */}
        <div className="flex flex-col space-y-4 items-start">
          <h3 className="font-semibold">Connect with us</h3>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" className="w-6 h-6 cursor-pointer hover: scale-110 transition-transform" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="w-6 h-6 cursor-pointer hover:scale-110 text-secondary transition-transform" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="X" className="w-6 h-6 cursor-pointer hover:scale-110 text-secondary transition-transform" />
            </a>
            <a href="https://threads.net" target="_blank" rel="noopener noreferrer">
              <img src={threadsIcon} alt="Threads" className="w-6 h-6 cursor-pointer hover:scale-110 text-secondary transition-transform" />
            </a>
          </div>

          {/* Map */}
          <div className="w-full h-32 bg-gray-200 rounded-lg overflow-hidden shadow-md mt-4">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Kindle Kids. All rights reserved.
      </div>
    </footer>
  );
}
