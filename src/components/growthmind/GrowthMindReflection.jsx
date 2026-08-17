import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GrowthMindReflection() {
  return (
    <section className="bg-[#FFF6DB] py-24">
      <div className="max-w-[62.5rem] mx-auto px-6 grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-gray-800"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          REFLECTION
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-5 text-gray-700 leading-relaxed"
        >
          <p>
            Working across a four-person team surfaced a real process gap: without a shared
            task tracker, screens drifted apart — multiple contributors designed competing
            versions of the same "home" screen, each with slightly different iconography
            and layout. If I could go back, I'd bring in Jira early to assign ownership and
            keep the design system consistent from the start.
          </p>
          <p>
            For this case study, I chose one coherent path through the screens we did
            produce rather than showing every variant — a better reflection of the product
            than the raw output of an uncoordinated team.
          </p>
          <p>
            That gap became a lesson I now apply on my own: define the token set (color,
            type, iconography) before handing off screens, not after.
          </p>

          <Link
            to="/"
            className="inline-block mt-4 font-semibold text-[#3f5c34] hover:text-[#2f4a2c] transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
