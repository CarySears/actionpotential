"use client";

import { AnimatePresence, motion } from "framer-motion";

export type ThemeMode = "light" | "dark";

export interface ThemeTransitionState {
  id: number;
  from: ThemeMode;
  to: ThemeMode;
}

interface ThemeWaveTransitionProps {
  transition: ThemeTransitionState | null;
}

const BOTTOM_WAVE =
  "M0,248 C182,201 320,314 503,276 C690,236 806,172 981,208 C1137,239 1290,332 1440,301 L1440,520 L0,520 Z";
const MID_WAVE =
  "M0,287 C178,251 338,361 532,334 C719,307 835,223 1025,256 C1200,288 1317,378 1440,352 L1440,520 L0,520 Z";
const TOP_WAVE =
  "M0,325 C205,292 336,391 549,364 C723,342 865,277 1041,303 C1235,332 1343,403 1440,393 L1440,520 L0,520 Z";

function getTransitionBackdrop(to: ThemeMode) {
  if (to === "dark") {
    return "radial-gradient(120% 120% at 50% 12%, rgba(53, 85, 148, 0.2) 0%, rgba(13, 17, 23, 0.9) 58%, rgba(7, 10, 16, 0.98) 100%)";
  }

  return "radial-gradient(120% 120% at 50% 12%, rgba(214, 237, 246, 0.75) 0%, rgba(240, 245, 252, 0.96) 58%, rgba(236, 242, 250, 1) 100%)";
}

export default function ThemeWaveTransition({ transition }: ThemeWaveTransitionProps) {
  return (
    <AnimatePresence>
      {transition ? (
        <motion.div
          key={transition.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="pointer-events-none fixed inset-0 z-[120] overflow-hidden"
          aria-hidden="true"
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: getTransitionBackdrop(transition.to) }}
            initial={{ opacity: 0.25 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65 }}
          />

          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(121,197,199,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(46,166,212,0.16) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.22 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          />

          <motion.div
            className="absolute -right-24 -bottom-28 h-[65vh] w-[52vw] rounded-[54px]"
            style={{
              clipPath: "polygon(12% 0%, 100% 0%, 100% 100%, 0% 88%)",
              background:
                "linear-gradient(130deg, rgba(255,170,68,0.88), rgba(237,57,141,0.9), rgba(120,84,170,0.92))",
              boxShadow: "0 40px 120px rgba(37, 49, 87, 0.28)",
            }}
            initial={{ x: 180, y: 80, opacity: 0.2, rotate: 6 }}
            animate={{ x: 0, y: 0, opacity: 0.95, rotate: 0 }}
            exit={{ x: 130, y: 70, opacity: 0 }}
            transition={{ duration: 0.95, ease: [0.2, 0.8, 0.2, 1] }}
          />

          <motion.div
            className="absolute -left-20 -top-20 h-[40vh] w-[30vw] rounded-[40px]"
            style={{
              clipPath: "polygon(0 0, 100% 18%, 72% 100%, 0 86%)",
              background: "linear-gradient(150deg, rgba(46,166,212,0.88), rgba(121,197,199,0.78))",
            }}
            initial={{ x: -120, y: -80, opacity: 0.15, rotate: -8 }}
            animate={{ x: 0, y: 0, opacity: 0.72, rotate: 0 }}
            exit={{ x: -90, y: -70, opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          />

          <svg
            viewBox="0 0 1440 520"
            preserveAspectRatio="none"
            className="absolute -bottom-8 left-0 h-[56vh] w-full"
          >
            <motion.g
              initial={{ y: 240 }}
              animate={{ y: [240, 40, -35] }}
              exit={{ y: 260 }}
              transition={{ duration: 1.05, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <path d={TOP_WAVE} fill="#79C5C7" opacity="0.92" />
            </motion.g>
            <motion.g
              initial={{ y: 260 }}
              animate={{ y: [260, 72, -18] }}
              exit={{ y: 280 }}
              transition={{ duration: 1.08, ease: [0.2, 0.8, 0.2, 1], delay: 0.02 }}
            >
              <path d={MID_WAVE} fill="#2EA6D4" opacity="0.88" />
            </motion.g>
            <motion.g
              initial={{ y: 294 }}
              animate={{ y: [294, 104, 0] }}
              exit={{ y: 306 }}
              transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.06 }}
            >
              <path d={BOTTOM_WAVE} fill="#D93AA4" opacity="0.84" />
            </motion.g>
          </svg>

          <svg
            viewBox="0 0 1440 520"
            preserveAspectRatio="none"
            className="absolute -top-16 left-0 h-[28vh] w-full rotate-180 opacity-65"
          >
            <motion.g
              initial={{ y: 210 }}
              animate={{ y: [210, 35, -28] }}
              exit={{ y: 225 }}
              transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <path d={MID_WAVE} fill="#79C5C7" opacity="0.7" />
            </motion.g>
            <motion.g
              initial={{ y: 234 }}
              animate={{ y: [234, 62, -10] }}
              exit={{ y: 246 }}
              transition={{ duration: 1.04, ease: [0.2, 0.8, 0.2, 1], delay: 0.04 }}
            >
              <path d={TOP_WAVE} fill="#2EA6D4" opacity="0.58" />
            </motion.g>
          </svg>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
