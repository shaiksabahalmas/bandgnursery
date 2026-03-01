import { motion } from "framer-motion";
import { useState } from "react";
import contactBg from "../assets/contact-bg.jpg"; // funky background illustration
import envelope from "../assets/mail.webp";
import phone from "../assets/phone.webp";
import location from "../assets/location.webp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks ${form.name}! We'll reach out to you soon.`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section 
      className="relative bg-neutral-background min-h-screen flex items-center py-20 px-6"
      style={{ backgroundImage: `url(${contactBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/20 z-0 rounded-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10">

        {/* Left Contact Info */}
        <motion.div 
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col items-center text-center space-y-6"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold text-primary-dark mb-4">Get in Touch!</h1>
          <p className="text-neutral-text max-w-md">
            We’d love to hear from you! Whether it’s a question, a suggestion, or just saying hi 👋
          </p>

          <div className="flex flex-col space-y-4 mt-6 w-full">
            <div className="flex items-center space-x-4">
              <img src={envelope} alt="email" className="w-10 h-10" />
              <p className="text-neutral-heading font-medium">contact@kindlekids.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <img src={phone} alt="phone" className="w-10 h-10" />
              <p className="text-neutral-heading font-medium">+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-4">
              <img src={location} alt="location" className="w-10 h-10" />
              <p className="text-neutral-heading font-medium">123 Rainbow Street, Fun City</p>
            </div>
          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.form
          className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 flex flex-col space-y-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold text-primary-dark text-center">Send Us a Message</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="rounded-xl p-4 border border-gray-300 focus:border-accent-dark focus:ring-2 focus:ring-accent-light outline-none transition-all"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="rounded-xl p-4 border border-gray-300 focus:border-accent-dark focus:ring-2 focus:ring-accent-light outline-none transition-all"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="rounded-xl p-4 border border-gray-300 focus:border-accent-dark focus:ring-2 focus:ring-accent-light outline-none transition-all h-32 resize-none"
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-white font-bold py-4 rounded-xl shadow-lg hover:bg-accent-dark transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
