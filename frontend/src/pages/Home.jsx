import { motion } from "framer-motion";
import Hero from "../components/Hero";

import icon1 from "../assets/icon1.webp";
import icon2 from "../assets/icon2.webp";
import icon3 from "../assets/icon3.webp";

export default function Home() {

const highlights = [
{
id: 1,
title: "Safe Environment",
desc: "Our premises are secure, welcoming, and designed to nurture every child.",
icon: icon1,
},
{
id: 2,
title: "Creative Curriculum",
desc: "Play-based learning methods that inspire imagination and curiosity.",
icon: icon2,
},
{
id: 3,
title: "Caring Teachers",
desc: "Dedicated educators who support emotional and intellectual growth.",
icon: icon3,
},
];

return ( <div className="flex flex-col min-h-screen">


  {/* HERO */}
  <section className="relative bg-brand-hero text-white pt-24 pb-32 px-6 overflow-hidden">

    <Hero />

    {/* Built-in hero wave */}
    <svg
      className="absolute bottom-0 left-0 w-full"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#F4EFE6"
        d="M0,160L60,176C120,192,240,224,360,229.3C480,235,600,213,720,208C840,203,960,213,1080,218.7C1200,224,1320,224,1380,224L1440,224L1440,320L0,320Z"
      />
    </svg>

  </section>


  {/* HIGHLIGHTS */}
  <section className="bg-brand-soft py-24 px-6">

    <div className="max-w-7xl mx-auto text-center">

      <h2 className="font-heading text-4xl md:text-5xl text-brand-dark mb-6">
        A Place Where Young Minds Bloom
      </h2>

      <p className="font-body text-brand-warm max-w-2xl mx-auto mb-16">
        At Bloom & Grow Nursery we create joyful learning environments that encourage
        curiosity, confidence, and creativity in every child.
      </p>

      <div className="grid md:grid-cols-3 gap-10">

        {highlights.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all"
          >

            <img src={item.icon} alt={item.title} className="w-16 h-16 mb-6" />

            <h3 className="font-heading text-xl text-brand-dark mb-3">
              {item.title}
            </h3>

            <p className="font-body text-sm text-brand-warm leading-relaxed">
              {item.desc}
            </p>

          </motion.div>
        ))}

      </div>

    </div>

  </section>

</div>


);
}
