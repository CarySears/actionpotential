"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Clock, MessageSquareOff, TrendingDown, Wifi, UserX } from "lucide-react";

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
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-6 mx-auto w-fit text-red-400/80">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>The Real Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-strong)] mb-6">
            Traffic doesn&apos;t grow your business.{" "}
            <span className="gradient-text">Systems do.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text)]/60 max-w-2xl mx-auto leading-relaxed">
            Most companies invest in generating leads — then watch them go cold. The root cause is
            almost always the same.
          </p>
        </motion.div>

        {/* Contained problem list */}
        <div className="contained-card p-6 sm:p-8 max-w-3xl mx-auto">
          <div className="space-y-3">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-red-500/15 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-red-500/8 border border-red-500/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <problem.icon className="w-4 h-4 text-red-400/70" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[var(--color-text)]/80">{problem.text}</p>
                  <p className="text-xs text-[var(--teal-light)]/50 mt-1.5 font-mono">{problem.stat}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Transition statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-14"
        >
          <div className="inline-block px-8 py-5 rounded-2xl border-gradient">
            <p className="text-base sm:text-lg font-semibold text-[var(--color-text-strong)]">
              We build the system that fixes all of this —
            </p>
            <p className="text-sm text-[var(--teal-light)]/70 mt-1.5">
              automatically, intelligently, and in your brand&apos;s voice.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
