"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Calendar, ArrowRight, CheckCircle2, Brain } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const auditIncludes = [
  "Review of your current marketing and lead flow",
  "AI & automation opportunity assessment",
  "AEO & AI visibility analysis",
  "Custom Behavioral Engine blueprint",
  "Priority roadmap with quick wins identified",
  "No pitch. No pressure. Real strategic value.",
];

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-30">
        <NeuralNetwork />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(46,166,212,0.08)_0%,rgba(13,17,23,0.9)_70%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          {/* Pulsing icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#79C5C7] to-[#1B75BB] flex items-center justify-center node-pulse">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#79C5C7]/15 to-[#1B75BB]/15 blur-2xl" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#79C5C7] node-pulse" />
            Free — No Obligation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to fire your
            <br />
            <span className="shimmer">growth system?</span>
          </h2>

          <p className="text-lg text-[#e8f4f8]/60 max-w-2xl mx-auto leading-relaxed">
            Schedule your free AI Audit & Marketing Strategy Session. We&apos;ll analyze your
            current marketing, identify your biggest opportunities, and show you exactly what a
            Behavioral Engine would look like for your business.
          </p>
        </motion.div>

        {/* Two-column: what's included + form */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <Calendar className="w-5 h-5 text-[#79C5C7]" />
              <h3 className="font-bold text-white">Your Free AI Audit Includes:</h3>
            </div>
            <div className="space-y-3">
              {auditIncludes.map((item, i) => (
                <motion.div
                  key={i}
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
              <p className="text-xs text-[#e8f4f8]/35 italic">
                Value: $500+ — yours free because we believe in earning trust before asking for it.
              </p>
            </div>
          </motion.div>

          {/* Form / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-7 border-gradient"
          >
            <h3 className="font-bold text-white mb-2">Schedule Your Session</h3>
            <p className="text-sm text-[#e8f4f8]/45 mb-6">
              Takes 2 minutes. Results that last.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs text-[#e8f4f8]/50 mb-1.5 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 rounded-xl bg-[#e8f4f8]/5 border border-[#e8f4f8]/10 text-white placeholder-[#e8f4f8]/25 text-sm focus:outline-none focus:border-[#79C5C7]/40 focus:bg-[#79C5C7]/5 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-[#e8f4f8]/50 mb-1.5 uppercase tracking-wider">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="jane@yourbusiness.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#e8f4f8]/5 border border-[#e8f4f8]/10 text-white placeholder-[#e8f4f8]/25 text-sm focus:outline-none focus:border-[#79C5C7]/40 focus:bg-[#79C5C7]/5 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-[#e8f4f8]/50 mb-1.5 uppercase tracking-wider">
                  Business Type
                </label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#0d1117] border border-[#e8f4f8]/10 text-[#e8f4f8]/70 text-sm focus:outline-none focus:border-[#79C5C7]/40 transition-all appearance-none">
                  <option value="">Select your industry...</option>
                  <option>Healthcare & Wellness</option>
                  <option>Coaching & Consulting</option>
                  <option>Legal & Professional Services</option>
                  <option>Real Estate</option>
                  <option>Hospitality</option>
                  <option>Home Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-[#e8f4f8]/50 mb-1.5 uppercase tracking-wider">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl bg-[#e8f4f8]/5 border border-[#e8f4f8]/10 text-white placeholder-[#e8f4f8]/25 text-sm focus:outline-none focus:border-[#79C5C7]/40 focus:bg-[#79C5C7]/5 transition-all"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-bold text-white glow-button flex items-center justify-center gap-2 mt-2"
              >
                <Zap className="w-5 h-5" fill="white" />
                Schedule My Free AI Audit
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <p className="text-center text-xs text-[#e8f4f8]/25">
                No spam. No pressure. Just genuine strategic value.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl sm:text-3xl font-black text-white/20 tracking-tight">
            From potential...{" "}
            <span className="gradient-text opacity-100">to action.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
