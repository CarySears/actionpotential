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
    { label: "Your system fires ⚡", active: true },
    { label: "They move forward", active: true },
  ];

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00A79D]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-sm mb-6">
              <Brain className="w-4 h-4" />
              Why &quot;Action Potential&quot;?
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              The name comes from{" "}
              <span className="gradient-text">neuroscience.</span>
            </h2>

            <div className="space-y-5 text-[#e8f4f8]/65 leading-relaxed">
              <p>
                An <span className="text-[#79C5C7] font-medium">action potential</span> is the
                electrical impulse that allows neurons to communicate — transmitting signals
                through the brain and triggering behavior.
              </p>
              <p>
                Without these signals, nothing moves. No thought becomes behavior. No intention
                becomes action.
              </p>
              <p className="text-[#e8f4f8]/80">
                <span className="text-white font-semibold">Businesses work the same way.</span> A
                prospect encounters your brand. They ask a question. They seek clarity. They look
                for reassurance.
              </p>
              <p className="text-lg font-semibold text-white">
                In that moment, how your system responds determines everything.{" "}
                <span className="gradient-text">Do they move forward — or move on?</span>
              </p>
            </div>

            <div className="mt-8 p-5 rounded-2xl bg-[#79C5C7]/5 border border-[#79C5C7]/15">
              <p className="text-sm text-[#79C5C7] font-mono tracking-wide">
                From potential... to action.
              </p>
            </div>
          </motion.div>

          {/* Right: Visual signal diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Neuron signal visualization */}
            <div className="glass-card p-8 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2EA6D4]/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8">
                  <Zap className="w-5 h-5 text-[#2EA6D4]" />
                  <span className="text-sm font-semibold text-[#e8f4f8]/70 uppercase tracking-wider">
                    The Signal Chain
                  </span>
                </div>

                <div className="space-y-3">
                  {steps.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                        step.active
                          ? "bg-[#2EA6D4]/10 border border-[#2EA6D4]/20"
                          : "bg-[#e8f4f8]/3 border border-[#e8f4f8]/5"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full flex-shrink-0 ${
                          step.active ? "bg-[#2EA6D4] node-pulse" : "bg-[#e8f4f8]/20"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          step.active ? "text-[#e8f4f8]/90 font-medium" : "text-[#e8f4f8]/40"
                        }`}
                      >
                        {step.label}
                      </span>
                      {i < steps.length - 1 && (
                        <ArrowRight
                          className={`w-3 h-3 ml-auto ${
                            step.active ? "text-[#2EA6D4]/60" : "text-[#e8f4f8]/15"
                          }`}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mt-6 text-center"
                >
                  <span className="text-xs font-mono text-[#2EA6D4]/70">
                    signal propagating... ████████░░ 80%
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
