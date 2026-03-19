"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SystemOverview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00A79D]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-xs mb-6 uppercase tracking-wider">
              The ActionPotential System
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              One machine.
              <br />
              Two engines.
              <br />
              <span className="gradient-text">Built for where you are.</span>
            </h2>

            <div className="mt-8 p-5 rounded-2xl bg-[#79C5C7]/5 border border-[#79C5C7]/15">
              <p className="text-sm text-[#79C5C7] font-mono tracking-wide">
                From potential... to action.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-[#e8f4f8]/80 leading-relaxed text-lg">
              We don&apos;t sell you everything upfront. We diagnose where your business is and what
              it actually needs — then build exactly that. Some clients start with Core. Some need
              both. A healthy, growing business runs both engines together.
            </p>

            <div className="p-6 rounded-2xl border border-[#79C5C7]/20 bg-[#79C5C7]/5">
              <p className="text-[#e8f4f8]/80 text-sm leading-relaxed">
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
