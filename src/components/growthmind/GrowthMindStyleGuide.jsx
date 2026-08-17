import { motion } from "framer-motion";
import icons from "../../assets/images/growthmind-icons.png";

const greens = [
  { name: "Primary", hex: "#72882B" },
  { name: "Tint #1", hex: "#567120" },
  { name: "Tint #2", hex: "#3A5A15" },
];

const golds = [
  { name: "Background", hex: "#FFF1C9" },
  { name: "Secondary", hex: "#FFC043" },
  { name: "Supporting", hex: "#C27114" },
  { name: "Accent", hex: "#914D12" },
];

export default function GrowthMindStyleGuide() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[62.5rem] mx-auto px-6">
        <motion.h2
          className="font-extrabold text-2xl tracking-[0.15em] text-gray-800 mb-14"
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          VISUAL DESIGN
        </motion.h2>

        {/* Typography specimen */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div
            className="text-8xl text-[#3f5c34] mb-10"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Aa
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Logo</p>
              <p className="font-medium text-gray-800">Pacifico Regular</p>
              <p className="text-gray-500 mt-1">62px · line-height 1.1</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Headings</p>
              <p className="font-medium text-gray-800">Mukta Vaani 800 / 600 / 400</p>
              <p className="text-gray-500 mt-1">32 / 24 / 20 / 16px</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Body</p>
              <p className="font-medium text-gray-800">Mukta Vaani Light 300</p>
              <p className="text-gray-500 mt-1">14px · line-height 1.6</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">Indicia</p>
              <p className="font-medium text-gray-800">Merriweather Regular</p>
              <p className="text-gray-500 mt-1">12px · line-height 1.6</p>
            </div>
          </div>
        </motion.div>

        {/* Color palette */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">Growth</p>
              <div className="flex gap-3">
                {greens.map((c) => (
                  <div key={c.hex} className="text-center">
                    <div
                      className="w-16 h-16 rounded-lg shadow-sm mb-2"
                      style={{ backgroundColor: c.hex }}
                    />
                    <p className="text-xs text-gray-600">{c.name}</p>
                    <p className="text-[11px] text-gray-400">{c.hex}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">Warmth</p>
              <div className="flex gap-3">
                {golds.map((c) => (
                  <div key={c.hex} className="text-center">
                    <div
                      className="w-16 h-16 rounded-lg shadow-sm mb-2 border border-black/5"
                      style={{ backgroundColor: c.hex }}
                    />
                    <p className="text-xs text-gray-600">{c.name}</p>
                    <p className="text-[11px] text-gray-400">{c.hex}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Icon set */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-wide text-gray-400 mb-3">Iconography</p>
          <img
            src={icons}
            alt="GrowthMind icon set"
            className="w-full max-w-2xl rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
