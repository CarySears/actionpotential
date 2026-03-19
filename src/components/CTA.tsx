"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const whatYouGet = [
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 sm:p-12 rounded-2xl border border-[#e8f4f8]/8"
          style={{ background: "linear-gradient(135deg, rgba(20,25,32,0.95), rgba(13,17,23,0.98))" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                Find your revenue leaks.
                <br />
                <span className="shimmer">Free. 45 minutes.</span>
              </h2>
              <p className="text-[#e8f4f8]/72 leading-relaxed">
                We audit your current funnel and deliver a prioritized 90-day action plan.
                No pitch deck. No pressure. Just a clear picture of where you&apos;re losing
                revenue — and exactly what to do about it.
              </p>
            </div>

            {/* Right side */}
            <div>
              <div className="text-xs text-[#e8f4f8]/45 uppercase tracking-widest mb-5">
                What You Get
              </div>

              <div className="space-y-0">
                {whatYouGet.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.07 }}
                    className="flex items-start gap-3 py-3 border-b border-[#e8f4f8]/8 last:border-0"
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
                className="mt-8 w-full py-4 rounded-xl font-bold text-white border border-[#e8f4f8]/20 hover:border-[#e8f4f8]/40 bg-[#e8f4f8]/5 hover:bg-[#e8f4f8]/10 inline-flex items-center justify-center gap-2 transition-all"
              >
                Book your free AI Audit
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <p className="text-xs text-[#e8f4f8]/50 mt-4">
                No-pressure follow-up. Built for service businesses ready to stop losing
                revenue they&apos;ve already earned.
              </p>
            </div>
          </div>
        </motion.div>

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
