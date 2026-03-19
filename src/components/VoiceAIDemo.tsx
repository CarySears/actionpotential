"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mic } from "lucide-react";

export default function VoiceAIDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-widest text-[#e8f4f8]/60 mb-4">
              Behavioral AI + Conversational Design in Action
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              From static brochure to interactive conversion machine.
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[#e8f4f8]/82 leading-relaxed mb-4">
              Most website visitors bounce because they can&apos;t immediately find answers — and
              they won&apos;t fill out a form that might go into a black hole. What you&apos;re
              about to experience is the same conversational AI we build for our clients. It
              listens, asks questions, and books real appointments. No forms. No friction. No
              follow-up needed.
            </p>
            <p className="text-sm text-[#e8f4f8]/65 italic">
              This is what we build for your business — trained in your brand, tone of voice, and
              services. Running 24/7/365.
            </p>
          </motion.div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-8 sm:p-12 rounded-2xl border border-[#e8f4f8]/12 text-center max-w-3xl mx-auto"
        >
          <div className="w-14 h-14 rounded-full bg-[#e8f4f8]/10 border border-[#e8f4f8]/20 flex items-center justify-center mx-auto mb-6">
            <Mic className="w-7 h-7 text-[#79C5C7]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Talk to our AI receptionist
          </h3>
          <p className="text-[#e8f4f8]/75 mb-8 max-w-xl mx-auto">
            It&apos;ll ask about your business, answer your questions, and if it&apos;s a good fit
            — book a real call on our calendar.
          </p>
          <div className="rounded-xl border border-dashed border-[#e8f4f8]/30 bg-[#e8f4f8]/5 py-12 px-6">
            <p className="text-sm text-[#e8f4f8]/50 italic">[ Voice AI demo embed goes here ]</p>
          </div>
          <p className="text-xs text-[#e8f4f8]/55 italic mt-6">
            This is exactly what your clients and patients will experience on your website.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
