"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Stethoscope,
  Lightbulb,
  Scale,
  Home,
  Building2,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const industries = [
  { icon: Stethoscope, label: "Healthcare & Wellness", color: "#79C5C7" },
  { icon: Lightbulb, label: "Coaching & Consulting", color: "#2EA6D4" },
  { icon: Scale, label: "Legal & Professional Services", color: "#00A79D" },
  { icon: Home, label: "Real Estate", color: "#1B75BB" },
  { icon: Building2, label: "Hospitality", color: "#79C5C7" },
  { icon: Wrench, label: "Home Services", color: "#2EA6D4" },
];

const outcomes = [
  "More leads — without more ad spend",
  "More booked appointments — with less manual follow-up",
  "More sales and higher close rates",
  "More reviews and stronger online reputation",
  "Higher customer retention and lifetime value",
  "Less stress — more time for the work you love",
];

export default function WhoWeServe() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="who-we-serve" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-6 mx-auto w-fit">
            <span>Who We Serve</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-strong)] mb-6">
            Built for businesses ready{" "}
            <span className="gradient-text">to grow.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text)]/55 max-w-2xl mx-auto leading-relaxed">
            We work with small and midsize service businesses, professional practices, and local
            businesses that are ready to grow — but don&apos;t have time to chase leads manually.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-[var(--color-text-strong)] mb-5">Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="contained-card p-4 flex items-center gap-3 hover:border-[var(--color-border-strong)] transition-all"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${industry.color}10, ${industry.color}05)`,
                      border: `1px solid ${industry.color}18`,
                    }}
                  >
                    <industry.icon className="w-4 h-4" style={{ color: industry.color }} />
                  </div>
                  <span className="text-sm font-medium text-[var(--color-text)]/75">{industry.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-5 p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)]"
            >
              <p className="text-sm text-[var(--color-text)]/50">
                <span className="text-[var(--teal-light)]/70">Not in this list?</span> If you&apos;re a
                service business with a sales process and a desire to grow, we should talk.
              </p>
            </motion.div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-[var(--color-text-strong)] mb-5">What Our Clients Experience</h3>
            <div className="space-y-2.5">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.25 + i * 0.06 }}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl contained-card hover:border-[var(--color-border-strong)] transition-all"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--teal-green)]/60 flex-shrink-0" />
                  <span className="text-sm text-[var(--color-text)]/70">{outcome}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="mt-6 p-5 rounded-2xl border-gradient"
            >
              <h4 className="font-semibold text-[var(--color-text-strong)] mb-3 text-xs uppercase tracking-wider">
                You&apos;re a great fit if you...
              </h4>
              <ul className="space-y-2">
                {[
                  "Have a real service business with existing customers",
                  "Want to grow but not work harder",
                  "Are open to letting technology do the heavy lifting",
                  "Value substance over vanity metrics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text)]/60">
                    <span className="text-[var(--teal-light)]/50 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
