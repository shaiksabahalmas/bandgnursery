export default function Cookies() {
  return (
    <section className="bg-neutral-background min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
          Cookie Policy
        </h1>
        <p className="text-neutral-text leading-relaxed mb-4">
          This website uses cookies to enhance your experience. Cookies are small files stored on your device.
        </p>
        <ul className="list-disc list-inside space-y-2 text-neutral-text">
          <li>Necessary cookies for site functionality.</li>
          <li>Analytics cookies to understand site usage.</li>
          <li>Preference cookies to remember your settings.</li>
          <li>You can manage or disable cookies in your browser settings.</li>
        </ul>
      </div>
    </section>
  );
}
