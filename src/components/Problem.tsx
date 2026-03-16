"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock3, MessageSquareOff, PhoneMissed } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed contact moments",
    text: "Calls and forms arrive, but nobody responds in time.",
  },
  {
    icon: MessageSquareOff,
    title: "No follow-up loop",
    text: "Prospects go quiet after first touch and never get re-engaged.",
  },
  {
    icon: Clock3,
    title: "Slow handoff to sales",
    text: "Even high-intent leads wait too long to reach a real human.",
  },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="problem" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B75BB]/[0.05] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
            <AlertTriangle className="w-4 h-4" />
            The revenue leak
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
            Traffic is not the bottleneck.
            <span className="gradient-text"> Response is.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/78 max-w-2xl mx-auto leading-relaxed">
            Most local and service businesses already generate inquiries. The issue is what happens
            in the first few minutes after interest appears.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-6"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center">
                <problem.icon className="w-5 h-5 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mt-4">{problem.title}</h3>
              <p className="text-sm text-[#e8f4f8]/76 mt-2 leading-relaxed">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-block px-7 py-5 rounded-2xl border-gradient">
            <p className="text-base sm:text-lg font-semibold text-white">
              Fix the leak first. Then scale demand.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
