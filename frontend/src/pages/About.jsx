import { motion } from "framer-motion";
import aboutImg from "../assets/hero-about.webp"; // replace with your image
import play from "../assets/facility-play.webp";
import teacher from "../assets/facility-teachers.webp";
import art from "../assets/facility-art.webp";
import food from "../assets/facility-food.webp";
import leftImg from "../assets/leftImg.svg";
export default function About() {
  return (
    <div className="bg-neutral-background min-h-screen">
      {/* About Hero Section */}
      <div className="relative max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          
          {/* LEFT CONTAINER (Timeline / Journey) */}
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-200 flex flex-col items-center justify-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-4 relative z-10">
              Our Journey
            </h2>
            <img 
              src={leftImg} 
              alt="Kindle Kids Journey" 
              className="w-full h-full object-cover rounded-2xl"
            />

          </motion.div>

          {/* RIGHT CONTAINER (Image) */}
          <motion.div
            className="relative bg-neutral-background rounded-2xl shadow-lg overflow-hidden border border-gray-200 flex items-center justify-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src={aboutImg} 
              alt="About Kindle Kids" 
              className="relative w-full h-full object-cover rounded-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Main About Content */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-justify">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary-dark mb-12 text-center">
          About Us
        </h1>

        <div className="space-y-12 text-lg leading-relaxed">
          {/* Block 1 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-chrome mb-4 drop-shadow-sm">🌟 Our Belief</h2>
            <p>
              At <span className="font-bold">Kindle Kids Nursery</span>, every child is born with a 
              spark—an inner light full of curiosity, imagination, and endless potential.
            </p>
          </div>

          {/* Block 2 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-chrome mb-4 drop-shadow-sm">💡 Our Approach</h2>
            <p>
              We go beyond academics. Our nurturing educators focus on developing the 
              <span className="font-semibold"> whole child</span>—emotionally, socially, 
              intellectually, and physically—through play-based, creative, and 
              age-appropriate learning experiences.
            </p>
          </div>

          {/* Block 3 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-chrome mb-4 drop-shadow-sm">🌈 Our Vision</h2>
            <p>
              To be a trusted partner for families and a guiding light in each 
              child’s early learning journey, inspiring confidence, compassion, 
              and curiosity.
            </p>
          </div>

          {/* Block 4 */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-chrome mb-4 drop-shadow-sm">❤️ Our Promise</h2>
            <p className="font-medium text-accent-dark">
              At Kindle Kids Nursery, we don’t just prepare children for school—we prepare them for life.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-neutral-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-primary-dark mb-12 text-center">
            Our Facilities
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            
            {/* Facility Card 1 */}
            <motion.div
            className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            >
              <img
              src={play} 
              alt="Playground vector" 
              className="w-20 h-20 mb-4 mx-auto"
              />
            <h3 className="text-xl font-semibold text-neutral-heading mb-2">
            🌳 Play Areas
           </h3>
           <p className="text-neutral-text">
           Safe and spacious indoor & outdoor spaces for fun-filled physical exploration.
           </p>
            </motion.div>

            {/* Facility Card 2 */}
            <motion.div
              className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
              src={teacher} 
              alt="Playground vector" 
              className="w-20 h-20 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-neutral-heading mb-2">🎓Qualified Staff</h3>
              <p className="text-neutral-text">
                Our experienced and caring educators ensure a nurturing learning journey.
              </p>
            </motion.div>

            {/* Facility Card 3 */}
            <motion.div
              className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
              src={art} 
              alt="Playground vector" 
              className="w-20 h-20 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-neutral-heading mb-2">🖼️Creative Zones</h3>
              <p className="text-neutral-text">
                Colorful, interactive areas where kids express themselves through art and activities.
              </p>
            </motion.div>

            {/* Facility Card 4 */}
            <motion.div
              className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              <img
              src={food} 
              alt="Playground vector" 
              className="w-20 h-20 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-neutral-heading mb-2">🍎Nutrition & Care</h3>
              <p className="text-neutral-text">
                Nutritious meals and on-site healthcare to support growing minds and bodies.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
