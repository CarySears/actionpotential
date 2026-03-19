"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const auditIncludes = [
  "Your top 3 conversion leaks and their likely revenue impact",
  "Database reactivation opportunity — revenue from what you already own",
  "A prioritized 90-day action plan across demand, response, and retention",
  "Clear KPIs to track from week one",
  "Action plan delivered within 48 hours",
];

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const bookingUrl = "https://link.actionpotential.ai/widget/booking/ksD7NPYqg5JoFugUIJnm";

  return (
    <section ref={ref} id="cta" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-30">
        <NeuralNetwork />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(46,166,212,0.08)_0%,rgba(13,17,23,0.78)_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight italic">
                Find your revenue leaks.
                <br />
                Free. 45 minutes.
              </h2>
              <p className="text-[#e8f4f8]/80 leading-relaxed mb-0">
                We audit your current funnel and deliver a prioritized 90-day action plan. No pitch
                deck. No pressure. Just a clear picture of where you&apos;re losing revenue — and
                exactly what to do about it.
              </p>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xs text-[#79C5C7] uppercase tracking-widest mb-5">
                What You Get
              </p>

              <div className="space-y-3 mb-8 pb-8 border-b border-[#e8f4f8]/10">
                {auditIncludes.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00A79D] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#e8f4f8]/80">{item}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={bookingUrl}
                className="w-full py-4 rounded-xl font-bold text-white glow-button inline-flex items-center justify-center gap-2 mb-4"
              >
                Book your free AI Audit
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <p className="text-xs text-[#e8f4f8]/50 text-center italic">
                No-pressure follow-up. Built for service businesses ready to stop losing revenue
                they&apos;ve already earned.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl sm:text-3xl font-black text-white/20 tracking-tight">
            From potential...{" "}
            <span className="gradient-text opacity-100">to action.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
