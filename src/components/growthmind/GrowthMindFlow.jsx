import { motion } from "framer-motion";
import flow from "../../assets/images/growthmind-flow.png";

export default function GrowthMindFlow() {
  return (
    <section className="bg-[#FFF0C8] py-24">
      <div className="max-w-[68rem] mx-auto px-6">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-gray-800 mb-3"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          USER FLOW
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mb-10">
          Mapping every path — planting a habit, logging progress, running a focus
          session — before any screens were drawn kept the feature set from sprawling.
        </p>

        <motion.figure
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={flow}
            alt="GrowthMind user flow diagram"
            className="block min-w-[760px] w-full h-auto"
          />
        </motion.figure>
      </div>
    </section>
  );
}
