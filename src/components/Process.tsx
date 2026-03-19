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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-[#e8f4f8]/60 mb-4">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            We don&apos;t hand you software. We run the system for you.
          </h2>
          <p className="text-lg text-[#e8f4f8]/80 max-w-2xl leading-relaxed">
            You don&apos;t need to be technical. Our team handles everything — from day one setup
            through ongoing optimization. The AI gets smarter over time because we stay in it with
            you.
          </p>
        </motion.div>

        {/* Four-column step grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 glass-card border border-[#e8f4f8]/12 rounded-2xl overflow-hidden mb-12"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className={`p-6 sm:p-8 border-[#e8f4f8]/12 border-b last:border-b-0 ${
                i < 2 ? "sm:border-b" : "sm:border-b-0"
              } ${i !== 3 ? "lg:border-r" : ""}`}
            >
              <div className="text-xs uppercase tracking-widest text-[#e8f4f8]/60 mb-2">
                {step.label}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-sm text-[#e8f4f8]/75 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Summary box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 sm:p-8 rounded-2xl border border-[#e8f4f8]/12"
        >
          <p className="text-[#e8f4f8]/85 leading-relaxed mb-4">
            Most marketing agencies dump leads in your lap and expect you to figure out what to do
            with them. Most AI agencies hand you a login and disappear.{" "}
            <span className="font-semibold text-white">
              We put systems in place to help you capture, nurture, and convert demand — without
              burning out your team.
            </span>{" "}
            We stay in the system with you, training it, optimizing it, and improving it every
            week. No technical knowledge required on your end. Ever.
          </p>
          <p className="text-[#e8f4f8]/85 leading-relaxed">
            We&apos;re not a marketing agency. We&apos;re not an AI vendor. We&apos;re behavioral
            AI architects — we build the system, run it, and stay in it with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
