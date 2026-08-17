import { motion } from "framer-motion";
import flow from "../../assets/images/growthmind-flow.png";

export default function GrowthMindFlow() {
  return (
    <section className="bg-[#FFF6DB] py-24">
      <div className="max-w-[62.5rem] mx-auto px-6">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-gray-800 mb-3"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          USER FLOW
        </motion.h2>
        <p className="text-gray-600 max-w-xl mb-10">
          Mapping every path — planting a habit, logging progress, running a focus
          session — before any screens were drawn kept the feature set from sprawling.
        </p>

        <motion.div
          className="bg-white rounded-2xl p-4 md:p-6 overflow-x-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={flow}
            alt="GrowthMind user flow diagram"
            className="min-w-[700px] w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
