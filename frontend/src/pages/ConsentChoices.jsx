export default function Consent() {
  return (
    <div className="bg-brand-soft min-h-screen">

      <section className="relative bg-brand-hero text-white py-24 px-6 text-center">

        <h1 className="font-heading text-5xl mb-4">
          Consent Choices
        </h1>

        <p className="font-body text-lg opacity-80">
          Manage how your personal information and cookies are used.
        </p>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 320">
            <path fill="#F4EFE6"
              d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L0,320Z"
            />
          </svg>
        </div>

      </section>


      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-10 font-body text-brand-warm space-y-4">

          <p>You have the right to manage your consent preferences.</p>

          <ul className="list-disc list-inside space-y-2">
            <li>You can withdraw consent at any time.</li>
            <li>Adjust cookie preferences in your browser settings.</li>
            <li>Contact us if you wish to remove your personal data.</li>
            <li>We respect your privacy while providing essential services.</li>
          </ul>

        </div>
      </section>

    </div>
  );
}