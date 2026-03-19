"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const coreFeatures = [
  {
    title: "Voice AI Agent",
    desc: "Answers calls 24/7, books appointments, qualifies leads — human-sounding, never robotic. No missed calls, no lost voicemails.",
  },
  {
    title: "Conversational AI",
    desc: "Handles texts, emails, website chat, and DMs like a trained team member. Responds instantly, qualifies leads, and books calls.",
  },
  {
    title: "Behavioral follow-up sequences",
    desc: "Nurture sequences built on behavioral science — designed around how people actually make decisions, not just drip timing.",
  },
  {
    title: "Intelligent websites",
    desc: "We turn your static brochure into a dynamic conversion machine. Visitors bounce because they can't find answers and won't fill out forms that disappear into a black hole. Our AI employees converse with visitors 24/7/365 — answering questions, qualifying leads, and booking appointments. Trained in your business, brand, and tone of voice. Your website finally works as hard as you do.",
  },
  {
    title: "Reviews AI",
    subtitle: "also feeds Visibility ↓",
    desc: "Works with your existing clients to build 5-star reputation, respond to feedback, and generate trust signals — which compound directly into Google rankings, AI engine recommendations, and conversion confidence for every new prospect.",
  },
];

const scaleFeatures = [
  {
    title: "AI SEO + AEO",
    desc: "Optimized for traditional search and AI answer engines — so you appear when ChatGPT, Perplexity, and Google AI recommend businesses like yours.",
  },
  {
    title: "Paid Search + Meta Ads",
    desc: "Paid campaigns that feed into a system built to convert. Better ROI because the follow-up actually works this time.",
  },
  {
    title: "Retargeting",
    desc: "Re-engage visitors who showed interest but didn't convert. Behavioral messaging brings them back at the right moment.",
  },
];

export default function TwoEngines() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B75BB]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Core System — Behavioral Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden"
          >
            <div className="p-7 border-b border-[#79C5C7]/10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 text-[#79C5C7] text-xs uppercase tracking-wider mb-4">
                Core System
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Behavioral Engine</h3>
              <p className="text-[#e8f4f8]/72 text-sm leading-relaxed">
                Fixes how your business responds, follows up, and converts the demand you already
                have — before spending another dollar on visibility.
              </p>
            </div>

            <div className="divide-y divide-[#e8f4f8]/6">
              {coreFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="p-5 flex gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#79C5C7] flex-shrink-0 mt-2" />
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-white text-sm">{feature.title}</span>
                      {"subtitle" in feature && feature.subtitle && (
                        <span className="text-xs text-[#e8f4f8]/45 italic">{feature.subtitle}</span>
                      )}
                    </div>
                    <p className="text-xs text-[#e8f4f8]/65 mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scale System — Visibility Engine */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card overflow-hidden"
          >
            <div className="p-7 border-b border-[#2EA6D4]/10">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2EA6D4]/10 border border-[#2EA6D4]/20 text-[#2EA6D4] text-xs uppercase tracking-wider mb-4">
                Scale System
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Visibility Engine</h3>
              <p className="text-[#e8f4f8]/72 text-sm leading-relaxed">
                Gets you found by high-intent buyers — in search, AI answers, and paid channels.
                Most powerful once your Core System is in place.
              </p>
            </div>

            {/* Reviews AI feeds note */}
            <div className="mx-5 mt-5 p-4 rounded-xl bg-[#e8f4f8]/4 border border-[#e8f4f8]/10">
              <p className="text-xs text-[#e8f4f8]/55 italic leading-relaxed">
                Reviews AI (Core) feeds this engine — more reviews means higher local rankings,
                stronger AI search presence, and more organic traffic before a single ad dollar is
                spent.
              </p>
            </div>

            <div className="divide-y divide-[#e8f4f8]/6 mt-3">
              {scaleFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-5 flex gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#2EA6D4] flex-shrink-0 mt-2" />
                  <div>
                    <span className="font-semibold text-white text-sm">{feature.title}</span>
                    <p className="text-xs text-[#e8f4f8]/65 mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
