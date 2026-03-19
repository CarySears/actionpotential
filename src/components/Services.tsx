"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

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
    desc: "New ad spend needed to reactivate leads already in your pipeline",
  },
  {
    value: "Fast",
    desc: "Revenue wins in the first 30 days — before we scale anything else",
  },
  {
    value: "Proven",
    desc: "System validated on your real audience before investing further",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A79D]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs text-[#e8f4f8]/50 tracking-widest uppercase mb-8"
        >
          The Bridge
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 sm:p-10 rounded-2xl"
        >
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#79C5C7]/12 border border-[#79C5C7]/20 text-[#79C5C7] text-xs font-semibold uppercase tracking-wider mb-6">
                Database Reactivation
              </div>

              <h3 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                Your next client is already in your database.
              </h3>

              <p className="text-[#e8f4f8]/78 leading-relaxed mb-8">
                Before adding any new spend, we tap into the leads, past clients, and missed
                opportunities you already own — and bring them back through smart, automated
                outreach. Most businesses find their fastest revenue wins here, often before
                we&apos;ve touched their visibility at all.
              </p>

              <div className="space-y-4">
                {bullets.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-3 py-2 border-b border-[#e8f4f8]/8 last:border-0"
                  >
                    <ArrowRight className="w-4 h-4 text-[#79C5C7] flex-shrink-0" />
                    <span className="text-sm text-[#e8f4f8]/85">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Stats cards */}
            <div className="space-y-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card glass-card-hover p-6"
                >
                  <h4 className="text-3xl font-black text-white mb-2">{stat.value}</h4>
                  <p className="text-sm text-[#e8f4f8]/70 leading-relaxed">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
