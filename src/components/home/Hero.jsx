import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero.png";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 bg-[#fafafa] overflow-hidden">
      <div className="max-w-[62.5rem] mx-auto px-6 flex items-center justify-between gap-12">
        <motion.div
          className="flex-1 max-w-lg md:w-[55%]"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-extrabold text-5xl tracking-widest text-gray-800 mb-5">
            OLIVIA TANG
          </h1>
          <p className="text-xl text-gray-500 mb-5 leading-relaxed">
            UI &amp; UX Designer
          </p>
          <motion.button
            type="button"
            onClick={scrollToProjects}
            className="inline-block px-8 py-3 font-semibold text-gray-500 border border-gray-400 rounded-md bg-white hover:bg-gray-600 hover:text-white transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.button>
        </motion.div>

        <motion.div
          className="flex-shrink-0 flex justify-center md:w-[40%] w-full"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            src={heroImg}
            alt="Olivia Tang"
            className="w-full max-w-[16rem] h-auto opacity-80"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
}
