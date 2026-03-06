"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Cover-page style geometric shapes — rounded blobs that add structure
 * and brand consistency. Inspired by the Brand Style Guide cover.
 */
export default function GeometricShapes() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"],
  });

  const gradientOpacity = useTransform(scrollYProgress, [0.5, 0.85], [0.15, 0.35]);
  const blueOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0.12, 0.28]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
      {/* Bottom-right gradient shape — orange → pink → purple */}
      <motion.div
        style={{
          opacity: gradientOpacity,
          background: "linear-gradient(135deg, #ff8b66 0%, #d93aa4 45%, #6b4c9a 100%)",
          filter: "blur(60px)",
        }}
        className="absolute -bottom-[20%] -right-[15%] w-[70%] aspect-[4/3] rounded-[45%_55%_60%_40%/50%_50%_50%_50%]"
      />
      {/* Bottom-left solid blue shape */}
      <motion.div
        style={{
          opacity: blueOpacity,
          background: "#79C5C7",
          filter: "blur(50px)",
        }}
        className="absolute -bottom-[15%] -left-[10%] w-[50%] aspect-square rounded-[40%_60%_50%_50%/50%_50%_50%_50%]"
      />
      {/* Subtle top-right accent */}
      <motion.div
        style={{
          opacity: gradientOpacity,
          background: "radial-gradient(circle, rgba(217,58,164,0.2) 0%, transparent 70%)",
        }}
        className="absolute top-[10%] right-[5%] w-[25%] aspect-square rounded-full"
      />
    </div>
  );
}
