import { Link } from "react-router-dom";
import instaIcon from "../assets/insta.webp";
import facebookIcon from "../assets/facebook.webp";
import xIcon from "../assets/twitter.webp";
import threadsIcon from "../assets/threads.webp";

export default function Footer() {
  return (
    <footer className="relative bg-brand-dark text-white pt-24 pb-8">

      {/* Wave transition */}
      <div className="absolute top-0 left-0 w-full -translate-y-full">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#242A28"
            d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="font-heading text-2xl mb-3">
            Kindle Kids
          </h2>

          <p className="text-sm text-brand-warm leading-relaxed max-w-sm">
            A nurturing space where curiosity grows, creativity blossoms,
            and children build confidence through joyful learning.
          </p>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-heading text-lg mb-4">
            Policies & Links
          </h3>

          <ul className="space-y-2 text-sm text-brand-warm">
            <li>
              <Link to="/terms-of-use" className="hover:text-white transition">
                Terms of Use
              </Link>
            </li>

            <li>
              <Link to="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/cookie-policy" className="hover:text-white transition">
                Cookie Policy
              </Link>
            </li>

            <li>
              <Link to="/sitemap" className="hover:text-white transition">
                Sitemap
              </Link>
            </li>

            <li>
              <Link to="/consent-choices" className="hover:text-white transition">
                Consent Choices
              </Link>
            </li>
          </ul>
        </div>

        {/* Social + Map */}
        <div>
          <h3 className="font-heading text-lg mb-4">
            Connect with us
          </h3>

          <div className="flex gap-4 mb-6">

            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instaIcon} alt="Instagram" className="w-6 hover:scale-110 transition" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookIcon} alt="Facebook" className="w-6 hover:scale-110 transition" />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={xIcon} alt="Twitter" className="w-6 hover:scale-110 transition" />
            </a>

            <a href="https://threads.net" target="_blank" rel="noopener noreferrer">
              <img src={threadsIcon} alt="Threads" className="w-6 hover:scale-110 transition" />
            </a>

          </div>

          {/* Map */}
          <div className="w-full h-32 rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-brand-warm">
        © {new Date().getFullYear()} Kindle Kids Nursery. All rights reserved.
      </div>

    </footer>
  );
}