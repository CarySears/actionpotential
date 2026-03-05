'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Play } from 'lucide-react';
import NeuralNetworkCanvas from './NeuralNetworkCanvas';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ap-dark">
      <div className="absolute inset-0 bg-gradient-to-b from-ap-dark via-ap-dark/95 to-ap-dark" />

      <NeuralNetworkCanvas
        className="z-0"
        nodeCount={80}
        connectionDistance={200}
        opacity={0.8}
        dark={true}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ap-dark/60 z-[1]" />

      <div className="relative z-10 container-narrow text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="mono-tag text-ap-teal-light/90 tracking-widest mb-6 block">
            Behavioral AI Marketing & Automation
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6"
        >
          From Potential…
          <br />
          <span className="gradient-text">to Action.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build AI-powered systems that acquire customers, convert leads, and
          scale your operations — through human-centered artificial intelligence
          rooted in behavioral science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#cta"
            className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-ap-teal to-ap-blue text-white font-semibold text-lg hover:shadow-xl hover:shadow-ap-teal/25 transition-all duration-300 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Schedule Your Free AI Audit
              <Play size={16} fill="currentColor" />
            </span>
          </a>
          <a
            href="#problem"
            className="px-8 py-4 rounded-full border border-white/20 text-white/90 font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-16 flex items-center justify-center gap-6 text-sm text-white/40"
        >
          <span className="mono-tag">Psychology</span>
          <span className="w-1 h-1 rounded-full bg-ap-teal-light/40" />
          <span className="mono-tag">AI</span>
          <span className="w-1 h-1 rounded-full bg-ap-teal-light/40" />
          <span className="mono-tag">Automation</span>
          <span className="w-1 h-1 rounded-full bg-ap-teal-light/40" />
          <span className="mono-tag">Growth</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-white/30" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
