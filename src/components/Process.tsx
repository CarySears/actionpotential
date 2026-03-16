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
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-6 mx-auto w-fit">
            <span>Our Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-strong)] mb-6">
            Results fast. Foundation{" "}
            <span className="gradient-text">built to last.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text)]/55 max-w-2xl mx-auto leading-relaxed">
            A structured two-phase process designed to produce results quickly — with a solid
            strategic foundation underneath.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Phase 1 */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contained-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[var(--teal-light)]/8 border border-[var(--teal-light)]/15 flex items-center justify-center">
                <ClipboardList className="w-4 h-4 text-[var(--teal-light)]" />
              </div>
              <div>
                <span className="text-[10px] text-[var(--teal-light)]/40 font-mono uppercase tracking-wider">
                  Phase 1
                </span>
                <h3 className="text-base font-semibold text-[var(--color-text-strong)]">Strategy & Foundation</h3>
              </div>
            </div>

            <div className="space-y-2.5">
              {phase1Steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex gap-4 p-3.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]"
                >
                  <span className="text-lg font-bold text-[var(--teal-light)]/15 font-mono w-8 flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <div className="font-medium text-[var(--color-text-strong)] text-sm">{s.title}</div>
                    <div className="text-xs text-[var(--color-text)]/45 mt-0.5">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phase 2 */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contained-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl bg-[var(--blue-bright)]/8 border border-[var(--blue-bright)]/15 flex items-center justify-center">
                <Rocket className="w-4 h-4 text-[var(--blue-bright)]" />
              </div>
              <div>
                <span className="text-[10px] text-[var(--blue-bright)]/40 font-mono uppercase tracking-wider">
                  Phase 2
                </span>
                <h3 className="text-base font-semibold text-[var(--color-text-strong)]">Build & Launch</h3>
              </div>
            </div>

            <div className="space-y-2.5">
              {phase2Steps.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex gap-4 p-3.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]"
                >
                  <span className="text-lg font-bold text-[var(--blue-bright)]/15 font-mono w-8 flex-shrink-0">
                    {s.step}
                  </span>
                  <div>
                    <div className="font-medium text-[var(--color-text-strong)] text-sm">{s.title}</div>
                    <div className="text-xs text-[var(--color-text)]/45 mt-0.5">{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <ArrowDown className="w-3.5 h-3.5 text-[var(--color-text)]/15" />
          </div>
          <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl contained-card">
            <RefreshCw className="w-4 h-4 text-[var(--teal-green)]/70" />
            <div className="text-left">
              <span className="text-sm font-medium text-[var(--color-text-strong)]">Then: continuous improvement.</span>
              <span className="text-sm text-[var(--color-text)]/45">
                {" "}The longer the system runs, the smarter it gets.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
