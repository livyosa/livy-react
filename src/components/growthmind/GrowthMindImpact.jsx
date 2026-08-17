import { motion } from "framer-motion";

const stats = [
  { value: ">90%", label: "College students who said habit tracking helps them" },
  { value: ">85%", label: "Said visual progress keeps them working or studying consistently" },
  { value: ">89%", label: "Wanted to see visual progress, not just a checklist" },
  { value: ">90%", label: "Said accountability was key to sticking with a habit" },
];

export default function GrowthMindImpact() {
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
          RESEARCH
        </motion.h2>
        <p className="text-gray-600 max-w-xl mb-14">
          Independent research and a short survey of college students shaped what the app
          needed to prioritize before any screens were designed.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-[#3f5c34] mb-2">
                {stat.value}
              </div>
              <p className="text-sm text-gray-600 leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
