"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const pills = [
  "M.A. Experimental Psychology",
  "M.S. UX Design",
  "Cleveland Clinic",
  "Noom",
  "Neura Health",
];

export default function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="founder" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2EA6D4]/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#2EA6D4]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-xs uppercase tracking-widest text-[#e8f4f8]/60 mb-6">
          Who&apos;s Behind It
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-card p-6 sm:p-10 rounded-2xl border border-[#e8f4f8]/12 flex flex-col sm:flex-row gap-8 items-start"
        >
          {/* Avatar */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#79C5C7]/30 to-[#1B75BB]/30 border border-[#79C5C7]/20 flex-shrink-0 flex items-center justify-center overflow-hidden">
            <div className="text-4xl font-black gradient-text">C</div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl font-black text-white mb-1">Cary Sears</h3>
            <p className="text-[#e8f4f8]/70 text-sm mb-6">Founder & CEO, ActionPotential.AI</p>
            <p className="text-[#e8f4f8]/85 leading-relaxed mb-6">
              Cary spent his career studying why people make decisions — conducting clinical
              neuropsychological research at Cleveland Clinic, then building behavioral systems at
              scale at Noom and Neura Health. That background isn&apos;t a credential on a slide.
              It&apos;s the foundation of how every system we build is designed: the messaging, the
              timing, the handoffs, the follow-up sequences. When we say behavioral AI, we mean it.
            </p>
            <div className="flex flex-wrap gap-2">
              {pills.map((pill, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#e8f4f8]/5 border border-[#e8f4f8]/15 text-[#e8f4f8]/85"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
