import { motion } from "framer-motion";
import { useState } from "react";

import envelope from "../assets/mail.webp";
import phone from "../assets/phone.webp";
import location from "../assets/location.webp";

export default function Contact() {

const [form, setForm] = useState({
name: "",
email: "",
message: "",
});

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
alert(`Thanks ${form.name}! We'll reach out to you soon.`);
setForm({ name: "", email: "", message: "" });
};

return ( <div className="bg-brand-soft min-h-screen">


  {/* HERO */}
  <section className="relative bg-brand-hero text-white pt-24 pb-32 px-6 text-center overflow-hidden">

    <div className="max-w-3xl mx-auto">

      <h1 className="font-heading text-5xl mb-4">
        Get in Touch
      </h1>

      <p className="font-body text-lg opacity-80">
        We'd love to hear from you. Reach out with questions,
        admissions inquiries, or simply to say hello.
      </p>

    </div>

    {/* Hero bottom wave */}
    <svg
      className="absolute -bottom-px left-0 w-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#F4EFE6"
        d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,208C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,320L0,320Z"
      />
    </svg>

  </section>


  {/* CONTACT SECTION */}
  <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">

    {/* CONTACT INFO */}
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >

      <h2 className="font-heading text-4xl text-brand-dark">
        Contact Information
      </h2>

      <p className="font-body text-brand-warm max-w-md">
        We welcome visits, questions, and conversations about your
        child’s early learning journey.
      </p>

      <div className="space-y-6">

        <div className="flex items-center gap-4">
          <img src={envelope} alt="email" className="w-8"/>
          <p className="text-brand-dark">contact@bandgnursery.ae</p>
        </div>

        <div className="flex items-center gap-4">
          <img src={phone} alt="phone" className="w-8"/>
          <p className="text-brand-dark">+971 065759566</p>
        </div>

        <div className="flex items-center gap-4">
          <img src={location} alt="location" className="w-8"/>
          <p className="text-brand-dark">123 Rainbow Street, Chennai</p>
        </div>

      </div>

    </motion.div>


    {/* CONTACT FORM */}
    <motion.form
      onSubmit={handleSubmit}
      initial={{ x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-xl p-10 space-y-6"
    >

      <h3 className="font-heading text-2xl text-brand-dark text-center">
        Send Us a Message
      </h3>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent"
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-accent"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-200 p-4 rounded-xl h-32 resize-none focus:outline-none focus:ring-2 focus:ring-brand-accent"
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-brand-accent text-white py-4 rounded-full font-medium shadow-lg hover:opacity-90 transition"
      >
        Send Message
      </motion.button>

    </motion.form>

  </section>

</div>


);
}
