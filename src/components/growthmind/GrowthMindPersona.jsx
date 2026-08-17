import { motion } from "framer-motion";

export default function GrowthMindPersona() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[62.5rem] mx-auto px-6">

        {/* Goal statement */}
        <motion.div
          className="max-w-2xl mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-extrabold text-2xl tracking-[0.15em] text-gray-800 mb-4">
            GOAL
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Empower users to grow into their best selves by fostering habits with kindness,
            accountability, and visual progress — using a system inspired by growth and
            nature instead of guilt-driven streak counters.
          </p>
        </motion.div>

        {/* Persona */}
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-gray-800 mb-8"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          PERSONA
        </motion.h2>

        <motion.div
          className="bg-[#FFF6DB] rounded-2xl p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-8 items-start"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 rounded-full bg-[#7c9473] flex items-center justify-center text-white text-2xl font-bold shrink-0">
            HS
          </div>

          <div>
            <h3 className="font-bold text-xl text-gray-800">Hana Song</h3>
            <p className="text-sm text-gray-500 mb-5">
              College student balancing school, swim team, and gaming
            </p>

            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-2">
                <span className="text-[#3f5c34]">•</span>
                Struggles with ADHD, poor time management, and motivation
              </li>
              <li className="flex gap-2">
                <span className="text-[#3f5c34]">•</span>
                Feels pressured to succeed and often compares herself to others
              </li>
              <li className="flex gap-2">
                <span className="text-[#3f5c34]">•</span>
                Aims to improve sleep habits and make time for guitar practice
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
