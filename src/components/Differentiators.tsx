"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, FlaskConical, Layers, Unlock } from "lucide-react";

const differentiators = [
  {
    icon: Heart,
    title: "Human-Centered AI",
    body: "We believe AI should strengthen human relationships — not replace them. Our systems communicate in your brand's voice, reflect your expertise, and feel authentic.",
    highlight: "Genuinely helpful.",
    color: "#79C5C7",
  },
  {
    icon: FlaskConical,
    title: "Behavioral Science at the Core",
    body: "Our founder holds master's degrees in Experimental Psychology and User Experience Design. Understanding how humans make decisions isn't a marketing buzzword for us.",
    highlight: "It's the foundation of every system we build.",
    color: "#2EA6D4",
  },
  {
    icon: Layers,
    title: "Full-Funnel Ownership",
    body: "We don't hand you leads and disappear. We own the entire journey from stranger to advocate — and we build the systems to automate it.",
    highlight: "Strangers to advocates.",
    color: "#00A79D",
  },
  {
    icon: Unlock,
    title: "No Long-Term Contracts",
    body: "We don't lock clients in. We earn continued trust through results. If we're not delivering, you should have the freedom to walk away.",
    highlight: "We're confident you won't want to.",
    color: "#1B75BB",
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
    <section ref={ref} id="why-us" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label mb-6 mx-auto w-fit">
            <span>What Makes Us Different</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-text-strong)] mb-6">
            We&apos;re not just an agency.{" "}
            <br className="hidden sm:block" />
            <span className="gradient-text">We&apos;re your growth partner.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {differentiators.map((d, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="contained-card p-7 hover:border-[var(--color-border-strong)] transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `linear-gradient(135deg, ${d.color}10, ${d.color}05)`,
                  border: `1px solid ${d.color}18`,
                }}
              >
                <d.icon className="w-5.5 h-5.5" style={{ color: d.color }} />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-strong)] mb-3">{d.title}</h3>
              <p className="text-sm text-[var(--color-text)]/55 leading-relaxed mb-3">{d.body}</p>
              <p className="text-sm font-medium" style={{ color: d.color + "90" }}>
                {d.highlight}
              </p>
            </motion.div>
          ))}
        </div>

        {/* VS Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="contained-card p-8"
        >
          <h3 className="text-xl font-bold text-[var(--color-text-strong)] text-center mb-8">
            Other agencies vs.{" "}
            <span className="gradient-text">ActionPotential.AI</span>
          </h3>
          <div className="grid grid-cols-2 gap-2 max-w-2xl mx-auto">
            <div className="text-center pb-3 border-b border-[var(--color-border)]">
              <span className="text-xs font-medium text-[var(--color-text)]/30 uppercase tracking-wider">
                Typical Agency
              </span>
            </div>
            <div className="text-center pb-3 border-b border-[var(--blue-bright)]/15">
              <span className="text-xs font-medium text-[var(--blue-bright)]/70 uppercase tracking-wider">
                ActionPotential.AI
              </span>
            </div>
            {vsItems.map((item, i) => (
              <div key={i} className="contents">
                <div className="py-3 px-4 text-sm text-[var(--color-text)]/40 border-b border-[var(--color-border)] flex items-center">
                  <span className="mr-2 text-red-500/30">✗</span>
                  {item.other}
                </div>
                <div className="py-3 px-4 text-sm text-[var(--color-text)]/80 border-b border-[var(--color-border)] flex items-center bg-[var(--blue-bright)]/[0.03]">
                  <span className="mr-2 text-[var(--teal-green)]/70">✓</span>
                  {item.ap}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
