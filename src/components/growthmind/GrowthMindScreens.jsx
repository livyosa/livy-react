import { motion } from "framer-motion";
import screens1 from "../../assets/images/growthmind-screens-1.png";
import screens2 from "../../assets/images/growthmind-screens-2.png";

const rows = [
  { src: screens1, caption: "Sign in, plant a new habit, and check the week at a glance." },
  { src: screens2, caption: "Run a focus session, confirm before leaving early, and see today's habits." },
];

export default function GrowthMindScreens() {
  return (
    <section className="bg-[#3f5c34] py-24">
      <div className="max-w-[62.5rem] mx-auto px-6">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-[#FFF6DB] mb-3"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          FINAL SCREENS
        </motion.h2>
        <p className="text-[#dbe4d2] max-w-xl mb-14">
          One consistent flow from onboarding through a focus session, built around the
          plant-growth metaphor.
        </p>

        <div className="space-y-16">
          {rows.map((row, i) => (
            <motion.div
              key={row.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img
                src={row.src}
                alt={row.caption}
                className="w-full max-w-3xl mx-auto mb-4"
              />
              <p className="text-center text-sm text-[#c3d0b5]">{row.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
