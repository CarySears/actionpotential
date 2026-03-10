"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Calendar, ArrowRight, CheckCircle2, Brain, Mail } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const auditIncludes = [
  "Review of your current marketing and lead flow",
  "AI & automation opportunity assessment",
  "AI Search analysis",
  "Custom Behavioral Engine blueprint",
  "Priority roadmap with your top quick wins",
  "No pressure. Actionable recommendations either way.",
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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          {/* Pulsing icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#79C5C7] to-[#1B75BB] flex items-center justify-center node-pulse">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#79C5C7]/15 to-[#1B75BB]/15 blur-2xl" />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#79C5C7] node-pulse" />
            Free — No Obligation
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Ready to fire your
            <br />
            <span className="shimmer">growth system?</span>
          </h2>

          <p className="text-lg text-[#e8f4f8]/80 max-w-2xl mx-auto leading-relaxed">
            Book your free AI Audit today. We&apos;ll identify your biggest conversion bottlenecks,
            show where revenue is leaking, and map the highest-impact fixes for the next 90 days.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/results/index.html"
              className="rounded-full border border-[#79C5C7]/25 bg-[#79C5C7]/8 px-4 py-2 text-sm text-[#e8f4f8]/90 hover:bg-[#79C5C7]/14 transition-colors"
            >
              Watch client testimonial videos
            </a>
            <a
              href="/resources/faq/index.html"
              className="rounded-full border border-[#79C5C7]/22 bg-[#79C5C7]/6 px-4 py-2 text-sm text-[#e8f4f8]/88 hover:bg-[#79C5C7]/12 transition-colors"
            >
              Read FAQs before booking
            </a>
          </div>
        </motion.div>

        {/* Two-column: what's included + real conversion actions */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <Calendar className="w-5 h-5 text-[#79C5C7]" />
              <h3 className="font-bold text-white">Your Free AI Audit Includes:</h3>
            </div>
            <div className="space-y-3">
              {auditIncludes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00A79D] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#e8f4f8]/70">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#79C5C7]/10">
              <p className="text-xs text-[#e8f4f8]/60 italic">
                We earn trust first. If there&apos;s no fit, you still leave with a clearer growth
                roadmap.
              </p>
            </div>
          </motion.div>

          {/* Booking / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-7 border-gradient"
          >
            <h3 className="font-bold text-white mb-2">Book Your Free AI Audit</h3>
            <p className="text-sm text-[#e8f4f8]/70 mb-6">
              Pick a time directly on our calendar. Takes about 2 minutes.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-[#e8f4f8]/12 bg-[#e8f4f8]/5 p-4">
                <p className="text-sm text-[#e8f4f8]/80 mb-3 font-semibold">What happens after you book:</p>
                <ul className="space-y-2">
                  {[
                    "You select a time that works for your schedule",
                    "We review your current funnel before the call",
                    "You get a practical action plan, not a vague pitch",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#e8f4f8]/75">
                      <CheckCircle2 className="w-4 h-4 text-[#00A79D] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={bookingUrl}
                className="w-full py-4 rounded-xl font-bold text-white glow-button inline-flex items-center justify-center gap-2 mt-2"
              >
                <Zap className="w-5 h-5" fill="white" />
                Book Free AI Audit
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <a
                href="mailto:hello@actionpotential.ai"
                className="w-full py-3 rounded-xl border border-[#79C5C7]/25 text-[#e8f4f8]/90 hover:bg-[#79C5C7]/8 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#79C5C7]" />
                Prefer email? hello@actionpotential.ai
              </a>

              <p className="text-center text-xs text-[#e8f4f8]/60">
                No long-term contracts. No pressure tactics. Clear next steps.
              </p>
            </div>
          </motion.div>
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
