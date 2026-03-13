"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, MessageCircle, HeartHandshake, ShoppingCart, Star, Megaphone } from "lucide-react";

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
    <section
      ref={ref}
      id="how-it-works"
      aria-label="How the Behavioral Engine works: six-stage growth loop from attract to amplify"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B75BB]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2EA6D4]/10 border border-[#2EA6D4]/20 text-[#2EA6D4] text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2EA6D4] node-pulse" />
            The Behavioral Engine™
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Six stages. One continuous{" "}
            <span className="gradient-text">growth loop.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/80 max-w-2xl mx-auto">
            Every client receives a full-funnel Behavioral Engine — designed to move people from
            first impression to loyal advocate, automatically.
          </p>
        </motion.div>

        {/* Stages grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {stages.map((stage, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card glass-card-hover p-6 group relative overflow-hidden"
            >
              {/* Number watermark */}
              <span
                className="absolute -right-2 -top-4 text-7xl font-black opacity-[0.04] select-none"
                style={{ color: stage.color }}
              >
                {stage.number}
              </span>

              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: stage.color + "18", border: `1px solid ${stage.color}30` }}
                >
                  <stage.icon className="w-6 h-6" style={{ color: stage.color }} />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs font-mono" style={{ color: stage.color + "80" }}>
                    {stage.number}
                  </span>
                  <h3 className="text-lg font-bold text-white">{stage.title}</h3>
                </div>
                <p className="text-[#e8f4f8]/78 text-sm leading-relaxed">{stage.desc}</p>

                {/* Connection line (visual) */}
                {i < stages.length - 1 && (
                  <div
                    className="absolute bottom-0 right-0 w-px h-6 opacity-20"
                    style={{ background: `linear-gradient(to bottom, ${stage.color}, transparent)` }}
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Five Growth Drivers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Five Growth Drivers
            </h3>
            <p className="text-[#e8f4f8]/72">Everything we build serves these five outcomes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {drivers.map((driver, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.08 }}
                className="glass-card glass-card-hover p-5 text-center group"
              >
                <div className="text-3xl font-black gradient-text mb-3 group-hover:scale-110 transition-transform">
                  {driver.icon}
                </div>
                <div className="text-sm font-semibold text-white mb-1">{driver.label}</div>
                <div className="text-xs text-[#e8f4f8]/70">{driver.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
