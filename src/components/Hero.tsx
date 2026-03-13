"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const stats = [
  { value: "24/7", label: "Intelligent response coverage" },
  { value: "6", label: "Behavioral Engine growth stages" },
  { value: "1", label: "Unified partner for full-funnel execution" },
];

export default function Hero() {
  return (
    <section
      aria-label="Turn more leads into booked customers — Behavioral AI marketing and automation"
      className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Neural network background */}
      <div className="absolute inset-0 z-0 opacity-55">
        <NeuralNetwork />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(13,17,23,0)_0%,rgba(13,17,23,0.56)_60%,rgba(13,17,23,0.82)_100%)]" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10"
        style={{ background: "linear-gradient(to top, var(--color-bg), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-14">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#79C5C7]/20 text-sm text-[#79C5C7] mb-7"
        >
          <Sparkles className="w-4 h-4" />
          <span>Behavioral AI Marketing &amp; Automation</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A79D] node-pulse inline-block" />
        </motion.div>

        {/* Headline — primary solution statement */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.07]"
          itemProp="slogan"
        >
          <span className="text-white">Turn more leads into</span>
          <br />
          <span className="gradient-text text-shadow-glow">booked customers.</span>
        </motion.h1>

        {/* Subheadline — solution detail */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-[#e8f4f8]/82 max-w-3xl mx-auto mb-9 leading-relaxed"
          itemProp="description"
        >
          Most agencies stop at lead volume. We build and run the full conversion system:
          faster response, smarter follow-up, and better close rates across your entire journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <a
            href="/results/index.html"
            className="inline-flex items-center gap-2 rounded-full border border-[#79C5C7]/22 bg-[#79C5C7]/8 px-4 py-2 text-sm text-[#e8f4f8]/90 hover:bg-[#79C5C7]/14 transition-colors"
          >
            <CheckCircle2 className="w-4 h-4 text-[#79C5C7]" />
            Client testimonial videos
          </a>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#79C5C7]/18 bg-[#79C5C7]/6 px-4 py-2 text-sm text-[#e8f4f8]/90">
            <CheckCircle2 className="w-4 h-4 text-[#00A79D]" />
            No long-term contracts
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#79C5C7]/18 bg-[#79C5C7]/6 px-4 py-2 text-sm text-[#e8f4f8]/90">
            <CheckCircle2 className="w-4 h-4 text-[#2EA6D4]" />
            Human-led, AI-enabled execution
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white glow-button"
          >
            Book Free AI Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-[#79C5C7] border border-[#79C5C7]/25 hover:border-[#79C5C7]/50 hover:bg-[#79C5C7]/5 transition-all"
          >
            See How It Works
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text stat-number">
                {stat.value}
              </div>
              <div className="text-xs text-[#e8f4f8]/70 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
