"use client";

import { motion } from "framer-motion";
import { ArrowRight, Brain, Sparkles } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const stats = [
  { value: "5×", label: "Avg. lead response improvement" },
  { value: "24/7", label: "Automated customer engagement" },
  { value: "360°", label: "Full-funnel ownership" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 z-0">
        <NeuralNetwork />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(13,17,23,0)_0%,rgba(13,17,23,0.62)_60%,rgba(13,17,23,0.86)_100%)]" />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10"
        style={{ background: "linear-gradient(to top, var(--color-bg), transparent)" }}
      />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#79C5C7]/20 text-sm text-[#79C5C7] mb-8"
        >
          <Sparkles className="w-4 h-4" />
          <span>Behavioral AI Marketing &amp; Automation</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A79D] node-pulse inline-block" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.05]"
        >
          <span className="text-white">Your marketing should</span>
          <br />
          <span className="gradient-text text-shadow-glow">fire like a neuron.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-[#e8f4f8]/65 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Most agencies hand you leads. We build the{" "}
          <span className="text-[#79C5C7] font-medium">behavioral engine</span> that turns
          those leads into customers — automatically, intelligently, and at scale.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#cta"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold text-white glow-button"
          >
            <Brain className="w-5 h-5" />
            Get Your Free AI Audit
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
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text stat-number">
                {stat.value}
              </div>
              <div className="text-xs text-[#e8f4f8]/40 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating tech badges */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute left-4 lg:left-12 top-1/3 z-20 hidden lg:flex flex-col gap-3"
      >
        {["SEO", "AEO", "AI Agents", "Automation"].map((tech, i) => (
          <motion.div
            key={tech}
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card px-3 py-1.5 text-xs text-[#79C5C7] border border-[#79C5C7]/15"
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute right-4 lg:right-12 top-1/3 z-20 hidden lg:flex flex-col gap-3"
      >
        {["Google Ads", "Meta Ads", "SMS/Chat", "CRO"].map((tech, i) => (
          <motion.div
            key={tech}
            animate={{ x: [0, -4, 0] }}
            transition={{ duration: 3.5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            className="glass-card px-3 py-1.5 text-xs text-[#2EA6D4] border border-[#2EA6D4]/15"
          >
            {tech}
          </motion.div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#e8f4f8]/30 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#2EA6D4]/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
