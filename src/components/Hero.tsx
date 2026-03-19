"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const features = [
  {
    title: "Faster",
    desc: "Response time at the moment intent is highest — before leads go cold",
  },
  {
    title: "More",
    desc: "Qualified conversations turning into booked appointments and clients",
  },
  {
    title: "Higher",
    desc: "Long-term client value through reactivation, reviews, and referrals",
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
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-14">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 text-sm text-[#e8f4f8]/60 tracking-widest uppercase mb-7"
        >
          <span className="w-8 h-px bg-[#79C5C7]/40" />
          Behavioral AI Systems for Service Businesses
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8 leading-[1.07]"
        >
          <span className="text-white">Your business has more</span>
          <br />
          <span className="text-white">potential than it&apos;s </span>
          <span className="gradient-text italic">converting.</span>
        </motion.h1>

        {/* Blockquote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-l-2 border-[#79C5C7]/40 pl-5 mb-8"
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
          className="text-lg sm:text-xl text-[#e8f4f8]/78 max-w-3xl mb-9 leading-relaxed"
        >
          Most service businesses lose revenue in the gap between interest
          and response. We close that gap — with systems that capture,
          nurture, and convert demand without burning out your team.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16"
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
            className="inline-flex items-center gap-2 text-base font-medium text-[#e8f4f8]/90 hover:text-white transition-colors"
          >
            See how it works
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
        >
          {features.map((feature, i) => (
            <div key={i} className="glass-card p-5">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#e8f4f8]/70 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
