export default function Privacy() {
  return (
    <section className="bg-neutral-background min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Privacy Policy
        </h1>
        <p className="text-neutral-text leading-relaxed mb-4">
          At Kindle Kids Nursery, we respect your privacy. This policy explains what personal data we collect and how it is used.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-text">
          <li>We may collect contact information and enrollment details.</li>
          <li>Data is used solely for educational and administrative purposes.</li>
          <li>We do not sell or share personal data with third parties without consent.</li>
          <li>Cookies may be used to improve website experience.</li>
        </ul>
        <p className="mt-4 text-neutral-text">
          By using our website, you consent to this privacy policy.
        </p>
      </div>
    </section>
  );
}
