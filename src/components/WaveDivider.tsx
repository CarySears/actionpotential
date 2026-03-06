"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type WaveVariant = 1 | 2 | 3 | 4;

interface WaveDividerProps {
  /** Mirror horizontally for variety */
  flip?: boolean;
  /** Height of the divider in px */
  height?: number;
  className?: string;
  /** Colour set variant — cycles through brand palette orderings */
  variant?: WaveVariant;
}

// Four brand-palette orderings — back→front, opaque layers
const VARIANTS: Record<WaveVariant, [string, string, string, string]> = {
  1: ["#ff8b66", "#d93aa4", "#1B75BB", "#00A79D"],  // coral → magenta → blue → teal
  2: ["#00A79D", "#1B75BB", "#d93aa4", "#ff8b66"],  // teal → blue → magenta → coral
  3: ["#79C5C7", "#1B75BB", "#d93aa4", "#ff8b66"],  // light-teal → blue → magenta → coral
  4: ["#d93aa4", "#ff8b66", "#1B75BB", "#00A79D"],  // magenta → coral → blue → teal
};

// Wave paths for a 1440×100 viewBox — each band fills down to y=100
// Back layer peaks highest (most visible band), front layer is the slimmest cap
const WAVE_PATHS = [
  // Back — largest visible strip
  "M0,22 C240,0 480,44 720,22 C960,0 1200,44 1440,22 L1440,100 L0,100 Z",
  // Layer 2
  "M0,40 C360,18 720,62 1080,40 C1260,29 1380,46 1440,40 L1440,100 L0,100 Z",
  // Layer 3
  "M0,57 C240,38 480,74 720,57 C960,40 1200,72 1440,57 L1440,100 L0,100 Z",
  // Front — slimmest cap at very bottom
  "M0,72 C360,58 720,84 1080,72 C1260,65 1380,76 1440,72 L1440,100 L0,100 Z",
];

const OPACITIES = [1, 1, 1, 1]; // Solid — no transparency

export default function WaveDivider({
  flip = false,
  height = 90,
  className = "",
  variant = 1,
}: WaveDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "80px" });

  const colors = VARIANTS[variant];

  return (
    <div
      ref={ref}
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-full"
        style={{
          transform: flip ? "scaleX(-1)" : undefined,
          display: "block",
        }}
      >
        {WAVE_PATHS.map((path, i) => (
          <motion.path
            key={i}
            d={path}
            fill={colors[i]}
            fillOpacity={OPACITIES[i]}
            initial={{ opacity: 0, y: 16 - i * 3 }}
            animate={
              isInView
                ? { opacity: OPACITIES[i], y: 0 }
                : {}
            }
            transition={{
              duration: 0.9,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </svg>
    </div>
  );
}
