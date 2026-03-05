"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { label: "Behavioral Science", sublabel: "Not guesswork" },
  { label: "Full-Funnel Ownership", sublabel: "Not just leads" },
  { label: "AI-Native", sublabel: "Not AI-adjacent" },
  { label: "No Long-Term Contracts", sublabel: "Not locked in" },
  { label: "Human-Centered", sublabel: "Not robotic" },
  { label: "Results-Driven", sublabel: "Not vanity metrics" },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-10 overflow-hidden">
      <div className="section-divider mb-0" />
      <div className="bg-[#0a0f14]/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8f4f8]/3 border border-[#e8f4f8]/6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#79C5C7] to-[#2EA6D4]" />
                <span className="text-sm font-medium text-[#e8f4f8]/75">{item.label}</span>
                <span className="text-xs text-[#e8f4f8]/30">— {item.sublabel}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
