"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  { icon: "⭐", label: "More 5-star reviews" },
  { icon: "↑", label: "Google local rankings" },
  { icon: "↑", label: "AI engine recommendations" },
  { icon: "↑", label: "Domain entity authority" },
  { icon: "↑", label: "Organic traffic" },
  { icon: "↑", label: "Trust + conversions" },
];

export default function Differentiators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="why-us" className="relative py-24 sm:py-32">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#79C5C7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs text-[#e8f4f8]/50 tracking-widest uppercase mb-8"
        >
          Why Reviews Are a Visibility Asset
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 sm:p-10 rounded-2xl"
        >
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: Content (3 cols) */}
            <div className="lg:col-span-3">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 leading-tight">
                More 5-star reviews don&apos;t just build trust.{" "}
                <span className="gradient-text">They make you easier to find.</span>
              </h3>

              <p className="text-[#e8f4f8]/78 leading-relaxed">
                Reviews AI automates your reputation management — but the impact goes far
                beyond what prospects think of you. Google rewards review volume and recency
                with higher local rankings. AI engines like ChatGPT and Perplexity factor
                review sentiment into business recommendations. A stronger review profile
                means more organic visibility, more traffic, and more conversions — without
                a single dollar of additional ad spend.
              </p>
            </div>

            {/* Right: Benefits list (2 cols) */}
            <div className="lg:col-span-2">
              <div className="glass-card p-6 space-y-0">
                {benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.06 }}
                    className="flex items-center gap-3 py-3 border-b border-[#e8f4f8]/8 last:border-0"
                  >
                    <span className="text-lg">{b.icon}</span>
                    <span className="text-sm font-medium text-[#e8f4f8]/88">{b.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
