"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mic } from "lucide-react";

export default function VoiceAIDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-xs text-[#79C5C7] uppercase tracking-widest">
            Behavioral AI + Conversational Design in Action
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
              From static brochure
              <br />
              to interactive conversion
              <br />
              <span className="gradient-text">machine.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-[#e8f4f8]/80 leading-relaxed">
              Most website visitors bounce because they can&apos;t immediately find answers — and
              they won&apos;t fill out a form that might go into a black hole. What you&apos;re
              about to experience is the same conversational AI we build for our clients. It listens,
              asks questions, and books real appointments. No forms. No friction. No follow-up
              needed.
            </p>

            <p className="text-[#e8f4f8]/60 italic text-sm leading-relaxed">
              This is what we build for your business — trained in your brand, tone of voice, and
              services. Running 24/7/365.
            </p>
          </motion.div>
        </div>

        {/* Demo box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 glass-card p-10 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#e8f4f8]/8 border border-[#e8f4f8]/15 flex items-center justify-center">
              <Mic className="w-7 h-7 text-[#e8f4f8]/60" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3">Talk to our AI receptionist</h3>
          <p className="text-[#e8f4f8]/70 text-sm max-w-md mx-auto mb-6">
            It&apos;ll ask about your business, answer your questions, and if it&apos;s a good fit
            — book a real call on our calendar.
          </p>

          <p className="text-[#e8f4f8]/35 text-sm italic">[ Voice AI demo embed goes here ]</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-[#e8f4f8]/45 italic mt-5"
        >
          This is exactly what your clients and patients will experience on your website.
        </motion.p>
      </div>
    </section>
  );
}
