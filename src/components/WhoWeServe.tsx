"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "STEP 01",
    title: "We build it",
    desc: "Initial tech call and team training. AI agents configured, integrated, and launched within days — not months.",
  },
  {
    step: "STEP 02",
    title: "We train it",
    desc: "Three dedicated AI training and optimization calls post-launch. Every interaction makes the system sharper.",
  },
  {
    step: "STEP 03",
    title: "It learns from you",
    desc: "Reinforcement Learning from Human Feedback (RLHF) — your AI improves from your real-world input, not generic data.",
  },
  {
    step: "ONGOING",
    title: "We stay with you",
    desc: "24/7 AI and human support. Proactive backend optimization. You never manage this alone.",
  },
];

export default function HowWeWork() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="who-we-serve" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#79C5C7]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B75BB]/10 border border-[#1B75BB]/20 text-[#2EA6D4] text-xs mb-6 uppercase tracking-wider">
            How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            We don&apos;t hand you software.
            <br />
            <span className="gradient-text">We run the system for you.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/80 max-w-2xl leading-relaxed">
            You don&apos;t need to be technical. Our team handles everything — from day one setup
            through ongoing optimization. The AI gets smarter over time because we stay in it with
            you.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <span className="text-xs font-mono text-[#79C5C7]/60 uppercase tracking-wider block mb-3">
                {s.step}
              </span>
              <h3 className="text-lg font-bold text-white mb-3">{s.title}</h3>
              <p className="text-xs text-[#e8f4f8]/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Note box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8"
        >
          <p className="text-[#e8f4f8]/82 leading-relaxed mb-5">
            Most marketing agencies dump leads in your lap and expect you to figure out what to do
            with them. Most AI agencies hand you a login and disappear.{" "}
            <span className="font-bold text-white">
              We put systems in place to help you capture, nurture, and convert demand — without
              burning out your team.
            </span>{" "}
            We stay in the system with you, training it, optimizing it, and improving it every week.
            No technical knowledge required on your end. Ever.
          </p>
          <p className="text-[#e8f4f8]/82 leading-relaxed">
            We&apos;re not a marketing agency. We&apos;re not an AI vendor. We&apos;re behavioral AI
            architects — we build the system, run it, and stay in it with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
