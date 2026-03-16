"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, ArrowRight } from "lucide-react";

export default function WhyName() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const steps = [
    { label: "Prospect encounters your brand", active: false },
    { label: "They ask a question", active: false },
    { label: "They seek clarity", active: true },
    { label: "They look for reassurance", active: true },
    { label: "Your system fires", active: true },
    { label: "They move forward", active: true },
  ];

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label mb-6">
              <Brain className="w-3.5 h-3.5 text-[var(--teal-light)]" />
              <span>Why &quot;Action Potential&quot;?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--color-text-strong)] mb-6 leading-tight">
              The name comes from{" "}
              <span className="gradient-text">neuroscience.</span>
            </h2>

            <div className="space-y-5 text-[var(--color-text)]/70 leading-relaxed">
              <p>
                An <span className="text-[var(--teal-light)] font-medium">action potential</span> is the
                electrical impulse that allows neurons to communicate — transmitting signals
                through the brain and triggering behavior.
              </p>
              <p>
                Without these signals, nothing moves. No thought becomes behavior. No intention
                becomes action.
              </p>
              <p>
                <span className="text-[var(--color-text-strong)] font-semibold">Businesses work the same way.</span> A
                prospect encounters your brand. They ask a question. They seek clarity. They look
                for reassurance.
              </p>
              <p className="text-base font-semibold text-[var(--color-text-strong)]">
                In that moment, how your system responds determines everything.{" "}
                <span className="gradient-text">Do they move forward — or move on?</span>
              </p>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]">
              <p className="text-sm text-[var(--teal-light)]/60 font-mono tracking-wide">
                From potential... to action.
              </p>
            </div>
          </motion.div>

          {/* Right: Signal diagram */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contained-card p-8 relative overflow-hidden">
              <div className="absolute inset-0 dot-grid opacity-30" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <Zap className="w-4 h-4 text-[var(--blue-bright)]" />
                  <span className="text-xs font-medium tracking-widest uppercase text-[var(--color-text)]/40">
                    The Signal Chain
                  </span>
                </div>

                <div className="space-y-2.5">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className={`flex items-center gap-3 p-3.5 rounded-xl transition-all ${
                        step.active
                          ? "bg-[var(--blue-bright)]/8 border border-[var(--blue-bright)]/15"
                          : "bg-[var(--color-surface)] border border-[var(--color-border)]"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          step.active ? "bg-[var(--blue-bright)]" : "bg-[var(--color-text)]/15"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          step.active ? "text-[var(--color-text)]/90 font-medium" : "text-[var(--color-text)]/50"
                        }`}
                      >
                        {step.label}
                      </span>
                      {i < steps.length - 1 && (
                        <ArrowRight
                          className={`w-3 h-3 ml-auto ${
                            step.active ? "text-[var(--blue-bright)]/40" : "text-[var(--color-text)]/10"
                          }`}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="mt-6 text-center"
                >
                  <span className="text-[11px] font-mono text-[var(--blue-bright)]/40">
                    signal propagating...
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
