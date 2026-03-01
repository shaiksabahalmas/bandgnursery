export default function Terms() {
  return (
    <section className="bg-neutral-background min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Terms of Use
        </h1>
        <p className="text-neutral-text leading-relaxed mb-4">
          Welcome to Kindle Kids Nursery website. By accessing or using our website, you agree to comply with these Terms of Use. Please read them carefully.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-text">
          <li>All content on this website is for informational purposes only.</li>
          <li>You may not reproduce, distribute, or use any content without permission.</li>
          <li>We reserve the right to update these terms at any time.</li>
          <li>Accessing certain sections may require registration or parental consent.</li>
        </ul>
        <p className="mt-4 text-neutral-text">
          Continued use of the site constitutes acceptance of the updated terms.
        </p>
      </div>
    </section>
  );
}
