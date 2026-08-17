import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Header() {
  const navLinks = [
    { label: "Projects", target: "projects-section" },
    { label: "Contact", target: "contact-section" },
  ];

  const variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  const scrollToSection = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[999] bg-[#f8f8f8] shadow-md py-4">
      <div className="max-w-[62.5rem] mx-auto flex justify-between items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Link
            to="/"
            onClick={handleLogoClick}
            className="font-bold text-xl text-gray-800 no-underline hover:text-gray-500 transition-colors"
          >
            OT
          </Link>
        </motion.div>

        <nav>
          <ul className="flex list-none gap-10">
            {navLinks.map((item, i) => (
              <motion.li
                key={item.label}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={variants}
              >
                <button
                  type="button"
                  onClick={() => scrollToSection(item.target)}
                  className="text-gray-800 font-semibold hover:text-gray-400 transition-colors bg-transparent border-0 p-0 cursor-pointer"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
