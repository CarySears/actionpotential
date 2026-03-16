"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Bot, MessageSquareMore, PhoneCall, UserRoundCheck } from "lucide-react";

const stages = [
  {
    icon: PhoneCall,
    title: "Capture",
    desc: "Connect calls, forms, SMS, chat, and DMs in one stream.",
  },
  {
    icon: Bot,
    title: "Respond + qualify",
    desc: "Reply in seconds, ask smart questions, and prioritize high-intent leads.",
  },
  {
    icon: UserRoundCheck,
    title: "Handoff + nurture",
    desc: "Route the right lead to your team and maintain follow-up until they book.",
  },
];

export default function BehavioralEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="behavioral-engine" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1B75BB]/[0.06] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2EA6D4]/10 border border-[#2EA6D4]/20 text-[#2EA6D4] text-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2EA6D4] node-pulse" />
            The Behavioral Engine
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5">
            A response system built for
            <span className="gradient-text"> real-world teams.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/80 max-w-2xl mx-auto">
            We combine interaction design, behavioral science, and conversational AI so your
            inquiries become qualified conversations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-7 sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[#79C5C7]/80 mb-6">
              Core workflow
            </p>
            <div className="space-y-4">
              {stages.map((stage, i) => (
                <div key={stage.title}>
                  <div className="rounded-2xl border border-[#79C5C7]/18 bg-[#e8f4f8]/[0.02] p-4 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg border border-[#79C5C7]/28 bg-[#79C5C7]/12 flex items-center justify-center flex-shrink-0">
                      <stage.icon className="w-4 h-4 text-[#79C5C7]" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{stage.title}</p>
                      <p className="text-sm text-[#e8f4f8]/74 mt-1">{stage.desc}</p>
                    </div>
                  </div>
                  {i < stages.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowRight className="w-4 h-4 text-[#79C5C7]/45 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-7 sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[#2EA6D4]/85 mb-5">System diagram</p>
            <div className="rounded-2xl border border-[#2EA6D4]/20 bg-[#2EA6D4]/5 p-5">
              <div className="space-y-3">
                {[
                  "Visibility",
                  "Inquiry",
                  "Behavioral Engine",
                  "Sales conversation",
                  "Customer",
                ].map((node, i) => (
                  <div key={node} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#2EA6D4] node-pulse" />
                    <div className="rounded-lg border border-[#2EA6D4]/22 bg-[#0d1117]/45 px-3 py-2 flex-1 text-sm text-[#e8f4f8]/88">
                      {node}
                    </div>
                    {i < 4 && <ArrowRight className="w-4 h-4 text-[#2EA6D4]/55" />}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-[#79C5C7]/18 bg-[#79C5C7]/7 p-4">
              <p className="text-sm text-[#e8f4f8]/84 leading-relaxed">
                The point is simple: do not scale traffic into a weak response process. Build the
                conversion layer first.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3">
          {[
            "Fast response windows",
            "Behavior-based follow-up timing",
            "Clear human handoff logic",
          ].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card p-4 flex items-center gap-3"
            >
              <MessageSquareMore className="w-4 h-4 text-[#79C5C7] flex-shrink-0" />
              <p className="text-sm text-[#e8f4f8]/84">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
