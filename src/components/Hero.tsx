"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const quickStats = [
  { value: "< 2 min", label: "Target first response" },
  { value: "5+", label: "Follow-up touchpoints" },
  { value: "24/7", label: "Coverage across channels" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="absolute inset-0 z-0 opacity-35">
        <NeuralNetwork />
      </div>
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(13,17,23,0)_0%,rgba(13,17,23,0.56)_60%,rgba(13,17,23,0.82)_100%)]" />
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#79C5C7]/20 text-sm text-[#79C5C7] mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>Behavioral AI + Human-Centered UX</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A79D] node-pulse inline-block" />
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-7 sm:p-10 border border-[var(--color-border-strong)]"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white">
              Turn intent into
              <span className="gradient-text text-shadow-glow"> real conversations.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#e8f4f8]/84 max-w-xl leading-relaxed">
              Most businesses do not have a lead problem. They have a response problem. We design
              and run your Behavioral Engine so every serious inquiry gets a fast, helpful, and
              human follow-up.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Calls", "Forms", "Texts", "DMs", "Chat"].map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[#79C5C7]/22 bg-[#79C5C7]/8 px-3 py-1.5 text-xs sm:text-sm text-[#e8f4f8]/88"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold text-white glow-button"
              >
                Book Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#behavioral-engine"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-[#79C5C7] border border-[#79C5C7]/25 hover:border-[#79C5C7]/50 hover:bg-[#79C5C7]/5 transition-all"
              >
                See the System
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="glass-card p-7 sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[#79C5C7]/82 mb-5">
              Behavioral Engine flow
            </p>
            <div className="space-y-3">
              {[
                "Inquiry arrives",
                "Instant response",
                "Smart qualification",
                "Human handoff",
                "Booked conversation",
              ].map((step, i) => (
                <div key={step} className="rounded-xl border border-[#79C5C7]/18 bg-[#e8f4f8]/[0.02] p-3.5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-[#e8f4f8]/90">{step}</p>
                    <span className="text-[10px] font-mono text-[#79C5C7]/85">0{i + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {quickStats.map((stat) => (
                <div key={stat.label} className="rounded-lg border border-[#79C5C7]/15 bg-[#79C5C7]/5 p-3 text-center">
                  <p className="text-base font-black gradient-text stat-number">{stat.value}</p>
                  <p className="mt-1 text-[11px] text-[#e8f4f8]/70 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            <a
              href="/results/index.html"
              className="mt-6 inline-flex items-center gap-2 text-sm text-[#79C5C7] hover:text-[#e8f4f8] transition-colors"
            >
              <CheckCircle2 className="w-4 h-4" />
              Watch client results
            </a>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3"
        >
          {[
            "Clarity first. Complexity hidden.",
            "Human tone. AI speed.",
            "Built for real business workflows.",
          ].map((line) => (
            <div
              key={line}
              className="rounded-2xl border border-[#79C5C7]/14 bg-[#e8f4f8]/[0.02] px-4 py-3 text-sm text-[#e8f4f8]/78"
            >
              {line}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
