import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/home/Header";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Contact from "../components/home/Contact";
import Footer from "../components/home/Footer";

export default function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;

    const timer = window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      navigate("/", { replace: true, state: null });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [location.state, navigate]);

  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
