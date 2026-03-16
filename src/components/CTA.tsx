"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Calendar, ArrowRight, CheckCircle2, Brain, Mail } from "lucide-react";

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
      <div className="absolute inset-0 subtle-grid" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#2EA6D4]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--teal-light)]/15 to-[var(--blue-deep)]/15 border border-[var(--teal-light)]/15 flex items-center justify-center">
              <Brain className="w-8 h-8 text-[var(--teal-light)]" />
            </div>
          </div>

          <div className="section-label mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--teal-light)] animate-pulse" />
            <span>Free — No Obligation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-strong)] mb-6 leading-tight">
            Ready to fire your
            <br />
            <span className="gradient-text">growth system?</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text)]/55 max-w-2xl mx-auto leading-relaxed">
            Book your free AI Audit today. We&apos;ll identify your biggest conversion bottlenecks,
            show where revenue is leaking, and map the highest-impact fixes for the next 90 days.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/results/index.html"
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)]/65 hover:border-[var(--color-border-strong)] transition-all"
            >
              Watch client testimonial videos
            </a>
            <a
              href="/resources/faq/index.html"
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-[var(--color-text)]/65 hover:border-[var(--color-border-strong)] transition-all"
            >
              Read FAQs before booking
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* What's included */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="contained-card p-7"
          >
            <div className="flex items-center gap-2 mb-5">
              <Calendar className="w-4 h-4 text-[var(--teal-light)]/70" />
              <h3 className="font-semibold text-[var(--color-text-strong)] text-sm">Your Free AI Audit Includes:</h3>
            </div>
            <div className="space-y-3">
              {auditIncludes.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[var(--teal-green)]/50 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[var(--color-text)]/50">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
              <p className="text-xs text-[var(--color-text)]/35 italic">
                We earn trust first. If there&apos;s no fit, you still leave with a clearer growth
                roadmap.
              </p>
            </div>
          </motion.div>

          {/* Booking */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="contained-card p-7 border-gradient"
          >
            <h3 className="font-semibold text-[var(--color-text-strong)] text-sm mb-2">Book Your Free AI Audit</h3>
            <p className="text-sm text-[var(--color-text)]/45 mb-6">
              Pick a time directly on our calendar. Takes about 2 minutes.
            </p>

            <div className="space-y-4">
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <p className="text-sm text-[var(--color-text)]/60 mb-3 font-medium">What happens after you book:</p>
                <ul className="space-y-2">
                  {[
                    "You select a time that works for your schedule",
                    "We review your current funnel before the call",
                    "You get a practical action plan, not a vague pitch",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--color-text)]/50">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--teal-green)]/50 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href={bookingUrl}
                className="w-full py-4 rounded-xl font-semibold text-white glow-button inline-flex items-center justify-center gap-2 mt-2"
              >
                <Zap className="w-4 h-4" fill="white" />
                Book Free AI Audit
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <a
                href="mailto:hello@actionpotential.ai"
                className="w-full py-3 rounded-xl border border-[var(--color-border)] text-[var(--color-text)]/60 hover:border-[var(--color-border-strong)] transition-all inline-flex items-center justify-center gap-2 text-sm"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--teal-light)]/50" />
                Prefer email? hello@actionpotential.ai
              </a>

              <p className="text-center text-xs text-[var(--color-text)]/30">
                No long-term contracts. No pressure tactics. Clear next steps.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-xl sm:text-2xl font-bold text-[var(--color-text)]/10 tracking-tight">
            From potential...{" "}
            <span className="gradient-text opacity-70">to action.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
