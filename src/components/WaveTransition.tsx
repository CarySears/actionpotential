"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Brand wave transition — layered waves in ActionPotential.AI colors.
 * Used for scroll-based light/dark mode transition, inspired by Sites at Scale
 * section transitions but uniquely branded with our wave + geometric aesthetic.
 */
export default function WaveTransition() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  // Wave rises as user scrolls down — aligned with fold transition zone (45–72% viewport)
  const waveY = useTransform(scrollYProgress, [0.38, 0.58], ["100%", "-15%"]);
  const waveOpacity = useTransform(scrollYProgress, [0.32, 0.48, 0.68], [0, 0.92, 0.92]);
  const waveScale = useTransform(scrollYProgress, [0.4, 0.55], [1, 1.02]);

  return (
    <motion.div
      style={{ y: waveY, opacity: waveOpacity, scale: waveScale }}
      className="fixed inset-0 pointer-events-none z-[100] overflow-hidden"
      aria-hidden
    >
      {/* Layered waves in brand colors — "The wave in our colors" */}
      <svg
        viewBox="0 0 1440 900"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[180%] min-w-[1440px] h-auto"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Top wave — light teal */}
        <path
          d="M0,320 C240,260 480,380 720,320 C960,260 1200,380 1440,320 L1440,900 L0,900 Z"
          fill="#79C5C7"
          opacity={0.92}
        />
        {/* Middle wave — coral to magenta to purple gradient */}
        <path
          d="M0,380 C180,340 360,420 540,380 C720,340 900,420 1080,380 C1260,340 1440,420 1440,380 L1440,900 L0,900 Z"
          fill="url(#wave-gradient-mid)"
          opacity={0.95}
        />
        {/* Accent wave — white separator (geometric crispness) */}
        <path
          d="M0,420 C200,380 400,460 600,420 C800,380 1000,460 1200,420 L1440,420 L1440,900 L0,900 Z"
          fill="rgba(255,255,255,0.4)"
          opacity={0.6}
        />
        {/* Bottom wave — bright blue base */}
        <path
          d="M0,480 C220,440 440,520 660,480 C880,440 1100,520 1320,480 L1440,480 L1440,900 L0,900 Z"
          fill="#1B75BB"
          opacity={0.98}
        />
        <defs>
          <linearGradient id="wave-gradient-mid" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff8b66" />
            <stop offset="45%" stopColor="#d93aa4" />
            <stop offset="100%" stopColor="#6b4c9a" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}
