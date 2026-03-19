"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const benefits = [
  "Reignite cold leads without lifting a finger",
  "Book appointments from your existing list — fast",
  "Email, SMS, and voicemail sequences done for you",
  "Zero new ad spend — revenue from what you already have",
  "Proves the system before you invest in visibility",
];

const cards = [
  {
    title: "Zero",
    desc: "New ad spend needed to reactivate leads already in your pipeline",
  },
  {
    title: "Fast",
    desc: "Revenue wins in the first 30 days — before we scale anything else",
  },
  {
    title: "Proven",
    desc: "System validated on your real audience before investing further",
  },
];

export default function DatabaseReactivation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-6 sm:p-10 rounded-2xl border border-[#e8f4f8]/12">
          <div className="text-xs uppercase tracking-widest text-[#e8f4f8]/60 mb-2">
            The Bridge
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="text-xs uppercase tracking-widest text-[#79C5C7]/80 mb-4">
                Database Reactivation
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                Your next client is already in your database.
              </h2>
              <p className="text-[#e8f4f8]/82 leading-relaxed mb-8">
                Before adding any new spend, we tap into the leads, past clients, and missed
                opportunities you already own — and bring them back through smart, automated
                outreach. Most businesses find their fastest revenue wins here, often before
                we&apos;ve touched their visibility at all.
              </p>
              <ul className="space-y-0">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 py-3 border-b border-[#e8f4f8]/10 last:border-0">
                    <ArrowRight className="w-4 h-4 text-[#79C5C7]/80 flex-shrink-0" />
                    <span className="text-[#e8f4f8]/85">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right column - cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-[var(--color-bg-elevated)] border border-[#e8f4f8]/12"
                >
                  <h3 className="text-2xl font-black text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-[#e8f4f8]/75 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
