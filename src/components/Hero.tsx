"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const stats = [
  {
    value: "Faster",
    label: "Response time at the moment intent is highest — before leads go cold",
  },
  {
    value: "More",
    label: "Qualified conversations turning into booked appointments and clients",
  },
  {
    value: "Higher",
    label: "Long-term client value through reactivation, reviews, and referrals",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col items-center justify-center overflow-hidden">
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-[#79C5C7]/20 text-sm text-[#79C5C7] mb-7 uppercase tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00A79D] node-pulse inline-block" />
          <span>Behavioral AI Systems for Service Businesses</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.07]"
        >
          <span className="text-white">Your business has more</span>
          <br />
          <span className="text-white">potential than it&apos;s </span>
          <span className="gradient-text text-shadow-glow italic">converting.</span>
        </motion.h1>

        {/* Blockquote subhead */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-l-4 border-[#79C5C7]/50 pl-4 text-left max-w-xl mx-auto mb-7"
        >
          <p className="text-lg text-[#e8f4f8]/90">
            <span className="font-bold text-white">From potential — to action.</span>{" "}
            For every lead, every time.
          </p>
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl text-[#e8f4f8]/82 max-w-3xl mx-auto mb-9 leading-relaxed"
        >
          Most service businesses lose revenue in the gap between interest and response. We close
          that gap — with systems that capture, nurture, and convert demand without burning out your
          team.
        </motion.p>

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
            Book a free AI Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium text-[#79C5C7] border border-[#79C5C7]/25 hover:border-[#79C5C7]/50 hover:bg-[#79C5C7]/5 transition-all"
          >
            See how it works →
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="glass-card p-4 sm:p-5 text-center">
              <div className="text-2xl sm:text-3xl font-black gradient-text stat-number mb-2">
                {stat.value}
              </div>
              <div className="text-xs text-[#e8f4f8]/70 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
