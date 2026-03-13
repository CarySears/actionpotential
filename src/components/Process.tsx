"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Rocket, RefreshCw, ArrowDown } from "lucide-react";

const phase1Steps = [
  { step: "01", title: "AI Audit & Discovery", desc: "We assess your current marketing, systems, and opportunities." },
  { step: "02", title: "Strategy Architecture", desc: "We design your custom Behavioral Engine blueprint." },
  { step: "03", title: "Priority Identification", desc: "We identify the highest-leverage actions for fast results." },
];

const phase2Steps = [
  { step: "04", title: "System Build & Integration", desc: "We build and connect all the components of your growth system." },
  { step: "05", title: "Launch & Activate", desc: "We go live with your campaigns, automations, and AI agents." },
  { step: "06", title: "Measure & Optimize", desc: "We track real outcomes and continuously improve the system." },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      aria-label="Two-phase process: strategy and foundation, then build and launch with continuous optimization"
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B75BB]/10 border border-[#1B75BB]/20 text-[#2EA6D4] text-sm mb-6">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Results fast. Foundation{" "}
            <span className="gradient-text">built to last.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/80 max-w-2xl mx-auto">
            A structured two-phase process designed to produce results quickly — with a solid
            strategic foundation underneath.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#79C5C7]/15 border border-[#79C5C7]/25 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-[#79C5C7]" />
              </div>
              <div>
                <span className="text-xs text-[#79C5C7]/60 font-mono uppercase tracking-wider">
                  Phase 1
                </span>
                <h3 className="text-lg font-bold text-white">Strategy & Foundation</h3>
              </div>
            </div>

            <div className="space-y-3">
              {phase1Steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex gap-4 p-4 glass-card"
                >
                  <span className="text-2xl font-black text-[#79C5C7]/20 font-mono w-10 flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <div className="font-semibold text-white text-sm">{s.title}</div>
                    <div className="text-xs text-[#e8f4f8]/72 mt-1">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#2EA6D4]/15 border border-[#2EA6D4]/25 flex items-center justify-center">
                <Rocket className="w-5 h-5 text-[#2EA6D4]" />
              </div>
              <div>
                <span className="text-xs text-[#2EA6D4]/60 font-mono uppercase tracking-wider">
                  Phase 2
                </span>
                <h3 className="text-lg font-bold text-white">Build & Launch</h3>
              </div>
            </div>

            <div className="space-y-3">
              {phase2Steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 p-4 glass-card"
                >
                  <span className="text-2xl font-black text-[#2EA6D4]/20 font-mono w-10 flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <div className="font-semibold text-white text-sm">{s.title}</div>
                    <div className="text-xs text-[#e8f4f8]/72 mt-1">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Continuous improvement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <ArrowDown className="w-4 h-4 text-[#e8f4f8]/20" />
          </div>
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl glass-card border border-[#00A79D]/20">
            <RefreshCw className="w-5 h-5 text-[#00A79D]" />
            <div className="text-left">
              <span className="text-sm font-semibold text-white">Then: continuous improvement.</span>
              <span className="text-sm text-[#e8f4f8]/72">
                {" "}The longer the system runs, the smarter it gets.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
