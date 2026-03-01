import { motion } from "framer-motion";
import programsImg from "../assets/hero-programs.webp"; // 👈 replace with your hero image
import playgroupIcon from "../assets/playgroup.webp";   // temporary icons
import nurseryIcon from "../assets/nursery.webp";
import kindergartenIcon from "../assets/kindergarten.png";

export default function Programs() {
  const programList = [
    {
      id: 1,
      title: "🧸 Playgroup",
      age: "Ages 18 months – 2.5 years",
      desc: "Sensory-rich experiences to build comfort, confidence, and basic motor skills.",
      icon: playgroupIcon,
    },
    {
      id: 2,
      title: "🎨 Nursery",
      age: "Ages 2.5 – 3.5 years",
      desc: "Interactive activities to promote curiosity, expression, and early learning habits.",
      icon: nurseryIcon,
    },
    {
      id: 3,
      title: "📚 Kindergarten",
      age: "Ages 3.5 – 5 years",
      desc: "Foundational literacy, math, social skills, and preparation for primary school.",
      icon: kindergartenIcon,
    },
  ];

  return (
    <div className="bg-neutral-background min-h-screen">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          
          {/* LEFT CONTAINER (Empty for now) */}
<motion.div 
  className="relative rounded-2xl p-10 md:p-12 border border-pink-200 shadow-lg 
             bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50 
             flex flex-col items-center justify-center text-center"
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  {/* Decorative doodle background */}
  <div className="absolute inset-0 pointer-events-none opacity-10">
    <div className="w-32 h-32 bg-pink-300 rounded-full blur-3xl absolute top-0 left-0"></div>
    <div className="w-24 h-24 bg-yellow-300 rounded-full blur-2xl absolute bottom-10 right-10"></div>
  </div>

  <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4 relative z-10">
    🌈 Our Programs
  </h1>
  <p className="text-lg md:text-xl text-neutral-text max-w-lg mx-auto relative z-10 leading-relaxed">
    Engaging, age-appropriate learning paths for every stage — 
    filled with <span className="text-pink-500 font-semibold">curiosity</span>, 
    <span className="text-yellow-500 font-semibold"> creativity</span>, and 
    <span className="text-blue-500 font-semibold"> confidence</span>.
  </p>
            <div className="flex space-x-4 mt-6">
            <button className="bg-accent text-white px-6 py-3 rounded-xl hover:bg-accent-dark transition duration-300 font-semibold shadow-md">
              Experience Us
            </button>
            <button className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition duration-300 font-semibold shadow-md">
              Join Now
            </button>
          </div>
</motion.div>

          {/* RIGHT CONTAINER (Image) */}
          <motion.div
            className="relative bg-neutral-background rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={programsImg} 
              alt="Programs at Kindle Kids" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </motion.div>

        </div>
      </div>

      {/* Main Programs Content */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">


        <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-6">
          Explore Our Learning Journey
        </h2>
        <p className="text-lg text-neutral-text max-w3xl mx-auto mb-12">
          We support children from their first steps through their early learning years with these carefully designed programs.
        </p>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {programList.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              {/* Icon */}
              <img 
                src={item.icon} 
                alt={item.title} 
                className="w-20 h-20 mb-4 mx-auto"
              />
              {/* Title */}
              <h3 className="text-xl font-semibold text-neutral-heading mb-1">
                {item.title}
              </h3>
              {/* Age */}
              <p className="text-accent-dark font-medium mb-2">{item.age}</p>
              {/* Description */}
              <p className="text-neutral-text">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
