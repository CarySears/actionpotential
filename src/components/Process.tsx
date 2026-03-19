"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    label: "Step 01",
    title: "We build it",
    desc: "Initial tech call and team training. AI agents configured, integrated, and launched within days — not months.",
  },
  {
    label: "Step 02",
    title: "We train it",
    desc: "Three dedicated AI training and optimization calls post-launch. Every interaction makes the system sharper.",
  },
  {
    label: "Step 03",
    title: "It learns from you",
    desc: "Reinforcement Learning from Human Feedback (RLHF) — your AI improves from your real-world input, not generic data.",
  },
  {
    label: "Ongoing",
    title: "We stay with you",
    desc: "24/7 AI and human support. Proactive backend optimization. You never manage this alone.",
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs text-[#e8f4f8]/50 tracking-widest uppercase mb-6"
        >
          How We Work
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            We don&apos;t hand you software.{" "}
            <span className="gradient-text">We run the system for you.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/78 leading-relaxed">
            You don&apos;t need to be technical. Our team handles everything — from day one
            setup through ongoing optimization. The AI gets smarter over time because we stay
            in it with you.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="glass-card glass-card-hover p-6"
            >
              <span className="text-xs text-[#e8f4f8]/40 uppercase tracking-wider font-mono">
                {step.label}
              </span>
              <h3 className="text-lg font-bold text-white mt-3 mb-3">{step.title}</h3>
              <p className="text-sm text-[#e8f4f8]/70 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card p-8 sm:p-10"
        >
          <p className="text-[#e8f4f8]/78 leading-relaxed mb-4">
            Most marketing agencies dump leads in your lap and expect you to figure out what
            to do with them. Most AI agencies hand you a login and disappear.{" "}
            <span className="text-white font-semibold">
              We put systems in place to help you capture, nurture, and convert demand —
              without burning out your team.
            </span>{" "}
            We stay in the system with you, training it, optimizing it, and improving it every
            week. No technical knowledge required on your end. Ever.
          </p>
          <p className="text-[#e8f4f8]/68 leading-relaxed">
            We&apos;re not a marketing agency. We&apos;re not an AI vendor. We&apos;re
            behavioral AI architects — we build the system, run it, and stay in it with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
