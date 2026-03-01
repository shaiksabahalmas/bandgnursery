import { motion } from "framer-motion";
import heroImg from "../assets/hero-kids.webp";

export default function Hero() {
  return (
    <div className=" relative max-w-7xl mx-auto px-6 pt-12">
      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        
        {/* LEFT CONTAINER */}
<motion.div 
  className="bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col justify-center border border-gray-200"
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4 relative z-10">
    Learning is Fun at Kindle Kids!
  </h1>
  
  <p className="text-lg md:text-xl text-neutral-text max-w-lg mx-auto relative z-10 leading-relaxed">
    Engaging, age-appropriate learning paths for every stage — filled with curiosity, creativity, and confidence.
  </p>

  {/* Buttons */}
  <div className="flex space-x-4 mt-6">
    <button className="bg-accent text-white px-6 py-3 rounded-xl hover:bg-accent-dark transition duration-300 font-semibold shadow-md">
      Explore Programs
    </button>
    <button className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition duration-300 font-semibold shadow-md">
      Join Now
    </button>
  </div>
</motion.div>


        {/* RIGHT CONTAINER */}
        <motion.div
          className="relative bg-neutral-background rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex items-center justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-gradient-to-br from-primary-light/20 to-secondary-light/20 rounded-full blur-3xl"></div>
          <img 
            src={heroImg} 
            alt="Kids Learning" 
            className="relative w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

      </div>
    </div>
  );
}
