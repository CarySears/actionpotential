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
    <section ref={ref} className="relative py-6">
      <div className="section-divider" />
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3"
              >
                <span className="w-1 h-1 rounded-full bg-[var(--teal-light)]/40" />
                <span className="text-sm font-medium text-[var(--color-text)]/80">{item.label}</span>
                <span className="text-xs text-[var(--color-text)]/35">
                  {item.sublabel}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider" />
    </section>
  );
}
