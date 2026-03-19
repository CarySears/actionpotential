"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function WhyName() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00A79D]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-widest text-[#e8f4f8]/60 mb-4">
              The ActionPotential System
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              One machine. Two engines. Built for where you are.
            </h2>
          </motion.div>

          {/* Right: Body + callout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#e8f4f8]/82 leading-relaxed">
              We don&apos;t sell you everything upfront. We diagnose where your business is and
              what it actually needs — then build exactly that. Some clients start with Core. Some
              need both. A healthy, growing business runs both engines together.
            </p>
            <div className="p-6 rounded-2xl glass-card border border-[#e8f4f8]/12 shadow-lg">
              <p className="text-sm sm:text-base text-[#e8f4f8]/85 leading-relaxed">
                Already running ads or SEO? Without a real follow-up system behind them, you&apos;re
                funding a leaky bucket. We fix the leak first — then help you scale with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
