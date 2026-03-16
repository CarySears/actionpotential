"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, MessageCircle, Users, TrendingUp } from "lucide-react";

const flowSteps = [
  { icon: Zap, label: "Attract", desc: "Search, social, AI" },
  { icon: MessageCircle, label: "Engage", desc: "Instant conversations" },
  { icon: Users, label: "Convert", desc: "Smart follow-up" },
  { icon: TrendingUp, label: "Grow", desc: "Retain & amplify" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 subtle-grid" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#2EA6D4]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent z-10" />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-label mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-[var(--teal-light)]" />
              <span>Behavioral AI Marketing & Automation</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.08]"
            >
              <span className="text-[var(--color-text-strong)]">Turn more leads into</span>
              <br />
              <span className="gradient-text">booked customers.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-[var(--color-text)] max-w-xl mb-10 leading-relaxed"
            >
              Most agencies stop at lead volume. We build and run the full conversion
              system — faster response, smarter follow-up, and better close rates
              across your entire customer journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-10"
            >
              <a
                href="#cta"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-white glow-button"
              >
                Book Free AI Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-[var(--color-text)] border border-[var(--color-border-strong)] hover:border-[var(--teal-light)] hover:text-[var(--teal-light)] transition-all"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.36 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--color-text)]/70"
            >
              {["No long-term contracts", "Human-led execution", "Full-funnel system"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[var(--teal-green)]" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Contained flow diagram */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="contained-card p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-50" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#2EA6D4]/[0.04] rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-text)]/50">
                    The Behavioral Engine
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[var(--teal-green)] animate-pulse" />
                </div>

                <div className="space-y-3">
                  {flowSteps.map((step, i) => (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="group flex items-center gap-4 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)] transition-all"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB"][i]}10, ${["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB"][i]}05)`,
                          border: `1px solid ${["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB"][i]}20`,
                        }}
                      >
                        <step.icon
                          className="w-4.5 h-4.5"
                          style={{ color: ["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB"][i] }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2">
                          <span className="text-xs font-mono text-[var(--color-text)]/30">
                            0{i + 1}
                          </span>
                          <span className="text-sm font-semibold text-[var(--color-text-strong)]">
                            {step.label}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--color-text)]/60 mt-0.5">{step.desc}</p>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--color-text)]/20 group-hover:text-[var(--teal-light)]/60 transition-colors" />
                    </motion.div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="mt-8 pt-6 border-t border-[var(--color-border)] grid grid-cols-3 gap-4">
                  {[
                    { value: "24/7", label: "Response coverage" },
                    { value: "6", label: "Growth stages" },
                    { value: "1", label: "Unified partner" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-lg font-bold gradient-text">{stat.value}</div>
                      <div className="text-[10px] text-[var(--color-text)]/50 mt-0.5 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
