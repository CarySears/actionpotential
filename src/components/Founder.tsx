"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap } from "lucide-react";

const tags = [
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs text-[#e8f4f8]/50 tracking-widest uppercase mb-8"
        >
          Who&apos;s Behind It
        </motion.div>

        {/* Founder card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 sm:p-10 rounded-2xl"
        >
          {/* Header with avatar */}
          <div className="flex items-center gap-5 mb-8">
            <div className="relative w-fit">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#79C5C7]/30 to-[#1B75BB]/30 border border-[#79C5C7]/20 flex items-center justify-center overflow-hidden relative">
                <div className="text-3xl font-black gradient-text">C</div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#79C5C7]/5 to-[#1B75BB]/5" />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#79C5C7]/10 to-[#1B75BB]/10 blur-xl -z-10" />
              <div
                className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#00A79D] to-[#1B75BB] border-2 flex items-center justify-center"
                style={{ borderColor: "var(--color-bg)" }}
              >
                <Zap className="w-2.5 h-2.5 text-white" fill="white" />
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Cary Sears</h3>
              <p className="text-[#79C5C7] text-sm font-medium">
                Founder &amp; CEO, ActionPotential.AI
              </p>
            </div>
          </div>

          {/* Bio */}
          <p className="text-[#e8f4f8]/80 leading-relaxed max-w-3xl mb-8">
            Cary spent his career studying why people make decisions — conducting clinical
            neuropsychological research at Cleveland Clinic, then building behavioral systems
            at scale at Noom and Neura Health. That background isn&apos;t a credential on a
            slide. It&apos;s the foundation of how every system we build is designed: the
            messaging, the timing, the handoffs, the follow-up sequences. When we say
            behavioral AI, we mean it.
          </p>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm text-[#e8f4f8]/75 border border-[#e8f4f8]/12 bg-[#e8f4f8]/4"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
