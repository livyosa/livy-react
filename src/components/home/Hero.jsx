import { motion } from "framer-motion";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-36 pb-28 bg-[#fafafa] overflow-hidden">
      <div className="max-w-[62.5rem] mx-auto px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-semibold tracking-[0.18em] uppercase text-gray-400 mb-4">
            Designer + Builder
          </p>

          <h1 className="font-extrabold text-5xl md:text-6xl tracking-[0.12em] text-gray-800 mb-6">
            OLIVIA TANG
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-3 leading-relaxed">
            UI/UX Designer · Front-End Developer · QA
          </p>

          <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed mb-8">
            I design clear interfaces and build them into responsive, usable products.
          </p>

          <motion.button
            type="button"
            onClick={scrollToProjects}
            className="inline-flex items-center px-6 py-3 font-semibold text-gray-700 border border-gray-300 rounded-md bg-transparent hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300 cursor-pointer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
