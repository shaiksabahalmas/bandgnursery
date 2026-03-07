import { motion } from "framer-motion";
import WaveDivider from "../components/WaveDivider";

import programsImg from "../assets/hero-programs.webp";
import playgroupIcon from "../assets/playgroup.webp";
import nurseryIcon from "../assets/nursery.webp";
import kindergartenIcon from "../assets/kindergarten.png";

export default function Programs() {

const programList = [
{
id: 1,
title: "Playgroup",
age: "Ages 18 months – 2.5 years",
desc: "Sensory-rich experiences that nurture comfort, confidence, and early motor skills.",
icon: playgroupIcon,
},
{
id: 2,
title: "Nursery",
age: "Ages 2.5 – 3.5 years",
desc: "Creative activities that inspire curiosity, imagination, and early learning habits.",
icon: nurseryIcon,
},
{
id: 3,
title: "Kindergarten",
age: "Ages 3.5 – 5 years",
desc: "Foundational literacy, numeracy, and social skills to prepare children for primary school.",
icon: kindergartenIcon,
},
];

return ( <div className="bg-brand-soft min-h-screen">

```
  {/* HERO */}
  <section className="relative bg-brand-hero text-white pt-24 pb-32 px-6">

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >

        <h1 className="font-heading text-5xl leading-tight">
          Our Programs
        </h1>

        <p className="font-body text-lg opacity-80">
          Carefully designed learning paths that nurture curiosity,
          creativity, and confidence at every stage of early childhood.
        </p>

        <div className="flex gap-4 pt-2">

          <button className="bg-brand-accent px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition">
            Experience Us
          </button>

          <button className="bg-brand-primary px-6 py-3 rounded-full font-medium shadow-lg hover:scale-105 transition">
            Join Now
          </button>

        </div>

      </motion.div>

      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl overflow-hidden shadow-2xl"
      >

        <img
          src={programsImg}
          alt="Programs at Kindle Kids"
          className="w-full h-[420px] object-cover"
        />

      </motion.div>

    </div>

    <WaveDivider color="#F4EFE6" />

  </section>


  {/* PROGRAMS LIST */}
  <section className="max-w-6xl mx-auto px-6 py-24 text-center">

    <h2 className="font-heading text-4xl md:text-5xl text-brand-dark mb-6">
      Explore Our Learning Journey
    </h2>

    <p className="font-body text-brand-warm max-w-2xl mx-auto mb-16">
      We support children from their first steps through their early
      learning years with programs designed to inspire growth and joy.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      {programList.map((item) => (

        <motion.div
          key={item.id}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-lg text-center"
        >

          <img
            src={item.icon}
            alt={item.title}
            className="w-16 mx-auto mb-5"
          />

          <h3 className="font-heading text-xl text-brand-dark mb-2">
            {item.title}
          </h3>

          <p className="text-brand-accent text-sm font-medium mb-3">
            {item.age}
          </p>

          <p className="text-brand-warm text-sm leading-relaxed">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </section>

</div>


);
}
