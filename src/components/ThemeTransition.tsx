"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

// Brand palette — ordered for visual cascade (warm → cool)
const WAVE_LAYERS = [
  { color: "#ff8b66", delay: 0 },       // coral
  { color: "#d93aa4", delay: 0.09 },    // magenta
  { color: "#79C5C7", delay: 0.18 },    // teal-light
  { color: "#1B75BB", delay: 0.27 },    // deep blue
  { color: "#00A79D", delay: 0.36 },    // teal-green
] as const;

/**
 * Builds a sinusoidal wave-band SVG path in a 100×100 coordinate space.
 * The band fills from x=-30 (off-screen left) to a wavy right edge at ~x=115.
 * When the containing <g> translates from x=-220 → x=210 it sweeps the whole viewport.
 */
function buildWavePath(amplitude: number, frequency: number, phase: number): string {
  const segments = 32;
  const pts: string[] = [];

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const y = t * 100;
    const x = 115 + amplitude * Math.sin(t * Math.PI * frequency + phase);
    pts.push(`L ${x.toFixed(2)} ${y.toFixed(2)}`);
  }

  return `M -30 0 ${pts.join(" ")} L -30 100 Z`;
}

const WAVE_PATHS = WAVE_LAYERS.map((_, i) =>
  buildWavePath(7 + i * 1.5, 2.5 + i * 0.4, i * 0.6)
);

// Small diamond particles that ride the wave curtain across the screen
const DIAMONDS = Array.from({ length: 12 }, (_, i) => ({
  size: 8 + (i % 5) * 4,
  color: WAVE_LAYERS[i % WAVE_LAYERS.length].color,
  delay: i * 0.055 + 0.04,
  top: `${6 + (i * 8) % 84}%`,
  opacity: 0.6 + (i % 3) * 0.15,
}));

// Strong cubic ease — gives the wave a "snap" feel
const EASE: [number, number, number, number] = [0.76, 0, 0.24, 1];

export default function ThemeTransition() {
  const { isTransitioning } = useTheme();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          key="wave-transition"
          className="fixed inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 99999 }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.18 } }}
        >
          {/* ─── Brand wave stripes ─── */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {WAVE_LAYERS.map((layer, i) => (
              <motion.g
                key={i}
                initial={{ x: -220 }}
                animate={{ x: 210 }}
                transition={{ duration: 1.1, delay: layer.delay, ease: EASE }}
              >
                <path d={WAVE_PATHS[i]} fill={layer.color} />
              </motion.g>
            ))}
          </svg>

          {/* ─── Geometric diamond particles ─── */}
          {DIAMONDS.map((d, i) => (
            <motion.div
              key={`diamond-${i}`}
              className="absolute"
              style={{
                width: d.size,
                height: d.size,
                backgroundColor: d.color,
                top: d.top,
                borderRadius: 1,
              }}
              initial={{ x: "-15vw", opacity: 0, rotate: 45 }}
              animate={{
                x: "115vw",
                opacity: [0, d.opacity, d.opacity, 0],
                scale: [0.7, 1.1, 1, 0.85],
                rotate: [45, 60, 45],
              }}
              transition={{ duration: 1.1, delay: d.delay, ease: EASE }}
            />
          ))}

          {/* ─── Centre text flash (brand moment) ─── */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.18, 0] }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeInOut" }}
          >
            <span
              className="font-black tracking-tighter select-none"
              style={{
                fontSize: "clamp(3rem, 10vw, 8rem)",
                background:
                  "linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.4) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ActionPotential
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
