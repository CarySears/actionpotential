"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mic } from "lucide-react";

export default function ConversationalDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2EA6D4]/3 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-xs text-[#e8f4f8]/50 tracking-widest uppercase mb-8"
        >
          Behavioral AI + Conversational Design in Action
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          {/* Left: Headline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              From static brochure
              <br />
              to interactive{" "}
              <span className="gradient-text">conversion machine.</span>
            </h2>
          </motion.div>

          {/* Right: Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5"
          >
            <p className="text-[#e8f4f8]/80 leading-relaxed">
              Most website visitors bounce because they can&apos;t immediately find answers
              — and they won&apos;t fill out a form that might go into a black hole. What
              you&apos;re about to experience is the same conversational AI we build for
              our clients. It listens, asks questions, and books real appointments. No forms.
              No friction. No follow-up needed.
            </p>

            <p className="text-sm text-[#e8f4f8]/55 italic">
              This is what we build for your business — trained in your brand, tone of voice,
              and services. Running 24/7/365.
            </p>
          </motion.div>
        </div>

        {/* Demo embed card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card p-10 sm:p-14 text-center"
        >
          <div className="flex justify-center mb-5">
            <div className="w-16 h-16 rounded-full bg-[#79C5C7]/10 border border-[#79C5C7]/20 flex items-center justify-center">
              <Mic className="w-7 h-7 text-[#79C5C7]" />
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3">Talk to our AI receptionist</h3>
          <p className="text-sm text-[#e8f4f8]/70 max-w-lg mx-auto mb-8 leading-relaxed">
            It&apos;ll ask about your business, answer your questions, and if it&apos;s a
            good fit — book a real call on our calendar.
          </p>

          <div className="text-sm text-[#e8f4f8]/35 italic">
            [ Voice AI demo embed goes here ]
          </div>
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-sm text-[#e8f4f8]/50 italic mt-8"
        >
          This is exactly what your clients and patients will experience on your website.
        </motion.p>
      </div>
    </section>
  );
}
