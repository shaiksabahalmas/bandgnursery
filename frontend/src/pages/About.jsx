import { motion } from "framer-motion";
import aboutImg from "../assets/hero-about.webp";
import play from "../assets/facility-play.webp";
import teacher from "../assets/facility-teachers.webp";
import art from "../assets/facility-art.webp";
import food from "../assets/facility-food.webp";
import leftImg from "../assets/leftImg.svg";
export default function About() {
  return (
    <div className="bg-brand-soft min-h-screen">

      {/* HERO / JOURNEY */}
      <section className="relative bg-brand-hero text-white py-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT JOURNEY */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >

            <h1 className="font-heading text-5xl leading-tight">
              Our Journey
            </h1>

            <p className="font-body text-lg opacity-80">
              Kindle Kids was created with a simple belief — childhood should
              be filled with curiosity, creativity, and joy.
            </p>

            <img
              src={leftImg}
              alt="Kindle Kids Journey"
              className="w-full max-w-md"
            />

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >

            <img
              src={aboutImg}
              alt="About Kindle Kids"
              className="w-full h-[420px] object-cover"
            />

          </motion.div>

        </div>

        {/* WAVE DIVIDER */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 320">
            <path
              fill="#F4EFE6"
              d="M0,224L60,208C120,192,240,160,360,160C480,160,600,192,720,197.3C840,203,960,181,1080,176C1200,171,1320,181,1380,186.7L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div>

      </section>



      {/* ABOUT CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <h2 className="font-heading text-4xl md:text-5xl text-brand-dark mb-12">
          About Kindle Kids
        </h2>

        <div className="space-y-10 font-body text-lg text-brand-warm leading-relaxed">

          <div>
            <h3 className="font-heading text-2xl text-brand-dark mb-3">
              Our Belief
            </h3>

            <p>
              Every child is born with a spark—an inner light full of curiosity,
              imagination, and endless potential.
            </p>
          </div>


          <div>
            <h3 className="font-heading text-2xl text-brand-dark mb-3">
              Our Approach
            </h3>

            <p>
              Our educators focus on developing the whole child emotionally,
              socially, intellectually, and physically through play-based
              learning.
            </p>
          </div>


          <div>
            <h3 className="font-heading text-2xl text-brand-dark mb-3">
              Our Vision
            </h3>

            <p>
              To inspire confidence, compassion, and curiosity while supporting
              each child's early learning journey.
            </p>
          </div>


          <div>
            <h3 className="font-heading text-2xl text-brand-dark mb-3">
              Our Promise
            </h3>

            <p className="text-brand-accent font-medium">
              We don’t just prepare children for school — we prepare them for life.
            </p>
          </div>

        </div>

      </section>



      {/* FACILITIES */}
      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="font-heading text-4xl text-center text-brand-dark mb-16">
            Our Facilities
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-soft p-8 rounded-2xl shadow-lg text-center"
            >
              <img src={play} className="w-16 mx-auto mb-4" />
              <h3 className="font-heading text-xl text-brand-dark mb-2">
                Play Areas
              </h3>
              <p className="text-brand-warm text-sm">
                Safe indoor and outdoor spaces for exploration and fun.
              </p>
            </motion.div>


            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-soft p-8 rounded-2xl shadow-lg text-center"
            >
              <img src={teacher} className="w-16 mx-auto mb-4" />
              <h3 className="font-heading text-xl text-brand-dark mb-2">
                Qualified Staff
              </h3>
              <p className="text-brand-warm text-sm">
                Passionate educators guiding each child’s development.
              </p>
            </motion.div>


            {/* CARD 3 */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-soft p-8 rounded-2xl shadow-lg text-center"
            >
              <img src={art} className="w-16 mx-auto mb-4" />
              <h3 className="font-heading text-xl text-brand-dark mb-2">
                Creative Zones
              </h3>
              <p className="text-brand-warm text-sm">
                Art and activity spaces encouraging creativity.
              </p>
            </motion.div>


            {/* CARD 4 */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-brand-soft p-8 rounded-2xl shadow-lg text-center"
            >
              <img src={food} className="w-16 mx-auto mb-4" />
              <h3 className="font-heading text-xl text-brand-dark mb-2">
                Nutrition & Care
              </h3>
              <p className="text-brand-warm text-sm">
                Healthy meals and attentive care for growing minds.
              </p>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );}