"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    number: "01",
    title: "Response is too slow",
    desc: "Leads go cold in minutes. If you're not first to respond when intent is highest, you're often invisible — even if you're the best option.",
  },
  {
    number: "02",
    title: "Follow-up falls apart",
    desc: "Inconsistent outreach across channels means warm leads quietly disappear — without you ever knowing they were ready to buy.",
  },
  {
    number: "03",
    title: "Messaging doesn't convert",
    desc: "Prospects have real doubts and hesitations. If your website and follow-up aren't designed around how people actually decide, they move on.",
  },
  {
    number: "04",
    title: "Retention is underbuilt",
    desc: "Past clients who'd happily return, refer, or leave a review aren't being nurtured. That's compounding revenue loss hiding in plain sight.",
  },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1B75BB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs mb-6 uppercase tracking-wider">
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            You don&apos;t have a lead problem.
            <br />
            You have a <span className="gradient-text">system problem.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/78 max-w-2xl leading-relaxed">
            Revenue leaks in the same four places for almost every service business.
            Here&apos;s where it&apos;s happening in yours.
          </p>
        </motion.div>

        {/* 2x2 Problem grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-7"
            >
              <span className="text-5xl font-black text-[#e8f4f8]/8 font-mono block mb-4">
                {problem.number}
              </span>
              <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-[#e8f4f8]/72 text-sm leading-relaxed">{problem.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
