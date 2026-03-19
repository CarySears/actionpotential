"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const credentials = [
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2EA6D4]/10 border border-[#2EA6D4]/20 text-[#2EA6D4] text-xs mb-6 uppercase tracking-wider">
            Who&apos;s Behind It
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 sm:p-10"
        >
          {/* Avatar + name row */}
          <div className="flex items-start gap-6 mb-8">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#79C5C7]/30 to-[#1B75BB]/30 border border-[#79C5C7]/20 flex items-center justify-center overflow-hidden">
                <div className="text-3xl font-black gradient-text">C</div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#79C5C7]/5 to-[#1B75BB]/5" />
              </div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#79C5C7]/10 to-[#1B75BB]/10 blur-xl -z-10" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white">Cary Sears</h3>
              <p className="text-[#79C5C7] font-medium text-sm mt-1">
                Founder &amp; CEO, ActionPotential.AI
              </p>
            </div>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-[#e8f4f8]/82 leading-relaxed mb-8"
          >
            Cary spent his career studying why people make decisions — conducting clinical
            neuropsychological research at Cleveland Clinic, then building behavioral systems at
            scale at Noom and Neura Health. That background isn&apos;t a credential on a slide.
            It&apos;s the foundation of how every system we build is designed: the messaging, the
            timing, the handoffs, the follow-up sequences. When we say behavioral AI, we mean it.
          </motion.p>

          {/* Credential tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {credentials.map((cred, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-[#79C5C7]/20 bg-[#79C5C7]/5 text-sm text-[#e8f4f8]/80"
              >
                {cred}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
