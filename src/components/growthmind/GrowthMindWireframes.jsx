import { motion } from "framer-motion";

import signIn from "../../assets/images/wireframes/wireframe-sign-in.png";
import focusTimer from "../../assets/images/wireframes/wireframe-focus-timer.png";
import habitBenefitsHour from "../../assets/images/wireframes/wireframe-habit-benefits-hour.png";
import habitBenefitsMonth from "../../assets/images/wireframes/wireframe-habit-benefits-month.png";
import weeklyProgress from "../../assets/images/wireframes/wireframe-weekly-progress.png";
import progressChart from "../../assets/images/wireframes/wireframe-progress-chart.png";

const wireframes = [
  { src: signIn, title: "Welcome / Sign In" },
  { src: habitBenefitsHour, title: "Habit Benefits · Short Term" },
  { src: habitBenefitsMonth, title: "Habit Benefits · Long Term" },
  { src: focusTimer, title: "Focus Timer" },
  { src: weeklyProgress, title: "Weekly Progress" },
  { src: progressChart, title: "Progress Chart" },
];

function WireframeCard({ wireframe }) {
  return (
    <article className="growthmind-wireframe-card">
      <div className="growthmind-wireframe-slot">
        <img
          src={wireframe.src}
          alt={`${wireframe.title} mid-fidelity wireframe`}
        />
      </div>
      <p className="growthmind-wireframe-label">{wireframe.title}</p>
    </article>
  );
}

export default function GrowthMindWireframes() {
  const loop = [...wireframes, ...wireframes];

  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[72rem] mx-auto px-6 mb-12">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-gray-800 mb-3"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          MID FIDELITY
        </motion.h2>

        <p className="text-gray-600 max-w-2xl">
          These wireframes established hierarchy, navigation, and core interactions before
          the visual system was applied. Hover over the gallery to pause and inspect a screen.
        </p>
      </div>

      <div
        className="growthmind-wireframe-carousel"
        aria-label="GrowthMind mid-fidelity wireframes"
      >
        <div className="growthmind-wireframe-track">
          {loop.map((wireframe, index) => (
            <WireframeCard
              key={`${wireframe.title}-${index}`}
              wireframe={wireframe}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
