"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const bullets = [
  "Reignite cold leads without lifting a finger",
  "Book appointments from your existing list — fast",
  "Email, SMS, and voicemail sequences done for you",
  "Zero new ad spend — revenue from what you already have",
  "Proves the system before you invest in visibility",
];

const stats = [
  {
    value: "Zero",
    label: "New ad spend needed to reactivate leads already in your pipeline",
  },
  {
    value: "Fast",
    label: "Revenue wins in the first 30 days — before we scale anything else",
  },
  {
    value: "Proven",
    label: "System validated on your real audience before investing further",
  },
];

export default function DatabaseReactivation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A79D]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <span className="text-xs text-[#79C5C7] uppercase tracking-widest">The Bridge</span>
        </motion.div>

        <div className="glass-card p-8 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#00A79D]/10 border border-[#00A79D]/20 text-[#00A79D] text-xs uppercase tracking-wider mb-6">
                Database Reactivation
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                Your next client is already
                <br />
                <span className="gradient-text">in your database.</span>
              </h2>
              <p className="text-[#e8f4f8]/78 leading-relaxed mb-8">
                Before adding any new spend, we tap into the leads, past clients, and missed
                opportunities you already own — and bring them back through smart, automated
                outreach. Most businesses find their fastest revenue wins here, often before
                we&apos;ve touched their visibility at all.
              </p>

              <div className="space-y-1">
                {bullets.map((bullet, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3 py-3 border-b border-[#e8f4f8]/8"
                  >
                    <span className="text-[#79C5C7] flex-shrink-0 mt-0.5">→</span>
                    <span className="text-sm text-[#e8f4f8]/80">{bullet}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="p-6 rounded-2xl bg-[#e8f4f8]/3 border border-[#e8f4f8]/10"
                >
                  <div className="text-3xl font-black gradient-text mb-2">{stat.value}</div>
                  <p className="text-sm text-[#e8f4f8]/65 leading-relaxed">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
