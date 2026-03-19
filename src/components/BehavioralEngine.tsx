"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const coreItems = [
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
    note: "also feeds Visibility ↓",
    desc: "Works with your existing clients to build 5-star reputation, respond to feedback, and generate trust signals — which compound directly into Google rankings, AI engine recommendations, and conversion confidence for every new prospect.",
  },
];

const scaleItems = [
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

export default function BehavioralEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B75BB]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two engine columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Core System */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A79D]/15 border border-[#00A79D]/25 text-[#00A79D] text-xs font-semibold uppercase tracking-wider mb-5">
              Core System
            </div>

            <h3 className="text-2xl font-black text-white mb-3">Behavioral Engine</h3>
            <p className="text-[#e8f4f8]/75 leading-relaxed mb-8">
              Fixes how your business responds, follows up, and converts the demand you
              already have — before spending another dollar on visibility.
            </p>

            <div className="space-y-6">
              {coreItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#00A79D] mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-white">{item.title}</span>
                    {item.note && (
                      <span className="text-xs text-[#e8f4f8]/45 ml-2">{item.note}</span>
                    )}
                    <p className="text-sm text-[#e8f4f8]/68 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Scale System */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2EA6D4]/15 border border-[#2EA6D4]/25 text-[#2EA6D4] text-xs font-semibold uppercase tracking-wider mb-5">
              Scale System
            </div>

            <h3 className="text-2xl font-black text-white mb-3">Visibility Engine</h3>
            <p className="text-[#e8f4f8]/75 leading-relaxed mb-6">
              Gets you found by high-intent buyers — in search, AI answers, and paid
              channels. Most powerful once your Core System is in place.
            </p>

            <div className="p-4 rounded-xl bg-[#79C5C7]/5 border border-[#79C5C7]/12 mb-8">
              <p className="text-xs text-[#e8f4f8]/60 italic leading-relaxed">
                Reviews AI (Core) feeds this engine — more reviews means higher local
                rankings, stronger AI search presence, and more organic traffic before a
                single ad dollar is spent.
              </p>
            </div>

            <div className="space-y-6">
              {scaleItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-[#2EA6D4] mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-white">{item.title}</span>
                    <p className="text-sm text-[#e8f4f8]/68 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
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
