"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2, Mail, Zap } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const auditIncludes = [
  "Current inquiry-response audit",
  "Conversion leakage map",
  "Behavioral Engine recommendations",
  "90-day priority plan",
];

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const bookingUrl = "https://link.actionpotential.ai/widget/booking/ksD7NPYqg5JoFugUIJnm";

  return (
    <section ref={ref} id="cta" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <NeuralNetwork />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(46,166,212,0.08)_0%,rgba(13,17,23,0.78)_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#79C5C7] to-[#1B75BB] flex items-center justify-center node-pulse">
                <Zap className="w-8 h-8 text-white" fill="white" />
              </div>
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#79C5C7]/15 to-[#1B75BB]/15 blur-2xl" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#79C5C7] node-pulse" />
            Start here
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Stop losing high-intent inquiries.
            <br />
            <span className="gradient-text">Start with a Behavioral Audit.</span>
          </h2>

          <p className="text-lg text-[#e8f4f8]/80 max-w-2xl mx-auto leading-relaxed">
            We will show where your current process breaks and what to fix first.
            Straightforward, practical, and no pressure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-7"
          >
            <h3 className="font-bold text-white mb-5">Your audit includes:</h3>
            <div className="space-y-3">
              {auditIncludes.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00A79D] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#e8f4f8]/70">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#79C5C7]/10">
              <p className="text-xs text-[#e8f4f8]/60 italic">
                You leave with clear next steps, whether we work together or not.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-7 border-gradient"
          >
            <h3 className="font-bold text-white mb-2">Book your free Behavioral Audit</h3>
            <p className="text-sm text-[#e8f4f8]/70 mb-6">
              Pick a time directly on our calendar. It takes about two minutes.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-[#e8f4f8]/12 bg-[#e8f4f8]/5 p-4">
                <p className="text-sm text-[#e8f4f8]/80 mb-3 font-semibold">What happens next:</p>
                <ul className="space-y-2">
                  {[
                    "We review your current lead flow before the call",
                    "You get a practical action plan, not a vague pitch",
                    "You decide whether to implement with us or internally",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#e8f4f8]/75">
                      <CheckCircle2 className="w-4 h-4 text-[#00A79D] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={bookingUrl}
                className="w-full py-4 rounded-xl font-bold text-white glow-button inline-flex items-center justify-center gap-2 mt-2"
              >
                Book Free Audit
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <a
                href="mailto:hello@actionpotential.ai"
                className="w-full py-3 rounded-xl border border-[#79C5C7]/25 text-[#e8f4f8]/90 hover:bg-[#79C5C7]/8 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#79C5C7]" />
                Prefer email? hello@actionpotential.ai
              </a>

              <p className="text-center text-xs text-[#e8f4f8]/60">
                Clear next steps. No pressure.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
