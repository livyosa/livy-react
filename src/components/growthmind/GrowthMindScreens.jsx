import { motion } from "framer-motion";

import signIn from "../../assets/images/screens/sign-in.png";
import createHabit from "../../assets/images/screens/create-habit.png";
import dailyPlanner from "../../assets/images/screens/daily-planner.png";
import habitList from "../../assets/images/screens/habit-list.png";
import habitBenefitsHour from "../../assets/images/screens/habit-benefits-hour.png";
import habitBenefitsMonth from "../../assets/images/screens/habit-benefits-month.png";
import focusTimer from "../../assets/images/screens/focus-timer.png";
import leaveFocus from "../../assets/images/screens/leave-focus-confirmation.png";
import reflection from "../../assets/images/screens/reflection-check-in.png";
import completeRating from "../../assets/images/screens/habit-complete-rating.png";
import weeklyProgress from "../../assets/images/screens/weekly-progress.png";
import progressChart from "../../assets/images/screens/progress-chart.png";

const screens = [
  { src: signIn, title: "Sign In" },
  { src: createHabit, title: "Create Habit" },
  { src: dailyPlanner, title: "Daily Planner" },
  { src: habitList, title: "Habit List" },
  { src: habitBenefitsHour, title: "Habit Benefits · Short Term" },
  { src: habitBenefitsMonth, title: "Habit Benefits · Long Term" },
  { src: focusTimer, title: "Focus Timer" },
  { src: leaveFocus, title: "Leave Focus" },
  { src: reflection, title: "Reflection Check-In" },
  { src: completeRating, title: "Habit Complete" },
  { src: weeklyProgress, title: "Weekly Progress" },
  { src: progressChart, title: "Progress Chart" },
];

function ScreenCard({ screen }) {
  return (
    <article className="growthmind-screen-card">
      <div className="growthmind-screen-slot">
        <img src={screen.src} alt={`${screen.title} GrowthMind app screen`} />
      </div>
      <p className="growthmind-screen-label">{screen.title}</p>
    </article>
  );
}

export default function GrowthMindScreens() {
  const loop = [...screens, ...screens];

  return (
    <section className="bg-[#3f5c34] py-24 overflow-hidden">
      <div className="max-w-[72rem] mx-auto px-6 mb-12">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-[#FFF6DB] mb-3"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          FINAL SCREENS
        </motion.h2>
        <p className="text-[#dbe4d2] max-w-2xl">
          Individual UI states from onboarding, habit creation, focus, reflection, and progress.
          Hover over the gallery to pause and inspect a screen.
        </p>
      </div>

      <div className="growthmind-carousel" aria-label="GrowthMind final interface screens">
        <div className="growthmind-carousel-track">
          {loop.map((screen, index) => (
            <ScreenCard key={`${screen.title}-${index}`} screen={screen} />
          ))}
        </div>
      </div>
    </section>
  );
}
