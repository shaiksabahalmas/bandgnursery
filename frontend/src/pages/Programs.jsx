import { motion } from "framer-motion";

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
desc: "Sensory-rich experiences nurturing confidence and early motor skills.",
icon: playgroupIcon,
},
{
id: 2,
title: "Nursery",
age: "Ages 2.5 – 3.5 years",
desc: "Creative activities that inspire curiosity and imagination.",
icon: nurseryIcon,
},
{
id: 3,
title: "Kindergarten",
age: "Ages 3.5 – 5 years",
desc: "Foundational literacy and social skills for school readiness.",
icon: kindergartenIcon,
},
];

return ( <div className="bg-brand-soft min-h-screen">


  {/* HERO */}
  <section className="relative bg-brand-hero text-white pt-24 pb-32 px-6 overflow-hidden">

    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >

        <h1 className="font-heading text-5xl">
          Our Programs
        </h1>

        <p className="font-body text-lg opacity-80">
          Learning paths designed to nurture curiosity and creativity.
        </p>

      </motion.div>


      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl overflow-hidden shadow-2xl"
      >

        <img
          src={programsImg}
          alt="Programs"
          className="w-full h-[420px] object-cover"
        />

      </motion.div>

    </div>

    {/* Hero bottom wave */}
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


  {/* PROGRAMS LIST */}
  <section className="max-w-6xl mx-auto px-6 py-24 text-center">

    <div className="grid md:grid-cols-3 gap-10">

      {programList.map((item) => (

        <motion.div
          key={item.id}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-8 rounded-2xl shadow-lg"
        >

          <img
            src={item.icon}
            alt={item.title}
            className="w-16 mx-auto mb-5"
          />

          <h3 className="font-heading text-xl text-brand-dark mb-2">
            {item.title}
          </h3>

          <p className="text-brand-accent text-sm mb-3">
            {item.age}
          </p>

          <p className="text-brand-warm text-sm">
            {item.desc}
          </p>

        </motion.div>

      ))}

    </div>

  </section>

</div>


);
}
