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
    <section className="bg-neutral-background min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Sitemap
        </h1>
        <ul className="list-disc list-inside space-y-2 text-neutral-text">
          {pages.map((page) => (
            <li key={page.name}>
              <Link to={page.path} className="text-accent hover:underline">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
