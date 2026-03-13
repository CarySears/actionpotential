"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, FlaskConical, Layers, Unlock } from "lucide-react";

const differentiators = [
  {
    icon: Heart,
    title: "Human-Centered AI",
    body: "We believe AI should strengthen human relationships — not replace them. Our systems communicate in your brand's voice, reflect your expertise, and feel authentic. Not robotic. Not scripted.",
    highlight: "Genuinely helpful.",
    color: "#79C5C7",
    glow: "#79C5C7",
  },
  {
    icon: FlaskConical,
    title: "Behavioral Science at the Core",
    body: "Our founder holds master's degrees in Experimental Psychology and User Experience Design. Understanding how humans make decisions isn't a marketing buzzword for us.",
    highlight: "It's the foundation of every system we build.",
    color: "#2EA6D4",
    glow: "#2EA6D4",
  },
  {
    icon: Layers,
    title: "Full-Funnel Ownership",
    body: "We don't hand you leads and disappear. We own the entire journey from stranger to advocate — and we build the systems to automate it.",
    highlight: "Strangers to advocates.",
    color: "#00A79D",
    glow: "#00A79D",
  },
  {
    icon: Unlock,
    title: "No Long-Term Contracts",
    body: "We don't lock clients in. We earn continued trust through results. If we're not delivering, you should have the freedom to walk away.",
    highlight: "We're confident you won't want to.",
    color: "#1B75BB",
    glow: "#1B75BB",
  },
];

const vsItems = [
  { other: "Hands you leads", ap: "Builds the whole system" },
  { other: "Single-channel focus", ap: "Omnichannel from day one" },
  { other: "Set it and forget it", ap: "Continuous optimization" },
  { other: "Vanity metrics", ap: "Revenue outcomes" },
  { other: "Agency black box", ap: "Transparent & collaborative" },
  { other: "Long-term contracts", ap: "Earn trust every month" },
];

export default function Differentiators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="why-us"
      aria-label="What makes ActionPotential.AI different: human-centered AI, behavioral science, full-funnel ownership, no long-term contracts"
      className="relative py-24 sm:py-32"
    >
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#79C5C7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#1B75BB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-sm mb-6">
            <span>What Makes Us Different</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            We&apos;re not just an agency.{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">We&apos;re your growth partner.</span>
          </h2>
        </motion.div>

        {/* 4 differentiator cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass-card glass-card-hover p-8 relative overflow-hidden group"
            >
              {/* Glow on hover */}
              <div
                className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                style={{ background: `radial-gradient(circle at 50% 50%, ${d.glow}15, transparent 70%)` }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: d.color + "15", border: `1px solid ${d.color}30` }}
                >
                  <d.icon className="w-7 h-7" style={{ color: d.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{d.title}</h3>
                <p className="text-[#e8f4f8]/78 leading-relaxed mb-3">{d.body}</p>
                <p className="font-semibold" style={{ color: d.color }}>
                  {d.highlight}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VS Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Other agencies vs.{" "}
            <span className="gradient-text">ActionPotential.AI</span>
          </h3>
          <div className="grid grid-cols-2 gap-2 max-w-2xl mx-auto">
            {/* Headers */}
            <div className="text-center pb-3 border-b border-[#e8f4f8]/10">
              <span className="text-sm font-semibold text-[#e8f4f8]/40 uppercase tracking-wider">
                Typical Agency
              </span>
            </div>
            <div className="text-center pb-3 border-b border-[#2EA6D4]/20">
              <span className="text-sm font-semibold text-[#2EA6D4] uppercase tracking-wider">
                ActionPotential.AI
              </span>
            </div>
            {/* Rows */}
            {vsItems.map((item, i) => (
              <>
                <div
                  key={`other-${i}`}
                  className="py-3 px-4 text-sm text-[#e8f4f8]/62 border-b border-[#e8f4f8]/8 flex items-center"
                >
                  <span className="mr-2 text-red-500/50">✗</span>
                  {item.other}
                </div>
                <div
                  key={`ap-${i}`}
                  className="py-3 px-4 text-sm text-[#e8f4f8]/90 border-b border-[#e8f4f8]/8 flex items-center bg-[#2EA6D4]/6"
                >
                  <span className="mr-2 text-[#00A79D]">✓</span>
                  {item.ap}
                </div>
              </>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
