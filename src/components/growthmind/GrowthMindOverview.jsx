import { motion } from "framer-motion";

export default function GrowthMindOverview() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[62.5rem] mx-auto px-6 grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-gray-800"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          OVERVIEW
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            GrowthMind is a mobile habit-tracking app that turns every completed habit into
            growth for a digital plant, giving progress a visual, tangible form instead of
            a checklist. The idea: the same way compounding builds up money over time,
            small daily habits compound into meaningful change.
          </p>

          <p className="text-sm text-gray-500 mb-6">
            A team project with Joshua, Kyle, and Zaira — 2025. I led user research,
            persona development, and UI design across the flow.
          </p>

          <blockquote className="border-l-4 border-[#7c9473] pl-5 py-1 text-gray-600 italic">
            "Habits are the compound interest of self-improvement."
            <span className="block not-italic text-sm text-gray-400 mt-1">
              — James Clear, Atomic Habits
            </span>
          </blockquote>

          <div className="flex flex-wrap gap-2 mt-8">
            {["UX Research", "Persona Development", "Wireframing", "UI Design", "Figma"].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium tracking-wide text-[#3f5c34] bg-[#eef1e6] px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
