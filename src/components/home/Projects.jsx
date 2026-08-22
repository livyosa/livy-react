import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import growthmindDefault from "../../assets/images/banner/growthmind-default.png";
import growthmindHover from "../../assets/images/banner/growthmind-hover.png";

export default function Projects() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="projects-section" className="pt-24 pb-16 bg-[#fafafa]">
      <div className="max-w-[62.5rem] mx-auto px-6 text-left">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] mb-8 text-gray-800"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          PROJECTS
        </motion.h2>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Link
            to="/growthmind"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="block rounded-2xl overflow-hidden bg-transparent shadow-[0_10px_30px_rgba(15,23,42,0.10)] hover:shadow-[0_14px_36px_rgba(15,23,42,0.14)] transition-shadow duration-300"
          >
            <img
              src={hovered ? growthmindHover : growthmindDefault}
              alt="GrowthMind — habit tracking app case study"
              className="block w-full h-auto"
            />
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-5">
            <div>
              <h3 className="font-bold text-lg text-gray-800">GrowthMind</h3>
              <p className="text-sm text-gray-500">UX/UI case study — habit tracking app</p>
            </div>

            <Link
              to="/growthmind"
              className="inline-flex w-fit items-center px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-md hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-300"
            >
              View case study →
            </Link>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
