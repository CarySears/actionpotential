"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, MessageCircle, HeartHandshake, ShoppingCart, Star, Megaphone, ArrowRight } from "lucide-react";

const stages = [
  {
    icon: Eye,
    number: "01",
    title: "Attract",
    desc: "Get found by the right people across search, social, and AI platforms.",
    color: "#79C5C7",
  },
  {
    icon: MessageCircle,
    number: "02",
    title: "Engage",
    desc: "Convert visitors into conversations — instantly, in their preferred channel.",
    color: "#2EA6D4",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Nurture",
    desc: "Build trust with intelligent follow-up sequences that feel human.",
    color: "#00A79D",
  },
  {
    icon: ShoppingCart,
    number: "04",
    title: "Convert",
    desc: "Guide prospects to book, buy, or commit — with behavioral precision.",
    color: "#1B75BB",
  },
  {
    icon: Star,
    number: "05",
    title: "Retain",
    desc: "Increase lifetime value through loyalty-building automated touchpoints.",
    color: "#2EA6D4",
  },
  {
    icon: Megaphone,
    number: "06",
    title: "Amplify",
    desc: "Turn happy customers into advocates who generate reviews and referrals.",
    color: "#79C5C7",
  },
];

const drivers = [
  { label: "Lead Generation", desc: "Attract more of the right traffic", icon: "↑" },
  { label: "Lead Conversion", desc: "Turn visitors into booked appointments", icon: "→" },
  { label: "Lifetime Value", desc: "Increase retention and repeat purchases", icon: "∞" },
  { label: "Referrals & Reviews", desc: "Transform customers into advocates", icon: "★" },
  { label: "Reactivation", desc: "Re-engage dormant leads and customers", icon: "↺" },
];

export default function BehavioralEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="section-label mb-6 mx-auto w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue-bright)] animate-pulse" />
            <span>The Behavioral Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-strong)] mb-6">
            Six stages. One continuous{" "}
            <span className="gradient-text">growth loop.</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--color-text)]/70 max-w-2xl mx-auto leading-relaxed">
            Every client receives a full-funnel Behavioral Engine — designed to move people from
            first impression to loyal advocate, automatically.
          </p>
        </motion.div>

        {/* Flow diagram - connected stages */}
        <div className="contained-card p-6 sm:p-10 mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#2EA6D4]/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            {/* Desktop: horizontal flow */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-6 gap-3">
                {stages.map((stage, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="relative"
                  >
                    <div className="flex flex-col items-center text-center group">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${stage.color}12, ${stage.color}06)`,
                          border: `1px solid ${stage.color}25`,
                        }}
                      >
                        <stage.icon className="w-6 h-6" style={{ color: stage.color }} />
                      </div>

                      <span className="text-[10px] font-mono text-[var(--color-text)]/25 mb-1">
                        {stage.number}
                      </span>
                      <h3 className="text-sm font-semibold text-[var(--color-text-strong)] mb-1.5">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-[var(--color-text)]/55 leading-relaxed">
                        {stage.desc}
                      </p>
                    </div>

                    {i < stages.length - 1 && (
                      <div className="absolute top-7 -right-2 z-20">
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--color-text)]/15" />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Loop-back arrow */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
                className="mt-6 flex items-center justify-center"
              >
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <span className="text-xs text-[var(--color-text)]/40">Continuous loop</span>
                  <svg width="32" height="12" viewBox="0 0 32 12" fill="none">
                    <path
                      d="M1 6C1 6 7 1 16 1C25 1 31 6 31 6C31 6 25 11 16 11C7 11 1 6 1 6Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-[var(--teal-light)]/30"
                      strokeDasharray="3 3"
                    />
                  </svg>
                  <span className="text-xs text-[var(--teal-light)]/60">Amplify → Attract</span>
                </div>
              </motion.div>
            </div>

            {/* Mobile: vertical flow */}
            <div className="lg:hidden space-y-3">
              {stages.map((stage, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-border-strong)] transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `linear-gradient(135deg, ${stage.color}12, ${stage.color}06)`,
                      border: `1px solid ${stage.color}25`,
                    }}
                  >
                    <stage.icon className="w-5 h-5" style={{ color: stage.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-mono text-[var(--color-text)]/25">{stage.number}</span>
                      <h3 className="text-sm font-semibold text-[var(--color-text-strong)]">{stage.title}</h3>
                    </div>
                    <p className="text-xs text-[var(--color-text)]/55 mt-1 leading-relaxed">{stage.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Five Growth Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--color-text-strong)] mb-3">
              Five Growth Drivers
            </h3>
            <p className="text-[var(--color-text)]/50 text-sm">Everything we build serves these five outcomes.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {drivers.map((driver, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.06 }}
                className="contained-card p-5 text-center group hover:border-[var(--color-border-strong)] transition-all"
              >
                <div className="text-2xl font-bold gradient-text mb-2.5 group-hover:scale-105 transition-transform">
                  {driver.icon}
                </div>
                <div className="text-sm font-medium text-[var(--color-text-strong)] mb-1">{driver.label}</div>
                <div className="text-xs text-[var(--color-text)]/45">{driver.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
