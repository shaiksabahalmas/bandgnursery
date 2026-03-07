import { Link } from "react-router-dom";
import instaIcon from "../assets/insta.webp";
import facebookIcon from "../assets/facebook.webp";
import xIcon from "../assets/twitter.webp";
import threadsIcon from "../assets/threads.webp";

export default function Footer() {
return ( <footer className="bg-brand-dark text-white pt-0 pb-8">


  {/* TOP WAVE */}
  <svg
    className="w-full h-[120px] md:h-[160px]"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#F4EFE6"
      d="M0,224L80,202.7C160,181,320,139,480,138.7C640,139,800,181,960,197.3C1120,213,1280,203,1360,197.3L1440,192L1440,0L0,0Z"
    />
  </svg>

  <div className="max-w-7xl mx-auto px-6 grid gap-12 md:grid-cols-3 pt-10">

    {/* BRAND */}
    <div>
      <h2 className="font-heading text-2xl mb-3">
        Bloom & Grow Nursery
      </h2>

      <p className="text-sm text-brand-warm leading-relaxed max-w-sm">
        A nurturing space where curiosity grows, creativity blossoms,
        and children build confidence through joyful learning.
      </p>
    </div>


    {/* LINKS */}
    <div>
      <h3 className="font-heading text-lg mb-4">
        Policies & Links
      </h3>

      <ul className="space-y-2 text-sm text-brand-warm">

        <li>
          <Link to="/terms" className="hover:text-white transition">
            Terms of Use
          </Link>
        </li>

        <li>
          <Link to="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </li>

        <li>
          <Link to="/cookies" className="hover:text-white transition">
            Cookie Policy
          </Link>
        </li>

        <li>
          <Link to="/sitemap" className="hover:text-white transition">
            Sitemap
          </Link>
        </li>

        <li>
          <Link to="/consent" className="hover:text-white transition">
            Consent Choices
          </Link>
        </li>

      </ul>
    </div>


    {/* SOCIAL */}
    <div>

      <h3 className="font-heading text-lg mb-4">
        Connect with us
      </h3>

      <div className="flex gap-4 mb-6">

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} alt="Instagram" className="w-6 hover:scale-110 transition"/>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="w-6 hover:scale-110 transition"/>
        </a>

        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="Twitter" className="w-6 hover:scale-110 transition"/>
        </a>

        <a href="https://threads.net" target="_blank" rel="noopener noreferrer">
          <img src={threadsIcon} alt="Threads" className="w-6 hover:scale-110 transition"/>
        </a>

      </div>

      <div className="w-full h-32 rounded-xl overflow-hidden shadow-md">
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2130.010257222152!2d55.52127836226839!3d25.38437083333489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7b2afaa49c5%3A0xce6930c9f1f00fcd!2z2KrYtdmI2YrYsSDYp9mE2YXZhtiq2KzYp9iq!5e0!3m2!1sen!2sin!4v1772906093268!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
        />
      </div>

    </div>

  </div>


  {/* COPYRIGHT */}
  <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-brand-warm">
    © {new Date().getFullYear()} Bloom & Grow Nursery. All rights reserved.
  </div>

</footer>


);
}
