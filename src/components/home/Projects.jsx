import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import growthmindDefault from "../../assets/images/banner/growthmind-default.png";
import growthmindHover from "../../assets/images/banner/growthmind-hover.png";

export default function Projects() {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="projects-section"
      className="pt-32 pb-12 mt-2 bg-[#fafafa]"
    >
      <div className="max-w-[62.5rem] mx-auto px-6 text-left">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] mb-8 text-gray-800"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            to="/growthmind"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="block rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={hovered ? growthmindHover : growthmindDefault}
              alt="GrowthMind — habit tracking app case study"
              className="w-full h-auto"
            />
          </Link>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h3 className="font-bold text-lg text-gray-800">GrowthMind</h3>
              <p className="text-sm text-gray-500">UX/UI case study — habit tracking app</p>
            </div>
            <Link
              to="/growthmind"
              className="text-sm font-semibold text-[#3f5c34] hover:text-[#2f4a2c] transition-colors whitespace-nowrap"
            >
              View case study →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}