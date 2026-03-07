import { motion } from "framer-motion";
import heroImg from "../assets/hero-kids.webp";

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-24">

      <div className="grid md:grid-cols-2 gap-12 items-stretch">

        {/* LEFT CONTENT */}
        <motion.div
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-brand-soft flex flex-col justify-center h-full"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="font-heading text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
            Learning Blossoms <br /> at Bloom & Grow Nursery
          </h1>

          <p className="font-body text-lg text-brand-warm leading-relaxed mb-8">
            A joyful environment where curiosity grows, creativity flourishes,
            and children build confidence through playful learning experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">

            <button className="bg-brand-accent text-white px-7 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition duration-300">
              Explore Programs
            </button>

            <button className="bg-brand-primary text-white px-7 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition duration-300">
              Join Now
            </button>

          </div>

        </motion.div>


        {/* RIGHT IMAGE */}
        <motion.div
          className="relative rounded-3xl overflow-hidden shadow-2xl h-full"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >

          {/* Decorative Glow */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl"></div>

          <img
            src={heroImg}
            alt="Children learning and playing"
            className="absolute inset-0 w-full h-full object-cover"
          />

        </motion.div>

      </div>

    </section>
  );
}