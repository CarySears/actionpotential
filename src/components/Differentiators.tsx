"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, MessageSquareText, Sparkles, SquareDashedMousePointer } from "lucide-react";

const differentiators = [
  {
    icon: Brain,
    title: "Behavioral science",
    body: "Decision design principles guide timing, framing, and follow-up sequences.",
    color: "#79C5C7",
  },
  {
    icon: SquareDashedMousePointer,
    title: "Interaction design + UX",
    body: "Clean flows reduce friction and make next actions obvious for real users.",
    color: "#2EA6D4",
  },
  {
    icon: MessageSquareText,
    title: "Conversational marketing",
    body: "Conversations replace dead forms and move prospects forward faster.",
    color: "#00A79D",
  },
  {
    icon: Sparkles,
    title: "Human-centered AI",
    body: "AI handles speed and scale, while humans own nuance and close quality.",
    color: "#1B75BB",
  },
];

export default function Differentiators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="why-us" className="relative py-20 sm:py-24">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#79C5C7]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#1B75BB]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-sm mb-6">
            What makes us different
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Four disciplines.
            <span className="gradient-text"> One conversion system.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/76 max-w-2xl mx-auto">
            You get strategic depth without complexity overload.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: d.color + "15", border: `1px solid ${d.color}30` }}
              >
                <d.icon className="w-5 h-5" style={{ color: d.color }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
              <p className="text-sm text-[#e8f4f8]/76 leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-card p-5"
        >
          <div className="grid sm:grid-cols-3 gap-3 text-sm">
            <p className="text-[#e8f4f8]/84">Clear interfaces</p>
            <p className="text-[#e8f4f8]/84">Behavior-driven messaging</p>
            <p className="text-[#e8f4f8]/84">Practical AI orchestration</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
