"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { value: "Behavioral science", label: "Decision psychology built in" },
  { value: "UX + interaction design", label: "Low-friction conversion paths" },
  { value: "Conversational marketing", label: "Lead handling across channels" },
  { value: "Human-centered AI", label: "Automation with human handoff" },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-8 sm:py-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-divider mb-6" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.value}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-[#79C5C7]/16 bg-[#e8f4f8]/[0.02] px-4 py-4"
            >
              <p className="text-sm font-semibold text-[#e8f4f8]/92">{item.value}</p>
              <p className="text-xs text-[#e8f4f8]/64 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="section-divider mt-6" />
      </div>
    </section>
  );
}
