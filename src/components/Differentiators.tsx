"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const chain = [
  { prefix: "⭐", label: "More 5-star reviews", up: false },
  { prefix: "↑", label: "Google local rankings", up: true },
  { prefix: "↑", label: "AI engine recommendations", up: true },
  { prefix: "↑", label: "Domain entity authority", up: true },
  { prefix: "↑", label: "Organic traffic", up: true },
  { prefix: "↑", label: "Trust + conversions", up: true },
];

export default function ReviewsVisibility() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="why-us" className="relative py-24 sm:py-32">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#79C5C7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#1B75BB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs text-[#79C5C7] uppercase tracking-widest">
            Why Reviews Are a Visibility Asset
          </span>
        </motion.div>

        <div className="glass-card p-8 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-6 leading-tight">
                More 5-star reviews don&apos;t just build trust.
                <br />
                <span className="gradient-text">They make you easier to find.</span>
              </h2>
              <p className="text-[#e8f4f8]/78 leading-relaxed text-sm sm:text-base">
                Reviews AI automates your reputation management — but the impact goes far beyond what
                prospects think of you. Google rewards review volume and recency with higher local
                rankings. AI engines like ChatGPT and Perplexity factor review sentiment into
                business recommendations. A stronger review profile means more organic visibility,
                more traffic, and more conversions — without a single dollar of additional ad spend.
              </p>
            </motion.div>

            {/* Right: Chain */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              {chain.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                    i === 0
                      ? "bg-[#79C5C7]/10 border border-[#79C5C7]/20"
                      : "bg-[#e8f4f8]/3 border border-[#e8f4f8]/8"
                  }`}
                >
                  <span
                    className={`text-sm font-bold flex-shrink-0 w-6 ${
                      item.up ? "text-[#00A79D]" : ""
                    }`}
                  >
                    {item.prefix}
                  </span>
                  <span className="text-sm text-[#e8f4f8]/85">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
