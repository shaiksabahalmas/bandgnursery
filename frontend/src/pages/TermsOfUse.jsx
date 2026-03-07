export default function Terms() {
  return (
    <div className="bg-brand-soft min-h-screen">

      {/* Hero */}
      <section className="relative bg-brand-hero text-white py-24 px-6 text-center">

        <h1 className="font-heading text-5xl mb-4">
          Terms of Use
        </h1>

        <p className="font-body text-lg opacity-80 max-w-2xl mx-auto">
          Please read these terms carefully before using the Kindle Kids Nursery website.
        </p>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 320">
            <path
              fill="#F4EFE6"
              d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L0,320Z"
            />
          </svg>
        </div>

      </section>


      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 font-body text-brand-warm leading-relaxed space-y-4">

          <p>
            Welcome to Kindle Kids Nursery website. By accessing or using our
            website, you agree to comply with these Terms of Use.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>All content is for informational purposes only.</li>
            <li>Content may not be reproduced without permission.</li>
            <li>We may update these terms at any time.</li>
            <li>Some sections may require registration or parental consent.</li>
          </ul>

          <p>
            Continued use of this website constitutes acceptance of these terms.
          </p>

        </div>
      </section>

    </div>
  );
}