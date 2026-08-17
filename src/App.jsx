import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GrowthMindCaseStudy from "./pages/GrowthMindCaseStudy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/growthmind" element={<GrowthMindCaseStudy />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
