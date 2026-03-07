import { Link } from "react-router-dom";

export default function Sitemap() {

  const pages = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Terms of Use", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Cookie Policy", path: "/cookies" },
    { name: "Consent Choices", path: "/consent" },
  ];

  return (
    <div className="bg-brand-soft min-h-screen">

      <section className="relative bg-brand-hero text-white py-24 px-6 text-center">

        <h1 className="font-heading text-5xl mb-4">
          Sitemap
        </h1>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 320">
            <path fill="#F4EFE6"
              d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L0,320Z"
            />
          </svg>
        </div>

      </section>


      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 font-body text-brand-warm">

          <ul className="space-y-3">
            {pages.map((page) => (
              <li key={page.name}>
                <Link to={page.path} className="text-brand-accent hover:underline">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </section>

    </div>
  );
}