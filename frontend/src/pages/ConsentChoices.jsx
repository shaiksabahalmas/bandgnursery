export default function Consent() {
  return (
    <section className="bg-neutral-background min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Consent Choices
        </h1>
        <p className="text-neutral-text leading-relaxed mb-4">
          You have the right to manage your consent for personal data and cookies.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-text">
          <li>You can withdraw consent at any time.</li>
          <li>Manage cookie preferences via your browser settings.</li>
          <li>Contact us if you want your personal data removed.</li>
          <li>We will respect your choices while providing core services.</li>
        </ul>
      </div>
    </section>
  );
}
