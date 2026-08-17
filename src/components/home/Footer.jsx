export default function Footer() {
  const scrollToSection = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f1f1f1] text-gray-600 text-sm font-normal py-5">
      <div className="max-w-[62.5rem] mx-auto flex justify-between items-center px-6 flex-wrap gap-4">
        <nav>
          <ul className="flex list-none gap-6">
            <li>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-gray-800 hover:text-gray-500 transition-colors bg-transparent border-0 p-0 cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("projects-section")}
                className="text-gray-800 hover:text-gray-500 transition-colors bg-transparent border-0 p-0 cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => scrollToSection("contact-section")}
                className="text-gray-800 hover:text-gray-500 transition-colors bg-transparent border-0 p-0 cursor-pointer"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <p className="text-gray-500 font-medium">© 2026 OLIVIA TANG</p>
      </div>
    </footer>
  );
}
