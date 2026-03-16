"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Search, Workflow } from "lucide-react";

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="visibility-engine" className="relative py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00A79D]/[0.06] to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00A79D]/10 border border-[#00A79D]/20 text-[#00A79D] text-sm mb-6">
            <Search className="w-4 h-4" />
            Then scale visibility
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            Add growth channels
            <span className="gradient-text"> after conversion is fixed.</span>
          </h2>
          <p className="text-lg text-[#e8f4f8]/72 max-w-2xl mx-auto">
            Once your Behavioral Engine is running, we expand demand with ads, SEO, and AI search
            visibility.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-7"
          >
            <div className="w-10 h-10 rounded-xl border border-[#00A79D]/28 bg-[#00A79D]/10 flex items-center justify-center mb-4">
              <Workflow className="w-5 h-5 text-[#00A79D]" />
            </div>
            <h3 className="text-2xl font-bold text-white">Behavioral Engine</h3>
            <p className="text-sm text-[#e8f4f8]/72 mt-2 mb-5">
              Core system for handling and converting inbound demand.
            </p>
            <div className="space-y-2">
              {[
                "Speed-to-lead automation",
                "Conversational qualification",
                "Nurture sequences across channels",
                "Human handoff and pipeline visibility",
              ].map((item) => (
                <p key={item} className="text-sm text-[#e8f4f8]/84">
                  • {item}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-7"
          >
            <div className="w-10 h-10 rounded-xl border border-[#2EA6D4]/28 bg-[#2EA6D4]/10 flex items-center justify-center mb-4">
              <Compass className="w-5 h-5 text-[#2EA6D4]" />
            </div>
            <h3 className="text-2xl font-bold text-white">Visibility Engine</h3>
            <p className="text-sm text-[#e8f4f8]/72 mt-2 mb-5">
              Optional growth layer for qualified traffic and discoverability.
            </p>
            <div className="space-y-2">
              {[
                "SEO + AEO for modern search behavior",
                "Paid media for high-intent demand",
                "Local and reputation optimization",
                "Measurement tied to conversations and revenue",
              ].map((item) => (
                <p key={item} className="text-sm text-[#e8f4f8]/84">
                  • {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 rounded-2xl border border-[#79C5C7]/18 bg-[#79C5C7]/7 p-5"
        >
          <p className="text-sm sm:text-base text-[#e8f4f8]/84">
            Same philosophy across both engines: simple interfaces, clear decision paths, and
            systems that feel human.
          </p>
        </div>
      </div>
    </section>
  );
}
