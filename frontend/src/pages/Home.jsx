import { motion } from "framer-motion";
import Hero from "../components/Hero";

// Import your icons
import icon1 from "../assets/icon1.webp";
import icon2 from "../assets/icon2.webp";
import icon3 from "../assets/icon3.webp";

export default function Home() {
  const highlights = [
    { id: 1, title: "Safe Environment", desc: "Our premises are fully secure and nurturing for every child.", icon: icon1 },
    { id: 2, title: "Creative Curriculum", desc: "We use playful teaching techniques tailored for early learners.", icon: icon2 },
    { id: 3, title: "Caring Staff", desc: "Our teachers are warm, trained, and passionate about child growth.", icon: icon3 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-neutral-background">
      
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center">
        <Hero />
      </section>

      {/* Highlights Section */}
      <main className="flex-1 p-8 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-primary-dark mb-12 text-center">
          Welcome to Kindle Kids!
        </h1>
        <div className="grid md:grid-cols-3 gap-10">
          {highlights.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow border border-secondary-light flex flex-col items-center text-center"
              whileHover={{ scale: 1.03 }}
            >
              {/* Icon */}
              <img 
                src={item.icon} 
                alt={item.title} 
                className="w-20 h-20 mb-4"
              />
              {/* Title */}
              <h2 className="text-2xl font-semibold mb-2 text-primary-dark">
                {item.title}
              </h2>
              {/* Description */}
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
