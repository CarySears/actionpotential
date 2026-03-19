"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import TaglineAnimation from "./TaglineAnimation";

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
      {/* Dark CTA panel */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-2xl bg-[#1A1A1A] border border-[#e8f4f8]/10 p-8 sm:p-12"
        >
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Headline + intro */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Find your revenue leaks. Free. 45 minutes.
              </h2>
              <p className="text-[#e8f4f8]/82 leading-relaxed">
                We audit your current funnel and deliver a prioritized 90-day action plan. No pitch
                deck. No pressure. Just a clear picture of where you&apos;re losing revenue — and
                exactly what to do about it.
              </p>
            </div>

            {/* Right: Checklist + CTA */}
            <div>
              <div className="text-xs uppercase tracking-widest text-[#e8f4f8]/60 mb-4">
                What You Get
              </div>
              <ul className="space-y-0 mb-8">
                {auditIncludes.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 py-3 border-b border-[#e8f4f8]/10 last:border-0"
                  >
                    <span className="text-[#00A79D] mt-0.5">✓</span>
                    <span className="text-[#e8f4f8]/85 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={bookingUrl}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-[#1A1A1A] bg-white hover:bg-[#e8f4f8] transition-colors"
              >
                Book your free AI Audit
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <p className="text-xs text-[#e8f4f8]/60 mt-4">
                No-pressure follow-up. Built for service businesses ready to stop losing revenue
                they&apos;ve already earned.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tagline with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-16"
        >
          <TaglineAnimation idPrefix="cta" className="!text-2xl sm:!text-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
