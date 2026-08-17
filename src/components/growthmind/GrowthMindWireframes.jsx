import { motion } from "framer-motion";
import wireframes from "../../assets/images/growthmind-wireframes.png";

export default function GrowthMindWireframes() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[62.5rem] mx-auto px-6">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-gray-800 mb-3"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          MID FIDELITY
        </motion.h2>
        <p className="text-gray-600 max-w-xl mb-10">
          Grayscale wireframes let the team agree on layout and content hierarchy before
          color, type, or iconography entered the conversation.
        </p>

        <motion.img
          src={wireframes}
          alt="GrowthMind mid-fidelity wireframes"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full max-w-2xl mx-auto"
        />
      </div>
    </section>
  );
}
