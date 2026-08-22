import phones from "../../assets/images/growthmind-phones.png";

import { motion } from "framer-motion";

export default function Hero() {
  return (
<section className="relative min-h-screen overflow-hidden bg-[#FFF6DB] text-neutral-900 flex items-start justify-center pt-28 md:pt-32 pb-12">
      
      {/* Floating background */}
      <motion.div
        className="absolute top-20 left-16 w-28 h-28 bg-emerald-700/10 rounded-full blur-2xl"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-32 right-20 w-36 h-36 bg-green-700/10 rounded-full blur-2xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

{/* Hero content wrapper */}
<div className="relative z-10 flex flex-col items-center text-center px-6">

  {/* Hero text */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="max-w-xl"
  >
    <h1 className="text-5xl md:text-6xl mb-4 text-[#3f5c34]" style={{ fontFamily: "'Pacifico', cursive" }}>
      GrowthMind
    </h1>
<p className="text-neutral-700 text-lg">
      Building habits through clarity, structure, and calm.
    </p>
  </motion.div>

  {/* Hero image */}
  <motion.img
    src={phones}
    alt="GrowthMind app screens"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.8 }}
    className="mt-12 w-full max-w-4xl"
  />

</div>


    </section>
  );
}
