import { Link, useNavigate } from "react-router-dom";

export default function GrowthMindFooter() {
  const navigate = useNavigate();

  const goHomeAndScroll = (target) => {
    navigate("/", { state: { scrollTo: target } });
  };

  return (
    <footer className="bg-[#f1f1f1] text-gray-600 text-sm font-normal py-5">
      <div className="max-w-[62.5rem] mx-auto flex justify-between items-center px-6 flex-wrap gap-4">
        <nav>
          <ul className="flex list-none gap-6">
            <li>
              <Link to="/" className="text-gray-800 hover:text-gray-500 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goHomeAndScroll("projects-section")}
                className="text-gray-800 hover:text-gray-500 transition-colors bg-transparent border-0 p-0 cursor-pointer"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => goHomeAndScroll("contact-section")}
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
