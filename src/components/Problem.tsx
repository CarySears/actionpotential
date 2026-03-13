"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, MessageSquareOff, TrendingDown, UserX, Wifi } from "lucide-react";

const problems = [
  {
    icon: Clock,
    text: "No system for responding fast enough to new inquiries",
    stat: "78% of deals go to the first responder",
  },
  {
    icon: MessageSquareOff,
    text: "No intelligent follow-up when prospects go quiet",
    stat: "80% of leads need 5+ touches to convert",
  },
  {
    icon: TrendingDown,
    text: "No behavioral design that moves people from interest to action",
    stat: "Only 2% of leads convert on first contact",
  },
  {
    icon: Wifi,
    text: "No omnichannel presence to meet customers where they are",
    stat: "Customers span 6+ channels before deciding",
  },
  {
    icon: UserX,
    text: "No consistent engagement that builds trust over time",
    stat: "Trust is the #1 conversion driver",
  },
];

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      aria-label="The core problem: businesses generate leads but lack systems to convert them"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1B75BB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-6">
            <AlertTriangle className="w-4 h-4" />
            The Real Problem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Traffic doesn&apos;t grow your business.{" "}
            <span className="gradient-text">Systems do.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/78 max-w-2xl mx-auto leading-relaxed">
            Most companies invest in generating leads — then watch them go cold. The root cause is
            almost always the same.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-5 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <problem.icon className="w-5 h-5 text-red-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#e8f4f8]/90 text-sm sm:text-base">{problem.text}</p>
                <p className="text-xs text-[#79C5C7]/78 mt-1.5 font-mono">{problem.stat}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-red-500/50 node-pulse flex-shrink-0 mt-2" />
            </motion.div>
          ))}
        </div>

        {/* Transition statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <div className="inline-block px-8 py-5 rounded-2xl border-gradient">
            <p className="text-lg sm:text-xl font-semibold text-white">
              We build the system that fixes all of this —
            </p>
            <p className="text-base text-[#79C5C7] mt-1">
              automatically, intelligently, and in your brand&apos;s voice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
