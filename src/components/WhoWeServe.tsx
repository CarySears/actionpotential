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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#79C5C7]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-sm mb-6">
            Who We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Built for businesses ready{" "}
            <span className="gradient-text">to grow.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/80 max-w-2xl mx-auto">
            We work with small and midsize service businesses, professional practices, and local
            businesses that are ready to grow — but don&apos;t have time to chase leads manually.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Industries We Serve</h3>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="glass-card glass-card-hover p-5 flex items-center gap-3"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: industry.color + "15",
                      border: `1px solid ${industry.color}25`,
                    }}
                  >
                    <industry.icon className="w-5 h-5" style={{ color: industry.color }} />
                  </div>
                  <span className="text-sm font-medium text-[#e8f4f8]/92">{industry.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-6 p-4 rounded-xl bg-[#79C5C7]/5 border border-[#79C5C7]/10"
            >
              <p className="text-sm text-[#e8f4f8]/75">
                <span className="text-[#79C5C7]">Not in this list?</span> If you&apos;re a
                service business with a sales process and a desire to grow, we should talk.
              </p>
            </motion.div>
          </motion.div>

          {/* Outcomes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-6">What Our Clients Experience</h3>
            <div className="space-y-4">
              {outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass-card glass-card-hover"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00A79D] flex-shrink-0" />
                  <span className="text-sm sm:text-base text-[#e8f4f8]/90">{outcome}</span>
                </motion.div>
              ))}
            </div>

            {/* Ideal client profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="mt-8 p-6 rounded-2xl border-gradient"
            >
              <h4 className="font-bold text-white mb-3 text-sm uppercase tracking-wider">
                You&apos;re a great fit if you...
              </h4>
              <ul className="space-y-2">
                {[
                  "Have a real service business with existing customers",
                  "Want to grow but not work harder",
                  "Are open to letting technology do the heavy lifting",
                  "Value substance over vanity metrics",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#e8f4f8]/80">
                    <span className="text-[#79C5C7] mt-0.5">→</span>
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
