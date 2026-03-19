"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Circle } from "lucide-react";

const behavioralFeatures = [
  {
    title: "Voice AI Agent",
    desc: "Answers calls 24/7, books appointments, qualifies leads — human-sounding, never robotic. No missed calls, no lost voicemails.",
    color: "#2EA6D4",
  },
  {
    title: "Conversational AI",
    desc: "Handles texts, emails, website chat, and DMs like a trained team member. Responds instantly, qualifies leads, and books calls.",
    color: "#2EA6D4",
  },
  {
    title: "Behavioral follow-up sequences",
    desc: "Nurture sequences built on behavioral science — designed around how people actually make decisions, not just drip timing.",
    color: "#2EA6D4",
  },
  {
    title: "Intelligent websites",
    desc: "We turn your static brochure into a dynamic conversion machine. Visitors bounce because they can't find answers and won't fill out forms that disappear into a black hole. Our AI employees converse with visitors 24/7/365 — answering questions, qualifying leads, and booking appointments. Trained in your business, brand, and tone of voice. Your website finally works as hard as you do.",
    color: "#2EA6D4",
  },
  {
    title: "Reviews AI",
    note: "also feeds Visibility ↓",
    desc: "Works with your existing clients to build 5-star reputation, respond to feedback, and generate trust signals — which compound directly into Google rankings, AI engine recommendations, and conversion confidence for every new prospect.",
    color: "#2EA6D4",
  },
];

const visibilityFeatures = [
  {
    title: "AI SEO + AEO",
    desc: "Optimized for traditional search and AI answer engines — so you appear when ChatGPT, Perplexity, and Google AI recommend businesses like yours.",
    color: "#00A79D",
  },
  {
    title: "Paid Search + Meta Ads",
    desc: "Paid campaigns that feed into a system built to convert. Better ROI because the follow-up actually works this time.",
    color: "#00A79D",
  },
  {
    title: "Retargeting",
    desc: "Re-engage visitors who showed interest but didn't convert. Behavioral messaging brings them back at the right moment.",
    color: "#00A79D",
  },
];

export default function BehavioralEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B75BB]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2EA6D4]/10 border border-[#2EA6D4]/20 text-[#2EA6D4] text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2EA6D4] node-pulse" />
            The ActionPotential System
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Two engines. One outcome.
          </h2>
        </motion.div>

        {/* Two cards: Behavioral Engine + Visibility Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Behavioral Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6 sm:p-8"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#2EA6D4]/15 text-[#2EA6D4] mb-4">
              Core System
            </span>
            <h3 className="text-2xl font-black text-white mb-3">Behavioral Engine</h3>
            <p className="text-[#e8f4f8]/78 mb-6 leading-relaxed">
              Fixes how your business responds, follows up, and converts the demand you already
              have — before spending another dollar on visibility.
            </p>
            <div className="h-px bg-[#e8f4f8]/12 mb-6" />
            <ul className="space-y-4">
              {behavioralFeatures.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Circle
                    className="w-2 h-2 flex-shrink-0 mt-2"
                    style={{ color: item.color }}
                    fill={item.color}
                  />
                  <div>
                    <span className="font-semibold text-white">
                      {item.title}
                      {item.note && (
                        <span className="text-xs font-normal text-[#e8f4f8]/55 ml-1">
                          {item.note}
                        </span>
                      )}
                    </span>
                    <p className="text-sm text-[#e8f4f8]/75 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visibility Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-6 sm:p-8"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#00A79D]/15 text-[#00A79D] mb-4">
              Scale System
            </span>
            <h3 className="text-2xl font-black text-white mb-3">Visibility Engine</h3>
            <p className="text-[#e8f4f8]/78 mb-4 leading-relaxed">
              Gets you found by high-intent buyers — in search, AI answers, and paid channels.
              Most powerful once your Core System is in place.
            </p>
            <div className="p-4 rounded-xl bg-[#e8f4f8]/5 border border-[#e8f4f8]/10 mb-6">
              <p className="text-sm text-[#e8f4f8]/75 italic leading-relaxed">
                Reviews AI (Core) feeds this engine — more reviews means higher local rankings,
                stronger AI search presence, and more organic traffic before a single ad dollar is
                spent.
              </p>
            </div>
            <div className="h-px bg-[#e8f4f8]/12 mb-6" />
            <ul className="space-y-4">
              {visibilityFeatures.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <Circle
                    className="w-2 h-2 flex-shrink-0 mt-2"
                    style={{ color: item.color }}
                    fill={item.color}
                  />
                  <div>
                    <span className="font-semibold text-white">{item.title}</span>
                    <p className="text-sm text-[#e8f4f8]/75 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
